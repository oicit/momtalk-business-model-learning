/**
 * YouTube Creator — attention economy basics.
 *
 * The core insight: when something is free for the viewer, the viewer's
 * attention IS the product. Ads, sponsorships, and merch are the three
 * routes to turning that attention into money.
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'youtube-creator',
  themeKey: 'youtube-creator',
  emoji: '🎬',
  title: 'Make a Video Channel',
  subtitle: {
    easy: "Let's learn how YouTubers make their videos AND their money!",
    medium: 'How do creators turn videos into a real job? Let\'s find out.',
    hard: 'Examine the creator economy: attention as inventory, three revenue paths, and the role of niche.',
  },

  beats: [
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "When you watch a YouTube video, you don't pay money — but the creator can still make a LOT! How?",
        medium:
          'YouTube videos look free, but creators earn real money. Today we unpack exactly how that works.',
        hard:
          "Creator economics: free at the point of consumption, monetized via attention. Let's break down the three revenue streams and what drives them.",
      },
    },

    {
      kind: 'concept-cards',
      heading: 'The Creator Business Brain',
      cards: [
        {
          emoji: '👀',
          title: 'Attention Is the Product',
          desc: {
            easy: "You don't pay to watch — but your EYES are super valuable! Companies pay to show you ads.",
            medium:
              'When something is free for you, YOU might be the product. Your attention is sold to advertisers — that\'s how ads work.',
            hard:
              "In ad-supported media, attention is inventory. Creators are the supply; advertisers are the demand. CPM = $ per 1,000 views.",
          },
          color: '#FFD9E6',
        },
        {
          emoji: '🎯',
          title: 'Niche Beats Broad',
          desc: {
            easy: "Pick ONE thing you LOVE! Kids who like dinosaurs find dinosaur channels — and those creators get rich!",
            medium:
              'Better to have 1,000 super-fans of slime than 1 million bored viewers. A specific niche wins.',
            hard:
              "Niche channels have higher engagement, higher CPM, and more sponsorship opportunities. Specificity is leverage.",
          },
          color: '#E4DCFF',
        },
        {
          emoji: '📅',
          title: 'Consistency = Trust',
          desc: {
            easy: 'Post videos OFTEN. If you only post once, no one will subscribe!',
            medium:
              'Viewers subscribe when they expect more videos. Posting weekly (or daily) builds an audience.',
            hard:
              "The algorithm rewards consistency. Both retention and recommendation systems prefer creators who upload predictably.",
          },
          color: '#D6EEFB',
        },
        {
          emoji: '💰',
          title: 'Three Ways to Earn',
          desc: {
            easy: '1) Ads, 2) Sponsors paying you to mention their product, 3) Selling merch like t-shirts!',
            medium:
              'Creators make money 3 ways: ad revenue (from YouTube), sponsorships (brands pay you directly), and merch (selling your own products).',
            hard:
              "Three revenue lines: programmatic ads (CPM-based, ~$2-$10), direct sponsorships ($500-$50k+ per integration), and owned-product (merch, courses, memberships).",
          },
          color: '#FFE6A8',
        },
        {
          emoji: '🔥',
          title: 'The First 8 Seconds',
          desc: {
            easy: 'Hook your viewer FAST! The first few seconds decide if they keep watching.',
            medium:
              'Most viewers leave in the first 10 seconds. Strong opening = more watch time = more views = more money.',
            hard:
              "Audience retention compounds: high first-30s retention boosts session recommendations, which lifts impressions, which lifts revenue. The hook is leverage.",
          },
          color: '#FFE7C2',
        },
      ],
    },

    {
      kind: 'quiz',
      heading: '🏆 Creator Quiz',
      subheading: 'Show what you know about the video business!',
      xpReward: 100,
      skillScores: {
        Marketing: 90,
        Audience: 95,
        Monetization: 85,
        Branding: 80,
      },
      questions: [
        {
          q: 'When a YouTube video is "free" for you to watch, who is paying the creator?',
          options: [
            'The government',
            "Advertisers — they want to reach the viewer's attention",
            'The video itself, by magic',
            'No one — creators are volunteers',
          ],
          correct: 1,
        },
        {
          q: 'Why do creators pick a "niche" instead of trying to please everyone?',
          options: [
            'Niches need fewer cameras',
            'Specific fans engage more, and brands pay more for focused audiences',
            'Niches are trendy this year',
            "Niches don't need consistency",
          ],
          correct: 1,
        },
        {
          q: 'What is a "sponsorship" in creator-talk?',
          options: [
            'A free t-shirt',
            'When a brand pays the creator to mention their product',
            'A subscriber',
            'An algorithm',
          ],
          correct: 1,
        },
        {
          q: 'Why is the START of a video SO important?',
          options: [
            'It looks pretty',
            'Most viewers leave in the first 10 seconds — a strong hook keeps them',
            'YouTube reads it out loud',
            "It's where the credits go",
          ],
          correct: 1,
        },
      ],
    },

    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: 'You know the YouTube secret now! Niche + consistency + a good start = success.',
        medium:
          "Awesome — you understand attention economics now. Same playbook works for podcasts, TikTok, and newsletters.",
        hard:
          'You\'ve mapped the creator economy: attention as inventory, niche as moat, and three monetization paths that compound differently.',
      },
      bonusTip: {
        easy: 'The most-watched YouTuber ever (MrBeast) started by uploading boring math videos to himself in middle school — for YEARS — before going viral!',
        medium:
          "MrBeast spent 5+ years posting videos before his first viral hit. Consistency before quality. Quality before scale.",
        hard:
          "MrBeast's 'overnight success' was a 7-year ramp. The lesson: optionality compounds. Show up enough times and one upload eventually catches.",
      },
    },

    {
      kind: 'real-world-mission',
      mission: {
        id: 'youtube-creator',
        emoji: '🎬',
        title: {
          easy: 'Make a 1-Minute Video!',
          medium: 'Make and share a 1-minute video this week',
          hard: 'Produce a 1-minute MVP video and gather feedback',
        },
        pitch: {
          easy:
            "Pick something you love and make a SHORT video about it. Share it with your family and see what they think!",
          medium:
            'Make one short video this week. Don\'t overthink it. Get something out and learn from real feedback.',
          hard:
            'Ship a 1-minute video on a topic you can defend. Track 3 metrics: viewers, completion rate, and one piece of structured feedback.',
        },
        steps: [
          {
            emoji: '💡',
            text: {
              easy: 'Pick ONE thing you love and could teach about.',
              medium: 'Pick a niche topic you actually know about (not what you think is popular).',
              hard: 'Pick a niche where you have unfair knowledge or perspective.',
            },
          },
          {
            emoji: '📝',
            text: {
              easy: 'Write your top 3 things to say.',
              medium: 'Outline your video: hook (8 sec), 3 main points, ending.',
              hard: 'Storyboard: hook, value beats, payoff/CTA. Time-box each block.',
            },
          },
          {
            emoji: '🎥',
            text: {
              easy: 'Record it with a phone (with a grown-up helping).',
              medium: 'Record. Good audio matters more than great video — speak clearly.',
              hard: "Capture clean audio and stable framing. Don't perfect, just ship.",
            },
          },
          {
            emoji: '✂️',
            text: {
              easy: 'Watch it back and decide if you want to make it again.',
              medium: 'Trim the boring parts. 1 minute or less.',
              hard: 'Cut to the 8-second hook test: would YOU keep watching at 0:08?',
            },
          },
          {
            emoji: '👨‍👩‍👧',
            text: {
              easy: 'Show it to 3 family members and ask what they thought!',
              medium: 'Share with 3-5 people. Ask: what kept you watching? Where did you lose interest?',
              hard: 'Gather structured feedback from 5+ viewers. Identify the cut that would make v2 stronger.',
            },
          },
        ],
        reflection: [
          {
            key: 'topic',
            prompt: {
              easy: 'What was your video about?',
              medium: 'What was your topic, in one sentence?',
              hard: 'Niche / topic positioning',
            },
            type: 'text',
            placeholder: 'e.g. how to draw a dragon',
          },
          {
            key: 'viewers',
            prompt: {
              easy: 'How many people watched it?',
              medium: 'How many people saw it?',
              hard: 'Total viewers reached',
            },
            type: 'number',
            suffix: 'people',
            placeholder: '5',
          },
          {
            key: 'hook',
            prompt: {
              easy: 'Did people watch ALL of it?',
              medium: 'Did most viewers make it to the end?',
              hard: 'Estimated completion rate + hook quality (1-5)',
            },
            type: 'text',
            placeholder: 'Yes/No / numbers',
          },
          {
            key: 'next',
            prompt: {
              easy: 'What would you make next time?',
              medium: "What would you change for video #2?",
              hard: 'Top 2 changes for v2 based on viewer feedback',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "Please don't post to public platforms. Share within family / trusted circle only.",
          medium:
            'Keep this private — share with family only, never public. No identifying details (school name, address, last name).',
          hard:
            'Strict no-public-posting rule for under-13. Treat this as a private MVP, not a launch.',
        },
        printables: {
          worksheets: [
            {
              title: 'Plan My Video',
              blocks: [
                {
                  label: '1. Topic',
                  hint: 'One sentence: what is this video about?',
                  lines: 2,
                },
                {
                  label: '2. My niche / who is this for?',
                  hint: 'kids who love dinosaurs? new piano players? bored siblings?',
                  lines: 2,
                },
                {
                  label: '3. The 8-second HOOK',
                  hint: 'Write the exact words you\'ll say first.',
                  lines: 3,
                },
                {
                  label: '4. Three things to share',
                  hint: 'Keep them short and surprising.',
                  lines: 5,
                },
                {
                  label: '5. The ending',
                  hint: 'How will you end? Big fact? Question?',
                  lines: 2,
                },
                {
                  label: '6. Total time goal',
                  equation: '_______ seconds  (under 60!)',
                },
              ],
            },
            {
              title: 'After-Video Feedback Sheet',
              blocks: [
                { label: '1. What kept you watching?', lines: 3 },
                { label: '2. Where did you almost stop watching?', lines: 3 },
                { label: '3. One thing I should change next time', lines: 3 },
                { label: '4. Would you watch another video like this?', lines: 1 },
              ],
            },
          ],
          trackers: [
            {
              title: 'Viewer Reactions',
              note: 'Ask 5 people. Write what they said.',
              columns: ['Viewer', 'Watched to end?', 'Favorite part', 'Suggestion'],
              rows: 8,
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
