# New Lesson Modules — Phased Rollout Plan

**Date:** 2026-05-28
**Source brainstorm:** `docs/specs/2026-05-19-module-brainstorm.md`
**Quality reference:** `src/data/lessons/lemonade-stand.ts` (584 LOC, 10 beats)

## 0. Goal

Build out all 22 new lesson modules surfaced in the May-19 brainstorm,
phased in waves of decreasing priority. Every new lesson must match the
gold-standard depth of Lemonade Stand — not the lighter pet-shop / youtube
template.

## 1. Quality bar (non-negotiable for every new lesson)

A lesson is "done" only if it passes this checklist:

- **9–10 beats** following the Lemonade-Stand template:
  `intro → decision → think-deeper (or dialogue) → concept-cards →
   calc-challenge (or second decision when non-numeric) → mini-game (only
   where one exists) → brainstorm → connect → outro → real-world-mission`
- **All `AdaptiveText` fields** carry `easy / medium / hard` variants. No
  string-only shortcuts inside a kid-facing field.
- **Real-world mission** includes printables: a tracker, a worksheet, a
  checklist; a sign when the mission has a public/shopkeeper aspect.
- **`connect` beat** lists ≥ 3 real businesses where the same concept
  shows up. Real numbers when possible (Warren Buffett $114.75, McD's
  store P&L, etc.).
- **`brainstorm` beat** has ≥ 4 hints; closer line reinforces "pick 1-2,
  go deep" over breadth.
- **Card reward** matches the rarity from the brainstorm doc.
- **`subtitle`** at all 3 levels.
- **File length** 500–650 LOC. Anything under 350 LOC is "not done."
- **No grey text or opacity for hierarchy** (global CLAUDE.md rule).
- **Theme** reused from existing `saving / taxes / stocks / business /
   entrepreneur / supply / inflation / debt` slots when the concept fits;
  new theme key added only when the lesson is a brand/product.
- **Typecheck** clean (`npx tsc --noEmit`).

## 2. The 22 modules, grouped into 5 phases

Tier ordering follows the brainstorm doc's recommendation: the
"shortest set that maximizes coverage of distinct concepts" goes first,
then the rest of each tier, then stretch.

### Phase 1 — Recommended starter 6 (highest leverage, mixed tiers)

| # | Slug | Module | Concept | Theme | Card (rarity) |
|---|---|---|---|---|---|
| 1 | `piggy-bank` | 🏦 Piggy Bank Power-Up | Compound interest | `saving` | Savings Sensei (Uncommon) |
| 2 | `stock-market` | 📈 Stock Market Adventure | Buying ownership | `stocks` | Stock Trader (Rare — already in registry) |
| 3 | `charity-lab` | ❤️ Charity Lab | Goal-driven giving | new `charity` | Heart of Gold (Rare) |
| 4 | `mcdonalds` | 🍔 McDonald's: Real Estate Empire | Hidden moat | new `mcdonalds` | Location Genius (Uncommon) |
| 5 | `inventors-lab` | 💡 Inventor's Lab | Design thinking | new `inventor` | Inventor (Rare) |
| 6 | `deal-maker` | 🤝 Deal Maker | Negotiation | new `deal-maker` | Negotiator (Rare) |

### Phase 2 — Round out Tier 1 (core economic concepts)

| # | Slug | Module | Concept | Theme | Card |
|---|---|---|---|---|---|
| 7 | `risk-pool` | 🛡️ Risk Pool Island | Insurance / pooling | new `risk` | Risk Master (Rare) |
| 8 | `tax-town` | 🏛️ Tax Town | Where tax goes | `taxes` | Tax Whiz (Uncommon — already in registry) |
| 9 | `subscription` | 🔁 Subscription Sense | Recurring revenue + churn | new `subscription` | Recurring Royal (Rare) |

### Phase 3 — Rest of Tier 2 (famous-business deep-dives)

| # | Slug | Module | Concept | Theme | Card |
|---|---|---|---|---|---|
| 10 | `roblox` | 🎮 Roblox | Platform economy | new `roblox` | Game Maker (Rare) |
| 11 | `costco` | 🛍️ Costco | Membership = profit | new `costco` | Member Master (Uncommon) |
| 12 | `amazon` | 🚚 Amazon | Logistics empire | new `amazon` | Logistics Lord (Rare) |
| 13 | `lego` | 🎨 Lego | Compatibility-as-moat | new `lego` | Brick Builder (Rare) |
| 14 | `disney` | 🐭 Disney | IP that compounds | new `disney` | IP Inventor (Legendary) |

### Phase 4 — Rest of Tier 3 (practical hustle modules)

| # | Slug | Module | Concept | Theme | Card |
|---|---|---|---|---|---|
| 15 | `farm-stand` | 🌽 Farm Stand | Seasonality / production | `supply` | Farm Hand (Uncommon) |
| 16 | `snow-day-hustle` | ❄️ Snow Day Hustle | Seasonal services | new `hustle` | Hustle Hero (Uncommon) |
| 17 | `marketing-mountain` | 📣 Marketing Mountain | AIDA + WoM | new `marketing` | Marketing Maven (Uncommon) |
| 18 | `survey-master` | 🧠 Survey Master | Customer research | new `research` | Research Pro (Uncommon) |

### Phase 5 — Stretch (4 of 10 — only the ones with clear real-world missions)

Drop the modules with no good kid-runnable mission. Pick the 4 strongest:

| # | Slug | Module | Concept | Card |
|---|---|---|---|---|
| 19 | `etsy-shop` | 🪡 Etsy Shop | Handmade + platform fees | Maker Pro (Rare) |
| 20 | `pizza-place` | 🍕 Pizza Place Economics | Food cost % / labor | Margin Master (Uncommon) |
| 21 | `startup-pitch` | 🦄 Startup Pitch | Pitching + equity | Founder (Legendary) |
| 22 | `app-maker` | 🌐 App Maker | Software margins / scale | Software Sensei (Legendary) |

(Defer Trading Card Tycoon, Movie Theater, Hotel, Ticket Master, Sports
Star, Trade-across-borders. They're fun but their "real-world missions"
are weak or require things kids can't easily do.)

## 3. Per-lesson wiring (the same 6 touch-points each time)

For every new module, exactly these files change:

1. `src/styles/kidsTokens.ts` — add theme entry if needed.
2. `src/data/cards.ts` — add card entry (or reuse existing slot).
3. `src/data/lessons/<slug>.ts` — the lesson data (the bulk of the work).
4. `src/pages/<Slug>Page.tsx` — 11-line scaffold wrapper.
5. `src/App.tsx` — one new route line.
6. `src/data/portalStops.ts` — one new map tile.
7. `src/data/missions.ts` — add lesson to the `LESSONS` array.

No changes to scaffold, beat types, or core components — every existing
beat type already covers the new lessons.

## 4. Sequencing within a phase

Do them sequentially, not in parallel — each lesson takes design + craft
time, and we want to ship/review each one before the next so the bar
doesn't drift. Order within Phase 1:

1. **Piggy Bank** first — establishes the "compound interest" lesson shape;
   important foundation; reusable money math primitives.
2. **Stock Market** — natural follow-on (savings → investing).
3. **McDonald's** — pivot to a famous-business deep-dive shape so the
   lesson template flexes early.
4. **Inventor's Lab** — first creative/non-numeric lesson; pressure-tests
   the brainstorm-heavy variant of the template.
5. **Deal Maker** — first negotiation lesson; another non-numeric variant.
6. **Charity Lab** — capstone of Phase 1; teaches money-as-tool for good.

## 5. Phase 1, Lesson 1 — Piggy Bank Power-Up (this commit)

### Concept anchor

"Money that makes money." The single most powerful number-sense idea: a
small amount + time + a multiplier compounds into something big. Real
adults still under-appreciate this.

### Famous-example anchor

Warren Buffett started compounding at age 11 with $114.75 in stock.
That same discipline is why he's now worth $100B+. Same math, more time.

### Beat sequence (10 beats)

1. **intro** — "What if your money could grow while you SLEEP?"
2. **decision** — Spend $20 now / hide it under the bed / put it in a
   savings account at 5%. Reveal: compound interest is real magic.
3. **think-deeper** — Why does money grow at all? (Banks pay you for
   letting them lend it out. Longer = more.)
4. **concept-cards** — Principal · Interest · Compounding · Time
   (4 cards because "time" is the secret 4th).
5. **calc-challenge** — Save $10/week for 4 weeks. Parent gives 10%
   match at the end. Answer = $44. Walkthrough reveals the *real*
   compounding effect: weekly compounding makes it $51 instead.
6. **brainstorm** — "What would you save for? Pick 3 goals at different
   sizes ($5 / $50 / $500)" — kid sees their own goal ladder.
7. **connect** — Warren Buffett, 401(k), Apple stock since 1980.
8. **outro** — "You've discovered the most powerful idea in money."
9. **real-world-mission** — Save fixed % of allowance for 4 weeks,
   parent matches 10% weekly. Tracker, worksheet, checklist.

### Mission printables

- **Tracker:** 4 rows × columns `Week / Date / I Saved / Parent Match /
  Total in Piggy Bank`.
- **Worksheet:** goal-ladder fill-in ($5 / $50 / $500 goals + dates),
  plus a compounding-curve sketch box.
- **Checklist:** where to keep the money safely + what counts as
  "income" (allowance / chores / gifts).

### Card

```ts
{
  id: 'savings-sensei',
  emoji: '🏦',
  title: 'Savings Sensei',
  fact: 'Saving + time = the most powerful money trick on Earth!',
  color: '#FFF0F5',
  rarity: 'Uncommon',
  awardedBy: 'piggy-bank',
}
```

### Theme

Reuse existing `saving` theme (`accent: T.pink, bg: gradient('#FFF0F5')`).
No new theme entry needed.

## 6. Acceptance criteria for Phase 1, Lesson 1

- [ ] `src/data/lessons/piggy-bank.ts` ≥ 500 LOC, 9-10 beats, all adaptive
      text at 3 levels.
- [ ] New card `savings-sensei` in `src/data/cards.ts` and `earnedCardFor`.
- [ ] `/piggy-bank` route in `App.tsx`.
- [ ] Portal tile in `portalStops.ts`.
- [ ] Lesson added to `missions.ts` `LESSONS` array.
- [ ] `npx tsc --noEmit` clean.
- [ ] Page loads in dev; intro renders without console errors.

## 7. Cadence

One commit per lesson. Each commit:
- A working, typechecked lesson on disk.
- One brief test render via vite dev / Playwright when feasible.
- Pushed to `main`.

After Phase 1 (6 lessons), pause and surface "what would you change
about the template?" before Phase 2.
