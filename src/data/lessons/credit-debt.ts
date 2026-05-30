/**
 * Credit & Debt — "Borrowing Costs Money."
 *
 * The core money-safety idea: a credit card or loan lets you buy NOW and pay
 * LATER — but if you don't pay it ALL back quickly, you owe EXTRA (interest),
 * and that extra can pile up until you owe way more than you borrowed.
 *
 * The takeaway for a 7–9 year old: borrowing can be a useful tool, but only
 * if you can pay it back fast. Borrow only what you can pay back.
 *
 * EDUCATION-FIRST: everything is pretend stars (⭐). No real money, no financial
 * advice — just noticing how borrowing and interest behave.
 *
 * Beat order:
 *   intro → think-deeper (why does borrowing cost money?) →
 *   concept-cards (what credit & debt are) → calc-challenge (borrow 100⭐
 *   at 10% → owe 110⭐, wait longer → owe more) → connect (where this shows
 *   up) → quiz → outro → real-world-mission (spot borrowing in real life).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'credit-debt',
  themeKey: 'debt',
  emoji: '💳',
  title: 'Credit & Debt',
  subtitle: {
    easy: 'Buy now, pay later — but borrowing money costs EXTRA money!',
    medium:
      'A credit card or loan lets you buy now and pay later. But if you wait too long, you owe extra. Borrow only what you can pay back!',
    hard:
      'How credit, debt, and interest work — and why borrowing only what you can repay quickly is the whole game. Kid-sized.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'thinking',
      text: {
        easy:
          "Imagine you want a toy NOW but don't have enough stars. Someone says, 'Borrow mine — pay me back later!' That sounds great… but here's the catch: when you pay back, you have to give back a little EXTRA. Borrowing money costs money! 💳",
        medium:
          "A credit card lets you buy something today and pay for it later. Handy! But borrowing isn't free — pay it back slowly and you owe EXTRA on top. That extra is called interest, and today we'll see how it works.",
        hard:
          "Credit lets you spend money you don't have yet. The price of that convenience is interest: the longer you take to repay, the more extra you owe. Understanding this early is one of the most useful money skills there is.",
      },
    },

    // ─── Think-deeper: why does borrowing cost money? ───────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Does Borrowing Cost Extra?',
      intro: {
        easy: "Let's figure out why you pay back MORE than you borrow.",
        medium: "Let's reason through why borrowed stars cost extra to give back.",
        hard: 'First-principles look at why credit carries a cost.',
      },
      layers: [
        {
          question: {
            easy: 'If a friend lets you borrow 10⭐, why might they want a little extra back?',
            medium: 'Why would someone who lends you stars want MORE stars in return?',
            hard: 'What does a lender give up by letting you use their stars, and why charge for it?',
          },
          reveal: {
            easy:
              "While YOU have their stars, THEY can't use them! Asking for a little extra is their thank-you for waiting. That extra is called INTEREST.",
            medium:
              "When they lend, they wait — and waiting has a cost. The extra they ask for (interest) is the price of using their stars for a while.",
            hard:
              'Lending means giving up the use of those stars and taking a risk you might not repay. Interest is the rent paid for borrowed money — the price of time and risk.',
          },
        },
        {
          question: {
            easy: 'What happens if you wait a LONG time before paying back?',
            medium: 'What happens to the extra you owe the longer you wait?',
            hard: 'How does the amount owed change as repayment is delayed?',
          },
          reveal: {
            easy:
              "The extra keeps GROWING! Wait longer and you owe more and more. A small borrow can turn into a BIG one. 😮",
            medium:
              'Interest keeps adding up. Borrow 100⭐ and wait a long time, and you might owe 120⭐… then 130⭐… The debt grows the longer it sits.',
            hard:
              'Unpaid interest compounds — you start paying interest on the interest. A modest debt can balloon if left to grow unpaid. This is the debt trap.',
          },
        },
        {
          question: {
            easy: 'So when is borrowing a GOOD idea, and when is it risky?',
            medium: 'How can you make borrowing a helpful tool instead of a trap?',
            hard: 'What rule turns credit from a trap into a useful tool?',
          },
          reveal: {
            easy:
              'Borrowing is okay if you can pay it ALL back fast. Only borrow what you KNOW you can pay back! 🛡️',
            medium:
              "Good borrowing: you pay it back quickly, so the extra stays tiny. Risky borrowing: you can't pay it back, so it grows. Rule: only borrow what you can pay back soon.",
            hard:
              'Credit is a tool when repaid quickly (minimal interest) and a trap when it isn\'t (compounding interest). The rule: never borrow more than you can confidently repay fast.',
          },
        },
      ],
    },

    // ─── Concept cards: what credit & debt actually are ─────────────────
    {
      kind: 'concept-cards',
      heading: 'Credit, Debt & Interest',
      subheading: 'Three words that go together — and one rule that keeps you safe.',
      cards: [
        {
          emoji: '💳',
          title: 'Credit = Buy Now, Pay Later',
          desc: {
            easy: 'Credit means you can get something NOW and pay for it LATER. Like a promise: "I\'ll pay you back!"',
            medium:
              'Credit is permission to buy now and pay later. A credit card is one way grown-ups use credit — it pays the store, and you pay the card back.',
            hard:
              'Credit is borrowed spending power: you receive goods now in exchange for a promise to repay later, usually with interest if not paid in full quickly.',
          },
          color: '#EDE9FE',
        },
        {
          emoji: '📒',
          title: 'Debt = What You Owe',
          desc: {
            easy: 'Debt is the amount you still have to pay back. Borrow 100⭐ and your debt is 100⭐ until you pay it.',
            medium:
              'Debt is the money you owe but haven\'t paid yet. The faster you pay it down, the smaller your debt — and the less extra you owe.',
            hard:
              'Debt is an outstanding obligation. It shrinks as you repay principal and grows as unpaid interest is added on top.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '📈',
          title: 'Interest = The Extra',
          desc: {
            easy: 'Interest is the EXTRA you pay for borrowing. Borrow 100⭐, pay back 110⭐ — that 10⭐ extra is interest.',
            medium:
              'Interest is the price of borrowing. At 10%, borrowing 100⭐ means paying back 110⭐. Wait longer and the interest keeps growing.',
            hard:
              'Interest is a percentage of what you owe, charged over time. Unpaid, it compounds — interest piles onto interest, accelerating how fast debt grows.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '🛡️',
          title: 'The Safe Rule',
          desc: {
            easy: 'Only borrow what you can pay back FAST. Then the extra stays small and borrowing stays safe.',
            medium:
              'Borrow only what you can pay back quickly. Good borrowing is a tool you control; runaway debt controls YOU.',
            hard:
              'Borrow only what you can repay promptly. The difference between credit-as-a-tool and a debt trap is entirely about repayment speed.',
          },
          color: '#E5FAF1',
        },
      ],
    },

    // ─── Calc challenge: borrow 100⭐ at 10% → owe 110⭐ ──────────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 How Much Do You Owe Back?',
      setup: {
        easy: "You borrow 100⭐ to buy a toy. The deal: pay back the 100⭐ PLUS 10 extra out of every 100 (that's 10%). How many ⭐ do you owe back in total?",
        medium:
          "You borrow 100⭐ at 10% interest. To pay it off you give back the 100⭐ you borrowed PLUS the interest. How many ⭐ do you owe back in total?",
        hard:
          'Borrow 100⭐ at a 10% interest rate. Compute the total repayment (principal + interest) if you pay it back after one period.',
      },
      problem: {
        givens: [
          { label: 'You borrow', value: 100, suffix: '⭐' },
          { label: 'Interest rate', value: 10, suffix: '%' },
        ],
        answerLabel: 'Total stars you owe back',
        answer: 110,
        suffix: '⭐',
      },
      walkthrough: {
        easy: "10 out of 100 is 10. So the extra (interest) is 10⭐. You owe back the 100⭐ you borrowed PLUS 10⭐ = 110⭐. And if you WAIT instead of paying, the 10% gets added again — you'd owe even more next time! That's why paying back fast matters.",
        medium:
          "10% of 100⭐ = 10⭐ interest. Total owed = 100⭐ + 10⭐ = 110⭐. Here's the scary part: if you don't pay and wait another round, the 10% is charged on 110⭐, so you'd owe ~121⭐. Debt grows the longer it sits — pay it off fast!",
        hard:
          '0.10 × 100 = 10⭐ interest → 110⭐ total. Unpaid, it compounds: next period 0.10 × 110 = 11⭐ → 121⭐. The same 1.10 multiplier that grows savings also grows debt — which is why slow repayment is so costly.',
      },
    },

    // ─── Connect: where this shows up in the real world ─────────────────
    {
      kind: 'connect',
      heading: '🌍 Borrowing in Real Life',
      concept: {
        easy: 'Grown-ups borrow money all the time — sometimes it helps, sometimes it hurts.',
        medium: 'The "pay back extra" idea shows up everywhere money is borrowed — for good AND for bad.',
        hard: 'The same interest mechanic underlies credit cards, loans, and the lenders who profit from them.',
      },
      examples: [
        {
          emoji: '🏠',
          who: 'Buying a House',
          story: {
            easy: "Most grown-ups can't pay for a whole house at once, so they borrow and pay back a little each month for years. That's 'good' borrowing — a tool for something big they pay back steadily.",
            medium:
              "A home loan (mortgage) lets a family buy a house and pay it back slowly over many years. Used carefully, it's borrowing as a tool — they keep up with the payments.",
            hard:
              'A mortgage is borrowing used as leverage to own an appreciating asset, repaid on a schedule. Managed well, it\'s productive credit — the payments are planned for.',
          },
        },
        {
          emoji: '💳',
          who: 'The Credit Card Trap',
          story: {
            easy: "If someone buys lots of stuff on a credit card and only pays back a tiny bit, the extra (interest) piles up. Soon they owe WAY more than they spent. That's the trap!",
            medium:
              "Credit cards charge high interest. Pay the whole bill fast and it's free to use. Pay only a little each month and the leftover debt grows and grows — that's the debt trap.",
            hard:
              "Carrying a credit-card balance triggers high compounding interest. Minimum payments barely dent the principal, so balances snowball — a textbook debt trap.",
          },
        },
        {
          emoji: '🏦',
          who: 'How Banks Earn',
          story: {
            easy: "Banks LEND money and ask for a little extra back. That extra is how they make money. So when you borrow, someone else is earning the interest YOU pay.",
            medium:
              "Banks earn by charging interest on the money they lend. The interest a borrower pays is income for the lender — which is why borrowing always costs YOU extra.",
            hard:
              'Lenders profit from the interest spread on loans. Every interest payment a borrower makes is revenue for the lender — borrowing is never free for the borrower.',
          },
        },
      ],
      kicker: {
        easy: 'Borrowing isn\'t bad OR good — it\'s a tool. Pay it back fast and it helps. Let it grow and it hurts. 🛡️',
        medium: 'Same tool, two outcomes: repaid quickly it helps you; left to grow it traps you.',
        hard: 'Credit is neutral; outcomes depend on repayment discipline. Speed of repayment decides whether interest works for or against you.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Credit & Debt Check',
      questions: [
        {
          q: 'What does "interest" mean when you borrow?',
          options: [
            'The EXTRA you pay back on top of what you borrowed',
            'A free gift from the bank',
            'The toy you bought with the money',
          ],
          correct: 0,
        },
        {
          q: 'You borrow 100⭐ at 10% interest. How many ⭐ do you owe back?',
          options: ['110⭐', '100⭐', '10⭐'],
          correct: 0,
        },
        {
          q: 'What is the safe rule about borrowing?',
          options: [
            'Only borrow what you can pay back quickly',
            'Always borrow as much as you can',
            'Never pay it back',
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
        easy: "Now you know the secret of borrowing: you always pay back a little EXTRA. So only borrow what you can pay back fast! 💳",
        medium:
          "You learned how credit, debt, and interest work — and the one rule that keeps borrowing safe: only borrow what you can pay back quickly.",
        hard:
          "You understand the mechanic behind credit: interest is the price of time, it compounds when unpaid, and disciplined repayment is what keeps it a tool instead of a trap.",
      },
      bonusTip: {
        easy: 'Tip: the faster you pay back, the smaller the extra. Fast = cheap! ⚡',
        medium: 'Pro tip: paying a debt off fast keeps the interest tiny. Slow repayment is what makes debt expensive.',
        hard: 'Edge: minimize the time a balance is outstanding. Time is what feeds compounding interest — starve it.',
      },
    },

    // ─── Real-world mission: spot borrowing in real life ────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'credit-debt',
        emoji: '🔍',
        title: {
          easy: 'Become a Borrowing Detective',
          medium: 'Spot where borrowing & interest happen in real life',
          hard: 'Investigate everyday examples of credit and interest',
        },
        pitch: {
          easy: "Look around with a grown-up and find places where people BORROW money and pay back extra. You're a borrowing detective! 🔍",
          medium:
            "With a grown-up, hunt for real-life examples of borrowing and interest — and play a pretend payback game to see how the extra grows.",
          hard:
            'Observe and document real-world instances of credit and interest, then model how delayed repayment changes the total owed (pretend stars only).',
        },
        steps: [
          {
            emoji: '🗣️',
            text: {
              easy: 'Ask a grown-up to name ONE thing people borrow money for (like a house or a car).',
              medium: 'Ask a grown-up for one real example of borrowing money (a loan, a card, a house).',
              hard: 'Interview a grown-up for a concrete example of consumer or housing credit.',
            },
          },
          {
            emoji: '🤔',
            text: {
              easy: 'Ask: when you pay it back, do you pay EXACTLY what you borrowed, or a little extra?',
              medium: 'Ask whether the payback is the same amount borrowed, or more (the interest).',
              hard: 'Probe how interest makes total repayment exceed the borrowed principal.',
            },
          },
          {
            emoji: '⭐',
            text: {
              easy: 'Pretend YOU borrow 100⭐. Add 10⭐ interest. Write down how much you owe back (110⭐).',
              medium: 'Pretend-borrow 100⭐ at 10%. Write down the total you owe back.',
              hard: 'Model a 100⭐ loan at 10%; record the one-period total repayment.',
            },
          },
          {
            emoji: '🐌',
            text: {
              easy: 'Now pretend you waited and didn\'t pay. Add 10% AGAIN. Did you owe even more?',
              medium: 'Now pretend you waited one more round — add 10% again. Notice how the debt grew.',
              hard: 'Apply a second period of interest and observe the compounding effect on the balance.',
            },
          },
        ],
        reflection: [
          {
            key: 'real-example',
            prompt: {
              easy: 'What is ONE real thing people borrow money for?',
              medium: 'What real-life borrowing example did you find?',
              hard: 'Which credit example did you document?',
            },
            type: 'text',
          },
          {
            key: 'owe-back',
            prompt: {
              easy: 'You borrowed 100⭐ at 10%. How many ⭐ did you owe back?',
              medium: 'What was the total owed after one round of interest?',
              hard: 'One-period total repayment on the 100⭐ loan?',
            },
            type: 'number',
            suffix: '⭐',
          },
          {
            key: 'insight',
            prompt: {
              easy: 'Did waiting longer make you owe MORE or less? What did that teach you?',
              medium: 'How did waiting change what you owed, and what does that mean about paying debt fast?',
              hard: 'Reflect on how repayment speed affects total cost of borrowing.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is all pretend stars — no real money and not financial advice. The goal is just noticing that borrowing costs extra and grows if it isn't paid back.",
          medium:
            "Pretend stars only — this is an observation activity, not financial advice or real budgeting. The learning goal is the concept of interest and paying debt back promptly.",
          hard:
            'Educational and symbolic only — no real money, no financial advice. Aim is conceptual: interest as the cost of borrowing and the danger of compounding unpaid debt.',
        },
        printables: {
          trackers: [
            {
              title: 'My Pretend Borrowing Tracker',
              columns: ['I borrowed (⭐)', 'Interest (10%)', 'I owe back (⭐)', 'If I wait, I owe…'],
              rows: 4,
              note: 'Pretend stars only. Borrow 100⭐, add 10⭐ interest = owe 110⭐. Wait a round? Add 10% again!',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
