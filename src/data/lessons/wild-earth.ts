/**
 * Wild Earth — "Where Everything Comes From."
 *
 * The first industry every other industry depends on. Before a phone can be
 * built, before cereal can be poured, before a book can be read — something
 * has to come OUT of the earth. Farming grows food, mining digs up metals,
 * water gets collected and cleaned, forests give us wood and paper, and
 * recycling sends used stuff back to be made into new things.
 *
 * The big idea for a 7–9 year old: EVERYTHING around you started as a raw
 * material pulled from nature. Trace anything backwards far enough and you
 * end up at a farm, a mine, a river, or a forest.
 *
 * Beat order:
 *   intro → think-deeper (where does stuff REALLY come from?) →
 *   concept-cards (Farming, Mining, Water, Forestry, Recycling) →
 *   quiz → connect (real companies + everyday objects) → outro →
 *   real-world-mission (trace 3 things at home back to the earth).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'wild-earth',
  themeKey: 'industries',
  emoji: '🌍',
  title: 'Wild Earth',
  subtitle: {
    easy: 'Almost EVERYTHING you own started as something pulled out of the earth!',
    medium:
      'Meet the industry that gives every other industry its stuff: food, metal, water, wood, and more.',
    hard:
      'Raw materials, extraction, and the supply chain that begins in nature — why all economies start with the earth.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Look around your room. Your phone, your cereal, your book — where did they REALLY come from? Trace anything back far enough and you reach the same place: the EARTH! 🌍",
        medium:
          "Every single thing you own began as a raw material someone pulled out of nature. Today you'll meet Wild Earth — the industry that grows, digs, and gathers the stuff EVERYTHING else is built from.",
        hard:
          "Before a factory can build anything, a raw material has to be extracted from nature. Wild Earth is the family of industries — farming, mining, water, forestry, recycling — that sits at the very start of every supply chain.",
      },
    },

    // ─── Think-deeper: where does stuff REALLY come from? ───────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Where Does Stuff REALLY Come From?',
      intro: {
        easy: "Let's play detective and trace things backwards.",
        medium: "Let's trace an everyday object back to where it truly began.",
        hard: 'First-principles look at the start of every supply chain.',
      },
      layers: [
        {
          question: {
            easy: 'Where did your cereal come from before the box?',
            medium: 'Before the store and the box, where did your breakfast cereal start?',
            hard: 'Trace a processed food product back past packaging and processing — where does it originate?',
          },
          reveal: {
            easy:
              "A FARM! 🌾 The grain grew in a field, a farmer picked it, and a factory turned it into cereal. Your breakfast started as a plant in the dirt!",
            medium:
              "On a farm. Grain grew in a field, was harvested, then milled and shaped into cereal. The very first step happened in soil and sunshine.",
            hard:
              "Agriculture. The cereal is processed grain — a crop cultivated, harvested, and refined. Strip away every step and you reach a seed in a field.",
          },
        },
        {
          question: {
            easy: 'And your phone — that\'s not from a farm. So where?',
            medium: 'A phone is metal and glass. Where do those come from?',
            hard: 'Electronics are mostly refined minerals and metals. What is their ultimate source?',
          },
          reveal: {
            easy:
              "A MINE! ⛏️ The shiny metal inside your phone was dug out of the ground as rock, then melted and cleaned until it became metal.",
            medium:
              "Mines. The metals and minerals in a phone were dug from the earth as ore, then melted and purified before being built into parts.",
            hard:
              "Mining. Phones contain dozens of mined metals — copper, gold, lithium, rare-earths — extracted as ore and refined long before assembly.",
          },
        },
        {
          question: {
            easy: 'So is there ANY thing that didn\'t start in nature?',
            medium: 'Can you think of one object that did NOT begin as a natural material?',
            hard: 'Is there any manufactured good whose materials did not originate in nature?',
          },
          reveal: {
            easy:
              "Nope! Wood comes from trees 🌲, water comes from rivers 💧, plastic even comes from stuff in the ground. EVERYTHING starts with the earth. That's why Wild Earth comes first! 🌍",
            medium:
              "Not really! Wood is from forests, water from rivers and rain, even plastic comes from oil in the ground. Every material traces back to nature — Wild Earth is the start of it all.",
            hard:
              "No. Every physical good ultimately derives from extracted natural resources. That's why these industries are called 'primary' — they sit upstream of everything else.",
          },
        },
      ],
    },

    // ─── Concept cards: the parts of Wild Earth ─────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The 5 Ways We Get Stuff From Earth',
      subheading: 'Every raw material comes from one of these.',
      cards: [
        {
          emoji: '🌾',
          title: 'Farming',
          desc: {
            easy: 'Farmers grow food in fields — wheat, corn, apples, and the grass that feeds cows. Almost all your food starts here!',
            medium:
              'Farming (agriculture) grows the food we eat and raises animals for milk and meat. Your bread, fruit, and breakfast all begin on a farm.',
            hard:
              'Agriculture cultivates crops and livestock — the source of nearly all food calories and many fibers like cotton. It is the largest employer on Earth.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '⛏️',
          title: 'Mining',
          desc: {
            easy: 'Miners dig metals and shiny minerals out of the ground — the stuff inside your phone, bike, and toys.',
            medium:
              'Mining pulls metals and minerals from underground — iron, copper, gold, lithium. These become phones, cars, buildings, and batteries.',
            hard:
              'Mining extracts ores and minerals that are refined into the metals behind electronics, vehicles, and infrastructure. Modern tech runs on mined materials.',
          },
          color: '#F0E8E0',
        },
        {
          emoji: '💧',
          title: 'Water',
          desc: {
            easy: 'Water from rivers and rain gets cleaned so we can drink it, wash with it, and grow our food.',
            medium:
              'The water industry collects, cleans, and delivers water to homes and farms. Without clean water, nothing else can grow or live.',
            hard:
              'Water utilities capture, treat, and distribute fresh water — the input that underpins drinking, sanitation, agriculture, and most manufacturing.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🌲',
          title: 'Forestry',
          desc: {
            easy: 'Trees become wood for houses and paper for your books. Your favorite book was once a tree!',
            medium:
              'Forestry grows and harvests trees for wood and paper. Furniture, houses, books, and cardboard boxes all start as a tree in a forest.',
            hard:
              'Forestry manages timber harvests for lumber and pulp. Responsible forestry replants what it cuts so the resource renews over time.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '♻️',
          title: 'Waste & Recycling',
          desc: {
            easy: 'When we throw stuff away, recycling turns old cans and bottles into NEW ones — like giving the earth its stuff back!',
            medium:
              'Recycling collects used materials and turns them back into raw materials again — so we dig and cut down less. Old becomes new.',
            hard:
              'Waste management and recycling recover materials from discarded goods, returning them to the supply chain and reducing fresh extraction.',
          },
          color: '#E5F7E8',
        },
      ],
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Wild Earth Check',
      questions: [
        {
          q: 'Where does the metal inside your phone really come from?',
          options: [
            'A mine, dug out of the ground as rock',
            'A factory invented it from nothing',
            'A farm, like vegetables',
          ],
          correct: 0,
        },
        {
          q: 'Which part of Wild Earth turns trees into wood and paper?',
          options: ['Forestry', 'Mining', 'Water'],
          correct: 0,
        },
        {
          q: 'What does recycling do?',
          options: [
            'Turns used stuff back into new raw materials',
            'Makes brand-new metal from the air',
            'Grows food on a farm',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Foundations: 100 },
    },

    // ─── Connect: where this shows up in the real world ─────────────────
    {
      kind: 'connect',
      heading: '🌍 Wild Earth All Around You',
      concept: {
        easy: 'Once you start looking, you see Wild Earth in EVERYTHING you touch.',
        medium: 'Huge companies and tiny everyday objects all depend on raw materials from the earth.',
        hard: 'The primary-resource industries quietly supply every other business on the planet.',
      },
      examples: [
        {
          emoji: '🚜',
          who: 'The Cereal in Your Bowl',
          story: {
            easy: 'Grain grew on a farm, a tractor picked it, and a factory shaped it into cereal. Breakfast = farming!',
            medium:
              'Big food companies buy grain from thousands of farms, then turn it into cereal, bread, and snacks. It all starts in a field.',
            hard:
              'Food giants sit at the end of an agricultural supply chain: farms grow the grain, processors refine it, brands package and sell it.',
          },
        },
        {
          emoji: '📱',
          who: 'The Phone in Your Hand',
          story: {
            easy: 'The shiny metal inside was dug out of a mine far away, then melted and built into a phone. Mining = your phone!',
            medium:
              'Phone makers buy metals like copper and lithium that miners dug up around the world, then assemble them into the device in your hand.',
            hard:
              'A smartphone bundles dozens of mined metals from global mines — copper, gold, lithium, cobalt — refined and assembled into one product.',
          },
        },
        {
          emoji: '📚',
          who: 'The Book on Your Shelf',
          story: {
            easy: 'A tree grew in a forest, was cut down, and became the paper in your book. Forestry = your story time!',
            medium:
              'Paper companies harvest trees from managed forests and turn the pulp into the paper your books and notebooks are printed on.',
            hard:
              'Publishing depends on forestry: timber becomes pulp, pulp becomes paper, paper becomes the physical book — a full resource chain.',
          },
        },
      ],
      kicker: {
        easy: 'Next time you hold something, ask: where did THIS start? 🌍',
        medium: 'Every object has a hidden journey that begins in nature. Now you can trace it!',
        hard: 'Tracing goods upstream to their raw materials is the first step to understanding any business.',
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know the BIG secret: everything you own started in the earth — a farm, a mine, a river, or a forest! 🌍",
        medium:
          "You learned that Wild Earth comes first: farming, mining, water, forestry, and recycling supply the raw materials for everything else.",
        hard:
          "You've grasped why primary industries sit at the start of every supply chain — nothing gets built until something is pulled from nature first.",
      },
      bonusTip: {
        easy: "Tip: recycling means the earth doesn't have to give us NEW stuff every time. ♻️",
        medium: "Pro tip: recycling shrinks how much we need to dig, cut, and grow — the earth gets a break.",
        hard: "Edge: recycling closes the loop, returning materials upstream so fresh extraction can slow down.",
      },
    },

    // ─── Real-world mission: trace 3 things back to the earth ───────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'wild-earth',
        emoji: '🔎',
        title: {
          easy: 'Earth Detective: Trace 3 Things!',
          medium: 'Trace 3 things at home back to the earth',
          hard: 'Map 3 household objects to their raw-material origin',
        },
        pitch: {
          easy: "Pick 3 things in your home and become a detective — figure out which part of the earth each one started as!",
          medium:
            "Choose 3 objects around your house and trace each one back: did it start as a farm crop, a mined metal, water, or a tree?",
          hard:
            "Select 3 household items and identify the primary industry — farming, mining, water, or forestry — that produced each one's raw material.",
        },
        steps: [
          {
            emoji: '🔎',
            text: {
              easy: 'Pick 3 things in your home — like a spoon, a snack, and a notebook.',
              medium: 'Choose 3 different objects around your home to investigate.',
              hard: 'Select 3 varied household objects (ideally from different categories).',
            },
          },
          {
            emoji: '🤔',
            text: {
              easy: 'For each one, guess: did it start as a plant 🌾, a metal ⛏️, water 💧, or a tree 🌲?',
              medium: 'For each object, decide which part of Wild Earth it started in.',
              hard: 'Assign each object to its origin: farming, mining, water, or forestry.',
            },
          },
          {
            emoji: '🗣️',
            text: {
              easy: 'Tell a grown-up your guesses and ask if they agree.',
              medium: 'Explain your reasoning to a grown-up and compare answers.',
              hard: 'Discuss your classifications with a grown-up to check them.',
            },
          },
          {
            emoji: '♻️',
            text: {
              easy: 'Bonus: find 1 thing that could be recycled instead of thrown away!',
              medium: 'Bonus: spot one item that could be recycled to go back to the earth.',
              hard: 'Bonus: identify one object suitable for recycling back into the material loop.',
            },
          },
        ],
        reflection: [
          {
            key: 'three-things',
            prompt: {
              easy: 'What 3 things did you pick?',
              medium: 'List the 3 objects you investigated.',
              hard: 'Record the 3 objects you analyzed.',
            },
            type: 'text',
          },
          {
            key: 'origins',
            prompt: {
              easy: 'Where did each one start — farm, mine, water, or tree?',
              medium: 'For each object, which part of Wild Earth did it come from?',
              hard: 'Map each object to its primary-industry origin.',
            },
            type: 'longtext',
          },
          {
            key: 'surprise',
            prompt: {
              easy: 'Which one surprised you the most?',
              medium: 'Which origin surprised you, and why?',
              hard: 'Which classification was least obvious, and why?',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is just looking and guessing together — no buying or going anywhere needed. The goal is noticing that everyday things come from nature.",
          medium:
            "A purely observational activity done at home. Help your child reason about where materials come from; there's no shopping or special equipment involved.",
          hard:
            "Observation only — no purchases or outings. The learning goal is teaching kids to trace finished goods back to raw materials and the industries behind them.",
        },
        printables: {
          trackers: [
            {
              title: 'My Earth Detective Log',
              columns: ['Object', 'Farm / Mine / Water / Tree?', 'Could it be recycled?'],
              rows: 3,
              note: 'Pick 3 things at home and trace each one back to the earth.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
