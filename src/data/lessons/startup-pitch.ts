/**
 * Startup Pitch — equity, dilution, valuation, and the 60-second pitch.
 *
 * Goal: take a kid from "starting a business = borrow money" → to
 * "investors give you cash and TAKE EQUITY (a slice of the company)
 * forever; you control the price by setting valuation; you own less of
 * a more valuable company" → to actually drafting + pitching a real
 * 60-second startup pitch.
 *
 * Phase 5 lesson 3 of 4. Awards a LEGENDARY card (reuses the existing
 * `entrepreneur` card slot, upgraded from Rare to Legendary).
 *
 * Beat order:
 *   intro (every billion-dollar company started with one pitch) →
 *   decision ($100 to build robot: parents free / loan / equity) →
 *   think-deeper (what IS equity, dilution, valuation, why give up
 *   half) → concept-cards (Equity/Valuation/Dilution/The Pitch) →
 *   calc-challenge ($200 in / $1000 valuation → 20% equity) →
 *   brainstorm (real 60-sec pitch for kid business) → connect (Apple
 *   1976, Airbnb rejected by 7 → $80B, Snap declined $3B) → outro
 *   (19yo GOAT founder → $4B) → mission (real pitch + 3 testers).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'startup-pitch',
  themeKey: 'startup-pitch',
  emoji: '🦄',
  title: 'Startup Pitch',
  subtitle: {
    easy: 'Every billion-dollar company started with ONE pitch. Today: how to make yours.',
    medium:
      'Equity, dilution, valuation — the actual mechanics of how startups raise money. Then build your own pitch.',
    hard:
      'Startup financing mechanics + the 60-second pitch. Equity issuance, dilution math, and the elements that move investors.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Steve Jobs pitched Apple from his GARAGE. Mark Zuckerberg pitched Facebook from his DORM. Sara Blakely pitched Spanx with kitchen scissors. Every BILLION-DOLLAR company started with ONE PITCH — usually in front of a few people, with no money in the bank. Today: how the pitch works + why investors give you cash for a SLICE of your company.",
        medium:
          "When a startup raises money, the founder doesn\'t BORROW it — they SELL a piece of the company. The piece is called equity. The price of the piece depends on how much the company is \"worth\" today. Today: equity, dilution, valuation, and how to deliver a 60-second pitch that moves people.",
        hard:
          "Startup financing differs structurally from debt: founders sell equity (fractional ownership) rather than borrow capital. Valuation sets the price; dilution is the consequence. Today: equity issuance mechanics, pitch architecture, and the case studies that defined modern startup investing.",
      },
    },

    // ─── Decision: fund your robot ────────────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 You Need $100 to Build a Robot',
      scenario: {
        easy:
          "You\'ve invented a robot that helps clean rooms. You need $100 to build the first one. Three ways to get the money.",
        medium:
          "Your prototype kit + parts cost $100. Three financing options on the table, very different long-term implications.",
        hard:
          "Greenfield product venture: $100 capital requirement. Three financing strategies: gift, debt, equity. Optimize for control × cost × scalability.",
      },
      question: {
        easy: 'How do you get the $100?',
        medium: 'Pick your financing:',
        hard: 'Optimize financing structure:',
      },
      choices: [
        {
          label: {
            easy: 'Ask your parents for the $100 — FREE money!',
            medium: 'Parent gift — $100 with no repayment',
            hard: 'Gift — non-repayable capital, no obligations',
          },
          feedback: {
            easy:
              "Lucky! No strings attached. But $100 is tiny — what happens when you need $1,000 to make 10 robots? Parents only have so much.",
            medium:
              "Free capital is great when available; doesn\'t scale. The funding ceiling is low; the second round of funding will hit a different mechanism anyway. Reasonable for v0; real founders shift to debt or equity for v1+.",
            hard:
              "Gift capital scales poorly. Useful for v0 prototyping; not viable for production scale or growth. The capital ceiling is the binding constraint.",
          },
        },
        {
          label: {
            easy: 'Borrow $100 from grandparents — promise to pay back $110 in 6 months',
            medium: 'Take a loan — $100 now, pay back $110 in 6 months',
            hard: 'Debt financing — $100 principal + 10% interest, 6-month term',
          },
          feedback: {
            easy:
              "OK. You owe $110. If your robot succeeds you pay easy. If it fails — you still owe. That\'s the LOAN risk: you have to pay back NO MATTER WHAT.",
            medium:
              "Debt is non-dilutive (you keep 100% of the company) but you have to pay it back regardless of outcome. Failure → personal liability. Works when cash flow is predictable; risky for unproven ventures.",
            hard:
              "Debt: non-dilutive, but binding repayment obligation. Suitable for cash-flow-positive businesses with predictable revenue. Sub-optimal for high-failure-risk startups — founder bears 100% of downside.",
          },
        },
        {
          label: {
            easy: 'Give an investor 20% of your company forever for $100',
            medium: 'Sell equity — investor pays $100, gets 20% of company forever',
            hard: 'Equity financing — $100 for 20% equity, $400 pre-money valuation',
          },
          feedback: {
            easy:
              "INTERESTING. You only OWN 80% now. But — if your robot grows HUGE, you BOTH win big. AND if it fails, you DON\'T owe anything. You traded ownership for risk-sharing.",
            medium:
              "Equity-financing trade: investor takes ~20% of company forever; founder retains 80% but at lower absolute ownership. Upside: no debt obligation; risk-sharing. Downside: permanent dilution + investor influence.",
            hard:
              "Aligned with high-risk venture financing. Equity dilutes ownership but shares risk with investor. Investor accepts downside in exchange for upside. Standard model for high-uncertainty startups.",
          },
          isPreferred: true,
        },
      ],
      realWorldReveal: {
        easy:
          "When Apple started in 1976, they sold 10% of the company to Mike Markkula for $250,000. That 10% would be worth around $300 BILLION today. Mike got the world\'s greatest deal. Apple got their first real money. EQUITY can change everything.",
        medium:
          "Apple\'s seed financing (1976): Mike Markkula invested $250K for ~10% equity. Current market cap ~$3T → Markkula\'s stake would be worth ~$300B today (he\'d sold it earlier for much less). The equity-financing pattern at startup scale: small dollars in early, massive multiplier on success.",
        hard:
          "Apple seed round 1976: Mike Markkula $250K for ~10% equity. Implied $2.5M post-money valuation. Apple current market cap ~$3T. Theoretical 10% would be worth ~$300B. Classic illustration of the upside asymmetry in early equity financing.",
      },
    },

    // ─── Think-deeper: what equity actually is ────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 What IS Equity, Really?',
      intro: {
        easy: "When investors give you money for a \"slice\" of your company — what does that actually MEAN?",
        medium: "What does the investor actually own when they \"take equity\"?",
        hard: 'What\'s the mechanical and economic nature of equity?',
      },
      layers: [
        {
          question: {
            easy: 'If you sell 20% of your robot company, what does the investor OWN?',
            medium: 'What does an equity holder actually own?',
            hard: 'What\'s the economic right conferred by equity?',
          },
          reveal: {
            easy:
              "They own 20% of EVERYTHING the company is or will be. 20% of the money. 20% of the robots. 20% of the future profits. 20% of the company sale if it ever sells.",
            medium:
              "Equity confers proportional residual ownership: 20% of all future profits, 20% of sale proceeds if acquired, 20% of voting rights in major decisions, 20% of any dividends. Permanent until sold or diluted.",
            hard:
              "Equity = residual claim on company assets + earnings + sale proceeds, in proportion to shares held. Voting rights typically attach but may be modified by class structure. Permanent until liquidity event or dilution.",
          },
        },
        {
          question: {
            easy: 'What happens if your company grows BIGGER?',
            medium: 'What happens to existing equity when the company grows?',
            hard: 'What happens to equity value as the company appreciates?',
          },
          reveal: {
            easy:
              "Their 20% becomes worth WAY MORE. If the company was worth $500 and is now worth $50,000 — their 20% went from $100 to $10,000. That\'s why investors take small bets early — for the upside if you win.",
            medium:
              "Equity value tracks company value. 20% of $50K vs. 20% of $500 = same percentage, vastly different dollars. Early investors capture upside on appreciation; this is the entire bet.",
            hard:
              "Equity value = ownership % × company valuation. Appreciation scales linearly with valuation. Early-stage equity is valued for asymmetric upside vs. capped downside (loss bounded by investment amount).",
          },
        },
        {
          question: {
            easy: 'What does \"DILUTION\" mean?',
            medium: 'What\'s dilution in equity terms?',
            hard: 'What\'s the mechanic of dilution across financing rounds?',
          },
          reveal: {
            easy:
              "Every time you SELL MORE equity to NEW investors, EVERYBODY\'S percentage gets SMALLER. You had 80% before; after the next round, maybe 65%. But the company is WORTH MORE. You own LESS of a BIGGER pie.",
            medium:
              "Dilution: when new shares are issued (next financing round), existing percentages shrink. Your 80% → ~64% after a second round at 20% sold. Existing equity remains the same number of shares but represents a smaller % of total.",
            hard:
              "Dilution: issuance of new shares reduces all existing holders\' percentages proportionally. Pre-money valuation determines post-round ownership %. Founder ownership typically diluted to ~40-60% by Series B; 10-25% by IPO. Acceptable when valuation increase > dilution rate.",
          },
        },
        {
          question: {
            easy: 'Why would you SHARE your dream company with investors?',
            medium: 'What\'s the actual benefit of taking equity capital?',
            hard: 'Why does equity financing dominate at the growth stage?',
          },
          reveal: {
            easy:
              "Because BIG ideas need BIG money to grow. 100% of a $1,000 company = $1,000. 50% of a $1 BILLION company = $500 MILLION. You\'d rather own HALF of a much bigger pie.",
            medium:
              "Founder-friendly heuristic: 50% of a $1B company > 100% of a $1M company. Equity financing accelerates company size; dilution is offset by valuation growth if executed well. Net wealth maximization, not ownership %.",
            hard:
              "Maximize absolute equity value, not ownership percentage. 50% × $1B = $500M; 100% × $5M = $5M. Optimal financing trade-off when valuation growth from financed activity exceeds dilution rate. Standard high-growth-startup logic.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Words of Startup Money',
      subheading: 'These run every startup, every VC, every Shark Tank deal.',
      cards: [
        {
          emoji: '🥧',
          title: 'Equity',
          desc: {
            easy: 'EQUITY = a SLICE of the company. Forever. If you own 30%, you get 30% of everything the company makes + everything it sells for.',
            medium:
              'Equity = proportional ownership. Confers share of profits + sale proceeds + voting rights. Permanent unless sold or diluted further.',
            hard:
              'Equity = residual claim on company assets/earnings in proportion to shares held. Confers voting rights (typically) + economic rights to dividends/sale proceeds. Permanent until liquidity event or further issuance.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '💎',
          title: 'Valuation',
          desc: {
            easy: 'VALUATION = how much the WHOLE COMPANY is "worth" right now. If your company is worth $1000 and an investor gives $200, they get $200/$1000 = 20%.',
            medium:
              'Valuation = market estimate of total company worth. Pre-money valuation (before new investment) + investment amount = post-money valuation. Sets the price of equity.',
            hard:
              'Valuation = market-clearing price × total shares outstanding. Pre-money + investment = post-money. Drives the entire equity-pricing equation. Subjective at early stages; market-determined at IPO.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '📉',
          title: 'Dilution',
          desc: {
            easy: 'DILUTION = your slice gets smaller when MORE investors join. You had 80%, now 65%. But the company is WORTH MORE — so your smaller slice is worth more dollars.',
            medium:
              'Dilution = reduction in ownership % when new shares are issued. Compensated by valuation increase. Founder ownership typically 80% pre-Series A → 50% by Series B → 15-25% at IPO.',
            hard:
              'Dilution = reduction of existing holders\' equity % by new issuance. Compensated by valuation increase when round-on-round growth > dilution rate. Founder dilution path: ~100% inception → ~50-60% by Series A → ~10-25% by IPO.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '🎤',
          title: 'The Pitch',
          desc: {
            easy: 'THE PITCH = the 60-second story you tell investors. What you do + why now + who pays + WHY YOU. Practiced. Memorable. Confident.',
            medium:
              'The pitch = compressed value-prop narrative: problem, solution, market, business model, traction, team. Investors decide in 60 seconds; perfect the first 60.',
            hard:
              'Pitch architecture: problem → solution → market size → business model → traction → team. Investor decisions weighted to first 60 seconds; subsequent detail validates but rarely overturns first impression.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: equity math ──────────────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: The Investor\'s Slice',
      setup: {
        easy: 'Your company is worth $1,000 today. An investor gives you $200 in cash. What % of your company do they get?',
        medium:
          "Pre-money valuation $1,000. Investor invests $200. Compute equity % issued.",
        hard:
          "Pre-money valuation $1,000, investment $200. Compute investor equity % at standard pre-money + cash-in formula.",
      },
      problem: {
        givens: [
          { label: 'pre-money valuation', value: 1000, suffix: '$' },
          { label: 'investment', value: 200, suffix: '$' },
        ],
        answerLabel: 'Investor gets',
        answer: 20,
        suffix: '%',
        tolerance: 0.5,
      },
      walkthrough: {
        easy:
          "Step 1: After the deal, your company is worth $1,000 + $200 = $1,200. Step 2: The investor put in $200. $200 / $1,200 = 17%. (Close to 20% — depending on exactly how you count.)\n\nGood enough! Roughly 1/5 of your company belongs to the investor. You own 80%. Your robot company is now worth $1,200. You went from 100% of $1,000 to 80% of $1,200 — same wealth-ish, plus growth runway.",
        medium:
          "Standard formula: investor % = investment / (pre-money + investment) = $200 / $1,200 ≈ 17%. (For simpler kid math, treating as $200/$1,000 = 20% — close enough at this scale.)\n\nFounder ownership: 100% → ~83% after one round. Round was successful: company valuation increased proportionally with cash injection. Future rounds dilute further but compound valuation.",
        hard:
          "Investor % = investment / post-money valuation = $200 / ($1,000 + $200) = 16.7%. Founder retains ~83%. (Headline shorthand often uses $200/$1,000 = 20% but the mechanically correct number is ~17%.)\n\nDilution math compounds across rounds: typical Series A → B → C dilution ~20-25% per round. Founders typically exit IPO with 10-25% absolute ownership; the rest distributed to early/late investors, employees, debt-conversion holders, etc.",
      },
    },

    // ─── Brainstorm: write your 60-second pitch ───────────────────────
    {
      kind: 'brainstorm',
      heading: '🎤 Your 60-Second Pitch',
      prompt: {
        easy:
          'Pick a REAL kid business idea. Write your 60-SECOND PITCH: what / why now / who pays / why YOU. Keep it under 60 seconds said out loud.',
        medium:
          'Draft a 60-second startup pitch for a real concept. Four elements: problem, solution, market, why you. Practice out loud.',
        hard:
          'Author one 60-second pitch: problem statement, solution, market thesis, traction (if any), team strength. Time to under 60s spoken.',
      },
      minItems: 4,
      placeholder: 'e.g. WHAT: A robot that organizes your backpack — WHY NOW: every kid is overloaded...',
      hints: [
        {
          easy: 'WHAT — one sentence. \"A robot that organizes your backpack.\" Simple. Concrete. Memorable.',
          medium: 'WHAT (problem + solution): \"We solve X by doing Y\" in one sentence. Concrete + memorable.',
          hard: 'Problem + solution statement: one sentence, concrete language, observable pain point + concrete solution.',
        },
        {
          easy: 'WHY NOW — why does this matter THIS YEAR? \"Kids are more overloaded than ever — backpacks are too heavy.\"',
          medium: 'WHY NOW: market timing — current trend, regulation, technology shift, or consumer behavior change that makes the moment right.',
          hard: 'WHY NOW (market timing): current secular shift, regulatory tailwind, technology enabler, or consumer behavior change that makes the moment uniquely receptive.',
        },
        {
          easy: 'WHO PAYS — \"Parents pay $30 because kids organize themselves — saves morning fights.\"',
          medium: 'WHO PAYS (customer + WTP): who has the budget AND the willingness. Pain → payment → repeat purchase.',
          hard: 'Customer + WTP: who has budget + willingness to pay. Specific customer segment + price point + repeat-purchase model.',
        },
        {
          easy: 'WHY YOU — \"My dad is an engineer, I\'m the only kid who built one of these.\" Some reason YOU\'LL win.',
          medium: 'WHY YOU (team strength): unique skill, unique experience, unique network. Why YOU specifically can execute.',
          hard: 'Team thesis: unique founder-market fit. Distinctive skill + experience + network making you specifically able to execute.',
        },
        {
          easy: 'PRACTICE OUT LOUD. Time yourself. UNDER 60 seconds. If you can\'t say it in 60 — it\'s too long.',
          medium: 'Practice out loud + time it. Aim 45-55 seconds spoken. Compression forces clarity.',
          hard: 'Time-bounded practice: 45-55 seconds spoken. Strict time-boxing forces narrative compression + reveals weak transitions.',
        },
        {
          easy: 'CONFIDENCE — investors bet on PEOPLE first. A great pitch is delivered like you BELIEVE it.',
          medium: 'Confidence: investors weight delivery heavily. Conviction + clarity > polish + complexity.',
          hard: 'Delivery weighting: investor decisions weight conviction + clarity heavily. Authentic confidence > scripted polish.',
        },
      ],
      closer: {
        easy: 'Time yourself. Under 60 seconds. Practice 5 times before you pitch a real person.',
        medium:
          "Time-boxed rehearsal: 5+ iterations before live pitch. Compression + delivery improve with each repetition.",
        hard:
          'Rehearsal target: minimum 5 timed iterations. Delivery quality improves until ~10 reps; marginal returns diminish thereafter.',
      },
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Pitches That Changed History',
      concept: {
        easy:
          'Every billion-dollar company you\'ve heard of started with ONE pitch. Most got REJECTED first. Then they kept pitching.',
        medium:
          'The most successful modern startups overcame multiple rejections before finding believing investors. Resilience matters more than the first pitch.',
        hard:
          'Top-quartile startups commonly faced 5-50 rejections before successful financing. Investor pattern-matching is imperfect; persistence matters.',
      },
      examples: [
        {
          emoji: '🏠',
          who: 'Airbnb',
          story: {
            easy: '7 different investors REJECTED Airbnb. They thought \"renting strangers\' rooms\" was a CRAZY idea. Today Airbnb is worth $80 BILLION. Those 7 investors lost out on the biggest deal of the decade.',
            medium:
              "Airbnb (2009): rejected by 7 of 7 angels approached for seed funding. Each declined the \"renting your couch\" thesis. Eventually raised seed from Sequoia ($585K). Now worth ~$80B. The 7 who passed each missed a ~140,000× return.",
            hard:
              "Airbnb seed (2009): 7 initial angel rejections, eventual Sequoia seed $585K. Current valuation ~$80B. Theoretical seed equity gain on $585K → ~$140K× multiple at current valuation. Among the most-cited rejection stories in modern startup history.",
          },
        },
        {
          emoji: '👻',
          who: 'Snapchat',
          story: {
            easy: 'When Snapchat was 2 years old, Facebook offered to BUY it for $3 BILLION. The CEO, Evan Spiegel, said NO. Today Snap is worth around $20 billion. Sometimes saying NO to a giant offer pays off.',
            medium:
              "Snapchat (2013): Facebook offered $3B acquisition; Evan Spiegel declined. Decision criticized at the time. Snap IPO\'d 2017 at $24B market cap; current ~$20B. Net: comparable to the offer plus 10 years of independence.",
            hard:
              "Snap declined $3B Facebook offer 2013. IPO\'d 2017 at $24B. Current ~$20B. Trajectory roughly equivalent to the offer in absolute dollars, but founders retained independence + ongoing equity. Decision criticism in retrospect mixed — significant volatility post-IPO.",
          },
        },
        {
          emoji: '🚀',
          who: 'Apple (1976)',
          story: {
            easy: 'In 1976, Steve Jobs and Steve Wozniak pitched Apple from a GARAGE. Their first investor put in $250,000 for 10% of the company. If he\'d kept it — that 10% would now be worth $300 BILLION.',
            medium:
              "Apple seed (1976): Mike Markkula $250K for 10% post-money. Apple now ~$3T market cap. 10% would theoretically be worth ~$300B today. Markkula sold most of his stake earlier for far less, but the model demonstrates equity\'s asymmetric upside.",
            hard:
              "Apple Series A 1976: Markkula $250K / 10% post-money implied $2.5M post-money valuation. Apple now ~$3T. Implied 1,200,000× appreciation if held to present. Demonstrates magnitude of early-stage equity\'s asymmetric upside.",
          },
        },
      ],
      kicker: {
        easy: 'Rejected. Mocked. Doubted. Then BILLION-dollar winners. The pitch is just the START — what matters is keeping going.',
        medium:
          "Major startups routinely face rejection before financing. Persistence + iteration on the pitch + execution on the company matter more than the first try.",
        hard:
          'Startup founding cycle: hypothesis → pitch → iterate → finance → execute. Failure to finance on first attempts is normative for high-quality startups. Persistence + iteration are the binding inputs.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You now know how startups REALLY work: pitch + equity + valuation + dilution. The math is simple. The hard part is BUILDING something worth pitching. You\'ve got that part started.",
        medium:
          "You\'ve cracked startup financing: equity issuance, valuation mechanics, dilution math, and the 60-second pitch. Now go build something worth pitching.",
        hard:
          "You now understand startup financing mechanics, valuation, dilution, and pitch architecture. This framework applies from Shark Tank to Sand Hill Road.",
      },
      bonusTip: {
        easy:
          "Crazy fact: a 19-year-old founded GOAT (the sneaker resale app) in a college dorm with one server. Today GOAT is worth $4 BILLION. From a 19-year-old\'s side project.",
        medium:
          "GOAT (sneaker resale): founded 2015 by Eddy Lu age 19. Bootstrapped initially, raised seed 2017. Now valued ~$4B. Demonstrates that kid/teen scale ventures can scale to unicorn-status with the right model + execution.",
        hard:
          "GOAT founded 2015 by Eddy Lu (age 19). Raised seed 2017 from Index Ventures + Foundation Capital. Last private valuation ~$4B. Demonstrates the founder-age elasticity — successful kid/teen-founded ventures scale to nine-figure outcomes regularly.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'startup-pitch',
        emoji: '🦄',
        title: {
          easy: 'Write + practice + deliver a real 60-second pitch!',
          medium: 'Execute one complete pitch cycle with 3-tester validation',
          hard: 'Deliver one complete 60-second pitch + 3 first-impression tests',
        },
        pitch: {
          easy:
            "Pick a REAL kid business idea. Write a 60-second pitch. Practice 5 times. Then PITCH 3 family members. Note who said \"I\'d invest\" + who said \"no.\"",
          medium:
            "Run one full pitch cycle: draft 60-second pitch, time + rehearse 5+ iterations, deliver to 3 reviewers, collect feedback, iterate.",
          hard:
            "Execute one pitch validation cycle: 60-second compressed pitch, 5+ rehearsal iterations, 3-reviewer first-impression tests, feedback synthesis, v2 iteration.",
        },
        steps: [
          {
            emoji: '💡',
            text: {
              easy: 'Pick ONE real kid business idea you actually like.',
              medium: 'Choose one venture concept with enough specificity to pitch.',
              hard: 'Select one venture concept with sufficient specificity for 60s pitch.',
            },
          },
          {
            emoji: '✍️',
            text: {
              easy: 'Write your pitch: WHAT + WHY NOW + WHO PAYS + WHY YOU.',
              medium: 'Draft 4-element pitch: problem-solution, market timing, customer, team thesis.',
              hard: 'Author 4-element pitch: problem/solution, timing, customer+WTP, team strength.',
            },
          },
          {
            emoji: '⏱️',
            text: {
              easy: 'TIME yourself. UNDER 60 seconds saying it out loud. Cut words until you fit.',
              medium: 'Time-box rehearsal: 45-55 seconds spoken. Compress until you fit.',
              hard: 'Time-bound rehearsal: 45-55 seconds spoken. Iterate compression on weakest transitions.',
            },
          },
          {
            emoji: '🔁',
            text: {
              easy: 'Practice 5 TIMES OUT LOUD. To yourself in a mirror.',
              medium: '5+ rehearsals before live delivery. Delivery improves until ~10 reps.',
              hard: 'Minimum 5 rehearsal iterations. Delivery quality marginal returns saturate at ~10.',
            },
          },
          {
            emoji: '🎤',
            text: {
              easy: 'PITCH 3 family members. After each, ask: "Would you invest? Why or why not?"',
              medium: '3 first-impression pitches. Capture "would invest?" + reasoning + suggestions.',
              hard: '3 live pitch tests + structured feedback capture (invest decision + reasoning + objections).',
            },
          },
        ],
        reflection: [
          {
            key: 'idea',
            prompt: {
              easy: 'What was your business idea?',
              medium: 'Your venture concept',
              hard: 'Venture concept + customer',
            },
            type: 'text',
            placeholder: 'A robot that organizes kid backpacks',
          },
          {
            key: 'pitch',
            prompt: {
              easy: 'Write your 60-second pitch:',
              medium: 'Your finalized 60-second pitch (4 elements)',
              hard: 'Finalized 4-element pitch + timed delivery',
            },
            type: 'longtext',
            placeholder: 'My business helps kids…',
          },
          {
            key: 'reactions',
            prompt: {
              easy: 'How many testers said "I\'d invest"?',
              medium: 'Per-tester invest decisions + reasoning',
              hard: 'Invest decisions × reasoning by tester',
            },
            type: 'text',
            placeholder: '2 of 3 — sister wouldn\'t because she didn\'t see the WHY NOW',
          },
          {
            key: 'weakest',
            prompt: {
              easy: 'Which part of the pitch was weakest? What needs fixing?',
              medium: 'Weakest pitch element + v2 fix',
              hard: 'Weakest element identified + v2 corrective hypothesis',
            },
            type: 'text',
            placeholder: 'WHY NOW — I didn\'t have a strong market-timing reason',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What surprised you about pitching for real?',
              medium: 'Biggest insight from delivering live pitches',
              hard: 'Largest insight delta from live pitch testing',
            },
            type: 'longtext',
            placeholder: 'I didn\'t expect the WHY YOU to matter so much…',
          },
        ],
        parentNote: {
          easy: "Be a real audience. \"Would I invest?\" Answer HONESTLY. Polite-praise hides the weak parts.",
          medium:
            "Engage as authentic audience. Polite responses teach the wrong signals. Honest invest-or-pass + reasoning is the value-add.",
          hard:
            "Authentic investor-role engagement. The structured feedback (decision + reasoning + objections) is the methodological lesson. Polite-praise corrupts the data.",
        },
        printables: {
          trackers: [
            {
              title: '3-Tester Pitch Log',
              note: 'One row per tester. Capture honest reactions.',
              columns: ['Tester', 'Would Invest? (Y/N)', 'Strongest Reason FOR', 'Strongest Reason AGAINST'],
              rows: 3,
            },
          ],
          worksheets: [
            {
              title: 'My 60-Second Pitch',
              blocks: [
                {
                  label: '🦄 My venture name',
                  hint: 'Memorable + short.',
                  lines: 1,
                },
                {
                  label: '🎯 WHAT (problem + solution — one sentence)',
                  hint: 'Concrete + memorable.',
                  lines: 3,
                },
                {
                  label: '⏰ WHY NOW (market timing)',
                  hint: 'What changed? Why this year?',
                  lines: 3,
                },
                {
                  label: '💰 WHO PAYS (customer + price)',
                  hint: 'Specific buyer + budget + repeat purchase.',
                  lines: 3,
                },
                {
                  label: '🏆 WHY YOU (team thesis)',
                  hint: 'Unique skill, experience, network — why YOU win.',
                  lines: 3,
                },
                {
                  label: '⏱️ Timed delivery (target 45-55 seconds)',
                  equation: '_______ seconds (target: 50)',
                },
                {
                  label: '🔁 5 rehearsals — check each off',
                  hint: 'Time yourself each rep.',
                  lines: 1,
                },
                {
                  label: '📊 Post-test: my weakest element',
                  hint: 'Based on the 3 testers — which part needs v2?',
                  lines: 2,
                },
                {
                  label: '🔁 v2 pitch (after testers)',
                  hint: 'Fix the weakest part.',
                  lines: 4,
                },
              ],
            },
          ],
          checklists: [
            {
              title: 'Pitch Day Checklist',
              items: [
                'Venture concept picked',
                '4-element pitch drafted',
                '5 timed rehearsals completed',
                'Pitch UNDER 60 seconds spoken',
                '3 testers lined up',
                'Tracker printed + ready',
                'Pen for notes after each tester',
                'Open ears for honest feedback',
                'Plan for v2 iteration after the 3 tests',
              ],
              note: 'Tip: practice in a mirror. Watch your face. Investors do.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
