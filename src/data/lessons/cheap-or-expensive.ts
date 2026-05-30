/**
 * Cheap or Expensive? — "Price isn't the same as value."
 *
 * The seed of the price-to-earnings (P/E) idea, made kid-sized. A stock's
 * PRICE is just what people are paying right now. Its VALUE depends on how
 * much the company actually earns. The smart question isn't "how big is the
 * price?" — it's "how big is the price COMPARED to what it earns?"
 *
 * Core intuition: would you pay 100⭐ for a stand that earns only 5⭐ a year
 * (20 years to get your stars back — expensive!) or 20⭐ for one that earns
 * 5⭐ a year (4 years — cheaper!)? Compare price to earnings.
 *
 * Beat order:
 *   intro → think-deeper (is a big price always a bad deal?) →
 *   concept-cards (price vs value, the "years to pay back" trick) →
 *   calc-challenge (two stands, same earnings, different price) →
 *   connect (where price-vs-value shows up) → outro →
 *   real-world-mission (compare two pretend businesses, pick the better deal).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'cheap-or-expensive',
  themeKey: 'business',
  emoji: '⚖️',
  title: 'Cheap or Expensive?',
  subtitle: {
    easy: "A big price isn't always a good deal — it depends on what you GET!",
    medium:
      "Price is what you pay. Value is what it's really worth. Learn to tell a bargain from a rip-off.",
    hard:
      "Price vs. value — comparing a price to how much it earns. The kid-sized seed of the P/E ratio.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Imagine two lemonade stands for sale. One costs 100⭐. One costs 20⭐. The cheap one is the better deal, right? Maybe… maybe not! To know, you have to ask: how much does each one EARN? ⚖️",
        medium:
          "You know a stock is a slice of a company. But here's the tricky part: is the price a GOOD deal or a BAD deal? A big number isn't automatically expensive, and a small number isn't automatically cheap. Today you learn the question that tells you which.",
        hard:
          "Price tells you what people are paying. It does NOT tell you whether that's a good deal. To judge a deal you compare the price to how much the thing EARNS. That comparison is the seed of one of investing's most-used ideas — let's build it from scratch.",
      },
    },

    // ─── Think-deeper: is a big price always a bad deal? ────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Is a Big Price Always Bad?',
      intro: {
        easy: "Let's puzzle this out together.",
        medium: "Let's reason through what 'expensive' really means.",
        hard: "First-principles look at why price alone tells you almost nothing.",
      },
      layers: [
        {
          question: {
            easy: "A toy costs 50⭐. Is that a lot or a little?",
            medium: "Someone says a stand costs 50⭐. Can you tell if that's expensive yet?",
            hard: "Given only a price of 50⭐, can you judge whether it's expensive?",
          },
          reveal: {
            easy:
              "You can't tell yet! 50⭐ for a tiny eraser is a LOT. 50⭐ for a whole bike is amazing. The number alone doesn't tell you. ⚖️",
            medium:
              "Not yet! A price means nothing on its own — 50⭐ is steep for an eraser but a steal for a bike. You need to know what you GET for it.",
            hard:
              "No. A price is meaningless without context. 'Expensive' only exists relative to what the price buys you — you must anchor it to something real.",
          },
        },
        {
          question: {
            easy: "For a business, what should we compare the price to?",
            medium: "If it's a business for sale, what should the price be compared against?",
            hard: "For a company, what's the right denominator to compare price against?",
          },
          reveal: {
            easy:
              "How much money it EARNS! A stand that earns lots of stars every year is worth more than one that barely earns any. 💰",
            medium:
              "How much it EARNS each year. A business that brings in lots of stars is worth a higher price than one that barely earns. Compare price to earnings.",
            hard:
              "Its earnings — the profit it produces each year. The meaningful question is 'price compared to yearly earnings,' not the price by itself.",
          },
        },
        {
          question: {
            easy: "Here's the trick: how many YEARS until it pays you back?",
            medium: "So how do we turn price and earnings into one easy number?",
            hard: "How do we collapse price and earnings into a single comparable figure?",
          },
          reveal: {
            easy:
              "Divide the price by what it earns each year! Pay 20⭐ for a stand that earns 5⭐ a year → 4 years to get your stars back. Pay 100⭐ for the same 5⭐ a year → 20 years! Fewer years = cheaper deal. 🪄",
            medium:
              "Price ÷ yearly earnings = how many years to pay you back. 20⭐ price ÷ 5⭐ earned = 4 years (cheap!). 100⭐ price ÷ 5⭐ earned = 20 years (expensive!). Same earnings, very different deals.",
            hard:
              "Price ÷ annual earnings gives 'years to pay back.' 20÷5 = 4 years; 100÷5 = 20 years. Lower is cheaper. Flip it around and this is exactly the price-to-earnings (P/E) ratio grown-ups use.",
          },
        },
      ],
    },

    // ─── Concept cards: price vs value, the payback trick ───────────────
    {
      kind: 'concept-cards',
      heading: 'Price Is Not Value',
      subheading: "Two different things people mix up all the time — let's keep them apart.",
      cards: [
        {
          emoji: '🏷️',
          title: 'Price = What You Pay',
          desc: {
            easy: 'The price is just the number on the tag — what you hand over to buy it. Nothing more!',
            medium:
              'Price is what people are paying right now. It can be high or low for all sorts of reasons — it does NOT automatically mean good or bad.',
            hard:
              'Price is the current market quote — what buyers and sellers agree on today. It reflects mood as much as worth.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '💎',
          title: 'Value = What It\'s Worth',
          desc: {
            easy: 'Value is how much the thing is really WORTH — like how much money a business actually earns.',
            medium:
              "Value is what the business is truly worth, based on how much it earns. A great deal is when the price is BELOW the value.",
            hard:
              "Value is intrinsic worth, driven by the earnings the company produces. Smart buyers want price < value — paying less than something is worth.",
          },
          color: '#E5FAF1',
        },
        {
          emoji: '⏳',
          title: 'The Payback Trick',
          desc: {
            easy: 'Divide the price by what it earns each year. That\'s how many years to get your stars back. Fewer years = cheaper!',
            medium:
              'Price ÷ yearly earnings = years to pay you back. 4 years is a cheap deal; 20 years is expensive. Same earnings, big difference!',
            hard:
              'Price ÷ annual earnings = payback years. This is the kid version of the P/E ratio — a lower number generally means a cheaper, better-priced business.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '⚖️',
          title: 'Compare, Don\'t Guess',
          desc: {
            easy: 'Never judge a price by its size. Always compare it to what you GET. Big can be cheap; small can be pricey!',
            medium:
              'A small price can be expensive and a big price can be cheap — it all depends on earnings. Always compare, never guess from the number alone.',
            hard:
              'Absolute price size is noise. The signal is the price-to-earnings comparison — that\'s how you separate a bargain from an overpriced bet.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc challenge: two stands, same earnings, different price ─────
    {
      kind: 'calc-challenge',
      heading: '🧮 Which Stand Is the Better Deal?',
      setup: {
        easy: "Two lemonade stands BOTH earn 5⭐ every year. Stand A costs 20⭐. Stand B costs 100⭐. For the cheaper Stand A, how many YEARS until it pays your 20⭐ back?",
        medium:
          "Two stands each earn 5⭐ a year. Stand A's price is 20⭐; Stand B's is 100⭐. Using price ÷ yearly earnings, how many years does Stand A take to pay back?",
        hard:
          "Both stands earn 5⭐/year. Stand A is priced at 20⭐, Stand B at 100⭐. Compute Stand A's payback period (price ÷ annual earnings) in years.",
      },
      problem: {
        givens: [
          { label: 'Stand A price', value: 20, suffix: '⭐' },
          { label: 'Earns each year', value: 5, suffix: '⭐' },
        ],
        answerLabel: 'Years to pay back',
        answer: 4,
        suffix: 'yrs',
      },
      walkthrough: {
        easy: "20 ⭐ ÷ 5 ⭐ a year = 4 years. Stand A pays you back in just 4 years! Stand B costs 100⭐ for the same 5⭐ a year — that's 20 years. Same earnings, but A is 5× cheaper. Pick A! 🎉",
        medium:
          "20⭐ ÷ 5⭐/year = 4 years for Stand A. Stand B: 100⭐ ÷ 5⭐ = 20 years. Same earnings, wildly different deals — A is the bargain. The big price wasn't 'better,' it was worse!",
        hard:
          "A: 20 ÷ 5 = 4-year payback. B: 100 ÷ 5 = 20-year payback. Identical earnings, 5× the price — B is far more expensive per ⭐ earned. This is exactly how a P/E comparison flags an overpriced stock.",
      },
    },

    // ─── Connect: where price-vs-value shows up ─────────────────────────
    {
      kind: 'connect',
      heading: '🌍 Cheap vs. Expensive in Real Life',
      concept: {
        easy: 'Comparing price to what you GET is how smart shoppers AND smart investors decide.',
        medium: 'The "price vs. value" question shows up everywhere — from candy to giant companies.',
        hard: 'Price-relative-to-earnings reasoning underpins value investing and everyday smart buying.',
      },
      examples: [
        {
          emoji: '🍬',
          who: 'The Candy Aisle',
          story: {
            easy: "A big bag for 10⭐ can be a better deal than a tiny bag for 4⭐. Smart shoppers check how much you GET, not just the price.",
            medium:
              "Grown-ups check the 'price per piece,' not the sticker. A pricier bag with way more candy can be the real bargain. Same idea: compare price to what you get.",
            hard:
              "'Unit price' is the same trick — normalizing price by quantity to compare fairly. It's the everyday cousin of price-to-earnings.",
          },
        },
        {
          emoji: '🧙',
          who: 'Warren Buffett',
          story: {
            easy: "The famous investor Warren Buffett looks for great companies whose price is LOWER than what they're really worth. He hunts for bargains!",
            medium:
              "Warren Buffett got rich buying good companies when their price was below their true value. He waits patiently for a bargain — price under value.",
            hard:
              "Buffett's value investing is precisely this: estimate a business's worth from its earnings, then buy only when the price is comfortably below it.",
          },
        },
        {
          emoji: '📊',
          who: 'The P/E Number',
          story: {
            easy: "Grown-up investors use a number called 'P/E' — it's just price compared to earnings, the same payback idea you just learned!",
            medium:
              "Investors everywhere use the 'P/E ratio' — price divided by yearly earnings. A low P/E can mean cheap; a high P/E can mean expensive. You already get it!",
            hard:
              "The P/E ratio (price ÷ earnings per share) is your payback number flipped around. It's one of the most-quoted figures in all of investing — and you just derived it.",
          },
        },
      ],
      kicker: {
        easy: 'Once you compare price to what you GET, you can spot a bargain anywhere. ⚖️',
        medium: 'Train this habit and you\'ll never be fooled by a big (or small) number again.',
        hard: 'Price-relative thinking is a lifelong edge — in stores and in markets.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know the secret: a price is only cheap or expensive once you compare it to what it EARNS! ⚖️",
        medium:
          "You learned to tell a bargain from a rip-off: never judge a price by its size — compare it to what the business earns.",
        hard:
          "You've built the price-vs-value intuition behind the P/E ratio — the foundation of judging whether ANY investment is fairly priced.",
      },
      bonusTip: {
        easy: "Tip: when something seems pricey, ask 'how much do I GET for it?' first. 🤔",
        medium: "Pro tip: 'fewer years to pay back' usually means a cheaper, better deal.",
        hard: "Edge: a low price-to-earnings number flags a possible bargain — but always ask WHY it's cheap.",
      },
    },

    // ─── Real-world mission: compare two pretend businesses ─────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'cheap-or-expensive',
        emoji: '⚖️',
        title: {
          easy: 'Be a Deal Detective!',
          medium: 'Compare two pretend businesses and pick the better deal',
          hard: 'Run a price-vs-earnings comparison on two made-up businesses',
        },
        pitch: {
          easy: "Make up two pretend businesses with a price tag and how much each earns. Figure out which one is the better deal — and why!",
          medium:
            "Invent two pretend businesses, give each a price and yearly earnings, then use the payback trick to decide which is the smarter buy.",
          hard:
            "Construct two pretend businesses with price + annual earnings, compute each payback period, and justify which is the better-priced deal.",
        },
        steps: [
          {
            emoji: '✍️',
            text: {
              easy: 'Make up TWO pretend businesses (like a cookie stand and a dog-walking club).',
              medium: 'Invent two pretend businesses you\'d like to own.',
              hard: 'Define two hypothetical businesses across different ideas.',
            },
          },
          {
            emoji: '🏷️',
            text: {
              easy: 'Give each one a PRICE (how many ⭐ to buy it) and how much it EARNS each year.',
              medium: 'Assign each a price (in ⭐) and a yearly earnings amount (in ⭐).',
              hard: 'Set a price and an annual earnings figure for each business.',
            },
          },
          {
            emoji: '🧮',
            text: {
              easy: 'For each one, do price ÷ what it earns = how many YEARS to pay back.',
              medium: 'Compute price ÷ yearly earnings for each — that\'s the payback years.',
              hard: 'Calculate each payback period as price ÷ annual earnings.',
            },
          },
          {
            emoji: '⚖️',
            text: {
              easy: 'The one with FEWER years is the better deal! Tell a grown-up why.',
              medium: 'Pick the one with the shorter payback as the better deal, and explain why.',
              hard: 'Select the lower-payback business and articulate the reasoning.',
            },
          },
        ],
        reflection: [
          {
            key: 'business-a',
            prompt: {
              easy: 'Business A: how many years to pay back?',
              medium: 'Business A payback (price ÷ yearly earnings)?',
              hard: 'Business A payback period in years?',
            },
            type: 'number',
            suffix: 'yrs',
          },
          {
            key: 'business-b',
            prompt: {
              easy: 'Business B: how many years to pay back?',
              medium: 'Business B payback (price ÷ yearly earnings)?',
              hard: 'Business B payback period in years?',
            },
            type: 'number',
            suffix: 'yrs',
          },
          {
            key: 'winner-why',
            prompt: {
              easy: 'Which one is the better deal, and WHY?',
              medium: 'Which business is the smarter buy, and what made it better?',
              hard: 'Which business is better-priced, and justify using payback.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is all pretend — make up the numbers together! The goal is THINKING about price vs. what you get, not real buying or trading.",
          medium:
            "Use invented numbers; this is a thinking exercise, not real investing. The aim is the habit of comparing price to earnings — no real money involved.",
          hard:
            "Purely hypothetical. The learning goal is price-vs-earnings reasoning, not stock trading. Encourage your child to explain WHY the lower payback is the better deal.",
        },
        printables: {
          worksheets: [
            {
              title: 'Deal Detective Worksheet',
              blocks: [
                {
                  label: 'Business A',
                  hint: 'Name it, then fill in the math.',
                  equation: '___ ⭐ price  ÷  ___ ⭐ earned/year  =  ___ years',
                },
                {
                  label: 'Business B',
                  hint: 'Name it, then fill in the math.',
                  equation: '___ ⭐ price  ÷  ___ ⭐ earned/year  =  ___ years',
                },
                {
                  label: 'The better deal is…',
                  hint: 'Fewer years = cheaper. Why?',
                  lines: 3,
                },
              ],
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
