/**
 * Amazon: How Did It Get Here So Fast? — logistics as the product.
 *
 * Goal: take a kid from "Amazon is a website that sells stuff" → to
 * "Amazon is a LOGISTICS EMPIRE; speed is the actual product, the
 * website is the order form" → to actually tracking a real package
 * from order → warehouse → truck → door.
 *
 * Beat order:
 *   intro → decision (sell handmade soap: solo / FBA / own delivery)
 *   → think-deeper (why is speed the real product?) → concept-cards
 *   (Warehouse/Last Mile/FBA/Customer Obsession) → calc-challenge
 *   (200M Prime × $15 × 12 = $36B) → brainstorm (what would YOU do
 *   with a magic warehouse?) → connect (UPS, FedEx, Walmart catching
 *   up, DoorDash food version) → outro (Bezos 1997 shareholder letter
 *   - "long term") → mission (track a real Amazon package).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'amazon',
  themeKey: 'amazon',
  emoji: '🚚',
  title: 'Amazon: Speed Empire',
  subtitle: {
    easy: 'Your package arrived TODAY. How? The biggest delivery system on Earth.',
    medium:
      'Amazon isn\'t just a store — it\'s a logistics empire where SPEED is the actual product.',
    hard:
      'Amazon\'s real moat: the fulfillment network. Warehouses, trucks, planes, software — the infrastructure as the product.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "You clicked \"Buy\" on Amazon yesterday. The package arrived TODAY. How is that even possible? The answer isn\'t magic — it\'s the most expensive delivery network ever built. Hundreds of warehouses, thousands of trucks, even airplanes. And it all moves YOUR shoebox at top speed. That\'s the real Amazon.",
        medium:
          "Amazon spends ~$90 billion a year on shipping and fulfillment alone — more than the entire annual revenue of most Fortune 500 companies. The point isn\'t to sell stuff; the point is to deliver it faster than anyone else. Speed IS the product. Today: how it works and why competitors can\'t catch up.",
        hard:
          "Amazon\'s fulfillment network is the most concentrated logistics asset in consumer commerce history: 1,200+ facilities, ~$90B annual shipping spend, vertically-integrated last-mile (Amazon Logistics + Flex contractors). The website is the order form; the warehouse-to-door pipeline is the moat.",
      },
    },

    // ─── Decision: how to sell your soap ──────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 You Make Amazing Soap',
      scenario: {
        easy:
          "You make great homemade soap. Lots of people would buy it — IF they could find it AND get it fast. You have three ways to deliver to customers.",
        medium:
          "Your handmade soap is great. Three distribution + fulfillment options. Speed and reach trade against margin.",
        hard:
          "Greenfield consumer product: handmade soap. Three fulfillment architectures: (a) self-fulfilled e-commerce, (b) Amazon FBA, (c) own delivery network. Optimize for reach × speed × margin.",
      },
      question: {
        easy: 'How do you deliver?',
        medium: 'Pick fulfillment + distribution:',
        hard: 'Optimize fulfillment architecture:',
      },
      choices: [
        {
          label: {
            easy: 'Make the soap, pack it yourself, drive to the post office every day',
            medium: 'Self-fulfilled — pack & ship from home, list on your own site',
            hard: 'Direct fulfillment — full margin retention, manual operations',
          },
          feedback: {
            easy:
              "Lots of work. You spend HOURS packing instead of making soap. And shipping is SLOW from your house — 3-7 days. People are used to 2 days. They buy elsewhere.",
            medium:
              "Margin-preserving but operationally heavy. Shipping speed depends on USPS — 3-7 day delivery. Customers comparison-shopping on Amazon expect 1-2 days. Operational time taken from production.",
            hard:
              "Sub-optimal for solo creators. Self-fulfillment retains margin but caps growth at operator throughput. Customer-acquisition friction (no Amazon discoverability) + slow delivery destroy conversion vs. FBA alternative.",
          },
        },
        {
          label: {
            easy: 'Ship a box of soaps to Amazon — they store + ship for you (and take ~30%)',
            medium: 'Amazon FBA — Amazon warehouses + ships your soap, takes ~30% take rate',
            hard: 'Fulfillment by Amazon — leverage existing logistics + Prime eligibility, ~30% take rate',
          },
          feedback: {
            easy:
              "WINNER. You ship your soap to Amazon. They store it, pack it, deliver it in 1-2 days, handle returns. You make less per bar (30% less) but sell WAY more bars. Net win.",
            medium:
              "Optimal for most sellers. Amazon FBA: ~30% blended fee but unlocks (1) Prime eligibility + 1-2 day delivery, (2) discoverability via Amazon search, (3) returns + customer service. Volume lift exceeds margin loss for most sellers.",
            hard:
              "Aligned with empirical optimum. FBA fee ~30% (varies by category) trades against ~3-5× volume lift via Prime eligibility + search rank + trust + reverse logistics. Net contribution typically positive vs. self-fulfillment for sub-scale operators.",
          },
          isPreferred: true,
        },
        {
          label: {
            easy: 'Hire 10 drivers + build a warehouse so YOU deliver faster than Amazon',
            medium: 'Build your own logistics network from scratch',
            hard: 'Greenfield integrated fulfillment — capex-heavy build',
          },
          feedback: {
            easy:
              "You\'d need MILLIONS of dollars. Trucks, warehouses, workers. Amazon spent 30 YEARS and $90 BILLION a year building theirs. Starting from zero is impossible — for soap.",
            medium:
              "Massive overreach for product scale. Amazon\'s logistics network represents 30 years of infrastructure investment + ~$90B annual capex/opex. Building it from scratch for a soap business is a 1,000-1,000,000× capital mismatch.",
            hard:
              "Strategically misaligned with product economics. Logistics networks at Amazon\'s scale require capital and infrastructure 6+ orders of magnitude beyond a handmade product\'s P&L. Rent the network; do not build it.",
          },
        },
      ],
      realWorldReveal: {
        easy:
          "This is what BILLIONS of dollars of business runs through every day. About HALF of stuff sold on Amazon isn\'t sold BY Amazon — it\'s sold by small sellers who use FBA. Amazon takes a cut + ships fast. Small sellers reach a giant audience. Win-win.",
        medium:
          "Amazon FBA powers ~60% of Amazon\'s unit volume — small + medium sellers who rent Amazon\'s logistics rather than build their own. It\'s the largest single shift in small-business operations in the last decade. Renting infrastructure (logistics, payments, cloud) beats building it.",
        hard:
          "Amazon Marketplace 3P sellers ≈ 60% of units. FBA penetration among 3P sellers ≈ 80%+. The arbitrage — rent infrastructure at marginal cost rather than build at fixed cost — applies broadly: cloud (AWS), payments (Stripe), shipping (FBA). Modern small business is the build/rent decision applied repeatedly.",
      },
    },

    // ─── Think-deeper: speed as product ───────────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Is FAST DELIVERY the Real Product?',
      intro: {
        easy: "Most stores sell the same stuff. Amazon\'s secret isn\'t the stuff — it\'s how FAST you get it. Let\'s zoom in.",
        medium: "Amazon\'s differentiator vs. Walmart, Target, Best Buy isn\'t the products — it\'s the SPEED. Why is speed worth so much?",
        hard: 'Why has delivery speed emerged as the dominant differentiator in modern e-commerce?',
      },
      layers: [
        {
          question: {
            easy: 'When you really WANT something, how patient are you?',
            medium: 'What\'s the relationship between time-to-delivery and purchase intent?',
            hard: 'How does delivery speed affect conversion behavior?',
          },
          reveal: {
            easy:
              "Not very. You want it NOW. If you can\'t get it today, you might just go to a regular store. Or buy something different. Or give up. Every extra day is a chance for you to bail.",
            medium:
              "Conversion rate drops sharply with delivery time. \"1-2 day\" listings convert ~30-50% better than \"4-7 day\" listings. Customers update decisions in real time — every day of delay is a 5-10% probability of switching to a competitor or cancelling.",
            hard:
              "Delivery-time elasticity of conversion is steep. A 2-day → 5-day shift typically reduces conversion 20-40%. Customer impatience compounds across the funnel — search rank, basket abandonment, refund rate.",
          },
        },
        {
          question: {
            easy: 'Why is delivering in 1 day SO HARD?',
            medium: 'What makes 1-day shipping structurally difficult?',
            hard: 'What\'s the cost driver of fast delivery?',
          },
          reveal: {
            easy:
              "Because your package has to be CLOSE to you BEFORE you order it. You can\'t ship from across the country in 1 day. So Amazon built warehouses NEAR every big city — full of stuff you might want.",
            medium:
              "Speed requires geographic proximity. To deliver in 1 day, the item must already be within ~200 miles of the customer at order time. That requires distributed inventory + last-mile capacity in every major metro. Inventory + warehouse + last-mile = the cost of speed.",
            hard:
              "Fast delivery is a geographic-distribution problem. Sub-day delivery requires forward-stocked inventory within last-mile radius. Capital tied up in distributed inventory + facilities + delivery capacity = the binding constraint. Amazon\'s 1,200+ facilities reflect this.",
          },
        },
        {
          question: {
            easy: 'Why can\'t Walmart or Target catch up easily?',
            medium: 'Why can\'t competitors easily replicate Amazon\'s speed?',
            hard: 'What\'s the durable moat in fulfillment-driven retail?',
          },
          reveal: {
            easy:
              "Walmart has BIG stores — but those stores aren\'t WAREHOUSES. They\'re for shoppers. Amazon spent 25 YEARS building warehouses specifically for fast shipping. Walmart and Target are now playing catch-up.",
            medium:
              "Walmart has retail stores, not optimized fulfillment centers. Stores serve shoppers; warehouses serve packages. The infrastructures diverge. Walmart has invested $20B+ in fulfillment build-out since 2018 — and is still behind Amazon\'s lead.",
            hard:
              "Walmart\'s ~4,700 stores serve a different topology than Amazon\'s ~1,200 fulfillment centers. Store-based fulfillment achieves ~70-80% of Amazon\'s speed at structurally higher cost. The infrastructure gap is closing but at multi-year cadence and tens of $B capex.",
          },
        },
        {
          question: {
            easy: 'So what\'s the BIGGEST thing Amazon really sells?',
            medium: 'What\'s Amazon\'s actual product?',
            hard: 'What\'s the core value proposition?',
          },
          reveal: {
            easy:
              "PEACE OF MIND. \"I clicked. It\'ll be here tomorrow.\" That\'s the whole product. The soap, the book, the toy — those are just things they happen to put in the box.",
            medium:
              "Reliability + speed. The promise: order it, it arrives fast, no surprises. The product catalog is interchangeable; the delivery experience is the moat. Same physical objects, very different perceived value.",
            hard:
              "Amazon\'s actual product is the delivery contract: reliability + speed + trust. The catalog is commoditized; the fulfillment experience is differentiated. Customer LTV scales with delivery reliability more than with product selection.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Words of Logistics',
      subheading: 'These run every delivery service on Earth — Amazon, FedEx, DoorDash, Uber Eats.',
      cards: [
        {
          emoji: '🏭',
          title: 'Warehouse',
          desc: {
            easy: 'A WAREHOUSE is a HUGE building full of stuff waiting to be shipped. Amazon has 1,200+ of them, all over the world.',
            medium:
              'Warehouses (Amazon calls them "fulfillment centers") hold inventory close to customers. Bigger warehouses = more SKUs available; more warehouses = closer to more people. Both matter.',
            hard:
              'Distributed inventory at scale is the fulfillment moat. Amazon\'s 1,200+ centers + sortation centers + delivery stations form a hub-and-spoke topology optimized for last-mile speed.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🚚',
          title: 'Last Mile',
          desc: {
            easy: 'LAST MILE = the very last step from warehouse to YOUR door. It\'s the MOST EXPENSIVE part of shipping — short distance, but lots of stops.',
            medium:
              'Last-mile delivery — warehouse to doorstep — is the costliest leg of logistics. Each delivery is a separate stop; route density determines cost per package. Amazon\'s delivery network is increasingly its own (Amazon Logistics, Flex drivers).',
            hard:
              'Last-mile cost dominates total fulfillment cost. Route density (packages per stop, stops per route) drives unit economics. Amazon vertically integrated last-mile precisely because UPS/FedEx priced their margins into Amazon\'s P&L.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '📦',
          title: 'FBA',
          desc: {
            easy: 'FBA = Fulfillment By Amazon. You ship your stuff to Amazon, they store it, pack it, send it to customers fast. They take ~30% — but you get 1-2 day shipping AND access to 200M Prime members.',
            medium:
              'FBA = third-party seller rents Amazon\'s logistics. ~30% blended fee gets Prime eligibility, search-rank lift, returns handling, and customer trust. Used by ~80%+ of Amazon\'s 3P sellers.',
            hard:
              'FBA = SaaS-ified logistics. Amazon converts its fulfillment network into a rentable service for 3P sellers. Higher revenue mix to Amazon than 1P retail; aligns Amazon\'s logistics scale with marketplace growth.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '💎',
          title: 'Customer Obsession',
          desc: {
            easy: 'CUSTOMER OBSESSION = treating every customer like they\'re the most important. Amazon\'s motto. They\'d rather LOSE money on a return than make you mad.',
            medium:
              'Amazon\'s defining cultural principle: optimize for customer experience even at the cost of short-term profit. The famous "empty chair" in meetings represents the customer. Returns, refunds, and free shipping are deliberate cost-of-loyalty.',
            hard:
              'Customer-obsession as cultural principle (Bezos 1997 letter) underwrites long-horizon investment over short-horizon profit. The empirical result: customer retention high enough to sustain trillion-dollar valuation through repeated product extension.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: Prime fee revenue ────────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: Prime\'s Fee Engine',
      setup: {
        easy: 'Amazon Prime has about 200 MILLION members. Each pays $15 a month. How much does Amazon collect from Prime fees in ONE YEAR?',
        medium:
          "Amazon Prime: 200M members × $15/month × 12 months. Compute annual Prime fee revenue.",
        hard:
          "Prime subscription revenue: 200M members × $15 blended monthly ARPU × 12 months. Compute annual recurring revenue.",
      },
      problem: {
        givens: [
          { label: 'Prime members', value: 200000000 },
          { label: 'monthly fee', value: 15, suffix: '$' },
          { label: 'months', value: 12 },
        ],
        answerLabel: 'Annual Prime revenue',
        answer: 36000000000,
        suffix: '$',
        tolerance: 100000,
      },
      walkthrough: {
        easy:
          "Step 1: 200,000,000 × $15 = $3 BILLION a month. Step 2: $3 billion × 12 months = $36 BILLION a year.\n\nThat\'s just from the Prime membership fees. Bigger than the entire annual revenue of Netflix. And that\'s before anyone BUYS anything on Amazon.",
        medium:
          "Monthly Prime fees = 200M × $15 = $3B/month. Annual = $3B × 12 = $36B/year.\n\nFor scale: $36B is larger than the entire annual revenue of Netflix ($33B), Spotify ($13B), or McDonald\'s ($25B). It\'s also roughly 8% of Amazon\'s total revenue — pure recurring, pure high-margin. Prime is the single most valuable consumer-subscription product ever launched.",
        hard:
          "Prime ARR = 200M × $180/yr = $36B. Gross-margin ~70-80% on the fee itself; the program\'s strategic value (lift in non-Prime member spend) dwarfs the fee revenue. Total Prime impact on Amazon revenue is multiples of the $36B headline.\n\nCorroborated: Prime members spend ~2.4× non-Prime; total Amazon retail revenue ~$430B; Prime is the central mechanism for customer retention + frequency. The fee covers the fulfillment cost; the spend lift covers everything else.",
      },
    },

    // ─── Brainstorm: your magic warehouse ─────────────────────────────
    {
      kind: 'brainstorm',
      heading: '🚚 Your 2-Hour Magic Warehouse',
      prompt: {
        easy:
          'Imagine you have a MAGIC warehouse that can deliver ANYTHING in 2 hours. What would YOU sell? List 3 ideas + WHO would buy them + WHY 2-hour delivery matters.',
        medium:
          'Brainstorm 3 services that get dramatically MORE valuable with 2-hour delivery. For each: product, customer, and why speed unlocks new demand.',
        hard:
          'Identify 3 categories where sub-2-hour delivery would unlock new demand. For each: product, customer segment, and the time-elasticity argument.',
      },
      minItems: 3,
      placeholder: 'e.g. Last-minute birthday gifts — parents who forgot something...',
      hints: [
        {
          easy: 'LAST-MINUTE STUFF. The forgotten birthday present. The broken school project. People will PAY EXTRA for "now."',
          medium: 'Forgotten / broken / emergency items — the highest-WTP delivery category. Same product, much higher price tolerance when time-constrained.',
          hard: 'Emergency-purchase category: forgotten/broken/replacement items. Time-elasticity of WTP is steep — minutes matter more than dollars.',
        },
        {
          easy: 'PARTY STUFF. Balloons, snacks, ice. You decided to throw a party in 4 hours and need stuff NOW.',
          medium: 'Spontaneous-event categories: party supplies, food and ice, decorations. The event itself creates the urgency.',
          hard: 'Event-driven categories: products purchased only because an event was decided last-minute. Demand is created by speed itself.',
        },
        {
          easy: 'CRAFT STUFF for school projects due TOMORROW. Markers, posters, glitter.',
          medium: 'School-project supplies: markers, posters, glue, printed photos. Always last-minute, always urgent, always parents paying.',
          hard: 'School-deadline-driven categories: high-recurrence, low-AOV, but parental WTP for speed is high.',
        },
        {
          easy: 'PET STUFF. Out of dog food RIGHT NOW. Cat threw up on the rug — need cleaner. 2-hour fix.',
          medium: 'Pet-care emergencies: ran out of food, accident cleanup, medical needs. Lowest tolerance for delay among consumer categories.',
          hard: 'Pet-need category: highest urgency, lowest tolerance for delay, strong WTP. DoorDash + Instacart have validated the model.',
        },
        {
          easy: 'MEDICINE — when you\'re sick at 11pm and need something for a fever.',
          medium: 'OTC medications + first-aid. Late-night demand peaks; competition is minimal; WTP for speed is extreme.',
          hard: 'OTC + first-aid category: high WTP, time-of-day peak demand, low competition vs. CVS/Walgreens hours. Strong case for sub-2-hour.',
        },
        {
          easy: 'WORK / SCHOOL EMERGENCY. Need a printer cable, a USB drive, batteries for the test. Right now.',
          medium: 'Workplace/school emergencies: cables, batteries, ink. Low-AOV but extreme urgency. B2B buyer profile.',
          hard: 'Office/work-emergency: B2B + parental segments, low-AOV high-urgency. Often underserved by traditional retail hours.',
        },
      ],
      closer: {
        easy: 'Pick the BEST idea. That\'s where speed = magic. Same product, way more value.',
        medium:
          "The strongest categories share the same trait: speed unlocks demand that wasn\'t available before. Same product, new market.",
        hard:
          'Speed-driven categories share time-elasticity > price-elasticity. Identify these and the value proposition writes itself.',
      },
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 The Delivery Wars',
      concept: {
        easy:
          'Amazon isn\'t the only company in the delivery game. Lots of others run the same trick — different products, same race for speed.',
        medium:
          'The "speed is the product" thesis has spread across consumer categories — food, groceries, retail, B2B. Same logistics game, different goods.',
        hard:
          'Logistics-as-product has become the dominant differentiator across e-commerce. Multiple vertical-specific operators run the Amazon playbook for their domain.',
      },
      examples: [
        {
          emoji: '🍕',
          who: 'DoorDash',
          story: {
            easy: 'DoorDash is "Amazon, but for food." They built a HUGE network of drivers + an app to order. Same magic. 30-minute pizza, not 1-day boxes.',
            medium:
              "DoorDash: ~30% U.S. food-delivery market share, ~$2B revenue. Same play as Amazon: aggregate demand, control last-mile delivery, charge restaurants ~15-30% + customer delivery fees. Speed-anchored, not product-anchored.",
            hard:
              "DoorDash FY2023 revenue ~$8.6B, ~37% U.S. food-delivery share. Take rate ~15-30% from restaurants + $3-7 customer fees + DashPass subscriptions. Same architecture as Amazon FBA — own the delivery layer, broker the supply.",
          },
        },
        {
          emoji: '🛒',
          who: 'Instacart',
          story: {
            easy: 'Instacart is "Amazon, but for groceries." Shoppers go to your local grocery store, pick up your stuff, and bring it to your door in 1-2 hours.',
            medium:
              "Instacart: shop-from-existing-stores model. ~$2.5B revenue, partnered with major grocers. The infrastructure is RENTED (the stores) but the speed layer is OWNED (shoppers + routing). Asset-light variant of the Amazon model.",
            hard:
              "Instacart\'s asset-light fulfillment: rented inventory (partner stores) + owned routing + last-mile (shoppers). Demonstrates the speed layer can be standalone — doesn\'t require owned inventory like Amazon.",
          },
        },
        {
          emoji: '🛍️',
          who: 'Walmart Catching Up',
          story: {
            easy: 'Walmart noticed Amazon. They started using their 4,700 stores as MINI-WAREHOUSES — your stuff gets picked from a real Walmart and delivered. They\'re now Amazon\'s biggest threat.',
            medium:
              "Walmart\'s store-based fulfillment: ~4,700 U.S. stores doubling as last-mile hubs. ~$50B+ U.S. e-commerce revenue and growing 20%/year. Closing the speed gap with Amazon via existing real estate, not greenfield warehouses.",
            hard:
              "Walmart e-commerce FY2023 ~$70B+ globally, growing ~20% YoY. Store-based fulfillment offers ~70-80% of Amazon\'s speed at lower marginal cost (asset is already there). Closing the gap structurally, though slowly.",
          },
        },
      ],
      kicker: {
        easy: 'Pizza. Groceries. Stuff. Pet food. The race is on. The winner is the company that delivers FASTEST.',
        medium:
          "Every consumer category is being reshaped by the speed-is-the-product thesis. The race is logistics, not catalog.",
        hard:
          'Logistics-driven differentiation has become the dominant pattern in modern e-commerce. The catalog is commoditized; the speed wins.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You now know the secret of Amazon: SPEED is the product. The website is just the order form. The real magic is the warehouses, the trucks, the people who get YOUR stuff to YOUR door in 1 day.",
        medium:
          "You\'ve cracked Amazon\'s real model: logistics-as-the-product. The catalog is commoditized; the fulfillment is the moat. Same thinking applies across e-commerce now.",
        hard:
          "You now understand fulfillment-driven differentiation: distributed inventory, last-mile cost dynamics, FBA-as-platform. Applies broadly to e-commerce, food delivery, and same-day retail.",
      },
      bonusTip: {
        easy:
          "In 1997, Jeff Bezos wrote a letter to his shareholders that said: \"It\'s all about the long term.\" The company barely existed. 30 years later, that one line turned out to be the most important thing he ever wrote.",
        medium:
          "Bezos\'s 1997 shareholder letter — written when Amazon was tiny — set the tone: invest now, profit later, customer obsession over short-term margins. Re-read every year for 25 years. The discipline produced the largest customer-obsessed enterprise in history.",
        hard:
          "Bezos\'s 1997 letter codified Amazon\'s long-horizon operating philosophy: customer obsession, willingness to be misunderstood, long-cycle investment over short-cycle profit. Letter has been re-cited annually for 25+ years; the discipline is widely credited with Amazon\'s ability to sustain logistics investment vs. shorter-cycle competitors.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'amazon',
        emoji: '🚚',
        title: {
          easy: 'Track ONE Amazon package\'s journey!',
          medium: 'Audit a real Amazon package from order to door',
          hard: 'Conduct an end-to-end fulfillment audit on one shipment',
        },
        pitch: {
          easy:
            "Next time your family orders something on Amazon, TRACK it. Note every status update. Draw the route from warehouse to door. See the magic happen step by step.",
          medium:
            "Pick one real Amazon order. Track each status update from \"Ordered\" → \"Shipped\" → \"Out for delivery\" → \"Delivered.\" Note every timestamp. Draw the route. Compute total delivery time.",
          hard:
            "Track one shipment end-to-end. Log timestamp at each status transition. Sketch geographic routing (warehouse city → final mile). Compute total elapsed time + identify dominant time-consuming legs.",
        },
        steps: [
          {
            emoji: '🛒',
            text: {
              easy: 'Wait for the next time your family orders ANYTHING on Amazon. Write down the date + time.',
              medium: 'Pick one upcoming Amazon order. Note the exact order timestamp.',
              hard: 'Identify a single shipment to track. Note order time, promised delivery window.',
            },
          },
          {
            emoji: '📱',
            text: {
              easy: 'Open the Amazon app and find the order. Track it every day.',
              medium: 'Check the order tracking page every day. Note each status change (Ordered → Shipped → Out for delivery → Delivered).',
              hard: 'Daily check tracking page. Log each state transition with timestamp + location data when visible.',
            },
          },
          {
            emoji: '✍️',
            text: {
              easy: 'Write down each status change + when it happened.',
              medium: 'Maintain a status log: time of each status, location if shown, estimated remaining time.',
              hard: 'Maintain status log: timestamp, geographic location, status name. Annotate any anomalies (delays, re-routes).',
            },
          },
          {
            emoji: '🗺️',
            text: {
              easy: 'Draw a MAP of where the package went — from the warehouse to YOUR house.',
              medium: 'Sketch the route — warehouse city → delivery station → your door. Mark each on a map.',
              hard: 'Sketch routing topology: origin → transit nodes → last-mile delivery station → destination. Note legs.',
            },
          },
          {
            emoji: '⏱️',
            text: {
              easy: 'When the package arrives, calculate total time from order to door.',
              medium: 'On arrival, compute total elapsed delivery time. Compare to Amazon\'s promised window.',
              hard: 'Post-arrival reconciliation: total elapsed time, comparison to promised window, identification of bottleneck legs.',
            },
          },
        ],
        reflection: [
          {
            key: 'item',
            prompt: {
              easy: 'What did your family order?',
              medium: 'Order item + price',
              hard: 'SKU + price + category',
            },
            type: 'text',
            placeholder: 'A 3-pack of socks for $12',
          },
          {
            key: 'time',
            prompt: {
              easy: 'How fast did it arrive (in hours or days)?',
              medium: 'Total elapsed time from order to delivery',
              hard: 'Order-to-delivery elapsed time',
            },
            type: 'text',
            placeholder: '36 hours',
          },
          {
            key: 'journey',
            prompt: {
              easy: 'Where did the package travel?',
              medium: 'Cities + stops the package went through',
              hard: 'Routing topology — origin + transit nodes + last-mile station',
            },
            type: 'text',
            placeholder: 'Warehouse in Indianapolis → truck → delivery station in our town → my door',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What surprised you about how it got here?',
              medium: 'Biggest insight from tracking',
              hard: 'Largest insight delta from observed fulfillment vs. prior mental model',
            },
            type: 'longtext',
            placeholder: 'I didn\'t realize…',
          },
        ],
        parentNote: {
          easy: "Pick a normal order — no need to order anything extra. Just track an order you were already placing. The tracking page in the Amazon app shows everything.",
          medium:
            "Use a regularly-occurring order. Tracking is fully visible in the Amazon app order page. Encourage the kid to check the status at a regular interval (morning, after school, evening) for full granularity.",
          hard:
            "Use existing scheduled orders. Tracking visible via app + order history. Geographic detail varies by route — large urban deliveries often expose more nodes than small suburban routes.",
        },
        printables: {
          trackers: [
            {
              title: 'Package Journey Log',
              note: 'One row per status update. Add a row each time the package moves.',
              columns: ['Date & Time', 'Status', 'Location (if shown)', 'How I Felt'],
              rows: 8,
            },
          ],
          worksheets: [
            {
              title: 'My Package\'s Story',
              blocks: [
                {
                  label: '📦 What was in the box',
                  hint: 'What did your family order?',
                  lines: 2,
                },
                {
                  label: '🕐 Order placed',
                  hint: 'Date + time you clicked "Buy."',
                  lines: 1,
                },
                {
                  label: '🚚 Estimated arrival',
                  hint: 'What Amazon promised.',
                  lines: 1,
                },
                {
                  label: '✅ Actually arrived',
                  hint: 'Date + time the box hit your door.',
                  lines: 1,
                },
                {
                  label: '⏱️ Total travel time',
                  equation: '_______ hours  or  _______ days',
                },
                {
                  label: '🗺️ Draw the route from warehouse to your door',
                  hint: 'Use arrows. Mark each city. Mark each delivery station.',
                  lines: 8,
                },
                {
                  label: '🤔 What was the LONGEST step?',
                  hint: 'Was it the warehouse-to-truck? The truck-to-station? The station-to-door?',
                  lines: 3,
                },
                {
                  label: '💭 What surprised you?',
                  lines: 4,
                },
              ],
            },
          ],
          checklists: [
            {
              title: 'Package Tracker Checklist',
              items: [
                'A grown-up to confirm I can check their Amazon account',
                'Phone or computer to check the tracking page',
                'Printed journey log + pen',
                'A timer or clock for noting when status changes happen',
                'A plan to check the status 2-3× per day until delivery',
                'A printed map (paper or online) to draw the route on',
                'A clear desk to track the journey notes',
                'Excitement! Tracking is the fun part.',
              ],
              note: 'Tip: check the status JUST after your family orders, then before bed, then in the morning. Mornings often show the biggest jumps because trucks travel overnight.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
