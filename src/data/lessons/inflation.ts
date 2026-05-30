/**
 * Inflation — "Why Money Buys Less Over Time."
 *
 * The big idea: prices slowly creep up year after year, so the SAME money
 * buys a little less as time passes. A candy that cost 1⭐ today might cost
 * 2⭐ years from now. That's inflation. Money hidden under the bed quietly
 * loses its power — which is exactly WHY people save smart and invest, so
 * their money grows faster than prices rise.
 *
 * Foundations category. Education-first, symbolic ⭐ only; the mission is
 * purely observational (ask a grown-up what things used to cost).
 *
 * Beat order:
 *   intro → think-deeper (why do prices go up?) → concept-cards (what
 *   inflation is) → calc-challenge (1⭐ candy rising ~5%/year) → connect
 *   (sodas, allowances, grandma's prices) → quiz → outro →
 *   real-world-mission (interview a grown-up about old prices).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'inflation',
  themeKey: 'inflation',
  emoji: '📊',
  title: 'Inflation',
  subtitle: {
    easy: 'Why the same money buys LESS as the years go by!',
    medium:
      'Prices slowly creep up over time — so money sitting still quietly loses power.',
    hard:
      'Why prices rise over time, how it erodes the value of idle money, and why that pushes people to save and invest — kid-sized.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'thinking',
      text: {
        easy:
          "Imagine a candy costs 1⭐ today. Years from now, that SAME candy might cost 2⭐! The candy didn't change — but the price went up. When prices slowly climb like that, it's called INFLATION. 📊",
        medium:
          "Have you ever heard a grown-up say 'things used to be so cheap'? They're right! Prices slowly creep up over the years. That slow climb is called inflation — and it means your money buys a little less over time.",
        hard:
          "Inflation is the slow, steady rise in prices across an economy. The same money buys less each year, so money that just sits still actually loses purchasing power. Let's see why that matters — and what smart people do about it.",
      },
    },

    // ─── Think-deeper: why do prices go up? ─────────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Do Prices Creep Up?',
      intro: {
        easy: "Let's figure this out together.",
        medium: "Let's reason through why prices slowly rise.",
        hard: 'A first-principles look at why money loses power over time.',
      },
      layers: [
        {
          question: {
            easy: 'If a candy cost 1⭐ but now costs 2⭐, did your 1⭐ get weaker or stronger?',
            medium: 'When a candy costs more stars than before, what happened to the power of each star?',
            hard: 'If the price of the same good rises, what happened to the purchasing power of each unit of money?',
          },
          reveal: {
            easy:
              "Your 1⭐ got WEAKER! It used to buy a whole candy. Now it only buys half. Same star — but it does less. 😮",
            medium:
              'Each star got weaker. It used to buy a whole candy; now it buys half a candy. The money didn\'t shrink — what it can BUY shrank.',
            hard:
              'Each unit of money lost purchasing power. The coin is the same, but the basket of goods it can buy got smaller. That erosion IS inflation.',
          },
        },
        {
          question: {
            easy: 'So what happens to stars you hide under your bed for many years?',
            medium: 'If you hide your money in a jar for 10 years, will it still buy the same amount?',
            hard: 'What happens to idle cash held outside any growing asset over a long period?',
          },
          reveal: {
            easy:
              'Uh oh — the stars just sit there, but prices keep climbing! So your hidden stars buy LESS than before. Money under the bed slowly loses its power. 🛏️',
            medium:
              'The money stays the same number, but prices rose around it — so it buys less than it used to. Cash that just sits still quietly loses power year after year.',
            hard:
              'Nominal value stays flat while prices climb, so real value (what it can buy) falls. Idle cash silently erodes — doing nothing is not actually "safe."',
          },
        },
        {
          question: {
            easy: 'So what could you do so your stars DON\'T lose their power?',
            medium: 'What can you do so your money grows faster than prices rise?',
            hard: 'How do people protect against — or outpace — inflation over time?',
          },
          reveal: {
            easy:
              'Put your stars somewhere they can GROW! If your stars grow faster than prices climb, you stay ahead. That\'s why people save smart and invest. 🌱',
            medium:
              'Instead of hiding it, you put money where it can grow — like saving accounts or investments. If it grows faster than prices rise, you win the race against inflation.',
            hard:
              'You invest in assets expected to grow faster than inflation, so real value rises over time. Beating inflation is the core reason long-term investing matters.',
          },
        },
      ],
    },

    // ─── Concept cards: what inflation is ───────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'What Is Inflation?',
      subheading: 'A few simple ideas that explain why prices creep up.',
      cards: [
        {
          emoji: '📈',
          title: 'Prices Slowly Climb',
          desc: {
            easy: 'Year by year, most things cost a little more. A snack, a toy, a movie ticket — prices creep up over time.',
            medium:
              'Inflation means prices rise gradually across almost everything — food, toys, tickets. Each year a little more, like a slow staircase up.',
            hard:
              'Inflation is the general, ongoing rise in the price level of goods and services across an economy, usually measured per year.',
          },
          color: '#FFF0E8',
        },
        {
          emoji: '⭐',
          title: 'Money Buys Less',
          desc: {
            easy: 'The same star buys LESS than it used to. The star didn\'t change — what it can buy got smaller.',
            medium:
              'As prices rise, each dollar (or star) buys a little less. The money\'s "buying power" shrinks even though the number stays the same.',
            hard:
              'Purchasing power falls as the price level rises. Nominal amounts stay constant while real value declines.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🛏️',
          title: 'Hiding Money Loses',
          desc: {
            easy: 'Stars hidden under the bed don\'t grow — but prices do. So hidden money quietly loses power over the years.',
            medium:
              'Money that just sits in a jar stays the same number while prices climb around it. Doing nothing actually loses value over time.',
            hard:
              'Idle cash erodes in real terms during inflation; the appearance of safety masks a steady loss of purchasing power.',
          },
          color: '#FDE8E8',
        },
        {
          emoji: '🌱',
          title: 'Why We Grow Money',
          desc: {
            easy: 'If your money GROWS faster than prices climb, you stay ahead! That\'s why people save smart and invest.',
            medium:
              'To beat inflation, you put money where it can grow — savings and investments — so it grows faster than prices rise.',
            hard:
              'Investing aims to earn a return above the inflation rate, so real wealth grows rather than erodes — the central reason to invest.',
          },
          color: '#E5FAF1',
        },
      ],
    },

    // ─── Calc challenge: a 1⭐ candy rising ~5% a year ───────────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 How Much More Next Year?',
      setup: {
        easy: "A candy costs 100⭐ today. Each year its price goes up about 5 out of every 100 stars. About how many ⭐ MORE will it cost next year?",
        medium:
          "A candy costs 100⭐ today, and prices rise about 5% a year. About how many ⭐ more will that same candy cost next year?",
        hard:
          "With ~5% annual inflation and a 100⭐ price today, compute the approximate one-year price increase in ⭐.",
      },
      problem: {
        givens: [
          { label: 'Candy costs today', value: 100, suffix: '⭐' },
          { label: 'Prices rise about', value: 5, suffix: '%' },
        ],
        answerLabel: 'Extra stars next year',
        answer: 5,
        suffix: '⭐',
      },
      walkthrough: {
        easy: "5 out of 100 is 5. So next year the candy costs about 105⭐ — 5⭐ more! And the year after, it climbs again. Tiny steps, but they add up over many years.",
        medium:
          "5% of 100⭐ = 5⭐, so the candy costs ~105⭐ next year. The sneaky part: the next year's 5% is on 105⭐, so prices snowball slowly upward over time.",
        hard:
          "0.05 × 100 = 5⭐ → ~105⭐. Compounded, the price grows roughly 100 × 1.05^n. Over decades that exponent quietly doubles prices — which is why beating inflation matters.",
      },
    },

    // ─── Connect: where this shows up in the real world ─────────────────
    {
      kind: 'connect',
      heading: '🌍 Inflation in Real Life',
      concept: {
        easy: 'Grown-ups see inflation everywhere — and it\'s why old prices sound SO cheap.',
        medium: 'The "prices creep up" idea explains allowances, candy bars, and why grandma\'s stories sound unbelievable.',
        hard: 'Inflation shows up across everyday prices and is why historical prices look strikingly low.',
      },
      examples: [
        {
          emoji: '🥤',
          who: "Grandma's Dime Soda",
          story: {
            easy: "Long ago, a grown-up could buy a soda for a dime — just 10 cents! Today the same soda costs way more. That's inflation over many years.",
            medium:
              "Many grandparents remember sodas costing about a dime (10¢). Today that same soda might cost $2 or more. Prices crept up year after year.",
            hard:
              "A soda that cost ~10¢ decades ago can cost $2+ today — roughly a 20× rise. That long-run climb is inflation compounding over many years.",
          },
        },
        {
          emoji: '🎟️',
          who: 'The Movie Ticket',
          story: {
            easy: "A movie ticket used to cost just a few coins. Now it costs a lot more — even though it's still just a movie!",
            medium:
              "Grown-ups paid a fraction of today\'s price for a movie ticket when they were kids. Same movie experience, much higher price — that\'s inflation.",
            hard:
              "Movie ticket prices have risen many-fold over decades; the experience is similar, but the nominal price reflects accumulated inflation.",
          },
        },
        {
          emoji: '💵',
          who: 'Your Allowance',
          story: {
            easy: "If prices keep creeping up but your allowance stays the same, it buys LESS each year. That's why grown-ups ask for raises!",
            medium:
              "If your allowance stays the same while candy and toys cost more, it buys less over time. That\'s why people want their pay to keep up with inflation.",
            hard:
              "Flat income against rising prices means falling real income — which is why wages and allowances need to rise just to keep the same buying power.",
          },
        },
      ],
      kicker: {
        easy: 'So the trick is simple: help your stars GROW faster than prices climb. 🌱',
        medium: 'The lesson: don\'t let money sit still — help it grow faster than prices rise.',
        hard: 'Beating inflation — earning a return above the price-level rise — is the quiet goal behind smart saving and investing.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Inflation Check',
      questions: [
        {
          q: 'What is inflation?',
          options: [
            'Prices slowly going up over time',
            'A candy that never changes price',
            'Money growing on its own under your bed',
          ],
          correct: 0,
        },
        {
          q: 'If prices keep rising, what happens to money you hide and never use?',
          options: [
            'It slowly buys less and less',
            'It grows bigger by itself',
            'It stays exactly as powerful forever',
          ],
          correct: 0,
        },
        {
          q: 'Why do people save smart and invest instead of hiding money?',
          options: [
            'So their money can grow faster than prices climb',
            'Because hiding money makes prices go down',
            'Because candy is always free',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Foundations: 100 },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'happy',
      text: {
        easy: "Now you know why old prices sound SO cheap: prices slowly creep up, so money buys less over time. That\'s inflation! 📊",
        medium:
          "You learned a big secret: prices slowly rise, so money sitting still loses power — and that\'s exactly why growing your money matters.",
        hard:
          "You\'ve grasped inflation: the steady rise in prices erodes idle money, which is the core reason to save smart and invest for the long run.",
      },
      bonusTip: {
        easy: "Tip: stars that grow beat stars that hide. 🌱",
        medium: "Pro tip: the goal is for your money to grow FASTER than prices rise.",
        hard: "Edge: aim for returns above the inflation rate so your real buying power grows, not shrinks.",
      },
    },

    // ─── Real-world mission: interview a grown-up about old prices ──────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'inflation',
        emoji: '📊',
        title: {
          easy: 'Be a Price Detective!',
          medium: 'Interview a grown-up about old prices',
          hard: 'Investigate price changes across a generation',
        },
        pitch: {
          easy: "Ask a grown-up what something cost when THEY were little — then compare it to today. You\'ll see inflation with your own eyes!",
          medium:
            "Pick something fun — candy, a toy, or a movie ticket — and ask a grown-up what it cost when they were a kid. Compare it to today\'s price.",
          hard:
            "Interview an older relative about the price of a familiar item in their childhood, then compare it to today to observe inflation firsthand.",
        },
        steps: [
          {
            emoji: '🍬',
            text: {
              easy: 'Pick something you love — like candy, a toy, or a movie ticket.',
              medium: 'Choose one item to ask about — candy, a toy, or a movie ticket.',
              hard: 'Select a familiar consumer item to track across time.',
            },
          },
          {
            emoji: '🗣️',
            text: {
              easy: 'Ask a grown-up: "What did this cost when YOU were little?"',
              medium: 'Ask a grown-up what that item cost when they were your age.',
              hard: 'Ask an older relative the approximate price of that item in their childhood.',
            },
          },
          {
            emoji: '🛒',
            text: {
              easy: 'Find out what it costs today.',
              medium: 'Look up or notice what the same item costs today.',
              hard: 'Record today\'s approximate price for the same item.',
            },
          },
          {
            emoji: '🔍',
            text: {
              easy: 'Compare! How much MORE does it cost now? That\'s inflation!',
              medium: 'Compare the two prices. How much did it climb? That gap is inflation.',
              hard: 'Compute the difference and reflect on the cumulative inflation over those years.',
            },
          },
        ],
        reflection: [
          {
            key: 'item',
            prompt: {
              easy: 'What item did you ask about?',
              medium: 'Which item did you investigate?',
              hard: 'Which item did you track?',
            },
            type: 'text',
            placeholder: 'candy, toy, movie ticket...',
          },
          {
            key: 'old-price',
            prompt: {
              easy: 'What did it cost back then?',
              medium: 'What was the price when the grown-up was little?',
              hard: 'Approximate historical price?',
            },
            type: 'text',
            suffix: '$',
          },
          {
            key: 'new-price',
            prompt: {
              easy: 'What does it cost today?',
              medium: 'What is the price today?',
              hard: 'Approximate current price?',
            },
            type: 'text',
            suffix: '$',
          },
          {
            key: 'insight',
            prompt: {
              easy: 'Did the price go UP? How did that surprise you?',
              medium: 'How much did the price climb, and what surprised you about it?',
              hard: 'Reflect on the size of the change and what it reveals about inflation over time.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is just a fun chat — no shopping needed! Sharing your own childhood prices makes inflation real and memorable for your kid.",
          medium:
            "No purchases required — this is purely a conversation. Your own memories of old prices are the perfect teaching tool here.",
          hard:
            "Observational only; no transactions involved. Personal recollections of past prices vividly illustrate cumulative inflation for the child.",
        },
      },
    },
  ],
};

export default lesson;
