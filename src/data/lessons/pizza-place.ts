/**
 * Pizza Place Economics — food cost %, labor, slice math.
 *
 * Goal: take a kid from "restaurants are simple — buy food, cook it,
 * sell it" → to "they live or die by food cost %, labor cost %, and
 * rent — three numbers that turn a great kitchen into a failed
 * business if mismanaged" → to running real-cost calculations on
 * something they can make at home.
 *
 * Beat order:
 *   intro (why a slice > half a whole pie) → decision (open pizza:
 *   pies only / slices only / BOTH) → think-deeper (food cost %,
 *   labor, rent, slice waste, why 35% kills you) → concept-cards
 *   (Food Cost % · Labor · Rent · Margin) → calc-challenge ($4 cost,
 *   $20 price → 20% food cost = great) → brainstorm (make something,
 *   compute cost + price + margin) → connect (Chipotle 32% food
 *   cost, Starbucks 12%, Subway franchise math) → outro → mission
 *   (real food cost calculation on something you make + price test).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'pizza-place',
  themeKey: 'pizza',
  emoji: '🍕',
  title: 'Pizza Place',
  subtitle: {
    easy: 'Why does ONE slice cost more than HALF a pie? Welcome to restaurant math.',
    medium:
      'Food cost %, labor %, rent %: the three numbers that decide if a restaurant lives or dies.',
    hard:
      'Restaurant unit economics: COGS ratios, labor leverage, rent leverage, and the failure-mode thresholds.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'thinking',
      text: {
        easy:
          "One slice of pizza costs $3. A whole pizza (8 slices) costs $20. Two slices = $6. Half a pie = 4 slices = $12. Wait — why is buying SLICES more expensive than buying the WHOLE PIE? It\'s not greed. It\'s PIZZA MATH. Today: the secret economics of every restaurant on Earth.",
        medium:
          "60% of new restaurants fail in their first year. Why? Almost always one of THREE numbers: food cost too high, labor cost too high, rent too high. Today: how those three numbers decide whether your pizza shop becomes Domino\'s or disappears.",
        hard:
          "Restaurant industry failure rate: ~60% in year 1, ~80% in 5 years. The dominant failure modes are not bad food but bad unit economics — most commonly food cost > 35% or labor cost > 35% or rent > 10%. Today: how the three big P&L lines determine survival.",
      },
    },

    // ─── Decision: open a pizza shop ──────────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 You\'re Opening a Pizza Shop',
      scenario: {
        easy:
          "You\'re opening Pizza Town. You\'ve got recipes, an oven, and a small space. Three pricing strategies on the table.",
        medium:
          "Pizza concept launch decision. Three pricing structures: whole-pies-only, slices-only, or both at different prices.",
        hard:
          "Restaurant pricing-structure decision. Three options: whole-pie only, slice-only, or mixed model. Optimize for sell-through + margin.",
      },
      question: {
        easy: 'What\'s your pricing plan?',
        medium: 'Pick the structure:',
        hard: 'Optimize pricing-structure:',
      },
      choices: [
        {
          label: {
            easy: 'Whole pies ONLY — $20 each',
            medium: 'Whole pies only at $20',
            hard: 'Single-format SKU — whole pies at $20',
          },
          feedback: {
            easy:
              "Some customers won\'t want a whole pie — too much food. They walk past you to the next place that sells slices.",
            medium:
              "Misses the single-buyer market. ~40% of foot traffic wants a slice for lunch, not a whole pie. You lose them to slice-selling competitors.",
            hard:
              "Sub-optimal — leaves single-buyer segment uncaptured. Lunch + on-the-go customers (~30-40% of foot traffic) require slice availability.",
          },
        },
        {
          label: {
            easy: 'Slices ONLY — $3 each',
            medium: 'Slices only at $3',
            hard: 'Single-format SKU — slices at $3',
          },
          feedback: {
            easy:
              "Hmm. Big families won\'t buy 8 slices — they\'ll just order a whole pie from somewhere else. Plus selling 1 at a time is more work.",
            medium:
              "Misses the family-dinner market. Whole pies are ~50% lower friction for family dinners vs. ordering 8 slices. Plus per-slice ordering increases service labor.",
            hard:
              "Sub-optimal — abandons the family-dinner segment. Whole-pie format is operationally cleaner + matches family-purchase context.",
          },
        },
        {
          label: {
            easy: 'BOTH — pies for $20 OR slices for $3 each',
            medium: 'Mixed model — pies AND slices at different per-unit prices',
            hard: 'Mixed SKU — pies + slices priced for different consumption contexts',
          },
          feedback: {
            easy:
              "WINNER. Lunch crowd buys slices. Family dinners buy pies. You capture EVERYONE. Plus when you sell 8 slices, you collect $24 for the same pie that costs $20 whole. Slices = higher margin per pie.",
            medium:
              "Optimal. Captures both daypart segments (slice for lunch, pie for dinner). Per-slice pricing typically yields 20-30% higher revenue per pie than whole-pie pricing — slice-sellers extract margin via the per-unit format.",
            hard:
              "Aligned with industry best practice. Mixed SKU captures cross-context demand + extracts ~20-30% per-pie revenue lift via slice format. Slice format also reduces customer order size friction.",
          },
          isPreferred: true,
        },
      ],
      realWorldReveal: {
        easy:
          "REAL pizza places do this. A slice for $3. A pie for $20. If they SELL all 8 slices, they make $24 — MORE than the $20 pie. The slice price is HIGHER per piece — that\'s how slice shops survive on small spaces.",
        medium:
          "Real pizza unit economics: slice pricing extracts ~20-30% more revenue per pie than whole-pie selling. Slice shops survive in expensive real estate because of this premium. Whole-pie shops need volume + lower rent per square foot.",
        hard:
          "Slice-format pricing extracts ~20-30% per-pie revenue premium vs. whole-pie. The premium is the operating margin for slice-only operations + small-format urban shops. Whole-pie operators rely on volume + delivery + lower-rent locations.",
      },
    },

    // ─── Think-deeper: 3 deadly numbers ────────────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 The Three Numbers That Kill Restaurants',
      intro: {
        easy: "Even GREAT pizza fails if 3 numbers go wrong. Let\'s find them.",
        medium: "Restaurant economics is dominated by three line items. Let\'s walk through each.",
        hard: 'What are the three dominant cost lines in restaurant P&L?',
      },
      layers: [
        {
          question: {
            easy: 'What does a pizza actually COST to make (just the ingredients)?',
            medium: 'What\'s the COGS of a pizza?',
            hard: 'What\'s the typical food-cost ratio for pizza?',
          },
          reveal: {
            easy:
              "About $3-$5 in dough, cheese, sauce, toppings. So a $20 pizza costs about 20% in FOOD. That\'s called your FOOD COST PERCENT.",
            medium:
              "Pizza COGS typically $3-5: flour, cheese (the most expensive line), tomato, toppings. At $20 retail, food cost % is ~20%. Industry target: 25-30%. Pizza is one of the lowest food-cost categories.",
            hard:
              "Pizza unit COGS ~$3-5 (cheese ~40-50% of food cost, dough + sauce + toppings ~10-15% each). Food cost % ~15-25% retail. Among the lowest in restaurant categories — supports the multi-billion-dollar pizza industry.",
          },
        },
        {
          question: {
            easy: 'What\'s the SECOND big cost in a restaurant?',
            medium: 'What\'s the second-biggest cost line?',
            hard: 'What\'s the second-largest P&L line?',
          },
          reveal: {
            easy:
              "PEOPLE. Cooks. Cashiers. Cleaners. Their pay. Their time. Labor is usually 25-35% of every dollar a restaurant makes.",
            medium:
              "Labor cost ~25-35% of revenue. Cooks, cashiers, dishwashers, managers. Goes up when wages rise. Industry target: <30% — anything over 35% threatens profitability.",
            hard:
              "Labor cost ratio 25-35% of revenue. Sensitive to wage increases (especially state minimum-wage). Major restaurant chains routinely cite labor as #1 P&L concern. Automation pressure exists but execution is gradual.",
          },
        },
        {
          question: {
            easy: 'What\'s the THIRD big cost?',
            medium: 'What\'s the third-largest cost?',
            hard: 'What\'s the third major P&L line?',
          },
          reveal: {
            easy:
              "RENT. The price of the building. Restaurants pay 5-15% of every dollar just to keep their doors open in their spot.",
            medium:
              "Rent (or building costs): 5-15% of revenue depending on location. Urban prime locations push 10-15%; suburban 5-8%. Fixed cost — doesn\'t shrink in slow weeks. Major failure driver.",
            hard:
              "Rent / occupancy cost: 5-15% of revenue. Fixed regardless of revenue — sensitive to volume drops. Prime urban locations 10-15%; suburban 5-8%. Often the binding constraint during downturns.",
          },
        },
        {
          question: {
            easy: 'What HAPPENS if all three numbers add up to MORE THAN 100%?',
            medium: 'What happens when the three big costs sum past margin tolerance?',
            hard: 'What\'s the failure-threshold in restaurant unit economics?',
          },
          reveal: {
            easy:
              "You CLOSE. If you spend more than you make, you go OUT OF BUSINESS. Most restaurants that close DIDN\'T know their numbers.",
            medium:
              "Bankruptcy. Food (25-30%) + labor (25-35%) + rent (5-15%) + other operating costs = 70-90% of revenue ideally. Above 95% = chronic losses. Most restaurant failures stem from one of these lines being structurally too high.",
            hard:
              "Restaurant operating-margin target: 5-15% (food chain), 15-25% (best operators). Failure threshold: aggregate cost ratio > 95% of revenue. Most failures = food cost > 35% OR labor > 35% OR rent > 12% — any one of these eats all margin.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Numbers Every Restaurant Watches',
      subheading: 'These four ratios decide whether the restaurant makes it.',
      cards: [
        {
          emoji: '🥫',
          title: 'Food Cost %',
          desc: {
            easy: 'FOOD COST % = how much of every dollar you spend on FOOD. Target: under 30%. Anything over 35% = closed.',
            medium:
              'Food cost % = COGS / revenue. Target 25-30%; <25% = high margin (Starbucks); >35% = chronic risk. Single most-watched ratio in restaurant operations.',
            hard:
              'Food cost % drives gross margin. Industry medians 28-32%. <25% indicates premium pricing or commodity sourcing edge; >35% threatens profitability.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '👨‍🍳',
          title: 'Labor Cost',
          desc: {
            easy: 'LABOR COST = how much you pay your PEOPLE. Usually 25-35% of revenue. Higher in fancy places; lower in fast food.',
            medium:
              'Labor cost % = wages + benefits / revenue. 25-35% typical. Fast food trends lower; full-service higher. Sensitive to minimum-wage increases.',
            hard:
              'Labor cost ratio: 25-35% typical. Fast-food lower (20-25% via tech + low-skill labor); fine dining higher (30-35% via trained chefs). Wage compression pressure is structural.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '🏢',
          title: 'Rent',
          desc: {
            easy: 'RENT = what you pay for the SPACE. 5-15% of every dollar. Fixed — you pay it whether you sell 1 pizza or 1,000.',
            medium:
              'Rent / occupancy: 5-15% of revenue. Fixed cost — sensitive to volume drops. Prime locations charge premium; suburban locations cheaper but lower traffic.',
            hard:
              'Rent ratio 5-15%, fixed regardless of volume. Sensitive to revenue declines. Prime urban locations charge 10-15%; secondary suburban 5-8%. Lease length protects against rent hikes.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '📈',
          title: 'Margin',
          desc: {
            easy: 'MARGIN = what\'s LEFT after all the costs. Good restaurants make 10-15 cents on every dollar. Many make under 5%.',
            medium:
              'Operating margin = revenue − all costs. Industry typical 5-15%; best operators 15-25%. Below 5% = chronic risk; below 0% = closing.',
            hard:
              'Operating margin: industry median ~5-10%, best-in-class operators 15-20%. Below 5% requires high volume + strict cost discipline. Negative margins trigger eventual closure.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: food cost % ──────────────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: Your Pizza Food Cost %',
      setup: {
        easy: 'A pizza costs you $4 in ingredients. You sell it for $20. What\'s your FOOD COST PERCENT?',
        medium:
          "Pizza unit: COGS $4, retail $20. Compute food cost ratio.",
        hard:
          "Pizza unit economics: COGS $4, ASP $20. Compute food cost ratio.",
      },
      problem: {
        givens: [
          { label: 'food cost', value: 4, suffix: '$' },
          { label: 'sell price', value: 20, suffix: '$' },
        ],
        answerLabel: 'Food cost',
        answer: 20,
        suffix: '%',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          "Step 1: $4 / $20 = 0.20. Step 2: 0.20 = 20%.\n\nThat\'s GREAT. Restaurant industry target is 30%. You\'re at 20% — way better. You have a healthy margin to cover labor + rent + still profit.",
        medium:
          "Food cost % = $4 / $20 = 20%. Excellent.\n\nIndustry comparison: pizza industry typical 20-30%, Chipotle ~32%, Starbucks ~12% (their high-margin business model). 20% gives you room to pay 25-30% labor + 8-12% rent + still leave 25%+ operating margin.",
        hard:
          "Food cost % = COGS / revenue = $4 / $20 = 20%. Below industry median (~28-32%); supports robust gross margins.\n\nAt 20% food cost, gross margin is 80%. Cover 30% labor + 10% rent + 5% other operating expenses → ~35% operating margin theoretical ceiling, ~15-20% practical given volume + marketing + waste. Top-quartile restaurant performance.",
      },
    },

    // ─── Brainstorm: cost your own creation ───────────────────────────
    {
      kind: 'brainstorm',
      heading: '💰 Cost Out Your Own Creation',
      prompt: {
        easy:
          'Pick 3 things you could MAKE in the kitchen. For each, figure out your COST per unit + a fair PRICE + your FOOD COST %.',
        medium:
          'Identify 3 food items you can produce. For each: COGS per unit, target retail, food cost %, and viability for sale to family/neighbors.',
        hard:
          'Identify 3 producible food items. For each: per-unit COGS estimate, ASP, food cost ratio, and target operating margin.',
      },
      minItems: 3,
      placeholder: 'e.g. Cookies — $0.50 cost / $2 price = 25% food cost...',
      hints: [
        {
          easy: 'COOKIES — usually ~$0.30-$0.50 per cookie. Sell for $1-$2. Great margin.',
          medium: 'Cookies: COGS $0.30-0.50, ASP $1-2, food cost 15-30%. Strong margin profile.',
          hard: 'Cookies: COGS $0.30-0.50, ASP $1-2, food cost 15-30%. Among the highest-margin home-makeable foods.',
        },
        {
          easy: 'LEMONADE — $0.20 ingredients per cup. Sell at $2. 10% food cost. Restaurant heaven.',
          medium: 'Lemonade: COGS $0.15-0.25, ASP $1-3, food cost ~10%. Like Starbucks economics — very high margin.',
          hard: 'Beverage economics: ~10% food cost on water/sugar/concentrate input vs. $1-3 retail. Among the highest-margin food categories — explains beverage-heavy restaurant menu pricing.',
        },
        {
          easy: 'CUPCAKES — about $0.50 each. Sell $2-$3. 25% food cost. Good.',
          medium: 'Cupcakes: COGS $0.50-1, ASP $2-4, food cost 20-30%. Decorative element drives premium.',
          hard: 'Cupcakes: COGS $0.50-1, ASP $2-4, food cost 20-30%. Premium-decoration variant can push ASP higher.',
        },
        {
          easy: 'POPCORN — pennies per bag if you do it on the stove. Sell at parties for $1.',
          medium: 'Popcorn: COGS ~$0.10, ASP $1-2, food cost ~10%. Bulk-buy economy of scale strong.',
          hard: 'Popcorn: COGS ~$0.10, ASP $1-2, food cost ~10%. Same high-margin economics as beverages — explains theater/concession pricing.',
        },
        {
          easy: 'PIZZA — about $2 ingredients per personal pizza. Sell for $6-$8. 25% food cost.',
          medium: 'Personal pizza: COGS $1.50-2.50, ASP $5-8, food cost 20-30%. Pizza is famously high-margin.',
          hard: 'Pizza: COGS $1.50-2.50, ASP $5-8, food cost 20-30%. Pizza dough + cheese + sauce architecture optimized for low food cost ratio.',
        },
        {
          easy: 'SMOOTHIES — about $1 of fruit per cup. Sell at $4-$5. 25% food cost.',
          medium: 'Smoothies: COGS $0.80-1.20, ASP $3-5, food cost 20-30%. Healthy-positioning premium.',
          hard: 'Smoothies: COGS $0.80-1.20, ASP $3-5, food cost 20-30%. Health-positioning supports premium pricing despite low input cost.',
        },
      ],
      closer: {
        easy: 'Pick the one with the BEST margin. Then test-sell to family. Real numbers > guesses.',
        medium:
          "Select the highest-margin viable product. Test-price with family before committing to volume.",
        hard:
          'Highest-margin viable product wins. Family test-price reveals demand elasticity before volume commitment.',
      },
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Real Restaurant Food Cost %',
      concept: {
        easy:
          'EVERY restaurant chain in the world watches these 3 numbers. The differences explain who wins and loses.',
        medium:
          'Major restaurant chains operate on identical metrics — comparing them reveals structural differences in profitability.',
        hard:
          'Restaurant operator ratios compared: food cost / labor / rent / margin. Differences explain operating-margin gaps.',
      },
      examples: [
        {
          emoji: '🌯',
          who: 'Chipotle',
          story: {
            easy: 'Chipotle\'s food cost is about 32% — HIGH for fast food. But they make up for it with FAST service + good labor numbers. They\'re one of the highest-margin restaurants around.',
            medium:
              "Chipotle: ~32% food cost (high for fast food due to fresh ingredients), 26% labor cost (efficient assembly line), 10% other. Operating margin ~17%. Strategy: high food cost but operational efficiency.",
            hard:
              "Chipotle FY2023: food cost 32%, labor 26%, occupancy 8%, other operating 10%. Operating margin 17%. Premium-positioned fast-casual; ingredient quality justifies food cost.",
          },
        },
        {
          emoji: '☕',
          who: 'Starbucks',
          story: {
            easy: 'Starbucks has a food cost of just 12%. A $5 coffee costs them about $0.60 to make. That\'s why they make BILLIONS.',
            medium:
              "Starbucks: ~12% food cost (coffee + milk basically free at scale), 30% labor, 10% rent. Operating margin ~15%. The 12% food cost IS the business model — beverage economics are extreme.",
            hard:
              "Starbucks: food cost ~12%, labor ~30%, occupancy ~10%, other ~13%. Operating margin ~15-17%. Beverage-heavy mix sustains structurally low food cost. The pricing premium relative to coffee bean cost is the business.",
          },
        },
        {
          emoji: '🥪',
          who: 'Subway',
          story: {
            easy: 'Subway franchise owners (the people who buy a Subway store) keep about 7-10 CENTS on every dollar after all the costs. Tight margins. Have to sell a LOT to make a living.',
            medium:
              "Subway franchisee: food cost 28%, labor 25%, royalty 8% to Subway corp, rent 8%, marketing 4.5%. Net operating margin 7-10%. Tight — requires high volume per location.",
            hard:
              "Subway franchisee P&L: food 28%, labor 25%, royalty 8%, occupancy 8%, marketing 4.5%, other 15-20%. Operating margin 7-10%. Tight unit economics; volume-sensitive. Industry-typical thin margins.",
          },
        },
      ],
      kicker: {
        easy: 'Same equations. Different choices. Starbucks made coffee a fortune. Chipotle made fresh food work at scale. You can make YOUR thing work too — once you know the numbers.',
        medium:
          "The same food-cost / labor / rent formula governs every restaurant. Different mixes produce different operating margins. Pricing power + operational discipline determine outcomes.",
        hard:
          'Universal restaurant cost framework: food / labor / rent / other. Operating margin determined by mix optimization. Premium beverages + efficient labor + favorable rents = top quartile.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You now know what makes restaurants live or die: three numbers — food cost %, labor %, rent %. Watch these and you can predict any restaurant\'s future.",
        medium:
          "You\'ve cracked restaurant unit economics. The three cost ratios determine survival; the mix determines profitability. Apply at any scale.",
        hard:
          "You now understand restaurant cost-line analysis: food / labor / rent / margin. Predictive power across consumer foodservice categories.",
      },
      bonusTip: {
        easy:
          "Crazy fact: a popcorn bucket at a MOVIE THEATER costs them about $0.20 to make. They sell it for $9. That\'s 2% food cost — the highest-margin food in America.",
        medium:
          "Movie theater concession economics: popcorn COGS ~$0.20, retail $7-12, food cost ~2-3%. Concessions provide ~85% of theater profit (vs. ~10% from ticket revenue net of studio split). Concessions ARE the business model.",
        hard:
          "Movie theater P&L: ticket revenue ~50% of total but only ~10% of profit (~80-90% goes to studio); concessions ~30% of revenue but ~85% of profit. Popcorn food cost ~2-3%, soft drinks ~5%. Concessions subsidize the entire theater operation — most extreme example of low-food-cost economics in consumer food.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'pizza-place',
        emoji: '🍕',
        title: {
          easy: 'Cost out a real recipe + price test it!',
          medium: 'Execute one food unit-economics calculation + family price test',
          hard: 'Compute COGS + run a price-elasticity test on a home-made food',
        },
        pitch: {
          easy:
            "Pick something you can BAKE/COOK. Add up the exact cost of ingredients. Try selling it to family at 3 different prices. Find the SWEET SPOT.",
          medium:
            "Run a real food unit-economics calculation: pick a home-made food, itemize COGS, set 3 candidate prices, sell to family at varying prices, identify the price-margin sweet spot.",
          hard:
            "Execute one COGS + price-elasticity exercise: itemize unit ingredients, compute food cost, sell at 3 test prices, identify revenue-maximizing price point.",
        },
        steps: [
          {
            emoji: '🍪',
            text: {
              easy: 'Pick ONE thing you can make. Cookies, lemonade, smoothies — whatever.',
              medium: 'Choose food item with measurable inputs.',
              hard: 'Select food SKU with itemizable inputs.',
            },
          },
          {
            emoji: '📋',
            text: {
              easy: 'Write down EVERY ingredient you use + how much each costs.',
              medium: 'Itemize ingredient costs: each ingredient + portion + dollar cost.',
              hard: 'Itemize input costs: ingredient × portion × unit price = component cost.',
            },
          },
          {
            emoji: '🧮',
            text: {
              easy: 'Divide total cost by number of items made to get cost-per-piece.',
              medium: 'Compute COGS per unit: total batch cost / units produced.',
              hard: 'Per-unit COGS = batch input cost / batch yield. Document the calculation.',
            },
          },
          {
            emoji: '💰',
            text: {
              easy: 'Pick 3 prices to TEST: low / medium / high. Sell at each.',
              medium: 'Set 3 test prices (low / medium / high). Sell batches at each to family/friends.',
              hard: '3 test ASPs spanning low/medium/high. Sell at each; observe sell-through.',
            },
          },
          {
            emoji: '📊',
            text: {
              easy: 'At each price, count: did they buy? Pick the price where MORE people bought + you still made money.',
              medium: 'Per-price sell-through. Identify revenue-maximizing price.',
              hard: 'Per-price elasticity. Identify revenue-maximizing point on the demand curve.',
            },
          },
        ],
        reflection: [
          {
            key: 'item',
            prompt: {
              easy: 'What did you make?',
              medium: 'SKU + variety',
              hard: 'SKU + portion size',
            },
            type: 'text',
            placeholder: 'Chocolate chip cookies',
          },
          {
            key: 'cost',
            prompt: {
              easy: 'What did it cost you per item?',
              medium: 'Per-unit COGS',
              hard: 'Realized per-unit COGS',
            },
            type: 'number',
            suffix: '$',
            placeholder: '0.50',
          },
          {
            key: 'price',
            prompt: {
              easy: 'Best price you found?',
              medium: 'Revenue-maximizing price',
              hard: 'Selected ASP',
            },
            type: 'number',
            suffix: '$',
            placeholder: '2',
          },
          {
            key: 'fcp',
            prompt: {
              easy: 'Your FOOD COST % (cost ÷ price)?',
              medium: 'Food cost ratio',
              hard: 'Food cost % at selected ASP',
            },
            type: 'number',
            suffix: '%',
            placeholder: '25',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What surprised you about pricing for profit?',
              medium: 'Biggest insight from the cost-out + price test',
              hard: 'Largest insight delta from COGS + elasticity exercise',
            },
            type: 'longtext',
            placeholder: 'I didn\'t realize the cost was so low — I could have charged more…',
          },
        ],
        parentNote: {
          easy: "Honest price feedback! \"$2 is too much\" tells the kid more than polite buying.",
          medium:
            "Authentic price-response feedback. Polite-buying at every price corrupts the elasticity signal. Decline at some prices to give the kid real elasticity data.",
          hard:
            "Provide genuine price elasticity signal. Polite acquiescence at all prices invalidates the experiment. Decline some prices honestly.",
        },
        printables: {
          trackers: [
            {
              title: 'Recipe + Price Test Log',
              note: 'One row per price tested.',
              columns: ['Price Tested', 'How Many Sold', 'Revenue', 'Profit (Rev − Cost)', 'Notes'],
              rows: 3,
            },
          ],
          worksheets: [
            {
              title: 'Food Cost Calculator',
              blocks: [
                {
                  label: '🍕 What I\'m making',
                  hint: 'Be specific.',
                  lines: 1,
                },
                {
                  label: '📋 Every ingredient + cost',
                  hint: 'Flour: $0.50. Sugar: $0.30. Etc.',
                  lines: 6,
                },
                {
                  label: '💰 Total batch cost',
                  equation: '$ _______',
                },
                {
                  label: '🔢 Number of items I made',
                  equation: '_______ items',
                },
                {
                  label: '💵 Cost per item',
                  hint: 'Total cost / number of items.',
                  equation: '$ _______ / _______ = $ _______',
                },
                {
                  label: '🎯 Three test prices',
                  hint: 'Pick a low / medium / high.',
                  lines: 2,
                },
                {
                  label: '📊 Best price (most people bought, you still profited)',
                  equation: '$ _______',
                },
                {
                  label: '🥧 My FOOD COST %',
                  hint: 'Cost / best price × 100.',
                  equation: '$ _______ / $ _______ × 100 = _______ %',
                },
                {
                  label: '🏆 Profit per item at best price',
                  equation: '$ _______ − $ _______ = $ _______',
                },
              ],
            },
          ],
          checklists: [
            {
              title: 'Cost-Out Day Checklist',
              items: [
                'Recipe picked',
                'Calculator/phone for math',
                'Ingredients available (or budget to buy them)',
                'Scale or measuring cups to portion ingredients',
                'Receipt/labels of ingredient prices',
                'Worksheet printed + ready',
                '3 test prices decided IN ADVANCE',
                'Family members willing to give HONEST price feedback',
                'Time to make + test (2-3 hours)',
              ],
              note: 'Tip: write the ingredient prices DOWN BEFORE you start cooking. Receipts vanish.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
