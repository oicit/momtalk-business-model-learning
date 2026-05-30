/**
 * Dividends — "Getting Paid Just for Owning."
 *
 * Some companies share a slice of their profits with the people who own
 * them — a little payment called a DIVIDEND, paid just for holding the
 * share. You get paid to own it! And if you use that dividend to buy MORE
 * shares (reinvesting), the snowball grows even faster. Not every company
 * pays one — young, fast-growing companies often pour profits back into
 * growing instead.
 *
 * Lesson in the Stock Investing category (after Index Funds).
 *
 * Beat order:
 *   intro → think-deeper (why would a company pay you?) →
 *   concept-cards (what a dividend is) → calc-challenge (10 shares × 2⭐) →
 *   connect (where dividends show up) → quiz → outro →
 *   real-world-mission (find one real dividend-paying company).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'dividends',
  themeKey: 'stocks',
  emoji: '💵',
  title: 'Dividends',
  subtitle: {
    easy: 'Some companies pay you a little something just for owning them!',
    medium:
      "A dividend is a slice of a company's profit, handed to the people who own its shares — for free, just for holding.",
    hard:
      "Dividends, profit-sharing with shareholders, reinvestment compounding, and why some companies pay while others don't — kid-sized.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Imagine you own a tiny piece of a company. It makes money — and then it gives a little bit back to YOU, just for owning it. That little payment is called a DIVIDEND. You get paid to own it! 💵",
        medium:
          "You already know a share is a slice of a company. Here's a surprise: some companies take part of the profit they make and hand it out to the people who own shares. That gift is called a dividend — money for just holding on.",
        hard:
          "When a company earns a profit, it can keep that money to grow, or it can share some with its owners. The share it pays out to shareholders is called a dividend. Today we'll see how it works and why it's so powerful.",
      },
    },

    // ─── Think-deeper: why would a company pay you? ─────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Would a Company Pay YOU?',
      intro: {
        easy: "Let's figure out why a company gives money away.",
        medium: "Let's reason through why a company would hand out cash to owners.",
        hard: 'First-principles look at why companies distribute profits.',
      },
      layers: [
        {
          question: {
            easy: "When you own a share, whose company is it — a little bit?",
            medium: 'If you own a share, what does that make you to the company?',
            hard: 'What is your relationship to a company when you hold its shares?',
          },
          reveal: {
            easy:
              "It's a little bit YOURS! Owning a share makes you a tiny owner. So when the company does well, you should get a little of the good stuff too. 🎉",
            medium:
              "You're a part-owner. Owning a share means you own a sliver of the whole company — so a piece of its profit can rightly come to you.",
            hard:
              'You become a fractional owner (a shareholder). As a part-owner you have a claim on a proportional slice of the profits the company chooses to distribute.',
          },
        },
        {
          question: {
            easy: 'What can a company do with the money it earns?',
            medium: 'A company makes a profit. What are its choices for that money?',
            hard: 'What are a profitable company’s options for its earnings?',
          },
          reveal: {
            easy:
              "Two big choices! It can KEEP the money to grow bigger (build new things), or SHARE some with its owners as a dividend. Lots of companies do a little of both.",
            medium:
              "It can reinvest the money to grow — new stores, new products — or pay some out to owners as a dividend. Many do a mix of both.",
            hard:
              'It can retain earnings to fund growth and projects, or return capital to shareholders via dividends. The split reflects how many good growth opportunities it has.',
          },
        },
        {
          question: {
            easy: 'Does EVERY company pay you a dividend?',
            medium: 'Do all companies pay dividends?',
            hard: 'Is paying a dividend universal across companies?',
          },
          reveal: {
            easy:
              "Nope! Young, fast-growing companies often keep ALL their money to grow bigger first. Older, steady companies are more likely to share. Both can be smart! 🌱",
            medium:
              "No. Young companies with lots of growing to do usually keep every penny to expand. Big, steady companies that already grew are more likely to pay dividends.",
            hard:
              'No. High-growth firms typically retain earnings to reinvest at high returns, while mature firms with steadier cash flows tend to pay dividends. Neither is automatically better.',
          },
        },
      ],
    },

    // ─── Concept cards: what a dividend actually is ─────────────────────
    {
      kind: 'concept-cards',
      heading: 'What Is a Dividend?',
      subheading: 'A little payment a company gives its owners, just for holding the share.',
      cards: [
        {
          emoji: '💵',
          title: 'Paid Just for Owning',
          desc: {
            easy: "A dividend is a little payment you get just for owning a share. You don't have to sell anything — it just shows up!",
            medium:
              'A dividend is cash a company pays to each share you own. You keep the share AND get the payment — no selling needed.',
            hard:
              'A dividend is a periodic cash payment made per share held. You retain ownership and still receive the distribution — income on top of the share itself.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '🍰',
          title: 'A Slice of the Profit',
          desc: {
            easy: 'The company makes money, then shares a slice with its owners — like cutting a cake and giving everyone a piece.',
            medium:
              'Dividends come out of the profit the company earns. The more shares you hold, the bigger your slice of that profit-cake.',
            hard:
              'Dividends are paid from after-tax profits. Each shareholder receives an amount proportional to the number of shares they hold.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '⛄',
          title: 'Reinvest to Snowball',
          desc: {
            easy: 'Use your dividend to buy MORE shares! Then next time you get an even bigger dividend. It snowballs! ⛄',
            medium:
              'If you spend each dividend on more shares (reinvesting), you own more, so the next dividend is bigger — a growing snowball.',
            hard:
              'Reinvesting dividends buys additional shares, which generate more dividends — a compounding loop that accelerates growth over time.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🌱',
          title: 'Not Everyone Pays',
          desc: {
            easy: "Some companies don't pay a dividend yet — they're busy growing! That can be smart too.",
            medium:
              'Young, fast-growing companies often keep all their profit to grow bigger instead of paying it out. No dividend doesn’t mean a bad company.',
            hard:
              'Growth companies frequently pay no dividend, choosing to reinvest at high expected returns. Dividend policy reflects strategy, not quality.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc challenge: 10 shares × 2⭐ dividend ───────────────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 How Much Do You Get Paid?',
      setup: {
        easy: "You own 10 pretend shares. The company pays a dividend of 2⭐ for each share you own. How many ⭐ do you get in total?",
        medium:
          "You hold 10 pretend shares, and the company pays a 2⭐ dividend per share. How many ⭐ does your dividend add up to?",
        hard:
          "With 10 shares and a per-share dividend of 2⭐, compute your total dividend payment.",
      },
      problem: {
        givens: [
          { label: 'Shares you own', value: 10, suffix: '' },
          { label: 'Dividend per share', value: 2, suffix: '⭐' },
        ],
        answerLabel: 'Total stars paid to you',
        answer: 20,
        suffix: '⭐',
      },
      walkthrough: {
        easy: "10 shares × 2⭐ each = 20⭐! And here's the magic: if you use those 20⭐ to buy MORE shares, next time you'll own more — so your next dividend will be even bigger. ⛄",
        medium:
          "10 × 2⭐ = 20⭐. Now reinvest: spend that 20⭐ on more shares, and you own more than 10 next time — so the next dividend is bigger. That's the snowball.",
        hard:
          "10 shares × 2⭐/share = 20⭐. Reinvesting buys more shares, raising your share count, which raises the next payout — compounding in action.",
      },
    },

    // ─── Connect: where dividends show up in the real world ─────────────
    {
      kind: 'connect',
      heading: '🌍 Dividends in Real Life',
      concept: {
        easy: 'Getting paid just for owning is real — lots of grown-ups use it to grow their money slowly.',
        medium: 'The "get paid to hold" idea quietly helps people build wealth over many years.',
        hard: 'Dividend income and reinvestment are a core part of long-horizon investing.',
      },
      examples: [
        {
          emoji: '🥤',
          who: 'Steady Old Companies',
          story: {
            easy: "Big, old companies that sell things people always buy — like drinks and snacks — often pay a dividend year after year.",
            medium:
              "Long-established companies with steady sales (think everyday drinks or household goods) often pay dividends regularly, year after year.",
            hard:
              "Mature consumer-staples firms with predictable cash flows are classic dividend payers, often raising the payout over decades.",
          },
        },
        {
          emoji: '⛄',
          who: 'The Reinvest Snowball',
          story: {
            easy: "Many grown-ups tell the company, 'use my dividend to buy me more shares!' Over years, that snowball gets HUGE.",
            medium:
              "Investors often turn on 'automatic reinvesting' so every dividend buys more shares. Over decades that compounding can grow a lot.",
            hard:
              "Automatic dividend reinvestment (a DRIP) compounds share count over time — a meaningful chunk of long-run stock returns comes from reinvested dividends.",
          },
        },
        {
          emoji: '🚀',
          who: 'The Growers Who Skip It',
          story: {
            easy: "Some exciting fast-growing companies pay NO dividend on purpose — they spend every penny growing bigger and bigger.",
            medium:
              "Many fast-growing companies pay no dividend at all, choosing to pour profits back into growing. Their owners hope the SHARE grows instead.",
            hard:
              "Growth companies often retain all earnings, betting reinvestment creates more value than a payout would — owners seek price appreciation, not income.",
          },
        },
      ],
      kicker: {
        easy: 'Get paid to own, or grow really fast — companies pick what fits them. 💵',
        medium: 'Dividends or pure growth: two different paths, both can win.',
        hard: 'Payout vs. reinvestment is a strategic choice, not a sign of a good or bad company.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Dividend Check',
      questions: [
        {
          q: 'What is a dividend?',
          options: [
            'A little payment a company gives its owners, just for holding a share',
            'A fee you pay to buy a share',
            'A loan you give to a company',
          ],
          correct: 0,
        },
        {
          q: 'What can make your next dividend even bigger?',
          options: [
            'Reinvesting it to buy more shares',
            'Selling all your shares',
            'Hiding your shares in a drawer',
          ],
          correct: 0,
        },
        {
          q: 'Do all companies pay a dividend?',
          options: [
            'No — young, fast-growing companies often keep the money to grow',
            'Yes, every single company pays one',
            'Only companies that are losing money pay one',
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
        easy: "Now you know a cool secret: some companies PAY you just for owning them — and if you reinvest, it snowballs! 💵⛄",
        medium:
          "You learned what a dividend is, why companies pay them, and how reinvesting turns a small payment into a growing snowball.",
        hard:
          "You've got dividends down: profit-sharing with owners, reinvestment compounding, and why payout policy varies by company.",
      },
      bonusTip: {
        easy: 'Tip: reinvesting your dividends is like planting your money so it grows MORE money. 🌱',
        medium: "Pro tip: reinvested dividends are a big, quiet part of how investments grow over many years.",
        hard: 'Edge: automatic reinvestment + patience lets dividend compounding do heavy lifting over decades.',
      },
    },

    // ─── Real-world mission: find one real dividend-paying company ──────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'dividends',
        emoji: '💵',
        title: {
          easy: 'Find a Company That Pays a Dividend',
          medium: 'Hunt for one real dividend-paying company',
          hard: 'Identify and record one real dividend payer',
        },
        pitch: {
          easy: "With a grown-up, find ONE real company that pays a dividend — and write down what it pays. It's all pretend looking, no money needed!",
          medium:
            "With a grown-up's help, look up one real company that pays a dividend and note how much it pays per share. Just looking — no buying.",
          hard:
            "With a grown-up, research a single real dividend-paying company and record its per-share dividend. Observation only, no transactions.",
        },
        steps: [
          {
            emoji: '🧑‍🤝‍🧑',
            text: {
              easy: 'Sit with a grown-up and pick a big company you both know.',
              medium: 'With a grown-up, choose a well-known company to look into.',
              hard: 'With a grown-up, select a recognizable company to research.',
            },
          },
          {
            emoji: '🔍',
            text: {
              easy: 'Look it up together and ask: "Does this company pay a dividend?"',
              medium: 'Search together to find out whether that company pays a dividend.',
              hard: 'Look up whether the company currently pays a dividend.',
            },
          },
          {
            emoji: '✍️',
            text: {
              easy: 'If it pays one, write down how much it pays for each share.',
              medium: 'If it does, write down its dividend amount per share.',
              hard: 'Record the dividend-per-share figure if one exists.',
            },
          },
          {
            emoji: '💭',
            text: {
              easy: 'If it does NOT pay one, that’s cool too — maybe it’s busy growing!',
              medium: 'If it pays none, note that — it may be reinvesting to grow instead.',
              hard: 'If none is paid, note it likely retains earnings to reinvest.',
            },
          },
        ],
        reflection: [
          {
            key: 'company-name',
            prompt: {
              easy: 'Which company did you look up?',
              medium: 'What company did you research?',
              hard: 'Which company did you examine?',
            },
            type: 'text',
            placeholder: 'company name',
          },
          {
            key: 'dividend-amount',
            prompt: {
              easy: 'Does it pay a dividend? If yes, how much for each share?',
              medium: 'Does it pay a dividend, and if so, how much per share?',
              hard: 'Does it pay a dividend? If so, the per-share amount?',
            },
            type: 'text',
            placeholder: 'e.g. yes, ___ per share / no dividend',
          },
          {
            key: 'insight',
            prompt: {
              easy: 'Why do you think this company pays (or skips) a dividend?',
              medium: 'Why might this company choose to pay — or not pay — a dividend?',
              hard: 'Reflect on why this company’s dividend policy might fit its strategy.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "Look it up together using any free stock app or a quick search. It's pretend learning only — no buying anything. The goal is noticing that some companies pay and some don't.",
          medium:
            "Use any free quote source or search to check a company's dividend together. This is observational only — no real investing. The learning goal is recognizing dividends exist and vary.",
          hard:
            "Pull dividend info from any free source together. Strictly observational — no transactions. Emphasize that dividend policy differs across companies and reflects strategy.",
        },
        printables: {
          worksheets: [
            {
              title: 'My Dividend Detective Sheet',
              blocks: [
                { label: 'Company I looked up', lines: 1 },
                { label: 'Does it pay a dividend?', hint: 'Circle one: YES / NO', lines: 1 },
                { label: 'If yes, how much per share?', suffix: 'per share', lines: 1 },
                { label: 'Why I think it pays (or skips) a dividend', lines: 3 },
              ],
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
