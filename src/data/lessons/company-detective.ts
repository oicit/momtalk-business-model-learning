/**
 * Company Detective — "Crack any business with 3 questions."
 *
 * The unlock skill: once a kid can answer THREE detective questions about
 * ANY company — (1) What does it SELL? (2) WHO buys it? (3) HOW does it
 * make money? — no business is a mystery anymore. This builds directly on
 * the Business 101 five blocks (offer, customer, money-in, money-out, profit)
 * by giving kids a fast, repeatable way to "read" any store, app, or
 * restaurant they walk past.
 *
 * Beat order:
 *   intro → think-deeper (why every business hides the same 3 answers) →
 *   concept-cards (the 3 detective questions) → connect (the same 3
 *   questions cracking famous businesses) → quiz → outro →
 *   real-world-mission (investigate one real business near you).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'company-detective',
  themeKey: 'company',
  emoji: '🔍',
  title: 'Company Detective',
  subtitle: {
    easy: 'Crack ANY business with 3 simple detective questions!',
    medium:
      'Become a business detective: 3 questions let you figure out how any company really works.',
    hard:
      'A repeatable framework — offer, customer, revenue — that lets you reverse-engineer any business you encounter.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Put on your detective hat! 🕵️ Every store, app, and restaurant has a SECRET: how it really works. Today you'll learn 3 magic questions that crack the case on ANY business. After this, no company is a mystery! 🔍",
        medium:
          "You already know the 5 building blocks of a business. Now let's turn them into a detective tool. With just 3 questions, you can walk past ANY store or open ANY app and figure out exactly how it works.",
        hard:
          "Knowing the parts of a business is one thing; being able to decode a real one fast is another. Today you get a 3-question framework that lets you reverse-engineer any company you meet — from a lemonade stand to a giant app.",
      },
    },

    // ─── Think-deeper: why every business hides the SAME 3 answers ──────
    {
      kind: 'think-deeper',
      heading: '🤔 The Detective Secret',
      intro: {
        easy: "Here's the trick every good detective knows.",
        medium: "Let's reason out WHY just 3 questions work on every business.",
        hard: 'A first-principles look at what every business has in common.',
      },
      layers: [
        {
          question: {
            easy: 'A toy store and a pizza shop look totally different. Do they have anything in common?',
            medium: 'A toy store and a pizza shop seem nothing alike. What do they secretly share?',
            hard: 'Two businesses in different industries — what structural features must both have?',
          },
          reveal: {
            easy:
              "Yes! BOTH sell something, BOTH have people who buy it, and BOTH take in money. Different stuff, same 3 secrets! 🔍",
            medium:
              "They both SELL something, both have CUSTOMERS who want it, and both bring in MONEY. The products differ, but the skeleton is identical.",
            hard:
              'Both must have an offer (what they sell), a customer segment (who pays), and a revenue mechanism (how cash comes in). The industry changes; the structure does not.',
          },
        },
        {
          question: {
            easy: 'So if every business has the same 3 secrets... what should a detective do?',
            medium: 'If every business hides the same 3 answers, what should you ask every time?',
            hard: 'Given a shared structure, what is the most efficient way to decode any business?',
          },
          reveal: {
            easy:
              'Ask the SAME 3 questions every time! What does it SELL? WHO buys it? HOW does it make money? 🎯',
            medium:
              'Use one checklist on everything: What does it SELL? WHO buys it? HOW does it make money? Same 3 questions, any company.',
            hard:
              'Apply one fixed lens: offer → customer → revenue. A repeatable checklist beats guessing case-by-case and works on a corner shop or a tech giant alike.',
          },
        },
        {
          question: {
            easy: "What if a business makes money in a sneaky way you can't see?",
            medium: "Some businesses make money in surprising ways — how do you catch that?",
            hard: 'How do you handle businesses whose revenue model is non-obvious (e.g. free apps)?',
          },
          reveal: {
            easy:
              "Keep asking 'HOW does it make money?' until it makes sense. A free game might make money from ADS or selling extra stuff. There's ALWAYS an answer! 🪄",
            medium:
              "Dig on question 3. A 'free' app isn't really free — it earns from ads, or extra items, or a paid version. Follow the money until it makes sense.",
            hard:
              "Press on the revenue question: free-to-use almost always means someone else pays (advertisers) or some users upgrade. Trace the cash flow and the hidden model appears.",
          },
        },
      ],
    },

    // ─── Concept cards: the 3 detective questions ───────────────────────
    {
      kind: 'concept-cards',
      heading: 'The 3 Detective Questions',
      subheading: 'Ask these about ANY business and the mystery falls apart.',
      cards: [
        {
          emoji: '🛍️',
          title: '1. What Does It SELL?',
          desc: {
            easy: "First clue: what does the business GIVE people? Toys? Food? A fun game? Find the THING they offer.",
            medium:
              'Question 1 is the OFFER. What product or service does this business hand over? A burger, a haircut, an app, a ride.',
            hard:
              'Identify the offer: the specific product or service the business provides in exchange for money. This is the core of what they do.',
          },
          color: '#FFF1E8',
        },
        {
          emoji: '🙋',
          title: '2. WHO Buys It?',
          desc: {
            easy: 'Second clue: WHO are the people that want it? Kids? Parents? Hungry people? Gamers? Find the customer!',
            medium:
              'Question 2 is the CUSTOMER. Who pays for the offer, and why do THEY want it? A business that knows its customer wins.',
            hard:
              'Identify the customer segment: who actually pays, and what need or want the offer solves for them. The same product can serve very different buyers.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '💰',
          title: '3. HOW Does It Make Money?',
          desc: {
            easy: 'Third clue: HOW does money come in? Selling one thing at a time? A monthly fee? Ads? Follow the money!',
            medium:
              'Question 3 is the MONEY-IN. How does cash actually arrive — per item, a subscription, ads, or selling extras inside a free app?',
            hard:
              'Identify the revenue model: the mechanism by which the offer turns into cash — unit sales, subscriptions, advertising, in-app purchases, or a mix.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '🍔',
          title: 'Crack the Case: McDonald\'s',
          desc: {
            easy: 'SELLS burgers & fries 🍟. WHO? Hungry families who want food fast. HOW? You pay for each meal. Case closed! ✅',
            medium:
              "SELLS: fast food (burgers, fries, drinks). WHO: busy families and people who want cheap, quick food. HOW: you pay per meal, millions of times a day. Solved!",
            hard:
              'Offer: fast, cheap, consistent food. Customer: time-pressed, value-seeking diners worldwide. Revenue: high-volume per-meal sales (plus franchising and real estate behind the scenes). Three questions, whole business mapped.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Connect: the 3 questions cracking famous businesses ────────────
    {
      kind: 'connect',
      heading: '🌍 Detective on the Big Ones',
      concept: {
        easy: 'The same 3 questions crack even the HUGE famous companies.',
        medium: 'Watch the 3 detective questions work on businesses you already know.',
        hard: 'The offer → customer → revenue lens scales from a stand to a global platform.',
      },
      examples: [
        {
          emoji: '🎮',
          who: 'Roblox',
          story: {
            easy: "SELLS a place to play LOTS of games 🎮. WHO? Kids who love playing. HOW? The game is free, but you can buy Robux for cool extras!",
            medium:
              "SELLS: a platform full of games. WHO: kids and teens who want to play and create. HOW: free to join, but money comes from buying Robux for extras. Sneaky-clever!",
            hard:
              'Offer: a free game platform plus creation tools. Customer: young players and creators. Revenue: in-app currency (Robux) and a cut of creator sales — classic free-to-play model.',
          },
        },
        {
          emoji: '🛒',
          who: 'Costco',
          story: {
            easy: "SELLS lots of stuff in BIG packs 📦. WHO? Families who want low prices. HOW? You pay to be a member, AND you pay for stuff.",
            medium:
              "SELLS: groceries and goods in bulk at low prices. WHO: families and small businesses who buy a lot. HOW: a yearly membership fee PLUS what you spend in the store.",
            hard:
              'Offer: bulk goods at razor-thin markups. Customer: value-focused households and small businesses. Revenue: most profit comes from membership fees, not the goods themselves — a non-obvious model a detective would uncover on question 3.',
          },
        },
        {
          emoji: '📺',
          who: 'YouTube',
          story: {
            easy: "SELLS videos to watch — and they're FREE! 📺 WHO? Anyone who likes watching. HOW? Ads! Companies pay to show you ads.",
            medium:
              "SELLS: a giant library of videos. WHO: pretty much everyone. HOW: it's free to watch because advertisers pay to put ads in front of you (and some people pay for no-ad Premium).",
            hard:
              'Offer: free video on demand. Customer: viewers (the audience) and advertisers (who pay). Revenue: ad sales against viewer attention, plus Premium subscriptions — the "free means someone else pays" model.',
          },
        },
      ],
      kicker: {
        easy: 'See? Same 3 questions, every time. You\'re a real business detective now! 🕵️',
        medium: 'One checklist cracked a game, a store, AND a video site. That\'s the power of asking the right 3 questions.',
        hard: 'A single framework decoded three wildly different business models — that\'s why the lens is worth memorizing.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Detective Test',
      questions: [
        {
          q: 'What are the 3 detective questions for ANY business?',
          options: [
            'What does it SELL? WHO buys it? HOW does it make money?',
            'Is it big? Is it old? Is it famous?',
            'What color is it? Where is it? Who made it?',
          ],
          correct: 0,
        },
        {
          q: 'A game is free to play. So how might it STILL make money?',
          options: [
            'From ads, or from selling extras inside the game',
            'It never makes any money at all',
            'By charging you to turn your phone on',
          ],
          correct: 0,
        },
        {
          q: 'Costco mostly makes its money from...',
          options: [
            'The yearly membership fee people pay to shop there',
            'Charging to walk in the door once',
            'Selling its parking lot',
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
        easy: "You did it! Now ANY business is easy to crack: What does it SELL? WHO buys it? HOW does it make money? 🕵️🔍",
        medium:
          "You've got the detective toolkit: 3 questions that unlock any company. The world is full of businesses just waiting for you to crack them.",
        hard:
          "You can now reverse-engineer almost any business on sight using offer → customer → revenue. That same lens is exactly how investors size up companies.",
      },
      bonusTip: {
        easy: "Tip: try the 3 questions on the next store you visit! 🛒",
        medium: "Pro tip: play 'Company Detective' everywhere — every shop and app is a case to solve.",
        hard: "Edge: the hardest question is usually #3 (revenue). When it's not obvious, follow the money until it is.",
      },
    },

    // ─── Real-world mission: investigate a real business ────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'company-detective',
        emoji: '🔍',
        title: {
          easy: 'Crack a Real Business!',
          medium: 'Investigate a real business near you',
          hard: 'Reverse-engineer a real-world business using the 3 questions',
        },
        pitch: {
          easy: "Pick a real store, app, or restaurant you know. Be a detective and answer the 3 questions about it!",
          medium:
            "Choose one real business — a shop, an app, or a restaurant — and use your 3 detective questions to figure out exactly how it works.",
          hard:
            "Select a real business you can observe and decode it: offer, customer, and revenue model — then check whether the model surprised you.",
        },
        steps: [
          {
            emoji: '🎯',
            text: {
              easy: 'Pick ONE business you know — a store, an app, or a place you eat.',
              medium: 'Choose one real business you can observe or already use.',
              hard: 'Select a single business you can directly observe or research.',
            },
          },
          {
            emoji: '🛍️',
            text: {
              easy: 'Question 1: What does it SELL? Write it down!',
              medium: 'Answer Q1 — the OFFER. What product or service does it provide?',
              hard: 'Determine the offer: the core product or service.',
            },
          },
          {
            emoji: '🙋',
            text: {
              easy: 'Question 2: WHO buys it? Kids? Parents? Hungry people?',
              medium: 'Answer Q2 — the CUSTOMER. Who pays, and why do they want it?',
              hard: 'Identify the customer segment and the need the offer solves.',
            },
          },
          {
            emoji: '💰',
            text: {
              easy: 'Question 3: HOW does it make money? (Ask a grown-up if it\'s sneaky!)',
              medium: 'Answer Q3 — the MONEY-IN. Per item? A fee? Ads? Extras?',
              hard: 'Map the revenue model; press on it if it isn\'t obvious.',
            },
          },
        ],
        reflection: [
          {
            key: 'business-name',
            prompt: {
              easy: 'Which business did you investigate?',
              medium: 'What business did you pick to decode?',
              hard: 'Which business did you analyze?',
            },
            type: 'text',
            placeholder: 'e.g. the toy store, Roblox, the pizza place',
          },
          {
            key: 'three-answers',
            prompt: {
              easy: 'What does it SELL, WHO buys it, and HOW does it make money?',
              medium: 'Write your 3 answers: offer, customer, and how it makes money.',
              hard: 'State the offer, customer segment, and revenue model you found.',
            },
            type: 'longtext',
          },
          {
            key: 'surprise',
            prompt: {
              easy: 'Did anything surprise you about how it makes money?',
              medium: 'Did its way of making money surprise you? How?',
              hard: 'Was the revenue model what you expected, or did it surprise you?',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is pretend detective work — just observing and talking, no buying needed. Help with the tricky 'how it makes money' question if it's a free app.",
          medium:
            "Observational only — no purchases required. The goal is for your child to notice structure. Help unpack hidden revenue models (ads, memberships, in-app buys) on question 3.",
          hard:
            "Pure observation and discussion; nothing to buy. The learning goal is decoding business structure. Question 3 (revenue) is the richest — help trace non-obvious models like advertising or membership fees.",
        },
        printables: {
          worksheets: [
            {
              title: 'My Detective Case File',
              blocks: [
                {
                  label: 'Business I investigated',
                  lines: 1,
                },
                {
                  label: '1. What does it SELL?',
                  hint: 'The product or service it offers.',
                  lines: 2,
                },
                {
                  label: '2. WHO buys it?',
                  hint: 'The people who pay — and why they want it.',
                  lines: 2,
                },
                {
                  label: '3. HOW does it make money?',
                  hint: 'Per item? A fee? Ads? Extras inside a free app?',
                  lines: 2,
                },
              ],
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
