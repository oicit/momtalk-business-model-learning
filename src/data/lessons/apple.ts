/**
 * Apple: The Magic Family of Gadgets — ecosystem lock-in + services flywheel.
 *
 * Goal: take a kid from "Apple makes nice phones" → to "no, Apple makes a
 * FAMILY of gadgets that all work together like magic, so once you own one
 * you never want to leave" → AND "Apple keeps earning money AFTER you buy,
 * from the App Store, iCloud storage, and Apple Music."
 *
 * The hidden trick has THREE parts:
 *   1. ECOSYSTEM LOCK-IN — iPhone + AirPods + iPad + Apple Watch all talk to
 *      each other so smoothly that switching to another brand feels broken.
 *   2. SERVICES FLYWHEEL — Apple earns again and again after the sale.
 *   3. PREMIUM BRAND — people happily pay extra because it feels special.
 *
 * Famous-company lesson, "company" theme.
 *
 * Beat order:
 *   intro → think-deeper (why won't people switch?) → concept-cards
 *   (ecosystem / it-just-works / services / premium brand) → decision
 *   (your gadget company: lonely gadget vs. magic family vs. earn-after-sale)
 *   → connect (other companies that lock you in) → outro → real-world-mission
 *   (count one family's connected gadgets + spot the lock-in).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'apple',
  themeKey: 'company',
  emoji: '🍎',
  title: 'Apple',
  subtitle: {
    easy: 'Why once you own ONE Apple thing, you want them ALL.',
    medium:
      'How Apple makes gadgets that work together like magic — so customers stay for life and keep paying after they buy.',
    hard:
      'Ecosystem lock-in, the services flywheel, and premium branding — why Apple keeps customers for decades, kid-sized.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "You probably know Apple makes iPhones. But here's the secret trick: Apple doesn't sell ONE gadget — it sells a whole FAMILY of them. iPhone, AirPods, iPad, Apple Watch — and they all talk to each other like MAGIC. Once you have one, you want them all! 🍎",
        medium:
          "Apple is one of the most valuable companies on Earth. But it's not because of one cool phone. The real trick: Apple's gadgets all work together so smoothly that once you're in, switching to another brand feels broken. AND Apple keeps earning money AFTER you buy. Let's decode it.",
        hard:
          "Apple is worth trillions, and its edge isn't a single product — it's a system. Devices interlock so tightly that leaving means losing all that 'just works' magic. On top of that, Apple earns recurring money long after the sale. Today we unpack ecosystem lock-in and the services flywheel.",
      },
    },

    // ─── Think-deeper: why won't people switch? ─────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Won\'t People Switch Away?',
      intro: {
        easy: "Let's think about why Apple fans almost never change brands.",
        medium: "Let's reason through why it's so hard to leave Apple once you're in.",
        hard: "First-principles look at the cost of leaving an ecosystem.",
      },
      layers: [
        {
          question: {
            easy: "When your phone, headphones, and watch are all Apple, what happens?",
            medium: "What happens when ALL your gadgets are from the same brand?",
            hard: "What's the effect of owning multiple devices from one ecosystem?",
          },
          reveal: {
            easy:
              "Magic! Your music jumps from your phone to your AirPods by itself. Your watch unlocks your computer. A photo you take shows up everywhere at once. It all just WORKS.",
            medium:
              "Everything connects automatically. Music hops between devices, your watch unlocks your laptop, photos sync everywhere instantly. Each gadget makes the others better — the whole is bigger than the parts.",
            hard:
              "Network effects within your own pocket: each device increases the value of the others. Seamless hand-off, auto-sync, and shared accounts create compounding convenience that grows with every device added.",
          },
        },
        {
          question: {
            easy: "Now imagine switching to a different brand of phone. What breaks?",
            medium: "What would you LOSE if you switched to a non-Apple phone?",
            hard: "What are the switching costs of leaving the ecosystem?",
          },
          reveal: {
            easy:
              "Uh oh — your AirPods don't pair as nicely, your watch stops talking to your phone, your photos and messages get messy. Suddenly nothing is magic anymore. So… you just stay. 😅",
            medium:
              "The magic vanishes. Your other Apple gadgets work worse, your photos and messages don't move easily, and you'd have to rebuy apps. Leaving costs time, money, and the smooth feeling — so most people don't.",
            hard:
              "High switching costs: lost interoperability, re-purchased apps, migration friction, and broken hand-off. These costs aren't a fee — they're a wall. The more devices you own, the taller the wall.",
          },
        },
        {
          question: {
            easy: "Does Apple stop earning money after you buy the gadget?",
            medium: "How does Apple keep earning money AFTER you've bought everything?",
            hard: "What's the recurring-revenue layer on top of hardware sales?",
          },
          reveal: {
            easy:
              "Nope! You pay a little for extra photo storage (iCloud), for songs (Apple Music), and for games and apps. Apple earns again and again, long after you bought the phone. 💸",
            medium:
              "Apple keeps charging gently after the sale: iCloud storage, Apple Music, the App Store cut on apps and games. These are 'services' — small payments that repeat every month from millions of people.",
            hard:
              "Services revenue: iCloud, Music, App Store, TV+, and more. High-margin, recurring, and sticky because they're glued to the locked-in devices. This is the flywheel — hardware pulls people in, services monetize them forever.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ──────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'Apple\'s Four-Part Trick',
      subheading: 'Understand these and you understand why Apple keeps customers for life.',
      cards: [
        {
          emoji: '🔗',
          title: 'Ecosystem Lock-In',
          desc: {
            easy: 'When all your gadgets are one brand, they work together like magic — so leaving feels broken. You stay!',
            medium:
              'An ecosystem is a family of products that work together. The more you own, the harder it is to leave — that "stuck-in-a-good-way" is called lock-in.',
            hard:
              'Ecosystem lock-in: tightly interoperating products raise switching costs. Each device deepens the moat, making customers extremely durable.',
          },
          color: '#E8F4FD',
        },
        {
          emoji: '✨',
          title: 'It Just Works',
          desc: {
            easy: 'Apple stuff connects by itself — no fiddling. That easy, magic feeling makes people love it.',
            medium:
              'Apple designs the phone, chip, and software together, so things connect with zero hassle. That smoothness is the product as much as the gadget is.',
            hard:
              'Vertical integration: controlling hardware + chips + software yields seamless interoperability. The frictionless experience is a key competitive advantage.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🔁',
          title: 'Services Flywheel',
          desc: {
            easy: 'After you buy, Apple still earns from photo storage, music, apps, and games — again and again.',
            medium:
              'Services = iCloud, Apple Music, App Store, TV+. Small payments that repeat every month from millions of people, long after the gadget is sold.',
            hard:
              'Services are recurring, high-margin revenue layered on the installed base. Hardware acquires the customer; services monetize them continuously — a self-reinforcing flywheel.',
          },
          color: '#E5FAF1',
        },
        {
          emoji: '👑',
          title: 'Premium Brand',
          desc: {
            easy: 'Apple feels special and fancy, so people happily pay extra for it. That trust took years to build.',
            medium:
              'A premium brand is one people pay MORE for because they trust and love it. Apple charges higher prices and customers gladly say yes.',
            hard:
              'Brand premium: strong identity + trust let Apple command higher prices and fatter margins than rivals selling similar specs.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Decision: design your own gadget company ───────────────────────
    {
      kind: 'decision',
      heading: '🧭 You Start a Gadget Company',
      scenario: {
        easy:
          "Imagine YOU make a cool gadget kids love — say, a smart bracelet. People buy it! Now you have to decide how to grow your company.",
        medium:
          "You've built a popular first gadget. Now you choose your strategy for what comes next — and each path leads to very different results.",
        hard:
          "Your first product has traction. Choose a growth architecture — single product, connected ecosystem, or recurring services.",
      },
      question: {
        easy: 'What do you do next?',
        medium: 'Pick your strategy:',
        hard: 'Optimize for long-term customer value:',
      },
      choices: [
        {
          label: {
            easy: 'Just keep selling that ONE bracelet by itself, forever',
            medium: 'Sell a single great gadget — nothing else connects to it',
            hard: 'Single-product strategy — no ecosystem, no services',
          },
          feedback: {
            easy:
              "It sells okay… but customers can buy ANY other brand's stuff too, and nothing keeps them coming back. When a cheaper bracelet shows up, they leave. 😕",
            medium:
              "A lonely gadget has no moat. Customers can mix-and-match other brands and switch away the moment something cheaper appears. You earn once, then hope they return.",
            hard:
              "Standalone hardware has weak retention. Without interoperability or recurring revenue, you face commodity competition and one-time monetization.",
          },
        },
        {
          label: {
            easy: 'Make a whole FAMILY of gadgets that all work together like magic',
            medium: 'Build a connected family — bracelet + headphones + tablet that all link up',
            hard: 'Build an interlocking ecosystem of products',
          },
          feedback: {
            easy:
              "WINNER! Now your bracelet talks to your headphones talks to your tablet — all by magic. Once a kid has two of your gadgets, they NEVER want another brand. That's lock-in! 🔗",
            medium:
              "This is the Apple playbook. Each new gadget that connects makes the others better and raises the cost of leaving. Customers stay for years and keep buying the rest of the family.",
            hard:
              "Optimal. Interoperability creates compounding switching costs; each device deepens the moat and increases customer lifetime value.",
          },
          isPreferred: true,
        },
        {
          label: {
            easy: 'Charge a tiny bit every month for cloud storage, music, and games',
            medium: 'Add services — small monthly fees for storage, music, and apps',
            hard: 'Layer recurring services on the installed base',
          },
          feedback: {
            easy:
              "Smart! Now you earn money EVERY month, not just once. The best part? Apple does BOTH this AND the magic family — together they're unstoppable. 🔁",
            medium:
              "Great instinct — recurring revenue is gold. But services work best ON TOP of an ecosystem. Apple does both: lock people in with connected gadgets, THEN earn monthly from services.",
            hard:
              "Strong, but services thrive atop a locked-in base. Apple combines ecosystem lock-in with the services flywheel — the two reinforce each other.",
          },
        },
      ],
      realWorldReveal: {
        easy:
          "Apple does ALL of it. A magic FAMILY of gadgets that lock you in + monthly money from iCloud, Music, and the App Store + a fancy brand you happily pay extra for. That's why people buy Apple again and again for their WHOLE life. 🍎",
        medium:
          "Apple combines every path: a connected ecosystem (iPhone, AirPods, iPad, Watch, Mac) that locks customers in, a services flywheel (iCloud, Music, App Store) earning monthly, and a premium brand. Together they make Apple customers some of the loyalest on Earth.",
        hard:
          "Apple stacks all three: ecosystem lock-in (high switching costs), a recurring services flywheel (high-margin, sticky), and brand premium (pricing power). The combination produces extraordinary retention and lifetime value — the foundation of a trillion-dollar business.",
      },
    },

    // ─── Connect ────────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Who Else Locks You In?',
      concept: {
        easy: 'Once you spot the "magic family" trick, you\'ll see it everywhere.',
        medium: 'Lots of giant companies use ecosystem lock-in and services to keep you for life.',
        hard: 'Ecosystem lock-in and recurring services power many of the largest businesses today.',
      },
      examples: [
        {
          emoji: '🎮',
          who: 'PlayStation & Xbox',
          story: {
            easy: "Once your games and friends live on one console, switching means losing them all — so you stay. And you pay every month to play online!",
            medium:
              "Game consoles lock you in with your library, save files, and friends list. Switching brands means starting over — plus they charge monthly for online play. Lock-in + services, just like Apple.",
            hard:
              "Console ecosystems combine high switching costs (libraries, friends, achievements) with recurring online subscriptions — the same lock-in + services pattern.",
          },
        },
        {
          emoji: '📺',
          who: 'Netflix & Spotify',
          story: {
            easy: "You don't buy a movie once — you pay a little EVERY month to keep watching and listening. That's the services trick.",
            medium:
              "Streaming flips buying into renting forever. You pay every month, and your playlists and watch history keep you from leaving. Pure services flywheel.",
            hard:
              "Subscription streaming maximizes recurring revenue; personalized libraries and recommendations create soft lock-in that reduces churn.",
          },
        },
        {
          emoji: '🤖',
          who: 'Google',
          story: {
            easy: "Your email, photos, and videos all live in one Google account — so you keep using Google for everything.",
            medium:
              "Google links Gmail, Photos, Maps, and YouTube to one account. The more you use, the harder it is to leave — another ecosystem lock-in.",
            hard:
              "Google's account-linked services create data-gravity lock-in; cross-product integration raises switching costs across the suite.",
          },
        },
      ],
      kicker: {
        easy: 'Apple. PlayStation. Netflix. Google. Same trick: make leaving HARD, and keep earning after the sale. 🔗',
        medium:
          "Different products, same playbook: connect everything so leaving hurts, then earn over and over. Once you see it, you can\'t unsee it.",
        hard:
          'The pattern generalizes: maximize switching costs, then layer recurring revenue. Lock-in + services is one of the most durable business models in existence.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'cool',
      text: {
        easy:
          "Now you know Apple's secret: it's not ONE gadget — it's a whole magic FAMILY that locks you in, plus monthly money from services, plus a brand people love. That's how Apple keeps customers for life. 🍎",
        medium:
          "You've decoded Apple: ecosystem lock-in + a services flywheel + a premium brand. Three tricks stacked together make Apple one of the stickiest, most valuable companies ever.",
        hard:
          "You now understand Apple's moat: high switching costs from an interlocking ecosystem, recurring high-margin services, and brand pricing power. The framework explains many of the biggest businesses on Earth.",
      },
      bonusTip: {
        easy: "Tip: the BEST businesses don't just sell to you once — they make you want to come back forever. 🔁",
        medium: "Pro tip: a great product wins a sale; a great ECOSYSTEM wins a customer for life.",
        hard: "Edge: durable businesses combine switching costs with recurring revenue. Retention beats acquisition over the long run.",
      },
    },

    // ─── Real-World Mission ─────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'apple',
        emoji: '🍎',
        title: {
          easy: 'Spot the "Magic Family" in your own home!',
          medium: 'Map one family\'s connected gadgets and find the lock-in',
          hard: 'Audit a household\'s ecosystem + recurring services',
        },
        pitch: {
          easy:
            "Be a gadget detective! Look around your home and count which gadgets are the same brand and talk to each other. Then guess why your family doesn't switch.",
          medium:
            "Survey the gadgets in your home: which brand, which connect to each other, and which cost money every month. Then explain the lock-in you find.",
          hard:
            "Conduct a mini ecosystem audit: enumerate household devices by brand, map interoperability, list recurring services, and reason about switching costs.",
        },
        steps: [
          {
            emoji: '🔎',
            text: {
              easy: 'Walk around home and list the gadgets you find (phone, tablet, headphones, watch, speaker).',
              medium: 'List the main gadgets in your home and note each one\'s brand.',
              hard: 'Inventory household devices with brand labels.',
            },
          },
          {
            emoji: '🔗',
            text: {
              easy: 'Circle the ones that are the SAME brand and work together.',
              medium: 'Mark which gadgets are the same brand and connect to each other.',
              hard: 'Identify same-ecosystem devices and their interoperability links.',
            },
          },
          {
            emoji: '💸',
            text: {
              easy: 'Ask a grown-up: do we pay a little EVERY month for anything (storage, music, games)?',
              medium: 'With a grown-up, list any monthly services your family pays for.',
              hard: 'With a grown-up, enumerate recurring service subscriptions.',
            },
          },
          {
            emoji: '🤔',
            text: {
              easy: 'Guess: would it be EASY or HARD for your family to switch to a different brand? Why?',
              medium: 'Reason about how easy or hard it would be to switch brands, and why.',
              hard: 'Assess switching costs and explain the lock-in you observe.',
            },
          },
        ],
        reflection: [
          {
            key: 'gadgets',
            prompt: {
              easy: 'How many gadgets did you find? How many were the same brand?',
              medium: 'How many gadgets total, and how many share one brand?',
              hard: 'Device count and same-ecosystem share?',
            },
            type: 'text',
            placeholder: 'e.g. 6 gadgets, 4 the same brand',
          },
          {
            key: 'services',
            prompt: {
              easy: 'What do you pay for every month?',
              medium: 'Which monthly services does your family pay for?',
              hard: 'List the recurring services identified.',
            },
            type: 'text',
            placeholder: 'cloud storage, music, games…',
          },
          {
            key: 'lockin',
            prompt: {
              easy: 'Would it be easy or hard to switch brands? Why?',
              medium: 'How hard would switching brands be, and what makes it hard?',
              hard: 'Evaluate the switching costs and explain the lock-in.',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: "Just observing — no need to buy or change anything! The goal is for your kid to NOTICE how connected gadgets and monthly services keep a family loyal.",
          medium:
            "This is an observation exercise only. Help your kid spot which devices interconnect and which services repeat monthly — the learning goal is recognizing lock-in, not making purchases.",
          hard:
            "Observational only; no transactions involved. Guide your child to map interoperability and recurring services, emphasizing how switching costs create customer retention.",
        },
        printables: {
          trackers: [
            {
              title: 'My Home Gadget Detective Sheet',
              columns: ['Gadget', 'Brand', 'Talks to others? (Y/N)', 'Costs money monthly?'],
              rows: 6,
              note: 'Circle the gadgets that are the same brand and work together.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
