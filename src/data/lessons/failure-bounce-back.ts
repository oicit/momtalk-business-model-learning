/**
 * Failure & Bounce Back — "A flop is DATA, not who you are."
 *
 * The single most important mindset for any inventor or business builder:
 * when something doesn't work, you didn't fail — you found ONE way that
 * doesn't work yet, and that's useful information. The skill is to ask
 * "what did this teach me?" and try a small tweak instead of quitting.
 *
 * Famous builders flopped over and over: the lightbulb took hundreds of
 * tries, a lemonade stand can sell nothing on a rainy day. Every flop
 * pointed to the next adjustment.
 *
 * Beat order:
 *   intro → think-deeper (is a flop the end, or a clue?) →
 *   concept-cards (failure = data, the reframe, the tweak, famous floppers)
 *   → decision (your cookie stand sold nothing — what now?) →
 *   connect (inventors & founders who bounced back) → quiz → outro →
 *   real-world-mission (recall a recent flop, write what it taught you +
 *   one tweak to try next).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'failure-bounce-back',
  themeKey: 'inventor',
  emoji: '💪',
  title: 'Failure & Bounce Back',
  subtitle: {
    easy: "A flop isn't the end — it's a clue that helps you try a better way!",
    medium:
      "Every flop teaches you something. Smart builders ask 'what did this teach me?' and try a tweak.",
    hard:
      "Reframing failure as data: treating setbacks as feedback to iterate on, not a verdict on who you are.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Ever tried something and it DIDN'T work? A drawing flopped, a snack stand sold nothing? That feeling is no fun — but here's a secret: a flop isn't the end. It's a CLUE. Today you learn the inventor superpower: bouncing back! 💪",
        medium:
          "Everyone flops sometimes — a sale with no buyers, an idea that fell flat. The secret the best inventors know? A flop isn't proof you're bad at something. It's information. Today you learn how to turn a flop into your next great idea.",
        hard:
          "Setbacks feel personal, but the most successful inventors treat them as data, not identity. A flop tells you what to adjust next. Today: how to read failure as feedback and bounce back stronger.",
      },
    },

    // ─── Think-deeper: is a flop the end, or a clue? ────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Is a Flop the End — or a Clue?',
      intro: {
        easy: "Let's think about what a flop really means.",
        medium: "Let's reason through what a flop is actually telling you.",
        hard: "Let's reframe failure from first principles.",
      },
      layers: [
        {
          question: {
            easy: "You set up a cookie stand and NOBODY bought one. Does that mean YOU are bad?",
            medium: "Your cookie stand sold zero cookies. Does a zero sale mean you're a bad seller?",
            hard: "A venture produces zero sales on day one. Is that a verdict on your ability?",
          },
          reveal: {
            easy:
              "Nope! It might have rained, or your sign was too small, or the price was too high. The flop isn't about YOU — it's about ONE try that needs a tweak.",
            medium:
              "Not at all. Maybe it rained, the spot was empty, or the price was off. The flop is information about your SETUP, not about who you are. One try, one lesson.",
            hard:
              "No. A single bad outcome confounds many variables — weather, location, price, timing. It's a noisy signal about your setup, not a measure of your worth.",
          },
        },
        {
          question: {
            easy: "So what's the smart question to ask after a flop?",
            medium: "Instead of 'why am I bad at this?', what's a better question?",
            hard: "What question turns a setback into progress?",
          },
          reveal: {
            easy:
              "Ask: 'What did this TEACH me?' Maybe: 'rainy days are slow' or 'my sign was hard to read.' Now you KNOW something for next time! 🔍",
            medium:
              "Ask 'What did this teach me?' Each flop hands you a clue — slow on rainy days, sign too small, price too high. Clues are how you get better.",
            hard:
              "Ask 'What did this teach me?' Each failure isolates a variable to adjust. You convert a loss into a hypothesis for your next iteration.",
          },
        },
        {
          question: {
            easy: "And then what do you DO with that clue?",
            medium: "Once you have the lesson, what's the next move?",
            hard: "How do you act on the lesson a failure gives you?",
          },
          reveal: {
            easy:
              "Try ONE tweak! Make a bigger sign, pick a sunny day, lower the price. Change one thing, try again. That's bouncing back. 🪀",
            medium:
              "Change ONE thing and try again — a bigger sign, a better day, a lower price. Small tweaks, repeated, turn flops into wins over time.",
            hard:
              "Iterate: adjust one variable and re-test. Repeated small experiments compound into success — that's how every great product was actually built.",
          },
        },
      ],
    },

    // ─── Concept cards: the bounce-back toolkit ─────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Bounce-Back Toolkit',
      subheading: 'Four ideas that turn a flop into your next step forward.',
      cards: [
        {
          emoji: '📊',
          title: 'A Flop Is DATA',
          desc: {
            easy: 'A flop is not "I\'m bad." It\'s just information — a clue that helps you fix something. Data is helpful!',
            medium:
              'A flop is data, not a verdict. It tells you what didn\'t work THIS time, so you know what to change. Useful, not scary.',
            hard:
              'Treat failure as feedback, not identity. Each setback is a data point about your approach — collect it, learn from it, move on.',
          },
          color: '#F0E8FD',
        },
        {
          emoji: '🔁',
          title: 'Reframe the Words',
          desc: {
            easy: 'Don\'t say "I failed." Say "I found ONE way that doesn\'t work YET." Big difference — one of them keeps you going!',
            medium:
              'Swap "I failed" for "I found one way that doesn\'t work yet." The word "yet" reminds you there are more ways to try.',
            hard:
              'Language shapes mindset. "I failed" is final; "I found one way that doesn\'t work yet" keeps the door open to iteration.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🔧',
          title: 'Try ONE Tweak',
          desc: {
            easy: 'Change just one thing — a bigger sign, a sunny day, a lower price — and try again. Small tweaks add up!',
            medium:
              'After a flop, change ONE thing and test again. Tweaking one variable at a time shows you what actually made the difference.',
            hard:
              'Iterate by changing a single variable per attempt. This isolates cause and effect so each try teaches you something clear.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '💡',
          title: 'Famous Floppers',
          desc: {
            easy: 'The lightbulb took HUNDREDS of tries before it glowed! Almost every famous inventor flopped a lot first.',
            medium:
              'The inventor of the lightbulb tried hundreds of designs that didn\'t work before one did. Flopping a lot is normal for builders.',
            hard:
              'Edison reportedly tested hundreds of filament materials before a working bulb. Persistent iteration — not avoiding failure — produced the breakthrough.',
          },
          color: '#E5FAF1',
        },
      ],
    },

    // ─── Decision: your cookie stand sold nothing ──────────────────────
    {
      kind: 'decision',
      heading: '🍪 Your Cookie Stand Flopped',
      scenario: {
        easy: "You worked SO hard on your cookie stand. But it rained all morning and you sold ZERO cookies. You feel really bummed.",
        medium:
          "You poured your heart into a cookie stand. Then it rained all morning and you sold zero cookies. You're feeling pretty discouraged.",
        hard:
          "After heavy prep for a cookie stand, an all-morning rain meant zero sales. You're discouraged and deciding what to do next.",
      },
      question: {
        easy: "What do you do now?",
        medium: "What's your next move?",
        hard: "How do you respond to the setback?",
      },
      choices: [
        {
          label: {
            easy: '"I\'m bad at this. I quit." 😞',
            medium: '"I\'m just no good at selling. I give up."',
            hard: '"This proves I can\'t do this." Quit.',
          },
          feedback: {
            easy: "Wait — the RAIN sold zero cookies, not you! Quitting throws away everything the flop just taught you. Don't let one rainy day decide who you are.",
            medium:
              "But the flop was about the WEATHER, not your ability. Quitting means you never get to use the clue. One rainy day isn't a verdict on you.",
            hard:
              "This confuses a noisy outcome with identity. The rain — not your skill — drove the result. Quitting discards the useful data you just gathered.",
          },
        },
        {
          label: {
            easy: '"What did this teach me? I\'ll try a tweak." 🔍',
            medium: '"What can I learn from this, and what will I change?"',
            hard: '"What\'s the lesson, and which variable do I adjust?"',
          },
          feedback: {
            easy: "YES! That's the inventor superpower! Maybe the lesson is 'rainy days are slow,' so next time you pick a sunny day. The flop just made you smarter!",
            medium:
              "Exactly right. The lesson — 'rainy days kill sales' — points to a tweak: pick a sunny day, or move indoors. You turned a flop into a plan.",
            hard:
              "Spot on. You isolated the variable (weather) and formed a clear next experiment (sunny day or indoor spot). That's iteration, and it's how winners win.",
          },
          isPreferred: true,
        },
        {
          label: {
            easy: '"It\'s not my fault, so I won\'t change anything." 🤷',
            medium: '"The rain wasn\'t my fault, so I\'ll do everything exactly the same."',
            hard: '"Bad luck — no changes needed." Repeat identically.',
          },
          feedback: {
            easy: "True, the rain wasn't your fault! But if you change NOTHING, the next rainy day flops too. The clue only helps if you USE it with a tweak.",
            medium:
              "Right that it wasn't your fault — but a clue is useless unless you act on it. Checking the weather next time is a tiny tweak that protects your hard work.",
            hard:
              "Correct that the cause was external, but data is only valuable if you act on it. A simple control — checking the forecast — converts the lesson into an advantage.",
          },
        },
      ],
      realWorldReveal: {
        easy: "Real inventors flop ALL the time — then they ask 'what did this teach me?' and try one tweak. That's the whole secret: a flop is a clue, not the end. 💪",
        medium:
          "Real builders treat every flop this way: find the lesson, change one thing, try again. The lightbulb, your favorite games, big companies — all were built on piles of flops that got tweaked into wins.",
        hard:
          "Every successful product is a graveyard of earlier flops that were each treated as data and iterated on. The bounce-back loop — learn, tweak, retry — is the engine behind nearly all innovation.",
      },
    },

    // ─── Connect: bounce-backs in the real world ────────────────────────
    {
      kind: 'connect',
      heading: '🌍 Famous Bounce-Backs',
      concept: {
        easy: 'Tons of famous inventors and builders flopped a LOT before they got it right.',
        medium: 'Behind almost every famous success is a pile of flops that taught the builder what to fix.',
        hard: 'The path to nearly every breakthrough runs through repeated, instructive failure.',
      },
      examples: [
        {
          emoji: '💡',
          who: 'The Lightbulb',
          story: {
            easy: "The inventor tried hundreds of materials before one made a glowing bulb. Each flop crossed one off the list — getting closer every time!",
            medium:
              "Thomas Edison tested hundreds of filament materials that didn't work. He said each failed try just showed him another way that wouldn't work — until one did.",
            hard:
              "Edison's team systematically tested hundreds of filament candidates. Each failure narrowed the search space — failure as a search algorithm toward the answer.",
          },
        },
        {
          emoji: '🍪',
          who: 'The Rainy-Day Stand',
          story: {
            easy: "A kid's snack stand sold nothing on a rainy day — so next time they checked the weather and picked a sunny one. Same stand, way more sales!",
            medium:
              "A young seller's stand flopped in the rain. The lesson — 'rainy days are slow' — led to one tweak (sunny day), and the next stand did great.",
            hard:
              "A single rainy-day flop yields one actionable variable: timing. Adjusting it — picking favorable conditions — flips the outcome with no change in product.",
          },
        },
        {
          emoji: '🚀',
          who: 'Builders Everywhere',
          story: {
            easy: "Game makers, toy makers, and chefs all make stuff people don't like at first — then they fix it and try again until it's awesome.",
            medium:
              "Game studios, snack companies, and toy makers release things that flop, listen to what went wrong, tweak, and re-launch. Bouncing back is just part of the job.",
            hard:
              "Across industries, products ship, underperform, get diagnosed, and get iterated. The teams that treat flops as data — not defeat — are the ones that eventually win.",
          },
        },
      ],
      kicker: {
        easy: 'The winners aren\'t the ones who never flop — they\'re the ones who bounce back! 🪀',
        medium: 'Winning isn\'t avoiding flops. It\'s learning from each one and trying again.',
        hard: 'Success correlates less with avoiding failure than with the speed and quality of your learning from it.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Bounce-Back Check',
      questions: [
        {
          q: 'When something you try flops, what is it really?',
          options: [
            'Helpful data — a clue about what to change next',
            'Proof that you are bad at everything',
            'A reason to never try again',
          ],
          correct: 0,
        },
        {
          q: 'What is the BEST question to ask after a flop?',
          options: [
            '"What did this teach me?"',
            '"Why am I so bad at this?"',
            '"How do I hide this from everyone?"',
          ],
          correct: 0,
        },
        {
          q: 'A better way to say "I failed" is:',
          options: [
            '"I found one way that doesn\'t work yet."',
            '"I should give up now."',
            '"I\'ll never be good at this."',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Foundations: 100 },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you've got the inventor superpower: a flop is a CLUE, not the end. Ask what it taught you, try one tweak, and bounce back! 💪",
        medium:
          "You learned the bounce-back loop: a flop is data, reframe the words, find the lesson, tweak one thing, try again. That's how builders win.",
        hard:
          "You've internalized failure-as-feedback: setbacks are data to iterate on, not judgments to absorb. Learn, adjust, retry — the engine of every breakthrough.",
      },
      bonusTip: {
        easy: "Tip: when you feel bummed about a flop, say 'YET' — 'I haven't figured it out YET.' 🪀",
        medium: "Pro tip: add 'yet' to your flops. 'It didn't work… yet.' That tiny word keeps you trying.",
        hard: "Edge: the gap between quitters and finishers is often a single word — 'yet.' Keep iterating.",
      },
    },

    // ─── Real-world mission: learn from a real flop ─────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'failure-bounce-back',
        emoji: '💪',
        title: {
          easy: 'Turn a Real Flop Into a Clue',
          medium: 'Find a recent flop and turn it into your next tweak',
          hard: 'Run a bounce-back debrief on a recent setback',
        },
        pitch: {
          easy: "Think of something that didn't work lately. Write ONE thing it taught you, and ONE thing you'll try differently next time!",
          medium:
            "Pick a recent flop — a sale, a project, a try. Write down the lesson it gave you and one specific tweak you'll make next time.",
          hard:
            "Choose a recent setback, extract the lesson it revealed, and define one concrete variable you'll adjust on your next attempt.",
        },
        steps: [
          {
            emoji: '💭',
            text: {
              easy: 'Think of something recent that flopped — a game, a sale, a project, anything.',
              medium: 'Recall a recent thing that didn\'t go the way you hoped.',
              hard: 'Identify a recent attempt that underperformed your expectation.',
            },
          },
          {
            emoji: '🔁',
            text: {
              easy: 'Say it out loud the NEW way: "I found one way that doesn\'t work yet."',
              medium: 'Reframe it: replace "I failed" with "I found one way that doesn\'t work yet."',
              hard: 'Reframe the outcome as a data point, not a verdict on your ability.',
            },
          },
          {
            emoji: '🔍',
            text: {
              easy: 'Ask: "What did this teach me?" Write down ONE thing you learned.',
              medium: 'Write down the single clearest lesson the flop handed you.',
              hard: 'Extract the most actionable lesson — the variable that mattered most.',
            },
          },
          {
            emoji: '🔧',
            text: {
              easy: 'Write ONE tweak you\'ll try differently next time. Then go try it!',
              medium: 'Decide on one specific change to make next time, and plan to test it.',
              hard: 'Define one concrete adjustment for your next attempt and commit to testing it.',
            },
          },
        ],
        reflection: [
          {
            key: 'the-flop',
            prompt: {
              easy: 'What was the thing that flopped?',
              medium: 'What was the flop you chose?',
              hard: 'Describe the setback you analyzed.',
            },
            type: 'text',
          },
          {
            key: 'lesson',
            prompt: {
              easy: 'What did it TEACH you?',
              medium: 'What was the main lesson it gave you?',
              hard: 'What was the key insight or variable it revealed?',
            },
            type: 'longtext',
          },
          {
            key: 'tweak',
            prompt: {
              easy: 'What ONE thing will you try differently next time?',
              medium: 'What specific tweak will you make next time?',
              hard: 'What single adjustment will you test on your next attempt?',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "Help your child pick a flop without making them feel bad about it. Cheer the lesson and the tweak — the point is that flops are normal and useful, not shameful.",
          medium:
            "Guide your child to a real but low-stakes flop, and keep the tone warm. Celebrate the lesson and the planned tweak so failure feels like learning, not punishment.",
          hard:
            "Frame this as a blameless debrief. Emphasize that treating setbacks as data — not identity — is a skill, and praise the reframe and the concrete next step rather than the outcome.",
        },
        printables: {
          worksheets: [
            {
              title: 'My Bounce-Back Plan',
              blocks: [
                {
                  label: 'The flop',
                  hint: 'What didn\'t work this time?',
                  lines: 2,
                },
                {
                  label: 'Say it the new way',
                  hint: '"I found one way that doesn\'t work ___."',
                  lines: 1,
                },
                {
                  label: 'What it taught me',
                  hint: 'The one clue I got from it.',
                  lines: 3,
                },
                {
                  label: 'One tweak I\'ll try next time',
                  hint: 'Change just ONE thing.',
                  lines: 3,
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
