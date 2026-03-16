# Business Model Learning <> MomTalk Integration — Design Spec

**Date:** 2026-03-16
**Status:** Approved
**Domain:** businessmodel.momtalk.ai
**Related modules:** kids-ceo, flomy-chat

---

## Overview

Integrate the Business Model Learning portal (businessmodel.momtalk.ai) with MomTalk's context management system. The portal delivers interactive business lessons; the MomTalk app provides kid profiles, AI mentoring (Momo), mission integration (kids_CEO), and spaced learning follow-ups.

## Architecture

```
MomTalk App (React Native / Expo)
├── business-model-learning module
│   ├── Zustand store (progress, spaced review queue, unlocked missions)
│   ├── Context extractor → contributes to FullContext
│   ├── Momo AI prompt: momo-business-mentor
│   ├── Event bus: emits lesson.completed, quiz.scored, review.due
│   ├── Listens: kids-ceo.mission.completed
│   └── Spaced learning scheduler
│
├── Launches portal via WebView or deep link
│   └── Passes: one-time auth code (exchanged for session token)
│
businessmodel.momtalk.ai (Vite + React + TypeScript)
├── Auth: one-time code from app OR 6-digit kid code
├── Adaptive content engine (age difficulty, interest theming, pacing)
├── Progress persistence: ALL access via Vercel API functions (never direct Supabase)
├── WebView bridge: postMessage for real-time app sync
└── Spaced review mini-quiz component
```

### Key Principle: Portal Never Talks to Supabase Directly

All database access from the portal goes through Vercel serverless functions (`/api/*`).
These functions use a Supabase service role key (server-side only). The portal client
has no Supabase credentials.

---

## 1. New Module: `business-model-learning`

### Registration

- **Slug:** `business-model-learning`
- **Category:** `business`
- **UI slots:** `home-card` (progress widget), `tab` (optional)
- **Dependencies:** `kids-ceo` (optional, for mission unlocks)
- **is_core:** false
- **is_premium:** false

### Zustand Store

```typescript
interface BusinessModelLearningState {
  profileId: string | null;
  childProgress: Record<string, ChildLessonProgress>;
  spacedReviewQueue: SpacedReviewItem[];
  unlockedMissions: UnlockedMission[];
  kidCodes: Record<string, KidCode>;

  // Actions
  loadProgress: (profileId: string) => Promise<void>;
  saveProgress: (childId: string, lessonId: string, data: LessonResult) => Promise<void>;
  scheduleReview: (childId: string, lessonId: string) => void;
  generateKidCode: (childId: string) => Promise<string>;
  getDueReviews: (childId: string) => SpacedReviewItem[];
}

interface ChildLessonProgress {
  childId: string;
  lessonsCompleted: string[];
  quizScores: Record<string, number>;       // lessonId → score 0-100
  currentLesson: string | null;
  totalXP: number;
  skillMastery: Record<string, number>;     // skill → mastery 0-1
  lastActiveAt: string;
}

interface SpacedReviewItem {
  id: string;
  lessonId: string;
  childId: string;
  nextReviewDate: string;                   // ISO date
  interval: number;                          // days
  repetition: number;                        // times reviewed
  easeFactor: number;                        // SM-2 algorithm
}

interface UnlockedMission {
  missionId: string;
  lessonId: string;
  childId: string;
  createdAt: string;
  status: 'pending' | 'accepted' | 'completed';
}

interface KidCode {
  code: string;
  childId: string;
  profileId: string;
  expiresAt: string;                         // 30-day expiry
}
```

### Context Extractor

```typescript
registerModuleContextExtractor({
  moduleSlug: 'business-model-learning',
  contextCategories: ['education', 'gamification', 'children'],
  extractContext: () => {
    const state = useBusinessModelStore.getState();
    // selectedChildId comes from MomTalk's global kidsMissionStore or app-level child selector
    const selectedChildId = useKidsMissionStore.getState().selectedChildId;
    const activeChild = selectedChildId ? state.childProgress[selectedChildId] : null;
    return {
      bizLessonsCompleted: activeChild?.lessonsCompleted.length ?? 0,
      bizCurrentLesson: activeChild?.currentLesson ?? null,
      bizTopSkill: getTopSkill(activeChild?.skillMastery),
      bizTotalXP: activeChild?.totalXP ?? 0,
      bizNextReviewDue: getNextDueReview(state.spacedReviewQueue, selectedChildId),
      bizLastQuizScore: getLastQuizScore(activeChild),
      bizLastLessonTitle: getLastLessonTitle(activeChild),
    };
  },
  relevantPrompts: ['momo-business-mentor', 'flomy-chat', 'flomy-greeting'],
});
```

### Event Bus

**Emits:**
- `business-model.lesson.completed` → `{ childId, lessonId, lessonTitle, score, xpEarned }`
- `business-model.quiz.scored` → `{ childId, lessonId, score, skillsAssessed }`
- `business-model.review.due` → `{ childId, lessonId, dueDate }`

**Listens:**
- `kids-ceo.mission.completed` → Check if mission was a business-model-unlocked mission, update `unlockedMissions` status

**Error handling:** Event emissions are fire-and-forget. If kids_CEO is not installed or the
listener throws, the lesson completion flow is not affected. Mission creation failures are
logged but do not block progress saving. The `try/catch` wraps only the mission creation,
not the core progress update.

---

## 2. Kid Authentication — Dual Mode

### Session Token Design

Both auth modes result in the same **session token** — an opaque token stored in the `bml_sessions`
Supabase table (accessed only by Vercel functions via service role key).

```typescript
interface BMLSession {
  token: string;               // crypto.randomUUID(), stored as primary key
  profileId: string;
  childId: string;
  childContext: {              // snapshot at session creation
    childName: string;
    childAge: number;
    interests: string[];
    personality: string[];
    ceoLevel: number;
    ceoPoints: number;
  };
  expiresAt: string;           // 24 hours from creation
  createdAt: string;
}
```

Portal stores the session token in `sessionStorage` (not localStorage — cleared on tab close).
Every `/api/*` call includes `Authorization: Bearer <sessionToken>`. Vercel functions validate
the token against the `bml_sessions` table.

### Mode A: App Launch (Primary)

1. Parent taps "Business Model Learning" module in MomTalk app.
2. App calls MomTalk backend (`/api/bml/create-session`) which generates:
   - A one-time auth code (UUID, 2-min expiry, stored in `bml_auth_codes` table)
   - The backend signs it — **no secrets in the mobile app bundle** (asymmetric: server signs, portal verifies via public key; or simpler: opaque code looked up server-side).
3. App opens `businessmodel.momtalk.ai/auth?code=<one-time-code>`.
4. Portal's `/api/auth/code` endpoint:
   - Looks up the one-time code in `bml_auth_codes`
   - Validates it's not expired and not yet used
   - Marks it as used (single-use)
   - Creates a `BMLSession` (24-hour expiry)
   - Returns `{ sessionToken, childContext }`
5. Portal stores session token in `sessionStorage`, strips code from URL via `history.replaceState()`.
6. **WebView bridge:** If running in WebView, portal also posts session confirmation:
   ```typescript
   window.ReactNativeWebView?.postMessage(JSON.stringify({
     type: 'bml.session.created',
     payload: { childId, status: 'ok' }
   }));
   ```

### Mode B: Kid Code (Standalone)

1. Parent opens MomTalk → Business Model Learning settings → "Generate Kid Code."
2. App creates a 6-character alphanumeric code (uppercase, no ambiguous chars like 0/O/1/I/L — charset: `ABCDEFGHJKMNPQRSTUVWXYZ23456789`, 30 chars, ~30^6 = 729M combinations).
3. Code stored in Supabase `module_data` with key `kid-code:<code>`, value `{ profileId, childId, expiresAt }`. 30-day expiry. Codes are reusable within the expiry window.
4. Kid visits portal → types code on landing page.
5. Portal calls `POST /api/auth/kid-code` → Vercel function:
   - Looks up code in Supabase (service role key)
   - **Rate limiting:** Max 5 failed attempts per IP per 10 minutes (Upstash Redis or Vercel KV). Returns 429 after limit.
   - If valid: creates a `BMLSession` (24-hour expiry), returns `{ sessionToken, childContext }`
   - If invalid: returns 401 with generic "Invalid code" message (no enumeration hints)
6. Portal stores session token in `sessionStorage`.

### Guest Mode (No Auth)

- Portal still works without login.
- Default: age 7, generic examples, no progress saved to server.
- Progress stored in `localStorage` only.
- After first quiz: "Want to save your progress?" prompt with options:
  - "Open from MomTalk app" (instructions)
  - "Enter your kid code" (code input)
  - "Continue as guest" (dismiss)

### Security Notes

- **No secrets in mobile app:** Auth codes are generated server-side. The mobile app never holds signing keys.
- **No PII in URLs:** One-time codes are opaque UUIDs, not JWTs containing child data. Codes are stripped from URL after use.
- **Rate limiting:** Kid code endpoint is rate-limited to prevent brute force.
- **Session scope:** Session tokens grant access only to the specific child's business model progress — no broader Supabase access.

---

## 3. Adaptive Content Engine

Three layers, all driven by child context received at session start.

### Layer 1: Age-Based Difficulty

| Property | Ages 5-6 | Ages 7-8 | Ages 9-12 |
|---|---|---|---|
| Vocabulary | Simple, emoji-heavy | Business terms introduced with definitions | Full business language |
| Quiz style | Tap-to-pick, 2-3 options | Multiple choice, 4 options | Open-ended + calculations |
| Content depth | Story-driven concepts | Concepts + basic numbers | Full analysis, real math |
| Lesson length | 5-8 screens | 8-12 screens | 12-15 screens |
| Momo presence | Constant guide | Intro + check-ins | Available on-demand |

Implementation: Each lesson component receives a `difficultyLevel: 'easy' | 'medium' | 'hard'` prop derived from `childAge`.

### Layer 2: Interest Theming

Child's `interests[]` from MomTalk profile drive example selection.

```typescript
interface ThemeContext {
  childName: string;
  interests: string[];
  personality: string[];
  examples: ThemedExample[];    // pre-selected based on interests
}

// Example mapping
const INTEREST_THEMES: Record<string, LessonTheme> = {
  'robotics': { items: ['LEGO Mindstorms set', 'Arduino kit', 'Robot arm'], currency: 'tech tokens' },
  'monster-trucks': { items: ['Monster Jam truck', 'Hot Wheels set', 'Racing helmet'], currency: 'fuel points' },
  'costumes': { items: ['Spider-Man suit', 'Batman cape', 'Princess dress'], currency: 'costume coins' },
  'swimming': { items: ['Goggles', 'Swim fins', 'Pool float'], currency: 'splash points' },
  // ... more themes
};
```

Fallback: If no matching interests, use generic kid-friendly examples (toys, snacks, games).

Implementation: `themeContext` object passed to lesson components. Components use `themeContext.examples[0]` instead of hardcoded items.

### Layer 3: Adaptive Pacing

Based on quiz performance stored in `skillMastery`.

- Score > 80%: Skip review section, unlock bonus content (advanced tip, real-world challenge).
- Score 50-80%: Normal flow, review section included.
- Score < 50%: Extra practice round with simplified questions before advancing.
- `skillMastery` per concept (pricing, marketing, customer_service, supply_chain, branding, operations): 0.0 to 1.0, updated after each quiz using weighted moving average.

---

## 4. Follow-Up System

### Part A: Momo Nudges

New prompt registered in MomTalk's prompt system:

```typescript
{
  id: 'momo-business-mentor',
  category: 'interaction',
  template: `You are Momo, {{childName}}'s friendly business mentor from the Business Model Learning Lab.

Context:
- {{childName}} is {{childAge}} years old
- Recently completed: {{bizLastLessonTitle}}
- Last quiz score: {{bizLastQuizScore}}%
- Strongest business skill: {{bizTopSkill}}
- Total business XP: {{bizTotalXP}}
- Time: {{timeOfDay}}, {{isWeekend ? 'weekend' : 'weekday'}}

Instructions:
- Give a brief, encouraging follow-up (2-3 sentences max)
- Connect their lesson to something real they could try today
- If weekend, suggest a hands-on mini-project
- Match vocabulary to their age
- If they have a review due, gently mention it
- Never pressure, always encourage`,
  contextRequirements: {
    required: ['children', 'temporal'],
    optional: ['moduleContext:business-model-learning', 'moduleContext:kids-ceo', 'mood'],
    exclude: [],
  },
}
```

Trigger: Momo references business lessons in Flomy chat when `bizLessonsCompleted > 0` in context. Not every message — only when contextually relevant (e.g., kid asks about money, parent discusses activities, time-of-day suggests project time).

### Part B: kids_CEO Mission Unlocks

When `business-model.lesson.completed` fires, create a mission in kids_CEO:

```typescript
const LESSON_MISSIONS: Record<string, MissionTemplate> = {
  'garage-sale': {
    title: 'Host a Real Garage Sale',
    description: 'Put your business skills to work! Plan and run a real garage sale.',
    category: 'operations',
    steps: [
      { title: 'Pick 10 items to sell', description: 'Walk through your room and find things you no longer use' },
      { title: 'Price each item', description: 'Use what you learned about pricing — think about what buyers would pay' },
      { title: 'Make signs and ads', description: 'Create at least 2 posters and tell 3 neighbors' },
      { title: 'Set up your stand', description: 'Organize items neatly with prices visible' },
      { title: 'Run the sale and count earnings', description: 'Be friendly, make change, and track what sells' },
    ],
    rewardMoney: 5.00,
    rewardPoints: 100,
    difficulty: 3,
  },
  'chick-fil-a': {
    title: 'Customer Service Challenge',
    description: 'Practice "my pleasure" service for one whole day!',
    category: 'team',
    steps: [
      { title: 'Greet 5 people with a smile today', description: 'Family, neighbors, or store workers' },
      { title: 'Say "my pleasure" instead of "you\'re welcome"', description: 'Try it at least 3 times' },
      { title: 'Help someone without being asked', description: 'Notice what people need and offer help' },
    ],
    rewardMoney: 0,
    rewardPoints: 75,
    difficulty: 2,
  },
  'lemonade-stand': {
    title: 'Run a Lemonade Stand This Weekend',
    description: 'Calculate costs, set prices, and sell real lemonade!',
    category: 'finance',
    steps: [
      { title: 'Calculate ingredient costs', description: 'Lemons, sugar, cups — how much does one glass cost to make?' },
      { title: 'Set your price', description: 'Price higher than cost — that\'s your profit margin!' },
      { title: 'Pick your location', description: 'Where do the most people walk by?' },
      { title: 'Make and sell', description: 'Track every sale and count your profit at the end' },
    ],
    rewardMoney: 3.00,
    rewardPoints: 150,
    difficulty: 3,
  },
};
```

Implementation: Listen to event → call `moduleBus.emit('kids-ceo.mission.create', missionData)`. Mission appears in kids_CEO with a "From: Business Model Lab" badge.

### Part C: Spaced Learning

SM-2 algorithm (simplified):

```typescript
function scheduleReview(item: SpacedReviewItem, score: number): SpacedReviewItem {
  // score: 0-5 (0=complete blackout, 5=perfect recall)
  const quality = Math.round((score / 100) * 5);

  if (quality < 3) {
    // Failed review — reset
    return { ...item, repetition: 0, interval: 1, nextReviewDate: addDays(now, 1) };
  }

  const newRepetition = item.repetition + 1;
  let newInterval: number;

  if (newRepetition === 1) newInterval = 1;
  else if (newRepetition === 2) newInterval = 3;
  else newInterval = Math.round(item.interval * item.easeFactor);

  const newEase = Math.max(1.3,
    item.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  return {
    ...item,
    repetition: newRepetition,
    interval: newInterval,
    easeFactor: newEase,
    nextReviewDate: addDays(now, newInterval),
  };
}
```

Review schedule after lesson completion: 1 day → 3 days → 1 week → 2 weeks → 1 month.

Review delivery channels:
1. **Portal:** "Review Due" badge on module card, mini-quiz (3 questions from the lesson).
2. **App notification:** Push notification from MomTalk: "Time for a quick business review!"
3. **Momo nudge:** In Flomy chat, Momo mentions: "Want to do a quick review of your Garage Sale lesson?"

---

## 5. Data Flow

### Lesson Completion Flow

**Path 1 — WebView (instant, via postMessage bridge):**
```
1. Kid completes lesson on portal
2. Portal → POST /api/progress (saves to Supabase via Vercel function)
3. Portal → window.ReactNativeWebView.postMessage({ type: 'bml.lesson.completed', payload })
4. MomTalk WebView handler receives message → updates Zustand store
5. Context cache invalidated
6. moduleBus.emit('business-model.lesson.completed', payload)
7. kids_CEO listener → creates real-world mission
8. Spaced learning scheduler → queues first review at +1 day
```

**Path 2 — System browser / app not running (deferred sync):**
```
1. Kid completes lesson on portal
2. Portal → POST /api/progress (saves to Supabase via Vercel function)
3. Next time MomTalk app comes to foreground:
   - businessModelStore.loadProgress() re-fetches from Supabase
   - Detects new completions since last sync
   - Fires pending events (lesson.completed, etc.)
   - kids_CEO missions created, spaced reviews queued
4. Additionally: Supabase realtime subscription (if active) provides faster sync
```

**Foreground sync fallback:** The store's `loadProgress()` is called on `app.foreground` event
(via AppState listener). This ensures sync even if realtime subscription was disconnected.
Realtime is an optimization, not a requirement.

### Portal Error & Offline Handling

- All `/api/progress` writes are **optimistic**: save to localStorage first, then POST to API.
- If the API call fails (network error, 500), the portal retries up to 3 times with exponential backoff.
- If all retries fail, progress stays in localStorage and syncs on next successful API call.
- **Session expiry**: If a 401 is returned, the portal shows a friendly "Session expired" screen with options to re-enter kid code or relaunch from app. No data is lost (localStorage backup).

### New Supabase Tables (Phase 2 prerequisite)

```sql
-- Session tokens for portal auth (service role access only, no RLS)
CREATE TABLE bml_sessions (
  token UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES profiles(id),
  child_id UUID NOT NULL,
  child_context JSONB NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_bml_sessions_expires ON bml_sessions(expires_at);

-- One-time auth codes from app launch (service role access only, no RLS)
CREATE TABLE bml_auth_codes (
  code UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES profiles(id),
  child_id UUID NOT NULL,
  child_context JSONB NOT NULL,
  used BOOLEAN NOT NULL DEFAULT false,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_bml_auth_codes_expires ON bml_auth_codes(expires_at);

-- Cleanup: Supabase cron or pg_cron to purge expired rows daily
-- DELETE FROM bml_sessions WHERE expires_at < now();
-- DELETE FROM bml_auth_codes WHERE expires_at < now();
```

Both tables use RLS disabled (service role only access from Vercel functions).
The app's own Supabase client never queries these tables directly.

### Progress Sync (Supabase)

```
module_data rows:
  { profile_id, module_slug: 'business-model-learning', data_key: 'progress:<childId>', data_value: ChildLessonProgress }
  { profile_id, module_slug: 'business-model-learning', data_key: 'reviews:<childId>', data_value: SpacedReviewItem[] }
  { profile_id, module_slug: 'business-model-learning', data_key: 'kid-code:<code>', data_value: { profileId, childId, expiresAt } }
```

---

## 6. Portal Changes

### New API Endpoints (Vercel Serverless)

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/auth/code` | POST | Exchange one-time auth code from app for session + child context |
| `/api/auth/kid-code` | POST | Validate kid code, return session + child context |
| `/api/progress` | GET | Fetch child progress (requires session) |
| `/api/progress` | POST | Save lesson result (requires session) |
| `/api/reviews` | GET | Fetch due reviews for child |

### New Hooks

- `useChildContext()` — Fetches child context from auth code or kid code, caches in React state. Returns `{ child, isGuest, isLoading }`.
- `useProgress()` — CRUD operations on Supabase progress data. Returns `{ progress, saveLesson, getQuizScore }`.
- `useAdaptive()` — Derives `difficultyLevel`, `themeContext`, and `pacing` from child context.

### New Components

- `KidCodeEntry` — Landing page code input (6-char, large buttons, kid-friendly).
- `SpacedReviewQuiz` — Mini-quiz component (3 questions, reuses existing quiz UI patterns).
- `ProgressBar` — Per-lesson and overall progress visualization.
- `MomoMentorBubble` — Momo speech bubble with contextual tips during lessons.

### Lesson Component Changes

Existing lesson components (GarageSale, ChickFilA) receive new props:

```typescript
interface LessonProps {
  difficultyLevel: 'easy' | 'medium' | 'hard';
  themeContext: ThemeContext;
  childContext: ChildContext | null;
  onComplete: (result: LessonResult) => void;
}
```

Components use these to:
- Select vocabulary variants
- Pick themed examples
- Adjust quiz difficulty
- Report completion

---

## 7. MomTalk App Changes

### New Files

- `stores/businessModelStore.ts` — Zustand store (state + actions + context extractor)
- `lib/prompts/businessModelPrompts.ts` — Momo business mentor prompt template
- `lib/modules/businessModelMissions.ts` — Mission templates + event listener

### Modified Files

- `lib/prompts/definitions.ts` — Register `momo-business-mentor` prompt
- `lib/modules/eventBus.ts` — Add business-model event types to union
- `app/modules/` — New `business-model-learning.tsx` module screen (launch portal, show progress, manage kid codes)
- `stores/pocketModuleStore.ts` — Register business-model-learning module

### Module Screen (in-app)

The in-app module screen shows:
- Per-child progress cards (lessons completed, XP, skill radar)
- "Open Learning Lab" button (launches portal with JWT)
- Kid code management (generate, view, revoke)
- Upcoming reviews with "Start Review" button
- Unlocked missions (links to kids_CEO)

---

## 8. Guest Mode

When no auth is present:
- Portal works normally with default settings (age 7, generic examples)
- Progress stored in localStorage only (not synced)
- After first quiz: "Want to save your progress?" prompt with options:
  - "Open from MomTalk app" (instructions)
  - "Enter your kid code" (code input)
  - "Continue as guest" (dismiss)

---

## 9. Vercel Config Changes

Update `vercel.json` to support the integration:

1. **Remove `X-Frame-Options: SAMEORIGIN`** — it blocks WebView embedding from the MomTalk app.
   Replace with CSP `frame-ancestors` directive:
   ```json
   { "key": "Content-Security-Policy", "value": "frame-ancestors 'self' momtalk://* exp://*" }
   ```

2. **Add CORS for `/api` routes** (if needed for cross-origin fetch from app):
   ```json
   { "source": "/api/(.*)", "headers": [
     { "key": "Access-Control-Allow-Origin", "value": "https://momtalk.ai" },
     { "key": "Access-Control-Allow-Methods", "value": "GET, POST, OPTIONS" },
     { "key": "Access-Control-Allow-Headers", "value": "Content-Type, Authorization" }
   ]}
   ```

---

## 10. Data Versioning

All JSON blobs stored in `module_data` include a `schemaVersion` field:

```typescript
interface VersionedData<T> {
  schemaVersion: number;     // increment on breaking changes
  data: T;
}
```

On read, the store checks `schemaVersion` and runs migration functions if needed.
This prevents breaking existing data when interfaces evolve.

---

## 11. Implementation Phases

| Phase | Scope | Depends on |
|---|---|---|
| **1** | Guest mode: localStorage progress, no auth | — |
| **2** | Vercel API functions + Supabase connection + session management | Phase 1 |
| **3** | App launch auth (one-time code) + kid code auth | Phase 2 |
| **4** | Adaptive content Layer 1 (age-based difficulty) + Layer 3 (pacing) | Phase 1 |
| **5** | MomTalk app module (Zustand store, context extractor, event bus) | Phase 2, 3 |
| **6** | WebView bridge (postMessage sync) | Phase 3, 5 |
| **7** | Momo nudges (prompt template) | Phase 5 |
| **8** | kids_CEO mission unlocks | Phase 5 |
| **9** | Spaced learning (SM-2 scheduler + review quiz) | Phase 2, 5 |
| **10** | Interest theming (Layer 2) — deferred, lower priority | Phase 4 |

**MomoMentorBubble** on the portal uses canned messages (pre-written tips per lesson step),
not live AI calls. AI-powered Momo lives in the MomTalk app's Flomy chat only.

---

## 12. Unchanged

- Portal visual design, MomTalk styling, all existing CSS
- Module card grid on portal landing page
- Existing lesson content (Garage Sale levels, Chick-fil-A video + quiz)
- Coming Soon modules on portal
- Footer, Header components
- Vercel deployment config
