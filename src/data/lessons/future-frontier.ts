/**
 * Future Frontier — "The Industries of Tomorrow."
 *
 * A kid-sized tour of the cutting-edge stuff being invented RIGHT NOW that
 * could become huge someday: space travel & rockets, advanced AI, fusion
 * energy (a clean power like a tiny sun), climate tech (fixing the planet),
 * and quantum computers (super-powerful future computers).
 *
 * The big honest idea: these are RISKY and EARLY. Most aren't big
 * businesses yet — but some might change the whole world. The goal of this
 * lesson is curiosity and big dreams, not stock tips.
 *
 * Beat order:
 *   intro → think-deeper (why does anyone build risky new things?) →
 *   concept-cards (Space, AI, Fusion, Climate Tech, Quantum) →
 *   brainstorm (invent your own future industry) → connect (real frontier
 *   builders) → quiz → outro → real-world-mission (pick the coolest future
 *   tech and draw how it changes life when you grow up).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'future-frontier',
  themeKey: 'industries',
  emoji: '🚀',
  title: 'Future Frontier',
  subtitle: {
    easy: 'Peek at the amazing stuff being invented RIGHT NOW that might change the world!',
    medium:
      'Meet the cutting-edge industries of tomorrow — space, AI, fusion, climate tech, and quantum computers.',
    hard:
      'The frontier industries: early, risky, mostly not-yet-profitable technologies that could reshape the economy and the planet.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Some businesses sell things we already have — burgers, toys, shoes. But other people are busy inventing things that BARELY exist yet: rockets to other planets, smart robots, and clean energy like a tiny sun! That's the Future Frontier. 🚀",
        medium:
          "Most companies improve things we already use. But on the edge of the future, inventors are building stuff that's almost science fiction — space travel, advanced AI, fusion energy, and more. Most isn't huge YET, but some of it might change everything.",
        hard:
          "Beyond today's mature industries lies the frontier: technologies in their earliest, riskiest stage. Few are profitable now, many will fail — but the rare winners can create entirely new industries. Let's explore the cutting edge.",
      },
    },

    // ─── Think-deeper: why build risky new things? ──────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Build Something So Risky?',
      intro: {
        easy: "Let's think about why people try the hard, unfinished stuff.",
        medium: "Let's reason through why anyone bothers with super-risky new tech.",
        hard: 'First-principles look at the risk and reward of frontier innovation.',
      },
      layers: [
        {
          question: {
            easy: 'The first car, the first phone, the first plane — were they easy to make?',
            medium: 'Were the very first cars, planes, and phones easy and cheap to build?',
            hard: 'Were today\'s mature industries easy or obvious when they first began?',
          },
          reveal: {
            easy:
              "Nope! The first ones were clunky, expensive, and lots of people thought they were silly. But look at us now — cars and phones everywhere!",
            medium:
              "Not at all. Early planes crashed, early cars were jokes, early phones were huge. Big industries almost always start out messy, costly, and doubted.",
            hard:
              "Every mature industry began as a fragile, doubted experiment. What looks obvious now was once a long-shot bet that most observers dismissed.",
          },
        },
        {
          question: {
            easy: 'If new tech is so risky, why do people keep trying?',
            medium: 'Why do inventors and investors keep funding things that might fail?',
            hard: 'What\'s the payoff logic behind backing high-failure-rate frontier tech?',
          },
          reveal: {
            easy:
              "Because if it WORKS, it can be HUGE and help millions of people! One big win can be worth many small misses.",
            medium:
              "Most tries fail — but the rare success can be world-changing and enormous. The huge wins more than make up for the many flops.",
            hard:
              "Frontier bets are asymmetric: limited downside per attempt, but a single breakthrough can create a trillion-dollar industry. A few outsized wins justify many losses.",
          },
        },
        {
          question: {
            easy: 'So should you bet ALL your stars on one cool new idea?',
            medium: 'Does that mean you should pour everything into one exciting new tech?',
            hard: 'How should one size exposure to early, unproven frontier technology?',
          },
          reveal: {
            easy:
              "No way! It's exciting, but lots of these fail. Be curious and dream big — but be careful, because the future is hard to guess. 🌟",
            medium:
              "Nope. The frontier is thrilling but unpredictable — many ideas won't pan out. Stay curious and dream big, but treat it as a small, careful bet.",
            hard:
              "No. High uncertainty means modest, diversified exposure — frontier tech belongs in the 'small bets, big curiosity' bucket, never the 'all-in' one.",
          },
        },
      ],
    },

    // ─── Concept cards: the five frontiers ──────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Industries of Tomorrow',
      subheading: 'Five frontiers being built right now — most are early, but each could be giant.',
      cards: [
        {
          emoji: '🚀',
          title: 'Space Travel & Rockets',
          desc: {
            easy: 'Rockets that can fly to space and come back to be used AGAIN — like a reusable plane to the stars!',
            medium:
              'New companies build rockets that land and fly again, making space cheaper. Someday: trips to the Moon, Mars, and space hotels!',
            hard:
              'Reusable launch vehicles are slashing the cost of reaching orbit, unlocking satellites, lunar missions, and eventually crewed travel to Mars.',
          },
          color: '#E8F0FD',
        },
        {
          emoji: '🤖',
          title: 'Advanced AI',
          desc: {
            easy: 'Super-smart computer helpers that can write, draw, talk, and learn — getting better every year!',
            medium:
              'Advanced AI can write, make pictures, answer questions, and help doctors and scientists. It\'s improving incredibly fast.',
            hard:
              'Frontier AI models can reason, generate content, and accelerate research across fields — among the fastest-advancing technologies ever built.',
          },
          color: '#F0E8FD',
        },
        {
          emoji: '☀️',
          title: 'Fusion Energy',
          desc: {
            easy: 'Making power the way the SUN does — a tiny, clean, super-powerful star in a machine here on Earth!',
            medium:
              'Fusion copies how the sun makes energy. If it works at scale, it could give clean power with almost no pollution.',
            hard:
              'Fusion fuses atoms like a star to release vast clean energy. Still experimental, but a breakthrough could transform global power.',
          },
          color: '#FFF8E0',
        },
        {
          emoji: '🌱',
          title: 'Climate Tech',
          desc: {
            easy: 'Clever inventions to help the planet — like pulling pollution out of the air and growing cleaner energy!',
            medium:
              'Climate tech invents ways to clean the air, store clean energy, and protect the planet for the future.',
            hard:
              'Climate tech spans carbon capture, advanced batteries, and clean fuels — building the tools to decarbonize the economy.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '🔮',
          title: 'Quantum Computers',
          desc: {
            easy: 'Future computers that think in a brand-new way and could solve puzzles too hard for ANY computer today!',
            medium:
              'Quantum computers use weird science to crack problems normal computers can\'t — like designing new medicines.',
            hard:
              'Quantum computers exploit quantum physics to tackle problems intractable for classical machines, from chemistry to cryptography.',
          },
          color: '#E0F7FA',
        },
      ],
    },

    // ─── Brainstorm: invent a future industry ───────────────────────────
    {
      kind: 'brainstorm',
      heading: '💡 Invent the Next Frontier',
      prompt: {
        easy: 'If YOU could invent any amazing future thing, what would it be? Type 3 wild ideas!',
        medium: 'Dream up 3 brand-new future inventions or industries that don\'t fully exist yet.',
        hard: 'Propose 3 frontier technologies you\'d build — things barely possible today.',
      },
      minItems: 3,
      placeholder: 'e.g. a robot that cleans the ocean...',
      hints: [
        {
          easy: 'What about flying buses, or houses on the Moon? 🌙',
          medium: 'Think transportation: flying cars, Moon homes, super-fast trains?',
          hard: 'Consider mobility frontiers: orbital habitats, hypersonic transit, autonomous fleets.',
        },
        {
          easy: 'What about a robot doctor, or medicine that fixes anything? 🩺',
          medium: 'Think health: robot surgeons, custom medicine, ways to live healthier longer?',
          hard: 'Consider biotech: personalized medicine, gene tools, AI-designed drugs.',
        },
        {
          easy: 'What about a machine that turns trash into power? ♻️',
          medium: 'Think planet: turning trash into energy, clean water for everyone?',
          hard: 'Consider sustainability: waste-to-energy, atmospheric water, closed-loop materials.',
        },
      ],
      closer: {
        easy: "Cool ideas! Every real invention started as a wild dream someone wrote down. 🌟",
        medium: "Great thinking! Today's biggest companies all began as someone's far-out idea.",
        hard: "Strong concepts. Frontier industries always start as a dismissed idea someone refused to drop.",
      },
    },

    // ─── Connect: real frontier builders ────────────────────────────────
    {
      kind: 'connect',
      heading: '🌍 Frontier Builders Today',
      concept: {
        easy: 'Real people are building this future RIGHT NOW.',
        medium: 'These frontiers aren\'t just dreams — companies are working on them today.',
        hard: 'The frontier is actively under construction by real firms and labs worldwide.',
      },
      examples: [
        {
          emoji: '🚀',
          who: 'Reusable Rockets',
          story: {
            easy: "Rocket companies now land their rockets back on the ground so they can fly AGAIN — like reusing a toy instead of throwing it away!",
            medium:
              "Space companies figured out how to land rockets and reuse them, making space trips far cheaper than the old throw-away rockets.",
            hard:
              "Reusable boosters cut launch costs by an order of magnitude, turning space access from a rare event into a routine business.",
          },
        },
        {
          emoji: '🤖',
          who: 'AI Helpers',
          story: {
            easy: "Smart AI helpers can already write stories, answer questions, and help with homework — and they keep getting smarter!",
            medium:
              "AI tools now help doctors spot illness, help artists create, and answer millions of questions a day — improving fast.",
            hard:
              "Frontier AI is being deployed across medicine, science, and software, compounding in capability faster than almost any prior technology.",
          },
        },
        {
          emoji: '☀️',
          who: 'Tiny-Sun Power',
          story: {
            easy: "Scientists made a fusion machine give off MORE energy than they put in — a real step toward clean 'tiny-sun' power!",
            medium:
              "Fusion labs have hit milestones where the reaction released more energy than was used to start it — a huge step for clean power.",
            hard:
              "Recent fusion experiments achieved net energy gain in ignition, a landmark on the long road toward commercial clean power.",
          },
        },
      ],
      kicker: {
        easy: 'Risky? Yes. But this is how the future gets built — one bold try at a time. 🌟',
        medium: 'Most frontier bets fail — but the few that work can change the whole world.',
        hard: 'Frontier industries are a portfolio of long shots; the rare winners redefine the economy.',
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Future Frontier Check',
      questions: [
        {
          q: 'What is the "Future Frontier"?',
          options: [
            'Cutting-edge tech being invented now that could be huge someday',
            'Companies that only sell things we already have',
            'A safe place to keep all your money',
          ],
          correct: 0,
        },
        {
          q: 'Fusion energy is special because it...',
          options: [
            'Makes clean power like a tiny sun',
            'Is a kind of toy car',
            'Is the same as a piggy bank',
          ],
          correct: 0,
        },
        {
          q: 'Why should you be careful about frontier tech?',
          options: [
            'It\'s exciting but early and risky — many ideas fail',
            'Because it always works perfectly',
            'Because it\'s boring and never changes',
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
        easy: "Now you've seen the edge of the future — rockets, AI, tiny suns, planet-fixers, and magic computers! Keep dreaming big. 🚀",
        medium:
          "You toured the frontier: space, AI, fusion, climate tech, and quantum. It's risky and early — but it's where tomorrow gets built.",
        hard:
          "You've met the frontier industries and the honest truth about them: high risk, high uncertainty, and a rare chance to change the world.",
      },
      bonusTip: {
        easy: "Tip: the coolest jobs of YOUR future might not exist yet. You could invent them! 🌟",
        medium: "Pro tip: stay curious — some of these frontiers will become the giant industries of your adult life.",
        hard: "Edge: the people who study frontiers early are the ones who lead them later. Curiosity compounds.",
      },
    },

    // ─── Real-world mission: pick & draw a future tech ──────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'future-frontier',
        emoji: '🚀',
        title: {
          easy: 'Pick Your Coolest Future Tech & Draw It',
          medium: 'Choose one future tech and imagine how it changes life',
          hard: 'Select a frontier technology and project its future impact',
        },
        pitch: {
          easy: "Pick the ONE future tech you think is coolest, then draw or describe how it might change life when you grow up!",
          medium:
            "Choose one frontier — space, AI, fusion, climate tech, or quantum — and draw or describe how it could change everyday life by the time you're a grown-up.",
          hard:
            "Pick one frontier technology and create a drawing or short description projecting how it reshapes daily life in your adult years.",
        },
        steps: [
          {
            emoji: '🤔',
            text: {
              easy: 'Pick your favorite: rockets, AI, fusion sun-power, planet-fixers, or quantum computers.',
              medium: 'Choose one frontier from the lesson that excites you most.',
              hard: 'Select the single frontier technology you find most compelling.',
            },
          },
          {
            emoji: '🎨',
            text: {
              easy: 'Draw a picture of the future with your tech in it!',
              medium: 'Draw a scene of everyday life with your chosen tech in action.',
              hard: 'Sketch a future scenario showing your technology integrated into daily life.',
            },
          },
          {
            emoji: '💬',
            text: {
              easy: 'Tell a grown-up ONE way it would make life better.',
              medium: 'Explain to a grown-up how your tech could help people.',
              hard: 'Articulate to a grown-up the main benefit your technology delivers.',
            },
          },
          {
            emoji: '⚠️',
            text: {
              easy: 'Think of ONE problem it might cause too. Big ideas have tricky parts!',
              medium: 'Name one downside or risk your tech might bring — new things aren\'t all good.',
              hard: 'Identify one trade-off or risk — frontier tech rarely arrives without downsides.',
            },
          },
        ],
        reflection: [
          {
            key: 'chosen-tech',
            prompt: {
              easy: 'Which future tech did you pick?',
              medium: 'Which frontier did you choose?',
              hard: 'Which frontier technology did you select?',
            },
            type: 'text',
            placeholder: 'space / AI / fusion / climate / quantum',
          },
          {
            key: 'how-it-helps',
            prompt: {
              easy: 'How would it make life better when you grow up?',
              medium: 'How could your tech improve everyday life in the future?',
              hard: 'Describe the primary positive impact of your chosen technology.',
            },
            type: 'longtext',
          },
          {
            key: 'one-risk',
            prompt: {
              easy: 'What is ONE problem it might cause?',
              medium: 'What is one downside or risk it could bring?',
              hard: 'What trade-off or risk did you identify?',
            },
            type: 'text',
          },
        ],
        parentNote: {
          easy: "No special supplies needed — just paper and crayons. The goal is imagination and curiosity, not getting the science exactly right.",
          medium:
            "This is a creativity exercise — encourage big dreams. There are no wrong answers; the aim is curiosity about how technology shapes the future.",
          hard:
            "Purely imaginative and observational. Encourage your child to weigh both benefits and trade-offs — the goal is balanced curiosity, not technical accuracy.",
        },
        printables: {
          worksheets: [
            {
              title: 'My Future Frontier',
              blocks: [
                { label: 'The future tech I picked', lines: 1 },
                { label: 'How it makes life better', hint: 'One or two sentences', lines: 3 },
                { label: 'One problem it might cause', lines: 2 },
                { label: 'Draw your future here!', hint: 'Use the big box below', lines: 6 },
              ],
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
