/**
 * Spot the Trend — "You see it before the grown-ups do."
 *
 * Kids are trend-detectors. The toy, game, app, or snack that suddenly
 * EVERYONE wants — kids notice it first, often months before adults catch
 * on. A trend is just something getting more popular over time, and the
 * companies behind an early trend can become big winners. This lesson
 * teaches the habit of asking: "What's everyone into lately — and is it
 * GROWING or FADING?" Plus the catch: not every trend lasts (fads fade),
 * so the real skill is watching whether it keeps growing.
 *
 * Beat order:
 *   intro → think-deeper (how do you know it's a trend?) →
 *   concept-cards (what a trend is, growing vs fading, who benefits) →
 *   brainstorm (list trends you see around you) → connect (real trend
 *   winners) → quiz → outro → real-world-mission (spot 3 trends and guess
 *   the company behind each).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'spot-the-trend',
  themeKey: 'company',
  emoji: '🔭',
  title: 'Spot the Trend',
  subtitle: {
    easy: "You notice what's getting popular BEFORE grown-ups do — that's a superpower!",
    medium:
      "A trend is something getting more popular over time. Learn to spot one early and guess which company wins.",
    hard:
      "How to detect a rising trend, tell a lasting trend from a fading fad, and connect it to the company that benefits.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Think about the game EVERYONE at school is playing right now, or the snack everyone suddenly wants. You noticed it before most grown-ups did! That's called spotting a TREND — and it's a real superpower. 🔭",
        medium:
          "Kids are trend-detectors. The toy, game, or snack that's suddenly everywhere — you spot it first, way before adults. A trend is just something getting more popular over time, and noticing one early is a real skill.",
        hard:
          "Trends often start with kids. Something gets more popular week after week — a game, an app, a snack — and you notice the shift before grown-ups do. Today you'll learn to name a trend, tell if it's growing, and guess who profits.",
      },
    },

    // ─── Think-deeper: how do you KNOW it's a trend? ────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 How Do You Know It\'s a Trend?',
      intro: {
        easy: "Let's figure out what makes something a trend.",
        medium: "Let's reason out how to tell a real trend from a one-time thing.",
        hard: "First-principles: what separates a trend from random noise?",
      },
      layers: [
        {
          question: {
            easy: "If ONE friend likes a new game, is that a trend?",
            medium: "If just one kid likes something new, does that make it a trend?",
            hard: "Does a single data point — one person liking something — signal a trend?",
          },
          reveal: {
            easy:
              "Not yet! One friend is just one friend. A trend is when MORE and MORE people start liking it — like 1 friend, then 5, then the whole class.",
            medium:
              "Not really. A trend needs lots of people, and it needs to be GROWING. One fan is a hobby; a crowd that keeps getting bigger is a trend.",
            hard:
              "No — one observation is noise. A trend requires a rising count over time: adoption that keeps spreading, not a single isolated taste.",
          },
        },
        {
          question: {
            easy: "How can you tell if it's GROWING and not shrinking?",
            medium: "What tells you a trend is still going UP, not fading?",
            hard: "What signal shows momentum is still building rather than peaking?",
          },
          reveal: {
            easy:
              "Watch over time! Last week 3 kids played it — this week 10 do. That's growing! If it was 10 last week and only 2 now, it's fading.",
            medium:
              "Compare across time. More players, more talk, more stores carrying it = growing. Fewer and fewer = fading. The direction matters more than the number today.",
            hard:
              "Look at the rate of change. Accelerating adoption (more each week) means momentum; decelerating or declining counts mean the trend is rolling over.",
          },
        },
        {
          question: {
            easy: "Why would noticing a growing trend EARLY be useful?",
            medium: "Why does spotting a trend before grown-ups matter?",
            hard: "What's the value of identifying a trend before it's widely recognized?",
          },
          reveal: {
            easy:
              "Because the company that MADE the popular thing usually gets bigger and earns more money! If you spot it early, you understand the winner before everyone else. 🪄",
            medium:
              "The company behind an early trend often grows fast and earns way more. Spotting it early means you understand why a business is winning before the news even talks about it.",
            hard:
              "Early trend detection points you to companies whose sales are accelerating before that growth is fully priced in or widely reported — that's an investing edge.",
          },
        },
      ],
    },

    // ─── Concept cards: what a trend is, growing vs fading, who wins ────
    {
      kind: 'concept-cards',
      heading: 'The Trend-Spotter\'s Toolkit',
      subheading: 'Three things every good trend-spotter watches for.',
      cards: [
        {
          emoji: '📈',
          title: 'A Trend Is Growing',
          desc: {
            easy: 'A trend is something MORE and more people want over time. First a few, then lots, then everyone!',
            medium:
              'A trend is something getting more popular over time. The crowd keeps growing — more kids, more buyers, more buzz week after week.',
            hard:
              'A trend is a sustained rise in popularity — increasing adoption over time, not a one-time spike. The key word is "more."',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '🎈',
          title: 'Fad vs. Trend',
          desc: {
            easy: 'Some things get HUGE fast and then disappear — that\'s a fad. A real trend keeps growing for a long time.',
            medium:
              'A fad shoots up and then vanishes (remember a toy everyone forgot in a month?). A lasting trend keeps growing. Watch which one it is!',
            hard:
              'A fad spikes and collapses; a durable trend compounds. The test is time: does popularity keep climbing, or did it already peak and fade?',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🏢',
          title: 'Find the Company',
          desc: {
            easy: 'Every popular thing is MADE by a company. When the thing gets popular, that company usually earns more money.',
            medium:
              'Behind every trend is a company that makes or sells it. As the trend grows, that company often sells more and gets bigger.',
            hard:
              'Trace each trend to the business that captures it. Rising demand for the product usually means rising revenue for its maker — that\'s the winner to identify.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🔭',
          title: 'Kids See It First',
          desc: {
            easy: 'Kids often notice cool new things WAY before grown-ups. Your eyes are a trend-spotting telescope!',
            medium:
              'New games, snacks, and apps often catch on with kids first. That means you spot trends earlier than most adults do — use it!',
            hard:
              'Youth culture is frequently an early indicator. Trends among kids often precede mainstream adoption, giving young observers a real informational lead.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Brainstorm: list trends you see around you ─────────────────────
    {
      kind: 'brainstorm',
      heading: '💡 Trends You See Right Now',
      prompt: {
        easy: "What's getting popular around you lately? Type 3 things everyone seems to want or do right now.",
        medium:
          "List 3 things you've noticed getting more popular lately — a game, snack, app, toy, or anything everyone's into.",
        hard:
          "Name 3 rising trends you've observed recently. Think across categories: games, food, apps, clothes, shows.",
      },
      minItems: 3,
      placeholder: 'e.g. a game everyone plays...',
      hints: [
        {
          easy: "Think about recess: what game or toy do the MOST kids have?",
          medium: "Look at school: what's the one thing everyone keeps talking about?",
          hard: "Scan your environment: what has visibly grown in popularity over the last month?",
        },
        {
          easy: "Think about snacks: is there a drink or candy everyone suddenly wants?",
          medium: "Check the snack aisle or lunchroom: any new food everyone's grabbing?",
          hard: "Consumer goods are great signals: any food or drink with surging demand?",
        },
        {
          easy: "Think about screens: a new app, show, or game everyone mentions?",
          medium: "Apps and shows spread fast — which one are friends recommending lately?",
          hard: "Digital trends move fastest: any app, game, or show gaining users quickly?",
        },
      ],
      closer: {
        easy: "Great spotting! Now you have a watch-list. The next step is checking if they keep GROWING. 🔭",
        medium: "Nice list! A real trend-spotter checks back later to see which ones keep growing and which fade.",
        hard: "Solid watch-list. Track these over time — the durable ones will separate from the fads.",
      },
    },

    // ─── Connect: real-world trend winners ──────────────────────────────
    {
      kind: 'connect',
      heading: '🌍 Trends That Made Companies Huge',
      concept: {
        easy: 'When a trend grows BIG, the company behind it can grow big too.',
        medium: 'Lots of giant companies got huge by riding an early trend they spotted.',
        hard: 'Many of the biggest businesses today rode an early trend to enormous scale.',
      },
      examples: [
        {
          emoji: '📱',
          who: 'Apple & Smartphones',
          story: {
            easy: "Phones used to just call people. Apple noticed people wanted ONE little screen for everything — and made the iPhone. Now almost everyone has one!",
            medium:
              "Apple spotted that people wanted apps, music, photos, and calls in one device. The smartphone trend exploded — and Apple became one of the most valuable companies ever.",
            hard:
              "Apple rode the smartphone trend from niche to near-universal. As adoption compounded for over a decade, iPhone revenue made Apple one of the world's most valuable firms.",
          },
        },
        {
          emoji: '🎮',
          who: 'A Game Everyone Plays',
          story: {
            easy: "Sometimes a game spreads across schools super fast — first a few kids, then the WHOLE school. The company that made it earns more every day.",
            medium:
              "Hit games like the ones that swept playgrounds started small, then grew and grew. The studios behind them earned tons as more kids joined in.",
            hard:
              "Viral games scale through network effects — each new player invites more. Studios that catch this curve early can see revenue accelerate dramatically.",
          },
        },
        {
          emoji: '🥤',
          who: 'A Snack That Took Over',
          story: {
            easy: "When one drink or snack becomes the thing EVERYONE wants, stores order way more of it — and the company that makes it gets bigger.",
            medium:
              "A popular new snack or drink can sweep from one store to thousands as demand grows. The maker scales up production and sales climb.",
            hard:
              "A breakout consumer product can ride word-of-mouth into mass distribution. Rising demand pulls the maker's revenue up as retailers expand shelf space.",
          },
        },
      ],
      kicker: {
        easy: 'The trick is the same every time: spot it early, watch it grow, find the company. 🔭',
        medium: 'Spot it → check it\'s growing → find the company. Same recipe, big results.',
        hard: 'Detect early, confirm momentum, identify the beneficiary — the trend-spotter\'s loop.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Trend-Spotter Check',
      questions: [
        {
          q: 'What is a trend?',
          options: [
            'Something getting more popular over time',
            'A toy only one kid owns',
            'A price that never changes',
          ],
          correct: 0,
        },
        {
          q: 'What is the difference between a fad and a real trend?',
          options: [
            'A fad spikes then disappears; a trend keeps growing',
            'A fad lasts forever; a trend ends fast',
            'There is no difference',
          ],
          correct: 0,
        },
        {
          q: 'When a trend grows, who usually benefits the most?',
          options: [
            'The company that makes or sells the popular thing',
            'Nobody benefits from a trend',
            'Only the people who dislike it',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Investing: 100 },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know your trend-spotting superpower: notice what's growing, check it keeps growing, and find the company behind it! 🔭",
        medium:
          "You've got the trend-spotter's loop: spot what's growing, tell a trend from a fad, and connect it to the winning company.",
        hard:
          "You can now detect rising trends, distinguish durable trends from fads, and map them to the businesses that benefit — a real investing skill.",
      },
      bonusTip: {
        easy: "Tip: just because something is popular TODAY doesn't mean it lasts. Keep watching! 👀",
        medium: "Pro tip: not every trend lasts — fads fade. The real skill is checking if it KEEPS growing.",
        hard: "Edge: popularity today isn't durability. Track the trajectory, not the snapshot, before you trust a trend.",
      },
    },

    // ─── Real-world mission: spot 3 trends, guess the company ───────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'spot-the-trend',
        emoji: '🔭',
        title: {
          easy: 'Become a Trend Detective',
          medium: 'Spot 3 growing trends and guess the company behind each',
          hard: 'Identify 3 rising trends and map each to its likely beneficiary',
        },
        pitch: {
          easy: "Look around school and home this month. Find 3 things getting MORE popular, and guess which company makes each one!",
          medium:
            "Be a trend detective this month: find 3 things getting more popular at school or home, and guess which company benefits from each.",
          hard:
            "Over this month, observe 3 trends rising in popularity around you and identify the company most likely to benefit from each.",
        },
        steps: [
          {
            emoji: '👀',
            text: {
              easy: 'Watch at school and home for things MORE kids suddenly want or do.',
              medium: 'Notice things getting popular this month — games, snacks, toys, apps, shows.',
              hard: 'Observe your environment for products or activities gaining popularity.',
            },
          },
          {
            emoji: '✍️',
            text: {
              easy: 'Write down 3 things you think are growing right now.',
              medium: 'List your top 3 rising trends.',
              hard: 'Record 3 candidate trends with where you noticed each.',
            },
          },
          {
            emoji: '📈',
            text: {
              easy: 'For each one, ask: is it getting MORE popular, or fading away?',
              medium: 'Judge each: still growing, or already a fading fad?',
              hard: 'Assess each trend\'s trajectory — accelerating, flat, or declining.',
            },
          },
          {
            emoji: '🏢',
            text: {
              easy: 'Guess which company makes or sells each thing. Ask a grown-up if you\'re not sure.',
              medium: 'Name the company behind each trend (a grown-up can help you check).',
              hard: 'Identify the likely beneficiary company for each trend.',
            },
          },
        ],
        reflection: [
          {
            key: 'three-trends',
            prompt: {
              easy: 'What 3 things did you spot getting more popular?',
              medium: 'List the 3 trends you spotted this month.',
              hard: 'Name the 3 trends you identified.',
            },
            type: 'longtext',
          },
          {
            key: 'growing-or-fading',
            prompt: {
              easy: 'Which one is growing the FASTEST? Which might be fading?',
              medium: 'Which trend looks strongest, and which might be a fad?',
              hard: 'Rank them by momentum — which has the strongest upward trajectory?',
            },
            type: 'text',
          },
          {
            key: 'companies',
            prompt: {
              easy: 'Which company do you think wins from each one?',
              medium: 'Which company benefits from each trend?',
              hard: 'Map each trend to its likely beneficiary company and explain why.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is just looking and guessing — no buying anything. Help your kid name the companies behind the things they spot.",
          medium:
            "Pure observation, no real investing. Help your child connect popular products to the companies that make them, and chat about why some trends last and some fade.",
          hard:
            "Observational only — no transactions. Help your child reason from product popularity to the parent company, and discuss the difference between a durable trend and a fad.",
        },
        printables: {
          trackers: [
            {
              title: 'My Trend-Spotter Log',
              columns: ['Trend I spotted', 'Growing or fading?', 'Company behind it'],
              rows: 3,
              note: 'Spot it → check if it\'s growing → find the company.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
