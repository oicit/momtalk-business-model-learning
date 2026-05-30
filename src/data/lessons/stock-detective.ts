/**
 * Stock Detective — the CAPSTONE of the Stock Analysis lane.
 *
 * Every earlier lesson becomes one clue on a 5-question checklist a kid can
 * use to size up ANY company like a real analyst:
 *   1. What does it sell & who buys?   (Company Detective)
 *   2. Is it GROWING?
 *   3. Does it MAKE MONEY?             (profit)
 *   4. Does it have a MOAT?            (competitive advantage)
 *   5. Is the price cheap or pricey for what it earns?  (value)
 *
 * A great investment usually checks MOST boxes. We walk one worked example
 * (a pretend "Cozy Cocoa" hot-chocolate company) through all 5 questions and
 * land on a verdict.
 *
 * Beat order:
 *   intro → think-deeper (what makes a great company?) →
 *   concept-cards (the 5 checklist clues) → brainstorm (your own checklist) →
 *   quiz → connect (real analysts use this) → outro →
 *   real-world-mission (be a Stock Detective on a company you love).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'stock-detective',
  themeKey: 'business',
  emoji: '🕵️',
  title: 'Stock Detective',
  subtitle: {
    easy: "Use ONE checklist to figure out if a company is great — just like a real detective!",
    medium:
      "Put every clue you've learned together into one 5-question checklist for sizing up any company.",
    hard:
      "The capstone: a repeatable 5-question framework (business, growth, profit, moat, value) for evaluating any company like an analyst.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "You've learned SO much about companies! Now you get the coolest job of all: a STOCK DETECTIVE. 🕵️ Detectives use a checklist of clues to crack a case. Today you get YOUR checklist for figuring out if a company is great!",
        medium:
          "Time to become a Stock Detective! Real investors don't just guess — they run a company through a checklist of clues. Today you'll get the same 5-question checklist and use it on a real case.",
        hard:
          "This is the capstone. Everything you've learned — what a business sells, growth, profit, moats, value — snaps together into ONE checklist that lets you evaluate any company like a professional analyst.",
      },
    },

    // ─── Think-deeper: what makes a great company? ──────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 What Makes a Company GREAT?',
      intro: {
        easy: "Before we get our checklist, let's think it out.",
        medium: "Let's reason our way to the clues a detective should check.",
        hard: "Let's derive the checklist from first principles.",
      },
      layers: [
        {
          question: {
            easy: "If a company sells something nobody wants, can it be great?",
            medium: "Can a company be a great investment if customers don't want what it sells?",
            hard: "Is customer demand a necessary condition for a durable business?",
          },
          reveal: {
            easy:
              "Nope! A great company sells something people WANT and keep buying. So clue #1 is: what does it sell, and who buys it?",
            medium:
              "No — without wanted products there's no business. So our first clue: understand what it sells and who its customers are. (You learned this as a Company Detective!)",
            hard:
              "No. Demand is foundational. Clue #1 is understanding the product and customer base — the qualitative bedrock before any numbers matter.",
          },
        },
        {
          question: {
            easy: "Is it enough for a company to JUST sell stuff? Or should it be getting bigger AND keeping some money?",
            medium: "Selling things is good — but what two money-things should a great company also do?",
            hard: "Beyond demand, what financial properties signal a healthy, investable company?",
          },
          reveal: {
            easy:
              "It should be GROWING (more customers each year) AND it should MAKE MONEY (keep some after paying its bills). Those are clues #2 and #3!",
            medium:
              "It should be growing (more sales over time) and it should make a profit (keep money after costs). Growth + profit = clues #2 and #3.",
            hard:
              "Sustainable growth and genuine profitability. Revenue growth shows expanding demand; profit shows the model actually works after costs. Clues #2 and #3.",
          },
        },
        {
          question: {
            easy: "What stops OTHER companies from copying it and stealing all the customers?",
            medium: "What protects a great company from copycats taking its customers?",
            hard: "What gives a company durable pricing power and protects its profits over time?",
          },
          reveal: {
            easy:
              "A MOAT! Like a castle's water moat keeps enemies out, a company moat (a secret recipe, a famous brand) keeps copycats out. That's clue #4. And clue #5? Even a great company is a bad deal if you OVERPAY — so check the price! 🏰",
            medium:
              "A MOAT — a brand, a secret recipe, a network — that copycats can't easily beat. That's clue #4. The last clue, #5: is the price fair for what it earns? Even a great company can be a bad buy if it's too expensive.",
            hard:
              "A moat — a durable competitive advantage (brand, switching costs, network effects). Clue #4. And clue #5 is valuation: a wonderful company at a terrible price is still a poor investment.",
          },
        },
      ],
    },

    // ─── Concept cards: the 5 checklist clues ───────────────────────────
    {
      kind: 'concept-cards',
      heading: '🕵️ The Stock Detective Checklist',
      subheading: 'Five clues to crack any company. A great one usually checks MOST boxes!',
      cards: [
        {
          emoji: '🛍️',
          title: '1. What & Who?',
          desc: {
            easy: 'What does it SELL, and WHO buys it? If lots of people want it, that\'s a good first clue!',
            medium:
              'What does the company sell, and who are its customers? A clear product lots of people want is clue #1 — the Company Detective question.',
            hard:
              'Identify the product and customer base. A simple, well-understood business with real demand is the qualitative foundation of the whole checklist.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '📈',
          title: '2. Is It Growing?',
          desc: {
            easy: 'Does it get MORE customers and sell MORE every year? Growing companies are exciting!',
            medium:
              'Are sales bigger this year than last year? Growth means more people keep choosing it — a healthy sign.',
            hard:
              'Is revenue trending up over time? Durable top-line growth signals expanding demand and room to compound.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '💰',
          title: '3. Does It Make Money?',
          desc: {
            easy: 'After it pays for everything, does it KEEP some money? Money left over is called profit!',
            medium:
              'After paying all its costs, does money stay in the piggy bank? That leftover is profit — and great companies make real profit.',
            hard:
              'Is the company genuinely profitable after all costs? Profit proves the model works, not just that products sell.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🏰',
          title: '4. Does It Have a Moat?',
          desc: {
            easy: 'Is there something copycats CAN\'T easily steal — a secret recipe or a famous brand? That\'s a moat!',
            medium:
              'Is there a moat — a brand, a recipe, a network — that keeps copycats from stealing its customers? Moats protect profits.',
            hard:
              'Does it have a durable competitive advantage (brand, switching costs, network effects) that defends pricing power over time?',
          },
          color: '#F0E8FD',
        },
        {
          emoji: '🏷️',
          title: '5. Cheap or Pricey?',
          desc: {
            easy: 'Even an AMAZING toy is a bad deal if it costs WAY too much. Is the price fair for what you get?',
            medium:
              'Is the price fair for what the company earns? A great company at a sky-high price can still be a bad buy.',
            hard:
              'Valuation: is the price reasonable relative to earnings? A wonderful business at an unreasonable price is a poor investment.',
          },
          color: '#FDE8F0',
        },
      ],
    },

    // ─── Brainstorm: run the worked example, then your own ──────────────
    {
      kind: 'brainstorm',
      heading: '☕ Crack the Case: "Cozy Cocoa"',
      prompt: {
        easy: "Let's solve ONE case together! Cozy Cocoa sells warm hot chocolate everyone loves, sells more every winter, keeps money after costs, has a SECRET marshmallow recipe, and its price is fair. Now YOU: write 3 things you'd check to decide if a company is great.",
        medium:
          "Worked example — Cozy Cocoa: ✅sells loved hot cocoa, ✅growing every winter, ✅makes profit, ✅secret-recipe moat, ✅fair price = 5/5, a GREAT case! Now your turn: list at least 3 clues YOU would check on any company.",
        hard:
          "Cozy Cocoa scores 5/5 on our checklist (loved product, growing, profitable, secret-recipe moat, fair price) — a strong verdict. Now articulate at least 3 of the checklist clues in your own words to lock in the framework.",
      },
      minItems: 3,
      placeholder: 'One clue I would check...',
      hints: [
        {
          easy: 'What does it sell — and do people really want it?',
          medium: 'Clue 1: the product and its customers.',
          hard: 'The business: product clarity and demand.',
        },
        {
          easy: 'Is it growing bigger? Does it keep money (profit)?',
          medium: 'Clues 2 & 3: growth and profit.',
          hard: 'Growth trajectory and profitability.',
        },
        {
          easy: 'Does it have a moat? Is the price fair?',
          medium: 'Clues 4 & 5: the moat and the price.',
          hard: 'Moat durability and valuation.',
        },
      ],
      closer: {
        easy: "See? When you check all 5, you can crack ANY company case! 🕵️",
        medium: "Five clues, one verdict — that's how detectives (and investors) think.",
        hard: "A repeatable checklist turns guessing into reasoning. That's the analyst's edge.",
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Detective Test',
      questions: [
        {
          q: 'A Stock Detective checks if a company has a "moat." What is a moat?',
          options: [
            'Something copycats can\'t easily steal, like a brand or secret recipe',
            'A pile of water around the office',
            'The price of one share',
          ],
          correct: 0,
        },
        {
          q: 'Cozy Cocoa is amazing but suddenly costs WAY too much. Which clue just turned bad?',
          options: [
            'Clue 5 — is the price fair for what you get?',
            'Clue 2 — is it growing?',
            'Clue 1 — what does it sell?',
          ],
          correct: 0,
        },
        {
          q: 'What does it mean for a company to make a profit?',
          options: [
            'It keeps some money after paying all its costs',
            'It has the most customers',
            'It has the lowest price',
          ],
          correct: 0,
        },
      ],
      xpReward: 120,
      skillScores: { Investing: 120 },
    },

    // ─── Connect: real analysts use this exact checklist ────────────────
    {
      kind: 'connect',
      heading: '🌍 Real Detectives Do This',
      concept: {
        easy: 'Grown-up investors really DO use a checklist like yours to size up companies.',
        medium: 'The same 5 clues power how professional analysts evaluate real companies.',
        hard: 'This qualitative-plus-valuation framework mirrors how analysts build an investment thesis.',
      },
      examples: [
        {
          emoji: '🧙',
          who: 'Warren Buffett',
          story: {
            easy: "Buffett only buys companies he understands, that grow, make money, AND have a strong moat. He LOVES the word moat!",
            medium:
              "Warren Buffett famously looks for businesses he understands, with steady profits and a wide 'moat' — at a sensible price. Same checklist!",
            hard:
              "Buffett's approach — understandable business, durable moat, consistent earnings, bought with a margin of safety — is essentially this checklist applied for decades.",
          },
        },
        {
          emoji: '💼',
          who: 'Stock Analysts',
          story: {
            easy: "People whose JOB is studying companies write reports that check growth, profit, and price — just like your clues.",
            medium:
              "Professional analysts write research reports scoring a company on growth, profitability, competitive edge, and valuation before saying 'buy' or 'wait.'",
            hard:
              "Sell-side and buy-side analysts evaluate moat, growth, margins, and valuation, then issue a rating — a formal version of your verdict.",
          },
        },
        {
          emoji: '📋',
          who: 'The Power of a Checklist',
          story: {
            easy: "Pilots and doctors use checklists so they don't forget anything important. Detectives do too — so you never miss a clue!",
            medium:
              "Even experts forget things, so they use checklists. Running every company through the same 5 questions keeps you from missing a clue.",
            hard:
              "Checklists reduce errors of omission — that's why pilots, surgeons, and great investors all use them. Discipline beats memory.",
          },
        },
      ],
      kicker: {
        easy: 'You now think like a real investor. How cool is that? 🕵️',
        medium: 'You\'ve got the same toolkit the pros use — just kid-sized.',
        hard: 'A simple, disciplined checklist consistently beats gut-feel guessing.',
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "You did it! 🎉 You're a real Stock Detective now — 5 clues, one verdict, ANY company!",
        medium:
          "Capstone cracked! You can now run any company through the 5-question checklist and reach your own verdict like a real analyst.",
        hard:
          "You've completed the Stock Analysis lane: business, growth, profit, moat, and value now live in one repeatable framework you can apply anywhere.",
      },
      bonusTip: {
        easy: "Tip: a GREAT company checks most boxes. Missing one? Dig deeper before deciding! 🔍",
        medium: "Pro tip: few companies are perfect. Score the 5 clues, then weigh the misses before any verdict.",
        hard: "Edge: treat the checklist as a thinking tool, not a scoreboard — understand WHY a box is missed before concluding.",
      },
    },

    // ─── Real-world mission: be a Stock Detective on a real company ─────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'stock-detective',
        emoji: '🕵️',
        title: {
          easy: 'Be a Stock Detective!',
          medium: 'Run a real company through your 5-clue checklist',
          hard: 'Build a mini investment thesis on a company you love',
        },
        pitch: {
          easy: "Pick a real company you LOVE. Answer all 5 detective clues about it, then give it a verdict: GREAT, okay, or needs more digging!",
          medium:
            "Choose a real company you love, investigate all 5 checklist clues (with a grown-up), and write your final verdict.",
          hard:
            "Select a company you know well, work through all five checklist dimensions, and conclude with a reasoned verdict.",
        },
        steps: [
          {
            emoji: '❤️',
            text: {
              easy: 'Pick ONE company you really like (a toy, a snack, a game, a store).',
              medium: 'Choose one real company whose products you actually use and like.',
              hard: 'Select a company you understand well — your "circle of competence."',
            },
          },
          {
            emoji: '🛍️',
            text: {
              easy: 'Clue 1: What does it sell, and who buys it? Write it down.',
              medium: 'Clue 1: Describe what it sells and who its customers are.',
              hard: 'Clue 1: Summarize the product and customer base.',
            },
          },
          {
            emoji: '📈',
            text: {
              easy: 'Clues 2 & 3: Is it getting bigger? Does it make money? (Look it up with a grown-up.)',
              medium: 'Clues 2 & 3: Is it growing, and is it profitable? Check with a grown-up.',
              hard: 'Clues 2 & 3: Assess revenue growth and profitability (research together).',
            },
          },
          {
            emoji: '🏰',
            text: {
              easy: 'Clues 4 & 5: Does it have a moat? Does the price seem fair?',
              medium: 'Clues 4 & 5: Does it have a moat, and is the price fair for what it earns?',
              hard: 'Clues 4 & 5: Evaluate moat durability and whether valuation looks reasonable.',
            },
          },
          {
            emoji: '⚖️',
            text: {
              easy: 'Give your verdict: GREAT, okay, or needs more digging!',
              medium: 'Tally the clues and write your verdict: great, okay, or needs more digging.',
              hard: 'Conclude with a reasoned verdict based on the five clues.',
            },
          },
        ],
        reflection: [
          {
            key: 'company',
            prompt: {
              easy: 'Which company did you investigate?',
              medium: 'Which company did you put on the case?',
              hard: 'Name the company you analyzed.',
            },
            type: 'text',
          },
          {
            key: 'boxes-checked',
            prompt: {
              easy: 'How many of the 5 clues did it pass?',
              medium: 'How many of the 5 checklist clues did it clearly pass?',
              hard: 'How many of the five dimensions did it satisfy?',
            },
            type: 'number',
            suffix: '/ 5',
          },
          {
            key: 'verdict',
            prompt: {
              easy: 'What\'s your verdict — GREAT, okay, or needs more digging? Why?',
              medium: 'Your final verdict (great / okay / needs more digging) — and your reason?',
              hard: 'State your verdict and the key evidence behind it.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "Investigate together — look things up as a team. This is about learning to THINK like a detective, not buying any real stock.",
          medium:
            "Research the company together using any free source. The goal is reasoning like an analyst — there's no real buying or money involved.",
          hard:
            "Pretend analysis only — no real transactions. Research jointly; the aim is to model analyst-style thinking, not to make an investment.",
        },
        printables: {
          worksheets: [
            {
              title: 'My Stock Detective Case File',
              blocks: [
                { label: 'Company on the case', lines: 1 },
                { label: 'Clue 1 — What does it sell & who buys?', lines: 2 },
                { label: 'Clue 2 — Is it growing?', lines: 1 },
                { label: 'Clue 3 — Does it make money?', lines: 1 },
                { label: 'Clue 4 — Does it have a moat?', lines: 2 },
                { label: 'Clue 5 — Is the price fair?', lines: 1 },
                { label: 'My verdict (great / okay / needs more digging)', hint: 'And why?', lines: 3 },
              ],
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
