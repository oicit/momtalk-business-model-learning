/**
 * Farm Stand — production, seasonality, and the time-into-money trick.
 *
 * Goal: take a kid from "food comes from the store" → to "food is the
 * output of TIME + SUN + WATER applied to tiny seeds — and that
 * conversion can be done in a window box for real money" → to
 * actually growing microgreens or sprouts on a windowsill and selling
 * the harvest to family for cooking.
 *
 * Reuses existing 'supply' theme (no new theme).
 *
 * Beat order:
 *   intro → decision ($10: candy / seeds / flip-resell) → think-deeper
 *   (why does growing WORK — free labor of sun, time as input,
 *   seasonality as risk) → concept-cards (Seed/Season/Harvest/Yield)
 *   → calc-challenge ($3 seeds → 50 plants × $2 = $97 profit) →
 *   brainstorm (3 windowsill grows) → connect (1 cow milk economics,
 *   vertical farming startups, organic premium) → outro (1 tomato
 *   plant → 10-30 lbs from a 50¢ seed) → mission (real 1-3 week
 *   windowsill grow + family sale).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'farm-stand',
  themeKey: 'supply',
  emoji: '🌱',
  title: 'Farm Stand',
  subtitle: {
    easy: 'Turn a tiny seed + 2 weeks of sunlight into a fresh harvest you can SELL.',
    medium:
      'Production economics in a window box: how to convert seeds + time into real cash.',
    hard:
      'Agricultural unit economics at micro scale — seasonality, yield curves, and time-as-input.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Did you know a SEED is basically a tiny machine that EATS sunlight and turns it into FOOD? You drop a $0.50 seed in dirt. 2 weeks later you have a $5 plant. The sun did all the work for FREE. Today: how growing things makes money — and how to start with a windowsill.",
        medium:
          "A packet of seeds costs ~$3. Plant them, water them, wait 2-3 weeks, harvest. The plants are worth ~$50 at a farmer\'s market. The math: $3 in, $50 out, ~$47 of value created by SUN and TIME. Farming is one of the oldest business models on Earth — and one of the easiest to start small.",
        hard:
          "Agriculture converts solar energy + water + soil nutrients into salable biomass at zero marginal energy cost. Per-cycle ROI on seeds typically 10-20×; the binding constraint is time (cycle length) and risk (weather, pests). Today: micro-scale farming with a $10 budget and a windowsill.",
      },
    },

    // ─── Decision: what to do with $10 ────────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 You Have $10',
      scenario: {
        easy:
          "You have $10 and you want to TURN IT INTO MORE money. You have three options.",
        medium:
          "Capital decision: $10 budget. Three deployment options with different time/return profiles. Pick the one that creates the most value.",
        hard:
          "Capital allocation: $10 budget. Three options — immediate consumption, production input, arbitrage/flip. Optimize for return per invested dollar.",
      },
      question: {
        easy: 'What do you do?',
        medium: 'Where do you deploy the $10?',
        hard: 'Pick the highest-EV allocation:',
      },
      choices: [
        {
          label: {
            easy: 'Buy $10 of candy and snacks RIGHT NOW',
            medium: 'Immediate consumption — $10 of treats',
            hard: 'Consumption — convert capital to utility immediately',
          },
          feedback: {
            easy:
              "Fun for 10 minutes. Then it\'s GONE. The $10 disappeared into your stomach. You have $0 left + a sugar headache.",
            medium:
              "Linear consumption. $10 → $0 + transient utility. No carryover, no multiplier. Standard time-discounting trap.",
            hard:
              "Pure consumption: realized utility now, zero terminal value. Net wealth Δ = −$10 plus a small short-duration hedonic gain. Capital efficiency: zero.",
          },
        },
        {
          label: {
            easy: 'Buy $10 of stuff (snacks, drinks) and try to sell each piece for more',
            medium: 'Flip-resell — buy at retail, mark up, sell to siblings/friends',
            hard: 'Retail arbitrage — buy at price A, sell at price B, capture the spread',
          },
          feedback: {
            easy:
              "Hmm. Maybe you double your money to $20 — IF people buy. But also you might end up with snacks YOU have to eat because nobody wanted them. Risky.",
            medium:
              "Modest upside, real downside. Retail arbitrage on commodity items captures ~10-30% per cycle but requires reliable buyers + correct pricing. Risk-adjusted return modest vs. the alternatives.",
            hard:
              "Limited margin opportunity in commodity goods. Buy-side cost is the retail price; sell-side price ceiling is what kids will pay above retail. Narrow spread + execution risk → mediocre risk-adjusted return.",
          },
        },
        {
          label: {
            easy: 'Buy $10 of SEEDS + a pot. Grow plants for 2 weeks. Then SELL them.',
            medium: 'Buy seeds + pot — grow microgreens/herbs for 2-3 weeks, sell harvest',
            hard: 'Production capital — convert capital to inputs, generate output via time + sunlight',
          },
          feedback: {
            easy:
              "WINNER. $10 of seeds = HUNDREDS of plants. 2 weeks later you have $50-$100 worth of fresh herbs or microgreens. That\'s 5-10× your money — and the SUN did most of the work for FREE.",
            medium:
              "Optimal. $10 in seeds typically produces $50-$200 in resale value over 2-3 weeks. Marginal energy cost (sun + water) is essentially zero. Per-cycle return ~5-20× — among the highest accessible returns at this scale.",
            hard:
              "Aligned with agricultural unit economics. Seed costs are <5% of final crop value at small scales. Marginal energy cost ≈ 0 (solar). Per-cycle return ~10-20×; the binding constraint is cycle length + spoilage risk.",
          },
          isPreferred: true,
        },
      ],
      realWorldReveal: {
        easy:
          "Real farmers do exactly this — but with MILLIONS of seeds. A big farm plants $100K of seeds and harvests $2 MILLION of food. Same trick. Bigger field. You can do the tiny version on your windowsill THIS WEEKEND.",
        medium:
          "Commercial agriculture: typical row-crop ROI is 5-20× on seed cost (corn ~$200/acre seed → $1,500/acre yield). At small scale, the math is even more favorable because labor + capital costs are absorbed by you. The lesson scales perfectly.",
        hard:
          "Commercial-scale agriculture maintains the seed-to-output economics: seed inputs are <5% of total revenue. Variable cost (water, fertilizer, equipment, labor) compresses the margin to ~10-25% net, but small-scale operations capture far more of the gross.",
      },
    },

    // ─── Think-deeper: why does growing work? ─────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Does GROWING Make Money?',
      intro: {
        easy: "Most things you buy COST money to make. But plants… plants make THEMSELVES bigger. How does that work?",
        medium: "Most products require labor + materials + energy. Plants need almost none of those. Why is agriculture economically special?",
        hard: 'Why does agricultural production exhibit such favorable input-output economics?',
      },
      layers: [
        {
          question: {
            easy: 'What does a SEED need to grow into a big plant?',
            medium: 'What are the actual inputs to growing a crop?',
            hard: 'What\'s the agricultural input-cost stack?',
          },
          reveal: {
            easy:
              "Sun. Water. Dirt. A little time. THAT\'S IT. You don\'t pay the sun. You don\'t pay the dirt. You barely pay for the water. So almost everything you grow is FREE value.",
            medium:
              "Sunlight (free), water (cheap/free), soil (one-time cost), seeds (small one-time cost), time (the binding constraint). Labor is the only meaningful variable cost — and at home you supply it. Plants effectively produce themselves.",
            hard:
              "Input stack: sunlight (zero marginal cost), water (low cost), soil + nutrients (one-time setup cost), seed (1-5% of output value), labor (variable, supplied by you), time (the binding constraint). The energy multiplier comes from photosynthesis converting solar input to biomass.",
          },
        },
        {
          question: {
            easy: 'Why doesn\'t EVERYONE just grow stuff to make money?',
            medium: 'If farming is so favorable, why doesn\'t everyone do it?',
            hard: 'What constrains agricultural participation?',
          },
          reveal: {
            easy:
              "TIME. You have to WAIT. 2 weeks for tiny stuff like microgreens. 3 MONTHS for tomatoes. Most people want money TODAY, not in 3 months. Patience is the rare ingredient.",
            medium:
              "Time + cycle risk + scale challenges. Farming requires patience (cycle length), weather tolerance (you can\'t control sun + rain), and economies of scale to make a living wage. Many can\'t wait or absorb the variance.",
            hard:
              "Cycle length + weather risk + scale economies. The time-discount cost (waiting 90 days vs. cash now) is the dominant entry barrier; weather variance adds variance to returns. Commercial scale requires meaningful capital + land + skill.",
          },
        },
        {
          question: {
            easy: 'What\'s the SECRET of growing FAST stuff?',
            medium: 'Why do microgreens and sprouts make sense for kid-scale?',
            hard: 'Why are fast-cycle crops the optimal entry point?',
          },
          reveal: {
            easy:
              "MICROGREENS and sprouts grow in just 1-3 WEEKS. Not months. So you only wait a tiny bit before you have a harvest. And restaurants PAY a LOT for fresh microgreens — $20-$30 a pound!",
            medium:
              "Short-cycle crops (microgreens 7-14 days, sprouts 4-7 days) compress the time-discount problem. They\'re also low-space, low-water, high-margin — microgreens can sell for $25-$40/lb at retail. Best entry point for first-time growers.",
            hard:
              "Microgreens + sprouts have 7-14 day cycles, indoor-friendly footprint, and command premium pricing ($20-50/lb retail). Ideal for proving the model at home before committing to longer cycles.",
          },
        },
        {
          question: {
            easy: 'What\'s the RISK of growing things?',
            medium: 'What can go wrong in agriculture?',
            hard: 'What\'s the variance profile of agricultural returns?',
          },
          reveal: {
            easy:
              "Stuff DIES. Too much water. Not enough sun. A bug. A bad winter. Sometimes your whole crop fails. Farmers gamble against the weather every season.",
            medium:
              "Crop failure (over/under-water, pests, disease, weather), price volatility (commodity markets), and pre-harvest spoilage. Variance is the central risk that distinguishes farming from steady-margin businesses.",
            hard:
              "Variance sources: weather, pests, disease, market price volatility, pre-harvest losses, post-harvest spoilage. Mean returns are favorable but variance is high. Crop insurance + diversification across crops are standard risk-management tools at scale.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Words of Farming',
      subheading: 'Master these and you understand every farm, garden, and grocery shelf.',
      cards: [
        {
          emoji: '🌱',
          title: 'Seed',
          desc: {
            easy: 'A SEED is a tiny package with everything a plant needs to start growing. Add sun + water + dirt and it BECOMES a plant — for FREE.',
            medium:
              'A seed is the genetic + structural input to a crop. Cost is tiny ($0.05-$0.50 each typical retail), value-creation potential is enormous (one seed → pounds of yield).',
            hard:
              'Seeds = capital input. Cost typically 1-5% of final crop value. Hybrid + GMO seeds command premium pricing for yield advantages but operate on the same fundamental ratio.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '☀️',
          title: 'Season',
          desc: {
            easy: 'SEASON = the right TIME for a plant to grow. Tomatoes love SUMMER. Lettuce loves SPRING. If you plant at the wrong time, your plant dies. Timing matters.',
            medium:
              'Season = the climatic window when a crop can grow. Each crop has its preferred temperature, light, and moisture range. Mismatch = failure. Greenhouses + indoor lighting can extend seasons artificially.',
            hard:
              'Crop calendars define plantable windows by region. Modern agriculture mitigates seasonality via greenhouses, hydroponics, vertical farming, and global supply chains.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '🌾',
          title: 'Harvest',
          desc: {
            easy: 'HARVEST = when you PICK your crop. Most plants only let you harvest ONCE. Some, like tomatoes and basil, let you keep picking for WEEKS. More picks = more money.',
            medium:
              'Harvest = the realization phase. Single-cut crops (lettuce) vs. continuous-harvest crops (basil, tomatoes). Continuous-harvest crops compound revenue per plant.',
            hard:
              'Single-harvest (corn, wheat) vs. multi-harvest (tomato, basil, perennials). Multi-harvest crops generate more revenue per plant + reduce cycle risk by spreading realization across time.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '📈',
          title: 'Yield',
          desc: {
            easy: 'YIELD = how MUCH you grew. ONE tomato plant can make 30 POUNDS of tomatoes. ONE basil plant can make hundreds of leaves. Higher yield = more money from same work.',
            medium:
              'Yield = output per unit input (per plant, per square foot, per acre). Yield × price = revenue. Doubling yield doubles revenue at constant cost — the dominant farmer optimization.',
            hard:
              'Yield is the productivity metric — output per unit of land or input. Yield improvements (better seeds, fertilizers, irrigation) drove the Green Revolution. Modern agriculture targets yield ceiling continuously.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: microgreens math ─────────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: Your First Harvest',
      setup: {
        easy: 'You buy a $3 packet of basil seeds. 2 weeks later you have 50 little basil plants. You sell each one for $2. How much PROFIT do you make?',
        medium:
          "Microgreens scenario: $3 seed cost, 50 plants produced, $2/plant retail. Compute net profit.",
        hard:
          "Production economics: seed input $3, output 50 units × $2 ASP. Compute gross profit (ignoring variable labor + water).",
      },
      problem: {
        givens: [
          { label: 'plants grown', value: 50 },
          { label: 'price per plant', value: 2, suffix: '$' },
          { label: 'seed cost', value: 3, suffix: '$' },
        ],
        answerLabel: 'Profit',
        answer: 97,
        suffix: '$',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          "Step 1: 50 plants × $2 = $100 revenue. Step 2: $100 − $3 (seeds) = $97 profit.\n\nThat\'s $97 from $3 of seeds. About 30× your money in 2 weeks. No big farm needed. Just sun and a windowsill.",
        medium:
          "Revenue = 50 × $2 = $100. Cost = $3 seeds. Net = $97 (97% margin, 32× ROI on seed cost) — over a 2-3 week cycle.\n\nReal commercial microgreens businesses operate at similar unit economics: $30-50/lb retail, seed cost <5% of revenue, primary variable cost is space + light (your windowsill is free). Hyper-local microgreens businesses commonly generate $1,000-3,000/month from a single-room setup.",
        hard:
          "Gross profit = $100 − $3 = $97. Gross margin 97%, ROI on seed capital 32× per cycle, cycle length ~14-21 days. Annualized cycle-rate ~17-25 cycles/year → blended annual ROI ~500-800× on seed capital (ignoring labor + space costs).\n\nReal microgreens operators (1-room operations): typical revenue $1,500-$3,500/mo, gross margin >80%, net margin 40-60% after labor + light + packaging. Among the highest-margin food-production businesses accessible at small scale.",
      },
    },

    // ─── Brainstorm: 3 windowsill grows ───────────────────────────────
    {
      kind: 'brainstorm',
      heading: '🌿 What Could YOU Grow?',
      prompt: {
        easy:
          'List 3 things you could grow on a WINDOWSILL in 1-3 weeks. Microgreens? Herbs? Sprouts? Cherry tomatoes?',
        medium:
          'Choose 3 fast-cycle crops feasible on a windowsill. For each: cycle length, expected harvest, target buyer.',
        hard:
          'Identify 3 windowsill-feasible crops. For each: cycle length, expected yield per unit area, target buyer + estimated sell price.',
      },
      minItems: 3,
      placeholder: 'e.g. Basil microgreens — 14 days — sell to dad for his pasta...',
      hints: [
        {
          easy: 'MICROGREENS — like baby lettuce. Grow in 7-14 days. Sell to a parent for salads.',
          medium: 'Microgreens (broccoli, radish, kale, sunflower) — 7-14 day cycle, $30-50/lb retail. Best margin per square foot of growing space.',
          hard: 'Microgreens: 7-14 day cycle, $25-50/lb wholesale, $40-100/lb retail. Highest revenue per square foot of any home-growable crop.',
        },
        {
          easy: 'SPROUTS — like mung beans or alfalfa. Grow in just 4-7 days in a JAR.',
          medium: 'Sprouts (alfalfa, mung bean, broccoli sprouts) — 4-7 day cycle, jar-grown, zero space. Fast and easy first project.',
          hard: 'Sprouts: 4-7 day cycle, minimal capital (mason jar + sprouting lid), $10-30/lb retail. Lowest barrier to entry.',
        },
        {
          easy: 'HERBS — basil, parsley, cilantro, mint. Grow for WEEKS. Sell handfuls for $1-$2 each.',
          medium: 'Fresh herbs (basil, parsley, cilantro, mint) — multi-week growing, continuous harvest. $2-5 per bunch at farmers markets.',
          hard: 'Culinary herbs: 3-8 week initial cycle, continuous harvest thereafter. Premium pricing for fresh-cut + local. $3-8 per bunch retail typical.',
        },
        {
          easy: 'GREEN ONIONS / SCALLIONS — grow from the bottoms you cut off! FREE seeds.',
          medium: 'Scallion regrowth: reuse cut-off white bottoms — zero seed cost, ~2 week regrowth cycle. Essentially infinite renewables.',
          hard: 'Scallion regrowth: zero-cost input (food waste), 10-14 day regrowth cycle. Effective infinite ROI on seed cost.',
        },
        {
          easy: 'CHERRY TOMATOES — take longer (~2 months) but ONE plant makes HUNDREDS of tomatoes.',
          medium: 'Cherry tomato: 60-90 day cycle but 200+ tomatoes per plant, continuous harvest. High total yield from single plant.',
          hard: 'Indeterminate cherry tomato: 60-90 day initial cycle, continuous harvest 60-90 days post. Total yield 200-500 fruits per plant. High plant-LTV.',
        },
        {
          easy: 'EDIBLE FLOWERS — fancy restaurants pay BIG MONEY for tiny edible flowers like nasturtium or pansies.',
          medium: 'Edible flowers (nasturtium, pansy, calendula) — niche but high-margin. Sold to restaurants for plating at $5-10/oz.',
          hard: 'Edible flowers: niche premium market, $50-100+/lb wholesale to restaurants. Low volume but very high price-per-gram.',
        },
      ],
      closer: {
        easy: 'Pick the FASTEST one and start THIS WEEKEND. The faster the cycle, the faster you see if it works.',
        medium:
          "First-grow rule: pick the shortest cycle you can — sprouts or microgreens — to prove the loop. Longer crops come after.",
        hard:
          'First-cycle optimization: minimize cycle length to compress feedback loop. Iteration speed > yield maximization at the learning phase.',
      },
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Same Game, Bigger Fields',
      concept: {
        easy:
          'Your windowsill is a tiny FARM. The math is the same as the BIG farms that feed entire cities.',
        medium:
          'Agricultural unit economics scale with surprising consistency from windowsill to industrial farms. Same equation, different square footage.',
        hard:
          'Agricultural unit economics are remarkably scale-invariant — the seed-to-revenue ratio holds from windowsill to industrial scale.',
      },
      examples: [
        {
          emoji: '🐄',
          who: 'One Dairy Cow',
          story: {
            easy: 'A single dairy cow gives ~6 GALLONS of milk every day. ONE cow can feed ~50 families. Farmers do this with HUNDREDS of cows at once. Same math. Bigger barn.',
            medium:
              "One U.S. dairy cow produces ~6 gallons of milk daily = ~2,200 gallons/year ≈ $7,000+ revenue at retail. Modern dairy farms operate 500-5,000 cows. Production economics are remarkably linear in cow count.",
            hard:
              "Average U.S. dairy cow yield: ~24,000 lbs/year (~2,800 gallons). Retail milk value ~$7K/cow/year. Modern dairy operations: 500-10,000 cow herds. Linear scaling of revenue with cow count + economies of scale on labor/equipment.",
          },
        },
        {
          emoji: '🏢',
          who: 'Vertical Farms',
          story: {
            easy: 'New companies are building MASSIVE indoor farms — stacks of plants in a giant warehouse with LED lights instead of sun. They grow 100× more food per square foot than a normal farm. Future of farming.',
            medium:
              "Vertical farming companies (Plenty, Bowery, AeroFarms) raise hundreds of millions to build indoor LED-lit farms. Productivity per square foot is 50-100× outdoor farming. The micro-farming logic, scaled industrially.",
            hard:
              "Vertical farming industry: ~$5B+ in capital raised, productivity per square foot 50-100× outdoor. High capex (LEDs, HVAC, automation) but year-round operation + insulation from weather risk. Competing on premium fresh + local-delivery niches.",
          },
        },
        {
          emoji: '🥑',
          who: 'Whole Foods Organic',
          story: {
            easy: 'Whole Foods charges DOUBLE for organic stuff. ONE organic avocado is $3 — versus $1.50 at regular stores. Same fruit. Just a fancier story = double the price.',
            medium:
              "Whole Foods organic premium: ~50-100% price uplift vs. conventional. Organic certification adds ~$0.50-2 of variable cost; premium pricing captures the difference + margin lift for the grower.",
            hard:
              "Organic premium pricing: 50-100% retail markup over conventional. Cost differential to grower ~$0.50-2/item; premium price captures buyer WTP for the organic story. Margin lift accrues to certified growers.",
          },
        },
      ],
      kicker: {
        easy: 'Cow. Vertical farm. Avocado. All the same trick — turn sun + time + dirt into money. Now do YOUR mini version.',
        medium:
          "Agricultural economics scale consistently from window box to industrial. The lesson learned in microgreens applies to dairy farms, vertical farms, and premium organic.",
        hard:
          'Agricultural unit economics scale with linear-to-favorable terms from micro to industrial. The mechanics learned at home apply directly to commercial-scale agriculture.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You now know the secret of farming: SUN + TIME = FREE VALUE. The dirt does most of the work; you just water it and wait. Try it on your windowsill. Real food. Real money.",
        medium:
          "You\'ve cracked agricultural unit economics: tiny inputs + free solar energy + time = high-margin output. Now run a real cycle on your windowsill.",
        hard:
          "You now understand agricultural unit economics, seasonality risk, and yield-as-the-key-metric. Same framework applies from windowsill to industrial agriculture.",
      },
      bonusTip: {
        easy:
          "Fun fact: ONE tomato plant can produce 10-30 pounds of tomatoes in a season. From ONE 50-cent seed. That\'s ~30-100× your money. From a SEED.",
        medium:
          "Tomato yield benchmark: indeterminate cherry tomato produces 200-500+ fruits per plant per season. $20-50 retail value from one $0.50 seed = 40-100× ROI. Tomato is one of the highest-ROI home crops.",
        hard:
          "Indeterminate cherry tomato annual yield: 10-30 lbs of fruit per plant. Retail equivalent $20-50. Seed cost $0.50. Per-plant ROI ~40-100×. Among the highest accessible plant-ROI for home growers, especially at multi-plant scale.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'farm-stand',
        emoji: '🌱',
        title: {
          easy: 'Grow + sell a real windowsill harvest!',
          medium: 'Run a real 2-3 week microgreens / sprouts / herb grow',
          hard: 'Execute one full micro-agriculture cycle: seed → harvest → sale',
        },
        pitch: {
          easy:
            "Pick something fast to grow (sprouts in a jar, microgreens in a tray). Plant, water, wait, harvest. Then SELL to a family member who cooks. Real food, real money.",
          medium:
            "Run one full grow cycle. Choose crop, source seeds, plant on windowsill, monitor daily, harvest, sell to family. Track cycle length, yield, revenue, and net.",
          hard:
            "Execute one production cycle: crop selection, seed sourcing, planting, monitoring, harvest, post-harvest handling, sale. Capture cycle time, yield (grams), revenue, and net profit.",
        },
        steps: [
          {
            emoji: '🌱',
            text: {
              easy: 'Pick a FAST crop — sprouts (4-7 days) or microgreens (7-14 days).',
              medium: 'Select a short-cycle crop. Sprouts or microgreens recommended for first cycle.',
              hard: 'Crop selection: minimize cycle length for first iteration. Sprouts or microgreens optimal.',
            },
          },
          {
            emoji: '🛒',
            text: {
              easy: 'Buy seeds (most stores have them) + a jar OR a small tray of soil.',
              medium: 'Source seeds + container. Total cost typically $5-$15 for a complete starter kit.',
              hard: 'Source inputs: seeds, container (jar or tray), soil if applicable, watering vessel. Total capex $5-$15.',
            },
          },
          {
            emoji: '☀️',
            text: {
              easy: 'Put it on a SUNNY windowsill. Water a little, every day.',
              medium: 'Position on south-facing windowsill if available. Water lightly daily, more if dry.',
              hard: 'Position for maximum daily light exposure. Daily light watering; avoid waterlogging.',
            },
          },
          {
            emoji: '📅',
            text: {
              easy: 'WAIT. Check daily. Track growth in your log.',
              medium: 'Daily check + log. Track germination, leaf development, height. Pattern matters.',
              hard: 'Daily check-in: germination, leaf count, height. Log all observations + photo evidence.',
            },
          },
          {
            emoji: '✂️',
            text: {
              easy: 'When ready, HARVEST. Pack into bags or containers to sell.',
              medium: 'Harvest at peak. Pack into bags or containers with care for presentation.',
              hard: 'Harvest at peak yield. Post-harvest handling: rinse, dry, package presentably for sale.',
            },
          },
          {
            emoji: '💵',
            text: {
              easy: 'SELL to a family member who cooks. Note: pretty packaging gets more money!',
              medium: 'Sell to family. Presentation matters — a labeled jar fetches 2× a plastic bag.',
              hard: 'Sale + collection. Presentation drives WTP — labeled, packaged product fetches premium vs. bulk.',
            },
          },
        ],
        reflection: [
          {
            key: 'crop',
            prompt: {
              easy: 'What did you grow?',
              medium: 'Crop + variety',
              hard: 'Crop + variety + cultivation method',
            },
            type: 'text',
            placeholder: 'Broccoli microgreens — soil tray',
          },
          {
            key: 'days',
            prompt: {
              easy: 'How many days from seed to harvest?',
              medium: 'Cycle length (days)',
              hard: 'Total cycle time from seed to sale',
            },
            type: 'number',
            placeholder: '12',
          },
          {
            key: 'revenue',
            prompt: {
              easy: 'How much did you make from selling?',
              medium: 'Total revenue from harvest sale',
              hard: 'Realized revenue',
            },
            type: 'number',
            suffix: '$',
            placeholder: '20',
          },
          {
            key: 'cost',
            prompt: {
              easy: 'How much did seeds + supplies cost?',
              medium: 'Total input cost (seeds + container)',
              hard: 'Capital deployed (seeds + container + amortized soil)',
            },
            type: 'number',
            suffix: '$',
            placeholder: '5',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What surprised you about growing food?',
              medium: 'Biggest insight from your first grow',
              hard: 'Largest insight delta from running a production cycle',
            },
            type: 'longtext',
            placeholder: 'I didn\'t expect them to grow so fast…',
          },
        ],
        parentNote: {
          easy: "Help with the initial seed purchase and getting a tray + soil. Otherwise let the kid run the daily watering and harvest — that\'s the ownership lesson.",
          medium:
            "Light involvement on initial purchase + positioning. Daily watering + observation + harvest = kid\'s responsibility. The ownership cycle is the lesson.",
          hard:
            "Provide capital + sourcing assistance only. Operational ownership (watering, monitoring, harvest, sale) must rest with the kid for the unit-economics intuition to develop.",
        },
        printables: {
          trackers: [
            {
              title: 'Grow Log',
              note: 'One row per day. Photograph daily for a time-lapse if you want!',
              columns: ['Day', 'Date', 'Watered?', 'Growth Notes', 'Photo? (Y/N)'],
              rows: 14,
            },
          ],
          worksheets: [
            {
              title: 'Farm Stand Planner',
              blocks: [
                {
                  label: '🌱 Crop I\'m growing',
                  hint: 'Be specific (broccoli microgreens, alfalfa sprouts, etc.).',
                  lines: 1,
                },
                {
                  label: '🛒 Seeds + supplies cost',
                  equation: '$ _______',
                },
                {
                  label: '🗓️ Expected days to harvest',
                  lines: 1,
                },
                {
                  label: '💰 Target sell price per unit',
                  equation: '$ _______  per _______',
                },
                {
                  label: '🎯 Target revenue from this cycle',
                  hint: 'Units × price = ?',
                  equation: '_______ × $ _______ = $ _______',
                },
                {
                  label: '👥 Who will buy (specific names)',
                  hint: 'Family members who cook. They\'re your first customers.',
                  lines: 3,
                },
                {
                  label: '📝 How I\'ll package + present',
                  hint: 'A labeled mason jar beats a plastic bag every time.',
                  lines: 3,
                },
                {
                  label: '✏️ Sketch of my setup',
                  hint: 'Where is the windowsill? Pots? Lighting?',
                  lines: 6,
                },
                {
                  label: '💭 Reflection after the harvest',
                  hint: 'What worked? What didn\'t? What would you try next?',
                  lines: 4,
                },
              ],
            },
          ],
          signs: [
            {
              emoji: '🌱',
              headline: 'FRESH FROM MY WINDOWSILL',
              subline: 'Grown with sun, water, and love',
              pricePlaceholder: '$___ per bunch',
              accent: '#2D9B6E',
            },
          ],
          checklists: [
            {
              title: 'Grow Setup Checklist',
              items: [
                'Seeds — picked the crop and bought a packet',
                'Container — jar (for sprouts) or tray + soil (for microgreens)',
                'A SUNNY windowsill (south-facing if possible)',
                'A spray bottle or small watering can',
                'A pen + the grow log printed',
                'A camera/phone (with permission) for daily photo',
                'A buyer lined up — family member who cooks',
                'Packaging plan — labeled jar or bag for the harvest',
              ],
              note: 'Tip: take a photo every day at the same time. The time-lapse is half the magic.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
