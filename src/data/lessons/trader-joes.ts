/**
 * Trader Joe's — "Fewer Choices, All Theirs."
 *
 * Goal: take a kid from "Trader Joe's is just a grocery store" → to
 * "almost everything inside is Trader Joe's OWN brand, and they pick
 * only a FEW of each thing on purpose" → to seeing that fewer-but-better
 * is both cheaper (they control it) AND special (you can ONLY get it
 * there), which is what makes their fans so loyal.
 *
 * The hidden trick: PRIVATE LABEL + CURATION.
 *
 * Beat order:
 *   intro → think-deeper (why fewer choices can be BETTER) →
 *   concept-cards (Private Label / Curation / Cheaper-because-controlled /
 *   Loyal Fans) → quiz → connect (store brands everywhere) → outro →
 *   real-world-mission (compare a store brand vs a name brand at home).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'trader-joes',
  themeKey: 'company',
  emoji: '🛍️',
  title: "Trader Joe's",
  subtitle: {
    easy: "A store where almost EVERYTHING is their own special brand — and they pick only a FEW of each thing!",
    medium:
      "Trader Joe's makes most of what it sells under its OWN name and carries way fewer choices than a normal store — on purpose.",
    hard:
      "Private-label + curation: by owning its brand and stocking a tightly edited assortment, Trader Joe's is both cheaper and more unique than rivals.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Walk into a normal grocery store and there are 40 kinds of peanut butter! At Trader Joe's there might be just 1 or 2 — but they're SO good, and they say 'Trader Joe's' right on the jar. That's the secret. Let's find out why fewer can be better. 🛍️",
        medium:
          "Most stores sell other companies' brands and offer tons of choices. Trader Joe's does the opposite: almost everything is THEIR OWN brand, and they carry far fewer items. Sounds backwards — but it makes them cheaper AND more special. Here's how.",
        hard:
          "A normal supermarket carries ~30,000+ items, mostly national brands. Trader Joe's carries ~4,000 items, ~80% private-label. Two big levers — owning the brand and curating a small assortment — turn 'fewer choices' into a huge advantage.",
      },
    },

    // ─── Think-deeper: why fewer choices can be better ──────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Can FEWER Choices Be Better?',
      intro: {
        easy: "More choices sound great... but let's think about it.",
        medium: "Let's reason through why a smaller, hand-picked selection can beat 'everything.'",
        hard: 'First-principles look at curation vs. infinite choice.',
      },
      layers: [
        {
          question: {
            easy: 'If a store had 40 kinds of peanut butter, how would you pick one?',
            medium: 'When there are dozens of options, what happens to the shopper?',
            hard: 'What is the cost of an overly large assortment to the customer?',
          },
          reveal: {
            easy:
              "It's confusing! You might just grab one and hope it's good. Too many choices can make picking HARDER, not easier.",
            medium:
              "Too many options causes 'choice overload' — people feel unsure, take longer, and worry they picked wrong. Lots of choice can feel like work.",
            hard:
              "Excessive choice raises decision cost and post-purchase doubt. Beyond a point, more options reduce satisfaction rather than increase it.",
          },
        },
        {
          question: {
            easy: "What if a store TRIED every peanut butter and only sold the best 2?",
            medium: 'What if the store did the choosing FOR you and only stocked winners?',
            hard: 'What value does a curator create by editing the assortment?',
          },
          reveal: {
            easy:
              "Then you can trust it! If it's on the shelf, it's good. Trader Joe's tastes LOTS of foods and only keeps the yummiest ones. They pick for you. 🪄",
            medium:
              "That's curation. Trader Joe's tests tons of products and keeps only the best — so being on the shelf is a seal of approval. Less guessing for you, more trust in them.",
            hard:
              "A curator absorbs the search-and-test cost so the customer doesn't have to. A small, vetted assortment becomes a trust signal: 'if they carry it, it's good.'",
          },
        },
        {
          question: {
            easy: "And why put 'Trader Joe's' on almost everything?",
            medium: 'Why make most products under their OWN brand instead of selling others?',
            hard: 'What does owning the private label change about cost and uniqueness?',
          },
          reveal: {
            easy:
              "Two wins! It's CHEAPER (they're in charge, no middle company to pay), and it's SPECIAL — you can ONLY get those snacks at Trader Joe's. So fans keep coming back!",
            medium:
              "Owning the brand means lower cost (no big-brand markup or advertising) AND uniqueness (you literally can't buy it anywhere else). Cheaper + can't-get-it-elsewhere = loyal fans.",
            hard:
              "Private label removes the national-brand margin and ad spend (lower price) and makes the product exclusive (no substitute at a rival). Control + exclusivity compounds into pricing power and loyalty.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ──────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: "Trader Joe's Two Big Tricks",
      subheading: 'Private label + curation — once you see them, you spot them everywhere.',
      cards: [
        {
          emoji: '🏷️',
          title: 'Private Label',
          desc: {
            easy: "PRIVATE LABEL means the store's OWN brand. At Trader Joe's, almost everything says 'Trader Joe's' on it — not another company.",
            medium:
              "Private label = the store makes/sells products under its own name instead of other companies' brands. ~80% of Trader Joe's items are their own.",
            hard:
              "Private label is store-owned branding. Trader Joe's runs ~80% private label vs. a typical grocer's ~20%, capturing the brand value for itself.",
          },
          color: '#E8F4FD',
        },
        {
          emoji: '✨',
          title: 'Curation',
          desc: {
            easy: 'CURATION means hand-picking only the BEST few. Instead of 40 peanut butters, they pick the 1 or 2 tastiest for you.',
            medium:
              'Curation = carrying fewer items, each carefully chosen. Trader Joe\'s stocks ~4,000 items vs. a normal store\'s 30,000+ — every one is hand-picked.',
            hard:
              'Curation is deliberate assortment editing. A ~4,000-SKU lineup (vs. 30,000+) means each item earns its slot, turning the shelf into a trust signal.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '💰',
          title: 'Cheaper Because They Control It',
          desc: {
            easy: "Since it's THEIR brand, there's no other company to pay and no big TV ads. So they can sell it for LESS.",
            medium:
              'Owning the brand cuts out the national-brand markup and big advertising budgets — so private-label items often cost less for the same quality.',
            hard:
              'Vertical control over the brand removes intermediary margin and ad spend, lowering cost while protecting quality — a structural price advantage.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '💛',
          title: 'Loyal Fans',
          desc: {
            easy: "Their snacks are special AND cheap, and you can ONLY get them there. So fans LOVE it and keep coming back.",
            medium:
              "Cheaper + exclusive = super-loyal customers. Fans drive across town for a Trader Joe's favorite they can't buy anywhere else.",
            hard:
              "Exclusivity plus value creates durable loyalty: customers can't substitute the product elsewhere, so retention and word-of-mouth stay high.",
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: "🎯 Trader Joe's Check",
      questions: [
        {
          q: "What does 'private label' mean?",
          options: [
            "The store sells products under its OWN brand name",
            'A secret VIP shopping club',
            'A sticker that hides the real price',
          ],
          correct: 0,
        },
        {
          q: 'How does Trader Joe\'s use "curation"?',
          options: [
            'It carries fewer items, each one hand-picked to be the best',
            'It carries every brand in the world',
            'It only sells things on weekends',
          ],
          correct: 0,
        },
        {
          q: 'Why does owning their own brand help Trader Joe\'s?',
          options: [
            "It's cheaper to make AND you can only get it there",
            'Because other stores tell them to',
            'Because their own brand costs more money',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Branding: 100 },
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Store Brands Are Everywhere',
      concept: {
        easy: "Once you know the trick, you'll spot store brands all over the place!",
        medium: 'Lots of big stores now make their own brands — same private-label idea as Trader Joe\'s.',
        hard: 'Private label has spread across retail; Trader Joe\'s just pushes it the furthest.',
      },
      examples: [
        {
          emoji: '🎯',
          who: 'Target (Good & Gather)',
          story: {
            easy: "That 'Good & Gather' food at Target? It's Target's OWN brand — their version of the Trader Joe's trick.",
            medium:
              "Target's 'Good & Gather' and 'Up & Up' are store brands. They make money AND give shoppers a cheaper, Target-only option.",
            hard:
              "Target's owned brands (Good & Gather, Up & Up) capture brand margin and differentiate the store — the same private-label playbook at scale.",
          },
        },
        {
          emoji: '🛒',
          who: 'Costco (Kirkland)',
          story: {
            easy: "Costco's 'Kirkland' brand is on tons of stuff — and people say it's just as good but cheaper!",
            medium:
              "Costco's 'Kirkland Signature' is one of the most trusted store brands ever — high quality, lower price, Costco-only.",
            hard:
              "Kirkland Signature is a flagship private label: quality parity with national brands at lower price, driving loyalty and high attach rates.",
          },
        },
        {
          emoji: '👕',
          who: 'Your Own Closet',
          story: {
            easy: "Check the tag on a shirt from a store — sometimes the brand IS the store's name! Same idea.",
            medium:
              "Many clothing stores sell mostly their own label. Owning the brand lets them control style, price, and what's special about them.",
            hard:
              "Vertical fashion retailers (store-as-brand) own design and supply, capturing margin and identity — private-label logic applied to apparel.",
          },
        },
      ],
      kicker: {
        easy: "Store brand vs. name brand — now you'll notice it every time you shop! 🪄",
        medium: "Next grocery trip, count how many things are the store's OWN brand. You'll be surprised.",
        hard: 'Private label is one of retail\'s quietest, most powerful moats — and now you can see it.',
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know Trader Joe's big secret: fewer choices, all THEIR brand — cheaper AND special! 🛍️",
        medium:
          "You learned private label + curation: by owning the brand and hand-picking fewer items, Trader Joe's is both cheaper and one-of-a-kind.",
        hard:
          "You've got the model: private-label control plus a curated assortment turns 'fewer choices' into lower cost, exclusivity, and fierce loyalty.",
      },
      bonusTip: {
        easy: "Fun fact: Trader Joe's rings a BELL instead of using intercoms — one ring means 'open another register!' 🔔",
        medium: "Pro tip: sometimes giving people fewer, carefully-chosen options beats giving them everything.",
        hard: "Edge: a tightly curated, owned assortment lowers customer decision cost AND your own cost — a rare win-win.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'trader-joes',
        emoji: '🏷️',
        title: {
          easy: 'Find a Store Brand vs. a Name Brand!',
          medium: 'Compare a store brand and a name brand at home',
          hard: 'Run a private-label vs. national-brand price comparison',
        },
        pitch: {
          easy: "Hunt at home or at the store for ONE thing that comes in a 'store brand' AND a 'name brand.' Compare the price!",
          medium:
            "Pick one product (like cereal, milk, or cookies). Find the store-brand version and the name-brand version, and compare their prices.",
          hard:
            "Select a product category, locate the private-label and national-brand versions, and record the price gap and your taste verdict.",
        },
        steps: [
          {
            emoji: '🔎',
            text: {
              easy: 'Look in your kitchen or at the store for the store\'s OWN brand (the name matches the store).',
              medium: 'Find one item that is a store brand — its label matches the store\'s name.',
              hard: 'Identify a private-label product (brand = retailer name).',
            },
          },
          {
            emoji: '🏷️',
            text: {
              easy: 'Find the SAME kind of thing made by a famous name brand.',
              medium: 'Find the same product as a well-known national brand for comparison.',
              hard: 'Locate the matching national-brand SKU for a like-for-like comparison.',
            },
          },
          {
            emoji: '💵',
            text: {
              easy: 'With a grown-up, look at both prices. Which one costs less?',
              medium: 'Record both prices. Note how much cheaper (or not) the store brand is.',
              hard: 'Record both prices and compute the price difference (with a grown-up).',
            },
          },
          {
            emoji: '😋',
            text: {
              easy: 'If you can, taste both! Could you even tell which is which?',
              medium: 'If possible, do a taste test. Was the cheaper one actually worse?',
              hard: 'Optionally blind-taste both and judge whether price tracks quality.',
            },
          },
        ],
        reflection: [
          {
            key: 'product',
            prompt: {
              easy: 'What thing did you compare?',
              medium: 'Which product did you compare?',
              hard: 'Product category compared',
            },
            type: 'text',
            placeholder: 'e.g. cereal',
          },
          {
            key: 'price-gap',
            prompt: {
              easy: 'Which cost less — the store brand or the name brand? By how much?',
              medium: 'Store-brand price vs. name-brand price — what was the difference?',
              hard: 'Record both prices and the computed gap',
            },
            type: 'text',
            placeholder: 'store brand $2, name brand $3 — $1 cheaper',
          },
          {
            key: 'insight',
            prompt: {
              easy: 'Could you taste a difference? Would you buy the store brand again?',
              medium: 'Did the cheaper store brand seem worse, or about the same? Explain.',
              hard: 'Reflect on whether the price gap matched any real quality gap.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "Do this together while shopping or in the pantry. The goal is just NOTICING store brands vs. name brands — no buying required.",
          medium:
            "Use any store visit or your own pantry. This is an observation exercise — pointing out private-label vs. national-brand and their prices. No purchase needed.",
          hard:
            "Observational only. Use existing groceries or a normal shopping trip to surface the private-label vs. national-brand price gap. No special purchase required.",
        },
        printables: {
          trackers: [
            {
              title: 'Store Brand vs. Name Brand',
              columns: ['Product', 'Store-brand price', 'Name-brand price', 'Which I liked'],
              rows: 4,
              note: 'Find the same product in both versions and compare.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
