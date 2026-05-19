/**
 * Lemonade Stand lesson — content + the hands-on mini-game.
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
      "Set a price, sell cups, and see how revenue minus cost equals profit.",
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
          "Today you'll run your own lemonade stand! You'll pick a price and see how many people buy.",
        medium:
          "Time to run a lemonade stand. You'll pick a price, decide how many cups to make, and see if you can turn a profit.",
        hard:
          'Run your own lemonade stand: price the cups, manage production cost, and learn how elasticity affects volume vs. margin.',
      },
    },

    // ─── Concept cards (the basics) ─────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Three Numbers That Matter',
      cards: [
        {
          emoji: '💰',
          title: 'Revenue',
          desc: {
            easy: 'Revenue is the money you get from selling stuff. Sell 10 cups for $2 each = $20!',
            medium:
              'Revenue = price × units sold. Higher price means more revenue per sale, but maybe fewer sales!',
            hard:
              'Revenue is gross sales — top-line, before any costs. Revenue ≠ profit. Many businesses have huge revenue but lose money.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🧾',
          title: 'Cost',
          desc: {
            easy:
              'Cost is the money you spend to make the lemonade. Lemons, sugar, cups — all cost money!',
            medium:
              "Cost is everything you pay to make your product. If each cup costs $0.50 to make, that's your cost per cup.",
            hard:
              'Variable cost scales with units made (lemons per cup). Fixed cost stays the same (stand, signs). Total cost = both combined.',
          },
          color: '#FFE5EA',
        },
        {
          emoji: '🎯',
          title: 'Profit',
          desc: {
            easy: 'Profit = Revenue − Cost. The money you keep after paying for everything!',
            medium:
              "Profit is what's left after costs. If you make $20 but spent $5 on lemons, your profit is $15.",
            hard:
              'Gross profit = revenue − COGS. Net profit subtracts all costs including overhead. Both matter for sustainability.',
          },
          color: '#FFE5EC',
        },
      ],
    },

    // ─── The game ───────────────────────────────────────────────────────
    {
      kind: 'mini-game',
      heading: '🍋 Run Your Stand!',
      subheading:
        'Set your price, decide how many cups to make, then open for business.',
      game: 'lemonade-stand',
      completesLesson: true,
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: 'You ran your own lemonade stand! That makes you an entrepreneur!',
        medium:
          'Nice job running your stand! Real businesses use these same numbers every single day.',
        hard:
          "You just simulated the core unit economics every entrepreneur thinks about. Now scale it — what if you had 100 stands?",
      },
      bonusTip: {
        easy: 'Some kids run real lemonade stands and make hundreds of dollars in one weekend!',
        medium:
          'In 2015, two kids in California turned a single lemonade stand into a $11M juice business.',
        hard:
          "Lemonade stands teach real business math: marginal cost, price elasticity, and break-even. The same principles run Apple, Tesla, and your favorite restaurant.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
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
