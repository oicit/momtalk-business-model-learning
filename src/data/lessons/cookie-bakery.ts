/**
 * Cookie Bakery — production economics + batch scale.
 *
 * The big idea: when you BAKE something, ingredients are the cost.
 * Making a bigger batch shares the "setup" effort across more cookies
 * (per-unit cost drops). Kids meet economies of scale through dough.
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'cookie-bakery',
  themeKey: 'cookie-bakery',
  emoji: '🍪',
  title: 'Cookie Bakery',
  subtitle: {
    easy: "Let's run a tiny bakery and learn how cookies become a business!",
    medium: 'See how a real bakery thinks about ingredients, batches, and price.',
    hard: 'Explore production economics: variable cost, batch scaling, and gross margin through baking.',
  },

  beats: [
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy: "Did you know cookies can teach you about REAL business? Let's find out!",
        medium:
          'A bakery has to think about ingredients, time, ovens, and price. Today\'s your turn to think like a baker-boss.',
        hard:
          'Production businesses live and die by unit economics. Baking cookies makes that concrete: each cookie has a cost; price covers cost plus margin.',
      },
    },

    {
      kind: 'concept-cards',
      heading: 'The Bakery Business Brain',
      cards: [
        {
          emoji: '🥚',
          title: 'Ingredients = Cost',
          desc: {
            easy: 'Flour, eggs, butter, sugar, chocolate chips — they all cost MONEY before you bake anything!',
            medium:
              "Every ingredient is a cost. To know if you're making money, you have to know what each cookie cost you to make.",
            hard:
              "Variable costs scale with units produced. For baked goods these dominate — ~60-80% of revenue is COGS.",
          },
          color: '#FFF8F0',
        },
        {
          emoji: '📏',
          title: 'Batch Size Matters',
          desc: {
            easy: 'Baking 12 cookies costs less per cookie than baking 2! You only crack eggs once.',
            medium:
              'Bigger batches share the "setup" effort. Per-cookie cost drops as the batch grows — that\'s economies of scale!',
            hard:
              "Setup costs (preheating, measuring, dishes) are fixed per batch. Larger batches dilute them across more units → lower marginal cost.",
          },
          color: '#FFE5EC',
        },
        {
          emoji: '🏷️',
          title: 'Pricing for Profit',
          desc: {
            easy: 'Your price has to cover cost AND leave you some money. That extra part is PROFIT!',
            medium:
              'Set price = cost per cookie + a profit margin. Too low: no profit. Too high: no buyers. Find the sweet spot.',
            hard:
              "Pricing decision: cost-plus baseline vs. competitive comparable. Beware racing to the bottom — gross margin compounds when you scale.",
          },
          color: '#FFE7C2',
        },
        {
          emoji: '🌟',
          title: 'Quality + Freshness',
          desc: {
            easy: 'Fresh, warm cookies sell faster. Customers pay MORE for amazing taste!',
            medium:
              'Quality and freshness are why people come back. A great-tasting cookie spreads by word of mouth — best marketing ever.',
            hard:
              "Differentiation premium: bakeries with consistent quality command 30-50% price premiums vs. commodity. Repeat customers are the LTV engine.",
          },
          color: '#D7F0E4',
        },
      ],
    },

    {
      kind: 'quiz',
      heading: '🏆 Baker Quiz',
      subheading: 'Are you ready to run your bakery?',
      xpReward: 100,
      skillScores: {
        Production: 90,
        Pricing: 85,
        Quality: 80,
        Operations: 85,
      },
      questions: [
        {
          q: "If chocolate chips cost $4 for enough to make 20 cookies, how much do chips cost per cookie?",
          options: ['$4', '20¢', '$1', '$2'],
          correct: 1, // $4 / 20 = 20¢
        },
        {
          q: 'Why is a BIGGER batch usually cheaper per cookie?',
          options: [
            'Cookies get bigger',
            "You share the setup work across more cookies",
            "Ovens charge less for big jobs",
            'Flour gets cheaper at night',
          ],
          correct: 1,
        },
        {
          q: 'What MUST your cookie price cover?',
          options: [
            'Only the price of flour',
            'The cost of ingredients + something extra for profit',
            'Nothing — it can be whatever',
            'The cost of buying a bakery',
          ],
          correct: 1,
        },
        {
          q: 'What\'s the BIGGEST reason customers come back to a bakery?',
          options: [
            'Free napkins',
            'Cookies that taste great AND are fresh',
            'A fancy door',
            'Cheap prices only',
          ],
          correct: 1,
        },
      ],
    },

    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Sweet! You just learned how a bakery makes money — and you used REAL math!",
        medium:
          'Nice baking-business brain! These same numbers (ingredient cost, batch size, pricing) run real bakeries everywhere.',
        hard:
          "You've internalized production economics: variable cost dominates, batch size dilutes setup cost, and price must cover COGS + margin to be sustainable.",
      },
      bonusTip: {
        easy: "Mrs. Fields Cookies started in 1977 with one mom baking cookies in her garage. Now it's a famous bakery all over the world!",
        medium:
          "Mrs. Fields started in 1977. Debbi Fields baked from her kitchen and gave samples on the street. From 1 shop to 600+ — quality + sampling = a business empire.",
        hard:
          "Mrs. Fields built a chain by treating each store like a quality-controlled franchise. Her insight: never sell day-old cookies — quality is the moat, even at the cost of waste.",
      },
    },

    {
      kind: 'real-world-mission',
      mission: {
        id: 'cookie-bakery',
        emoji: '🍪',
        title: {
          easy: 'Bake and Sell Cookies!',
          medium: 'Bake a batch and sell to your family',
          hard: 'Run a 1-batch bakery: budget, bake, price, sell',
        },
        pitch: {
          easy:
            'Bake REAL cookies with a grown-up, then sell them to your family or neighbors for actual money!',
          medium:
            'Plan a small batch: ingredient costs, batch size, price. Then bake, package, and sell to real people.',
          hard:
            'Operate a one-day bakery: itemize COGS, set price for target margin, produce, sell, and reconcile.',
        },
        steps: [
          {
            emoji: '📖',
            text: {
              easy: 'Pick a cookie recipe with a grown-up.',
              medium: 'Pick a recipe. Count the ingredients.',
              hard: 'Select a recipe with known yield. Document ingredients + quantities.',
            },
          },
          {
            emoji: '🛒',
            text: {
              easy: 'Look up how much each ingredient costs.',
              medium: 'Write down the cost of each ingredient.',
              hard: 'Itemize variable cost per ingredient at retail prices.',
            },
          },
          {
            emoji: '👩‍🍳',
            text: {
              easy: 'Bake the cookies (always with help)!',
              medium: 'Bake the batch with a grown-up. Don\'t over-bake!',
              hard: 'Produce one full batch. Note any waste (dropped, burnt).',
            },
          },
          {
            emoji: '🏷️',
            text: {
              easy: 'Decide how much each cookie costs.',
              medium: 'Calculate cost-per-cookie. Set a price that earns some profit.',
              hard: 'Compute unit cost. Set price at target margin (e.g. 50% gross).',
            },
          },
          {
            emoji: '🤝',
            text: {
              easy: 'Sell to family or neighbors!',
              medium: 'Sell to family / neighbors. Track who bought how many.',
              hard: 'Sell out the batch. Track sales in real time.',
            },
          },
          {
            emoji: '📊',
            text: {
              easy: 'Count your profit at the end!',
              medium: 'Compute: revenue − cost = profit. Did the math work?',
              hard: 'Reconcile: revenue, COGS, gross margin, gross margin %.',
            },
          },
        ],
        reflection: [
          {
            key: 'cookies_made',
            prompt: {
              easy: 'How many cookies did you bake?',
              medium: 'Cookies made',
              hard: 'Units produced',
            },
            type: 'number',
            suffix: 'cookies',
            placeholder: '24',
          },
          {
            key: 'ingredient_cost',
            prompt: {
              easy: 'How much did your ingredients cost?',
              medium: 'Total ingredient cost',
              hard: 'Total COGS',
            },
            type: 'number',
            suffix: '$',
            placeholder: '6',
          },
          {
            key: 'price',
            prompt: {
              easy: 'How much did each cookie cost to buy?',
              medium: 'Your price per cookie',
              hard: 'Final unit price',
            },
            type: 'number',
            suffix: '$',
            placeholder: '0.75',
          },
          {
            key: 'sold',
            prompt: {
              easy: 'How many did you sell?',
              medium: 'Cookies sold',
              hard: 'Units sold',
            },
            type: 'number',
            suffix: 'cookies',
            placeholder: '20',
          },
          {
            key: 'lesson',
            prompt: {
              easy: 'What was the BEST thing you learned?',
              medium: 'What did you learn about pricing or baking?',
              hard: 'Top operational + pricing insights',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: 'Always supervise mixing, hot ovens, and cutting. Help with food-safety basics like washing hands.',
          medium:
            'Supervise oven use and food safety (allergens, expiration dates). Stay nearby for the sale.',
          hard:
            'Allergen disclosure matters even at small scale (peanuts, gluten, eggs, dairy). Add to packaging.',
        },
        printables: {
          worksheets: [
            {
              title: 'Cookie Cost Sheet',
              blocks: [
                {
                  label: '1. My recipe',
                  hint: 'Write the recipe name and how many cookies it makes.',
                  lines: 2,
                },
                {
                  label: '2. Ingredients & costs',
                  hint: 'Flour, sugar, butter, eggs, chips… Estimate cost for what you actually use.',
                  lines: 8,
                  suffix: '$',
                },
                {
                  label: '3. Total cost',
                  equation: 'add up all ingredients  =  $ _______',
                },
                {
                  label: '4. Cost per cookie',
                  equation: '$ _______  ÷  _______ cookies  =  $ _______',
                },
                {
                  label: '5. My price per cookie',
                  hint: "Higher than cost per cookie. Pick a price you'd actually pay!",
                  lines: 1,
                  suffix: '$',
                },
                {
                  label: '6. Profit if I sell ALL of them',
                  equation: '$ _______ (revenue)  −  $ _______ (cost)  =  $ _______',
                },
              ],
            },
          ],
          trackers: [
            {
              title: 'Sales Log',
              note: 'Mark each sale as it happens.',
              columns: ['Time', 'Customer', '# cookies', '$ paid'],
              rows: 16,
            },
          ],
          signs: [
            {
              emoji: '🍪',
              headline: 'FRESH COOKIES',
              subline: 'Baked Today!',
              pricePlaceholder: '$_____ each',
              accent: '#FFCB65',
            },
          ],
          checklists: [
            {
              title: 'Baker\'s Checklist',
              items: [
                'Wash hands',
                'Apron + clean towel',
                'Read the WHOLE recipe first',
                'Measure ingredients carefully',
                'Preheat the oven',
                'Set a timer — no burnt cookies!',
                'Cool cookies fully before bagging',
                'Pretty packaging or napkins',
                'Cash box ready',
                'Sign with price up at the table',
                'Smile and offer samples!',
              ],
              note: "Allergy heads-up: list peanuts, nuts, eggs, dairy on a small card next to the cookies.",
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
