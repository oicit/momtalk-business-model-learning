# Redesign: Business Model Learning → Kids' Adventure Style

**Date:** 2026-05-13
**Source of inspiration:** `/Users/oicit/Documents/momtalk/momtalk_app_202601/momtalk_module/new/kids_business_concept.html`
**Target:** `/Users/oicit/Documents/momtalk_business_model_learning/`

---

## 1. What the inspiration file does well

A single-file React app (CDN React, ~5,600 lines) that teaches 12 money/business concepts to kids 5–12. It nails several things our current Vite/React app doesn't:

### Visual language
- **One font: Fredoka** (rounded, friendly). Mono only for numbers.
- **Solid offset shadows** — `box-shadow: 5px 5px 0 <color>`, never blurred. Gives everything a chunky toy-sticker feel.
- **3-5px solid borders** on every card, button, mascot avatar.
- **Pill buttons** (`border-radius: 999`) for actions, **24px rounded cards** for content.
- **Per-topic pastel gradient backgrounds** — Money → mint, Stocks → pink, Bonds → lavender, Inflation → coral. Each lesson feels like a different "room."
- **Twemoji** parsed at mount so emojis render identically on every OS — crucial for the visual identity.

### Information architecture
- **Board-game map** as the home/portal. A winding zigzag path with 24 stops, each a colored emoji station. "Visited" stops get a checkmark. Kids navigate by hopping stops, not by scrolling a list.
- **Linear-but-jumpable** lesson order. You can replay any stop from the map.
- **Three scene types**: lesson → mini-game → checkpoint. Repeated 6 times. Kids always know the rhythm.

### Engagement loop
- **Penny the Pig mascot** with 8 mood states (`happy`, `excited`, `thinking`, `celebrating`, `encouraging`, `sad`, `cool`, `love`) — appears in every scene with a speech bubble, scaled-down avatar, and color-coded text.
- **Collectible cards system** — 12 cards, 4 rarities (Common / Uncommon / Rare / Legendary). Each lesson awards one. Final screen shows the collection with rarity badges.
- **Mini-games** for hands-on concepts: Lemonade Stand (cost vs. revenue), Stock Market (volatility), Budget Pie (50/30/20), Price Setter (supply/demand), Savings Calc (compound interest), Tax Calc (brackets).
- **Personalized Certificate** at the end — kid types name → printable cert with rank (Learner / Scholar / Expert / Master) + earned card badges.

### Motion
- `FadeIn` + `useStaggered` — content reveals sequentially (one element every 150ms). Feels guided, not overwhelming.
- `useAnimStep` — concept animations cycle through 3–4 frames every 2s. Used in `ProfitFlowAnim`, `SupplyDemandAnim`, `InflationAnim`, etc. — small data-driven explainer animations, not blockbuster animations.
- No bouncy spring physics. Just opacity + translateY. Quiet, calm, doesn't compete with content.

### Reward design
- **Earned vs. locked cards** — grey question-mark placeholders for unearned cards. The empty slots are part of the motivation.
- **Stagger reveals** on cards earned: kid sees them animate in one-by-one.
- **Rank pill** on certificate based on quiz score thresholds.

---

## 2. What the current app has (and what's missing)

### Current state (`/src`)
- React 18 + Vite + TS + Supabase auth
- Pages: `Portal`, `AuthPage`, `ChickFilAPage`, `GarageSalePage`
- Components: `AuthGuard`, `KidCodeEntry`, `MomoMentorBubble` (← mascot exists!), `ProgressBadge`, `SaveProgressPrompt`, `SpacedReviewQuiz`
- Already has: kid-code auth, progress sync to Supabase, save-progress nag, adaptive content engine

### Gaps vs. inspiration
| Inspiration has | We have | Verdict |
|---|---|---|
| Board-game map navigation | Tile list portal | **Missing** — should adopt |
| Mascot with moods + speech bubbles in every scene | `MomoMentorBubble` exists but used inconsistently | **Underused** — expand |
| Collectible card rewards | `ProgressBadge` (badges only) | **Should add** — much more motivating for kids than %|
| Per-topic pastel gradient theming | Mostly one theme | **Missing** — easy win |
| Mini-games inside lessons | Some interactive elements | **Partial** — formalize the pattern |
| Final personalized certificate | Not present | **Missing** — printable take-home |
| Solid offset shadows + chunky borders | Mixed styles | **Missing consistency** |
| Fredoka font family | Mixed fonts | **Should standardize** |
| Twemoji | System emojis | **Should add** — cross-OS consistency |
| Staggered fade-ins as primary motion | Various motion libraries | **Should simplify** |

---

## 3. Redesign plan

### A. Establish the design system (1 file, ~150 LOC)

Create `src/styles/kidsTokens.ts` exporting:

```ts
export const T = {
  green:    '#166534',   // primary, brand
  pink:     '#FF65C5',
  yellow:   '#FFCB65',
  blue:     '#65C9FF',
  lavender: '#7C5CFC',
  coral:    '#FF6B6B',
  mint:     '#CCFBF1',
  canvas:   '#FFF3EC',   // page bg
  text:     '#1E293B',
  sub:      '#64748b',
};

export const themes = {
  money:        { accent: T.mint,     gradient: ['#FFF3EC','#CCFBF1'] },
  business:     { accent: T.yellow,   gradient: ['#FFF3EC','#FFFDE8'] },
  company:      { accent: T.blue,     gradient: ['#FFF3EC','#E8F4FD'] },
  stocks:       { accent: T.pink,     gradient: ['#FFF3EC','#FDE8F4'] },
  bonds:        { accent: T.lavender, gradient: ['#FFF3EC','#F0E8FD'] },
  saving:       { accent: T.pink,     gradient: ['#FFF3EC','#FFF0F5'] },
  taxes:        { accent: T.coral,    gradient: ['#FFF3EC','#FFF5F0'] },
  budget:       { accent: T.yellow,   gradient: ['#FFF3EC','#FFFFF0'] },
  entrepreneur: { accent: T.pink,     gradient: ['#FFF3EC','#FFE8F0'] },
  supply:       { accent: T.blue,     gradient: ['#FFF3EC','#E8F0FF'] },
  debt:         { accent: T.coral,    gradient: ['#FFF3EC','#FFE8E8'] },
  inflation:    { accent: T.coral,    gradient: ['#FFF3EC','#FFF0E8'] },
} as const;
```

Add three primitive components (`src/components/kids/`):
- `MCard.tsx` — `5px solid green border, 24px radius, 7px solid offset shadow`
- `Pill.tsx` — `3px border, 999 radius, 3px shadow`
- `TapCard.tsx` — large clickable lesson tile with press-down feedback

### B. Standardize the mascot

`MomoMentorBubble.tsx` already exists. Expand it to match `Penny`:

```tsx
type MomoMood = 'happy' | 'excited' | 'thinking' | 'celebrating'
              | 'encouraging' | 'sad' | 'cool' | 'love';

<Momo mood="excited" size={55}
      msg="Grandma gave you $100 — what do you do with it?" />
```

- Circular avatar with 3px green border + 3px offset shadow
- Small mood emoji badge bottom-right of avatar (white circle with green border)
- Speech bubble: white, 3px border, 18-18-18-4 border-radius (squared bottom-left for the "tail")
- Name in pink at the start of the message text
- Mascot appears at the top of every scene by default

### C. Replace Portal with a board-game map

Rebuild `src/pages/Portal.tsx`:

- Winding path of stops (zigzag rows of 4).
- Each stop: 80×80 round-corner tile with emoji + label + color.
- Lines connecting consecutive stops (dashed yellow path).
- "Visited" stops show a green check overlay; current stop pulses.
- Progress bar at top: "X / N stops visited" with mascot reaction (`celebrating` if all visited).
- Tap a stop → navigate to its lesson/game.

Pulls visited state from Supabase progress (already wired in).

### D. Standardize lesson structure

Every lesson page becomes:

```tsx
<LessonScaffold theme="money">
  <Momo mood="excited" msg="..." />        {/* intro */}
  <StoryBeat>...</StoryBeat>               {/* 2-3 staggered concept reveals */}
  <ExplainerAnim type="profitFlow" />      {/* 1 animated diagram */}
  <MiniGame type="lemonade" />             {/* hands-on */}
  <CardReward card={cardData[i]} />        {/* award after completion */}
  <Momo mood="celebrating" msg="..." />    {/* outro */}
  <NextStopButton />
</LessonScaffold>
```

Refactor `ChickFilAPage` and `GarageSalePage` to this shape. New lessons drop in as data, not bespoke pages.

### E. Collectible card system

Add `src/lib/cards.ts` with:
- `cardData[]` — 12 cards (or more), each with `id, emoji, title, fact, color, rarity`
- `useEarnedCards()` — pulls from Supabase `progress` table
- `earnCard(id)` → optimistic UI + sync

Add two screens:
- `<CardCollection />` — wall of cards, locked ones grey with `?`
- `<CardEarnedToast />` — pops up after lesson with the new card

### F. Mini-game library

Create `src/components/games/`:
- `LemonadeStand.tsx` — set price + cups → simulate sales → see profit
- `StockMarket.tsx` — pick stocks → watch random walk
- `BudgetPie.tsx` — drag sliders to allocate 50/30/20
- `PriceSetter.tsx` — set price, see demand curve react
- `SavingsCalc.tsx` — compound interest visualizer
- `TaxCalc.tsx` — bracket walk-through

Each game is ~150 LOC, takes a `theme`, awards a card on win.

### G. Certificate at the end

`src/pages/CertificatePage.tsx`:
- Personalize with kid's name (from auth)
- Show rank badge (Learner / Scholar / Expert / Master) based on quiz score
- Show top 6 earned cards as mini-badges
- "Print / save as PDF" button
- Shareable image generated client-side

### H. Motion overhaul

Add `src/lib/anim.ts` with two helpers (steal directly from the inspiration file):

```ts
useStaggered(trigger: boolean, count: number, delayMs = 150): boolean[]
useAnimStep(active: boolean, total: number, periodMs = 2000): number
```

Plus a `<FadeIn show={...} delay={...}>` component. Wrap every content beat in `<FadeIn>` with staggered delays. Drop any spring/bounce libs we currently use.

### I. Twemoji

Add `<script src="https://cdn.jsdelivr.net/npm/twemoji@14.0.2/dist/twemoji.min.js">` to `index.html`. Wrap any container with the `useTwemoji()` hook (re-parses on mount). Now emojis are SVG and identical on every device.

---

## 4. Migration order

1. **Tokens + primitives** (Week 1) — `T`, `themes`, `MCard`, `Pill`, `TapCard`, `FadeIn`. No visible change yet but unblocks everything else.
2. **Mascot rebuild** (Week 1) — Expand `MomoMentorBubble` → full mood system. Drop it on every existing page.
3. **Board-game Portal** (Week 2) — Replace Portal page. Big visual win, kids will notice immediately.
4. **Lesson scaffold + refactor ChickFilA** (Week 2-3) — One worked example using the new pattern.
5. **Card system + collection screen** (Week 3) — New reward layer wired into Supabase.
6. **Mini-game library** (Week 4-5) — One per lesson. Lemonade stand first (most flexible).
7. **Refactor remaining lessons + Certificate** (Week 6) — Standardize everything, ship cert.
8. **Twemoji + final polish** (Week 6) — Drop in script, audit all emojis.

Risk: card data and lesson data need a clean schema so we can add lessons later without code changes. Settle that schema in step 4 before doing more lessons.

---

## 5. What NOT to copy from the inspiration file

- **Single-file 5,600-line React** — that works for a prototype but we already have a real Vite app. Each component should be its own file.
- **CDN React via UMD** — we use bundled React. Keep using it.
- **Inline styles via React.createElement** — we have JSX. Use it. Move styles to CSS modules or styled props.
- **No TypeScript** — the inspiration is plain JS. We're TS. Keep types.
- **No tests** — we have a test setup. Add tests for the new primitives.

The goal is to **adopt the design language and engagement loop**, not the code structure. Treat it like a Figma file, not a starter kit.

---

## 6. Open questions to resolve before building

1. **Do lessons live in code or data?** If data (e.g., JSON in Supabase), we can add lessons without redeploying. Recommend data-driven.
2. **Cards: server-authoritative or client-only?** If server, we need a `cards_earned` table keyed on `child_id`. If client, localStorage is fine but resets per device.
3. **Certificate: PDF or PNG?** PNG is easier (html-to-image), PDF prints cleaner. Pick one.
4. **What's the source of truth for "Momo"?** The RN app has Momo Mentor too. Should the mascot use the same SVG asset across both products?
5. **Spaced review integration**: the existing `SpacedReviewQuiz` should probably feed off the same card-earned data. How?
