/**
 * Index Funds — "Buy Them ALL."
 *
 * The single most useful investing idea a kid can learn: instead of trying
 * to pick the ONE company that wins, you can own a tiny slice of ALL of
 * them at once. No guessing, no stress — you just own "the whole market."
 *
 * This is Warren Buffett's actual advice for almost everyone. Lesson 2 of
 * the Stock Investing category (after Stock Market Adventure).
 *
 * Beat order:
 *   intro → think-deeper (why is picking ONE winner so hard?) →
 *   concept-cards (what an index fund is) → calc-challenge (100⭐ grows
 *   ~10%) → connect (the S&P 500, Buffett's $1M bet) → quiz → outro →
 *   real-world-mission (build a pretend index basket and track it).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'index-funds',
  themeKey: 'index-funds',
  emoji: '🧺',
  title: 'Index Funds',
  subtitle: {
    easy: "Don't pick ONE company — own a tiny piece of ALL of them!",
    medium:
      "The smartest, easiest way to invest: buy the whole market at once instead of guessing the winner.",
    hard:
      "Diversification, the cost of stock-picking, and why broad index funds beat most experts over time — kid-sized.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Picking the ONE best company is super hard — even grown-ups get it wrong! What if you didn't have to pick at all? What if you could own a tiny piece of ALL the big companies at once? That's an INDEX FUND. 🧺",
        medium:
          "Last time you learned a stock is a slice of one company. But which company will win? Even experts guess wrong a lot. Today: a trick that lets you skip the guessing and own the WHOLE market at once — the index fund.",
        hard:
          "Stock-picking is hard because the future is uncertain and most single companies underperform. An index fund sidesteps the bet entirely: you own a little of everything, so you capture the market's whole return. Let's see why that's so powerful.",
      },
    },

    // ─── Think-deeper: why is picking ONE winner so hard? ───────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Not Just Pick the Winner?',
      intro: {
        easy: "Let's think about this together.",
        medium: "Let's reason through why picking one stock is so tricky.",
        hard: "First-principles look at the cost of concentration.",
      },
      layers: [
        {
          question: {
            easy: "If you had to pick ONE toy company to win for the next 20 years, could you?",
            medium: "Could you confidently name the ONE company that will be biggest in 20 years?",
            hard: "Can anyone reliably identify the single best-performing stock over a 20-year horizon?",
          },
          reveal: {
            easy:
              "Probably not — and that's okay! 20 years ago, lots of giant companies were tiny, and some giant ones disappeared. Nobody knew for sure.",
            medium:
              "Almost nobody can. Companies that look unbeatable can fade (remember Blockbuster?), and tiny companies can become giants (Apple was once nearly broke). The future surprises everyone.",
            hard:
              "No. Markets price in known information; future winners depend on unknowable surprises. Even professional managers, on average, fail to beat the market after fees.",
          },
        },
        {
          question: {
            easy: "What happens if you pick wrong?",
            medium: "What's the risk of betting everything on one company?",
            hard: "What's the downside of a concentrated single-name position?",
          },
          reveal: {
            easy:
              "If your one company has a bad year, ALL your money has a bad year. Ouch! Putting everything in one place is risky.",
            medium:
              "All your eggs are in one basket. One bad surprise — a recall, a scandal, a better competitor — and your whole investment drops. High reward, but high risk.",
            hard:
              "Idiosyncratic (company-specific) risk is uncompensated — you take the full hit of one firm's bad news without extra expected return. Diversification removes that risk for free.",
          },
        },
        {
          question: {
            easy: "So what if you owned a LITTLE bit of EVERY big company?",
            medium: "What if, instead of one, you owned all of them at once?",
            hard: "What's the effect of holding the entire market portfolio?",
          },
          reveal: {
            easy:
              "Then if one company stumbles, the others can still grow! You ride the WHOLE team, not one player. That's the index-fund magic. 🪄",
            medium:
              "You stop betting on one and start owning the whole field. Some companies fall, others soar — and historically the whole group has grown over time. Less stress, less guessing.",
            hard:
              "You capture the market's aggregate return and diversify away single-name risk. Winners more than offset losers over long horizons — which is why the index is so hard to beat.",
          },
        },
      ],
    },

    // ─── Concept cards: what an index fund actually is ──────────────────
    {
      kind: 'concept-cards',
      heading: 'What Is an Index Fund?',
      subheading: 'One simple thing you buy that holds hundreds of companies inside it.',
      cards: [
        {
          emoji: '🧺',
          title: 'A Basket of Companies',
          desc: {
            easy: 'An index fund is like a basket holding a tiny piece of LOTS of companies. Buy the basket, own them all!',
            medium:
              'An index fund is one investment that holds many stocks inside it. Buy a single share and you instantly own a sliver of every company in the basket.',
            hard:
              'An index fund is a pooled vehicle that holds every constituent of a market index in proportion, giving you the whole basket in one purchase.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '🥚',
          title: 'Not All Eggs in One Basket',
          desc: {
            easy: 'If one company has a bad day, the others carry you. Spreading out keeps you safer.',
            medium:
              'Owning many companies spreads your risk. One stumble barely dents you because hundreds of others are still in the basket.',
            hard:
              'Diversification reduces volatility and eliminates company-specific risk without lowering expected market return — the closest thing to a free lunch in investing.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🦉',
          title: 'The 500 Biggest',
          desc: {
            easy: 'The most famous one (the "S&P 500") holds the 500 biggest companies in America — Apple, Disney, McDonald\'s, all at once!',
            medium:
              'The S&P 500 index fund holds the 500 largest U.S. companies. Apple, Microsoft, Disney, Costco — you own a piece of all of them in one buy.',
            hard:
              'The S&P 500 tracks ~500 large-cap U.S. firms weighted by size — a single ticker that represents a huge slice of the entire economy.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🧙',
          title: "Buffett's Advice",
          desc: {
            easy: 'Warren Buffett — one of the richest investors EVER — says most people should just buy an index fund. Easy beats fancy!',
            medium:
              'Warren Buffett tells regular people to buy a low-cost index fund and hold it. He even bet $1 million that an index would beat fancy experts — and won.',
            hard:
              'Buffett famously advised that a low-cost S&P 500 index fund is the best choice for most investors, and won a 10-year, $1M wager against a basket of hedge funds.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc challenge: the market grows ~10% a year ───────────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 How Fast Does It Grow?',
      setup: {
        easy: "Over many years, the whole market has grown about 10 out of every 100 stars each year. You put 100⭐ in an index fund. About how many ⭐ would it earn in one good year?",
        medium:
          "Historically the U.S. market has returned about 10% per year on average. You invest 100⭐ in an index fund. Roughly how many ⭐ does it earn in an average year?",
        hard:
          "Assume a ~10% average annual return. With a 100⭐ principal, compute the approximate one-year gain.",
      },
      problem: {
        givens: [
          { label: 'You invest', value: 100, suffix: '⭐' },
          { label: 'Grows about', value: 10, suffix: '%' },
        ],
        answerLabel: 'Stars earned in a year',
        answer: 10,
        suffix: '⭐',
      },
      walkthrough: {
        easy: "10 out of 100 is 10. So 100⭐ earns about 10⭐ — now you have 110⭐! And next year it grows on the BIGGER number. That snowball is why starting early is magic.",
        medium:
          "10% of 100⭐ = 10⭐, so you'd have ~110⭐. The exciting part: next year the 10% is on 110⭐, not 100⭐. Money makes money — that's compounding.",
        hard:
          "0.10 × 100 = 10⭐ gain → 110⭐. Compounded, 100 grows to ~100 × 1.10^n. Over decades that exponent does the heavy lifting; time in the market beats timing the market.",
      },
    },

    // ─── Connect: where this shows up in the real world ─────────────────
    {
      kind: 'connect',
      heading: '🌍 Index Funds in Real Life',
      concept: {
        easy: 'Owning the whole basket is how LOTS of grown-ups quietly grow their money.',
        medium: 'The "own everything" idea powers retirement accounts, school funds, and Buffett-style advice.',
        hard: 'Broad index ownership underpins most long-horizon, low-cost investing strategies.',
      },
      examples: [
        {
          emoji: '🧙',
          who: "Buffett's $1,000,000 Bet",
          story: {
            easy: "Buffett bet a million dollars that a simple index fund would beat a team of fancy expert pickers over 10 years. The index WON!",
            medium:
              "In 2007 Buffett bet $1M that an S&P 500 index fund would beat a group of hedge funds over 10 years. The index won easily — simple beat fancy.",
            hard:
              "Buffett's 2007–2017 wager pitted a low-cost S&P 500 fund against five funds-of-funds. The index won decisively, net of fees — a real-world lesson in cost drag.",
          },
        },
        {
          emoji: '🏫',
          who: 'Your Future Self',
          story: {
            easy: "Many grown-ups put a little into an index fund every month for years and years. Slow and steady builds a LOT.",
            medium:
              "People who invest a bit every month into an index fund and just wait often end up with way more than people who try to pick hot stocks.",
            hard:
              "Dollar-cost averaging into a broad index over decades historically outperforms most active strategies — boring, automatic, effective.",
          },
        },
        {
          emoji: '🌎',
          who: 'Owning the Whole Country',
          story: {
            easy: "Buy a U.S. index fund and you own a tiny piece of almost every big American company at once. The whole team is on your side!",
            medium:
              "One S&P 500 share = a sliver of Apple, Disney, Costco, McDonald's, and ~496 others. You're betting on the whole economy, not one company.",
            hard:
              "A total-market fund gives proportional exposure to the entire investable economy — your return tracks aggregate corporate growth.",
          },
        },
      ],
      kicker: {
        easy: 'Boring? Maybe. But boring made a LOT of people rich. 🪄',
        medium: 'It feels too simple to work — which is exactly why it works.',
        hard: 'Simplicity + low cost + patience is an edge most "sophisticated" strategies fail to beat.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Index Fund Check',
      questions: [
        {
          q: 'What is an index fund?',
          options: [
            'A basket that holds many companies at once',
            'A loan you give to a bank',
            'A single company you bet everything on',
          ],
          correct: 0,
        },
        {
          q: 'Why is owning many companies safer than owning one?',
          options: [
            'If one company stumbles, the others can still grow',
            'Because companies never lose money',
            'Because baskets are cheaper than stocks',
          ],
          correct: 0,
        },
        {
          q: 'What did Warren Buffett bet $1 million on?',
          options: [
            'That a simple index fund would beat fancy expert pickers',
            'That one company would win',
            'That saving in a piggy bank is best',
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
        easy: "Now you know the BIG secret: you don't have to pick the winner — you can own them ALL! 🧺",
        medium:
          "You learned the trick that beats most experts: skip the guessing, own the whole market, and let time do the work.",
        hard:
          "You've internalized diversification and the index advantage — the foundation of sensible long-term investing.",
      },
      bonusTip: {
        easy: "Tip: the earlier you start, the more the snowball grows. ⛄",
        medium: "Pro tip: 'time in the market' beats 'timing the market.' Start early, stay calm.",
        hard: "Edge: minimize cost, maximize time invested, ignore the noise. Compounding rewards patience.",
      },
    },

    // ─── Real-world mission: build a pretend index basket ───────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'index-funds',
        emoji: '🧺',
        title: {
          easy: 'Build Your Own Pretend Index Basket',
          medium: 'Build & track a pretend 5-company index basket',
          hard: 'Construct and monitor a 5-stock mini-index over a week',
        },
        pitch: {
          easy: "Pick 5 companies you know and pretend you own a piece of all 5. Watch how the WHOLE basket does — not just one!",
          medium:
            "Choose 5 real companies you recognize, give your basket 100 pretend ⭐, and track how the whole basket moves over a week.",
          hard:
            "Assemble a 5-name equal-weight mini-index with 100 pretend ⭐ and observe portfolio-level moves vs. single names across a week.",
        },
        steps: [
          {
            emoji: '✍️',
            text: {
              easy: 'Write down 5 big companies you know (like Apple, Disney, Lego, McDonald\'s, Costco).',
              medium: 'List 5 real companies you recognize and use in real life.',
              hard: 'Select 5 recognizable large-cap names across different industries.',
            },
          },
          {
            emoji: '🧺',
            text: {
              easy: 'Pretend you put 20⭐ into each one — that\'s 100⭐ in your basket!',
              medium: 'Allocate 20 pretend ⭐ to each (100⭐ total) — an equal-weight basket.',
              hard: 'Equal-weight 20⭐ per name for a 100⭐ notional basket.',
            },
          },
          {
            emoji: '📈',
            text: {
              easy: 'With a grown-up, look up each company\'s price today. Write it down.',
              medium: 'With a grown-up, record each company\'s share price on day 1.',
              hard: 'Record day-1 prices for each constituent (with a grown-up).',
            },
          },
          {
            emoji: '🗓️',
            text: {
              easy: 'Check again after a few days. Did the WHOLE basket go up or down?',
              medium: 'Re-check after ~5 days. Did the basket as a whole rise or fall?',
              hard: 'Revisit after ~1 week; compute the basket\'s aggregate change.',
            },
          },
        ],
        reflection: [
          {
            key: 'basket-change',
            prompt: {
              easy: 'Did your WHOLE basket go up or down?',
              medium: 'Overall, did your 5-company basket rise or fall?',
              hard: 'Net direction of the aggregate basket?',
            },
            type: 'text',
            placeholder: 'up / down / about the same',
          },
          {
            key: 'best-worst',
            prompt: {
              easy: 'Which one went up the MOST? Which went DOWN?',
              medium: 'Which name was your best performer, and which was worst?',
              hard: 'Identify the top and bottom contributors.',
            },
            type: 'text',
          },
          {
            key: 'insight',
            prompt: {
              easy: 'Did owning 5 feel safer than owning just 1? Why?',
              medium: 'Did spreading across 5 companies feel steadier than betting on one? Explain.',
              hard: 'Reflect on how diversification affected your basket\'s volatility.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "Use a free stock app or search to look up prices together. It's pretend money — the goal is noticing how a basket behaves, not real trading.",
          medium:
            "Look up prices together using any free quote source. This is paper/pretend only — the learning goal is diversification, not real investing.",
          hard:
            "Pretend portfolio only. Pull quotes from any free source; emphasize that no real money is involved and that the lesson is about portfolio-level behavior.",
        },
        printables: {
          trackers: [
            {
              title: 'My Pretend Index Basket',
              columns: ['Company', 'Day 1 price', 'This week price', 'Up or down?'],
              rows: 5,
              note: 'Equal-weight: pretend 20⭐ in each company (100⭐ total).',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
