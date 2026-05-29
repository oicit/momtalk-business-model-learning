# Business Learning Lab — MomTalk

> A kid-facing web app that teaches business and money concepts via 29 interactive lessons, real-world missions, and a collectible card system.

[![Live deploy](https://img.shields.io/badge/live-businessmodel.momtalk.ai-2D9B6E?style=for-the-badge)](https://businessmodel.momtalk.ai)

Part of the **MomTalk** family-learning suite. Built as a standalone web app (Vite + React + TypeScript) with Supabase progress sync and a static-export option for Vercel.

## What it teaches

29 lessons spanning the dominant business models, money concepts, and real-world skills a kid will encounter as an adult:

| Phase | Lessons |
|---|---|
| **Foundation** | Business 101 |
| **Core money** | Piggy Bank · Stock Market · Tax Town · Risk Pool Island · Subscription Sense |
| **Famous businesses** | McDonald's · Chick-fil-A · Roblox · Costco · Amazon · Lego · Disney |
| **Kid hustles** | Garage Sale · Lemonade Stand · Pet Shop · YouTube Creator · Cookie Bakery · Farm Stand · Snow Day Hustle · Etsy Shop · Pizza Place |
| **Soft skills** | Inventor's Lab · Deal Maker · Charity Lab · Marketing Mountain · Survey Master |
| **Stretch** | Startup Pitch · App Maker |

Each lesson follows a 9-beat scaffold (`intro → decision → think-deeper → concept-cards → calc-challenge → brainstorm → connect → outro → real-world-mission`) and rewards one of **35 collectible cards** (Common / Uncommon / Rare / Legendary).

## Architecture

Lessons are **data, not pages**. The entire content for a lesson lives in a single TypeScript file under `src/data/lessons/`; a thin page wrapper (`src/pages/<Slug>Page.tsx`) renders it through `LessonScaffold`. Adding a new lesson = adding one file plus six small wiring touches.

```
src/
├── data/
│   ├── lessons/        # 29 lesson definitions (LessonDef[])
│   │   └── types.ts    # The discriminated union of beat types
│   ├── cards.ts        # 35 collectible cards + earnedCardFor()
│   ├── missions.ts     # Mission registry (pulled from lesson beats)
│   ├── portalStops.ts  # Home-map tiles (lessons + cards + games)
│   └── weeklyBonus.ts  # Weekly rotating bonus mission
├── components/
│   └── kids/
│       ├── LessonScaffold.tsx    # The central component (~2000 LOC)
│       ├── CollectibleCard.tsx
│       ├── Momo.tsx              # The mascot
│       └── RealWorldMission.tsx
├── pages/              # Thin wrappers (11 lines each)
├── lib/                # Hooks (missions, cards, progress)
├── styles/kidsTokens.ts # MomTalk "Lush Memphis" design tokens
└── App.tsx             # 40 routes
api/
├── cards.ts            # Earned-card sync via Supabase module_data
├── missions.ts         # Mission sync (same pattern)
├── progress.ts         # Lesson-completion sync
└── reviews.ts          # Spaced-review schedule
public/
├── games/word-battle.html  # Embedded sight-word game
└── stem/  → /Users/.../STEM/  (symlink, local-dev only)
```

### Why lessons-as-data

- Adding a new lesson is one TypeScript file + 6 one-line wiring edits.
- Content is versionable, diffable, and translatable.
- All lessons share one renderer (`LessonScaffold`), so a UI improvement applies everywhere instantly.
- Non-engineers can edit content without touching components.

See `docs/specs/2026-05-13-kids-redesign-spec.md` §1 for the full rationale and `docs/plans/2026-05-28-new-lesson-modules-rollout.md` for how 22 new lessons were added in 5 phases.

### Beat types

Each lesson's `beats[]` is a discriminated union (`src/data/lessons/types.ts`). Adding a new beat type is one switch case in `LessonScaffold.tsx`'s `BeatRenderer`.

| Beat | Purpose |
|---|---|
| `intro` | Mascot hook + roadmap |
| `decision` | Case-study choice with per-option feedback + real-world reveal |
| `think-deeper` | Socratic question chain (kid taps to reveal each layer) |
| `concept-cards` | 3-4 swipeable concept explanations |
| `calc-challenge` | Real numeric problem with adaptive difficulty |
| `brainstorm` | Open-ended kid input + hint reveal |
| `connect` | "Same idea, bigger business" — 3 real-world examples |
| `dialogue` | Chat-style Momo conversation |
| `mini-game` | Currently Lemonade Stand only |
| `quiz` | Multiple choice with skill scores |
| `outro` | Celebration + bonus tip |
| `real-world-mission` | The kid does it FOR REAL with printables |

### Adaptive content

Every kid-facing string is either a plain string OR `Record<'easy'|'medium'|'hard', string>`. The scaffold reads `useAdaptive()` to pick the right level. New lessons must populate all three levels for every adaptive field.

## Quick start

```bash
git clone https://github.com/oicit/momtalk-business-model-learning.git
cd momtalk-business-model-learning
npm install
npm run dev        # http://localhost:5173
```

### Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Type-check + production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Type-check without emitting |

### Environment

For full functionality you need a Supabase project with these env vars (server-side only — never expose the service role key client-side):

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=...
```

Without these, the app still runs — it falls back to localStorage for all per-kid state (progress, missions, cards). You only lose cross-device sync.

## Deployment

Deploys to Vercel. `vercel.json` is at the root. The four `api/*.ts` files are Vercel serverless functions; the rest of the app is a static Vite build.

**Known deploy limitation:** the STEM Lab tile (`/stem-lab`) is a symlink to a 7.8 GB asset directory and will 404 on Vercel. To ship it for real, host STEM Lab separately and update the `<iframe src>` in `src/pages/StemLabPage.tsx`.

## Key routes

| Route | What |
|---|---|
| `/` | Portal map (home) — orbital roadmap of all stops |
| `/{lesson-slug}` | One of 29 lesson routes (see `src/data/portalStops.ts`) |
| `/cards` | Full collectible-card deck (35 cards) |
| `/practice` | Active mission inbox |
| `/practice/print/:missionId` | Printable mission materials |
| `/certificate` | Graduation certificate |
| `/word-battle` | Embedded sight-word game |
| `/stem-lab` | Embedded STEM Lab (local-dev only) |
| `/dev/kids` | Component gallery for designers |
| `/dev/lesson/:slug` | Single-lesson dev preview |

## Adding a new lesson

1. Add a theme entry to `src/styles/kidsTokens.ts` (or reuse one).
2. Create `src/data/lessons/<slug>.ts` (use `lemonade-stand.ts` as the gold-standard template; aim for 9 beats, 500–650 LOC, all `AdaptiveText` fields at easy/medium/hard).
3. Add a card to `src/data/cards.ts` with `awardedBy: '<slug>'`.
4. Create `src/pages/<Slug>Page.tsx` (11-line wrapper).
5. Add a route in `src/App.tsx`.
6. Add a portal-stop in `src/data/portalStops.ts`.
7. Add the lesson to the `LESSONS` array in `src/data/missions.ts`.
8. Run `npm run typecheck` — it should be clean.

The quality checklist for new lessons lives in `docs/plans/2026-05-28-new-lesson-modules-rollout.md`.

## Design system

The visual language is **MomTalk "Lush Memphis"** — chunky borders, offset shadows, Fredoka/Space Mono typography, emoji-as-iconography. Tokens live in `src/styles/kidsTokens.ts`.

**Rules** (enforced manually; see `~/.claude/CLAUDE.md`):
- No grey text for visual hierarchy.
- No `opacity` on text for visual hierarchy.
- Use weight, size, semantic color, layout, and borders instead.

## Tests

Currently **none** — see `docs/plans/2026-05-28-new-lesson-modules-rollout.md` §4 (risks). The spec calls for snapshot tests on adaptive content and Playwright tests for RLS. Not yet implemented.

## Docs index

| Doc | What |
|---|---|
| `docs/specs/2026-05-13-kids-redesign-spec.md` | Original kids-redesign specification |
| `docs/plans/2026-05-13-kids-friendly-redesign.md` | Phase 1-7 implementation plan |
| `docs/specs/2026-05-19-module-brainstorm.md` | Brainstorm of 22 new modules |
| `docs/plans/2026-05-28-new-lesson-modules-rollout.md` | The 22-lesson rollout plan |
| `docs/superpowers/specs/2026-03-16-business-model-momtalk-integration-design.md` | Original MomTalk integration design |
| `docs/superpowers/plans/2026-03-16-phase1-guest-progress.md` | Phase 1 guest-progress plan |

## Status

✅ 29-lesson curriculum complete (May 2026)
✅ Cards page UX polish (May 2026)
🚧 Mission server-sync (in progress)
🚧 Welcome-back mission nudge (in progress)
🚧 Skill-grouped cards page (in progress)
📋 Tests (not started)

## License

MomTalk internal — not open source.

---

Built with care for kids who deserve to understand money before they're 25.
