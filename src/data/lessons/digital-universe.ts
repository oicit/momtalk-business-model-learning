/**
 * Digital Universe — "The Invisible World That Runs Your Apps."
 *
 * An overview of the TECH INDUSTRY for ages 7-9. Every app you tap, every
 * game you play, and every photo you save is powered by an invisible world:
 * software, the cloud, AI, the internet/telecom signals, and cybersecurity.
 * You can't see it, but it's everywhere.
 *
 * Real-World Industries lane (themeKey 'industries').
 *
 * Beat order:
 *   intro → think-deeper (where do your photos really go?) →
 *   concept-cards (software, cloud, AI, internet, cybersecurity) →
 *   quiz → connect (the same invisible world in giant companies) →
 *   outro → real-world-mission (list 5 apps/devices, guess which need
 *   the internet/cloud).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'digital-universe',
  themeKey: 'industries',
  emoji: '💻',
  title: 'Digital Universe',
  subtitle: {
    easy: "The invisible world that makes all your apps and games work!",
    medium:
      "Software, the cloud, AI, the internet, and keeping data safe — the tech industry runs everything you tap.",
    hard:
      "A tour of the technology industry: software, cloud computing, AI, telecom networks, and cybersecurity — the invisible layer powering modern life.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Tap a game. Watch a video. Send a photo to Grandma. 📱 Where does all that come from? There's a whole INVISIBLE WORLD doing the work — you can't see it, but it's everywhere. Let's go explore the Digital Universe! 💻",
        medium:
          "Every app you open is run by an invisible world of computers, signals, and code. It's called the tech industry. Today we'll peek behind the screen and see the five secret helpers that make everything work.",
        hard:
          "Behind every tap is the technology industry — software, the cloud, AI, telecom networks, and cybersecurity. It's invisible, but it powers your whole digital life. Let's map out the Digital Universe.",
      },
    },

    // ─── Think-deeper: where do your photos really go? ──────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Where Do Your Photos Really Go?',
      intro: {
        easy: "Let's solve a little mystery together.",
        medium: "Let's reason through what happens when you save a photo.",
        hard: "First-principles look at where your data actually lives.",
      },
      layers: [
        {
          question: {
            easy: "You take a photo. It says 'saved'. But saved... WHERE?",
            medium: "When your phone says a photo is 'backed up', where did it go?",
            hard: "When a file 'syncs to the cloud', where does the data physically reside?",
          },
          reveal: {
            easy:
              "Not just on your phone! A copy zooms far away to a giant building FULL of computers. That faraway helper is called the CLOUD. ☁️",
            medium:
              "A copy travels over the internet to a huge building packed with thousands of computers, far from your house. That's 'the cloud' — it's not in the sky, it's a data center!",
            hard:
              "It's copied across the internet to a data center — a warehouse of servers, often hundreds of miles away. 'The cloud' is just other people's powerful computers you rent.",
          },
        },
        {
          question: {
            easy: "Why not just keep EVERYTHING on your own phone?",
            medium: "Why bother sending stuff to faraway computers at all?",
            hard: "What's the advantage of storing and computing in the cloud?",
          },
          reveal: {
            easy:
              "Your phone is small and can fill up! Faraway computers are HUGE and never run out of room. Plus, if you lose your phone, your photos are still safe. 🛟",
            medium:
              "Big computers can store way more and do harder jobs than a phone. And if your phone breaks, your photos and games are safe somewhere else — you can get them back.",
            hard:
              "Cloud servers offer near-unlimited storage, powerful computing, and backup. You rent only what you need, and your data survives even if your device doesn't.",
          },
        },
        {
          question: {
            easy: "So who keeps the bad guys from peeking at your stuff?",
            medium: "If your photos are out there, who keeps them private?",
            hard: "How is all that stored data protected from attackers?",
          },
          reveal: {
            easy:
              "A team of computer guards! They use secret locks and passwords so only YOU can see your stuff. That guarding job is called cybersecurity. 🔒",
            medium:
              "Special workers and clever code lock everything up with passwords and secret codes. Keeping data safe from bad guys is a whole job called cybersecurity.",
            hard:
              "Cybersecurity — encryption, passwords, and monitoring — protects data from theft and attack. It's an entire industry built around keeping the invisible world safe.",
          },
        },
      ],
    },

    // ─── Concept cards: the five parts of the tech industry ─────────────
    {
      kind: 'concept-cards',
      heading: 'The 5 Helpers of the Digital Universe',
      subheading: "You never see them — but nothing works without them.",
      cards: [
        {
          emoji: '🧩',
          title: 'Software',
          desc: {
            easy: 'Software is the instructions that tell a computer what to do. Every app and game IS software — like a recipe the computer follows.',
            medium:
              'Software is the apps and programs — the coded instructions that make a device do something. Games, video apps, drawing tools: all software.',
            hard:
              'Software is coded instructions that turn hardware into useful tools. Apps, operating systems, and programs are all software — the brains of every device.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '☁️',
          title: 'The Cloud',
          desc: {
            easy: "The cloud is giant computers far away that store your photos and run your games. You 'rent' a little space on someone else's super-computer!",
            medium:
              "The cloud is huge computers in faraway buildings that store your stuff and do big jobs. You don't own them — you rent them, like borrowing a giant library.",
            hard:
              "The cloud is renting space and power on someone else's data-center computers over the internet — storage and computing on demand, without owning the machines.",
          },
          color: '#E5FAF1',
        },
        {
          emoji: '🤖',
          title: 'AI',
          desc: {
            easy: 'AI is a computer that learns and helps — like a smart helper that can answer questions, suggest videos, or finish your drawing.',
            medium:
              'AI (artificial intelligence) is software that learns from tons of examples, then helps you — answering questions, suggesting songs, or spotting things in photos.',
            hard:
              'AI is software trained on lots of data to recognize patterns and make smart guesses — powering recommendations, chat helpers, and image recognition.',
          },
          color: '#F0E8FD',
        },
        {
          emoji: '📡',
          title: 'Internet & Telecom',
          desc: {
            easy: "Telecom is the invisible signals — Wi-Fi, phone bars, cables — that carry your messages zooming around the world in a blink. 📶",
            medium:
              'The internet and telecom are the roads your data travels on — Wi-Fi, cell signals, and giant cables under the ocean connect everyone everywhere.',
            hard:
              'Telecom and the internet are the network layer — wireless signals, fiber cables, and undersea lines that move data between devices across the planet.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🔒',
          title: 'Cybersecurity',
          desc: {
            easy: 'Cybersecurity is the guard team that keeps your data safe from bad guys — with passwords and secret locks only you can open.',
            medium:
              'Cybersecurity protects your data from thieves and tricksters using passwords, secret codes, and watchful software. It keeps the digital world safe.',
            hard:
              'Cybersecurity defends data and systems from attacks using encryption, authentication, and monitoring — a critical pillar of the whole tech industry.',
          },
          color: '#FDE8EC',
        },
      ],
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Digital Universe Check',
      questions: [
        {
          q: 'What is "the cloud"?',
          options: [
            'Giant computers far away that store your stuff and run jobs',
            'A fluffy white cloud in the sky',
            'A kind of video game',
          ],
          correct: 0,
        },
        {
          q: 'What is software?',
          options: [
            'The instructions (apps and programs) that tell a computer what to do',
            'The metal box the computer is made of',
            'The electricity plug',
          ],
          correct: 0,
        },
        {
          q: 'What does cybersecurity do?',
          options: [
            'Keeps your data safe from bad guys with locks and passwords',
            'Makes your phone bigger',
            'Sends you free games',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Foundations: 100 },
    },

    // ─── Connect: the invisible world inside giant companies ────────────
    {
      kind: 'connect',
      heading: '🌍 The Digital Universe in Real Life',
      concept: {
        easy: 'The same invisible helpers power the biggest companies in the world.',
        medium: 'Software, cloud, AI, telecom, and security run almost every big tech company you know.',
        hard: 'The five tech pillars underpin the products of the world\'s largest companies.',
      },
      examples: [
        {
          emoji: '🎬',
          who: 'A Video App',
          story: {
            easy: "When you watch a show, it lives in the cloud and zooms to you over the internet. AI even guesses what you'll like next!",
            medium:
              "Video apps store thousands of shows in the cloud, send them over telecom networks, and use AI to suggest what to watch next.",
            hard:
              "Streaming platforms combine cloud storage, telecom delivery, and AI recommendation — three pillars working at once for every play button.",
          },
        },
        {
          emoji: '🎮',
          who: 'An Online Game',
          story: {
            easy: "The game is software, it runs partly in the cloud, and a guard team (cybersecurity) keeps your account safe.",
            medium:
              "Online games are software running on cloud servers, connected by the internet, and protected by cybersecurity so nobody steals your account.",
            hard:
              "Multiplayer games rely on software, cloud compute, low-latency networking, and security to keep millions of accounts safe and in sync.",
          },
        },
        {
          emoji: '🗣️',
          who: 'A Smart Speaker',
          story: {
            easy: "You ask a question, your words zoom to the cloud, AI figures out the answer, and it talks back — all in one second!",
            medium:
              "A voice assistant sends your question over the internet to the cloud, where AI understands it and finds an answer — then sends it back instantly.",
            hard:
              "Voice assistants pipeline telecom, cloud, and AI: speech is transmitted, processed by cloud-based models, and returned as a response in moments.",
          },
        },
      ],
      kicker: {
        easy: 'Invisible? Yes. But it\'s the busiest world there is! 💻',
        medium: 'You can\'t see it — but the Digital Universe never stops working.',
        hard: 'The invisible layer is now one of the largest industries on Earth.',
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you can SEE the invisible world! Software, the cloud, AI, signals, and guards — they run everything you tap. 💻",
        medium:
          "You just toured the tech industry: software, cloud, AI, internet, and cybersecurity. Next time an app loads, you'll know who's really doing the work!",
        hard:
          "You've mapped the five pillars of the technology industry. The invisible world isn't a mystery anymore — it's an industry you understand.",
      },
      bonusTip: {
        easy: "Tip: every time an app needs the internet, it's probably talking to the cloud! ☁️",
        medium: "Pro tip: if an app stops working without Wi-Fi, it likely depends on the cloud.",
        hard: "Insight: 'needs internet to work' usually means the heavy lifting happens in the cloud, not on your device.",
      },
    },

    // ─── Real-world mission: spot the invisible world ───────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'digital-universe',
        emoji: '🔎',
        title: {
          easy: 'Spot the Invisible World',
          medium: 'Spot the Digital Universe in your day',
          hard: 'Audit your devices: which ones need the cloud?',
        },
        pitch: {
          easy: "List 5 apps or gadgets you use. Then guess which ones need the INTERNET or CLOUD to work. Become a Digital Universe detective! 🔎",
          medium:
            "Write down 5 apps or devices you use, then figure out which ones need the internet or cloud to work — and which work all on their own.",
          hard:
            "Catalog 5 apps/devices you use and classify which rely on internet/cloud connectivity versus running fully on-device.",
        },
        steps: [
          {
            emoji: '✍️',
            text: {
              easy: 'Write down 5 apps or gadgets you use (a game, a video app, a watch, a speaker...).',
              medium: 'List 5 apps or devices you use most in a normal day.',
              hard: 'Enumerate 5 apps/devices you regularly use across different categories.',
            },
          },
          {
            emoji: '☁️',
            text: {
              easy: 'Next to each one, guess: does it need the internet or cloud? Write YES or NO.',
              medium: 'For each, predict whether it needs the internet/cloud to work. Mark yes or no.',
              hard: 'Hypothesize which depend on connectivity vs. run offline; note your prediction.',
            },
          },
          {
            emoji: '📶',
            text: {
              easy: 'With a grown-up, try turning off the Wi-Fi for a moment. Which apps stop working?',
              medium: 'With a grown-up, briefly turn off Wi-Fi and see which apps still work and which freeze.',
              hard: 'With a grown-up, toggle Wi-Fi off and observe which apps degrade or fail.',
            },
          },
          {
            emoji: '🤔',
            text: {
              easy: 'Compare! Were your guesses right? Which surprised you?',
              medium: 'Check your guesses against what actually happened. Any surprises?',
              hard: 'Compare predictions to observed behavior; note any mismatches.',
            },
          },
        ],
        reflection: [
          {
            key: 'apps-list',
            prompt: {
              easy: 'What 5 apps or gadgets did you pick?',
              medium: 'List the 5 apps or devices you tested.',
              hard: 'Which 5 apps/devices did you audit?',
            },
            type: 'longtext',
          },
          {
            key: 'needs-internet',
            prompt: {
              easy: 'How many needed the internet or cloud to work?',
              medium: 'How many of your 5 stopped working without Wi-Fi?',
              hard: 'How many of the 5 required connectivity to function?',
            },
            type: 'number',
            suffix: 'apps',
          },
          {
            key: 'surprise',
            prompt: {
              easy: 'Which one surprised you the most? Why?',
              medium: 'Which result surprised you, and why do you think it happened?',
              hard: 'Which prediction was wrong, and what does that reveal about the app?',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is just looking and guessing — no buying or downloading. Turning Wi-Fi off for a minute is a fun, safe way to see the cloud at work.",
          medium:
            "Observation only — no purchases or new downloads needed. Toggling Wi-Fi briefly is a safe, hands-on way to reveal which apps depend on the cloud.",
          hard:
            "Purely observational. A brief Wi-Fi toggle demonstrates cloud dependence concretely; no accounts, purchases, or installs required.",
        },
        printables: {
          trackers: [
            {
              title: 'My Digital Universe Detective Sheet',
              columns: ['App or device', 'My guess (internet?)', 'Worked without Wi-Fi?'],
              rows: 5,
              note: 'Guess first, then test by turning Wi-Fi off for a moment with a grown-up.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
