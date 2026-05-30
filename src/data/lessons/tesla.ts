/**
 * Tesla: The Brand People Wait in Line For — a mission-driven brand premium.
 *
 * Tesla's hidden trick isn't just electric cars. It's a STORY people believe
 * in: "help the planet, drive the future, be part of something cool." Because
 * fans love the mission, they pay more, wait in line, and tell all their
 * friends — so Tesla barely needs to buy ads. The mission IS the marketing.
 *
 * Goal: a kid learns that a strong story/mission can make people LOVE a brand
 * and happily pay extra — and that loyal fans spread the word for free.
 *
 * Beat order:
 *   intro → think-deeper (why do people pay more & wait in line?) →
 *   concept-cards (mission, brand premium, free word-of-mouth, fans) →
 *   decision (how should a new lemonade brand stand out?) → connect (other
 *   mission/story brands) → quiz → outro → real-world-mission (pick a brand
 *   YOU love and figure out the story that makes you love it).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'tesla',
  themeKey: 'company',
  emoji: '🚗',
  title: 'Tesla',
  subtitle: {
    easy: 'Why do people wait in line — and pay MORE — for a Tesla?',
    medium:
      'Tesla barely buys ads. Fans who believe in the mission do the selling for free.',
    hard:
      'How a mission-driven brand earns a price premium and free word-of-mouth instead of paying for advertising.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Some cars cost a LOT — but people happily pay more for a Tesla, and even wait a long time to get one! Why? It's not just the car. It's the STORY: electric cars that help the planet, super-cool tech, and feeling like you're part of the future. 🚗⚡",
        medium:
          "Here's a puzzle: Tesla almost NEVER buys ads, yet everyone knows it and lots of people pay extra for one. The secret is a powerful MISSION — clean cars, cool tech, a better planet — that fans truly believe in. When people love your story, they sell it for you.",
        hard:
          "Tesla spends almost nothing on traditional advertising, yet commands huge demand and a price premium. The driver is a mission-driven brand: customers buy into a story (electrify transport, cool engineering, a cleaner future) and become evangelists. Today: how a story turns into money.",
      },
    },

    // ─── Think-deeper: why pay more & wait in line? ─────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Pay More for the Same Job?',
      intro: {
        easy: "Lots of cars can drive you to school. So why a Tesla? Let's dig in.",
        medium: "Many cars do the same job. Let's reason through why one brand earns extra.",
        hard: "First-principles look at where a brand premium actually comes from.",
      },
      layers: [
        {
          question: {
            easy: "Two cars both get you places. Why would someone pick the pricier one?",
            medium: "If two cars do the same job, why pay extra for one of them?",
            hard: "When products are functionally similar, what justifies a price gap?",
          },
          reveal: {
            easy:
              "Because it makes them FEEL something! A Tesla feels exciting, modern, and good-for-the-planet. People pay for the feeling, not just the wheels. ✨",
            medium:
              "Because the brand gives extra value beyond the wheels: a feeling of being modern, smart, and helping the planet. That feeling is worth real money to fans.",
            hard:
              "Emotional and identity value. The product solves a functional job, but the brand layers on meaning — status, values, belonging — which buyers will pay a premium to own.",
          },
        },
        {
          question: {
            easy: "Tesla barely buys ads. So how does everyone hear about it?",
            medium: "If Tesla rarely advertises, how does the word still spread?",
            hard: "Without paid advertising, what channel drives Tesla's awareness?",
          },
          reveal: {
            easy:
              "The FANS tell everyone! Happy owners post videos and brag to friends — that's free advertising Tesla didn't pay a penny for. 📣",
            medium:
              "Fans do it. Owners who love the mission post, share, and recommend it — free word-of-mouth that's more trusted than any paid ad.",
            hard:
              "Earned media. Passionate owners generate organic reach (referrals, social posts, reviews) that outperforms paid ads on both cost and trust.",
          },
        },
        {
          question: {
            easy: "What makes fans love it SO much they'll wait in line?",
            medium: "Why are people willing to wait — not just buy?",
            hard: "What converts a customer into a willing, patient evangelist?",
          },
          reveal: {
            easy:
              "They believe in the MISSION — cleaner air, cooler future. Believing in the story makes you proud to wait and proud to tell people. 🌎",
            medium:
              "A mission they believe in. When a brand stands for something bigger — a cleaner planet, the future — buyers feel part of it, so waiting feels worth it.",
            hard:
              "Shared mission creates identity alignment. When buyers see the brand as 'us,' loyalty and patience rise, and they advocate to signal their own values.",
          },
        },
      ],
    },

    // ─── Concept cards: the parts of the trick ──────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Mission-Brand Trick',
      subheading: 'Four pieces that turn a story into money.',
      cards: [
        {
          emoji: '🎯',
          title: 'A Mission to Believe In',
          desc: {
            easy: 'A mission is the BIG reason a company exists — like "make clean cars to help the planet." A good mission makes people cheer for you.',
            medium:
              'A mission is the bigger purpose behind a product. Tesla\'s — speed up clean energy — gives fans a reason to care, not just a thing to buy.',
            hard:
              'A mission is a brand\'s stated higher purpose. A credible, ambitious mission converts a transaction into a cause customers want to support.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '💎',
          title: 'Brand Premium',
          desc: {
            easy: 'When people happily pay MORE because they love the brand, that extra money is the "brand premium."',
            medium:
              'A brand premium is the extra people will pay just because of how a brand makes them feel — above what the plain product is worth.',
            hard:
              'Brand premium is the price uplift a brand commands over a generic equivalent — pure value created by meaning, trust, and identity.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '📣',
          title: 'Fans Are the Ad',
          desc: {
            easy: "Tesla barely buys ads. Happy owners brag for free — that's the cheapest, most trusted advertising there is!",
            medium:
              'Tesla spends almost nothing on ads because loyal fans recommend it for free. Friends trust friends more than commercials.',
            hard:
              'Word-of-mouth from advocates replaces paid media. It scales cheaply and carries higher trust, lowering customer-acquisition cost dramatically.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '❤️',
          title: 'Love = Loyalty',
          desc: {
            easy: 'When people LOVE a brand, they keep buying and tell everyone. Love turns one customer into many.',
            medium:
              'Emotional connection creates loyalty: fans come back, wait in line, and bring friends. One superfan is worth a lot.',
            hard:
              'Emotional loyalty raises retention and lifetime value while fueling referrals — a compounding growth loop that paid ads can\'t replicate.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Decision: how should a new brand stand out? ────────────────────
    {
      kind: 'decision',
      heading: '🧭 Your New Lemonade Brand',
      scenario: {
        easy:
          "You're starting a lemonade stand. Lots of kids sell lemonade. You want people to LOVE yours and pay a little more.",
        medium:
          "You're launching a lemonade brand on a busy street full of stands. How do you get people to pick — and pay more for — yours?",
        hard:
          "You're entering a crowded lemonade market. You want a brand premium and free word-of-mouth, not a price war.",
      },
      question: {
        easy: "What's your best move?",
        medium: "Which plan builds the strongest brand?",
        hard: "Which strategy best earns premium and advocacy?",
      },
      choices: [
        {
          label: {
            easy: 'Just sell it cheaper than everyone.',
            medium: 'Win only by being the cheapest.',
            hard: 'Compete purely on lowest price.',
          },
          feedback: {
            easy: "Cheaper might sell some, but anyone can drop their price too — and nobody falls in LOVE with 'cheapest.'",
            medium: "Price wars are easy to copy and shrink your profit. Cheap rarely earns loyalty or word-of-mouth.",
            hard: "A pure price strategy is undefensible and margin-eroding; it builds no emotional moat.",
          },
        },
        {
          label: {
            easy: 'Give it a fun mission — like "1¢ from every cup plants a tree." 🌳',
            medium: 'Stand for something: a mission fans believe in, plus great lemonade.',
            hard: 'Pair a quality product with a credible mission customers can champion.',
          },
          feedback: {
            easy: "YES! Now people aren't just buying lemonade — they're helping plant trees. They'll feel good, pay a bit more, AND tell friends!",
            medium: "Exactly. A real mission gives people a reason to care, pay extra, and spread the word for free — just like Tesla.",
            hard: "Correct. A meaningful mission creates differentiation, premium pricing, and organic advocacy that price-cutting can't.",
          },
          isPreferred: true,
        },
        {
          label: {
            easy: 'Make a giant flashy sign and yell the loudest.',
            medium: 'Spend everything on loud ads and decorations.',
            hard: 'Maximize paid promotion and signage.',
          },
          feedback: {
            easy: "Loud gets attention for a minute, but if there's no story to love, people forget you fast.",
            medium: "Attention without meaning fades. Ads cost money every day; a beloved mission keeps working for free.",
            hard: "Paid attention is rented, not owned. Without a story, awareness decays the moment spending stops.",
          },
        },
      ],
      realWorldReveal: {
        easy:
          "This is Tesla's real trick! It barely buys ads — its mission to help the planet makes fans love it, pay more, and tell everyone. The story does the selling. 🚗⚡",
        medium:
          "That's the Tesla playbook: a mission people believe in earns a price premium AND free word-of-mouth, so almost no ad money is needed.",
        hard:
          "This mirrors Tesla: a strong mission generates premium pricing plus organic advocacy, replacing the advertising budget most rivals depend on.",
      },
    },

    // ─── Connect: other mission/story brands ────────────────────────────
    {
      kind: 'connect',
      heading: '🌍 Brands People LOVE',
      concept: {
        easy: 'Lots of brands win because of a story or feeling — not just the product.',
        medium: 'The "believe in our story" trick powers many beloved brands, not only Tesla.',
        hard: 'Mission and identity-driven branding recurs across the most loved companies.',
      },
      examples: [
        {
          emoji: '🍎',
          who: 'Apple',
          story: {
            easy: "People line up overnight for new iPhones! They love feeling creative and 'different,' so they happily pay more.",
            medium:
              "Apple sells 'think different' and beautiful design. Fans camp out for launches and pay a premium for the feeling and the brand.",
            hard:
              "Apple monetizes identity and design love, sustaining premium pricing and fierce loyalty far beyond raw specs.",
          },
        },
        {
          emoji: '👟',
          who: 'Nike',
          story: {
            easy: "Nike says 'Just Do It' — be brave, try hard. People buy the feeling of being a champion!",
            medium:
              "Nike sells inspiration and heroes, not just shoes. The story of effort and greatness lets it charge more than a plain sneaker.",
            hard:
              "Nike's emotional storytelling and athlete mythology drive brand premium and loyalty across commodity footwear.",
          },
        },
        {
          emoji: '🐶',
          who: 'A Toy or Game YOU Love',
          story: {
            easy: "Think of one you'd line up for. Bet there's a story or feeling — not just the toy — that makes you love it!",
            medium:
              "Your favorite brand probably hooks you with a feeling or story, not only the product. That's the same trick at work.",
            hard:
              "Even your own preferences likely trace to narrative and identity, not pure utility — the mechanism is universal.",
          },
        },
      ],
      kicker: {
        easy: 'A great story can be worth more than a great price tag. ✨',
        medium: "Make people FEEL something, and they'll pay more and bring friends.",
        hard: 'Meaning, not just function, is what earns premium and advocacy.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Brand Power Check',
      questions: [
        {
          q: "Why do many people happily pay MORE for a Tesla?",
          options: [
            'They believe in its mission and love the brand',
            'Because Tesla buys the most ads',
            'Because it is always the cheapest car',
          ],
          correct: 0,
        },
        {
          q: 'How does Tesla get the word out without spending much on ads?',
          options: [
            'Happy fans recommend it for free',
            'It pays for ads on every TV channel',
            'It keeps itself a total secret',
          ],
          correct: 0,
        },
        {
          q: 'What is a "brand premium"?',
          options: [
            'Extra money people happily pay because they love the brand',
            'A discount for buying two',
            'A tax on selling cars',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Branding: 100 },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know Tesla's secret: a story people LOVE makes them pay more and tell everyone — no big ads needed! 🚗⚡",
        medium:
          "You learned how a strong mission turns into money: fans pay a premium and spread the word for free. The story IS the marketing.",
        hard:
          "You've grasped the mission-driven brand: meaning earns premium pricing and organic advocacy, reducing the need to buy attention.",
      },
      bonusTip: {
        easy: "Tip: the best brands make you FEEL something. ❤️",
        medium: "Pro tip: figure out what feeling your brand gives — that's your superpower.",
        hard: "Edge: a credible mission compounds into loyalty and free reach over time.",
      },
    },

    // ─── Real-world mission: decode a brand you love ────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'tesla',
        emoji: '❤️',
        title: {
          easy: 'Decode a Brand YOU Love',
          medium: 'Find the story behind a brand you love',
          hard: 'Decode the mission behind a brand you love',
        },
        pitch: {
          easy: "Pick a brand you really love. Become a detective and figure out what STORY or FEELING makes you love it!",
          medium:
            "Choose a brand you love, then uncover the story or feeling that hooks you — and whether fans spread it for free.",
          hard:
            "Select a brand you love and identify its mission, the feeling it sells, and how it earns advocacy.",
        },
        steps: [
          {
            emoji: '❤️',
            text: {
              easy: 'Pick ONE brand you really love (a toy, game, shoe, snack — anything!).',
              medium: 'Choose one brand you genuinely love and write its name.',
              hard: 'Select one brand you feel real loyalty toward.',
            },
          },
          {
            emoji: '🔍',
            text: {
              easy: 'Ask yourself: what FEELING does it give me? (cool? happy? brave?)',
              medium: 'Name the feeling it gives you and the story it seems to tell.',
              hard: 'Articulate the emotional payoff and the brand\'s implied mission.',
            },
          },
          {
            emoji: '📣',
            text: {
              easy: 'Have you ever told a friend about it? Would you wait in line for it?',
              medium: 'Notice if you (or friends) recommend it for free — that\'s word-of-mouth.',
              hard: 'Assess whether the brand earns organic advocacy from you and peers.',
            },
          },
          {
            emoji: '🎯',
            text: {
              easy: 'Decide: would you pay a little MORE for it than a plain one? Why?',
              medium: 'Judge whether you\'d pay a premium for it, and explain why.',
              hard: 'Evaluate the brand premium you personally assign and its driver.',
            },
          },
        ],
        reflection: [
          {
            key: 'brand-name',
            prompt: {
              easy: 'Which brand did you pick?',
              medium: 'Which brand did you decode?',
              hard: 'Name the brand analyzed.',
            },
            type: 'text',
          },
          {
            key: 'feeling-story',
            prompt: {
              easy: 'What FEELING or STORY makes you love it?',
              medium: 'What feeling or story makes you love this brand?',
              hard: 'What emotional value or mission drives your loyalty?',
            },
            type: 'longtext',
          },
          {
            key: 'pay-more',
            prompt: {
              easy: 'Would you pay a little more for it than a plain one? Why?',
              medium: 'Would you pay a premium for it? Explain your reasoning.',
              hard: 'Quantify or justify the premium you\'d pay and why.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "Chat together about WHY they love the brand — feelings, friends, or the story. There's nothing to buy; it's just noticing how brands win our hearts.",
          medium:
            "This is an observe-and-discuss activity, not a purchase. Talk through the feeling and story behind a beloved brand — great for spotting marketing in everyday life.",
          hard:
            "Purely reflective — no spending involved. Use it to discuss how mission and emotion (not just product) shape preference and willingness to pay.",
        },
      },
    },
  ],
};

export default lesson;
