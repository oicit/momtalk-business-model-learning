/**
 * Build Your First Portfolio — the CAPSTONE of the Kids Investing lane.
 *
 * Everything the lane taught comes together here: a stock you know, an index
 * fund, maybe a bond. A "portfolio" is your WHOLE collection of investments.
 * The big four moves: pick a few DIFFERENT things, spread them out
 * (diversify), plan to hold for the long game, and track how they do.
 *
 * Beat order:
 *   intro → think-deeper (what makes a collection a portfolio?) →
 *   concept-cards (the 4 building blocks) → brainstorm (list YOUR picks,
 *   with hints) → calc-challenge (split 100⭐ across the picks) →
 *   connect (where portfolios show up) → quiz → outro →
 *   real-world-mission (build & track a pretend 5-item portfolio).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'first-portfolio',
  themeKey: 'index-funds',
  emoji: '🧩',
  title: 'Build Your First Portfolio',
  subtitle: {
    easy: "Put it ALL together — your own pretend collection of investments!",
    medium:
      "Capstone time: combine a stock, an index fund, and more into one smart, spread-out collection.",
    hard:
      "Assemble everything from the lane into a diversified, long-horizon portfolio — and learn to track it.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "You've learned about stocks, index funds, and saving for the long game. Now let's put it ALL together! Your whole collection of investments has a name: a PORTFOLIO. Today you build your very first one. 🧩",
        medium:
          "This is the big finish! You know stocks, index funds, and why time matters. A PORTFOLIO is your whole collection of investments — all your picks in one place. Let's design yours.",
        hard:
          "Capstone: a portfolio is the complete set of investments you hold. We'll combine single stocks, broad index funds, and maybe a bond into one diversified, long-horizon collection — and set up a way to track it.",
      },
    },

    // ─── Think-deeper: what turns picks into a portfolio? ───────────────
    {
      kind: 'think-deeper',
      heading: '🤔 What Makes a Portfolio?',
      intro: {
        easy: "Let's figure out what a good collection looks like.",
        medium: "Let's reason through what turns a few picks into a smart portfolio.",
        hard: "First-principles: what properties make a collection of holdings a sound portfolio?",
      },
      layers: [
        {
          question: {
            easy: "If you put ALL your stars into one company, what could go wrong?",
            medium: "What's the danger of putting everything into a single pick?",
            hard: "What risk do you take on by concentrating in one position?",
          },
          reveal: {
            easy:
              "If that one company has a bad day, ALL your money has a bad day. Yikes! One basket, all your eggs.",
            medium:
              "All your eggs sit in one basket. One bad surprise — and your whole collection drops. That's a lot of risk for one bet.",
            hard:
              "You shoulder full company-specific risk with no extra expected reward. Spreading out removes that risk for free.",
          },
        },
        {
          question: {
            easy: "So what should you do instead?",
            medium: "How do you make a collection steadier?",
            hard: "What design choice reduces that uncompensated risk?",
          },
          reveal: {
            easy:
              "Pick a FEW different things! A stock you like AND an index fund AND maybe a bond. If one zigs, another zags. That's spreading out — diversifying! 🪄",
            medium:
              "Mix different KINDS of investments: a single stock, a broad index fund, maybe a safe bond. When one dips, another may hold steady. That mix is your portfolio.",
            hard:
              "Diversify across types and names. Combining a stock, an index fund, and a bond lowers the swings without giving up the long-run growth.",
          },
        },
        {
          question: {
            easy: "Once you've built it, are you done forever?",
            medium: "After you build the portfolio, what's left to do?",
            hard: "What ongoing discipline does owning a portfolio require?",
          },
          reveal: {
            easy:
              "Two more things: plan to HOLD it a long time (the snowball needs years!), and CHECK on it now and then to see how it's doing. Build → hold → track. 📈",
            medium:
              "Plan for the long game — let time and compounding work — and track it every so often so you understand how each piece behaves. Build, hold, track.",
            hard:
              "Hold for a long horizon so compounding does the heavy lifting, and monitor periodically to learn how holdings move — not to panic-trade. Build, hold, track.",
          },
        },
      ],
    },

    // ─── Concept cards: the 4 building blocks ────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The 4 Building Blocks',
      subheading: 'Everything from the lane, snapped together like puzzle pieces.',
      cards: [
        {
          emoji: '🧩',
          title: 'A Portfolio = Your Whole Collection',
          desc: {
            easy: 'A portfolio is ALL your investments together in one place — like your whole sticker album, not just one sticker.',
            medium:
              'Your portfolio is the complete set of things you own: every stock, fund, and bond, all counted together.',
            hard:
              'A portfolio is the aggregate of all holdings — its behavior comes from the mix, not any single piece.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '🥚',
          title: 'Pick Different Things',
          desc: {
            easy: 'Don\'t go all-in on one! Mix a stock you know, an index fund, maybe a bond. Different pieces, different days.',
            medium:
              'Diversify: hold different KINDS of investments so a stumble in one barely dents the whole collection.',
            hard:
              'Mix asset types and names to diversify away company-specific risk while keeping market exposure.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🐢',
          title: 'Play the Long Game',
          desc: {
            easy: 'A portfolio grows slowly, like a snowball rolling downhill. Plan to keep it for YEARS, not days.',
            medium:
              'Hold for the long term. Compounding rewards patience — time in the market beats jumping in and out.',
            hard:
              'Long horizons let compounding dominate and smooth out short-term volatility — patience is the edge.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '📊',
          title: 'Track It',
          desc: {
            easy: 'Check on your collection now and then. Which went up? Which went down? Watching helps you learn!',
            medium:
              'Track your portfolio regularly so you understand how each piece behaves — knowledge, not panic.',
            hard:
              'Monitor holdings periodically to learn portfolio-level behavior, not to react emotionally to noise.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Brainstorm: list YOUR picks ─────────────────────────────────────
    {
      kind: 'brainstorm',
      heading: '🧠 Design YOUR Pretend Portfolio',
      prompt: {
        easy: "If you could pretend-build a portfolio, what would you put in it? List a few DIFFERENT things you'd pick!",
        medium:
          "Brainstorm 3–5 things you'd put in your pretend portfolio. Try to mix different kinds — a stock, an index fund, a bond.",
        hard:
          "List 3–5 holdings for a pretend portfolio. Aim for diversification across types and industries.",
      },
      minItems: 3,
      placeholder: 'e.g. Lego stock, an S&P 500 index fund, a bond...',
      hints: [
        {
          easy: 'Mix TYPES! A stock you know + an index fund + maybe a bond.',
          medium: 'Mix different KINDS: a single stock, a broad index fund, and a safer bond.',
          hard: 'Span asset types — equities, a broad index, and fixed income — for real diversification.',
        },
        {
          easy: "Don't put it ALL in one thing — spread out so one bad day won't hurt as much.",
          medium: "Avoid concentrating in one pick — spreading out lowers your risk.",
          hard: 'Avoid concentration; balance across names so no single holding dominates.',
        },
        {
          easy: 'Think LONG-TERM — pick things you\'d be happy to keep for years.',
          medium: 'Favor things worth holding for the long game, not quick guesses.',
          hard: 'Bias toward durable, long-horizon holdings rather than short-term bets.',
        },
      ],
      closer: {
        easy: "Nice mix! A spread-out collection is a strong portfolio. 🧩",
        medium: "Great — a mix of different types is exactly what makes a portfolio sturdy.",
        hard: "Well-balanced. Diversification across types is the backbone of a resilient portfolio.",
      },
    },

    // ─── Calc challenge: split 100⭐ across the picks ────────────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 Split Your 100 Stars',
      setup: {
        easy: "You have 100⭐ to spread across 5 picks, the SAME amount in each. How many ⭐ go into each pick?",
        medium:
          "You're equal-weighting a 5-item portfolio with 100⭐ total. How many ⭐ does each holding get?",
        hard:
          "Equal-weight 100⭐ across 5 holdings. Compute the per-holding allocation.",
      },
      problem: {
        givens: [
          { label: 'Total stars', value: 100, suffix: '⭐' },
          { label: 'Number of picks', value: 5 },
        ],
        answerLabel: 'Stars per pick',
        answer: 20,
        suffix: '⭐',
      },
      walkthrough: {
        easy: "100 split into 5 equal piles is 100 ÷ 5 = 20⭐ each. Equal piles means no single pick can hurt you too much!",
        medium:
          "100⭐ ÷ 5 = 20⭐ per holding. Equal weighting keeps any one pick from dominating your whole portfolio.",
        hard:
          "100 / 5 = 20⭐ each — an equal-weight allocation. You could also tilt the weights, but equal-weight is the simplest diversified start.",
      },
    },

    // ─── Connect: where portfolios show up in real life ─────────────────
    {
      kind: 'connect',
      heading: '🌍 Portfolios in Real Life',
      concept: {
        easy: 'Grown-ups, schools, and even whole countries build portfolios — collections spread across many things.',
        medium: 'The "spread it out and hold it" idea powers retirement savings, school funds, and huge investors.',
        hard: 'Diversified, long-horizon portfolios underpin most serious long-term investing.',
      },
      examples: [
        {
          emoji: '👵',
          who: 'Grandma\'s Retirement',
          story: {
            easy: "Many grown-ups save for retirement in a portfolio — some stocks, some index funds, some bonds — and keep it for decades.",
            medium:
              "Retirement accounts are portfolios: a mix of stock funds and bonds that grows over a working lifetime, then supports someone later.",
            hard:
              "Retirement portfolios blend equities and bonds, often shifting toward safer holdings over time — a textbook diversified long-horizon strategy.",
          },
        },
        {
          emoji: '🏫',
          who: 'A College Fund',
          story: {
            easy: "Big schools have giant portfolios — money spread across many things — that grow and help pay for the school.",
            medium:
              "University endowments are huge portfolios spread across stocks, bonds, and more, designed to grow and fund the school for years.",
            hard:
              "Endowments hold broadly diversified portfolios across asset classes to balance growth against the need for steady payouts.",
          },
        },
        {
          emoji: '🧙',
          who: "Buffett's Companies",
          story: {
            easy: "Even Warren Buffett owns LOTS of different companies, not just one. Spreading out is smart at every size!",
            medium:
              "Buffett's company holds dozens of businesses and stocks — a giant portfolio. Even the pros don't bet everything on one.",
            hard:
              "Berkshire Hathaway is itself a sprawling portfolio of wholly-owned businesses and equity stakes — concentration is risky even for experts.",
          },
        },
      ],
      kicker: {
        easy: 'A portfolio is just a smart collection — and now YOU can build one. 🧩',
        medium: 'From a kid\'s pretend basket to a giant fund, the recipe is the same: mix, hold, track.',
        hard: 'Same principles scale from a 5-item pretend portfolio to billion-dollar funds.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Portfolio Check',
      questions: [
        {
          q: 'What is a portfolio?',
          options: [
            'Your whole collection of investments together',
            'A single company you bet everything on',
            'A type of piggy bank',
          ],
          correct: 0,
        },
        {
          q: 'Why should a portfolio hold DIFFERENT kinds of things?',
          options: [
            'If one dips, the others can hold you up — spreading out lowers risk',
            'Because more pieces always means more money',
            'Because one big company is always safest',
          ],
          correct: 0,
        },
        {
          q: 'After you build a portfolio, what are the two smart habits?',
          options: [
            'Hold it for the long game, and track how it does',
            'Sell it the next day, and forget about it',
            'Put it all in one stock, and check it every hour',
          ],
          correct: 0,
        },
        {
          q: 'You split 100⭐ equally across 5 picks. How many in each?',
          options: ['20⭐', '5⭐', '100⭐'],
          correct: 0,
        },
      ],
      xpReward: 120,
      skillScores: { Investing: 120 },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "You did it — you built your first portfolio! A smart collection: a few different things, spread out, held for the long game. 🧩🎉",
        medium:
          "Capstone complete! You can now pull together stocks, index funds, and bonds into one diversified, long-term portfolio — the heart of smart investing.",
        hard:
          "You've assembled the whole lane: diversification, long horizons, and tracking — the foundation every real investor builds on.",
      },
      bonusTip: {
        easy: "Tip: a great portfolio is boring and patient — and that's its superpower. 🐢",
        medium: "Pro tip: the best portfolios are simple, spread out, and held calmly for years.",
        hard: "Edge: diversify, minimize cost, hold long, ignore the noise. Boring compounds.",
      },
    },

    // ─── Real-world mission: build & track a pretend 5-item portfolio ───
    {
      kind: 'real-world-mission',
      mission: {
        id: 'first-portfolio',
        emoji: '🧩',
        title: {
          easy: 'Build & Track Your Own Pretend Portfolio',
          medium: 'Build & track a pretend 5-item portfolio for a week',
          hard: 'Construct and monitor a diversified 5-item pretend portfolio',
        },
        pitch: {
          easy: "Pick 5 DIFFERENT things, share out 100 pretend ⭐, and watch your whole collection for a week!",
          medium:
            "Build a diversified 5-item portfolio with 100 pretend ⭐, give each a starting value, and track it for a week.",
          hard:
            "Assemble a 5-item diversified pretend portfolio (100⭐ notional), set day-1 values, and monitor portfolio-level moves across a week.",
        },
        steps: [
          {
            emoji: '✍️',
            text: {
              easy: 'Pick 5 DIFFERENT things — like a stock you know, an index fund, and a bond. Not all the same!',
              medium: 'Choose 5 holdings of different KINDS (e.g. a stock, an index fund, a bond) so it\'s diversified.',
              hard: 'Select 5 holdings spanning asset types and industries — make sure it\'s diversified, not concentrated.',
            },
          },
          {
            emoji: '🧩',
            text: {
              easy: 'Share out 100 pretend ⭐ across your 5 picks (20⭐ each is easy and fair).',
              medium: 'Allocate 100 pretend ⭐ across the 5 holdings — equal-weight 20⭐ each, or tilt if you like.',
              hard: 'Distribute 100⭐ across the 5 names; equal-weight is the simplest diversified start.',
            },
          },
          {
            emoji: '📈',
            text: {
              easy: 'With a grown-up, look up each pick\'s starting value today and write it down.',
              medium: 'With a grown-up, record each holding\'s starting value on day 1.',
              hard: 'Record day-1 values for each holding (with a grown-up).',
            },
          },
          {
            emoji: '🗓️',
            text: {
              easy: 'Check again after about a week. Which went UP? Which went DOWN?',
              medium: 'Re-check after ~1 week and note which holdings rose and which fell.',
              hard: 'Revisit after ~1 week; compute each holding\'s change and the portfolio total.',
            },
          },
          {
            emoji: '🤔',
            text: {
              easy: 'Think: did spreading out across 5 things help on the bad days?',
              medium: 'Reflect on whether diversifying across 5 holdings steadied your portfolio.',
              hard: 'Assess whether diversification dampened the swings versus any single holding.',
            },
          },
        ],
        reflection: [
          {
            key: 'portfolio-change',
            prompt: {
              easy: 'Did your WHOLE portfolio go up or down?',
              medium: 'Overall, did your 5-item portfolio rise or fall?',
              hard: 'Net direction of the aggregate portfolio over the week?',
            },
            type: 'text',
            placeholder: 'up / down / about the same',
          },
          {
            key: 'up-down',
            prompt: {
              easy: 'Which pick went UP the most? Which went DOWN?',
              medium: 'Which holding was your best performer, and which was worst?',
              hard: 'Identify the top and bottom contributors to portfolio return.',
            },
            type: 'text',
          },
          {
            key: 'spreading-helped',
            prompt: {
              easy: 'Did spreading out across 5 different things help? Why do you think so?',
              medium: 'Did diversifying across 5 holdings feel steadier than betting on one? Explain.',
              hard: 'Reflect on how diversification affected your portfolio\'s overall volatility.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "It's all pretend money! Use a free stock app or a quick search to look up values together. The goal is noticing how a spread-out collection behaves.",
          medium:
            "Pretend portfolio only. Look up values together using any free quote source — the learning goal is diversification and tracking, not real trading.",
          hard:
            "Paper/pretend portfolio only. Pull values from any free source; emphasize no real money is involved and the lesson is portfolio-level behavior.",
        },
        printables: {
          trackers: [
            {
              title: 'My First Portfolio',
              columns: ['What I picked', 'Type (stock / fund / bond)', 'Stars (⭐)', 'Day 1 value', 'This week value', 'Up or down?'],
              rows: 5,
              note: 'Aim for a MIX of types. Share 100⭐ across the 5 picks (20⭐ each is easy).',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
