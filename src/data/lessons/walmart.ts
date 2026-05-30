/**
 * Walmart: Sell a Little Cheaper — to EVERYONE.
 *
 * Goal: take a kid from "Walmart is just a big store" → to "Walmart's
 * superpower is SCALE × tiny margins": earn just a tiny bit on each item,
 * but sell a HUGE number of items. Being giant lets Walmart buy from
 * suppliers super cheap, pass small savings to shoppers, which brings even
 * MORE shoppers — a loop smaller stores can't match.
 *
 * Beat order:
 *   intro → think-deeper (how can selling cheap make MORE money?) →
 *   concept-cards (Scale / Margin / Buying Power / The Loop) →
 *   calc-challenge (1⭐ profit per item × 1,000,000 items = 1,000,000⭐) →
 *   connect (Amazon, McDonald's, dollar stores) → outro → mission
 *   (compare the same item's price at a big store vs a small one).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'walmart',
  themeKey: 'company',
  emoji: '🛒',
  title: 'Walmart',
  subtitle: {
    easy: 'Walmart sells stuff a TINY bit cheaper — but to a HUGE number of people!',
    medium:
      'The trick is scale: earn a little on each item, but sell a giant pile of them.',
    hard:
      'How small per-item margins multiplied by enormous volume build a retail empire — kid-sized.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Walmart's prices are always a little CHEAPER than other stores. So how does it make so much money? Here's the secret: Walmart earns just a tiny bit on each thing — but it sells a HUGE pile of stuff to lots and lots of people. 🛒",
        medium:
          "Walmart is famous for low prices. You'd think low prices mean small profits. But Walmart is one of the biggest companies on Earth! Today you'll learn its hidden trick: make a little on each item, then sell a GIANT number of items.",
        hard:
          "Walmart earns thin margins on each product — but it operates at enormous scale. Today: how tiny per-item profit times gigantic volume creates one of the largest businesses in history, plus the buying-power loop that keeps it ahead.",
      },
    },

    // ─── Think-deeper: how can cheap make MORE money? ───────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 How Can Cheap Make MORE Money?',
      intro: {
        easy: "Let's puzzle this out together.",
        medium: "Let's reason through why low prices can win big.",
        hard: 'First-principles look at the scale + thin-margin model.',
      },
      layers: [
        {
          question: {
            easy: 'If you earn just 1 star on a toy but sell only 5 toys, how much do you make?',
            medium: 'Earning a tiny bit per item — does that have to mean a tiny total?',
            hard: 'Does a thin per-unit margin imply a small absolute profit?',
          },
          reveal: {
            easy:
              "Only 5 stars. Not much! A tiny profit on a few items is, well, tiny. So how does Walmart get rich on cheap prices?",
            medium:
              "Not at all — it depends on how MANY you sell. A small profit on a few items is small. But a small profit on a HUGE number of items can be enormous.",
            hard:
              "Absolute profit = margin × volume. A thin margin only yields small profit at low volume. At massive volume, the same thin margin produces large aggregate profit.",
          },
        },
        {
          question: {
            easy: 'Why would a HUGE store get its stuff cheaper than a tiny store?',
            medium: 'How does being giant help Walmart pay LESS for the things it sells?',
            hard: "What's the cost advantage of buying at enormous scale?",
          },
          reveal: {
            easy:
              "Because it buys SO much! If you buy one box of crackers, you pay full price. If you buy a MILLION boxes, the maker gives you a big discount. Walmart buys giant amounts, so it pays less per thing.",
            medium:
              "Buying power. When Walmart orders millions of an item, suppliers give a much lower price per unit than a small shop gets. Lower cost lets Walmart charge shoppers less — and still keep its tiny profit.",
            hard:
              "Scale procurement. Ordering enormous volumes earns deep per-unit supplier discounts unavailable to small retailers. The lower cost basis funds lower shelf prices while preserving the thin margin.",
          },
        },
        {
          question: {
            easy: 'What happens when more people come because the prices are low?',
            medium: 'Low prices bring more shoppers. Why does that make Walmart even stronger?',
            hard: 'What feedback loop links low prices, volume, and buying power?',
          },
          reveal: {
            easy:
              "More shoppers means Walmart buys even MORE stuff, which makes it even cheaper, which brings even MORE shoppers! It's a loop that spins faster and faster. 🔁",
            medium:
              "Low prices pull in more shoppers → Walmart buys in even bigger amounts → it pays even less → it can lower prices even more → still more shoppers. The loop feeds itself, and small stores can't match it.",
            hard:
              "It's a flywheel: low prices drive volume → volume increases buying power → lower costs enable still-lower prices → more volume. Each turn widens the gap rivals must close.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ──────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Words of the Walmart Trick',
      subheading: 'Learn these and you can spot the "sell cheap, sell HUGE" model anywhere.',
      cards: [
        {
          emoji: '📈',
          title: 'Scale',
          desc: {
            easy: 'SCALE means BIG. Walmart is so big it sells things to millions and millions of people every single day.',
            medium:
              'Scale means doing something on a giant level. Walmart serves a huge number of shoppers, so even a tiny profit per item adds up fast.',
            hard:
              'Scale is operating at very high volume. It transforms a thin per-unit margin into large aggregate profit and unlocks cost advantages smaller players can\'t reach.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🪙',
          title: 'Tiny Margin',
          desc: {
            easy: 'MARGIN is the little bit you keep after paying for something. Walmart keeps only a tiny bit per item — on purpose!',
            medium:
              'Margin is the profit left on each sale. Walmart keeps its margin tiny so its prices stay low — it makes up for it with huge volume.',
            hard:
              'Margin is profit per unit. Walmart deliberately runs thin margins to keep shelf prices low; volume, not markup, drives total profit.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🤝',
          title: 'Buying Power',
          desc: {
            easy: 'BUYING POWER means: buy a TON and you pay less per thing. Walmart buys so much that makers give it big discounts.',
            medium:
              'Buying power is the discount you get for ordering huge amounts. Walmart orders millions, so it pays far less per item than a small store.',
            hard:
              'Buying power is supplier leverage from large-volume orders. Walmart\'s scale secures per-unit costs below what small retailers can obtain.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '🔁',
          title: 'The Loop',
          desc: {
            easy: 'Cheap prices → more shoppers → buy even more → even cheaper → even MORE shoppers. Round and round it goes!',
            medium:
              'The loop: low prices bring shoppers, shoppers grow buying power, buying power lowers prices more. It feeds itself and rivals can\'t catch up.',
            hard:
              'The flywheel: price → volume → buying power → lower cost → lower price. Each cycle compounds the advantage, creating a durable moat.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: tiny margin × huge volume ──────────────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 Quick Math: Tiny × HUGE',
      setup: {
        easy: 'Walmart earns just 1⭐ profit on a pack of socks. But it sells 1,000,000 packs! How many ⭐ does it make in total?',
        medium:
          'Suppose Walmart keeps only 1⭐ of profit per item — but sells 1,000,000 of them. Compute the total profit.',
        hard:
          'Given a 1⭐ per-unit margin and 1,000,000 units sold, compute aggregate profit (margin × volume).',
      },
      problem: {
        givens: [
          { label: 'Profit per item', value: 1, suffix: '⭐' },
          { label: 'Items sold', value: 1000000 },
        ],
        answerLabel: 'Total profit',
        answer: 1000000,
        suffix: '⭐',
      },
      walkthrough: {
        easy: "1⭐ × 1,000,000 items = 1,000,000⭐! Just ONE little star per item turns into a MILLION stars because Walmart sells SO many. That's the whole secret: small per item, GIANT all together.",
        medium:
          "1⭐ × 1,000,000 = 1,000,000⭐. A margin so small it almost feels like nothing becomes a fortune once you multiply by huge volume. Small × HUGE = big.",
        hard:
          "Profit = 1⭐ × 1,000,000 = 1,000,000⭐. The per-unit margin is trivial, yet aggregate profit is large purely from scale. This is why low-margin retailers can still be giants — volume does the work.",
      },
    },

    // ─── Connect ────────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 The "Sell Cheap, Sell HUGE" Trick Everywhere',
      concept: {
        easy: 'Once you see Walmart\'s trick, you\'ll spot it in lots of other giant businesses.',
        medium: 'The scale + thin-margin + buying-power model shows up across retail and beyond.',
        hard: 'Thin margins powered by scale and buying-power loops generalize across many industries.',
      },
      examples: [
        {
          emoji: '📦',
          who: 'Amazon',
          story: {
            easy: "Amazon sells almost EVERYTHING and ships it fast. It keeps prices low and sells a giant pile of stuff — just like Walmart, but online.",
            medium:
              "Amazon runs the same playbook online: low prices, enormous selection, massive volume. Its scale lets it negotiate hard and keep prices competitive worldwide.",
            hard:
              "Amazon applies scale economics to e-commerce — huge volume, aggressive pricing, and buying power that smaller online sellers can't match.",
          },
        },
        {
          emoji: '🍟',
          who: "McDonald's",
          story: {
            easy: "McDonald's makes only a little on each burger — but it sells MILLIONS of burgers every day around the world!",
            medium:
              "McDonald's earns a small margin per meal but sells billions of meals a year. Tiny profit per burger × gigantic volume = a global empire.",
            hard:
              "McDonald's monetizes thin per-item food margins through extreme volume and global footprint — the same margin × volume logic as Walmart.",
          },
        },
        {
          emoji: '🏪',
          who: 'Dollar Stores',
          story: {
            easy: "Dollar stores sell things for about a dollar. They earn just pennies each — but they sell TONS, in thousands of stores.",
            medium:
              "Dollar stores keep prices ultra-low and margins thin, then make money on sheer quantity across thousands of locations. Same trick, smaller package.",
            hard:
              "Dollar-store chains run very thin margins and lean operations, relying on high volume across dense store networks — a focused version of the Walmart model.",
          },
        },
      ],
      kicker: {
        easy: 'Walmart. Amazon. McDonald\'s. Dollar stores. All earning a little on a LOT. 🔁',
        medium: 'Different products, same engine: small margin, huge scale, strong buying power.',
        hard: 'The pattern is invariant: scale converts thin margins into large profits and builds a self-reinforcing cost advantage.',
      },
    },

    // ─── Quiz ───────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Walmart Check',
      questions: [
        {
          q: "What is Walmart's hidden trick?",
          options: [
            'Earn a tiny bit on each item, but sell a HUGE number of items',
            'Charge very high prices on a few items',
            'Sell only to a small group of rich people',
          ],
          correct: 0,
        },
        {
          q: 'Why does being a giant store help Walmart pay less for stuff?',
          options: [
            'It buys huge amounts, so suppliers give big discounts',
            'It pays late so it pays less',
            'Big stores always get free products',
          ],
          correct: 0,
        },
        {
          q: 'If Walmart earns 1⭐ profit per item and sells 1,000,000 items, what is its total profit?',
          options: ['1,000,000⭐', '1⭐', '100⭐'],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Operations: 100 },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "Now you know Walmart's BIG secret: earn a little on each thing, but sell a HUGE amount — and let the loop spin! 🛒",
        medium:
          "You've got the model: tiny margins + giant scale + buying power = a self-feeding loop that's hard to beat.",
        hard:
          "You now understand how thin margins, scale, and buying power combine into a compounding cost advantage. The framework reaches far beyond Walmart.",
      },
      bonusTip: {
        easy: "Fun fact: more than a million people work at Walmart — that's like a whole city in aprons! 🦺",
        medium: "Pro tip: next time a store has low prices, ask 'how do they make money?' Often the answer is volume.",
        hard: "Edge: when margins are thin, volume and cost control decide the winner. Watch who has the biggest buying power.",
      },
    },

    // ─── Real-World Mission ─────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'walmart',
        emoji: '🛒',
        title: {
          easy: 'Big Store vs Small Store Price Check!',
          medium: 'Compare one item\'s price at a big store vs a small store',
          hard: 'Observe scale\'s effect on price: big-store vs small-store comparison',
        },
        pitch: {
          easy: "Pick ONE thing you buy a lot. Find its price at a BIG store and at a SMALL store. Which is cheaper — and by how much?",
          medium:
            "Choose one everyday item. Record its price at a large store and a small store, then see how much scale changes the price.",
          hard:
            "Select one identical item and record its price at a large-scale retailer vs a small one; quantify the price gap and reason about why.",
        },
        steps: [
          {
            emoji: '✍️',
            text: {
              easy: 'Pick ONE thing you know well — like a cereal box, milk, or a candy bar.',
              medium: 'Choose one everyday item that\'s sold the same at both stores.',
              hard: 'Select one identical, comparable item available at both store types.',
            },
          },
          {
            emoji: '🏬',
            text: {
              easy: 'With a grown-up, find the price at a BIG store (or its website). Write it down.',
              medium: 'With a grown-up, record the item\'s price at a large store (in person or online).',
              hard: 'Record the item\'s price at a large-scale retailer (store or site), with a grown-up.',
            },
          },
          {
            emoji: '🏪',
            text: {
              easy: 'Now find the SAME thing at a small corner store. Write that price down too.',
              medium: 'Record the same item\'s price at a small local store.',
              hard: 'Record the same item\'s price at a small independent store.',
            },
          },
          {
            emoji: '🧮',
            text: {
              easy: 'Which one is cheaper? How many cents or dollars different?',
              medium: 'Compare the two prices. Which is lower, and by how much?',
              hard: 'Compute the price difference and note which store is cheaper.',
            },
          },
        ],
        reflection: [
          {
            key: 'item',
            prompt: {
              easy: 'What item did you check?',
              medium: 'Item compared',
              hard: 'Item under comparison',
            },
            type: 'text',
            placeholder: 'box of cereal',
          },
          {
            key: 'big-price',
            prompt: {
              easy: 'Price at the BIG store?',
              medium: 'Big-store price',
              hard: 'Large-retailer price',
            },
            type: 'text',
            placeholder: '$3.50',
          },
          {
            key: 'small-price',
            prompt: {
              easy: 'Price at the SMALL store?',
              medium: 'Small-store price',
              hard: 'Small-retailer price',
            },
            type: 'text',
            placeholder: '$4.25',
          },
          {
            key: 'why',
            prompt: {
              easy: 'Which was cheaper? Why do you think the BIG store can charge less?',
              medium: 'Which store was cheaper, and why might scale explain it?',
              hard: 'Explain the observed gap in terms of scale and buying power.',
            },
            type: 'longtext',
            placeholder: 'The big store was cheaper because…',
          },
        ],
        parentNote: {
          easy: "Help look up prices together — a quick store visit or a website is perfect. No need to buy anything; just compare and chat about why the big store can charge less.",
          medium:
            "This is observation only — no purchase required. Compare prices in person or online and discuss why a larger retailer's buying power lets it price lower.",
          hard:
            "Observational only; nothing needs to be bought. Use in-store or online prices and discuss how scale and supplier discounts translate into lower shelf prices.",
        },
        printables: {
          trackers: [
            {
              title: 'Big vs Small Price Check',
              columns: ['Item', 'Big store price', 'Small store price', 'Cheaper one'],
              rows: 4,
              note: 'Pick items sold at both stores. Write the price you actually see.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
