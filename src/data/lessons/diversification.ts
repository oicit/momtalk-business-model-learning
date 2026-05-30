/**
 * Diversification — "Don't Put All Your Eggs in One Basket."
 *
 * The companion idea to index funds: spreading your stars across MANY
 * different things means one bad surprise can't sink you. If you bet all
 * 100⭐ on one company and it crashes, you lose everything. Split those
 * 100⭐ across 5 different things and one crash barely stings.
 *
 * Everything here is symbolic — pretend stars, pretend portfolios. No real
 * money, no real financial advice.
 *
 * Beat order:
 *   intro → think-deeper (what if your one thing breaks?) → concept-cards
 *   (what diversification is) → calc-challenge (100⭐ in 1 loser vs. 5
 *   things) → connect (real-world spreading) → quiz → outro →
 *   real-world-mission (list 5 different pretend things to spread across).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'diversification',
  themeKey: 'stocks',
  emoji: '🥚',
  title: "Don't Put All Your Eggs in One Basket",
  subtitle: {
    easy: "Spread your stars around — don't bet everything on ONE thing!",
    medium:
      "Spreading your money across many different things keeps one bad surprise from wiping you out.",
    hard:
      "Diversification: why splitting across uncorrelated holdings cushions losses without giving up much — kid-sized.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Imagine you carry ALL your eggs in one basket. Trip once — CRACK — every egg breaks! 🥚 But if you split them into 5 baskets and drop one, the other 4 are fine. Money works the same way. Let's learn the trick!",
        medium:
          "There's an old saying: don't put all your eggs in one basket. If you bet ALL your stars on one company and it stumbles, you lose everything. Today you'll learn how spreading out keeps you safe.",
        hard:
          "If you concentrate everything in one holding, you take the full hit of its bad luck. Spreading across many different things softens any single blow. That's diversification — let's see why it's so powerful.",
      },
    },

    // ─── Think-deeper: what if your one thing breaks? ───────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 What If Your One Thing Breaks?',
      intro: {
        easy: "Let's think this through together.",
        medium: "Let's reason about what happens when you bet on just one thing.",
        hard: "A first-principles look at concentration risk.",
      },
      layers: [
        {
          question: {
            easy: "You put ALL 100 of your stars into one toy company. It has a really bad year. What happens to your stars?",
            medium: "You put all 100 of your stars into a single company, and that company has a terrible year. What happens?",
            hard: "All 100⭐ sit in one company and that company drops sharply. What's the impact on your total?",
          },
          reveal: {
            easy:
              "ALL your stars go down with it. 😢 When everything is in one place, that one place decides your whole story.",
            medium:
              "Your entire stash drops, because there's nothing else to balance it out. One bad surprise = a bad day for ALL your stars.",
            hard:
              "You absorb the full loss. With no other holdings, the single name's outcome IS your portfolio's outcome — pure concentration risk.",
          },
        },
        {
          question: {
            easy: "Now what if those 100 stars were split — 20 in five different companies?",
            medium: "Now imagine those 100 stars were spread 20 each across five different companies. One crashes. What happens?",
            hard: "Now equal-weight 20⭐ across five different companies. One goes to zero. What's the portfolio effect?",
          },
          reveal: {
            easy:
              "Only the 20 in that one company are hurt. The other 80 are still fine! One bad apple can't spoil the whole basket. 🍎",
            medium:
              "You lose just the 20 in that company — the other 80 keep on going. The crash stings a little instead of wiping you out.",
            hard:
              "You lose only that 20⭐ slice; the remaining 80⭐ are unaffected. Spreading caps any single name's damage at its share of the whole.",
          },
        },
        {
          question: {
            easy: "So is it smarter to mix things up, or pick one and hope?",
            medium: "Which is the safer plan — one big bet, or many smaller ones spread around?",
            hard: "Which strategy reduces uncompensated risk: concentration or diversification?",
          },
          reveal: {
            easy:
              "Mix it up! Spreading out means no single oops can hurt you too badly. That's the egg-basket secret. 🪄",
            medium:
              "Spread it out. You give up the dream of one lucky jackpot, but you also avoid the nightmare of one total wipeout. Steadier wins.",
            hard:
              "Diversify. You shed company-specific risk for free — losers get cushioned by the rest, so your ride is far smoother.",
          },
        },
      ],
    },

    // ─── Concept cards: what diversification actually is ────────────────
    {
      kind: 'concept-cards',
      heading: 'What Is Diversification?',
      subheading: 'A fancy word for a simple idea: spread your stars across many different things.',
      cards: [
        {
          emoji: '🥚',
          title: 'Many Baskets',
          desc: {
            easy: "Don't carry all your eggs in one basket. Split them up so dropping one basket doesn't break them all.",
            medium:
              'Diversification means spreading your stars across many different places instead of piling them into one.',
            hard:
              'Diversification is holding many different, unrelated investments so no single one controls your whole result.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🛟',
          title: 'A Soft Cushion',
          desc: {
            easy: 'If one thing drops, the others catch you — like a cushion under a fall.',
            medium:
              'When one holding has a bad day, your other holdings cushion the fall. The whole pile barely wobbles.',
            hard:
              'Spreading out lowers how wildly your total bounces around — winners offset losers, smoothing the ride.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🌈',
          title: 'Mix It Up',
          desc: {
            easy: 'Pick DIFFERENT kinds of things — a toy company, a food company, a basket of many. Not five toy companies!',
            medium:
              'Real spreading means picking things that are different from each other, so they don\'t all go bad at the same time.',
            hard:
              'True diversification needs low-correlation holdings — different industries and types — so one bad event doesn\'t hit everything at once.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '🍎',
          title: 'One Bad Apple',
          desc: {
            easy: 'One bad apple can\'t spoil the whole basket — as long as the basket is full of OTHER good apples!',
            medium:
              'Because you own many things, one bad surprise only dents a small slice. Your other holdings carry on.',
            hard:
              'A single failure caps its damage at its portfolio weight, leaving the rest of your holdings to keep compounding.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc challenge: one loser vs. spread across five ───────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 Eggs in One Basket vs. Five',
      setup: {
        easy: "You split 100⭐ evenly across 5 things — 20⭐ in each. Bad luck! One of them drops all the way to 0⭐. The other 4 stay at 20⭐ each. How many ⭐ do you have left?",
        medium:
          "You spread 100⭐ equally across 5 holdings (20⭐ each). One holding crashes to 0⭐, the other 4 hold at 20⭐ each. How many ⭐ remain?",
        hard:
          "Equal-weight 100⭐ across 5 names at 20⭐ each. One goes to 0; the other four are unchanged. Compute the surviving total.",
      },
      problem: {
        givens: [
          { label: 'Total invested', value: 100, suffix: '⭐' },
          { label: 'Number of things', value: 5, suffix: '' },
          { label: 'Stars in each', value: 20, suffix: '⭐' },
          { label: 'How many crashed to 0', value: 1, suffix: '' },
        ],
        answerLabel: 'Stars left',
        answer: 80,
        suffix: '⭐',
      },
      walkthrough: {
        easy: "4 baskets are still full: 4 × 20⭐ = 80⭐. You only lost the 20⭐ in the crashed one. Now imagine all 100⭐ had been in THAT one thing — you'd have 0⭐! Spreading saved 80 of your stars. 🛟",
        medium:
          "The four survivors hold 4 × 20⭐ = 80⭐; you lost only the 20⭐ that crashed. If all 100⭐ had been in the loser, you'd be at 0⭐. Spreading turned a wipeout into a small bruise.",
        hard:
          "Surviving value = 4 × 20⭐ = 80⭐; loss is capped at the failed name's 20⭐ weight. Versus a concentrated bet on the loser (0⭐ remaining), diversification preserved 80% of capital. That's the cushion.",
      },
    },

    // ─── Connect: where this shows up in the real world ─────────────────
    {
      kind: 'connect',
      heading: '🌍 Spreading Out in Real Life',
      concept: {
        easy: 'Smart grown-ups spread their stuff around all the time — not just with money.',
        medium: 'The "don\'t bet it all on one thing" idea shows up everywhere people manage risk.',
        hard: 'Diversification is a universal risk-management principle, far beyond just investing.',
      },
      examples: [
        {
          emoji: '🧺',
          who: 'Index Funds',
          story: {
            easy: "Remember index funds? They're diversification in one easy buy — one basket holding hundreds of companies at once!",
            medium:
              "An index fund IS diversification made simple — a single purchase that spreads you across hundreds of companies automatically.",
            hard:
              "A broad index fund delivers instant, low-cost diversification across an entire market — the same eggs-and-baskets idea, packaged.",
          },
        },
        {
          emoji: '🍋',
          who: 'A Smart Lemonade Stand',
          story: {
            easy: "A clever stand sells lemonade AND cookies AND stickers. If nobody wants lemonade today, cookies still sell!",
            medium:
              "A stand that sells lemonade, cookies, and stickers won't go broke if one item flops — the others still bring in stars.",
            hard:
              "Offering multiple, different products hedges demand risk — a weak day for one line is offset by the others.",
          },
        },
        {
          emoji: '🌾',
          who: 'A Smart Farmer',
          story: {
            easy: "A farmer who plants corn AND tomatoes AND apples won't lose everything if bugs eat just the corn.",
            medium:
              "Farmers plant several different crops on purpose. If weather or bugs ruin one, the others still feed the family.",
            hard:
              "Crop diversification protects against weather and pest shocks that affect any single crop — risk spread across uncorrelated harvests.",
          },
        },
      ],
      kicker: {
        easy: 'Anywhere there\'s a surprise coming, spreading out keeps you safe. 🛟',
        medium: 'The same trick — never bet it all on one thing — protects money, businesses, and even gardens.',
        hard: 'Whenever outcomes are uncertain, diversification trades a tiny bit of upside for a lot less downside.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Diversification Check',
      questions: [
        {
          q: 'What does "don\'t put all your eggs in one basket" mean?',
          options: [
            'Spread your stars across many different things',
            'Always buy the most expensive thing',
            'Put everything into one winner',
          ],
          correct: 0,
        },
        {
          q: 'You split 100⭐ across 5 things. One crashes to 0. How many ⭐ are left?',
          options: [
            '80⭐ — only the crashed one is lost',
            '0⭐ — you lose everything',
            '100⭐ — nothing changes',
          ],
          correct: 0,
        },
        {
          q: 'Which is REALLY spread out?',
          options: [
            'A toy company, a food company, and an index fund',
            'Five different toy companies',
            'One giant toy company',
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
        easy: "Now you know the egg-basket secret: spread your stars around so one oops can't break them all! 🥚🛟",
        medium:
          "You learned how spreading across many different things turns a possible wipeout into a tiny bruise. Smart and steady!",
        hard:
          "You've internalized diversification — shedding single-name risk for free and smoothing your whole ride.",
      },
      bonusTip: {
        easy: "Tip: make sure your things are DIFFERENT from each other — not five of the same! 🌈",
        medium: "Pro tip: real spreading means different KINDS of things, so they don't all stumble together.",
        hard: "Edge: diversify across low-correlation holdings — different industries and types beat owning five lookalikes.",
      },
    },

    // ─── Real-world mission: spread across 5 different pretend things ────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'diversification',
        emoji: '🥚',
        title: {
          easy: 'Spread Your Stars Across 5 Different Things',
          medium: 'Build a spread-out pretend basket of 5 DIFFERENT things',
          hard: 'Design a diversified 5-holding pretend portfolio',
        },
        pitch: {
          easy: "List 5 DIFFERENT pretend things to put your stars in — and tell why mixing them up is safer!",
          medium:
            "Pick 5 different kinds of things (a toy company, a food company, an index fund, and more), split 100 pretend ⭐ across them, and explain why mixing is safer.",
          hard:
            "Assemble 5 deliberately different pretend holdings, equal-weight 100⭐ across them, and articulate the diversification rationale.",
        },
        steps: [
          {
            emoji: '✍️',
            text: {
              easy: 'Write down 5 DIFFERENT pretend things — like a toy company, a food company, a game maker, an index-fund basket, and a clothes shop.',
              medium: 'List 5 holdings from DIFFERENT areas — e.g. a toy company, a food company, a game maker, an index fund, a clothing brand.',
              hard: 'Select 5 pretend holdings across distinct industries/types (e.g. toys, food, games, a broad index fund, apparel).',
            },
          },
          {
            emoji: '⭐',
            text: {
              easy: 'Pretend you put 20⭐ into each one — that\'s 100⭐ all spread out!',
              medium: 'Allocate 20 pretend ⭐ to each (100⭐ total) — an equal-weight, spread-out basket.',
              hard: 'Equal-weight 20⭐ per holding for a 100⭐ notional, diversified basket.',
            },
          },
          {
            emoji: '🤔',
            text: {
              easy: 'Look at your list. Are they really DIFFERENT, or are they all kind of the same? Swap any twins!',
              medium: 'Check your picks: are they truly different from each other? Replace any that are too similar.',
              hard: 'Audit for correlation — replace lookalike holdings so the set is genuinely varied.',
            },
          },
          {
            emoji: '💭',
            text: {
              easy: 'Pretend one of them has a bad day and drops to 0⭐. How many ⭐ do you still have? (You kept 80!)',
              medium: 'Imagine one holding crashes to 0⭐. Count how many ⭐ survive in the other four.',
              hard: 'Stress-test: zero out one holding and compute surviving value (80⭐) vs. a concentrated bet (0⭐).',
            },
          },
        ],
        reflection: [
          {
            key: 'five-things',
            prompt: {
              easy: 'What 5 DIFFERENT things did you pick?',
              medium: 'List the 5 different holdings you chose.',
              hard: 'Enumerate your 5 holdings and their categories.',
            },
            type: 'longtext',
          },
          {
            key: 'survivors',
            prompt: {
              easy: 'If ONE crashed to 0⭐, how many ⭐ would you still have?',
              medium: 'If one holding dropped to 0⭐, what total would remain?',
              hard: 'Surviving total after zeroing one equal-weight holding?',
            },
            type: 'number',
            suffix: '⭐',
          },
          {
            key: 'why-safer',
            prompt: {
              easy: 'Why is mixing different things safer than betting all your stars on ONE?',
              medium: 'Explain why spreading across 5 different things is safer than one big bet.',
              hard: 'Reflect on how diversification reduced your basket\'s downside risk.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is all pretend — no real money! Help your kid notice that the 5 things are truly DIFFERENT from each other. The goal is the idea of spreading out, not real investing.",
          medium:
            "Pretend portfolio only — no real money or trading. Help your child check that their picks are genuinely different. The learning goal is understanding diversification.",
          hard:
            "Pretend/paper exercise only — emphasize no real money is involved. Coach toward genuinely uncorrelated picks; the objective is grasping diversification, not investing.",
        },
        printables: {
          worksheets: [
            {
              title: 'My Spread-Out Pretend Basket',
              blocks: [
                { label: 'Thing #1 (and what kind)', hint: 'e.g. a toy company', lines: 1, suffix: '20⭐' },
                { label: 'Thing #2 (and what kind)', hint: 'e.g. a food company', lines: 1, suffix: '20⭐' },
                { label: 'Thing #3 (and what kind)', hint: 'e.g. a game maker', lines: 1, suffix: '20⭐' },
                { label: 'Thing #4 (and what kind)', hint: 'e.g. an index-fund basket', lines: 1, suffix: '20⭐' },
                { label: 'Thing #5 (and what kind)', hint: 'e.g. a clothes shop', lines: 1, suffix: '20⭐' },
                { label: 'If one crashes to 0⭐, stars left', equation: '4 × 20⭐ = ___⭐' },
              ],
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
