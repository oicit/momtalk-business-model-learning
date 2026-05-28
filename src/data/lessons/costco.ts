/**
 * Costco: Why You Pay to Be a Customer.
 *
 * Goal: take a kid from "Costco is a big bulk store" → to "no, Costco
 * is a MEMBERSHIP business that happens to sell things at cost as bait"
 * → to actually running a 2-week 'Family Discount Club' with a real
 * membership fee.
 *
 * Beat order:
 *   intro → decision (start a discount club: 3 pricing models) →
 *   think-deeper (why sunk-cost membership makes people SPEND MORE?) →
 *   concept-cards (Membership/Bulk/Loss Leader/Renewal Rate) →
 *   calc-challenge ($125M members × $65 fee → almost all of Costco's
 *   profit) → brainstorm (design a kid membership club) → connect
 *   (Sam's Club, Amazon Prime, AAA, gym, Netflix) → outro (Costco's
 *   92% renewal — higher than most marriages) → mission (run real
 *   2-week 'Family Discount Club' with paid membership).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'costco',
  themeKey: 'costco',
  emoji: '🛍️',
  title: 'Costco: Pay to Shop',
  subtitle: {
    easy: 'Costco charges you JUST to walk in. And 130 MILLION people pay it. Why?',
    medium:
      'The membership fee IS the business. Everything else — bulk pizzas, $1.50 hot dogs, $5 rotisserie chickens — is bait for the renewal.',
    hard:
      'Membership economics: when the access fee becomes the entire profit engine, and the products become customer-acquisition costs.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'thinking',
      text: {
        easy:
          "Costco is a STORE. But you have to PAY $65 a year just to WALK IN. Sounds crazy. So why do 130 MILLION people pay it? Because the secret of Costco isn\'t bulk pizza. It\'s the membership fee itself — and today you\'ll understand exactly why.",
        medium:
          "Costco\'s annual membership fee: $65-$130/year. Members: ~130 million. Annual fee revenue: $4.6 billion. Annual OPERATING profit: ~$8 billion. So fee revenue alone is ~80% of all Costco profit. Today: how a store turned the membership fee itself into the business.",
        hard:
          "Costco\'s membership-fee model is the canonical case study in fee-anchored retail. Operating profit ~$8B FY2023, of which membership fees ~$4.6B = ~57% direct contribution + meaningful indirect (high-margin private-label rotation, frequency lift). Store-level retail margin is near-zero by design.",
      },
    },

    // ─── Decision: design your discount club ──────────────────────────
    {
      kind: 'decision',
      heading: '🧭 You\'re Starting a Discount Club',
      scenario: {
        easy:
          "You want to start a club where members get GREAT deals on snacks. Three different pricing plans. Which makes the most sense?",
        medium:
          "You\'re launching a buying-club concept. Three different revenue architectures available. Which captures the most value?",
        hard:
          "Greenfield retail concept design. Three monetization architectures: (a) flat low-margin retail, (b) flat normal-margin retail, (c) high-membership-fee + at-cost pricing. Optimize:",
      },
      question: {
        easy: 'What\'s your pricing plan?',
        medium: 'Pick the revenue architecture:',
        hard: 'Optimize for unit economics × retention:',
      },
      choices: [
        {
          label: {
            easy: 'Charge a SMALL fee ($5/year) and sell stuff CHEAP',
            medium: 'Low membership + low retail margin — light fee, light markup',
            hard: 'Hybrid low fee + low margin — minimize friction on both sides',
          },
          feedback: {
            easy:
              "Hmm. Tiny fee = tiny income. Low prices = tiny profit on stuff. You\'re working super hard for almost no money. You won\'t last.",
            medium:
              "Underwhelming on both axes. Low fee doesn\'t anchor commitment; low margin doesn\'t recover costs. The economics support neither investment in inventory nor renewal flywheel.",
            hard:
              "Sub-optimal — neither axis captures sufficient value. Light fee fails to build sunk-cost commitment; low margin yields negative contribution after fixed costs. Capital-inefficient.",
          },
        },
        {
          label: {
            easy: 'No fee — just sell stuff at normal store prices like everyone else',
            medium: 'No membership — operate as a standard retail store',
            hard: 'Standard retail — no entry fee, normal markup',
          },
          feedback: {
            easy:
              "Then you\'re just another store! Walmart and Target are bigger and have more stuff. Why would anyone come to YOU?",
            medium:
              "You become indistinguishable from Target, Walmart, Kroger. No differentiation, no moat. Competition is brutal, margins compress, you\'re a generic retail experience.",
            hard:
              "Commoditized — competes head-on with Walmart/Target which have scale advantages. Without differentiation, you face structural margin compression. Most independent retailers occupy this losing position.",
          },
        },
        {
          label: {
            easy: 'Charge a BIG fee ($65/year) and sell stuff at COST — almost no markup!',
            medium: 'High membership ($65/year) + sell at near-cost — fee IS the profit',
            hard: 'High fee + at-cost retail — convert fee into the entire profit engine',
          },
          feedback: {
            easy:
              "GENIUS. The fee FEELS like a lot — but then EVERY snack inside is the cheapest you\'ll find ANYWHERE. People stuff their carts. They tell their friends. They renew next year because they got their fee\'s worth in 3 trips. THIS is how Costco works.",
            medium:
              "Optimal — this is Costco\'s exact model. Members pay upfront commitment (anchors loyalty + reduces churn). Inside, prices are aggressively low → members feel they\'re winning every trip. Fees become 80%+ of profit. Pricing is the marketing.",
            hard:
              "Aligned with Costco architecture. Membership fee = high-margin recurring revenue. Retail at near-cost = marketing expense + customer-loyalty engine. The model trades retail margin for membership conviction; the conviction compounds via renewal.",
          },
          isPreferred: true,
        },
      ],
      realWorldReveal: {
        easy:
          "This is EXACTLY what Costco does. $65 a year just to walk in. Then everything inside costs barely more than they paid for it. People shop CRAZY hard because they want to \"get their money\'s worth\" out of the fee. Renewal rate: 92%. Almost nobody quits.",
        medium:
          "Costco specifics: $65 Gold Star / $130 Executive membership, ~125M members. Average store markup capped at ~14% by company policy (vs. Target ~25%, Walmart ~24%). Membership renewal rate ~92% globally, ~93% U.S./Canada. The model is internally consistent: low markup keeps members coming; high renewal keeps fees flowing.",
        hard:
          "Costco model: membership fees ~$4.6B/yr (~57% of operating profit direct contribution), markup capped ~14% by policy, renewal rate ~92% globally. Trade-off explicitly designed: forgo retail margin to maximize membership retention. Stable for 40+ years. Same architecture replicated by Sam\'s Club, BJ\'s, with similar economics.",
      },
    },

    // ─── Think-deeper: sunk cost psychology ───────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Do People Pay to BUY?',
      intro: {
        easy: "If people HATE paying fees, why do millions of them pay Costco $65? Let\'s find out.",
        medium: "What\'s the actual psychology that makes a membership fee a feature, not a bug?",
        hard: 'What are the behavioral economics underlying fee-anchored retail?',
      },
      layers: [
        {
          question: {
            easy: 'After you pay $65 to walk in, how do you FEEL?',
            medium: 'What happens psychologically once a member is enrolled?',
            hard: 'What\'s the sunk-cost effect on member behavior?',
          },
          reveal: {
            easy:
              "You feel like you NEED to use it. You paid $65! So now every snack you buy at Costco \"saved\" you money — and the more you buy, the more you justify the fee.",
            medium:
              "Sunk-cost activation. Once a member has paid, they\'re motivated to extract value from the fee. They shop MORE at Costco (vs. competitors) to justify the cost. The fee creates the very loyalty it requires.",
            hard:
              "Sunk-cost bias drives heightened use of paid-access services. Members shop frequency increases post-enrollment to amortize the fixed fee. The fee is the loyalty mechanism — not a barrier to use, but a driver of it.",
          },
        },
        {
          question: {
            easy: 'Why are Costco prices LOWER than other stores?',
            medium: 'How does Costco actually keep prices lower than Walmart?',
            hard: 'What\'s the cost structure underlying Costco\'s pricing?',
          },
          reveal: {
            easy:
              "Two tricks. (1) They buy HUGE — like a whole truck of cookies — so each cookie costs them less. (2) They only sell A FEW kinds of each thing. Less variety = less stocking work = less cost.",
            medium:
              "Buying scale + SKU restriction. Costco stocks ~4,000 SKUs (vs Walmart\'s ~140,000). Fewer items × bulk purchasing → massive scale per SKU → lower cost basis. Plus: no fancy displays, concrete floors, minimal labor per square foot.",
            hard:
              "Combined levers: SKU count ~4K (vs. ~140K at Walmart) → high turnover per SKU + supplier leverage. Operating expense ratio ~8% of revenue (vs. Walmart ~17%) — bare-bones merchandising. Capped markup (~14%) reinforces low-price discipline.",
          },
        },
        {
          question: {
            easy: 'What\'s the SECRET about the famous $1.50 hot dog?',
            medium: 'Why is the hot dog deliberately a loss leader?',
            hard: 'What\'s the role of loss leaders in Costco\'s model?',
          },
          reveal: {
            easy:
              "Costco LOSES MONEY on the hot dog — but they want you to walk by it on the way out and say \"WHOA this place is AWESOME.\" The hot dog tells the world Costco is the best deal. Then you renew.",
            medium:
              "The $1.50 hot dog + soda combo is a deliberate loss leader, held at $1.50 since 1985 by the founder\'s personal demand. It loses money per unit but generates extreme brand affinity + word-of-mouth. The renewal lift more than offsets the per-hot-dog loss.",
            hard:
              "Strategic loss leaders ($1.50 hotdog, $4.99 rotisserie chicken) anchor the value perception. Per-unit losses are real ($1-2/chicken per Costco\'s own filings) but offset by traffic generation + renewal-rate maintenance. The loss leader IS the brand.",
          },
        },
        {
          question: {
            easy: 'What\'s the most VALUABLE number Costco watches?',
            medium: 'What metric does Costco optimize for above all else?',
            hard: 'What\'s the dominant KPI in Costco\'s model?',
          },
          reveal: {
            easy:
              "RENEWAL RATE — how many members say YES again next year. Costco\'s is 92%. That\'s higher than most things in life. Each renewal = $65 of nearly-pure profit.",
            medium:
              "Renewal rate. ~92% globally. Each renewal is ~95% margin (fee income with negligible variable cost). One percentage point of renewal lift across 125M members = ~$80M annual profit. Most-watched number on the earnings call.",
            hard:
              "Membership renewal rate. ~92% globally, ~93% U.S./Canada. Near-pure margin on fees → 100bps lift ≈ $80M+ annual EBIT contribution. The renewal flywheel sustains the entire business; everything else feeds it.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Words of Membership Business',
      subheading: 'Once you see them, you\'ll spot membership models everywhere.',
      cards: [
        {
          emoji: '🎟️',
          title: 'Membership',
          desc: {
            easy: 'A MEMBERSHIP is when you pay a fee just to BE part of a club. Costco card. Amazon Prime. AAA. Gym. The fee is the price of entry.',
            medium:
              'A membership is a recurring access fee. Members get something non-members can\'t — access, prices, services. The fee creates the loyalty engine: paid customers shop more.',
            hard:
              'Membership models convert episodic transactions into recurring access fees. Members behave with higher frequency + lower price sensitivity than non-members. Fee anchors retention via sunk cost.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '📦',
          title: 'Bulk Discount',
          desc: {
            easy: 'BULK DISCOUNT = buying HUGE so each thing costs less. Costco buys a million cans of soda at once → each can costs less → they can sell it cheaper.',
            medium:
              'Bulk purchasing scales the supplier relationship → unit cost falls. Costco\'s buying power (one of the largest in the world) lets them price below smaller retailers and still maintain margins.',
            hard:
              "Scale economies on procurement: high-volume buying generates supplier discounts, exclusive SKUs, and favorable terms. Costco\'s ~$240B/year purchase volume puts it in the top tier globally, accessing pricing unavailable to smaller retailers.",
          },
          color: '#FFE5EC',
        },
        {
          emoji: '🎯',
          title: 'Loss Leader',
          desc: {
            easy: 'LOSS LEADER = something you sell on PURPOSE for less than it costs to make. The $1.50 hot dog. The $5 rotisserie chicken. The store LOSES MONEY on it — to make people LOVE the store.',
            medium:
              'A loss leader is a product sold at negative margin to drive traffic, brand affinity, or other higher-margin purchases. Costco\'s $4.99 chicken loses money per bird but anchors the value perception.',
            hard:
              'Loss leaders are deliberate per-unit losses justified by higher-order effects (traffic, brand, basket lift, retention). At Costco, the $1.50 hot dog combo (held at 1985 price) and $4.99 rotisserie chicken (per-unit loss confirmed in filings) serve as renewal anchors.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '🔄',
          title: 'Renewal Rate',
          desc: {
            easy: 'RENEWAL RATE = the % of members who say YES again next year. Costco\'s is 92%. Almost everyone renews. That\'s why the fee model WORKS.',
            medium:
              'Renewal rate is the most important metric for membership businesses. Costco ~92%, Amazon Prime ~93%, gym ~50-60%. High renewal = recurring high-margin revenue + compounding base.',
            hard:
              'Renewal rate = retained members / eligible-for-renewal members. Sets the steady-state member count given gross acquisition. 92% renewal → ~12-yr average member tenure → LTV per member ~$700-1000. Drives the entire model.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: the fee economy ──────────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: The Fee Engine',
      setup: {
        easy: 'Costco has about 125 MILLION members. Each one pays $65 a year just to walk in. How much do they make from MEMBERSHIP FEES alone (no shopping)?',
        medium:
          "Costco: 125M members × $65 average fee. Compute annual fee revenue.",
        hard:
          "Costco fee revenue model: 125M cardholders × $65 blended fee. Compute aggregate fee revenue.",
      },
      problem: {
        givens: [
          { label: 'members', value: 125000000 },
          { label: 'average fee', value: 65, suffix: '$' },
        ],
        answerLabel: 'Fee revenue',
        answer: 8125000000,
        suffix: '$',
        tolerance: 1000000,
      },
      walkthrough: {
        easy:
          "125,000,000 × $65 = $8.1 BILLION dollars per year.\n\nThat\'s just the fee. They didn\'t sell a single hot dog yet. Costco\'s TOTAL operating profit (after EVERYTHING) is about $8 billion. So... the fee is almost ALL their profit. Everything else is window dressing.",
        medium:
          "Fee revenue = 125M × $65 = $8.1B/yr. Costco\'s operating profit FY2023 ≈ $8B. The fee revenue ALONE roughly equals operating profit — meaning the entire retail operation is essentially break-even by design, with the membership fee carrying the profit.\n\nThis is the cleanest demonstration of the architecture: retail is the marketing engine; the fee is the business.",
        hard:
          "Fee revenue = 125M × $65 blended = $8.1B. Costco FY2023 operating income ≈ $8.1B. Fee revenue ≈ operating profit indicates retail operation is roughly break-even on an operating-margin basis, with fees driving the entire bottom line.\n\nCorroborated by CFO commentary: company explicitly targets ~14% gross markup ceiling and accepts thin retail margins to maximize member retention. Fee margin >95%; cleaner profit engine than any product line.",
      },
    },

    // ─── Brainstorm: design your own club ─────────────────────────────
    {
      kind: 'brainstorm',
      heading: '🎟️ Design Your Club',
      prompt: {
        easy:
          'Design a "Family Discount Club" for your family or friends. What fee? What do members get? What\'s the special perk?',
        medium:
          'Sketch a kid-scale membership club. Fee, member perks, the "loss leader" item that makes members love it, the renewal hook. Specifics, not vague.',
        hard:
          'Design a kid-scale membership offering: fee, member-only access, loss-leader hook, renewal trigger. Specifics + thesis on retention.',
      },
      minItems: 3,
      placeholder: 'e.g. $5 fee for the year — members get 50% off all snack trades...',
      hints: [
        {
          easy: 'What\'s the FEE? Keep it small enough kids can pay — $1-$5 for a month maybe.',
          medium: 'Set the fee at the lowest price that still creates commitment. $2-$5/quarter works for siblings. Too low → no sunk-cost effect; too high → no enrollment.',
          hard: 'Fee calibration: low enough for friction-free enrollment, high enough to anchor commitment. $2-5 quarterly is the sweet spot for kid markets.',
        },
        {
          easy: 'What do MEMBERS get that NON-members don\'t? Special games? First pick? Lower prices?',
          medium: 'Member-only perks: first pick of treats, half-price snack trades, access to a sibling chore service, VIP treatment at family game night. Differentiation makes the fee feel fair.',
          hard: 'Membership perks should be visibly differentiated from public goods. Hidden perks fail to motivate enrollment; visible perks drive friend-of-friend acquisition.',
        },
        {
          easy: 'What\'s your LOSS LEADER — the thing you give CRAZY cheap that makes people LOVE the club?',
          medium: 'Pick a loss leader: a tiny treat or service you offer at break-even or below. The hot-dog of your club. It anchors brand affinity disproportionate to its cost.',
          hard: 'Loss leader: deliberately negative-margin offering chosen for brand resonance. Volume per unit matters less than memorability.',
        },
        {
          easy: 'What\'s the BIG SAVE that makes members want to RENEW?',
          medium: 'Renewal anchor: the perk so good they\'d be sad to lose it. The reason year-2 makes sense. Without this, you\'re only getting year-1 fees.',
          hard: 'Renewal hooks: features whose value only matures with continued use (rewards programs, accumulated status, sunk-cost commitment). Drive multi-year retention.',
        },
        {
          easy: 'Who would BUY a membership? Family? Friends? Cousins? Pick a real audience.',
          medium: 'Pick a real target audience: siblings, cousins, friend group. The smaller and tighter the network, the easier first-cohort enrollment.',
          hard: 'Target audience: tight social network with sufficient size for cohort effects + low CAC. Siblings + cousins typical first cohort.',
        },
        {
          easy: 'How do members SIGN UP? A card? A list on the fridge? Make it real and official-looking.',
          medium: 'Enrollment mechanism: handwritten "membership card," names on a fridge list, a numbered list in a notebook. Visibility drives retention.',
          hard: 'Enrollment artifact: physical card or visible signage. Public commitment increases retention by activating social-accountability mechanisms.',
        },
      ],
      closer: {
        easy: 'Pick the BEST version. Make a real membership card. Sign up your first members this week.',
        medium:
          "Iterate on your highest-conviction design. Make a real card, run for 2 weeks, observe what members actually use vs. what they ignored.",
        hard:
          'Select the strongest variant for piloting. 2-week pilot reveals product-market fit signals. Iterate on the perks that get used; retire those that don\'t.',
      },
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Membership Models Are Everywhere',
      concept: {
        easy:
          'Once you see Costco\'s trick, you\'ll see it EVERYWHERE. Half the modern economy works on memberships.',
        medium:
          'The fee-anchored model has been copied across categories: warehouse retail, e-commerce, fitness, software, even cars. The mechanic is invariant.',
        hard:
          'Membership models have spread across retail, software, services, automotive, and beyond. The mechanic — sunk-cost retention + recurring revenue + loyalty engine — generalizes.',
      },
      examples: [
        {
          emoji: '📦',
          who: 'Amazon Prime',
          story: {
            easy: 'Amazon Prime is a $14/month CLUB. You get fast shipping + Prime Video + music. Sounds like a lot. But Prime members spend WAY MORE on Amazon. So Amazon LOVES it.',
            medium:
              "Amazon Prime: ~200M members × $139/year = ~$28B annual fee revenue. Prime members spend ~2.4× more on Amazon than non-members. The fee + the consumption lift together create a giant moat — once you\'re Prime, you\'re basically locked into Amazon.",
            hard:
              "Amazon Prime: ~200M global members, ~$139/yr ARPU = ~$28B fee revenue. Member spend ~2.4× non-member spend. The fee + spend-lift jointly explain Amazon\'s retail dominance — Prime is the most important consumer-tech subscription product ever launched.",
          },
        },
        {
          emoji: '🚗',
          who: 'AAA',
          story: {
            easy: 'AAA charges grown-ups about $60/year to be a member. If their car breaks down, AAA tows it for free. ~63 million members. Same trick as Costco, just for cars.',
            medium:
              "AAA: ~63M members, ~$60-90/year membership. Members get roadside assistance, travel discounts, insurance. Same mechanic: pay-to-belong + lock-in via accumulated savings + emotional security. Survived 120 years.",
            hard:
              "AAA: ~63M North American members, membership ~$60-90/yr, roadside-assistance + ancillary services. Continuous operation since 1902. One of the longest-running membership organizations in U.S. history — strong evidence of model durability.",
          },
        },
        {
          emoji: '💪',
          who: 'Gym Memberships',
          story: {
            easy: 'Gyms charge $30-$100/month — and the BUSINESS SECRET is that most members DON\'T GO. Gyms COULDN\'T FIT all their members if they all showed up at once! Same fee trick.',
            medium:
              "Gym memberships: $30-100/month. Industry data: ~50% of members visit < 1×/month. Gyms count on under-utilization (\"breakage\") — their entire business model depends on members paying but not showing up. Same fee model, weaponized.",
            hard:
              "Gym economics: ~50% of memberships are inactive (<1 visit/mo). Industry depends on \"breakage\" — fees paid against unused access. If all members showed up, facility couldn\'t scale. Membership is a paid commitment, not paid access in equilibrium.",
          },
        },
      ],
      kicker: {
        easy: 'Costco. Prime. AAA. Gym. All membership models. All running the same trick. Once you see it — you can\'t unsee it.',
        medium:
          "Membership models now span retail, e-commerce, mobility, fitness, software, and services. The mechanic is invariant: pay-for-access + sunk-cost retention + loyalty-driven over-consumption.",
        hard:
          'Membership model penetration across consumer categories has accelerated in the last 20 years. Common pattern: identify a high-frequency use case + bundle access + price the fee at the conviction point + maximize renewal.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You just learned the smartest trick in retail: charge people JUST to walk in, then make them feel like winners every time they shop. Costco. Prime. AAA. Same trick, different signs.",
        medium:
          "You\'ve got the mental model: fee anchors loyalty, low margins anchor value, renewal anchors the business. Once you spot this pattern, you\'ll see it everywhere.",
        hard:
          "You now understand fee-anchored retail economics, loss-leader dynamics, and renewal-driven LTV. The framework generalizes far beyond Costco.",
      },
      bonusTip: {
        easy:
          "Crazy fact: Costco\'s renewal rate is 92%. Marriages in the U.S. only stay together about 60% of the time. People are more loyal to their Costco card than to their wedding vows. Wild.",
        medium:
          "Costco renewal rate ~92% globally. For comparison: U.S. marriage retention ~60% lifetime. Members are statistically more loyal to Costco than to their spouses. The fee-anchored model is the most durable consumer-loyalty mechanism ever built.",
        hard:
          "Costco renewal rate ~92% — exceeds enterprise SaaS net retention rates, exceeds U.S. marriage retention, exceeds most religious affiliation persistence. The fee-anchored membership architecture produces one of the most durable behavioral commitments in consumer business history.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'costco',
        emoji: '🛍️',
        title: {
          easy: 'Run a 2-Week Family Discount Club!',
          medium: 'Operate a 2-week membership club with at least 3 paying members',
          hard: 'Pilot a 2-week fee-anchored offering with renewal observation',
        },
        pitch: {
          easy:
            "Design a Family Discount Club. Set a fee ($1-$5). Offer perks members love. Run it for 2 weeks. See who renews!",
          medium:
            "Run a real 2-week fee-anchored membership. Design perks, set the price, enroll 3+ members, deliver weekly, observe behavior, ask for renewals at end.",
          hard:
            "Execute one complete membership cycle: pricing, enrollment, weekly delivery, renewal solicitation. Capture renewal rate as primary metric.",
        },
        steps: [
          {
            emoji: '🎟️',
            text: {
              easy: 'Decide your CLUB FEE ($1-$5) and what members will GET.',
              medium: 'Set the fee + perks. Both should be specific and obvious to members.',
              hard: 'Calibrate fee + perks. Perk set must be observable from outside the club for member acquisition.',
            },
          },
          {
            emoji: '🪧',
            text: {
              easy: 'Make a MEMBERSHIP CARD or list of members. Make it look official!',
              medium: 'Create physical enrollment artifact (card, fridge list, certificate). Visibility drives commitment.',
              hard: 'Produce a visible enrollment artifact. Public commitment increases retention via social accountability.',
            },
          },
          {
            emoji: '👥',
            text: {
              easy: 'Get 3-5 family members or friends to PAY the fee and JOIN.',
              medium: 'Enroll 3+ members. Get the fees paid upfront — that\'s the whole point.',
              hard: 'Enroll ≥3 members with fee collected upfront. Upfront payment is the loyalty mechanism.',
            },
          },
          {
            emoji: '🍭',
            text: {
              easy: 'Pick ONE thing that\'s your LOSS LEADER — give it cheap to make members LOVE the club.',
              medium: 'Designate a loss leader: one perk you over-deliver to anchor brand affinity. Hot-dog of your club.',
              hard: 'Specify a loss-leader perk delivering disproportionate value at small cost. Anchors renewal at week 2.',
            },
          },
          {
            emoji: '🔄',
            text: {
              easy: 'After 2 weeks, ASK them to RENEW. Count who says yes. That\'s your RENEWAL RATE.',
              medium: 'At week 2, solicit renewals. Renewal rate = renewed / enrolled. Track explicitly.',
              hard: 'Solicit explicit renewals at t=2 weeks. Renewal rate is the primary success metric.',
            },
          },
        ],
        reflection: [
          {
            key: 'fee',
            prompt: {
              easy: 'What was your membership fee?',
              medium: 'Fee amount + duration',
              hard: 'Pricing structure',
            },
            type: 'text',
            placeholder: '$3 for 2 weeks',
          },
          {
            key: 'enrolled',
            prompt: {
              easy: 'How many members joined?',
              medium: 'Enrolled members at week 0',
              hard: 'Initial enrollment cohort size',
            },
            type: 'number',
            placeholder: '4',
          },
          {
            key: 'renewed',
            prompt: {
              easy: 'How many RENEWED after 2 weeks?',
              medium: 'Renewals at week 2 + renewal rate',
              hard: 'Terminal renewal count + computed renewal rate',
            },
            type: 'text',
            placeholder: '3 of 4 renewed (75%)',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What surprised you about running a club?',
              medium: 'Biggest insight from running a membership',
              hard: 'Largest insight delta on member behavior vs. expectations',
            },
            type: 'longtext',
            placeholder: 'I didn\'t expect…',
          },
        ],
        parentNote: {
          easy: "Honor your kid\'s membership perks for the 2 weeks — that\'s the lesson. If they ask you to renew, take the ask seriously like a real subscription.",
          medium:
            "Treat the kid\'s membership as a real commercial relationship. Pay the fee upfront; receive the perks; consider renewal genuinely. Modeling commercial respect for the offer teaches the mechanic better than any lecture.",
          hard:
            "Engage as a real customer. Upfront fee transferred; perks consumed and evaluated; renewal decision made on member-perceived value. The behavioral fidelity is the point.",
        },
        printables: {
          trackers: [
            {
              title: 'Membership Roster',
              note: 'One row per member. Mark who renewed at the end.',
              columns: ['Member Name', 'Date Joined', 'Fee Paid ($)', 'Renewed? (Y/N)', 'Reason'],
              rows: 5,
            },
          ],
          worksheets: [
            {
              title: 'My Club Design',
              blocks: [
                {
                  label: '🎟️ Club name',
                  hint: 'Something memorable.',
                  lines: 1,
                },
                {
                  label: '💵 Fee',
                  equation: '$ _______  for  _______ weeks',
                },
                {
                  label: '🎁 Member perks (list 3)',
                  hint: 'What can MEMBERS do that non-members can\'t?',
                  lines: 4,
                },
                {
                  label: '🍭 My loss leader',
                  hint: 'The "$1.50 hot dog" of my club — over-deliver here.',
                  lines: 2,
                },
                {
                  label: '👥 Target members',
                  hint: 'Specific names — who do I think will join?',
                  lines: 3,
                },
                {
                  label: '🪧 My pitch (one sentence)',
                  hint: 'Practice it out loud!',
                  lines: 2,
                },
                {
                  label: '🔄 Renewal hook',
                  hint: 'The reason members will SAY YES again at week 2.',
                  lines: 3,
                },
                {
                  label: '🎯 My renewal rate goal',
                  hint: 'How many of 4 do I think will renew? 3? 4?',
                  lines: 1,
                },
              ],
            },
          ],
          signs: [
            {
              emoji: '🎟️',
              headline: 'JOIN THE CLUB',
              subline: 'Members get perks non-members CAN\'T!',
              pricePlaceholder: 'Just $___ for 2 weeks',
              accent: '#FF6B6B',
            },
          ],
          checklists: [
            {
              title: 'Club Launch Checklist',
              items: [
                'Club name + perks decided',
                'Fee set ($1-$5)',
                'Membership card designed (printed from this pack!)',
                'Loss-leader perk picked',
                'Pitch practiced out loud',
                '3+ family members or friends targeted',
                'Tracker printed and ready',
                'Calendar reminder set for "renewal day" in 2 weeks',
              ],
              note: 'Tip: the SIGN matters more than the perks. Make the membership look special and people will want IN.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
