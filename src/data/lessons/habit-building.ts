/**
 * Habit Building — "1% Better Every Day."
 *
 * The compounding lesson, but for SKILLS instead of money. Getting just
 * 1% better every single day makes you about 37× better in a year, because
 * tiny gains stack on top of each other. The big idea: small repeated
 * actions snowball. Start TINY (read 1 page, do 5 pushups) and stay
 * consistent — tiny + daily beats huge + once.
 *
 * Beat order:
 *   intro → think-deeper (why does daily beat once?) → concept-cards
 *   (what a habit is + start tiny) → calc-challenge (1% better daily →
 *   ~37×/yr) → connect (athletes, readers, learners) → outro →
 *   real-world-mission (pick one tiny habit, mark a streak).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'habit-building',
  themeKey: 'inventor',
  emoji: '🔄',
  title: 'Habit Building',
  subtitle: {
    easy: 'Get just a tiny bit better every day — and watch it add up to HUGE!',
    medium: 'Small actions done every day snowball into giant results. Start tiny, stay steady.',
    hard: 'Compounding for skills: why 1% daily gains beat occasional big efforts.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Want to know a SUPER secret? You don't have to get a LOT better all at once. If you get just a teeny tiny bit better every single day, it stacks up — and in one year you can be WAY better! 🔄",
        medium:
          "Here's a secret the best learners know: you don't need giant leaps. Getting just 1% better each day — a tiny amount — snowballs into something huge over a year. Let's see the magic.",
        hard:
          "You already met compounding with money. Today it's compounding for SKILLS: small, repeated daily gains stack on top of each other and grow exponentially. Tiny + consistent beats huge + once.",
      },
    },

    // ─── Think-deeper: why does daily beat once? ────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Tiny Every Day, or Huge Just Once?',
      intro: {
        easy: "Let's think about this together.",
        medium: "Let's reason through why steady beats sudden.",
        hard: 'First-principles look at why frequency beats intensity.',
      },
      layers: [
        {
          question: {
            easy: 'Who gets better at basketball: someone who practices once for 5 hours, or someone who practices 10 minutes EVERY day?',
            medium: 'Who improves more — a 5-hour practice once a month, or 10 minutes every single day?',
            hard: 'Which builds skill faster: one massive session, or small daily reps over the same total time?',
          },
          reveal: {
            easy:
              "The every-day kid! Doing a little bit OFTEN helps your brain remember and grow. A giant one-time effort gets forgotten fast.",
            medium:
              "The daily one, almost always. Your brain learns through repetition, and steady practice keeps the skill fresh. The big one-off fades before the next try.",
            hard:
              "Daily reps win. Frequent practice strengthens memory and turns effort into automatic habit; a single burst decays before reinforcement, wasting most of the gain.",
          },
        },
        {
          question: {
            easy: 'Why would 1% better — such a tiny bit — actually matter?',
            medium: 'How can a change as small as 1% a day add up to anything big?',
            hard: 'Why does a 1% daily improvement produce a large annual result?',
          },
          reveal: {
            easy:
              "Because tomorrow's tiny bit grows on TOP of today's! Each day you start a little higher. Little + little + little = a LOT. 🪄",
            medium:
              "Each day's gain stacks on the last one, so you keep starting from a higher spot. Like a snowball rolling downhill, it gets bigger faster and faster.",
            hard:
              "Because gains compound: each day multiplies the new, larger total. Repeated multiplication grows exponentially, so tiny steps accumulate into a dramatic difference.",
          },
        },
        {
          question: {
            easy: 'So what should you do if you want to get good at something?',
            medium: 'What is the smart way to start a new skill?',
            hard: 'What is the optimal way to begin building a skill?',
          },
          reveal: {
            easy:
              "Start TINY — like read 1 page or do 5 jumps — and do it EVERY day. Tiny is easy to keep doing, and keeping it going is the whole secret!",
            medium:
              "Start so small it feels easy (1 page, 5 pushups) and repeat it daily. The tiny size keeps you consistent — and consistency is what makes the snowball roll.",
            hard:
              "Pick a habit so small you can't fail, then repeat daily. Consistency, not intensity, drives compounding — protect the streak and let time multiply it.",
          },
        },
      ],
    },

    // ─── Concept cards: what a habit is + start tiny ────────────────────
    {
      kind: 'concept-cards',
      heading: 'How Habits Snowball',
      subheading: 'A habit is something you do over and over until it gets easy.',
      cards: [
        {
          emoji: '🔄',
          title: 'A Habit Is a Repeat',
          desc: {
            easy: 'A habit is something you do again and again — like brushing your teeth. After a while it feels automatic!',
            medium:
              'A habit is an action you repeat so often it becomes automatic. The more you do it, the less you have to think about it.',
            hard:
              'A habit is a behavior reinforced by repetition until it becomes near-automatic, freeing your willpower for new things.',
          },
          color: '#F0E8FD',
        },
        {
          emoji: '🐣',
          title: 'Start TINY',
          desc: {
            easy: 'Start with something so small it\'s easy — read 1 page, do 5 pushups. Tiny is easy to keep doing!',
            medium:
              'Begin with a habit so small you can\'t talk yourself out of it: one page, five pushups. Small habits actually stick.',
            hard:
              'Shrink the habit until it\'s nearly effortless. A trivially small starting point removes resistance and protects consistency.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '⛄',
          title: 'It Snowballs',
          desc: {
            easy: 'Each tiny bit stacks on the last one, like a snowball getting bigger as it rolls. Small adds up FAST.',
            medium:
              'Daily gains build on top of each other. Like a rolling snowball, your progress grows faster the longer you keep going.',
            hard:
              'Gains compound: each improvement multiplies a larger base, so progress accelerates the longer the streak runs.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🔥',
          title: 'Keep the Streak',
          desc: {
            easy: 'Doing it EVERY day matters more than doing a lot once. Don\'t break the chain — keep your streak going!',
            medium:
              'Consistency beats intensity. A small habit done daily wins over a giant effort done once. Guard your streak!',
            hard:
              'Frequency outperforms magnitude. Protecting an unbroken streak compounds skill far more than rare, heroic bursts.',
          },
          color: '#FCE8F3',
        },
      ],
    },

    // ─── Calc challenge: 1% better daily → ~37× in a year ───────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 How Big Does 1% Get?',
      setup: {
        easy: "Imagine you start at 1 and get 1% better EVERY day for a whole year (365 days). The snowball makes you about how many times better by the end?",
        medium:
          "You start at 1 and improve 1% every single day for 365 days. Each day grows on the bigger number. About how many times better are you after a full year?",
        hard:
          "Starting from 1, apply a 1% daily gain compounded over 365 days (1.01^365). Approximately what multiple do you reach?",
      },
      problem: {
        givens: [
          { label: 'Start at', value: 1 },
          { label: 'Better each day', value: 1, suffix: '%' },
          { label: 'Days in a year', value: 365 },
        ],
        answerLabel: 'Times better after a year',
        answer: 37,
        tolerance: 1,
        suffix: '×',
      },
      walkthrough: {
        easy: "Getting 1% better every day stacks up to about 37 TIMES better in a year! That's the snowball — tiny gains on tiny gains turn into something giant. ⛄",
        medium:
          "1% a day doesn't sound like much, but because each day grows on the bigger total, after 365 days you're roughly 37× better. Small + daily = huge over time.",
        hard:
          "1.01^365 ≈ 37.8. The exponent does the heavy lifting: a tiny daily multiplier, repeated, compounds into a ~37× result. Consistency, not size, drives the snowball.",
      },
    },

    // ─── Connect: where this shows up in the real world ─────────────────
    {
      kind: 'connect',
      heading: '🌍 Tiny Habits in Real Life',
      concept: {
        easy: 'Lots of amazing people got great by doing small things every day.',
        medium: 'The "tiny daily gain" idea is how athletes, readers, and learners get great.',
        hard: 'Marginal daily improvement underpins how top performers and teams build excellence.',
      },
      examples: [
        {
          emoji: '🚴',
          who: 'The Bike Team Trick',
          story: {
            easy: "A famous bike team got better by fixing tons of tiny things — even how they washed their hands! All the tiny wins added up to winning races.",
            medium:
              "A British cycling team tried to improve everything by just 1% — seats, sleep, handwashing. Those tiny gains stacked up and they started winning championships.",
            hard:
              "British Cycling's 'aggregation of marginal gains' improved dozens of tiny factors by ~1% each; compounded together they produced dominant results.",
          },
        },
        {
          emoji: '📚',
          who: 'One Page a Night',
          story: {
            easy: "Read just 1 page before bed every night and you'll finish many whole books in a year without it ever feeling hard!",
            medium:
              "Reading one page a night feels like nothing — but 365 pages a year is several books. Tiny and steady quietly beats 'read a lot someday.'",
            hard:
              "A single nightly page compounds to multiple books per year. The habit's smallness ensures consistency, and consistency produces the volume.",
          },
        },
        {
          emoji: '🏀',
          who: 'Practice, Not Magic',
          story: {
            easy: "The best players aren't born best — they practice a little EVERY day for years. The daily snowball made them stars.",
            medium:
              "Top athletes and musicians look like 'naturals,' but they got there with small daily practice over many years. Daily reps built the skill.",
            hard:
              "Elite performance is largely accumulated deliberate practice — small, consistent daily reps compounding over years, not innate magic.",
          },
        },
      ],
      kicker: {
        easy: 'You don\'t need to be amazing today — just a tiny bit better. 🔄',
        medium: 'You can\'t see the snowball grow day to day — but stay steady and one day it\'s huge.',
        hard: 'Marginal gains feel invisible daily yet are unstoppable over time. Bet on consistency.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Habit Check',
      questions: [
        {
          q: 'If you get just 1% better every day for a year, about how much better are you?',
          options: [
            'About 37 times better',
            'About 2 times better',
            'No better at all',
          ],
          correct: 0,
        },
        {
          q: 'What is the best way to start a new habit?',
          options: [
            'Start TINY and do it every day',
            'Do a giant effort once, then stop',
            'Wait until you feel like a pro',
          ],
          correct: 0,
        },
        {
          q: 'Why does a tiny daily habit beat a huge one-time effort?',
          options: [
            "Each day's gain stacks on the last and snowballs",
            'Because tiny things never count',
            'Because doing it once is enough forever',
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
        easy: "Now you know the snowball secret: get a teeny bit better every day, and it stacks into something HUGE! 🔄",
        medium:
          "You learned that tiny + daily beats huge + once. Small steps, repeated, snowball into giant results over time.",
        hard:
          "You've grasped compounding for skills: protect the streak, keep the habit tiny, and let repetition multiply your growth.",
      },
      bonusTip: {
        easy: "Tip: pick a habit so small you can't say no — then never break the chain. 🔗",
        medium: "Pro tip: shrink the habit until it's easy, then guard your streak. Consistency wins.",
        hard: "Edge: minimize friction, maximize frequency, never miss twice. Compounding rewards the steady.",
      },
    },

    // ─── Real-world mission: pick one tiny habit, mark a streak ─────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'habit-building',
        emoji: '🔄',
        title: {
          easy: 'Start Your Own Tiny Habit Streak',
          medium: 'Pick one tiny habit and keep a daily streak',
          hard: 'Build a tiny daily habit and track a multi-day streak',
        },
        pitch: {
          easy: "Pick ONE tiny habit (read 1 page, 5 pushups) and do it every day. Mark a check each day and watch your streak grow!",
          medium:
            "Choose one tiny habit, do it every day for several days, and mark a streak each time. See how easy 'tiny' makes it to keep going.",
          hard:
            "Define one trivially small daily habit, execute it for several consecutive days, and log an unbroken streak to feel compounding in action.",
        },
        steps: [
          {
            emoji: '🐣',
            text: {
              easy: 'Pick ONE tiny habit — read 1 page, do 5 pushups, or write 1 sentence.',
              medium: 'Choose one habit so small it feels easy (1 page, 5 pushups, 1 sentence).',
              hard: 'Select one near-effortless daily habit to minimize resistance.',
            },
          },
          {
            emoji: '🗓️',
            text: {
              easy: 'Do it at the same time each day — like right after breakfast.',
              medium: 'Anchor it to a time you already have (e.g. after breakfast) so you remember.',
              hard: 'Attach the habit to an existing daily cue to trigger it reliably.',
            },
          },
          {
            emoji: '✅',
            text: {
              easy: 'Each day you do it, mark a check or color a box on your streak.',
              medium: 'Mark a check on your tracker every day you complete the habit.',
              hard: 'Log a daily check to build a visible, unbroken streak.',
            },
          },
          {
            emoji: '🔥',
            text: {
              easy: 'Try not to break your chain! See how many days in a row you can go.',
              medium: 'Aim for several days in a row without breaking the streak.',
              hard: 'Protect the streak across multiple consecutive days; never miss twice.',
            },
          },
        ],
        reflection: [
          {
            key: 'habit-chosen',
            prompt: {
              easy: 'What tiny habit did you pick?',
              medium: 'Which tiny habit did you choose?',
              hard: 'What was your chosen daily habit?',
            },
            type: 'text',
          },
          {
            key: 'streak-days',
            prompt: {
              easy: 'How many days in a row did you do it?',
              medium: 'How many days in a row did you keep the streak?',
              hard: 'Length of your unbroken streak (days)?',
            },
            type: 'number',
            suffix: 'days',
          },
          {
            key: 'insight',
            prompt: {
              easy: 'Did starting TINY make it easier to keep going? How did it feel?',
              medium: 'Did keeping the habit small help you stay consistent? Explain.',
              hard: 'Reflect on how habit size affected your consistency and momentum.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "Help your child pick something tiny and cheer the streak, not perfection. Missing a day is fine — just start again the next day.",
          medium:
            "Keep the habit genuinely small and celebrate consistency over results. If a day is missed, restart without guilt — the streak is a motivator, not a test.",
          hard:
            "Emphasize consistency over intensity. A broken streak isn't failure; resuming quickly is the real skill. Keep the habit small enough to sustain.",
        },
        printables: {
          trackers: [
            {
              title: 'My Tiny Habit Streak',
              columns: ['Day', 'My tiny habit', 'Did it? ✅'],
              rows: 7,
              note: 'Color or check a box each day you do your tiny habit. Keep the chain going!',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
