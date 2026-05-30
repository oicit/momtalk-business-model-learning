/**
 * Does It Make Money? — "Sales aren't the same as profit."
 *
 * A company can sell TONS of stuff and STILL not make money — if what it
 * spends is bigger than what it brings in. This lesson reuses the Business
 * 101 equation (Revenue − Cost = Profit) but now points it at real, famous
 * companies. Some giants lost money for years before turning a profit;
 * others made money from day one.
 *
 * The one habit we want to plant: before being impressed by big sales,
 * ask "after they pay for EVERYTHING, do they keep anything?"
 *
 * Beat order:
 *   intro → think-deeper (does big sales mean rich?) →
 *   concept-cards (revenue, cost, profit, the famous-losers twist) →
 *   calc-challenge (1000 sales − 800 cost = 200 kept) →
 *   connect (real companies that lost money then won) → outro →
 *   real-world-mission (pick a business, list sales & costs, see what's left).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'does-it-make-money',
  themeKey: 'business',
  emoji: '💰',
  title: 'Does It Make Money?',
  subtitle: {
    easy: "Selling lots of stuff isn't the same as KEEPING money. Let's find out who really makes money!",
    medium:
      "A company can have huge sales and still lose money. The real question is: after paying for everything, do they keep anything?",
    hard:
      "Revenue isn't profit. Learn to separate top-line sales from the cash a business actually keeps — and why even giants lose money for years.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Imagine a lemonade stand that sells 100 cups! Wow, right? But what if the lemons and cups cost MORE than the money it made? Then it didn't really make money at all! 💰 Today we learn how to tell who actually KEEPS money.",
        medium:
          "Lots of sales SOUNDS like lots of money — but it isn't always! A company can sell tons of stuff and still lose money if its costs are too high. Today we learn the most important question in business: do they keep anything?",
        hard:
          "Big sales grab headlines, but sales aren't profit. A company with huge revenue can still bleed cash if costs run higher. Today we sharpen one habit: look past the top line and ask what the business actually keeps.",
      },
    },

    // ─── Think-deeper: does big sales mean rich? ────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Big Sales = Rich? Not So Fast!',
      intro: {
        easy: "Let's think about this carefully together.",
        medium: "Let's reason through why sales and profit aren't the same.",
        hard: "First-principles look at the gap between revenue and profit.",
      },
      layers: [
        {
          question: {
            easy: "If a toy store sold 1,000 toys, is it definitely rich?",
            medium: "If a store sells a HUGE number of toys, does that mean it makes money?",
            hard: "Does high sales volume guarantee a company is profitable?",
          },
          reveal: {
            easy:
              "Not for sure! We have to know what the toys COST the store first. If each toy cost more than they sold it for, they actually LOST money on every one. 😮",
            medium:
              "Not necessarily. We have to know the costs. If it spent more making and selling those toys than it earned back, it lost money — even with great sales.",
            hard:
              "No. Sales is only one side. Without knowing the cost of making and selling those toys, you can't tell if any money was kept. High revenue with higher costs = a loss.",
          },
        },
        {
          question: {
            easy: "What are some things a business has to PAY for?",
            medium: "What costs does a business have to cover before it keeps anything?",
            hard: "What kinds of costs eat into a company's sales?",
          },
          reveal: {
            easy:
              "Lots of things! Supplies, the store, helpers' pay, electricity, ads… all of that gets paid FIRST. Whatever is left over is the money they actually keep.",
            medium:
              "Supplies, rent, workers' wages, electricity, delivery, advertising — all paid first. Only what's left after every cost is the money the business really keeps.",
            hard:
              "Materials, rent, wages, utilities, shipping, marketing, and more — all subtracted from sales. Profit is the residual after every cost is covered.",
          },
        },
        {
          question: {
            easy: "So what's the BEST question to ask about any business?",
            medium: "What one question tells you if a business is really doing well?",
            hard: "What single question cuts through the hype around a company?",
          },
          reveal: {
            easy:
              "Ask: 'After paying for EVERYTHING, do they keep anything?' If yes — that kept money is PROFIT! 💰",
            medium:
              "Ask: 'After they pay for everything, do they keep anything?' The money left over is PROFIT — and that's what really matters.",
            hard:
              "Ask: 'After all costs, does anything remain?' That residual is profit. It's the truest signal of whether a business model works.",
          },
        },
      ],
    },

    // ─── Concept cards: revenue, cost, profit, the famous twist ─────────
    {
      kind: 'concept-cards',
      heading: 'The Money Equation',
      subheading: 'Three words unlock every business: Revenue − Cost = Profit.',
      cards: [
        {
          emoji: '💵',
          title: 'Revenue = Money In',
          desc: {
            easy: 'Revenue is ALL the money coming in from selling stuff. 100 cups at 1⭐ each = 100⭐ revenue!',
            medium:
              'Revenue is the total money a business takes in from sales. Sell 100 cups for 1⭐ each and revenue is 100⭐ — before any costs.',
            hard:
              'Revenue (the "top line") is total sales income before any expenses are subtracted. It tells you how much came in, not how much was kept.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🧾',
          title: 'Cost = Money Out',
          desc: {
            easy: 'Cost is all the money the business has to PAY — for supplies, helpers, the shop, and more.',
            medium:
              'Cost is everything the business pays to run: supplies, rent, wages, electricity, ads. All of it must be covered from revenue.',
            hard:
              'Costs are total expenses — materials, labor, rent, utilities, marketing. They are subtracted from revenue to find what remains.',
          },
          color: '#FFF1E8',
        },
        {
          emoji: '💰',
          title: 'Profit = What You KEEP',
          desc: {
            easy: 'Revenue minus Cost = Profit. It\'s the money left over AFTER paying for everything. That\'s the real prize!',
            medium:
              'Profit = Revenue − Cost. It\'s the money kept after every cost is paid. Positive profit means the business actually made money.',
            hard:
              'Profit = Revenue − Cost. It\'s the residual the business keeps. If costs exceed revenue, profit is negative — that\'s a loss.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '🚀',
          title: 'Even Giants Lost Money!',
          desc: {
            easy: 'Some HUGE famous companies lost money for years before they finally kept any. Others made money right away!',
            medium:
              'Surprise: some giant companies lost money for YEARS before becoming profitable. Big sales came first — keeping money came later.',
            hard:
              'Many famous companies ran losses for years while growing, then turned profitable. Big revenue can arrive long before any profit does.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc challenge: do they keep anything? ─────────────────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 Did They Keep Anything?',
      setup: {
        easy: "Sunny's Smoothies made 1,000⭐ in sales this month. It spent 800⭐ on fruit, cups, and helpers. How many ⭐ did it KEEP?",
        medium:
          "A smoothie shop earned 1,000⭐ in sales and spent 800⭐ on all its costs. Use Revenue − Cost = Profit. How much profit did it keep?",
        hard:
          "Given revenue of 1,000⭐ and total costs of 800⭐, compute the profit kept (Revenue − Cost).",
      },
      problem: {
        givens: [
          { label: 'Sales (revenue)', value: 1000, suffix: '⭐' },
          { label: 'Costs', value: 800, suffix: '⭐' },
        ],
        answerLabel: 'Profit kept',
        answer: 200,
        suffix: '⭐',
      },
      walkthrough: {
        easy: "1,000⭐ in, 800⭐ out. 1,000 − 800 = 200⭐ kept! 🎉 Now flip it: if it had SOLD 1,000⭐ but SPENT 1,100⭐, then 1,000 − 1,100 = −100⭐… it LOST 100⭐! Same big sales, totally different ending.",
        medium:
          "Revenue − Cost = 1,000 − 800 = 200⭐ profit. Now imagine costs were 1,100⭐ instead: 1,000 − 1,100 = −100⭐, a LOSS. Same sales, but high costs flipped a win into a loss.",
        hard:
          "Profit = 1,000 − 800 = 200⭐. Counter-case: with 1,100⭐ costs, profit = 1,000 − 1,100 = −100⭐ (a loss). Identical top line, opposite outcome — costs decide who keeps money.",
      },
    },

    // ─── Connect: real companies that lost then won ────────────────────
    {
      kind: 'connect',
      heading: '🌍 Real Companies, Real Money',
      concept: {
        easy: 'This same Revenue − Cost = Profit question is how grown-ups judge even the biggest companies.',
        medium: 'The "do they keep anything?" question works on tiny stands AND giant companies alike.',
        hard: 'Revenue vs. profit is the lens investors use on every company, from a stand to a global giant.',
      },
      examples: [
        {
          emoji: '📦',
          who: 'A Giant Online Store',
          story: {
            easy: "One huge online store made TONS of sales but kept barely any money for years — because it kept paying to grow bigger. Later, it finally kept lots!",
            medium:
              "A famous online store had massive sales for years but tiny profit — it spent almost everything on growing. Patience paid off, and it became hugely profitable later.",
            hard:
              "A famous e-commerce giant posted huge revenue for years with thin or negative profit, reinvesting heavily to grow. Profitability came much later — revenue ≠ profit in real time.",
          },
        },
        {
          emoji: '🎬',
          who: 'A Streaming Company',
          story: {
            easy: "A movie-streaming company spent SO much making shows that it lost money for a long time before it finally started keeping some.",
            medium:
              "A streaming company spent billions making shows, so its costs were huge. It ran at a loss for years before its sales finally outgrew its costs.",
            hard:
              "A streaming firm carried enormous content costs, running losses for years until revenue scaled past spending — a textbook 'big sales, late profit' story.",
          },
        },
        {
          emoji: '🍋',
          who: 'A Smart Little Stand',
          story: {
            easy: "But a careful lemonade stand can make money on DAY ONE — if it keeps its costs lower than its sales!",
            medium:
              "Not everyone waits! A simple lemonade stand with low costs can keep money from the very first day. Small and careful beats big and wasteful.",
            hard:
              "Plenty of small, low-cost businesses are profitable from day one. Size isn't the point — keeping costs below revenue is.",
          },
        },
      ],
      kicker: {
        easy: 'Big sales are exciting. But KEPT money is what counts! 💰',
        medium: "Always ask the real question: after everything, do they keep anything?",
        hard: 'Headlines love revenue. Smart people watch profit.',
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know the secret question: 'After paying for everything, do they KEEP anything?' That kept money is profit! 💰",
        medium:
          "You learned that sales aren't profit. The real test is what's left after every cost — and now you know how to check.",
        hard:
          "You can now separate revenue from profit and ask the question that cuts through the hype: what does the business actually keep?",
      },
      bonusTip: {
        easy: "Tip: next time you see a busy store, wonder — are their COSTS smaller than their sales? 🤔",
        medium: "Pro tip: a busy store isn't always a rich one. Costs decide who keeps money.",
        hard: "Edge: revenue shows scale; profit shows whether the model works. Watch both.",
      },
    },

    // ─── Real-world mission: pick a business, do the math ───────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'does-it-make-money',
        emoji: '💰',
        title: {
          easy: 'Be a Profit Detective!',
          medium: 'Profit Detective: does this business keep money?',
          hard: 'Profit Detective: figure out a business\'s real profit',
        },
        pitch: {
          easy: "Pick a pretend or real little business. List how much it SELLS and what it COSTS. Then find out — does it keep anything?",
          medium:
            "Choose a real or pretend small business. Write down its sales and all its costs, then work out its profit (or loss!).",
          hard:
            "Pick a small business (real or imagined). Estimate its revenue and total costs, then compute Revenue − Cost to find its profit.",
        },
        steps: [
          {
            emoji: '🏪',
            text: {
              easy: 'Pick a little business — a lemonade stand, a bakery, a dog-walking job, anything!',
              medium: 'Choose one small business to investigate — real or pretend.',
              hard: 'Select one small business to analyze (real or hypothetical).',
            },
          },
          {
            emoji: '💵',
            text: {
              easy: 'Guess how much money it SELLS in a day or week. Write it down.',
              medium: 'Estimate its sales (revenue) for a day or week and write it down.',
              hard: 'Estimate the business\'s revenue over a chosen period.',
            },
          },
          {
            emoji: '🧾',
            text: {
              easy: 'List everything it has to PAY for. Add it all up — that\'s the cost.',
              medium: 'List every cost it has (supplies, helpers, etc.) and total them up.',
              hard: 'Enumerate all costs and sum them to get total cost.',
            },
          },
          {
            emoji: '💰',
            text: {
              easy: 'Do the math: Sales − Costs. Does it KEEP anything? Or does it lose money?',
              medium: 'Compute Revenue − Cost. Is there profit left, or is it a loss?',
              hard: 'Calculate Revenue − Cost to determine profit or loss.',
            },
          },
        ],
        reflection: [
          {
            key: 'business',
            prompt: {
              easy: 'What business did you pick?',
              medium: 'Which business did you investigate?',
              hard: 'Which business did you analyze?',
            },
            type: 'text',
            placeholder: 'e.g. a lemonade stand',
          },
          {
            key: 'revenue',
            prompt: {
              easy: 'How much money did it SELL?',
              medium: 'What was its total revenue?',
              hard: 'Estimated revenue?',
            },
            type: 'number',
            suffix: '⭐',
          },
          {
            key: 'cost',
            prompt: {
              easy: 'How much did it have to PAY?',
              medium: 'What were its total costs?',
              hard: 'Total estimated costs?',
            },
            type: 'number',
            suffix: '⭐',
          },
          {
            key: 'profit',
            prompt: {
              easy: 'Sales − Costs = ? Did it KEEP anything?',
              medium: 'Revenue − Cost = ? Profit or loss?',
              hard: 'Computed profit (Revenue − Cost)?',
            },
            type: 'text',
            placeholder: 'e.g. kept 20⭐ / lost 5⭐',
          },
        ],
        parentNote: {
          easy: "This is all pretend math for learning — no real money needed. Help your child guess simple numbers and add them up together.",
          medium:
            "Use rough, made-up numbers — the goal is the idea that sales minus costs equals what's kept, not real accounting.",
          hard:
            "Estimates only; the learning goal is the revenue-minus-cost concept. Help with the arithmetic and let your child draw the conclusion.",
        },
        printables: {
          worksheets: [
            {
              title: 'My Profit Detective Sheet',
              blocks: [
                {
                  label: 'Business I picked',
                  lines: 1,
                },
                {
                  label: 'Money it SELLS (revenue)',
                  suffix: '⭐',
                  lines: 1,
                },
                {
                  label: 'Money it PAYS (cost)',
                  suffix: '⭐',
                  lines: 1,
                },
                {
                  label: 'Profit = Revenue − Cost',
                  hint: 'Fill in the numbers and do the math.',
                  equation: '_____ − _____ = _____',
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
