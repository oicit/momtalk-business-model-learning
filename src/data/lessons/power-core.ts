/**
 * Power Core — "How We Power Everything."
 *
 * An overview of the ENERGY industry: the giant business of making the
 * electricity and fuel that runs lights, cars, and game consoles. Kids meet
 * the main energy sources (oil & gas, solar, wind, nuclear), plus the GRID
 * that carries power to homes and BATTERIES that store it for later. They
 * learn that some sources are dirty/limited and some are clean/renewable, and
 * that the world is shifting toward clean energy.
 *
 * Real-World Industries lane. Education-first and observational — the kid
 * counts how many things at home need power and spots one way to save it.
 *
 * Beat order:
 *   intro → think-deeper (where does power come from?) →
 *   concept-cards (the main sources + grid + batteries) → quiz →
 *   connect (energy in the real world) → outro →
 *   real-world-mission (count what needs power, find one way to save).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'power-core',
  themeKey: 'industries',
  emoji: '⚡',
  title: 'Power Core',
  subtitle: {
    easy: 'How does your lamp turn on? Meet the giant world of energy! ⚡',
    medium: 'The energy industry makes the electricity and fuel that runs almost everything you use.',
    hard: 'An overview of the energy industry — sources, the grid, storage, and the shift to clean power.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Flip a switch — the light comes on! ⚡ But where does that power come from? A HUGE world of companies makes the energy that runs your lights, the car, and your game console. Let's explore the Power Core!",
        medium:
          "Almost everything you use needs power: lights, the fridge, the car, your tablet. A giant industry makes all that electricity and fuel. Today we explore where power comes from and how it reaches your home.",
        hard:
          "The energy industry is one of the biggest businesses on Earth — it makes the electricity and fuel that power modern life. Let's break down the sources, how power travels, and why the world is changing how it makes energy.",
      },
    },

    // ─── Think-deeper: where does power come from? ──────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Where Does Power Come From?',
      intro: {
        easy: "Let's follow the power back to where it starts.",
        medium: "Let's trace electricity backward — from your wall to its source.",
        hard: "Let's reason from the outlet back to the origin of the energy.",
      },
      layers: [
        {
          question: {
            easy: 'Your lamp plugs into the wall. But what is behind the wall?',
            medium: 'Power comes out of the wall — but where was it MADE?',
            hard: 'Electricity arrives at the outlet, but where is it generated?',
          },
          reveal: {
            easy:
              "Behind the wall are wires! They run all the way to a big power plant far away, where the electricity is made. 🔌",
            medium:
              'Wires carry power from your wall, down the street, and across many miles to a power plant — a big factory that MAKES electricity.',
            hard:
              'Outlets connect through a web of wires to generating stations that convert a fuel or natural force into electricity, often far from your home.',
          },
        },
        {
          question: {
            easy: 'How do power plants make electricity?',
            medium: 'What do power plants use to make all that power?',
            hard: 'What inputs do generating stations use to produce electricity?',
          },
          reveal: {
            easy:
              "Lots of ways! Some burn oil and gas. Some catch sunshine ☀️ or wind 💨. Some use a tiny powerful thing called nuclear ⚛️.",
            medium:
              "Different sources! Some plants burn oil and gas. Some catch the sun (solar) or the wind. Some use nuclear power. Each one has good and not-so-good parts.",
            hard:
              'Sources include fossil fuels (oil, gas, coal), solar, wind, hydro, and nuclear. They differ in cost, cleanliness, and whether they ever run out.',
          },
        },
        {
          question: {
            easy: 'Some power is "dirty" and some is "clean." What does that mean?',
            medium: 'Why do people say the world should use more CLEAN energy?',
            hard: 'Why is the industry shifting toward renewable sources?',
          },
          reveal: {
            easy:
              "Burning oil and gas makes smoke that's bad for the air. Sun and wind make power with NO smoke — that's clean, and it never runs out! 🌍",
            medium:
              "Burning oil and gas pollutes the air and will run out one day. Sun and wind are CLEAN and never run out — so the world is slowly switching to them.",
            hard:
              'Fossil fuels are limited and emit pollution; renewables like solar and wind are clean and effectively endless. That trade-off is driving a global energy shift.',
          },
        },
      ],
    },

    // ─── Concept cards: the main sources + grid + batteries ─────────────
    {
      kind: 'concept-cards',
      heading: 'The Power Core',
      subheading: 'The main ways the world makes, moves, and stores energy.',
      cards: [
        {
          emoji: '🛢️',
          title: 'Oil & Gas',
          desc: {
            easy: 'We dig oil and gas out of the ground and burn it for power. It works great — but it makes smoke and runs out someday.',
            medium:
              'Oil and gas are burned to make power and run cars. Cheap and strong, but they pollute the air and are limited.',
            hard:
              'Fossil fuels still power most of the world. High energy density, but finite supply and high emissions.',
          },
          color: '#FFEDE0',
        },
        {
          emoji: '☀️',
          title: 'Solar',
          desc: {
            easy: 'Solar panels catch sunshine and turn it into electricity. Clean, quiet, and the sun never runs out!',
            medium:
              'Solar panels turn sunlight into electricity — no smoke, no fuel to buy. Best where the sun shines a lot.',
            hard:
              'Photovoltaic panels convert sunlight to electricity. Clean and renewable, but output depends on weather and time of day.',
          },
          color: '#FFFBE0',
        },
        {
          emoji: '💨',
          title: 'Wind',
          desc: {
            easy: 'Big spinning windmills turn wind into power. Totally clean — they just need a breezy day!',
            medium:
              'Wind turbines spin in the breeze to make electricity. Clean and renewable, but only when the wind blows.',
            hard:
              'Wind turbines convert kinetic air movement into electricity. Renewable and emission-free, but intermittent.',
          },
          color: '#E5F6FF',
        },
        {
          emoji: '⚛️',
          title: 'Nuclear',
          desc: {
            easy: 'A tiny bit of special material makes a HUGE amount of power, with no smoke. It needs to be kept very, very safe.',
            medium:
              'Nuclear power makes tons of clean electricity from a tiny amount of fuel. Very powerful — and must be handled super carefully.',
            hard:
              'Nuclear fission yields enormous, low-emission energy from little fuel. Powerful and steady, but requires strict safety and waste handling.',
          },
          color: '#EAF7EC',
        },
        {
          emoji: '🔌',
          title: 'The Grid',
          desc: {
            easy: 'A giant web of wires carries power from faraway plants all the way to YOUR house. That\'s the grid!',
            medium:
              'The grid is the network of wires and towers that moves power from plants to homes, schools, and stores everywhere.',
            hard:
              'The electrical grid transmits and distributes power from generators to users across vast distances in real time.',
          },
          color: '#EDEAFB',
        },
        {
          emoji: '🔋',
          title: 'Batteries',
          desc: {
            easy: 'Batteries SAVE power for later — like when the sun goes down. They store energy until you need it.',
            medium:
              'Batteries store extra power so we can use it later — handy when the sun sets or the wind stops. Key for clean energy!',
            hard:
              'Storage (batteries) banks excess generation for later use, smoothing out the ups and downs of solar and wind.',
          },
          color: '#FDEAF4',
        },
      ],
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Power Core Check',
      questions: [
        {
          q: 'What does the energy industry make?',
          options: [
            'The electricity and fuel that run almost everything we use',
            'Only toys and games',
            'Just clothes and shoes',
          ],
          correct: 0,
        },
        {
          q: 'Which two energy sources are CLEAN and never run out?',
          options: [
            'Solar (sun) and wind',
            'Oil and gas',
            'Candy and soda',
          ],
          correct: 0,
        },
        {
          q: 'What is the "grid"?',
          options: [
            'The web of wires that carries power from plants to your home',
            'A type of battery you eat',
            'A big swimming pool',
          ],
          correct: 0,
        },
        {
          q: 'What do batteries do for energy?',
          options: [
            'Store power so we can use it later',
            'Make the sun shine brighter',
            'Turn wires into gold',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Foundations: 100 },
    },

    // ─── Connect: energy in the real world ──────────────────────────────
    {
      kind: 'connect',
      heading: '🌍 Energy in Real Life',
      concept: {
        easy: 'The Power Core is hiding everywhere — once you see it, you can\'t stop noticing!',
        medium: 'Energy quietly powers the whole world, from your kitchen to giant cities.',
        hard: 'The energy industry underpins nearly every other business on Earth.',
      },
      examples: [
        {
          emoji: '🚗',
          who: 'Cars Going Electric',
          story: {
            easy: 'New cars can run on electricity instead of gas! You plug them in like a giant phone. 🔌',
            medium:
              'Many new cars are electric — they charge from the grid instead of burning gas. Cleaner air, no gas station!',
            hard:
              'Electric vehicles shift transport from oil to the grid, a major piece of the clean-energy transition.',
          },
        },
        {
          emoji: '🏙️',
          who: 'Cities That Never Sleep',
          story: {
            easy: 'A whole city full of lights, trains, and elevators needs a HUGE amount of power, all day and night.',
            medium:
              "Big cities gulp enormous power for lights, trains, and buildings — power plants must keep up every single second.",
            hard:
              'Urban demand requires constant generation and grid balancing — supply must match demand instantly, 24/7.',
          },
        },
        {
          emoji: '🌞',
          who: 'Solar on the Roof',
          story: {
            easy: 'Some houses have solar panels on the roof making their OWN power from sunshine!',
            medium:
              'Lots of homes now put solar panels on their roofs and make some of their own electricity from the sun.',
            hard:
              'Rooftop solar lets households generate power locally, even selling extra back to the grid.',
          },
        },
      ],
      kicker: {
        easy: 'Look around — almost everything plugged in is part of the Power Core! ⚡',
        medium: 'Once you spot it, energy is everywhere — and it never takes a day off.',
        hard: 'No energy, no economy — which is why this industry matters so much.',
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know the secret behind every switch! Power comes from the sun, wind, oil, gas, and nuclear — and travels through wires to YOU. ⚡",
        medium:
          "You explored the energy industry: where power is made, how the grid carries it, how batteries store it, and why the world is going clean.",
        hard:
          "You've mapped the energy industry — sources, the grid, storage, and the renewable shift. That's the engine behind everything else.",
      },
      bonusTip: {
        easy: "Tip: turning off lights you're not using saves energy AND money! 💡",
        medium: "Pro tip: every watt saved means a little less fuel burned. Small habits add up.",
        hard: "Edge: efficiency is the cheapest energy of all — the power you don't use costs nothing.",
      },
    },

    // ─── Real-world mission: count what needs power, find one saving ────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'power-core',
        emoji: '⚡',
        title: {
          easy: 'Be a Power Detective at Home',
          medium: 'Count what needs power — and find one way to save it',
          hard: 'Audit your home: count powered devices, find one efficiency win',
        },
        pitch: {
          easy: "Walk around your home and count how many things need power. Then find ONE way your family could save energy!",
          medium:
            "Go on a power hunt: count everything in your home that needs electricity or fuel, then spot one easy way to save energy.",
          hard:
            "Do a mini energy audit of your home: tally powered devices and identify one practical way to reduce energy use.",
        },
        steps: [
          {
            emoji: '🔎',
            text: {
              easy: 'Walk room to room. Look for things that plug in or use power — lights, TV, fridge, chargers.',
              medium: 'Go room by room and look for anything that uses electricity or fuel.',
              hard: 'Survey each room and list devices that draw power.',
            },
          },
          {
            emoji: '🔢',
            text: {
              easy: 'Count them all! Write down your number. (Don\'t forget the kitchen — it\'s full of them!)',
              medium: 'Tally up the total number of powered things in your home.',
              hard: 'Record the total count of powered devices.',
            },
          },
          {
            emoji: '💡',
            text: {
              easy: 'Spot ONE thing that\'s on but nobody is using. A light? A TV? That\'s wasted power!',
              medium: 'Find one thing left on while unused — a light, screen, or charger.',
              hard: 'Identify one source of wasted energy (idle or always-on device).',
            },
          },
          {
            emoji: '🌱',
            text: {
              easy: 'Turn it off (with a grown-up\'s okay). You just saved energy — like a real power hero!',
              medium: 'Switch it off (ask a grown-up first) and note your one energy-saving idea.',
              hard: 'Implement the saving and document the change.',
            },
          },
        ],
        reflection: [
          {
            key: 'device-count',
            prompt: {
              easy: 'How many things in your home need power?',
              medium: 'How many powered devices did you count in total?',
              hard: 'Total number of powered devices found?',
            },
            type: 'number',
            suffix: 'things',
          },
          {
            key: 'saving-idea',
            prompt: {
              easy: 'What is ONE way your family could save energy?',
              medium: 'What energy-saving idea did you find?',
              hard: 'Describe the efficiency opportunity you identified.',
            },
            type: 'text',
          },
          {
            key: 'reflection',
            prompt: {
              easy: 'Were you surprised how many things need power? What surprised you?',
              medium: 'Did the count surprise you? What did you notice about how much energy your home uses?',
              hard: 'Reflect on your home\'s energy footprint and where most power goes.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "Counting only — no touching outlets or appliances unsafely. Let your child flip simple light switches with you nearby.",
          medium:
            "Observation activity only. Keep children away from outlets, cords, and hot appliances; supervise any switching off.",
          hard:
            "Strictly observational. Ensure no contact with outlets, wiring, or hot/heavy appliances; an adult handles anything beyond a light switch.",
        },
        printables: {
          trackers: [
            {
              title: 'My Power Detective Sheet',
              columns: ['Room', 'Things that need power', 'How many?'],
              rows: 6,
              note: 'Count everything that plugs in or uses fuel — then find one thing to switch off!',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
