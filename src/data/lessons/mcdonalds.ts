/**
 * McDonald's: Real Estate Empire — the hidden truth behind the burgers.
 *
 * Goal: take a kid from "McDonald's sells burgers" → to "no, McDonald's
 * is the world's biggest real estate company; burgers are the marketing"
 * → to walking their own neighborhood and decoding why every fast-food
 * store is exactly where it is.
 *
 * Beat order:
 *   intro → decision (open a McD's — what do you bet on?) → think-deeper
 *   (why does LOCATION compound?) → concept-cards (Franchise/Royalty/
 *   Real Estate/Moat) → calc-challenge (rent + royalty math) →
 *   brainstorm (3 spots in your neighborhood) → connect (Starbucks,
 *   Walgreens, gas stations) → outro → real-world-mission (3-store
 *   location scout).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'mcdonalds',
  themeKey: 'mcdonalds',
  emoji: '🍔',
  title: "McDonald's: Real Estate Empire",
  subtitle: {
    easy: 'McDonald\'s looks like a burger company. It\'s NOT. Here\'s the secret.',
    medium:
      'The most famous burger company in the world doesn\'t actually make most of its money from burgers. Find out where the money REALLY comes from.',
    hard:
      'A teardown of McDonald\'s actual business model: franchising + real estate as the cash engine, food as the customer-acquisition layer.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'thinking',
      text: {
        easy:
          "Quick question: what does McDonald\'s SELL? Burgers? Fries? Happy Meals? WRONG. (Well — kind of wrong.) McDonald\'s isn\'t really a burger company. It\'s the world\'s biggest REAL ESTATE company in disguise. Stick with me.",
        medium:
          "Most people think McDonald\'s is a burger company. The CEO of McDonald\'s for 25 years famously said: \"We are not in the hamburger business. We are in the real estate business.\" Today you\'ll find out what he meant — and why it changed how every chain restaurant works.",
        hard:
          "McDonald\'s is the canonical case study in how a category-leading consumer brand can be re-architected into a real-estate-and-royalty business. Today: the actual revenue mix, the franchise/landlord dual model, and what \"location is the product\" really means at scale.",
      },
    },

    // ─── Decision: opening your own McDonald's ────────────────────────
    {
      kind: 'decision',
      heading: '🧭 You\'re Opening a McDonald\'s',
      scenario: {
        easy:
          "Pretend you\'re going to open a brand-new McDonald\'s. You only have time to focus on ONE thing first. Three choices.",
        medium:
          "You\'ve got the green light to open a new McDonald\'s. You can\'t do everything at once. What\'s the ONE thing you bet on first — the choice that everything else will depend on?",
        hard:
          "Greenfield new-store strategic decision. Capex constrained. Identify the single highest-leverage bet — the one that determines the trajectory of the franchise.",
      },
      question: {
        easy: 'What do you bet on?',
        medium: 'Where do you put your focus?',
        hard: 'Where is the highest-leverage capital deployment?',
      },
      choices: [
        {
          label: {
            easy: 'The BURGER. Make it taste better than anyone else\'s.',
            medium: 'The product — make the food better than competitors',
            hard: 'Product differentiation — superior food specifications',
          },
          feedback: {
            easy:
              "Hmm. A better burger is nice, but here\'s the thing: McDonald\'s burgers aren\'t the best. People still go. So the burger isn\'t the secret. Try again.",
            medium:
              "Tempting — but McDonald\'s burgers are famously NOT the best. Five Guys, Shake Shack, In-N-Out all beat them on taste. McDonald\'s wins anyway. So burger quality can\'t be the lever.",
            hard:
              "Product quality is a weak primary lever in QSR — taste tests consistently rate competitors higher, yet McDonald\'s outsells all of them. Differentiation lives elsewhere in the model.",
          },
        },
        {
          label: {
            easy: 'The CORNER. Find the BEST spot — a busy corner near a highway.',
            medium: 'The location — a high-traffic corner with great visibility',
            hard: 'Real estate — premium high-traffic corner with maximum visibility',
          },
          feedback: {
            easy:
              "YES! McDonald\'s bet EVERYTHING on locations. Their secret: they pick a corner where a TON of people drive by. The burger comes second. The corner comes first.",
            medium:
              "Right call. Real McDonald\'s rule: they pick the corner BEFORE they pick the operator. Location drives traffic; traffic drives sales; sales pay for everything else. The burger is the EXCUSE to be on the corner — the corner is the product.",
            hard:
              "Aligned with the actual operating model. McDonald\'s site-selection process uses traffic counts, sight-lines, ingress/egress, and neighbor anchors — they pre-vet corners 5+ years before opening a store. The location IS the asset.",
          },
          isPreferred: true,
        },
        {
          label: {
            easy: 'The PEOPLE. Hire and train great workers.',
            medium: 'The team — hire and train the best operators',
            hard: 'Human capital — superior operations talent',
          },
          feedback: {
            easy:
              "Good thinking — but a great team in a bad spot makes less money than an OK team on a great corner. Location wins.",
            medium:
              "Important, but not the lead. McDonald\'s relies on standardized operations + a franchise system specifically so they DON\'T need superstar operators on every shift. Location does the heavy lifting.",
            hard:
              "Operational excellence matters at scale, but it\'s lower-leverage than site quality. The franchise model exists precisely to standardize operations so the corner remains the dominant variable.",
          },
        },
      ],
      realWorldReveal: {
        easy:
          "Ray Kroc — the guy who built McDonald\'s into the giant it is — said this famous line: \"I\'m not in the hamburger business. I\'m in the real estate business.\" McDonald\'s owns the LAND under almost every store. The burgers? Just the bait.",
        medium:
          "Ray Kroc literally told franchisees: \"We are not in the hamburger business. We are in the real estate business. The only reason we sell hamburgers is because they\'re the greatest producer of revenue from which our tenants can pay us rent.\" Today, McDonald\'s owns the land under ~55% of its stores and the building on ~80%.",
        hard:
          "Ray Kroc to Harry Sonneborn (the CFO who designed it): the franchise was the bait, the real estate was the asset. McDonald\'s Corporation today carries ~$40B+ of net property on its balance sheet — making it one of the largest commercial landlords on Earth. Franchisees pay rent on top of royalties. The burger is the marketing.",
      },
    },

    // ─── Think-deeper: why location compounds ──────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Is LOCATION So Powerful?',
      intro: {
        easy: "Wait — why does it matter SO much WHERE a McDonald\'s is? Let\'s think it through.",
        medium: "Let\'s zoom in on WHY location is more powerful than a better burger. Three layers.",
        hard: 'Apply first-principles to the location-as-moat hypothesis. Why does it beat product differentiation?',
      },
      layers: [
        {
          question: {
            easy: 'How does a person decide to stop at McDonald\'s?',
            medium: 'What actually triggers a fast-food visit?',
            hard: 'What\'s the dominant trigger in QSR consumer decision flow?',
          },
          reveal: {
            easy:
              "They SEE it. The big yellow M, on a corner, while they\'re hungry, while they\'re driving. They don\'t plan it — they just SEE it and turn in.",
            medium:
              "Visibility + proximity + hunger + low decision cost. Most fast-food visits aren\'t planned — they\'re convenience triggers. The brand someone SEES at the right moment wins, almost regardless of food quality.",
            hard:
              "Impulse/availability heuristic. QSR purchases are typically low-deliberation; brand-of-mind + visual-of-eye in the moment of hunger drives ~70% of conversions. Visibility = conversion.",
          },
        },
        {
          question: {
            easy: 'What happens to a great corner over time?',
            medium: 'Why does a good location get BETTER over the years?',
            hard: 'What drives the asset appreciation curve on a prime QSR site?',
          },
          reveal: {
            easy:
              "It gets MORE crowded. Cities grow, roads get busier, more houses pop up. That corner — that exact corner — becomes worth more EVERY year.",
            medium:
              "Population grows + roads get busier + neighborhoods build out. A prime corner today is a SUPER-prime corner in 20 years. The land itself appreciates, completely separate from the food business.",
            hard:
              "Urban density, vehicle-miles-traveled, and adjacent retail growth all compound. Prime QSR sites historically appreciate at ~4-6% real CAGR — faster than inflation, before any rent income.",
          },
        },
        {
          question: {
            easy: 'So what does McDonald\'s actually OWN that\'s special?',
            medium: 'What\'s the asset that makes McDonald\'s special — really?',
            hard: 'What is the durable competitive advantage on the balance sheet?',
          },
          reveal: {
            easy:
              "Thousands of the BEST corners in the world. New burger chains can\'t copy that. You can copy a burger recipe in a week. You can\'t copy a 30-year-old corner — somebody else already owns it.",
            medium:
              "A portfolio of ~40,000 prime corners worldwide. That\'s the moat. Competitors can copy the menu in a week, the décor in a month, the operations in a year. They CAN\'T copy the real estate — those corners are taken, and the new corners are worse.",
            hard:
              "The asset is a portfolio of irreplaceable land — a non-fungible, finite, appreciating, location-specific resource. New entrants face structural disadvantage: residual corners are lower-traffic by definition. This is a textbook \"locked-up scarce resource\" moat.",
          },
        },
        {
          question: {
            easy: 'How does McDonald\'s MAKE money from those corners?',
            medium: 'How does the cash actually flow to McDonald\'s HQ?',
            hard: 'Decompose the revenue streams to McDonald\'s Corp (not the franchisees).',
          },
          reveal: {
            easy:
              "Two ways. One: every franchise pays RENT to McDonald\'s for the building/land. Two: every franchise pays a chunk of every sale (called a ROYALTY) for using the brand. Burgers fund both — but McDonald\'s wins either way.",
            medium:
              "Two streams: (1) rent — every franchisee pays McDonald\'s Corp monthly rent on the building/land they sit on; (2) royalty — ~4-5% of every dollar of sales. McDonald\'s wins on BOTH the property AND the operations of every store. The franchisee bears the operating risk.",
            hard:
              "Three primary streams to McDonald\'s Corp: rent (~$10B/yr, the largest line), royalties (~$13B/yr at ~4-5% of franchise sales), and a small company-operated-store contribution. Margins on franchised stores are ~80%+ since McDonald\'s carries no food cost or labor — pure passive-style cash flow.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Things McDonald\'s Actually Sells',
      subheading: 'Burgers are #4 on this list. Yes, really.',
      cards: [
        {
          emoji: '🏪',
          title: 'Franchise',
          desc: {
            easy: 'A franchise is when someone else opens YOUR store, using YOUR name and YOUR recipes — and pays you to do it. McDonald\'s doesn\'t own most of its stores. Other people do!',
            medium:
              'A franchise: an entrepreneur pays you to operate a copy of your business. You get a fee + a slice of every sale. They get a proven playbook and a famous logo. ~95% of McDonald\'s stores are franchises.',
            hard:
              'Franchising = licensing the brand + operations playbook to a third-party operator in exchange for initial fee + ongoing royalty. McDonald\'s franchise rate ≈ 95%, vs Starbucks ~50% (mostly company-owned).',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '💰',
          title: 'Royalty',
          desc: {
            easy: 'A royalty is a piece of every sale. McDonald\'s gets about 4% of EVERY burger, EVERY fry, EVERY drink sold at every franchise — even though they don\'t make them.',
            medium:
              'Royalty: ~4-5% of all franchise sales flow to McDonald\'s HQ. Don\'t lift a spatula, don\'t hire a cook — just collect a slice of every transaction at every store, forever.',
            hard:
              'Royalty stream: ~4-5% of franchise gross sales paid to franchisor. High-margin (~95%+) because franchisor bears zero food/labor cost. The metric that compounds with same-store-sales growth.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '🏗️',
          title: 'Real Estate',
          desc: {
            easy: 'McDonald\'s OWNS the land + building under most of its stores. Franchisees rent it from them — like apartment tenants paying a landlord.',
            medium:
              "McDonald\'s owns ~55% of the land and ~80% of the buildings its franchisees operate from. Franchisees pay rent (often based on sales). McDonald\'s is one of the world\'s biggest commercial landlords — quietly.",
            hard:
              "Property on the balance sheet ~$40B+ net. Lease income ~$10B+/yr. Many leases are percentage-rent (e.g. base + % of sales), which captures upside as a store thrives. Tax/depreciation benefits sit at the corporate parent.",
          },
          color: '#E0F2FE',
        },
        {
          emoji: '🛡️',
          title: 'Moat',
          desc: {
            easy: 'A moat is what STOPS other companies from beating you. McDonald\'s moat is OWNING the best corners. You can\'t copy a corner — there\'s only one.',
            medium:
              'A moat is a durable competitive advantage that prevents copy-cats from catching up. McDonald\'s moat is a portfolio of irreplaceable real estate. Burger recipes can be copied; corners cannot.',
            hard:
              "Competitive moat (Buffett term): structural barrier to competitive incursion. McDonald\'s moat = location portfolio + brand recognition × scale economies. Land-based moats are unusually durable because the asset is non-fungible.",
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: rent + royalty math ───────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: McDonald\'s Pay Day',
      setup: {
        easy: 'One McDonald\'s store sells $3,000,000 of food a year. The franchisee pays McDonald\'s HQ $300,000 in rent + 4% of sales as a royalty. How much does HQ collect from this ONE store?',
        medium:
          "A McDonald\'s franchise does $3M in annual sales. The franchisee pays McDonald\'s Corp: $300K base rent + 4% of sales as royalty. What\'s McDonald\'s annual take from this store?",
        hard:
          "Franchise unit economics: gross sales $3M/yr. Franchisor extraction: $300K fixed base rent + 4% royalty on sales. Compute total franchisor revenue per store.",
      },
      problem: {
        givens: [
          { label: 'annual sales', value: 3000000, suffix: '$' },
          { label: 'base rent', value: 300000, suffix: '$' },
          { label: 'royalty rate', value: 4, suffix: '%' },
        ],
        answerLabel: 'HQ collects',
        answer: 420000,
        suffix: '$',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          "Step 1: Royalty = 4% × $3,000,000 = $120,000. Step 2: Add the rent = $120,000 + $300,000 = $420,000.\n\nMcDonald\'s HQ collects $420,000 from ONE store. They have over 40,000 stores. Do the rough math: that\'s billions of dollars a year — without flipping a single burger.",
        medium:
          'Royalty income = 0.04 × $3,000,000 = $120,000. Plus base rent of $300,000 = $420,000/store/year. Scale across ~40,000 stores → ~$17B/year of franchisor revenue, ~95% of which is gross margin since HQ has no food cost, no labor cost, no kitchen rent. That\'s the secret.',
        hard:
          'Per-unit franchisor extraction: rent + royalty = $300K + 0.04·$3M = $420K. Franchisor gross margin ≈ 95% (no COGS, no operating labor). Scaled: ~40K units × $420K = ~$17B revenue/yr ≈ company filings ($25B total with company-operated stores at lower margin). Operating margin at the corporate level ~45%, ~4× the franchisee\'s ~10-15% operating margin. The whole architecture transfers operating risk to the franchisee and retains the high-margin annuity at the parent.',
      },
    },

    // ─── Brainstorm: 3 spots in your neighborhood ─────────────────────
    {
      kind: 'brainstorm',
      heading: '🗺️ Scout YOUR Neighborhood',
      prompt: {
        easy:
          'Pick 3 spots near you where you\'d open a NEW fast-food restaurant. For each one, say WHY you picked that spot.',
        medium:
          'Walk through your neighborhood in your head. Pick 3 spots you\'d open a new fast-food restaurant. For each: write the location AND the one reason it\'s a great corner.',
        hard:
          'Identify 3 candidate sites in your local trade area. For each: write coordinates/landmarks, the dominant traffic driver, and one disqualifying risk.',
      },
      minItems: 3,
      placeholder: 'e.g. The corner by the highway exit, because…',
      hints: [
        {
          easy: 'Highway exits are GOLD. People are tired, hungry, and want to stop — fast.',
          medium: "Highway exits and ramps win. Hungry drivers, easy on/off, captive demand. Most McDonald\'s sites you\'ve seen on road trips were picked exactly this way.",
          hard: "Interstate exit ramps offer captive demand + low search cost + sleep-deprived buyers + low menu deliberation. Highest-grossing McDonald\'s units globally cluster at interchanges.",
        },
        {
          easy: 'Spots near schools, sports fields, or play centers — hungry kids and parents in a hurry.',
          medium: 'Adjacent to schools, sports fields, or rec centers. Steady after-school traffic + tired parents = high conversion.',
          hard: 'Anchor-adjacency to schools, athletic facilities, or family-oriented retail compounds dwell-time + repeat visits. Lunch and after-school dayparts both convert.',
        },
        {
          easy: 'Right next to a busy grocery store, gas station, or hardware store. People are already there — they\'ll stop in for food too.',
          medium: 'Co-tenancy with high-traffic anchors: grocery stores, gas stations, big-box retail. The anchor pulls people; you skim the foot traffic.',
          hard: 'Anchor co-tenancy generates spillover demand. Tier-1 anchors (Walmart, Costco, major gas chains) reliably lift adjacent QSR traffic 20-40%.',
        },
        {
          easy: 'A big corner you can SEE from far away — bright sign, lots of windows.',
          medium: 'Pick spots with great VISIBILITY — corners, not mid-block. Mid-block locations underperform corners by 30-50%.',
          hard: 'Corner sites with 270° visibility, illuminated signage, and pylon eligibility outperform interior parcels. Sight-line is a measurable revenue driver.',
        },
        {
          easy: 'Spots with a big PARKING LOT (people don\'t want to circle).',
          medium: 'Lots of parking + easy in/out. Cars circling is the silent killer of fast-food traffic.',
          hard: 'Ingress/egress and parking ratio (spots per 1000 sqft) directly affect throughput. Tight access = lost customers; suburban sites generally need 30+ spots minimum.',
        },
        {
          easy: 'Look for spots where you ALREADY see another fast-food restaurant. They picked it first — it\'s probably a great spot.',
          medium: "Existing fast-food cluster is a SIGNAL, not a problem. Where you see one chain, others followed because the math works. Look for the empty corner inside the cluster.",
          hard: 'Co-location with existing QSR is a positive signal — those operators have already validated the trade area\'s traffic count and demographics.',
        },
      ],
      closer: {
        easy: 'Now look for those things when you\'re driving around. Every fast-food store you see was picked carefully. Try to figure out WHY.',
        medium:
          'Once you start seeing these patterns, you can\'t un-see them. Every fast-food location is a thesis. The corners that work are no accident.',
        hard:
          "The site-selection lens generalizes beyond QSR — banks, gas stations, urgent care, drug stores all follow similar logic. Once internalized, retail real estate is legible.",
      },
    },

    // ─── Connect: other businesses using the same playbook ────────────
    {
      kind: 'connect',
      heading: '🌐 Same Playbook, Different Logos',
      concept: {
        easy:
          'McDonald\'s wasn\'t the only one who figured this out. Lots of big brands run the same trick — they care about location MORE than their product.',
        medium:
          'The "location-is-the-product" playbook generalizes to every other category that wins on convenience. Once you see the pattern, you see it everywhere.',
        hard:
          'Location-as-moat is a category-spanning competitive lever. Wherever consumers buy on convenience (vs. destination), the operator with the better corner wins.',
      },
      examples: [
        {
          emoji: '☕',
          who: 'Starbucks',
          story: {
            easy: 'Starbucks puts stores on EVERY corner — sometimes 2 on the same block! Why? Because when you want coffee, you want it NOW. The closest store wins.',
            medium:
              "Starbucks famously over-locates — sometimes 2 stores within sight of each other. The strategy: capture every coffee craving before a competitor does. They\'d rather cannibalize themselves than lose a customer to anyone else.",
            hard:
              "Starbucks\' cluster strategy (Schultz era): saturation locations create category dominance + brand-of-mind + zero search cost. Cannibalization is intentional and modeled — net traffic > cannibalization loss.",
          },
        },
        {
          emoji: '💊',
          who: 'Walgreens & CVS',
          story: {
            easy: 'Walgreens stores are almost always on a busy CORNER. The pharmacy is just the excuse — they\'re really fighting for the best corner in town.',
            medium:
              "Walgreens and CVS both target the most-visible street corners (\"high-and-dry\" sites with both-direction access). The pharmacy IS the business, but the corner is the moat. Both chains will outbid each other for the same spot.",
            hard:
              'Drug-store retail follows identical site logic — Walgreens / CVS bid each other up for prime corners precisely because the corner is a 30-year asset. Same pattern: location-driven, convenience-driven, corner-as-product.',
          },
        },
        {
          emoji: '⛽',
          who: 'Gas Stations',
          story: {
            easy: 'Every gas station you\'ve ever seen is right by a busy intersection or highway exit. Gas is the SAME gas everywhere — they win on LOCATION.',
            medium:
              "Gas stations sell a commodity (gas is gas). They can\'t differentiate on product. They differentiate on location — corner of busy intersection, highway exit, on your route home. Same lesson, more obvious.",
            hard:
              "Pure commodity retail (gasoline) where product differentiation is essentially zero, so location IS the differentiation. The exit-ramp Shell beats the cul-de-sac BP every time, identical product.",
          },
        },
      ],
      kicker: {
        easy: 'Same secret. Different stores. Once you know it, you\'ll spot it on every drive home.',
        medium:
          "Every category that sells convenience wins on location. McDonald\'s, Starbucks, Walgreens, gas stations, ATMs, urgent care, dry cleaners — same story, different logo.",
        hard:
          'Location-as-moat applies wherever the customer\'s search cost is high relative to product differentiation. It\'s one of the few moats that genuinely compounds with time.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You just figured out what most adults never realize: McDonald\'s isn\'t a burger company — it\'s a real estate empire that happens to sell burgers. That\'s the most valuable lesson in fast food.",
        medium:
          "You\'ve cracked the actual McDonald\'s business model: real-estate + royalties dressed up as burgers. Now you can decode every fast-food brand the same way.",
        hard:
          "You now understand the dual-revenue franchise/real-estate model, the location-as-moat thesis, and the per-unit economics that scale it. This framework generalizes across QSR, retail pharmacy, gas, and most convenience-driven categories.",
      },
      bonusTip: {
        easy:
          "Ray Kroc said this to his salespeople: \"I\'m not in the hamburger business. I\'m in the real estate business.\" Most people thought he was joking. He wasn\'t.",
        medium:
          'Ray Kroc\'s CFO Harry Sonneborn — the actual architect of the real-estate model — said: "The McDonald\'s Corporation is in the real estate business. The only reason we sell fifteen-cent hamburgers is because they are the greatest producer of revenue from which our tenants can pay us rent." That quote built a $200B company.',
        hard:
          "Sonneborn\'s 1956 architecture: McDonald\'s Corp leases or buys the land, sub-leases to franchisees at a markup AND collects royalty + initial franchise fee. The structure converts a low-margin food business into a high-margin REIT + royalty business. Same insight is now copied across QSR.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'mcdonalds',
        emoji: '🍔',
        title: {
          easy: 'Location Scout: 3 Fast-Food Stores',
          medium: 'Scout 3 fast-food locations and decode why they\'re there',
          hard: 'Conduct a 3-site retail location audit',
        },
        pitch: {
          easy:
            "Walk around (with a grown-up) and pick 3 fast-food spots near you. For each, write down WHY you think they put it there. Highway? Big sign? Lots of cars?",
          medium:
            "Take a real-world walk (or drive) with a parent. Pick 3 fast-food locations near you and decode each: what makes that exact corner work? Visibility? Traffic? Anchor neighbor? Schools nearby?",
          hard:
            "Field exercise: audit 3 QSR sites in your trade area. Capture site characteristics (traffic, visibility, anchor co-tenants, ingress/egress, parking) and score each.",
        },
        steps: [
          {
            emoji: '👨‍👩‍👧',
            text: {
              easy: 'Plan a walk or drive with a grown-up. Pick a route past at least 3 fast-food restaurants.',
              medium: 'With a parent, plan a route that passes 3+ fast-food restaurants. Bring the printed scout sheet.',
              hard: 'Plan a route covering 3+ QSR sites of varying types (highway, urban corner, anchor-adjacent). Bring field-notes sheet.',
            },
          },
          {
            emoji: '📷',
            text: {
              easy: 'Take a photo of each store (with grown-up permission!) so you can study it later.',
              medium: 'Photograph the storefront and the surrounding intersection. Stand across the street if it\'s safer.',
              hard: 'Capture wide-shot photos showing site context — adjacent buildings, road type, signage visibility from approach.',
            },
          },
          {
            emoji: '👀',
            text: {
              easy: 'Look around. Is it on a corner? Near a highway? Near a school? Big parking lot?',
              medium: 'Note: corner vs mid-block? Highway-adjacent? Anchor neighbor (grocery, gas, school)? Lit-up signage?',
              hard: 'Score each on: visibility (270° corner?), traffic class (arterial vs collector vs local), anchor proximity, parking ratio, ingress/egress quality.',
            },
          },
          {
            emoji: '🚗',
            text: {
              easy: 'Count how many cars are at the drive-thru. A long line means GREAT location.',
              medium: 'Observe the drive-thru line length. Long line = the location is working.',
              hard: 'Quantitative observation: drive-thru queue depth at peak (lunch/dinner). Cars per peak hour is the cleanest revenue proxy.',
            },
          },
          {
            emoji: '✍️',
            text: {
              easy: 'Write your reasons in the scout sheet — which store had the BEST corner?',
              medium: 'Fill out the scout sheet. Rank the 3 locations 1-2-3 by quality of the corner.',
              hard: 'Complete the scoring sheet. Rank sites and write a one-paragraph thesis on the #1 site\'s competitive advantage.',
            },
          },
        ],
        reflection: [
          {
            key: 'stores',
            prompt: {
              easy: 'Which 3 fast-food restaurants did you scout?',
              medium: 'Your 3 sites (store + cross streets)',
              hard: 'Site IDs (brand + intersection)',
            },
            type: 'text',
            placeholder: 'McDonald\'s on Main & 5th, Chick-fil-A on…',
          },
          {
            key: 'best',
            prompt: {
              easy: 'Which store had the BEST corner? Why?',
              medium: 'Best location of the 3 — and the ONE biggest reason why',
              hard: '#1-ranked site + dominant value driver',
            },
            type: 'text',
            placeholder: 'McDonald\'s on Main — right by the highway exit',
          },
          {
            key: 'worst',
            prompt: {
              easy: 'Which store had a SO-SO corner? What\'s missing?',
              medium: 'Weakest of the 3 — what\'s holding it back?',
              hard: '#3-ranked site + primary disqualifier',
            },
            type: 'text',
            placeholder: 'Subway tucked behind a building — hard to see',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What did you notice that surprised you?',
              medium: 'What pattern surprised you? Anything you\'ll never un-see?',
              hard: 'Biggest insight from the field observation that contradicted your prior beliefs',
            },
            type: 'longtext',
            placeholder: 'I never noticed before that…',
          },
        ],
        parentNote: {
          easy: "Walk together, stay on sidewalks, no climbing on fences for that perfect photo. This is observational only — no need to enter the stores.",
          medium:
            'Pure observation walk. No need to enter stores. Photos from sidewalk or public space only. Talk through each spot together — kids notice things adults stopped seeing years ago.',
          hard:
            "Field observation, no commercial photography permission required for public-space shots. Consider doing the walk at peak (~12pm or ~6pm) for accurate drive-thru observations.",
        },
        printables: {
          trackers: [
            {
              title: 'Location Scout Field Notes',
              note: 'One row per fast-food store you scout. Score each corner 1-10!',
              columns: ['Store + Brand', 'Corner or Mid-block?', 'Highway / Anchor Nearby?', 'Cars at Drive-thru', 'My Score (1-10)'],
              rows: 5,
            },
          ],
          worksheets: [
            {
              title: 'Why Are They THERE?',
              blocks: [
                {
                  label: '🏪 Store #1',
                  hint: 'Brand + intersection (e.g. "McDonald\'s at Main & 5th").',
                  lines: 1,
                },
                {
                  label: '   ✅ What makes this corner GREAT',
                  hint: 'Highway? Anchor? Visibility? Parking?',
                  lines: 3,
                },
                {
                  label: '   ⚠️ What could be better',
                  lines: 2,
                },
                {
                  label: '🏪 Store #2',
                  lines: 1,
                },
                {
                  label: '   ✅ What makes this corner GREAT',
                  lines: 3,
                },
                {
                  label: '   ⚠️ What could be better',
                  lines: 2,
                },
                {
                  label: '🏪 Store #3',
                  lines: 1,
                },
                {
                  label: '   ✅ What makes this corner GREAT',
                  lines: 3,
                },
                {
                  label: '   ⚠️ What could be better',
                  lines: 2,
                },
                {
                  label: '🏆 My ranking — which had the best corner?',
                  hint: 'Write 1st, 2nd, 3rd with one-line reasons.',
                  lines: 4,
                },
                {
                  label: '🗺️ Sketch the best corner from above',
                  hint: 'Draw the streets, the store, the parking, and arrows showing where the cars come from.',
                  lines: 8,
                },
              ],
            },
          ],
          checklists: [
            {
              title: 'Safe Scouting Checklist',
              items: [
                'A grown-up walking or driving with me',
                'Comfortable shoes (lots of walking)',
                'Phone or camera (with grown-up permission)',
                'Printed scout sheet + pen',
                'Water bottle',
                'A route mapped out in advance — at least 3 stores',
                'A time when stores are OPEN (lunch or dinner is best)',
                'Stay on sidewalks and public spaces — no climbing or trespassing',
              ],
              note: 'Tip: do this at lunch time (~12:00) or dinner (~6:00) — drive-thru lines tell you which stores are winning.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
