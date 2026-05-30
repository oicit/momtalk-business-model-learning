# Business Learning — Strategy: Lessons as the Heart + Five Engines

**Date:** 2026-05-30
**Product:** A kids' business & investing learning module in the **MomTalk ecosystem** (Kids petal).
**Status:** Strategy doc. Supersedes the venture-first / "MyBusiness" framing in `2026-05-29-10x-strategy.md`.

> **The one-line framing:** *Keep the lessons as the heart. Five engines make them come alive — coached by Momo, with stakes (points + a pretend portfolio), shared with family and friends, and connected to the real world.* **No venture, no ledger, no "run a business."**

---

## What this is (and what we explicitly cut)

We are **not** rebuilding the product around a child running a real micro-business. That venture-first idea — onboarding that forces a kid to "declare a business," a ledger, cards "cast on a venture," a `MyBusiness` shell — is **dropped**. It over-engineered the thing and pulled away from what's already good.

What's good is the **curriculum**. The strategy is to keep the lessons exactly as the core experience, and wrap five engines around them that make a static, read-heavy curriculum feel alive, personal, and connected to the real world.

## What we already have (verified in the codebase, 2026-05-30)

This grounds everything below — much of what a "10×" plan would "add" already exists:

- **79 shipped lessons** as data (`src/data/lessons/*.ts`) — the entire curriculum is now built (all 8 concept lanes + the 10 Real-World Industry lessons), 0 brainstormed remaining — each a sequence of rich *beats*: `intro → think-deeper → concept-cards → decision → calc-challenge → quiz → outro → real-world-mission`.
- **Adaptive difficulty** built in — every lesson carries `easy / medium / hard` text (`useAdaptive`).
- **Momo** the character already exists (`Momo.tsx`, `MomoMentorBubble.tsx`) — today he speaks *canned* lesson text.
- **Cards** with rarity + skill lanes including an **Investing** lane (`cards.ts`); **quizzes** award XP + skill scores.
- **Real-world-mission beats** already live inside lessons (printable trackers, reflection fields, parent notes).
- **A portal map** of the whole journey (`portalStops.ts`) across **9 lanes**.

The lessons are the asset. The engines are the leverage.

## The lesson structure today — 8 lanes

| Lane | Lessons | Notes |
|---|---|---|
| 🧠 Foundation | 1 | Business 101 (the mental model everything plugs into) |
| 💰 Money & Personal Finance | 8 | Piggy Bank, Tax Town, Risk Pool, Subscription + brainstormed |
| 📈 **Kids Investing** | 8 | investing concepts & behavior — see below |
| 🔎 **Stock Analysis** | 8 | **NEW** — sizing up companies, kid-style — see below |
| 🏢 Famous Businesses | 15 | Chick-fil-A, McDonald's, Disney, … |
| 🏰 Real-World Industries | 10 | Momo's World — Wild Earth, Power Core, Digital Universe… (built) |
| 💪 Kid Hustles | 13 | Lemonade, Garage Sale, Pizza Place, … |
| 🎯 Soft Skills & Meta | 10 | Negotiation, marketing, resilience, … |
| 🚀 Advanced & Big Picture | 6 | Startup Pitch, App Maker, AI & Jobs, … |

Mirrored in `docs/curriculum-mindmap.html`.

## The Kids Investing category (your wheelhouse)

A dedicated lane so investing literacy is a coherent arc, not scattered. Foundation → advanced, ages 7–9, all symbolic (no real money):

| # | Lesson | Concept | Status |
|---|---|---|---|
| 1 | Stock Market Adventure | A stock = owning a slice of a real company | ✅ shipped |
| 2 | **Index Funds — Buy Them ALL** | Buffett's trick: own every company at once | ✅ **shipped (built 2026-05-30)** |
| 3 | Don't Put All Eggs in One Basket | Diversification & spreading risk | ✅ shipped |
| 4 | The Long Game | Time in the market beats timing it | ✅ shipped |
| 5 | Dividends | Getting paid just to own a share | ✅ shipped |
| 6 | Bulls & Bears | Markets rise & fall — stay calm | ✅ shipped |
| 7 | Bonds | Lending to companies + governments | ✅ shipped |
| 8 | Build Your First Portfolio | Pick, track & diversify (capstone) | ✅ shipped |

**All 8 Kids Investing lessons are built and wired end-to-end** (lesson + theme + card + page + route + map stop), tsc clean, tests green (`69 shipped`), and rendering live.

## The Stock Analysis category (NEW)

A second investing lane — not "what is a stock" but **"how do you size up a company?"** This is your professional craft shrunk to kid scale, and it plugs straight into the Famous Businesses lane: the kid learns to *decode a company themselves* instead of being told the answer. **All 8 built and shipped** (same `LessonDef` pattern, tsc clean, tests green).

| # | Lesson | Concept |
|---|---|---|
| 1 | What Makes a Great Company? | winners, moats & staying power |
| 2 | Company Detective | decode what it sells & how it wins |
| 3 | Is It Growing? | more customers & sales each year |
| 4 | Does It Make Money? | revenue − cost on real companies |
| 5 | The Moat Test | what keeps copycats away |
| 6 | Cheap or Expensive? | price vs value — what's it worth? |
| 7 | Spot the Trend | notice what's changing & popular |
| 8 | Stock Detective (capstone) | analyze a company you love |

**Kids Investing** teaches *what investing is*; **Stock Analysis** teaches *how to judge what to invest in*. Together they're a real, kid-sized investing education — and they make the Famous Businesses lessons active (decode it yourself) instead of passive.

---

## The Five Engines (anchored to lessons, not a venture)

### 1. AI Momo — a true coach (not a chatbot)
Momo already exists in the code; today he speaks canned text. Tomorrow he **knows** what lessons the kid finished, which cards they earned, how they did on quizzes, their age/reading level, and interests. He asks open questions, coaches stuck moments, **adapts difficulty** (the app already has easy/medium/hard), invents fresh examples, and pulls real data ("AAPL's up 2% today — remember the Apple lesson?").
→ *Turns reading into conversation.*
**Build:** point MomTalk's context engine + a model at a kid-coach prompt; reuse the existing Momo component; kid-safety guardrails (kid-business-only, no PII, parent-visible transcript, "ask your grown-up" for real-world-risk).

### 2. Kid Capital — points + a pretend portfolio (symbolic only)
Earn points by finishing lessons, missions, and quizzes. Spend them on power-ups, themes, mascot/pet outfits, and a **pretend stock portfolio** tracked against real prices (AAPL, DIS, MCD, LEGO). **No real money** (education-first call).
→ *The only way investing literacy actually sticks: a kid watching their own picks rise and fall.*
**Build:** a points wallet (XP/skill scores already exist as a base) + a pretend-portfolio view fed by a free price API. The Kids Investing + Stock Analysis lanes are its natural home.

### 3. Family Mode — parent + kid duo
Weekly parent briefing: *"This week your kid learned the McDonald's lesson — that the real business is real estate — and aced the quiz. Ask this at dinner."* **Mission co-pilot:** lessons already have real-world-mission beats, so the parent gets the exact role and script. Family challenges (sibling quiz-offs).
→ *Same lessons, whole new family experience.*
**Build:** a weekly digest from existing progress/quiz/mission data; surface the mission's `parentNote` + printables to the parent. Native fit because MomTalk is the mom's account.

### 4. Social layer (careful)
Family circle (see siblings' badges + streaks) → opt-in friends (compete on lesson streaks, quiz wins) → moderated gallery (kid drawings from real-world missions, charity drives) → charity collabs. **No DMs, no public profiles by default.**
→ *Learning with peers, safely.*
**Build:** start family-circle-only (COPPA-safe because parent-mediated); friends/gallery later with full parent moderation.

### 5. Live world
A stock widget on the company lessons (Apple, Disney, Costco, McDonald's) **and the Kids Investing + Stock Analysis lessons**, a daily kid-level "Real World This Week" news card, live company milestones tied to lessons they've done, and a local business of the week.
→ *The static curriculum becomes a living one.*
**Build:** free price API for the widgets; a small curated/AI-summarized kid-news card.

### Why each engine targets a real weakness

| Current weakness | Engine that fixes it |
|---|---|
| Kid reads passively | Engine 1 — Momo makes it a conversation |
| No stakes / investing stays abstract | Engine 2 — points + pretend portfolio (felt, not financial) |
| Parents are observers | Engine 3 — weekly brief + mission co-pilot |
| Learning alone | Engine 4 — family circle, opt-in friends |
| Curriculum is frozen in time | Engine 5 — live prices + news connect it to today |

---

## Education-first anchor (unchanged)

Everything stays **education-first**: points/coins/stars and a **pretend** portfolio — *never real money*, no real-money mirror, no kid wallet. The pretend portfolio exists to teach how markets move, not to make a kid richer. This also keeps the product out of kid-fintech regulation entirely (no money movement → no money-transmission/custodial/KYC burden).

## Phased rollout (engines wrap the lessons, in order)

1. ✅ **Content DONE — all 79 lessons across 9 lanes are built, wired, tsc-clean, tested, and rendering live** (including the 10 Real-World Industry lessons; 0 brainstormed remaining). The curriculum is complete; the work now shifts entirely to the five engines below.
2. **Engine 1 — Momo coach** at 3 surfaces: lesson intro ("last time we…"), a stuck-moment nudge, and an "Ask Momo." Conservative, guardrailed.
3. **Engine 2 — Kid Capital + pretend portfolio**, anchored on the Stock Investing lane.
4. **Engine 3 — Family Mode** weekly briefing + mission co-pilot.
5. **Engine 5 — Live world** widgets on company + investing lessons.
6. **Engine 4 — Social** (family circle first), last and most carefully.

## Honest risks

- **Momo scope creep** — keep it to 3 specific helpful moments, not a general chatbot; ship the kid-safety guardrails first.
- **Engine 2 drifting back toward real money** — it must stay symbolic; the pretend portfolio is a lesson, not a wallet.
- **Parent over-ask** — the weekly brief must be 30 seconds and never block the kid.
- **Social/privacy** — family-circle-only at launch; no DMs, no default public profiles (COPPA).

## Summary

Keep the 79 lessons (the full curriculum across 9 lanes — now 100% built) as the heart. Wrap them in five engines — Momo as a live coach, symbolic points + a pretend portfolio, a family layer, a careful social layer, and live real-world data — to turn a strong static curriculum into a living, personal, shared one. No venture, no ledger, no "run a business." Same lessons. Far more alive.
