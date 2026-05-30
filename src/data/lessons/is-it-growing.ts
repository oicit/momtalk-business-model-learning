/**
 * Is It Growing? — How to spot a business that's getting bigger.
 *
 * Investors love growing companies because a small business today can become
 * a giant tomorrow. But how do you SEE growth? Kids learn the signals: more
 * customers each year, more sales, more locations, more people using an app.
 * They practice the math of growth (100 cups → 150 cups = 50% more) and learn
 * to tell a growing business from a shrinking one.
 *
 * Beat order:
 *   intro → think-deeper (why do investors care about growth?) →
 *   concept-cards (the growth signals) → calc-challenge (lemonade: 100 → 150
 *   cups) → connect (growing vs shrinking in the real world) → outro →
 *   real-world-mission (pick something and check if it's growing).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'is-it-growing',
  themeKey: 'company',
  emoji: '📈',
  title: 'Is It Growing?',
  subtitle: {
    easy: 'A tiny business today can become HUGE tomorrow — if it keeps growing!',
    medium:
      'Learn to spot the signs that a business is getting bigger — and why growth gets investors so excited.',
    hard:
      'Growth signals, growth rate, and why a fast-growing company can be worth more than a big sleepy one — kid-sized.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Imagine a tiny lemonade stand. Last summer it sold to 10 kids. This summer? 100 kids! That's GROWING — and growing is super exciting. Today you'll learn how to spot a business that's getting bigger. 📈",
        medium:
          "Some businesses get a little bigger every year — more customers, more sales, more stores. We call that GROWING. Investors LOVE growing businesses, because a small one today can become a giant tomorrow. Let's learn to spot growth!",
        hard:
          "A business that's growing is adding customers, sales, and reach over time. Investors prize growth because a small fast-growing company can compound into a giant. Today: how to read the growth signals and why they matter.",
      },
    },

    // ─── Think-deeper: why do investors care about growth? ──────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Do Investors Love Growth?',
      intro: {
        easy: "Let's figure out why growing is such a big deal.",
        medium: "Let's reason through why a growing business excites investors.",
        hard: 'First-principles look at why growth drives value.',
      },
      layers: [
        {
          question: {
            easy: 'Which would you rather own: a stand selling MORE every year, or LESS every year?',
            medium: 'Would you rather own a business adding customers each year, or losing them?',
            hard: 'Which business is more valuable to own: one with rising sales or falling sales?',
          },
          reveal: {
            easy:
              "Selling MORE, of course! If more people buy each year, the business makes more money — and a piece of it (your share) gets more valuable too. 🌱",
            medium:
              "The growing one! More customers means more money coming in, which usually means the business — and your slice of it — becomes worth more over time.",
            hard:
              'The growing one. Rising sales typically lift profits and the value of your ownership stake. Growth is the engine that makes a small slice worth a lot more later.',
          },
        },
        {
          question: {
            easy: 'How could a TINY business ever beat a HUGE one?',
            medium: 'How can a small company end up worth more than a giant one?',
            hard: 'Why might a small fast-grower outpace a large slow-grower?',
          },
          reveal: {
            easy:
              "A big company that isn't growing just stays the same. A tiny one that keeps growing can pass it! Fast-growing beats big-but-sleepy. 🐢🐇",
            medium:
              "A giant that stopped growing stays flat. A small company that doubles and doubles again can zoom right past it. Speed matters as much as size!",
            hard:
              "Size today only tells you the past. A small company compounding fast can overtake a large one that has stalled — investors pay for the future trajectory, not just the current size.",
          },
        },
        {
          question: {
            easy: 'So what should you LOOK for to know a business is growing?',
            medium: 'What clues tell you a business is actually getting bigger?',
            hard: 'What measurable signals reveal real growth?',
          },
          reveal: {
            easy:
              "Look for MORE: more customers, more sales, more stores, more people using the app. More each year = growing! 📈",
            medium:
              "Count the things that should go UP over time: customers, sales, locations, app users. If this year's numbers beat last year's, it's growing.",
            hard:
              "Compare this period to the last: more customers, higher sales, new locations, rising active users. Consistent year-over-year increases are the fingerprint of growth.",
          },
        },
      ],
    },

    // ─── Concept cards: the growth signals ──────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The 4 Growth Signals',
      subheading: 'These things going UP year after year mean a business is growing.',
      cards: [
        {
          emoji: '🧍',
          title: 'More Customers',
          desc: {
            easy: '10 customers last year, 100 this year? More people are choosing it — that\'s growing!',
            medium:
              'Each year more people buy from the business. More customers usually leads to more money.',
            hard:
              'A rising customer count year-over-year is a core growth signal — more buyers feeds rising sales.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '💰',
          title: 'More Sales',
          desc: {
            easy: 'If the money coming in gets BIGGER every year, the business is growing.',
            medium:
              'Sales is all the money customers pay. When sales climb year after year, that\'s strong growth.',
            hard:
              'Revenue (total sales) trending upward over time is the clearest single measure of business growth.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🏪',
          title: 'More Locations',
          desc: {
            easy: 'One store becomes two, then ten, then a hundred! Opening more places means growing.',
            medium:
              'A growing business often opens new stores or branches in more towns and cities.',
            hard:
              'Footprint expansion — new stores, branches, or markets — signals a company scaling up its reach.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '📱',
          title: 'More People Using It',
          desc: {
            easy: 'For an app or game, MORE players signing up each month means it\'s growing fast!',
            medium:
              'For apps, watch the users: more downloads and more daily players means the app is growing.',
            hard:
              'For software, rising active users (daily/monthly) is the key growth metric, often ahead of sales.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc challenge: lemonade 100 → 150 cups ────────────────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 How Much Did It Grow?',
      setup: {
        easy: "A lemonade stand sold 100 cups last summer. This summer it sold 150 cups! How many MORE cups did it sell?",
        medium:
          "Last summer a lemonade stand sold 100 cups. This summer it sold 150 cups. How many MORE cups did it sell this year?",
        hard:
          "A lemonade stand's sales rose from 100 cups last summer to 150 cups this summer. Compute the increase in cups.",
      },
      problem: {
        givens: [
          { label: 'Cups last summer', value: 100, suffix: 'cups' },
          { label: 'Cups this summer', value: 150, suffix: 'cups' },
        ],
        answerLabel: 'Extra cups sold',
        answer: 50,
        suffix: 'cups',
      },
      walkthrough: {
        easy: "150 − 100 = 50 more cups! That's 50 extra out of 100, which is 50% growth. The stand is GROWING. 🍋📈",
        medium:
          "150 cups − 100 cups = 50 more cups. Since 50 is half of the starting 100, that's 50% growth in one year. A growing business!",
        hard:
          "Increase = 150 − 100 = 50 cups. Growth rate = 50 ÷ 100 = 50%. A 50% year-over-year jump is strong growth — investors would be thrilled.",
      },
    },

    // ─── Connect: growing vs shrinking in the real world ────────────────
    {
      kind: 'connect',
      heading: '🌍 Growing vs. Shrinking',
      concept: {
        easy: 'Some real businesses grow and grow. Others get smaller and smaller. Spot the difference!',
        medium: 'In the real world, growing businesses zoom up while shrinking ones fade away.',
        hard: 'Real companies live or die by growth — the contrast between growers and shrinkers is stark.',
      },
      examples: [
        {
          emoji: '🚀',
          who: 'A Tiny App That Grew',
          story: {
            easy: "Some apps start with just a few players, then MILLIONS join. More users every day = growing super fast!",
            medium:
              "Lots of famous apps began tiny, then added millions of users month after month. Fast-rising users is a giant growth signal.",
            hard:
              "Many breakout apps showed explosive user growth early — monthly active users doubling repeatedly — which is exactly what growth investors hunt for.",
          },
        },
        {
          emoji: '📼',
          who: 'A Store That Shrank',
          story: {
            easy: "A movie-rental store called Blockbuster had stores everywhere — then fewer, then NONE. It shrank away. 😮",
            medium:
              "Blockbuster rented movies from thousands of stores. As people switched to streaming, its stores closed one by one until it nearly vanished.",
            hard:
              "Blockbuster's store count and sales fell year after year as streaming rose — a classic shrinking business that investors fled.",
          },
        },
        {
          emoji: '🍔',
          who: 'More Stores, More Growth',
          story: {
            easy: "McDonald's started as ONE restaurant. Now there are tens of thousands! Opening more = growing.",
            medium:
              "McDonald's began with a single restaurant and grew to tens of thousands worldwide. Each new location was another step of growth.",
            hard:
              "McDonald's scaled from one location to ~40,000 globally — relentless footprint expansion is a textbook growth story.",
          },
        },
      ],
      kicker: {
        easy: 'Growing = exciting. Shrinking = watch out. Always ask: more or less than last year? 📈',
        medium: 'Before you get excited about any business, ask the key question: is it bigger than last year?',
        hard: 'The investor\'s first question is simple: more or less than last year? Direction matters more than size.',
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you can spot a growing business! Just look for MORE — more customers, more sales, more stores. 📈",
        medium:
          "You learned the 4 growth signals and how to measure growth. Now you can tell a zooming business from a fading one!",
        hard:
          "You can now read growth signals and compute a simple growth rate — the first thing smart investors check.",
      },
      bonusTip: {
        easy: "Tip: a small business that keeps growing can beat a big sleepy one! 🐇",
        medium: "Pro tip: fast-growing-but-small often beats big-but-stuck. Watch the trend, not just the size.",
        hard: "Edge: value follows trajectory. A high growth rate on a small base can compound past a stalled giant.",
      },
    },

    // ─── Real-world mission: check if something is growing ──────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'is-it-growing',
        emoji: '📈',
        title: {
          easy: 'Be a Growth Spotter!',
          medium: 'Spot a real growing (or shrinking) thing',
          hard: 'Measure the growth of something real around you',
        },
        pitch: {
          easy: "Pick something — a YouTube channel, a store, a game — and check: is it growing? Count now, count later!",
          medium:
            "Choose something real (a channel's subscribers, a busy store, an app) and find out if it's growing by checking it now and again later.",
          hard:
            "Select a real subject — a channel's subscriber count, a store's busyness, an app's users — and assess whether it's growing across two points in time.",
        },
        steps: [
          {
            emoji: '🎯',
            text: {
              easy: 'Pick ONE thing to watch: a YouTube channel, a favorite store, or a game.',
              medium: 'Choose one thing to track — a channel\'s subscribers, a store, or an app.',
              hard: 'Select one trackable subject with a number you can observe (subscribers, busyness, users).',
            },
          },
          {
            emoji: '🔢',
            text: {
              easy: 'Write down its number TODAY (like how many subscribers, or how busy the store is).',
              medium: 'Record today\'s number — subscriber count, or how packed the store is (1 = empty, 10 = packed).',
              hard: 'Record the baseline measurement today (e.g., subscriber count or a 1–10 busyness score).',
            },
          },
          {
            emoji: '🗓️',
            text: {
              easy: 'Wait a few days (or a week). Check the SAME thing again and write the new number.',
              medium: 'After about a week, check the same thing again and record the new number.',
              hard: 'After ~1 week, re-measure the same subject under similar conditions.',
            },
          },
          {
            emoji: '🗣️',
            text: {
              easy: 'No number to count? Ask a grown-up: "Is this place getting busier or quieter?"',
              medium: 'Can\'t count it? Ask a grown-up whether the business seems to be growing or shrinking.',
              hard: 'If direct measurement isn\'t possible, interview a grown-up about the trend they observe.',
            },
          },
        ],
        reflection: [
          {
            key: 'what-watched',
            prompt: {
              easy: 'What did you watch?',
              medium: 'What thing did you track?',
              hard: 'What subject did you measure?',
            },
            type: 'text',
            placeholder: 'e.g. my favorite YouTube channel',
          },
          {
            key: 'growing',
            prompt: {
              easy: 'Did it go UP, DOWN, or stay the same?',
              medium: 'Did the number grow, shrink, or stay flat?',
              hard: 'Net direction over your observation window?',
            },
            type: 'text',
            placeholder: 'up / down / same',
          },
          {
            key: 'invest',
            prompt: {
              easy: 'Would YOU want to own a piece of it? Why?',
              medium: 'Based on what you saw, would you want to own a slice of it? Explain.',
              hard: 'Given the trend, would you invest? Justify using the growth signals you learned.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is just observing — no buying anything! Help your kid find a number to count (subscribers, players) or chat about whether a local store seems busier than before.",
          medium:
            "Observation only — nothing is purchased. Help locate a public number (subscriber/user count) or discuss a local business's trend. The goal is noticing growth, not real investing.",
          hard:
            "Purely observational, no transactions. Assist in sourcing a public metric or framing a qualitative trend discussion. The learning objective is recognizing growth signals.",
        },
        printables: {
          trackers: [
            {
              title: 'My Growth Spotter Sheet',
              columns: ['What I watched', 'Number TODAY', 'Number LATER', 'Growing?'],
              rows: 4,
              note: 'Count the same thing twice — a few days apart — and compare!',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
