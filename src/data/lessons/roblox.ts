/**
 * Roblox: The Platform Economy — when the VENUE makes more than the product.
 *
 * Goal: take a kid from "Roblox is a game" → to "no, Roblox is the
 * VENUE where other kids make games — and Roblox earns a slice of
 * every one" → to actually studying 3 real Roblox games and sketching
 * their own.
 *
 * Beat order:
 *   intro → decision (great game idea — solo / on Roblox / build my
 *   own platform) → think-deeper (why is the venue worth more than the
 *   product?) → concept-cards (Platform/Network Effects/Take Rate/UGC)
 *   → calc-challenge (game earns $1000 → Roblox takes 30% → dev keeps
 *   $700) → brainstorm (3 platforms you use + what they charge) →
 *   connect (App Store, YouTube, Etsy, Uber) → outro (17-yr-old Roblox
 *   millionaires) → mission (study 3 real Roblox games + sketch yours).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'roblox',
  themeKey: 'roblox',
  emoji: '🎮',
  title: 'Roblox: Platform Economy',
  subtitle: {
    easy: 'Roblox didn\'t MAKE most of the games. Other kids did. Here\'s the trick.',
    medium:
      'Why Roblox is worth $30 billion when they don\'t make most of the games — the platform business model explained.',
    hard:
      'Platform economics: two-sided markets, take-rate dynamics, and why platforms typically capture more value than the products on them.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Roblox is the BIGGEST kid game in the world — 80 MILLION people play every day. But here\'s the secret: Roblox didn\'t MAKE most of those games. Other kids did. Roblox just owns the platform — and takes a slice of every game\'s earnings. That\'s the trick.",
        medium:
          "Roblox has 80M+ daily users and is worth ~$30B — but Roblox the COMPANY only built the platform. 4 million OTHER developers built the actual games. Roblox takes ~30% of all Robux spent. The platform takes a cut of every transaction on it. Today: how it works, and why this model now runs the modern economy.",
        hard:
          "Roblox is the canonical kid-facing example of a two-sided platform: users on one side, developers on the other, the platform extracting transaction fees. The model — also: App Store, YouTube, Uber, Etsy, Airbnb — generates ~80% of consumer-tech market cap created in the last 15 years.",
      },
    },

    // ─── Decision: how to ship your game ──────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 You Made an Amazing Game',
      scenario: {
        easy:
          "You just designed a SUPER fun game. You have three ways to share it with the world. Each has a HUGE trade-off.",
        medium:
          "You built a great game. Now: how do you get players? Three distribution strategies, very different economics.",
        hard:
          "Greenfield game distribution decision. Three options: direct distribution, platform distribution, build your own platform. Trade-offs span reach, cost, control, and take-rate.",
      },
      question: {
        easy: 'How do you ship it?',
        medium: 'Pick your distribution strategy:',
        hard: 'Optimize for reach × control × take-rate:',
      },
      choices: [
        {
          label: {
            easy: 'Build a website and sell the game by yourself for $5',
            medium: 'Direct distribution — your own website, no middleman, charge $5',
            hard: 'Direct distribution — capture 100% of revenue, bear full GTM cost',
          },
          feedback: {
            easy:
              "You keep ALL the money — $5 per sale. But… how will anyone find your website? You\'re ONE site in a billion. Almost nobody plays your game.",
            medium:
              "100% revenue capture per sale, but 0% discovery. The bottleneck is acquisition — you\'re unknown, your site is unknown, no platform sends you traffic. Even great games die without distribution.",
            hard:
              "Sub-optimal for solo creators. Direct distribution requires CAC investment that exceeds capacity for most builders. Discovery is the binding constraint; revenue capture is secondary.",
          },
        },
        {
          label: {
            easy: 'Put it on Roblox — they have 80 MILLION players already',
            medium: 'Ship on Roblox — instant access to 80M+ daily users',
            hard: 'Ship via the platform — leverage existing two-sided network',
          },
          feedback: {
            easy:
              "SMART. Roblox takes about 30% of what you earn. But they hand you 80 MILLION players. The slice they take is way less than the slice you GAIN. Other kids have made MILLIONS on Roblox.",
            medium:
              "Optimal for most builders. You give up ~30% take rate but gain instant access to an 80M user base + payment infrastructure + discovery + community. Net: dramatic boost to expected value despite the platform cut.",
            hard:
              "Aligned with empirical optimal strategy. Platform take rates (15-50% range) are typically less than the gain in discoverability + infrastructure + payments. For solo creators, platform distribution dominates direct.",
          },
          isPreferred: true,
        },
        {
          label: {
            easy: 'Try to build a brand-new game platform from scratch to compete with Roblox',
            medium: 'Build your own competing platform — capture the whole stack',
            hard: 'Vertical integration — own platform + own game',
          },
          feedback: {
            easy:
              "Maybe in 10 years! Building a platform takes HUGE money + years of work. Roblox has 20 years of head-start. By the time your platform exists, your game idea is old.",
            medium:
              "Massive overreach for one game. Building a competing platform costs $100M+ and takes 5-10 years. The platform is a moat against new platforms — the network effects make displacement nearly impossible.",
            hard:
              "Strategically misaligned with capacity. Platform incumbents have ~5-10 yr head-starts in network effects, payment rails, and trust. Successful platform displacement requires either a category innovation (mobile vs. desktop) or an order-of-magnitude UX improvement.",
          },
        },
      ],
      realWorldReveal: {
        easy:
          "This is exactly why iPhone games go on the APP STORE (Apple takes 30%), YouTube videos go on YouTube (they take 45%), books go on Amazon (they take 30%). Builders take the trade. The platform gets the customers; the builder makes the product.",
        medium:
          "Every major modern category runs the same way: App Store (~30% take), Google Play (~30%), YouTube (~45%), Twitch (~50%), Steam (~30%), Etsy (~6.5% + listing fees), Amazon Marketplace (~15%). Solo creators trade revenue % for reach, infrastructure, and trust. Platforms accumulate value.",
        hard:
          "Take-rate distribution across major platforms (15-50%) reflects competitive dynamics + value-added services + switching costs. Platform business model dominance is the defining feature of consumer-tech market cap formation since ~2010.",
      },
    },

    // ─── Think-deeper: why is the venue more valuable? ────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Is the VENUE Worth More Than the GAME?',
      intro: {
        easy: "Roblox is worth WAY more than any single game ON Roblox. Why? Let\'s zoom in.",
        medium: "Roblox the platform is worth ~$30B. The biggest single game on Roblox is worth maybe $50M. Why the gap?",
        hard: 'Why do platforms typically command higher valuations than the products distributed on them?',
      },
      layers: [
        {
          question: {
            easy: 'What\'s the most valuable thing Roblox owns?',
            medium: 'What\'s Roblox\'s core asset?',
            hard: 'What\'s the platform\'s fundamental asset?',
          },
          reveal: {
            easy:
              "80 million PLAYERS who already have an account, already have Robux saved up, already check Roblox every day. Without those players, the games are worth nothing.",
            medium:
              "An installed base of 80M+ daily-active users with stored payment credentials, social graphs, and habit. Each new game gains instant access to this base. The base itself is the moat.",
            hard:
              "Aggregated demand-side network. The user base + integrated payment + habit/retention is the irreplicable asset. Games are replaceable; the network is not.",
          },
        },
        {
          question: {
            easy: 'What happens as MORE games get added to Roblox?',
            medium: 'What\'s the feedback loop on Roblox?',
            hard: 'Describe the cross-side network effect.',
          },
          reveal: {
            easy:
              "More games → more reasons for KIDS to play → more kids on Roblox → more reason for DEVELOPERS to build there → more games. It\'s a SPIRAL that keeps spinning bigger.",
            medium:
              "Two-sided network effect. More games attract more users; more users attract more developers; more developers ship more games. The flywheel reinforces itself. Once spinning, very hard to stop.",
            hard:
              "Cross-side network effects: marginal user value scales with developer count, marginal developer value scales with user count. Once activated, displacement requires a coordinated multi-sided switch — very high barriers.",
          },
        },
        {
          question: {
            easy: 'Why don\'t kids just LEAVE Roblox for a new game site?',
            medium: 'Why are users so sticky on Roblox?',
            hard: 'What are the switching costs?',
          },
          reveal: {
            easy:
              "Their FRIENDS are there. Their AVATARS, their Robux, their saved games — all on Roblox. Leaving means leaving all of it. Too much to lose.",
            medium:
              "Switching costs: friends + Robux balance + avatar customizations + game progress + reputation. Each is small alone; combined they create high inertia. Network effects + switching costs = durability.",
            hard:
              "Multi-dimensional switching costs: social graph, accumulated balance, customization sunk cost, reputation, ladder progress. Each switching cost reinforces the others. Net: very high user inertia.",
          },
        },
        {
          question: {
            easy: 'What\'s the cut Roblox takes — and why don\'t developers complain MORE?',
            medium: 'Why do developers accept the ~30% take rate?',
            hard: 'Why is the platform take rate stable under competition?',
          },
          reveal: {
            easy:
              "Because 70% of a HUGE number is better than 100% of NOTHING. Without Roblox, most developers wouldn\'t reach ANY players. So they pay the cut willingly.",
            medium:
              "Because the 70% they keep is on revenue they couldn\'t generate alone. No platform → no users → no revenue. The platform\'s value-add (audience + infrastructure + trust) is worth the cut. Complaints exist (Epic vs. Apple) but most builders stay.",
            hard:
              "Take-rate dominates direct-distribution alternatives in expected value terms. Even if direct keeps 100%, low CAC efficiency + no organic discovery → much lower realized revenue. Equilibrium take-rates persist because the platform\'s contribution dominates the per-unit price.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Words of Platform Business',
      subheading: 'Once you see these, you\'ll see every app, store, and marketplace differently.',
      cards: [
        {
          emoji: '🏛️',
          title: 'Platform',
          desc: {
            easy: 'A PLATFORM is a place where BUYERS and SELLERS meet. The platform doesn\'t make the products — it just makes the meeting happen. And takes a cut.',
            medium:
              'A platform is a two-sided market that connects producers and consumers. It owns the meeting place, the payment rail, and the rules. Apple\'s App Store, YouTube, Etsy, Uber, Airbnb — all platforms.',
            hard:
              'Two-sided platforms aggregate supply and demand under unified rules + infrastructure. Revenue typically flows from take-rate on transactions; value flows to platform owner via accumulated network density.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🌐',
          title: 'Network Effects',
          desc: {
            easy: 'NETWORK EFFECTS = when more people on a platform makes it BETTER for everyone. More friends on Roblox = more fun. More sellers on Etsy = more choices. It\'s a feedback loop.',
            medium:
              'Network effects = a service that becomes more valuable as more people use it. Phones (useless alone, valuable when everyone has one). Same-side (more buyers = better) or cross-side (more buyers attract more sellers). The dominant moat in tech.',
            hard:
              "Network effects produce non-linear value scaling — Metcalfe\'s Law (n²) is the canonical heuristic, though modern formulations vary. Cross-side effects in 2-sided platforms create the strongest moats.",
          },
          color: '#FFE5EC',
        },
        {
          emoji: '✂️',
          title: 'Take Rate',
          desc: {
            easy: 'TAKE RATE = the cut the platform takes from each sale. Roblox: 30%. App Store: 30%. YouTube: 45%. The platform gets paid every time YOU get paid.',
            medium:
              'Take rate = platform\'s % of transaction value. Industry range: ~6-50%. Higher take rates reflect either dominant networks (App Store) or high value-add (YouTube). Take rate × transaction volume = platform revenue.',
            hard:
              'Take rate is the primary monetization lever for platforms. Equilibrium take rates reflect platform value-add, competitive pressure, and creator alternatives. Sustained high take rates indicate dominant network position; downward pressure signals fragmenting markets.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '🎨',
          title: 'UGC (User-Generated Content)',
          desc: {
            easy: 'UGC = stuff USERS make and put on the platform. Roblox games. YouTube videos. Etsy products. The platform doesn\'t make UGC — they just host it AND take a cut.',
            medium:
              'User-generated content (UGC) shifts production cost from the platform to its users. Platform doesn\'t make games (Roblox), videos (YouTube), or products (Etsy) — users do. Massive supply-side scaling without supply-side cost.',
            hard:
              'UGC platforms invert traditional unit economics: marginal supply cost ≈ 0. Profitability scales much faster than producer-owned content models. Trade-off: quality control becomes the binding constraint.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: the platform fee ──────────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: The Platform Cut',
      setup: {
        easy: 'Your Roblox game earns $1,000 in one month! Roblox takes 30% as their fee. How much do YOU keep?',
        medium:
          "Your Roblox game generates $1,000 of Robux in a month. Roblox\'s take rate is 30%. Compute your net keep.",
        hard:
          "Per-period developer economics: gross revenue $1,000, platform take rate 30%. Compute developer net.",
      },
      problem: {
        givens: [
          { label: 'gross revenue', value: 1000, suffix: '$' },
          { label: 'platform take rate', value: 30, suffix: '%' },
        ],
        answerLabel: 'You keep',
        answer: 700,
        suffix: '$',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          "Step 1: Roblox takes 30% × $1,000 = $300. Step 2: $1,000 − $300 = $700 for you.\n\nThat 30% sounds like a lot. But you got 80 MILLION potential players. Without Roblox, you might earn $0. With Roblox, you earn $700. Easy choice.",
        medium:
          "Roblox cut: 0.30 × $1,000 = $300. Developer keep: $700.\n\nThe top Roblox developers earn $5M+/year. Roblox\'s slice on that = $1.5M per top developer. Scaled across 4M developers, the platform aggregates massive revenue without producing a single game. Same math as Apple App Store and YouTube — different proportions.",
        hard:
          "Developer net = gross × (1 − take_rate) = $1,000 × 0.70 = $700. Compounded across Roblox\'s ~4M developers and ~$2.5B annual Robux spend, ~30% flows to platform = ~$750M platform revenue + retention of network density. The 70/30 split is the standard configuration across most large content platforms.",
      },
    },

    // ─── Brainstorm: 3 platforms you use ───────────────────────────────
    {
      kind: 'brainstorm',
      heading: '🔎 Spot the Platforms',
      prompt: {
        easy:
          'List 3 PLATFORMS your family uses. Apps, websites, stores. For each: what do they take a cut of?',
        medium:
          'Identify 3 platforms you or your family use regularly. For each: what they aggregate (buyers vs sellers), and roughly what cut they take.',
        hard:
          'Enumerate 3 two-sided platforms in your daily life. For each: sides, take rate (estimated), and primary network-effect moat.',
      },
      minItems: 3,
      placeholder: 'e.g. YouTube — they take ~45% of ads on every video...',
      hints: [
        {
          easy: 'YouTube. They take a slice of every ad on every video.',
          medium: 'YouTube: ~45% take on ad revenue, +variable on memberships. ~2B monthly active users on the demand side; millions of creators on supply side. The biggest UGC video platform.',
          hard: 'YouTube: ad rev split 55/45 (creator/Google), Shorts revenue share lower. Cross-side network strong; switching cost via subscriber graph + watch history.',
        },
        {
          easy: 'App Store / Google Play. Take 30% of every app you buy.',
          medium: 'Apple App Store + Google Play: ~30% take on paid apps + IAPs, reduced to 15% after year one for some. ~3M+ apps each; ~2B+ users.',
          hard: 'Mobile app stores: ~30% take rate (historical) → 15-30% mixed post-2020 antitrust pressure. Network density per OS makes switching impractical for users.',
        },
        {
          easy: 'Etsy, Amazon Marketplace — places where lots of small sellers list stuff.',
          medium: 'Etsy: ~6.5% transaction fee + listing fees + payments. Amazon Marketplace: ~15% + FBA fees. Different take rates because different value-adds (Amazon does fulfillment + Prime traffic).',
          hard: 'Etsy take rate ~6.5% (relatively low — less value-add). Amazon Marketplace ~15% + FBA ~$3-5/unit fulfillment. Take rate calibrates to platform value contribution.',
        },
        {
          easy: 'Uber, DoorDash — drivers do the work, the app takes a slice.',
          medium: 'Uber: ~25-30% take on rides; Lyft similar. DoorDash: ~15-20% + delivery fees. The driver/courier does the work; the app brokers the match.',
          hard: 'Mobility/delivery platforms: 15-30% gross take, reduced by driver incentives → net ~10-15%. Recent regulation pressuring transparency on take-rate.',
        },
        {
          easy: 'Spotify, Apple Music — pay artists a tiny slice per song play.',
          medium: 'Music streaming platforms: take ~30% of subscription revenue, distribute the rest by stream share. Spotify pays ~$0.003-$0.005 per stream.',
          hard: 'Streaming pro-rata distribution: ~70% of subscription revenue to rights holders, divided by stream share. Artist economics weak vs. legacy formats; platform aggregates value.',
        },
        {
          easy: 'Twitch — streamers play games, twitch takes a cut of subs and ads.',
          medium: 'Twitch: ~50% on subscriptions, varies on ad revenue. Top streamers negotiate higher splits. Same model: UGC + take-rate.',
          hard: 'Twitch: 50/50 sub split standard, 70/30 for select partners. Ad RPM low vs. YouTube. Streamer concentration creates renegotiation leverage at the top.',
        },
      ],
      closer: {
        easy: 'Once you start seeing platforms, you\'ll see them EVERYWHERE. They\'re the secret of modern business.',
        medium:
          "Every major consumer tech category has consolidated around platform leaders. Once you internalize the model, market structure becomes obvious.",
        hard:
          'Platform models now dominate consumer tech market cap formation. Once recognized, market-structure analysis simplifies — identify the platform and its take-rate dynamics.',
      },
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Platforms Run the Modern Economy',
      concept: {
        easy:
          'The biggest companies you\'ve ever heard of — Apple, Amazon, Google, Meta, Uber — are PLATFORMS. They don\'t make most of what they sell.',
        medium:
          'The platform model now accounts for the majority of consumer-tech market cap. Every "tech giant" is at heart a platform — the products vary, the architecture is the same.',
        hard:
          'Consumer-tech market cap concentration reflects platform model dominance. The architecture has proven decisively superior to product-owned models over the last 20 years across every category it has touched.',
      },
      examples: [
        {
          emoji: '📱',
          who: 'Apple App Store',
          story: {
            easy: 'Apple makes the iPhone. But the APP STORE makes them billions — and Apple doesn\'t make the apps! Other developers do. Apple takes 30%. That\'s about $100 BILLION a year just from app store fees.',
            medium:
              "Apple App Store: ~$85B gross developer revenue / ~$25B to Apple via take rate (2023). The store doesn\'t make a single app — third parties do. The 30% take rate generates more than the entire Mac business. Same model, larger scale.",
            hard:
              "App Store gross revenue ~$85B (2023), Apple\'s ~30% cut = ~$25B. Margin contribution larger than Mac segment. Same platform mechanics as Roblox — App Store proves the model scales to global dominance.",
          },
        },
        {
          emoji: '🏠',
          who: 'Airbnb',
          story: {
            easy: 'Airbnb doesn\'t OWN a single hotel. People rent out their own houses on Airbnb. Airbnb takes ~15% of every booking. They\'re bigger than Marriott and Hilton COMBINED. Without owning anything.',
            medium:
              "Airbnb: ~$10B revenue, zero owned real estate. ~6M hosts list ~7.7M properties globally. Take rate ~15% blended. Larger market cap than Marriott + Hilton + Hyatt combined — they own infrastructure; Airbnb owns the demand.",
            hard:
              "Airbnb FY2023 revenue ~$10B, valuation ~$80B vs. Marriott ~$60B + Hilton ~$45B (which own/operate real estate). Asset-light platform model dominates asset-heavy operator model in capital efficiency.",
          },
        },
        {
          emoji: '🛒',
          who: 'Amazon Marketplace',
          story: {
            easy: 'About HALF of everything sold on Amazon isn\'t sold BY Amazon — it\'s sold by other sellers. Amazon takes a cut PLUS fees for warehousing AND fees for shipping. Triple-dipping.',
            medium:
              "Amazon Marketplace third-party sales: ~60% of all units sold on Amazon. Take rate ~15% + Fulfillment by Amazon (FBA) fees + advertising. The marketplace business is larger and more profitable than Amazon\'s own retail.",
            hard:
              "Amazon Marketplace 3P sales: ~60% of unit volume. Stacked monetization: 15% transaction fee + FBA logistics fees + sponsored-placement ad revenue. Marketplace + AWS together drive Amazon\'s profitability; first-party retail is near-margin-neutral.",
          },
        },
      ],
      kicker: {
        easy: 'Apple. Amazon. Airbnb. Roblox. All platforms. None make most of what they sell. All worth WAY more than the businesses that DO make stuff.',
        medium:
          "Platform companies have consistently captured more value than the producers operating on them. The producers are replaceable; the platform is not.",
        hard:
          'Platform-vs.-producer value asymmetry has been one of the most consistent capital-formation patterns of the digital era. The producer surplus is competed away; the platform extracts persistent rents.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You now know the secret of every modern tech giant: PLATFORMS earn from EVERY OTHER company that builds on them. Once you see it, you can\'t un-see it.",
        medium:
          "You\'ve cracked the platform model — two sides, take rate, network effects, UGC. This is the dominant business architecture of our era. Now go look at Roblox with fresh eyes.",
        hard:
          "You now understand two-sided platform mechanics, take-rate equilibria, and network-effect moats. This is the dominant analytical framework for understanding modern consumer-tech market structure.",
      },
      bonusTip: {
        easy:
          "Real story: a 17-year-old developer named Alex Hicks earned over $1 MILLION building games on Roblox before he could legally vote. He\'s now one of MANY teen millionaires on the platform. Kids ARE the developers.",
        medium:
          "Roblox developer compensation: 2023 paid developers ~$740M total. Top games (\"Adopt Me!\", \"Brookhaven\") generate $10M+ annually. Multiple teen developers have crossed $1M lifetime earnings. The platform genuinely shares wealth with its supply side.",
        hard:
          "Roblox developer ecosystem: ~$740M paid to creators in 2023, ~4M devs registered, top 1,000 games concentrate ~80% of revenue. Power-law distribution typical of UGC platforms. Top creators (often teens) build sustainable businesses on the platform.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'roblox',
        emoji: '🎮',
        title: {
          easy: 'Study 3 real Roblox games + design YOUR own!',
          medium: 'Audit 3 popular Roblox games + design your own first concept',
          hard: 'Conduct a 3-game competitive teardown + initial game concept',
        },
        pitch: {
          easy:
            "Open Roblox with a grown-up. Pick 3 popular games. For each: who made it? How many people are playing right now? Then sketch your OWN game idea.",
          medium:
            "Run a real audit. Pick 3 popular Roblox games — for each: developer, current player count, what costs Robux, age of game. Then sketch your own original concept for a 4th.",
          hard:
            "Audit: 3 selected titles. Capture developer, concurrent users, monetization model, content cadence, developer age estimate. Synthesize patterns into one concept proposal.",
        },
        steps: [
          {
            emoji: '👨‍👩‍👧',
            text: {
              easy: 'Open Roblox WITH a grown-up. Look at the most popular games.',
              medium: 'Browse Roblox with a parent. Note the top 10 games by current concurrent users.',
              hard: 'With parental supervision, survey top-charts. Identify 3 titles for deeper study.',
            },
          },
          {
            emoji: '🔍',
            text: {
              easy: 'Pick 3 games. For each: who made it? How many people are playing right now?',
              medium: 'Pick 3 games of varying types. Record: developer name, current concurrent users, age of game, top selling Robux item.',
              hard: 'Document for each: developer, concurrent players, launch date, monetization SKUs, top 3 features.',
            },
          },
          {
            emoji: '💰',
            text: {
              easy: 'Find ONE thing in each game that COSTS Robux. What is it? Why would kids buy it?',
              medium: 'Identify primary Robux monetization for each: skins, game passes, currency, premium areas. Why do kids pay?',
              hard: 'Catalog monetization model: F2P with IAP? Game passes? Cosmetics? Speed-ups? What\'s the dominant SKU type?',
            },
          },
          {
            emoji: '✏️',
            text: {
              easy: 'Now sketch YOUR own game idea. Just 1 page. What do you DO in it?',
              medium: 'Sketch one original game concept: theme, core loop, target Robux item, why it\'d be fun.',
              hard: 'Concept: theme, core loop (3-sentence pitch), monetization SKU, competitive differentiator vs. existing top games.',
            },
          },
          {
            emoji: '👀',
            text: {
              easy: 'Show your idea to 3 family members. What do they think?',
              medium: 'Get feedback from 3 testers. Note reactions, suggestions, questions.',
              hard: 'Conduct 3 feedback sessions on the concept. Note suggestions and disqualifying critiques.',
            },
          },
        ],
        reflection: [
          {
            key: 'games',
            prompt: {
              easy: 'Which 3 games did you study?',
              medium: 'Your 3 audited games + concurrent player counts',
              hard: 'Audited titles + key metrics',
            },
            type: 'text',
            placeholder: 'Adopt Me! (150K), Brookhaven (200K), Blox Fruits (300K)',
          },
          {
            key: 'pattern',
            prompt: {
              easy: 'What was the same about all 3? Anything?',
              medium: 'Common pattern across the 3 — what wins on Roblox?',
              hard: 'Cross-title pattern identification (mechanics, monetization, content cadence)',
            },
            type: 'longtext',
            placeholder: 'They all had…',
          },
          {
            key: 'mygame',
            prompt: {
              easy: 'Your own game idea — what is it?',
              medium: 'Your original game concept (one paragraph)',
              hard: 'Concept pitch + differentiator',
            },
            type: 'longtext',
            placeholder: 'A game where…',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What surprised you about how Roblox works?',
              medium: 'Biggest insight from the audit',
              hard: 'Largest insight delta from observed vs. expected platform dynamics',
            },
            type: 'longtext',
            placeholder: 'I didn\'t realize…',
          },
        ],
        parentNote: {
          easy: "Sit with the kid for the Roblox browsing. Use the parental controls (Account Restrictions) to filter age-appropriate games. Focus on the BUSINESS observation, not extended play.",
          medium:
            "Use Roblox\'s parental controls (Account Restrictions, Content Maturity) to bound exposure. The lesson is observational — limit play to 30-45 min total. Have them describe what they observe vs. play extensively.",
          hard:
            "Roblox account settings: enable Account Restrictions + age-appropriate content filter. Encourage observational rather than participatory engagement during the audit phase. Discussion-time should exceed play-time.",
        },
        printables: {
          trackers: [
            {
              title: '3-Game Audit Sheet',
              note: 'One row per game. Note what kids pay for — that\'s the business model.',
              columns: ['Game Name', 'Developer', 'Players Right Now', 'What Costs Robux', 'Why I\'d Pay'],
              rows: 3,
            },
          ],
          worksheets: [
            {
              title: 'My Original Roblox Concept',
              blocks: [
                {
                  label: '🎮 Game name',
                  hint: 'Something memorable + short.',
                  lines: 1,
                },
                {
                  label: '📝 One-sentence pitch',
                  hint: 'What do you DO in this game? In 1 sentence.',
                  lines: 2,
                },
                {
                  label: '🎯 Who would PLAY this?',
                  hint: 'Age range, interests, why\'d they pick yours.',
                  lines: 3,
                },
                {
                  label: '💰 What would cost Robux?',
                  hint: 'Skins? Pets? Powers? Be specific.',
                  lines: 3,
                },
                {
                  label: '✏️ Sketch the game',
                  hint: 'Draw what the screen looks like. Stick figures fine.',
                  lines: 8,
                },
                {
                  label: '🌟 What makes YOUR game different from the top 3?',
                  hint: 'Don\'t copy. Differentiate.',
                  lines: 4,
                },
                {
                  label: '👥 Family feedback summary',
                  hint: 'What did your 3 testers say?',
                  lines: 4,
                },
              ],
            },
          ],
          checklists: [
            {
              title: 'Safe Roblox Audit Checklist',
              items: [
                'A grown-up sitting with me',
                'Roblox account with parental controls turned ON',
                'Time limit set (30-45 min max for the audit)',
                'Printed audit sheet + pen',
                'I\'ll observe games — not get sucked into playing for hours',
                'I\'ll note what costs Robux — but NOT spend any',
                'When done: close Roblox, fill out my concept worksheet',
              ],
              note: 'Tip: do this during the day, with a 30-min timer. The point is to STUDY the games, not play them. Take notes WHILE you observe.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
