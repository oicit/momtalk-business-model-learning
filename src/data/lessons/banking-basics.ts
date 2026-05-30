/**
 * Banking Basics — "Where money sleeps safe and grows a little."
 *
 * A bank keeps your money SAFE, lets it grow a tiny bit (interest on
 * savings), and lets you spend it with cards and ATMs. Kids meet the two
 * everyday accounts — CHECKING (spend now) vs SAVINGS (grow & don't touch)
 * — and learn that FDIC means the government protects your money even if
 * the bank has a bad day.
 *
 * Beat order:
 *   intro → think-deeper (why not keep all your money under the bed?) →
 *   concept-cards (safe, grow, spend, checking vs savings, FDIC) →
 *   calc-challenge (100⭐ in savings at 3% → 103⭐) → connect (where banks
 *   show up in real life) → quiz → outro → real-world-mission (take a
 *   bank field trip and start a savings habit).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'banking-basics',
  themeKey: 'money',
  emoji: '🏦',
  title: 'Banking Basics',
  subtitle: {
    easy: "A bank keeps your money safe, helps it grow a little, and lets you spend it!",
    medium:
      "Why grown-ups trust a bank with their money — and the difference between spending and saving accounts.",
    hard:
      "How banks safeguard deposits, pay interest on savings, and why FDIC protection makes them safe — kid-sized.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Where does money go when you're not spending it? A piggy bank is cute, but a real BANK keeps your money super safe, helps it grow a tiny bit, AND lets you spend it with a card. Let's peek inside! 🏦",
        medium:
          "You've earned some stars — now where do you keep them? A bank does three big jobs: it keeps your money safe, grows it a little, and lets you spend it with cards. Today we learn how grown-ups use one.",
        hard:
          "A bank is a place that safeguards your money, pays you a little for saving, and gives you easy ways to spend it. Behind the scenes there are clever rules — like FDIC protection — that make it safe. Let's open the vault.",
      },
    },

    // ─── Think-deeper: why not keep it under the bed? ───────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Not Keep It Under Your Bed?',
      intro: {
        easy: "Let's think about this together.",
        medium: "Let's reason through why a bank beats a hiding spot.",
        hard: "First-principles look at why we deposit money at all.",
      },
      layers: [
        {
          question: {
            easy: "If you hid all your money under your bed, what could go wrong?",
            medium: "What are the risks of keeping all your money hidden at home?",
            hard: "What problems come from self-storing all of your cash?",
          },
          reveal: {
            easy:
              "It could get lost, taken, or even ruined! And it just sits there — it never grows. A bank keeps it locked away safe instead.",
            medium:
              "It could be lost, stolen, or damaged — and it never grows. A bank stores it safely in a vault and on computers, far safer than a sock drawer.",
            hard:
              "Cash at home faces theft, loss, and damage, and earns nothing. A bank provides security, record-keeping, and a small return — reducing risk while your money still works.",
          },
        },
        {
          question: {
            easy: "Could your money actually grow just by sitting in a bank?",
            medium: "Why would a bank pay YOU for keeping money there?",
            hard: "Why does a bank pay interest on savings deposits?",
          },
          reveal: {
            easy:
              "Yes! In a savings account the bank adds a tiny bit extra every year — that's called INTEREST. Free stars for being patient! ⭐",
            medium:
              "The bank lends some of that money to others and earns a bit, so it shares a little back with you as INTEREST. Your savings slowly grow without you doing anything.",
            hard:
              "Banks lend out a portion of deposits and earn returns, so they pay savers INTEREST as a thank-you. It's a small percentage, but it compounds over time.",
          },
        },
        {
          question: {
            easy: "What if the bank itself has a really bad day?",
            medium: "What happens to your money if the bank gets in trouble?",
            hard: "What protects depositors if a bank fails?",
          },
          reveal: {
            easy:
              "Even then you're protected! A rule called FDIC means the government promises to give your money back. Safe and sound. 🛡️",
            medium:
              "There's a safety net called FDIC. If the bank fails, the government guarantees your money back (up to a big limit). That's why banks feel so safe.",
            hard:
              "FDIC insurance — backed by the government — guarantees deposits up to $250,000 per account, so even a bank failure doesn't lose your money. That guarantee is what makes deposits low-risk.",
          },
        },
      ],
    },

    // ─── Concept cards: what a bank does ────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'What a Bank Does',
      subheading: 'Three big jobs — plus the two accounts grown-ups use every day.',
      cards: [
        {
          emoji: '🔒',
          title: 'Keeps It SAFE',
          desc: {
            easy: 'A bank locks your money away in a vault and on computers. Way safer than under your bed!',
            medium:
              'Your money is guarded in vaults and tracked on secure computers — protected from being lost or stolen.',
            hard:
              "Deposits are held under strong physical and digital security, with every dollar tracked — far safer than self-storage.",
          },
          color: '#E5FAF1',
        },
        {
          emoji: '🌱',
          title: 'Helps It GROW',
          desc: {
            easy: 'In a savings account, the bank adds a tiny bit extra each year. That bonus is called interest!',
            medium:
              'Savings accounts pay INTEREST — a small percentage the bank adds each year just for keeping money there.',
            hard:
              'Savings accounts earn interest: a small annual percentage that compounds, so patient money slowly grows on its own.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '💳',
          title: 'CHECKING — Spend Now',
          desc: {
            easy: 'A checking account is your everyday money. Use a card or ATM to buy snacks, toys, and stuff.',
            medium:
              'A CHECKING account holds your everyday spending money. Use a debit card or an ATM to pay for things anytime.',
            hard:
              'A checking account is for daily transactions — debit cards, ATMs, and bills — easy in, easy out, but it earns little or nothing.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🐷',
          title: "SAVINGS — Don't Touch",
          desc: {
            easy: "A savings account is for money you're growing. You leave it alone so it can get bigger over time.",
            medium:
              'A SAVINGS account is for money you want to grow. You leave it alone, it earns interest, and it slowly gets bigger.',
            hard:
              'A savings account holds money you intend to keep untouched. It earns interest and is meant for goals and emergencies, not daily spending.',
          },
          color: '#F0E8FD',
        },
        {
          emoji: '🛡️',
          title: 'FDIC — A Promise',
          desc: {
            easy: 'FDIC means the government promises your money is safe — even if the bank has a really bad day.',
            medium:
              'FDIC is a government safety net: if a bank fails, your money is guaranteed back. That\'s why banks feel so trustworthy.',
            hard:
              'FDIC insurance guarantees deposits (up to $250,000 per account) even if the bank collapses — turning a deposit into a near risk-free place for money.',
          },
          color: '#FDECEC',
        },
      ],
    },

    // ─── Calc challenge: interest on savings ────────────────────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 How Much Does Saving Earn?',
      setup: {
        easy: "You put 100 pretend ⭐ in a savings account. The bank pays 3 out of every 100 stars in interest each year. How many ⭐ will you have after one year?",
        medium:
          "You save 100⭐ in a savings account that pays 3% interest per year. How many ⭐ do you have after one full year?",
        hard:
          "With a 100⭐ principal and a 3% annual interest rate, compute the total balance after one year.",
      },
      problem: {
        givens: [
          { label: 'You save', value: 100, suffix: '⭐' },
          { label: 'Interest each year', value: 3, suffix: '%' },
        ],
        answerLabel: 'Stars after one year',
        answer: 103,
        suffix: '⭐',
      },
      walkthrough: {
        easy: "3 out of 100 is 3 extra stars. 100 + 3 = 103⭐! You did nothing but be patient, and the bank gave you 3 free stars. Next year it grows on 103, not 100. ✨",
        medium:
          "3% of 100⭐ = 3⭐ of interest. 100 + 3 = 103⭐. The neat part: next year's 3% is on 103⭐, so your money keeps snowballing — that's compounding.",
        hard:
          "0.03 × 100 = 3⭐ interest → 103⭐ total. Compounded, 100 grows to 100 × 1.03^n. The rate is small, but time turns it into real growth.",
      },
    },

    // ─── Connect: banks in real life ────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌍 Banks in Real Life',
      concept: {
        easy: 'Almost every grown-up uses a bank — for their pay, their savings, and their spending.',
        medium: 'Banks quietly power how families get paid, save up, and pay for everyday things.',
        hard: 'Deposit banking underpins how households store, grow, and move money safely.',
      },
      examples: [
        {
          emoji: '💼',
          who: 'Payday',
          story: {
            easy: "When grown-ups get paid for work, the money goes straight into their bank — no cash to carry!",
            medium:
              "Most people's paychecks are sent right into their checking account automatically. Safe, instant, no cash needed.",
            hard:
              "Wages are direct-deposited into checking accounts, so income arrives securely without handling physical cash.",
          },
        },
        {
          emoji: '🏧',
          who: 'The ATM',
          story: {
            easy: "That machine in the wall? It's a robot teller. Tap your card and it gives you your own money, any time.",
            medium:
              "An ATM lets you get cash or check your balance any hour of the day — your bank in a box on the street.",
            hard:
              "ATMs provide 24/7 access to your checking account — withdrawals, balances, deposits — without visiting a branch.",
          },
        },
        {
          emoji: '🏠',
          who: 'Saving for Something Big',
          story: {
            easy: "Families leave money in savings for a long time to buy big things — like a car or a trip.",
            medium:
              "People stash money in savings accounts for big goals (a car, college, a holiday) and let the interest help it grow.",
            hard:
              "Households use savings accounts to accumulate funds for major goals and emergencies, earning interest along the way.",
          },
        },
      ],
      kicker: {
        easy: 'A bank is just a safe home for money that helps it grow. 🏦',
        medium: "Two accounts, three jobs — that's the whole secret of everyday banking.",
        hard: 'Safety + a little growth + easy access is why nearly everyone banks.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Banking Check',
      questions: [
        {
          q: 'Which account is for everyday spending with a card or ATM?',
          options: [
            'A checking account',
            'A savings account',
            'A piggy bank under the bed',
          ],
          correct: 0,
        },
        {
          q: 'What does a savings account give you for leaving money alone?',
          options: [
            'Interest — a little extra each year',
            'A new toy every month',
            'Nothing at all',
          ],
          correct: 0,
        },
        {
          q: 'What does FDIC mean for your money?',
          options: [
            'The government protects it even if the bank has trouble',
            'You can never take your money out',
            'The bank keeps all the interest',
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
        easy: "Now you know what a bank does: keeps money SAFE, helps it GROW, and lets you SPEND. Checking to spend, savings to grow! 🏦",
        medium:
          "You learned the three jobs of a bank and the difference between checking and savings — plus how FDIC keeps your money safe.",
        hard:
          "You've got the fundamentals: safekeeping, interest, checking vs savings, and FDIC protection — the bedrock of how money is stored.",
      },
      bonusTip: {
        easy: "Tip: spend from checking, GROW in savings. Never mix them up! 🐷",
        medium: "Pro tip: keep spending money in checking and goal money in savings so you're never tempted to dip in.",
        hard: "Edge: separate spending and saving accounts to enforce discipline — and let interest compound undisturbed.",
      },
    },

    // ─── Real-world mission: visit a bank & start saving ────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'banking-basics',
        emoji: '🏦',
        title: {
          easy: 'Take a Bank Field Trip',
          medium: 'Visit a bank and start a savings habit',
          hard: 'Tour a bank and design your own savings plan',
        },
        pitch: {
          easy: "Go to a real bank with a grown-up, see how it works, and find out how YOUR money could grow!",
          medium:
            "Visit a bank with a grown-up, ask how savings interest works, and notice the difference between checking and savings.",
          hard:
            "Visit a bank with a grown-up, observe its services, and sketch a simple savings plan with a goal amount.",
        },
        steps: [
          {
            emoji: '🚶',
            text: {
              easy: 'Go to a bank with a grown-up — or look at their bank app together.',
              medium: 'Visit a bank branch with a grown-up, or explore their banking app together.',
              hard: 'Visit a branch or review a banking app with a grown-up to see real accounts.',
            },
          },
          {
            emoji: '👀',
            text: {
              easy: 'Spot the ATM and the tellers. Ask a grown-up what each one does.',
              medium: 'Notice the ATM, the tellers, and the difference between checking and savings.',
              hard: 'Identify the ATM, teller services, and how checking and savings accounts differ.',
            },
          },
          {
            emoji: '❓',
            text: {
              easy: 'Ask: "How much extra would my savings earn in a year?"',
              medium: 'Ask a grown-up what interest rate a savings account pays right now.',
              hard: 'Ask about the current savings interest rate and how interest is calculated.',
            },
          },
          {
            emoji: '🐷',
            text: {
              easy: 'Pick a savings goal and decide how many stars to save each week!',
              medium: 'Choose a savings goal and a weekly amount to set aside toward it.',
              hard: 'Set a savings goal amount and a regular weekly contribution to reach it.',
            },
          },
        ],
        reflection: [
          {
            key: 'interest-rate',
            prompt: {
              easy: 'What interest does a savings account pay?',
              medium: 'What savings interest rate did you find?',
              hard: 'What annual savings interest rate did you observe?',
            },
            type: 'text',
            suffix: '%',
          },
          {
            key: 'checking-vs-savings',
            prompt: {
              easy: 'In your own words, what is checking FOR? What is savings FOR?',
              medium: 'Explain the difference between a checking and a savings account.',
              hard: 'Describe the purpose of checking vs savings in your own words.',
            },
            type: 'longtext',
          },
          {
            key: 'savings-goal',
            prompt: {
              easy: 'What are you saving for, and how much each week?',
              medium: 'What is your savings goal and your weekly saving amount?',
              hard: 'State your savings goal and your planned weekly contribution.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "No need to open an account — just visit or browse the app together and talk about how saving works. It's all about the conversation.",
          medium:
            "You don't have to open anything. The goal is an observational visit and a chat about saving — pretend stars are perfect for the goal.",
          hard:
            "This is observational only — no account required. Use a branch visit or app walkthrough to discuss saving habits; any contributions are pretend/practice.",
        },
        printables: {
          trackers: [
            {
              title: 'My Savings Plan',
              columns: ['Week', 'Stars saved', 'Total so far', 'How close to my goal?'],
              rows: 6,
              note: 'Pick a goal, then add a little every week and watch the total grow.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
