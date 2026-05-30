/**
 * Machine Forge — "The Machines That Build Everything."
 *
 * An overview of the machinery, robotics, and semiconductor INDUSTRY — the
 * companies that make the machines and the tiny "brains" (computer chips)
 * behind almost everything in modern life. Factory machinery, robots that
 * build cars, chips inside phones and toys, and automation: machines that
 * do repetitive work, sometimes even machines that MAKE other machines.
 *
 * Real-world industry overview lesson. Beat order:
 *   intro → think-deeper (why build machines to build things?) →
 *   concept-cards (Machinery, Robots, Chips, Automation) → quiz →
 *   connect (where this shows up) → outro →
 *   real-world-mission (chip hunt: find 5 things at home with a chip).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'machine-forge',
  themeKey: 'industries',
  emoji: '⚙️',
  title: 'Machine Forge',
  subtitle: {
    easy: 'Meet the machines and tiny chips that build everything around you!',
    medium:
      'A peek at the industry that makes machines, robots, and the little computer chips inside almost everything.',
    hard:
      'An overview of the machinery, robotics, and semiconductor industries — the hidden engines and brains of modern life.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Look around — your toys, your phone, even your car got BUILT by machines! And lots of them have a tiny computer chip 💾 inside, like a teeny brain. Welcome to the Machine Forge, where we make the machines that build everything! ⚙️",
        medium:
          "Almost everything you own was built BY a machine — and many things have a tiny chip inside acting like a little brain. Today we explore the industry that makes machinery, robots, and chips: the Machine Forge.",
        hard:
          "Behind modern life is a quiet industry: companies that build factory machinery, robots, automation systems, and semiconductors — the chips that act as the brains in nearly every device. Let's tour the Machine Forge.",
      },
    },

    // ─── Think-deeper: why build machines to build things? ──────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Build a Machine to Build Things?',
      intro: {
        easy: "Let's think about this together.",
        medium: "Let's reason through why machines build our stuff.",
        hard: 'First-principles look at why machinery powers production.',
      },
      layers: [
        {
          question: {
            easy: 'How long would it take ONE person to build a whole car by hand?',
            medium: 'Could one person build thousands of identical cars by hand?',
            hard: 'Why can humans alone not build millions of identical products cheaply?',
          },
          reveal: {
            easy:
              'A loooong time — maybe months for just one! Machines can help build a car in HOURS, the same way every time. That is the power of machinery. 🏭',
            medium:
              'Not quickly, and not the same every time. Machines repeat the exact same motion perfectly, all day, so factories can make thousands fast and identical.',
            hard:
              'Hand-building is slow and inconsistent. Machinery delivers speed, precision, and repeatability — enabling mass production at low cost per unit.',
          },
        },
        {
          question: {
            easy: 'What kind of jobs are PERFECT for a robot? 🤖',
            medium: 'What kind of work do robots do best?',
            hard: 'Which tasks are best suited to automation?',
          },
          reveal: {
            easy:
              'The same boring job over and over — like tightening the same bolt 1,000 times. Robots never get tired or bored! People do the thinking and fixing instead.',
            medium:
              'Repetitive, heavy, or dangerous tasks. Robots do them tirelessly and exactly, freeing people to design, fix, and improve things.',
            hard:
              'Repetitive, high-precision, or hazardous tasks. Automation handles the predictable parts so humans focus on judgment, design, and maintenance.',
          },
        },
        {
          question: {
            easy: 'Could a machine even build ANOTHER machine? 🤯',
            medium: 'Can machines be used to make more machines?',
            hard: 'How does the industry make the machines that make things?',
          },
          reveal: {
            easy:
              'Yes! Big machines build robots, and robots help build more machines. It is machines making machines — like a builder building more builders! 🪄',
            medium:
              'Absolutely. Factories use machines to manufacture more machinery and robots. The tools that build everything are themselves built by other tools.',
            hard:
              'Yes — this is the heart of the machinery industry. Machine tools produce other machines and robots, compounding our ability to make things.',
          },
        },
      ],
    },

    // ─── Concept cards: the four parts of the industry ──────────────────
    {
      kind: 'concept-cards',
      heading: 'Inside the Machine Forge',
      subheading: 'Four big parts of the industry that builds modern life.',
      cards: [
        {
          emoji: '🏭',
          title: 'Machinery',
          desc: {
            easy: 'Giant machines in factories cut, bend, mix, and build things super fast — way faster than hands.',
            medium:
              'Machinery is the big equipment in factories that shapes, cuts, and assembles products quickly and the same way every time.',
            hard:
              'Industrial machinery — presses, lathes, conveyors — performs production tasks with speed and precision that hand labor cannot match.',
          },
          color: '#FFE5F0',
        },
        {
          emoji: '🤖',
          title: 'Robots',
          desc: {
            easy: 'Robot arms build cars and pack boxes. They do the same move perfectly, all day, never tired!',
            medium:
              'Robots are machines that move on their own to do jobs — like welding cars or sorting packages — exactly and tirelessly.',
            hard:
              'Robotics combines machinery with sensors and software, performing repetitive or dangerous tasks with consistent accuracy.',
          },
          color: '#FFF0E8',
        },
        {
          emoji: '💾',
          title: 'Chips / Semiconductors',
          desc: {
            easy: 'A chip is a teeny brain inside your phone, toys, and cars. It is smaller than your fingernail!',
            medium:
              'Computer chips (semiconductors) are tiny brains that tell devices what to do. They are inside phones, toys, cars, and more.',
            hard:
              'Semiconductors are tiny circuits that process information — the "brains" inside virtually every modern electronic device.',
          },
          color: '#E8F0FF',
        },
        {
          emoji: '⚙️',
          title: 'Automation',
          desc: {
            easy: 'Automation means machines doing the boring same-thing jobs for us, over and over, by themselves.',
            medium:
              'Automation is letting machines handle repetitive work automatically, so people can do the thinking and creative jobs.',
            hard:
              'Automation links machines, robots, and software so repetitive processes run with little human input — boosting output and safety.',
          },
          color: '#F0E8FF',
        },
      ],
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Machine Forge Check',
      questions: [
        {
          q: 'What is a computer chip (semiconductor) like?',
          options: [
            'A tiny brain inside a device that tells it what to do',
            'A snack you eat at the movies',
            'A kind of factory machine bigger than a car',
          ],
          correct: 0,
        },
        {
          q: 'What kind of job is BEST for a robot?',
          options: [
            'The same repetitive task over and over, all day',
            'Telling funny jokes to friends',
            'Deciding what game to play',
          ],
          correct: 0,
        },
        {
          q: 'What does "automation" mean?',
          options: [
            'Machines doing repetitive work by themselves',
            'People building everything by hand',
            'A car that only drives in cities',
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
      heading: '🌍 The Machine Forge Everywhere',
      concept: {
        easy: 'Machines and chips are hiding inside almost everything you touch!',
        medium: 'Machinery, robots, and chips quietly power the things you use every day.',
        hard: 'The machinery, robotics, and semiconductor industries underpin nearly all modern products.',
      },
      examples: [
        {
          emoji: '🚗',
          who: 'Robots Build Cars',
          story: {
            easy: 'In car factories, big robot arms put cars together — lifting, welding, and painting all day long!',
            medium:
              'Car factories use hundreds of robot arms to weld, lift, and paint. They work together so a new car rolls out in just hours.',
            hard:
              'Automotive assembly lines rely on coordinated robotics for welding, painting, and assembly — enabling high-volume, consistent production.',
          },
        },
        {
          emoji: '📱',
          who: 'Chips in Your Pocket',
          story: {
            easy: "Your phone, your tablet, even some toys have tiny chips inside acting like little brains. They're everywhere!",
            medium:
              'Phones, tablets, game consoles, and smart toys all run on tiny chips. One small phone can hold billions of switches on its chips.',
            hard:
              'A single smartphone packs multiple semiconductors with billions of transistors — the computing brains behind every tap and swipe.',
          },
        },
        {
          emoji: '🛒',
          who: 'Robots in Warehouses',
          story: {
            easy: 'When you order something online, robots zoom around giant warehouses grabbing your box and sending it to you!',
            medium:
              'Big online stores use robots that race around warehouses fetching items, so your order gets packed and shipped fast.',
            hard:
              'Fulfillment centers deploy fleets of mobile robots and automation to locate, retrieve, and route orders at massive scale.',
          },
        },
      ],
      kicker: {
        easy: 'Once you start looking, you see machines and chips EVERYWHERE! 🔍',
        medium: 'This industry is invisible until you notice it — then you see it in everything.',
        hard: 'These industries are the hidden infrastructure of almost every product you own.',
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: 'Now you know the secret builders of the world: machines, robots, and tiny chips! ⚙️',
        medium:
          'You explored the Machine Forge — the industry of machinery, robots, chips, and automation that builds modern life.',
        hard:
          'You now understand the machinery, robotics, and semiconductor industries — the engines and brains behind nearly everything.',
      },
      bonusTip: {
        easy: 'Tip: a chip can be smaller than your fingernail but hold MILLIONS of tiny switches! 💾',
        medium: "Cool fact: even the machines that build chips are some of the most amazing machines on Earth.",
        hard: 'Edge insight: machines that make machines compound progress — better tools make better tools.',
      },
    },

    // ─── Real-world mission: the chip hunt ──────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'machine-forge',
        emoji: '💾',
        title: {
          easy: 'The Great Chip Hunt',
          medium: 'Hunt for 5 hidden computer chips at home',
          hard: 'Conduct a 5-item semiconductor scavenger hunt at home',
        },
        pitch: {
          easy: 'Be a detective! Find 5 things in your home that have a tiny computer chip 💾 inside.',
          medium:
            'Search your home for 5 different things that have a computer chip inside — phones, toys, remotes, and more.',
          hard:
            'Identify 5 distinct household items containing a semiconductor, then reflect on how chip-driven your home really is.',
        },
        steps: [
          {
            emoji: '🔍',
            text: {
              easy: 'Walk around your home and look for things that light up, beep, or have buttons.',
              medium: 'Scan your home for devices that turn on, light up, or beep — those usually have a chip.',
              hard: 'Survey your home for electronic items; powered or interactive objects typically contain chips.',
            },
          },
          {
            emoji: '✍️',
            text: {
              easy: 'Write down 5 things you think have a tiny chip inside.',
              medium: 'List 5 different items you believe contain a computer chip.',
              hard: 'Record 5 distinct items you hypothesize contain a semiconductor.',
            },
          },
          {
            emoji: '🤔',
            text: {
              easy: 'For each one, ask: what does the chip help it DO?',
              medium: 'For each item, note what job the chip helps that device do.',
              hard: 'For each item, infer the function the embedded chip enables.',
            },
          },
          {
            emoji: '🗣️',
            text: {
              easy: 'Tell a grown-up which one surprised you the most!',
              medium: 'Share with a grown-up which hidden chip surprised you most.',
              hard: 'Discuss with a grown-up which item most surprised you to learn was chip-driven.',
            },
          },
        ],
        reflection: [
          {
            key: 'chip-count',
            prompt: {
              easy: 'How many things with a chip did you find?',
              medium: 'How many chip-containing items did you find in total?',
              hard: 'Total count of items identified with a semiconductor?',
            },
            type: 'number',
            suffix: 'things',
          },
          {
            key: 'chip-list',
            prompt: {
              easy: 'Which 5 things did you find?',
              medium: 'List the 5 items you found.',
              hard: 'Enumerate the 5 chip-bearing items.',
            },
            type: 'text',
          },
          {
            key: 'surprise',
            prompt: {
              easy: 'Which one surprised you the most? Why?',
              medium: 'Which item surprised you most to learn had a chip, and why?',
              hard: 'Which finding was most surprising, and what does it suggest about how common chips are?',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "Help your child look — please don't open or take apart any devices. Just point and guess from the outside!",
          medium:
            'This is observe-only — no opening or disassembling devices. Help your child spot which household items are electronic and chip-driven.',
          hard:
            'Observational only; do not open or disassemble any electronics. Guide your child to reason about which everyday items contain semiconductors.',
        },
        printables: {
          trackers: [
            {
              title: 'My Chip Hunt',
              columns: ['Thing I found', 'What the chip helps it do', 'Surprised me?'],
              rows: 5,
              note: 'Look but do NOT open anything — just guess from the outside!',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
