/**
 * Mega Build — "How Big Things Get Built."
 *
 * An overview of the CONSTRUCTION & infrastructure industry: houses,
 * skyscrapers, roads, bridges, tunnels — plus the raw materials they're
 * made from (cement, steel, glass). Big projects need lots of planning,
 * many workers, and huge machines, and can take YEARS. Infrastructure
 * (roads, bridges, pipes) is the shared stuff everyone uses.
 *
 * Industries lane. Education-first: symbolic ⭐ stand-ins for money, no
 * real prices. Mission is observational with a parentNote.
 *
 * Beat order:
 *   intro → think-deeper (why does a building take so long?) →
 *   concept-cards (Buildings, Roads & Bridges, Cement & Steel, Big
 *   Machines) → calc-challenge (how many days to lay the bricks) →
 *   connect (where construction shows up) → quiz → outro →
 *   real-world-mission (spot 3 built structures and guess the materials).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'mega-build',
  themeKey: 'industries',
  emoji: '🏗️',
  title: 'Mega Build',
  subtitle: {
    easy: 'Houses, towers, roads, bridges — how do people build SO BIG?',
    medium:
      'The construction industry: who builds skyscrapers, bridges, and roads — and what they are made of.',
    hard:
      'Construction & infrastructure — planning, labor, heavy machinery, and the materials (cement, steel, glass) behind everything we build.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Look around — almost EVERYTHING was built by someone! Your home, your school, the road outside, the bridge over the river. Building big things is a giant job called CONSTRUCTION. Let's see how it works! 🏗️",
        medium:
          "Every house, tower, road, and bridge started as an empty space and a plan. The construction industry turns plans into real things — using lots of people, huge machines, and tons of materials. Let's explore it!",
        hard:
          "Construction is one of the oldest and biggest industries on Earth. It takes an idea, a plan, thousands of workers, giant machines, and mountains of materials to build the homes, roads, and bridges we use every single day.",
      },
    },

    // ─── Think-deeper: why does a big building take so long? ────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Does a Skyscraper Take YEARS?',
      intro: {
        easy: "Let's figure out why building big takes so long.",
        medium: "Let's reason through why a tall building isn't built in a day.",
        hard: 'A first-principles look at why mega projects take so long.',
      },
      layers: [
        {
          question: {
            easy: 'Could one person build a whole skyscraper alone?',
            medium: 'Could a single worker build a skyscraper by themselves?',
            hard: 'Why does a large structure require so many people?',
          },
          reveal: {
            easy:
              "No way! A skyscraper needs HUNDREDS of workers — people who pour concrete, lift steel, put in windows, and fix the wires. Everyone does a different job.",
            medium:
              "Not even close. A skyscraper needs hundreds of workers with different skills — concrete crews, steelworkers, electricians, window installers — all working together.",
            hard:
              "No. Big projects split into many specialized trades working in sequence and in parallel. Coordinating all of them is part of why it takes so long.",
          },
        },
        {
          question: {
            easy: 'Why do you have to build the bottom first?',
            medium: 'Why does the foundation have to come before the top?',
            hard: 'Why must construction happen in a strict order?',
          },
          reveal: {
            easy:
              "You can't put a roof on air! The strong bottom part (the foundation) holds up everything above it. Build it wrong and the whole thing could fall. So they go slow and careful.",
            medium:
              "Each floor rests on the one below it, so the strong base — the foundation — must be finished and safe before anything goes on top. Rushing it is dangerous.",
            hard:
              "Loads travel downward, so the foundation and lower structure must be complete and cured before the next stage. The order is dictated by physics, not preference.",
          },
        },
        {
          question: {
            easy: 'What if it rains, or a part shows up late?',
            medium: 'What can slow a building project down?',
            hard: 'What real-world factors stretch out a build?',
          },
          reveal: {
            easy:
              "Storms, late deliveries, and safety checks all make building take longer. That's why a tall tower can take YEARS, not days! 🏗️",
            medium:
              "Weather, late materials, safety inspections, and waiting for concrete to harden all add time. A skyscraper can take two or three years to finish.",
            hard:
              "Weather delays, supply-chain hold-ups, inspections, and curing times all add up. That's why mega projects are measured in years, and why planning matters so much.",
          },
        },
      ],
    },

    // ─── Concept cards: the parts of the industry ───────────────────────
    {
      kind: 'concept-cards',
      heading: 'How Big Things Get Built',
      subheading: 'Four pieces of the construction world — what gets built, and what it is made of.',
      cards: [
        {
          emoji: '🏢',
          title: 'Buildings',
          desc: {
            easy: 'Houses, schools, and tall towers are all buildings. The tallest ones are called skyscrapers — they almost touch the clouds!',
            medium:
              'Buildings are places people live, learn, work, and shop. The tallest — skyscrapers — can have over 100 floors and take years to build.',
            hard:
              'Buildings range from single homes to skyscrapers with 100+ floors. Each needs a foundation, a frame, walls, and systems for water, power, and air.',
          },
          color: '#FFE5F0',
        },
        {
          emoji: '🌉',
          title: 'Roads & Bridges',
          desc: {
            easy: 'Roads and bridges help cars and people get places. A bridge crosses over rivers or valleys so you don\'t have to go around!',
            medium:
              'Roads, bridges, and tunnels connect places together. They are infrastructure — shared things everyone gets to use, not just one person.',
            hard:
              'Roads, bridges, and tunnels are infrastructure: shared public structures everyone uses. They let people and goods move across cities, rivers, and mountains.',
          },
          color: '#FFF0E5',
        },
        {
          emoji: '🧱',
          title: 'Cement & Steel',
          desc: {
            easy: 'Big things are made from cement (hard like rock) and steel (strong metal bars). Glass makes the shiny windows!',
            medium:
              'Most big buildings are made of cement (which hardens like rock), steel (strong metal beams), and glass for windows. These are the building materials.',
            hard:
              'Concrete (cement + sand + rock) handles squeezing forces; steel handles pulling forces. Together they make strong frames, with glass for light and views.',
          },
          color: '#FDF6E5',
        },
        {
          emoji: '🏗️',
          title: 'Big Machines',
          desc: {
            easy: 'Cranes lift heavy steel WAY up high. Diggers scoop dirt, and big trucks haul it all. Machines do the super-heavy work!',
            medium:
              'Cranes lift heavy beams up high, excavators dig the ground, and dump trucks haul material. Machines do the work too big for people.',
            hard:
              'Tower cranes, excavators, and dump trucks handle loads no human could. The right machine for each task keeps a huge site moving safely.',
          },
          color: '#FFE5F0',
        },
      ],
    },

    // ─── Calc challenge: how long to lay the bricks ─────────────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 How Long Will the Wall Take?',
      setup: {
        easy: "A builder needs to lay 200 bricks for a wall. They can lay 50 bricks each day. How many days will the wall take?",
        medium:
          "A bricklayer must place 200 bricks for a garden wall and lays 50 bricks per day. How many days does the job take?",
        hard:
          "A wall needs 200 bricks. At a steady rate of 50 bricks per day, how many days of work does it require?",
      },
      problem: {
        givens: [
          { label: 'Bricks needed', value: 200, suffix: '🧱' },
          { label: 'Bricks per day', value: 50, suffix: '🧱' },
        ],
        answerLabel: 'Days to finish',
        answer: 4,
        suffix: 'days',
      },
      walkthrough: {
        easy: "200 bricks ÷ 50 a day = 4 days. Builders plan out time like this for EVERY part — that's how they know how long a whole building takes!",
        medium:
          "200 ÷ 50 = 4 days. Builders estimate the time for each task, then add them all up to plan the whole project — this is called scheduling.",
        hard:
          "200 ÷ 50 = 4 days. Multiply this for thousands of tasks and you see why planning (the project schedule) is one of construction's biggest challenges.",
      },
    },

    // ─── Connect: where construction shows up ───────────────────────────
    {
      kind: 'connect',
      heading: '🌍 Mega Builds Around You',
      concept: {
        easy: 'Construction is everywhere — once you look, you\'ll spot built things all day long!',
        medium: 'The construction industry built almost every place you go and every road you travel.',
        hard: 'Construction and infrastructure quietly underpin nearly everything in modern life.',
      },
      examples: [
        {
          emoji: '🗽',
          who: 'Famous Landmarks',
          story: {
            easy: "Huge towers like the tallest building in the world were built by thousands of workers over many years. People came from far away to help!",
            medium:
              "The world's tallest building, the Burj Khalifa, took about 6 years and over 12,000 workers to build. That's a LOT of teamwork.",
            hard:
              "The Burj Khalifa took ~6 years and a peak workforce above 12,000. Mega projects like it pull together huge teams, budgets, and supply chains.",
          },
        },
        {
          emoji: '🌉',
          who: 'Bridges Everyone Uses',
          story: {
            easy: "A bridge lets cars cross a river without a boat. Once it's built, EVERYONE gets to use it — that's what infrastructure means.",
            medium:
              "Bridges like the Golden Gate are infrastructure: built once, used by millions of people for many years. Shared by the whole city.",
            hard:
              "Bridges are classic infrastructure — built once at great cost, then shared by everyone for decades. That shared value is why governments fund them.",
          },
        },
        {
          emoji: '🛣️',
          who: 'The Road to School',
          story: {
            easy: "Even the road outside your home was built — workers smoothed it, then trucks rolled the top flat and hard.",
            medium:
              "Roads are built in layers: dirt is flattened, rock is added, then a smooth top is rolled flat. The road you ride on every day was a mega build too!",
            hard:
              "Roads are engineered in compacted layers — subgrade, base, then a wearing surface. Routine, unglamorous, but essential infrastructure.",
          },
        },
      ],
      kicker: {
        easy: 'Next walk outside and count how many built things you can find. SO many! 🏙️',
        medium: 'Almost nothing around you "just appeared" — someone planned and built it.',
        hard: 'Look closely and you\'ll see the whole built environment as one giant, ongoing project.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Mega Build Check',
      questions: [
        {
          q: 'What does the construction industry do?',
          options: [
            'Builds things like houses, roads, and bridges',
            'Grows food on farms',
            'Sells clothes in stores',
          ],
          correct: 0,
        },
        {
          q: 'What are big buildings mostly made of?',
          options: [
            'Cement, steel, and glass',
            'Paper and tape',
            'Just wood and leaves',
          ],
          correct: 0,
        },
        {
          q: 'Why does building a skyscraper take so long?',
          options: [
            'It needs lots of planning, many workers, and the base must be built first',
            'Builders take very long naps',
            'Tall buildings are actually fast and easy',
          ],
          correct: 0,
        },
        {
          q: 'What is "infrastructure"?',
          options: [
            'Shared things like roads and bridges that everyone uses',
            'A toy only one kid can play with',
            'A type of breakfast cereal',
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
        easy: "Now you know how big things get built — with plans, lots of workers, huge machines, and strong materials! 🏗️",
        medium:
          "You explored the construction industry: what gets built, what it's made of, and why mega projects take so much teamwork and time.",
        hard:
          "You've got the big picture of construction & infrastructure — materials, machines, labor, and planning all coming together to shape the world.",
      },
      bonusTip: {
        easy: "Tip: a strong bottom (the foundation) keeps the whole building safe. ⛰️",
        medium: "Pro tip: the foundation is the most important part — everything else rests on it.",
        hard: "Insight: great construction is mostly great planning. The visible build is the easy part.",
      },
    },

    // ─── Real-world mission: spot built structures ──────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'mega-build',
        emoji: '🏗️',
        title: {
          easy: 'Become a Building Spotter!',
          medium: 'Spot 3 built structures and guess what they\'re made of',
          hard: 'Survey 3 nearby structures and identify their materials',
        },
        pitch: {
          easy: "Look around your neighborhood for 3 built things — a tall building, a bridge, and a road. Then guess what each one is made of!",
          medium:
            "On a walk or drive with a grown-up, find 3 different built structures and figure out what materials each one is made from.",
          hard:
            "Observe three distinct structures near home and classify the primary materials and likely purpose of each.",
        },
        steps: [
          {
            emoji: '🏢',
            text: {
              easy: 'Find a TALL building. How many floors can you count?',
              medium: 'Find a tall building and count (or guess) how many floors it has.',
              hard: 'Identify a multi-story building and estimate its floor count.',
            },
          },
          {
            emoji: '🌉',
            text: {
              easy: 'Find a bridge or a road. What does it help people get across or to?',
              medium: 'Spot a bridge or a road and note what it connects.',
              hard: 'Locate a piece of infrastructure (bridge or road) and note its purpose.',
            },
          },
          {
            emoji: '🧱',
            text: {
              easy: 'For each one, guess: is it cement, steel, glass, or wood?',
              medium: 'Guess the main material of each structure: cement, steel, glass, or wood.',
              hard: 'Hypothesize the dominant material for each structure and why.',
            },
          },
          {
            emoji: '🏗️',
            text: {
              easy: 'Bonus: see any big machines or cranes building something new?',
              medium: 'Bonus: spot any construction machines (cranes, diggers) at work nearby.',
              hard: 'Bonus: identify any active construction equipment and the task it performs.',
            },
          },
        ],
        reflection: [
          {
            key: 'tallest',
            prompt: {
              easy: 'What was the TALLEST thing you found? How many floors?',
              medium: 'Describe the tallest structure you spotted and its floor count.',
              hard: 'Tallest structure observed and estimated height/floors?',
            },
            type: 'text',
          },
          {
            key: 'materials',
            prompt: {
              easy: 'What were your 3 things made of? (cement, steel, glass, wood?)',
              medium: 'List the main material you guessed for each of your 3 structures.',
              hard: 'Primary material identified for each of the three structures?',
            },
            type: 'text',
          },
          {
            key: 'insight',
            prompt: {
              easy: 'Which one do you think took the LONGEST to build? Why?',
              medium: 'Which structure do you think took the most time and people to build? Explain.',
              hard: 'Which structure likely required the most planning and labor, and why?',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "Take a short walk or drive together and point things out. No need to go anywhere special — built things are everywhere! Watch traffic and stay on the sidewalk.",
          medium:
            "A neighborhood walk or drive is plenty — buildings, roads, and bridges are everywhere. The goal is noticing and guessing materials, not being exactly right. Mind traffic and safety.",
          hard:
            "Pure observation — no site entry. Discuss why different materials suit different jobs. Keep a safe distance from any active construction or roadways.",
        },
        printables: {
          trackers: [
            {
              title: 'My Building Spotter Sheet',
              columns: ['What I found', 'Tall, bridge, or road?', 'Made of?', 'My guess: hard to build?'],
              rows: 3,
              note: 'Find 3 different built things and fill in a row for each one.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
