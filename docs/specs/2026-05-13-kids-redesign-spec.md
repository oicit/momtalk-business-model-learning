# Spec & Implementation Plan: Kids' Adventure Redesign

**Date:** 2026-05-13
**Companion to:** `docs/plans/2026-05-13-kids-friendly-redesign.md`
**Owner:** TBD

---

## 0. What I learned about the current code (1-page baseline)

Before any redesign, here's what we have today:

| File | LOC | What it does |
|---|---|---|
| `src/pages/Portal.tsx` | 651 | Tile grid of 6 modules (2 live, 4 "coming soon"). Already has per-module gradients. |
| `src/pages/ChickFilAPage.tsx` | 509 | Hardcoded `KEY_LESSONS[]`, tap-to-expand, multi-question quiz, adaptive content. |
| `src/pages/GarageSalePage.tsx` | (similar) | Same pattern. |
| `src/components/MomoMentorBubble.tsx` | 107 | Mood-less mascot. Tips keyed by `lessonId × step × difficultyLevel`. |
| `src/hooks/useAdaptive.ts` | — | `difficultyLevel` (easy/medium/hard) + `themeContext`. |
| `src/hooks/useProgress.ts` | — | `completeLesson()`, `isCompleted()`, `getScore()`. Synced to Supabase. |
| `src/hooks/useSpacedReview.ts` | — | `scheduleReview()` for spaced repetition. |
| `src/lib/difficulty.ts` | — | `adaptText()`, `getDifficultyConfig()`, `getPacing()`. |

**Key infrastructure we must NOT break:**

1. **Adaptive content engine** — every text is run through `adaptText(text, difficultyLevel)` and the system picks easy/medium/hard wording. We must keep this when refactoring.
2. **Supabase progress sync** — `completeLesson` writes to a Postgres row keyed by child. The new card system has to fit alongside it, not replace it.
3. **Auth/kid-code gate** — `AuthGuard` + `KidCodeEntry` wrap protected routes. Don't remove.
4. **Spaced review** — schedules cards/lessons for re-quiz at intervals. Should hook into the new lesson lifecycle.

---

## 1. Goals & non-goals

### Goals
- **G1.** Adopt the kids' visual language (Fredoka + chunky borders + offset shadows + per-topic pastels) consistently across the app.
- **G2.** Replace the tile-grid Portal with a board-game map that reads as "an adventure" not "a menu."
- **G3.** Standardize the lesson scaffold so future lessons are data, not pages.
- **G4.** Add a collectible-card reward layer (12 cards minimum) without disrupting existing progress/score.
- **G5.** Add a personalized printable certificate at completion.

### Non-goals (this iteration)
- **N1.** Replace the auth or kid-code system.
- **N2.** Change the adaptive difficulty engine. It stays; we just style its output.
- **N3.** Rewrite Supabase schema beyond adding one `cards_earned` table.
- **N4.** Touch the RN momtalk app. Web only.
- **N5.** Build all 6 "coming soon" lessons. We'll convert the 2 live ones (Chick-fil-A, Garage Sale) and ship.
- **N6.** Implement spaced review changes — keep current behavior.

---

## 2. Phase deliverables

Five phases, each independently shippable.

---

### Phase 1 — Design system foundation
**Effort:** 1 day. **Risk:** very low. **Visible change:** none yet.

#### New files

```
src/styles/kidsTokens.ts
src/styles/kidsGlobals.css
src/components/kids/MCard.tsx
src/components/kids/Pill.tsx
src/components/kids/TapCard.tsx
src/components/kids/FadeIn.tsx
src/components/kids/Emo.tsx
src/lib/anim.ts
```

#### Specs

**`src/styles/kidsTokens.ts`** — color palette + per-topic themes.

```ts
export const T = {
  green:    '#166534',
  pink:     '#FF65C5',
  yellow:   '#FFCB65',
  blue:     '#65C9FF',
  lavender: '#7C5CFC',
  coral:    '#FF6B6B',
  mint:     '#CCFBF1',
  canvas:   '#FFF3EC',
  text:     '#1E293B',
  sub:      '#64748B',
};

export type LessonTheme = {
  accent: string;
  bg: string;          // gradient CSS
  cardBg?: string;
};

export const themes: Record<string, LessonTheme> = {
  // 12 entries: money, business, company, stocks, bonds, saving,
  // taxes, budget, entrepreneur, supply, debt, inflation
  // + 2 product-specific: chick-fil-a, garage-sale
};
```

**`src/styles/kidsGlobals.css`** — global Fredoka font + scrollbar + emoji sizing rules.
Loaded once at app entry.

```css
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');
html.kids-mode body { font-family: 'Fredoka', sans-serif; }
html.kids-mode .num { font-family: 'Space Mono', monospace; }
img.emoji { height: 1.3em; width: 1.3em; ... }
```

`.kids-mode` class on `<html>` is toggled by a feature flag so we can roll out gradually.

**`src/lib/anim.ts`** — two hooks + one component, ported from the inspiration file with proper TS types.

```ts
export function useStaggered(trigger: boolean, count: number, delayMs?: number): boolean[];
export function useAnimStep(active: boolean, total: number, periodMs?: number): number;
export function useTwemoji<T extends HTMLElement>(): React.RefObject<T>;
```

**`<FadeIn show delay>` / `<MCard>` / `<Pill>` / `<TapCard>` / `<Emo size>`** — pure presentational components, no business logic. Stories/snapshots for each.

#### Acceptance criteria
- [ ] All 5 primitives render with stories in Storybook (or a `/dev/kids` route).
- [ ] `useTwemoji()` parses emojis to Twemoji SVG in a target ref.
- [ ] Fredoka font loads; no FOUT.
- [ ] Toggling `.kids-mode` on `<html>` changes typography globally without breaking existing pages.
- [ ] All new files have TS types; `npm run typecheck` passes.

---

### Phase 2 — Mascot v2 (Momo)
**Effort:** 1 day. **Risk:** low. **Visible change:** Momo gets a face.

#### Files changed

```
src/components/MomoMentorBubble.tsx    (refactor, ~107 → ~200 LOC)
src/components/kids/Momo.tsx           (new — visual presentation)
```

#### Spec

`MomoMentorBubble.tsx` keeps its current API and content matrix (`MOMO_TIPS[lessonId][step][difficulty]`) — it stays the *content* layer.

Add `<Momo>` as the *visual* layer:

```tsx
type MomoMood =
  | 'happy' | 'excited' | 'thinking' | 'celebrating'
  | 'encouraging' | 'sad' | 'cool' | 'love';

interface MomoProps {
  mood?: MomoMood;
  msg?: string;
  size?: number;            // default 60
  style?: React.CSSProperties;
  inline?: boolean;         // if true, no speech bubble
}
```

Visual:
- Circular avatar, `T.pink` background, 3px `T.green` border, 3px offset shadow.
- Center: the mascot emoji (configurable — current `MomoMentorBubble` uses a momtalk emoji, keep that).
- Mood badge: small white circle bottom-right with the mood emoji, 2px green border.
- Speech bubble: white, 3px green border, asymmetric radius (`18px 18px 18px 4px` — squared tail bottom-left), max-width 320px, name in pink prefix.

Then `MomoMentorBubble.tsx` becomes:

```tsx
export default function MomoMentorBubble(props) {
  const { lessonId, step, difficulty, childName, mood = 'happy' } = props;
  const msg = MOMO_TIPS[lessonId]?.[step]?.[difficulty] ?? '';
  const personalized = childName ? msg.replace(/^Hi!/, `Hi, ${childName}!`) : msg;
  return <Momo mood={mood} msg={personalized} />;
}
```

Add an optional `mood?: MomoMood` prop. Each existing page can stay using `<MomoMentorBubble lessonId step difficulty />` unchanged — visually upgraded for free.

#### Acceptance criteria
- [ ] Visual matches inspiration's `Penny` component (circular avatar + bubble).
- [ ] 8 moods render distinct badges.
- [ ] Existing `MomoMentorBubble` callers still work without code change.
- [ ] Speech bubble truncates gracefully at long content.

---

### Phase 3 — Board-game map (new Portal)
**Effort:** 2-3 days. **Risk:** medium (replaces the home screen). **Visible change:** huge.

#### Files changed

```
src/pages/Portal.tsx              (replace; keep route mount)
src/pages/Portal.tiles.tsx        (extract old tile-grid Portal here as fallback)
src/components/kids/BoardMap.tsx  (new)
src/components/kids/MapStop.tsx   (new)
src/data/portalStops.ts           (new — data-driven map)
```

#### Spec

`src/data/portalStops.ts`:

```ts
export type MapStop = {
  id: string;
  emoji: string;
  title: string;
  color: string;       // T.* token
  themeKey: keyof typeof themes;
  path: string;        // route to navigate to
  status: 'available' | 'coming-soon';
  // optional — connects to existing progress
  progressKey?: string;  // matches useProgress's lesson id
};

export const portalStops: MapStop[] = [
  { id: 'start',        emoji: '🏁', title: 'Start!',          color: T.yellow,   path: '/portal/intro',       status: 'available' },
  { id: 'garage-sale',  emoji: '🏷️', title: 'Garage Sale',     color: T.pink,     path: '/garage-sale',         status: 'available', progressKey: 'garage-sale' },
  { id: 'chick-fil-a',  emoji: '🐔', title: 'Chick-fil-A',     color: T.coral,    path: '/chick-fil-a',         status: 'available', progressKey: 'chick-fil-a' },
  { id: 'lemonade',     emoji: '🍋', title: 'Lemonade Stand',  color: T.yellow,   path: '/lemonade-stand',      status: 'coming-soon' },
  // ... etc
];
```

`<BoardMap>` props:

```ts
interface BoardMapProps {
  stops: MapStop[];
  visitedIds: Set<string>;        // from useProgress
  onStopTap: (stop: MapStop) => void;
}
```

Layout:
- Stops arranged in zigzag rows of 4 (5–6 rows for 24 stops). Use CSS Grid.
- Connecting dashed yellow path between stops (SVG behind the grid).
- Each `<MapStop>`: 80×80 rounded card (use `<TapCard>` primitive), emoji centered, label below.
- Visited stops: green checkmark badge top-right, slight saturation boost.
- Coming-soon stops: greyed, locked padlock icon, no click handler.
- Stagger reveal on mount (`useStaggered`, 40ms per stop).

Header above map:
- `<Momo mood="excited" msg="...">` with one of three messages:
  - 0 visited: "Let's start your money adventure!"
  - 1–N-1 visited: "You're doing great! Keep going!"
  - All visited: `mood='celebrating'`, "WOW! You visited every stop!"
- Progress bar: `${visited.size} / ${stops.length} stops`.

Coming-soon stops show a tooltip on tap: "Coming soon! 🚀"

#### Acceptance criteria
- [ ] All current routes still work — clicking a stop navigates to the existing lesson page.
- [ ] Visited state syncs from `useProgress` — completed lessons show checkmarks.
- [ ] Mobile responsive (zigzag becomes vertical column on narrow screens).
- [ ] Coming-soon stops can't be navigated.
- [ ] Falls back to `Portal.tiles.tsx` if `?legacy=1` in URL (for QA).

---

### Phase 4 — Lesson scaffold + ChickFilA refactor
**Effort:** 3-4 days. **Risk:** medium-high (rewrites a big page). **Visible change:** lesson UX completely rebuilt.

#### Files changed

```
src/components/kids/LessonScaffold.tsx       (new)
src/components/kids/StoryBeat.tsx            (new)
src/components/kids/ConceptCard.tsx          (new)
src/components/kids/MiniGameSlot.tsx         (new — placeholder, real games in Phase 6)
src/data/lessons/chick-fil-a.ts              (new — extract content as data)
src/pages/ChickFilAPage.tsx                  (rewrite, 509 → ~120 LOC)
src/pages/ChickFilAPage.legacy.tsx           (preserve old version as fallback)
```

#### Spec

`src/data/lessons/chick-fil-a.ts`:

```ts
import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'chick-fil-a',
  themeKey: 'chick-fil-a',
  title: { easy: 'Chick-fil-A!', medium: 'How Chick-fil-A Works', hard: 'Chick-fil-A: A Service Empire' },
  beats: [
    {
      kind: 'intro',
      momo: { mood: 'excited',
              text: { easy: '...', medium: '...', hard: '...' } },
    },
    {
      kind: 'concept-cards',
      cards: [
        { emoji: '🐄', title: 'Quality Ingredients',
          desc: { easy: '...', medium: '...', hard: '...' },
          color: '#FFE5EC' },
        // ...5 more
      ],
    },
    { kind: 'mini-game', game: 'service-tap' },     // Phase 6
    { kind: 'card-reward', cardId: 'service-pro' },
    { kind: 'quiz', questions: [ /* multi-choice */ ] },
    { kind: 'outro', momo: { mood: 'celebrating', ... } },
  ],
  cardReward: { id: 'chickfila-master', emoji: '🐔', title: 'Chicken Champion',
                fact: 'Chick-fil-A says "my pleasure!" — every time!',
                color: '#FFE5EC', rarity: 'Common' },
};
export default lesson;
```

`<LessonScaffold>` walks the `beats[]` array and renders each:
- `intro` → `<Momo>` only.
- `concept-cards` → grid of `<ConceptCard>` (the kid taps each to expand, like the existing UX).
- `mini-game` → `<MiniGameSlot type={game}>`.
- `card-reward` → `<CardEarnedToast>` (Phase 5).
- `quiz` → existing quiz component, wrapped in scaffold styling.
- `outro` → `<Momo mood="celebrating">` + next-stop button.

Adaptive content: every `text` field is `Record<DifficultyLevel, string>`. Scaffold reads `useAdaptive()` and picks the right one. No `adaptText()` wrapping needed — content is pre-authored at all 3 levels.

`ChickFilAPage.tsx` becomes:

```tsx
import lesson from '../data/lessons/chick-fil-a';
import LessonScaffold from '../components/kids/LessonScaffold';
import AuthGuard from '../components/AuthGuard';

export default function ChickFilAPage() {
  return (
    <AuthGuard>
      <LessonScaffold lesson={lesson} />
    </AuthGuard>
  );
}
```

`useProgress.completeLesson('chick-fil-a', score)` is called from the scaffold's quiz beat — same as today.

#### Acceptance criteria
- [ ] Existing quiz scoring + progress sync unchanged.
- [ ] Difficulty levels still pick easy/medium/hard text.
- [ ] All current Chick-fil-A copy preserved (moved verbatim into `chick-fil-a.ts`).
- [ ] `?legacy=1` URL param loads `ChickFilAPage.legacy.tsx`.
- [ ] Page mounts in <300ms; no console errors.

---

### Phase 5 — Card collection system
**Effort:** 2 days. **Risk:** low. **Visible change:** new screen + toast.

#### Files changed

```
src/data/cards.ts                              (new — 12+ card definitions)
src/lib/cards.ts                               (new — hooks + earn API)
src/pages/CardsPage.tsx                        (new)
src/components/kids/CollectibleCard.tsx        (new)
src/components/kids/CardEarnedToast.tsx        (new)
supabase/migrations/202605xx_cards.sql         (new)
```

#### Supabase migration

```sql
create table public.cards_earned (
  child_id uuid not null references public.profiles(id) on delete cascade,
  card_id text not null,
  earned_at timestamptz not null default now(),
  primary key (child_id, card_id)
);
alter table public.cards_earned enable row level security;
create policy "child reads own cards" on public.cards_earned
  for select using (child_id = auth.uid()::text);  -- adjust to actual auth model
```

(Schema details depend on your existing `profiles` table. Confirm before applying.)

#### API

```ts
// src/lib/cards.ts
export function useEarnedCards(): { earned: Set<string>; loading: boolean };
export async function earnCard(cardId: string): Promise<void>;
```

`earnCard` is optimistic — updates local set immediately, syncs to Supabase in background. Failure shows a retry toast.

#### Visual

- `<CollectibleCard card={card} earned={bool} size="small|large" />`
  - Earned: full color, rarity badge in top-right (Common/Uncommon/Rare/Legendary, color-coded).
  - Locked: grey, `?` placeholder, no fact text.
- `<CardEarnedToast card={card} />` — fixed-position bottom-center, animated entry (scale 0→1, rotate -8°→0°), auto-dismisses after 4s.
- `<CardsPage>` — wall of all 12+ cards, count at top, mascot reaction based on % collected.

#### Integration

In `LessonScaffold`, when a `card-reward` beat is reached, call `earnCard(card.id)` and show toast.

#### Acceptance criteria
- [ ] Earning a card persists across reloads.
- [ ] Multiple children with same parent see separate collections.
- [ ] Cards page accessible from Portal map (stop #N is the collection).
- [ ] Toast doesn't block interaction with next button.

---

### Phase 6 — One mini-game (Lemonade or "Chick-fil-A Stand")
**Effort:** 2-3 days. **Risk:** low. **Visible change:** new interactive lesson element.

#### Files changed

```
src/components/games/LemonadeStand.tsx
```

#### Spec

Port the inspiration's `LemonadeGame` (lines 3359-3967 of `kids_business_concept.html`) to TypeScript + JSX. Same mechanic:
- Phase 1: set price ($1-$5 slider) + cups to make (5-30)
- Phase 2: simulate sales (depends on price elasticity)
- Phase 3: show revenue, cost, profit
- Phase 4: option to replay or finish (earn card)

Theme: read from `themes` token.

#### Acceptance criteria
- [ ] Playable on touch + mouse.
- [ ] Result phase reveals profit calculation.
- [ ] Card-earned hook fires on completion.

---

### Phase 7 — Certificate (final scene)
**Effort:** 1 day. **Risk:** low.

#### Files changed

```
src/pages/CertificatePage.tsx
src/lib/certificate.ts        (image rendering via html-to-image)
```

#### Spec

- Reads kid name from `useChildContext`.
- Reads earned cards from `useEarnedCards`.
- Computes rank from total quiz scores: ≥10 Master · ≥8 Expert · ≥6 Scholar · else Learner.
- Renders a printable card (6px green border, dashed inner gold border, signature lines).
- "Print" → window.print() with print CSS.
- "Save as image" → `html-to-image` library, downloads PNG.

#### Acceptance criteria
- [ ] Printable view fits A4 portrait.
- [ ] Name + rank + ≤6 earned card badges visible.
- [ ] PNG export works on Chrome + Safari.

---

## 3. Sequenced task list

```
Sprint 1 (Week 1)
  ├─ T1.1 Set up kids design tokens + globals.css            [Phase 1, 0.5d]
  ├─ T1.2 Build MCard, Pill, TapCard, FadeIn, Emo primitives  [Phase 1, 0.5d]
  ├─ T1.3 anim.ts utilities + useTwemoji hook                 [Phase 1, 0.5d]
  ├─ T1.4 Mascot v2: Momo component + refactor MomoMentorBubble [Phase 2, 1d]
  ├─ T1.5 Storybook/dev page for visual review                [0.5d]

Sprint 2 (Week 2)
  ├─ T2.1 portalStops.ts + types                              [Phase 3, 0.5d]
  ├─ T2.2 BoardMap + MapStop components                       [Phase 3, 1.5d]
  ├─ T2.3 Wire visited state from useProgress                 [Phase 3, 0.5d]
  ├─ T2.4 Replace Portal.tsx, keep .legacy.tsx                [Phase 3, 0.5d]
  ├─ T2.5 Visual QA + responsive pass                         [0.5d]

Sprint 3 (Week 3)
  ├─ T3.1 LessonScaffold + beat dispatcher                    [Phase 4, 1d]
  ├─ T3.2 Extract chick-fil-a.ts data                         [Phase 4, 0.5d]
  ├─ T3.3 ConceptCard, StoryBeat, MiniGameSlot                [Phase 4, 1d]
  ├─ T3.4 Rewrite ChickFilAPage.tsx using scaffold            [Phase 4, 0.5d]
  ├─ T3.5 Same for GarageSalePage.tsx                         [Phase 4, 1d]

Sprint 4 (Week 4)
  ├─ T4.1 Supabase migration: cards_earned table              [Phase 5, 0.5d]
  ├─ T4.2 useEarnedCards + earnCard                           [Phase 5, 0.5d]
  ├─ T4.3 CollectibleCard + CardEarnedToast                   [Phase 5, 0.5d]
  ├─ T4.4 CardsPage + map stop                                [Phase 5, 0.5d]
  ├─ T4.5 LemonadeStand mini-game                             [Phase 6, 2d]
  └─ T4.6 Certificate page + html-to-image                    [Phase 7, 1d]

Total: ~4 weeks, one engineer.
```

---

## 4. Risks & mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Refactored lesson loses content fidelity | Medium | High | Move text verbatim into `chick-fil-a.ts`. Visual diff old vs. new before merging. |
| Supabase RLS policy bug — children see each other's cards | Low | High | Write a Playwright test that signs in as Child A and asserts Child B's cards aren't readable. |
| Twemoji adds 100KB+ bundle | Medium | Low | Load via CDN script tag, not bundled. Lazy-parse only inside the kids-mode shell. |
| Fredoka FOUT (flash of unstyled text) | Medium | Low | `font-display: swap` + preload primary weights. |
| Board-game map cramped on mobile | High | Medium | Test at 360/390/414px. Allow vertical-column fallback below 600px. |
| Legacy Portal flag drift | Low | Low | Delete `.legacy.tsx` files after 2 weeks of stable rollout. |
| Existing adaptive engine breaks during refactor | Medium | High | Snapshot-test current ChickFilAPage at all 3 difficulty levels before refactor. |
| Coming-soon lessons distract kids who can't access them | Low | Medium | Show locked padlock + "Coming soon!" tooltip. Don't grey them out so much they become invisible. |

---

## 5. Open decisions (need answer before Sprint 3)

1. **Lessons as data or code?** Recommendation: **data** (TypeScript const files under `src/data/lessons/`). Reason: easier to version, easier to translate later, easier for non-engineers to edit.
2. **Where do cards live?** Recommendation: **Supabase**, per-child. Client-only cache via React Query.
3. **Certificate output format?** Recommendation: **PNG** via `html-to-image`. PDF later if requested.
4. **One Momo across web + RN?** Recommendation: yes, but defer. Web ships first; pull the same SVG asset into RN when convenient.
5. **What unlocks the certificate?** Recommendation: collecting 8+ of 12 cards AND completing the final quiz. Configurable in one constant.
6. **Spaced review integration?** Recommendation: keep the existing `useSpacedReview` untouched in Phase 1-7. Wire into scaffold's `card-reward` beat in a later phase.
7. **What happens if a kid replays a finished lesson?** Recommendation: cards aren't re-earned, but quiz scores update if better. Map stop stays checked.
8. **Theme/mascot for products (Chick-fil-A, garage-sale) vs concepts (money, stocks)?** Recommendation: extend `themes` with product slugs. Same shape, different colors.

---

## 6. What ships in v1

If we run all 7 phases:

- Board-game Portal replacing tile grid.
- Momo mascot with moods, in every lesson.
- Two lessons (Chick-fil-A + Garage Sale) using the new scaffold.
- Card collection screen with 6–12 cards earnable from those two lessons.
- One mini-game (Lemonade Stand) accessible from the map.
- Personalized printable certificate when conditions met.
- Existing auth + progress + difficulty + spaced-review all preserved.

Coming-soon stops on the map (lemonade, pet shop, YouTube creator, cookie bakery) remain placeholders — visually present, locked. They're a *roadmap* not a feature.

---

## 7. Two ways to proceed — your pick

**Option A: Start Phase 1 right now.**
Phase 1 is tokens + primitives. Zero behavior change, just unblocks everything else. I can have a draft PR (~6 files, ~400 LOC) ready in a day. You review the visual story, we proceed.

**Option B: Resolve the 8 open decisions first.**
Send me answers on §5 above; I revise the spec and start Phase 1 Monday. Slightly slower but lower risk of mid-stream rework.

Recommendation: **Option A**. Phase 1 is pure additive; nothing breaks if we change direction in Phase 3+. Decisions 5–8 don't affect tokens/primitives at all.
