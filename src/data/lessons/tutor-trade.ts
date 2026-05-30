/**
 * Tutor Trade — "Sell What You KNOW."
 *
 * The first business a kid already owns is what's inside their head. If
 * you're great at reading, math, or a video game, you can TEACH a younger
 * kid and earn stars for it. Your knowledge is the product.
 *
 * This is a SERVICE business: you don't sell an object, you sell your
 * TIME + SKILL. And because teaching well makes the little kid come back
 * for more, good service = repeat customers. Part of the "Hustle" track.
 *
 * Beat order:
 *   intro → think-deeper (what do YOU already know well?) →
 *   concept-cards (knowledge = product, it's a service, repeat customers,
 *   be kind & patient) → calc-challenge (3 sessions × 5⭐ = 15⭐) →
 *   connect (real tutors, coaches, YouTube teachers) → outro →
 *   real-world-mission (teach a younger sibling/friend one small thing).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'tutor-trade',
  themeKey: 'hustle',
  emoji: '🎓',
  title: 'Tutor Trade',
  subtitle: {
    easy: "You already KNOW cool stuff — teach a little kid and earn stars!",
    medium:
      "Turn what you're good at into a business: teach a younger kid and earn stars for your time.",
    hard:
      "Your knowledge is a product. Selling your time + skill as teaching is a classic service business — kid-sized.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "You already know lots of things! Maybe you read great, or you're a math star, or you're amazing at a game. Guess what? You can TEACH a younger kid and earn stars for it. Your brain is full of stuff people want to learn! 🎓",
        medium:
          "Here's a business you can start TODAY with zero supplies: teaching. If you're good at reading, math, or a game, a younger kid would love to learn it from you — and you can earn stars for your time.",
        hard:
          "The cheapest business to start is the one inside your head. If you've mastered something — reading, multiplication, a game — that knowledge is a product. Today you'll learn to sell it as a service: your time and skill, traded for stars.",
      },
    },

    // ─── Think-deeper: what do YOU already know well? ───────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 What Are YOU Already Good At?',
      intro: {
        easy: "Let's find your superpower.",
        medium: "Let's figure out what you could teach.",
        hard: "Let's locate the skill you can package and sell.",
      },
      layers: [
        {
          question: {
            easy: "What's something you can do that a 5-year-old can't yet?",
            medium: "Name one thing you're good at that a younger kid hasn't learned yet.",
            hard: "Identify a skill you've mastered that's still ahead of a younger learner.",
          },
          reveal: {
            easy:
              "Maybe tying shoes, reading a book, adding numbers, or beating a game level. To you it's easy — but to a little kid, it's MAGIC they want to learn!",
            medium:
              "Reading, math facts, drawing, a sport, a video game — anything you do well is something a younger kid would love to learn. Your 'easy' is their 'wow'.",
            hard:
              "Any skill you've internalized has value to someone one step behind you. The gap between what you know and what they know is exactly what you can sell.",
          },
        },
        {
          question: {
            easy: "If a little kid wanted to learn it, would they pay you a few stars?",
            medium: "Would a younger kid trade stars to learn that skill from you?",
            hard: "Is there demand — would someone trade value to acquire that skill from you?",
          },
          reveal: {
            easy:
              "Yes! People happily give stars to learn something they really want. That makes YOU the teacher — and the boss of your own little school!",
            medium:
              "If they want it badly enough, they'll trade for it. When someone pays you to teach, you've turned your knowledge into a business.",
            hard:
              "If there's demand, your knowledge becomes a marketable service. You're no longer just smart — you're a provider with a customer.",
          },
        },
        {
          question: {
            easy: "What are you actually SELLING? It's not a toy…",
            medium: "When you teach, what is the customer really paying for?",
            hard: "What's the unit of value in a teaching business?",
          },
          reveal: {
            easy:
              "You're selling your TIME and your SMARTS — not a thing you can hold. That's called a SERVICE business. No toys to buy, just YOU! ✨",
            medium:
              "You sell your time + skill, not an object. That's a service business. The amazing part: you never run out of stock — your knowledge is reusable!",
            hard:
              "You're selling time and expertise — a service, not a physical good. No inventory cost, and the 'product' doesn't deplete when you sell it. High-margin by nature.",
          },
        },
      ],
    },

    // ─── Concept cards: what makes a tutoring business work ─────────────
    {
      kind: 'concept-cards',
      heading: 'How a Teaching Business Works',
      subheading: 'You sell something you can never run out of: what you know.',
      cards: [
        {
          emoji: '🧠',
          title: 'Your Knowledge Is the Product',
          desc: {
            easy: "The stuff in your head is worth stars! If you know it well, you can sell lessons in it.",
            medium:
              "You don't need money to start. The thing you're selling — what you know — you already own. That's your product.",
            hard:
              "Knowledge is an asset with near-zero cost to start. You already paid for it by learning; now you can monetize it again and again.",
          },
          color: '#FFF1E6',
        },
        {
          emoji: '⏰',
          title: "It's a Service",
          desc: {
            easy: "You sell your TIME teaching, not a thing in a box. That's a service business!",
            medium:
              "A service means you sell what you DO, not what you make. Teaching, haircuts, and dog-walking are all services.",
            hard:
              "Services trade time + skill instead of physical goods — no inventory, no shipping, just your effort delivered live.",
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🔁',
          title: 'Teach Well = They Come Back',
          desc: {
            easy: "If your lesson is fun and they learn, they'll want MORE lessons. That's a repeat customer!",
            medium:
              "Good teaching brings repeat customers. One happy student who keeps coming back beats ten who try you once.",
            hard:
              "Quality service drives retention. Repeat customers cost nothing to find and form the steady backbone of a service business.",
          },
          color: '#E5FAF1',
        },
        {
          emoji: '💛',
          title: 'Be Kind & Patient',
          desc: {
            easy: "Go slow, be nice, and cheer them on. A happy student tells their friends about you!",
            medium:
              "Patience and kindness make students feel safe to try. Happy students tell their friends — and that's free advertising.",
            hard:
              "Empathy is a competitive edge in service work. A great experience generates word-of-mouth referrals you didn't have to pay for.",
          },
          color: '#FBE9F4',
        },
      ],
    },

    // ─── Calc challenge: 3 sessions × 5 stars = 15 stars ────────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 Count Your Teaching Stars',
      setup: {
        easy: "You teach a younger kid 3 times this week. Each lesson, they pay you 5 pretend ⭐. How many ⭐ did you earn in all?",
        medium:
          "You run 3 teaching sessions this week and charge 5 pretend ⭐ each. What's your total for the week?",
        hard:
          "You deliver 3 tutoring sessions at a price of 5⭐ per session. Compute the week's total revenue.",
      },
      problem: {
        givens: [
          { label: 'Sessions this week', value: 3, suffix: '' },
          { label: 'Stars per session', value: 5, suffix: '⭐' },
        ],
        answerLabel: 'Stars earned this week',
        answer: 15,
        suffix: '⭐',
      },
      walkthrough: {
        easy: "3 lessons, 5⭐ each: 5 + 5 + 5 = 15⭐! That's the same as 3 × 5. The more lessons you teach, the more stars add up. 🌟",
        medium:
          "3 sessions × 5⭐ = 15⭐. Notice the pattern: in a service business, more sessions means more stars — your time is what you're selling.",
        hard:
          "3 × 5⭐ = 15⭐. Revenue scales with sessions delivered. To earn more, raise your price per session OR run more sessions — those are your two levers.",
      },
    },

    // ─── Connect: where this shows up in the real world ─────────────────
    {
      kind: 'connect',
      heading: '🌍 Teaching Businesses Everywhere',
      concept: {
        easy: "Lots of grown-ups earn money by teaching what they're good at.",
        medium: "The 'sell what you know' idea runs huge businesses all around you.",
        hard: "Knowledge-as-a-service powers a massive slice of the real economy.",
      },
      examples: [
        {
          emoji: '📚',
          who: 'Tutors & Teachers',
          story: {
            easy: "Tutors get paid to help kids with reading or math. Teaching IS their job!",
            medium:
              "Tutors and teachers earn a living by sharing what they know — one student or a whole class at a time.",
            hard:
              "Private tutors charge per hour for expertise; it's a pure time-for-money service with strong repeat business.",
          },
        },
        {
          emoji: '⚽',
          who: 'Coaches',
          story: {
            easy: "A soccer coach knows soccer SO well that families pay them to teach kids to play.",
            medium:
              "Coaches sell their skill at a sport. Parents pay because the coach can teach what they can't.",
            hard:
              "Coaching is expertise sold as a service — clients pay for accelerated improvement they can't reach alone.",
          },
        },
        {
          emoji: '🎥',
          who: 'YouTube Teachers',
          story: {
            easy: "Some people teach on YouTube — how to draw, bake, or beat a game — and earn from it!",
            medium:
              "Online creators teach one lesson once, then thousands watch it. Their knowledge reaches a huge crowd.",
            hard:
              "Digital teaching scales a single lesson to millions — the same service idea, multiplied by the internet.",
          },
        },
      ],
      kicker: {
        easy: "The best part? You never run out of what you know. 🎓",
        medium: "Your knowledge is stock that never sells out — teach it again and again.",
        hard: "Knowledge is infinitely reusable inventory — that's why teaching scales so well.",
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know: what's in your head can be a business! Teach what you love and earn stars. 🎓",
        medium:
          "You learned that your knowledge is a product, teaching is a service, and being kind brings customers back.",
        hard:
          "You've grasped the service-business model: sell time + skill, delight customers, and earn repeat business.",
      },
      bonusTip: {
        easy: "Tip: a smiley, patient teacher gets students coming back! 😊",
        medium: "Pro tip: the nicer and clearer you teach, the more your student wants to return.",
        hard: "Edge: experience quality drives retention and referrals — be the teacher kids want again.",
      },
    },

    // ─── Real-world mission: teach a younger kid one small thing ────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'tutor-trade',
        emoji: '🎓',
        title: {
          easy: 'Be a Teacher for a Day',
          medium: 'Teach a younger kid one small thing',
          hard: 'Deliver a real micro-tutoring session',
        },
        pitch: {
          easy: "Pick ONE little thing you know and teach it to a younger sibling or friend. Charge a pretend ⭐ fee!",
          medium:
            "Teach a younger kid one small skill you've mastered, set a small pretend ⭐ 'fee', and see how it goes.",
          hard:
            "Run one short tutoring session for a younger learner, price it in pretend ⭐, and reflect on the service.",
        },
        steps: [
          {
            emoji: '🧠',
            text: {
              easy: 'Pick ONE small thing you know well (like counting to 20 or tying a shoe).',
              medium: 'Choose one small skill you can teach in a few minutes.',
              hard: 'Select a single, teachable micro-skill you have mastered.',
            },
          },
          {
            emoji: '🧒',
            text: {
              easy: 'Find a younger sibling or friend who wants to learn it.',
              medium: 'Find a younger student who would like to learn that skill.',
              hard: 'Identify a willing younger learner — your customer.',
            },
          },
          {
            emoji: '🌟',
            text: {
              easy: 'Agree on a pretend ⭐ fee — like 5 ⭐ for the lesson.',
              medium: 'Set a small pretend ⭐ price for the lesson before you start.',
              hard: 'Quote a pretend ⭐ price up front so the trade is clear.',
            },
          },
          {
            emoji: '💛',
            text: {
              easy: 'Teach slowly, be kind, and cheer them on until they get it!',
              medium: 'Teach patiently, step by step, and encourage them as they learn.',
              hard: 'Deliver the lesson with patience and clear steps; watch for understanding.',
            },
          },
        ],
        reflection: [
          {
            key: 'what-taught',
            prompt: {
              easy: 'What did you teach, and who did you teach?',
              medium: 'What skill did you teach, and to whom?',
              hard: 'Describe the skill delivered and the learner.',
            },
            type: 'text',
          },
          {
            key: 'stars-earned',
            prompt: {
              easy: 'How many pretend ⭐ did you earn?',
              medium: 'How many pretend ⭐ did your lesson earn?',
              hard: 'Total pretend ⭐ revenue from the session?',
            },
            type: 'number',
            suffix: '⭐',
          },
          {
            key: 'come-back',
            prompt: {
              easy: 'Did they learn it? Would they want ANOTHER lesson from you?',
              medium: 'Did your student learn it, and would they come back for more?',
              hard: 'Did the learner succeed, and is there repeat demand for your teaching?',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is pretend money — the goal is the joy of teaching, not real fees. Cheer on the little teacher and keep lessons short and fun.",
          medium:
            "Stars are pretend — please don't involve real money. The aim is for your child to experience teaching as a service and feel the pride of helping someone learn.",
          hard:
            "Symbolic stars only; no real payment. The learning objective is understanding service work and customer experience, not earning income. Keep sessions short and positive.",
        },
        printables: {
          trackers: [
            {
              title: 'My Teaching Log',
              columns: ['Lesson', 'Who I taught', 'Stars earned', 'Want more?'],
              rows: 5,
              note: 'Pretend ⭐ only — track how your little school is doing!',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
