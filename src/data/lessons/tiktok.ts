/**
 * TikTok: The Algorithm IS the Business.
 *
 * Big idea for kids: TikTok doesn't just SHOW you videos — it quietly
 * LEARNS what you like (what you watch, replay, skip) and keeps feeding
 * you more of it, so you watch longer. More watching = more ads = more
 * money. The smart recommendation engine is the moat: super hard to copy
 * because it improves the more people use it.
 *
 * The grown-up lesson hidden inside: apps are DESIGNED to keep you
 * scrolling — on purpose. Noticing that is a superpower. The mission
 * teaches the kid to spot when an app "knows" what they like, and to
 * practice choosing when to stop (set a timer, pick a stopping point).
 *
 * Education-first / symbolic only. No real metrics, no real trading.
 *
 * Beat order:
 *   intro → think-deeper (how does it "know"?) → concept-cards (Algorithm,
 *   Watch Time, Ads, The Moat) → quiz → connect (YouTube, Instagram,
 *   Netflix) → outro (you're the boss of your time) → real-world-mission
 *   (notice the algorithm + practice setting a timer).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'tiktok',
  themeKey: 'company',
  emoji: '🎵',
  title: 'TikTok',
  subtitle: {
    easy: "How does TikTok always know the next video you'll love? Let's find out!",
    medium:
      'The real business behind TikTok is a smart helper that learns what you like — and keeps you watching.',
    hard:
      "TikTok's recommendation algorithm is the product, the moat, and the money engine. Here's how that works — kid-sized.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Have you ever watched TikTok and thought, 'How did it KNOW I'd love this?' 🤔 That's not magic — it's a clever trick. Let's discover TikTok's hidden superpower! 🎵",
        medium:
          "TikTok feels like it can read your mind — the next video is always something you like. Today we'll uncover the secret behind that, and why it's actually how TikTok makes its money.",
        hard:
          "TikTok seems to know you better than you know yourself. The secret isn't magic — it's a learning algorithm. Let's see how watching, ads, and a hard-to-copy 'brain' all fit together.",
      },
    },

    // ─── Think-deeper: how does it "know" what you like? ────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 How Does It Know What You Like?',
      intro: {
        easy: "Let's figure out TikTok's secret together.",
        medium: "Let's reason through how an app seems to read your mind.",
        hard: 'First-principles look at how a recommendation engine learns.',
      },
      layers: [
        {
          question: {
            easy: "When you watch a video to the end, what do you think TikTok notices?",
            medium: 'What is TikTok quietly paying attention to while you scroll?',
            hard: 'What signals does the app collect from your behavior?',
          },
          reveal: {
            easy:
              "It notices EVERYTHING — which videos you finish, which you replay, which you skip fast. Every little choice is a clue about what you like!",
            medium:
              "It watches what you watch: videos you finish, replay, like, or skip in one second. Each action is a tiny clue, and it collects millions of them.",
            hard:
              'It logs watch time, replays, likes, shares, and skips. These signals are data — the more you tap, the more it learns your taste.',
          },
        },
        {
          question: {
            easy: 'What does TikTok DO with all those clues?',
            medium: 'How does collecting your clues help TikTok?',
            hard: 'How does the app turn signals into recommendations?',
          },
          reveal: {
            easy:
              "It uses your clues to pick the NEXT video — something a lot like the ones you already loved. So you keep finding videos you like! 🪄",
            medium:
              "It uses your clues to guess what you'll enjoy next, then shows you exactly that. The more it learns, the better its guesses get.",
            hard:
              "It feeds your signals into a model that predicts what you'll watch longest, then serves that next. It's a feedback loop that sharpens over time.",
          },
        },
        {
          question: {
            easy: 'Why would TikTok WANT you to keep watching?',
            medium: 'What does TikTok get when you watch for a long time?',
            hard: 'What is the business reason behind maximizing watch time?',
          },
          reveal: {
            easy:
              "The longer you watch, the more little ads TikTok can show — and ads are how it makes money. So it's BUILT to keep you watching. That's good to know! 👀",
            medium:
              "More watching means more ads, and ads are how TikTok earns money. So the app is designed on purpose to keep you scrolling — knowing that helps you stay in charge.",
            hard:
              'Longer sessions = more ad views = more revenue. The whole app is optimized to extend watch time. Recognizing that intent is the first step to controlling your own time.',
          },
        },
      ],
    },

    // ─── Concept cards: the four pieces of the business ─────────────────
    {
      kind: 'concept-cards',
      heading: "TikTok's Hidden Machine",
      subheading: 'Four pieces that quietly work together every time you scroll.',
      cards: [
        {
          emoji: '🧠',
          title: 'The Algorithm (the Brain)',
          desc: {
            easy: "A super-smart helper that learns what you like and picks your next video. The more you watch, the smarter it gets!",
            medium:
              'The algorithm is a learning "brain" that studies your taps and chooses what to show you next. It improves every time you use it.',
            hard:
              "A recommendation algorithm that learns your preferences from your behavior and predicts what you'll watch. It's the actual product — not the videos.",
          },
          color: '#E8F4FD',
        },
        {
          emoji: '⏱️',
          title: 'Watch Time',
          desc: {
            easy: 'The longer you keep watching, the happier the app is. It tries hard to keep you from stopping.',
            medium:
              'TikTok measures how long you stay. Keeping your "watch time" high is its #1 goal — that\'s why videos are short and never end.',
            hard:
              "Watch time is the core metric. Endless feeds and short clips are designed to maximize the minutes you spend — that's the engagement everything else rests on.",
          },
          color: '#FFFDE8',
        },
        {
          emoji: '📺',
          title: 'Ads = Money',
          desc: {
            easy: 'Sprinkled between videos are little ads. The more you watch, the more ads TikTok shows — and that\'s how it earns money.',
            medium:
              "TikTok is free for you, so how does it earn? Ads. Companies pay to slip ads between videos. More watching = more ads = more money.",
            hard:
              "The app is free because YOU aren't the customer — advertisers are. They pay for your attention. Your watch time is what TikTok actually sells.",
          },
          color: '#E5FAF1',
        },
        {
          emoji: '🏰',
          title: 'The Moat (Hard to Copy)',
          desc: {
            easy: "Other apps can copy short videos, but copying TikTok's super-smart brain is REALLY hard. That's its protective wall!",
            medium:
              "A 'moat' is something that protects a business from copycats. TikTok's moat is its algorithm — it learned from billions of taps, so rivals can't easily catch up.",
            hard:
              "The moat isn't the app — it's the trained algorithm, sharpened by enormous usage data. Competitors can copy the look but not years of learning. That's a durable advantage.",
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 TikTok Check',
      questions: [
        {
          q: "What is TikTok's REAL business — the thing that makes it special?",
          options: [
            "A smart algorithm that learns what you like and keeps you watching",
            'The dance videos it films itself',
            'A store that sells phones',
          ],
          correct: 0,
        },
        {
          q: 'How does a free app like TikTok make money?',
          options: [
            'By showing ads between videos — the more you watch, the more ads',
            'By charging you $5 every time you open it',
            "It doesn't make any money at all",
          ],
          correct: 0,
        },
        {
          q: 'Why is it smart to NOTICE that apps are built to keep you watching?',
          options: [
            'So YOU can choose when to stop, instead of the app deciding for you',
            'Because watching forever is always the best idea',
            'Because the algorithm is broken',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Foundations: 100 },
    },

    // ─── Connect: same trick in other apps ─────────────────────────────
    {
      kind: 'connect',
      heading: '🌍 The Same Trick Everywhere',
      concept: {
        easy: 'Once you see the "keep you watching" trick, you\'ll spot it in LOTS of apps!',
        medium: 'TikTok made this famous, but the "learn what you like, show you more" idea powers many apps.',
        hard: 'Recommendation engines optimized for engagement are now everywhere — TikTok just did it best.',
      },
      examples: [
        {
          emoji: '▶️',
          who: 'YouTube',
          story: {
            easy: "YouTube guesses the next video you'll click — that's why 'just one more' turns into ten!",
            medium:
              'YouTube\'s "Up Next" learns your taste and autoplays the next video. Same idea: keep you watching, show more ads.',
            hard:
              "YouTube's recommendation system drives most of its watch time by predicting what keeps you on the platform — engagement-optimized, like TikTok.",
          },
        },
        {
          emoji: '📸',
          who: 'Instagram & Snapchat',
          story: {
            easy: "They learn which photos and videos you stop on, then fill your feed with more like them.",
            medium:
              'Instagram Reels copied TikTok exactly — a learning feed that studies what you linger on and serves more of it.',
            hard:
              'Instagram and Snapchat run their own engagement algorithms, fighting for the same scarce resource: your attention.',
          },
        },
        {
          emoji: '🍿',
          who: 'Netflix',
          story: {
            easy: "Netflix lines up the next episode and picks shows it thinks you'll love, so you keep watching!",
            medium:
              'Netflix recommends shows and auto-plays the next episode for the same reason — more watching keeps you subscribed.',
            hard:
              "Netflix's recommender drives a huge share of viewing; it's a different business (subscriptions) but the same attention-engineering playbook.",
          },
        },
      ],
      kicker: {
        easy: "Now that you can SEE the trick, you're the boss of your screen — not the app! 💪",
        medium: 'Spotting the design is a superpower: once you see it, YOU decide when to stop.',
        hard: "Awareness flips the power. The feed is engineered for engagement — but you can engineer your own stopping point.",
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'cool',
      text: {
        easy: "Now you know TikTok's secret: the smart 'brain' that learns what you like is the WHOLE business — and it's built to keep you watching. 🎵",
        medium:
          "You cracked it: TikTok's real product is an algorithm that learns your taste, keeps you watching, and sells ads. The smarter it gets, the harder it is to copy.",
        hard:
          "You've decoded TikTok: the algorithm is the product, the moat, and the money. And you learned the most important part — apps are designed to keep you scrolling, on purpose.",
      },
      bonusTip: {
        easy: "Tip: when an app feels SO fun you can't stop, that's the design working. Set a timer and YOU pick when to stop. ⏱️",
        medium: "Pro tip: feeling 'I can't stop' is the feed doing its job. A timer puts you back in charge. ⏱️",
        hard: "Edge: the best defense against attention-engineering is a pre-decided stopping rule — a timer or a set number of videos. Decide before you scroll.",
      },
    },

    // ─── Real-world mission: notice the algorithm + set a timer ─────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'tiktok',
        emoji: '🕵️',
        title: {
          easy: 'Be an App Detective',
          medium: 'Catch the algorithm — and practice stopping',
          hard: 'Observe a recommendation feed and design your own stopping rule',
        },
        pitch: {
          easy: "Spot how an app seems to 'know' what you like — then practice being the boss by setting a timer and stopping when it dings!",
          medium:
            "With a grown-up, notice how an app learns your taste, then practice choosing when to stop using a timer.",
          hard:
            'With a grown-up, observe how a feed personalizes to you, then pre-set a stopping rule (timer) and reflect on how it felt to stop.',
        },
        steps: [
          {
            emoji: '👀',
            text: {
              easy: 'With a grown-up, open an app you use (videos, games, or photos) and watch a few minutes.',
              medium: 'With a grown-up, open an app you use and notice what it shows you.',
              hard: 'With a grown-up, open a feed-based app and observe what it surfaces for you.',
            },
          },
          {
            emoji: '🧠',
            text: {
              easy: 'Notice: does it seem to KNOW what you like? Did it show more of something after you watched it?',
              medium: 'Look for the algorithm: did the app show MORE of something right after you liked or watched it?',
              hard: 'Identify personalization: does the feed adapt toward content similar to what you engaged with?',
            },
          },
          {
            emoji: '⏱️',
            text: {
              easy: 'Before you start next time, set a timer (like 10 minutes). When it dings — you stop!',
              medium: 'Set a timer before your next session. When it goes off, practice stopping on purpose.',
              hard: 'Pre-commit to a stopping rule (e.g. a 10-minute timer) before opening the app, then honor it.',
            },
          },
          {
            emoji: '💪',
            text: {
              easy: 'High-five yourself for being the BOSS of your own time!',
              medium: 'Notice how it felt to stop when YOU decided — not the app.',
              hard: 'Reflect on the difference between the app deciding and you deciding when to stop.',
            },
          },
        ],
        reflection: [
          {
            key: 'knew-me',
            prompt: {
              easy: 'What did the app show you MORE of after you watched something?',
              medium: 'What clue showed you the app was learning what you like?',
              hard: 'What evidence of personalization did you observe?',
            },
            type: 'text',
          },
          {
            key: 'timer',
            prompt: {
              easy: 'When the timer dinged, how easy or hard was it to stop?',
              medium: 'How did it feel to stop when the timer went off?',
              hard: 'How difficult was it to honor your pre-set stopping rule?',
            },
            type: 'text',
            placeholder: 'easy / hard / in the middle',
          },
          {
            key: 'insight',
            prompt: {
              easy: 'Now that you know apps WANT you to keep watching, what will you do differently?',
              medium: 'What is one way you can stay the boss of your screen time?',
              hard: 'What strategy will you use to manage attention-engineered apps in the future?',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is about NOTICING, not blaming any app. Apps are designed to keep us watching — that's normal. The goal is to help your child see it and practice stopping. Do it together!",
          medium:
            "Observational only — no accounts or sign-ups needed. The aim is media literacy: helping your child recognize that feeds are engineered for engagement and practice self-directed stopping. A shared, judgment-free activity works best.",
          hard:
            "Purely observational. The learning goal is digital literacy — recognizing engagement design and building a healthy stopping habit. Frame it as a skill, not a punishment, and model it yourself.",
        },
      },
    },
  ],
};

export default lesson;
