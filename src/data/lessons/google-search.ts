/**
 * Google: The Free-Search Secret — "If it's free, you might be the product."
 *
 * Goal: take a kid from "Google search is free, so how is Google one of the
 * richest companies on Earth?" → to the surprise: YOU don't pay, ADVERTISERS
 * do. Companies pay Google to show their links/ads when you search. Your
 * attention is what's being sold. Gently teaches the big idea "if it's free,
 * you might be the product."
 *
 * Beat order:
 *   intro → think-deeper (how can free make money?) → concept-cards
 *   (Free Tool / Advertisers / Auction / You Are The Product) → quiz →
 *   connect (YouTube, free games, free apps) → outro →
 *   real-world-mission (spot the "Ad / Sponsored" labels, with a grown-up).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'google-search',
  themeKey: 'company',
  emoji: '🔍',
  title: 'Google',
  subtitle: {
    easy: "Google search is FREE — so how is it one of the richest companies ever?",
    medium:
      "You never pay Google a single penny to search. So where do the billions come from? The answer is hiding in plain sight.",
    hard:
      "A teardown of Google's business model: search as a free attention-magnet, advertising as the cash engine, and the user as the product being sold to advertisers.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'thinking',
      text: {
        easy:
          "When you have a question, you Google it — and it's FREE. You never pay! But Google is one of the RICHEST companies on the whole planet. How can something free make SO much money? Let's find the hidden trick. 🔍",
        medium:
          "Billions of people use Google search every single day, and not one of them pays a penny. Yet Google makes more money than almost any company in history. Today you'll find out who's REALLY paying — because it isn't you.",
        hard:
          "Google gives its core product away for free to billions of users, yet generates enormous profit. Today we decode the model: free search is the magnet, advertising is the engine, and the surprising answer to 'who pays?' changes how you'll see every free app forever.",
      },
    },

    // ─── Think-deeper: how can free make money? ────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 How Can FREE Make Money?',
      intro: {
        easy: "Let's puzzle this out together.",
        medium: "Let's reason through how 'free for you' turns into billions.",
        hard: 'First-principles look at monetizing a free, mass-attention product.',
      },
      layers: [
        {
          question: {
            easy: "If Google doesn't charge YOU, who could be paying them?",
            medium: "If users pay nothing, where could the money possibly come from?",
            hard: "If the end-user contributes zero direct revenue, who is the actual paying customer?",
          },
          reveal: {
            easy:
              "Someone ELSE pays! Stores and companies pay Google to show THEIR website near the top when you search. They want YOU to click on them.",
            medium:
              "Businesses do. When you search 'new sneakers,' shoe companies pay Google to put their link at the top. They're paying to get in front of you at the exact moment you're looking.",
            hard:
              "Advertisers. Google sells the right to appear at the top of relevant searches. The product isn't sold to the searcher — it's sold to companies who want that searcher's attention.",
          },
        },
        {
          question: {
            easy: "Why would a company pay just to show up first?",
            medium: "Why is being at the TOP of your search worth real money?",
            hard: "Why does prime placement against high-intent searches command premium pricing?",
          },
          reveal: {
            easy:
              "Because if you're searching for sneakers, you might actually buy some! Being first means YOU click them instead of someone else. That click can turn into a sale.",
            medium:
              "Because you searched for it — you already WANT it. Showing a sneaker ad to someone searching 'sneakers' is way more powerful than showing it to a random person. That's the most valuable kind of attention there is.",
            hard:
              "Search captures intent. A user searching 'sneakers' is far closer to buying than a random viewer, so that placement converts at high rates. Advertisers bid up high-intent moments precisely because they pay off.",
          },
        },
        {
          question: {
            easy: "So in the free game called Google search… what is being SOLD?",
            medium: "If you don't pay, then what is Google actually selling?",
            hard: "What is the true unit of inventory Google sells?",
          },
          reveal: {
            easy:
              "YOUR attention! Google gives you free search, and in return it shows you ads. Your eyes and your clicks are the thing being sold to companies. 👀",
            medium:
              "Your attention. Google gathers billions of people by being free and helpful, then sells those people's attention to advertisers. You're not the customer — you're what's being offered TO the customer.",
            hard:
              "User attention and intent data. The free product aggregates an enormous, engaged audience; that audience's attention is the inventory sold to advertisers. The famous rule: if you're not paying, you may be the product.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'How Google REALLY Makes Money',
      subheading: 'Search is the bait. Ads are the prize.',
      cards: [
        {
          emoji: '🔍',
          title: 'The Free Tool',
          desc: {
            easy: "Search is free so that EVERYONE uses it. The more people use Google, the more valuable it becomes.",
            medium:
              "Free search is the magnet. By giving away a super-useful tool, Google pulls in billions of users — and a giant crowd is exactly what advertisers want.",
            hard:
              "The free product maximizes reach and engagement. Scale is the asset: billions of daily searches create the enormous audience that the rest of the model monetizes.",
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🏪',
          title: 'The Advertisers',
          desc: {
            easy: "Companies pay Google to show their links and ads when you search. THEY are the ones paying — not you!",
            medium:
              "The real customers are businesses. They pay Google to place their ads next to your search results, hoping you'll click and buy. That payment is where the billions come from.",
            hard:
              "Advertisers are the paying customers. They purchase placement against relevant queries; the bulk of Google's revenue is this advertising spend, not user fees.",
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🔨',
          title: 'The Auction',
          desc: {
            easy: "Lots of companies want the top spot. So they bid against each other — whoever offers the most gets shown first.",
            medium:
              "When several businesses want the same search, Google runs a tiny auction in a blink. The advertiser willing to pay the most (and that fits best) wins the top ad spot.",
            hard:
              "Each ad slot is sold via a real-time auction that resolves in milliseconds. Bids plus relevance determine placement — a self-running marketplace pricing attention continuously, at massive scale.",
          },
          color: '#FFE5EC',
        },
        {
          emoji: '👀',
          title: 'You Are The Product',
          desc: {
            easy: "Here's the big idea: if something is FREE, sometimes YOU are the product. Your attention is what's being sold.",
            medium:
              "The surprising truth: you're not the customer, you're the product. Free apps often make money by selling YOUR attention to advertisers. 'If it's free, you might be the product.'",
            hard:
              "When a product is free, the monetized asset is usually the user — their attention, and sometimes their data. Recognizing 'free means I'm the product' is a key media-literacy lens for the rest of your life.",
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Free-Search Check',
      questions: [
        {
          q: 'You use Google search for free. So who actually pays Google?',
          options: [
            'Companies that pay to show their ads when you search',
            'You pay a little bit every time you search',
            'Nobody — Google does it just to be nice',
          ],
          correct: 0,
        },
        {
          q: 'In the free game of Google search, what is really being SOLD?',
          options: [
            'Your attention — to companies that want you to see their ads',
            'The internet itself',
            'A new phone',
          ],
          correct: 0,
        },
        {
          q: 'What\'s the big idea to remember about free apps?',
          options: [
            'If it\'s free, you might be the product',
            'Free things are always bad',
            'Free always means no ads',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Foundations: 100 },
    },

    // ─── Connect: same trick, other logos ──────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Same Trick, Other Free Stuff',
      concept: {
        easy: "Google isn't the only one. LOTS of free things make money by showing you ads.",
        medium:
          "The 'free for you, paid by advertisers' trick powers tons of things you use every day. Once you see it, you'll spot it everywhere.",
        hard:
          "The attention-advertising model generalizes across most free consumer products: the user pays with attention, advertisers pay with money.",
      },
      examples: [
        {
          emoji: '📺',
          who: 'YouTube',
          story: {
            easy: "YouTube videos are free — but ads pop up before and during them. Companies pay for those ads. Same trick as Google!",
            medium:
              "YouTube (owned by Google!) lets you watch videos for free, then sells the ad breaks to companies. You watch for free; advertisers pay for your eyeballs.",
            hard:
              "YouTube, a Google property, monetizes free video through pre-roll and mid-roll ads. Identical logic: free content aggregates attention, attention is sold to advertisers.",
          },
        },
        {
          emoji: '🎮',
          who: 'Free Games & Apps',
          story: {
            easy: "Lots of free phone games show ads while you play. The game is free because the ads pay for it.",
            medium:
              "Many 'free' games make their money from the ads they show you (and sometimes things you can buy inside). If you didn't pay for the game, the ads are paying for it.",
            hard:
              "Ad-supported free-to-play apps monetize session time via in-app advertising (often plus in-app purchases). The free price tag is funded by selling player attention.",
          },
        },
        {
          emoji: '📱',
          who: 'Free Social Apps',
          story: {
            easy: "Apps where you scroll and watch posts are free too — and they show you ads in between. Free for you, paid by companies.",
            medium:
              "Social apps are free to use because they sell ad space inside your feed. You scroll for free; advertisers pay to slip their ads between the posts.",
            hard:
              "Feed-based social platforms interleave paid ads with organic content, monetizing engagement time. Same model: free access, advertiser-funded, attention as inventory.",
          },
        },
      ],
      kicker: {
        easy: "From now on, when something's free, ask: 'Then how do they make money?' Usually the answer is ADS. 👀",
        medium:
          "Next time you use something free, ask yourself: who's really paying, and what are they paying for? The answer is almost always your attention.",
        hard:
          "The habit of asking 'if I'm not paying, what's being sold?' is one of the most useful media-literacy reflexes you can build.",
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You cracked it! Google search is free for YOU because companies pay to show ads. You're not the customer — your attention is what's being sold. 🔍",
        medium:
          "You've decoded Google: a free tool that gathers billions of people, then sells their attention to advertisers. Now you can see the hidden ads everywhere.",
        hard:
          "You now understand the free-search/advertising model and the 'user as product' idea. This framework decodes YouTube, free games, social apps — most of the free internet runs on it.",
      },
      bonusTip: {
        easy: "Tip: free is great — just remember to notice the ADS. They're how it stays free. 👀",
        medium: "Pro tip: free isn't bad — but knowing WHO pays (and that it's your attention) makes you a smarter user.",
        hard: "Edge: media literacy starts with 'who pays and what's the inventory?' Spotting the ad-funded model early makes you a far more thoughtful consumer of free products.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'google-search',
        emoji: '🔍',
        title: {
          easy: 'Ad Spotter: Count the Ads',
          medium: 'Spot the "Ad / Sponsored" labels and count them',
          hard: 'Conduct an ad-spotting field observation',
        },
        pitch: {
          easy: "With a grown-up, look at a search or a free app and hunt for the little words 'Ad' or 'Sponsored.' Count how many ads you see in a few minutes!",
          medium:
            "With a parent, do a real search (or open a free app) and find every 'Ad' or 'Sponsored' label. Count how many ads show up in a few minutes — you'll be surprised.",
          hard:
            "Field exercise (with a grown-up): observe a real search results page or a free app and tally all 'Ad'/'Sponsored'-labeled placements over a few minutes.",
        },
        steps: [
          {
            emoji: '👨‍👩‍👧',
            text: {
              easy: 'Sit with a grown-up and pick something to search for, like "cool sneakers" or "best pizza."',
              medium: 'With a parent, choose a search like a product or store name and type it into Google together.',
              hard: 'With a grown-up, run a commercial search query (e.g. a product or brand) likely to surface ads.',
            },
          },
          {
            emoji: '🔍',
            text: {
              easy: 'Look at the top of the results. Find the tiny word "Ad" or "Sponsored."',
              medium: 'Scan the results page for small "Ad" or "Sponsored" labels — they\'re usually near the top.',
              hard: 'Identify each "Ad"/"Sponsored" tag and note where it sits relative to the organic results.',
            },
          },
          {
            emoji: '🔢',
            text: {
              easy: 'Count how many ads you can find. Put a tally mark for each one!',
              medium: 'Tally every ad you spot on the page (and scroll down — there are often more).',
              hard: 'Record a running tally of ad placements; scroll to capture below-the-fold ads too.',
            },
          },
          {
            emoji: '⏱️',
            text: {
              easy: 'Keep looking for a few minutes — try a free app too. How many ads in total?',
              medium: 'Spend a few minutes (try a free app as well) and add up the total number of ads you found.',
              hard: 'Over ~5 minutes, expand to a free app and sum total ad impressions observed.',
            },
          },
        ],
        reflection: [
          {
            key: 'ad-count',
            prompt: {
              easy: 'How many ads did you count in a few minutes?',
              medium: 'Total number of "Ad"/"Sponsored" placements you found?',
              hard: 'Total ad impressions tallied over the observation window?',
            },
            type: 'number',
            suffix: 'ads',
          },
          {
            key: 'where',
            prompt: {
              easy: 'Where were the ads hiding? (top? sides? in a free app?)',
              medium: 'Where did the ads show up — top of search, in the app feed, somewhere else?',
              hard: 'Where were ads placed (above-fold, inline, app feed) and how were they labeled?',
            },
            type: 'text',
            placeholder: 'at the very top of the search…',
          },
          {
            key: 'insight',
            prompt: {
              easy: 'Now that you can see the ads, what surprised you?',
              medium: 'What surprised you most about how many ads are around you?',
              hard: 'Biggest takeaway about the volume or placement of advertising you noticed?',
            },
            type: 'longtext',
            placeholder: 'I never noticed before that…',
          },
        ],
        parentNote: {
          easy: "Do this together on a grown-up's device. It's observational only — just spotting and counting ads, no clicking or buying. A great chance to chat about why everything 'free' shows ads.",
          medium:
            "Use a parent's device and supervise. The goal is purely to observe and count ad labels — no clicking ads, no purchases. A nice opening to talk about 'free' apps and attention.",
          hard:
            "Supervised, observation-only exercise on an adult's device. Do not click ads or make purchases. Use it as a springboard for an age-appropriate chat about attention, advertising, and media literacy.",
        },
        printables: {
          trackers: [
            {
              title: 'Ad Spotter Tally Sheet',
              note: 'One row per place you looked. Tally every "Ad" or "Sponsored" you find!',
              columns: ['Where I looked (search / app)', 'What I searched for', 'Ads I counted', 'Where the ads were'],
              rows: 5,
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
