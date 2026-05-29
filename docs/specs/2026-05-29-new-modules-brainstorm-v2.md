# Module Brainstorm v2 — 2026-05-29

**Predecessor:** `docs/specs/2026-05-19-module-brainstorm.md` (generated 22 modules, all shipped).
**Status of shipped curriculum:** 29 lessons live on `main`, all earnable cards, full test suite.

## Goal of this brainstorm

Find the **next round** of high-value lessons by identifying the white space the existing 29 don't cover, then propose a concrete "next batch of 6" plus a longer wishlist.

Same three-test philosophy as v1:
1. Teaches a **distinct concept** the current 29 don't cover.
2. Has a **kid-runnable real-world mission** (safe, ≤ 1 week, no money required for parent to greenlight).
3. Maps to a **recognizable real business or real money situation** so kids see the concept playing out at scale.

## What's already shipped (audit before generating)

| Category | Lessons |
|---|---|
| **Foundation** | Business 101 |
| **Money concepts** | Piggy Bank (compound interest), Stock Market (individual stocks), Tax Town, Risk Pool Island (insurance), Subscription Sense |
| **Famous businesses** | Chick-fil-A, McDonald's, Roblox, Costco, Amazon, Lego, Disney |
| **Kid hustles** | Garage Sale, Lemonade Stand, Pet Shop, YouTube Creator, Cookie Bakery, Farm Stand, Snow Day Hustle, Etsy Shop, Pizza Place |
| **Soft skills** | Inventor's Lab, Deal Maker, Charity Lab, Marketing Mountain, Survey Master |
| **Stretch** | Startup Pitch, App Maker |

29 total. Strong but uneven — heavy on **operations + hustles**, light on **personal finance** and **economic systems**.

## White-space audit (concepts NOT covered)

### Personal finance gaps (highest leverage)

The biggest hole. We taught kids how to *make* money (9 hustles + entrepreneurship) and how to *invest* it (Stock Market) and how to *give* it (Charity Lab) — but barely how to *manage* it.

- 🚫 **Credit & debt** — borrowing money, interest rates as cost. The mirror of compound interest, equally important. No lesson today.
- 🚫 **Banking basics** — checking vs savings, debit vs credit, what an ATM actually is. Practical adult prep. No lesson.
- 🚫 **Inflation** — the `inflation-fighter` card is a Legendary orphan-now-milestone. Concept untaught.
- 🚫 **Bonds** — `bond-expert` is an orphan-now-milestone card. Different from stocks. Untaught.
- 🚫 **Supply & demand** — `market-mind` is an orphan-now-milestone card. Untaught at the lesson level. (Lemonade Stand brushes it.)
- 🚫 **Index funds / passive investing** — Stock Market taught picking individual stocks (the Lynch model). The Buffett "buy the index" model is the other half.
- 🚫 **Salary vs hourly vs commission** — most adults don't fully grasp these. Snow Day Hustle is the closest we have (hourly), but the concept isn't named.

### Famous-business gaps

Kids know these brands; we don't have lessons. Strong candidates given how well the famous-business deep-dives work (Phase 3).

- 🚫 **Apple** — ecosystem lock-in, vertical integration, services flywheel. Different model from anything we have.
- 🚫 **Google / Search** — ads ARE the product; "you are the customer when you pay, the product when you don't."
- 🚫 **TikTok** — algorithm-as-the-business, creator economy mechanics. Extremely relevant to your kids.
- 🚫 **Walmart** — scale + low-margin operations + supplier power. The opposite of premium positioning.
- 🚫 **Tesla** — mission-driven brand premium, vertical integration, founder-as-marketing.
- 🚫 **IKEA** — DIY-as-cost-shifting, flat-pack logistics, the "show room → buy elsewhere" trick.
- 🚫 **Trader Joe's** — private label + curation as the business model.
- 🚫 **Pokemon** — Disney covered IP-that-compounds; Pokemon is its own case (TCG + gaming + media simultaneously).

### Soft-skill gaps

The current 5 soft-skill lessons (Inventor / Deal Maker / Charity / Marketing / Survey) cover *making something happen*. Nothing covers *handling when it goes wrong* or *meta-skills*.

- 🚫 **Failure & resilience** — what to do when your hustle flops. The most-requested topic by parents in literature, the most-missing in our curriculum.
- 🚫 **Public speaking** — pitching is in Startup Pitch but the general skill isn't taught.
- 🚫 **Goal setting / SMART goals** — Charity Lab brushed it; no lesson teaches the framework as the lesson.
- 🚫 **Time management** — older kids especially. Connects to hourly rate from Snow Day Hustle.
- 🚫 **Habit building** — the engine behind every long-horizon outcome we taught (saving, investing, compounding).
- 🚫 **Curiosity / asking questions** — the input to Survey Master generalizes.

### Big-picture / economic systems gaps

These are heavier but high-impact for older kids.

- 🚫 **AI and jobs** — 2026's most relevant topic. What AI does for jobs, what jobs it'll create, how to position. Nothing in the curriculum.
- 🚫 **Cryptocurrency / Bitcoin** — kids hear about it, parents avoid it. A neutral explainer would be valuable.
- 🚫 **Real estate / buying a home** — the largest financial decision most adults make. McDonald's touched real estate as a business; nothing teaches it as a personal finance topic.
- 🚫 **Globalization** — "your t-shirt was touched by 5 countries before you wore it."
- 🚫 **Public goods extension** — Tax Town covered why we share-fund things; doesn't cover libraries / open source / Wikipedia as their own model.

## Module candidates (full wishlist, 24 ideas)

Organized by tier. Each: concept, real-world mission, real-world anchor, suggested card.

### Tier 1 — Personal finance fundamentals (highest priority)

#### 1.1 💳 Credit & Debt
- **Concept:** Borrowing money costs money. Interest rate × time = real cost. Credit isn't free.
- **Real-world:** Parent loans kid $10 at 10% weekly interest. Kid pays back over 4 weeks; tracks total cost. Reveal: a $1,000 credit card balance at 24% APR costs $240/year doing nothing.
- **Anchor:** Credit card APR math, payday loans, "buy now pay later."
- **Card:** Debt Dodger (Uncommon) — "A $1,000 credit card balance costs you $240/year if you only pay minimums!"

#### 1.2 🏦 Banking Basics
- **Concept:** Checking vs savings, debit vs credit, what an ATM does, why banks exist.
- **Real-world:** Open (or visit) a real kids' savings account with a parent. Track deposits + balance for 4 weeks.
- **Anchor:** FDIC insurance, why your money is safer in a bank than under your bed, what the bank does with your money (it lends it — connects to Piggy Bank).
- **Card:** Banker (Uncommon) — "FDIC insurance means up to $250K of your savings is guaranteed safe!"

#### 1.3 📊 Inflation Lesson (activates orphan card)
- **Concept:** Money buys LESS over time. The 15¢ movie ticket of 1920 = $12 today.
- **Real-world:** Interview a grandparent — "What did stuff cost when you were 10?" Compare 3 items to today's prices. Compute % change.
- **Anchor:** Real life cost-of-living comparisons; why salaries rise; why your "rich" relative's inheritance shrinks if it's just cash.
- **Card:** Inflation Fighter (Legendary, already exists) — wire `awardedBy: 'inflation-lesson'`.

#### 1.4 ⚖️ Supply & Demand (activates orphan card)
- **Concept:** Scarce + popular = expensive. Plentiful + unwanted = cheap. The two-axis price grid.
- **Real-world:** Pick a real Pokemon card / Funko / sneaker. Track its price over 2 weeks. Identify what moves it.
- **Anchor:** Concert tickets, gas prices, sneaker resale, scalping.
- **Card:** Market Mind (Uncommon, already exists) — wire `awardedBy: 'supply-demand'`.

#### 1.5 🤝 Bonds (activates orphan card)
- **Concept:** Lending money to companies/governments. The safer cousin of stocks.
- **Real-world:** Parent + kid buy a real I-Bond ($25 minimum at TreasuryDirect). Track value over 5 years (long mission with parent check-in).
- **Anchor:** US savings bonds, corporate bonds, why grandparents own them.
- **Card:** Bond Expert (Uncommon, already exists) — wire `awardedBy: 'bonds'`.

#### 1.6 📈 Index Funds (the OTHER investing lesson)
- **Concept:** Don't pick stocks — buy ALL of them. The Buffett trick: a low-fee S&P 500 fund beats 90% of active investors.
- **Real-world:** Paper-portfolio: $100 in 3 individual picks vs. $100 in VOO/SPY. Track for 10 days, compare returns.
- **Anchor:** Buffett's $1M bet against hedge funds (he won — by a landslide).
- **Card:** Index Investor (Rare) — "Warren Buffett bet $1M that an index fund would beat hedge funds. He won by 50%!"

### Tier 2 — Famous business deep-dives (high priority, proven format)

#### 2.1 🍎 Apple
- **Concept:** Vertical integration + ecosystem lock-in + services flywheel. You don't buy an iPhone — you join the Apple universe.
- **Real-world:** Count how many Apple-branded things are in your house. Map them.
- **Anchor:** App Store, iCloud, AirPods auto-pair, why iMessage matters.
- **Card:** Ecosystem Architect (Legendary) — "Apple makes $85B/year just from services — bigger than McDonald's entire business!"

#### 2.2 🔍 Google / Search
- **Concept:** "When the product is free, YOU are the product." Ads as the business model.
- **Real-world:** Count the ads you see in 1 hour of normal phone use. Tally by platform.
- **Anchor:** Google search ads ($230B/year), YouTube ads, why "incognito" doesn't really hide you.
- **Card:** Search Master (Rare) — "Google makes about $40 every year from YOU specifically — from ads."

#### 2.3 🎵 TikTok / Algorithm Economy
- **Concept:** The algorithm IS the business. It decides who gets famous + who gets paid.
- **Real-world:** Watch 10 TikToks (with parent). Identify the algorithm pattern: what made each one stick? What pattern keeps coming back?
- **Anchor:** Creator Fund payments, algorithmic virality, ByteDance valuation $300B+.
- **Card:** Algorithm Tamer (Rare) — "TikTok decides what 1.5 BILLION people see every day — that's the real product."

#### 2.4 🛒 Walmart
- **Concept:** Scale + low margin + supplier squeeze. Opposite of Costco's "fee is the business."
- **Real-world:** Visit (or research) a Walmart. Pick 5 items, compare prices to 2 other stores. Find the cheapest.
- **Anchor:** Walmart's $600B revenue, the 1-cent-per-dollar profit margin, supplier negotiations.
- **Card:** Scale Master (Rare) — "Walmart makes 1 cent profit on every dollar — but sells $600 BILLION worth of stuff!"

#### 2.5 🚗 Tesla
- **Concept:** Mission-driven brand + vertical integration + founder-as-marketing.
- **Real-world:** Find 3 Teslas in your neighborhood. Ask the drivers (with a parent!) why they bought one. Note common themes.
- **Anchor:** Tesla's $0 advertising budget, Musk's tweets moving the stock, Gigafactory vertical integration.
- **Card:** Vision Engineer (Rare) — "Tesla spends $0 on ads — Elon's tweets do all the marketing for free!"

#### 2.6 🪑 IKEA
- **Concept:** DIY-as-cost-shifting. Customers do the assembly → IKEA saves labor + ships flat → 80% volume savings.
- **Real-world:** Assemble something (LEGO works, real IKEA furniture even better). Time it. Compute "your hourly rate" if IKEA paid you.
- **Anchor:** Flat-pack design, the Blue Bag, the meatball trick to keep families in store.
- **Card:** Flat Pack Pro (Uncommon) — "IKEA's flat-pack design lets them ship 80% MORE furniture per truck!"

#### 2.7 🛍️ Trader Joe's
- **Concept:** Curation + private label + intentional scarcity. You can only buy this thing here.
- **Real-world:** Walk Trader Joe's (or website). Count private-label products. Identify the 3 most unique things.
- **Anchor:** ~90% private label, ~4,000 SKUs (vs. Walmart's 140K), Hawaiian shirts as anti-branding.
- **Card:** Curator (Uncommon) — "90% of what Trader Joe's sells is their own brand — you can't buy it anywhere else!"

#### 2.8 ⚡ Pokemon
- **Concept:** IP that compounds across categories — cards + games + anime + movies + merch simultaneously.
- **Real-world:** Audit your Pokemon collection (or a friend's). Count cards by rarity. Identify the most-traded.
- **Anchor:** Largest media franchise in history ($110B lifetime), 30B+ cards printed.
- **Card:** Pocket Monster (Rare) — "Pokemon is the BIGGEST media franchise in history — bigger than Mickey, Star Wars, and Harry Potter."

### Tier 3 — Resilience + meta-skills (gap that matters)

#### 3.1 💪 Failure & Bounce Back
- **Concept:** Every successful business has 5 failures behind it. Failure is data, not identity.
- **Real-world:** Run a deliberately bad first attempt at SOMETHING new — and write the post-mortem before retrying.
- **Anchor:** Walt Disney (fired), Soichiro Honda (rejected by Toyota), J.K. Rowling (12 rejections), Bezos (Fire Phone disaster).
- **Card:** Bounce Back (Rare) — "Walt Disney was FIRED for 'lacking imagination' — then built the Disney empire!"

#### 3.2 🎯 SMART Goals
- **Concept:** Specific + Measurable + Achievable + Relevant + Time-bound. The framework behind every project that actually finishes.
- **Real-world:** Convert one vague wish ("I want to be better at art") into a SMART goal with a 30-day deadline + weekly check-ins. Run it.
- **Anchor:** OKRs at Google, KPIs in business, the 4 Disciplines of Execution.
- **Card:** Goal Crusher (Uncommon) — "Specific + Measurable + Achievable + Relevant + Time-bound = goals that actually finish!"

#### 3.3 🎤 Public Speaking
- **Concept:** Presenting to a group is a skill, not a talent. Reps build it.
- **Real-world:** Give a 2-minute talk to 5 family members about something you love. Record it. Rate yourself. Do it AGAIN.
- **Anchor:** Toastmasters, TED talks, why CEOs all practice.
- **Card:** Voice (Uncommon) — "The average TED talk is 18 minutes — practiced about 200 times before going on stage!"

#### 3.4 ⏱️ Time Management
- **Concept:** You have the same 24 hours as Beyoncé. What separates outcomes is how you spend them.
- **Real-world:** Log every 30-minute block for 2 days. Categorize: work / play / waste. Cut the worst category 20%.
- **Anchor:** Pomodoro technique, "deep work" (Cal Newport), why founders block calendars.
- **Card:** Time Wizard (Uncommon) — "You have the same 24 hours as anyone — what you DO with them is the difference!"

#### 3.5 🔄 Habit Building
- **Concept:** Tiny daily action × time = enormous output. The lever behind compound interest, but for behavior.
- **Real-world:** Pick one tiny habit (push-up, read 1 page, save $0.50). Do it for 30 days. Track every day.
- **Anchor:** Atomic Habits (James Clear), "compound interest of self-improvement," 1% better every day = 37× better/year.
- **Card:** Habit Hero (Rare) — "1% better every day = 37× better in one year. The math of habits is exponential!"

### Tier 4 — Kid hustles (smaller value-add, format-proven)

#### 4.1 🎓 Tutor Trade — selling knowledge
- **Concept:** Knowledge is product. Selling skill to younger kids = service business with infinite supply (you).
- **Mission:** Tutor a younger sibling/cousin in something you know (math, drawing, video game). 3 sessions, $5/session.
- **Card:** Knowledge Trader (Uncommon).

#### 4.2 ☕ Hot Cocoa Stand — seasonal complement
- **Concept:** Winter version of Lemonade Stand. Demand windows work both ways.
- **Mission:** Run a real winter cocoa stand at a sports game / cold day. Premium pricing for warmth.
- **Card:** Winter Wizard (Uncommon).

#### 4.3 📚 Library Card Power
- **Concept:** Public libraries = free Costco for knowledge. The non-business that beats every paid service.
- **Mission:** Get a library card. Check out 5 things. Compute "saved" value.
- **Card:** Library Member (Common).

#### 4.4 💻 Coding Gig (older kids 10+)
- **Concept:** First paid coding job at kid scale. Build something tiny for a real person.
- **Mission:** Use Scratch/code.org/iPad app to make a thing for a family member who wants it.
- **Card:** Code Trader (Rare).

### Tier 5 — Stretch / advanced (big topics, harder to nail)

#### 5.1 🤖 AI & Jobs
- **Concept:** AI is the biggest economic shift since electricity. What jobs go away, what jobs get created.
- **Real-world:** With parent: list 5 jobs in your family/neighborhood. For each, ask: will AI help, replace, or change it? Discuss.
- **Anchor:** ChatGPT in classrooms, AI radiologists, AI tutors. Plus: new jobs (prompt engineer, AI auditor).
- **Card:** AI Native (Legendary) — "The kid who learns to USE AI well will out-earn the kid who fears it 10:1."

#### 5.2 ₿ Cryptocurrency
- **Concept:** Bitcoin = digital gold. Not magic, not a scam. Math + trust + scarcity.
- **Real-world:** Track Bitcoin's price for 10 days alongside a stock. Compare volatility.
- **Anchor:** Bitcoin's 2009 origin, why 21M coins exist, why El Salvador adopted it.
- **Card:** Digital Coin (Rare) — "Bitcoin has exactly 21 million coins. EVER. That scarcity is built into the math."

#### 5.3 🏠 Real Estate / Buying a Home
- **Concept:** The biggest single purchase most adults make. Mortgages, down payments, equity vs. rent.
- **Real-world:** Look up 3 real homes for sale near you on Zillow with parent. Estimate monthly mortgage. Compare to rent in your area.
- **Anchor:** 30-year mortgages, the "house poor" trap, why home prices doubled since 2000.
- **Card:** Home Buyer (Rare) — "A 30-year mortgage means you pay almost DOUBLE the home's price in interest!"

#### 5.4 🌍 Globalization
- **Concept:** Your stuff has been touched by 5+ countries before it reaches you.
- **Real-world:** Check the "Made in" tags on 10 items at home. Plot the countries on a world map. Trace the supply chain for ONE.
- **Anchor:** iPhone (designed CA, components from KR/JP/TW, assembled CN), bananas, cars.
- **Card:** Global Trader (Uncommon).

## Recommended next batch (6 modules)

Picking for: highest leverage × distinct concept × ready-to-build × activates orphan cards.

| # | Module | Why it's in this batch | Activates orphan? |
|---|---|---|---|
| 1 | 💳 **Credit & Debt** | The biggest hole in personal finance. Mirror of compound interest. Real-world mission is cheap + safe. | No (new card) |
| 2 | 📊 **Inflation Lesson** | Activates the only Legendary orphan card. Grandparent interview is one of the best missions of any lesson. | Yes — Inflation Fighter |
| 3 | ⚖️ **Supply & Demand** | Activates another orphan. Pokemon-card price tracking is a kid-magnetic mission. | Yes — Market Mind |
| 4 | 💪 **Failure & Bounce Back** | The single biggest meta-skill gap. Most parents specifically ask for this. | No (new card) |
| 5 | 🍎 **Apple** | Most-recognizable global brand without a lesson; ecosystem concept is genuinely new vs. our existing 7 famous-biz lessons. | No (new card) |
| 6 | 🤖 **AI & Jobs** | Most-relevant 2026 topic. Will age fastest if we wait. | No (new card — Legendary) |

That batch covers: a personal-finance pillar (debt), two economic-concept fillers (inflation + supply/demand), the resilience meta-skill that's been missing, a high-impact famous-business deep-dive, and a forward-looking lesson on the topic that will most reshape these kids' careers.

Two of the six (Inflation + Supply & Demand) **activate existing orphan cards** — so 6 lessons add only 4 new cards to the registry, keeping the deck tight.

## Cross-cutting upgrades to consider alongside

These multiply the value of EVERY existing lesson:

1. **Spaced review for earned cards.** Today, finishing a lesson grants a card and ends the loop. The `useSpacedReview` SM-2 implementation exists but nothing surfaces re-quizzes. Suggested: 1 day / 3 days / 1 week / 1 month after card-earn, Momo offers a 3-question recall quiz on the lesson. Could ship without writing any new lessons.
2. **Lesson sequence / "next lesson" recommendations.** Right now the map shows all 29 stops; the kid picks. A "what should I do next" suggestion based on completed lessons would smooth the path. Trivial logic; lives in the Portal page.
3. **Mission roster on `/practice`.** The mission-completion count is what drives `budget-boss` (the milestone card) and the welcome-back nudge. A real mission inbox showing accepted/reflected/abandoned would tighten the loop. Page exists; needs polish.

## What I'd defer

These came up in the brainstorm but aren't strong enough for the next batch:

- **Trader Joe's, IKEA, Tesla, Walmart** — all good famous-business lessons but lower kid-recognizability than Apple/TikTok.
- **Cryptocurrency** — controversial in the kid space; let the broader cultural conversation mature.
- **Real Estate / mortgages** — too abstract for kids under 11; would land better as a 16+ lesson.
- **Public Speaking, Time Management, Habit Building, SMART Goals** — all valuable but tend to teach abstractions; harder to write a real-world mission for. Better as a single bundled "Meta Skills" lesson someday.
- **Library Card Power, Tutor Trade, Hot Cocoa Stand** — fine additions but smaller value-add than the recommended 6.

## Summary

**If you ship the next 6 above:** the curriculum grows from 29 → 35 lessons, every orphan card except `budget-boss` becomes lesson-earned, and the curriculum picks up its weakest pillar (personal finance: debt + inflation + supply/demand).

**If you ship just 3 of the 6:** I'd pick Credit & Debt, Inflation Lesson, and Failure & Bounce Back. Those three close the most-cited gaps.

Pick one of three paths next:
- **A.** Build the recommended 6 in sequence (matches the May-28 rollout pattern; ~6 commits, ~3-5 days of work).
- **B.** Build just a "best 3" subset (Credit / Inflation / Failure) and stop.
- **C.** Do the spaced-review surfacing instead (no new lessons; deepens the existing 29).
