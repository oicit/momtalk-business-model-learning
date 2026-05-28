/**
 * App Maker — software economics, marginal cost ≈ 0, infinite scale.
 *
 * Phase 5 finale (and the 22nd module overall). Awards a LEGENDARY card.
 *
 * Goal: take a kid from "software is mysterious tech magic" → to
 * "software has a unique economic property — the second copy costs
 * $0, so once it works, scaling is essentially free" → to actually
 * designing a paper-prototype app (problem + 3 screens + pricing) and
 * pitching it.
 *
 * Beat order:
 *   intro (1000th copy = $0) → decision (homework help: tutor each /
 *   build APP / sell book) → think-deeper (marginal cost zero,
 *   digital distribution, one engineer × millions of users) →
 *   concept-cards (Marginal Cost · Scale · Distribution · Network
 *   Effects) → calc-challenge ($1000 build / $5 per user → 200 user
 *   break-even, then pure profit) → brainstorm (3 apps you could
 *   design) → connect (Notion, Duolingo, Calm, Roblox) → outro
 *   (Notion 2-engineer team to $10B valuation) → mission (paper
 *   app design + 3 screens + pricing + family pitch).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'app-maker',
  themeKey: 'app-maker',
  emoji: '📱',
  title: 'App Maker',
  subtitle: {
    easy: 'Why software is the most valuable thing in the modern world: the second copy is FREE.',
    medium:
      'Software economics: marginal cost ≈ 0, digital distribution, and why 1 engineer can serve millions.',
    hard:
      'Software business model fundamentals: zero marginal cost, network effects, and the structural advantages over physical-goods businesses.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Why is SOFTWARE so valuable? Because once you BUILD it once, the SECOND copy is FREE. The 1000th. The MILLIONTH. ALL FREE. A book costs $1 to print each time. An app costs $0 to copy. That\'s why software companies are the BIGGEST on Earth — Apple, Google, Microsoft, all of them.",
        medium:
          "Software has a unique economic property: the marginal cost to produce one more copy is essentially $0. A book costs $1-$3 to print + ship. An app costs ~$0 to send. The economic consequence: software companies enjoy structurally higher margins + infinite scale potential. Today: the math and the case studies.",
        hard:
          "Software businesses operate at marginal cost ≈ 0 + global digital distribution + ~zero replication cost. The economic implications: 70-90% gross margins, scale without proportional cost, network effects, winner-take-all dynamics. These properties explain ~70% of consumer-tech market cap formation in the last 20 years.",
      },
    },

    // ─── Decision: help kids with homework ─────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 You Want to Help Kids With Homework',
      scenario: {
        easy:
          "You\'re great at math. You want to HELP other kids who struggle. Three ways to do it.",
        medium:
          "Product opportunity: math homework help. Three delivery models with very different scaling profiles.",
        hard:
          "Greenfield education-product decision. Three delivery models: 1:1 service, software product, physical good. Optimize for scalability + impact.",
      },
      question: {
        easy: 'How do you help?',
        medium: 'Pick the delivery model:',
        hard: 'Maximize scalable impact:',
      },
      choices: [
        {
          label: {
            easy: 'Tutor each kid one-by-one in person — $20 per session',
            medium: 'One-on-one tutoring service — $20/session, per-kid effort',
            hard: 'Personal service delivery — bounded by personal time',
          },
          feedback: {
            easy:
              "Helps individual kids a LOT. But you can only fit 2-3 kids per day. You\'re tapped out at 5-10 customers. Big income limit.",
            medium:
              "Linear scaling at 2-3 sessions/day max. Income capped at ~$100-200/day before you literally run out of hours. Service business — high per-hour rate but bounded TAM.",
            hard:
              "Linear in operator hours. Capped at ~10-20 sessions/week per individual operator. Per-session economics strong; TAM bounded by operator capacity. Sustainable as a service business; not scalable as a product.",
          },
        },
        {
          label: {
            easy: 'Write a BOOK that helps kids — print it, sell for $10 each',
            medium: 'Self-publish a book at $10 retail — physical printing + shipping',
            hard: 'Physical product — book at $10 ASP, ~$3 unit cost',
          },
          feedback: {
            easy:
              "OK. You can sell a LOT of books. But each one costs $2-$3 to print + ship. You can only really sell to people you can REACH. And revisions = new printing.",
            medium:
              "Better than tutoring — scalable past your hours. But each unit has physical cost ($2-4) + shipping + revisions require reprinting. Distribution is bounded by physical channels.",
            hard:
              "Physical product: scalable past operator hours. Unit margin ~70% (10 retail × 30% COGS). Distribution + revisions = physical-channel costs. Better than service but capped by replication + distribution costs.",
          },
        },
        {
          label: {
            easy: 'Build an APP that explains math. ONE app helps MILLIONS of kids.',
            medium: 'Build one math-help app — global digital distribution, $5/month subscription',
            hard: 'Software product — global distribution, near-zero marginal cost, subscription pricing',
          },
          feedback: {
            easy:
              "WINNER. Same WORK once. Then 1 kid uses it. Or 100,000 kids use it. SAME effort. SAME cost. Software is the only product where you can reach EVERY KID ON EARTH with the same first effort.",
            medium:
              "Optimal scaling profile. Build once, distribute globally at ~zero marginal cost. Same effort serves 100 or 1M users. App stores handle distribution; subscription compounds revenue. Best long-run economics of the three options.",
            hard:
              "Aligned with software unit economics. Marginal cost ~$0 per user; subscription compounds. Global app store distribution; one engineer team serves millions. Structurally superior unit economics to service or physical product at scale.",
          },
          isPreferred: true,
        },
      ],
      realWorldReveal: {
        easy:
          "DUOLINGO does exactly this. Started in a dorm. Built one app for languages. Today: 100 MILLION users + $10 BILLION company. Same effort it took to make. Just millions more users.",
        medium:
          "Duolingo: founded 2011 by 2 people in a CS lab, now ~100M monthly users + ~$10B market cap. Same code serves 100 or 100M users. Operational team grew to ~700 employees but capital efficiency far exceeds equivalent service business. Classic software-scale outcome.",
        hard:
          "Duolingo case: founded 2011 (Pittsburgh + 2 co-founders), IPO 2021 at $4B market cap, now ~$10B. ~100M MAU. Demonstrates software-business scale dynamics at SaaS-consumer scale. Equivalent service business would require 100,000+ tutors for same reach.",
      },
    },

    // ─── Think-deeper: zero marginal cost ──────────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Is Software SO VALUABLE?',
      intro: {
        easy: "Why are software companies worth SO MUCH MORE than other companies? Let\'s break it down.",
        medium: "What\'s the structural reason software companies dominate modern market cap?",
        hard: 'What economic properties of software drive its valuation premium?',
      },
      layers: [
        {
          question: {
            easy: 'How much does it cost to give your app to ONE MORE PERSON?',
            medium: 'What\'s the marginal cost of one more software user?',
            hard: 'What\'s the marginal cost of software at scale?',
          },
          reveal: {
            easy:
              "Basically ZERO. A few cents of computer space. That\'s IT. No printing. No shipping. No store. No box. Just copy the file. Send it. Done.",
            medium:
              "Marginal cost per additional user ≈ $0.01-$0.10 (server costs). Effectively zero compared to physical goods. The 1,000,000th user costs the same as the 1,001st — nothing.",
            hard:
              "Marginal user cost in modern SaaS: $0.05-$0.50 in server + bandwidth + support. Approaches zero asymptotically. Compared to physical-goods unit cost ($0.50-$5+), software COGS per user is structurally different in kind.",
          },
        },
        {
          question: {
            easy: 'What does that DO to the BUSINESS MATH?',
            medium: 'How does zero marginal cost change unit economics?',
            hard: 'How does the cost structure differ from physical-goods business?',
          },
          reveal: {
            easy:
              "EVERY DOLLAR after the FIRST user is mostly PROFIT. If your app costs $1,000 to build and you charge $5/month — once you have 200 users you\'ve covered the build. EVERY user after that = MOSTLY PROFIT.",
            medium:
              "Once fixed costs (build, maintenance) are covered, additional revenue is ~80-90% gross margin. Physical goods: every unit incurs marginal cost forever. Software: revenue compounds at near-zero cost. Structurally different financial model.",
            hard:
              "Software cost structure: high fixed cost (development + maintenance) + near-zero marginal cost. Above break-even, gross margin approaches 90%+. Physical-goods cost structure: low fixed + significant variable cost. Margin ceiling ~30-50%. Software\'s structural margin advantage compounds across the user base.",
          },
        },
        {
          question: {
            easy: 'Why can ONE ENGINEER serve MILLIONS of users?',
            medium: 'What allows software to scale operator-independently?',
            hard: 'What\'s the operator-leverage in software businesses?',
          },
          reveal: {
            easy:
              "Because the COMPUTER does the work. Once you build it, the computer runs the app for everyone at once. The engineer doesn\'t have to talk to each user — the SOFTWARE talks to them.",
            medium:
              "Software automates the per-user interaction. One engineer maintains code that serves all users simultaneously. Operator leverage is multiplicative: more users don\'t require more engineers. Same team serves 1K or 1M.",
            hard:
              "Software operator leverage: linear maintenance burden × exponential user base. One engineer can architect systems serving 1M+ users. Service businesses have linear scaling — 1 hour per user. Software is sub-linear or constant.",
          },
        },
        {
          question: {
            easy: 'What\'s the BIG RISK of software?',
            medium: 'What\'s the structural risk in software businesses?',
            hard: 'What\'s the dominant failure mode in software economics?',
          },
          reveal: {
            easy:
              "Building the WRONG THING. Software costs nothing to copy — but EVERYTHING to BUILD. If you build for 6 months and nobody wants it, you wasted those 6 months.",
            medium:
              "Build risk. Software has high upfront investment + low marginal cost — but the upfront investment is sunk if nobody wants the product. Customer-development discipline (see Survey Master lesson) is the primary risk mitigation.",
            hard:
              "Software\'s asymmetric cost structure (high fixed + low variable) means market-misfit risk dominates. The upfront sunk cost is the binding loss; the customer-development discipline is the primary mitigation. Lean Startup methodology is the codified response.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Words of Software Economics',
      subheading: 'These explain Apple, Google, Microsoft, Meta, every big tech company.',
      cards: [
        {
          emoji: '💸',
          title: 'Marginal Cost',
          desc: {
            easy: 'MARGINAL COST = the cost of ONE MORE copy. For an app: pennies. For a book: dollars. For software, it\'s basically ZERO. That\'s the magic.',
            medium:
              'Marginal cost = cost to produce one more unit. Software: ~$0.01-$0.10 server cost per user. Physical: $0.50-$10+. The gap drives software\'s structural margin advantage.',
            hard:
              'Marginal cost / unit in software ≈ $0. Drives 70-90% gross margins. Compared to physical-goods marginal cost 30-70% of revenue, software\'s position structurally advantages.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🚀',
          title: 'Scale',
          desc: {
            easy: 'SCALE = how big you can grow. Software can scale INFINITELY. Same code serves 1 user or 1 BILLION. No more printing, shipping, or stores needed.',
            medium:
              'Scale = ability to serve more users without proportional cost. Software scales without proportional team/inventory growth. 1 engineer → 1M users is normal in modern SaaS.',
            hard:
              'Scaling profile: software supports sub-linear cost scaling vs. user growth. Service businesses are linear in operator hours. Physical goods are linear in unit production. Software is the only category with structurally favorable scaling.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '🌐',
          title: 'Distribution',
          desc: {
            easy: 'DISTRIBUTION = how you GET your stuff to customers. App stores (Apple, Google) put your app in MILLIONS of pockets instantly. No trucks. No warehouses.',
            medium:
              'Distribution = the mechanism delivering product to users. App stores (Apple App Store, Google Play) provide instant global reach. Replaces physical distribution networks entirely.',
            hard:
              'Distribution as a competitive advantage: app stores aggregate ~5B+ global users into ~2 platforms. Software businesses get global TAM at zero distribution cost (minus take rate).',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '🌐',
          title: 'Network Effects',
          desc: {
            easy: 'NETWORK EFFECTS = your app gets BETTER as MORE people use it. Friends on the app. More content. More value. The first user = lonely. The millionth user = experience EXPLOSION.',
            medium:
              'Network effects = product becomes more valuable as user base grows. Social networks, marketplaces, communication apps. Drives winner-take-all dynamics in many software categories.',
            hard:
              'Network effects = positive externality on user value from each additional user. Drives winner-take-all dynamics in social + marketplace + communication categories. Competitive moat unmatched in non-software businesses.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: break-even users ─────────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: Break-Even Users',
      setup: {
        easy: 'Your app costs $1,000 to build. You charge $5/month per user. How many users do you need to BREAK EVEN?',
        medium:
          "App build cost $1,000. ARPU $5/month. Compute users needed to break even in month 1.",
        hard:
          "Software unit economics: fixed build cost $1,000, ARPU $5/month, ~$0 marginal cost per user. Compute break-even subscriber count for a single month.",
      },
      problem: {
        givens: [
          { label: 'build cost', value: 1000, suffix: '$' },
          { label: 'price per user/month', value: 5, suffix: '$' },
        ],
        answerLabel: 'Break-even users',
        answer: 200,
        suffix: 'users',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          "Step 1: $1,000 / $5 = 200 users.\n\nAt 200 paying users, you\'ve made back your build cost. After that — every NEW user is MOSTLY PROFIT. 1,000 users = $5,000/month. 10,000 users = $50,000/month. SAME app. SAME work. Just more people using it.",
        medium:
          "Break-even = build cost / ARPU = $1,000 / $5 = 200 subscribers in month 1.\n\nAt 1,000 users: $5,000/month revenue, ~$200 hosting cost, ~$4,800 net monthly. At 10,000 users: $50,000/month revenue, ~$2,000 hosting, ~$48,000 net monthly. Operating margin scales upward with user base — opposite of typical service business.",
        hard:
          "Break-even at 200 users in month 1. At steady state (~5% monthly churn assumed), maintenance + growth requires net new acquisition.\n\nUnit economics scaling: 1K users → $5K MRR → ~$4.5K gross / month after server costs. 10K users → $50K MRR → $46K gross / month. Operating margin scales upward — opposite of service business. SaaS public benchmarks: 70-85% gross margin, 15-25% operating margin at scale.",
      },
    },

    // ─── Brainstorm: 3 apps you'd build ───────────────────────────────
    {
      kind: 'brainstorm',
      heading: '💡 Your 3 App Ideas',
      prompt: {
        easy:
          'List 3 PROBLEMS kids have. For each: how could an APP solve it? Real problems. Real apps.',
        medium:
          'Identify 3 problems where an app would be the best solution. For each: problem, user, app concept, monetization.',
        hard:
          'Generate 3 software-product concepts. For each: target user, problem statement, product solution, monetization mechanism.',
      },
      minItems: 3,
      placeholder: 'e.g. Kids forget homework — app reminds them + parents can see when it\'s done — $3/month...',
      hints: [
        {
          easy: 'HOMEWORK / SCHOOL — reminders, organizers, study help, flashcards. Kids forget; apps remember.',
          medium: 'School + homework apps: organization, reminders, flashcards. Large kid TAM; parent WTP; recurring use.',
          hard: 'Education category: homework organization, flashcards, study aids. Recurring usage + parental WTP. Strong unit economics potential.',
        },
        {
          easy: 'CHORES — kid earns points/money for chores; parents track and pay. Solves the "did you do it?" fight.',
          medium: 'Chore tracking + parental approval flow + allowance integration. Solves real parent-kid friction. Multiple WTP populations.',
          hard: 'Chore-tracking apps: solves parent-kid coordination friction. Multiple buyer-personas (parent + kid). Recurring engagement model.',
        },
        {
          easy: 'PETS — tracking food/walks/vet appts/medicine for a pet. People always forget.',
          medium: 'Pet-care management: feeding schedules, walk tracking, vet reminders, medication. Recurring high-engagement.',
          hard: 'Pet-care management: high-frequency utility for pet owners. Subscription willingness moderate; ad-supported viable.',
        },
        {
          easy: 'FRIENDS — find a friend to play with right now, even if they\'re busy. Match availability.',
          medium: 'Social availability apps: real-time matching for play / hangout / activity. Network-effect-dependent — early stage hard.',
          hard: 'Social-availability apps: strong network-effect dependency. Cold-start problem dominant. High-reward if cracked; high-failure-risk.',
        },
        {
          easy: 'CREATIVE — easy way to design, draw, make music, create art on a phone.',
          medium: 'Creative tools: drawing, music, video, design. Strong category; mobile-creator economy growing.',
          hard: 'Creative tools category: TikTok, Procreate, GarageBand precedents. Strong mobile-creator economy tailwind.',
        },
        {
          easy: 'KID NEWS — daily news made FOR KIDS, in language they get, with fun illustrations.',
          medium: 'Kid-specific media: news, podcasts, learning. Parent-WTP-driven category.',
          hard: 'Kid media subscriptions: parent-WTP-driven category. Premium content + curation. Recurring revenue model.',
        },
      ],
      closer: {
        easy: 'Pick the BEST one. Now design 3 screens of it on paper. You don\'t need to CODE it. Designing it is the first step.',
        medium:
          "Pick the strongest concept + paper-prototype 3 screens. Design before code is the discipline; coding without design wastes effort.",
        hard:
          'Concept selection + paper prototype of 3 core screens. Pre-code design surfaces UX assumptions; codes assumptions cheap.',
      },
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Apps Built by Tiny Teams',
      concept: {
        easy:
          'The world\'s most valuable apps were often started by 1-3 people. The SAME app reaches MILLIONS.',
        medium:
          'Small teams routinely build software businesses with global reach + billion-dollar valuations. The scaling profile makes it possible.',
        hard:
          'Modern software businesses regularly scale from sub-5-person founding teams to billion-dollar valuations. The unique scaling profile enables outcomes impossible in service or physical businesses.',
      },
      examples: [
        {
          emoji: '📝',
          who: 'Notion',
          story: {
            easy: 'Notion (note-taking + workspace app) was built by a small team. Today it has over 30 MILLION users and is worth $10 BILLION.',
            medium:
              "Notion: founded 2013 by Ivan Zhao + small team, raised seed 2018, scaled to ~30M users + ~$10B valuation. Productivity software with strong viral growth. Team grew but capital efficiency far exceeded equivalent service business.",
            hard:
              "Notion (Ivan Zhao 2013): productivity software, scaled to ~30M users + ~$10B valuation in ~10 years. Capital raised ~$343M cumulative — efficient capital usage relative to scale. Demonstrates software-business scaling potential from small founding team.",
          },
        },
        {
          emoji: '🧘',
          who: 'Calm',
          story: {
            easy: 'Calm (meditation app) was started by 2 people. Today: $2 BILLION company, 100 MILLION downloads.',
            medium:
              "Calm: founded 2012 by 2 co-founders (Acton Smith + Tew). Meditation + sleep audio. ~100M downloads, ~$2B valuation. Standard SaaS unit economics powering a wellness vertical.",
            hard:
              "Calm (2012, 2 co-founders): meditation subscription app. ~100M downloads, ~$150M+ ARR at peak, ~$2B last private valuation. Subscription + content model with strong unit economics.",
          },
        },
        {
          emoji: '🎮',
          who: 'Roblox (revisited)',
          story: {
            easy: 'Roblox started in 2004. Today: 80 MILLION daily users + 4 MILLION developers + $30 BILLION company. Same app. Same code. Billions of plays.',
            medium:
              "Roblox: founded 2004 by 2 co-founders. ~80M daily active users, ~4M developers, ~$30B market cap. Demonstrates platform-effect compounding on software base.",
            hard:
              "Roblox: founded 2004 (Baszucki + Cassel). Network-effect-driven platform with software economics + UGC supply layer + payment monetization. ~$30B market cap demonstrates compound effect of platform + software economics.",
          },
        },
      ],
      kicker: {
        easy: 'Notion. Calm. Roblox. All started SMALL. All scaled to BILLIONS because software is the one product that scales without limits. Your app could be next.',
        medium:
          "Software businesses scale from kitchen-table teams to billion-dollar valuations more reliably than any other business category. The economic structure enables it.",
        hard:
          'Software businesses routinely achieve outcomes impossible in service or physical businesses. The scaling profile + cost structure + global distribution combine to produce uniquely large outcomes from small initial investments.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You\'ve made it to the FINAL lesson. You now know why software companies dominate the world: ZERO marginal cost + global distribution + scale that NEVER STOPS. Now go design YOUR app.",
        medium:
          "You\'ve completed the full curriculum. You now understand software economics — the unique scaling profile that makes it the dominant value-creation engine of the digital age. Apply it.",
        hard:
          "You\'ve completed the 22-module curriculum. You now hold a working mental model of business economics spanning compound interest to platform economics to IP empires to software businesses. The frameworks apply at every scale.",
      },
      bonusTip: {
        easy:
          "Crazy fact: Brian Chesky (Airbnb) sold CEREAL BOXES to fund his startup. Same kid scale → today $80 BILLION company. Tiny start. Massive end. That\'s your model.",
        medium:
          "Brian Chesky / Airbnb funded the startup\'s early days by designing + selling \"Obama O\'s\" + \"Cap\'n McCain\'s\" cereal boxes during the 2008 election. ~$30K raised. The company\'s now ~$80B. Bootstrapping creativity → billion-dollar outcome.",
        hard:
          "Airbnb early-stage capital generation: Chesky + Gebbia designed + sold \"Obama O\'s\" and \"Cap\'n McCain\'s\" branded cereal boxes during 2008 election. Generated ~$30K runway. Now ~$80B valuation. Demonstrates the order-of-magnitude gap between initial capital + ultimate outcome in software-platform businesses.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'app-maker',
        emoji: '📱',
        title: {
          easy: 'Design a real app on paper + pitch it!',
          medium: 'Execute one full paper-prototype design + family pitch cycle',
          hard: 'Complete one paper-prototype + business model + family validation cycle',
        },
        pitch: {
          easy:
            "Pick ONE real problem an app could solve. Design 3 SCREENS of it on paper. Set a price ($1-$10/month?). Pitch it to 3 family members. You don\'t need to CODE — design comes first.",
          medium:
            "Run one full paper-app design cycle: problem, 3 screens, monetization, family pitch. The output is a designed concept ready to evaluate.",
          hard:
            "Execute one paper-prototype + business model cycle: problem definition, 3-screen design, pricing model, family validation. Output is an investable concept.",
        },
        steps: [
          {
            emoji: '🎯',
            text: {
              easy: 'Pick ONE problem an app could solve. From your brainstorm — pick the best one.',
              medium: 'Select your strongest concept. Real problem + observable customer.',
              hard: 'Select concept with clear problem + identifiable customer.',
            },
          },
          {
            emoji: '✏️',
            text: {
              easy: 'Sketch the FIRST screen of your app. What\'s the LOGIN or HOME screen look like?',
              medium: 'Design screen 1: home/onboarding. Sketch core layout + main actions.',
              hard: 'Design screen 1: onboarding or home. Sketch core layout, primary CTA, navigation.',
            },
          },
          {
            emoji: '✏️',
            text: {
              easy: 'Sketch screen 2: the main thing kids DO in the app.',
              medium: 'Design screen 2: core use case. The main user activity.',
              hard: 'Design screen 2: primary use case interface. Where the main user activity happens.',
            },
          },
          {
            emoji: '✏️',
            text: {
              easy: 'Sketch screen 3: their progress / rewards / what they\'ve done.',
              medium: 'Design screen 3: progress/rewards/results view. Where users see their progress.',
              hard: 'Design screen 3: progress / outcome view. Closes the user loop.',
            },
          },
          {
            emoji: '💰',
            text: {
              easy: 'Decide your PRICE — free with ads, $3/month, $5 one-time, etc.',
              medium: 'Set monetization model + price. Subscription / one-time / free+ads.',
              hard: 'Define monetization mechanism + pricing. Subscription / one-time / freemium / ad-supported.',
            },
          },
          {
            emoji: '🎤',
            text: {
              easy: 'PITCH 3 family members. Show your screens. Ask if they\'d use it + pay.',
              medium: '3 family pitches with paper screens. Capture WTP + concerns.',
              hard: '3 family pitches with paper screens. Validate WTP + identify objections + iterate.',
            },
          },
        ],
        reflection: [
          {
            key: 'app',
            prompt: {
              easy: 'What does your app do?',
              medium: 'App concept + target user',
              hard: 'App concept + target user + core value prop',
            },
            type: 'text',
            placeholder: 'A homework reminder app for kids that parents can also see',
          },
          {
            key: 'price',
            prompt: {
              easy: 'Your price?',
              medium: 'Monetization model + price',
              hard: 'Monetization model + pricing tier',
            },
            type: 'text',
            placeholder: '$3/month subscription',
          },
          {
            key: 'breakeven',
            prompt: {
              easy: 'If your app costs $1000 to build, how many users to break even?',
              medium: 'Computed break-even user count',
              hard: 'Break-even user count given fixed build cost',
            },
            type: 'number',
            placeholder: '333',
          },
          {
            key: 'feedback',
            prompt: {
              easy: 'What did your 3 family pitchees say?',
              medium: '3-tester feedback summary',
              hard: '3-tester feedback + WTP signal',
            },
            type: 'longtext',
            placeholder: 'My mom said she\'d pay $5/month if the parent dashboard was easy…',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What did you learn from designing an app?',
              medium: 'Biggest insight from the design + pitch cycle',
              hard: 'Largest insight delta from running paper-prototype + pitch',
            },
            type: 'longtext',
            placeholder: 'I didn\'t realize how much the screens helped explain the idea…',
          },
        ],
        parentNote: {
          easy: "Engage seriously with the design — would YOU pay? Why or why not? Polite \"sure\" is the worst feedback.",
          medium:
            "Genuine engagement as a real customer. WTP signals + objections are the most valuable output. Polite acquiescence is the dominant failure mode.",
          hard:
            "Authentic customer-role engagement. Substantive WTP signal + concrete objections drive the validation methodology. Polite encouragement corrupts the experiment.",
        },
        printables: {
          trackers: [
            {
              title: '3-Tester App Pitch Log',
              note: 'One row per tester. What screen made them lean in?',
              columns: ['Tester', 'Would Pay?', 'Best Feature', 'Concern'],
              rows: 3,
            },
          ],
          worksheets: [
            {
              title: 'My App Design',
              blocks: [
                {
                  label: '📱 App name',
                  hint: 'Memorable + short.',
                  lines: 1,
                },
                {
                  label: '🎯 Problem it solves (one sentence)',
                  lines: 3,
                },
                {
                  label: '👥 Target user',
                  hint: 'Specific age + interests + pain point.',
                  lines: 2,
                },
                {
                  label: '✏️ Screen 1 — Home/Onboarding',
                  hint: 'What\'s the first thing users see?',
                  lines: 8,
                },
                {
                  label: '✏️ Screen 2 — Main Action',
                  hint: 'What do users DO in the app?',
                  lines: 8,
                },
                {
                  label: '✏️ Screen 3 — Progress/Reward',
                  hint: 'Where do users see what they\'ve done?',
                  lines: 8,
                },
                {
                  label: '💰 Pricing model',
                  hint: 'Free + ads? Subscription? One-time?',
                  equation: '$ _______ / _______',
                },
                {
                  label: '🧮 Break-even users at $1000 build cost',
                  hint: 'Build cost / monthly price = ?',
                  equation: '$1000 / $ _______ = _______ users',
                },
                {
                  label: '🔁 v2 changes after 3-tester feedback',
                  lines: 4,
                },
              ],
            },
          ],
          checklists: [
            {
              title: 'App Design Day Checklist',
              items: [
                'App concept picked',
                'Paper + pencil + eraser',
                'Markers for highlighting buttons + features',
                'Worksheet printed',
                '3 testers lined up',
                'Pricing model decided in advance',
                'Open ears for honest feedback',
                'Plan for v2 iteration',
              ],
              note: 'Tip: APPS are first designed on PAPER. Real designers at Apple, Google, every big tech company start with PAPER + pencil. You\'re doing it the real way.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
