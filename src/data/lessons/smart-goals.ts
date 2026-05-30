/**
 * SMART Goals — "Turn a Wish Into a Plan."
 *
 * Kids (and grown-ups!) say things like "I want to get better at soccer" or
 * "I want to sell a lot of lemonade." Those are wishes, not goals. A great
 * goal is Specific, Measurable, and Timed (a kid-sized slice of SMART):
 *   • Specific  — exactly WHAT you'll do
 *   • Measurable — a NUMBER you can check
 *   • Timed     — a DEADLINE so you know when
 * "Sell 10 cups of lemonade by Saturday" beats "sell a lot sometime."
 *
 * Beat order:
 *   intro → think-deeper (why "a lot, sometime" never happens) →
 *   concept-cards (Specific / Measurable / Timed) → brainstorm (fix three
 *   fuzzy wishes) → connect (real goals in real places) → quiz → outro →
 *   real-world-mission (turn ONE fuzzy wish into a SMART goal, write it down).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'smart-goals',
  themeKey: 'inventor',
  emoji: '🎯',
  title: 'SMART Goals',
  subtitle: {
    easy: 'Turn a fuzzy wish into a clear goal you can actually hit!',
    medium:
      'A great goal is Specific, Measurable, and Timed — "10 cups by Saturday" beats "a lot, sometime."',
    hard:
      'Why vague intentions fail and how Specific + Measurable + Timed goals turn wishes into action — kid-sized.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Have you ever said 'I want to sell a LOT of lemonade'? That's a wish, not a goal! A real goal tells you exactly WHAT, HOW MUCH, and WHEN. Like: 'Sell 10 cups by Saturday.' That one you can actually DO. 🎯",
        medium:
          "Saying 'I'll sell a lot sometime' sounds nice — but it never quite happens. A great goal is sharper: it says exactly what, exactly how many, and exactly by when. Today you'll turn fuzzy wishes into clear goals.",
        hard:
          "Vague intentions like 'do better' or 'sell more' give your brain nothing to aim at. A great goal is Specific, Measurable, and Timed — so you know precisely what success looks like. Let's learn how to build one.",
      },
    },

    // ─── Think-deeper: why does "a lot, sometime" never happen? ─────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Wishes Fizzle Out',
      intro: {
        easy: "Let's think about this together.",
        medium: "Let's reason through why fuzzy goals don't get done.",
        hard: 'First-principles look at why vague goals fail.',
      },
      layers: [
        {
          question: {
            easy: "If your goal is 'sell a lot sometime,' how do you know when you're DONE?",
            medium: "With a goal like 'sell a lot, sometime' — how would you ever know you finished?",
            hard: "If a goal has no number and no deadline, what tells you it's complete?",
          },
          reveal: {
            easy:
              "You never really know! 'A lot' could be 3 cups or 300. 'Sometime' could be today or never. There's no finish line to run to. 🏁",
            medium:
              "You can't tell. 'A lot' has no number, and 'sometime' has no end — so there's no finish line. Without one, you drift instead of doing.",
            hard:
              "Nothing. With no measurable target and no deadline, there's no way to check progress or know you've succeeded — so the goal quietly gets ignored.",
          },
        },
        {
          question: {
            easy: 'What changes if you say "sell 10 cups by Saturday" instead?',
            medium: "How is 'sell 10 cups by Saturday' different from 'sell a lot'?",
            hard: 'What does adding a number and a deadline do to your behavior?',
          },
          reveal: {
            easy:
              "Now you KNOW the target — 10 cups — and WHEN — Saturday! You can count as you go and tell if you're winning. 🎯",
            medium:
              "Now there's a clear target (10) and a clear deadline (Saturday). You can count your progress and feel the clock — that's what gets you moving.",
            hard:
              "It creates a finish line you can measure against. You can track progress, adjust mid-way, and the deadline adds the gentle pressure that turns intention into action.",
          },
        },
        {
          question: {
            easy: 'So what makes a goal a GREAT goal?',
            medium: 'What three things should every good goal have?',
            hard: 'What are the core ingredients of a well-formed goal?',
          },
          reveal: {
            easy:
              "Three things! Specific (exactly what), Measurable (a number to check), and Timed (a deadline). Put them together and POOF — a wish becomes a plan. 🪄",
            medium:
              "Three: Specific (exactly what you'll do), Measurable (a number you can check), and Timed (a deadline). Stack all three and a fuzzy wish turns into a goal you can hit.",
            hard:
              "Specific, Measurable, and Timed. Together they make a goal you can act on, track, and complete — the difference between hoping and doing.",
          },
        },
      ],
    },

    // ─── Concept cards: Specific / Measurable / Timed ───────────────────
    {
      kind: 'concept-cards',
      heading: 'The 3 Parts of a SMART Goal',
      subheading: 'Stack these three and any wish becomes a goal you can actually hit.',
      cards: [
        {
          emoji: '🎯',
          title: 'Specific = Exactly What',
          desc: {
            easy: "Say exactly what you'll do. Not 'do better' — but 'practice kicking goals.' Clear beats fuzzy!",
            medium:
              "Specific means naming the exact thing. 'Get better at soccer' is fuzzy; 'practice penalty kicks' is specific. Your brain needs a clear target.",
            hard:
              "Specificity removes guesswork: 'improve' could mean anything, but 'practice left-foot passes' tells you precisely what to work on.",
          },
          color: '#F0E8FD',
        },
        {
          emoji: '🔢',
          title: 'Measurable = A Number',
          desc: {
            easy: "Add a number you can count! Not 'a lot' — but '10 cups' or '20 kicks.' Now you can check it.",
            medium:
              "Measurable means a number you can check off. '10 cups,' '20 kicks,' '5 pages.' A number tells you exactly how far you've come.",
            hard:
              "A measurable target gives you a yardstick. With a number, you can track progress objectively instead of guessing whether you're 'doing well.'",
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🗓️',
          title: 'Timed = A Deadline',
          desc: {
            easy: "Pick WHEN! Not 'sometime' — but 'by Saturday.' A deadline gives you a finish line to run to.",
            medium:
              "Timed means a deadline. 'Sometime' never arrives; 'by Saturday' does. A finish line keeps you moving instead of drifting.",
            hard:
              "A deadline creates urgency and a clear end-point. It converts an open-ended wish into a time-boxed commitment you can plan around.",
          },
          color: '#E5FAF1',
        },
      ],
    },

    // ─── Brainstorm: fix the fuzzy wishes ───────────────────────────────
    {
      kind: 'brainstorm',
      heading: '✍️ Make These Wishes SMART',
      prompt: {
        easy: "Here are some fuzzy wishes. Rewrite each one so it has exactly WHAT, a NUMBER, and a WHEN. Type your better versions!",
        medium:
          "Take these fuzzy wishes and rewrite each as a SMART goal — add the exact thing, a number, and a deadline. Type yours below.",
        hard:
          "Convert each vague wish into a goal that is Specific, Measurable, and Timed. Write your improved versions.",
      },
      minItems: 3,
      placeholder: 'e.g. "Read 2 books by next Friday"',
      hints: [
        {
          easy: "'Read more' → 'Read 2 books by next Friday.' (what + number + when!)",
          medium: "'Read more' → 'Read 2 books by next Friday.' Specific + Measurable + Timed.",
          hard: "'Read more' → 'Finish 2 books by Friday' — names the action, count, and deadline.",
        },
        {
          easy: "'Save money' → 'Save 50⭐ by the end of the month.'",
          medium: "'Save money' → 'Save 50⭐ by the end of the month.' Now there's a target and a date.",
          hard: "'Save money' → 'Save 50⭐ by month-end' — adds the measurable amount and time box.",
        },
        {
          easy: "'Get better at drawing' → 'Draw 1 picture every day this week.'",
          medium: "'Get better at drawing' → 'Draw 1 picture each day for 7 days.' Countable and timed!",
          hard: "'Get better at drawing' → 'Complete 1 sketch daily for one week' — specific, countable, time-bound.",
        },
      ],
      closer: {
        easy: "See the pattern? WHAT + a NUMBER + a WHEN. That's the magic recipe! 🪄",
        medium: "Notice the recipe: exact thing + a number + a deadline. Use it on anything you want to do.",
        hard: "The pattern is repeatable: name the action, attach a metric, set a deadline. It works for any goal.",
      },
    },

    // ─── Connect: SMART goals in the real world ─────────────────────────
    {
      kind: 'connect',
      heading: '🌍 SMART Goals Everywhere',
      concept: {
        easy: 'Lots of people who do big things start with a clear, countable, timed goal.',
        medium: 'The "exact thing + number + deadline" trick powers stores, teams, and big plans.',
        hard: 'Specific, measurable, time-bound targets underpin how teams and businesses actually get things done.',
      },
      examples: [
        {
          emoji: '🍋',
          who: 'A Lemonade Stand',
          story: {
            easy: "Smart kid: 'Sell 10 cups by 3 o'clock.' Now they count cups and know if they're winning!",
            medium:
              "Instead of 'sell a lot,' a sharp seller sets 'sell 10 cups by 3pm' — and counts each cup to see if they're on track.",
            hard:
              "A clear sales target ('10 cups by 3pm') lets you measure mid-day pace and adjust price or pitch before it's too late.",
          },
        },
        {
          emoji: '⚽',
          who: 'A Soccer Team',
          story: {
            easy: "Coaches don't say 'play better.' They say 'practice 20 kicks today.' You can count those!",
            medium:
              "Good coaches turn 'get better' into 'do 20 passing drills this week.' A number and a deadline make practice real.",
            hard:
              "Coaches set measurable, time-boxed targets (reps, drills per week) so players and teams can track improvement objectively.",
          },
        },
        {
          emoji: '🚀',
          who: 'Big Companies',
          story: {
            easy: "A company might say 'make 1,000 toys by December' — exact, counted, with a finish line!",
            medium:
              "Companies set goals like 'ship 1,000 products by December.' Everyone knows the target and the date — so the whole team rows together.",
            hard:
              "Businesses run on specific, measurable, time-bound objectives so dozens of people can align on the same target and deadline.",
          },
        },
      ],
      kicker: {
        easy: 'Same trick, big or small: WHAT + a NUMBER + a WHEN. 🎯',
        medium: 'From a lemonade stand to a rocket launch, the recipe is the same.',
        hard: 'Scale changes; the structure — specific, measurable, timed — does not.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 SMART Goal Check',
      questions: [
        {
          q: 'Which one is a SMART goal?',
          options: [
            'Sell 10 cups of lemonade by Saturday',
            'Sell a lot of lemonade sometime',
            'Be really good at lemonade',
          ],
          correct: 0,
        },
        {
          q: 'What does "Measurable" mean in a goal?',
          options: [
            'It has a number you can check',
            'It sounds exciting',
            'It is a secret',
          ],
          correct: 0,
        },
        {
          q: 'Why does a goal need a deadline (the "Timed" part)?',
          options: [
            'So you have a finish line and know when to be done',
            'So it costs more money',
            'So nobody can see it',
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
        easy: "Now you can turn ANY wish into a real goal: say exactly WHAT, add a NUMBER, and pick a WHEN! 🎯",
        medium:
          "You've got the recipe: Specific + Measurable + Timed. Fuzzy wishes don't stand a chance anymore!",
        hard:
          "You can now reshape any vague intention into a Specific, Measurable, Timed goal — the foundation of getting things done.",
      },
      bonusTip: {
        easy: "Tip: write your goal down where you can see it. Written goals get done! ✍️",
        medium: "Pro tip: writing a goal down makes you way more likely to actually do it.",
        hard: "Edge: a written goal you can re-read keeps the target visible and the deadline real.",
      },
    },

    // ─── Real-world mission: turn ONE wish into a SMART goal ────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'smart-goals',
        emoji: '🎯',
        title: {
          easy: 'Turn One Wish Into a SMART Goal',
          medium: 'Rewrite one of your wishes as a SMART goal',
          hard: 'Convert a personal wish into a Specific, Measurable, Timed goal',
        },
        pitch: {
          easy: "Pick ONE thing you wish for — like 'get better at soccer' — and turn it into a clear goal with a number and a deadline. Then write it down!",
          medium:
            "Take one fuzzy wish of your own and rebuild it as a SMART goal: exact thing, a number, and a deadline. Write it somewhere you'll see it.",
          hard:
            "Select one vague personal wish and reformulate it into a Specific, Measurable, Timed goal, then commit it to writing.",
        },
        steps: [
          {
            emoji: '💭',
            text: {
              easy: "Think of one fuzzy wish, like 'get better at soccer' or 'read more.'",
              medium: 'Pick one of your own fuzzy wishes (something you say you "want to do").',
              hard: 'Choose one vague intention you actually hold.',
            },
          },
          {
            emoji: '🎯',
            text: {
              easy: 'Make it SPECIFIC: what EXACTLY will you do? (Like "practice kicking goals.")',
              medium: 'Make it Specific — name the exact action you\'ll take.',
              hard: 'Define the specific action precisely.',
            },
          },
          {
            emoji: '🔢',
            text: {
              easy: 'Add a NUMBER you can count. (Like "20 kicks.")',
              medium: 'Add a measurable number you can check off.',
              hard: 'Attach a measurable quantity.',
            },
          },
          {
            emoji: '🗓️',
            text: {
              easy: 'Add a WHEN — a deadline. (Like "by Saturday.") Then write the whole goal down!',
              medium: 'Add a deadline, then write the full SMART goal somewhere you\'ll see it.',
              hard: 'Set a deadline and record the complete goal in writing.',
            },
          },
        ],
        reflection: [
          {
            key: 'fuzzy-wish',
            prompt: {
              easy: 'What was your fuzzy wish before?',
              medium: 'What was the original fuzzy version of your wish?',
              hard: 'State your initial vague intention.',
            },
            type: 'text',
            placeholder: 'e.g. "get better at soccer"',
          },
          {
            key: 'smart-goal',
            prompt: {
              easy: 'Write your NEW SMART goal (with a number AND a when!).',
              medium: 'Write your rewritten SMART goal — include the number and the deadline.',
              hard: 'Provide your reformulated Specific, Measurable, Timed goal.',
            },
            type: 'text',
            placeholder: 'e.g. "Practice 20 kicks every day until Saturday"',
          },
          {
            key: 'insight',
            prompt: {
              easy: 'Does the new goal feel easier to actually DO? Why?',
              medium: 'Did making it Specific, Measurable, and Timed make it feel more doable? Explain.',
              hard: 'Reflect on how adding structure changed how achievable the goal feels.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "Help your child spot the missing pieces — does the goal have an exact action, a number, and a deadline? No real materials needed, just a pencil and paper.",
          medium:
            "Guide your child to check all three parts (Specific, Measurable, Timed). This is a thinking exercise — the win is a clearly written goal, not finishing the goal yet.",
          hard:
            "Coach by asking 'what exactly, how many, by when?' rather than supplying the answer. The objective is the structure of the goal, not its completion.",
        },
        printables: {
          worksheets: [
            {
              title: 'My SMART Goal',
              blocks: [
                {
                  label: 'My fuzzy wish (before)',
                  hint: 'Write what you used to say, like "get better at soccer."',
                  lines: 1,
                },
                {
                  label: 'Specific — exactly WHAT will I do?',
                  lines: 1,
                },
                {
                  label: 'Measurable — what NUMBER can I count?',
                  lines: 1,
                },
                {
                  label: 'Timed — by WHEN?',
                  lines: 1,
                },
                {
                  label: 'My full SMART goal',
                  hint: 'Put it all together in one sentence!',
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
