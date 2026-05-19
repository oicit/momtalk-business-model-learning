/**
 * Pet Shop — service business + repeat customers.
 *
 * Why these concepts? Pet care teaches kids that a business can be a
 * *service* (selling your time + reliability) rather than just a product.
 * Repeat customers are the magic — one good owner = months of income.
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'pet-shop',
  themeKey: 'pet-shop',
  emoji: '🐾',
  title: 'Pet Care Pro',
  subtitle: {
    easy: "Let's learn how pet care can be a business!",
    medium: 'Discover how to turn pet care into a real little business.',
    hard: 'Explore service economics, trust pricing, and recurring revenue through pet care.',
  },

  beats: [
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy: "Lots of people need help with their pets. That's where YOU come in!",
        medium:
          'Pet care is a service business — you sell your time, your reliability, and your love for animals.',
        hard:
          'Service businesses scale on trust and consistency. Pet care is a perfect first venture: low capital, real demand, and built-in repeat customers.',
      },
    },

    {
      kind: 'concept-cards',
      heading: 'The Pet-Care Business Brain',
      cards: [
        {
          emoji: '⏰',
          title: 'Selling Your Time',
          desc: {
            easy:
              "A service business sells your TIME. You don't make something — you DO something for someone else!",
            medium:
              "When you walk a dog, you trade your time for money. That's a service business. No inventory, no leftovers!",
            hard:
              "Service businesses sell skilled labor + reliability. Margins depend on hourly rate × utilization, not unit economics.",
          },
          color: '#EDE9FE',
        },
        {
          emoji: '🔁',
          title: 'Repeat Customers',
          desc: {
            easy: 'The same dog needs walking EVERY day! One happy customer = lots of work.',
            medium:
              'Pets need care daily. One satisfied owner can give you steady income for months — way better than one-time sales!',
            hard:
              'Recurring revenue is the gold standard in business. Pet care has natural recurrence, which is why subscription models are everywhere.',
          },
          color: '#D7F0E4',
        },
        {
          emoji: '🤝',
          title: 'Trust Is Everything',
          desc: {
            easy: "People won't let just anyone watch their pet. You earn TRUST by being careful and kind!",
            medium:
              'Owners trust you with a family member. Trust is built one good walk, one careful feeding at a time — and once you have it, you charge more.',
            hard:
              'Trust commands a price premium. Reputation is moat — verified-careful caregivers earn 2-3× the rate of anonymous ones.',
          },
          color: '#FFE7C2',
        },
        {
          emoji: '💸',
          title: 'Cost of Caring',
          desc: {
            easy: 'Treats, toys, baggies — even helping with one pet costs SOMETHING. Plan ahead!',
            medium:
              "Even a tiny business has costs: poop bags, treats, leashes. Subtract them from what you earn — that's profit.",
            hard:
              "Service businesses have lower COGS than product businesses, but consumables (bags, treats), insurance, and travel add up. Track them.",
          },
          color: '#FFD2E2',
        },
      ],
    },

    {
      kind: 'quiz',
      heading: '🏆 Quick Quiz',
      subheading: 'Test your pet-business brain!',
      xpReward: 100,
      skillScores: {
        Service: 95,
        Trust: 90,
        Operations: 80,
        Pricing: 75,
      },
      questions: [
        {
          q: 'What does a service business mainly sell?',
          options: [
            'Stuff in boxes',
            'Your time and skill',
            'Plants and flowers',
            'Coins and stamps',
          ],
          correct: 1,
        },
        {
          q: "Why are repeat customers SO important for a pet sitter?",
          options: [
            'They give bigger tips',
            'Pets need care every day, so one happy owner = steady work',
            "It's easier to talk to the same people",
            "They don't ask questions",
          ],
          correct: 1,
        },
        {
          q: 'What helps you charge MORE for pet care?',
          options: [
            'A flashy logo',
            'Being trusted and careful — owners pay more for someone they trust',
            'A loud voice',
            'Doing it really fast',
          ],
          correct: 1,
        },
        {
          q: "What's a real cost you have even when you don't have a customer yet?",
          options: [
            'Nothing — there are no costs without customers',
            'Supplies like baggies and treats',
            'Pet shop rent (kids usually have none)',
            'Sleep',
          ],
          correct: 1,
        },
      ],
    },

    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "You're ready to help pets and make money — that's a real business!",
        medium:
          "Nice! You now understand the magic of a service business: trade your time and reliability for steady income.",
        hard:
          "You've grasped the fundamentals of a service business: low capex, trust as moat, recurring revenue. The same model scales to dog daycares, vet clinics, and Rover.",
      },
      bonusTip: {
        easy: 'The dog-walking app Rover is worth over $1 BILLION — and it started with one person walking one dog!',
        medium:
          "Rover started in 2011 as a way to connect dog owners with sitters. Today it's a $1B+ public company. Repeat customers are the heart of it.",
        hard:
          'Rover (IPO 2021) shows the path: trust-graded marketplace + recurring transactions + network effects. Their key metric? Bookings per active sitter.',
      },
    },

    {
      kind: 'real-world-mission',
      mission: {
        id: 'pet-shop',
        emoji: '🐾',
        title: {
          easy: 'Be a Pet Helper this week!',
          medium: 'Offer real pet care to a friend or family',
          hard: 'Run a 1-week pet-care service trial',
        },
        pitch: {
          easy:
            'Find a real pet to help with (walk, feed, or play) and earn your first service dollars!',
          medium:
            'Set up a small pet-care service for a friend, neighbor, or family. Charge a fair price and do an amazing job.',
          hard:
            'Acquire 1 customer, define a service offering with pricing, deliver consistently for 5+ days, and collect feedback.',
        },
        steps: [
          {
            emoji: '🗣️',
            text: {
              easy: 'Ask a grown-up if you can help with someone\'s pet.',
              medium: 'Find a pet owner who needs help and pitch your service.',
              hard: 'Identify a customer; pitch your offering with clear scope and price.',
            },
          },
          {
            emoji: '📝',
            text: {
              easy: 'Write down what you\'ll do — walk, feed, play?',
              medium: 'Define your service: what you\'ll do, when, and for how much.',
              hard: 'Document SLA: tasks, schedule, rate, cancellation policy.',
            },
          },
          {
            emoji: '🦴',
            text: {
              easy: 'Be SUPER nice and careful with the pet.',
              medium: 'Show up on time, follow the owner\'s instructions, treat the pet gently.',
              hard: 'Deliver consistently. Take notes after each session.',
            },
          },
          {
            emoji: '💬',
            text: {
              easy: 'At the end, ask if you did a good job.',
              medium: 'Ask for feedback. What did they love? What could be better?',
              hard: 'Gather written feedback (NPS-style if you\'re brave) for your reference.',
            },
          },
          {
            emoji: '🪙',
            text: {
              easy: 'Save half of what you earn for a treat or your savings!',
              medium: 'Count what you earned. Save some, plan how to use the rest.',
              hard: 'Compute hourly rate earned. Plan reinvestment vs. profit-take.',
            },
          },
        ],
        reflection: [
          {
            key: 'pet',
            prompt: {
              easy: 'What kind of pet did you help with?',
              medium: 'What kind of pet, and what did you do for them?',
              hard: 'Pet + scope of service',
            },
            type: 'text',
            placeholder: 'e.g. small dog - 20-min walk',
          },
          {
            key: 'hours',
            prompt: {
              easy: 'How many times did you help?',
              medium: 'How many sessions did you do total?',
              hard: 'Total billable sessions',
            },
            type: 'number',
            suffix: 'times',
            placeholder: '3',
          },
          {
            key: 'earned',
            prompt: {
              easy: 'How much money did you earn?',
              medium: 'Total earned',
              hard: 'Gross revenue earned',
            },
            type: 'number',
            suffix: '$',
            placeholder: '10',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What surprised you about helping?',
              medium: 'What was hardest? What was easiest?',
              hard: 'Key learning + what you\'d change for v2',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: 'Please only let your kid help with pets you know well, in places you can supervise.',
          medium:
            'Match your kid with a pet/owner you know. Stay nearby for first session. Confirm allergies & dog temperament.',
          hard:
            'Verify owner consent, pet health, and that the kid is age-appropriately matched to the pet. Stay reachable.',
        },
        printables: {
          trackers: [
            {
              title: 'Pet Care Log',
              note: 'Fill in each time you help. Tape it to the fridge!',
              columns: ['Date', 'Pet name', 'What I did', 'How it went', 'Earned $'],
              rows: 14,
            },
          ],
          worksheets: [
            {
              title: 'Plan My Pet-Care Service',
              blocks: [
                {
                  label: '1. Whose pet will I help?',
                  lines: 2,
                },
                {
                  label: '2. What will I do for them?',
                  hint: 'walk, feed, play, brush, water plants while away…',
                  lines: 4,
                },
                {
                  label: '3. How often?',
                  hint: 'Once? Every day? Just weekends?',
                  lines: 2,
                },
                {
                  label: '4. How much will I charge?',
                  hint: 'Pick a price that\'s fair to you AND the owner.',
                  equation: '$ _______ per session  ×  _______ sessions  =  $ _______',
                },
                {
                  label: '5. What costs do I have?',
                  hint: 'baggies, treats, shoes for walks…',
                  lines: 3,
                  suffix: '$',
                },
                {
                  label: '6. My promise to the owner',
                  hint: 'On time, careful, fun for the pet.',
                  lines: 3,
                },
              ],
            },
          ],
          signs: [
            {
              emoji: '🐾',
              headline: 'PET CARE',
              subline: 'Reliable. Kind. Local.',
              pricePlaceholder: '$_____ / session',
              accent: '#7C5CFC',
            },
          ],
          checklists: [
            {
              title: 'Pet-Care Go Bag',
              items: [
                'Comfy shoes (for walks)',
                'Watch or phone to track time',
                'Poop bags (for dogs)',
                'A few treats (ask owner first)',
                'Notebook + pen for notes',
                'Phone numbers for owner + parent',
                'A favorite toy you can bring',
                'Water for both of you',
              ],
              note: "Always tell a grown-up where you'll be and when you'll be back.",
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
