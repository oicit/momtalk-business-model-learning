/**
 * Bonds — "Lending Your Money."
 *
 * The other half of investing: with a STOCK you OWN a slice of a company;
 * with a BOND you LEND your money to a company or the government, and they
 * promise to pay you back later PLUS a little extra (interest) for letting
 * them borrow it.
 *
 * Big idea: bonds are usually safer than stocks but grow slower — the
 * classic trade-off between SAFETY and REWARD.
 *
 * Beat order:
 *   intro → think-deeper (why would someone pay you to borrow?) →
 *   concept-cards (own vs. lend, interest, the trade-off) →
 *   calc-challenge (lend 100⭐ at 5% → get 105⭐) →
 *   connect (governments, savings bonds, your bank) → quiz → outro →
 *   real-world-mission (a pretend bond deal with Mom Inc / Dad Bank).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'bonds',
  themeKey: 'bonds',
  emoji: '🤝',
  title: 'Bonds — Lending Your Money',
  subtitle: {
    easy: "Lend your money and get it back later — PLUS a little extra for being kind enough to lend!",
    medium:
      "Stocks mean you OWN a piece. Bonds mean you LEND your money and get paid back with interest. Safer, but slower.",
    hard:
      "Bonds, interest, and the safety-vs-reward trade-off — why lending grows steadier and slower than owning.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "You already know a stock means you OWN a tiny piece of a company. But there's another way to grow money: you can LEND it! When you buy a BOND, you let a company or the government borrow your money — and they pay you back later plus a little extra. 🤝",
        medium:
          "Last time you owned a slice of a company. Today is the flip side: instead of OWNING, you LEND. A bond is a promise — you hand over your money now, and you get it all back later plus a thank-you payment called interest.",
        hard:
          "A stock makes you an owner; a bond makes you a lender. When you buy a bond you're loaning money to a company or government, which contracts to repay the full amount plus interest. Let's unpack why anyone would pay you just to borrow.",
      },
    },

    // ─── Think-deeper: why pay you to borrow? ───────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Pay You Just to Borrow?',
      intro: {
        easy: "Let's figure out why lending can grow your money.",
        medium: "Let's reason through why a borrower happily pays you extra.",
        hard: "First-principles look at why interest exists.",
      },
      layers: [
        {
          question: {
            easy: "If your friend borrows your favorite toy for a whole week, is that a little annoying for you?",
            medium: "If you lend something for a long time, what do you give up while it's gone?",
            hard: "What does a lender sacrifice by parting with money for a period of time?",
          },
          reveal: {
            easy:
              "Yes! While they have your toy, YOU can't play with it. Lending means waiting — and waiting is no fun for free.",
            medium:
              "While your money is lent out, you can't use it or spend it. You're doing the borrower a favor, so it's fair to be thanked for the wait.",
            hard:
              "You give up the use of that money for the loan's whole life. Interest is the price the borrower pays you for your patience and for taking the risk.",
          },
        },
        {
          question: {
            easy: "So how could the borrower say 'thank you' for waiting?",
            medium: "How do borrowers make lending worth your while?",
            hard: "What mechanism compensates a lender for time and risk?",
          },
          reveal: {
            easy:
              "They pay you back EVERYTHING you lent — and then a little extra on top! That extra is called INTEREST. 🎁",
            medium:
              "They return all of your money AND add a little extra called interest. Lend 100, and you might get 105 back. That extra 5 is your reward for lending.",
            hard:
              "They repay the principal plus interest — a percentage of the amount loaned. Interest rewards both the time you waited and the chance you took.",
          },
        },
        {
          question: {
            easy: "Owning a piece of a company can grow a LOT. Why pick lending instead?",
            medium: "Stocks can grow faster — so why would anyone choose a bond?",
            hard: "If equities have higher expected returns, why hold bonds at all?",
          },
          reveal: {
            easy:
              "Because lending is usually SAFER! A stock can jump up but also drop down. A bond's extra is promised ahead of time, so it's steadier — just slower. 🐢",
            medium:
              "Trade-offs! Stocks can soar OR sink — exciting but bumpy. Bonds promise your extra up front, so they're calmer and more predictable. Less reward, but less worry.",
            hard:
              "Bonds trade upside for stability: the payment is agreed in advance, so returns are steadier and the downside is usually smaller. It's the safety-vs-reward trade-off in action.",
          },
        },
      ],
    },

    // ─── Concept cards: own vs lend, interest, trade-off ────────────────
    {
      kind: 'concept-cards',
      heading: 'What Is a Bond?',
      subheading: 'A promise: you lend money now, and get it back later plus a little extra.',
      cards: [
        {
          emoji: '🤝',
          title: 'You LEND, You Don\'t OWN',
          desc: {
            easy: 'With a stock you OWN a slice. With a bond you LEND your money — like letting a friend borrow it.',
            medium:
              'A bond is a loan YOU give. The company or government borrows your money and promises to pay it back. You\'re the lender, not the owner.',
            hard:
              'A bond is a debt contract: you lend a fixed amount and the issuer promises to repay it on a set date. Ownership stays with them; you just hold their promise.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🎁',
          title: 'Interest = The Thank-You',
          desc: {
            easy: 'They pay back everything you lent PLUS a little extra. That extra is called interest!',
            medium:
              'Interest is the extra money the borrower pays you for letting them use your money. Lend 100, get 105 — the 5 is interest.',
            hard:
              'Interest is the lender\'s reward, set as a percentage of the amount loaned, paid for the time and risk involved.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🐢',
          title: 'Safer but Slower',
          desc: {
            easy: 'A bond grows a little but stays steady. A stock can grow a LOT — or drop. Bonds are the calm choice.',
            medium:
              'Bonds usually grow slower than stocks, but they\'re steadier because the extra is promised ahead of time. Less bouncy, more predictable.',
            hard:
              'Bonds typically offer lower expected returns than stocks in exchange for lower volatility and a contractual, pre-agreed payout.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '⚖️',
          title: 'The Big Trade-Off',
          desc: {
            easy: 'Safe and slow, OR exciting and bumpy? Bonds are safe and slow. Stocks are exciting and bumpy!',
            medium:
              'Every money choice trades safety for reward. Bonds lean safe; stocks lean reward. Smart investors often hold BOTH.',
            hard:
              'Risk and return move together. Bonds sit toward the safe-low-return end; stocks toward the risky-high-return end. Diversifying across both balances the trade-off.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc challenge: lend 100⭐ at 5% → 105⭐ ────────────────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 How Much Extra Do You Get?',
      setup: {
        easy: "You lend 100⭐ to a company as a bond. They promise to pay you 5 extra stars out of every 100 after one year. How many ⭐ do you get back in total?",
        medium:
          "You buy a bond by lending 100⭐. The interest rate is 5% for one year. How many ⭐ do you have back at the end — your money PLUS the interest?",
        hard:
          "You lend 100⭐ as a 1-year bond at a 5% interest rate. Compute the total returned: principal plus interest.",
      },
      problem: {
        givens: [
          { label: 'You lend', value: 100, suffix: '⭐' },
          { label: 'Interest rate', value: 5, suffix: '%' },
        ],
        answerLabel: 'Total stars back after a year',
        answer: 105,
        suffix: '⭐',
      },
      walkthrough: {
        easy: "5 out of every 100 is 5⭐ of interest. You still get your 100⭐ back too — so 100 + 5 = 105⭐! A stock might have given you MORE… or it might have dropped to 90⭐. The bond promised your 105 ahead of time. 🤝",
        medium:
          "5% of 100⭐ = 5⭐ interest. Add it to the 100⭐ you lent: 100 + 5 = 105⭐. Notice it's steady — a stock could have grown to 120⭐ OR fallen to 85⭐, but the bond promised 105 from the start.",
        hard:
          "Interest = 0.05 × 100 = 5⭐. Total = principal + interest = 100 + 5 = 105⭐. The payoff is fixed and known in advance — unlike a stock, whose 1-year value is uncertain and could be above or below 100⭐.",
      },
    },

    // ─── Connect: where bonds show up in the real world ─────────────────
    {
      kind: 'connect',
      heading: '🌍 Bonds in Real Life',
      concept: {
        easy: 'Lending money for a little extra happens ALL around you — even by whole countries!',
        medium: 'Governments, towns, and banks all borrow by selling bonds — and lenders earn interest.',
        hard: 'Bond markets are how governments and companies fund themselves and how savers earn steady income.',
      },
      examples: [
        {
          emoji: '🏛️',
          who: 'The Government',
          story: {
            easy: "When a country needs money to build roads or schools, it sells bonds. People lend, the country pays them back later with extra!",
            medium:
              "Governments sell bonds to pay for big things like roads, schools, and bridges. Citizens lend their money and get paid back with interest over time.",
            hard:
              "Governments issue bonds (like U.S. Treasuries) to fund spending. Investors lend cash now and receive scheduled interest plus repayment — among the safest bonds around.",
          },
        },
        {
          emoji: '🐷',
          who: 'Savings Bonds for Kids',
          story: {
            easy: "Some grown-ups give kids a 'savings bond' as a gift. It's a tiny loan to the government that grows bigger while you wait!",
            medium:
              "A savings bond is a popular gift — you lend a small amount to the government and it grows into more over the years. A patient, steady present.",
            hard:
              "Savings bonds let small lenders fund the government and earn interest over a holding period — a low-risk, slow-growth way to gift long-term savings.",
          },
        },
        {
          emoji: '🏦',
          who: 'Your Bank Account',
          story: {
            easy: "Surprise — your piggy bank money in a bank earns interest too! You're lending the bank a little, and it thanks you back.",
            medium:
              "When you keep money in a savings account, you're sort of lending it to the bank. The bank pays you a little interest for letting it hold your money.",
            hard:
              "Bank deposits are effectively short-term loans to the bank; interest paid to you is the same idea as bond interest — a reward for lending.",
          },
        },
      ],
      kicker: {
        easy: 'Lending is quiet and slow — but it keeps your money working safely. 🐢',
        medium: 'Bonds won\'t make you rich fast, but they keep your money calm and steady.',
        hard: 'Bonds anchor a portfolio: steady income and stability to balance the swings of stocks.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Bond Check',
      questions: [
        {
          q: 'When you buy a bond, what are you doing?',
          options: [
            'Lending your money and getting paid back later with extra',
            'Owning a piece of the company forever',
            'Giving your money away for free',
          ],
          correct: 0,
        },
        {
          q: 'What is interest?',
          options: [
            'The extra money a borrower pays you for lending',
            'A piece of the company you own',
            'A fee you pay to keep your money',
          ],
          correct: 0,
        },
        {
          q: 'How are bonds different from stocks?',
          options: [
            'Bonds are usually safer but grow slower',
            'Bonds always grow faster than stocks',
            'Bonds mean you own the whole company',
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
        easy: "Now you know BOTH ways to grow money: OWN a piece with a stock, or LEND it with a bond! 🤝",
        medium:
          "You learned the flip side of investing: lending. Bonds pay you interest for your patience — safer and steadier than stocks.",
        hard:
          "You've got the lender's side now: bonds, interest, and the safety-vs-reward trade-off that balances every smart portfolio.",
      },
      bonusTip: {
        easy: "Tip: many people hold BOTH stocks and bonds — exciting and calm together! ⚖️",
        medium: "Pro tip: stocks for growth, bonds for steadiness. Mixing both smooths the bumps.",
        hard: "Edge: blending stocks and bonds tunes your risk — more bonds for calm, more stocks for growth.",
      },
    },

    // ─── Real-world mission: a pretend bond deal ─────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'bonds',
        emoji: '🤝',
        title: {
          easy: 'Make a Pretend Bond with Mom or Dad',
          medium: 'Set up a pretend one-week bond with a grown-up',
          hard: 'Issue a pretend 1-week bond and collect with interest',
        },
        pitch: {
          easy: "Lend some pretend stars to 'Mom Inc' or 'Dad Bank' for one week. Write the deal down like a real bond, then collect your stars PLUS extra!",
          medium:
            "Lend a grown-up some pretend ⭐ for one week at an agreed interest. Write the deal on paper like a real bond, then collect your money back with interest.",
          hard:
            "Strike a pretend bond with a grown-up: agree on principal, an interest rate, and a 1-week term; document it, then collect principal plus interest at maturity.",
        },
        steps: [
          {
            emoji: '🤝',
            text: {
              easy: 'Pick a grown-up to be the borrower — call them "Mom Inc" or "Dad Bank"!',
              medium: 'Choose a grown-up to be the borrower (your pretend "Mom Inc" or "Dad Bank").',
              hard: 'Designate a grown-up as the bond issuer ("Mom Inc" / "Dad Bank").',
            },
          },
          {
            emoji: '⭐',
            text: {
              easy: 'Agree how many pretend ⭐ you\'ll lend (like 100⭐) and how much extra they\'ll add (like 5⭐).',
              medium: 'Agree the amount you lend (e.g. 100⭐) and the interest (e.g. 5⭐, which is 5%).',
              hard: 'Set the principal (e.g. 100⭐) and interest rate (e.g. 5%) together.',
            },
          },
          {
            emoji: '✍️',
            text: {
              easy: 'Write the deal on paper: how much, the extra, and "pay back in 1 week." Both sign it!',
              medium: 'Write a bond paper: amount lent, interest, and the payback date (1 week). Both of you sign.',
              hard: 'Draft the bond: principal, rate, 1-week maturity date; both parties sign it.',
            },
          },
          {
            emoji: '🗓️',
            text: {
              easy: 'Wait one whole week — that\'s the hard part! Then collect your stars PLUS the extra.',
              medium: 'Wait the full week (the patience part!), then collect your principal plus interest.',
              hard: 'Hold to maturity (~1 week), then collect principal + interest as agreed.',
            },
          },
        ],
        reflection: [
          {
            key: 'total-back',
            prompt: {
              easy: 'How many ⭐ did you get back in total?',
              medium: 'What was your total ⭐ back (your stars plus the interest)?',
              hard: 'Total ⭐ returned at maturity (principal + interest)?',
            },
            type: 'number',
            suffix: '⭐',
          },
          {
            key: 'interest-earned',
            prompt: {
              easy: 'How many EXTRA ⭐ did you earn just for lending and waiting?',
              medium: 'How much interest (extra ⭐) did you earn for lending?',
              hard: 'How many ⭐ of interest did you receive?',
            },
            type: 'number',
            suffix: '⭐',
          },
          {
            key: 'reflection',
            prompt: {
              easy: 'Was waiting a week worth the extra stars? Would you lend again?',
              medium: 'Did the extra ⭐ feel worth the wait? Would you make another bond?',
              hard: 'Reflect: did the interest justify giving up your ⭐ for a week?',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is a pretend game with pretend stars — no real money. The goal is to feel how lending works: you wait, and you get a little extra back. Keep it fun and pay the 'interest' on time!",
          medium:
            "Pretend/paper only — no real money changes hands. The point is to experience a simple loan with interest. Honor the deal on the agreed date so the 'promise' lesson lands.",
          hard:
            "Use pretend ⭐ only; no real funds involved. The aim is to model a bond's structure — principal, rate, term, repayment — and to keep the promise on schedule so the trust element is real.",
        },
        printables: {
          worksheets: [
            {
              title: 'My Pretend Bond Agreement',
              blocks: [
                { label: 'Borrower (Mom Inc / Dad Bank)', lines: 1 },
                { label: 'Lender (me!)', lines: 1 },
                { label: 'Stars I lend', suffix: '⭐', lines: 1 },
                { label: 'Extra stars promised (interest)', suffix: '⭐', lines: 1 },
                { label: 'Pay back on this date', lines: 1 },
                { label: 'Total I should get back', hint: 'My stars + the extra', equation: '___ + ___ = ___' },
                { label: 'Both sign here', lines: 2 },
              ],
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
