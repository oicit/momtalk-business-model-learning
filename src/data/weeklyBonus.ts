/**
 * Weekly bonus mission pool.
 *
 * One mission is selected per ISO week and shown on the Portal. The
 * selection is deterministic by week index so every kid (and every
 * reload within the same week) sees the same one. After the week
 * rolls, the next one rotates in.
 *
 * Missions follow the same RealWorldMissionDef shape used by per-lesson
 * missions — they're general-purpose practice challenges, not tied to a
 * single lesson.
 */

import type { RealWorldMissionDef } from './lessons/types';

const POOL: RealWorldMissionDef[] = [
  {
    id: 'weekly-price-spotter',
    emoji: '🏷️',
    title: {
      easy: 'Price Spotter Week!',
      medium: 'Become a price detective this week',
      hard: 'Conduct a 5-product price survey',
    },
    pitch: {
      easy:
        'Find 5 things at the store and write down their prices. Which one surprised you?',
      medium:
        'Pick 5 products at a store. Compare prices and figure out which is the best deal.',
      hard:
        'Survey 5 products across two stores. Track price + unit price; find the largest price gap.',
    },
    steps: [
      { emoji: '🛒', text: { easy: 'Go to the grocery store with a grown-up.', medium: 'Visit any store with a grown-up.', hard: 'Pick two stores (e.g. grocery + drugstore) and one product category.' } },
      { emoji: '📝', text: { easy: 'Write down 5 different prices you see.', medium: 'Write down 5 product names and their prices.', hard: 'Record price AND unit price (per ounce/per item).' } },
      { emoji: '🤔', text: { easy: 'Pick the one that surprised you most.', medium: 'Find the cheapest and the most expensive of the 5.', hard: 'Identify the largest % gap between any two equivalent products.' } },
      { emoji: '💡', text: { easy: 'Tell a family member what you noticed.', medium: 'Explain to someone WHY some things cost so much more.', hard: 'Hypothesize: brand, packaging, or scarcity? Defend your answer.' } },
    ],
    reflection: [
      { key: 'cheapest', prompt: { easy: 'What was the cheapest thing?', medium: 'Cheapest item + price', hard: 'Lowest unit-price item' }, type: 'text', placeholder: 'e.g. banana - 35¢' },
      { key: 'priciest', prompt: { easy: 'What was the most expensive?', medium: 'Most expensive item + price', hard: 'Highest unit-price item' }, type: 'text', placeholder: 'e.g. avocado - $3.50' },
      { key: 'surprise', prompt: { easy: 'What surprised you?', medium: 'What surprised you?', hard: 'Surprising finding + why' }, type: 'longtext', placeholder: 'One sentence is fine.' },
    ],
    printables: {
      trackers: [
        {
          title: 'Price Detective Sheet',
          note: 'Write down any 5 products you see in the store.',
          columns: ['Product', 'Price', 'Size / Qty', 'Best deal?'],
          rows: 10,
        },
      ],
      worksheets: [
        {
          title: 'Compare the Prices',
          blocks: [
            { label: '1. Cheapest thing I found', lines: 1 },
            { label: '2. Most expensive thing', lines: 1 },
            { label: '3. Difference between them', equation: '$ _______  −  $ _______  =  $ _______' },
            { label: '4. Why do you think prices are so different?', lines: 4 },
            { label: '5. Which one is the best deal? Why?', lines: 3 },
          ],
        },
      ],
    },
  },
  {
    id: 'weekly-save-a-dollar',
    emoji: '🐷',
    title: {
      easy: 'Save $1 This Week!',
      medium: 'Save $1 this week',
      hard: 'Save 10% of your weekly income',
    },
    pitch: {
      easy: 'Find $1 you would have spent — and save it instead. Put it somewhere safe!',
      medium: "Skip one thing you would have bought this week and save that money.",
      hard: 'Track your income this week and route 10% to savings before spending the rest.',
    },
    steps: [
      { emoji: '💭', text: { easy: 'Think of one small thing you usually buy.', medium: 'Pick one specific thing to skip this week.', hard: 'List your expected income sources for the week.' } },
      { emoji: '🚫', text: { easy: 'Skip buying it this time.', medium: "Don't buy it.", hard: 'Set aside 10% the moment any income arrives.' } },
      { emoji: '🏦', text: { easy: 'Put the $1 in your piggy bank.', medium: 'Put the money somewhere you won\'t touch.', hard: 'Move to a savings account or separate envelope.' } },
      { emoji: '🎉', text: { easy: 'Celebrate at the end of the week!', medium: 'Track how it felt to skip it.', hard: 'Calculate what 10%/week becomes in one year.' } },
    ],
    reflection: [
      { key: 'skipped', prompt: { easy: 'What did you skip?', medium: 'What did you skip buying?', hard: 'What did you forgo?' }, type: 'text', placeholder: 'e.g. a snack at school' },
      { key: 'amount', prompt: { easy: 'How much did you save?', medium: 'Amount saved', hard: 'Total saved this week' }, type: 'number', suffix: '$', placeholder: '1' },
      { key: 'feel', prompt: { easy: 'How did it feel?', medium: 'What was hard about it?', hard: 'Behavioral insight from the experiment' }, type: 'longtext', placeholder: 'A sentence or two.' },
    ],
  },
  {
    id: 'weekly-job-interview',
    emoji: '🎙️',
    title: {
      easy: 'Mini Job Interview',
      medium: 'Interview a grown-up about their job',
      hard: 'Conduct a structured career interview',
    },
    pitch: {
      easy: 'Ask a parent or grown-up 3 fun questions about their job!',
      medium: 'Interview a working grown-up and find out what their job is REALLY like.',
      hard: 'Conduct a 5-question structured interview to understand a role.',
    },
    steps: [
      { emoji: '📝', text: { easy: 'Write down 3 questions you want to ask.', medium: 'Write 5 thoughtful questions in advance.', hard: 'Prepare 5 questions covering daily work, hardest part, what they wish they knew earlier, and pay tradeoffs.' } },
      { emoji: '👋', text: { easy: 'Ask if they have 5 minutes to chat.', medium: 'Schedule the interview.', hard: 'Schedule and confirm the interview.' } },
      { emoji: '🎙️', text: { easy: 'Ask your questions and listen!', medium: 'Conduct the interview and take notes.', hard: 'Conduct interview; take notes verbatim where possible.' } },
      { emoji: '💡', text: { easy: 'Tell another family member one cool thing you learned.', medium: 'Share the most surprising insight with someone.', hard: 'Write a one-paragraph summary of the role.' } },
    ],
    reflection: [
      { key: 'who', prompt: { easy: 'Who did you interview?', medium: 'Who did you interview?', hard: 'Interviewee + role' }, type: 'text', placeholder: 'e.g. my dad - software engineer' },
      { key: 'best', prompt: { easy: 'What was the coolest answer?', medium: 'Most surprising answer', hard: 'Most insightful finding' }, type: 'longtext', placeholder: 'Write what they said.' },
      { key: 'would_you', prompt: { easy: 'Would you want this job?', medium: 'Would you want this job? Why?', hard: 'Does this role fit your interests? Defend.' }, type: 'longtext', placeholder: 'Yes/no + why.' },
    ],
  },
  {
    id: 'weekly-make-and-sell',
    emoji: '✋',
    title: {
      easy: 'Make and Sell!',
      medium: 'Make something and sell it this week',
      hard: 'Design + sell a hand-made product',
    },
    pitch: {
      easy: 'Make something (drawing, friendship bracelet, cookies) and sell it to a family member!',
      medium: "Create a small product and find a buyer this week. It can be anything!",
      hard: 'Design, produce, and sell a small batch. Track costs and revenue.',
    },
    steps: [
      { emoji: '💡', text: { easy: 'Think of something you can make.', medium: 'Pick a product idea and a target buyer.', hard: 'Choose a product whose unit cost is well under your selling price.' } },
      { emoji: '🛠️', text: { easy: 'Make a few of them!', medium: 'Make 3-5 units of your product.', hard: 'Produce a small batch tracking time + materials.' } },
      { emoji: '💰', text: { easy: 'Pick a fair price.', medium: 'Pick a price that covers materials + earns something.', hard: 'Price to clear inventory; calculate gross margin.' } },
      { emoji: '🤝', text: { easy: 'Sell at least one to someone in your house!', medium: 'Make at least one sale this week.', hard: 'Sell out the batch or pivot the offer if it stalls.' } },
    ],
    reflection: [
      { key: 'product', prompt: { easy: 'What did you make?', medium: 'What did you make?', hard: 'Product description' }, type: 'text', placeholder: 'e.g. friendship bracelets' },
      { key: 'sold', prompt: { easy: 'How many did you sell?', medium: 'Units sold', hard: 'Units sold' }, type: 'number', suffix: 'units', placeholder: '3' },
      { key: 'earned', prompt: { easy: 'How much did you make?', medium: 'Revenue', hard: 'Gross revenue' }, type: 'number', suffix: '$', placeholder: '5' },
      { key: 'next_time', prompt: { easy: 'What would you do different next time?', medium: 'What would you do differently?', hard: 'Operational + pricing changes for v2' }, type: 'longtext' },
    ],
    printables: {
      trackers: [
        {
          title: 'My Sales Log',
          note: 'One row per sale.',
          columns: ['Customer', 'Item', 'Price', 'Paid?', 'Total $'],
          rows: 15,
        },
      ],
      worksheets: [
        {
          title: 'Plan My Tiny Business',
          blocks: [
            { label: '1. What am I making?', lines: 2 },
            { label: '2. What materials do I need?', lines: 4 },
            { label: '3. How much will materials cost?', equation: '$ _______ total / _______ units made  =  $ _______ per unit' },
            { label: '4. My price per unit', lines: 1, suffix: '$' },
            { label: '5. Who will I sell to?', lines: 2 },
            { label: '6. How will I tell them about it?', lines: 3 },
          ],
        },
      ],
      signs: [
        {
          emoji: '✋',
          headline: 'FOR SALE',
          subline: 'Hand-Made by Me!',
          pricePlaceholder: '$_____ each',
          accent: '#7C5CFC',
        },
      ],
    },
  },
];

/** Returns an integer week number (ISO-style enough for this purpose). */
function weekIndex(d: Date = new Date()): number {
  const start = new Date(d.getFullYear(), 0, 1).getTime();
  const now = d.getTime();
  const week = Math.floor((now - start) / (7 * 24 * 60 * 60 * 1000));
  return d.getFullYear() * 100 + week;
}

/** Today's weekly bonus mission. Same for everyone within the same week. */
export function currentWeeklyBonus(d: Date = new Date()): RealWorldMissionDef {
  const idx = weekIndex(d);
  const mission = POOL[((idx % POOL.length) + POOL.length) % POOL.length];
  // Suffix the id with the week so each week's instance can be tracked separately
  return { ...mission, id: `${mission.id}@${idx}` };
}

export const weeklyPool = POOL;
