/**
 * Time Management — "Everyone Gets the Same 24 Hours."
 *
 * The most leveled playing field in the world: a billionaire and a kid both
 * get exactly 24 hours a day. What's different is how you SPEND them. Do the
 * important thing FIRST (big rocks before pebbles), plan a little instead of
 * rushing, and remember every hour spent on one thing is an hour NOT spent on
 * another — that's a tradeoff.
 *
 * Inventor theme — building good habits is its own kind of invention.
 *
 * Beat order:
 *   intro → think-deeper (where does time go?) → concept-cards (big rocks,
 *   plan-first, tradeoffs) → calc-challenge (split 2 free hours toward a goal)
 *   → quiz → connect → outro → real-world-mission (plan tomorrow on paper,
 *   most important thing first).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'time-management',
  themeKey: 'inventor',
  emoji: '⏱️',
  title: 'Time Management',
  subtitle: {
    easy: "Everyone gets 24 hours. What matters is how you use them!",
    medium: "Same 24 hours for everyone — the secret is doing the important thing first.",
    hard: "Time is the one resource you can't make more of. Learn to prioritize, plan, and weigh tradeoffs.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Here's a cool secret: YOU get 24 hours every day. So does a famous athlete. So does the richest person alive. The SAME 24! ⏱️ The difference is how we use them. Let's learn the magic of time!",
        medium:
          "Nobody gets more than 24 hours a day — not a star, not a billionaire, not anyone. So why do some people get SO much done? It's not more time. It's how they spend the time they have. Let's crack the code.",
        hard:
          "Time is the only resource that's perfectly equal: everyone gets exactly 24 hours. You can't save it, buy more, or pause it. The whole game is HOW you allocate it. Master that, and you can do almost anything.",
      },
    },

    // ─── Think-deeper: where does our time actually go? ─────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Where Does Time Go?',
      intro: {
        easy: "Let's think about your day together.",
        medium: "Let's trace where the hours actually disappear to.",
        hard: "Let's reason about how time gets allocated by default.",
      },
      layers: [
        {
          question: {
            easy: "If you had one free hour, what would you do first?",
            medium: "When you finally get free time, what usually grabs it first?",
            hard: "What tends to capture your free time before you even decide?",
          },
          reveal: {
            easy:
              "A lot of us grab the FUN stuff first — a game, a show, a snack. Fun is great! But sometimes the important thing never gets done.",
            medium:
              "Most people drift to whatever's easiest or most fun first. That's normal! The trouble is the important thing keeps getting pushed to 'later'… and later runs out.",
            hard:
              "Without a plan, time flows to the easiest, most tempting option. The important-but-not-urgent things quietly get crowded out — that's why intention beats drifting.",
          },
        },
        {
          question: {
            easy: "What happens if you save the important thing for last?",
            medium: "Why is doing the big thing LAST so risky?",
            hard: "What's the danger of leaving high-priority work until the end?",
          },
          reveal: {
            easy:
              "Often you run out of time or get too tired! Then the important thing gets rushed — or skipped. Oops.",
            medium:
              "You usually run out of energy or time. The important task ends up rushed, messy, or undone — exactly the thing you most wanted to do well.",
            hard:
              "Energy and time both deplete through the day. Deferring priorities means handling them at your worst — tired, hurried, and out of buffer.",
          },
        },
        {
          question: {
            easy: "So what if you did the IMPORTANT thing first?",
            medium: "What changes if the big thing goes first?",
            hard: "What's the effect of front-loading your top priority?",
          },
          reveal: {
            easy:
              "Then it's DONE — and you can enjoy the fun stuff with no worries! Big thing first, fun second. That's the trick. 🪄",
            medium:
              "It gets your best energy AND it's finished early — so the rest of your day is free and guilt-free. Do the big rock first, then the fun.",
            hard:
              "Your priority gets your peak focus, and everything after is bonus. This is the 'big rocks first' principle — fit the large things in, then let small things fill the gaps.",
          },
        },
      ],
    },

    // ─── Concept cards: the three big ideas ─────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'Three Time Tricks',
      subheading: 'Simple ideas that help you get more out of the same 24 hours.',
      cards: [
        {
          emoji: '🪨',
          title: 'Big Rocks First',
          desc: {
            easy: 'Got a jar, big rocks, and little pebbles? Put the BIG rocks in first — then pebbles fit around them. Do your most important thing first!',
            medium:
              'Imagine filling a jar: if you pour pebbles in first, the big rocks won\'t fit. Put big rocks (important things) in FIRST, and small stuff fills the gaps.',
            hard:
              'The "big rocks" rule: schedule your most important task first. Fill small, low-value tasks into the leftover space — never the other way around.',
          },
          color: '#F0E8FD',
        },
        {
          emoji: '🗺️',
          title: 'Plan Beats Rush',
          desc: {
            easy: 'Taking one minute to plan saves you LOTS of rushing later. A tiny map keeps you from getting lost.',
            medium:
              'A minute of planning beats ten minutes of rushing. Decide what matters before you start, and you waste way less time being confused.',
            hard:
              'A short upfront plan cuts wasted effort dramatically. Deciding the order before acting prevents backtracking, panic, and forgotten tasks.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '⚖️',
          title: 'Every Hour Is a Tradeoff',
          desc: {
            easy: 'An hour on one thing is an hour NOT on another. Pick on purpose — time spent is time gone!',
            medium:
              'Time is a tradeoff: an hour playing is an hour not practicing. Neither is wrong — but you\'re always choosing. Choose on purpose.',
            hard:
              'Every hour has an opportunity cost: spending it on X means not spending it on Y. Smart time management is choosing tradeoffs deliberately, not by accident.',
          },
          color: '#FFFDE8',
        },
      ],
    },

    // ─── Calc challenge: split 2 free hours toward a goal ───────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 Split Your Free Time',
      setup: {
        easy: "You have 2 free hours after dinner. That's 120 minutes! You spend 45 minutes on homework and 30 minutes practicing piano. How many minutes are left to PLAY?",
        medium:
          "You've got 2 free hours (120 minutes) tonight. Homework takes 45 minutes and piano practice takes 30 minutes. How many minutes are left for play?",
        hard:
          "Given 120 minutes of free time, with 45 minutes allocated to homework and 30 to piano practice, compute the remaining minutes available for play.",
      },
      problem: {
        givens: [
          { label: 'Free time', value: 120, suffix: 'min' },
          { label: 'Homework', value: 45, suffix: 'min' },
          { label: 'Piano practice', value: 30, suffix: 'min' },
        ],
        answerLabel: 'Minutes left to play',
        answer: 45,
        suffix: 'min',
      },
      walkthrough: {
        easy: "Start with 120. Take away 45 for homework → 75 left. Take away 30 for piano → 45 left to play! See? When you do the important things first, you STILL get play time. 🎉",
        medium:
          "120 − 45 (homework) = 75, then 75 − 30 (piano) = 45 minutes to play. Big rocks first, and there's still plenty of fun left over.",
        hard:
          "120 − 45 − 30 = 45 minutes. Notice the tradeoff: every minute you'd add to homework or piano is a minute subtracted from play. Allocating on purpose keeps all three in balance.",
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Time Check',
      questions: [
        {
          q: 'How much time does each person get every day?',
          options: [
            'The same 24 hours for everyone',
            'More for grown-ups, less for kids',
            'It depends how rich you are',
          ],
          correct: 0,
        },
        {
          q: 'What does "big rocks first" mean?',
          options: [
            'Do your most important thing first, then the small stuff',
            'Carry heavy rocks before light ones',
            'Always play before homework',
          ],
          correct: 0,
        },
        {
          q: 'Why is every hour a tradeoff?',
          options: [
            'An hour spent on one thing is an hour not spent on another',
            'Because hours cost money',
            'Because clocks can run backward',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Operations: 100 },
    },

    // ─── Connect: where this shows up in the real world ─────────────────
    {
      kind: 'connect',
      heading: '🌍 Time Management in Real Life',
      concept: {
        easy: 'Doing the important thing first helps EVERYONE — kids, athletes, and big businesses.',
        medium: 'The "same 24 hours, spend them wisely" idea powers schools, sports, and whole companies.',
        hard: 'Prioritization and deliberate time allocation underpin how high performers and organizations operate.',
      },
      examples: [
        {
          emoji: '🚀',
          who: 'A Rocket Team',
          story: {
            easy: "People who build rockets plan every minute super carefully. One forgotten step could mean trouble — so they do the most important checks FIRST.",
            medium:
              "Rocket teams run on tight schedules with the most critical checks first. They plan the order on purpose, because rushing the big stuff is dangerous.",
            hard:
              "Launch teams sequence tasks by criticality — high-stakes verifications go first, low-risk items fill the gaps. Deliberate ordering, not luck.",
          },
        },
        {
          emoji: '🏀',
          who: 'A Star Athlete',
          story: {
            easy: "Top athletes don't have MORE hours than you — they just practice the important skills first, every single day.",
            medium:
              "Great athletes have the same 24 hours as everyone. Their edge is doing the key practice first and protecting that time from distractions.",
            hard:
              "Elite performers win on allocation, not extra time — they front-load high-leverage training and ruthlessly protect it from low-value distractions.",
          },
        },
        {
          emoji: '🏪',
          who: 'A Busy Store',
          story: {
            easy: "A shop does its biggest job — getting ready for customers — FIRST. Sweeping and tidying come after the doors open.",
            medium:
              "Stores tackle the must-do tasks (stocking, opening) before the nice-to-do ones. Big rocks first keeps the whole day running smoothly.",
            hard:
              "Operations teams triage tasks by impact: revenue-critical work first, housekeeping later. Same principle as your homework-before-play jar.",
          },
        },
      ],
      kicker: {
        easy: 'You have the same 24 hours as anyone. Use them on purpose! ⏱️',
        medium: "Time can't be saved up — but it can be spent wisely. That's the whole secret.",
        hard: 'You can\'t manufacture time; you can only allocate it well. That alone is a superpower.',
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know the secret: everyone gets 24 hours, and YOU choose how to spend yours! Big rocks first. 🪨",
        medium:
          "You've got the same 24 hours as anyone on Earth. Do the important thing first, plan a little, and choose your tradeoffs on purpose.",
        hard:
          "You've learned that time is fixed and equal — your edge is allocation: prioritize, plan briefly, and weigh tradeoffs deliberately.",
      },
      bonusTip: {
        easy: "Tip: each morning, pick ONE big rock to do first. Just one! ⛅",
        medium: "Pro tip: name your single most important task the night before — then do it first.",
        hard: "Edge: pre-commit your top priority in advance so you don't 'decide' under pressure each day.",
      },
    },

    // ─── Real-world mission: plan tomorrow on paper ─────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'time-management',
        emoji: '🗓️',
        title: {
          easy: 'Plan Tomorrow on Paper',
          medium: "Plan tomorrow's free time — big rock first",
          hard: 'Build a written priority plan for tomorrow',
        },
        pitch: {
          easy: "Tonight, write a tiny plan for tomorrow's free time. Put the MOST important thing at the top!",
          medium:
            "Make a simple paper plan for tomorrow's free time, with your single most important thing listed first.",
          hard:
            "Draft a written time plan for tomorrow's discretionary hours, sequenced by priority with the top item first.",
        },
        steps: [
          {
            emoji: '✍️',
            text: {
              easy: 'Get paper and a pencil. At the top write: "Tomorrow."',
              medium: 'Grab paper and pencil and write "Tomorrow\'s Plan" at the top.',
              hard: 'On paper, title a sheet "Tomorrow\'s Plan."',
            },
          },
          {
            emoji: '🪨',
            text: {
              easy: 'Write your ONE most important thing first — that\'s your big rock!',
              medium: 'Write your single most important task first — your "big rock."',
              hard: 'List your highest-priority task as item #1 (the big rock).',
            },
          },
          {
            emoji: '📝',
            text: {
              easy: 'Then list the other things you want to do under it.',
              medium: 'Below it, list the smaller things you want to fit in around it.',
              hard: 'Add remaining tasks below, in rough priority order.',
            },
          },
          {
            emoji: '✅',
            text: {
              easy: 'Tomorrow, do the big rock FIRST. Check it off when it\'s done!',
              medium: 'Tomorrow, tackle the big rock first and check off each item as you go.',
              hard: 'Execute the plan top-down tomorrow; check off completed items.',
            },
          },
        ],
        reflection: [
          {
            key: 'big-rock',
            prompt: {
              easy: 'What was your big rock — your most important thing?',
              medium: 'What did you choose as your single most important task?',
              hard: 'What was your #1 priority item?',
            },
            type: 'text',
          },
          {
            key: 'did-first',
            prompt: {
              easy: 'Did you do the big rock FIRST? How did it feel?',
              medium: 'Were you able to do your big rock first? How did that go?',
              hard: 'Did you execute the top priority first, and what was the result?',
            },
            type: 'text',
          },
          {
            key: 'insight',
            prompt: {
              easy: 'Did planning the night before make your day easier? Why?',
              medium: 'Did having a written plan change how your free time went? Explain.',
              hard: 'Reflect on how pre-planning affected your follow-through and tradeoffs.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "No screens needed — just paper. Let your child pick their own big rock; the goal is noticing how planning feels, not a perfect schedule.",
          medium:
            "This is a paper-and-pencil habit, not a strict schedule. Let your child choose their own priority — the learning goal is prioritizing and noticing the difference, not productivity.",
          hard:
            "Keep it low-pressure and child-led. The aim is to build awareness of prioritization and tradeoffs, not to optimize the day. Praise the planning attempt regardless of outcome.",
        },
        printables: {
          worksheets: [
            {
              title: "Tomorrow's Plan",
              blocks: [
                {
                  label: 'My BIG ROCK (most important thing)',
                  hint: 'Do this one FIRST.',
                  lines: 1,
                },
                {
                  label: 'Other things I want to do',
                  hint: 'List them under the big rock.',
                  lines: 4,
                },
                {
                  label: 'How it went',
                  hint: 'Fill this in after tomorrow.',
                  lines: 2,
                },
              ],
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
