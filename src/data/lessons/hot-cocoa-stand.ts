/**
 * Hot Cocoa Stand — "Same idea, different SEASON."
 *
 * Winter twin of the Lemonade Stand. The big new idea: SEASONALITY and
 * DEMAND. Lemonade sells when it's HOT; hot cocoa sells when it's COLD.
 * A smart kid matches what they sell to the weather. We reuse the exact
 * same unit-economics math: cost per cup vs. price per cup = profit per
 * cup, then multiply by cups sold.
 *
 * Beat order:
 *   intro → think-deeper (when does each drink sell?) → concept-cards
 *   (seasonality + unit economics) → calc-challenge (2⭐ cost, 5⭐ price,
 *   keep 3, ×10 cold-day cups) → connect (real seasonal businesses) →
 *   quiz → outro → real-world-mission (pick the right product for today's
 *   weather and plan a tiny pretend stand).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'hot-cocoa-stand',
  themeKey: 'lemonade-stand',
  emoji: '☕',
  title: 'Hot Cocoa Stand',
  subtitle: {
    easy: "Lemonade is for hot days — but what do you sell when it's COLD? ☕",
    medium:
      'Same stand, same math — but a new superpower: matching what you sell to the weather.',
    hard:
      'Seasonality and demand: the same unit economics, applied to the right product at the right time.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Brrr! It's freezing outside. Would anyone buy cold lemonade today? Probably not! But warm, yummy hot cocoa? YES PLEASE! ☕ A smart business owner sells what people want RIGHT NOW.",
        medium:
          "You already mastered the lemonade stand. Now it's winter. Cold drinks won't sell — but a steaming cup of hot cocoa? People will line up! Today's secret: match what you sell to the SEASON.",
        hard:
          "You know the lemonade stand's unit economics cold. Now flip the season. The product changes, but the math doesn't. Today's lesson is about demand and seasonality — selling the right thing at the right time.",
      },
    },

    // ─── Think-deeper: when does each drink sell? ──────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 When Do People Want It?',
      intro: {
        easy: "Let's think about WHEN people buy drinks.",
        medium: "Let's reason through why the same product sells great one day and flops the next.",
        hard: 'First-principles look at how demand shifts with conditions.',
      },
      layers: [
        {
          question: {
            easy: 'On a freezing snowy day, would more people buy cold lemonade or warm cocoa?',
            medium: "On a cold winter day, which drink sells better — iced lemonade or hot cocoa?",
            hard: 'Under cold-weather conditions, which product has higher demand?',
          },
          reveal: {
            easy:
              "Hot cocoa, of course! When it's cold, people want something WARM to feel cozy. The weather changes what people want.",
            medium:
              "Hot cocoa wins easily. Cold weather makes people crave warmth. The PRODUCT people want flips with the weather — even though your stand is the same.",
            hard:
              "Cocoa. Demand isn't fixed — it shifts with conditions. Cold weather raises willingness-to-pay for warm drinks and crushes it for cold ones.",
          },
        },
        {
          question: {
            easy: 'And on a boiling hot summer day?',
            medium: 'Now flip it — what about a scorching summer afternoon?',
            hard: 'And under hot-weather conditions?',
          },
          reveal: {
            easy:
              "Now lemonade wins! Nobody wants hot cocoa when they're sweating. Same idea, opposite weather. ☀️",
            medium:
              "Lemonade flips back to the winner. The exact same demand idea, just pointed the other way. Hot day → cold drink. Cold day → warm drink.",
            hard:
              "Lemonade. The demand curve inverts. Selling cocoa in July would tank for the same reason lemonade tanks in January — mismatch with conditions.",
          },
        },
        {
          question: {
            easy: 'So what should a smart kid do as the seasons change?',
            medium: 'So how should a clever stand-owner use this?',
            hard: 'What strategy does seasonality suggest?',
          },
          reveal: {
            easy:
              "Switch what you sell to match the weather! Cocoa in winter, lemonade in summer. Same stand, same math — just the RIGHT drink. 🪄",
            medium:
              "Match your product to the season. Keep the stand and the money-math the same, but swap the drink. That's seasonality — and it works for big businesses too.",
            hard:
              "Match supply to seasonal demand. Reuse the same infrastructure and unit economics, swap the product. That's how seasonal businesses maximize sales year-round.",
          },
        },
      ],
    },

    // ─── Concept cards ─────────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'Same Stand, New Superpower',
      subheading: 'Match the drink to the weather — but keep the same money math.',
      cards: [
        {
          emoji: '🌦️',
          title: 'Seasonality',
          desc: {
            easy: 'Some things sell better in certain weather. Cocoa in winter, lemonade in summer. Sell what people want NOW!',
            medium:
              'Seasonality means demand changes with the time of year. The smart move is matching your product to the season — warm drinks when cold, cold drinks when warm.',
            hard:
              'Seasonality is predictable demand that rises and falls with the calendar/weather. Aligning your product mix to it is a core operating lever.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🙋',
          title: 'Demand',
          desc: {
            easy: 'Demand is how many people WANT your thing. On a cold day, LOTS of people want cocoa — high demand!',
            medium:
              'Demand is how badly people want your product right now. High demand means more cups sold and easier sales. Weather can push demand way up or way down.',
            hard:
              'Demand is the quantity customers are willing to buy at a given price. It shifts with conditions; reading it tells you what (and how much) to make.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🧾',
          title: 'Cost per Cup',
          desc: {
            easy: 'Each cup of cocoa costs a little to make — milk, cocoa powder, a cup. That spending is your cost.',
            medium:
              'Cost per cup is what you spend to make ONE cup: cocoa mix, milk, marshmallows, the cup. Same idea as the lemonade stand.',
            hard:
              'Variable cost per unit — the COGS of a single serving. Unchanged concept from lemonade; only the ingredients differ.',
          },
          color: '#FFE5EA',
        },
        {
          emoji: '🎯',
          title: 'Profit per Cup',
          desc: {
            easy: 'Price − Cost = what you KEEP. Sell for 5⭐, it cost 2⭐, you keep 3⭐ every cup!',
            medium:
              'Profit per cup = price per cup − cost per cup. Sell at 5⭐, cost 2⭐, keep 3⭐ each. Multiply by cups sold for your total.',
            hard:
              'Unit profit = price − unit cost = contribution margin. Multiply by units sold for total profit. Identical math to lemonade, new product.',
          },
          color: '#FFE5EC',
        },
      ],
    },

    // ─── Calc-challenge ────────────────────────────────────────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 Cold-Day Cocoa Math',
      setup: {
        easy: "Each cup of cocoa costs you 2⭐ to make. You sell it for 5⭐. It's a freezing day and you sell 10 cups. How many ⭐ do you KEEP in total?",
        medium:
          "Cocoa costs 2⭐ per cup to make and you sell it for 5⭐. On a cold day you sell 10 cups. What's your total profit?",
        hard:
          "Unit cost 2⭐, unit price 5⭐. Cold-weather demand lets you sell 10 units. Compute total profit (contribution margin × units).",
      },
      problem: {
        givens: [
          { label: 'price/cup', value: 5, suffix: '⭐' },
          { label: 'cost/cup', value: 2, suffix: '⭐' },
          { label: 'cups sold', value: 10 },
        ],
        answerLabel: 'Total stars kept',
        answer: 30,
        suffix: '⭐',
      },
      walkthrough: {
        easy: "First, one cup: 5⭐ − 2⭐ = 3⭐ kept. Then 10 cups: 3⭐ × 10 = 30⭐! The cold day helped you sell lots. ☕",
        medium:
          "Profit per cup = 5⭐ − 2⭐ = 3⭐. Sold 10 cups → 3⭐ × 10 = 30⭐ total. Same unit-economics math as lemonade, just a warmer drink!",
        hard:
          "Contribution margin = 5⭐ − 2⭐ = 3⭐/unit. Total = 3⭐ × 10 = 30⭐. Notice: cold-weather demand drove the volume — right product, right season.",
      },
    },

    // ─── Connect ────────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌍 Seasonal Businesses Everywhere',
      concept: {
        easy: 'Lots of real businesses switch what they sell with the seasons — just like your stand!',
        medium: 'The "match the product to the season" idea runs huge businesses, not just lemonade stands.',
        hard: 'Seasonality shapes product mix and operations across many real industries.',
      },
      examples: [
        {
          emoji: '🍦',
          who: 'The Ice Cream Truck',
          story: {
            easy: 'Ice cream trucks are BUSY in summer and quiet in winter. Some sell warm snacks when it gets cold!',
            medium:
              'Ice cream sells like crazy in summer and barely moves in winter. Smart truck owners add warm treats or hot drinks in the cold months to keep earning.',
            hard:
              'Frozen-treat vendors face steep seasonal demand. Many diversify into off-season products to smooth revenue across the year.',
          },
        },
        {
          emoji: '🎄',
          who: 'The Christmas Tree Lot',
          story: {
            easy: 'A tree lot sells Christmas trees in December. The rest of the year, the same spot might sell pumpkins or flowers!',
            medium:
              'A corner lot can sell Christmas trees in December, pumpkins in October, and plants in spring — same spot, different season, different product.',
            hard:
              'Seasonal pop-up retail reuses the same location across seasons (trees → pumpkins → garden plants), maximizing a fixed asset year-round.',
          },
        },
        {
          emoji: '☕',
          who: 'Your Favorite Café',
          story: {
            easy: 'Cafés sell hot cocoa and warm drinks in winter, then cold iced drinks all summer. Same shop, weather-perfect menu!',
            medium:
              "Big coffee shops push hot cocoa and peppermint drinks in winter, then iced and fruity drinks in summer. They redesign the menu around the weather.",
            hard:
              'Cafés rotate seasonal menus (hot/holiday SKUs in winter, cold/fruit SKUs in summer) to match demand — same stores, seasonally optimized product mix.',
          },
        },
      ],
      kicker: {
        easy: 'Same stand. Different season. Sell what people want RIGHT NOW! ☕❄️',
        medium: 'Read the weather, pick the product, keep the same money-math. That\'s seasonality.',
        hard: 'Same unit economics, seasonally tuned product mix — a lever every smart operator pulls.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Cocoa Check',
      questions: [
        {
          q: 'On a freezing cold day, which sells better?',
          options: [
            'Hot cocoa, because people want something warm',
            'Cold lemonade, because it never matters',
            'Neither — nobody buys drinks in winter',
          ],
          correct: 0,
        },
        {
          q: 'Cocoa costs 2⭐ to make and you sell it for 5⭐. How much do you KEEP per cup?',
          options: ['3⭐', '7⭐', '5⭐'],
          correct: 0,
        },
        {
          q: 'What does "seasonality" mean for your stand?',
          options: [
            'Sell what people want for the current weather',
            'Always sell the exact same thing',
            'Only open one day a year',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Pricing: 100 },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "You learned the winter secret: sell what people want RIGHT NOW! Cocoa when it's cold, lemonade when it's hot. ☕☀️",
        medium:
          "You used the SAME money-math on a brand-new product and learned to match it to the season. That's real business thinking!",
        hard:
          "You reused unit economics on a new product and layered in seasonality and demand — the way smart operators run year-round.",
      },
      bonusTip: {
        easy: "Tip: before you open, look outside! Hot day or cold day decides what to sell. 🌦️",
        medium: "Pro tip: check the weather BEFORE you pick your product. The forecast is free market research!",
        hard: "Edge: forecasting demand from conditions costs nothing and beats guessing. Read the weather, then choose the product.",
      },
    },

    // ─── Real-world mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'hot-cocoa-stand',
        emoji: '☕',
        title: {
          easy: 'Pick the Perfect Drink for Today',
          medium: 'Match a pretend stand to today\'s weather',
          hard: 'Plan a season-matched pretend stand from today\'s conditions',
        },
        pitch: {
          easy: "Look outside! Is it hot or cold today? Pick the drink that matches, then plan a tiny pretend stand for it.",
          medium:
            "Check today's weather, choose the drink that fits the season, and sketch a tiny pretend stand plan around it.",
          hard:
            "Read today's conditions, select the season-appropriate product, and draft a one-day pretend stand plan with simple unit economics.",
        },
        steps: [
          {
            emoji: '🌡️',
            text: {
              easy: 'Look out the window. Is it hot, cold, or in-between today?',
              medium: 'Check today\'s weather — hot, cold, or mild?',
              hard: 'Observe today\'s conditions: temperature and weather.',
            },
          },
          {
            emoji: '☕',
            text: {
              easy: 'Pick the drink that matches: hot cocoa if cold, lemonade if hot.',
              medium: 'Choose the product that fits the weather: cocoa for cold, lemonade for warm.',
              hard: 'Select the season-matched product based on the demand signal.',
            },
          },
          {
            emoji: '🏷️',
            text: {
              easy: 'Pick a price for one cup, and guess how much one cup costs to make.',
              medium: 'Set a pretend price per cup and estimate your cost per cup.',
              hard: 'Set a pretend unit price and estimate unit cost.',
            },
          },
          {
            emoji: '🧮',
            text: {
              easy: 'Do the math: price − cost = what you keep per cup!',
              medium: 'Compute profit per cup (price − cost) and pick how many cups you\'d hope to sell.',
              hard: 'Compute contribution margin and a target sell-through for the day.',
            },
          },
        ],
        reflection: [
          {
            key: 'weather',
            prompt: {
              easy: 'What was the weather today?',
              medium: 'What were today\'s conditions?',
              hard: 'Today\'s observed conditions',
            },
            type: 'text',
            placeholder: 'hot / cold / mild',
          },
          {
            key: 'drink',
            prompt: {
              easy: 'Which drink did you pick — and why?',
              medium: 'Which product did you choose, and how did the weather decide it?',
              hard: 'Chosen product and the demand reasoning behind it',
            },
            type: 'text',
            placeholder: 'cocoa / lemonade',
          },
          {
            key: 'profit-per-cup',
            prompt: {
              easy: 'How much would you KEEP from one cup? (price − cost)',
              medium: 'Your profit per cup (price − cost)',
              hard: 'Contribution margin per cup',
            },
            type: 'number',
            suffix: '⭐',
            placeholder: '3',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'How did the weather change what you would sell?',
              medium: 'How did seasonality change your plan?',
              hard: 'How did the demand signal shape your product choice?',
            },
            type: 'longtext',
            placeholder: 'Write a sentence or two…',
          },
        ],
        parentNote: {
          easy: "This is a pretend planning game — no real stand needed. Just talk through the weather and the drink choice together. Pretend ⭐ only.",
          medium:
            "Pretend/paper exercise only — no real selling. The goal is noticing how weather changes demand and reusing the same profit math. Check the forecast together.",
          hard:
            "Observational planning only; no real transactions. Focus on the seasonality reasoning and reusing unit economics. Look up the local forecast together as the demand signal.",
        },
        printables: {
          worksheets: [
            {
              title: 'My Season-Matched Stand Plan',
              blocks: [
                {
                  label: '1. Today\'s weather',
                  hint: 'Look outside! Hot, cold, or mild?',
                  lines: 1,
                },
                {
                  label: '2. Drink I picked',
                  hint: 'Cocoa for a cold day, lemonade for a hot day.',
                  lines: 1,
                },
                {
                  label: '3. Profit per cup',
                  hint: 'Price you\'d charge minus what one cup costs to make.',
                  equation: '_______  −  _______  =  _______ ⭐',
                },
                {
                  label: '4. Why did the weather decide it?',
                  hint: 'Think about what people want RIGHT NOW.',
                  lines: 3,
                },
              ],
            },
          ],
          signs: [
            {
              emoji: '☕',
              headline: 'HOT COCOA',
              subline: 'Warm & Cozy!',
              pricePlaceholder: '_____ ⭐ / CUP',
              accent: '#B5651D',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
