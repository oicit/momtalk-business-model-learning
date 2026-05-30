/**
 * Pokémon: One Idea, Sold a Hundred Ways — IP that earns forever.
 *
 * The hidden trick: Pokémon is ONE set of invented characters (intellectual
 * property) that earns money MANY different ways — trading cards, video
 * games, movies, TV shows, toys, theme parks — for decades. Invent a
 * beloved character ONCE, then sell it across a hundred forms forever.
 * Pokémon is one of the highest-grossing franchises in history.
 *
 * Big idea for the kid: a great character or idea is an ASSET — something
 * you can reuse again and again instead of using up.
 *
 * Beat order:
 *   intro → think-deeper (why is ONE character so valuable?) →
 *   concept-cards (IP / one idea many forms / it never wears out /
 *   highest-grossing ever) → quiz → connect (Mario, Hello Kitty, Marvel) →
 *   outro → real-world-mission (pick a character you love and list every
 *   different thing it's sold as).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'pokemon',
  themeKey: 'company',
  emoji: '⚡',
  title: 'Pokémon',
  subtitle: {
    easy: 'How a little electric mouse named Pikachu earns money in a HUNDRED ways!',
    medium:
      'Pokémon invented its characters once — then sold them as cards, games, movies, toys, and more, for almost 30 years.',
    hard:
      'IP economics for kids: how one set of beloved characters becomes a forever revenue engine across cards, games, film, TV, and merchandise.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "You know Pikachu — the little electric mouse who says ⚡‘Pika pika!’ Here is the amazing part: Pikachu and his Pokémon friends were INVENTED once, a long time ago. But they earn money EVERY day — as cards, games, movies, toys, and so much more. How does ONE idea earn money so many ways? Let’s find out!",
        medium:
          "Pokémon started as one video game with some made-up creatures. The creators invented the characters ONCE. Today those same characters are trading cards, video games, movies, TV shows, toys, even theme parks — earning money for almost 30 years. Today we learn the secret: a great character is something you can reuse again and again.",
        hard:
          "Pokémon began in 1996 as a single game with a set of invented creatures. Those characters are intellectual property — an asset the owners can deploy across cards, games, films, TV, and merchandise. That one set of characters helped make Pokémon one of the highest-grossing franchises ever. Let’s decode how one idea earns so many ways.",
      },
    },

    // ─── Think-deeper: why is ONE character so valuable? ────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Is One Character Worth So Much?',
      intro: {
        easy: "Let’s think this through together.",
        medium: "Let’s reason out why inventing a character once can pay off forever.",
        hard: "First-principles look at why a character is a reusable asset.",
      },
      layers: [
        {
          question: {
            easy: "If you bake a cookie and eat it, can you eat it again tomorrow?",
            medium: "When you use up a cookie or a toy, is it still there to use again?",
            hard: "What happens to most things when you use them — do they get used up?",
          },
          reveal: {
            easy:
              "Nope! A cookie is gone once you eat it. Most things get USED UP. But an idea — like Pikachu — doesn’t get used up. You can use it again and again!",
            medium:
              "A cookie disappears after one bite. But a character is just an idea — it never runs out. You can put Pikachu on a card today AND a t-shirt tomorrow AND a movie next year. The same idea, used over and over.",
            hard:
              "Physical goods are consumed. An idea — intellectual property — is non-rival: using it one way doesn’t use it up, so the same character can be deployed across endless products at the same time.",
          },
        },
        {
          question: {
            easy: "How many different things can ONE Pikachu become?",
            medium: "How many ways can the same character earn money?",
            hard: "How many revenue surfaces can a single character support?",
          },
          reveal: {
            easy:
              "SO many! Cards, video games, movies, TV shows, toys, backpacks, lunchboxes, even theme parks. One little mouse — a hundred different things to sell! ⚡",
            medium:
              "Almost no limit. Trading cards, video games, movies, TV episodes, stuffed toys, clothes, theme-park rides — the same characters power all of them at once. Invent once, sell a hundred ways.",
            hard:
              "Each surface — cards, games, film, TV, toys, parks, apparel — is a separate revenue stream powered by the same IP. The marginal idea is reused; only the product around it changes.",
          },
        },
        {
          question: {
            easy: "Does Pikachu stop earning money when he gets old?",
            medium: "After almost 30 years, has Pokémon worn out?",
            hard: "Does well-managed IP fade over time?",
          },
          reveal: {
            easy:
              "No way! Pikachu is way older than you and STILL earns money every single day. A great character doesn’t wear out — it can earn for a very, very long time. 🪄",
            medium:
              "Not at all. Kids who loved Pokémon long ago are grown-ups now — and their kids love it too! A beloved character can earn for generations. That’s why one good idea can be worth so much.",
            hard:
              "Strong IP doesn’t depreciate like a machine. New generations keep discovering it, so the asset can appreciate across decades — which is exactly why Pokémon ranks among the top franchises ever.",
          },
        },
      ],
    },

    // ─── Concept cards: the hidden trick ────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Pokémon Trick',
      subheading: 'Invent a great character ONCE — then sell it in a hundred forms, forever.',
      cards: [
        {
          emoji: '💡',
          title: 'A Character Is an Asset',
          desc: {
            easy: 'A made-up character you OWN is called “IP.” It’s like a treasure that keeps making money — it never gets used up!',
            medium:
              'A character you create and own is intellectual property (IP). Unlike a cookie, an idea doesn’t get used up — so you can sell it again and again.',
            hard:
              'Intellectual property is a reusable, non-rival asset. Once created, the same character can be monetized across unlimited products without being consumed.',
          },
          color: '#FFF7E0',
        },
        {
          emoji: '🃏',
          title: 'One Idea, Many Forms',
          desc: {
            easy: 'The same Pikachu becomes cards, games, movies, toys, and shirts. One idea — sold SO many different ways!',
            medium:
              'Pokémon sells its characters as trading cards, video games, movies, TV shows, toys, and clothes. Each form is a new way to earn from the SAME idea.',
            hard:
              'Each product surface — cards, games, film, TV, merchandise — is an independent revenue stream built on the identical underlying IP.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '♾️',
          title: 'It Never Wears Out',
          desc: {
            easy: 'Pikachu is almost 30 years old and STILL popular. A loved character can earn money for a really long time.',
            medium:
              'A beloved character keeps earning for decades. New kids discover Pokémon every year, so the same idea keeps making money — generation after generation.',
            hard:
              'Well-managed IP resists decay; recurring new audiences let a decades-old character compound rather than fade.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '🏆',
          title: 'One of the Biggest Ever',
          desc: {
            easy: 'Selling one idea so many ways made Pokémon one of the TOP money-making characters in the whole world!',
            medium:
              'By selling its characters across every form, Pokémon became one of the highest-grossing franchises in history — bigger than most famous movies.',
            hard:
              'Cross-surface monetization made Pokémon one of the highest-grossing media franchises ever — a textbook example of IP leverage.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Pokémon Check',
      questions: [
        {
          q: 'What is a character you create and own called?',
          options: [
            'IP (intellectual property) — a reusable idea',
            'A cookie you eat once',
            'A loan from a bank',
          ],
          correct: 0,
        },
        {
          q: 'Why can the same Pikachu earn money so many ways?',
          options: [
            'An idea doesn’t get used up, so it can be sold in many forms',
            'Because Pikachu is a real mouse',
            'Because cards are free to make',
          ],
          correct: 0,
        },
        {
          q: 'What is the BIG Pokémon trick?',
          options: [
            'Invent a great character once, then sell it many ways for a long time',
            'Make a brand-new character for every single product',
            'Only sell one toy and then stop',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Branding: 100 },
    },

    // ─── Connect: the same trick in other big characters ────────────────
    {
      kind: 'connect',
      heading: '🌍 The Same Trick Everywhere',
      concept: {
        easy: 'Lots of famous characters earn money the exact same way Pikachu does.',
        medium: 'The “invent once, sell many ways” idea powers most of your favorite characters.',
        hard: 'Cross-surface IP leverage is the engine behind nearly every major character franchise.',
      },
      examples: [
        {
          emoji: '🍄',
          who: 'Super Mario',
          story: {
            easy: "Mario started in one game — now he’s in games, movies, toys, and a whole theme-park land!",
            medium:
              "Mario began as a video-game character, then became movies, toys, clothes, and even rides at a theme park — the same character, sold a hundred ways.",
            hard:
              "Nintendo deploys Mario across games, film, merchandise, and parks — identical IP, many revenue surfaces.",
          },
        },
        {
          emoji: '🎀',
          who: 'Hello Kitty',
          story: {
            easy: "Hello Kitty isn’t even in a movie — she’s just a cute character on toys, bags, pencils, and shirts!",
            medium:
              "Hello Kitty mostly earns by being printed on products — toys, bags, pencils, clothes. One simple character on thousands of things.",
            hard:
              "Hello Kitty is largely a licensing-driven IP: the character is placed on merchandise across categories, earning royalties without a single core game or film.",
          },
        },
        {
          emoji: '🕷️',
          who: 'Spider-Man',
          story: {
            easy: "Spider-Man is in movies, comics, games, toys, and costumes. One hero, tons of stuff to sell!",
            medium:
              "Spider-Man earns from comics, movies, video games, toys, and costumes all at once — the same hero powering many products.",
            hard:
              "Spider-Man spans comics, film, games, and merchandise — a single character monetized across every consumption surface.",
          },
        },
      ],
      kicker: {
        easy: 'Spot a character on lots of different stuff? That’s the trick at work! 🪄',
        medium: 'Once you see it, you’ll notice it on every shirt, toy, and screen.',
        hard: 'The pattern is everywhere: own a beloved character, then deploy it across surfaces.',
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know Pokémon’s secret: invent ONE great character, then sell it a HUNDRED ways — forever! ⚡",
        medium:
          "You learned the big trick: a great character is an asset. Invent it once, and you can earn from it across cards, games, movies, and toys for decades.",
        hard:
          "You’ve grasped IP leverage — the idea that one beloved, owned character can be monetized across many surfaces for a very long time.",
      },
      bonusTip: {
        easy: "Tip: a good idea is like a treasure — use it again and again, don’t use it up! 💎",
        medium: "Pro tip: the best businesses build assets they can reuse, not things they use up.",
        hard: "Edge: create durable IP once, then maximize the number of surfaces it can profitably reach.",
      },
    },

    // ─── Real-world mission: map a character’s many forms ───────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'pokemon',
        emoji: '⚡',
        title: {
          easy: 'Hunt Your Favorite Character Everywhere',
          medium: 'Map all the ways ONE character is sold',
          hard: 'Audit a single character’s revenue surfaces',
        },
        pitch: {
          easy: "Pick a character you LOVE. Then go hunting for all the different things it’s sold as — a game, a toy, a shirt, a movie!",
          medium:
            "Choose one character you love, then make a list of every different product it’s sold as. See how one idea becomes many things!",
          hard:
            "Select one character and enumerate every distinct product surface it appears on, observing how a single IP spreads across forms.",
        },
        steps: [
          {
            emoji: '⭐',
            text: {
              easy: 'Pick ONE character you love (like Pikachu, Mario, or Elsa).',
              medium: 'Choose one favorite character to investigate.',
              hard: 'Select a single character with broad merchandising.',
            },
          },
          {
            emoji: '🔎',
            text: {
              easy: 'Look around your home and stores for that character. What things have it on them?',
              medium: 'Look around your home, stores, and screens. Find products that show your character.',
              hard: 'Survey home, retail, and media for products featuring the character.',
            },
          },
          {
            emoji: '✍️',
            text: {
              easy: 'Write down each thing: a game? a toy? a shirt? a movie? a snack box?',
              medium: 'List each different form: game, toy, clothing, movie, TV, snacks, and more.',
              hard: 'Record each distinct product category the character appears in.',
            },
          },
          {
            emoji: '🧮',
            text: {
              easy: 'Count them all up! How many different things can you find?',
              medium: 'Total your list. How many separate ways is the character being sold?',
              hard: 'Tally the count of distinct surfaces you identified.',
            },
          },
        ],
        reflection: [
          {
            key: 'character',
            prompt: {
              easy: 'Which character did you pick?',
              medium: 'Which character did you investigate?',
              hard: 'Which character did you audit?',
            },
            type: 'text',
          },
          {
            key: 'forms-count',
            prompt: {
              easy: 'How many different things did you find it on?',
              medium: 'How many separate product forms did you count?',
              hard: 'Total distinct surfaces found?',
            },
            type: 'number',
            suffix: 'things',
          },
          {
            key: 'favorite-form',
            prompt: {
              easy: 'Which form was your favorite — and can you think of a NEW thing it could be sold as?',
              medium: 'Which form did you like best, and what new product could you invent for this character?',
              hard: 'Which surface stood out, and what untapped surface could this IP profitably reach next?',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "Just notice and count — no buying needed! The goal is spotting how one character shows up on many products.",
          medium:
            "This is an observation hunt, not a shopping trip. The learning goal is seeing how a single character (IP) earns across many product forms.",
          hard:
            "Observational only — no purchases required. Emphasize the concept that one owned character is monetized across many surfaces.",
        },
        printables: {
          trackers: [
            {
              title: 'My Character Hunt',
              columns: ['Where I saw it', 'What kind of thing', 'Up close or on a screen?'],
              rows: 8,
              note: 'One row per different product you find your character on.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
