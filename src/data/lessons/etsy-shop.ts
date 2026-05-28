/**
 * Etsy Shop — handmade business + platform fees + the story-as-product premium.
 *
 * Goal: take a kid from "I'd sell my crafts but who'd buy?" → to "Etsy
 * gives you millions of customers; the platform takes a small cut; real
 * teens make real money there" → to actually crafting 5 of one item,
 * setting a price, and running a real sale.
 *
 * Beat order:
 *   intro → decision (sell jewelry: school only / ETSY / own site)
 *   → think-deeper (handmade premium, story-as-product, platform >
 *   solo for first-timers) → concept-cards (Maker/Listing/Etsy Fees/
 *   Brand) → calc-challenge (10 × $15 net 90% take-home = $135) →
 *   brainstorm (3 things to make + sell) → connect (Etsy $13B GMV,
 *   real teen makers, Shopify alternative) → outro (12-year-old
 *   slime-kit Etsy maker $2K/mo) → mission (real 5-unit batch + photo
 *   + price + sale).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'etsy-shop',
  themeKey: 'etsy',
  emoji: '🪡',
  title: 'Etsy Shop',
  subtitle: {
    easy: 'Make 5 handmade things at home. Etsy sends you millions of customers.',
    medium:
      'Handmade + platform + story = the easiest viable kid business. Etsy unit economics demystified.',
    hard:
      'Marketplace-driven handmade commerce: take-rate economics + premium pricing for craft + story-driven differentiation.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Etsy is like YouTube — but for HANDMADE STUFF. Jewelry. Stickers. Soaps. Candles. Art prints. Real people make them at home and Etsy puts them in front of MILLIONS of buyers. Etsy takes a small cut. Real teens make real money. Some make THOUSANDS a month.",
        medium:
          "Etsy: ~$13B in goods sold in 2023, ~96M active buyers, ~9M sellers. Most sellers are individual makers — many teens, many side-hustles. Take rate ~9-12% blended. Today: handmade unit economics, the story-premium, and how to launch a real micro-business.",
        hard:
          "Etsy is the canonical handmade marketplace: ~$13B GMV, ~96M active buyers, ~9M active sellers, ~9-12% blended take rate. Story-driven differentiation supports premium pricing vs. commodity goods. Among the most-accessible kid business models with real cash potential.",
      },
    },

    // ─── Decision: how to sell your bracelets ─────────────────────────
    {
      kind: 'decision',
      heading: '🧭 You Make Awesome Bracelets',
      scenario: {
        easy:
          "You make beautiful friendship bracelets. People who SEE them love them. Three different ways to sell.",
        medium:
          "Handmade product, validated quality. Three distribution strategies — local-only, marketplace, own-channel.",
        hard:
          "Greenfield handmade commerce decision. Three distribution options — local-only / marketplace / direct e-commerce. Optimize for early-stage TAM × margin × discoverability.",
      },
      question: {
        easy: 'How do you sell?',
        medium: 'Pick distribution:',
        hard: 'Optimize early-stage distribution:',
      },
      choices: [
        {
          label: {
            easy: 'Sell ONLY to friends at school for $5 each',
            medium: 'Hyper-local — sell at school + neighborhood only',
            hard: 'Local-only — capture friend network + immediate community',
          },
          feedback: {
            easy:
              "Easy. But limited. After everyone at school has one — you\'re done. Maybe 20 bracelets total. $100 max. Then the market is saturated.",
            medium:
              "TAM bounded by personal network size. Saturates quickly (~20-50 buyers). Adequate for first-batch learning; insufficient for sustained business.",
            hard:
              "Sub-optimal beyond initial learning phase. Network-bounded TAM caps revenue at network-saturation point. Adequate for unit-economics validation; insufficient for sustained growth.",
          },
        },
        {
          label: {
            easy: 'Put your bracelets on ETSY — 96 million people might see them',
            medium: 'List on Etsy — instant access to ~96M buyers, take rate ~10%',
            hard: 'Marketplace distribution via Etsy — instant TAM expansion at ~10% take rate',
          },
          feedback: {
            easy:
              "WINNER for first-timers. 96 million potential buyers. Etsy takes ~10% — but they bring the audience, the payment system, even returns. You just CRAFT.",
            medium:
              "Optimal for first-timers. ~10% take rate buys instant access to massive buyer base + payment rails + trust + returns handling + discoverability. The take rate is a fair price for the infrastructure.",
            hard:
              "Aligned with empirical optimum for new entrants. Take rate ~10% buys massive TAM expansion + integrated payment/fulfillment + trust + search infrastructure. Net contribution typically positive vs. direct alternatives.",
          },
          isPreferred: true,
        },
        {
          label: {
            easy: 'Build your OWN website — keep 100% but you have to find customers yourself',
            medium: 'Direct e-commerce — own site, 100% revenue, full CAC responsibility',
            hard: 'Direct e-commerce — full revenue capture, full GTM responsibility',
          },
          feedback: {
            easy:
              "Bigger long-term, harder now. You keep all the money — but you have to convince strangers to visit YOUR random site instead of Etsy. Hard for a first product.",
            medium:
              "100% revenue capture vs. 90% on Etsy, but customer acquisition cost is yours. For unknown brands, paid acquisition typically exceeds the take-rate save. Better after brand is established.",
            hard:
              "Higher revenue per sale but higher CAC. Net contribution depends on brand strength + acquisition channel efficiency. Better fit for established brands; sub-optimal at zero-brand starting point.",
          },
        },
      ],
      realWorldReveal: {
        easy:
          "Real story: a 12-year-old in Texas sells handmade slime kits on Etsy. She makes about $2,000 a MONTH. From a kitchen table. Real photos. Real reviews. Real Etsy customers from all over the world.",
        medium:
          "Successful kid sellers on Etsy: 12-year-old slime entrepreneur (~$2K/month), teen jewelry makers ($500-3K/month), kid sticker artists ($300-1.5K/month). Pattern: niche + good photos + consistent quality + active customer service.",
        hard:
          "Top kid/teen Etsy sellers commonly generate $500-3K/month after fees. Pattern: niche differentiation + consistent quality + active customer engagement + good photography. Etsy\'s search algorithm rewards consistency + review velocity.",
      },
    },

    // ─── Think-deeper: handmade premium ────────────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Do People PAY MORE for Handmade?',
      intro: {
        easy: "A bracelet from China costs $1. A handmade bracelet sells for $15. Same materials. Why?",
        medium: "What\'s the structural reason handmade commands a premium over machine-made?",
        hard: 'What drives the handmade-premium in modern marketplaces?',
      },
      layers: [
        {
          question: {
            easy: 'What do you actually get when you buy a HANDMADE bracelet?',
            medium: 'What\'s the bundle inside a handmade purchase?',
            hard: 'What\'s the consumption bundle of a handmade good?',
          },
          reveal: {
            easy:
              "More than a bracelet. You get a STORY — \"a real person made this just for me.\" You get a personal connection. You get something NOBODY else has the exact same one.",
            medium:
              "Product + story + identity + scarcity. Buyer purchases the artifact PLUS the narrative (\"made by a real person, for me\") PLUS the social signal of authenticity. The bundle is much richer than the physical good alone.",
            hard:
              "Consumption bundle: artifact + provenance + uniqueness + social signaling. Handmade goods carry narrative + craft identity + scarcity-by-design. Buyer WTP integrates all components.",
          },
        },
        {
          question: {
            easy: 'Why is "made by hand" so valuable in 2026?',
            medium: 'Why has handmade gained premium pricing power in modern economy?',
            hard: 'Why has handmade differentiation strengthened amid mass production?',
          },
          reveal: {
            easy:
              "Because almost EVERYTHING else is mass-produced. Machines made your phone. Machines made your shoes. So when something is handmade — it FEELS rare, special, human. Worth more.",
            medium:
              "Handmade premium is anti-mass-production positioning. As manufacturing scales globally, the relative scarcity of authentic craft rises. Premium pricing reflects increasing rarity vs. machine alternatives.",
            hard:
              "Counter-positioning to mass production. Mass-produced commodity floor falls; handmade premium ceiling rises. Net effect: widening price gap that compensates for craft labor.",
          },
        },
        {
          question: {
            easy: 'How does ETSY help your handmade story?',
            medium: 'How does the marketplace amplify handmade differentiation?',
            hard: 'What\'s Etsy\'s role in handmade story amplification?',
          },
          reveal: {
            easy:
              "Etsy lets you show YOUR FACE, tell YOUR STORY, post YOUR PROCESS photos. Every listing is a tiny personal MOVIE about you. Buyers love it. They pay more.",
            medium:
              "Etsy\'s listing format supports rich storytelling — maker bio, process photos, materials transparency, custom-order interaction. The platform amplifies the craft-story; the craft-story drives the premium.",
            hard:
              "Etsy product page structure supports rich storytelling (bio, process, materials, custom orders) — amplifies the differentiation that drives premium pricing. Platform feature set selected to align with seller premium-capture.",
          },
        },
        {
          question: {
            easy: 'What\'s the RISK of selling handmade?',
            medium: 'What\'s the constraint on handmade business?',
            hard: 'What\'s the binding constraint on handmade scaling?',
          },
          reveal: {
            easy:
              "TIME. Each thing takes HOURS to make BY HAND. You can\'t make 1,000 in a day. Handmade businesses scale slowly because YOU are the factory.",
            medium:
              "Production capacity — bounded by maker\'s available hours. Linear scaling (more units = more time). Cannot scale beyond personal throughput without hiring or batching.",
            hard:
              "Labor capacity is the binding constraint. Linear-in-labor scaling caps growth at single-maker throughput. Solutions: batching production, semi-automating non-craft steps, hiring help, premium pricing on lower volume.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Words of Handmade Business',
      subheading: 'Master these and Etsy starts making sense from the seller side.',
      cards: [
        {
          emoji: '🪡',
          title: 'Maker',
          desc: {
            easy: 'A MAKER = the person who MADE the thing. On Etsy, YOU are the maker. The face on the listing. The hand that made the bracelet. Buyers love knowing.',
            medium:
              'Maker = the individual creator. Etsy intentionally surfaces makers (bio, photos, story) because the maker-story IS the differentiation from mass production.',
            hard:
              'Maker identity is the differentiating brand asset on Etsy. Visible maker bio + face + process amplifies premium pricing vs. anonymous commodity goods.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '📸',
          title: 'Listing',
          desc: {
            easy: 'A LISTING = your product\'s page on Etsy. Photos. Title. Description. Price. A GOOD listing has bright pictures + a name buyers actually search for.',
            medium:
              'Listing = product page. Top variables: photo quality (single biggest CTR driver), title (search match), description (sells the story), price (signals quality).',
            hard:
              'Listing optimization: photo quality drives ~50%+ of CTR; SEO-matched title drives search visibility; story-rich description drives conversion; price signals quality tier.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '✂️',
          title: 'Etsy Fees',
          desc: {
            easy: 'ETSY FEES = the cut Etsy takes. About 10% TOTAL across listing fee + transaction fee + payment fee. So if you sell for $10, you keep about $9.',
            medium:
              'Etsy fees blend: $0.20 listing + 6.5% transaction + ~3% payment + variable advertising. Effective take ~9-12% for most sellers. Take rate fair vs. comparable marketplace alternatives.',
            hard:
              'Etsy take rate composition: listing $0.20, transaction 6.5%, payment processing ~3%, offsite ads 12-15% (sometimes mandatory). Effective blended ~9-12%. Comparable to eBay, lower than Amazon (~15%).',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '🌟',
          title: 'Brand',
          desc: {
            easy: 'BRAND = what people THINK when they hear your name. \"Cool stickers.\" \"Beautiful jewelry.\" \"The slime kid.\" Strong brand = repeat customers + higher prices.',
            medium:
              'Brand on Etsy = consistent style + memorable name + recognizable photography. Drives repeat buyers + word-of-mouth. The single biggest long-term lever after listing quality.',
            hard:
              'Brand equity on Etsy compounds via consistent visual identity + memorable name + repeat-buyer base + review-velocity moat. Long-term seller pricing power scales with brand strength.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: Etsy take-home ───────────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: Your Etsy Take-Home',
      setup: {
        easy: 'You sell 10 bracelets on Etsy at $15 each. Etsy keeps about 10% in fees. How much do YOU take home?',
        medium:
          "Etsy seller scenario: 10 units × $15 ASP, blended take rate ~10%. Compute seller net.",
        hard:
          "Etsy unit economics: 10 sales × $15, blended take rate 10% (listing + transaction + payment fees aggregated). Compute seller net revenue.",
      },
      problem: {
        givens: [
          { label: 'units sold', value: 10 },
          { label: 'price each', value: 15, suffix: '$' },
          { label: 'Etsy take', value: 10, suffix: '%' },
        ],
        answerLabel: 'You keep',
        answer: 135,
        suffix: '$',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          "Step 1: 10 × $15 = $150 total. Step 2: Etsy keeps 10% × $150 = $15. Step 3: You take home $150 − $15 = $135.\n\nThat\'s $135 from 10 bracelets in ONE Etsy sale. Imagine doing that every week. That\'s $540/month. From bracelets.",
        medium:
          "Gross revenue = 10 × $15 = $150. Etsy fees = 10% × $150 = $15. Seller net = $135 (90% take-home).\n\nReal seller profile: weekly cadence × 10 units × $15 × 90% = ~$540/month. Plus growth from reviews + brand. Top kid-scale Etsy sellers reach $1K-3K monthly within 6-12 months of consistent execution.",
        hard:
          "Gross $150, blended fees $15 (10%), net $135. 90% take-home rate.\n\nReal-world: top-quartile new Etsy sellers reach ~$1K/mo within 6 months with consistent listings + good photography. Compound growth driven by review velocity + search rank + repeat customers. Annual seller net for engaged kid-scale sellers: $3-15K/year typical.",
      },
    },

    // ─── Brainstorm: 3 things to make ─────────────────────────────────
    {
      kind: 'brainstorm',
      heading: '🎨 What Could YOU Make + Sell?',
      prompt: {
        easy:
          'List 3 things you could MAKE BY HAND that people might buy. Bracelets? Stickers? Art? Soaps? Candles? Slime?',
        medium:
          'Identify 3 handmade product candidates. For each: estimated cost per unit, target price, time per unit, why people would want it.',
        hard:
          'Generate 3 handmade product concepts. For each: COGS estimate, target ASP, time-per-unit, differentiation thesis.',
      },
      minItems: 3,
      placeholder: 'e.g. Friendship bracelets — $0.50 in string each, sell for $15, 30 min to make...',
      hints: [
        {
          easy: 'JEWELRY — bracelets, necklaces, earrings. Cheap materials. High markup. Easy to start.',
          medium: 'Jewelry: low COGS ($0.50-2 per piece), high ASP ($10-30), 15-30 min/piece. Strong margins + popular category.',
          hard: 'Jewelry: COGS ~$0.50-2, ASP $10-30, 15-30 min/unit. Strong margin per unit. Saturated category — differentiation via style + materials is key.',
        },
        {
          easy: 'STICKERS / ART PRINTS — design once, print MANY. Low cost. Big margin.',
          medium: 'Stickers + prints: design once, manufacture many. COGS ~$0.20-0.50, ASP $3-10. Highly scalable production.',
          hard: 'Print-on-demand stickers/prints: one-time design + cheap reproduction. COGS ~$0.20-0.50, ASP $3-10. Best scaling profile in handmade category.',
        },
        {
          easy: 'SOAP / CANDLES — affordable materials. Big visual appeal. People give as gifts.',
          medium: 'Soap + candle: COGS $1-3, ASP $8-25. Gift-suitable + visually distinctive. Strong holiday seasonality.',
          hard: 'Soap/candle: COGS $1-3, ASP $8-25. Gift category with seasonal peaks. Differentiation via scent + design + packaging.',
        },
        {
          easy: 'SLIME / FIDGET — popular with kids. Cheap to make. Sells in batches.',
          medium: 'Slime + sensory toys: COGS $0.50-1, ASP $5-15, batched production. Strong with kid demographic.',
          hard: 'Sensory/fidget category: low COGS, batched production, trend-sensitive. Strong with kid-buyer demographic.',
        },
        {
          easy: 'PINS / KEYCHAINS / MAGNETS — small + cheap to ship + popular as gifts.',
          medium: 'Small collectibles (pins, keychains, magnets): low COGS, ship cheap, gift-friendly. Steady demand.',
          hard: 'Small-format collectibles: low COGS + cheap shipping + gift-friendly. Steady demand across seasons.',
        },
        {
          easy: 'CUSTOM ART — \"draw your pet,\" \"paint your friend\" — buyers send a photo, you draw.',
          medium: 'Custom commission art: high ASP ($20-100), zero inventory, charge per commission. Direct premium pricing.',
          hard: 'Custom commission art: high ASP $20-100, zero inventory, per-commission billing. Premium category — limited by maker time.',
        },
      ],
      closer: {
        easy: 'Pick the ONE you could ACTUALLY make 5 of THIS week. Quality + consistent > pretty + slow.',
        medium:
          "Select the product you can execute consistently. Execution beats imagination at the launch stage.",
        hard:
          'First-product selection: optimize for executable consistency over conceptual ambition. Throughput at the launch phase predicts long-term success.',
      },
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Marketplaces Run the World',
      concept: {
        easy:
          'Etsy is just ONE marketplace. There are TONS — each with millions of sellers, each taking a cut.',
        medium:
          'The handmade-marketplace model has spread across categories. Same architecture; different verticals.',
        hard:
          'Marketplace business models dominate modern e-commerce. The pattern repeats across categories with consistent take-rate economics.',
      },
      examples: [
        {
          emoji: '🛍️',
          who: 'Shopify',
          story: {
            easy: 'Shopify lets ANYONE build their OWN online store in 1 hour. Over 4 MILLION people use it. They pay $39/month + a tiny fee per sale. Half the small businesses you see online run on Shopify.',
            medium:
              "Shopify: ~4M merchants, ~$80B annual revenue on the platform (~3% take). $39+/month subscription + fee per transaction. Direct competitor to Etsy for direct-to-consumer brands. Different model — sellers own the storefront, Shopify provides infrastructure.",
            hard:
              "Shopify: ~4M merchants, ~$200B annual GMV on platform, ~3% take rate net of payments. Subscription + transaction blend. Differs from Etsy (marketplace) — Shopify is infrastructure, sellers bear CAC + own brand.",
          },
        },
        {
          emoji: '👜',
          who: 'Depop',
          story: {
            easy: 'Depop is like Etsy for FASHION + thrifted clothes. Lots of teens sell on Depop. Make a profile. Take a photo. Sell. Repeat.',
            medium:
              "Depop: ~30M users, mostly Gen-Z, focused on fashion + vintage + resale. Take rate ~10%. Acquired by Etsy in 2021 for $1.6B. Subset of the handmade-marketplace model targeted at Gen-Z fashion.",
            hard:
              "Depop: ~30M users, Gen-Z-focused fashion marketplace. ~10% take rate. Etsy acquisition 2021 ($1.6B). Demographic subset of handmade-adjacent marketplace category.",
          },
        },
        {
          emoji: '🔨',
          who: 'eBay',
          story: {
            easy: 'eBay was the FIRST marketplace — started in 1995. People sold STUFF from their attics. Today eBay still does $73 BILLION/year in sales. The OG.',
            medium:
              "eBay: ~$73B annual GMV, ~$10B revenue (take rate ~13-14%). Pioneered the marketplace model in 1995. Generalist (handmade + new + used + collectibles + auction). Still one of the largest e-commerce platforms globally.",
            hard:
              "eBay: ~$73B GMV, ~13-14% take rate, ~$10B revenue. Generalist platform pre-dating Etsy + Depop. Auction-format origin; now hybrid auction + fixed-price. Demonstrates marketplace model durability across 30 years.",
          },
        },
      ],
      kicker: {
        easy: 'Etsy. Shopify. Depop. eBay. All marketplaces. All running the same trick — bring buyers + sellers together, take a cut. Pick whichever fits your stuff.',
        medium:
          "The marketplace business model is one of the most replicated patterns in e-commerce. Each successful vertical has its dominant marketplace.",
        hard:
          'Marketplace model replicates with high consistency across e-commerce verticals. Vertical-specific marketplaces consistently emerge as category-defining incumbents.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You now know the easiest path to a REAL kid business: make 5 of one thing, list on Etsy, take good photos, sell. The platform brings the customers. The story brings the premium. You just craft.",
        medium:
          "You\'ve cracked Etsy unit economics: take rate vs. TAM trade-off, handmade premium, listing-as-the-conversion-engine. Now make 5 of something real.",
        hard:
          "You now understand marketplace economics, handmade premium dynamics, and the trade-offs between marketplace + direct e-commerce. Apply to any handmade venture.",
      },
      bonusTip: {
        easy:
          "True fact: a 12-year-old in Texas sells handmade slime kits on Etsy and makes about $2,000 EVERY MONTH. From a kitchen table. With her mom helping with shipping. Real Etsy seller. Real teen money.",
        medium:
          "Real teen Etsy sellers commonly achieve $1-3K/month after fees with consistent listing cadence + niche differentiation + active customer service. Average new seller path to $1K/month: ~6-9 months with consistent execution.",
        hard:
          "Top-quartile new Etsy sellers reach $1K+ monthly net within 6-12 months of consistent listing cadence + niche differentiation. Per-seller economics highly dependent on category + photo quality + review velocity + repeat-customer base.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'etsy-shop',
        emoji: '🪡',
        title: {
          easy: 'Make 5 of ONE thing + sell them!',
          medium: 'Run a 5-unit handmade batch + list + sell cycle',
          hard: 'Execute one full handmade production + listing cycle',
        },
        pitch: {
          easy:
            "Pick ONE thing to make. Make 5 of them. Photograph them nicely. Set a price. Sell them to family + friends (or Etsy, with grown-up help). Track every sale.",
          medium:
            "Run a complete handmade business cycle: pick product, make 5 units, photograph for sale, price, list (Etsy with parent help OR family-and-friends mini-Etsy), sell + track.",
          hard:
            "Execute one production-to-sale cycle: SKU selection, batch production (n=5), product photography, listing or pitch creation, sale + revenue capture, post-cycle unit-economics review.",
        },
        steps: [
          {
            emoji: '🎯',
            text: {
              easy: 'Pick ONE thing you can make 5 of (same item, same style).',
              medium: 'Choose one SKU. Consistency across units is the lesson.',
              hard: 'SKU selection: optimize for batch consistency over per-unit creativity.',
            },
          },
          {
            emoji: '🛒',
            text: {
              easy: 'Get the supplies — most kids\' crafts cost <$10.',
              medium: 'Source supplies. Budget <$10 for first batch.',
              hard: 'Source materials at minimum cost. Document COGS per unit.',
            },
          },
          {
            emoji: '🪡',
            text: {
              easy: 'MAKE 5 of them. Keep them all the same style + quality.',
              medium: 'Produce 5 units. Maintain consistent style + quality across the batch.',
              hard: 'Batch production: 5 units, consistent style + quality. Time the production.',
            },
          },
          {
            emoji: '📸',
            text: {
              easy: 'Take BEAUTIFUL photos. Natural light. Clean background. Each one in 3 angles.',
              medium: 'Product photography: natural light + clean background + 3 angles per unit. Photos drive 50%+ of conversion.',
              hard: 'Product photography: natural light, clean background, 3+ angles. Single biggest CTR driver in marketplace listings.',
            },
          },
          {
            emoji: '💰',
            text: {
              easy: 'Pick a PRICE. Think: my cost × 5 = good starting price.',
              medium: 'Set ASP. Heuristic: cost × 4-5 for retail. Adjust by perceived value.',
              hard: 'Price setting: cost × 4-5 retail multiplier baseline. Adjust by perceived value + category benchmarks.',
            },
          },
          {
            emoji: '🛍️',
            text: {
              easy: 'SELL them. Etsy (with grown-up help) OR family + friends. Track every sale.',
              medium: 'Launch: Etsy listing (with parent) or family-and-friends mini-Etsy. Log every sale.',
              hard: 'Launch on chosen channel. Capture sale-level data: price realized, time-to-sale, buyer profile.',
            },
          },
        ],
        reflection: [
          {
            key: 'item',
            prompt: {
              easy: 'What did you make?',
              medium: 'SKU + variety made',
              hard: 'SKU + design variant',
            },
            type: 'text',
            placeholder: 'Friendship bracelets — pink and purple',
          },
          {
            key: 'cost',
            prompt: {
              easy: 'Total cost for all 5 (supplies)',
              medium: 'COGS for batch of 5',
              hard: 'Total batch COGS',
            },
            type: 'number',
            suffix: '$',
            placeholder: '5',
          },
          {
            key: 'price',
            prompt: {
              easy: 'Price PER ITEM',
              medium: 'Per-unit ASP',
              hard: 'Realized ASP per unit',
            },
            type: 'number',
            suffix: '$',
            placeholder: '15',
          },
          {
            key: 'sold',
            prompt: {
              easy: 'How many actually sold?',
              medium: 'Units sold of 5',
              hard: 'Sell-through count',
            },
            type: 'number',
            placeholder: '4',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What surprised you about making things to sell?',
              medium: 'Biggest insight from running the cycle',
              hard: 'Largest insight delta from running production + sale cycle',
            },
            type: 'longtext',
            placeholder: 'I didn\'t expect the photos to matter so much…',
          },
        ],
        parentNote: {
          easy: "If Etsy is the plan, grown-up needs to handle the account + payment setup (Etsy requires adult registration). Otherwise help with photo lighting + finding family customers.",
          medium:
            "Etsy registration requires an adult account. If using Etsy, parent handles signup, banking, and oversight. Family-and-friends launch is the simpler first cycle for younger kids.",
          hard:
            "Etsy seller accounts require adult registration. Parent operationally responsible for account, banking, and tax considerations. Kid handles design, production, photography, customer service.",
        },
        printables: {
          trackers: [
            {
              title: 'Sales Tracker',
              note: 'One row per item sold. Note what worked.',
              columns: ['Item #', 'Buyer', 'Date Sold', 'Price Paid', 'Notes'],
              rows: 5,
            },
          ],
          worksheets: [
            {
              title: 'My Etsy-Style Plan',
              blocks: [
                {
                  label: '🪡 What I\'m making',
                  hint: 'One product. Same style across all 5.',
                  lines: 2,
                },
                {
                  label: '🛒 Materials I\'ll need',
                  lines: 4,
                },
                {
                  label: '💵 Cost per item',
                  hint: 'Total materials / 5 = cost per piece.',
                  equation: '$ _______  / 5 = $ _______ /each',
                },
                {
                  label: '🎯 Price per item',
                  hint: 'Heuristic: cost × 4-5 = retail price.',
                  equation: '$ _______',
                },
                {
                  label: '🎯 Target revenue',
                  hint: '5 × your price = ?',
                  equation: '5 × $ _______ = $ _______',
                },
                {
                  label: '📸 My photo plan',
                  hint: 'Where (natural light?) + what background?',
                  lines: 3,
                },
                {
                  label: '📝 Listing title (3-5 words)',
                  hint: 'Memorable + searchable.',
                  lines: 1,
                },
                {
                  label: '📖 My maker story (1-2 sentences)',
                  hint: 'Who I am + why I made these.',
                  lines: 3,
                },
                {
                  label: '🛍️ Where I\'ll sell',
                  hint: 'Etsy (with parent)? Family chat? In-person sale?',
                  lines: 2,
                },
              ],
            },
          ],
          signs: [
            {
              emoji: '🪡',
              headline: 'HANDMADE BY ME',
              subline: 'Each one unique. Made with care.',
              pricePlaceholder: '$___ each',
              accent: '#FF6B6B',
            },
          ],
          checklists: [
            {
              title: 'Maker Launch Checklist',
              items: [
                'Product picked',
                'Materials gathered (within $10 budget)',
                '5 units made — consistent style + quality',
                'Photo setup ready — natural light + clean background',
                '3+ photos per item (front, angle, detail)',
                'Price decided + written down',
                'Listing title + 2-sentence maker story drafted',
                'Sales channel chosen (Etsy with parent OR family launch)',
                'Tracker printed and ready',
                'Adult helping with sales platform if using Etsy',
              ],
              note: 'Tip: take ALL the photos in ONE photo session — consistency makes your listings look professional.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
