/**
 * Garage Sale — pricing, marketing, and the joy of selling stuff you
 * don't use anymore.
 *
 * The big lesson: an object's value is what someone will pay — not what
 * you paid for it. Garage sales are kid-runnable, cash-positive, and
 * teach pricing psychology better than any textbook.
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'garage-sale',
  themeKey: 'garage-sale',
  emoji: '🏷️',
  title: 'Garage Sale',
  subtitle: {
    easy: "Old toys + clever pricing = real money!",
    medium: 'Turn stuff you don\'t use into cash — and learn pricing along the way.',
    hard: "Price discovery in a low-friction physical marketplace: garage sales as a microcosm of market clearing.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Your room has TREASURE in it! Toys you don't play with, clothes that don't fit, books you've read. Other kids would LOVE them — and pay for them!",
        medium:
          "Stuff you've outgrown is gold to someone else. A garage sale turns clutter into cash AND teaches you the most important skill in business: pricing.",
        hard:
          "Garage sales are the cleanest example of price discovery: zero overhead, instant feedback loop, real customers. Better than any textbook.",
      },
    },

    // ─── Decision: the neighbor's offer ────────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 A Real Garage-Sale Moment',
      scenario: {
        easy:
          "It's Saturday morning. Your old bike (that you LOVED two years ago but hasn't been ridden in 6 months) is for sale. You wrote '$20' on a sticker. A neighbor walks up and offers $5.",
        medium:
          "Saturday morning, hour 1 of your sale. The old bike you priced at $20 (you LOVED it, but haven't ridden it in 6 months) is sitting there. A neighbor offers $5 cash — take it or leave it.",
        hard:
          "First customer, premium item priced at $20 (your reservation price was vague — emotional anchor). Lowball offer at $5 (75% discount). The clock matters: 5 hours of sale window remaining.",
      },
      question: {
        easy: "What do you do?",
        medium: 'How do you handle the offer?',
        hard: 'Choose your response:',
      },
      choices: [
        {
          label: {
            easy: "Say NO — I want $20 because that's what it's worth.",
            medium: "Refuse — hold at $20. The bike is worth it.",
            hard: "Reject — anchor at $20, defer to next bidder",
          },
          feedback: {
            easy:
              "Hmm — but what if NOBODY else buys it? You'll end the day with $0 AND still have a bike to store!",
            medium:
              "Risky. What if no other buyer comes? You’ll be back inside with a bike taking up space. A garage sale isn’t Sotheby’s — there’s no waiting list.",
            hard:
              "Failure to clear inventory. Garage-sale demand is thin and Poisson-distributed. Reservation pricing as if there's a queue is a costly emotional anchor.",
          },
        },
        {
          label: {
            easy: "Take the $5! Some money is better than no money.",
            medium: "Take the $5 — clear the inventory.",
            hard: "Accept — clear the inventory at any positive bid",
          },
          feedback: {
            easy:
              "Money in hand! But… you might have left $10 or $15 on the table. The neighbor went STRAIGHT to $5 — maybe they'd have paid more if you'd said 'no'?",
            medium:
              "Some cash is better than none. BUT — they jumped to $5 immediately, which means they were probably willing to go higher. Counter-offers exist for a reason.",
            hard:
              "Avoids over-anchoring but underprices. Buyers who lead with a number have a max above their opener; not negotiating leaves the surplus on the table.",
          },
        },
        {
          label: {
            easy: "Counter! Say '$12 — and you can take it now.'",
            medium: "Counter — '$12, take it home today.' Meet in the middle.",
            hard: "Counter — split-the-difference at $12 with urgency framing",
          },
          feedback: {
            easy:
              "Smart! You're being flexible AND firm. Most people pay something close to the middle — and you keep MORE money!",
            medium:
              "This is how real negotiators work. You signal flexibility (not stubborn) without giving away too much. The 'take it today' adds urgency — they came over for a reason.",
            hard:
              "Optimal mid-game tactic. Anchors moderate, signals willingness to deal, and 'today' creates artificial urgency that reduces walk-away probability.",
          },
          isPreferred: true,
        },
      ],
      realWorldReveal: {
        easy:
          "The MIDDLE move wins most garage-sale moments. Real sellers on eBay and Facebook Marketplace counter-offer all day long — meet in the middle = both people happy!",
        medium:
          "Counter-offering is the #1 negotiation tool used everywhere — eBay, real estate, car dealerships, even when YouTubers sign sponsorship deals. 'Meet in the middle' usually means BOTH sides walk away feeling they won.",
        hard:
          "Counter-offering with split-the-difference is the canonical bargaining solution (Nash, 1950). It maximizes joint surplus and is a robust default when each party's true reservation is unknown.",
      },
    },

    // ─── Think-deeper: what is something WORTH? ────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 What Makes Something WORTH Something?',
      intro: {
        easy: "Quick brain workout. Think before you tap.",
        medium: "Strip pricing back to first principles.",
        hard: "First-principles decomposition of value.",
      },
      layers: [
        {
          question: {
            easy: "If I paid $50 for a toy, how much is it WORTH now?",
            medium: "If you paid $50 for a toy a year ago, what's it worth now?",
            hard: "Sunk cost: original purchase price = $50. Current value?",
          },
          reveal: {
            easy:
              "Worth = what someone will PAY today. Not what you paid! A $50 toy might sell for $5 now — and that's fine.",
            medium:
              "Whatever someone is willing to pay today. Your $50 was YESTERDAY. Today's value lives entirely in the buyer's head. Forget what you paid.",
            hard:
              "Sunk-cost fallacy. Historical cost has zero bearing on current fair value. Value = max(WTP) across the current buyer pool minus search and transaction friction.",
          },
        },
        {
          question: {
            easy: "Why would ANYONE pay for my used stuff?",
            medium: "Why does anyone buy USED instead of new?",
            hard: "What's the buyer's reason to enter the secondary market?",
          },
          reveal: {
            easy:
              "Because (a) it's cheaper, (b) sometimes you can find COOL old stuff, and (c) it's like treasure hunting — fun!",
            medium:
              "Three reasons: it's cheaper (save 80%), they find unique stuff (vintage, discontinued, weird), and the hunt itself is FUN (treasure-hunt vibe). Garage sales sell the THRILL, not just the items.",
            hard:
              "Three buyer motivations: (1) price arbitrage, (2) scarcity/uniqueness, (3) hedonic 'thrill of the hunt.' Used markets are partly utilitarian, partly experiential.",
          },
        },
        {
          question: {
            easy: "So how do I pick a PRICE for my old toy?",
            medium: "How should you actually price an item?",
            hard: "What's the pricing heuristic for low-velocity secondary goods?",
          },
          reveal: {
            easy:
              "Easy formula: price = (what it costs new) × (how new it looks) × (how popular it is). And honestly: it has to MOVE today, or it stays in your room!",
            medium:
              "Three factors: (1) replacement cost new, (2) condition (used 20-50%), (3) demand. And the constraint: it has to actually SELL — better $5 in pocket than $20 you never get.",
            hard:
              "Pricing model: P ≈ replacement_cost × condition_factor × demand_multiplier × (1 - urgency_discount). For 1-day-window clearance, set ~20-50% of replacement cost.",
          },
        },
      ],
    },

    // ─── Concept cards: 4 pillars of a garage sale ─────────────────────
    {
      kind: 'concept-cards',
      heading: 'The 4 Pillars of a Great Sale',
      cards: [
        {
          emoji: '🔍',
          title: '1. Find the Gold',
          desc: {
            easy: 'Walk around your room! What haven\'t you used in 6 months? Toys, books, clothes that don\'t fit. ANY of those = potential gold.',
            medium:
              'Inventory hunt: anything you haven\'t used in 6+ months is a candidate. Grouped by category (toys / books / clothes / kitchen) sells faster than a random pile.',
            hard:
              "Inventory selection: target items with high WTP density and low storage value. Sort and bundle by category — bundle pricing increases throughput.",
          },
          color: '#FFFDE8',
        },
        {
          emoji: '💰',
          title: '2. Price It Right',
          desc: {
            easy: 'Not too HIGH (no one buys) and not too LOW (you lose money). Try ~20% of what it cost new. Adjust as the day goes.',
            medium:
              'Start at ~20-30% of replacement cost. Watch what moves and what doesn\'t. After lunch, mark down everything left by 50%. Better cleared than carried.',
            hard:
              "Dynamic pricing: open at 20-30% of replacement cost (tests upper bound). Mid-sale markdown to clear stale inventory (50% off after 2 hours). End-of-sale: 'fill a bag for $5' to dump residual.",
          },
          color: '#FFE5EC',
        },
        {
          emoji: '📣',
          title: '3. Show It Off',
          desc: {
            easy: 'BIG SIGNS at the corner so people know! Put your best stuff up front. Group the toys together. Make it look like a real STORE.',
            medium:
              'Visibility wins: BIG signs at the corner of your street. Display tables, not bins. Best stuff at customer eye level. Group like-with-like. A messy pile screams "junk."',
            hard:
              "Merchandising: signage at all approach routes, eye-level placement of highest-margin items, categorical bundling, and aspirational vs. clearance staging. Marginal effort yields disproportionate conversion.",
          },
          color: '#E0F2FE',
        },
        {
          emoji: '🤝',
          title: '4. Smile and Deal',
          desc: {
            easy: 'Be NICE! Smile at everyone. If someone offers less, don\'t get mad — make a deal. Friendly = more sales!',
            medium:
              "Customer service is a multiplier. Greet, make eye contact, be willing to negotiate, throw in a freebie. Friendly sellers move 30%+ more inventory.",
            hard:
              "Service quality is the cheapest demand-side intervention. Eye contact, name use, bundle suggestions, and willingness to counter-offer all materially raise average ticket size and conversion.",
          },
          color: '#D7F0E4',
        },
      ],
    },

    // ─── Calc-challenge ────────────────────────────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Did Your Sale Actually Make Money?',
      setup: {
        easy: "You sold 12 things at your garage sale for a total of $54. You spent $3 making signs and $1 on lemons for free lemonade. What's your PROFIT?",
        medium:
          "Real numbers: 12 items sold, total revenue = $54. Costs: $3 on signs, $1 on lemons (you gave free lemonade to keep people around). What's profit?",
        hard:
          "12 units sold, $54 gross. Variable cost = $4 (signage $3 + complimentary refreshment $1). Compute profit.",
      },
      problem: {
        givens: [
          { label: 'items sold', value: 12 },
          { label: 'total revenue', value: 54, suffix: '$' },
          { label: 'total cost', value: 4, suffix: '$' },
        ],
        answerLabel: 'Profit',
        answer: 50,
        suffix: '$',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          "Profit = Revenue ($54) − Cost ($4) = $50. From stuff you weren't even using! And the lemonade made people stay longer = more sales!",
        medium:
          "$54 − $4 = $50 profit. Almost 93% margin on items you weren't using. The $1 in lemonade is worth more than $1 in extra revenue — it's a customer-retention investment.",
        hard:
          "π = $50, GM% = 92.6%. The $1 lemonade cost is best understood as marketing OpEx — it extends average dwell time and raises basket size. ROI of customer retention spend at a garage sale is usually 5-10x.",
      },
    },

    // ─── Brainstorm: low-cost ways to attract more buyers ──────────────
    {
      kind: 'brainstorm',
      heading: '✨ Get More Buyers (For Free)',
      prompt: {
        easy: "Write 3 things you can do to bring MORE people to your sale — without spending any money!",
        medium:
          'List 3+ ways to attract more buyers to your garage sale using $0. Be creative — what catches attention?',
        hard:
          "Enumerate 3-5 zero-cost levers for traffic + conversion at a garage sale.",
      },
      minItems: 3,
      placeholder: 'e.g. a huge bright sign at the corner...',
      hints: [
        {
          easy: 'BIG signs at the corner of your street pointing to your house.',
          medium: 'Multiple signs at every intersection within 4 blocks. Big arrows + the words "GARAGE SALE" + your house number.',
          hard: 'Geo-distributed signage along approach routes — every approach pathway needs an entry signal.',
        },
        {
          easy: "Post on the neighborhood group online (with a parent's help)!",
          medium: "Post on Nextdoor / neighborhood Facebook group / local kid groups (with a parent).",
          hard: "Free digital channels: Nextdoor, Facebook Marketplace 'free events,' local school newsletters, neighborhood WhatsApp threads.",
        },
        {
          easy: 'Set up early! People LOVE to be first and get the best stuff.',
          medium: 'Open EARLY (7-8am). Serious garage-sale hunters drive routes at dawn. Early = best ticket sizes.',
          hard: 'Front-load opening hour. The early-bird buyer segment has the highest WTP and lowest negotiation friction.',
        },
        {
          easy: "Pick a SATURDAY when other people in your neighborhood are also having sales — buyers go to many on one day!",
          medium: "Coordinate with neighbors or join a community garage sale day. Buyers literally drive routes — being on the route = free traffic.",
          hard: "Cluster with neighborhood-wide sales days. Buyer traffic at multi-stop events compounds via route optimization.",
        },
        {
          easy: 'Wear a fun outfit or play music — it makes people stop and look!',
          medium: 'Add personality: costume, music, fun vibe. Makes people slow down. Slow-down = browse = buy.',
          hard: 'Ambient differentiation: music + presence at the curb materially increases passing-vehicle stop probability.',
        },
        {
          easy: "Give a FREE little surprise with every sale — a sticker or candy!",
          medium: 'Lagniappe (a tiny free extra) with each purchase. People LOVE it and tell their friends — word of mouth in real time.',
          hard: 'Surprise-and-delight unit: $0.10 cost creates social-proof effect amplifying remaining-day conversion among observers.',
        },
      ],
      closer: {
        easy: "You don't need to do ALL of these — pick 2 and do them really well!",
        medium: "Pick your two best ideas and execute. Mediocre across many beats focused on two.",
        hard: "Concentration > diffusion. Pick the two highest-leverage interventions and execute crisply.",
      },
    },

    // ─── Connect: same idea in bigger businesses ────────────────────────
    {
      kind: 'connect',
      heading: 'Same Idea, Bigger Stage',
      concept: {
        easy: "Selling used stuff isn't just a garage sale! These are HUGE businesses doing the same thing:",
        medium:
          "Garage sales are the OG marketplace. The exact same dynamics scale all the way up:",
        hard:
          "Secondary-market dynamics are scale-invariant. Same pricing logic from your driveway to multi-billion-dollar platforms.",
      },
      examples: [
        {
          emoji: '📱',
          who: 'Facebook Marketplace',
          story: {
            easy: 'Like a garage sale but on your phone, with the whole town! People list their old stuff and others come buy.',
            medium:
              'Facebook Marketplace = digital garage sale at neighborhood scale. ~1 billion users buying and selling used stuff. Same pricing instincts you just learned.',
            hard:
              "Marketplace network effect at neighborhood density. 1B+ MAU, gross transaction value comparable to mid-sized retailers.",
          },
        },
        {
          emoji: '👜',
          who: 'eBay',
          story: {
            easy: 'A global garage sale where people use AUCTIONS — the highest bidder wins! Started in 1995 with one used laser pointer.',
            medium:
              "eBay started in 1995 when Pierre Omidyar listed a broken laser pointer just to test if anyone would buy used stuff online. Now: $10B/year company built on secondary-market logic.",
            hard:
              "eBay's founding insight: the secondary market has scale at all price points if discovery + trust are solved. GMV ~$73B annually; market cap ~$20B.",
          },
        },
        {
          emoji: '🏛️',
          who: "Sotheby's auction house",
          story: {
            easy: "It's a garage sale for VERY old, VERY fancy stuff. A painting sold there for $450 MILLION in 2017!",
            medium:
              "Sotheby's is a garage sale for art and antiques. Founded in 1744 (yes — 281 years ago). Same logic: used stuff + bidders + a price the buyer is willing to pay.",
            hard:
              "Sotheby's is a high-end secondary market with strict provenance verification + scarcity-pricing dynamics. The market mechanism is identical — quality of price discovery scales with capital at stake.",
          },
        },
        {
          emoji: '👕',
          who: 'Thrift stores',
          story: {
            easy: "Stores that ONLY sell used stuff. People donate, the store sells it cheap, the money goes to help people!",
            medium:
              "Goodwill, Salvation Army, etc. run on donated goods. Together they generate $5B+ a year — and most of it funds job-training programs.",
            hard:
              "Thrift = vertically integrated secondary retail with donated inventory. ~$5B/yr in revenue across major US chains. Same pricing instincts you used at the curb.",
          },
        },
      ],
      kicker: {
        easy: "See? Your garage sale is just the SMALL version of huge businesses!",
        medium:
          "Same mechanics, different magnitudes. Once you grasp it on your driveway, it generalizes.",
        hard:
          "Scale-invariant market dynamics. Master the small game; the large game is the same with more zeros.",
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "You're a pricing pro now! You know how to find treasure, set prices, and make deals.",
        medium:
          "You’ve covered the four pillars (find / price / show / deal), the math, and the bigger picture. Time to run a real one.",
        hard:
          "You now have the mental model for secondary-market pricing, from your driveway to eBay. Apply it.",
      },
      bonusTip: {
        easy: 'In 1995, a kid named Pierre Omidyar sold a BROKEN laser pointer online to see what would happen. That sale grew into eBay — now worth $20 BILLION!',
        medium:
          "Pierre Omidyar's first eBay listing was a broken laser pointer. He thought it was a joke. It sold for $14. He emailed the buyer to confirm: 'You know it’s broken, right?' Reply: 'I collect broken laser pointers.' That insight — niche buyers exist for ANYTHING — became eBay.",
        hard:
          "eBay's founding parable underlines two truths: (1) the secondary market has buyers at every price point if discovery is solved, and (2) personal taste forecasts are systematically wrong — let the market price discover the truth.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'garage-sale',
        emoji: '🏷️',
        title: {
          easy: 'Run a REAL garage sale!',
          medium: 'Run a real garage sale this weekend',
          hard: 'Operate a one-day secondary-market clearance',
        },
        pitch: {
          easy:
            "Pick 10 things you don't use anymore, set up a table outside, and turn them into REAL money!",
          medium:
            'Find 10+ items you don’t use, price them with the framework you learned, set up a sale, and track every transaction.',
          hard:
            "Run a one-day clearance: 10+ SKUs, dynamic pricing, captured P&L. Document buyer behavior.",
        },
        steps: [
          {
            emoji: '🔍',
            text: {
              easy: "Find 10 things you don't use anymore (with a grown-up).",
              medium: 'Inventory hunt: 10+ items you haven\'t used in 6 months. Sort by category.',
              hard: 'Inventory selection: target 10+ items spanning 3+ categories. Document replacement cost where known.',
            },
          },
          {
            emoji: '🏷️',
            text: {
              easy: "Put a price sticker on each one — try about 1/4 of what it cost new!",
              medium: 'Price each item at ~20-30% of replacement cost. Higher-emotion items can go a bit higher.',
              hard: 'Initial pricing: 20-30% RC. Add a "best offer" tag on any high-uncertainty item.',
            },
          },
          {
            emoji: '🪧',
            text: {
              easy: "Make a BIG colorful sign and put it at the corner of your street!",
              medium: 'Signage: at least 2 big signs at nearby intersections + 1 at your house. Include your address.',
              hard: 'Geo-distributed signage with directional arrows. Post on Nextdoor + neighborhood groups (with parent).',
            },
          },
          {
            emoji: '🎉',
            text: {
              easy: 'Open early Saturday morning! Smile at everyone who walks up.',
              medium: 'Open by 8 AM. Greet every shopper. Be willing to negotiate.',
              hard: 'Open at first light. Customer service: greet, eye contact, willingness to counter.',
            },
          },
          {
            emoji: '📉',
            text: {
              easy: "After lunch, mark down everything you haven't sold!",
              medium: 'Mid-afternoon: discount 30-50% on remaining stock. End-of-day: "fill a bag for $5."',
              hard: 'Mid-day markdown to 50%; end-of-sale residual: bundle-clearance pricing to dump remaining inventory.',
            },
          },
        ],
        reflection: [
          {
            key: 'items_sold',
            prompt: { easy: 'How many things did you sell?', medium: 'Items sold', hard: 'Units sold' },
            type: 'number',
            suffix: 'items',
            placeholder: '8',
          },
          {
            key: 'total_earned',
            prompt: { easy: 'How much money did you make?', medium: 'Total revenue', hard: 'Gross revenue' },
            type: 'number',
            suffix: '$',
            placeholder: '45',
          },
          {
            key: 'best_seller',
            prompt: {
              easy: 'What was the COOLEST thing you sold?',
              medium: 'Your best seller — what was it?',
              hard: 'Highest-margin sale + why',
            },
            type: 'text',
            placeholder: 'old bike',
          },
          {
            key: 'lesson_learned',
            prompt: {
              easy: 'What surprised you?',
              medium: 'What pricing surprise did you have?',
              hard: 'Key pricing or operational learning',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: 'Help with signs, supervise the cash box, and keep an eye on which neighbors stop by.',
          medium:
            'Supervise the curb and cash. Check city/HOA rules for garage sales — most are fine, some require a free permit.',
          hard:
            'Verify local ordinances + HOA rules. Some municipalities cap sales/year. Make sure your kid has change ready ($1s + $5s).',
        },
        printables: {
          worksheets: [
            {
              title: 'Plan Your Sale',
              blocks: [
                {
                  label: '1. What 10 things will I sell?',
                  hint: 'List each item + a 1-word condition note (good/ok/worn).',
                  lines: 10,
                },
                {
                  label: '2. What did each cost NEW?',
                  hint: 'Rough estimate is fine.',
                  lines: 5,
                },
                {
                  label: '3. My starting prices (20-30% of new)',
                  lines: 10,
                  suffix: '$',
                },
                {
                  label: '4. My mid-day markdown plan',
                  hint: 'After 2 hours, drop everything by ___%',
                  lines: 1,
                },
                {
                  label: '5. End-of-day "everything left" deal',
                  hint: 'e.g. "fill a bag for $5"',
                  lines: 2,
                },
              ],
            },
            {
              title: 'After-Sale Math',
              blocks: [
                { label: '1. Total money I made (revenue)', equation: '$ _______' },
                { label: '2. What I spent (signs, lemonade, etc.)', lines: 1, suffix: '$' },
                { label: '3. Profit', equation: '$ _______  −  $ _______  =  $ _______' },
                { label: '4. Best price-getting tactic I used', lines: 3 },
                { label: '5. One thing I\'d do differently next time', lines: 4 },
              ],
            },
          ],
          trackers: [
            {
              title: 'Sales Log',
              note: 'One row per sale. Track tactics, prices, and who bought.',
              columns: ['Time', 'Item', 'Listed price', 'Sold for', 'Customer'],
              rows: 18,
            },
          ],
          signs: [
            {
              emoji: '🏷️',
              headline: 'GARAGE SALE',
              subline: 'Toys · Books · Treasures!',
              pricePlaceholder: '➜ TODAY ONLY',
              accent: '#FF65C5',
            },
          ],
          checklists: [
            {
              title: 'Sale Day Checklist',
              items: [
                'Tables or blankets to display items',
                'Price stickers + Sharpie',
                'Cash box with $20 in change ($1s and $5s)',
                'Calculator (or your phone)',
                'At least 2 big signs for the corner',
                'Sharpie for last-minute markdowns',
                'Water bottle for you',
                'Free lemonade pitcher (optional, brilliant)',
                'A friend or sibling to help',
                'Sunscreen + hat',
                'Phone for posting on neighborhood groups',
              ],
              note: 'Make a "FREE" bin near the curb with a few odds and ends — it draws people in.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
