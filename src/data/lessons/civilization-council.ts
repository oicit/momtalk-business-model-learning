/**
 * Civilization Council — "Who Keeps Things Fair & Safe."
 *
 * An overview of the GOVERNMENT & public-services sector: keeping people
 * safe (police, firefighters), keeping things fair (courts & laws),
 * protecting the country (defense), and building public goods everyone
 * shares (parks, roads, libraries).
 *
 * The big idea kids walk away with: most of these aren't run to make a
 * profit — they're paid for TOGETHER by taxes (links straight to Tax
 * Town) so EVERYONE gets to use them. Rules help everyone play fair.
 *
 * Beat order:
 *   intro → think-deeper (why isn't safety just sold like candy?) →
 *   concept-cards (Keeping Safe / Fair Rules & Courts / Defense / Public
 *   Goods) → quiz → connect (real councils & shared things) → outro →
 *   real-world-mission (spot 3 public/government things you used today).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'civilization-council',
  themeKey: 'industries',
  emoji: '🏛️',
  title: 'Civilization Council',
  subtitle: {
    easy: 'Who keeps everyone safe and fair? Meet the helpers we all share.',
    medium:
      'Government & public services: safety, fair rules, defense, and the things everyone shares — paid for together so everyone can use them.',
    hard:
      'The public sector: provision of safety, justice, defense, and public goods funded collectively rather than for profit.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Most businesses sell things to make money. But who makes sure your street is SAFE? Who comes if there's a fire? Who makes the rules so everyone plays fair? That's the Civilization Council — the helpers a whole country shares! 🏛️",
        medium:
          "You've learned how businesses earn money. But some of the most important work isn't about profit at all — keeping people safe, keeping things fair, and protecting everyone. That's government and public services. Let's meet them.",
        hard:
          "Not every important job is a for-profit business. The public sector exists to provide safety, justice, defense, and shared goods that markets struggle to supply. Today: what it does and why we fund it together.",
      },
    },

    // ─── Think-deeper: why isn't safety just sold like candy? ───────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Not Just SELL Safety?',
      intro: {
        easy: "Let's puzzle this out together.",
        medium: "Let's reason through why some helpers aren't run like a normal shop.",
        hard: 'First-principles: why provide safety and justice collectively?',
      },
      layers: [
        {
          question: {
            easy: 'What if firefighters only saved houses that PAID them first?',
            medium: 'What if a fire department only put out fires for paying customers?',
            hard: 'What happens if emergency safety is sold only to those who pre-pay?',
          },
          reveal: {
            easy:
              "Scary! If your neighbor's house caught fire and they hadn't paid, the WHOLE block could burn — including yours. Some things have to protect EVERYONE to work at all.",
            medium:
              "It falls apart — a fire next door spreads to you whether or not your neighbor paid. Safety protects the whole street at once, so we pay for it together and it covers everyone.",
            hard:
              "It fails — fire protection has spillover benefits to neighbors regardless of payment. Universal coverage is more efficient, so it's funded collectively rather than sold per-customer.",
          },
        },
        {
          question: {
            easy: 'Who decides what is fair when two people disagree?',
            medium: 'When two people argue over who is right, who settles it fairly?',
            hard: 'How are disputes resolved fairly without each side just taking what it wants?',
          },
          reveal: {
            easy:
              "Not the loudest or strongest person! We have RULES (laws) and fair judges (courts) so everyone is treated the same — even kings and grown-ups have to follow them. ⚖️",
            medium:
              "Courts and laws do — the same rules apply to everyone, big or small. That's what 'fair' means: not the strongest winning, but the same rules for all.",
            hard:
              "Courts apply laws that bind everyone equally. The rule of law replaces 'might makes right' with consistent, impartial rules — the foundation of a fair society.",
          },
        },
        {
          question: {
            easy: 'Who pays for the road, the park, and the streetlights you use?',
            medium: 'Who pays for roads, parks, and libraries that everyone gets to use for free?',
            hard: 'How are shared public goods that anyone can use financed?',
          },
          reveal: {
            easy:
              "Everybody, together — with TAXES! A little money from lots of people pays for big things one family could never buy alone. Then everyone gets to use them. 🛣️",
            medium:
              "We all chip in through taxes. Pooled money buys roads, parks, and libraries — things too big for one family, but easy when a whole town shares the cost. (Remember Tax Town?)",
            hard:
              "Through taxes — pooled collective funding. Public goods are non-excludable and too costly for individuals, so we fund them together and share the benefit.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ──────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'Who Keeps Things Fair & Safe',
      subheading: 'Four big jobs the Civilization Council does for everyone.',
      cards: [
        {
          emoji: '🚒',
          title: 'Keeping Safe',
          desc: {
            easy: 'Police and firefighters keep everyone safe. Call for help and they come — no matter who you are or what you paid.',
            medium:
              'Public safety: police, firefighters, and ambulances protect everyone. They show up for any person in trouble, free at the moment you need them.',
            hard:
              'Public safety services (police, fire, EMS) provide universal-access protection — funded by taxes so help arrives regardless of ability to pay.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '⚖️',
          title: 'Fair Rules & Courts',
          desc: {
            easy: 'Laws are the rules everyone follows so things stay fair. Courts and judges decide who is right when people disagree.',
            medium:
              'Laws are shared rules; courts settle disagreements fairly. The same rules apply to everyone — that keeps the game fair for all players.',
            hard:
              'Laws set shared rules; courts apply them impartially. The rule of law means rules bind everyone equally, enabling trust and fair dealing.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🛡️',
          title: 'Defense',
          desc: {
            easy: 'The country protects ALL its people from danger from outside. It guards everyone at once, like one big shield.',
            medium:
              'Defense protects the whole country at once. You can\'t buy your own piece of national safety — it covers everyone together.',
            hard:
              'National defense is a classic public good: protecting the country protects everyone simultaneously, so it must be provided collectively.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🏞️',
          title: 'Public Goods',
          desc: {
            easy: 'Parks, roads, libraries, and streetlights are things EVERYONE shares. Paid for by taxes, free for you to use!',
            medium:
              'Public goods — parks, roads, libraries, streetlights — are shared by all and funded by taxes. No one is turned away.',
            hard:
              'Public goods (parks, roads, libraries) are non-excludable and shared. Tax funding lets everyone use them without per-use charges.',
          },
          color: '#E5FAF1',
        },
      ],
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Civilization Council Check',
      questions: [
        {
          q: 'How do we usually pay for police, parks, and roads?',
          options: [
            'With taxes everyone chips in together',
            'Each family buys its own',
            'A company sells them for profit',
          ],
          correct: 0,
        },
        {
          q: 'What keeps things fair when two people disagree?',
          options: [
            'Laws and fair courts that treat everyone the same',
            'Whoever is loudest wins',
            'Whoever has the most money wins',
          ],
          correct: 0,
        },
        {
          q: 'Why is "Keeping Safe" shared by everyone instead of sold one-by-one?',
          options: [
            'Protecting your street protects the whole street at once',
            'Because safety is cheap',
            'So only rich people stay safe',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Foundations: 100 },
    },

    // ─── Connect: where this shows up in real life ──────────────────────
    {
      kind: 'connect',
      heading: '🌍 The Council in Real Life',
      concept: {
        easy: 'Your town has a real Civilization Council — it just has lots of names.',
        medium: 'Government and public services surround you every day — usually without a price tag.',
        hard: 'The public sector operates at city, state, and national scale, mostly invisibly.',
      },
      examples: [
        {
          emoji: '🏛️',
          who: 'Your Town Hall',
          story: {
            easy: "Grown-ups in your town VOTE for leaders who decide how to spend the shared money — on schools, parks, and safe streets.",
            medium:
              "Your town has a mayor and council, elected by voters, who plan how taxes are spent on schools, parks, roads, and safety. That's the council, for real.",
            hard:
              "Elected local officials allocate municipal budgets across education, infrastructure, recreation, and public safety — the real-world Civilization Council.",
          },
        },
        {
          emoji: '🚸',
          who: 'The Crossing Guard',
          story: {
            easy: "The grown-up who stops cars so you can cross safely is paid by your town. Free for you — keeps every kid safe.",
            medium:
              "Crossing guards, school nurses, and librarians are public workers paid by taxes so every kid gets safety and help for free.",
            hard:
              "Crossing guards, public-school staff, and librarians are tax-funded roles ensuring universal access to safety and learning.",
          },
        },
        {
          emoji: '📚',
          who: 'The Free Library',
          story: {
            easy: "You can borrow ANY book at the library for free. Nobody owns it alone — the whole town shares it. That's a public good!",
            medium:
              "A public library lets anyone borrow books for free because the town owns it together. One shared thing, used by everyone — the public-goods idea in action.",
            hard:
              "Public libraries are tax-funded shared resources — a textbook public good offering universal, non-excludable access to knowledge.",
          },
        },
      ],
      kicker: {
        easy: 'Once you start looking, the Council is EVERYWHERE around you. 🏛️',
        medium: 'It rarely sends a bill — which is exactly why it\'s so easy to miss.',
        hard: 'Most public-sector value is consumed at zero marginal cost, making it easy to overlook.',
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know the Civilization Council: it keeps everyone SAFE and FAIR, and we all pay for it together so EVERYONE can use it! 🏛️",
        medium:
          "You've met the public sector: safety, fair rules, defense, and shared public goods — funded together, for everyone, not for profit.",
        hard:
          "You understand why some essential work is provided collectively rather than for profit, and how taxes fund safety, justice, and public goods.",
      },
      bonusTip: {
        easy: "Tip: every red fire hydrant on your street is the Council quietly keeping you safe. 🧯",
        medium: "Pro tip: most of what government does is invisible until you need it — that's a sign it's working.",
        hard: "Insight: well-functioning public goods are unnoticed precisely because they reliably work in the background.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'civilization-council',
        emoji: '🏛️',
        title: {
          easy: 'Spot 3 Council Things You Used Today!',
          medium: 'Find 3 public / government things you used today',
          hard: 'Identify 3 public-sector services you used today',
        },
        pitch: {
          easy: "Think back over your whole day. Find 3 things you used that the Civilization Council made — a road, a park, a crossing guard, a library!",
          medium:
            "Look back at your day and find 3 things you used that government and public services provide — roads, parks, crossing guards, libraries, streetlights.",
          hard:
            "Reflect on your day and identify 3 public-sector services or public goods you actually used, and who they keep safe or fair.",
        },
        steps: [
          {
            emoji: '🧠',
            text: {
              easy: 'Sit with a grown-up and think about everywhere you went today.',
              medium: 'With a grown-up, retrace your whole day from morning to night.',
              hard: 'Reconstruct your day\'s route and activities with a grown-up.',
            },
          },
          {
            emoji: '👀',
            text: {
              easy: 'Look for: a road, a sidewalk, a park, a crossing guard, a library, a streetlight.',
              medium: 'Spot candidates: roads, sidewalks, parks, crossing guards, libraries, streetlights, traffic lights.',
              hard: 'Scan for public goods and services: transport, recreation, safety, education infrastructure.',
            },
          },
          {
            emoji: '✍️',
            text: {
              easy: 'Pick your 3 favorites and write them down.',
              medium: 'Choose 3 and note where you used each one.',
              hard: 'Select 3 and record each with its public-sector job (safe / fair / shared).',
            },
          },
          {
            emoji: '🤔',
            text: {
              easy: 'For each one, ask: what does it keep safe or fair? Who shares it?',
              medium: 'For each: what would your day be like without it?',
              hard: 'For each: identify the benefit and who would be affected if it vanished.',
            },
          },
        ],
        reflection: [
          {
            key: 'three-things',
            prompt: {
              easy: 'List the 3 Council things you used today.',
              medium: 'Your 3 public / government things',
              hard: 'The 3 public-sector items you identified',
            },
            type: 'longtext',
            placeholder: '1. The road to school — 2. The park — 3. The crossing guard...',
          },
          {
            key: 'job',
            prompt: {
              easy: 'Which one keeps you SAFE? Which is FAIR? Which is SHARED?',
              medium: 'Match each item to its job: keeping safe, fair rules, or a shared public good.',
              hard: 'Classify each item: safety, justice/fairness, defense, or public good.',
            },
            type: 'text',
          },
          {
            key: 'favorite',
            prompt: {
              easy: 'Which one would you MOST miss if it disappeared? Why?',
              medium: 'Which one would you most hate to lose, and why?',
              hard: 'Highest personal-value item and your reasoning.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is just noticing and talking — no walking required. Let your kid guess; even 'wrong' guesses (like a private store) are great talking points.",
          medium:
            "Observational reflection only — do it at the dinner table. Don't correct guesses too quickly; mistaking a private shop for a public service is a useful chance to discuss the public/private line.",
          hard:
            "Pure reflection exercise, no fieldwork needed. Misclassifications (e.g., private business vs. public good) are productive for nuancing the public/private distinction.",
        },
      },
    },
  ],
};

export default lesson;
