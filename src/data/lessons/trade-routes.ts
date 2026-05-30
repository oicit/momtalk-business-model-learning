/**
 * Trade Routes — "How Stuff Gets To You."
 *
 * An overview of the trade & commerce industry: stores (retail), online
 * shopping (ecommerce), logistics & shipping 🚚🚢 (trucks, ships,
 * warehouses), and restaurants. The big idea for a 7–9 year old: almost
 * nothing you own was made in your house. A toy built far away rides
 * ships, trucks, and a delivery van to reach your door — and the hidden
 * heroes are the warehouses and delivery people nobody sees.
 *
 * Industries lane. Education-first and symbolic; the mission is purely
 * observational (track where 3 things came from, imagine the journey).
 *
 * Beat order:
 *   intro → think-deeper (how did this thing get here?) →
 *   concept-cards (Stores, Online Shopping, Shipping & Warehouses,
 *   Restaurants) → quiz → connect (the journey in real life) → outro →
 *   real-world-mission (track 3 things + imagine each journey).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'trade-routes',
  themeKey: 'industries',
  emoji: '🛒',
  title: 'Trade Routes',
  subtitle: {
    easy: 'How does stuff get all the way to YOU? Let\'s follow the path! 🚚',
    medium:
      'Stores, online shopping, ships, trucks, warehouses, and restaurants — the giant world that moves things to you.',
    hard:
      'An overview of trade & commerce: retail, ecommerce, logistics, and food service — how goods travel from far away to your door.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Look around your room. That toy? Those snacks? Almost NOTHING was made in your house! Things travel a long way to reach you — on ships, trucks, and delivery vans. Let's follow the trail! 🚚🚢",
        medium:
          "Here's something wild: almost everything you own was made somewhere else and traveled to you. Stores, online shopping, ships, trucks, and warehouses all team up to move it. This whole giant world is called trade.",
        hard:
          "Trade is the industry of moving and selling things. A toy made in a factory far away might ride a ship across the ocean, a truck across the country, and a van to your door. Today we follow that whole journey.",
      },
    },

    // ─── Think-deeper: how did this thing get here? ─────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 How Did This Get Here?',
      intro: {
        easy: "Pick up something near you and think with me.",
        medium: "Let's trace the path of one everyday thing.",
        hard: "Let's reason backward from the object to its origin.",
      },
      layers: [
        {
          question: {
            easy: "Did the toy in your hand get made INSIDE your house?",
            medium: "Was the thing nearest you actually made in your home?",
            hard: "Where was the object beside you actually manufactured?",
          },
          reveal: {
            easy:
              "Almost never! It was made in a factory, probably far, far away — maybe across the whole ocean. 🌍",
            medium:
              "Almost nothing is made at home. Most things are built in factories, often in other countries, then shipped a long way to reach you.",
            hard:
              "Nearly everything is produced in distant factories. The gap between where things are made and where they're used is exactly what the trade industry fills.",
          },
        },
        {
          question: {
            easy: "So how did it travel all that way to YOU?",
            medium: "What carried it across all that distance?",
            hard: "What chain of transport moved it from factory to you?",
          },
          reveal: {
            easy:
              "It hopped on a BIG ship 🚢, then a truck 🚚, then maybe a delivery van — like a relay race to your door!",
            medium:
              "Usually a giant ship crosses the ocean, a truck drives it across land, and a van brings it to your street. Each one hands it off to the next.",
            hard:
              "A relay: ocean ship → port → truck → warehouse → delivery van. Each leg is a different part of logistics, handing the package along.",
          },
        },
        {
          question: {
            easy: "Who are the helpers we never see doing all this?",
            medium: "Which workers make this journey actually happen?",
            hard: "Who are the hidden links in this supply chain?",
          },
          reveal: {
            easy:
              "Warehouse workers 📦 and delivery drivers 🚚! They're the hidden heroes who keep your stuff moving. We don't see them, but they do a LOT.",
            medium:
              "The hidden heroes: warehouse workers who sort and store everything, and delivery drivers who bring it the last mile. Without them, nothing arrives.",
            hard:
              "Warehouses and last-mile delivery are the invisible backbone. They store, sort, and move goods so the final handoff to you feels instant.",
          },
        },
      ],
    },

    // ─── Concept cards: the four parts of trade ─────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The 4 Ways Stuff Reaches You',
      subheading: 'Stores, online shopping, shipping, and restaurants — all part of one giant world.',
      cards: [
        {
          emoji: '🏪',
          title: 'Stores (Retail)',
          desc: {
            easy: 'A store is a place you walk into to buy things — toys, food, clothes. You pick it up and take it home!',
            medium:
              'Retail means selling things in a shop you can visit. Stores buy lots of stuff, put it on shelves, and sell it to you one piece at a time.',
            hard:
              'Retail is selling goods directly to people in physical stores — buying in bulk, displaying it, and selling individual items to shoppers.',
          },
          color: '#FFE5F0',
        },
        {
          emoji: '💻',
          title: 'Online Shopping',
          desc: {
            easy: 'You tap a button on a screen, and a few days later a box arrives at your door. Magic? Nope — trucks! 📦',
            medium:
              'Ecommerce means shopping on a screen instead of in a store. You order, and it ships from a warehouse to your house.',
            hard:
              'Ecommerce is buying online. There\'s no store to visit — orders are packed in warehouses and shipped straight to your door.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '🚚',
          title: 'Shipping & Warehouses',
          desc: {
            easy: 'Ships 🚢, trucks 🚚, and giant buildings called warehouses 📦 store and carry your stuff. The hidden heroes!',
            medium:
              'Logistics moves things around: ships cross oceans, trucks cross land, and warehouses store everything in between. They\'re the hidden heroes.',
            hard:
              'Logistics is moving and storing goods — ships, trucks, and warehouses. It\'s invisible to shoppers but it\'s what makes everything else work.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🍔',
          title: 'Restaurants',
          desc: {
            easy: 'Restaurants don\'t sell toys — they cook and sell FOOD! It\'s trade too: they buy ingredients and sell yummy meals.',
            medium:
              'Restaurants buy ingredients, cook them, and sell finished meals. It\'s trade for food — turning groceries into dinner you pay for.',
            hard:
              'Food service buys raw ingredients and sells prepared meals. Same idea as retail, but the product is a cooked dish instead of an object.',
          },
          color: '#E5FAF1',
        },
      ],
    },

    // ─── Quiz ────────────────────────────────────────────────────────────
    {
      kind: 'quiz',
      heading: '🎯 Trade Routes Check',
      questions: [
        {
          q: 'A toy made far away usually travels to you by…',
          options: [
            'Ship, then truck, then a delivery van',
            'It magically appears in your room',
            'It was made inside your house',
          ],
          correct: 0,
        },
        {
          q: 'What do we call shopping by tapping a screen instead of visiting a store?',
          options: [
            'Online shopping (ecommerce)',
            'A restaurant',
            'A factory',
          ],
          correct: 0,
        },
        {
          q: 'Who are the "hidden heroes" that store and move your stuff?',
          options: [
            'Warehouse workers and delivery drivers',
            'Only the people in the store',
            'Nobody — it moves by itself',
          ],
          correct: 0,
        },
      ],
      xpReward: 100,
      skillScores: { Operations: 100 },
    },

    // ─── Connect: the journey in real life ──────────────────────────────
    {
      kind: 'connect',
      heading: '🌍 The Journey In Real Life',
      concept: {
        easy: 'The same trail — make it, ship it, sell it, deliver it — happens for almost everything you own.',
        medium: 'Stores, websites, and shippers all run on the same journey: from a faraway factory to your hands.',
        hard: 'Retail, ecommerce, and logistics are different chapters of the same story: moving goods from production to people.',
      },
      examples: [
        {
          emoji: '📦',
          who: 'Your Delivery Box',
          story: {
            easy: "That box on your porch came from a warehouse so big it could hold hundreds of houses, full of stuff waiting to ship.",
            medium:
              "When you order online, a worker (or robot!) in a huge warehouse grabs your item, packs it, and a driver brings it to you in days.",
            hard:
              "Online orders are fulfilled in enormous warehouses where items are picked, packed, and routed to delivery drivers for the last mile.",
          },
        },
        {
          emoji: '🚢',
          who: 'The Giant Cargo Ship',
          story: {
            easy: "Some ships are longer than 4 football fields and carry thousands of boxes across the whole ocean! 🌊",
            medium:
              "Massive cargo ships cross oceans stacked with thousands of metal boxes (containers). One ship can carry your toy and a million others.",
            hard:
              "Container ships move most of the world's goods across oceans, each carrying thousands of standardized containers between ports.",
          },
        },
        {
          emoji: '🛒',
          who: 'The Store Shelf',
          story: {
            easy: "Before a snack sits on the shelf, the store ordered it, a truck dropped it off, and someone stacked it just for you.",
            medium:
              "Every item on a store shelf was ordered, trucked in, unloaded, and arranged — a whole chain happening before you ever arrive.",
            hard:
              "Retail shelves are the visible end of a supply chain: ordering, freight, receiving, and stocking all happen before a single sale.",
          },
        },
      ],
      kicker: {
        easy: 'Next time a box arrives, you know the whole adventure it took! 🚚',
        medium: 'Every single thing you own has its own travel story.',
        hard: 'Behind every purchase is an invisible journey of ships, trucks, and warehouses.',
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "Now you know the secret journey behind your stuff: made far away, carried by ship and truck, and delivered to YOU! 🚚🚢",
        medium:
          "You learned how the trade world works: stores, online shopping, shipping, and restaurants all team up to get things to people.",
        hard:
          "You've seen the whole picture of trade — retail, ecommerce, logistics, and food service — and how goods travel from far away to your door.",
      },
      bonusTip: {
        easy: "Tip: thank the delivery driver next time — they're a hidden hero! 💛",
        medium: "Fun fact: warehouses and delivery are the part of trade nobody sees but everybody needs.",
        hard: "Insight: the invisible parts (logistics) are often where the real work — and the real money — happens.",
      },
    },

    // ─── Real-world mission: track 3 things + imagine the journey ───────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'trade-routes',
        emoji: '🛒',
        title: {
          easy: 'Be a Stuff Detective! 🕵️',
          medium: 'Track where 3 things in your house came from',
          hard: 'Trace the journey of 3 household items',
        },
        pitch: {
          easy: "Pick 3 things in your house. Find out: did they come from a store or online? Then imagine the wild trip each one took to reach you!",
          medium:
            "Choose 3 things at home, figure out whether each was bought in a store or online, and imagine the journey each one traveled.",
          hard:
            "Select 3 household items, classify each as store-bought or online, and reconstruct the likely journey from factory to your home.",
        },
        steps: [
          {
            emoji: '🔍',
            text: {
              easy: 'Pick 3 things you can see right now — a toy, a snack, anything!',
              medium: 'Choose 3 everyday things around your house.',
              hard: 'Select 3 distinct household items to investigate.',
            },
          },
          {
            emoji: '🏪',
            text: {
              easy: 'Ask a grown-up: did we buy this at a STORE or did it come in a BOX from online?',
              medium: 'With a grown-up, find out if each one was bought in a store or ordered online.',
              hard: 'With a grown-up, determine for each whether it was retail (store) or ecommerce (online).',
            },
          },
          {
            emoji: '🌍',
            text: {
              easy: 'Look for a tiny label that says where it was made. Is it far away?',
              medium: 'Hunt for a "Made in…" label on each item. How far did it travel?',
              hard: 'Check each item for a country-of-origin label to estimate its travel distance.',
            },
          },
          {
            emoji: '🚚',
            text: {
              easy: 'Imagine the trip! Ship? Truck? Van? Draw or tell the journey for each one.',
              medium: 'Imagine and describe the journey each thing took (ship, truck, van) to reach you.',
              hard: 'Map out the probable transport chain for each item from origin to home.',
            },
          },
        ],
        reflection: [
          {
            key: 'store-vs-online',
            prompt: {
              easy: 'How many of your 3 things came from a STORE? How many from ONLINE?',
              medium: 'Of your 3 items, how many were store-bought vs. ordered online?',
              hard: 'What was the store-vs-online split across your 3 items?',
            },
            type: 'text',
            placeholder: 'e.g. 2 store, 1 online',
          },
          {
            key: 'farthest',
            prompt: {
              easy: 'Which thing traveled the FARTHEST to reach you?',
              medium: 'Which item came from the farthest away?',
              hard: 'Which item likely had the longest journey, and from where?',
            },
            type: 'text',
          },
          {
            key: 'journey',
            prompt: {
              easy: 'Pick one thing and tell its whole journey to your house!',
              medium: 'Describe the full journey of one item, from factory to your door.',
              hard: 'Reconstruct one item\'s end-to-end journey through the trade system.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "This is just looking and imagining — no buying anything! Help your kid read tiny 'Made in' labels and picture the trip together.",
          medium:
            "Observation only — nothing to purchase. Help your child read country-of-origin labels and talk through how things travel. A globe or map makes it more fun.",
          hard:
            "Purely observational. Assist with reading labels and, if you like, point to origin countries on a map to make the distances real.",
        },
        printables: {
          trackers: [
            {
              title: 'My Stuff Detective Sheet',
              columns: ['Thing', 'Store or online?', 'Made where?', 'How did it travel?'],
              rows: 3,
              note: 'Just look and imagine — no buying needed!',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
