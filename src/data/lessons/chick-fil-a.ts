/**
 * Chick-fil-A lesson — content extracted from the original ChickFilAPage.tsx.
 * Migrated verbatim 2026-05-14.
 *
 * All adaptive copy ({easy, medium, hard}) is preserved from:
 *   - MomoMentorBubble MOMO_TIPS['chick-fil-a']
 *   - KEY_LESSONS array
 *   - adaptText() bonus tip
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'chick-fil-a',
  themeKey: 'chick-fil-a',
  emoji: '🐔',
  title: 'How Chick-fil-A Works',
  subtitle: {
    easy: "Let's learn about a yummy chicken restaurant!",
    medium:
      "Discover the secrets behind one of America's most beloved restaurant chains",
    hard:
      'Examine the operational strategy of America\'s #1 fast-food chain by customer satisfaction',
  },

  beats: [
    // ─── Momo greeting ──────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy: "Let's learn about a restaurant that makes yummy chicken!",
        medium:
          "Chick-fil-A is one of the most successful restaurant chains. Let's find out why!",
        hard:
          "Chick-fil-A generates more revenue per restaurant than any other fast-food chain. Let's analyze how!",
      },
    },

    // ─── Video ──────────────────────────────────────────────────────────
    {
      kind: 'video',
      src: '/videos/chick-fil-a-kids-video.mp4',
      title: 'Watch: The Chick-fil-A Story',
      durationLabel: '2 MIN',
    },

    // ─── 6 lesson cards (tap-to-expand) ─────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'Key Business Lessons',
      cards: [
        {
          emoji: '🐄',
          title: 'Quality Ingredients',
          desc: 'Chick-fil-A uses real chicken breast in every sandwich. They believe great food starts with great ingredients.',
          color: '#FFE5EC',
        },
        {
          emoji: '😊',
          title: '"My Pleasure" Service',
          desc: 'Every employee says "my pleasure" instead of "you\'re welcome." This small detail makes customers feel special.',
          color: '#E0F2FE',
        },
        {
          emoji: '📅',
          title: 'Closed on Sundays',
          desc: 'The founder decided to close every Sunday so employees could rest. This bold choice actually made the brand stronger!',
          color: '#D1FAE5',
        },
        {
          emoji: '🏪',
          title: 'Franchise Model',
          desc: 'Each restaurant has an owner-operator who runs it like their own business. This is called a franchise model.',
          color: '#FEF9C3',
        },
        {
          emoji: '🐮',
          title: 'The "Eat Mor Chikin" Cows',
          desc: 'Those funny cows holding signs? That marketing campaign has been running since 1995 and became iconic!',
          color: '#EDE9FE',
        },
        {
          emoji: '📈',
          title: 'Growth Strategy',
          desc: 'Chick-fil-A grows slowly and carefully. They pick locations wisely and train operators for months before opening.',
          color: '#FFF8F0',
        },
      ],
    },

    // ─── Quiz ───────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🏆 Quick Quiz',
      subheading: 'Test what you learned about Chick-fil-A!',
      xpReward: 100,
      skillScores: {
        'Supply Chain': 80,
        'Customer Service': 90,
        'Brand Building': 85,
        Operations: 95,
      },
      questions: [
        {
          q: "What makes Chick-fil-A's customer service special?",
          options: [
            'Fast delivery',
            'Saying "my pleasure"',
            'Free toys',
            'Drive-through only',
          ],
          correct: 1,
        },
        {
          q: 'What day is Chick-fil-A always closed?',
          options: ['Monday', 'Saturday', 'Sunday', 'Wednesday'],
          correct: 2,
        },
        {
          q: 'What business model does Chick-fil-A use?',
          options: [
            'Corporate stores',
            'Franchise model',
            'Food truck',
            'Online only',
          ],
          correct: 1,
        },
        {
          q: 'What animal is in their famous ad campaign?',
          options: ['Chicken', 'Cow', 'Pig', 'Dog'],
          correct: 1,
        },
      ],
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: 'You finished the Chick-fil-A lesson — great job!',
      bonusTip:
        "Chick-fil-A's franchise fee is only $10,000 — way less than most chains. But they keep 50% of profits and 15% of revenue. This unique model means operators are deeply invested in each location's success!",
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'chick-fil-a',
        emoji: '😊',
        title: {
          easy: 'The "My Pleasure" Challenge',
          medium: 'Run a 3-day "my pleasure" service experiment',
          hard: '3-day service-language field experiment',
        },
        pitch: {
          easy:
            'For 3 days, say "my pleasure" every time someone says "thank you" — to family, friends, anyone. Count how many times you say it. Watch their faces. See what changes.',
          medium:
            'Run the Chick-fil-A "my pleasure" trick yourself for 3 days. Every "thank you" → reply "my pleasure." Track the count + the reactions. Notice what shifts.',
          hard:
            'Apply Chick-fil-A\'s service-language standard in your own interactions for 3 days. Track frequency, observe counterparty response patterns, log notable reactions.',
        },
        steps: [
          {
            emoji: '🗣️',
            text: {
              easy: 'Practice saying "my pleasure" out loud 5 times so it feels natural.',
              medium: 'Rehearse the response until it flows naturally — at least 5 reps.',
              hard: 'Practice the substitution until verbal automaticity is achieved.',
            },
          },
          {
            emoji: '📅',
            text: {
              easy: 'Pick 3 days in a row. Day 1 starts as soon as you say it for the first time.',
              medium: 'Pick a 3-day window. Day 1 begins at the first applied response.',
              hard: 'Set a 3-day observation window starting from first applied response.',
            },
          },
          {
            emoji: '🎯',
            text: {
              easy: 'Every time someone says "thank you" to YOU — say "my pleasure" back.',
              medium: 'On every "thank you" you receive: respond with "my pleasure."',
              hard: 'Trigger condition: incoming "thank you" → response "my pleasure."',
            },
          },
          {
            emoji: '✍️',
            text: {
              easy: 'Make a tally mark on the tracker every time you say it.',
              medium: 'Log each occurrence on the tracker. Note any standout reactions.',
              hard: 'Log frequency + qualitative response data per event.',
            },
          },
          {
            emoji: '👀',
            text: {
              easy: 'Notice: do people smile MORE? Are they nicer back? Write what you see.',
              medium: 'Observe + record counterparty reactions. Smiles? Surprise? More friendliness?',
              hard: 'Observational data: counterparty affect, micro-expressions, return engagement.',
            },
          },
        ],
        reflection: [
          {
            key: 'count',
            prompt: {
              easy: 'How many times did you say "my pleasure" in 3 days?',
              medium: 'Total "my pleasure" responses across the 3-day window',
              hard: 'Cumulative frequency over 3-day observation',
            },
            type: 'number',
            placeholder: '17',
          },
          {
            key: 'reaction',
            prompt: {
              easy: 'What did people DO when you said it?',
              medium: 'Most common counterparty reaction',
              hard: 'Modal counterparty response pattern',
            },
            type: 'text',
            placeholder: 'A lot of them smiled or said it back',
          },
          {
            key: 'best',
            prompt: {
              easy: 'What was the BEST reaction you got?',
              medium: 'Standout positive response',
              hard: 'Most impactful response event',
            },
            type: 'text',
            placeholder: 'My grandpa said "wow, where did YOU learn that?"',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What did you learn about WORDS and people?',
              medium: 'Biggest insight from the service-language experiment',
              hard: 'Largest insight delta from applied service-language field test',
            },
            type: 'longtext',
            placeholder: 'I didn\'t realize how much a simple phrase could change…',
          },
        ],
        parentNote: {
          easy: 'Honest reactions! If "my pleasure" sounds weird coming from a kid, react genuinely — the data is the lesson.',
          medium:
            'Engage authentically. Polite acknowledgement doesn\'t teach the service-impact lesson; genuine reactions (positive AND surprised) do.',
          hard:
            'Authentic counterparty engagement maximizes the lesson value. The kid is learning to read real social signal, not scripted feedback.',
        },
        printables: {
          trackers: [
            {
              title: '"My Pleasure" Tally Sheet',
              note: 'One row per day. Add a tally mark for every time you said it.',
              columns: ['Day', 'Date', 'Tally Marks', 'Best Reaction'],
              rows: 3,
            },
          ],
          worksheets: [
            {
              title: 'Service Language Field Notes',
              blocks: [
                {
                  label: '🗣️ My exact line',
                  hint: 'Write the words. Practice them.',
                  lines: 1,
                },
                {
                  label: '🎯 Who I\'ll try it on (Day 1 list)',
                  hint: 'Family, friends, neighbors, store clerks.',
                  lines: 3,
                },
                {
                  label: '📊 Day 1 count',
                  equation: '_______ times',
                },
                {
                  label: '   Best Day 1 reaction',
                  lines: 2,
                },
                {
                  label: '📊 Day 2 count',
                  equation: '_______ times',
                },
                {
                  label: '   Best Day 2 reaction',
                  lines: 2,
                },
                {
                  label: '📊 Day 3 count',
                  equation: '_______ times',
                },
                {
                  label: '   Best Day 3 reaction',
                  lines: 2,
                },
                {
                  label: '💭 What I noticed about people + words',
                  lines: 4,
                },
                {
                  label: '🤔 Will I keep doing it?',
                  hint: 'Why or why not.',
                  lines: 3,
                },
              ],
            },
          ],
          checklists: [
            {
              title: 'Challenge Setup',
              items: [
                'Practiced saying "my pleasure" out loud 5 times',
                '3 days picked + Day 1 start time set',
                'Tracker printed + accessible',
                'Pen or pencil to mark tallies',
                'I\'m ready to do it EVERY time someone thanks me',
                'I\'ll notice reactions — not just count',
              ],
              note: 'Tip: the secret is consistency. Skip even one "thank you" and the data gets noisy. Stick to it.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
