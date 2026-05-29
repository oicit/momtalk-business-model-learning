# Curriculum → Kingdoms Coverage Map

**Date:** 2026-05-29
**Source design:** `docs/specs/2026-05-29-momo-world-kingdoms-design.md` (Momo's World)
**Curriculum:** 29 shipped + 27 brainstormed = 56 lessons (see `docs/specs/2026-05-29-new-modules-brainstorm-v2.md`)

## What this doc does

The Momo's World design proposes organizing kid business education around **10 Kingdoms** — Wild Earth, Power Core, Machine Forge, Mega Build, Digital Universe, Trade Routes, Wisdom Academy, Civilization Council, Healing & Life, Future Frontier. Each kingdom covers a big slice of the real economy (energy, infrastructure, software, etc.).

Our current curriculum was built **bottom-up around business concepts and famous companies**, not top-down around industries. This doc answers:

1. Which of our 56 lessons fit which kingdom?
2. Which kingdoms are well-covered and which have ZERO coverage?
3. What would it take to ship a "Kingdom Tour" experience on top of the existing curriculum?

## TL;DR

Our curriculum is **catastrophically lopsided** toward Trade Routes + Digital Universe + retail/services. We have **zero lessons** in 3 of 10 kingdoms (Power Core, Machine Forge, Healing & Life), and barely any in 3 more (Wild Earth, Mega Build, Future Frontier). The bottom-up "famous-business-deep-dive" pattern picked the companies kids already know — which clusters them in just 3 of the 10 kingdoms.

The Kingdoms framework is a **valuable lens** for spotting these gaps. To actually ship "Momo's World" as designed would require ~10-15 new lessons in the underserved kingdoms PLUS a meta-level Kingdom navigation surface in the app. To partially adopt the framework — say, just use it to organize the existing curriculum — requires zero new lessons.

## Coverage table

| Kingdom | Lessons mapping here | Coverage | Verdict |
|---|---|---|---|
| 🌍 **Wild Earth** (resources, agriculture, mining, waste) | Farm Stand ✓ | 1/56 | 🚨 Massive gap |
| ⚡ **Power Core** (energy, grid, batteries) | — | 0/56 | 🚨 Zero coverage |
| ⚙️ **Machine Forge** (machinery, robotics, chips) | — | 0/56 | 🚨 Zero coverage |
| 🏗️ **Mega Build** (construction, infrastructure, real estate) | McDonald's ✓; Real Estate 🆕 | 1+1 | ⚠️ Thin |
| 💻 **Digital Universe** (software, AI, internet) | App Maker ✓ · Roblox ✓ · YouTube Creator ✓; Apple 🆕 · Google 🆕 · TikTok 🆕 · AI & Jobs 🆕 · Cryptocurrency 🆕 · Tesla 🆕 | 3+6 | ✅ Strong |
| 🛒 **Trade Routes** (retail, ecommerce, logistics, restaurants) | Garage Sale ✓ · Lemonade Stand ✓ · Cookie Bakery ✓ · Snow Day Hustle ✓ · Etsy Shop ✓ · Pizza Place ✓ · Chick-fil-A ✓ · Amazon ✓ · Costco ✓ · Lego ✓ · Disney ✓; Hot Cocoa Stand 🆕 · Walmart 🆕 · Trader Joe's 🆕 · Pokemon 🆕 · IKEA 🆕 | 11+5 | ✅ Overflowing |
| 📚 **Wisdom Academy** (education, tutoring, learning apps) | Business 101 ✓; Tutor Trade 🆕 · Library Card Power 🆕 · Coding Gig 🆕 | 1+3 | ⚠️ Thin |
| 🏛️ **Civilization Council** (government, civic, regulation) | Tax Town ✓ · Charity Lab ✓ · Risk Pool Island ✓ | 3/56 | ⚠️ Thin |
| 💊 **Healing & Life** (healthcare, biotech, medical devices) | — | 0/56 | 🚨 Zero coverage |
| 🚀 **Future Frontier** (space, AI, quantum, climate tech) | Stock Market ✓ · Startup Pitch ✓; AI & Jobs 🆕 · Cryptocurrency 🆕 | 2+2 | ⚠️ Thin |

### Lessons that don't map to a kingdom

These teach **meta-skills or money concepts** rather than industries — they're cross-cutting:

- **Money concepts:** Piggy Bank, Subscription Sense, Credit & Debt 🆕, Banking Basics 🆕, Inflation 🆕, Supply & Demand 🆕, Bonds 🆕, Index Funds 🆕
- **Meta-skills:** Pet Shop (service-biz mechanics — borderline Trade Routes), Inventor's Lab, Deal Maker, Marketing Mountain, Survey Master, Failure & Bounce Back 🆕, SMART Goals 🆕, Public Speaking 🆕, Time Management 🆕, Habit Building 🆕
- **Cross-kingdom:** Globalization 🆕

These ~18 lessons would map to **Business Model Powers** in the kingdom system (Subscription Power, Platform Power, etc.) — the cross-cutting power cards that work in any kingdom.

## Mapping Business Model Powers → our cards/lessons

The kingdom design proposes 7 "Business Model Powers" as cross-kingdom collectibles. Our existing card system already covers most:

| Power Card (Momo's World) | Our existing lesson(s) | Status |
|---|---|---|
| **Subscription Power** | Subscription Sense ✓ | ✅ Covered |
| **Platform Power** | Roblox ✓ | ✅ Covered |
| **Franchise Power** | McDonald's ✓ · Chick-fil-A ✓ | ✅ Covered |
| **Luxury Power** | — | 🚨 Gap |
| **Razor-and-Blade Power** | — | 🚨 Gap |
| **Ecosystem Power** | Lego ✓ · Disney ✓ · Apple 🆕 | ✅ Covered |
| **Picks-and-Shovels Power** | (App Maker touches it) | ⚠️ Thin |

Two missing: **Luxury Power** (Hermès / Ferrari / Rolex) and **Razor-and-Blade Power** (Gillette / printer-ink). Both are easy lesson candidates if you want to round out the power deck.

## The big strategic question

Adopting the Kingdom framework requires picking one of these levels of commitment:

### Level 0 — Use kingdoms as a navigation lens only
- Existing 56 lessons stay. Add a "by Kingdom" view alongside "by Skill" and "by Rarity" on the Portal / Cards page.
- **Cost:** ~1 day (UI work, mostly).
- **Wins:** Surface the structural gaps to learners + parents. Helps the kid see WHICH ecosystem they've explored.
- **Loses:** The kingdom UI shows mostly empty kingdoms for the next year unless we build more lessons.

### Level 1 — Adopt kingdoms in marketing, defer build
- Re-pitch the curriculum as "10 Kingdoms" externally. Internally, the 56 lessons continue with skill grouping.
- **Cost:** Some marketing copy. Minimal code work.
- **Wins:** Better story to parents; the framework is more memorable than "29 lessons across 6 skill lanes."
- **Loses:** Cosmetic only — the lopsided coverage remains real.

### Level 2 — Build out the underserved kingdoms
- Ship ~10-15 new lessons specifically targeting the 6 underserved kingdoms: Wild Earth, Power Core, Machine Forge, Mega Build, Healing & Life, Future Frontier.
- **Cost:** ~10-15 days of writing, following the gold-standard 9-beat template that proved out on the May-28 rollout.
- **Wins:** Curriculum becomes balanced across the entire economy. Story to parents AND the curriculum matches.
- **Loses:** ~3 weeks of focused work.

### Level 3 — Build the full Momo's World experience
- Implement the Kingdom design as designed: world map, kingdom-by-kingdom progression, mini-games per kingdom, characters (Sasa / Professor Pip / Captain Flow / Builder Bao / Doctor Lumi), Business Model Powers as collectibles, parent dashboard.
- **Cost:** Months. Major architecture work.
- **Wins:** A genuinely differentiated kid product — the "Civilization for kids" the doc envisions.
- **Loses:** Months of work; high risk on whether kids actually want the full game vs. just lessons.

## My recommendation

**Level 0 + Level 2 in parallel.** Specifically:

1. **Right now (1 day):** Add "by Kingdom" as a third view on `/cards` (alongside Rarity + Skill) and on the Portal map. This makes the coverage gaps visible to you, parents, and kids. Costs nothing in lesson work; reveals the gap.
2. **Next 10-15 days (in waves):** Ship the 10 most-leverage new lessons targeting the underserved kingdoms:
   - **Wild Earth:** Coal & Copper (mining → tech), Modern Farming (Deere / Nutrien)
   - **Power Core:** Power Up (utility model, grid, blackout mission), Solar vs Coal (renewable economics)
   - **Machine Forge:** Robot Factories (Caterpillar / ABB), Chip Wars (Nvidia / TSMC / ASML)
   - **Mega Build:** City Builder (construction + infrastructure economics)
   - **Healing & Life:** Hospital Money (how healthcare is paid for), Vaccine Makers (Pfizer / Moderna)
   - **Future Frontier:** Rocket Race (SpaceX vs Blue Origin), Climate Tech (the $2T opportunity)
3. **Defer Level 3** until 1+2 prove that parents/kids respond to the kingdom framing.

After step 2, every kingdom has ≥3 lessons, no kingdom is empty, and the "Momo's World" story can be told honestly.

## Concrete next module candidates by kingdom (for the brainstorm list)

These would round out kingdom coverage and complement the May-29 brainstorm v2's recommended 6. Listing as a separate pool so you can pick from both lists.

### Wild Earth (need 4-6)
- 🌽 **Modern Farming** — Deere autonomous tractors, Nutrien fertilizer, Cargill grain trading. Mission: track the corn in your snack from field to plate.
- 🪨 **Coal & Copper** — what's actually IN your phone (lithium, cobalt, copper, rare earths). Mission: take apart an old electronic with a parent, count materials.
- 🌊 **Water Works** — utilities as a business (American Water Works). Mission: track water bill + waste per day.
- ♻️ **Trash to Cash** — Waste Management as a $50B business. Mission: weigh your family's recycling for a week.

### Power Core (need 4-6)
- ⚡ **Power Up** — utilities, grid, generation mix. Mission: count what's on your electric bill, find your local utility.
- ☀️ **Solar vs Coal** — renewables economics, why cost-per-kWh matters. Mission: estimate solar payback for your home.
- 🔋 **Battery Boom** — Tesla / CATL / Fluence storage. Mission: count batteries in your house.
- 🛢️ **Why Oil Still Matters** — ExxonMobil + petrochemicals; aviation, shipping, plastics. Mission: count plastic items in one room.

### Machine Forge (need 3-4)
- 🤖 **Robot Factories** — Caterpillar, ABB, FANUC industrial robots. Mission: find a robot in a real workplace (Roomba counts).
- 💻 **Chip Wars** — Nvidia / TSMC / ASML. The most important machines on Earth. Mission: find chips in 5 household devices.
- 🔧 **Picks & Shovels** — the BUSINESS MODEL itself as a lesson. Mission: find 3 "picks-and-shovels" businesses near you (auto-parts store, hardware store, B2B services).

### Mega Build (need 2-3)
- 🏗️ **City Builder** — construction economics (Caterpillar / Vulcan / Home Depot). Mission: identify 5 pieces of infrastructure near you and ask "who built this?"
- 🏠 **Home Owner** (already in brainstorm v2 — Real Estate) — mortgages, equity, rent-vs-own.

### Healing & Life (need 3-4)
- 🏥 **Hospital Money** — how healthcare actually gets paid for (insurance, Medicare, the $4T system). Mission: ask a parent how their last doctor visit got paid.
- 💉 **Vaccine Makers** — Pfizer / Moderna mRNA, why drug development takes 10 years + $1B. Mission: count vaccines you've had, look up what each one does.
- 🦷 **Dentist Economics** — small-business healthcare as a model. Mission: ask your dentist what their busiest day looks like.

### Future Frontier (need 2-3 beyond AI & Crypto)
- 🚀 **Rocket Race** — SpaceX reusability dropped launch cost 100×. Mission: watch a SpaceX launch live with parent.
- 🌡️ **Climate Tech** — the $2T opportunity in fixing climate. Mission: identify 3 climate-tech ideas in your area.

### Cross-cutting (Business Model Powers gaps)
- 💎 **Luxury Lesson** — Hermès / Ferrari / Rolex. Why a $20K bag exists. Mission: find a luxury product near you, calculate the markup.
- 🪒 **Razor & Blade** — Gillette / printer-ink / coffee pods. Mission: find a "trap" purchase in your house.

That's ~17 candidate lessons. Combined with the v2 brainstorm's 27, the queue becomes 44 candidates — plenty to keep building.

## Mapping summary

```
Current 29 shipped:
  Trade Routes:     11  ████████████████████████░░░░
  Digital Universe:  3  ████████░░░░░░░░░░░░░░░░░░░░
  Civilization:      3  ████████░░░░░░░░░░░░░░░░░░░░
  Future Frontier:   2  █████░░░░░░░░░░░░░░░░░░░░░░░
  Wild Earth:        1  ███░░░░░░░░░░░░░░░░░░░░░░░░░
  Mega Build:        1  ███░░░░░░░░░░░░░░░░░░░░░░░░░
  Wisdom Academy:    1  ███░░░░░░░░░░░░░░░░░░░░░░░░░
  Power Core:        0  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  Machine Forge:     0  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  Healing & Life:    0  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  Cross-cutting:     7  (money concepts + meta-skills)

After v2 brainstorm if all 27 ship:
  Trade Routes:     16
  Digital Universe:  9
  Civilization:      3
  Future Frontier:   4
  Wild Earth:        1
  Mega Build:        1
  Wisdom Academy:    4
  Power Core:        0
  Machine Forge:     0
  Healing & Life:    0
  Cross-cutting:    18

After this doc's kingdom additions (~17 more):
  Trade Routes:     16
  Digital Universe:  9
  Civilization:      3
  Future Frontier:   6
  Wild Earth:        5
  Mega Build:        3
  Wisdom Academy:    4
  Power Core:        4
  Machine Forge:     3
  Healing & Life:    3
  Cross-cutting:    20
```

That last column is what a **balanced curriculum** would look like — every kingdom ≥3 lessons, no zeros, total around 75 lessons. Compared to the current 29.

## What ships next

Three things you could do, in priority order:

1. **Pick a path** (Level 0 / 0+2 / 3). Without this, the rest is just thinking.
2. **If Level 0+2:** Tell me which 6 of the ~44 candidate lessons to write next. I'd lean toward filling Power Core + Healing & Life first (those are the biggest zero-coverage embarrassments), but you decide.
3. **Update the brainstorm doc** with the kingdom-coverage dimension officially layered in.

The Momo's World design itself is now preserved at `docs/specs/2026-05-29-momo-world-kingdoms-design.md` so it doesn't get lost.
