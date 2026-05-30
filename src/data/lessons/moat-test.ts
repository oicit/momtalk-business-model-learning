/**
 * The Moat Test — "What stops a copycat?"
 *
 * A "moat" is the thing that protects a great company from copycats — like
 * the water-filled moat around a castle. Kids learn to spot real moats:
 * a beloved brand (Disney), a secret recipe (Coca-Cola), being the cheapest
 * because you're huge (Costco), everyone's already on it (Roblox/YouTube —
 * network effects), and things that work together (Lego, Apple).
 *
 * The core tool is the "Moat Test": if a copycat opened tomorrow, would
 * customers still stick with the original? Why? A real moat means yes.
 *
 * Beat order:
 *   intro → think-deeper (why can't a copycat just steal everything?) →
 *   concept-cards (the 5 kinds of moats) → decision (which lemonade stand
 *   has a real moat?) → quiz → connect (moats in giant companies) →
 *   outro → real-world-mission (find a favorite company's moat).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'moat-test',
  themeKey: 'company',
  emoji: '🏰',
  title: 'The Moat Test',
  subtitle: {
    easy: 'What stops a copycat from stealing a company\'s customers?',
    medium:
      'Great companies have a "moat" — something that protects them from copycats. Learn to spot it.',
    hard:
      'Competitive moats — brand, secrets, scale, network effects, lock-in — and how to test if one is real.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Imagine you build the BEST lemonade stand ever. Tomorrow, a kid copies you right next door! 😱 What stops them from taking all your customers? Great companies have a secret shield called a MOAT — like the water around a castle. Let's go find some! 🏰",
        medium:
          "Here's a scary question for any business: what if someone just COPIES you? The best companies have something that makes them hard to copy — it's called a moat, like the water that protects a castle. Today you'll learn to spot one.",
        hard:
          "A copycat can steal your idea overnight — unless something protects you. That protection is called a moat: a durable advantage that keeps customers loyal even when competitors show up. Let's learn the kinds of moats and how to test if one is real.",
      },
    },

    // ─── Think-deeper: why can't a copycat just take everything? ────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Doesn\'t Everyone Just Copy the Winner?',
      intro: {
        easy: "Let's puzzle this out together.",
        medium: "Let's reason through what really protects a great company.",
        hard: "First-principles look at what makes an advantage durable.",
      },
      layers: [
        {
          question: {
            easy: "If Disney makes the most-loved movies, why don't other companies just make the same kind?",
            medium: "If Disney is so successful, why can't a copycat just make movies exactly like it?",
            hard: "Why can't a well-funded rival simply replicate a category leader's product?",
          },
          reveal: {
            easy:
              "They try! But people already LOVE Mickey Mouse, Elsa, and Spider-Man. A copycat would have to make you love brand-new characters first — and that takes years and years.",
            medium:
              "Anyone can make a cartoon, but they can't make YOUR cartoon. Disney owns characters families have loved for almost 100 years. That love took decades to build and can't be copied overnight.",
            hard:
              "Replicating the product is easy; replicating accumulated brand affection, owned characters, and trust is not. Those assets compound over time and can't be bought quickly — that's the moat.",
          },
        },
        {
          question: {
            easy: "What's something a copycat CAN'T just buy at the store?",
            medium: "What kinds of advantages are hard to copy even with lots of money?",
            hard: "Which advantages resist replication even against deep-pocketed competitors?",
          },
          reveal: {
            easy:
              "Things like a secret recipe 🤫, millions of people already using your app, or a brand everyone trusts. Money can buy a building — but not those!",
            medium:
              "A secret recipe, a giant crowd already on your platform, a name people trust, or a price so low only a huge company can match it. You can buy a factory; you can't buy any of those overnight.",
            hard:
              "Trade secrets, network effects, brand trust, and scale-based cost advantages. These are path-dependent — they require time, volume, or accumulated reputation that capital alone can't shortcut.",
          },
        },
        {
          question: {
            easy: "So how do you TEST if a company has a real shield?",
            medium: "How could you quickly check whether a company actually has a moat?",
            hard: "What's a simple heuristic to test for a durable competitive advantage?",
          },
          reveal: {
            easy:
              "Easy! Ask: 'If a copycat opened tomorrow, would people STILL pick the original?' If yes — that's a moat! 🏰",
            medium:
              "The Moat Test: 'If an exact copycat opened tomorrow, would customers still stick with the original?' If yes, ask WHY — that 'why' is the moat.",
            hard:
              "The Moat Test: imagine a perfect copycat launches tomorrow. Do customers stay? If yes, the reason they stay names the moat. If they'd switch instantly, there is no moat.",
          },
        },
      ],
    },

    // ─── Concept cards: the 5 kinds of moats ────────────────────────────
    {
      kind: 'concept-cards',
      heading: '🏰 The 5 Kinds of Moats',
      subheading: 'Five shields that keep copycats out. See if you can spot them in companies you know!',
      cards: [
        {
          emoji: '❤️',
          title: 'A Brand Everyone Loves',
          desc: {
            easy: 'People LOVE the name so much they won\'t switch. Like Disney — you want the REAL Mickey, not a copy!',
            medium:
              'When customers trust and love a name, copycats can\'t win them over. Disney spent ~100 years making families love its characters.',
            hard:
              'Brand equity: accumulated trust and emotional attachment that makes customers prefer you even at higher prices. Disney is the classic example.',
          },
          color: '#FFE8F0',
        },
        {
          emoji: '🤫',
          title: 'A Secret Recipe',
          desc: {
            easy: 'Nobody knows exactly how it\'s made! Coca-Cola\'s recipe is a famous secret nobody can copy.',
            medium:
              'A secret nobody else has — like Coca-Cola\'s recipe or Chick-fil-A\'s sauce. Copycats can guess, but they can\'t match it exactly.',
            hard:
              'Trade secrets and proprietary processes (Coca-Cola\'s formula, KFC\'s spices) that competitors legally and practically cannot replicate.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🏷️',
          title: 'Cheapest Because You\'re HUGE',
          desc: {
            easy: 'When a store is gigantic, it can sell for less than anyone. Costco and Walmart are SO big they win on price.',
            medium:
              'Buying in giant amounts lets Costco and Walmart sell cheaper than small copycats ever could. Their size IS the shield.',
            hard:
              'Scale-based cost advantage: enormous purchasing volume (Costco, Walmart) yields lower unit costs a smaller rival cannot match.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🌐',
          title: 'Everyone\'s Already On It',
          desc: {
            easy: 'You play Roblox because your FRIENDS are on Roblox! A copy is empty and no fun.',
            medium:
              'Roblox and YouTube are fun because everyone\'s already there. A copycat would be empty — that\'s called a network effect.',
            hard:
              'Network effects: each new user makes the product more valuable (Roblox, YouTube), so an empty copycat can\'t catch up.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '🧩',
          title: 'Things That Work Together',
          desc: {
            easy: 'Lego bricks ALL snap together, and your iPhone, iPad, and AirPods are best friends. Switching is a pain!',
            medium:
              'Once your Lego or Apple stuff all works together, switching means giving it all up. That stickiness keeps you loyal.',
            hard:
              'Switching costs / ecosystem lock-in: compatible products (Lego, Apple) raise the cost of leaving, retaining customers.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Decision: which stand has a REAL moat? ─────────────────────────
    {
      kind: 'decision',
      heading: '🍋 Spot the Real Moat',
      scenario: {
        easy: "Three kids run lemonade stands. A copycat just opened next to all of them!",
        medium:
          "Three lemonade stands each face a copycat opening right next door tomorrow. Which one is truly protected?",
        hard:
          "Three stands face identical copycat competition. Evaluate which possesses a durable moat versus a copyable feature.",
      },
      question: {
        easy: "Which stand will KEEP its customers? 🤔",
        medium: "Which stand has a real moat — something the copycat can't steal?",
        hard: "Which stand's advantage survives the Moat Test?",
      },
      choices: [
        {
          label: {
            easy: 'Maya, who uses a fancy yellow cup',
            medium: 'Maya — she serves in a fancy yellow cup',
            hard: 'Maya — differentiates only via cup design',
          },
          feedback: {
            easy: "Uh oh — the copycat can just buy the SAME cups tomorrow! A nice cup isn't a moat.",
            medium:
              "A cup is easy to copy — buy the same ones and the advantage is gone. That's a feature, not a moat.",
            hard:
              "Cosmetic differentiation is trivially replicable. No moat — fails the test immediately.",
          },
        },
        {
          label: {
            easy: 'Leo, whose Grandma\'s secret recipe nobody knows',
            medium: 'Leo — his lemonade uses Grandma\'s secret recipe',
            hard: 'Leo — proprietary secret recipe',
          },
          feedback: {
            easy: "YES! 🎉 The copycat can copy the stand and the cups — but NOT the secret recipe. That's a real moat!",
            medium:
              "Exactly! The copycat can match everything except the taste. A secret recipe passes the Moat Test — customers stay for the flavor only Leo has.",
            hard:
              "Correct. A trade secret is the durable advantage here — the copycat cannot replicate the product itself. Real moat.",
          },
          isPreferred: true,
        },
        {
          label: {
            easy: 'Sam, who put up a big colorful sign',
            medium: 'Sam — he has a big eye-catching sign',
            hard: 'Sam — superior signage / marketing',
          },
          feedback: {
            easy: "A sign is nice, but the copycat can make a BIGGER one tomorrow. Not a moat!",
            medium:
              "Signs are easy to copy or beat. It might bring people once, but it won't keep them. Not a moat.",
            hard:
              "Marketing assets are easily matched or outspent. No durable advantage — fails the test.",
          },
        },
      ],
      realWorldReveal: {
        easy:
          "Only Leo's secret recipe passed the Moat Test! Real companies work the same way: Coca-Cola's recipe and Chick-fil-A's sauce are secrets copycats just can't steal. 🤫",
        medium:
          "Leo wins because his moat (a secret recipe) can't be copied. This is exactly how Coca-Cola and Chick-fil-A protect themselves — competitors can copy the store, not the secret.",
        hard:
          "Leo's trade secret is the only choice that survives the Moat Test. Real-world parallel: Coca-Cola's formula and KFC's spice blend remain uncopied for decades, sustaining pricing power.",
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Moat Check',
      questions: [
        {
          q: 'What is a "moat" for a company?',
          options: [
            'Something that protects it from copycats',
            'A type of money companies use',
            'A boss who runs the company',
          ],
          correct: 0,
        },
        {
          q: 'Why is Roblox hard to copy?',
          options: [
            'Everyone\'s friends are already on it (network effect)',
            'It has the cheapest price',
            'It uses a secret recipe',
          ],
          correct: 0,
        },
        {
          q: 'What is the "Moat Test"?',
          options: [
            'If a copycat opened tomorrow, would customers still stick with the original?',
            'How deep is the water around the castle?',
            'How much money the company has saved',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Investing: 100 },
    },

    // ─── Connect: moats in giant companies ──────────────────────────────
    {
      kind: 'connect',
      heading: '🌍 Moats in the Real World',
      concept: {
        easy: 'Almost every company you love has one of these five shields.',
        medium: 'The biggest companies in the world all win because of a moat you can name.',
        hard: 'Durable competitive advantages explain most long-lasting market leaders.',
      },
      examples: [
        {
          emoji: '🥤',
          who: 'Coca-Cola',
          story: {
            easy: "Coca-Cola's recipe is a SUPER secret. Copycats make their own soda, but they can't make exactly THIS taste!",
            medium:
              "Coca-Cola has guarded its recipe for over 100 years. Other sodas exist, but none taste exactly the same — a secret-recipe moat.",
            hard:
              "Coca-Cola pairs a trade-secret formula with a globally beloved brand — two stacked moats that have defended its lead for a century.",
          },
        },
        {
          emoji: '📺',
          who: 'YouTube',
          story: {
            easy: "Everybody puts their videos on YouTube because everybody WATCHES on YouTube. A copy would have nothing to watch!",
            medium:
              "Creators post on YouTube because viewers are there; viewers come because creators are there. A copycat starts empty — that's a network-effect moat.",
            hard:
              "YouTube's two-sided network effect compounds: more creators attract more viewers and vice versa, making a cold-start competitor nearly impossible.",
          },
        },
        {
          emoji: '🍎',
          who: 'Apple',
          story: {
            easy: "Your iPhone, iPad, and AirPods all work together like best friends. Switching to something else is a big hassle!",
            medium:
              "Once you own an iPhone, iPad, and AirPods, they all connect smoothly. Leaving means giving that up — an ecosystem lock-in moat.",
            hard:
              "Apple's integrated ecosystem raises switching costs: seamless cross-device features create stickiness that retains customers and supports premium pricing.",
          },
        },
      ],
      kicker: {
        easy: 'Next time you love a company, ask: what\'s its moat? 🏰',
        medium: 'Now you can look at ANY favorite company and name the shield protecting it.',
        hard: 'Identifying the moat — and judging whether it\'s widening or shrinking — is the heart of company analysis.',
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you can spot a company's secret shield — its MOAT! 🏰 Love, secrets, size, crowds, and things that work together.",
        medium:
          "You learned the five kinds of moats AND the Moat Test. Now you can look at any company and ask what really protects it.",
        hard:
          "You can now classify moats — brand, secrets, scale, network effects, lock-in — and apply the Moat Test to judge durability.",
      },
      bonusTip: {
        easy: "Tip: the strongest companies have MORE than one moat — like Coca-Cola (a secret recipe AND a loved brand)! 💪",
        medium: "Pro tip: the best companies stack two or more moats. Coca-Cola has a secret recipe AND a beloved brand.",
        hard: "Edge: stacked moats are the most durable. The best investors hunt for advantages that are widening, not just present.",
      },
    },

    // ─── Real-world mission: find a favorite company's moat ─────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'moat-test',
        emoji: '🏰',
        title: {
          easy: 'Find Your Favorite Company\'s Moat',
          medium: 'Run the Moat Test on a company you love',
          hard: 'Identify and classify a favorite company\'s moat',
        },
        pitch: {
          easy: "Pick a company you LOVE and become a moat detective — figure out what stops copycats from stealing all its customers! 🕵️",
          medium:
            "Choose a real company you use, then run the Moat Test on it: if a copycat opened tomorrow, would people still stick with the original? Find out WHY.",
          hard:
            "Select a company you know well and identify which of the five moat types protects it — then judge how strong that moat really is.",
        },
        steps: [
          {
            emoji: '⭐',
            text: {
              easy: 'Pick ONE company you really like (a game, a store, a snack, a toy).',
              medium: 'Choose one company you use or love — a game, store, snack, or app.',
              hard: 'Select one company you have first-hand experience with.',
            },
          },
          {
            emoji: '🕵️',
            text: {
              easy: 'Ask: "If a copycat opened tomorrow, would I still pick the original?" Yes or no?',
              medium: 'Run the Moat Test: if an exact copycat opened tomorrow, would customers stay? Yes or no?',
              hard: 'Apply the Moat Test: would customers remain loyal against a perfect copycat?',
            },
          },
          {
            emoji: '🏰',
            text: {
              easy: 'If YES — figure out WHY. Is it a loved brand, a secret, huge size, a crowd, or things that work together?',
              medium: 'If yes, match the reason to one of the 5 moats: brand, secret recipe, low-cost scale, network effect, or lock-in.',
              hard: 'Classify the advantage into one (or more) of the five moat categories and note your evidence.',
            },
          },
          {
            emoji: '🗣️',
            text: {
              easy: 'Tell a grown-up about the moat you found — like a real company detective!',
              medium: 'Explain to a grown-up which moat you found and why it stops copycats.',
              hard: 'Articulate your moat thesis to someone and defend why it\'s durable.',
            },
          },
        ],
        reflection: [
          {
            key: 'company',
            prompt: {
              easy: 'Which company did you pick?',
              medium: 'Which company did you analyze?',
              hard: 'Subject company:',
            },
            type: 'text',
            placeholder: 'e.g. Roblox, Lego, Costco',
          },
          {
            key: 'moat-type',
            prompt: {
              easy: 'What kind of moat does it have? (loved brand, secret, huge size, a crowd, or works-together)',
              medium: 'Which of the 5 moats protects it? Why did you pick that one?',
              hard: 'Which moat type(s) apply, and what evidence supports your choice?',
            },
            type: 'longtext',
          },
          {
            key: 'copycat',
            prompt: {
              easy: 'If a copycat opened tomorrow, would people still pick the original? Why?',
              medium: 'Would the company survive an exact copycat? Explain your reasoning.',
              hard: 'How would the company fare against a well-funded copycat, and why?',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "No buying or accounts needed — this is just looking and thinking together. Help your kid ask 'why' until they hit the real reason customers stay.",
          medium:
            "Purely observational — no purchases or sign-ups. Great dinner-table chat: pick a brand and push past the first answer to the real, hard-to-copy advantage.",
          hard:
            "Observation and reasoning only. Encourage your child to distinguish a copyable feature (a logo, a price promo) from a durable moat (a secret, a network, real scale).",
        },
        printables: {
          worksheets: [
            {
              title: 'My Moat Detective Report',
              blocks: [
                {
                  label: 'Company I picked',
                  lines: 1,
                },
                {
                  label: 'Would a copycat steal its customers? (yes / no)',
                  lines: 1,
                },
                {
                  label: 'The moat I found (and why copycats can\'t beat it)',
                  hint: 'Loved brand? Secret recipe? Huge size? A crowd? Things that work together?',
                  lines: 4,
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
