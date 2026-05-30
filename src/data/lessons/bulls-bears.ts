/**
 * Bulls & Bears — "When Prices Go Up and Down."
 *
 * Prices don't move in a straight line — some days (and years) they climb,
 * and some they fall. A "bull market" means prices going UP (a bull charges
 * up with its horns); a "bear market" means prices going DOWN (a bear swipes
 * down with its paw). BOTH are completely normal and happen over and over.
 *
 * The real lesson is emotional, not numeric: stay CALM. Scared people sell
 * when prices are low and regret it; patient people hold and often do better.
 * Feelings are not a plan. Lesson in the Stock Investing category.
 *
 * Beat order:
 *   intro → think-deeper (why do prices go up AND down?) →
 *   concept-cards (bull, bear, normal, stay calm) → decision (prices just
 *   dropped — panic-sell, hold, or freak out?) → connect (real ups & downs) →
 *   quiz → outro → real-world-mission (watch a pretend portfolio, mark each
 *   day bull or bear, practice a calm breath on red days).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'bulls-bears',
  themeKey: 'stocks',
  emoji: '🐂',
  title: 'Bulls & Bears',
  subtitle: {
    easy: "Sometimes prices go UP like a bull, sometimes DOWN like a bear — and BOTH are normal!",
    medium:
      "Markets climb and fall over and over. Meet the bull (up) and the bear (down) — and learn the one trick that beats both: stay calm.",
    hard:
      "Bull and bear markets, why prices rise and fall, and why emotional reactions — not the drops themselves — do the real damage. Kid-sized.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Did you know prices don't go up in a straight line? Some days they climb UP like a bull pushing with its horns 🐂, and some days they fall DOWN like a bear swiping its paw 🐻. Both are totally normal! Let's meet them.",
        medium:
          "You already know a stock is a slice of a company. But its price wiggles every single day! When prices go UP we call it a 'bull market.' When they go DOWN it's a 'bear market.' Today you'll learn why both happen — and how to stay calm.",
        hard:
          "Stock prices move constantly, sometimes up for years (a bull market), sometimes down (a bear market). Both are normal parts of investing. The hard part isn't the drops — it's not panicking when they come. Let's learn why.",
      },
    },

    // ─── Think-deeper: why do prices go up AND down? ────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Do Prices Wiggle?',
      intro: {
        easy: "Let's figure out why prices don't just sit still.",
        medium: "Let's reason through why prices keep moving up and down.",
        hard: "First-principles look at why prices fluctuate — and why that's okay.",
      },
      layers: [
        {
          question: {
            easy: "Why might LOTS of people want to buy a company one day?",
            medium: "What makes a company's price go UP?",
            hard: "What drives a stock's price higher?",
          },
          reveal: {
            easy:
              "Maybe the company made something everyone loves! When lots of people want a piece, the price goes UP — like the last cookie everyone wants. That's a bull pushing prices UP! 🐂",
            medium:
              "When a company does well and lots of people want to own it, more buyers than sellers push the price UP. Lots of 'up' over time is a bull market.",
            hard:
              "Good news, growing profits, and high demand mean more buyers than sellers, lifting the price. A long stretch of rising prices is a bull market.",
          },
        },
        {
          question: {
            easy: "And why might prices go DOWN sometimes?",
            medium: "What makes prices fall?",
            hard: "What pushes prices lower?",
          },
          reveal: {
            easy:
              "Maybe people get worried, or a company has a rough year. Worried people sell, and prices go DOWN — like a bear swiping its paw down. 🐻 It happens to EVERYONE.",
            medium:
              "Sometimes there's bad news or people get nervous, so more people sell than buy and prices DROP. A long stretch of falling prices is a bear market. Every investor lives through these.",
            hard:
              "Bad news, fear, or fewer buyers than sellers push prices down. A sustained decline is a bear market — uncomfortable, but a normal, repeating part of every market's history.",
          },
        },
        {
          question: {
            easy: "If prices ALWAYS go up and down, what should you DO?",
            medium: "Since both happen over and over, what's the smart move?",
            hard: "Given that volatility is inevitable, what's the optimal behavior?",
          },
          reveal: {
            easy:
              "Stay CALM! Drops always happened before, and prices climbed back up again. People who panic and sell when it's low usually feel sorry later. Take a deep breath. 🫁",
            medium:
              "Stay calm and keep holding. Markets have dropped MANY times — and over long stretches they've climbed back higher. Panicking and selling low is the mistake; patience is the win.",
            hard:
              "Stay invested and don't react emotionally. Selling into a panic locks in losses; historically markets have recovered and reached new highs. Feelings are not a plan — patience is the edge.",
          },
        },
      ],
    },

    // ─── Concept cards: bull, bear, normal, stay calm ───────────────────
    {
      kind: 'concept-cards',
      heading: 'Meet the Bull and the Bear',
      subheading: 'Two animals that explain almost everything about how prices move.',
      cards: [
        {
          emoji: '🐂',
          title: 'Bull = UP',
          desc: {
            easy: 'A BULL pushes UP with its horns. A "bull market" means prices are going UP. Yay!',
            medium:
              'A bull attacks by thrusting its horns UPWARD — so a "bull market" is when prices are rising. Lots of happy, growing days.',
            hard:
              'A bull thrusts its horns up, which is why a sustained rise in prices is called a bull market — optimism and growth.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🐻',
          title: 'Bear = DOWN',
          desc: {
            easy: 'A BEAR swipes DOWN with its paw. A "bear market" means prices are going DOWN. It happens!',
            medium:
              'A bear swipes its paws DOWNWARD — so a "bear market" is when prices are falling. Scary, but normal and temporary.',
            hard:
              'A bear strikes downward with its paws, which is why a sustained decline is called a bear market — fear and falling prices.',
          },
          color: '#FBE9E7',
        },
        {
          emoji: '🔁',
          title: 'Both Are Normal',
          desc: {
            easy: 'Up days and down days happen over and over, forever. Nobody can stop it — and that\'s okay!',
            medium:
              'Bull and bear times take turns again and again. This isn\'t broken — it\'s just how markets have always worked.',
            hard:
              'Bull and bear phases alternate cyclically throughout history. Volatility isn\'t a malfunction; it\'s the normal price of long-term growth.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🧘',
          title: 'Stay Calm',
          desc: {
            easy: 'When prices drop, take a deep breath instead of panicking. Calm people usually do better!',
            medium:
              'The secret isn\'t guessing the wiggles — it\'s staying calm. People who hold steady through drops usually beat people who panic and sell.',
            hard:
              'Emotional control beats market timing. Investors who stay the course through downturns historically outperform those who sell in a panic. Feelings are not a plan.',
          },
          color: '#E5FAF1',
        },
      ],
    },

    // ─── Decision: prices just dropped — what do you do? ────────────────
    {
      kind: 'decision',
      heading: '🎬 Uh-Oh, a Red Day!',
      scenario: {
        easy: "You own a pretend basket of companies. You check today and... whoa, the price went DOWN a lot! Your tummy feels nervous.",
        medium:
          "Your pretend portfolio just dropped a LOT in one day — it's a red day. Lots of people online are saying scary things. Your heart's beating fast.",
        hard:
          "Your pretend portfolio fell sharply today. The news is gloomy and everyone seems worried. You feel the urge to DO something right now.",
      },
      question: {
        easy: "What do you do?",
        medium: "What's your move?",
        hard: "How do you respond?",
      },
      choices: [
        {
          label: {
            easy: 'Panic and sell EVERYTHING right now!',
            medium: 'Panic-sell all of it immediately',
            hard: 'Sell the entire position immediately',
          },
          feedback: {
            easy: "Whoa — selling when it's low usually means you LOSE the chance to ride back up. Most people who do this feel sorry later. Take a breath instead.",
            medium:
              "Selling in a panic locks in the loss at the worst moment. When prices later climb back, you've already missed it. This is the classic mistake.",
            hard:
              "Panic-selling converts a temporary paper drop into a permanent realized loss and risks missing the recovery. Historically the costliest move investors make.",
          },
        },
        {
          label: {
            easy: 'Take a deep breath, stay calm, and keep holding',
            medium: 'Stay calm, hold, and check with my grown-up',
            hard: 'Stay the course, hold, and discuss with a grown-up',
          },
          feedback: {
            easy: "Yes! 🌟 Drops always happened before and prices climbed back. Calm and patient usually wins. And asking your grown-up is always a great idea!",
            medium:
              "Smart! Markets have dropped many times and recovered. Staying calm and holding — and talking to a trusted grown-up — beats panicking nearly every time.",
            hard:
              "Correct. Remaining invested through downturns has historically rewarded patience, and looping in a trusted grown-up keeps decisions calm and informed.",
          },
          isPreferred: true,
        },
        {
          label: {
            easy: 'Freak out and stare at the price all day',
            medium: 'Freak out and refresh the price every minute',
            hard: 'Anxiously watch the price tick by tick all day',
          },
          feedback: {
            easy: "Staring and worrying just makes your tummy hurt — it doesn't help your money at all! Step away, breathe, go play. The wiggles aren't an emergency.",
            medium:
              "Watching every wiggle spikes your stress and tempts you into bad snap decisions. The drop isn't an emergency. Step away and breathe.",
            hard:
              "Obsessive monitoring amplifies anxiety and pushes you toward reactive mistakes. Reducing screen-checking improves both calm and outcomes.",
          },
        },
      ],
      realWorldReveal: {
        easy: "Real grown-up investors have lived through LOTS of scary drops — and the calm ones who kept holding almost always came out okay. Breathing beats panicking! 🫁",
        medium:
          "In real life, markets have crashed and recovered many times. The investors who did best weren't the smartest — they were the calmest. Staying put through the scary parts is the superpower.",
        hard:
          "Across every historical bear market, prices eventually recovered and made new highs. The differentiator wasn't prediction — it was discipline. Calm, patient holders consistently outperformed panicked sellers.",
      },
    },

    // ─── Connect: ups and downs in the real world ───────────────────────
    {
      kind: 'connect',
      heading: '🌍 Bulls & Bears in Real Life',
      concept: {
        easy: 'Up times and down times have happened over and over — and calm people kept going.',
        medium: 'Bull and bear markets show up all through history, and patience keeps winning.',
        hard: 'Market cycles repeat across decades; emotional discipline separates winners from the rest.',
      },
      examples: [
        {
          emoji: '📉',
          who: 'The Big Scary Drops',
          story: {
            easy: "Sometimes prices fell a LOT and everyone got scared. But after each scary time, prices climbed back up again. Every single time so far!",
            medium:
              "Markets have had some big drops where people panicked. But after each one, prices eventually recovered and went on to new highs. The calm folks were fine.",
            hard:
              "Every historical crash — and there have been many — was eventually followed by recovery and new highs. The pattern: scary, then patient, then higher.",
          },
        },
        {
          emoji: '🧙',
          who: "Buffett Stays Calm",
          story: {
            easy: "Warren Buffett says be brave when others are scared. When prices drop, he stays calm — and that's helped make him super rich!",
            medium:
              "Warren Buffett famously says to be 'greedy when others are fearful.' He doesn't panic in bear markets — he stays steady, and it's made him one of the richest investors ever.",
            hard:
              "Buffett's edge isn't prediction — it's temperament. Staying rational while others panic during bear markets is central to his decades of outperformance.",
          },
        },
        {
          emoji: '🌱',
          who: 'The Patient Saver',
          story: {
            easy: "People who kept their money in and didn't panic during scary times usually ended up with MORE than people who sold and ran.",
            medium:
              "Regular people who stayed invested through the downs — instead of selling in fear — usually ended up far ahead of those who jumped out.",
            hard:
              "Investors who remained fully invested through downturns historically far outperformed those who tried to dodge the drops by selling and re-buying.",
          },
        },
      ],
      kicker: {
        easy: 'The bear always shows up sometimes — and the bull always comes back. Stay calm! 🐂',
        medium: 'Bears come, bulls return. Your calmness is worth more than any prediction.',
        hard: 'Cycles are inevitable; your discipline through them is the real, repeatable edge.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Bulls & Bears Check',
      questions: [
        {
          q: 'A "bull market" means prices are doing what?',
          options: [
            'Going UP',
            'Going DOWN',
            'Staying frozen forever',
          ],
          correct: 0,
        },
        {
          q: 'When prices drop a lot (a bear market), what is the smart thing to do?',
          options: [
            'Stay calm, take a breath, and keep holding',
            'Panic and sell everything fast',
            'Stare at the price all day and worry',
          ],
          correct: 0,
        },
        {
          q: 'Are bull (up) and bear (down) times normal?',
          options: [
            'Yes — they happen over and over, forever',
            'No — something is broken if prices fall',
            'Only down times are normal',
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
        easy: "Now you know the bull 🐂 (UP) and the bear 🐻 (DOWN) — and the BIG secret: when prices drop, stay calm and breathe!",
        medium:
          "You learned that prices wiggle up and down forever — and that calmness, not panic, is what wins. Bulls and bears come and go; steady hands stay.",
        hard:
          "You've grasped market cycles and the most important investing skill of all: emotional discipline. Feelings are not a plan — patience is.",
      },
      bonusTip: {
        easy: "Tip: on a scary red day, take 3 deep breaths before doing ANYTHING. 🫁",
        medium: "Pro tip: the worse you want to 'do something' on a red day, the more you should pause first.",
        hard: "Edge: build a habit of pausing before acting on fear. The pause is where good decisions live.",
      },
    },

    // ─── Real-world mission: watch a pretend portfolio for a few days ───
    {
      kind: 'real-world-mission',
      mission: {
        id: 'bulls-bears',
        emoji: '🐂',
        title: {
          easy: 'Bull or Bear? Watch & Stay Calm',
          medium: 'Track a pretend portfolio — mark each day bull or bear',
          hard: 'Run a multi-day bull/bear watch with a calm-down routine',
        },
        pitch: {
          easy: "Pick a few pretend companies, check them each day, and mark if it was a bull day (up) or a bear day (down) — and breathe on the red ones!",
          medium:
            "Watch a pretend portfolio for several days. Each day, mark it 🐂 bull (up) or 🐻 bear (down), and practice a calm breath whenever it's red.",
          hard:
            "Monitor a pretend portfolio across ~5 days, tagging each day bull or bear, and run a 'stay calm' breathing routine on every down day to build emotional discipline.",
        },
        steps: [
          {
            emoji: '✍️',
            text: {
              easy: 'With a grown-up, pick 3 companies you know and pretend you own them.',
              medium: 'With a grown-up, choose 3 real companies for your pretend portfolio.',
              hard: 'With a grown-up, assemble a pretend 3-name portfolio to observe.',
            },
          },
          {
            emoji: '📅',
            text: {
              easy: 'Each day for about a week, look up if they went UP or DOWN.',
              medium: 'For ~5 days, check each day whether the portfolio rose or fell.',
              hard: 'Each day for ~1 week, record the portfolio\'s daily direction.',
            },
          },
          {
            emoji: '🐂',
            text: {
              easy: 'Mark each day: 🐂 BULL if it went up, 🐻 BEAR if it went down.',
              medium: 'Tag each day 🐂 bull (up) or 🐻 bear (down) on your tracker.',
              hard: 'Label every day bull or bear based on net daily move.',
            },
          },
          {
            emoji: '🫁',
            text: {
              easy: 'On a 🐻 bear day, take 3 slow deep breaths and stay calm. No panic!',
              medium: 'On every red day, do your 3-breath calm routine instead of worrying.',
              hard: 'On each down day, perform the breathing routine to practice staying calm.',
            },
          },
        ],
        reflection: [
          {
            key: 'bull-days',
            prompt: {
              easy: 'How many 🐂 BULL (up) days did you count?',
              medium: 'How many bull (up) days did you record?',
              hard: 'Count of bull days observed?',
            },
            type: 'number',
            suffix: 'days',
          },
          {
            key: 'bear-days',
            prompt: {
              easy: 'How many 🐻 BEAR (down) days did you count?',
              medium: 'How many bear (down) days did you record?',
              hard: 'Count of bear days observed?',
            },
            type: 'number',
            suffix: 'days',
          },
          {
            key: 'calm-feeling',
            prompt: {
              easy: 'Did breathing help you feel calm on a bear day? How did it feel?',
              medium: 'Did the calm-down breath help on red days? Describe how it felt.',
              hard: 'Reflect on whether the breathing routine reduced your urge to react on down days.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is pretend — no real money! Look up prices together using any free app. The goal is noticing ups and downs and practicing calm, not trading.",
          medium:
            "Pretend/paper portfolio only. Use any free quote source together. The learning goal is recognizing normal volatility and building a calm response — not real investing.",
          hard:
            "No real money involved. Pull quotes from any free source. Emphasize that daily moves are normal noise and that the real skill being practiced is staying calm, not predicting prices.",
        },
        printables: {
          trackers: [
            {
              title: 'My Bull & Bear Watch',
              columns: ['Day', 'Up or down?', 'Bull 🐂 or Bear 🐻', 'Did I breathe?'],
              rows: 7,
              note: 'On every 🐻 bear day, take 3 slow breaths and stay calm.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
