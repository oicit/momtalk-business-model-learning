/**
 * Supply & Demand — "Why does the price go up?"
 *
 * The most fundamental idea in all of economics, kid-sized: price is a tug-of-war
 * between SUPPLY (how much there is) and DEMAND (how many people want it).
 *
 *   Scarce + popular  → price goes UP   (rare Pokémon card, sold-out toy)
 *   Common + unwanted → price goes DOWN (a leaf in autumn)
 *
 * Beat order:
 *   intro → think-deeper (why does a price change?) → concept-cards (the four
 *   corners of supply × demand) → calc-challenge (umbrellas on a rainy day) →
 *   connect (where this shows up in real businesses) → quiz → outro →
 *   real-world-mission (spot one pricey rare thing + one cheap common thing).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'supply-demand',
  themeKey: 'supply',
  emoji: '⚖️',
  title: 'Supply & Demand',
  subtitle: {
    easy: 'Why is one toy cheap and another one super expensive?',
    medium: 'Price is a tug-of-war between how MUCH there is and how MANY people want it.',
    hard: 'Scarcity, desire, and the equilibrium between supply and demand that sets every price — kid-sized.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Ever wonder why some things cost a LOT and others almost nothing? It comes down to two words: SUPPLY (how much there is) and DEMAND (how many people want it). Let's crack the secret of prices! ⚖️",
        medium:
          "Why does a rare trading card cost more than a regular one? Why does lemonade fly off the table on a boiling-hot day? Today you'll learn the rule behind almost every price: supply versus demand.",
        hard:
          "Every price you've ever seen is the answer to a tug-of-war: SUPPLY (how much exists) pulling one way, DEMAND (how badly people want it) pulling the other. Master this and prices stop being mysterious.",
      },
    },

    // ─── Think-deeper: why does a price change? ─────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Do Prices Change?',
      intro: {
        easy: "Let's figure out what makes a price go up or down.",
        medium: "Let's reason through what really decides a price.",
        hard: 'First-principles look at what moves a price.',
      },
      layers: [
        {
          question: {
            easy: 'Imagine ONE super rare sticker and a HUGE pile of plain stickers. Which one will cost more?',
            medium: 'There is only ONE rare sticker, but a giant pile of plain ones. Which is worth more?',
            hard: 'One unit of a scarce good vs. an abundant pile of a common good — which commands the higher price?',
          },
          reveal: {
            easy:
              "The rare one! When there's only a little of something, it feels special and people will pay more. Few + wanted = expensive. ✨",
            medium:
              "The rare sticker. When SUPPLY is tiny but lots of kids want it, the price climbs. Scarcity plus desire pushes price up.",
            hard:
              "The scarce sticker. Low supply against high demand drives price up; abundance against low demand drives it down. Price reflects relative scarcity.",
          },
        },
        {
          question: {
            easy: 'Now everyone suddenly wants the SAME toy, but the store only has 3 left. What happens to the price?',
            medium: 'A toy gets super popular and the store has almost none left. Up or down?',
            hard: 'Demand surges sharply while available supply stays low and fixed. What happens to price?',
          },
          reveal: {
            easy:
              "Up, up, UP! Lots of kids want it and there are barely any — so the price shoots up. That's a 'sold-out' toy at holiday time. 🎁",
            medium:
              "The price jumps. Many buyers chasing few items means whoever wants it most must pay more. That's why sold-out toys get pricey.",
            hard:
              "Price rises until demand cools to match the limited supply. Excess demand at the old price forces the price upward toward balance.",
          },
        },
        {
          question: {
            easy: 'What if a store has a MOUNTAIN of a toy and almost nobody wants it?',
            medium: 'Tons of one item, very few buyers. What does the store do?',
            hard: 'Supply far exceeds demand. What pressure does that put on price?',
          },
          reveal: {
            easy:
              "They drop the price! 'On sale!' Big pile + few buyers = cheap. The store would rather sell it cheap than keep it forever. 🏷️",
            medium:
              "The price falls — hello, sale rack. When SUPPLY is huge and DEMAND is small, sellers cut prices to get people to buy.",
            hard:
              "Price drops. Surplus supply at the current price pushes sellers to discount until enough buyers appear to clear the extra stock.",
          },
        },
      ],
    },

    // ─── Concept cards: the four corners ────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Two Forces Behind Every Price',
      subheading: 'Supply is how MUCH there is. Demand is how MANY want it. Mix them four ways!',
      cards: [
        {
          emoji: '📦',
          title: 'Supply = How Much',
          desc: {
            easy: 'Supply means how MUCH of something there is. A few = rare. A ton = common.',
            medium:
              "Supply is the amount available to buy. Little supply makes things feel special; lots of supply makes them ordinary.",
            hard:
              'Supply is the quantity sellers can offer. Lower supply, all else equal, supports a higher price.',
          },
          color: '#E8F0FF',
        },
        {
          emoji: '🙋',
          title: 'Demand = How Many Want It',
          desc: {
            easy: 'Demand means how MANY people want it. Everyone wants it = high demand!',
            medium:
              "Demand is how badly people want something. The more buyers chasing it, the higher the price they'll accept.",
            hard:
              'Demand is buyers’ willingness to pay. Higher demand, all else equal, pulls the price up.',
          },
          color: '#FFF3E8',
        },
        {
          emoji: '💎',
          title: 'Rare + Wanted = Expensive',
          desc: {
            easy: 'A rare Pokémon card EVERYONE wants? Super pricey! Few of them, lots of fans.',
            medium:
              "When supply is tiny but demand is huge — a rare card, a sold-out toy — the price soars. That’s the priciest corner.",
            hard:
              'Low supply meeting high demand produces the highest prices: limited editions, sold-out releases, rare collectibles.',
          },
          color: '#F0E8FD',
        },
        {
          emoji: '🍂',
          title: 'Common + Unwanted = Cheap',
          desc: {
            easy: 'A pile of leaves in autumn? Free! Tons of them and nobody wants to buy them.',
            medium:
              "When there’s a mountain of something and few buyers, the price falls — clearance racks and giveaway piles.",
            hard:
              'High supply meeting low demand produces the lowest prices, sometimes near zero. Abundance without desire is cheap.',
          },
          color: '#E5FAF1',
        },
      ],
    },

    // ─── Calc challenge: umbrellas on a rainy day ───────────────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 Rainy-Day Umbrellas',
      setup: {
        easy: "On a sunny day an umbrella costs 4⭐. Then it pours rain, EVERYONE wants one, and the price doubles. How many ⭐ does it cost now?",
        medium:
          "Sunny day: umbrellas cost 4⭐ each. A sudden rainstorm makes demand spike, and the price doubles. What’s the new price?",
        hard:
          "Base umbrella price is 4⭐. A demand shock (rain) drives the price to 2× the base. Compute the new price.",
      },
      problem: {
        givens: [
          { label: 'Sunny-day price', value: 4, suffix: '⭐' },
          { label: 'Price multiplies by', value: 2, suffix: '×' },
        ],
        answerLabel: 'Rainy-day price',
        answer: 8,
        suffix: '⭐',
      },
      walkthrough: {
        easy: "4⭐ doubled is 4 + 4 = 8⭐. When rain makes EVERYONE want an umbrella but there are only a few, the price climbs. Same umbrella — different demand! ☔",
        medium:
          "4⭐ × 2 = 8⭐. Nothing about the umbrella changed — only the demand. A sudden burst of buyers with limited umbrellas pushes the price up.",
        hard:
          "4 × 2 = 8⭐. A demand spike against fixed short-run supply lifts the market price even though the product is identical. Demand alone moved it.",
      },
    },

    // ─── Connect: where this shows up in real life ──────────────────────
    {
      kind: 'connect',
      heading: '🌍 Supply & Demand Everywhere',
      concept: {
        easy: 'Grown-ups see this tug-of-war ALL the time — at stores, online, and in big businesses.',
        medium: 'The supply-versus-demand rule quietly sets prices for almost everything you buy.',
        hard: 'Supply and demand is the engine behind pricing across nearly every market.',
      },
      examples: [
        {
          emoji: '🎫',
          who: 'Concert Tickets',
          story: {
            easy: "When a famous singer comes to town, there are only so many seats but TONS of fans — so tickets cost a lot!",
            medium:
              "A popular concert has limited seats and huge demand, so ticket prices climb. Fewer seats + more fans = higher price.",
            hard:
              "Fixed venue capacity (supply) against intense fan demand pushes ticket prices up — and resellers chase the gap.",
          },
        },
        {
          emoji: '🍓',
          who: 'Strawberries in Winter',
          story: {
            easy: "Strawberries are cheap in summer when there are tons, but cost more in winter when they’re hard to grow.",
            medium:
              "In summer strawberries are everywhere and cheap. In winter the supply shrinks, so the price goes up for the same berry.",
            hard:
              "Seasonal supply swings move produce prices: abundant summer supply lowers price; scarce winter supply raises it.",
          },
        },
        {
          emoji: '🛒',
          who: 'The Sale Rack',
          story: {
            easy: "Stores put a big pile of leftover stuff 'On Sale!' to sell it. Too much + few buyers = cheaper price.",
            medium:
              "When a store has way too much of something, it cuts the price on the sale rack to clear the surplus.",
            hard:
              "Clearance pricing is supply-side: excess inventory with weak demand forces markdowns until the stock clears.",
          },
        },
      ],
      kicker: {
        easy: 'Once you spot it, you’ll see supply and demand EVERYWHERE! 👀',
        medium: 'The same simple tug-of-war is hiding behind almost every price tag.',
        hard: 'One rule, endless examples — supply and demand is the lens for reading any market.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Supply & Demand Check',
      questions: [
        {
          q: 'A rare card that EVERYONE wants will usually be...',
          options: [
            'Expensive — few of them, lots of fans',
            'Cheap — because cards are small',
            'Free — rare things are always free',
          ],
          correct: 0,
        },
        {
          q: 'It starts pouring rain and everyone wants an umbrella. What happens to umbrella prices?',
          options: [
            'They go UP — high demand, low supply',
            'They go DOWN — rain makes things cheaper',
            'They stay exactly the same',
          ],
          correct: 0,
        },
        {
          q: 'A store has a MOUNTAIN of a toy almost nobody wants. The price will probably...',
          options: [
            'Go down — too much supply, too few buyers',
            'Go up — big piles cost more',
            'Never change',
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
        easy: "Now you know the secret of prices: SUPPLY (how much) tugs against DEMAND (how many want it)! ⚖️",
        medium:
          "You've cracked the rule behind almost every price tag — the tug-of-war between supply and demand.",
        hard:
          "You now understand the core of economics: price emerges from the balance of supply and demand.",
      },
      bonusTip: {
        easy: "Tip: when something is rare AND popular, expect the price to climb. 💎",
        medium: "Pro tip: ask 'how much is there?' and 'how many want it?' — those two answers explain the price.",
        hard: "Edge: read any price as a snapshot of where supply and demand currently balance.",
      },
    },

    // ─── Real-world mission: spot pricey-rare + cheap-common ────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'supply-demand',
        emoji: '🔎',
        title: {
          easy: 'Price Detective: Rare vs. Common',
          medium: 'Spot one pricey-rare thing and one cheap-common thing',
          hard: 'Field study: identify a scarcity-priced good and an abundance-priced good',
        },
        pitch: {
          easy: "Go on a price hunt! Find ONE thing that costs a lot because it’s rare and wanted, and ONE thing that’s cheap because there’s tons of it.",
          medium:
            "Become a price detective. Find one item that’s expensive because it’s scarce + popular, and one that’s cheap because it’s common + not in demand.",
          hard:
            "Conduct a mini field study: locate one good priced high by scarcity and demand, and one priced low by abundance and weak demand.",
        },
        steps: [
          {
            emoji: '🔎',
            text: {
              easy: 'Look around your home, a store, or online with a grown-up.',
              medium: 'With a grown-up, look around your home, a shop, or a website.',
              hard: 'With a grown-up, observe items at home, in a store, or online.',
            },
          },
          {
            emoji: '💎',
            text: {
              easy: 'Find ONE pricey thing that’s rare AND lots of people want it.',
              medium: 'Spot one expensive item that’s scarce and in high demand.',
              hard: 'Identify one high-priced item where low supply meets strong demand.',
            },
          },
          {
            emoji: '🏷️',
            text: {
              easy: 'Find ONE cheap thing there’s LOTS of that few people want.',
              medium: 'Spot one cheap item that’s common and not in much demand.',
              hard: 'Identify one low-priced item where high supply meets weak demand.',
            },
          },
          {
            emoji: '🗣️',
            text: {
              easy: 'Tell a grown-up WHY you think each one costs what it does.',
              medium: 'Explain to a grown-up why supply and demand set each price.',
              hard: 'Articulate how supply and demand explain each observed price.',
            },
          },
        ],
        reflection: [
          {
            key: 'pricey-rare',
            prompt: {
              easy: 'What pricey thing did you find that’s rare and wanted?',
              medium: 'Which scarce, in-demand item did you spot — and why is it pricey?',
              hard: 'Name the scarcity-priced item and explain its supply/demand setup.',
            },
            type: 'text',
          },
          {
            key: 'cheap-common',
            prompt: {
              easy: 'What cheap thing did you find that there’s lots of?',
              medium: 'Which common, low-demand item did you spot — and why is it cheap?',
              hard: 'Name the abundance-priced item and explain its supply/demand setup.',
            },
            type: 'text',
          },
          {
            key: 'insight',
            prompt: {
              easy: 'How did supply and demand decide each price? Tell the story!',
              medium: 'In your own words, how did supply and demand set each price?',
              hard: 'Reflect on how the balance of supply and demand produced each price.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "No buying needed — this is just looking and noticing! Help your child spot examples and talk through why each price makes sense.",
          medium:
            "Observation only, no purchases required. The goal is noticing patterns and reasoning aloud about why scarcity or abundance sets the price.",
          hard:
            "Purely observational — no transactions. Encourage your child to reason about scarcity, demand, and how their interaction sets each price.",
        },
        printables: {
          trackers: [
            {
              title: 'My Price Detective Notes',
              columns: ['Item', 'Rare or common?', 'Many want it?', 'Pricey or cheap?'],
              rows: 4,
              note: 'Fill in two rows: one rare + wanted (pricey), one common + unwanted (cheap).',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
