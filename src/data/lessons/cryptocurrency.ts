/**
 * Cryptocurrency — "Digital Money With No Bank in the Middle."
 *
 * A WATCH-AND-LEARN lesson, not a how-to-buy lesson. Crypto is digital
 * money tracked by a giant shared notebook (a blockchain) everyone can
 * see, so no one can cheat or copy a coin. Some coins are "digitally
 * scarce" — only a limited number can ever exist, like rare cards.
 *
 * BUT: prices swing wildly (very bumpy / risky) and scams are everywhere.
 * Every beat reinforces "watch, learn, ask a grown-up — don't gamble."
 * We NEVER encourage buying. Symbolic ⭐ only; mission is observational
 * (explain a blockchain to a grown-up using the shared-notebook idea).
 *
 * Beat order:
 *   intro → think-deeper (how do you stop cheating without a bank?) →
 *   concept-cards (blockchain, digital scarcity, bumpy prices, scams) →
 *   quiz → connect (where crypto shows up) → outro →
 *   real-world-mission (explain a blockchain to a grown-up).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'cryptocurrency',
  themeKey: 'stocks',
  emoji: '₿',
  title: 'Cryptocurrency',
  subtitle: {
    easy: "Digital money with NO bank — kept safe by a notebook the whole world can see!",
    medium:
      "What is crypto? Digital money tracked by a giant shared notebook so no one can cheat. (It's also super bumpy and risky.)",
    hard:
      "Blockchains, digital scarcity, and why crypto is so volatile — a watch-and-learn look, never a buy-this lesson.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'thinking',
      text: {
        easy:
          "When you send a friend a dollar, a bank usually helps. But what if there was money with NO bank — just a giant notebook the whole world can see? That's CRYPTOCURRENCY. It's a cool idea to learn about... but it's also super bumpy and risky, so we only WATCH and learn. ₿",
        medium:
          "Most money moves through banks. Crypto is digital money that skips the bank — instead, a shared notebook everyone can see keeps track of who has what. It's fascinating to understand! It's also wild and risky, so today we learn how it works, not how to buy it.",
        hard:
          "Cryptocurrency is digital money that uses a public shared ledger — a blockchain — instead of a bank to track ownership. It's a clever idea worth understanding. It's also highly volatile and full of scams, so this is a 'know how it works, ask a grown-up' lesson — never a buy recommendation.",
      },
    },

    // ─── Think-deeper: how do you stop cheating without a bank? ─────────
    {
      kind: 'think-deeper',
      heading: '🤔 No Bank? Then Who Stops Cheating?',
      intro: {
        easy: "Let's puzzle this out together.",
        medium: "Let's reason through the tricky part of money with no bank.",
        hard: "First-principles look at trust without a middleman.",
      },
      layers: [
        {
          question: {
            easy: "A bank remembers who has what money. With no bank, how would anyone know?",
            medium: "Banks keep the record of everyone's money. Without one, how do you track who owns what?",
            hard: "If there's no central bank ledger, how is ownership recorded reliably?",
          },
          reveal: {
            easy:
              "Imagine a HUGE notebook the whole class can see. Every time money moves, everyone writes it down. Now nobody can lie — everyone has the same notebook! That notebook is a blockchain. 📒",
            medium:
              "You make the record PUBLIC. Picture a notebook copied to thousands of computers — every payment gets written in all of them at once. Everyone holds the same copy, so the truth is shared. That's a blockchain.",
            hard:
              "You distribute the ledger. The blockchain is a shared, append-only record copied across thousands of computers; every transaction is written to all copies, so there's no single keeper to trust or trick.",
          },
        },
        {
          question: {
            easy: "What if someone tries to erase a page or copy a coin twice?",
            medium: "Could a cheater just change the notebook or spend the same coin twice?",
            hard: "How does the system prevent tampering or double-spending?",
          },
          reveal: {
            easy:
              "They can't! Because EVERYONE has a copy, the group checks it. If one notebook says something different, it's spotted right away. You can't sneak a fake page past the whole class. 🕵️",
            medium:
              "Nope — to change it you'd have to fool thousands of copies at the exact same time, which is almost impossible. The pages are also locked together in order, so erasing one breaks the rest. The crowd keeps it honest.",
            hard:
              "Each block is cryptographically linked to the one before it, so altering an old entry breaks the chain. And changing the record means out-voting the whole network — practically infeasible. That's how it resists cheating without a bank.",
          },
        },
        {
          question: {
            easy: "If the notebook is so clever, is crypto totally safe to have?",
            medium: "The technology is smart — so does that make crypto safe to own?",
            hard: "Does a tamper-resistant ledger make the asset itself safe?",
          },
          reveal: {
            easy:
              "No! The notebook is clever, but the PRICE jumps up and down like a wild rollercoaster, and tricky people make scams. So it's a 'watch, learn, and ASK A GROWN-UP' thing — never something to gamble on. 🎢",
            medium:
              "Not at all. The record-keeping is clever, but the VALUE swings wildly day to day, and scams are everywhere. Smart tech doesn't equal safe money — which is why this stays a learn-and-watch topic, not a buy-it one.",
            hard:
              "No. A robust ledger doesn't make the asset stable — crypto prices are extremely volatile and the space is rife with scams. Understanding the mechanism is valuable; treating it as a safe investment is not. Always involve a trusted grown-up.",
          },
        },
      ],
    },

    // ─── Concept cards: the four big ideas ──────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Big Ideas of Crypto',
      subheading: 'A clever notebook, rare coins... and a very bumpy ride.',
      cards: [
        {
          emoji: '📒',
          title: 'The Shared Notebook',
          desc: {
            easy: 'A blockchain is a giant notebook the whole world can see. Every payment gets written down, so no one can cheat or lie.',
            medium:
              'A blockchain is a public shared record copied across thousands of computers. Every transaction is written in all of them, so the truth is shared and hard to fake.',
            hard:
              'A blockchain is a distributed, append-only ledger replicated across many nodes; consensus among them keeps the single shared history honest without a central authority.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🃏',
          title: 'Digitally Rare',
          desc: {
            easy: 'Some coins are like rare trading cards — only a limited number can EVER exist, and you can\'t just copy one. That\'s "digital scarcity."',
            medium:
              'Many coins have a fixed limit — only so many can ever be made, and copies are blocked. Like rare cards, being limited is part of why people care. This is called digital scarcity.',
            hard:
              'Digital scarcity means the protocol caps supply (e.g. a fixed maximum number of coins) and prevents duplication, giving a digital item the rarity that physical collectibles have.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🎢',
          title: 'Super Bumpy Prices',
          desc: {
            easy: 'The price can shoot way UP one day and crash way DOWN the next. It\'s a wild rollercoaster — exciting, but risky. You can lose a lot fast.',
            medium:
              "Crypto prices swing wildly — big jumps and big drops, sometimes in a single day. That bumpiness is called volatility, and it means people can lose money very fast.",
            hard:
              'Crypto is highly volatile: prices can move double-digit percentages in a day with no safety net. High volatility means high risk — large losses are common and fast.',
          },
          color: '#FDEAEA',
        },
        {
          emoji: '🚨',
          title: 'Watch Out for Scams',
          desc: {
            easy: 'Tricky people make fake coins and "get rich quick" traps. If someone online promises free or guaranteed money — it\'s a scam. ALWAYS ask a grown-up first.',
            medium:
              'The crypto world is full of scams — fake coins, "guaranteed profit" promises, and pushy strangers online. Anything promising easy riches is a red flag. Always check with a trusted grown-up.',
            hard:
              'Scams are rampant: rug pulls, fake tokens, and "guaranteed return" schemes. The rule of thumb — if it promises certain or easy profit, it\'s a scam. Decisions here belong with a trusted adult.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Crypto Check',
      questions: [
        {
          q: 'What is a blockchain most like?',
          options: [
            'A giant shared notebook the whole world can see',
            'A secret bank that only one person controls',
            'A piggy bank you keep under your bed',
          ],
          correct: 0,
        },
        {
          q: 'How are crypto prices?',
          options: [
            'Super bumpy — they jump up and crash down a lot',
            'Always the same every day',
            'Always going up, never down',
          ],
          correct: 0,
        },
        {
          q: 'Someone online promises you "free, guaranteed money" in crypto. What should you do?',
          options: [
            "It's a scam — never do it, and tell a grown-up",
            'Send them your money quickly',
            'Keep it a secret from grown-ups',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Investing: 100 },
    },

    // ─── Connect: where crypto shows up in the real world ───────────────
    {
      kind: 'connect',
      heading: '🌍 Crypto in the Real World',
      concept: {
        easy: 'The "shared notebook" idea pops up in lots of surprising places — not just money.',
        medium: 'Blockchains (shared public records) are used far beyond coins, and famous people talk about crypto a lot.',
        hard: 'Distributed-ledger ideas extend well past currencies into records, art, and global headlines.',
      },
      examples: [
        {
          emoji: '₿',
          who: 'Bitcoin, the First One',
          story: {
            easy: "Bitcoin was the very first crypto, made in 2009. Only 21 million can EVER exist — like the rarest cards in the world.",
            medium:
              "Bitcoin started in 2009 as the first cryptocurrency. Its rule says only 21 million coins can ever exist — a famous example of digital scarcity.",
            hard:
              "Bitcoin (2009) was the first blockchain currency, with a hard-capped supply of 21 million — the canonical example of programmed digital scarcity.",
          },
        },
        {
          emoji: '🎨',
          who: 'Proof You Own It',
          story: {
            easy: "People also use the shared notebook to write down WHO owns a digital picture or game item — like a name tag no one can erase.",
            medium:
              "Beyond money, blockchains can record who owns a digital artwork or game item. The shared notebook acts like an un-erasable name tag of ownership.",
            hard:
              "Blockchains also record ownership of digital items (e.g. art or in-game assets) — an immutable provenance log rather than a currency use case.",
          },
        },
        {
          emoji: '📰',
          who: 'In the News A Lot',
          story: {
            easy: "Crypto is in the news because the price zooms up and down. Lots of people get excited — but lots also lose money. That's why we just watch and learn.",
            medium:
              "Crypto makes headlines because its price swings so much. Some people celebrate big jumps; many others lose money in the crashes. Watching teaches more than gambling.",
            hard:
              "Crypto dominates financial news precisely because of its volatility — booms and busts both make headlines, a reminder that excitement and risk travel together.",
          },
        },
      ],
      kicker: {
        easy: 'Cool to understand. Risky to gamble on. Always ask a grown-up! 🧑‍🏫',
        medium: 'Great to understand the tech — but treat it as risky, and never buy without a trusted grown-up.',
        hard: 'Understanding beats speculating: learn the mechanism, respect the risk, defer decisions to trusted adults.',
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'happy',
      text: {
        easy: "Now you know what crypto really is: digital money tracked by a notebook the whole world can see — and a wild, bumpy ride you only WATCH. ₿",
        medium:
          "You've learned the clever part (a shared public notebook called a blockchain) AND the scary part (super bumpy prices and scams). Smart kids learn first and never gamble.",
        hard:
          "You understand blockchains, digital scarcity, and why crypto is so volatile — plus the most important rule: understand it, respect the risk, and leave decisions to trusted grown-ups.",
      },
      bonusTip: {
        easy: "Golden rule: if anyone promises 'guaranteed money,' it's a trap. Always ask a grown-up. 🛑",
        medium: "Golden rule: 'guaranteed' or 'free' money is always a scam. When in doubt, ask a trusted grown-up.",
        hard: "Golden rule: guaranteed returns don't exist. Skepticism plus a trusted adult is your best protection.",
      },
    },

    // ─── Real-world mission: explain a blockchain to a grown-up ─────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'cryptocurrency',
        emoji: '📒',
        title: {
          easy: 'Teach a Grown-Up the Shared-Notebook Trick',
          medium: 'Explain a blockchain to a grown-up using the shared-notebook idea',
          hard: 'Teach a blockchain in plain words: the class-wide shared notebook',
        },
        pitch: {
          easy: "Be the teacher! Explain to a grown-up how a blockchain is like a notebook the whole class can see — so no one can cheat.",
          medium:
            "Show off what you learned: explain to a grown-up how a blockchain works using the 'shared notebook the whole class can see' picture.",
          hard:
            "Cement the concept by teaching it: explain a blockchain to a grown-up entirely through the shared-class-notebook analogy. No buying, just explaining.",
        },
        steps: [
          {
            emoji: '📒',
            text: {
              easy: 'Tell a grown-up: "Imagine a notebook the whole class can see."',
              medium: 'Start by setting the picture: a notebook every classmate can see at once.',
              hard: 'Open with the analogy: a single notebook visible to the entire class simultaneously.',
            },
          },
          {
            emoji: '✍️',
            text: {
              easy: 'Explain: every time money moves, EVERYONE writes it down. That\'s how nobody can lie.',
              medium: 'Explain that every payment is recorded in everyone\'s copy at once, so the record is shared and honest.',
              hard: 'Describe how each transaction is appended to every copy, making the ledger shared and tamper-evident.',
            },
          },
          {
            emoji: '🕵️',
            text: {
              easy: 'Ask the grown-up: "Could someone sneak a fake page past the whole class?" (Answer: no!)',
              medium: 'Check their understanding: ask why a cheater can\'t secretly change the notebook.',
              hard: 'Test comprehension: prompt them on why altering one copy fails when the network holds matching copies.',
            },
          },
          {
            emoji: '🎢',
            text: {
              easy: 'Finish with the warning: crypto prices are SUPER bumpy and scams are everywhere — so we only watch and learn.',
              medium: 'End with the safety point: prices are very volatile and scams abound, so this is watch-and-learn only.',
              hard: 'Close on risk: emphasize volatility and prevalent scams, and that this is purely educational.',
            },
          },
        ],
        reflection: [
          {
            key: 'who-taught',
            prompt: {
              easy: 'Who did you teach?',
              medium: 'Which grown-up did you explain it to?',
              hard: 'Who was your audience?',
            },
            type: 'text',
            placeholder: 'Mom, Dad, Grandma...',
          },
          {
            key: 'their-question',
            prompt: {
              easy: 'Did they ask you any good questions?',
              medium: 'What question did they ask, and how did you answer?',
              hard: 'Note any question they raised and your response.',
            },
            type: 'text',
          },
          {
            key: 'my-words',
            prompt: {
              easy: 'In YOUR own words, what is a blockchain?',
              medium: 'In your own words, describe what a blockchain is and why it stops cheating.',
              hard: 'Summarize, in your own words, the blockchain mechanism and why it resists tampering.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This mission is just explaining — no buying anything. Please reinforce that crypto is very risky and scams are common, and that money decisions are for grown-ups.",
          medium:
            "Observational/explain-only mission — there is no purchasing involved. Please reinforce that crypto is highly volatile and scam-prone, and that any real decisions stay with adults.",
          hard:
            "Purely educational. No transactions. Please underline the volatility and scam risk, the 'guaranteed-money = scam' rule, and that investment decisions belong to trusted adults — never the child alone.",
        },
        printables: {
          worksheets: [
            {
              title: 'My Blockchain Explainer',
              blocks: [
                {
                  label: 'A blockchain is like a notebook that...',
                  hint: 'Who can see it? Why does that stop cheating?',
                  lines: 3,
                },
                {
                  label: 'One reason crypto is risky:',
                  hint: 'Think about how the price moves, or scams.',
                  lines: 2,
                },
                {
                  label: 'The golden rule I will always remember:',
                  hint: 'What do you do if someone promises "free, guaranteed money"?',
                  lines: 2,
                },
              ],
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
