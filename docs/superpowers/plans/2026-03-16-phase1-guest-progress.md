# Phase 1: Guest Mode Local Progress — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add localStorage-based progress tracking so kids see their completed lessons, XP, and quiz scores persist across page refreshes — no auth required.

**Architecture:** A `useProgress` hook backed by localStorage stores per-lesson completion data. Lesson pages call `onComplete` when finished. The Portal page reads progress to show completion badges. The GarageSale and ChickFilA components are wrapped to intercept completion events.

**Tech Stack:** React hooks, localStorage, TypeScript interfaces

**Spec:** `docs/superpowers/specs/2026-03-16-business-model-momtalk-integration-design.md` (Section 8: Guest Mode, Section 3: Adaptive Pacing data model)

---

## File Structure

| File | Action | Responsibility |
|---|---|---|
| `src/lib/progress.ts` | Create | Progress types + localStorage read/write |
| `src/hooks/useProgress.ts` | Create | React hook wrapping progress.ts |
| `src/pages/Portal.tsx` | Modify | Show completion badges on module cards |
| `src/pages/GarageSalePage.tsx` | Modify | Wire up progress saving on lesson complete |
| `src/pages/ChickFilAPage.tsx` | Modify | Wire up progress saving on quiz submit |
| `src/components/ProgressBadge.tsx` | Create | Visual badge for completed/in-progress modules |

---

## Chunk 1: Progress Data Layer

### Task 1: Define progress types and localStorage helpers

**Files:**
- Create: `src/lib/progress.ts`

- [ ] **Step 1: Create the progress types and storage functions**

```typescript
// src/lib/progress.ts

const STORAGE_KEY = 'bml-guest-progress';
const SCHEMA_VERSION = 1;

export interface LessonResult {
  lessonId: string;
  score: number;           // 0-100
  xpEarned: number;
  completedAt: string;     // ISO date
  skillScores: Record<string, number>; // skill → score 0-100
}

export interface ChildLessonProgress {
  lessonsCompleted: string[];
  quizScores: Record<string, number>;       // lessonId → best score
  currentLesson: string | null;
  totalXP: number;
  skillMastery: Record<string, number>;     // skill → mastery 0-1
  lastActiveAt: string;
}

interface StoredProgress {
  schemaVersion: number;
  data: ChildLessonProgress;
}

const DEFAULT_PROGRESS: ChildLessonProgress = {
  lessonsCompleted: [],
  quizScores: {},
  currentLesson: null,
  totalXP: 0,
  skillMastery: {},
  lastActiveAt: new Date().toISOString(),
};

export function loadProgress(): ChildLessonProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PROGRESS };
    const stored: StoredProgress = JSON.parse(raw);
    if (stored.schemaVersion !== SCHEMA_VERSION) return { ...DEFAULT_PROGRESS };
    return stored.data;
  } catch {
    return { ...DEFAULT_PROGRESS };
  }
}

export function saveProgress(progress: ChildLessonProgress): void {
  const stored: StoredProgress = {
    schemaVersion: SCHEMA_VERSION,
    data: { ...progress, lastActiveAt: new Date().toISOString() },
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
}

export function recordLessonComplete(
  current: ChildLessonProgress,
  result: LessonResult,
): ChildLessonProgress {
  const newCompleted = current.lessonsCompleted.includes(result.lessonId)
    ? current.lessonsCompleted
    : [...current.lessonsCompleted, result.lessonId];

  const bestScore = Math.max(current.quizScores[result.lessonId] ?? 0, result.score);

  const newSkillMastery = { ...current.skillMastery };
  for (const [skill, score] of Object.entries(result.skillScores)) {
    const prev = newSkillMastery[skill] ?? 0;
    // Weighted moving average: 70% new, 30% old
    newSkillMastery[skill] = prev === 0 ? score / 100 : prev * 0.3 + (score / 100) * 0.7;
  }

  return {
    ...current,
    lessonsCompleted: newCompleted,
    quizScores: { ...current.quizScores, [result.lessonId]: bestScore },
    totalXP: current.totalXP + result.xpEarned,
    skillMastery: newSkillMastery,
    lastActiveAt: new Date().toISOString(),
  };
}

export function clearProgress(): void {
  localStorage.removeItem(STORAGE_KEY);
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `cd /Users/oicit/Documents/momtalk_business_model_learning && npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/lib/progress.ts
git commit -m "feat: add progress types and localStorage helpers"
```

---

### Task 2: Create useProgress React hook

**Files:**
- Create: `src/hooks/useProgress.ts`

- [ ] **Step 1: Create the hook**

```typescript
// src/hooks/useProgress.ts

import { useState, useCallback, useEffect } from 'react';
import {
  type ChildLessonProgress,
  type LessonResult,
  loadProgress,
  saveProgress,
  recordLessonComplete,
} from '../lib/progress';

export function useProgress() {
  const [progress, setProgress] = useState<ChildLessonProgress>(loadProgress);

  // Sync to localStorage whenever progress changes
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const completeLesson = useCallback((result: LessonResult) => {
    setProgress((prev) => recordLessonComplete(prev, result));
  }, []);

  const isCompleted = useCallback(
    (lessonId: string) => progress.lessonsCompleted.includes(lessonId),
    [progress.lessonsCompleted],
  );

  const getScore = useCallback(
    (lessonId: string) => progress.quizScores[lessonId] ?? null,
    [progress.quizScores],
  );

  return { progress, completeLesson, isCompleted, getScore };
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/hooks/useProgress.ts
git commit -m "feat: add useProgress React hook"
```

---

## Chunk 2: Wire Up Lesson Pages

### Task 3: Create ProgressBadge component

**Files:**
- Create: `src/components/ProgressBadge.tsx`

- [ ] **Step 1: Create the badge component**

```tsx
// src/components/ProgressBadge.tsx

interface ProgressBadgeProps {
  completed: boolean;
  score: number | null;
}

export default function ProgressBadge({ completed, score }: ProgressBadgeProps) {
  if (!completed) return null;

  return (
    <div
      style={{
        position: 'absolute',
        top: -8,
        right: -8,
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        background: '#2D7B5F',
        color: 'white',
        padding: '4px 10px',
        borderRadius: 100,
        fontSize: 11,
        fontWeight: 800,
        border: '2px solid white',
        boxShadow: '0 2px 8px rgba(45,123,95,0.3)',
        zIndex: 2,
      }}
    >
      <span>✓</span>
      {score !== null && <span>{score}%</span>}
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/ProgressBadge.tsx
git commit -m "feat: add ProgressBadge component"
```

---

### Task 4: Wire up ChickFilAPage progress saving

**Files:**
- Modify: `src/pages/ChickFilAPage.tsx`

The ChickFilA page already has a quiz with scoring. We need to:
1. Import `useProgress`
2. Call `completeLesson` when the quiz is submitted
3. Show existing score if lesson was completed before

- [ ] **Step 1: Add progress hook to ChickFilAPage**

At the top of ChickFilAPage.tsx, add import:
```typescript
import { useProgress } from '../hooks/useProgress';
```

Inside the `ChickFilAPage` component, after existing state declarations, add:
```typescript
const { completeLesson, isCompleted, getScore } = useProgress();
const previousScore = getScore('chick-fil-a');
```

- [ ] **Step 2: Call completeLesson on quiz submit**

Find the existing `setQuizSubmitted(true)` line in the submit button's onClick. After it, add:
```typescript
// Calculate score and save progress
const finalScore = Object.entries(quizAnswers).reduce(
  (acc, [qi, ai]) => acc + (quizQuestions[Number(qi)]!.correct === ai ? 1 : 0), 0
);
completeLesson({
  lessonId: 'chick-fil-a',
  score: Math.round((finalScore / quizQuestions.length) * 100),
  xpEarned: 100,
  completedAt: new Date().toISOString(),
  skillScores: {
    'Supply Chain': finalScore >= 1 ? 80 : 40,
    'Customer Service': finalScore >= 2 ? 90 : 50,
    'Brand Building': finalScore >= 3 ? 85 : 45,
    'Operations': finalScore >= 4 ? 95 : 55,
  },
});
```

- [ ] **Step 3: Show previous score badge in hero section**

In the hero section, after the subtitle `<p>` tag, add:
```tsx
{isCompleted('chick-fil-a') && previousScore !== null && (
  <div style={{
    marginTop: 12,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: '#2D7B5F',
    color: 'white',
    padding: '8px 20px',
    borderRadius: 100,
    fontSize: 14,
    fontWeight: 800,
  }}>
    ✓ Completed — Best Score: {previousScore}%
  </div>
)}
```

- [ ] **Step 4: Build and verify no errors**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 5: Commit**

```bash
git add src/pages/ChickFilAPage.tsx
git commit -m "feat: wire up progress saving for Chick-fil-A lesson"
```

---

### Task 5: Wire up GarageSalePage progress saving

**Files:**
- Modify: `src/pages/GarageSalePage.tsx`
- Modify: `src/modules/GarageSale.jsx`

The GarageSale module tracks its own state internally (`completedLevels`, `xp`, `coins`). We need to:
1. Add an `onComplete` callback prop to GarageSaleApp
2. Call it when all levels are completed or when the final quiz is done
3. GarageSalePage passes the callback from `useProgress`

- [ ] **Step 1: Add onComplete prop to GarageSale module**

In `src/modules/GarageSale.jsx`, modify the export:

Change:
```javascript
export default function GarageSaleApp() {
```
To:
```javascript
export default function GarageSaleApp({ onLevelComplete, onAllComplete } = {}) {
```

Then find the `completeLevel` function (the one that calls `setCompletedLevels`). After `setCompletedLevels(...)`, add:
```javascript
if (onLevelComplete) {
  onLevelComplete({ level: currentLevel, xp, coins: coins + 10 });
}
```

And in the section where `currentLevel === 9` (final level completion), after the existing logic add:
```javascript
if (onAllComplete) {
  onAllComplete({ totalLevels: 10, xp: xp + XP_PER_QUIZ, coins: coins + 50 });
}
```

- [ ] **Step 2: Update GarageSalePage to pass callbacks**

Replace `src/pages/GarageSalePage.tsx` content:

```tsx
import { useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GarageSale from '../modules/GarageSale';
import { useProgress } from '../hooks/useProgress';

export default function GarageSalePage() {
  const { completeLesson, isCompleted, getScore } = useProgress();
  const previousScore = getScore('garage-sale');

  const handleAllComplete = useCallback(
    (data: { totalLevels: number; xp: number; coins: number }) => {
      completeLesson({
        lessonId: 'garage-sale',
        score: 100, // completed all 10 levels
        xpEarned: data.xp,
        completedAt: new Date().toISOString(),
        skillScores: {
          Pricing: 85,
          Marketing: 80,
          'Customer Service': 90,
          Branding: 75,
        },
      });
    },
    [completeLesson],
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      {isCompleted('garage-sale') && previousScore !== null && (
        <div
          style={{
            textAlign: 'center',
            padding: '12px 24px',
            background: '#D1FAE5',
            borderBottom: '3px solid #2D7B5F',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 14,
              fontWeight: 800,
              color: '#2D7B5F',
            }}
          >
            ✓ All Levels Completed — {previousScore}% — Keep practicing to improve!
          </span>
        </div>
      )}
      <div style={{ flex: 1 }}>
        <GarageSale onAllComplete={handleAllComplete} />
      </div>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 3: Build and verify no errors**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 4: Commit**

```bash
git add src/pages/GarageSalePage.tsx src/modules/GarageSale.jsx
git commit -m "feat: wire up progress saving for Garage Sale lesson"
```

---

## Chunk 3: Portal Progress Display

### Task 6: Show progress on Portal module cards

**Files:**
- Modify: `src/pages/Portal.tsx`
- Uses: `src/hooks/useProgress.ts`, `src/components/ProgressBadge.tsx`

- [ ] **Step 1: Import useProgress and ProgressBadge in Portal**

At the top of `src/pages/Portal.tsx`, add:
```typescript
import { useProgress } from '../hooks/useProgress';
import ProgressBadge from '../components/ProgressBadge';
```

- [ ] **Step 2: Use the hook in Portal component**

Inside the `Portal` component, after `const [loaded, setLoaded] = useState(false);`, add:
```typescript
const { progress, isCompleted, getScore } = useProgress();
```

- [ ] **Step 3: Pass progress data to ModuleCard**

In the modules grid map, change:
```tsx
<ModuleCard key={mod.id} module={mod} index={i} loaded={loaded} />
```
To:
```tsx
<ModuleCard
  key={mod.id}
  module={mod}
  index={i}
  loaded={loaded}
  completed={isCompleted(mod.id)}
  score={getScore(mod.id)}
/>
```

- [ ] **Step 4: Update ModuleCard to show progress badge**

Update the `ModuleCard` function signature to accept new props:
```typescript
function ModuleCard({ module: mod, index, loaded, completed, score }: {
  module: Module; index: number; loaded: boolean; completed: boolean; score: number | null;
}) {
```

Inside the card `<div>`, right after the opening tag (before the emoji row), add:
```tsx
<ProgressBadge completed={completed} score={score} />
```

- [ ] **Step 5: Update the stats bar to show real progress**

In the Portal hero stats bar, change the static `Modules` stat to use real data:

Replace:
```typescript
{ label: 'Modules', value: '6', icon: '📚' },
```
With:
```typescript
{ label: 'Completed', value: `${progress.lessonsCompleted.length}/6`, icon: '📚' },
```

And add XP stat — replace:
```typescript
{ label: 'Skills', value: '24+', icon: '⚡' },
```
With:
```typescript
{ label: 'XP', value: progress.totalXP > 0 ? `${progress.totalXP}` : '0', icon: '⚡' },
```

- [ ] **Step 6: Build and verify**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 7: Commit**

```bash
git add src/pages/Portal.tsx src/components/ProgressBadge.tsx
git commit -m "feat: show lesson progress on Portal module cards and stats"
```

---

### Task 7: Final build, test, and push

- [ ] **Step 1: Full build**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 2: Start dev server and manually verify**

Run: `npm run dev`

Verify:
1. Portal loads, stats show "0/6 Completed" and "0 XP"
2. Open Garage Sale → complete a level → no errors in console
3. Open Chick-fil-A → watch video → complete quiz → score saves
4. Go back to Portal → module card shows green badge with score
5. Refresh page → progress persists
6. Stats bar updates with completed count and XP

- [ ] **Step 3: Push to GitHub (triggers Vercel deploy)**

```bash
git push
```

Expected: Push succeeds, Vercel auto-deploys
