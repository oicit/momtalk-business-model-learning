/**
 * Business 101 — the foundational framework lesson.
 *
 * This is the FIRST lesson kids do. It gives them the mental model
 * that every later lesson plugs into:
 *
 *   • The 5 building blocks every business has (Customer, Product,
 *     Price, Cost, Edge)
 *   • The 4 questions every business answers (WHO / WHAT / HOW / WHY-you)
 *   • The universal equation: Revenue − Cost = Profit
 *
 * Once kids learn this, every specific business (Lemonade, Chick-fil-A,
 * Pet Shop, YouTube) becomes "fill in the blanks" rather than a brand
 * new mystery.
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'business-101',
  themeKey: 'business',
  emoji: '🧠',
  title: 'Business 101',
  subtitle: {
    easy: "Learn the BIG SECRET that every business in the world shares!",
    medium:
      "Before we dive into specific businesses, let's learn the framework that explains them ALL.",
    hard:
      "Build a universal mental model for any business: the 5 building blocks, the 4 questions, and the operating equation.",
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Hi friend! Before we look at lemonade stands or restaurants, let me show you the BIG SECRET — every business in the world has the SAME 5 parts!",
        medium:
          "Before we play with specific businesses, let's learn the universal framework. Once you see it, you can understand ANY business — from your friend's bracelet stand to Apple.",
        hard:
          "First principles before specifics. We'll build a universal business framework you can apply to any company on Earth. Every later lesson is a special case of what you'll learn here.",
      },
    },

    // ─── Think-deeper: What IS a business? ─────────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 What IS a Business?',
      intro: {
        easy: "Let's start with the most basic question.",
        medium: "Let's strip this down to its simplest form.",
        hard: "First-principles decomposition before assembling the framework.",
      },
      layers: [
        {
          question: {
            easy: "What is a business, in ONE simple sentence?",
            medium: "Define 'business' in one sentence — no jargon.",
            hard: "Strip 'business' to its irreducible definition.",
          },
          reveal: {
            easy:
              "A business is a way to trade VALUE for MONEY. You give someone something they want — they give you money. That's it!",
            medium:
              "A business is a repeatable trade: you offer value (a thing or a service) and customers offer money in return. Repeat = business. One-time = a favor.",
            hard:
              "A business is a repeatable, value-for-money transaction system. Repeatability + sustained margin distinguish a business from a hobby or a one-off sale.",
          },
        },
        {
          question: {
            easy: "Who has to be HAPPY for a business to work?",
            medium: "For a business to work long-term, who needs to win?",
            hard: "What's the equilibrium condition for a sustainable business?",
          },
          reveal: {
            easy:
              "BOTH sides! The customer feels great about what they got. You feel great about what you got. Both winning = the business keeps going!",
            medium:
              "Both. The customer leaves feeling they got MORE than they paid (perceived value > price). You earn MORE than it cost you (price > cost). That's the only way both sides keep returning.",
            hard:
              "Customer surplus (value − price > 0) and producer surplus (price − cost > 0) must both be positive. If either side feels they're losing, the business dies.",
          },
        },
        {
          question: {
            easy: "So really… what are the PARTS of any business?",
            medium: "Strip any business to its components. What MUST it have?",
            hard: "Enumerate the necessary components of a business system.",
          },
          reveal: {
            easy:
              "Every business has 5 parts: a CUSTOMER who wants it, a PRODUCT or service, a PRICE, a COST to make it, and an EDGE (why YOU over someone else).",
            medium:
              "Five building blocks: Customer (who buys), Product/Service (what you sell), Price (what they pay), Cost (what it costs you), Edge (your unfair advantage). Miss one and the business breaks.",
            hard:
              "Five-tuple: (Customer segment, Value offering, Price, Cost structure, Differentiation moat). Each is necessary; none alone is sufficient. Most business failures are a missing or misaligned component, not bad luck.",
          },
        },
      ],
    },

    // ─── Concept cards: The 5 Building Blocks ──────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The 5 Building Blocks',
      subheading: 'Every business — every single one — has these five parts.',
      cards: [
        {
          emoji: '🙋',
          title: '1. The Customer',
          desc: {
            easy: 'The PERSON who buys! Without customers, there is no business — just stuff sitting on a table.',
            medium:
              "The person who has both the WANT and the MONEY to pay for what you offer. No customer = no business. First question of any business idea: who is this FOR?",
            hard:
              "Target customer segment defined by want + ability to pay + access. The most common cause of business failure is a product looking for a customer instead of a customer looking for a product.",
          },
          color: '#FFE5EA',
        },
        {
          emoji: '🍋',
          title: '2. The Product (or Service)',
          desc: {
            easy: 'The THING you sell. Could be a cup of lemonade, a haircut, a YouTube video, or a website.',
            medium:
              "What you actually deliver: a product (lemonade, sneakers, an app) or a service (dog walking, haircuts, lessons). The thing that creates value for the customer.",
            hard:
              "The value offering. Product = goods; service = labor/expertise; hybrid = SaaS, subscription boxes, etc. The form follows function: pick whatever delivers the value efficiently.",
          },
          color: '#FFFDE8',
        },
        {
          emoji: '💵',
          title: '3. The Price',
          desc: {
            easy: 'How much it COSTS the customer. Pick too low: you lose money. Pick too high: they walk away.',
            medium:
              "What the customer pays. Pricing is BOTH math (cover your costs) and psychology (what they feel it's worth). Set it carefully — it's your biggest profit lever.",
            hard:
              "Price = the lever that converts perceived value into revenue. Critical: pricing power is the #1 indicator of moat. Buffett: 'The single most important decision in evaluating a business is pricing power.'",
          },
          color: '#FFE7C2',
        },
        {
          emoji: '🧾',
          title: '4. The Cost',
          desc: {
            easy: 'How much money YOU spend to make it. Lemons, sugar, sign-makers, time — all costs.',
            medium:
              "Everything you pay to deliver the product: ingredients, time, tools, space, etc. Track it carefully — if you don't know your cost, you don't know your profit.",
            hard:
              "Sum of variable costs (scale with units) + fixed costs (don't). The unit economics test: at typical volume, does (price − variable cost) cover allocated fixed cost + profit target?",
          },
          color: '#E4DCFF',
        },
        {
          emoji: '⚡',
          title: '5. The Edge',
          desc: {
            easy: 'Why someone picks YOU and not someone else. Better taste? Lower price? Funny sign? It\'s YOUR thing!',
            medium:
              "Your unfair advantage. What you have that competitors don't: a unique recipe, a great location, an amazing story, the best customer service. No edge = no reason to choose you.",
            hard:
              "Differentiation or moat. Without an edge, you're a commodity competing on price alone — race to the bottom. Edge can be: brand, network effects, scale, switching costs, IP, or operational excellence.",
          },
          color: '#D7F0E4',
        },
      ],
    },

    // ─── Connect: same 5 blocks in 4 businesses ────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Same 5 Blocks, Different Business',
      concept: {
        easy: "Watch how the SAME 5 building blocks show up in 4 super different businesses:",
        medium:
          "Let's see how the 5 building blocks fit into businesses that look totally different on the outside but share the same skeleton.",
        hard:
          "The framework is invariant. Below, four businesses with very different surface forms — same five components.",
      },
      examples: [
        {
          emoji: '🍋',
          who: 'Your lemonade stand',
          story: {
            easy: 'Customer = thirsty neighbors. Product = lemonade. Price = $2. Cost = lemons + sugar. Edge = it\'s super fresh and you have a fun sign!',
            medium:
              'Customer: hot pedestrians. Product: cold lemonade. Price: $1-$3. Cost: $0.40-$0.60 per cup. Edge: freshness + the cute factor of a kid-run stand.',
            hard:
              'TAM: foot-traffic-volume × thirst-conversion. Product: refreshment + experience. Price: $1-3 (limited price discovery). Variable cost ≈ $0.50/cup. Edge: micro-location + WOM novelty.',
          },
        },
        {
          emoji: '🐔',
          who: 'Chick-fil-A',
          story: {
            easy:
              "Customer = hungry families. Product = chicken sandwich. Price = $7. Cost = chicken + buns. Edge = 'my pleasure' service + always tasty!",
            medium:
              'Customer: fast-food diners who care about quality + service. Product: chicken-focused menu. Price: ~30% above McDonald\'s. Cost: ingredients + labor + rent. Edge: legendary service + closed Sundays brand mystique.',
            hard:
              "Customer: time-pressed family demographic, willing to pay quality premium. Product: chicken-centric menu, narrow + deep. Price premium ~30% to comp set. Cost structure favors AUV scale. Edge: service-oriented brand + cult-of-CFA franchise selectivity.",
          },
        },
        {
          emoji: '🎬',
          who: 'A YouTube creator',
          story: {
            easy:
              "Customer = the people watching (and advertisers paying for ads!). Product = videos. Price = free to watch (ads pay). Cost = camera + time. Edge = your personality and your fans!",
            medium:
              'Customer: viewers (eyeballs sold to advertisers). Product: video content. Price: free to viewer; advertiser pays CPM. Cost: time + equipment + editing. Edge: niche authority + personality + audience trust.',
            hard:
              "Two-sided market: creator delivers attention to platform, platform sells to advertisers. Customer = the advertiser (revenue source). Product = audience-attention bundles. Price = CPM × inventory. Cost = production overhead. Edge = niche dominance + parasocial trust.",
          },
        },
        {
          emoji: '📱',
          who: 'Apple iPhone',
          story: {
            easy:
              "Customer = people who want a phone. Product = iPhone. Price = $1000. Cost = $300 to make it. Edge = the most beautiful design and EVERYONE has one!",
            medium:
              'Customer: premium-segment consumers. Product: iPhone hardware + iOS + App Store. Price: $1,000+. Cost: ~$300 in materials. Edge: brand + ecosystem + design excellence.',
            hard:
              "Customer: aspirational + ecosystem-locked-in users (high LTV). Product: hardware-OS-services bundle. ASP ~$1,000-1,200. BOM ~$300, gross margin ~70%. Edge: ecosystem lock-in + brand premium + integrated supply chain.",
          },
        },
      ],
      kicker: {
        easy: "See? Same 5 blocks! Once you spot the blocks, you can understand ANY business.",
        medium:
          "Same framework. The differences are in size, customer segment, and pricing power — not in the underlying structure.",
        hard:
          "Surface variance hides structural similarity. The skill is learning to see through products to the underlying components. This is the fundamental investing skill, too.",
      },
    },

    // ─── Concept cards: The 4 Questions ────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The 4 Questions Every Business Answers',
      subheading: 'Before you start ANY business, you have to answer these.',
      cards: [
        {
          emoji: '🙋',
          title: '1. WHO is it for?',
          desc: {
            easy: 'Who are the people you\'re selling to? Kids? Grown-ups? Pet owners? Be SPECIFIC!',
            medium:
              "Be specific about WHO. 'Everyone' is not an answer. 'Kids 8-12 in my neighborhood' is. The narrower the better.",
            hard:
              "Define your ICP (Ideal Customer Profile). Vague targeting = vague messaging = vague conversion. Specificity multiplies precision in every later choice.",
          },
          color: '#FFE5EA',
        },
        {
          emoji: '🎁',
          title: '2. WHAT do they get?',
          desc: {
            easy: 'What VALUE are they getting? Yummy taste? Fun experience? Saved time?',
            medium:
              "The actual benefit to the customer — NOT the product itself. People don't buy a drill — they buy a hole in the wall. Sell the outcome.",
            hard:
              "Jobs-to-be-done framing: what JOB are they hiring your product to do? The product is the means; the job is the want. Levitt 1960: customers don't want a quarter-inch drill — they want a quarter-inch hole.",
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🚚',
          title: '3. HOW do they get it?',
          desc: {
            easy: 'Where does the customer FIND you? A stand on the corner? A website? Walking down the street?',
            medium:
              "Distribution. The product can be amazing, but if customers can't find it, no sales. Where does your customer ALREADY go that you can intercept them?",
            hard:
              "Distribution channel + customer acquisition. Most early-stage businesses fail not on product but on distribution. Choose channels with traffic density + low CAC + repeatability.",
          },
          color: '#E0F2FE',
        },
        {
          emoji: '⚡',
          title: '4. WHY YOU?',
          desc: {
            easy: 'Why pick YOU instead of someone else? Be honest with yourself — and be DIFFERENT.',
            medium:
              "The differentiation question. If a competitor exists, why should the customer pick you? If the answer is 'because I tried,' that's not enough.",
            hard:
              "Sustainable competitive advantage. Without a real why-you, you're competing on price, which compresses margin to zero. The why must be defensible AND visible to the customer.",
          },
          color: '#D7F0E4',
        },
      ],
    },

    // ─── Decision: spot the business type ──────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 Spot the Business',
      scenario: {
        easy:
          "Your friend Maya wants to make money. She tells you: 'I'm going to walk dogs for $5 each.'",
        medium:
          "Your friend Maya pitches you her idea: 'I'm going to walk dogs in our neighborhood for $5 per walk. I'll do it after school.'",
        hard:
          "Maya describes: 'After-school dog walking service, $5 flat rate, neighborhood radius limited to 4 blocks.'",
      },
      question: {
        easy: 'What KIND of business is this?',
        medium: 'How would you classify Maya\'s business?',
        hard: 'Categorize Maya\'s offering using the framework:',
      },
      choices: [
        {
          label: {
            easy: 'A PRODUCT business — she\'s selling stuff (dogs?)',
            medium: 'Product business — she\'s selling something tangible',
            hard: 'Product business (goods/inventory)',
          },
          feedback: {
            easy: "Hmm no — Maya isn't SELLING dogs! She's selling something else…",
            medium: "Not quite — Maya isn't selling a physical product. Owners keep their dogs! Try again.",
            hard: "Misclassification — no goods change hands. Maya is selling an action, not an artifact.",
          },
        },
        {
          label: {
            easy: 'A SERVICE business — she\'s selling her TIME and CARE',
            medium: 'Service business — she\'s selling her time and skill',
            hard: 'Service business — labor + reliability sold by the unit',
          },
          feedback: {
            easy:
              "YES! She's selling SERVICE. Dog walking is her time + her care. Service businesses sell ACTIONS, not things!",
            medium:
              "Correct! Maya's selling labor + reliability. Service businesses include: dog walking, tutoring, haircuts, plumbing, lawyers. The 'product' is what you DO, not what you make.",
            hard:
              "Correct. Service economy classification. Maya's unit economics are per-walk labor × utilization × geographic density.",
          },
          isPreferred: true,
        },
        {
          label: {
            easy: 'A SUBSCRIPTION — like Netflix but for dogs',
            medium: 'A subscription business — recurring monthly fee',
            hard: 'Subscription / recurring revenue model',
          },
          feedback: {
            easy:
              "Close but not yet! Maya charges per WALK, not per month. But if she started a 'monthly dog walking plan,' THEN she'd have a subscription.",
            medium:
              "Almost! Maya is per-transaction. Subscriptions charge a recurring fee for ongoing access. If she said '$50/month, unlimited walks,' THAT would be a subscription.",
            hard:
              "Not yet — Maya is transactional, not subscription. A subscription mode would be 'flat $X/mo for guaranteed N walks/week.' Different revenue model, different LTV.",
          },
        },
      ],
      realWorldReveal: {
        easy:
          "There are 4 main TYPES of business: 1) Product (sell stuff), 2) Service (sell time + skill), 3) Subscription (pay every month for access), 4) Platform (connect two groups, like YouTube connects creators + viewers).",
        medium:
          "Four broad business types: Product (goods sold per-unit), Service (labor sold per-job or per-hour), Subscription (recurring access), and Platform (matches two sides like YouTube, Airbnb, Uber). Maya's a service — but she could grow into other models!",
        hard:
          "Four canonical models: Product (Apple), Service (Maya), Subscription (Netflix), Platform/Marketplace (Uber). Each has distinct unit economics: product favors scale + margin; service is labor-bounded; subscription compounds via retention; platform wins via network effects.",
      },
    },

    // ─── Brainstorm: apply the framework ──────────────────────────────
    {
      kind: 'brainstorm',
      heading: '✨ X-Ray a Business You Love',
      prompt: {
        easy: "Pick ANY business you know — Disneyland, Pokemon, your favorite YouTuber, McDonald's. Write down the 4 questions and answer them for that business!",
        medium:
          "Pick any business you know well. In each line below, write the answer to a question: WHO, WHAT, HOW, WHY YOU. Apply the framework you just learned.",
        hard:
          "Pick any business. Decompose it using the framework: identify the target customer, the value offering, the distribution mechanism, and the defensibility. Be specific — vague answers reveal vague thinking.",
      },
      minItems: 4,
      placeholder: 'e.g. WHO: kids who love dinosaurs...',
      hints: [
        {
          easy: "WHO: BE SPECIFIC. Not 'everyone' — say something like 'kids who love Pokemon' or 'people who hate cooking.'",
          medium:
            "WHO: write a real, specific customer. 'Everyone' is a red flag. Try 'parents shopping for birthday gifts' or 'teens into fashion.'",
          hard:
            "WHO: define ICP with demographic + psychographic + behavioral specificity. If the description fits everyone, the targeting is wrong.",
        },
        {
          easy: "WHAT: Don't just say the THING. Say what FEELING they get. Disney sells magic, not just rides!",
          medium:
            "WHAT: focus on the outcome, not the artifact. Starbucks doesn't sell coffee — it sells the third place + a warm moment.",
          hard:
            "WHAT: articulate the job-to-be-done. The product is the means; the job is what they hire it for. Levitt: 'Customers buy progress, not features.'",
        },
        {
          easy: "HOW: Where do they FIND it? At a store? Online? In a movie? The library? Pinpoint the spot.",
          medium:
            "HOW: distribution. Where does the customer encounter the offering? Channel + traffic source. The wrong channel kills great products.",
          hard:
            "HOW: distribution funnel. Most early-stage businesses fail on this, not on product. Identify channels with high traffic density + low CAC.",
        },
        {
          easy: "WHY YOU: What makes them DIFFERENT? Better story? Funnier? Faster? Cheaper? Cooler stickers?",
          medium:
            "WHY YOU: their unique edge. If a customer could pick a competitor and get the same thing, this business has no moat. What's defensible?",
          hard:
            "WHY YOU: enumerate the moat. Brand, network effects, scale, switching costs, IP, operations, exclusive contracts. No moat = price competition = margin erosion.",
        },
        {
          easy: "BONUS: After answering all 4, ask yourself: 'Would this make money?' If YES → it's a real business. If NO → time to fix something!",
          medium:
            "BONUS test: do all four answers REINFORCE each other? Misaligned components are the most common cause of failure.",
          hard:
            "Coherence test: customer + value + distribution + edge must form a self-reinforcing system. Apple's components compound; commodity competitors' don't.",
        },
      ],
      closer: {
        easy: "You just X-rayed a real business! From now on, you can do this with any business you see — at the mall, on YouTube, anywhere.",
        medium:
          "You just applied the universal framework. From now on, every business you see — store, app, restaurant, channel — you can decompose like this.",
        hard:
          "You've internalized the operating model lens. Practice this on 10+ businesses and it becomes automatic — the foundation of strategic and investment thinking.",
      },
    },

    // ─── Calc-challenge: the universal equation ─────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'The Universal Equation',
      setup: {
        easy: "Every business in the world uses this same math: Revenue − Cost = Profit. Try it! You sell 20 cookies for $1 each. You spent $6 on ingredients. What's your PROFIT?",
        medium:
          "Try the universal equation: Revenue − Cost = Profit. Scenario: you sold 20 cookies at $1 each, ingredients cost you $6 total. Compute profit.",
        hard:
          "Apply the unit-economics primitive: π = R − C. Given units = 20, price = $1, total cost = $6, compute gross profit.",
      },
      problem: {
        givens: [
          { label: 'units sold', value: 20 },
          { label: 'price each', value: 1, suffix: '$' },
          { label: 'total cost', value: 6, suffix: '$' },
        ],
        answerLabel: 'Profit',
        answer: 14,
        suffix: '$',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          'Revenue = 20 × $1 = $20. Cost = $6. Profit = $20 − $6 = $14. THIS is the math every single business on Earth uses.',
        medium:
          "Revenue = 20 × $1 = $20. Subtract cost $6 → $14 profit. Gross margin: $14/$20 = 70%. That's the universal equation: π = R − C.",
        hard:
          "R = 20 × 1 = $20. π = R − C = 20 − 6 = $14. GM% = 70%. Strong unit margin. Same equation at all scales: lemonade stand, Apple, hedge fund.",
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "You now have BUSINESS VISION! You can see through any business and figure out exactly how it works.",
        medium:
          "Look at you — you've just installed the universal business framework. Every later lesson is just this framework applied to a specific business.",
        hard:
          "You now have a reusable operating-model lens. Every specific business you study (or run, or invest in) is an instance of these five blocks + four questions + one equation.",
      },
      bonusTip: {
        easy: "Warren Buffett — one of the most famous money people in history — said: 'A business is just a place where people trade value for money.' That's the whole secret!",
        medium:
          "Warren Buffett (legendary investor) credits his investing skill to his grandfather's grocery store ledger — the same 5 blocks + 4 questions framework, just applied carefully.",
        hard:
          "Buffett's 'circle of competence' is essentially this framework applied with high resolution. Master the framework + practice on 100 businesses = you can evaluate any business.",
      },
    },

    // ─── Real-World Mission: business spotter ──────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'business-101',
        emoji: '🔍',
        title: {
          easy: 'Become a Business Spotter!',
          medium: 'Become a Business Spotter — this week',
          hard: 'Conduct a 3-business framework analysis',
        },
        pitch: {
          easy:
            "This week, find 3 REAL businesses in your life and X-ray them using the 5 blocks + 4 questions. You'll start seeing the matrix!",
          medium:
            "Spot 3 real businesses in your everyday life and write down their 5 building blocks + 4 questions. Once you do this 3 times, you'll see the framework everywhere.",
          hard:
            "Pick 3 businesses you interact with regularly (one product, one service, one platform). Decompose each using the 5-tuple framework. Compare. Note differences in moat type.",
        },
        steps: [
          {
            emoji: '👀',
            text: {
              easy: 'Pick 3 different businesses you see this week (a store, a restaurant, a YouTuber, etc.).',
              medium: 'Pick 3 businesses you encounter this week — different types if you can (a store + a service + an app).',
              hard: 'Choose 3 businesses spanning different models (product, service, platform/subscription).',
            },
          },
          {
            emoji: '🧠',
            text: {
              easy: 'For each, ask: WHO is the customer? WHAT do they get? HOW do they find it? WHY this one over others?',
              medium: 'For each business, answer the 4 questions: WHO / WHAT / HOW / WHY YOU.',
              hard: 'For each, identify the ICP, the value offering, the distribution channel, and the moat type.',
            },
          },
          {
            emoji: '✏️',
            text: {
              easy: 'Write your answers on the printable worksheet (so you can show a grown-up!).',
              medium: 'Fill out the worksheet. Be specific — vague answers reveal vague thinking.',
              hard: 'Document each in the framework template. Identify the strongest and weakest component for each business.',
            },
          },
          {
            emoji: '🔬',
            text: {
              easy: 'Compare them! Which one has the BEST edge? Which has the most customers?',
              medium: 'Compare your 3 businesses. Which has the strongest edge? Which has the largest potential market?',
              hard: 'Cross-compare: which has the most durable moat? Which has the most scalable cost structure? Which would you rather own?',
            },
          },
          {
            emoji: '🎤',
            text: {
              easy: 'Tell a grown-up about ONE of your discoveries. Use the framework!',
              medium: 'Pitch your findings to a parent. Use the framework explicitly.',
              hard: 'Walk a parent through your strongest analysis. Defend the moat characterization with examples.',
            },
          },
        ],
        reflection: [
          {
            key: 'business_1',
            prompt: { easy: 'First business you analyzed', medium: 'Business #1', hard: 'Business #1 + category' },
            type: 'text',
            placeholder: 'e.g. The corner pizza shop',
          },
          {
            key: 'business_2',
            prompt: { easy: 'Second business', medium: 'Business #2', hard: 'Business #2 + category' },
            type: 'text',
            placeholder: 'e.g. Roblox',
          },
          {
            key: 'business_3',
            prompt: { easy: 'Third business', medium: 'Business #3', hard: 'Business #3 + category' },
            type: 'text',
            placeholder: 'e.g. My piano teacher',
          },
          {
            key: 'biggest_insight',
            prompt: {
              easy: 'The COOLEST thing you noticed',
              medium: 'Most surprising finding from comparing them',
              hard: 'Strongest moat-type contrast across the three',
            },
            type: 'longtext',
            placeholder: 'A sentence or two.',
          },
        ],
        parentNote: {
          easy: 'This is a great talking-point at dinner! Ask your kid to walk you through one of their analyses.',
          medium:
            "This makes great dinner conversation. Encourage specificity — push back gently if 'who' is 'everyone' or 'why you' is 'because it's good.'",
          hard:
            "Excellent dinner conversation. Press for evidence on the moat claim — kids tend to overweight brand and underweight scale/IP/network effects.",
        },
        printables: {
          worksheets: [
            {
              title: 'Business X-Ray Worksheet',
              blocks: [
                { label: 'Business name', lines: 1 },
                {
                  label: '1. WHO is the customer?',
                  hint: 'Be SPECIFIC. Not "everyone."',
                  lines: 3,
                },
                {
                  label: '2. WHAT do they actually get?',
                  hint: 'Not the product — the feeling, outcome, or job done.',
                  lines: 3,
                },
                {
                  label: '3. HOW do customers find it?',
                  hint: 'Store? App? Word of mouth? Ads?',
                  lines: 3,
                },
                {
                  label: '4. WHY this one over the competition?',
                  hint: 'Their unfair advantage.',
                  lines: 3,
                },
                {
                  label: 'BONUS: 5 building blocks',
                  hint: 'Customer / Product / Price / Cost / Edge — write one short word for each.',
                  lines: 5,
                },
              ],
            },
            {
              title: 'Business X-Ray Worksheet (#2)',
              blocks: [
                { label: 'Business name', lines: 1 },
                { label: '1. WHO is the customer?', hint: 'Be specific.', lines: 3 },
                { label: '2. WHAT do they get?', hint: 'Outcome, not product.', lines: 3 },
                { label: '3. HOW do they find it?', lines: 3 },
                { label: '4. WHY this one?', lines: 3 },
                { label: 'BONUS: 5 building blocks', lines: 5 },
              ],
            },
            {
              title: 'Business X-Ray Worksheet (#3)',
              blocks: [
                { label: 'Business name', lines: 1 },
                { label: '1. WHO is the customer?', lines: 3 },
                { label: '2. WHAT do they get?', lines: 3 },
                { label: '3. HOW do they find it?', lines: 3 },
                { label: '4. WHY this one?', lines: 3 },
                { label: 'BONUS: 5 building blocks', lines: 5 },
              ],
            },
            {
              title: 'Compare Your 3 Businesses',
              blocks: [
                {
                  label: 'Which has the strongest CUSTOMER?',
                  hint: 'Biggest, most loyal, easiest to find.',
                  lines: 3,
                },
                {
                  label: 'Which has the strongest EDGE?',
                  hint: 'Hardest for someone else to copy.',
                  lines: 3,
                },
                {
                  label: 'Which would YOU rather own — and why?',
                  lines: 5,
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
