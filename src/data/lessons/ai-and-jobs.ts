/**
 * AI & Jobs — "Tools Change, So Do Jobs."
 *
 * A balanced, NOT-scary look at how AI fits into the world of work. The big
 * idea: AI is a powerful new TOOL. Like the tractor, the computer, and the
 * internet before it, a new tool CHANGES some jobs, CREATES brand-new ones,
 * and HELPS people do other jobs faster. The winning skill across every one
 * of those waves was the same — learning to USE the new tool.
 *
 * We pair "what AI is great at" (speed, spotting patterns, first drafts)
 * with "what humans are great at" (caring, judgment, big new ideas,
 * creativity) so the kid sees a teammate, not a replacement.
 *
 * Beat order:
 *   intro → think-deeper (have tools changed jobs before?) →
 *   concept-cards (AI's superpowers vs human superpowers) → quiz →
 *   connect (real tool-change stories) → outro →
 *   real-world-mission (list one AI helper task + one human-only task,
 *   then ask a grown-up's AI one helpful question).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'ai-and-jobs',
  themeKey: 'app-maker',
  emoji: '🤖',
  title: 'AI & Jobs',
  subtitle: {
    easy: "AI is a new helper tool — let's see how it changes work!",
    medium:
      "AI changes some jobs, creates brand-new ones, and helps people do others faster. The winning move? Learn to use it.",
    hard:
      "How a powerful new tool reshapes the workforce — and why 'learn the new tool' beats 'fear the new tool' every time.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "You might hear grown-ups say 'AI is going to take all the jobs!' Take a deep breath — that's not the whole story. AI is a new TOOL, like a really smart helper. Tools change jobs, but they also make brand-new ones. Let's find out how! 🤖",
        medium:
          "AI feels brand-new and a little scary, but here's a calmer truth: AI is a powerful TOOL. New tools have always changed work — and the people who learn to USE them do great. Today we'll see what AI is good at, what only humans can do, and why learning the tool wins.",
        hard:
          "Big new technologies always spark worry about jobs. History tells a steadier story: tools don't just erase work — they reshape it, create new kinds of it, and reward the people who learn to wield them. Let's reason through where AI fits.",
      },
    },

    // ─── Think-deeper: have tools changed jobs before? ──────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Have Tools Changed Jobs Before?',
      intro: {
        easy: "Let's look back in time together.",
        medium: "Let's reason from history — this has happened many times.",
        hard: "First-principles: technological change vs. the labor market.",
      },
      layers: [
        {
          question: {
            easy: "Long ago, farmers dug fields by hand. Then the tractor arrived. What happened?",
            medium: "When the tractor replaced digging by hand, did farming jobs vanish forever?",
            hard: "Did mechanized farming eliminate agricultural work or transform it?",
          },
          reveal: {
            easy:
              "One farmer with a tractor could do the work of many! Some old jobs changed — but NEW jobs appeared too: people who BUILD tractors, FIX them, and DRIVE them. 🚜",
            medium:
              "Farming changed shape. Fewer people dug by hand, but whole new jobs appeared — building, repairing, and driving tractors, plus selling the extra food. The work moved, it didn't disappear.",
            hard:
              "It transformed. Hand-digging roles shrank, but new categories — manufacturing, maintenance, logistics, distribution — grew around the tool. Net work didn't vanish; it shifted.",
          },
        },
        {
          question: {
            easy: "Then computers showed up. Did everyone stop working?",
            medium: "When computers arrived, were there suddenly no jobs left?",
            hard: "What did the computer and the internet do to employment overall?",
          },
          reveal: {
            easy:
              "Nope! Computers made BRAND-NEW jobs nobody had heard of — like app makers, website designers, and video editors. Cool jobs that didn't even exist before! 💻",
            medium:
              "The opposite — computers and the internet created millions of jobs that didn't exist before: programmers, online sellers, video creators, app makers. New tools open new doors.",
            hard:
              "They created entire industries — software, e-commerce, digital media — and roles unimaginable a generation earlier. Productivity tools tend to expand the map of possible jobs.",
          },
        },
        {
          question: {
            easy: "So what was the SMART thing to do each time a new tool arrived?",
            medium: "What did the people who did well in each wave have in common?",
            hard: "What's the durable, repeatable skill across every tool revolution?",
          },
          reveal: {
            easy:
              "They LEARNED to use the new tool! The farmer who learned the tractor, the worker who learned the computer — they did great. With AI, the smart move is the same: learn to use it. 🪄",
            medium:
              "They learned the new tool instead of fearing it. That's the pattern — and it's exactly the move with AI today: get curious, try it, learn what it's good at.",
            hard:
              "Adaptability — the willingness to learn and apply the new tool — is the durable advantage. With AI, the winning skill is the same: become someone who knows how to use it well.",
          },
        },
      ],
    },

    // ─── Concept cards: AI superpowers vs human superpowers ─────────────
    {
      kind: 'concept-cards',
      heading: 'AI Powers vs Human Powers',
      subheading: 'AI is amazing at some things — and humans are amazing at others. The best teams use both!',
      cards: [
        {
          emoji: '⚡',
          title: 'AI: Super Fast',
          desc: {
            easy: 'AI can read and write SUPER fast — much faster than people. Great for quick first tries!',
            medium:
              'AI can read mountains of text and write a first draft in seconds. Speed is one of its biggest superpowers.',
            hard:
              'AI processes and generates language at enormous speed and scale — ideal for rapid drafts and fast lookups.',
          },
          color: '#E0EAFE',
        },
        {
          emoji: '🔍',
          title: 'AI: Spots Patterns',
          desc: {
            easy: 'AI is great at finding patterns hiding in LOTS of stuff — like spotting which photos have cats.',
            medium:
              'AI is excellent at noticing patterns across huge amounts of data — sorting, matching, and summarizing.',
            hard:
              'AI excels at pattern recognition over large datasets — classification, summarization, and surfacing structure.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '❤️',
          title: 'Humans: Caring & Judgment',
          desc: {
            easy: 'Only people can truly CARE, comfort a friend, and decide what is kind and fair.',
            medium:
              'Humans bring caring, kindness, and judgment — knowing what is right, fair, and good for real people.',
            hard:
              'Humans provide empathy, ethics, and judgment — weighing values and context in ways a tool cannot.',
          },
          color: '#FFE8F0',
        },
        {
          emoji: '💡',
          title: 'Humans: Big New Ideas',
          desc: {
            easy: 'People dream up brand-new ideas and make art and stories from the heart. That spark is YOURS!',
            medium:
              'Humans create truly new ideas, art, and stories — and decide which problems are worth solving in the first place.',
            hard:
              'Humans supply originality, taste, and creative direction — choosing goals and inventing what did not exist before.',
          },
          color: '#FFF6E0',
        },
      ],
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 AI & Jobs Check',
      questions: [
        {
          q: 'What is the best way to think about AI?',
          options: [
            'A powerful new tool that changes and helps with jobs',
            'A monster that ends all jobs forever',
            'A toy that does nothing useful',
          ],
          correct: 0,
        },
        {
          q: 'When tractors and computers arrived, what happened to jobs?',
          options: [
            'Some changed, and brand-new jobs were created too',
            'Every single job disappeared',
            'Nothing ever changed at all',
          ],
          correct: 0,
        },
        {
          q: 'Which is something only a HUMAN does really well?',
          options: [
            'Caring about a friend and deciding what is fair',
            'Reading a million pages in one second',
            'Spotting patterns in giant piles of data',
          ],
          correct: 0,
        },
        {
          q: 'What is the winning skill when a new tool like AI shows up?',
          options: [
            'Learning to USE the new tool',
            'Hiding from it and hoping it leaves',
            'Pretending it does not exist',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Foundations: 100 },
    },

    // ─── Connect: real tool-change stories ──────────────────────────────
    {
      kind: 'connect',
      heading: '🌍 Tools That Changed Work',
      concept: {
        easy: 'Every big new tool changed jobs AND made new ones. AI is the newest one.',
        medium: 'New tools have reshaped work for hundreds of years — and each time, people who learned them thrived.',
        hard: 'A pattern repeats across tool revolutions: disruption, new roles, and rewards for the adaptable.',
      },
      examples: [
        {
          emoji: '🚜',
          who: 'The Tractor',
          story: {
            easy: "One person with a tractor could farm a HUGE field. New jobs appeared: building and fixing them!",
            medium:
              "Tractors changed farming, but created tractor-builders, mechanics, and bigger food businesses. Work moved, it didn't vanish.",
            hard:
              "Mechanized agriculture shrank hand labor while spawning manufacturing, repair, and distribution industries around the machine.",
          },
        },
        {
          emoji: '💻',
          who: 'The Computer',
          story: {
            easy: "Computers made jobs nobody had before — like app makers and video editors. Awesome new work!",
            medium:
              "The computer and internet created programmers, online shops, and video creators — millions of jobs that didn't exist before.",
            hard:
              "Computing spawned software, e-commerce, and digital media — entire industries built on a single class of tool.",
          },
        },
        {
          emoji: '🤖',
          who: 'AI Today',
          story: {
            easy: "AI helps people write, draw, and learn faster. Kids who learn to use it well will do great things!",
            medium:
              "AI is the newest tool. It helps people draft, research, and create faster — and the kids who learn it now get a head start.",
            hard:
              "AI augments knowledge work — drafting, summarizing, ideating — and rewards those who learn to direct it skillfully.",
          },
        },
      ],
      kicker: {
        easy: 'New tool, same old secret: be the kid who learns to use it! 🪄',
        medium: "The tool keeps changing — the winning move stays the same: stay curious and learn it.",
        hard: 'The constant across every revolution is human adaptability. Learn the tool; lead with the things only you can do.',
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know the truth: AI is a helper tool. It changes some jobs, makes new ones, and helps people. The smart move? Learn to use it AND use YOUR human superpowers! 🤖❤️",
        medium:
          "You learned that AI is a tool — it changes jobs, creates new ones, and speeds others up. Pair it with your human powers (caring, judgment, big ideas) and you're unstoppable.",
        hard:
          "You've reframed AI from threat to tool: it reshapes work, the adaptable thrive, and human judgment and creativity stay irreplaceable. Learn the tool; lead with what's uniquely yours.",
      },
      bonusTip: {
        easy: "Tip: AI is great for first tries — but YOU decide what's good, kind, and true. ✨",
        medium: "Pro tip: let AI do the fast, boring parts so you have more time for the creative, caring parts.",
        hard: "Edge: use AI to amplify your output, then apply human judgment and taste — that combination is the real advantage.",
      },
    },

    // ─── Real-world mission: AI helper vs human-only ────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'ai-and-jobs',
        emoji: '🤖',
        title: {
          easy: 'AI Helper vs Human-Only',
          medium: 'Find one AI-helper task and one human-only task',
          hard: 'Map a task to AI and a task to your human superpowers',
        },
        pitch: {
          easy: "Spot ONE thing AI could help with, and ONE thing only a human can do well. Then ask a grown-up's AI one helpful question!",
          medium:
            "List one task AI could help you do faster, and one task that needs a human's heart or judgment. Then, with a grown-up, ask their AI one helpful question.",
          hard:
            "Identify an AI-augmentable task and a human-only task, then run a single guided AI query with a grown-up to see the tool in action.",
        },
        steps: [
          {
            emoji: '⚡',
            text: {
              easy: 'Think of ONE thing AI could help you with (like ideas for a story or a math hint).',
              medium: 'Write down one task AI could help you do faster — like brainstorming or checking spelling.',
              hard: 'Note one task where AI would genuinely speed you up (drafting, summarizing, idea generation).',
            },
          },
          {
            emoji: '❤️',
            text: {
              easy: 'Think of ONE thing only a HUMAN can do well (like cheering up a sad friend).',
              medium: 'Write down one task that needs a human — caring, deciding what is fair, or a brand-new idea.',
              hard: 'Identify one task requiring human empathy, judgment, or original creativity.',
            },
          },
          {
            emoji: '🧑‍🤝‍🧑',
            text: {
              easy: 'Ask a grown-up to help you use their AI to ask ONE helpful question.',
              medium: 'With a grown-up nearby, type one helpful question into their AI and read the answer together.',
              hard: 'With a grown-up, run one well-formed query through their AI tool and review the response together.',
            },
          },
          {
            emoji: '🧐',
            text: {
              easy: "Talk about it: Was the AI's answer helpful? Did YOU have to decide if it was good?",
              medium: 'Discuss: was the answer useful, and how did YOUR judgment decide if it was right?',
              hard: 'Reflect on the answer\'s usefulness and how human judgment validated or corrected it.',
            },
          },
        ],
        reflection: [
          {
            key: 'ai-task',
            prompt: {
              easy: 'What is one thing AI could help you with?',
              medium: 'Which task did you pick for AI to help with?',
              hard: 'Which task did you map to AI augmentation?',
            },
            type: 'text',
          },
          {
            key: 'human-task',
            prompt: {
              easy: 'What is one thing only a human can do well?',
              medium: 'Which task did you decide needs a human?',
              hard: 'Which task did you reserve for human judgment or creativity?',
            },
            type: 'text',
          },
          {
            key: 'ai-question',
            prompt: {
              easy: 'What question did you ask the AI? Was it helpful?',
              medium: 'What did you ask the AI, and was its answer helpful to you?',
              hard: 'What query did you run, and how useful and accurate was the response?',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "Please sit WITH your child for the AI step — type the question together and read the answer out loud. Use a kid-safe AI tool and talk about checking whether answers are true.",
          medium:
            "Do the AI step together on your own account and device. The goal is to model curiosity and critical thinking — that AI gives drafts, and a human decides if they're good and true.",
          hard:
            "Supervise the AI interaction directly using your own tool. Emphasize that AI output is a starting draft to be verified, and that human judgment makes the final call.",
        },
      },
    },
  ],
};

export default lesson;
