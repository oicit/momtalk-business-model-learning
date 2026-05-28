/**
 * Risk Pool Island — insurance & pooling for kids.
 *
 * Goal: take a kid from "one big bad day could ruin me" → to
 * "many small contributions absorb one big loss — that's how insurance
 * works" → to actually running a 4-week family risk pool covering one
 * real valuable thing.
 *
 * Beat order:
 *   intro → decision (broken bike: save up / ignore / pool with 9
 *   friends) → think-deeper (why does pooling WORK?) → concept-cards
 *   (Risk/Premium/Pool/Claim) → calc-challenge (10 × $10 = $100 covers
 *   one $100 loss) → brainstorm (3 things to protect) → connect
 *   (car/health/Lloyd's of London/Kickstarter) → outro → mission
 *   (run a real 4-week family pool with the printable tracker).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'risk-pool-island',
  themeKey: 'risk',
  emoji: '🛡️',
  title: 'Risk Pool Island',
  subtitle: {
    easy: 'Many small chips in = one big problem fixed. That\'s the magic of pooling.',
    medium:
      'Insurance demystified: how a small group of people can absorb a big bad-luck event that would crush any one of them alone.',
    hard:
      'Risk pooling, the law of large numbers applied to small groups, and the foundations of modern insurance — at kid scale.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'thinking',
      text: {
        easy:
          "Imagine your bike costs $100. One day someone steals it. You\'re crushed. You don\'t have $100. Now imagine 10 friends and you ALL chipped in $10. There\'s $100 in a jar. When YOUR bike got stolen, the jar fixed it. That\'s called INSURANCE. And it\'s one of the oldest tricks in money history.",
        medium:
          "What if one bad day could wipe out everything you own? For most adults that\'s a real possibility — until they discover the trick: pool small contributions from many people, so when ONE person has a bad day, the pool absorbs it. That\'s insurance. Today: how it works, why it works, and how to run one yourself.",
        hard:
          "Insurance is the oldest financial product on Earth (Babylon, ~2000 BCE). The core mechanic is unchanged: many small contributions converted into protection against rare-but-large individual losses. Today\'s lesson teaches the math and the social contract at small scale.",
      },
    },

    // ─── Decision: protect your bike ────────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 The Bike Problem',
      scenario: {
        easy:
          "Your bike costs $100. There\'s about a 1-in-10 chance something bad will happen to it this year — a flat tire, a crash, a theft. You\'ve got three ways to handle the risk.",
        medium:
          "Your bike: $100 replacement cost. Realistic probability of a year-1 incident (theft, major damage): roughly 10%. Three risk-handling strategies on the table.",
        hard:
          "Asset value $100. Year-1 expected loss probability ~10%. Expected annual loss = $10. Three risk-management strategies — evaluate the trade-offs:",
      },
      question: {
        easy: 'What\'s your move?',
        medium: 'How do you handle the risk?',
        hard: 'Pick the optimal risk strategy:',
      },
      choices: [
        {
          label: {
            easy: 'Save up $100 yourself, just in case',
            medium: 'Self-insure — save the full $100 as your own emergency fund',
            hard: 'Self-insure — retain the full asset value in liquid reserves',
          },
          feedback: {
            easy:
              "Safe! But you tied up $100 you could\'ve been spending or saving for OTHER stuff. And if nothing bad ever happens — you locked up $100 for nothing.",
            medium:
              "Workable, but capital-inefficient. You\'ve immobilized $100 to insure against an expected $10 loss. The other $90 sits unused. Self-insurance only makes sense when you\'re wealthy enough to absorb the loss easily.",
            hard:
              "Capital inefficient — you\'ve reserved the full $100 to insure against a $10 expected loss. Self-insurance is rational only when liquid net worth >> exposure (Buffett at Berkshire) — at small scale, the opportunity cost is high.",
          },
        },
        {
          label: {
            easy: 'Don\'t worry — bad stuff probably won\'t happen to YOU',
            medium: 'Bet on it not happening — accept full downside',
            hard: 'Uninsured — accept full tail-risk exposure',
          },
          feedback: {
            easy:
              "Then you have $100 to spend! But… IF something bad happens, you have NOTHING. No bike. No money. Two months of zero rides. Painful lesson.",
            medium:
              "High variance strategy. Most of the time you win (free $100). But the 10% you lose, you lose hard — and lose it all at once. Loss aversion makes this strategy psychologically harder than the math suggests.",
            hard:
              "Negative-utility under loss aversion. Even though E[outcome] is the same as self-insurance, the variance dominates utility. Acceptable only at very low exposure-to-wealth ratios.",
          },
        },
        {
          label: {
            easy: 'Pool $10 each with 9 friends — there\'s $100 in the jar for whoever needs it!',
            medium: 'Pool $10 with 9 friends — $100 jar covers whoever has the bad year',
            hard: 'Form a 10-person risk pool — each member contributes $10 (10% of asset value)',
          },
          feedback: {
            easy:
              "BRILLIANT. Each of you only spent $10. But there\'s $100 in the jar — enough to fix one bike. And nobody got wiped out. That\'s the magic of pooling.",
            medium:
              "Optimal. Each member pays the expected loss ($10) and gets full coverage ($100). Statistically, ~1 person in the pool of 10 will have an incident — and the jar covers it. Everyone walks away protected at 10% the cost of self-insurance.",
            hard:
              "Aligned with insurance fundamentals. Each member pays the actuarially fair premium ($10 = expected loss). Pool size 10 is small but sufficient to demonstrate the principle — at n=10,000 the variance becomes negligible (law of large numbers).",
          },
          isPreferred: true,
        },
      ],
      realWorldReveal: {
        easy:
          "This is exactly how INSURANCE works for cars, houses, even your HEALTH. Millions of people each pay a little bit. When somebody has a bad day, the big jar pays for it. Same trick. Way bigger jar.",
        medium:
          "Real insurance scales this exact mechanic to millions: each policyholder pays a small premium, the pool is huge, the actuarial math is precise. Your car insurance, your parents\' house insurance, your doctor\'s visit — all funded by the same pooling principle.",
        hard:
          "Modern insurance is risk pooling at scale + actuarial pricing. Premium = expected loss + admin cost + insurer margin. Auto, home, health, life, and reinsurance markets are all variants of the same mechanic at different scale levels.",
      },
    },

    // ─── Think-deeper: why does pooling work? ──────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Does Pooling WORK?',
      intro: {
        easy: "Wait — how does putting $10 in a jar PROTECT you from a $100 loss? Magic? Let\'s find out.",
        medium: "Why is a $10 chip-in able to protect a $100 asset? It\'s not magic — it\'s math. Let\'s see how.",
        hard: 'Decompose the pooling mechanism. What makes it work mathematically and socially?',
      },
      layers: [
        {
          question: {
            easy: 'What\'s special about a BIG BAD event happening to ONE person?',
            medium: 'What makes a single catastrophic loss different from many small expected losses?',
            hard: 'Why is individual exposure to tail risk worse than expected-value alone would suggest?',
          },
          reveal: {
            easy:
              "Bad events are RARE but HUGE. Most people don\'t lose their bike in a year — but the ONE person who does loses ALL of it. The hurt is concentrated. That\'s what makes it scary.",
            medium:
              "Rare events have low frequency but high magnitude per occurrence. The expected loss is small, but the realized loss for the unlucky person is total. Concentration of pain — not the average pain — is the problem.",
            hard:
              "Variance dominates utility for individual exposure. E[loss] is small but Var[loss] is huge, and the loss falls entirely on one party. Under standard concave utility functions, the variance generates real disutility beyond expected value.",
          },
        },
        {
          question: {
            easy: 'What happens when MANY people put in a TINY amount each?',
            medium: 'How does grouping convert the problem?',
            hard: 'What does pooling do to the loss distribution?',
          },
          reveal: {
            easy:
              "The big PAIN gets SPLIT. Instead of one kid losing $100 and crying, 10 kids each lose $10. Way less pain. Same total loss. Spread out.",
            medium:
              "The pool converts a concentrated catastrophic loss into a distributed small loss. Each member bears a tiny share of every member\'s risk. Pain is spread; the unlucky person is held up by the others.",
            hard:
              "Pooling converts high-variance individual exposure into low-variance shared exposure. By law of large numbers, the per-member variance scales as 1/n — at n=1000, individual variance is negligible vs. expected loss.",
          },
        },
        {
          question: {
            easy: 'But what if EVERYBODY\'s bike got stolen in the same week?',
            medium: 'What\'s the failure mode of a risk pool?',
            hard: 'What breaks the pooling mechanism?',
          },
          reveal: {
            easy:
              "Then the jar isn\'t big enough. Pooling works when the BAD things happen to DIFFERENT people on DIFFERENT days. If everyone gets hit at once — the pool runs out.",
            medium:
              "Correlated losses break pooling. A flood that hits all houses in a town simultaneously, or a pandemic that affects all health-policyholders at once — pooling assumes losses are roughly INDEPENDENT, which is why insurers diversify across geographies and event-types.",
            hard:
              "Correlated tail risk breaks the variance-reduction property. Insurance reinsures (transfers risk further up) and diversifies geographically/categorically precisely to maintain independence assumptions. Pandemics, regional disasters, and systemic crises are the classic pool-breakers.",
          },
        },
        {
          question: {
            easy: 'What\'s the SOCIAL part of pooling — beyond the math?',
            medium: 'What does pooling require socially?',
            hard: 'What\'s the non-mathematical foundation?',
          },
          reveal: {
            easy:
              "TRUST. You have to trust that other people will keep paying in EVEN when they don\'t need the jar. And they trust YOU. Pooling is friendship + math.",
            medium:
              "Trust + commitment. Members keep paying in even when they don\'t feel they need to. Cheating (claim fraud, free-riding) destroys the pool. Strong pools have social bonds, clear rules, and enforceable expectations.",
            hard:
              "Pooling requires solving collective action: moral hazard (insured behaves more recklessly), adverse selection (only high-risk join), and free-riding. Modern insurance uses screening, deductibles, and legal contracts to manage these. Informal pools rely on social norms.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Words of Risk Pooling',
      subheading: 'Master these and you understand every insurance product on Earth.',
      cards: [
        {
          emoji: '⚠️',
          title: 'Risk',
          desc: {
            easy: 'RISK = the chance something bad might happen. Your bike might get stolen. Your phone might crack. Stuff goes wrong. Risk is just the chance + the cost combined.',
            medium:
              'Risk = probability × magnitude. A 10% chance of a $100 loss is the same expected risk as a 1% chance of a $1,000 loss. Both equal $10 expected loss — but they FEEL very different.',
            hard:
              'Risk in financial terms: probability distribution of outcomes. Often summarized as E[loss] + Var[loss]. Different risk profiles (frequent-small vs. rare-large) require different management strategies.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '💵',
          title: 'Premium',
          desc: {
            easy: 'PREMIUM = the tiny amount everybody pays IN. Your $10 for the bike pool. The $50/month grown-ups pay for car insurance. The price of being in the jar.',
            medium:
              'Premium is what each member contributes to the pool. Fair-value premium = expected loss + admin fee. Higher-risk members pay more (older car = higher premium). Lower-risk members subsidize the pool less.',
            hard:
              'Actuarially fair premium = E[loss] + loaded admin/profit margin. Risk-adjusted premiums use individual characteristics to set the price (age, driving history, ZIP code). The math is set by actuaries; the social acceptability is set by regulators.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '🫙',
          title: 'Pool',
          desc: {
            easy: 'POOL = the big jar that all the premiums go into. The bigger the pool, the more bad days it can cover. It\'s a shared safety net made of everyone\'s tiny chips.',
            medium:
              'The pool aggregates premiums and pays out claims. Pool size matters: more members → more predictable claims → lower per-member risk. Insurers prefer larger pools for stability.',
            hard:
              'Pool = aggregated capital reserve. Pool size drives variance reduction by 1/√n. Large pools approach stable claims-to-premium ratios; small pools have high tail-volatility and need reinsurance.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '🆘',
          title: 'Claim',
          desc: {
            easy: 'CLAIM = when YOU have a bad day and ASK the pool for help. The pool gives you money to fix the broken thing. Then everyone keeps paying in. The cycle continues.',
            medium:
              'A claim is a request for the pool to cover a real loss. Most claims must be verified (proof of incident, receipts). Pools that pay claims without verification are quickly drained by fraud.',
            hard:
              'Claim process: incident → notification → adjuster verification → payment. Claims cost = settlements + administrative overhead. Insurer loss ratio = claims / premiums. Healthy loss ratios are <100% (otherwise the pool eventually empties).',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: the pool math ───────────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: The Bike Pool',
      setup: {
        easy: 'You and 9 friends each put $10 in the bike pool. One person\'s bike gets stolen — needs $100 to replace. How much is in the pool? How much is LEFT after paying the claim?',
        medium:
          "10-person bike pool: each member pays $10. One member files a $100 claim. Compute: total pool intake, and pool balance after the claim is paid.",
        hard:
          "Pool: n=10 members, premium $10/member, expected loss probability 10%, single-claim loss $100. Compute aggregate intake and post-claim balance.",
      },
      problem: {
        givens: [
          { label: 'members', value: 10 },
          { label: 'premium each', value: 10, suffix: '$' },
          { label: 'claim amount', value: 100, suffix: '$' },
        ],
        answerLabel: 'Pool left',
        answer: 0,
        suffix: '$',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          "Step 1: 10 friends × $10 = $100 in the pool. Step 2: Claim pays out $100. Step 3: $100 − $100 = $0 left.\n\nExactly enough. That\'s the math working perfectly. In real insurance, the pool charges a TINY bit extra to leave a cushion. Otherwise one extra bad year wipes the whole pool out.",
        medium:
          "Pool intake = 10 × $10 = $100. Payout = $100. Remaining balance = $0. The pool exactly covered the loss this year, but it ran out — if a SECOND bike got stolen this year, the pool couldn\'t pay.\n\nReal insurers charge MORE than expected losses (a \"loaded premium\") to keep a reserve. Premium ≈ expected loss + ~15-30% for admin + profit + cushion. That cushion is the difference between a fragile pool and a durable one.",
        hard:
          "Pool intake = $100, claims out = $100, ending balance = $0. The pool clears actuarially but has zero reserve buffer. Real insurance loads premium ~15-30% above E[loss] to fund admin + provide capital reserves + generate profit. Premium = pure premium + load = E[loss] × (1 + load). At load=0.30, fair premium becomes $13/member, pool buffer = $30 after a $100 claim. That buffer is the difference between solvent and insolvent in a bad year.",
      },
    },

    // ─── Brainstorm: 3 things to protect ──────────────────────────────
    {
      kind: 'brainstorm',
      heading: '🛡️ Your 3 Things to Protect',
      prompt: {
        easy:
          'List 3 things YOU or your family own that you\'d want to PROTECT with a pool. Bike? Phone? Pet? Favorite toy? Think real things.',
        medium:
          'Pick 3 things worth pooling-protection. For each: what it is, roughly how much it costs to replace, and how often something bad might happen.',
        hard:
          'Identify 3 candidate insurable assets. For each: replacement cost, annual loss probability, and pool size required for stable premiums.',
      },
      minItems: 3,
      placeholder: 'e.g. Bike — $100 — about 1 in 10 chance of theft per year...',
      hints: [
        {
          easy: 'Bike, scooter, skateboard — high value, easy to get damaged or stolen.',
          medium: 'Outdoor vehicles (bike, scooter, skateboard) have high replacement cost + measurable theft/damage rates. Classic pooling candidates.',
          hard: 'Outdoor mobility assets: $50-$500 replacement, ~5-15% annual incident rate depending on context. Strong pooling candidates.',
        },
        {
          easy: 'Phone, tablet, headphones — expensive AND get cracked or lost often.',
          medium: 'Personal electronics — high frequency of small incidents (cracked screens) and occasional total loss (theft). Best pooled with deductibles.',
          hard: 'Electronics insurance: ~$1-5/month premiums on $500-1500 devices. Bundled coverage often includes accidental damage + theft.',
        },
        {
          easy: 'Pet — vet bills can be HUGE if your pet gets sick or hurt.',
          medium: 'Pet veterinary care — low frequency of catastrophic vet bills ($500-$5000) makes pet insurance a textbook pooling product.',
          hard: 'Pet insurance: rapidly-growing category. Pure premiums $20-50/month for $5000-10000 coverage. Adverse selection challenges (only owners of sickly pets enroll) drive underwriting.',
        },
        {
          easy: 'Sports gear, musical instruments, special school stuff (Chromebook, calculator).',
          medium: 'Specialized gear: instruments, sports equipment, school-issued electronics. High replacement cost + frequent travel = pool-worthy.',
          hard: 'High-value mobile assets with frequent transport are textbook insurance candidates. Inland marine + scheduled personal property are the adult equivalents.',
        },
        {
          easy: 'For grown-ups: cars, houses, health — but those needs MILLIONS of people pooling.',
          medium: 'Adult insurables: cars ($10-50K), houses ($100-1M), health ($1-100K events). Each requires large national pools to absorb tail risk.',
          hard: 'Major adult insurance lines: auto (federal mandate), home (mortgage requirement), health (ACA / employer), life (income protection). Each backed by reinsurance markets.',
        },
        {
          easy: 'Things you really REALLY don\'t want to lose — your favorite anything.',
          medium: 'Sentimental/irreplaceable items — protectable but ONLY for monetary loss (insurance can\'t restore irreplaceable items).',
          hard: 'Sentimental value is uninsurable in cash terms. Insurance covers monetary replacement, not subjective loss. Recovery and prevention strategies complement coverage.',
        },
      ],
      closer: {
        easy: 'Pick ONE thing you\'d most want to protect. That\'s the one you\'ll use for your family pool.',
        medium:
          "Choose the asset with the best risk/cost ratio for your first pool. Lower-cost frequent-incident assets (bike, phone) build pooling intuition faster than rare-catastrophic ones.",
        hard:
          'First-pool selection criteria: moderate replacement cost (so claims are real), high incident frequency (so the pool actually pays out), and family-scale member count.',
      },
    },

    // ─── Connect: pooling at every scale ──────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Pooling Everywhere',
      concept: {
        easy:
          'Pooling isn\'t just for bikes. Almost every BIG thing grown-ups protect themselves from uses the same trick.',
        medium:
          'The pooling mechanic generalizes across health, property, mobility, and even creative funding. Different label, same architecture.',
        hard:
          'Risk pooling is a fundamental pattern across financial and social systems — insurance, healthcare financing, mutual-aid societies, and modern crowdfunding all reduce to the same architecture.',
      },
      examples: [
        {
          emoji: '🚗',
          who: 'Car Insurance',
          story: {
            easy: 'Millions of car drivers each pay $50-$100 a month. When ONE driver has a crash, the giant pool pays for the repair. Without it, a $20,000 crash would ruin one family. With it — just a regular Tuesday.',
            medium:
              "U.S. auto insurance: ~$250B in premiums collected annually from ~230M drivers. Average claim ~$5,000. Each driver\'s premium covers their expected loss plus a small admin/profit load. Mandatory in every state because driving without it transfers risk to other drivers.",
            hard:
              "U.S. auto insurance: ~$250B premium pool, regulated state-by-state, mandatory minimum liability. Underwriting based on age, location, vehicle, history. Loss ratios target ~65-75%; expense + profit ratios ~25-35%.",
          },
        },
        {
          emoji: '🏥',
          who: 'Health Insurance',
          story: {
            easy: 'Got hurt? A trip to the hospital can cost $10,000. ONE family can\'t pay that. But if millions of people each pay a small bit every month, the pool can cover anyone who needs it.',
            medium:
              "U.S. health insurance: ~$1.4 trillion in private premiums + employer contributions. Average hospital stay $15-30K. The math only works at scale — small uninsured groups face catastrophic individual costs. ACA mandate exists precisely to prevent pool collapse via adverse selection.",
            hard:
              "U.S. private health insurance: ~$1.4T pool. Premium structure highly regulated (community rating, no pre-existing conditions). Pool dynamics depend critically on healthy members joining; failure to enroll low-risk members destabilizes premiums for everyone.",
          },
        },
        {
          emoji: '⛵',
          who: 'Lloyd\'s of London',
          story: {
            easy: 'The world\'s oldest insurance started in a COFFEE SHOP in London in 1688. Ship captains would meet at Lloyd\'s coffee shop and chip in to insure each other\'s boats. If a ship sank — the others paid. That coffee shop is now a $40 BILLION insurance company.',
            medium:
              "Lloyd\'s of London started in 1688 as a coffee shop where ship merchants met to share marine insurance. Same pool, same trust, same mechanic — just over 300 years older. Today Lloyd\'s underwrites everything from satellites to Lady Gaga\'s legs.",
            hard:
              "Lloyd\'s of London, 1688 → present. Originated as Edward Lloyd\'s coffee house information exchange for marine merchants; formalized into syndicated risk-bearing structure. Today: market structure with ~80 active syndicates, ~$40B+ annual gross premiums, underwrites specialty + reinsurance globally.",
          },
        },
      ],
      kicker: {
        easy: 'Same trick. From bikes to BOATS to your dad\'s back surgery. Pooling has been working for 4,000 years.',
        medium:
          'Pooling has been the dominant risk-management mechanism for ~4,000 years (Babylonian merchants → Lloyd\'s → modern reinsurance). The architecture survives because the underlying math is correct.',
        hard:
          'Risk pooling is the longest-running financial innovation in human history. Its persistence across cultures, eras, and scales is the empirical signal that the mechanism is well-aligned with real risk preferences.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You now understand the same trick that protects every car, house, and grown-up on Earth: small chips IN, big help OUT for whoever needs it. That\'s insurance. You got it.",
        medium:
          "You\'ve cracked the insurance mechanic — pooling, premium, claim, the social trust that holds it together. Now run a real pool with your family and feel it in your hands.",
        hard:
          "You now grasp risk pooling, premium loading, and the social/contractual scaffolding required to keep pools solvent. This generalizes across every insurance product you\'ll encounter.",
      },
      bonusTip: {
        easy:
          "Fun fact: the FIRST insurance was created by Babylonian merchants 4,000 years ago. They\'d pay a little extra for a loan — and if their ship sank or their camels got stolen, they didn\'t have to pay back the loan. Same trick. 4,000 years ago.",
        medium:
          "The earliest known insurance: Babylonian merchants ~2000 BCE used \"bottomry\" contracts — they\'d borrow money for a voyage, pay slightly higher interest, and if the cargo was lost (ship sunk, pirates, theft), the loan was forgiven. Same trick, 4 millennia old.",
        hard:
          "Bottomry contracts (Babylon ~2000 BCE) → Code of Hammurabi codification → Greek and Roman maritime extensions → medieval Italian marine policies → modern insurance. The mechanism has been continuously refined for 4,000 years but the core architecture is unchanged.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'risk-pool-island',
        emoji: '🛡️',
        title: {
          easy: 'Run a 4-Week Family Risk Pool!',
          medium: 'Operate a real 4-week pool with your family',
          hard: 'Execute a 4-week informal risk pool with documented rules',
        },
        pitch: {
          easy:
            "Talk to your family. Pick ONE thing to protect. Get everyone to chip in $1 a week. Track it. After 4 weeks: if nothing broke, treat yourselves. If something broke, the pool helps fix it.",
          medium:
            "Run a real 4-week family pool covering one chosen asset. Weekly $1 contributions from each member, written rules, simple claims process. Track contributions + outcomes.",
          hard:
            "Operate a 4-week informal risk pool with: defined coverage, fixed-interval premiums, documented claims process, and outcome reconciliation at termination.",
        },
        steps: [
          {
            emoji: '🗳️',
            text: {
              easy: 'Hold a family meeting. Pick ONE thing the pool will cover (bike, phone, pet vet, etc.).',
              medium: 'Convene family to pick the covered asset. One asset for one pool — start simple.',
              hard: 'Define pool scope: single asset class, replacement cost, covered events. Document.',
            },
          },
          {
            emoji: '🤝',
            text: {
              easy: 'Agree: everyone in the family pays $1 a week into the jar. (Or $0.50 if there are lots of kids!)',
              medium: 'Set the premium: $1/member/week is a good starting point. Adjust based on family size.',
              hard: 'Set actuarially-fair premium based on family-perceived event probability + cost.',
            },
          },
          {
            emoji: '🫙',
            text: {
              easy: 'Find a real jar. Label it "Risk Pool." Put it somewhere everyone sees it.',
              medium: 'Designate a visible physical jar — visibility drives participation.',
              hard: 'Visible reserve location functions as social commitment device.',
            },
          },
          {
            emoji: '📝',
            text: {
              easy: 'Write down the rules: who pays, when, what counts as a "bad event" the pool covers.',
              medium: 'Document the rules: contribution cadence, covered events, claim process. Posted on the fridge.',
              hard: 'Written rules eliminate ambiguity. Cover: premium schedule, covered events, claim verification, payout limits.',
            },
          },
          {
            emoji: '🗓️',
            text: {
              easy: 'Pay in every week for 4 weeks. Track it on the tracker sheet.',
              medium: 'Maintain 4-week contribution cadence. Log every payment.',
              hard: 'Maintain pool ledger: contributions, balance, claims (if any).',
            },
          },
          {
            emoji: '🎉',
            text: {
              easy: 'After 4 weeks: if nothing broke, use the pool for a family treat. If something broke, fix it!',
              medium: 'At week 4: reconcile. No claims → distribute as family treat (or roll forward). Claim filed → process it.',
              hard: 'Termination reconciliation: surplus → distribute or roll forward; deficit → discuss capital topping or rule revision.',
            },
          },
        ],
        reflection: [
          {
            key: 'covered',
            prompt: {
              easy: 'What did your pool cover?',
              medium: 'Asset covered + pool members',
              hard: 'Pool scope and coverage',
            },
            type: 'text',
            placeholder: 'Family bikes — all 4 of us',
          },
          {
            key: 'collected',
            prompt: {
              easy: 'How much money was in the pool at week 4?',
              medium: 'Pool balance at week 4',
              hard: 'Terminal pool balance',
            },
            type: 'number',
            suffix: '$',
            placeholder: '16',
          },
          {
            key: 'happened',
            prompt: {
              easy: 'Did anything happen that needed the pool?',
              medium: 'Any claims filed during the 4 weeks?',
              hard: 'Claims activity + resolution',
            },
            type: 'text',
            placeholder: 'No claims — perfect month!',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What surprised you about running a pool?',
              medium: 'What did you learn about insurance from running one?',
              hard: 'Largest insight delta from running the pool',
            },
            type: 'longtext',
            placeholder: 'I didn\'t realize how much trust matters until…',
          },
        ],
        parentNote: {
          easy: "Even $0.25/week works. The lesson is the structure, not the dollars. If a real claim arises, honor it from the pool — that\'s the whole point.",
          medium:
            "Premium amount is flexible — match it to allowance levels. Critical: honor claims if they arise (even when inconvenient) — the credibility of the pool depends on it. The kid is internalizing trust-as-asset.",
          hard:
            "The pool\'s credibility is the lesson. Pay valid claims; deny invalid ones with explanation. Premium-claim dynamics observed at small scale are the same dynamics underwriting the $1T+ U.S. P&C insurance market.",
        },
        printables: {
          trackers: [
            {
              title: '4-Week Pool Tracker',
              note: 'One row per week. Track who paid and the running pool balance.',
              columns: ['Week', 'Date', 'Who Paid', 'Amount In', 'Total in Pool'],
              rows: 4,
            },
          ],
          worksheets: [
            {
              title: 'Family Pool Charter',
              blocks: [
                {
                  label: '🛡️ What we\'re protecting',
                  hint: 'Pick ONE asset. Specific.',
                  lines: 2,
                },
                {
                  label: '👥 Pool members',
                  hint: 'Everyone in the family who chips in.',
                  lines: 3,
                },
                {
                  label: '💵 Weekly premium per member',
                  equation: '$ _______  every week',
                },
                {
                  label: '🎯 Pool goal balance at end of 4 weeks',
                  hint: 'Members × premium × 4 weeks.',
                  equation: '_______ × $ _______ × 4 = $ _______',
                },
                {
                  label: '✅ What counts as a "covered event"',
                  hint: 'Be specific so there\'s no argument later.',
                  lines: 4,
                },
                {
                  label: '❌ What does NOT count',
                  hint: 'E.g. "lost on purpose" or "decided to upgrade." Keeps the pool honest.',
                  lines: 3,
                },
                {
                  label: '📞 How to file a claim',
                  hint: 'Who do you tell? What proof? When does the pool pay?',
                  lines: 4,
                },
                {
                  label: '🎉 What we\'ll do if NO claims happen by week 4',
                  hint: 'Family treat? Roll into next month? Donate?',
                  lines: 2,
                },
                {
                  label: '✏️ Signatures of all pool members',
                  hint: 'Yes, sign it. Makes it real.',
                  lines: 4,
                },
              ],
            },
          ],
          checklists: [
            {
              title: 'Pool Setup Checklist',
              items: [
                'Family meeting held (everyone present)',
                'ONE covered asset agreed on',
                'Premium per member agreed on',
                'A real labeled jar in a visible spot',
                'Charter filled out + signed by all members',
                'A weekly "deposit day" picked (e.g. Sunday breakfast)',
                'Tracker printed and stuck to the fridge',
                'Phone or paper to log claims if any arise',
              ],
              note: 'Tip: the charter is the most important thing. Without clear rules, the first claim will cause a fight. Disambiguate UP FRONT.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
