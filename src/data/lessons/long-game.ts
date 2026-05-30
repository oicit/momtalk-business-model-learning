/**
 * The Long Game — "Time in the market beats timing the market."
 *
 * The hardest, most valuable investing habit a kid can build: patience.
 * Good companies wobble and dip, but over years they tend to recover and
 * grow. The biggest mistake young investors make is panic-selling when
 * prices drop. Stay calm, stay invested, and let compounding snowball.
 *
 * Lesson in the Stock Investing category (after Index Funds). Education-
 * first: everything is pretend ⭐, never real money.
 *
 * Beat order:
 *   intro → think-deeper (why do prices dip, and what should you do?) →
 *   concept-cards (the rules of the long game) → calc-challenge (100⭐
 *   snowballs at ~10%/yr vs. a kid who panic-sold) → connect (real-world
 *   patience stories) → quiz → outro → real-world-mission (track ONE
 *   company for a week and practice NOT selling on a dip).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'long-game',
  themeKey: 'index-funds',
  emoji: '⏳',
  title: 'The Long Game',
  subtitle: {
    easy: "The secret isn't picking fast — it's WAITING. Patient investors win!",
    medium:
      "The biggest investing superpower is patience: don't panic when prices dip, and let time grow your money.",
    hard:
      "Why 'time in the market beats timing the market' — panic-selling, recovery, and the snowball of multi-year compounding, kid-sized.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'thinking',
      text: {
        easy:
          "Here's a secret most kids don't know: the best investors aren't the fastest — they're the most PATIENT. When prices wobble down, they don't panic. They wait. And waiting can make a little turn into a LOT. ⏳",
        medium:
          "You learned how to own companies. Now the hardest part: holding them. Prices go up AND down, and when they dip, most people get scared and sell. Today you'll learn why staying calm is the real superpower.",
        hard:
          "Owning good companies is only half the game. The other half is behavior: prices fluctuate, and the urge to sell during a dip is the single biggest wealth-destroyer for new investors. Let's learn the discipline of the long game.",
      },
    },

    // ─── Think-deeper: why do prices dip, and what do you do? ───────────
    {
      kind: 'think-deeper',
      heading: '🤔 What Do You Do When Prices Drop?',
      intro: {
        easy: "Let's think about this together.",
        medium: "Let's reason through what really happens when a stock dips.",
        hard: "First-principles look at why dips happen and why selling into them hurts.",
      },
      layers: [
        {
          question: {
            easy: "Your favorite company's price dropped today. Did the company break?",
            medium: "A company you own dropped 10% this week. Did the actual company get worse?",
            hard: "A holding's price falls sharply. Has the underlying business necessarily changed?",
          },
          reveal: {
            easy:
              "Usually NOT! Prices wiggle up and down every single day for all kinds of reasons. The lemonade stand still has lemons — the sign just changed its number for a bit.",
            medium:
              "Often not at all. Prices move daily on news, moods, and rumors — not always on real changes to the company. A great business is still great even when its price dips.",
            hard:
              "Frequently not. Short-term prices reflect sentiment and noise as much as fundamentals. A temporary price decline doesn't mean the business's long-term earnings power has changed.",
          },
        },
        {
          question: {
            easy: "When the price drops, what do most scared people do?",
            medium: "What's the mistake most beginners make during a dip?",
            hard: "What's the most common — and most costly — behavioral error during a drawdown?",
          },
          reveal: {
            easy:
              "They SELL — fast! They get scared and let go right when the price is low. That means they sold cheap. Then the price goes back up... without them. Ouch.",
            medium:
              "They panic-sell at the bottom. Selling low locks in the loss, and they usually miss the recovery that follows. Fear turns a temporary dip into a permanent loss.",
            hard:
              "Panic-selling: realizing losses at the trough and missing the rebound. Buying high and selling low — the exact opposite of the goal — driven by loss aversion, not analysis.",
          },
        },
        {
          question: {
            easy: "So what should a smart, calm investor do instead?",
            medium: "What does a patient investor do when prices fall?",
            hard: "What's the disciplined response to a drawdown in a quality holding?",
          },
          reveal: {
            easy:
              "Stay calm and WAIT. Good companies usually grow back over time — and often higher than before. The patient kid who held on still owns the whole thing. 🪄",
            medium:
              "They hold — or even keep buying. Historically, good companies and the whole market have recovered from every dip given enough time. Patience captures the rebound.",
            hard:
              "Hold the thesis. As long as the business is sound, drawdowns are temporary; the market has recovered from every historical decline over long horizons. Time, not timing, is the edge.",
          },
        },
      ],
    },

    // ─── Concept cards: the rules of the long game ──────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Rules of the Long Game',
      subheading: 'Four calm habits that beat fast, scared trading.',
      cards: [
        {
          emoji: '⏳',
          title: 'Time Beats Timing',
          desc: {
            easy: "Nobody can guess the best day to buy or sell. But staying IN for a long time? That almost always wins.",
            medium:
              "'Time in the market beats timing the market.' Trying to guess the perfect moment fails; simply staying invested for years works.",
            hard:
              "You can't reliably time tops and bottoms. Maximizing time invested — not predicting entries and exits — is what compounds wealth.",
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🧘',
          title: "Don't Panic-Sell",
          desc: {
            easy: "When the price dips, DON'T let go in a panic. Take a breath. Good companies usually bounce back.",
            medium:
              "The #1 beginner mistake is selling scared during a dip. Stay calm — selling low locks in the loss and misses the recovery.",
            hard:
              "Panic-selling crystallizes paper losses and forfeits the rebound. Emotional discipline during drawdowns is the highest-value investing skill.",
          },
          color: '#FFF0F5',
        },
        {
          emoji: '⛄',
          title: 'The Snowball',
          desc: {
            easy: "A little bit, held a long time, grows into a LOT. Your money makes money, and THAT makes more money!",
            medium:
              "Compounding is a snowball: small amounts grow, then the growth grows too. The longer you hold, the bigger the snowball gets.",
            hard:
              "Compounding is exponential: each year's return earns its own return. Multi-decade horizons let small principals become large sums.",
          },
          color: '#E5FAF1',
        },
        {
          emoji: '🌱',
          title: 'Start Early, Stay Calm',
          desc: {
            easy: "Kids have the BEST superpower for investing: lots of time! Start early and just let it grow.",
            medium:
              "The earlier you start, the more years your snowball rolls. Your biggest advantage as a kid is TIME, not money.",
            hard:
              "Years invested is the most powerful lever in compounding — and the one young investors have most of. Start early; stay the course.",
          },
          color: '#FFFDE8',
        },
      ],
    },

    // ─── Calc challenge: the snowball vs. the panic-seller ──────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 The Snowball in Action',
      setup: {
        easy: "You put 100⭐ in and it grows about 10 out of 100 each year. Year 1: 100→110. Year 2: 110→121. Year 3: 121→133. Year 4: 133→146. After 5 years, about how many ⭐ do you have?",
        medium:
          "100⭐ grows ~10% per year, snowballing: 100→110→121→133→146→161. A calm kid holds all 5 years. About how many ⭐ does the patient kid have after year 5?",
        hard:
          "With a 100⭐ principal compounding at ~10%/yr (100→110→121→133→146→161), compute the patient holder's balance after 5 years and contrast with a kid who panic-sold at year 2 (121⭐).",
      },
      problem: {
        givens: [
          { label: 'You start with', value: 100, suffix: '⭐' },
          { label: 'Grows about', value: 10, suffix: '%/yr' },
          { label: 'Years you stay calm', value: 5, suffix: 'yrs' },
        ],
        answerLabel: 'Stars after 5 years',
        answer: 161,
        tolerance: 1,
        suffix: '⭐',
      },
      walkthrough: {
        easy: "Watch the snowball: 100→110→121→133→146→161⭐. The patient kid ends with ~161⭐! But a kid who got scared and SOLD at year 2 only kept 121⭐ — and missed all the growth after. Staying calm won by 40⭐!",
        medium:
          "Each year grows on the BIGGER number: 100→110→121→133→146→161⭐. The patient kid: ~161⭐. The panic-seller who quit at year 2: stuck at 121⭐. Same start, but staying calm 3 more years added ~40 extra ⭐.",
        hard:
          "100 × 1.10^5 ≈ 161⭐. The panic-seller exited at year 2 (121⭐) and missed years 3–5 entirely. The ~40⭐ gap is the cost of selling into fear — the rebound happens to the people who stayed.",
      },
    },

    // ─── Connect: patience in the real world ────────────────────────────
    {
      kind: 'connect',
      heading: '🌍 Patience in Real Life',
      concept: {
        easy: 'Lots of people got rich the slow, calm way — by NOT selling when they got scared.',
        medium: 'The "stay calm and wait" idea is how patient investors quietly out-earn frantic traders.',
        hard: 'Long-horizon discipline and avoiding behavioral mistakes underpin most real investing success.',
      },
      examples: [
        {
          emoji: '🧙',
          who: "Buffett's 'Forever'",
          story: {
            easy: "Warren Buffett says his favorite time to hold a great company is FOREVER. He waits for years and years — and dips don't scare him.",
            medium:
              "Buffett says his favorite holding period is 'forever.' He buys good companies and sits through every dip — patience made him one of the richest investors ever.",
            hard:
              "Buffett's edge is largely temperament: a multi-decade horizon and refusal to sell quality during drawdowns. 'Our favorite holding period is forever.'",
          },
        },
        {
          emoji: '📉',
          who: 'The Big Dips That Recovered',
          story: {
            easy: "The whole market has had scary drops MANY times. Every single time, it grew back bigger if you just waited. ⏳",
            medium:
              "The market has crashed and dipped many times in history. Every time, patient holders saw it recover and climb to new highs — the scared sellers missed it.",
            hard:
              "Across history, the broad market has recovered from every major drawdown given enough time. Sellers locked in losses; holders captured the full rebound.",
          },
        },
        {
          emoji: '🌱',
          who: 'Your Future Self',
          story: {
            easy: "If you start young and just leave your snowball alone, by the time you're a grown-up it could be HUGE. Time is your secret weapon!",
            medium:
              "A kid who starts early and stays calm for decades can end up with far more than someone who started late or kept panic-selling. Time is your biggest advantage.",
            hard:
              "Starting decades earlier dramatically widens the compounding runway. Your youth — not your wallet — is the most valuable investing asset you have.",
          },
        },
      ],
      kicker: {
        easy: 'Doing NOTHING when you\'re scared is one of the hardest — and smartest — moves. 🧘',
        medium: 'Sometimes the best action is no action. Sit tight and let time work.',
        hard: 'Inaction during volatility is an active, disciplined choice — and usually the winning one.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Long Game Check',
      questions: [
        {
          q: 'A good company\'s price dips. What does a patient investor usually do?',
          options: [
            'Stay calm and keep holding',
            'Panic and sell everything fast',
            'Never buy a stock again',
          ],
          correct: 0,
        },
        {
          q: 'What does "time in the market beats timing the market" mean?',
          options: [
            'Staying invested a long time beats guessing the perfect day',
            'You should sell every afternoon',
            'Only buy on Mondays',
          ],
          correct: 0,
        },
        {
          q: 'What is the biggest mistake young investors make?',
          options: [
            'Selling scared when prices dip',
            'Holding good companies too long',
            'Owning more than one company',
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
        easy: "Now you know the calmest secret in investing: when prices dip, DON'T panic — just wait. Patience grows the snowball! ⏳",
        medium:
          "You learned the hardest skill of all: staying calm. Time in the market beats timing it, and patience beats panic every time.",
        hard:
          "You've internalized the behavioral edge: hold quality through drawdowns, maximize time invested, and let compounding do the heavy lifting.",
      },
      bonusTip: {
        easy: "Tip: when you feel scared about a price, take a deep breath and do nothing. 🧘",
        medium: "Pro tip: the best investors feel the fear too — they just don't act on it.",
        hard: "Edge: build the habit of inaction during volatility now; it pays off for a lifetime.",
      },
    },

    // ─── Real-world mission: track ONE company, practice not selling ────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'long-game',
        emoji: '⏳',
        title: {
          easy: 'The Stay-Calm Challenge',
          medium: 'Track ONE company for a week — and practice NOT selling',
          hard: 'One-week patience drill: hold a single pretend position through any dip',
        },
        pitch: {
          easy: "Pick ONE company you like. Pretend you own it. Watch its price for a week — and if it dips, practice staying CALM and NOT selling!",
          medium:
            "Choose one real company, give it 100 pretend ⭐, and follow its price for a week. If it dips, practice the hardest skill: doing nothing.",
          hard:
            "Hold a single pretend 100⭐ position for a week. Observe daily moves, and if a drawdown occurs, deliberately practice holding instead of selling.",
        },
        steps: [
          {
            emoji: '✍️',
            text: {
              easy: 'Pick ONE company you know and like (like Lego, Disney, or Nintendo).',
              medium: 'Choose one real company you recognize to "own" with 100 pretend ⭐.',
              hard: 'Select one recognizable company as your single pretend holding (100⭐).',
            },
          },
          {
            emoji: '📈',
            text: {
              easy: 'With a grown-up, write down its price today. That\'s your start.',
              medium: 'With a grown-up, record its day-1 share price as your starting point.',
              hard: 'Record the day-1 price with a grown-up as your cost basis.',
            },
          },
          {
            emoji: '🗓️',
            text: {
              easy: 'Check the price each day for a week. Write down each day.',
              medium: 'Log the price once a day for about a week.',
              hard: 'Track the daily price for ~7 days in a simple log.',
            },
          },
          {
            emoji: '🧘',
            text: {
              easy: 'If the price goes DOWN one day — DON\'T sell! Take a breath and keep watching.',
              medium: 'On any down day, practice staying calm and NOT selling — just notice how you feel.',
              hard: 'On any drawdown day, deliberately hold and observe your emotional reaction.',
            },
          },
        ],
        reflection: [
          {
            key: 'did-it-dip',
            prompt: {
              easy: 'Did your company\'s price ever go DOWN during the week?',
              medium: 'Did your company have any down days this week?',
              hard: 'Did your holding experience any drawdown days?',
            },
            type: 'text',
            placeholder: 'yes / no',
          },
          {
            key: 'how-it-felt',
            prompt: {
              easy: 'When it dipped, did you feel like selling? How did staying calm feel?',
              medium: 'On a down day, did you feel the urge to "sell"? How did staying calm feel?',
              hard: 'Describe the urge to sell during a dip and how practicing inaction felt.',
            },
            type: 'longtext',
          },
          {
            key: 'end-vs-start',
            prompt: {
              easy: 'Was the price higher, lower, or about the same at the end of the week?',
              medium: 'By the end of the week, was the price up, down, or about flat vs. day 1?',
              hard: 'Net price change over the week vs. day-1 basis?',
            },
            type: 'text',
            placeholder: 'up / down / about the same',
          },
        ],
        parentNote: {
          easy: "Use any free stock app to look up the price together each day. It's 100% pretend — the goal is practicing calm, not real trading.",
          medium:
            "Check prices together with any free quote source. This is pretend/paper only — the learning goal is emotional patience, not real investing.",
          hard:
            "Pretend position only; no real money. Pull quotes from any free source and use the week to model calm, disciplined behavior during normal price swings.",
        },
        printables: {
          trackers: [
            {
              title: 'My Stay-Calm Price Log',
              columns: ['Day', 'Price today', 'Up or down?', 'Did I stay calm?'],
              rows: 7,
              note: 'Pretend 100⭐ in ONE company. If it dips — breathe, and DON\'T sell!',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
