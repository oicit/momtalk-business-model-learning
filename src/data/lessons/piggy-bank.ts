/**
 * Piggy Bank Power-Up — compound interest for kids.
 *
 * Goal: take a kid from "I just hide my money under the bed" → to
 * "money + time + a multiplier = MAGIC" → to actually starting a
 * 4-week save-and-match practice with a parent.
 *
 * The hidden 4th concept-card is TIME — most adults still under-rate it.
 *
 * Beat order:
 *   intro → decision (spend / hide / save@5%) → think-deeper (why does
 *   money grow?) → concept-cards (Principal/Interest/Compounding/Time)
 *   → calc-challenge (4-week parent match) → brainstorm (your save
 *   goals) → connect (Buffett, 401k, Apple stock) → outro → mission
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'piggy-bank',
  themeKey: 'saving',
  emoji: '🏦',
  title: 'Piggy Bank Power-Up',
  subtitle: {
    easy: 'Watch your money make MORE money — while you sleep!',
    medium:
      'Discover compound interest — the secret that turns a little money into a lot, just by giving it time.',
    hard:
      'Compound interest, the time-value of money, and why a 10-year-old who saves $10/week beats a 30-year-old who saves $100/week.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "What if your money could MAKE MORE MONEY... all by itself... while you sleep? It's not magic. It's called COMPOUNDING. And once you learn it, you'll never see money the same way.",
        medium:
          "Today you'll learn the single most powerful idea in money. It's so powerful that Albert Einstein called it \"the 8th wonder of the world.\" It's why some people get rich slowly while others stay broke fast.",
        hard:
          "Most adults still don't fully grasp the most important number-sense idea in finance: compounding. Today you'll get the principle, the math, and a 4-week practice loop — earlier than 95% of adults ever did.",
      },
    },

    // ─── Decision: where does your money go? ───────────────────────────
    {
      kind: 'decision',
      heading: '🧭 First Big Choice',
      scenario: {
        easy:
          "Grandma gives you $20 for your birthday. You're excited! You have THREE choices for what to do with it.",
        medium:
          "It's your birthday and grandma slipped you a crisp $20 bill. You're 10 years old. You have three options for what to do with it RIGHT NOW.",
        hard:
          "You're 10. You receive a $20 windfall. Time horizon to age 65 is 55 years. Three allocation options are on the table.",
      },
      question: {
        easy: 'What do you do with your $20?',
        medium: 'Which choice makes future-you the richest?',
        hard: 'Maximize expected value over a 55-year horizon. Pick:',
      },
      choices: [
        {
          label: {
            easy: 'Spend it NOW on candy and stickers!',
            medium: 'Spend the $20 today on something fun',
            hard: 'Immediate consumption — convert to utility now',
          },
          feedback: {
            easy:
              "That candy was good for 5 minutes. Then it's gone forever. Your money is gone. You have nothing left. Hmm... maybe there's a better way?",
            medium:
              "Fun for an afternoon. But money spent is money gone — and a lot of \"savings power\" came with that $20. You traded 55 years of growth for one sugar rush.",
            hard:
              "Present-bias trap. The hedonic return is sharp but transient (~6 hrs); the long-run opportunity cost is enormous. We'll quantify it on the next beat.",
          },
        },
        {
          label: {
            easy: 'Hide it under your pillow so it stays SAFE',
            medium: 'Stuff it in a drawer or piggy bank — keep it safe',
            hard: 'Hold as cash — zero-risk, zero-return storage',
          },
          feedback: {
            easy:
              "Safe! But... 10 years from now, you still have just $20. Nothing changed. Money sitting still is sleepy money. There's a way to make it WAKE UP.",
            medium:
              "Better than spending — but you've made a quiet mistake. Cash sitting still loses to inflation: in 10 years $20 won't buy what $20 buys today. It actually shrinks.",
            hard:
              "Cash drag + inflation erosion. With ~3% inflation, $20 today is ~$11 of purchasing power in 20 years. \"Safe\" without growth is a guaranteed real loss.",
          },
        },
        {
          label: {
            easy: 'Put it in a savings account that PAYS YOU 5% every year',
            medium: 'Put it in a savings account at 5% interest, leave it alone',
            hard: 'Deposit in a 5%-yielding account; let it compound annually',
          },
          feedback: {
            easy:
              "BINGO! The bank PAYS you to keep your money there. Every year, your money grows. Then next year, the growth ALSO grows. By the time you're 30, your $20 quietly turned into $86. Without you doing ANYTHING.",
            medium:
              "Right call. At 5% compounding, your $20 doubles roughly every 14 years. By age 65 your $20 is about $295 — without adding another cent. That extra $275 is the bank PAYING YOU for nothing.",
            hard:
              "Optimal. At r=5% compounded annually for n=55, future value = 20·(1.05)^55 ≈ $293. The whole gain is from compounding — your behavioral input is zero after the deposit.",
          },
          isPreferred: true,
        },
      ],
      realWorldReveal: {
        easy:
          'Real fact: a 10-year-old who saves just $5 a week until age 18 — and the bank pays 5% — ends up with about $2,200. The 18-year-old who waits and saves $50 a week starting at 25 has LESS money than the 10-year-old at age 35. Starting EARLIER beats starting BIGGER.',
        medium:
          "Real-world: a 10-year-old saving $5/week at 5% compound ends with ~$2,200 by 18. A 25-year-old saving $50/week (10× the deposit) starting from zero takes until ~age 32 to catch up. Time + small + early > late + big.",
        hard:
          'The "starting age beats saving rate" effect is real and asymmetric. The compounding curve is exponential — every 5 years of head-start at a moderate rate is worth more than doubling the contribution rate later. Buffett: "Someone is sitting in the shade today because someone planted a tree a long time ago."',
      },
    },

    // ─── Think-deeper: why does money grow at all? ─────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 But WHY Does the Bank Pay You?',
      intro: {
        easy: "Wait... why would a bank PAY you just to hold your money? Let's figure it out.",
        medium: "Let's zoom out. Why would anyone PAY you for sitting still and letting them hold your money?",
        hard: 'Time to apply first-principles reasoning. What is interest actually a payment for?',
      },
      layers: [
        {
          question: {
            easy: 'What does the bank DO with your money once they have it?',
            medium: 'When you deposit $20, what does the bank actually do with it?',
            hard: "When you deposit, what's the bank's next action?",
          },
          reveal: {
            easy:
              "They LEND it to someone else! Like a person buying a house, or a business that needs a new oven. Banks are matchmakers between people with money and people who need money.",
            medium:
              "They lend it out. Your $20 gets bundled with thousands of others and loaned to home buyers, businesses, car buyers. The bank charges the borrower more than it pays you.",
            hard:
              "Fractional-reserve banking: the deposit becomes the bank's liability and the loan it makes becomes its asset. Net interest margin = loan rate − deposit rate, the bank's spread.",
          },
        },
        {
          question: {
            easy: 'So why does the bank pay YOU anything?',
            medium: 'So why share any of that with the depositor?',
            hard: 'Why compensate the depositor at all?',
          },
          reveal: {
            easy:
              "Because they NEED your money to lend. If they didn't pay you anything, you'd take your money home. The pay (called INTEREST) is their thank-you for letting them use it.",
            medium:
              "Because deposits are their fuel. No deposits → no lending → no profit. Interest is rent they pay you for the use of your money. Higher rates attract more deposits.",
            hard:
              "Capital is a scarce input. Banks compete for deposits via the deposit rate. Interest is the market-clearing price of giving up liquidity for a defined term.",
          },
        },
        {
          question: {
            easy: "OK — but why does the magic get BIGGER every year?",
            medium: 'So where does the COMPOUNDING come in?',
            hard: 'What makes compounding different from simple interest?',
          },
          reveal: {
            easy:
              "Year 1: $20 grows to $21. (Bank paid you $1.) Year 2: that $21 grows — not the original $20. So you earn interest on the interest! Tiny snowball, rolling downhill, getting bigger.",
            medium:
              "Year 1: $20 × 5% = $1. Now you have $21. Year 2: the 5% is on $21, not $20. So you earn $1.05. Year 3: 5% of $22.05 = $1.10. The base GROWS each year. That growth-on-growth is compounding.",
            hard:
              "Simple interest = P·r·t (linear). Compound = P·(1+r)^t (exponential). Each period's interest joins the principal, so future interest accrues on a larger base. The marginal interest grows over time.",
          },
        },
        {
          question: {
            easy: "What's the SINGLE most important thing to make compounding work?",
            medium: 'What variable matters most in the compounding equation?',
            hard: 'Which input dominates: rate, principal, or time?',
          },
          reveal: {
            easy:
              "TIME. Time is the real magic. Even a tiny amount + a long time = a HUGE pile. That's why starting young beats starting rich.",
            medium:
              "Time, by a wide margin. Rate doubles → result doubles-ish. Principal doubles → result doubles. But time doubles → result grows EXPONENTIALLY. The clock is the hero.",
            hard:
              "Time appears in the exponent — it has more leverage than rate or principal which appear linearly. This is why early starters win even at lower rates and smaller deposits.",
          },
        },
      ],
    },

    // ─── Concept cards (4 cards — Time is the secret 4th) ──────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Ingredients of Money Magic',
      subheading: 'Most adults only know three. The 4th one is the most important.',
      cards: [
        {
          emoji: '💵',
          title: 'Principal',
          desc: {
            easy: 'Principal is the money you START with. The original $20 you put in the bank — that\'s your principal.',
            medium:
              'Principal = the money you put in. Bigger principal means bigger growth, but principal alone isn\'t the secret. It\'s just the seed.',
            hard:
              'Principal is the initial deposit. A higher base scales the output linearly, but on a 30-year horizon it is the lowest-leverage variable of the three classical inputs.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '📈',
          title: 'Interest',
          desc: {
            easy: 'Interest is the EXTRA money the bank pays you. If you have $20 and the bank pays 5%, you get $1 extra every year.',
            medium:
              'Interest is what the bank pays you to hold your money. Expressed as a percent ("rate"). 5% means $5 for every $100, every year.',
            hard:
              'Interest rate r is the annualized cost of capital. APY accounts for compounding frequency; APR does not. Higher r accelerates growth — but is also a risk signal (high yield = high risk).',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '🔁',
          title: 'Compounding',
          desc: {
            easy: 'Compounding is interest EARNING ITS OWN INTEREST. Like a snowball that gets bigger as it rolls — and then THAT bigger snowball rolls and gets even bigger!',
            medium:
              'Compounding = growth on growth. Each year\'s interest gets added to the principal, so next year you earn interest on a bigger pile. It accelerates.',
            hard:
              'Compounding converts a linear stream into an exponential one. P·(1+r)^t — the (1+r)^t term doubles roughly every 72/r years (rule of 72). Compounding frequency further amplifies returns.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '⏳',
          title: 'Time (THE secret)',
          desc: {
            easy: 'TIME is the secret weapon. The LONGER you leave your money alone, the bigger the snowball. A kid who saves at 10 will have WAY more money at 40 than someone who starts at 30. Same money. More time. Way more money.',
            medium:
              'Time is the most powerful lever. It sits in the EXPONENT of the formula — so doubling time roughly DOUBLES your final wealth. That\'s why "start now" beats "save more later."',
            hard:
              'Time is the dominant variable: P·(1+r)^t. It enters as an exponent, so its leverage is multiplicative rather than additive. This is why financial advisors say "the best time to plant a tree was 20 years ago; the second best is today."',
          },
          color: '#FFF0F5',
        },
      ],
    },

    // ─── Calc-challenge: 4-week parent match ───────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: Your First Real Pile',
      setup: {
        easy: 'You save $10 each week for 4 weeks. At the end, your parent gives you a 10% bonus on your total piggy bank. How much do you have?',
        medium:
          "Real scenario: you save $10/week for 4 weeks. At the end of week 4, your parent adds a 10% match on your TOTAL piggy bank. What's your final balance?",
        hard:
          'Save $10/week × 4 weeks. At t=4 a 10% terminal match is applied to the accumulated principal. Compute final balance.',
      },
      problem: {
        givens: [
          { label: 'weekly save', value: 10, suffix: '$' },
          { label: 'weeks', value: 4 },
          { label: 'parent match', value: 10, suffix: '%' },
        ],
        answerLabel: 'Total',
        answer: 44,
        suffix: '$',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          "Step 1: $10 × 4 weeks = $40 saved. Step 2: 10% of $40 = $4 bonus. Step 3: $40 + $4 = $44. You doubled your weekly allowance just by saving!\n\nNow watch the SECRET: if your parent gave you the 10% bonus EVERY week instead of just at the end, you\'d have about $51. That extra $7 is from compounding. The earlier the bonus arrives, the more it grows.",
        medium:
          'Total saved = $10 × 4 = $40. Match = 10% × $40 = $4. Final balance = $44.\n\nBut here\'s the magic: if the 10% match compounded WEEKLY instead of just terminally, you\'d have $51.05 instead of $44. That extra $7 is pure compounding — the SAME money showing up at different times produces different outcomes.',
        hard:
          'Terminal balance = principal × (1 + match). Principal = Σ deposits = $40. Match = 0.10. Final = $40 × 1.10 = $44.\n\nNow contrast with weekly compounding at 10%: B_t = (B_{t-1} + 10)·1.10. Iterating from B_0 = 0 yields B_4 ≈ $51.05. The $7.05 delta is compounding\'s value. Apply this asymmetry over decades and you get the Buffett curve.',
      },
    },

    // ─── Brainstorm: kid's own save-goals ladder ──────────────────────
    {
      kind: 'brainstorm',
      heading: '🎯 Your Save-Goal Ladder',
      prompt: {
        easy:
          'List 3 things you would save for — at THREE different sizes: a small goal (like $5), a medium goal (like $50), and a BIG goal (like $500). Real things you actually want!',
        medium:
          'Build your save-goal ladder. List 3 goals at 3 different scales: small ($5-ish), medium ($50-ish), and big ($500+). Specific, real things you want.',
        hard:
          'Define a 3-tier savings goal ladder: short-term ($5), mid-term ($50), long-term ($500+). For each, write the specific target and a rough timeline.',
      },
      minItems: 3,
      placeholder: 'e.g. $5 — a new pack of stickers...',
      hints: [
        {
          easy: 'Small ($5): something you want THIS week — a snack, a sticker, a small toy.',
          medium: 'Small tier: under $10 — something you could buy this week if you wanted (treat, sticker, mini-toy).',
          hard: 'Short-tier targets test the discipline of choosing future $5 over present $5 — surprisingly hard until practiced.',
        },
        {
          easy: 'Medium ($50): something you want in the next few months — a video game, a Lego set, a fancy hat.',
          medium: 'Medium tier: $30-100 — needs 1-3 months to save up. Video game, Lego set, art kit.',
          hard: 'Mid-horizon targets are where the savings habit becomes visible to you — typical 8-12 weeks for an allowance-driven build.',
        },
        {
          easy: 'BIG ($500): something HUGE — a bike, a tablet, money you give to your favorite cause.',
          medium: 'Big tier: $300+ — a year-long save. Bike, tablet, big trip, donation to a cause you care about.',
          hard: 'Long-horizon targets are where compounding starts to do visible work — annual returns layer onto contributions.',
        },
        {
          easy: 'Pick goals that EXCITE you. The more you really want it, the easier it is to skip the candy bar today.',
          medium: 'Pick goals that make your eyes light up. Boring goals lose to candy. Vivid goals beat candy.',
          hard: 'Vividness of the goal is the behavioral lever. The savings rate is constrained by goal salience more than by available cash flow.',
        },
        {
          easy: 'Write the EXACT thing — not just "a toy" but "a green skateboard with flames." Real beats vague.',
          medium: 'Specifics beat generics. "$80 for a basketball" out-saves "money for sports stuff."',
          hard: 'Specificity sharpens commitment device. Anchor goals to a concrete artifact or experience, not a category.',
        },
        {
          easy: 'For the BIG goal, write what date you want to hit it by. A real deadline makes you move.',
          medium: 'Add a target date to each goal. Deadlines convert wishes into plans.',
          hard: 'Add a time-bound completion target. Goals without dates remain motivationally inert.',
        },
      ],
      closer: {
        easy:
          'Pick your ONE favorite goal — the one you really want most — and start saving for it this week. One goal beats six wishes.',
        medium:
          'Pick one goal to actually start on this week. The ladder gives you direction, but you climb it one rung at a time.',
        hard:
          'Pick one and start. The ladder is for clarity, not for parallel execution — beginners over-extend across rungs and stall.',
      },
    },

    // ─── Connect: same math, bigger investors ──────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Same Math, Famous Names',
      concept: {
        easy:
          'Compound interest is so powerful that it built the fortune of the world\'s most famous investors. Same math you just learned.',
        medium:
          'Every famous long-term investor uses the same math your $44 piggy bank uses. The variables just get bigger — but the equation is identical.',
        hard:
          'The compounding equation scales without modification from kid-scale to billionaire-scale. The differentiators are the variables (P, r, t) — not the math.',
      },
      examples: [
        {
          emoji: '👴',
          who: 'Warren Buffett',
          story: {
            easy: 'Warren Buffett bought his first stock at age 11. He had only $114.75. He\'s now worth over $100 BILLION. He didn\'t do anything magical — he just started young and let TIME do the work.',
            medium:
              'Warren Buffett bought his first stock at age 11 with $114.75. He\'s now worth ~$140 billion. He famously said 99% of his wealth was earned after age 50 — the compounding curve goes nearly vertical once enough time has passed.',
            hard:
              "Buffett's wealth profile demonstrates the back-loaded nature of compounding: he reached his first $1M at 30, $1B at 56, $10B at 70, $100B at 90. The curve approximates P·(1.20)^t over a 75-year horizon — the late decades dominate.",
          },
        },
        {
          emoji: '💼',
          who: 'The 401(k)',
          story: {
            easy: 'Grown-ups have a special savings account called a 401(k). Their employer ADDS money to it (a "match" — just like your parent\'s 10%!). Most grown-ups who use this end up with hundreds of thousands of dollars by retirement, without much effort.',
            medium:
              'A 401(k) is the grown-up version of your piggy bank. Employees save a percent of their paycheck; the employer adds a 50-100% match (free money!); it compounds in the stock market at ~7%/year. A worker who saves $5K/year from age 25 to 65 ends up with ~$1.1M.',
            hard:
              "401(k)s combine the three compounding multipliers: regular contribution (DCA), employer match (free principal), and tax deferral. A 25-year-old saving 10% of $50k salary with a 5% employer match at 7% annual return retires at 65 with ≈ $1.1M — most of it interest, not principal.",
          },
        },
        {
          emoji: '🍎',
          who: 'Apple stock',
          story: {
            easy: 'In 1980, Apple started selling its stock at $0.10 a share. Today, just ONE share is worth over $200. If your grandparent put $100 in Apple stock when they were a kid... that pile is now worth over $200,000.',
            medium:
              "Apple's IPO in 1980 was at a split-adjusted $0.10/share. Today it trades around $200. $100 invested at IPO and held = roughly $200,000 today — a 2,000× return over 45 years. Compounding at ~18% annually.",
            hard:
              'AAPL split-adjusted IPO price ≈ $0.10. Current price ≈ $200. $100 at IPO → ≈$200K today. CAGR ≈ 18% over 45 years. Same compounding equation — just a higher r and a longer t.',
          },
        },
      ],
      kicker: {
        easy: 'You just learned what makes EVERY rich person rich: time, patience, and one tiny multiplier. Now go use it.',
        medium:
          "Every long-term fortune you've heard of was built with the same equation you just solved on the last beat. The variables differ; the math doesn't.",
        hard:
          "P·(1+r)^t — every billionaire who built wealth (not inherited) is a manifestation of this single expression. You now know the equation better than most 40-year-olds.",
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You just learned the most powerful idea in money. The earlier you start, the more it works. You\'re ahead of most grown-ups already — that\'s NOT an exaggeration.",
        medium:
          'You\'ve got first-principles understanding of why money compounds, the math behind it, and a 3-tier goal ladder. That\'s real financial literacy. Now make it real — the mission is below.',
        hard:
          "You can now reason about time-value of money, the time-leverage of compounding, and the asymmetry of starting age vs. saving rate. Apply this consistently for 40 years and the rest takes care of itself.",
      },
      bonusTip: {
        easy:
          "Fun fact: if you save $5 a week from age 10 to age 18 — and your money grows 7% a year — you\'ll have around $2,750 by graduation. Without doing ANYTHING else. Just saving 5 bucks a week.",
        medium:
          "Fun fact: $5/week from age 10 to 18 at 7% annual return ≈ $2,750 at graduation. Keep it growing untouched until 65? It becomes ~$78,000. A teenager turning $2K into $78K through nothing but patience.",
        hard:
          'Compounding stress test: $5/week from age 10 to 18 (8 yrs, $2,080 contributed) at 7% becomes ~$2,750. Left untouched to age 65 (47 yrs at 7%) it becomes ~$78,000. The 8 years of saving created $2,750; the 47 years of waiting created $75,000.',
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'piggy-bank',
        emoji: '🏦',
        title: {
          easy: '4-Week Power-Up Save Challenge!',
          medium: 'Run a 4-week save-and-match with a parent',
          hard: 'Operate a real 4-week DCA save with a 10% match overlay',
        },
        pitch: {
          easy:
            'Save a little bit of your allowance every week for 4 weeks. Each week, your parent adds 10%. Watch your piggy bank GROW — for real, this time.',
          medium:
            'Run the real version of what you just calculated: 4 weeks, a fixed weekly save, and a 10% parent match on your total piggy bank each week. Track every step and see compounding for yourself.',
          hard:
            'Run a 4-week saving practice with weekly compounding 10% match. Track contributions, match accruals, and ending balance. Compare reality to your week-1 projection.',
        },
        steps: [
          {
            emoji: '🤝',
            text: {
              easy: 'Talk to a parent and pick how much you\'ll save each week (even $1 works!).',
              medium: 'Agree with a parent on your weekly save amount and a fair 10% match formula.',
              hard: 'Negotiate the deposit cadence and match formula with your parent (consider weekly vs. terminal match).',
            },
          },
          {
            emoji: '🐷',
            text: {
              easy: 'Find a SAFE spot for your money: a real piggy bank, a labeled jar, or a kid\'s bank account.',
              medium: 'Choose a storage location — physical (locked box) or digital (kid savings account).',
              hard: 'Choose the storage vehicle: physical (zero-yield), digital savings (low yield), or stock-app custodial (variable).',
            },
          },
          {
            emoji: '📅',
            text: {
              easy: 'Pick the SAME day each week (Sundays work great) to add your money.',
              medium: 'Pick a fixed deposit day each week. Consistency is the whole game.',
              hard: 'Commit to a fixed deposit cadence — variance from cadence is the #1 failure mode in DCA practice.',
            },
          },
          {
            emoji: '✍️',
            text: {
              easy: 'Write down what you saved + what your parent added — every week.',
              medium: 'Log each week: deposit, match, running total. Use the printed tracker.',
              hard: 'Maintain a weekly log: principal Δ, match Δ, cumulative balance.',
            },
          },
          {
            emoji: '🎉',
            text: {
              easy: 'At the end of 4 weeks, count it all up. How does it compare to the math?',
              medium: 'After week 4, total it up. Compare reality vs. your week-1 projection.',
              hard: 'At t=4 reconcile actual vs. projected. Note variance sources (missed weeks, match calculation drift).',
            },
          },
        ],
        reflection: [
          {
            key: 'weekly',
            prompt: {
              easy: 'How much did you save each week?',
              medium: 'Your weekly save amount',
              hard: 'Mean weekly contribution',
            },
            type: 'number',
            suffix: '$',
            placeholder: '5',
          },
          {
            key: 'final',
            prompt: {
              easy: 'What\'s the total in your piggy bank after 4 weeks?',
              medium: 'Final piggy-bank total after week 4',
              hard: 'Terminal balance at t=4',
            },
            type: 'number',
            suffix: '$',
            placeholder: '22',
          },
          {
            key: 'goal',
            prompt: {
              easy: 'What are you saving up for?',
              medium: 'What\'s the goal this is going toward?',
              hard: 'Stated target — what is the principal earmarked for?',
            },
            type: 'text',
            placeholder: 'A new skateboard',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What was the hardest part?',
              medium: 'What surprised you — about saving or about yourself?',
              hard: 'Largest variance from your week-1 mental model. What would you change?',
            },
            type: 'longtext',
            placeholder: 'Write a sentence or two…',
          },
        ],
        parentNote: {
          easy: 'Even $1/week is plenty. The lesson is the habit, not the dollars.',
          medium:
            'Any amount works — $1/week is fine. The lesson is the cadence + the visible match. Consider opening a real kids\' savings account if you don\'t have one yet.',
          hard:
            'Match formula should be predictable, not negotiated weekly. If using a real savings account, choose one with no monthly fee and a visible interest line. The compounding is real and worth showing.',
        },
        printables: {
          trackers: [
            {
              title: '4-Week Piggy Bank Tracker',
              note: 'Fill in one row each week. Watch the "Total" column grow!',
              columns: ['Week', 'Date', 'I Saved', 'Parent Match (10%)', 'Total in Piggy Bank'],
              rows: 4,
            },
          ],
          worksheets: [
            {
              title: 'My Save-Goal Ladder',
              blocks: [
                {
                  label: '🪜 Small goal (under $10)',
                  hint: 'Something you could save up for in a week or two.',
                  lines: 2,
                },
                {
                  label: '🪜 Medium goal ($30-$100)',
                  hint: 'A few months of saving. Be specific!',
                  lines: 2,
                },
                {
                  label: '🪜 Big goal ($300+)',
                  hint: 'A year-long save. Write the EXACT thing and the date.',
                  lines: 2,
                },
                {
                  label: '💵 My weekly save amount',
                  hint: 'What you\'ll add to the piggy bank every week.',
                  equation: '$ _______  every  _______ ay',
                },
                {
                  label: '🎯 My #1 goal cost',
                  hint: 'The exact dollar amount of the goal you\'re going for first.',
                  lines: 1,
                  suffix: '$',
                },
                {
                  label: '🗓️ My target date',
                  hint: 'When do you want to hit this goal? Be specific!',
                  lines: 1,
                },
                {
                  label: '✏️ Draw your compounding curve',
                  hint: 'Sketch a graph: weeks on the bottom, total saved going up. Curve up, not straight!',
                  lines: 6,
                },
              ],
            },
          ],
          checklists: [
            {
              title: 'Piggy Bank Setup Checklist',
              items: [
                'A real piggy bank, jar, or labeled envelope',
                'A safe spot to keep it (drawer, shelf, parent\'s room)',
                'A pen to write on the tracker',
                'A deposit day picked (every Sunday? Friday allowance day?)',
                'Parent agreed to the 10% match',
                'Tracker printed and ready',
                'My goal written down so I can see it',
              ],
              note: 'Tip: tape the goal to your piggy bank. Seeing it daily beats forgetting it monthly.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
