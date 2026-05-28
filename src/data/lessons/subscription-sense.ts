/**
 * Subscription Sense — recurring revenue + churn.
 *
 * Goal: take a kid from "I sold ONE thing for $5, the end" → to
 * "I sold the SAME thing every week to the same person for a year,
 * that's $260" → to actually running a real 4-week subscription
 * service for a family member.
 *
 * Beat order:
 *   intro → decision (selling drawings: one-time / monthly / monthly
 *   with new art each month) → think-deeper (why is recurring so
 *   powerful?) → concept-cards (Subscription/Recurring Revenue/Churn
 *   /LTV) → calc-challenge (1 customer × $5 × 10 months = $50 LTV) →
 *   brainstorm (3 subscriptions YOU could sell) → connect (Netflix,
 *   Costco, Spotify, Apple One, gym) → outro (Netflix DVD-by-mail →
 *   monthly streaming 100× stock) → mission (run real 4-week service).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'subscription-sense',
  themeKey: 'subscription',
  emoji: '🔁',
  title: 'Subscription Sense',
  subtitle: {
    easy: 'Sell ONCE, get paid forever. The trick behind Netflix, Spotify, and your dad\'s Costco card.',
    medium:
      'Recurring revenue, customer churn, and lifetime value — the three numbers that decide whether Netflix, Spotify, or your kid-business wins or dies.',
    hard:
      'Subscription economics: ARR, churn, LTV, CAC — the playbook that built modern SaaS and consumer subscription markets at scale.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Imagine you sold ONE drawing today for $5. Done. $5. Now imagine you sold ONE drawing EVERY WEEK to the same person for a year. SAME drawing. SAME $5. But now you have $260. Welcome to the most powerful trick in modern money: SUBSCRIPTIONS.",
        medium:
          "Sell once, get paid once. Sell on a subscription, get paid forever — until the customer leaves. This single shift is why Netflix is worth $250B and Blockbuster is dead. Today: how the math works, why it\'s so powerful, and how to run one yourself.",
        hard:
          "Subscription business models converted the dominant logic of consumer commerce in the last 20 years. The mechanics: predictable recurring revenue + lifetime value compounding + customer-acquisition payback discipline. The same playbook scales from Netflix to a kid selling weekly drawings.",
      },
    },

    // ─── Decision: how to sell drawings ────────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 You\'re Selling Drawings',
      scenario: {
        easy:
          "You\'re an artist. Your drawings are GOOD. Your aunt wants to buy them. You\'ve got three ways to sell to her — same art, totally different money.",
        medium:
          "You make weekly drawings. Your aunt wants to buy your art. Three pricing models on the table. Same product. Same customer. Wildly different revenue.",
        hard:
          "Pricing-model decision: artist with weekly output, single anchor customer (aunt). Three structures — perpetual one-time, flat monthly, monthly with continuous content delivery.",
      },
      question: {
        easy: 'What do you offer her?',
        medium: 'Which pricing model do you pick?',
        hard: 'Optimize pricing structure:',
      },
      choices: [
        {
          label: {
            easy: 'One drawing for $20. Done. That\'s it.',
            medium: 'One-time sale at $20',
            hard: 'Perpetual purchase at $20 — single-transaction model',
          },
          feedback: {
            easy:
              "OK! You got $20. But next week she\'s already bought one. You have to go FIND a new customer. Then ANOTHER one. EVERY week you\'re back at zero. Exhausting.",
            medium:
              "One-and-done. Revenue: $20. But you have to acquire a NEW customer every cycle. The hardest, most expensive thing in any business is finding a new customer. One-time sale forces you to do it constantly.",
            hard:
              "Sub-optimal. CAC payback is one transaction — no compounding from the customer relationship. Repeatable revenue requires repeat customer acquisition, which is the costliest line in any business.",
          },
        },
        {
          label: {
            easy: 'Monthly subscription: $5/month — and I send her LAST month\'s drawing every time',
            medium: 'Subscription at $5/month with the SAME drawing each month',
            hard: 'Flat monthly subscription with non-renewing content',
          },
          feedback: {
            easy:
              "Hmm. After 3 months your aunt notices she got the SAME drawing 3 times. She cancels. Subscriptions only work if you keep DELIVERING something new.",
            medium:
              "Failure mode: high churn. Subscribers leave when they stop getting NEW value. \"Same drawing every month\" gets canceled around month 2-3 once your aunt realizes she\'s paying for nothing fresh.",
            hard:
              "Sub-optimal. Subscriptions require ongoing value delivery to justify recurring payments. Static content drives high churn; high churn shortens LTV, which destroys the unit economics.",
          },
        },
        {
          label: {
            easy: 'Monthly subscription: $5/month — and I send her a BRAND NEW drawing each month',
            medium: 'Subscription at $5/month with NEW content every month',
            hard: 'Recurring subscription with continuously renewing content',
          },
          feedback: {
            easy:
              "YES! Now she\'s excited every month. She STAYS. After a year you\'ve made $60 from ONE customer. Get 10 customers like that and you\'re making $600/year. Same art, way more money.",
            medium:
              "The winning model. Fresh content → low churn → high LTV. After 12 months: $60/customer; 10 such customers = $600/year. Critically, you don\'t need to find new customers as long as the existing ones are happy.",
            hard:
              "Aligned. Recurring subscription with fresh content delivery sustains low churn → high LTV → strong CAC payback. The unit economics support reinvestment into product (better art) and growth (more customers).",
          },
          isPreferred: true,
        },
      ],
      realWorldReveal: {
        easy:
          "This is EXACTLY how Netflix, Spotify, and YouTube Premium work. You pay every month. They give you NEW shows / songs / videos every week. As long as you\'re happy, you keep paying. That\'s called RECURRING REVENUE — and it\'s why Netflix is one of the most valuable companies in the world.",
        medium:
          "Same model: Netflix ($230B market cap), Spotify ($60B), Apple Music, Disney+. All run on recurring revenue + fresh-content treadmill. Cancel rate (churn) is their single most-watched metric. ~5% monthly churn = customer stays 20 months = strong LTV.",
        hard:
          "SaaS and consumer subscription markets are now ~$1T+ globally. Core metrics: monthly recurring revenue (MRR), gross/net churn, LTV / CAC ratio, payback period. Modern startup operating playbooks center on these metrics — same as Netflix\'s aunt-drawing model, just bigger numbers.",
      },
    },

    // ─── Think-deeper: why is recurring so powerful? ──────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Are Subscriptions SO POWERFUL?',
      intro: {
        easy: "What\'s the secret? Why are subscriptions so much better than just selling stuff once?",
        medium: "Why has Wall Street decided subscription companies are worth 5-10× regular companies? Let\'s dig in.",
        hard: 'Why have public markets assigned premium multiples to recurring-revenue businesses?',
      },
      layers: [
        {
          question: {
            easy: 'What\'s the HARDEST part of any business?',
            medium: 'What\'s the single most expensive thing in any business?',
            hard: 'What\'s the dominant cost line in a transactional business model?',
          },
          reveal: {
            easy:
              "FINDING new customers. Convincing strangers to give you their money is HARD. It costs time, ads, hustle. Most businesses spend more money finding customers than making the product.",
            medium:
              "Customer acquisition. Finding and converting new customers is the most expensive activity in nearly every business. CAC (cost of acquisition) is the line that often kills businesses — they can\'t acquire cheaply enough to be profitable.",
            hard:
              "Customer acquisition cost (CAC). For transactional businesses, CAC must amortize against single-transaction revenue → narrow margins, marketing-heavy P&L. Recurring revenue amortizes CAC across multiple periods → wider effective margins.",
          },
        },
        {
          question: {
            easy: 'What happens with subscriptions and that hard part?',
            medium: 'How do subscriptions change the customer-acquisition math?',
            hard: 'How does recurring revenue alter the CAC equation?',
          },
          reveal: {
            easy:
              "You find them ONCE — then they keep paying. The hard work pays you back for MONTHS or YEARS. You can spend more to find each customer because each one is worth WAY more.",
            medium:
              "Subscription businesses can pay more to acquire a customer because they recover the cost across multiple months/years of revenue. CAC payback period is the key metric — typically 6-18 months. After payback, every month is pure margin.",
            hard:
              "LTV / CAC ratio is the diagnostic metric. Healthy subscription unit economics target LTV/CAC ≥ 3, payback ≤ 18 months. Subscription compounds CAC across the customer\'s full tenure rather than amortizing against one transaction.",
          },
        },
        {
          question: {
            easy: 'Why is PREDICTABLE money so valuable?',
            medium: 'Why are investors so obsessed with recurring revenue?',
            hard: 'What\'s the value of revenue predictability?',
          },
          reveal: {
            easy:
              "Because you can PLAN. You know how much you\'ll make next month. So you can invest in better art, more ads, a bigger team. You can\'t plan if every dollar comes from a random one-time sale.",
            medium:
              "Predictable revenue enables planning, hiring, investment. The next 12 months\' revenue is largely visible at the start. This visibility commands a premium on Wall Street — recurring-revenue companies trade at 5-10× higher multiples than equivalent transactional companies.",
            hard:
              "Predictable cash flow reduces variance, enabling higher financial leverage, longer-horizon investment, and more confident hiring. Premium multiples reflect (1) lower risk and (2) longer effective duration of revenue. Recurring-revenue businesses trade at structural premium to transactional peers.",
          },
        },
        {
          question: {
            easy: 'What\'s the SCARY thing about subscriptions?',
            medium: 'What\'s the failure mode every subscription business worries about?',
            hard: 'What\'s the dominant risk factor in subscription models?',
          },
          reveal: {
            easy:
              "CHURN — when customers QUIT. Even Netflix loses customers every month. If too many leave, you lose more than you gain. The whole business can shrink fast.",
            medium:
              "Churn. If customers leave faster than new ones join, the business shrinks even if you\'re still acquiring. \"Net new customers\" = new signups − cancellations. Negative net = decline. Every subscription company watches churn obsessively.",
            hard:
              "Churn is the dominant operational risk. Gross churn (% of customers leaving) and net revenue retention (NRR — expansion minus contraction) are the key metrics. Best-in-class SaaS NRR > 120%; consumer subscription benchmarks lower (~80-100%).",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Words That Run Netflix',
      subheading: 'Same four words run every subscription company on Earth. And your kid-subscription too.',
      cards: [
        {
          emoji: '🔁',
          title: 'Subscription',
          desc: {
            easy: 'A SUBSCRIPTION = you pay a small amount every week/month/year, and you keep getting the thing. Netflix. Spotify. The Costco card. Even some toilet paper now.',
            medium:
              'A subscription is a recurring payment in exchange for ongoing access or delivery. Membership-style (Costco), content-style (Netflix), product-style (Dollar Shave Club), software-style (Adobe). Different goods; same payment shape.',
            hard:
              'Subscription models trade ownership for access (or for ongoing fulfillment). They convert episodic revenue events into a continuous stream. Adoption has spread from software to consumer goods, media, and services over the last 20 years.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '💸',
          title: 'Recurring Revenue',
          desc: {
            easy: 'RECURRING REVENUE = money that comes IN every month, automatically, without you having to chase new customers. The dream of every business.',
            medium:
              'Recurring revenue is income from existing subscribers that arrives without re-selling. Predictable, plannable, defensible. Sometimes called \"ARR\" (annual recurring revenue) or \"MRR\" (monthly).',
            hard:
              'MRR / ARR are the core financial metrics. Calculated as billed-subscription revenue, normalized to a period. The flagship KPI for SaaS and consumer-subscription companies; drives valuation multiples and capital-allocation decisions.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '🚪',
          title: 'Churn',
          desc: {
            easy: 'CHURN = the percent of customers who CANCEL every month. If you have 100 customers and 5 cancel, your churn is 5%. The lower the better.',
            medium:
              'Churn = customers lost / total customers, measured per period. A 5% monthly churn = average customer stays 20 months. Low-churn businesses are durable; high-churn businesses constantly leak.',
            hard:
              'Gross monthly churn = cancellations / starting subscribers. Net churn factors in expansion (upgrades). Average tenure ≈ 1 / churn-rate (i.e. 5%/mo churn → ~20 months avg tenure). Critical for LTV calculations.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '💰',
          title: 'Lifetime Value (LTV)',
          desc: {
            easy: 'LTV = how MUCH money you get from ONE customer in TOTAL — from the day they sign up to the day they cancel. The Netflix LTV per customer is over $500.',
            medium:
              'LTV = average monthly revenue per customer × average tenure. If subscribers pay $5/mo and stay 10 months, LTV = $50. The single most-watched number after MRR — it tells you what an acquired customer is worth.',
            hard:
              'LTV = ARPU × (1 / churn-rate) at steady state. Subscription unit economics target LTV / CAC ≥ 3:1 (Bessemer benchmark). Drives go-to-market spend ceiling: pay at most ⅓ of LTV to acquire.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: customer LTV ─────────────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: One Customer\'s Lifetime',
      setup: {
        easy: 'You sign up your aunt for $5/month. She loves it. She stays for 10 months before canceling. How much money does she pay you total?',
        medium:
          "Customer subscribes at $5/month. Average tenure: 10 months. Compute the customer\'s lifetime value (LTV).",
        hard:
          "Subscription unit economics: ARPU = $5/month, average tenure = 10 months. Compute LTV.",
      },
      problem: {
        givens: [
          { label: 'monthly price', value: 5, suffix: '$' },
          { label: 'avg months they stay', value: 10 },
        ],
        answerLabel: 'Customer LTV',
        answer: 50,
        suffix: '$',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          "$5 × 10 months = $50. That\'s the LIFETIME VALUE of one customer.\n\nNow imagine you have 20 customers like your aunt. 20 × $50 = $1,000. Same art. 20 aunts. $1,000.\n\nNetflix has 280 MILLION subscribers. Even if each pays only $5/month for 2 years, that\'s $33 BILLION. (Real Netflix earns way more — but you get the math.)",
        medium:
          "LTV = $5 × 10 = $50. That\'s revenue from ONE customer over their tenure.\n\nIf you spend $10 to acquire each customer (poster, signs, treats), your LTV/CAC = 5. Anything above 3 is considered strong. With 20 customers: 20 × $50 = $1,000 revenue, 20 × $10 = $200 CAC, gross margin ~$800.\n\nNetflix at scale: ~280M subscribers × ~$12 ARPU × ~10-yr tenure → $30K+ LTV per customer (approximate; actual depends on churn modeling).",
        hard:
          "LTV = ARPU × (1 / monthly churn) = $5 × 10 = $50. Assumes flat churn ~10%/mo and no expansion revenue.\n\nUnit economics check: at CAC = $10, LTV/CAC = 5, payback = 2 months — strong by SaaS standards. Customer cohort revenue: 20 customers × $50 = $1,000 lifetime, $200 acquisition cost, $800 gross contribution before COGS.\n\nNetflix steady-state: 280M subs × ~$12 ARPU × ~50-mo modeled tenure (~2% monthly churn) → ~$600 LTV/sub × 280M = ~$168B steady-state customer-base value. Public market cap ~$250B implies additional growth + brand value beyond steady-state.",
      },
    },

    // ─── Brainstorm: 3 subscription ideas ─────────────────────────────
    {
      kind: 'brainstorm',
      heading: '💡 Your 3 Subscription Ideas',
      prompt: {
        easy:
          'What 3 things could YOU sell as a weekly or monthly subscription? Think: a drawing? A joke? A clean room? Real, doable stuff.',
        medium:
          'Brainstorm 3 subscription services YOU could realistically run. Each should: have a clear customer, deliver fresh value every period, cost less than $5/period.',
        hard:
          'Design 3 candidate subscription offerings. Each: target customer, recurring deliverable, suggested ARPU, churn-mitigation thesis.',
      },
      minItems: 3,
      placeholder: 'e.g. A weekly drawing for Grandma at $2/week...',
      hints: [
        {
          easy: 'Weekly drawing/art piece — $1-$3 a week to grandparents, aunts, uncles.',
          medium: 'Weekly art delivery: $1-3/week. Grandparents and extended family are the strongest market — they pay for the personal touch + the relationship.',
          hard: 'Personal-art subscription: high willingness-to-pay among family members (sentimental utility), low marginal cost, strong relationship retention.',
        },
        {
          easy: 'Daily joke for a parent — $2/week. Send a fresh joke every morning. Pure profit.',
          medium: 'Daily content drip: jokes, fun facts, riddles. $2-5/week. Family or close friends are the easy first customers.',
          hard: 'Content-drip subscriptions have zero COGS and effectively-zero production cost — pure margin once the content pipeline exists.',
        },
        {
          easy: 'Weekly chore service — $5 for ONE specific chore done every day for a week. Trash, dishes, pet walks.',
          medium: 'Recurring chore service: $5-10/week for a specific repeatable task. Differentiates on consistency, not heroics.',
          hard: 'Service subscription: time-based with consistent SLA. Best margins when the marginal cost (your time) compounds positively (skill, speed).',
        },
        {
          easy: 'Weekly bake — \"You get one fresh cookie/muffin every Sunday for $3.\" Delicious + reliable.',
          medium: 'Product subscription: weekly homemade item (cookie, muffin, fresh flowers, kid art). $3-7/week. Aim for variety to fight novelty-churn.',
          hard: 'Product-drop subscription requires fresh-content economics + low fulfillment friction. Mind the COGS — production cost must stay <30% of price for healthy margins.',
        },
        {
          easy: 'Weekly storytime — record a short story or read-aloud for younger sibling. $1/week to your parents.',
          medium: 'Service for younger siblings (storytime, music, tutoring): $5-15/week paid by the parent. High parent-WTP because it solves real parental time scarcity.',
          hard: 'Caregiving-adjacent subscriptions: highest parental WTP per unit time delivered. Caregiving displaces direct-paid alternatives.',
        },
        {
          easy: 'Custom playlist or song recommendation for a parent — $1/week. They love music.',
          medium: 'Curation service: weekly playlists, book recommendations, recipe ideas. Free production + scarce-attention value = strong margin profile.',
          hard: 'Curation subscriptions exhibit high gross margins (low COGS) and high scaling potential (one piece of curation can serve many subscribers).',
        },
      ],
      closer: {
        easy: 'Pick ONE. Run it for 4 weeks. Track every dollar AND every \"please keep doing this\" you hear.',
        medium:
          "Pick the offering with the strongest customer/value match and run it for 4 weeks. Track ARPU, churn signal (any complaints?), and unsolicited expansion (asks to add more).",
        hard:
          'Select for product-market-fit signal strength, not for theoretical max revenue. 4-week pilot generates the data to optimize. PMF presents as low-friction renewal, not as initial purchase.',
      },
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Subscriptions Everywhere',
      concept: {
        easy:
          'Look around. Almost every big company you know runs on subscriptions now. Same trick. Bigger numbers.',
        medium:
          'The subscription playbook now dominates software, media, food, fitness, and increasingly physical retail. The mechanic is invariant; the goods vary.',
        hard:
          'Subscription-first business models have spread across nearly every consumer and B2B category in the last 20 years. Markets reward the model with structural premium multiples.',
      },
      examples: [
        {
          emoji: '📺',
          who: 'Netflix',
          story: {
            easy: 'Netflix STARTED by mailing DVDs to people one at a time. Then they switched to a $10/month subscription with UNLIMITED watching. Same company. Stock went up 100×. That\'s the power of subscriptions.',
            medium:
              "Netflix started in 1997 mailing DVDs at ~$4/rental. Switched to flat $10/month all-you-can-watch in 1999. Streaming launched 2007. Today: ~280M subscribers, ~$36B annual revenue. Stock has compounded ~50,000% since IPO. Same content; subscription pricing changed the trajectory.",
            hard:
              "Netflix: pivoted from transactional DVD rental → flat-rate DVD subscription → streaming subscription. ~280M subs at ~$12 blended ARPU = ~$36B ARR. ~5% monthly churn → ~20-mo modeled tenure. Public market cap historically priced at 7-10× ARR. Single most-cited consumer subscription case study.",
          },
        },
        {
          emoji: '🛍️',
          who: 'Costco',
          story: {
            easy: 'Costco is a STORE — but you have to PAY $60/year to walk in. Sounds crazy. But that membership fee = nearly ALL of Costco\'s profit. The store is just bait. The membership is the business.',
            medium:
              "Costco charges ~$60-$120/year for membership. Membership fees ($4.6B annually) account for ~80% of Costco operating profit. The store itself operates near breakeven; the SUBSCRIPTION is the business model. Renewal rate >90% → extreme LTV durability.",
            hard:
              "Costco unit economics: ~125M members × ~$70 blended fee = ~$8.7B annual membership revenue, ~80% of operating profit. Renewal rate ~92% (U.S./Canada). Store-level margins near zero — subscription is the entire economic model. Public valuation reflects subscription multiples, not retail multiples.",
          },
        },
        {
          emoji: '🍎',
          who: 'Apple One',
          story: {
            easy: 'Apple used to make ALL their money selling iPhones. Now they make HUGE money selling iCloud, Apple Music, Apple TV+, Apple Fitness+, Apple News+. Almost $100 BILLION a year in subscriptions.',
            medium:
              "Apple Services revenue: ~$85B/year (2023) — bigger than McDonald\'s, Coca-Cola, or Boeing\'s entire business. Mostly subscriptions: iCloud, Apple Music, Apple TV+, Apple Fitness+, App Store fees. Margin ~70% (vs. ~35% for hardware). Subscriptions saved Apple from iPhone-saturation slowdown.",
            hard:
              "Apple Services segment 2023: ~$85B revenue, ~70% gross margins. Mix: iCloud, Apple Music, TV+, Fitness+, News+, AppleCare, App Store revenue share. Higher-margin than hardware (35%). Re-rated Apple\'s valuation multiple as services share grew from <10% to ~25% of revenue.",
          },
        },
      ],
      kicker: {
        easy: 'Movies. Music. Food. Stores. Fitness. ALL of them now run on subscriptions. The trick works at every size.',
        medium:
          "Software, media, food, retail, fitness — subscription models have penetrated every consumer category in the last decade. Markets reward the model with structural multiple premium. Your weekly drawing service is in the same family as Apple\'s $85B Services line.",
        hard:
          'Subscription model dominance reflects superior unit economics + revenue predictability + LTV compounding. Public markets reflect this in multiple expansion; private markets in funding allocations. The trend is structural, not cyclical.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You now know what makes subscriptions so powerful: predictable money + customer LTV + low churn. That\'s the same math Netflix watches every single day. Now go run yours.",
        medium:
          "You\'ve got the actual model: recurring revenue, churn, LTV. Run a real 4-week subscription and feel the difference between \"sell once\" and \"keep delivering.\" The math is invariant.",
        hard:
          "You now understand subscription unit economics: MRR/ARR, gross/net churn, LTV/CAC discipline. This framework is the dominant analytical model for SaaS, consumer subscription, and increasingly retail. Practice early.",
      },
      bonusTip: {
        easy:
          "Surprise fact: Netflix in 1998 was worth about $50 million when they made one-time DVD rentals. After they switched to a $10/month subscription? Their stock went up over 100,000% by 2020. The SAME company. Just different pricing.",
        medium:
          "Netflix valuation 1998 (one-time DVD): ~$50M. Netflix valuation 2020 (subscription streaming): ~$250B. Same company, same DNA, just a pricing model change → 5,000× compound. The most expensive lesson of the 21st century in business model design.",
        hard:
          "Netflix\'s pricing model evolution (DVD-per-rental → DVD subscription → streaming subscription) created ~$250B of equity value over 25 years. Pure pricing innovation — the underlying logistics shifted, but the business-model innovation (recurring revenue at flat rate) drove the bulk of value creation.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'subscription-sense',
        emoji: '🔁',
        title: {
          easy: 'Run a real 4-week subscription!',
          medium: 'Operate a 4-week subscription service with at least 2 subscribers',
          hard: 'Execute a 4-week subscription pilot with weekly ARPU + churn measurement',
        },
        pitch: {
          easy:
            "Pick something you can deliver every week (a drawing, a joke, a chore). Sign up 1-3 family members. Charge a small amount every week. Track every payment. Track who CANCELS.",
          medium:
            "Build a real 4-week subscription. Define the offering, set the price, sign up 2-5 family subscribers, deliver weekly, track payments + churn. The math from this lesson becomes muscle memory.",
          hard:
            "Run a 4-week pilot: defined offering, set ARPU, ≥2 subscribers, weekly delivery + payment cycle, end-of-period reconciliation with churn analysis.",
        },
        steps: [
          {
            emoji: '💡',
            text: {
              easy: 'Pick ONE thing you can deliver EVERY week. Same delivery day every week.',
              medium: 'Choose your offering. Same deliverable, same cadence, same delivery day.',
              hard: 'Define the offering with explicit delivery SLA: weekly cadence, fixed day, consistent format.',
            },
          },
          {
            emoji: '💰',
            text: {
              easy: 'Pick a price you\'ll charge every week. $1-$5 works great for family customers.',
              medium: 'Set the weekly price ($1-$5). Start lower — easier to raise than lower.',
              hard: 'Set ARPU. Lower initial price reduces friction at acquisition; price increase signals can be tested mid-pilot.',
            },
          },
          {
            emoji: '🪧',
            text: {
              easy: 'Make a SIGN or a flyer. Tell family what they get + how much it costs.',
              medium: 'Build a subscription pitch: what they get, price, schedule, how to subscribe. Posted somewhere visible.',
              hard: 'Build a one-pager: value prop, price, cadence, delivery method, cancellation terms. Functions as marketing + contract.',
            },
          },
          {
            emoji: '👨‍👩‍👧',
            text: {
              easy: 'Sign up 2-5 family members. Show them the sign. Be friendly!',
              medium: 'Recruit 2-5 subscribers. Family members are the easiest first customers because trust is pre-built.',
              hard: 'Subscriber recruitment: family as warm-market reduces CAC to ~zero. Convert acquisition feedback into product iteration.',
            },
          },
          {
            emoji: '✅',
            text: {
              easy: 'DELIVER on time every week for 4 weeks. Collect the money. Mark the tracker.',
              medium: 'Execute weekly delivery for 4 weeks. Collect payment. Log MRR + any cancellations.',
              hard: 'Maintain weekly delivery cadence. Collect payments + log them. Track churn and any expansion signals.',
            },
          },
        ],
        reflection: [
          {
            key: 'offering',
            prompt: {
              easy: 'What did you offer as a subscription?',
              medium: 'Your subscription offering',
              hard: 'Offering definition + cadence',
            },
            type: 'text',
            placeholder: 'Weekly drawing for grandma',
          },
          {
            key: 'subscribers',
            prompt: {
              easy: 'How many people signed up?',
              medium: 'Subscribers at week 1 → week 4',
              hard: 'Subscriber trajectory (W1 → W4) + churn count',
            },
            type: 'text',
            placeholder: '3 signed up, all 3 stayed',
          },
          {
            key: 'revenue',
            prompt: {
              easy: 'How much money total over 4 weeks?',
              medium: 'Total revenue over 4 weeks',
              hard: 'Realized MRR cumulative over 4 weeks',
            },
            type: 'number',
            suffix: '$',
            placeholder: '24',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What surprised you about running a subscription?',
              medium: 'Biggest insight from running a 4-week subscription',
              hard: 'Largest insight delta from running unit economics at small scale',
            },
            type: 'longtext',
            placeholder: 'I didn\'t realize how much easier it was after week 1…',
          },
        ],
        parentNote: {
          easy: "Even $1/week from one family member is plenty. Honor cancellations gracefully — losing a customer is part of the lesson.",
          medium:
            "Treat the kid\'s subscription as a real commercial relationship. Pay on time; cancel if/when warranted. The economics being internalized (LTV, churn, recurring revenue) underpin trillions of dollars of public-market value.",
          hard:
            "Maintain commercial discipline as customer. Cancel if delivery falls below promise; renew without prompting if delivery holds. The discipline being practiced applies directly to SaaS sales, consumer subscription growth, and platform-economy careers.",
        },
        printables: {
          trackers: [
            {
              title: '4-Week Subscription Tracker',
              note: 'One row per week. Note any cancellations — that\'s your CHURN.',
              columns: ['Week', 'Date', 'Active Subs', 'Money In', 'Cancellations'],
              rows: 4,
            },
          ],
          worksheets: [
            {
              title: 'My Subscription Plan',
              blocks: [
                {
                  label: '🔁 What I\'m delivering',
                  hint: 'One specific thing. Every week. Same day.',
                  lines: 2,
                },
                {
                  label: '💰 Weekly price',
                  equation: '$ _______  every week',
                },
                {
                  label: '📅 Delivery day',
                  hint: 'Same day every week. Sundays are great.',
                  lines: 1,
                },
                {
                  label: '👥 People I\'ll pitch to',
                  hint: 'List names. Aim for 2-5 first subscribers.',
                  lines: 3,
                },
                {
                  label: '🎁 Why they\'ll LOVE it',
                  hint: 'What makes your offer special / personal / fun?',
                  lines: 3,
                },
                {
                  label: '✏️ My pitch (the 2 sentences I\'ll say)',
                  hint: 'Practice it out loud!',
                  lines: 4,
                },
                {
                  label: '🚪 What I\'ll do if someone cancels',
                  hint: 'No fights. Ask WHY. Use the answer.',
                  lines: 2,
                },
                {
                  label: '🎯 4-week revenue target',
                  hint: 'Subscribers × price × 4 = ?',
                  equation: '_______ × $ _______ × 4 = $ _______',
                },
              ],
            },
          ],
          signs: [
            {
              emoji: '🔁',
              headline: 'SUBSCRIBE',
              subline: 'A fresh _____ delivered every week!',
              pricePlaceholder: 'Only $___ / week',
              accent: '#65C9FF',
            },
          ],
          checklists: [
            {
              title: 'Subscription Launch Checklist',
              items: [
                'Offering picked + clear',
                'Weekly price decided',
                'Delivery day picked',
                'Sign or flyer made (print the one in this pack!)',
                '2-5 family members pitched',
                'Confirmed subscriber list',
                'Tracker printed + posted',
                'Calendar reminder for delivery day each week',
                'Plan for collecting weekly payments (cash jar? envelope?)',
                'Phrase ready for cancellations ("Can I ask what changed?")',
              ],
              note: 'Tip: deliver EARLY rather than on time. Reliability over heroics is the secret sauce of subscription retention.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
