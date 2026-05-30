/**
 * Library Card Power — "Free Costco for Knowledge."
 *
 * A library card is one of the most powerful money tools a kid can hold:
 * it lets you BORROW books, movies, even tools and museum passes for FREE
 * instead of buying them. Smart savers reach for free resources before they
 * spend. The big decision rule: use it once → borrow; use it forever →
 * maybe buy.
 *
 * Beat order:
 *   intro → think-deeper (why borrow instead of buy?) →
 *   concept-cards (what a library card really is) → calc-challenge (10 books
 *   × 8⭐ = 80⭐ saved) → connect (where "borrow not buy" shows up) →
 *   outro → real-world-mission (find 3 things you could borrow free).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'library-card',
  themeKey: 'saving',
  emoji: '📚',
  title: 'Library Card Power',
  subtitle: {
    easy: 'A library card is like a magic card that lets you borrow LOTS of stuff for FREE!',
    medium:
      "The smartest savers borrow before they buy. A library card unlocks books, movies, and more — for free.",
    hard:
      "Why renting access beats owning things you'll use once — and how a library card is the ultimate free resource.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Imagine a card that lets you take home stacks of books, movies, and games — for FREE — then bring them back when you're done. That's a LIBRARY CARD! It's like free Costco for your brain. 📚",
        medium:
          "What if there was a place where you could grab books, movies, even tools — keep them for weeks — and pay nothing? That's a library, and your library card is the key. Today we learn why smart savers borrow before they buy.",
        hard:
          "A library card gives you access to thousands of things without owning any of them. For stuff you'll use once, borrowing beats buying every time. Let's learn the rule that quietly saves people a fortune.",
      },
    },

    // ─── Think-deeper: why borrow instead of buy? ───────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Borrow It, or Buy It?',
      intro: {
        easy: "Let's figure out when borrowing is the smart move.",
        medium: "Let's reason through when to borrow and when to buy.",
        hard: "First-principles look at access vs. ownership.",
      },
      layers: [
        {
          question: {
            easy: "If you want to read a book ONE time, should you buy it or borrow it?",
            medium: "You want to read a book once and probably never again. Buy or borrow?",
            hard: "For a single-use item, is ownership or temporary access more efficient?",
          },
          reveal: {
            easy:
              "Borrow it! Why pay 8⭐ to own a book you'll read once? Borrow it free, then return it. You keep your stars AND read the book. 🎉",
            medium:
              "Borrow it. Buying a book you'll read once means paying full price for one use. Borrowing gets you the exact same story for free.",
            hard:
              "Borrow. Paying to own a single-use item wastes money on storage and idle ownership. Renting access matches cost to actual use.",
          },
        },
        {
          question: {
            easy: "What about a toothbrush — should you borrow that?",
            medium: "Some things you use over and over, like a toothbrush. Borrow those too?",
            hard: "What about an item you'll use daily, forever?",
          },
          reveal: {
            easy:
              "No way! You use a toothbrush every single day forever — and yuck, it's yours! Things you use a LOT, you buy. 🪥",
            medium:
              "Nope — buy that. The rule: use it ONCE → borrow. Use it FOREVER → buy. Toothbrushes, shoes, your favorite book? Those earn their price.",
            hard:
              "Buy it. When use is frequent and ongoing, ownership spreads the cost across many uses, making it the cheaper choice per use.",
          },
        },
        {
          question: {
            easy: "So what's the secret money rule?",
            medium: "What's the simple rule a smart saver follows?",
            hard: "Can you state the access-vs-ownership decision rule?",
          },
          reveal: {
            easy:
              "Use it once → BORROW. Use it forever → maybe BUY. And always check what's FREE first! Your library card is free magic. 🪄",
            medium:
              "Use it once → borrow. Use it a ton → maybe buy. And before you spend ANY stars, ask: 'Can I get this free at the library?' Smart savers check free first.",
            hard:
              "Match cost to use: one-time → borrow, repeated → own. And always exhaust free resources (like the library) before spending. Free-first is the saver's instinct.",
          },
        },
      ],
    },

    // ─── Concept cards: what a library card really is ───────────────────
    {
      kind: 'concept-cards',
      heading: 'What Is a Library Card?',
      subheading: 'One free card that unlocks way more than just books.',
      cards: [
        {
          emoji: '📚',
          title: 'Free Costco for Knowledge',
          desc: {
            easy: 'A library is like a giant store where EVERYTHING is free to borrow. Books, movies, comics — take them home, bring them back!',
            medium:
              'A library card lets you borrow piles of books, movies, and music for free. Like a warehouse store — but you pay nothing and return what you borrow.',
            hard:
              'A library card grants free access to a huge shared collection. You get the use of thousands of items without the cost of owning any of them.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🎬',
          title: 'Way More Than Books',
          desc: {
            easy: 'Libraries lend movies, video games, even cake pans, telescopes, and tools! Some let you borrow museum passes too.',
            medium:
              'Modern libraries lend movies, games, tools, telescopes, and museum passes. If you only need something once, the library probably has it — free.',
            hard:
              'Many libraries operate lending programs for tools, instruments, and museum passes — extending the borrow-not-buy idea far beyond books.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '↩️',
          title: 'Borrow, Then Return',
          desc: {
            easy: "You don't keep it forever — you bring it back so the next kid can use it. Everyone shares!",
            medium:
              'Borrowing means you use it for a while, then return it for someone else. Sharing one copy among many people saves everyone money.',
            hard:
              'A library is shared ownership at scale: one copy serves a whole community, dramatically lowering the cost per person.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '⭐',
          title: 'Free First, Then Spend',
          desc: {
            easy: 'Smart savers check what they can get FREE before spending their stars. The library is the first stop!',
            medium:
              'A saver asks "can I borrow this free?" before buying. Checking the library first keeps your stars in your pocket.',
            hard:
              'The disciplined move is to exhaust free options before paying. The library is the cheapest path to most things you want to try.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc challenge: stars saved by borrowing ───────────────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 How Many Stars Did You Save?',
      setup: {
        easy: "A new book costs 8⭐ to buy. This year you want to read 10 books. If you BORROW all 10 from the library instead of buying them, how many ⭐ do you save?",
        medium:
          "Each book costs 8⭐ to buy. You plan to read 10 books this year. Borrowing them from the library is free. How many ⭐ do you save by borrowing instead of buying?",
        hard:
          "Books cost 8⭐ each; you'll read 10. Library borrowing costs 0⭐. Compute the total ⭐ saved by borrowing all 10.",
      },
      problem: {
        givens: [
          { label: 'Books you want to read', value: 10, suffix: 'books' },
          { label: 'Cost to buy each book', value: 8, suffix: '⭐' },
        ],
        answerLabel: 'Stars saved by borrowing',
        answer: 80,
        suffix: '⭐',
      },
      walkthrough: {
        easy: "10 books × 8⭐ each = 80⭐ to buy them all. But borrowing is FREE, so you save the whole 80⭐! That's a lot of stars for doing nothing but visiting the library. 🎉",
        medium:
          "10 × 8⭐ = 80⭐ if you buy. Borrowing costs 0⭐, so you keep all 80⭐. Same 10 books read — zero stars spent.",
        hard:
          "Buy cost = 10 × 8 = 80⭐. Borrow cost = 0⭐. Savings = 80 − 0 = 80⭐. Identical benefit (10 books read), far lower cost — that's the borrow-not-buy edge.",
      },
    },

    // ─── Connect: where borrow-not-buy shows up ─────────────────────────
    {
      kind: 'connect',
      heading: '🌍 "Borrow, Don\'t Buy" in Real Life',
      concept: {
        easy: 'Lots of grown-ups save money by borrowing or renting things they\'ll only use once.',
        medium: 'The "borrow before you buy" idea powers libraries, rentals, and sharing apps everywhere.',
        hard: 'Access-over-ownership is a whole business model — from libraries to streaming to tool rentals.',
      },
      examples: [
        {
          emoji: '🎬',
          who: 'Netflix & Streaming',
          story: {
            easy: "Instead of buying every movie, people pay a little to borrow ALL the movies for a month. Borrow beats buy!",
            medium:
              "Netflix lets you watch thousands of movies without owning a single DVD. You're borrowing access, not buying copies — way cheaper.",
            hard:
              "Streaming is library logic at scale: pay for access to a huge catalog instead of buying each title. Most people watch a film once.",
          },
        },
        {
          emoji: '🔧',
          who: 'Tool Rental Shops',
          story: {
            easy: "If you need a big drill just ONE time, grown-ups rent it for a day instead of buying it. Use it once → borrow!",
            medium:
              "Need a tool for one weekend project? Hardware stores rent them. Why buy a $200 tool you'll use once when you can rent it cheap?",
            hard:
              "Tool rental matches cost to a single use. Buying a rarely-used tool ties up money in something idle 99% of the time.",
          },
        },
        {
          emoji: '👗',
          who: 'Renting Fancy Clothes',
          story: {
            easy: "For a one-time party, some grown-ups BORROW a fancy outfit instead of buying one they'd never wear again.",
            medium:
              "People rent tuxedos and party dresses for a single event. Wearing it once? Borrowing saves a ton versus buying.",
            hard:
              "Clothing rental services apply borrow-not-buy to fashion: pay a fraction for one-time use instead of full ownership cost.",
          },
        },
      ],
      kicker: {
        easy: 'The library taught you the trick first — and it does it for FREE! 🪄',
        medium: 'Your library card is the OG of borrow-not-buy — and it costs nothing.',
        hard: 'Libraries pioneered access-over-ownership centuries before the apps — and remain the best free version.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Library Card Check',
      questions: [
        {
          q: 'What can you do with a library card?',
          options: [
            'Borrow books, movies, and more for free',
            'Buy companies on the stock market',
            'Get free candy at the store',
          ],
          correct: 0,
        },
        {
          q: 'You want to read a book ONE time. What\'s the smart move?',
          options: [
            'Borrow it free from the library',
            'Buy a brand-new copy to keep forever',
            'Read it three times to get your money\'s worth',
          ],
          correct: 0,
        },
        {
          q: 'What\'s the borrow-or-buy rule?',
          options: [
            'Use it once → borrow. Use it forever → maybe buy.',
            'Always buy everything you want',
            'Never read books at all',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Saving: 100 },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know the secret: a library card is FREE magic! Borrow instead of buy, and keep your stars. 📚⭐",
        medium:
          "You learned a real money superpower: check what's free first, and borrow the stuff you'll only use once. Your library card saves you stars every visit.",
        hard:
          "You've internalized access-over-ownership: borrow single-use items, buy what you use constantly, and always check free options first. That instinct compounds.",
      },
      bonusTip: {
        easy: "Tip: ask a grown-up to help you get your own library card. It's free! 🎫",
        medium: "Pro tip: before you spend on anything, ask 'can I get this free at the library?' first.",
        hard: "Edge: every dollar not spent on single-use ownership stays invested in things that actually compound.",
      },
    },

    // ─── Real-world mission: find 3 things to borrow free ───────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'library-card',
        emoji: '📚',
        title: {
          easy: 'Find 3 Things You Could Borrow for Free',
          medium: 'Hunt for 3 things to borrow instead of buy',
          hard: 'Audit 3 items where borrowing beats buying',
        },
        pitch: {
          easy: "Look around your home and find 3 things you (or your family) bought but could have borrowed free instead. Then count the stars you could've saved!",
          medium:
            "Find 3 things in your house that you could have borrowed from the library or a friend instead of buying. Notice how many stars borrowing would have saved.",
          hard:
            "Identify 3 owned items that were single-use or rarely-used, where borrowing would have been the smarter call, and estimate the savings.",
        },
        steps: [
          {
            emoji: '🔎',
            text: {
              easy: 'Walk around your home and look for books, movies, or games you\'ve only used once or twice.',
              medium: 'Scan your home for books, movies, games, or tools that get used rarely.',
              hard: 'Survey your home for low-use items — single-read books, one-time tools, rarely-played games.',
            },
          },
          {
            emoji: '✍️',
            text: {
              easy: 'Write down 3 of them that you could have borrowed from the library or a friend instead.',
              medium: 'List 3 items you could have borrowed for free instead of buying.',
              hard: 'Record 3 candidates where borrowed access would have matched your actual use.',
            },
          },
          {
            emoji: '⭐',
            text: {
              easy: 'Guess how many ⭐ each one cost, then add them up. That\'s what borrowing could have saved!',
              medium: 'Estimate what each cost, total them — that\'s your potential savings from borrowing.',
              hard: 'Estimate each item\'s cost and sum them to quantify the borrow-not-buy savings.',
            },
          },
          {
            emoji: '🎫',
            text: {
              easy: 'With a grown-up, find out where the nearest library is — or check if you already have a card!',
              medium: 'With a grown-up, locate your nearest library or check whether you already have a card.',
              hard: 'With a grown-up, confirm your library access for next time you\'re tempted to buy.',
            },
          },
        ],
        reflection: [
          {
            key: 'three-items',
            prompt: {
              easy: 'What 3 things did you find that you could have borrowed?',
              medium: 'List the 3 items you found that could have been borrowed.',
              hard: 'Name your 3 borrow-instead-of-buy candidates.',
            },
            type: 'longtext',
          },
          {
            key: 'stars-saved',
            prompt: {
              easy: 'How many ⭐ could you have saved in total by borrowing them?',
              medium: 'What\'s the total you could have saved by borrowing instead?',
              hard: 'Estimated total savings if all 3 had been borrowed?',
            },
            type: 'number',
            suffix: '⭐',
          },
          {
            key: 'insight',
            prompt: {
              easy: 'Next time you want something, will you check the library first? Why?',
              medium: 'Will you check what\'s free before buying next time? Explain.',
              hard: 'How will the borrow-not-buy rule change your next spending decision?',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is just a looking-and-counting game — nothing to buy or return. The goal is helping your child notice that borrowing is often free and smart.",
          medium:
            "Purely observational — your child is spotting things, not spending. A great moment to mention your local library and maybe sign up for a card together.",
          hard:
            "Observation only; no transactions involved. Use it as a springboard to introduce your local library system and the borrow-first habit.",
        },
        printables: {
          trackers: [
            {
              title: 'Borrow-Not-Buy Hunt',
              columns: ['Thing I found', 'What it cost (⭐)', 'Could I have borrowed it?'],
              rows: 3,
              note: 'Find 3 things you could have borrowed free instead of buying.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
