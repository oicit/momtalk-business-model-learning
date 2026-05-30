/**
 * Wisdom Academy — "The Business of Learning."
 *
 * An overview of the EDUCATION industry: schools, tutoring, universities,
 * and learning apps (like THIS one!). People and companies pay for
 * knowledge and skills because learning helps you earn and grow.
 *
 * Tie-in: the very app the kid is using right now is an education business.
 *
 * Beat order:
 *   intro → think-deeper (why do people pay to learn?) →
 *   concept-cards (Schools, Tutoring, Universities, Learning Apps) →
 *   quiz → connect (education in the real world) → outro →
 *   real-world-mission (list 3 ways you learn + your favorite).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'wisdom-academy',
  themeKey: 'industries',
  emoji: '📚',
  title: 'Wisdom Academy',
  subtitle: {
    easy: 'Learning is a HUGE business — schools, apps, and teachers all help you grow!',
    medium:
      'Meet the education industry: schools, tutors, universities, and apps that people pay to learn from.',
    hard:
      'How the education industry turns knowledge and skills into a business — and why learning pays off for life.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Did you know LEARNING is a big business? Schools, tutors, and even fun apps all help people learn new things — and people happily pay for it! Guess what? This app is one too. Welcome to Wisdom Academy! 📚",
        medium:
          "Today's industry is EDUCATION. It's everything that helps people learn: schools, tutors, universities, and learning apps. People and companies pay for it because learning makes life better. (Yep — this app is part of it!)",
        hard:
          "The education industry sells one special thing: knowledge and skills. Schools, tutors, universities, and apps all earn money by helping people learn — because what you know helps you earn and grow. This very app is an education business!",
      },
    },

    // ─── Think-deeper: why do people pay to learn? ──────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Pay to Learn?',
      intro: {
        easy: "Let's figure out why learning is worth money.",
        medium: "Let's reason through why education is such a big business.",
        hard: "First-principles look at why knowledge has real value.",
      },
      layers: [
        {
          question: {
            easy: "If you knew how to fix bikes, could you earn money?",
            medium: "How does knowing a skill help you earn money?",
            hard: "Why does having a skill let someone earn more?",
          },
          reveal: {
            easy:
              "Yes! People would pay YOU to fix their bikes. The more useful things you know, the more ways you can help — and earn. 🚲",
            medium:
              "When you know how to DO something useful, people pay you to do it. A skill is like a tool you carry in your head forever.",
            hard:
              "Skills create value others will pay for. Knowledge is a tool you own for life — and unlike a toy, it never wears out.",
          },
        },
        {
          question: {
            easy: "Where do you LEARN all these useful things?",
            medium: "Who helps people learn new skills?",
            hard: "Who provides the learning, and why does it cost money?",
          },
          reveal: {
            easy:
              "From teachers, books, classes, and apps! Those people and tools take work to make — so learning is something you can buy.",
            medium:
              "Teachers, schools, and app-makers spend lots of time creating lessons. That work is worth paying for — so education becomes a business.",
            hard:
              "Building good lessons takes experts, time, and money. Because that work is valuable, people pay for it — turning learning into a whole industry.",
          },
        },
        {
          question: {
            easy: "So is teaching a real job?",
            medium: "Can helping people learn be a whole business?",
            hard: "How big can the education industry really be?",
          },
          reveal: {
            easy:
              "It sure is! Teachers, tutors, and app-makers ALL get paid to help others learn. Helping people grow is a real, important job. 🌱",
            medium:
              "Absolutely. Millions of people earn a living by teaching. Schools, app companies, and book makers all run on the business of learning.",
            hard:
              "Yes — education is one of the biggest industries on Earth. From a single tutor to giant universities, the whole field exists to turn learning into value.",
          },
        },
      ],
    },

    // ─── Concept cards: the four parts of the education industry ────────
    {
      kind: 'concept-cards',
      heading: 'The Business of Learning',
      subheading: 'Four big ways people pay to learn new things.',
      cards: [
        {
          emoji: '🏫',
          title: 'Schools',
          desc: {
            easy: 'Where you go to learn reading, math, and more — with teachers helping you every day!',
            medium:
              'Schools bring teachers, classmates, and lessons together. They run on money to pay teachers and keep the lights on.',
            hard:
              'Schools are the biggest part of education — places that organize teachers, lessons, and students to learn together.',
          },
          color: '#FFE5F0',
        },
        {
          emoji: '🧑‍🏫',
          title: 'Tutoring',
          desc: {
            easy: 'A tutor is a helper who teaches just YOU, so you can get really good at a tricky subject.',
            medium:
              'Tutors give one-on-one help. Families pay tutors to explain things slowly and just for them.',
            hard:
              'Tutoring is personalized teaching. People pay extra for one-on-one help to master a tough subject faster.',
          },
          color: '#FFF0E8',
        },
        {
          emoji: '🎓',
          title: 'Universities',
          desc: {
            easy: 'A BIG school for grown-ups, where they learn to become doctors, engineers, and more!',
            medium:
              'Universities teach grown-ups deep skills for big jobs. Students pay to learn things that take years.',
            hard:
              'Universities offer advanced learning for careers like medicine or engineering — long programs people invest in for their future.',
          },
          color: '#E8F0FF',
        },
        {
          emoji: '📱',
          title: 'Learning Apps',
          desc: {
            easy: 'Apps that teach you fun stuff on a phone or tablet — just like the one you\'re using RIGHT NOW! 📚',
            medium:
              'Learning apps teach skills anywhere, anytime. This very app is one — it teaches you about business!',
            hard:
              'Learning apps deliver lessons through screens, reaching millions. The app you\'re using is itself an education business.',
          },
          color: '#F0E8FF',
        },
      ],
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Wisdom Academy Check',
      questions: [
        {
          q: 'What does the education industry sell?',
          options: [
            'Knowledge and skills that help people grow',
            'Only toys and games',
            'Nothing — learning is never a business',
          ],
          correct: 0,
        },
        {
          q: 'Which of these is part of the education industry?',
          options: [
            'Schools, tutors, universities, and learning apps',
            'Only grocery stores',
            'Only car factories',
          ],
          correct: 0,
        },
        {
          q: 'Why do people pay to learn?',
          options: [
            'Because learning helps you earn and grow',
            'Because learning is always free',
            'Because knowledge wears out fast',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Foundations: 100 },
    },

    // ─── Connect: education in the real world ───────────────────────────
    {
      kind: 'connect',
      heading: '🌍 Learning Is Everywhere',
      concept: {
        easy: 'The business of learning shows up in tons of places around you.',
        medium: 'The education industry powers schools, apps, and even the people who teach YOU.',
        hard: 'Education is a massive industry touching almost everyone, every day.',
      },
      examples: [
        {
          emoji: '📱',
          who: 'This Very App',
          story: {
            easy: "The app you're holding RIGHT NOW teaches you about business — that makes it an education business too!",
            medium:
              "This app is part of the industry you're learning about! It teaches business skills to kids — that's the business of learning in action.",
            hard:
              "You're inside the industry right now. A learning app earns its place by teaching real skills — the same business model as a school.",
          },
        },
        {
          emoji: '🦉',
          who: 'Language Apps',
          story: {
            easy: "Apps like Duolingo teach millions of people new languages on their phones — with a friendly owl!",
            medium:
              "Duolingo teaches languages to millions through a fun app. It's one of the biggest learning-app businesses in the world.",
            hard:
              "Apps like Duolingo built huge businesses by making learning a language feel like a game — reaching tens of millions of learners.",
          },
        },
        {
          emoji: '🎓',
          who: 'Famous Universities',
          story: {
            easy: "Big schools like Harvard have taught grown-ups for hundreds of years to become doctors and leaders.",
            medium:
              "Universities like Harvard and MIT have taught students for centuries — and people travel the world to learn there.",
            hard:
              "Top universities are centuries-old education institutions where people invest years to gain advanced, career-shaping skills.",
          },
        },
      ],
      kicker: {
        easy: 'Every time you learn something new, the business of learning is at work! 🌱',
        medium: "Learning never stops — and neither does the industry that helps you do it.",
        hard: 'Education is the one industry whose whole job is making everyone else better at theirs.',
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know learning is a BIG business — schools, tutors, universities, and apps all help people grow! 📚",
        medium:
          "You've explored the education industry: the business of turning knowledge and skills into something worth paying for.",
        hard:
          "You now understand education as an industry — and that learning, the thing you do every day, is one of the most valuable businesses there is.",
      },
      bonusTip: {
        easy: "Tip: every new thing you learn is like a tool you keep forever. 🛠️",
        medium: "Pro tip: skills are tools that never wear out — keep collecting them!",
        hard: "Edge: the more you learn, the more ways you have to create value. Knowledge compounds, just like money.",
      },
    },

    // ─── Real-world mission: list 3 ways you learn ──────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'wisdom-academy',
        emoji: '📚',
        title: {
          easy: 'Find Your 3 Ways of Learning',
          medium: 'Spot 3 ways YOU learn — and pick your favorite',
          hard: 'Map your personal learning sources and rank them',
        },
        pitch: {
          easy: "Notice 3 ways you learn things: at school, from an app, and from a real person. Which do you like best?",
          medium:
            "Look at how YOU learn. Name 3 different ways — a school, an app, and a person — then decide your favorite and why.",
          hard:
            "Observe your own learning. Identify three distinct sources (a school, an app, a person), then evaluate which works best for you.",
        },
        steps: [
          {
            emoji: '🏫',
            text: {
              easy: 'Think of something you learned at SCHOOL this week.',
              medium: 'Name one thing you learned at school recently.',
              hard: 'Identify a specific skill or fact you gained at school.',
            },
          },
          {
            emoji: '📱',
            text: {
              easy: 'Think of something you learned from an APP (maybe this one!).',
              medium: 'Name something you learned from a learning app — this one counts!',
              hard: 'Identify something you learned from an app or screen.',
            },
          },
          {
            emoji: '🧑‍🏫',
            text: {
              easy: 'Think of something a PERSON taught you — like a parent or coach.',
              medium: 'Name something a person (a parent, coach, or friend) taught you.',
              hard: 'Identify something a real person taught you directly.',
            },
          },
          {
            emoji: '⭐',
            text: {
              easy: 'Pick your FAVORITE way to learn and tell why!',
              medium: 'Choose your favorite of the three and explain why it works for you.',
              hard: 'Rank your favorite source and justify your choice.',
            },
          },
        ],
        reflection: [
          {
            key: 'school-learning',
            prompt: {
              easy: 'What did you learn at school?',
              medium: 'What was one thing you learned at school?',
              hard: 'School-sourced learning:',
            },
            type: 'text',
          },
          {
            key: 'app-learning',
            prompt: {
              easy: 'What did you learn from an app?',
              medium: 'What was one thing you learned from an app?',
              hard: 'App-sourced learning:',
            },
            type: 'text',
          },
          {
            key: 'person-learning',
            prompt: {
              easy: 'What did a person teach you?',
              medium: 'What was one thing a person taught you?',
              hard: 'Person-sourced learning:',
            },
            type: 'text',
          },
          {
            key: 'favorite',
            prompt: {
              easy: 'Which way do you like BEST, and why?',
              medium: 'Which of the three is your favorite way to learn, and why?',
              hard: 'Which source works best for you, and what makes it effective?',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "Chat with your child about how they learn best. There's no wrong answer — the goal is noticing that learning comes from many places, all part of one big industry.",
          medium:
            "Use this as a conversation starter about learning styles. The aim is for your child to see that education takes many forms — school, apps, and people — and that all of them are part of a real industry.",
          hard:
            "A reflection exercise, not a test. Help your child articulate WHY a learning source works for them — self-awareness about how they learn is the real takeaway.",
        },
        printables: {
          worksheets: [
            {
              title: 'My 3 Ways of Learning',
              blocks: [
                { label: '🏫 At school I learned…', lines: 2 },
                { label: '📱 From an app I learned…', lines: 2 },
                { label: '🧑‍🏫 A person taught me…', lines: 2 },
                { label: '⭐ My favorite way to learn is… because…', lines: 3 },
              ],
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
