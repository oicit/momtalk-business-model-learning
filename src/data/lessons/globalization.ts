/**
 * Globalization — "Your Stuff Took a Trip Around the World."
 *
 * One sneaker (or phone, or toy) is born from MANY countries: cotton from
 * one place, rubber from another, chips from a third, stitched together in
 * a fourth, shipped to you in a fifth. Each country does the part it does
 * BEST or CHEAPEST. That teamwork between countries — trading and
 * specializing — is globalization, and it's why your stuff is better and
 * cheaper than if one country made every piece alone.
 *
 * Beat order:
 *   intro → think-deeper (why don't we make everything at home?) →
 *   concept-cards (what globalization is) → connect (real products' world
 *   journeys) → quiz → outro → real-world-mission (hunt "Made in ___"
 *   labels at home and count the countries).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'globalization',
  themeKey: 'business',
  emoji: '🌍',
  title: 'Globalization',
  subtitle: {
    easy: 'Your sneakers took a trip around the WHOLE world before they reached you!',
    medium:
      'One product is made from parts from many countries — each doing what it does best. That teamwork is globalization.',
    hard:
      'Why countries specialize and trade, how a single product crosses many borders, and why that makes goods cheaper and better — kid-sized.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Look at your sneakers! 👟 The rubber might come from one country, the cloth from another, the laces from a third, and they all got glued together somewhere far away — then shipped to YOU. Your stuff is a tiny world traveler! 🌍",
        medium:
          "Pick up almost anything you own — a sneaker, a phone, a toy. It wasn't made in just one place. Its pieces come from all over the world, get put together in another country, and then travel to you. Let's trace that amazing journey!",
        hard:
          "A single product is rarely made in one country. Materials, parts, assembly, and shipping each happen wherever they're cheapest or best — then it all comes together for you. That worldwide teamwork is called globalization. Let's unpack why it works.",
      },
    },

    // ─── Think-deeper: why not make everything at home? ─────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Not Make It ALL in One Place?',
      intro: {
        easy: "Let's figure this out together.",
        medium: "Let's reason through why countries team up instead of going solo.",
        hard: "First-principles look at specialization and trade.",
      },
      layers: [
        {
          question: {
            easy: "Could YOU make a whole sneaker all by yourself — grow the rubber, weave the cloth, AND sew it?",
            medium: "Could one person grow the rubber, weave the fabric, and build a sneaker all alone?",
            hard: "Could a single person efficiently produce every component of a sneaker from scratch?",
          },
          reveal: {
            easy:
              "No way! That's WAY too much. But if one friend grows rubber, one weaves cloth, and one sews — together it's easy. People are better when they share the work!",
            medium:
              "Not well, and not cheaply. But if each person does just ONE job they're great at, the team makes way more, way faster. Splitting up the work is powerful.",
            hard:
              "Not efficiently. Division of labor — each person doing what they're best at — produces far more total output than everyone trying to do everything.",
          },
        },
        {
          question: {
            easy: "What if some countries are GREAT at one thing — like growing cotton or making computer chips?",
            medium: "Some places have the best soil, others the best chip factories. What should each one do?",
            hard: "If different countries hold different advantages (resources, skills, factories), how should production be split?",
          },
          reveal: {
            easy:
              "Then each country does its BEST thing and shares! One grows cotton, one makes chips, one sews — and everyone gets better stuff. 🤝",
            medium:
              "Each country focuses on what it does best — that's called specializing. Then they trade. Everyone ends up with more and better things than going it alone.",
            hard:
              "Each specializes in what it produces most efficiently, then trades for the rest. This comparative advantage means the whole world produces more with the same effort.",
          },
        },
        {
          question: {
            easy: "So why is your sneaker cheaper because it came from lots of countries?",
            medium: "How does using many countries make a product cheaper AND better?",
            hard: "Why does a globally-sourced product tend to cost less and improve in quality?",
          },
          reveal: {
            easy:
              "Because each part was made by whoever does it best and cheapest! Add it all up and you get a great sneaker that doesn't cost too much. 🌍✨",
            medium:
              "Every piece is made where it's cheapest or highest-quality. Combine those best-of-the-world parts and you get a product that's both better AND less expensive.",
            hard:
              "Sourcing each input from its lowest-cost, highest-quality producer minimizes total cost and maximizes quality — gains that get passed to you. That's the payoff of globalization.",
          },
        },
      ],
    },

    // ─── Concept cards: what globalization is ───────────────────────────
    {
      kind: 'concept-cards',
      heading: 'What Is Globalization?',
      subheading: 'Countries trading and teaming up so your stuff is better and cheaper.',
      cards: [
        {
          emoji: '🌍',
          title: 'A World Team',
          desc: {
            easy: 'Globalization means countries work together like one big team — sharing parts, jobs, and stuff across the whole world.',
            medium:
              'Globalization is when countries trade with and depend on each other, so a product can be built from pieces made all over the planet.',
            hard:
              'Globalization is the deep connection of the world\'s economies through trade, where production of one good spans many countries.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '⭐',
          title: 'Do Your Best Thing',
          desc: {
            easy: 'Each country does what it\'s BEST at — growing, building, or sewing — then shares with the others.',
            medium:
              'Countries specialize: each focuses on what it makes best or cheapest, then trades for everything else.',
            hard:
              'Specialization (comparative advantage): each country produces what it\'s relatively most efficient at and trades for the rest.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🚢',
          title: 'The Big Journey',
          desc: {
            easy: 'Parts ride on giant ships and planes from country to country until they all meet to become ONE thing — then come to you!',
            medium:
              'Materials and parts travel between countries to be combined, then the finished product ships to stores near you. That path is a supply chain.',
            hard:
              'A supply chain links raw materials → parts → assembly → shipping across borders, each step in the location that does it best.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '💰',
          title: 'Better AND Cheaper',
          desc: {
            easy: 'Because everyone does their best part, you get great stuff that doesn\'t cost too much. Win-win!',
            medium:
              'When each piece is made by the best, cheapest maker, the final product costs less and works better than one country could manage alone.',
            hard:
              'Sourcing each input from its most efficient producer lowers cost and raises quality — surplus that benefits consumers worldwide.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Connect: real products' world journeys ─────────────────────────
    {
      kind: 'connect',
      heading: '🌍 Real Stuff, Real World Trips',
      concept: {
        easy: 'Tons of things in your house took a trip around the world before reaching you.',
        medium: 'The "made by the whole world" idea is hiding inside your everyday stuff.',
        hard: 'Cross-border supply chains underpin almost every modern product you own.',
      },
      examples: [
        {
          emoji: '👟',
          who: 'A Pair of Sneakers',
          story: {
            easy: "Rubber from one country, cloth from another, glued together in a far-away factory, then shipped on a giant boat to your store. One shoe, five countries!",
            medium:
              "A sneaker's rubber, fabric, foam, and laces can each come from a different country, get assembled in another, and ship across the ocean to you — many borders for one shoe.",
            hard:
              "Footwear brands source rubber, textiles, and foam globally, assemble in lower-cost manufacturing hubs, then distribute worldwide — a textbook multi-country supply chain.",
          },
        },
        {
          emoji: '📱',
          who: 'A Smartphone',
          story: {
            easy: "Your phone has tiny chips, glass, and metal from MANY countries, snapped together somewhere else, then flown to you. It's a world traveler in your pocket!",
            medium:
              "A phone's chips, screen, battery, and camera are made in different countries, assembled in another, and shipped to yours. Hundreds of parts, dozens of places.",
            hard:
              "Smartphones integrate components — processors, displays, sensors, batteries — sourced from dozens of countries and assembled centrally, the densest supply chain you own.",
          },
        },
        {
          emoji: '🍫',
          who: 'A Chocolate Bar',
          story: {
            easy: "The cocoa beans grow in a hot, faraway country, the milk comes from somewhere else, and it's all mixed and wrapped in another place. Yummy teamwork!",
            medium:
              "Cocoa grows near the equator, sugar and milk come from other regions, and the bar is made and packaged somewhere else — a sweet little world tour.",
            hard:
              "Cocoa is grown in tropical nations, processed and combined with dairy and sugar elsewhere, then manufactured and exported — agriculture meets global trade.",
          },
        },
      ],
      kicker: {
        easy: 'Almost nothing you own was made by just one country. The whole world helped! 🌍',
        medium: 'Once you start looking, you\'ll see the whole world inside your stuff.',
        hard: 'Modern goods are collaborations among many nations — globalization made visible.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Globalization Check',
      questions: [
        {
          q: 'What does globalization mean?',
          options: [
            'Countries trade and team up so products are made from parts all over the world',
            'One country makes every single thing by itself',
            'Only selling things inside your own town',
          ],
          correct: 0,
        },
        {
          q: 'Why do countries each do their BEST thing and trade?',
          options: [
            'So everyone gets better stuff for less — each does what it does best',
            'Because trading is against the rules',
            'So every country makes the exact same thing',
          ],
          correct: 0,
        },
        {
          q: 'How can one sneaker come from many countries?',
          options: [
            'Each part is made where it\'s best or cheapest, then assembled and shipped to you',
            'A sneaker can only ever come from one factory',
            'Countries are not allowed to share parts',
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
      mood: 'celebrating',
      text: {
        easy: "Now you know the secret: your stuff is a world traveler! Many countries teamed up to make it. 🌍👟",
        medium:
          "You learned how the whole world teams up — each country doing its best part — so the stuff you use is better and cheaper. That's globalization!",
        hard:
          "You've grasped specialization, trade, and supply chains — the engine that turns many countries' work into the products in your hands.",
      },
      bonusTip: {
        easy: "Tip: flip over your toys and shoes to find tiny 'Made in ___' labels — they tell the journey! 🔎",
        medium: "Pro tip: 'Made in ___' tags are little clues showing where your stuff was put together.",
        hard: "Edge: a 'Made in' label shows final assembly only — the parts inside often traveled even farther.",
      },
    },

    // ─── Real-world mission: hunt "Made in ___" labels ──────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'globalization',
        emoji: '🔎',
        title: {
          easy: 'Be a "Made in ___" Detective',
          medium: 'Hunt for "Made in ___" labels around your home',
          hard: 'Audit your household for country-of-origin labels',
        },
        pitch: {
          easy: "Search your house for tiny 'Made in ___' tags on your stuff, and count how many DIFFERENT countries you can find!",
          medium:
            "Find the 'Made in ___' labels on a few things at home, write down each country, and see how many different ones show up.",
          hard:
            "Locate country-of-origin labels on several household items and tally the distinct countries represented.",
        },
        steps: [
          {
            emoji: '👟',
            text: {
              easy: 'Pick 5 things to check — like shoes, a toy, a shirt, a snack box, and a phone or tablet.',
              medium: 'Choose about 5 different items: clothes, shoes, a toy, electronics, and a food package.',
              hard: 'Select ~5 varied items across clothing, footwear, toys, electronics, and food.',
            },
          },
          {
            emoji: '🔎',
            text: {
              easy: 'Look for a tiny tag or print that says "Made in ___". Check the bottom, the back, or inside!',
              medium: 'Find each item\'s "Made in ___" label — check tags, undersides, backs, and packaging.',
              hard: 'Locate the country-of-origin marking on each item (tags, base, packaging, or fine print).',
            },
          },
          {
            emoji: '✍️',
            text: {
              easy: 'Write down the country for each thing you check.',
              medium: 'Record the item and the country it says it was made in.',
              hard: 'Log each item alongside its stated country of origin.',
            },
          },
          {
            emoji: '🌍',
            text: {
              easy: 'Count how many DIFFERENT countries you found. How far did your stuff travel?',
              medium: 'Count the number of different countries on your list. Surprised how many?',
              hard: 'Tally the distinct countries and reflect on the geographic spread.',
            },
          },
        ],
        reflection: [
          {
            key: 'country-count',
            prompt: {
              easy: 'How many DIFFERENT countries did you find?',
              medium: 'How many different countries showed up on your labels?',
              hard: 'How many distinct countries did you record?',
            },
            type: 'number',
            suffix: 'countries',
          },
          {
            key: 'farthest',
            prompt: {
              easy: 'Which country was the farthest away from you?',
              medium: 'Which item came from the country farthest from home?',
              hard: 'Which item had the most distant country of origin?',
            },
            type: 'text',
          },
          {
            key: 'insight',
            prompt: {
              easy: 'Were you surprised your stuff came from so many places? Why?',
              medium: 'What surprised you about where your everyday things are made?',
              hard: 'Reflect on what the spread of origins tells you about globalization.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is just looking and counting — no buying needed. Help read tiny labels, and chat about why a toy might travel so far to reach your home.",
          medium:
            "An observation-only activity: read the small labels together and talk about why parts and products cross so many borders. Nothing to purchase.",
          hard:
            "Purely observational. Assist with reading fine print and discuss that a 'Made in' label reflects final assembly, while components often originate elsewhere.",
        },
        printables: {
          trackers: [
            {
              title: 'My "Made in ___" Detective Log',
              columns: ['Item', 'Made in (country)', 'Near or far?'],
              rows: 6,
              note: 'Count how many DIFFERENT countries you find at the end!',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
