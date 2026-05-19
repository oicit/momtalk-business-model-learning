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
  ],
};

export default lesson;
