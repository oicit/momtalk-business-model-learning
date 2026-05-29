# MomTalk Integration — Code Audit

**Date:** 2026-05-28
**Auditing against:** `docs/superpowers/specs/2026-03-16-business-model-momtalk-integration-design.md` (the original integration design)
**Scope:** The **portal side only** (this repo). The MomTalk RN app side is a separate codebase and not audited here — see "Cross-codebase gaps" at the bottom for what I'd verify there.

## TL;DR

The portal **shipped most of Phases 1–4 and the SM-2 scheduler from Phase 9**, plus Mode B (kid code) of Phase 3. The auth gate was then explicitly **removed by user request** (commit `d5870dd` "chore: remove kid-code gate from all lesson routes" — May 27). Mode A (app-launch one-time code), the WebView postMessage bridge, kids_CEO mission unlocks, and the Vercel CSP relaxation for WebView embedding were **never implemented**. Interest theming (Layer 2) is partially scaffolded but no real examples are deployed.

Net: the portal can deliver progress, cards, missions, reviews to Supabase via the spec'd API shape — but it cannot currently be **launched from the MomTalk app** via one-time code, and the app cannot listen to lesson-completion events. The portal works fully as a standalone web app; the deep integration with the RN app is what's still pending.

## Phase-by-phase status

| Phase | Spec | Status | Notes |
|---|---|---|---|
| 1 | Guest mode + localStorage | ✅ Shipped | Every hook (`useProgress`, `useMissions`, `useEarnedCards`, `useSpacedReview`) has localStorage-first behavior. |
| 2 | Vercel API + Supabase + session mgmt | ✅ Shipped | `api/cards.ts`, `api/progress.ts`, `api/missions.ts`, `api/reviews.ts` all match the spec's pattern. `bml_sessions` table referenced by `validateSession()`. `schemaVersion` wrapper present. |
| 3 | App-launch auth (Mode A) | ❌ NOT shipped | No `api/auth/code.ts`. No `bml_auth_codes` table referenced. |
| 3 | Kid-code auth (Mode B) | ✅ Shipped | `api/auth/kid-code.ts` (76 LOC, rate-limited 20/5min/IP). `KidCodeEntry` component exists. |
| 3 | Auth gate | ⚠️ **Removed by user request** | Commit `d5870dd` removed `AuthGuard` from every lesson route. The component file still exists but is unused. Effectively: every kid is in guest mode now. |
| 4 | Adaptive Layer 1 (age difficulty) | ✅ Shipped | `useAdaptive` returns `difficultyLevel: 'easy' \| 'medium' \| 'hard'` derived from age. Every lesson's `AdaptiveText` fields are populated at all three levels (the May-28 rollout enforced this via test). |
| 4 | Adaptive Layer 3 (pacing by score) | ⚠️ Partial | `useProgress.getScore` exists. No "score < 50% → extra practice round" branch is wired anywhere. |
| 5 | MomTalk app module (Zustand, context extractor) | ❌ NOT auditable here | RN-side; see Cross-codebase gaps. |
| 6 | WebView postMessage bridge | ❌ NOT shipped | Zero references to `window.ReactNativeWebView` or `postMessage` in `src/`. Portal cannot signal the app at session creation or lesson completion. |
| 7 | Momo nudges (`momo-business-mentor` prompt) | ❌ NOT auditable here | Prompt lives in MomTalk app. |
| 8 | kids_CEO mission unlocks | ❌ NOT shipped (portal side) | No event emitter to `kids-ceo.mission.create`. Per-lesson missions ARE shipped (each lesson has its own `real-world-mission` beat with `RealWorldMission` UI + printables), but those run client-only and never reach kids_CEO. The two systems exist in parallel. |
| 9 | Spaced learning (SM-2) | ✅ Shipped, ⚠️ not server-synced | `src/lib/spacedRepetition.ts` implements SM-2 correctly (quality 0-5, reset on quality<3, ease floor 1.3). `useSpacedReview` uses localStorage only. `api/reviews.ts` exists and reads from Supabase but client-side never POSTs. |
| 10 | Interest theming (Layer 2) | ⚠️ Scaffolded only | `useAdaptive` exposes a `themeContext.interests` array, and the docstring mentions "find themed examples based on first matching interest" — but no `INTEREST_THEMES` constant is deployed and no lesson reads `themeContext.examples`. Per spec this phase was explicitly "lower priority — deferred." |

## API endpoints — comparison vs. spec

| Spec endpoint | Status | Path on disk |
|---|---|---|
| `POST /api/auth/code` | ❌ Missing | — |
| `POST /api/auth/kid-code` | ✅ | `api/auth/kid-code.ts` |
| `GET /api/progress` | ✅ | `api/progress.ts` |
| `POST /api/progress` | ✅ | `api/progress.ts` |
| `GET /api/reviews` | ✅ | `api/reviews.ts` |
| `POST /api/reviews` | ⚠️ Not in spec; not implemented | Would need adding to actually persist SM-2 state cross-device |
| `GET/POST /api/cards` | ✅ (added later, not in original spec) | `api/cards.ts` |
| `GET/POST /api/missions` | ✅ (added this session, not in original spec) | `api/missions.ts` |

Both `/api/cards` and `/api/missions` extend the original module_data pattern cleanly — they use the same `data_key:${childId}` schema and `schemaVersion` wrapping that `/api/progress` does.

## Spec items that didn't ship — and what they'd cost

### Mode A (App-launch one-time code) — ~1 day

Three pieces:
1. New `api/auth/code.ts` endpoint (POST: validate one-time code, mark used, mint session). Mirrors the kid-code endpoint shape; replaces "code lookup in module_data" with "code lookup in bml_auth_codes table."
2. New Supabase table `bml_auth_codes` (single-use, 2-min expiry).
3. New `/auth` route + handler that reads `?code=` from URL, calls the endpoint, stores session token in `sessionStorage`, navigates to `/`.

The MomTalk app side also needs `POST /api/bml/create-session` (in *that* codebase, not this one) to mint the codes. Without the app side, the portal endpoint is useless.

### WebView postMessage bridge — ~2-3 hours

After auth code exchange, after lesson completion, after mission accept/reflect:

```ts
window.ReactNativeWebView?.postMessage(JSON.stringify({
  type: 'bml.lesson.completed',
  payload: { childId, lessonId, score, xpEarned }
}));
```

Wrap in a `notifyApp(event, payload)` helper, call from `useProgress.completeLesson` + `useMissions.acceptMission/reflectMission`. Fire-and-forget; no failure handling needed. The RN side needs a corresponding WebView `onMessage` handler — that's their work.

### kids_CEO mission unlocks — ~1 day

Two paths:
- **A.** Client-side: when a lesson completes, emit a `business-model.lesson.completed` postMessage with mission payload (uses the bridge above). MomTalk app receives, calls `moduleBus.emit('kids-ceo.mission.create', ...)`.
- **B.** Server-side: when `/api/progress` POSTs a new completion, also insert a row into a `kids_ceo_pending_missions` table that the RN app polls or subscribes to.

Path A is simpler if the bridge ships. Path B is more robust (works without the app being open).

Note: the portal already has rich per-lesson missions WITH printables WITH photo-reflection. The spec's kids_CEO missions are a separate, parallel system aimed at the **MomTalk app's existing CEO loop**. The two could either:
- Coexist (portal mission for in-portal use, kids_CEO mission for in-app surfacing), or
- Consolidate (portal mission emits to kids_CEO; the portal UI calls the same backend).

This is a product decision, not a code one.

### Vercel CSP — ~5 minutes

`vercel.json` still has `X-Frame-Options: SAMEORIGIN` (line 13). Spec says replace with `Content-Security-Policy: frame-ancestors 'self' momtalk://* exp://*` so the RN WebView can embed. Trivial change; only matters once Mode A ships.

### Spaced review server-sync — ~1 hour

`useSpacedReview` uses localStorage only. `api/reviews.ts` already exists and reads from Supabase. To complete: add a POST handler to `api/reviews.ts`, then mirror the `src/lib/cards.ts` pattern in `useSpacedReview` (fetch on mount, push on change). Identical work to what I did for missions today.

### Pacing branch — ~1 hour

`useAdaptive` should expose a `recommendedPacing` flag based on `getScore(lessonId)`:
- `> 80` → show bonus tip in outro
- `< 50` → re-quiz prompt before moving on

LessonScaffold reads the flag in the quiz beat. Adds one branch to the scaffold; lessons don't need to change.

## What's working and shouldn't be touched

- The `module_data` storage pattern (`data_key: cards:${childId}` / `progress:${childId}` / `missions:${childId}`) is consistent across all four endpoints. New endpoints should follow this exactly.
- `validateSession()` is duplicated across endpoints but is correct everywhere — fine for now; if a 5th endpoint is added, extract to `api/_lib/session.ts`.
- The `schemaVersion: 1` wrapper is uniform; bump it when changing field shapes and add a migrator on read.
- The 24-hour session TTL in `bml_sessions` is per spec; don't lengthen without re-evaluating offline behavior.

## Divergences from spec (intentional)

1. **Auth gate removed** (`d5870dd`). The kid-code mechanism is still there; just nothing routes through it. If you ever re-introduce auth, the rollback is `git revert d5870dd` plus restoring `AuthGuard` to the route components in `App.tsx`.
2. **Per-lesson missions shipped client-only.** The 29 lessons all have `real-world-mission` beats with full printables — this exceeds the spec's "Lesson Template → kids_CEO mission" pattern in user-facing richness, but does NOT feed the MomTalk app. The integration would now be: emit FROM the per-lesson missions TO kids_CEO, rather than build kids_CEO missions from scratch.
3. **Cards system added** (May-13 redesign). Not in the integration spec at all; added later. Treated as just another `module_data` entry, follows the same pattern.

## Cross-codebase gaps (verify in the MomTalk app codebase)

Items I can't audit from this side — to confirm in the RN app:

1. **`stores/businessModelStore.ts`** — Zustand store with `childProgress`, `spacedReviewQueue`, `unlockedMissions`, etc.
2. **`lib/prompts/businessModelPrompts.ts`** — the `momo-business-mentor` template registered.
3. **`lib/modules/businessModelMissions.ts`** — kids_CEO mission template map + event listener.
4. **Module registration** in `pocketModuleStore.ts` with slug `business-model-learning`, category `business`.
5. **Context extractor** that emits `bizLessonsCompleted`, `bizCurrentLesson`, etc. into FullContext.
6. **Event bus types** — `business-model.lesson.completed` / `.quiz.scored` / `.review.due` in the event-type union.
7. **Module screen** at `app/modules/business-model-learning.tsx` that launches the portal and shows progress.

If those exist on the RN side but the portal hasn't shipped Mode A + the WebView bridge, the loop is still broken: the app can't launch the portal with a session, and the portal can't tell the app when something happened.

## Recommended next steps (if integration is a priority)

In order of leverage:

1. **Ship Mode A** (1 day) + matching Vercel CSP change (5 min). This unblocks "launch from app with session" — the biggest single user-facing gap.
2. **Ship the WebView postMessage bridge** (2-3 hours). Once Mode A works, this turns lesson completion into a real-time app signal. Without it, the app only sees progress when it next polls Supabase.
3. **Decide on per-lesson missions vs. kids_CEO missions** (product decision). If consolidate → emit on completion. If coexist → wire a separate event for kids_CEO mission creation.
4. **Server-sync the SM-2 reviews** (1 hour). Mirrors what cards + missions sync look like; small effort, finishes Phase 9 properly.
5. **Wire pacing branch** in `LessonScaffold` (1 hour). Closes the last gap in Phase 4.

Total: ~2-3 engineer days to take the portal from "standalone web app" to "fully integrated with MomTalk" — assuming the RN side already has Phase 5 done.

If integration is NOT a priority, the portal works great as a standalone web app and shipping any of the above is purely optional.
