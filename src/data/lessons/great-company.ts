/**
 * What Makes a Great Company? — "Moat, Fans, and Growth."
 *
 * Most kids can name companies they like. Far fewer can say WHY one company
 * is great while another is just okay. This lesson hands them a simple,
 * durable lens they can use for life: a great company has (1) a MOAT —
 * something that stops copycats, (2) LOYAL FANS who keep coming back, and
 * (3) it keeps GROWING. The three test questions a kid can carry forever:
 *   "Would people be sad if it disappeared? Would they pay more? Is it growing?"
 *
 * Familiar examples do the heavy lifting: Lego's compatible bricks, Disney's
 * characters, Costco's loyal members, Chick-fil-A's service.
 *
 * Beat order:
 *   intro → think-deeper (what makes a company hard to copy?) →
 *   concept-cards (moat / loyal fans / growing) → decision (which company
 *   would you invest in?) → connect (the 3 signs in real companies) →
 *   quiz → outro → real-world-mission (score a company you love).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'great-company',
  themeKey: 'business',
  emoji: '🏆',
  title: 'What Makes a Great Company?',
  subtitle: {
    easy: 'A great company is hard to copy, has fans who love it, and keeps getting bigger!',
    medium:
      'Three signs of a truly great company: a moat that blocks copycats, loyal fans, and steady growth.',
    hard:
      'Competitive moats, customer loyalty, and durable growth — the lens great investors use to separate great companies from merely okay ones.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Lots of companies are OKAY. But a FEW are GREAT. 🏆 What's the difference? Great companies are hard to copy, have fans who love them, and keep growing bigger. Let's learn how to spot one!",
        medium:
          "Anyone can open a lemonade stand. But why do SOME companies become giants while others fade away? Today you'll learn the three secret signs of a truly great company — and how to spot them yourself.",
        hard:
          "What separates a great company from a forgettable one? It's not just a good product — it's a moat that blocks copycats, customers who stay loyal, and growth that keeps compounding. Let's build the lens great investors use.",
      },
    },

    // ─── Think-deeper: what makes a company hard to copy? ───────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Can\'t Everyone Just Copy It?',
      intro: {
        easy: "Let's think about this together.",
        medium: "Let's reason through why some companies are nearly impossible to beat.",
        hard: "First-principles look at why some businesses stay on top for decades.",
      },
      layers: [
        {
          question: {
            easy: "If you opened a lemonade stand and made GREAT lemonade, what would your neighbor do?",
            medium: "If your lemonade stand got super popular, what would happen next door?",
            hard: "If you found a profitable, easy-to-copy business, what does competition do to your profits?",
          },
          reveal: {
            easy:
              "They'd open their OWN lemonade stand right next to you! When something is easy to copy, lots of people copy it — and then nobody's special anymore.",
            medium:
              "Copycats appear! Easy money attracts crowds. Soon there are five lemonade stands and everyone has to drop their price. Easy-to-copy means hard-to-keep-special.",
            hard:
              "Competitors flood in until profits get squeezed to almost nothing. Without something protecting you, success invites imitation that erodes your edge.",
          },
        },
        {
          question: {
            easy: "So what could STOP your neighbor from copying you?",
            medium: "What could make it really HARD for a copycat to steal your customers?",
            hard: "What kind of advantage actually keeps competitors out?",
          },
          reveal: {
            easy:
              "Maybe you have a SECRET recipe nobody can guess. Or all the kids LOVE you and won't leave. That wall around your business is called a MOAT. 🏰",
            medium:
              "A secret recipe, a brand everyone trusts, or customers who'd never switch. That protective wall is called a MOAT — like the water around a castle that keeps invaders out.",
            hard:
              "A moat: a structural advantage like a beloved brand, network effects, switching costs, or scale that makes you cheaper or better. It's what keeps the castle of profits defended.",
          },
        },
        {
          question: {
            easy: "And here's the BIG question: would people be sad if your company disappeared?",
            medium: "Here's the real test: if your company vanished tomorrow, would customers be upset?",
            hard: "The ultimate moat test: how irreplaceable is the company to its customers?",
          },
          reveal: {
            easy:
              "If people would be SAD and miss you — that means they really love you, and a copycat can't easily replace you. That's the heart of a great company! 💛",
            medium:
              "If customers would genuinely miss it and have nowhere good to go, you've found a great company. The harder it is to replace, the stronger the moat.",
            hard:
              "If customers would feel real pain switching away, you have pricing power and loyalty — the signs of a durable, great business. Irreplaceability IS the moat.",
          },
        },
      ],
    },

    // ─── Concept cards: the three signs of a great company ──────────────
    {
      kind: 'concept-cards',
      heading: 'The 3 Signs of a Great Company',
      subheading: 'Check for these three things and you can spot a winner.',
      cards: [
        {
          emoji: '🏰',
          title: 'It Has a Moat',
          desc: {
            easy: 'A moat is something that stops copycats. Lego bricks all snap together — other blocks just don\'t feel the same!',
            medium:
              'A moat is a wall that keeps competitors out — a secret recipe, a trusted brand, or a product nobody can match. Lego bricks click together perfectly, so copycats lose.',
            hard:
              'A moat is a durable competitive advantage — brand, network effects, switching costs, or scale. Lego\'s compatible-brick system makes switching painful and copies inferior.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '💛',
          title: 'It Has Loyal Fans',
          desc: {
            easy: 'Great companies have fans who keep coming back. Costco members happily pay just to shop there — every single year!',
            medium:
              'Loyal customers return again and again, even when there are cheaper choices. Costco members pay a yearly fee just to shop, and almost all of them renew.',
            hard:
              'Loyalty shows up as repeat purchases, high renewal rates, and willingness to pay more. Costco\'s ~90% membership renewal is a textbook loyalty signal.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🤝',
          title: 'People Would Pay More',
          desc: {
            easy: 'At Chick-fil-A the workers are SO nice that people happily wait in long lines. Great service makes people choose you over cheaper food.',
            medium:
              'When people will pay more or wait longer for YOU, that\'s a great sign. Chick-fil-A\'s friendly service makes customers pick it over cheaper, faster options.',
            hard:
              'Pricing power — customers paying a premium for service, brand, or experience — is hard evidence of a moat. Chick-fil-A converts service into loyalty and per-store sales that dwarf rivals.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '📈',
          title: 'It Keeps Growing',
          desc: {
            easy: 'Great companies get a little bigger every year. Disney started with one mouse and now has movies, parks, and shows everywhere!',
            medium:
              'A great company keeps growing — more customers, more places, more stuff people love. Disney grew from one cartoon mouse into movies, parks, and streaming worldwide.',
            hard:
              'Durable growth — expanding revenue, customers, or markets — signals the moat is widening, not eroding. Disney compounded one character into a global, multi-segment empire.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Decision: which company would you invest in? ───────────────────
    {
      kind: 'decision',
      heading: '🧐 Which One Is the GREAT Company?',
      scenario: {
        easy: "Two snack shops just opened. 'Copycat Cones' sells the same ice cream as everyone else. 'Magic Scoop' has a secret flavor kids line up for, and the same families come back every week.",
        medium:
          "Two ice cream shops open. 'Copycat Cones' sells the exact same flavors as ten other shops nearby. 'Magic Scoop' has a one-of-a-kind secret flavor, and the same families return every single week.",
        hard:
          "Compare two ice cream shops. 'Copycat Cones' offers commodity flavors identical to many rivals. 'Magic Scoop' has a unique signature flavor and a base of repeat, loyal weekly customers.",
      },
      question: {
        easy: 'Which shop is the GREAT company?',
        medium: 'Which shop would you want to own a piece of, and why?',
        hard: 'Which business has the stronger moat and loyalty profile?',
      },
      choices: [
        {
          label: {
            easy: 'Copycat Cones — same as everyone',
            medium: 'Copycat Cones — identical to ten rivals',
            hard: 'Copycat Cones — commodity offering',
          },
          feedback: {
            easy: "Hmm — if it\'s the SAME as everyone, why would anyone pick it? With no moat and no special fans, it\'s easy to copy and easy to forget.",
            medium:
              "Risky pick. With no moat, copycats everywhere, and no special reason to come back, Copycat Cones has to compete on price alone — that\'s a tough, okay-at-best business.",
            hard:
              "Weak choice. A commodity with no moat faces relentless price competition and customer churn — the hallmark of a merely okay company.",
          },
        },
        {
          label: {
            easy: 'Magic Scoop — secret flavor + regulars',
            medium: 'Magic Scoop — unique flavor + loyal weekly fans',
            hard: 'Magic Scoop — differentiated product + repeat base',
          },
          feedback: {
            easy: "Yes! 🏆 A secret flavor copycats can\'t match (a moat!) PLUS families who come back every week (loyal fans!). People would be SAD if it closed. That\'s a great company!",
            medium:
              "Great call! A secret flavor is a moat, weekly regulars are loyalty, and customers would genuinely miss it. Moat + fans = the makings of a great company.",
            hard:
              "Correct. A differentiated product is a moat; a recurring, loyal base signals pricing power and low churn. This is the higher-quality business.",
          },
          isPreferred: true,
        },
      ],
      realWorldReveal: {
        easy:
          "This is how real investors think! They look for companies with a MOAT and loyal fans — like Lego, Disney, and Costco — not the easy-to-copy ones. 🪄",
        medium:
          "Real investors do exactly this. Warren Buffett famously looks for businesses with a wide 'moat' and loyal customers, because those are the companies that stay great for decades.",
        hard:
          "This mirrors how great investors allocate capital: favor durable moats and sticky customers over undifferentiated commodities. Quality compounds; commodities get competed away.",
      },
    },

    // ─── Connect: the 3 signs in famous companies ──────────────────────
    {
      kind: 'connect',
      heading: '🌍 The 3 Signs in Real Companies',
      concept: {
        easy: 'The same three signs — moat, loyal fans, growing — show up in the biggest companies you know.',
        medium: 'Moat + loyal fans + growth is the pattern behind the world\'s most successful companies.',
        hard: 'The moat / loyalty / growth lens explains many of the market\'s most enduring winners.',
      },
      examples: [
        {
          emoji: '🧱',
          who: 'Lego — The Moat',
          story: {
            easy: "Every Lego brick snaps onto every other Lego brick — even ones from 40 years ago! Copycat blocks don\'t fit as well, so kids keep choosing Lego.",
            medium:
              "Lego\'s bricks are all compatible across decades. That system is a moat — copycats can make blocks, but they can\'t match the snap-together magic everyone already owns.",
            hard:
              "Lego\'s interlocking standard creates switching costs and a network of compatible sets — a classic moat that has kept imitators at bay for generations.",
          },
        },
        {
          emoji: '🛒',
          who: 'Costco — Loyal Fans',
          story: {
            easy: "People PAY a yearly fee just to shop at Costco — and almost everyone renews! That\'s how much they love it.",
            medium:
              "Costco members pay just for the right to shop there, and around 90% renew every year. That loyalty is gold — it\'s a moat made of happy customers.",
            hard:
              "Costco\'s membership model produces ~90% renewal and recurring fee revenue — loyalty so strong it functions as a self-reinforcing moat.",
          },
        },
        {
          emoji: '🐭',
          who: 'Disney — Keeps Growing',
          story: {
            easy: "Disney started with ONE cartoon mouse. Now it has movies, theme parks, and shows all over the world. It just kept growing!",
            medium:
              "Disney began with a single mouse cartoon and grew into movies, parks, toys, and streaming worldwide. Beloved characters are a moat nobody can copy — and growth never stopped.",
            hard:
              "Disney compounded one character into a multi-segment empire — films, parks, consumer products, streaming. Its irreplaceable IP is a moat that fuels durable growth.",
          },
        },
      ],
      kicker: {
        easy: 'Moat + loyal fans + growing = a GREAT company. 🏆',
        medium: 'Spot all three signs and you\'ve likely found a truly great company.',
        hard: 'Moat + loyalty + durable growth is the signature of compounding quality.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Great Company Check',
      questions: [
        {
          q: 'What is a "moat"?',
          options: [
            'Something that stops copycats from stealing the business',
            'A kind of money a company prints',
            'A store that sells boats',
          ],
          correct: 0,
        },
        {
          q: 'Which is a sign of a GREAT company?',
          options: [
            'Loyal fans who keep coming back',
            'Being exactly the same as everyone else',
            'Customers who never want to return',
          ],
          correct: 0,
        },
        {
          q: 'What is the best question to ask about a company?',
          options: [
            'Would people be sad if it disappeared?',
            'Does it have a fancy logo?',
            'Is the building tall?',
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
        easy: "Now you can spot a GREAT company! 🏆 Look for a moat, loyal fans, and growing bigger.",
        medium:
          "You\'ve got the lens now: moat, loyal fans, and steady growth. That\'s how you tell a great company from an okay one.",
        hard:
          "You\'ve internalized the quality lens — moat, loyalty, durable growth — the same framework great investors use to find companies worth owning for years.",
      },
      bonusTip: {
        easy: "Remember the 3 questions: Would people be SAD if it closed? Would they PAY more? Is it GROWING?",
        medium: "Carry the 3-question test: would people miss it, would they pay more, and is it growing? Three yeses = a great company.",
        hard: "Your pocket checklist: irreplaceability, pricing power, durable growth. Three yeses signals real quality.",
      },
    },

    // ─── Real-world mission: score a company you love ───────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'great-company',
        emoji: '🏆',
        title: {
          easy: 'Score a Company You Love',
          medium: 'Give a company you love the "Great Company" test',
          hard: 'Run the 3-sign quality test on a company you admire',
        },
        pitch: {
          easy: "Pick ONE company you love. Then check it for the 3 signs: does it have a moat? Loyal fans? Is it growing? Give it a score!",
          medium:
            "Choose a real company you love and put it through the 3-sign test — moat, loyal fans, growth — then decide how great it really is.",
          hard:
            "Select a company you admire and evaluate it against the moat / loyalty / growth framework, scoring each sign.",
        },
        steps: [
          {
            emoji: '💡',
            text: {
              easy: 'Pick ONE company you LOVE (like Lego, Nintendo, a favorite restaurant, or a game).',
              medium: 'Choose one company you genuinely love and use in real life.',
              hard: 'Select one company you admire — ideally one whose products you actually use.',
            },
          },
          {
            emoji: '🏰',
            text: {
              easy: 'MOAT check: Is it hard to copy? Could a copycat easily make the same thing? Give it a 👍 or 👎.',
              medium: 'Moat check: how hard would it be for a copycat to replace it? Rate 1–3 stars.',
              hard: 'Moat check: assess switching costs, brand strength, or uniqueness. Rate 1–3.',
            },
          },
          {
            emoji: '💛',
            text: {
              easy: 'FANS check: Do people keep coming back? Would they be SAD if it disappeared? Give it a 👍 or 👎.',
              medium: 'Loyalty check: do customers return and would they miss it if it vanished? Rate 1–3 stars.',
              hard: 'Loyalty check: estimate repeat usage and willingness to pay more. Rate 1–3.',
            },
          },
          {
            emoji: '📈',
            text: {
              easy: 'GROWING check: Is the company getting bigger — more stuff, more places, more fans? Give it a 👍 or 👎.',
              medium: 'Growth check: is it expanding into more products, places, or customers? Rate 1–3 stars.',
              hard: 'Growth check: look for expanding products, markets, or audience. Rate 1–3.',
            },
          },
        ],
        reflection: [
          {
            key: 'company',
            prompt: {
              easy: 'Which company did you pick?',
              medium: 'Which company did you test?',
              hard: 'Which company did you evaluate?',
            },
            type: 'text',
          },
          {
            key: 'score',
            prompt: {
              easy: 'How many of the 3 signs did it have? (moat, fans, growing)',
              medium: 'How many of the 3 signs did it pass — and which was strongest?',
              hard: 'Score across the 3 signs and note the strongest moat factor.',
            },
            type: 'text',
            placeholder: '0, 1, 2, or 3',
          },
          {
            key: 'verdict',
            prompt: {
              easy: 'Would people be SAD if this company disappeared? Why?',
              medium: 'Would customers genuinely miss this company if it vanished? Explain.',
              hard: 'How irreplaceable is this company to its customers, and why?',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is pretend detective work — no buying anything! Just talk together about WHY your child loves the company and whether others would miss it too.",
          medium:
            "Pure observation and discussion — nothing to buy. Help your child reason about why the company is (or isn\'t) special. The goal is the thinking, not a stock pick.",
          hard:
            "Observational exercise only — no investing involved. Use it to model qualitative business analysis: moat, loyalty, growth. Emphasize reasoning over conclusions.",
        },
        printables: {
          trackers: [
            {
              title: 'My Great-Company Scorecard',
              columns: ['Sign', 'What I noticed', 'Score (1–3)'],
              rows: 3,
              note: 'The 3 signs: Moat 🏰, Loyal Fans 💛, Growing 📈.',
            },
          ],
          worksheets: [
            {
              title: 'The 3-Question Test',
              blocks: [
                {
                  label: 'Would people be SAD if it disappeared?',
                  hint: 'Yes means loyal fans!',
                  lines: 1,
                },
                {
                  label: 'Would people PAY more for it?',
                  hint: 'Yes means it has a moat!',
                  lines: 1,
                },
                {
                  label: 'Is it GROWING bigger?',
                  hint: 'More stuff, more places, more fans?',
                  lines: 1,
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
