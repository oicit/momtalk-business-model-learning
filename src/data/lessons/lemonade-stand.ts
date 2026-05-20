/**
 * Lemonade Stand — first-principles unit economics for kids.
 *
 * Goal: walk a kid from "what is anyone selling, really?" → through
 * the three numbers that matter (revenue / cost / profit) → through
 * real-world math practice → into running a real stand.
 *
 * Beat order is intentional:
 *   intro → decision (price strategy) → think-deeper (what is value?)
 *   → concept cards (the 3 numbers) → calc-challenge → mini-game
 *   → brainstorm (your edge) → connect (same math in big businesses)
 *   → outro → real-world mission
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'lemonade-stand',
  themeKey: 'lemonade-stand',
  emoji: '🍋',
  title: 'Lemonade Stand',
  subtitle: {
    easy: "Let's run a lemonade stand and learn how money works!",
    medium:
      'Set a price, sell cups, and learn the three numbers every business runs on.',
    hard:
      'Explore price elasticity, unit economics, and break-even by running a simulated stand.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Today you'll run your own lemonade stand! But first... let's think like a real business owner.",
        medium:
          "Time to run a lemonade stand. But before you set up — let's think hard about WHAT you're actually selling, WHO will buy it, and HOW to win.",
        hard:
          "Real entrepreneurs don't start with a product — they start with first principles. Let's break the lemonade stand business down to its parts, then build it back up smarter.",
      },
    },

    // ─── Decision: pricing strategy ────────────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 First Big Decision',
      scenario: {
        easy:
          "It's a hot Saturday. Your street already has TWO other lemonade stands. You have $5 for supplies. People are walking by.",
        medium:
          "It's a hot summer Saturday. Two other lemonade stands already opened on your block. You have $5 in supply budget and one prime spot near the park entrance.",
        hard:
          'You\'re entering a saturated micro-market: 2 incumbents on your block, identical product category, limited capital ($5 COGS), one premium location available.',
      },
      question: {
        easy: 'How should you PRICE your lemonade?',
        medium: 'What pricing strategy gives you the best shot?',
        hard: 'Choose your pricing & positioning strategy:',
      },
      choices: [
        {
          label: {
            easy: 'Match them — $1 a cup, same as the others',
            medium: 'Match the market — $1/cup, fair to everyone',
            hard: 'Price-match the comp set at $1/cup',
          },
          feedback: {
            easy:
              "Hmm. If you're the SAME as everyone, why would someone pick you? You'd need to wait longer for customers and earn less.",
            medium:
              "Risky. You're competing on... nothing? When products look identical, customers pick whoever they saw first. The incumbent wins.",
            hard:
              "This loses on default. Without differentiation, you're betting on traffic randomness and stand-discovery order. Incumbents have the advantage.",
          },
        },
        {
          label: {
            easy: 'Cheaper — $0.50 a cup, beat their price!',
            medium: 'Undercut — $0.50/cup to win on price',
            hard: 'Price war — undercut to $0.50/cup to drive volume',
          },
          feedback: {
            easy:
              "You'd sell more cups... but spend just as much on lemons! If you spend $5 and sell 20 cups at 50¢, you only break even. You worked all day for $0.",
            medium:
              "Volume is up, margin is down. With each cup costing ~$0.50 to make, you'd break even at best. Plus the other stands could just match you.",
            hard:
              "Race to the bottom. Marginal cost ~$0.50 → 0 contribution margin. Worse, this signals price-war which incumbents can match (and they have lower CAC).",
          },
        },
        {
          label: {
            easy: 'Premium — $2 with fresh mint and a fun name!',
            medium: 'Differentiate — $2/cup with a real edge (fresh mint, real lemon zest, a clever name)',
            hard: 'Premium positioning — $2/cup with differentiation (e.g. fresh garnish, premium ingredient story, signature brand)',
          },
          feedback: {
            easy:
              "Smart! Now you're DIFFERENT. Some people LOVE special drinks. Even if half as many buy, you make 4× the profit per cup!",
            medium:
              'You created a different product, not a cheaper one. Customers who care about quality + experience will pay 2× — and they tell their friends.',
            hard:
              "Differentiation > price competition. Higher unit margin means you're profitable at lower volume, and your story becomes shareable WOM marketing.",
          },
          isPreferred: true,
        },
      ],
      realWorldReveal: {
        easy:
          "Real kids who sell 'fancy' lemonade make 3× more than kids who go cheap. Chick-fil-A sells chicken for MORE than McDonald's — and they earn 4× more per restaurant! Different beats cheaper.",
        medium:
          "Real-world data: lemonade stands that go premium (with twists like 'pink lemonade with real berries') outsell basic stands roughly 3-to-1 in profit. Same lesson at scale: Apple charges 3× the cheap phones — and earns 80% of all phone industry profits.",
        hard:
          'This is the classic differentiation vs. cost-leadership choice (Porter, 1980). For a tiny, undifferentiated micro-market like a sidewalk, premium positioning has structural advantages: higher unit economics, lower volume requirements to profit, and the story compounds via WOM.',
      },
    },

    // ─── Think-deeper: what are you really selling? ────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Think Like a CEO',
      intro: {
        easy: "Now let's zoom out. WHY does anyone buy lemonade?",
        medium: "Pause. Let's strip this down to first principles.",
        hard: 'Step out of the operator seat and apply first-principles reasoning.',
      },
      layers: [
        {
          question: {
            easy: 'Why does anyone PAY for lemonade?',
            medium: 'Why does anyone PAY money for lemonade at all?',
            hard: 'What is the fundamental willingness-to-pay driver?',
          },
          reveal: {
            easy: "Because they're thirsty AND it's hot AND it looks tasty!",
            medium:
              "Because they want it (thirst + heat + tastiness) AND they have money AND they trust you (it looks safe and fresh). All three matter.",
            hard:
              "Three conditions must hold: latent demand (thirst/desire), capacity to pay, and trust. Remove any one and there's no sale.",
          },
        },
        {
          question: {
            easy: "But people could drink FREE water at home. So why pay you?",
            medium: 'But water is free. So why would anyone pay you for lemonade?',
            hard: 'Free substitute (water) exists. What gap does paid lemonade fill?',
          },
          reveal: {
            easy:
              "Because lemonade is MORE than thirst — it's flavor + a fun moment + a treat.",
            medium:
              "Lemonade isn't just hydration — it's flavor, refreshment, and a tiny moment of joy. People pay for the EXTRAS over the basic, not the basic itself.",
            hard:
              "Differentiated value over substitute. The paid version must clear the bar of: substitute + sufficient extra utility (taste, convenience, experience, status).",
          },
        },
        {
          question: {
            easy: "So what are you REALLY selling?",
            medium: 'So what is the lemonade stand REALLY selling?',
            hard: 'Reframe: what is the actual product?',
          },
          reveal: {
            easy:
              "You're selling a small bit of happiness on a hot day. The lemonade is just the wrapper!",
            medium:
              "You're selling a tiny moment of joy on a hot day. The lemonade is the wrapper — the real product is refreshment + happiness + a kid running a stand.",
            hard:
              "The product is a bundle: refreshment + experience + the social warmth of supporting a kid-run business. Lemonade is the artifact, not the value.",
          },
        },
        {
          question: {
            easy: 'So how can YOU make people feel that?',
            medium: 'So how should that change how you run your stand?',
            hard: 'How does that reframe change strategy?',
          },
          reveal: {
            easy:
              "Make it FEEL special! A fun sign, a smile, a free sticker, a cool name. Sell the experience, not just the cup.",
            medium:
              "If you're selling joy: invest in the FEELING. Funny sign. Personal greeting. Surprise garnish. Story (e.g. 'I'm saving for a bike!'). These don't cost much but multiply value.",
            hard:
              "Optimize the bundle, not the artifact. Low-marginal-cost upgrades to the experience (signage, personal touch, story) yield disproportionate willingness-to-pay lift relative to ingredient upgrades.",
          },
        },
      ],
    },

    // ─── Concept cards (the three numbers) ─────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Three Numbers Every Business Runs On',
      cards: [
        {
          emoji: '💰',
          title: 'Revenue',
          desc: {
            easy: 'Revenue is the money you GET from selling stuff. Sell 10 cups for $2 each = $20!',
            medium:
              'Revenue = price × units sold. Higher price means more revenue per sale, but maybe fewer sales. Volume × price is the tradeoff.',
            hard:
              'Revenue is top-line gross sales — before any costs. Revenue ≠ profit. Many businesses have huge revenue but lose money (WeWork, Uber for years).',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🧾',
          title: 'Cost',
          desc: {
            easy:
              'Cost is the money you SPEND to make the lemonade. Lemons, sugar, cups — all cost money!',
            medium:
              "Cost is everything you pay to make your product. If each cup costs $0.50 to make, that's your cost per cup. Add it up to get total cost.",
            hard:
              'Variable cost scales with units made (lemons per cup). Fixed cost stays the same (stand, signs). Total cost = both combined. Most businesses fail because they ignore one or the other.',
          },
          color: '#FFE5EA',
        },
        {
          emoji: '🎯',
          title: 'Profit',
          desc: {
            easy: "Profit = Revenue − Cost. The money you KEEP after paying for everything!",
            medium:
              "Profit is what's left after costs. If you make $20 but spent $5 on lemons, your profit is $15. Negative? You're losing money.",
            hard:
              'Gross profit = revenue − COGS. Net profit subtracts all costs including overhead, marketing, taxes. Gross margin % is the leverage indicator: high margin = pricing power.',
          },
          color: '#FFE5EC',
        },
      ],
    },

    // ─── Calc-challenge ────────────────────────────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: Did You Make Money?',
      setup: {
        easy: "You spend $4 on lemons. You sell 12 cups at $2 each. What's your PROFIT?",
        medium:
          "Real scenario: you spent $4 on supplies, made 15 cups, sold them all at $2 each. What's your profit?",
        hard:
          "You spent $4 in variable cost producing 15 units. Sell-through 100% at $2 unit price. Compute gross profit in dollars.",
      },
      problem: {
        givens: [
          { label: 'cups sold', value: 15 },
          { label: 'price/cup', value: 2, suffix: '$' },
          { label: 'total cost', value: 4, suffix: '$' },
        ],
        answerLabel: 'Profit',
        answer: 26,
        suffix: '$',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          'Revenue = 15 cups × $2 = $30. Cost = $4. Profit = $30 − $4 = $26. You made $26!',
        medium:
          'Revenue = 15 × $2 = $30. Subtract your $4 cost → $26 profit. Your gross margin: $26 / $30 = 87% — fantastic for a kid business!',
        hard:
          'Revenue = $30. COGS = $4. Gross profit = $26. Gross margin = 87%. Compare to industry: restaurants typically run 60-70% gross margin. Your micro-business is more efficient because of zero fixed-cost allocation.',
      },
    },

    // ─── The game ──────────────────────────────────────────────────────
    {
      kind: 'mini-game',
      heading: '🍋 Run Your Stand!',
      subheading:
        'Set your price, decide how many cups to make, then open for business.',
      game: 'lemonade-stand',
      completesLesson: true,
    },

    // ─── Brainstorm: kid's own edge ────────────────────────────────────
    {
      kind: 'brainstorm',
      heading: '✨ Your Unfair Advantage',
      prompt: {
        easy: 'List 3 ways YOUR lemonade stand could be SPECIAL — without spending more on lemons!',
        medium:
          'Brainstorm 3 ways YOUR stand could stand out — using things that cost little or no money.',
        hard:
          "List 3-5 zero/low-cost levers you'd pull to differentiate your stand. Think experience, signage, story, location, pairing, branding.",
      },
      minItems: 3,
      placeholder: 'e.g. funny sign that says...',
      hints: [
        {
          easy: 'A funny sign that makes people LAUGH.',
          medium: 'A memorable sign — something funny, weird, or surprising. Sign quality matters more than fancy ingredients.',
          hard: 'Signage as your first marketing touchpoint — it converts foot traffic to consideration. Aim for "funny enough to photograph."',
        },
        {
          easy: 'Wear a fun costume or matching outfit with your friends!',
          medium: 'Wear a costume or matching outfit. People remember and share what they see.',
          hard: 'Personal branding via wardrobe — turns the operator into part of the product experience.',
        },
        {
          easy: 'Give a free sticker or candy with every cup.',
          medium: 'Give a tiny FREE bonus (sticker, candy, fun fact card) — costs pennies but feels like a gift.',
          hard: 'Lagniappe — the "little extra" creates surprise + delight + social-media-able moments. ROI on stickers is enormous.',
        },
        {
          easy: 'Pick a SUPER busy spot — like outside a park or a soccer game.',
          medium: 'Location is everything. Outside a park entrance / by a busy corner / near a sports field will outsell a quiet street 10:1.',
          hard: 'Distribution > product (early-stage). High-traffic adjacency to thirsty foot traffic compounds every other lever.',
        },
        {
          easy: 'Tell people what you\'re SAVING UP for — they love helping kids!',
          medium: 'Share a story: "I\'m saving for ___." People pay more when they\'re supporting a cause they can see.',
          hard: 'Narrative pricing — willingness-to-pay rises measurably when transactions feel like charitable acts. See: Tom\'s, Patagonia.',
        },
        {
          easy: 'Have a "today only" deal — like "buy 2, get a free fun fact!"',
          medium: 'Create urgency: a "today only" deal, a "secret menu" upgrade, or a "1 in 10 cups is FREE!" surprise.',
          hard: 'Scarcity + variable reward → measurable conversion lift. Cap the offer to your inventory window.',
        },
      ],
      closer: {
        easy: "You don't need to do ALL of these. Just pick ONE and do it really well.",
        medium: "You don't need every lever. Real businesses win by picking 1-2 angles and going deep — not 10 mediocre ideas.",
        hard: "Focus > breadth. Pick your strongest 2 differentiators and concentrate execution there. Mediocrity across many vectors loses to excellence on one.",
      },
    },

    // ─── Connect to bigger businesses ──────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Same Math, Bigger Businesses',
      concept: {
        easy:
          'Revenue − Cost = Profit. Every business in the world uses this same math!',
        medium:
          'The same Revenue − Cost = Profit math your lemonade stand uses runs every business on Earth — from your favorite YouTuber to the biggest companies in the world.',
        hard:
          'Unit economics are universal. Revenue − Cost = Profit is the operating equation behind every business model, scaled or not.',
      },
      examples: [
        {
          emoji: '📱',
          who: 'Apple',
          story: {
            easy: 'iPhones cost about $300 to make. Apple sells them for $1000+. Profit per phone: ~$700!',
            medium:
              "Apple's iPhone costs about $300 to manufacture and sells for $1,000+. That's ~$700 gross profit per phone × hundreds of millions sold = ~$100 billion/year. Same math.",
            hard:
              'iPhone COGS ≈ $300, ASP ≈ $1,000-1,200, gross margin ~70%. Volume × margin = the largest profit pool in consumer hardware history. Identical equation to lemonade.',
          },
        },
        {
          emoji: '🎬',
          who: 'A YouTuber',
          story: {
            easy: 'A YouTuber spends time + camera money to make videos. They earn from ads. Revenue − Cost = how much they make.',
            medium:
              'A creator spends time + equipment. They earn from ads, sponsors, and merch. Revenue (all 3 streams) minus cost (time + tools) = their profit.',
            hard:
              "Creator unit economics: CPM × views = ad revenue; sponsor CPM × audience × take-rate = direct deal; merch margin × units = product. Sum minus production cost & platform fees = take-home.",
          },
        },
        {
          emoji: '🐔',
          who: 'Chick-fil-A',
          story: {
            easy: 'Each Chick-fil-A makes $8 million/year. They pay for chicken, workers, and rent. The rest is profit.',
            medium:
              'A Chick-fil-A franchise earns ~$8M/year per store. Subtract chicken, labor, rent, marketing → still leaves ~$1.4M profit per store. 4× more profitable than McDonald\'s.',
            hard:
              'CFA AUV (Avg Unit Volume) ≈ $8M, store-level EBITDA ~17-20%. Higher AUV + better margin = the most cash-generative QSR per store. Same equation, premium positioning.',
          },
        },
      ],
      kicker: {
        easy: 'Same math. Different size. You learned the secret of every business in the world!',
        medium:
          'Same equation, different magnitudes. Once you understand unit economics, every business looks like a lemonade stand.',
        hard:
          'Master this equation at micro-scale and the rest is just spreadsheets. Buffett famously said he learned investing by reading his grandfather\'s grocery store ledger.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "You ran a stand, did math like a real CEO, and brainstormed your own ideas — you're a Business Brain now!",
        medium:
          "Look at you — first principles thinking, real math, and your own ideas. That's how real entrepreneurs work.",
        hard:
          "You've covered the core operating equation, applied first-principles reasoning, computed margin in your head, and generated your own differentiation hypotheses. That's not lemonade — that's strategy.",
      },
      bonusTip: {
        easy: 'Some kids run real lemonade stands and make hundreds of dollars in one weekend!',
        medium:
          'In 2015, two kids in California turned a single lemonade stand into a $11M juice business called Me & The Bees Lemonade.',
        hard:
          "Me & The Bees Lemonade started in 2009 with 10-year-old Mikaila Ulmer's grandmother's flaxseed recipe and a Shark Tank pitch. Now in Whole Foods nationwide. Same equation, larger surface area.",
      },
    },

    // ─── Real-World Mission (unchanged content) ────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'lemonade-stand',
        emoji: '🍋',
        title: {
          easy: 'Run a REAL lemonade stand!',
          medium: 'Run a real lemonade stand this weekend',
          hard: 'Operate a real lemonade stand and reflect on the unit economics',
        },
        pitch: {
          easy:
            "Now it's your turn — for real. Pick a sunny day, set up a stand, and see how much profit you can make!",
          medium:
            'Take what you practiced and try it for real. Set a price, track your costs, and see if the math holds up.',
          hard:
            'Run a real micro-business: choose price, estimate variable cost, project demand, then compare reality to plan.',
        },
        steps: [
          {
            emoji: '🛒',
            text: {
              easy: 'Make a list of what you need (lemons, sugar, cups, ice).',
              medium: 'Plan your supplies and add up the cost.',
              hard: 'Itemize variable costs per cup and any fixed costs (sign, table).',
            },
          },
          {
            emoji: '💵',
            text: {
              easy: 'Pick a price for each cup with a grown-up.',
              medium: 'Set your price. How does it compare to your cost per cup?',
              hard: 'Set price; estimate elasticity. What price covers cost + leaves a healthy margin?',
            },
          },
          {
            emoji: '🪧',
            text: {
              easy: 'Make a colorful sign so people can see your stand!',
              medium: 'Make a sign with your price and a friendly message.',
              hard: 'Design signage and a one-line pitch — your stand is now a brand.',
            },
          },
          {
            emoji: '⏰',
            text: {
              easy: 'Pick a busy time (like a weekend afternoon) to open.',
              medium: 'Pick when foot traffic will be highest in your neighborhood.',
              hard: 'Schedule the open window when expected traffic × conversion is highest.',
            },
          },
          {
            emoji: '🧮',
            text: {
              easy: 'Count your money at the end. How many cups did you sell?',
              medium: 'Count revenue, subtract cost, see your real profit.',
              hard: 'Compute revenue, COGS, gross margin %, and revenue per hour.',
            },
          },
        ],
        reflection: [
          {
            key: 'price',
            prompt: { easy: 'How much was each cup?', medium: 'Your price per cup', hard: 'Final unit price' },
            type: 'number',
            suffix: '$',
            placeholder: '2',
          },
          {
            key: 'cups',
            prompt: { easy: 'How many cups did you sell?', medium: 'Cups sold', hard: 'Units sold' },
            type: 'number',
            suffix: 'cups',
            placeholder: '12',
          },
          {
            key: 'cost',
            prompt: { easy: 'How much did your supplies cost?', medium: 'Total cost of supplies', hard: 'Total COGS' },
            type: 'number',
            suffix: '$',
            placeholder: '5',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What surprised you?',
              medium: "What did you learn that you didn't expect?",
              hard: 'Variance from your plan — what would you change next time?',
            },
            type: 'longtext',
            placeholder: 'Write a sentence or two…',
          },
        ],
        parentNote: {
          easy: 'Help with cutting/boiling and stay nearby while the stand is open.',
          medium: 'Supervise food prep and the cash box. A neighbor sidewalk works great.',
          hard: 'Permit rules vary by city — most allow occasional kid-run stands. Supervise and double-check.',
        },
        printables: {
          trackers: [
            {
              title: 'Sales Tracker',
              note: 'One row per cup sold. Mark a tally if cups go fast!',
              columns: ['Time', 'Customer', 'Cups', 'Price', 'Total $'],
              rows: 22,
            },
          ],
          worksheets: [
            {
              title: 'Profit Worksheet',
              blocks: [
                {
                  label: '1. Revenue',
                  hint: 'Total money you got from selling cups.',
                  equation: '_______  ×  _______  =  $ _______',
                },
                {
                  label: '2. Cost',
                  hint: 'Add up everything you spent: lemons, sugar, cups, ice.',
                  lines: 1,
                  suffix: '$',
                },
                {
                  label: '3. Profit',
                  hint: 'Profit = Revenue − Cost.',
                  equation: '$ _______  −  $ _______  =  $ _______',
                },
                {
                  label: '4. Cost per cup',
                  hint: 'Cost ÷ cups made. (Did you charge enough?)',
                  equation: '$ _______  ÷  _______ cups  =  $ _______',
                },
                {
                  label: '5. What would you change next time?',
                  hint: 'Price? Location? Sign? Recipe?',
                  lines: 4,
                },
              ],
            },
          ],
          signs: [
            {
              emoji: '🍋',
              headline: 'LEMONADE',
              subline: 'Made Fresh Today!',
              pricePlaceholder: '$_____ / CUP',
              accent: '#FFCB65',
            },
          ],
          checklists: [
            {
              title: 'Supplies Checklist',
              items: [
                'Lemons (3-5)',
                'Sugar (1 cup)',
                'Pitcher or jug',
                'Cups (paper or plastic)',
                'Ice',
                'Spoon for stirring',
                'Cutting board + knife (with grown-up help)',
                'Small table or folding chair',
                'Sign (print the one in this pack!)',
                'Cash box / cup for money',
                'Few dollars in coins to make change',
                'Hand wipes or napkins',
                'Water bottle for you',
              ],
              note: 'Tip: ice melts fast! Have extra in a cooler or freezer nearby.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
