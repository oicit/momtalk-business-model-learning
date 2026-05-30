/**
 * Coding Gig — build a REAL thing for a "client" and get paid (stars).
 *
 * The core idea: you don't have to wait to be a grown-up to make something
 * valuable. If you can build a SKILL — a webpage, a tiny game, a poster, a
 * slideshow — someone will want it. And the magic of a skill is that you
 * build it ONCE in your head, then USE it again and again for different
 * "clients." That's a reusable, high-value skill — the seed of a business.
 *
 * Beat order:
 *   intro (you can build + get paid NOW) → think-deeper (why is a skill
 *   worth so much?) → concept-cards (Skill · Client · Reusable · Portfolio)
 *   → calc-challenge (3 clients × 50⭐ = 150⭐, same skill) → connect
 *   (kid coders, Canva, freelance builders) → outro → real-world-mission
 *   (build one small thing for a family "client" and earn pretend stars).
 *
 * Education-first: stars are symbolic. The mission is observational +
 * has a parentNote. Theme borrows the app-maker theme.
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'coding-gig',
  themeKey: 'app-maker',
  emoji: '💻',
  title: 'Coding Gig',
  subtitle: {
    easy: 'Build a real thing for someone — and they pay you stars for it!',
    medium:
      'A "gig" is a small job you build for one person. Learn a skill once, then sell it again and again.',
    hard:
      'How a reusable skill becomes a tiny business: build once, deliver to many clients, each one paying for your time + talent.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "You don't have to wait until you're grown up to make money! If you can BUILD something someone wants — a poster, a tiny game, a slideshow, a webpage — they'll happily pay you ⭐ for it. Building a thing for someone is called a GIG. 💻",
        medium:
          "Here's a secret: you can earn ⭐ right now by BUILDING things. A poster for the school fair. A little game for your cousin. A slideshow for a birthday. When you make something for one person, that's a GIG — a small job — and people pay for it.",
        hard:
          "A 'gig' is a small, one-off job you build and deliver for a single client. The reason it's so powerful: the value isn't the hours — it's the SKILL you bring. Today you'll see how one learnable skill turns into ⭐ over and over again.",
      },
    },

    // ─── Think-deeper: why is a skill worth so much? ────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Would Anyone Pay a KID?',
      intro: {
        easy: "Let's figure out why a skill is worth real ⭐.",
        medium: "Let's reason through why people pay for a built thing.",
        hard: 'First-principles look at where the value in a gig comes from.',
      },
      layers: [
        {
          question: {
            easy: "If your aunt wants a birthday slideshow, why doesn't she just make it herself?",
            medium: "Why would someone pay YOU to build a thing they could try to build themselves?",
            hard: "Why does a client pay for a deliverable they could theoretically produce alone?",
          },
          reveal: {
            easy:
              "Because YOU know how, and it would take her forever to figure out! You save her time AND it comes out better. Knowing how to do something is worth ⭐.",
            medium:
              "Because you have the SKILL and she doesn't — or she has no time. You do it faster and better. People pay to save time and to get something good. That's the whole reason jobs exist!",
            hard:
              "Because skill + time are the scarce inputs. The client trades ⭐ to avoid the learning curve and the hours. Value flows to whoever can deliver the result reliably.",
          },
        },
        {
          question: {
            easy: "Here's the cool part: once you learn to make ONE slideshow, how hard is the SECOND one?",
            medium: "After you've built your first poster, how much easier is the next one?",
            hard: "What happens to your cost (effort) per gig as you repeat the same skill?",
          },
          reveal: {
            easy:
              "Way easier! You already know how. The second one is faster. The third one is even faster. The skill stays in YOUR HEAD forever. 🪄",
            medium:
              "Much easier. The hard part — LEARNING — is done. Now each new gig mostly just takes a little time. Your skill is a tool you keep reusing for free.",
            hard:
              "Your effort per gig drops sharply. The big upfront cost was learning; after that, each delivery is mostly execution. A reusable skill has near-zero 're-learning' cost.",
          },
        },
        {
          question: {
            easy: "So what if 5 different people each want a slideshow from you?",
            medium: "What happens when many people each want the thing you can build?",
            hard: "How does one skill scale across multiple clients?",
          },
          reveal: {
            easy:
              "You make 5 — and earn ⭐ FIVE times — using the SAME skill you learned once! One skill, lots of ⭐. That's how a skill becomes a little business. 💼",
            medium:
              "You build it 5 times and get paid 5 times, all from ONE skill you learned once. Learn once, earn many times — that's what makes a skill so valuable.",
            hard:
              "Each client pays separately for the same underlying skill. The learning cost is paid once; revenue stacks across clients. That's the seed of a real business.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ──────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Words of a Gig',
      subheading: 'These turn "I made a cool thing" into "I have a tiny business."',
      cards: [
        {
          emoji: '🛠️',
          title: 'Skill',
          desc: {
            easy: 'A SKILL is something you learned to DO — draw, code a game, make a slideshow, design a poster. Skills make things people want.',
            medium:
              'A skill is a thing you can DO well — building a webpage, a game, a poster, a deck. Skills are the engine: they turn your time into something valuable.',
            hard:
              'A skill is your core asset: a learnable ability to produce a result. It is the thing clients are actually paying for, not the hours alone.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🧑',
          title: 'Client',
          desc: {
            easy: 'A CLIENT is the person you build the thing FOR. Your aunt, your teacher, a neighbor — anyone who wants what you can make.',
            medium:
              'A client is whoever you build for and who pays you. Each gig has a client with a need you can fill. Happy clients come back AND tell friends.',
            hard:
              'A client is the buyer of your deliverable. Identifying real clients with real needs is half the work; a skill with no client earns nothing.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '🔁',
          title: 'Reusable',
          desc: {
            easy: 'REUSABLE means you can use the SAME skill again and again. Learn to make a poster once — now you can make a HUNDRED.',
            medium:
              'A reusable skill is learned once and used forever. The hard part (learning) happens one time; after that each new gig is quick.',
            hard:
              'Reusability means near-zero marginal learning cost per gig. High upfront skill investment, low cost to repeat — the same property that makes software powerful.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '📁',
          title: 'Portfolio',
          desc: {
            easy: 'A PORTFOLIO is a folder of cool things you\'ve made. Show it to new clients so they say "WOW — make me one too!"',
            medium:
              'A portfolio is your collection of finished gigs. It proves you can deliver, so new clients trust you and pay more.',
            hard:
              'A portfolio is social proof + a track record. It lowers a new client\'s risk, which lets you win more gigs and raise your price.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: one skill, many clients ────────────────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 One Skill, Many Clients',
      setup: {
        easy: "You learned how to make a birthday slideshow. Three different family members each want one, and each pays you 50⭐. How many ⭐ do you earn in total?",
        medium:
          "You learned ONE skill: making slideshows. Three clients each want one and each pays 50⭐. What's your total — from a skill you learned just once?",
        hard:
          "One reusable skill, 3 clients, 50⭐ per gig. Compute total revenue from a single skill investment.",
      },
      problem: {
        givens: [
          { label: 'Clients', value: 3, suffix: '' },
          { label: 'Stars per gig', value: 50, suffix: '⭐' },
        ],
        answerLabel: 'Total stars earned',
        answer: 150,
        suffix: '⭐',
      },
      walkthrough: {
        easy: "3 clients × 50⭐ = 150⭐! And you only had to LEARN the slideshow skill one time. The more clients you find, the more ⭐ — same skill, no extra learning. 🪄",
        medium:
          "3 × 50⭐ = 150⭐. The amazing part: the skill cost you ONE round of learning, but it earned ⭐ three separate times. Find a 4th client and it's 200⭐ — same skill.",
        hard:
          "3 × 50 = 150⭐. Your learning cost was paid once; revenue scaled with clients. This is the core of a service business: a reusable skill applied repeatedly.",
      },
    },

    // ─── Connect ────────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌍 Gigs in Real Life',
      concept: {
        easy: 'Lots of people earn money by building things for clients — and many started as KIDS.',
        medium: 'The "build a thing, sell it to clients" idea powers freelancers, designers, and young coders everywhere.',
        hard: 'The reusable-skill-for-clients model is the foundation of the entire freelance + creator economy.',
      },
      examples: [
        {
          emoji: '👾',
          who: 'Kid Game Makers',
          story: {
            easy: "Kids use Scratch and Roblox to build little games. Some make games their friends LOVE to play — and a few even earn real money from them!",
            medium:
              "Kids build games in Scratch and Roblox. Some Roblox games made by teenagers have earned thousands of dollars — one skill, millions of plays.",
            hard:
              "Young creators build on Scratch + Roblox; top teen Roblox developers have earned six figures. Same reusable building skill, applied to a huge audience.",
          },
        },
        {
          emoji: '🎨',
          who: 'Canva Designers',
          story: {
            easy: "People use tools like Canva to make posters and slideshows for others — birthdays, school, shops. Make one, then make a hundred!",
            medium:
              "Tons of people freelance making posters, decks, and logos in tools like Canva. They learn the design skill once and sell it to client after client.",
            hard:
              "Freelance designers use tools like Canva to deliver posters, decks, and brand kits. One learned skill, repeated across many paying clients — pure reusable-skill economics.",
          },
        },
        {
          emoji: '💼',
          who: 'Freelance Builders',
          story: {
            easy: "Grown-ups build websites and apps for businesses, one job at a time. Each business is a client who pays for the build.",
            medium:
              "Freelancers build websites and apps for businesses, one gig at a time. They keep reusing the same coding skill for new clients — and grow a portfolio.",
            hard:
              "Freelance developers deliver sites + apps gig-by-gig on platforms like Upwork + Fiverr. Reusable skill + growing portfolio = rising rates over time.",
          },
        },
      ],
      kicker: {
        easy: 'Build one cool thing today, and you\'ve already started. ⭐',
        medium: 'Every freelancer started with ONE gig for ONE client. You can start this week.',
        hard: 'The biggest creator careers began with a single delivered gig. The model scales from your first ⭐ upward.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Coding Gig Check',
      questions: [
        {
          q: 'What is a "gig"?',
          options: [
            'A small job where you build something for a client',
            'A kind of computer',
            'A loan from a bank',
          ],
          correct: 0,
        },
        {
          q: 'Why is a reusable skill so valuable?',
          options: [
            'You learn it once, then use it again and again for many clients',
            'It only works one time',
            'It costs more each time you use it',
          ],
          correct: 0,
        },
        {
          q: 'If you make the SAME slideshow for 3 clients at 50⭐ each, how much do you earn?',
          options: ['150⭐', '50⭐', '3⭐'],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Creativity: 100 },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know the secret: learn a SKILL, build a thing for a CLIENT, and earn ⭐ — again and again! 💻",
        medium:
          "You learned how a skill becomes a tiny business: build once for a client, reuse the skill, and stack up your portfolio.",
        hard:
          "You've got the freelancer's core model: a reusable skill, delivered to clients gig-by-gig, backed by a growing portfolio. Time to build your first one.",
      },
      bonusTip: {
        easy: "Tip: keep EVERY cool thing you make in one folder — that's your portfolio! 📁",
        medium: "Pro tip: save every finished gig. A portfolio is the easiest way to win your next client.",
        hard: "Edge: a strong portfolio lowers a client's risk, which is exactly what lets you raise your price.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'coding-gig',
        emoji: '💻',
        title: {
          easy: 'Build one thing for a family "client" — and earn pretend ⭐!',
          medium: 'Complete one real gig: build a thing for a family client',
          hard: 'Execute one full gig cycle: client, build, deliver, get paid (pretend ⭐)',
        },
        pitch: {
          easy:
            "Pick ONE family member to be your CLIENT. Build them one small thing — a drawing, a poster, a slideshow, or a tiny Scratch game. Deliver it and earn pretend ⭐!",
          medium:
            "Choose a family client and a thing to build (poster, slideshow, drawing, or a Scratch/tiny game). Build it, deliver it, and collect your pretend ⭐ + feedback.",
          hard:
            "Run one complete gig: pick a client, agree on the deliverable, build it, deliver, and collect pretend ⭐ + a review for your portfolio.",
        },
        steps: [
          {
            emoji: '🧑',
            text: {
              easy: 'Pick your CLIENT — a family member who wants something made.',
              medium: 'Choose your client + ask what they\'d love you to make.',
              hard: 'Select a client; identify a real want you can fill.',
            },
          },
          {
            emoji: '🛠️',
            text: {
              easy: 'Pick what you\'ll BUILD — a drawing, a poster, a slideshow, or a tiny game.',
              medium: 'Agree on the deliverable: poster, slideshow, drawing, or a small Scratch game.',
              hard: 'Define the deliverable + a simple "done" (what it must include).',
            },
          },
          {
            emoji: '✏️',
            text: {
              easy: 'BUILD it! Take your time and make it cool.',
              medium: 'Build the thing. Make it something you\'re proud to deliver.',
              hard: 'Build the deliverable to meet the agreed "done."',
            },
          },
          {
            emoji: '🎁',
            text: {
              easy: 'DELIVER it to your client and ask: do you like it?',
              medium: 'Deliver to your client + ask for honest feedback.',
              hard: 'Deliver, collect feedback, and note one thing to improve next time.',
            },
          },
          {
            emoji: '⭐',
            text: {
              easy: 'Agree on pretend ⭐ for your work — and save your thing in your portfolio folder!',
              medium: 'Collect pretend ⭐ + add the finished gig to your portfolio.',
              hard: 'Record pretend ⭐ earned + file the deliverable in your portfolio.',
            },
          },
        ],
        reflection: [
          {
            key: 'built',
            prompt: {
              easy: 'What did you build, and who was your client?',
              medium: 'Deliverable + client',
              hard: 'Deliverable, client, and the "done" you agreed on',
            },
            type: 'text',
            placeholder: 'A birthday slideshow for Grandma',
          },
          {
            key: 'stars',
            prompt: {
              easy: 'How many pretend ⭐ did you earn?',
              medium: 'Pretend ⭐ earned for this gig',
              hard: 'Pretend ⭐ collected for the delivered gig',
            },
            type: 'number',
            suffix: '⭐',
            placeholder: '50',
          },
          {
            key: 'feedback',
            prompt: {
              easy: 'What did your client say?',
              medium: 'Your client\'s feedback',
              hard: 'Client feedback + the strongest reaction',
            },
            type: 'text',
          },
          {
            key: 'reuse',
            prompt: {
              easy: 'Could you make this SAME thing for someone else too? Who?',
              medium: 'Could this skill earn ⭐ again with a new client? Who, and how?',
              hard: 'How would you reuse this skill for the next client to stack revenue?',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "Be a real client! Give your kid one clear thing to make, then react honestly. The ⭐ are pretend — the point is the thrill of building something someone actually wanted.",
          medium:
            "Engage as a genuine client: name one concrete deliverable, then give honest, kind feedback. Stars are pretend — the goal is the build-deliver-feedback loop, not money.",
          hard:
            "Play a real client with a concrete brief, then give substantive feedback (what worked, one thing to improve). Pretend ⭐ only — the learning is the full gig cycle + reusing the skill.",
        },
        printables: {
          worksheets: [
            {
              title: 'My Gig Plan',
              blocks: [
                {
                  label: '🧑 My client',
                  hint: 'Who am I building for?',
                  lines: 1,
                },
                {
                  label: '🛠️ What I\'ll build',
                  hint: 'Drawing? Poster? Slideshow? Tiny game?',
                  lines: 1,
                },
                {
                  label: '✅ "Done" means it has…',
                  hint: 'What must it include to be finished?',
                  lines: 3,
                },
                {
                  label: '⭐ Pretend stars we agreed on',
                  equation: '_______ ⭐',
                },
                {
                  label: '🔁 Who else might want this same thing?',
                  hint: 'Reuse your skill for a new client!',
                  lines: 3,
                },
              ],
            },
          ],
          trackers: [
            {
              title: 'My Portfolio Log',
              note: 'One row per gig. Watch your skill earn ⭐ again and again.',
              columns: ['What I built', 'Client', 'Stars earned', 'Could reuse?'],
              rows: 5,
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
