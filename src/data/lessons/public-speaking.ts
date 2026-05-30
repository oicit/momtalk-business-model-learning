/**
 * Public Speaking — "Brave Voices Are Built, Not Born."
 *
 * The big idea: speaking in front of people is a SKILL you grow with reps,
 * not a magic talent some kids are born with. Even famous speakers were
 * once shaky and nervous. Kids learn a few tiny tricks — practice out loud,
 * take a slow breath, look up at faces, tell a little story, go slow — and
 * see that every brave talk makes the next one easier.
 *
 * Why it matters for business: pitching ideas, presenting, and selling all
 * ride on being able to share what you think out loud.
 *
 * Beat order:
 *   intro → think-deeper (is it talent or practice?) →
 *   concept-cards (5 tricks) → quiz → connect (where it shows up) →
 *   outro → real-world-mission (give a 30-second talk to family).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'public-speaking',
  themeKey: 'inventor',
  emoji: '🎤',
  title: 'Public Speaking',
  subtitle: {
    easy: "Talking in front of people gets easier every time you try!",
    medium:
      "Public speaking isn't a talent you're born with — it's a skill you build, one brave try at a time.",
    hard:
      "Why confident speaking is a trainable skill, the tricks that work, and why it powers pitching and selling — kid-sized.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Does your tummy do flips when you have to talk in front of people? GUESS WHAT — that happens to almost everyone, even famous speakers! And here's the secret: talking in front of people is a SKILL, like riding a bike. The more you do it, the easier it gets. 🎤",
        medium:
          "Standing up to talk in front of people makes lots of kids (and grown-ups!) nervous. But public speaking isn't a magic talent — it's a skill you build by practicing. Today you'll learn a few tiny tricks that make it way less scary.",
        hard:
          "Nervousness before speaking is normal — even great speakers feel it. The key idea: speaking well is a trainable skill, not an inborn gift. We'll cover simple, repeatable techniques and why they matter for sharing and selling your ideas.",
      },
    },

    // ─── Think-deeper: talent or practice? ──────────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Born Brave, or Built Brave?',
      intro: {
        easy: "Let's figure out where good speakers come from.",
        medium: "Let's reason through whether speaking is a gift or a skill.",
        hard: "First-principles look at how speaking confidence is actually built.",
      },
      layers: [
        {
          question: {
            easy: "Do you think great speakers were born being good at it?",
            medium: "Were famous speakers always confident on stage?",
            hard: "Is speaking ability innate, or developed over time?",
          },
          reveal: {
            easy:
              "Nope! Almost every great speaker was shaky and nervous at first. They got good by doing it over and over.",
            medium:
              "Most weren't. Many famous speakers shook the first dozen times. They built confidence the same way you'd build any skill — with reps.",
            hard:
              "Overwhelmingly developed. Confidence comes from repeated exposure and feedback; the brain calms down once a task stops feeling unfamiliar.",
          },
        },
        {
          question: {
            easy: "Why does your tummy feel funny before you talk?",
            medium: "Why do we feel nervous right before speaking?",
            hard: "What's actually happening when we feel stage fright?",
          },
          reveal: {
            easy:
              "Your body is just excited and wants to do well! That funny feeling means you CARE. A slow breath helps calm it down. 😮‍💨",
            medium:
              "Your body pumps extra energy because it cares about doing well. That's normal! A slow breath tells your body, 'we're okay,' and the jitters shrink.",
            hard:
              "It's your body's energy response — adrenaline for an important moment. Slow breathing signals safety and dials the jitters back down so you can think clearly.",
          },
        },
        {
          question: {
            easy: "So how do you get better and braver at talking?",
            medium: "What actually makes someone a stronger speaker?",
            hard: "What's the mechanism that turns a nervous speaker into a calm one?",
          },
          reveal: {
            easy:
              "You PRACTICE! Every little talk makes the next one easier. Brave isn't something you have — it's something you build. 💪",
            medium:
              "Reps. Each small talk you give wires your brain to feel calmer next time. You don't wait to feel brave — speaking is what makes you brave.",
            hard:
              "Repetition plus small, safe wins. Each successful rep lowers the fear response, so practice literally rebuilds your comfort. Action creates the confidence, not the other way around.",
          },
        },
      ],
    },

    // ─── Concept cards: the 5 tricks ────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: '🎤 5 Tricks Brave Speakers Use',
      subheading: "Tiny things anyone can do — no magic talent needed.",
      cards: [
        {
          emoji: '🔁',
          title: 'Practice Out Loud',
          desc: {
            easy: 'Say your words OUT LOUD before, not just in your head. Your mouth needs reps too!',
            medium:
              'Rehearse out loud a few times before the real thing. Hearing yourself makes the words feel familiar and calm.',
            hard:
              'Practicing aloud, not silently, trains the actual motor and timing skills you use when speaking — silent run-throughs skip that.',
          },
          color: '#F0E8FD',
        },
        {
          emoji: '😮‍💨',
          title: 'Take a Slow Breath',
          desc: {
            easy: 'Before you start, breathe in slow… and out slow. It calms the tummy flips.',
            medium:
              'One slow breath before you begin settles the jitters and gives your brain a second to start strong.',
            hard:
              'A deliberate slow exhale activates the calming side of your nervous system, lowering the adrenaline spike before you speak.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '👀',
          title: 'Look Up at Faces',
          desc: {
            easy: 'Look up at friendly faces, not at your feet. People like it when you look at them!',
            medium:
              'Lift your eyes to the friendly faces in the room. Eye contact makes your talk feel like a real conversation.',
            hard:
              'Looking at receptive faces builds connection and gives you reassuring feedback, which steadies your nerves mid-talk.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '📖',
          title: 'Tell a Little Story',
          desc: {
            easy: 'People LOVE stories! "One time I…" grabs everyone\'s ears.',
            medium:
              'Start with a tiny story — "One time I…" — and people instantly tune in. Stories stick way better than plain facts.',
            hard:
              'A short narrative hooks attention and makes your point memorable; audiences remember stories far longer than lists of facts.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '🐢',
          title: 'Go Slow',
          desc: {
            easy: 'When nervous we zoom fast! Slow down so people can hear every word.',
            medium:
              'Nerves speed us up, so slow down on purpose. Pauses are okay — they make you sound sure of yourself.',
            hard:
              'A measured pace plus deliberate pauses improves clarity and projects confidence; rushing signals nervousness and loses listeners.',
          },
          color: '#FDE8F4',
        },
      ],
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Brave Voice Check',
      questions: [
        {
          q: 'Is being good at public speaking something you are born with?',
          options: [
            'No — it is a skill you build by practicing',
            'Yes — only some people can ever do it',
            'Yes — you either have it or you do not',
          ],
          correct: 0,
        },
        {
          q: 'What can you do right before you start to calm the jitters?',
          options: [
            'Take one slow breath',
            'Talk as fast as you can',
            'Stare at the floor the whole time',
          ],
          correct: 0,
        },
        {
          q: 'Why is telling a little story a great trick?',
          options: [
            'People love stories and remember them better',
            'It makes the talk last way longer',
            'It lets you skip looking at anyone',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Negotiation: 100 },
    },

    // ─── Connect: where this shows up in the real world ─────────────────
    {
      kind: 'connect',
      heading: '🌍 Speaking Up in Real Life',
      concept: {
        easy: 'Sharing your ideas out loud helps you in school AND in business.',
        medium: 'The same brave-voice skill powers pitching, presenting, and selling.',
        hard: 'Clear, confident speaking is core to pitching ideas, presenting, and selling — the engine of most businesses.',
      },
      examples: [
        {
          emoji: '💡',
          who: 'Pitching an Idea',
          story: {
            easy: "When someone has a cool idea for a new toy or app, they have to TALK about it so people get excited!",
            medium:
              "Founders 'pitch' — they stand up and explain their idea so people will buy it or help build it. A clear, brave voice makes ideas spread.",
            hard:
              "Entrepreneurs pitch to customers and investors; the same speaking skills decide whether a great idea gets funded or ignored.",
          },
        },
        {
          emoji: '🛍️',
          who: 'Selling at a Stand',
          story: {
            easy: "At a lemonade stand, the kid who happily says 'Try my lemonade!' sells way more than the shy one.",
            medium:
              "Selling is just speaking with a friendly voice. 'Want to try the best lemonade on the block?' sells more than a quiet mumble.",
            hard:
              "Sales is speaking applied: confident framing and a clear ask measurably raise how much people buy.",
          },
        },
        {
          emoji: '🏫',
          who: 'You at School',
          story: {
            easy: "Reading aloud or sharing in class is practice! Every time counts as a rep. 🎤",
            medium:
              "Every class presentation and read-aloud is free speaking practice. The kids who volunteer get the most reps — and the most confident.",
            hard:
              "Classroom presentations are low-stakes reps that compound; the students who speak up most build the deepest comfort over time.",
          },
        },
      ],
      kicker: {
        easy: "Every brave try makes the next one easier. 💪",
        medium: "Each small talk is a rep — and reps build the brave voice.",
        hard: "Confidence is the by-product of reps, not the price of admission.",
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know the secret: brave speakers are BUILT, not born — and you have 5 tricks to start! 🎤",
        medium:
          "You learned that speaking is a skill you grow with practice, plus 5 tricks to make every talk easier and braver.",
        hard:
          "You've got the core idea — speaking is trainable — and a toolkit of techniques you can apply every time you present.",
      },
      bonusTip: {
        easy: "Tip: do ONE tiny talk this week. The first rep is the hardest! ⛰️",
        medium: "Pro tip: don't wait to feel ready — give a small talk now. Action builds the bravery.",
        hard: "Edge: seek small, frequent speaking reps. Frequency beats intensity for building lasting confidence.",
      },
    },

    // ─── Real-world mission: give a 30-second talk ──────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'public-speaking',
        emoji: '🎤',
        title: {
          easy: 'Give a 30-Second Talk to Your Family',
          medium: 'Give a 30-second talk about something you love',
          hard: 'Deliver a 30-second talk and use one speaking trick on purpose',
        },
        pitch: {
          easy: "Pick something you LOVE and tell your family about it for 30 seconds. Try ONE trick: breathe, look up, or tell a story!",
          medium:
            "Choose a topic you love, give a 30-second talk to your family, and use one trick on purpose — a slow breath, looking up, or a little story.",
          hard:
            "Prepare a 30-second talk on a topic you love, deliver it to family, and deliberately apply one technique (breath, eye contact, or a story hook).",
        },
        steps: [
          {
            emoji: '❤️',
            text: {
              easy: 'Pick something you LOVE to talk about (a pet, a game, a hobby).',
              medium: 'Choose one topic you genuinely love — a pet, a game, a place.',
              hard: 'Select a topic you care about so your energy comes through naturally.',
            },
          },
          {
            emoji: '🔁',
            text: {
              easy: 'Practice it OUT LOUD two times by yourself first.',
              medium: 'Rehearse out loud two or three times before showtime.',
              hard: 'Do a few aloud run-throughs to make the words feel familiar.',
            },
          },
          {
            emoji: '🎯',
            text: {
              easy: 'Pick ONE trick to use: a slow breath, looking up, OR a little story.',
              medium: 'Choose one trick to focus on: slow breath, eye contact, or a story start.',
              hard: 'Commit to one technique to apply deliberately during the talk.',
            },
          },
          {
            emoji: '🎤',
            text: {
              easy: 'Stand up and give your 30-second talk to your family!',
              medium: 'Give your 30-second talk to your family, using your chosen trick.',
              hard: 'Deliver the talk to a small family audience, applying your technique.',
            },
          },
        ],
        reflection: [
          {
            key: 'topic',
            prompt: {
              easy: 'What did you talk about?',
              medium: 'What topic did you choose for your talk?',
              hard: 'What was the subject of your talk?',
            },
            type: 'text',
          },
          {
            key: 'trick-used',
            prompt: {
              easy: 'Which trick did you try — breathe, look up, or tell a story?',
              medium: 'Which trick did you use on purpose, and how did it go?',
              hard: 'Which technique did you apply, and what effect did you notice?',
            },
            type: 'text',
          },
          {
            key: 'feeling',
            prompt: {
              easy: 'Was it easier than you thought? How did you feel after?',
              medium: 'How did you feel before vs. after the talk?',
              hard: 'Reflect on how your nerves changed from before to after speaking.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "Be a warm, cheering audience! Clap and say one thing you liked. The goal is a brave try, not a perfect talk.",
          medium:
            "Please be a supportive audience — applaud and point out one specific thing they did well. Praise the effort and bravery, not perfection.",
          hard:
            "Create a safe, encouraging setting. Offer one concrete piece of positive feedback. The objective is a low-stakes rep that builds confidence, so reward the attempt over polish.",
        },
        printables: {
          worksheets: [
            {
              title: 'My 30-Second Talk Plan',
              blocks: [
                { label: 'My topic (something I love)', lines: 1 },
                { label: 'My first line / story start ("One time I…")', lines: 2 },
                { label: 'The ONE trick I will use', hint: 'breathe · look up · tell a story · go slow', lines: 1 },
              ],
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
