/**
 * Real Estate — "Rent It or Own It?"
 *
 * Real estate = land and the buildings on it: homes, shops, apartments.
 * Kids learn the two big ways people get a place to live or work:
 *   • RENT — pay someone a little every month to USE their place.
 *   • OWN  — BUY the place, usually with a MORTGAGE (a big loan you pay
 *            back a little each month for many years).
 * Over time a home you own can grow in value and you stop paying rent —
 * but owning also costs money to fix and keep up. There's a tradeoff.
 *
 * Beat order:
 *   intro → think-deeper (rent or own?) → concept-cards (real estate,
 *   rent, own, mortgage) → calc-challenge (200⭐ home, 20⭐/yr × 10 yrs) →
 *   connect (landlords, builders, your own family) → quiz → outro →
 *   real-world-mission (spot who OWNS vs RENTS around you).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'real-estate',
  themeKey: 'money',
  emoji: '🏠',
  title: 'Real Estate',
  subtitle: {
    easy: 'Land and buildings! Do you RENT a place or OWN it?',
    medium: 'Homes and shops are real estate. Learn renting, owning, and what a mortgage is.',
    hard: 'Real estate, the rent-vs-own tradeoff, and how a mortgage lets you buy a big thing over many years — kid-sized.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Look around — every home, shop, and school sits on LAND with a BUILDING on it. That's called REAL ESTATE! Some people RENT their place (pay to use it) and some OWN it (it's theirs). Let's find out which is which! 🏠",
        medium:
          "Real estate means land and the buildings on it — houses, apartments, stores. People get a place two ways: they RENT it (pay each month to use it) or they OWN it (they bought it). Today we'll explore both!",
        hard:
          "Real estate is land plus the structures on it. There are two paths to using a property: renting (paying for the right to use someone else's) or owning (buying it, usually with a loan called a mortgage). Each has tradeoffs — let's dig in.",
      },
    },

    // ─── Think-deeper: rent or own? ─────────────────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Rent It or Own It?',
      intro: {
        easy: "Let's think about a place to live.",
        medium: "Let's reason through how people get a home.",
        hard: 'First-principles look at the rent-vs-own decision.',
      },
      layers: [
        {
          question: {
            easy: 'If you RENT a place, who owns it?',
            medium: 'When you rent an apartment, who actually owns it?',
            hard: 'In a rental, where does ownership of the property sit?',
          },
          reveal: {
            easy:
              "Someone ELSE owns it — they're called a landlord. You pay them a little money every month to live there. When you move out, the place stays theirs.",
            medium:
              "A landlord owns it. You pay rent every month for the right to live there. It's flexible — easy to move — but the money you pay doesn't make the home yours.",
            hard:
              "The landlord retains ownership. Rent buys you the right to use the space, not equity in it — flexible and lower-commitment, but it builds no ownership over time.",
          },
        },
        {
          question: {
            easy: "Homes cost a LOT. How can a family buy one?",
            medium: 'A house can cost more than a family has saved. How do they buy it?',
            hard: 'Houses cost more than most buyers hold in cash. How is purchase financed?',
          },
          reveal: {
            easy:
              "They borrow! A bank lends them most of the money. That big loan is called a MORTGAGE. They pay it back a little bit every month for many, many years. 🏦",
            medium:
              "Most families take a MORTGAGE — a big loan from a bank. They pay it back in small monthly pieces over many years (sometimes 30!). Slowly, more and more of the home becomes truly theirs.",
            hard:
              "With a mortgage: the bank fronts most of the price, and the buyer repays in monthly installments over many years. Each payment increases the owner's stake until the loan is fully paid off.",
          },
        },
        {
          question: {
            easy: 'So is OWNING always better than renting?',
            medium: "Owning sounds great — so is it always the better choice?",
            hard: 'Does ownership strictly dominate renting?',
          },
          reveal: {
            easy:
              "Not always! When you OWN, you stop paying rent and the home can grow in value — but YOU have to fix what breaks and pay to keep it nice. Both have good and tricky parts. It's a tradeoff! ⚖️",
            medium:
              "No — it's a tradeoff. Owners stop paying rent and may see the home grow in value, but they pay for repairs, taxes, and upkeep. Renters skip those costs but build no ownership. Different families pick differently.",
            hard:
              "No. Owning can build value and end rent payments, but adds maintenance, taxes, and upkeep costs plus less flexibility. Renting trades equity for flexibility and fewer surprise costs. The right choice depends on the situation.",
          },
        },
      ],
    },

    // ─── Concept cards ──────────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Big Words of Real Estate',
      subheading: 'Four ideas that explain almost everything about homes and shops.',
      cards: [
        {
          emoji: '🏠',
          title: 'Real Estate',
          desc: {
            easy: 'Land and the buildings on it — homes, shops, schools. If it sits on the ground and stays put, it\'s real estate!',
            medium:
              'Real estate is land plus whatever is built on it: houses, apartments, stores, offices. Unlike a toy, you can\'t carry it away — it stays in one place.',
            hard:
              'Real estate is immovable property: land and permanent structures. Its value depends heavily on location and how the space can be used.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '🔑',
          title: 'Renting',
          desc: {
            easy: 'Pay a little money every month to USE a place someone else owns. Easy to leave, but it never becomes yours.',
            medium:
              'Renting means paying a landlord each month to live or work in their property. You get to use it, but you don\'t own it and can move when your agreement ends.',
            hard:
              'Renting exchanges monthly payments for the right to occupy a property you don\'t own — flexible and low-commitment, but it builds no equity.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🏡',
          title: 'Owning',
          desc: {
            easy: 'You BUY the place, so it\'s yours! No more rent — but YOU pay to fix and care for it.',
            medium:
              'Owning means you bought the property. You stop paying rent and the home may grow in value, but you cover repairs, taxes, and upkeep yourself.',
            hard:
              'Ownership confers full rights to the property and any change in its value, offset by responsibility for maintenance, taxes, and carrying costs.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🏦',
          title: 'Mortgage',
          desc: {
            easy: 'A BIG loan from a bank to buy a home. You pay it back a little each month for many years.',
            medium:
              'A mortgage is a large bank loan that lets you buy a home now and pay it back in small monthly pieces over many years — often 15 to 30.',
            hard:
              'A mortgage is a long-term loan secured by the property itself, repaid in monthly installments. It lets buyers acquire a home before saving the full price.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc challenge: pay off a home over 10 years ───────────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 Paying Off a Home',
      setup: {
        easy: "Pretend a little home costs 200⭐. Instead of paying it all at once, you pay 20⭐ every year. How many YEARS until you've paid the whole 200⭐?",
        medium:
          "A pretend home costs 200⭐. You pay it off 20⭐ each year (like a simple mortgage). How many years until it's fully paid?",
        hard:
          "A home costs 200⭐, repaid at 20⭐ per year with no interest (a simplified mortgage). Compute the number of years to fully pay it off.",
      },
      problem: {
        givens: [
          { label: 'Home costs', value: 200, suffix: '⭐' },
          { label: 'You pay each year', value: 20, suffix: '⭐' },
        ],
        answerLabel: 'Years to pay it off',
        answer: 10,
      },
      walkthrough: {
        easy: "200⭐ split into 20⭐ pieces = 10 pieces. So it takes 10 years! That's why owning a home is a long, slow plan — but at the end, it's all yours. 🏡",
        medium:
          "200 ÷ 20 = 10 years. A real mortgage works the same way — small payments over many years. Real ones also add a little extra (interest) for the bank, but the idea is the same.",
        hard:
          "200 ÷ 20 = 10 years. Real mortgages add interest, so total paid exceeds the price and terms often run 15–30 years — but the core idea is repaying a big purchase in steady installments.",
      },
    },

    // ─── Connect: real estate in real life ──────────────────────────────
    {
      kind: 'connect',
      heading: '🌍 Real Estate All Around You',
      concept: {
        easy: 'Renting and owning happen everywhere you go!',
        medium: 'The rent-vs-own idea powers homes, stores, and whole businesses.',
        hard: 'Property ownership and rental markets underpin where everyone lives and works.',
      },
      examples: [
        {
          emoji: '🏬',
          who: 'The Store at the Mall',
          story: {
            easy: "That toy store probably RENTS its space! It pays the mall every month so it can sell things there.",
            medium:
              "Most shops rent their space from a mall or building owner. They'd rather spend their money on toys to sell than on buying the whole building.",
            hard:
              "Retailers typically lease space rather than buy, keeping cash free for inventory and operations while the property owner earns rent.",
          },
        },
        {
          emoji: '🧰',
          who: 'The Landlord',
          story: {
            easy: "Some people OWN extra homes and rent them to others. The rent money helps them pay back the home — and they fix it when things break.",
            medium:
              "A landlord buys a property and rents it out. The rent helps cover the mortgage and repairs, and if the home grows in value, the owner gains too.",
            hard:
              "Landlords own property to earn rental income; rent ideally covers the mortgage, taxes, and upkeep, while any rise in property value adds to their return.",
          },
        },
        {
          emoji: '👷',
          who: 'The Builders',
          story: {
            easy: "Some companies BUILD homes and shops, then sell them. Making real estate is a whole big business!",
            medium:
              "Developers build new homes and stores, then sell or rent them. They turn empty land into places people pay to live and work.",
            hard:
              "Real estate developers create value by building on land, then selling or leasing — a major industry that shapes entire neighborhoods.",
          },
        },
      ],
      kicker: {
        easy: 'Next time you\'re out, guess: rented or owned? 🕵️',
        medium: 'Everywhere you look, someone made a rent-or-own choice.',
        hard: 'Almost every building you pass reflects a rent-vs-own decision and, often, a mortgage.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Real Estate Check',
      questions: [
        {
          q: 'What does "real estate" mean?',
          options: [
            'Land and the buildings on it',
            'A kind of toy you can carry',
            'Money you keep in a piggy bank',
          ],
          correct: 0,
        },
        {
          q: 'What is a mortgage?',
          options: [
            'A big loan to buy a home, paid back a little each month for years',
            'A monthly payment to a landlord',
            'A store at the mall',
          ],
          correct: 0,
        },
        {
          q: 'What is ONE good thing about OWNING instead of renting?',
          options: [
            'You stop paying rent and the home can grow in value',
            'You never have to fix anything',
            'It costs nothing at all',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Investing: 100 },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know it: real estate is land and buildings, and people either RENT or OWN. Owning often needs a mortgage! 🏠",
        medium:
          "You learned what real estate is, the difference between renting and owning, and how a mortgage lets a family buy a home over many years.",
        hard:
          "You've grasped real estate, the rent-vs-own tradeoff, and how mortgages finance ownership over time — the foundation of how people get homes.",
      },
      bonusTip: {
        easy: "Tip: owning isn't free — you also pay to fix and care for the home. ⚒️",
        medium: "Pro tip: owners gain value but pay for repairs and taxes; renters skip those but build no ownership. Tradeoffs!",
        hard: "Edge: the rent-vs-own answer depends on time horizon, costs, and flexibility — there's no single right answer.",
      },
    },

    // ─── Real-world mission: spot who owns vs rents ─────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'real-estate',
        emoji: '🕵️',
        title: {
          easy: 'Spot Who OWNS and Who RENTS',
          medium: 'Be a real-estate detective: own vs rent around you',
          hard: 'Observe rent-vs-own examples in your neighborhood',
        },
        pitch: {
          easy: "Look around your day and find places people OWN and places people RENT. You're a real-estate detective! 🕵️",
          medium:
            "Over a day or two, notice the buildings around you and guess (with a grown-up) which are owned and which are rented.",
          hard:
            "Observe several properties around you and reason about whether each is more likely owned or rented, then discuss with a grown-up.",
        },
        steps: [
          {
            emoji: '🏡',
            text: {
              easy: 'Find a HOME a family probably OWNS (maybe your own!). Write it down.',
              medium: 'Spot a home that a family likely owns and note what made you think so.',
              hard: 'Identify a likely owner-occupied home and the clues that suggest ownership.',
            },
          },
          {
            emoji: '🏬',
            text: {
              easy: 'Find a SHOP that probably RENTS its space (like a store in a mall).',
              medium: 'Spot a store or restaurant that probably rents its space.',
              hard: 'Identify a business that likely leases rather than owns its premises.',
            },
          },
          {
            emoji: '🤔',
            text: {
              easy: 'Ask: why might a store RENT instead of buy?',
              medium: 'Ask a grown-up why a store might rent its space instead of buying.',
              hard: 'Discuss why a business might prefer leasing to owning its location.',
            },
          },
          {
            emoji: '📝',
            text: {
              easy: 'Count how many OWN and how many RENT examples you found.',
              medium: 'Tally how many owned vs rented examples you spotted.',
              hard: 'Record your own-vs-rent count and which was more common.',
            },
          },
        ],
        reflection: [
          {
            key: 'own-example',
            prompt: {
              easy: 'What is one place you think someone OWNS?',
              medium: 'Name one property you think is owned.',
              hard: 'Give one likely owned property and your reasoning.',
            },
            type: 'text',
          },
          {
            key: 'rent-example',
            prompt: {
              easy: 'What is one place you think someone RENTS?',
              medium: 'Name one property you think is rented.',
              hard: 'Give one likely rented property and your reasoning.',
            },
            type: 'text',
          },
          {
            key: 'insight',
            prompt: {
              easy: 'Why might a store RENT instead of OWN?',
              medium: 'Why do you think many stores rent their space instead of buying?',
              hard: 'Explain the tradeoffs that might lead a business to rent rather than own.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is just looking and guessing together — no need to know for sure. The goal is noticing rent vs own in real life.",
          medium:
            "Pure observation — exact ownership doesn't matter. The learning goal is recognizing the rent-vs-own pattern in everyday places.",
          hard:
            "Observational only; precise ownership is unknowable from the outside. Emphasize reasoning about the rent-vs-own tradeoff, not getting a 'right' answer.",
        },
        printables: {
          trackers: [
            {
              title: 'My Real-Estate Detective Sheet',
              columns: ['Place', 'Own or Rent?', 'Why I think so'],
              rows: 6,
              note: 'Guessing is fine — notice the clues!',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
