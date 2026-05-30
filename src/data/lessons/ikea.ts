/**
 * IKEA: The Store That Makes YOU Do the Work.
 *
 * The hidden trick: COST-SHIFTING to the customer. IKEA hands you a flat
 * box, and YOU build the furniture and carry it home yourself. Because
 * the boxes are flat, they stack tight on trucks (way more per truck =
 * cheaper shipping), and because YOU do the assembly, IKEA pays no one
 * to build it. Those savings become lower prices — and you feel proud
 * of the bookshelf you built. Everyone's happy.
 *
 * Big idea for kids: clever businesses lower their costs by letting the
 * customer do a little of the work.
 *
 * Beat order:
 *   intro → think-deeper (why is the box FLAT?) → concept-cards
 *   (Flat-Pack / Cost-Shifting / Self-Service / Lower Price) →
 *   calc-challenge (flat boxes fit 6× more per truck) → quiz → connect
 *   (self-checkout, salad bars, take-and-bake pizza) → outro → mission
 *   (find something at home where the buyer does part of the work).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'ikea',
  themeKey: 'company',
  emoji: '🪑',
  title: 'IKEA',
  subtitle: {
    easy: 'You build the furniture yourself — and that makes it CHEAPER. Why?',
    medium:
      'IKEA hands you a flat box and lets YOU do the building and the carrying. That clever swap is the whole secret.',
    hard:
      'Cost-shifting: how moving assembly and last-mile transport onto the customer collapses cost and price at once.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "At most stores, furniture comes already built. At IKEA, you carry home a FLAT box, and then YOU build the chair yourself with a little tool! Sounds like more work for you... so why is IKEA so much CHEAPER? 🪑",
        medium:
          "Other stores sell furniture that's already built and delivered to your door. IKEA does the opposite: flat boxes, build-it-yourself. Strange — but it's exactly why IKEA costs so much less. Today you'll see the clever trick.",
        hard:
          "IKEA's flat-pack model looks like it gives the customer more work for no reason. In fact it's a deliberate cost-shift: assembly and last-mile transport move to the buyer, and the savings show up as a lower price tag.",
      },
    },

    // ─── Think-deeper: why is the box flat? ─────────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Is the Box FLAT?',
      intro: {
        easy: "Let's figure out the flat-box mystery together.",
        medium: "Let's reason through why IKEA ships flat boxes instead of built furniture.",
        hard: 'First-principles look at where furniture cost actually goes.',
      },
      layers: [
        {
          question: {
            easy: 'A built-up chair is big and full of air. What takes up more room on a truck — built chairs or flat boxes?',
            medium: 'Compare a finished chair to a flat box: which one wastes space on a delivery truck?',
            hard: 'How does product geometry change shipping density?',
          },
          reveal: {
            easy:
              "Built chairs! They're mostly empty air, so only a few fit on a truck. Flat boxes are thin, so LOADS of them stack up tight. More per truck = cheaper to ship each one. 📦",
            medium:
              "Built furniture is mostly empty air, so a truck fills up fast. Flat boxes stack tight like books — many more fit per truck. Fewer trucks for the same furniture means much lower shipping cost.",
            hard:
              "Assembled furniture has terrible volumetric efficiency — you ship air. Flat-packing maximizes units per truckload, cutting freight cost per item dramatically. Transport is a huge slice of furniture cost, so this matters a lot.",
          },
        },
        {
          question: {
            easy: 'Who BUILDS the chair at IKEA — a worker, or you?',
            medium: 'Normally a factory worker assembles furniture. At IKEA, who does that job?',
            hard: 'Where does the assembly labor go in the IKEA model?',
          },
          reveal: {
            easy:
              "YOU do! You build it at home with the little tool. So IKEA never has to PAY anyone to put it together — and that saves money too. 🔧",
            medium:
              "You assemble it yourself at home. IKEA skips paying assembly workers entirely. Labor is expensive, so handing that step to the customer cuts a big cost.",
            hard:
              "The customer supplies the assembly labor for free. IKEA eliminates a costly step in the value chain — and the buyer happily does it, often feeling proud of the result.",
          },
        },
        {
          question: {
            easy: 'So if IKEA saves on trucks AND on building, what can they do with the price?',
            medium: 'IKEA saves on shipping and on assembly. What happens to the price tag?',
            hard: 'What do those combined savings let IKEA do competitively?',
          },
          reveal: {
            easy:
              "Make it CHEAPER! They give the savings back to you as a lower price. You do a little work, you save a lot of money, and you get a bookshelf you built yourself. Everyone's happy! 🪄",
            medium:
              "They pass the savings on as lower prices. You trade a little effort for a much smaller bill — and you get the pride of building it. Both sides win. That's the magic of cost-shifting.",
            hard:
              "They price aggressively below traditional furniture. The customer accepts a small task in exchange for a large discount, and IKEA wins volume. A clean win-win built entirely on moving work to the buyer.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ──────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Flat-Pack Secret',
      subheading: "Four ideas that turn 'you do more work' into 'you pay less.'",
      cards: [
        {
          emoji: '📦',
          title: 'Flat-Pack',
          desc: {
            easy: 'FLAT-PACK means the furniture comes in a thin, flat box instead of built up. Flat boxes stack tight, so tons fit on one truck!',
            medium:
              'Flat-pack ships furniture disassembled in flat boxes. Flat boxes stack densely, so far more units fit per truck — slashing the cost to move each one.',
            hard:
              'Flat-packing optimizes for volumetric shipping density. Disassembled, parts pack flat; trucks carry many more units, collapsing per-item freight cost.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🔧',
          title: 'Cost-Shifting',
          desc: {
            easy: 'COST-SHIFTING is when the store lets YOU do a little of the work — like building the chair — so they don\'t have to pay someone to do it.',
            medium:
              'Cost-shifting moves a task (assembly, delivery) from the company to the customer. The company\'s cost drops, and that saving can become a lower price.',
            hard:
              'Cost-shifting reassigns parts of the value chain to the customer. Labor and logistics costs fall for the firm; the customer trades effort for price.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🛒',
          title: 'Self-Service',
          desc: {
            easy: 'SELF-SERVICE means you find it, grab it, and carry it home yourself — no helper needed. That\'s why IKEA stores are giant warehouses you walk through.',
            medium:
              'Self-service means the customer does the picking, carrying, and checkout. Fewer staff are needed, so the store runs leaner and cheaper.',
            hard:
              'Self-service shifts retrieval and handling to the customer, reducing staffing. IKEA\'s warehouse layout is engineered to make customers their own pickers.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '🏷️',
          title: 'Lower Price',
          desc: {
            easy: 'LOWER PRICE is the reward! All the saved money becomes a smaller price tag — and you get a chair you built yourself. Win-win!',
            medium:
              'Lower price is the payoff. The savings from flat-packing and self-assembly get passed to you, so the same furniture costs much less.',
            hard:
              'Lower price is the strategic output. Cost savings are returned as price, driving volume and a durable low-cost advantage over traditional furniture sellers.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: flat boxes fit more per truck ──────────────────
    {
      kind: 'calc-challenge',
      heading: '🧮 How Many Fit on a Truck?',
      setup: {
        easy: "A truck fits only 10 BUILT-UP bookshelves (they're full of air). But flat boxes stack tight, so 6 times as many fit! How many flat boxes fit on the truck?",
        medium:
          "One truck holds 10 assembled bookshelves. Flat-packed, the same shelves fit 6× as many per truck. How many flat boxes fit on one truck?",
        hard:
          "Assembled units: 10 per truck. Flat-packing improves loading density by a factor of 6. Compute flat-packed units per truck.",
      },
      problem: {
        givens: [
          { label: 'Built shelves per truck', value: 10 },
          { label: 'Flat boxes fit', value: 6, suffix: '× more' },
        ],
        answerLabel: 'Flat boxes per truck',
        answer: 60,
        suffix: '📦',
      },
      walkthrough: {
        easy: "10 × 6 = 60 flat boxes on ONE truck! So IKEA needs way fewer trucks to move the same furniture. Fewer trucks = less cost = cheaper shelves for you.",
        medium:
          "10 × 6 = 60 per truck. One flat-pack truck does the work of six 'built furniture' trucks. Fewer trips, less fuel, less labor — and those savings land on your price tag.",
        hard:
          "10 × 6 = 60 units/truck. A 6× density gain means ~1/6 the freight cost per item. Across millions of units, that's enormous — and it flows straight into IKEA's low prices.",
      },
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Flat-Pack Check',
      questions: [
        {
          q: 'Why does IKEA sell furniture in FLAT boxes?',
          options: [
            'Flat boxes stack tight, so many more fit on a truck',
            'Flat boxes are prettier than chairs',
            'So the furniture breaks more easily',
          ],
          correct: 0,
        },
        {
          q: 'When you build the chair yourself, what does IKEA save on?',
          options: [
            'Paying workers to build it',
            'The color of the paint',
            'The name of the store',
          ],
          correct: 0,
        },
        {
          q: 'What is "cost-shifting"?',
          options: [
            'Letting the customer do a little work so the store spends less',
            'Hiding the price tag',
            'Making the furniture more expensive',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Operations: 100 },
    },

    // ─── Connect ──────────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 You Do the Work Everywhere!',
      concept: {
        easy: "Once you see IKEA's trick, you'll spot it all over — places where YOU do a little work and pay less.",
        medium: 'The "customer does part of the job" idea shows up far beyond furniture.',
        hard: 'Cost-shifting to the customer is a pattern repeated across retail and food.',
      },
      examples: [
        {
          emoji: '🛒',
          who: 'Self-Checkout',
          story: {
            easy: "At self-checkout, YOU scan and bag your own groceries. The store needs fewer cashiers, so it can keep prices lower.",
            medium:
              "Self-checkout makes you the cashier. Stores run more lanes with fewer staff, cutting labor cost — the same cost-shift IKEA uses, just at the register.",
            hard:
              "Self-checkout transfers the scanning/bagging labor to the shopper, reducing cashier headcount per store. Identical mechanic: customer effort traded for lower operating cost.",
          },
        },
        {
          emoji: '🥗',
          who: 'Salad Bars & Buffets',
          story: {
            easy: "At a salad bar, YOU build your own plate. Nobody has to cook your exact order, so it can cost less.",
            medium:
              "Salad bars and buffets let you serve yourself. The restaurant skips made-to-order cooking and plating labor, keeping the price down.",
            hard:
              "Self-serve food shifts assembly and portioning to the diner, cutting kitchen labor. The customer does the 'last step,' lowering cost per cover.",
          },
        },
        {
          emoji: '🍕',
          who: 'Take-and-Bake Pizza',
          story: {
            easy: "Take-and-bake pizza is made cold for you to BAKE at home. You do the cooking, so it's cheaper than a hot delivered pizza.",
            medium:
              "Take-and-bake pizza hands you an unbaked pie to cook at home. The shop skips the oven, delivery, and the hot-and-fresh promise — so it's cheaper.",
            hard:
              "Take-and-bake offloads the final cook and delivery to the customer, removing oven time, drivers, and hold costs. Lower price reflects the shifted work.",
          },
        },
      ],
      kicker: {
        easy: "IKEA, self-checkout, salad bars, take-and-bake pizza — all the same trick: you do a little, you pay a little less. 🪄",
        medium: 'The pattern is everywhere: hand a small task to the customer, and the savings come back as a lower price.',
        hard: 'Cost-shifting is a general low-cost lever — wherever a task can move to a willing customer, price can fall.',
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know IKEA's secret: YOU build it, YOU carry it, and that's exactly why it's so cheap. You did a little work and saved a lot! 🪑",
        medium:
          "You've got it: flat boxes ship cheap, self-assembly cuts labor, and the savings become low prices. Clever businesses let customers do a little of the work.",
        hard:
          "You now understand cost-shifting — the deliberate move of assembly and transport onto the customer to collapse cost and price together. A core low-cost strategy.",
      },
      bonusTip: {
        easy: "Fun fact: IKEA even names its products! That bookshelf is probably called 'BILLY.' Yes, the furniture has names. 😄",
        medium: "Pro tip: next time you shop, ask 'what part of the work am I doing?' If you're doing it, you're probably saving money.",
        hard: "Edge: spot the shifted task. Self-pumped gas, assemble-it kits, self-checkout — each hidden chore is a clue to where the savings (and your discount) come from.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'ikea',
        emoji: '🔧',
        title: {
          easy: 'Find the "You Do the Work" Deal!',
          medium: 'Hunt for a product where the buyer does part of the work to save money',
          hard: 'Identify and document a real-world cost-shift in your home or town',
        },
        pitch: {
          easy: "Go on a hunt at home or at the store. Find ONE thing where YOU (the buyer) do part of the work — and that makes it cheaper!",
          medium:
            "Find a real example of cost-shifting: a build-it kit, self-checkout, a salad bar, take-and-bake pizza — anything where the customer does part of the job to pay less.",
          hard:
            "Locate a real cost-shift around you, name the task that moved to the customer, and explain how it lowers the price. Observation only.",
        },
        steps: [
          {
            emoji: '🔍',
            text: {
              easy: 'Look around your home or a store for something YOU had to build, carry, or finish yourself.',
              medium: 'Spot a product or service where the customer does a step (build, carry, scan, cook).',
              hard: 'Identify a candidate where a task has clearly been shifted to the customer.',
            },
          },
          {
            emoji: '🧩',
            text: {
              easy: 'Name the WORK you do. (Did you build it? Bag it? Bake it? Carry it?)',
              medium: 'Write down exactly which task the customer performs instead of the company.',
              hard: 'Specify the exact step that moved from the firm to the customer.',
            },
          },
          {
            emoji: '🏷️',
            text: {
              easy: 'Ask a grown-up: is it CHEAPER because you do that part? Why?',
              medium: 'With a grown-up, reason about how that shifted task lowers the price.',
              hard: 'Explain the cost saving (labor or transport) that funds the lower price.',
            },
          },
        ],
        reflection: [
          {
            key: 'thing',
            prompt: {
              easy: 'What did you find?',
              medium: 'What product or service did you find?',
              hard: 'The example you identified',
            },
            type: 'text',
            placeholder: 'e.g. a build-it bookshelf, self-checkout, salad bar',
          },
          {
            key: 'work',
            prompt: {
              easy: 'What WORK did you (the buyer) do?',
              medium: 'Which task did the customer do instead of the company?',
              hard: 'The shifted task',
            },
            type: 'text',
            placeholder: 'I built it / I bagged it / I baked it',
          },
          {
            key: 'why',
            prompt: {
              easy: 'Why do you think doing that part makes it cheaper?',
              medium: 'How does your doing that step lower the price?',
              hard: 'Explain the cost saving that funds the lower price.',
            },
            type: 'longtext',
            placeholder: 'Because the store didn\'t have to…',
          },
        ],
        parentNote: {
          easy: "Just look and talk — no buying needed. Great spots: an IKEA-style furniture box, the self-checkout lane, a grocery salad bar, or a take-and-bake pizza shelf.",
          medium:
            "This is observe-only — no purchase required. Point out the shifted task and let your kid connect it to the lower price. Self-checkout and salad bars are easy in-store examples.",
          hard:
            "Observational only. Help your child name the specific task that moved to the customer and trace it to the cost saving. The goal is recognizing the pattern, not spending money.",
        },
        printables: {
          worksheets: [
            {
              title: 'My Cost-Shift Detective Sheet',
              blocks: [
                {
                  label: '🔍 What I found',
                  hint: 'Name the product or place.',
                  lines: 1,
                },
                {
                  label: '🧩 The work I (the buyer) do',
                  hint: 'Build it? Bag it? Bake it? Carry it?',
                  lines: 2,
                },
                {
                  label: '🏷️ Why it\'s cheaper',
                  hint: 'What did the store NOT have to pay for?',
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
