/**
 * Snow Day Hustle — seasonal services & matching supply to demand.
 *
 * Goal: take a kid from "I do chores for a flat allowance" → to
 * "seasonal demand windows pay 3-5× normal wage if you show up at
 * the right moment with the right service" → to actually running a
 * real weekend hustle and tracking hourly rate.
 *
 * Beat order:
 *   intro → decision (snowstorm hits: sit inside / shovel own /
 *   shovel 5 neighbors) → think-deeper (why seasonal pays better) →
 *   concept-cards (Demand Window/Hourly Rate/Service Quality/Repeat
 *   Customer) → calc-challenge (5 driveways × $10 / 2.5 hrs = $20/hr)
 *   → brainstorm (3 seasonal services you could offer) → connect
 *   (Christmas tree farms, beach businesses, tax accountants) →
 *   outro (NJ teen $14K in 1 winter) → mission (real $20+ weekend
 *   hustle with hourly-rate tracking).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'snow-day-hustle',
  themeKey: 'hustle',
  emoji: '❄️',
  title: 'Snow Day Hustle',
  subtitle: {
    easy: 'When the weather changes, money pours in — for whoever shows up first.',
    medium:
      'Seasonal services pay 3-5× more than steady chores. Why? Urgency + scarcity. Today: how to spot the window and walk in.',
    hard:
      'Seasonal labor markets: how demand-spike economics inflate hourly rates and how to position for them at kid scale.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "When it SNOWS, everyone wants their driveway shoveled. When it\'s HOT, everyone wants a cold drink. When LEAVES fall, everyone wants their yard raked. The PEOPLE who show up at the right MOMENT with the right SERVICE — they earn way more than people who do regular chores. Today: how to spot the window and WALK IN.",
        medium:
          "Some kid in your neighborhood made $14,000 last winter shoveling driveways. Real story. The trick wasn\'t harder work — it was TIMING. Today: how seasonal services pay 3-5× normal wage rates, why people pay extra for them, and how to run your first weekend hustle.",
        hard:
          "Seasonal labor markets exhibit dramatic price spikes during demand windows. Snow removal, holiday-prep services, tax filing, beach concessions — all pay multiples of equivalent off-season rates. Today: matching supply to demand windows at kid scale, with hourly-rate tracking.",
      },
    },

    // ─── Decision: snowstorm just hit ──────────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 6 Inches of Snow Just Fell',
      scenario: {
        easy:
          "It SNOWED HARD overnight. 6 inches. Your block is BURIED. You\'re outside in your boots. You\'ve got THREE choices for the next 3 hours.",
        medium:
          "Snowstorm overnight, 6\" accumulation. Saturday morning. Your block is covered, snow plow won\'t come until afternoon. You have ~3 hours of energy + a shovel. Three deployment options.",
        hard:
          "Demand-window event: 6\" snowfall, sidewalk-clearing demand peaked, residential snow-removal services unavailable till afternoon. Three labor-allocation options on the table.",
      },
      question: {
        easy: 'What do you do?',
        medium: 'Pick your move:',
        hard: 'Allocate 3 hours of labor:',
      },
      choices: [
        {
          label: {
            easy: 'Stay inside, watch a movie, miss the whole thing',
            medium: 'Non-participation — wait it out',
            hard: 'Skip the window — defer to off-season allocation',
          },
          feedback: {
            easy:
              "Cozy! But the BIGGEST money window of the WHOLE winter just opened — and you missed it. The neighbors paid OTHER people to shovel.",
            medium:
              "You skipped a 3-5× wage window. The opportunity cost is real — that snowstorm represents a few hundred dollars of foregone earnings vs. baseline chores.",
            hard:
              "Sub-optimal allocation. Demand windows have steep wage premia (3-5×). Non-participation foregoes the wage premium without recovering it elsewhere. High opportunity cost.",
          },
        },
        {
          label: {
            easy: 'Shovel ONLY your house. Then go inside.',
            medium: 'Shovel your own driveway only — pure household duty',
            hard: 'Cover only the personal obligation — no market participation',
          },
          feedback: {
            easy:
              "OK. You did your duty. But you\'ve been outside, you\'re already cold, you have a shovel — and the next door neighbor just stepped outside to look at their own driveway. Hmm.",
            medium:
              "Suboptimal capture. You\'ve incurred all the marginal costs (boots on, shovel in hand, body warmed up) but realized none of the marginal revenue. The marginal-cost-to-revenue ratio is best when you\'re ALREADY out there.",
            hard:
              "Inefficient capture of the window. Personal-clearing absorbs setup cost but captures no market revenue. Marginal-cost-to-marginal-revenue ratio is poor at this allocation.",
          },
        },
        {
          label: {
            easy: 'Knock on 5 neighbors\' doors. Charge $10 to shovel each driveway.',
            medium: 'Run the route — knock 5 neighbors, $10/driveway, work for ~2-3 hours',
            hard: 'Capture the demand window — door-to-door service offering at premium pricing',
          },
          feedback: {
            easy:
              "WINNER. $50 in your pocket in 2 hours. Most neighbors will say YES because they didn\'t want to do it. You\'re fast because you\'re already warmed up. And NEXT snowstorm, they\'ll call YOU first.",
            medium:
              "Optimal. Demand window + already-mobilized capital (you, the shovel, the willingness) = $40-60 in 2-3 hours ($15-25/hr). Plus you generate repeat customers for the next storm. Premium services compound across storms.",
            hard:
              "Aligned with demand-window economics. Door-to-door service capture rates at ~50-70% during high-demand events. Premium pricing supported by urgency + low alternative-supply. Repeat-customer formation extends LTV across multiple windows.",
          },
          isPreferred: true,
        },
      ],
      realWorldReveal: {
        easy:
          "True story: in 2014, a 15-year-old from New Jersey made $14,000 in ONE winter shoveling driveways. He just KNOCKED ON DOORS during every snowstorm. He\'s now in college — paid for partly by snow.",
        medium:
          "2014: Erik Martin, 15, Brooklyn, made ~$14,000 in one winter season shoveling driveways at $10-30 each. The method: post offers ahead of forecasted storms, show up first, ask politely. Same model as the Roto-Rooter guy who shows up the moment your pipes burst — emergency premium pricing.",
        hard:
          "Snow-removal premium pricing is well-documented. Per-driveway $10-50 during demand events vs. $0 baseline. Erik Martin (Brooklyn 2014) ≈ $14K over one winter using offer-ahead + door-knock approach. Same dynamics underlie Roto-Rooter, emergency-medical, locksmith, tow-truck pricing.",
      },
    },

    // ─── Think-deeper: why seasonal pays better ──────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Does Snow PAY BETTER Than Regular Chores?',
      intro: {
        easy: "An hour shoveling = $20. An hour vacuuming = $5. Why? It\'s the same hour.",
        medium: "Why does seasonal labor pay 3-5× the rate of equivalent steady-state chores?",
        hard: 'What drives the wage premium in demand-window labor markets?',
      },
      layers: [
        {
          question: {
            easy: 'How do people FEEL the moment they see snow piled up?',
            medium: 'What\'s the customer\'s emotional state during a demand event?',
            hard: 'What\'s the demand-side psychology during a peak event?',
          },
          reveal: {
            easy:
              "STRESSED. Annoyed. \"Ugh, I have to shovel ALL of that?\" Their TIME feels precious. They\'ll PAY to make the problem go away.",
            medium:
              "Acute stress + time-pressure + reluctance to do the work themselves. Customer\'s willingness-to-pay spikes because they\'re trading dollars for relief from an unwanted task. Convenience pricing applies.",
            hard:
              "Customer WTP rises with acute time-pressure + task aversion + alternative-supply scarcity. Pricing power flows to whoever offers immediate relief. Same psychology underlies plumber emergency rates, urgent-care premiums, last-minute travel.",
          },
        },
        {
          question: {
            easy: 'How many OTHER kids are knocking on doors during the storm?',
            medium: 'What\'s the competitive supply during a demand event?',
            hard: 'What\'s the supply-side dynamic in a peak window?',
          },
          reveal: {
            easy:
              "Almost none! Most kids are inside. The few who DO go out — there aren\'t enough of you to serve everyone. That makes you SPECIAL.",
            medium:
              "Supply is scarce relative to demand. Most potential providers stay inside; the few who participate face minimal competition. Scarcity supports premium pricing without competitive erosion.",
            hard:
              "Supply scarcity during demand peaks. Competitive participation rate is low (cold, effort), giving participating providers near-monopoly pricing on per-block routes. Demand-supply mismatch creates the premium.",
          },
        },
        {
          question: {
            easy: 'Why are seasonal earnings so much CRAZIER than regular allowance?',
            medium: 'Why do demand windows produce wage spikes so much larger than baseline?',
            hard: 'What\'s the magnitude of the wage premium during demand events?',
          },
          reveal: {
            easy:
              "Because nobody\'s going to PAY you to vacuum the same room EVERY day — it\'s the same task. But SHOVELING during a storm is RARE + URGENT + only happens 5 times a year. They\'ll pay $20 for what they\'d pay $5 for normally.",
            medium:
              "Routine tasks have substitutes + low urgency → wage compresses to commodity rate. Urgent + scarce tasks have no substitutes + high urgency → wage spikes to convenience-premium rate. Multiples of 3-5× typical.",
            hard:
              "Wage premium ∝ (demand urgency × alternative-supply scarcity). At extremes (winter storm × Saturday morning × residential), wage multipliers reach 3-5× routine task rates. Same magnitudes observed in plumbing, locksmiths, dog-walker holiday rates.",
          },
        },
        {
          question: {
            easy: 'How do you find these demand windows BEFORE everyone else?',
            medium: 'How do pros position for a demand window?',
            hard: 'What\'s the strategic positioning for capturing demand windows?',
          },
          reveal: {
            easy:
              "WATCH THE WEATHER. Watch the SEASONS. Know when a SNOWSTORM is coming TONIGHT — and have your flyer ready. Show up FIRST. People hire whoever showed up first.",
            medium:
              "Pre-positioning: monitor weather forecasts, post offers ahead of storms, secure commitments in advance. Pre-arranged customers reduce search cost during the window itself, maximizing throughput.",
            hard:
              "Optimal positioning: monitor demand signals (weather, calendar, seasonal patterns), establish pre-commitments via flyers/messaging, minimize search cost during window. Throughput optimization compounds the wage premium.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Words of Seasonal Hustle',
      subheading: 'Master these and you\'ll spot money-making windows everyone else misses.',
      cards: [
        {
          emoji: '🌡️',
          title: 'Demand Window',
          desc: {
            easy: 'DEMAND WINDOW = the SHORT TIME when EVERYONE wants the same thing at once. Snow falls → demand for shoveling. Christmas comes → demand for trees + wrapping. Tax day → demand for accountants.',
            medium:
              'Demand windows are time-bounded spikes in customer need. Length: hours to weeks. Pricing power is high during the window; non-existent outside it.',
            hard:
              'Demand windows: temporally-concentrated periods of elevated buyer urgency. Pricing power highly compressed in time. Sectors: seasonal services, holiday goods, weather-event services, time-pressured professional services.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '⏱️',
          title: 'Hourly Rate',
          desc: {
            easy: 'HOURLY RATE = how much you make per HOUR of work. Made $50 in 2 hours? That\'s $25/hour. Way better than $5/hour for chores.',
            medium:
              'Hourly rate = total earnings / total time worked. The metric that lets you compare gigs honestly. A $50 task in 1 hour beats a $40 task in 2 hours.',
            hard:
              'Hourly rate = revenue / time-on-task. Standard benchmark for opportunity-cost reasoning. Time + capability are the limiting inputs; rate per hour is the proper optimization metric.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '⭐',
          title: 'Service Quality',
          desc: {
            easy: 'QUALITY = doing the JOB WELL. Clean shovel + smile + got the whole driveway = $20. Half-job + grumpy face = no tip + no next time.',
            medium:
              'Quality is the differentiator between a one-time job and a 10-year customer. Half-done work loses repeat business; over-done work earns referrals + premiums.',
            hard:
              'Service quality drives repeat conversion + word-of-mouth referral. Excess effort vs. baseline is captured by both repeat rate and per-job pricing. Highest-leverage variable for sustained hustle income.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '🔁',
          title: 'Repeat Customer',
          desc: {
            easy: 'REPEAT CUSTOMER = a person who hires you AGAIN. Your second snowstorm, they CALL YOU. Now you don\'t even have to knock. The same shovel earns way more.',
            medium:
              'Repeat customers reduce CAC to ~zero — no door-knocking, no negotiation. The third storm at the same five houses is pure income at minimal setup cost.',
            hard:
              'Repeat-customer capture eliminates marginal CAC. Each subsequent service event is incremental high-margin revenue with no acquisition cost. Compounds across seasons.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: hourly rate ──────────────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: Your First Snow-Day Wage',
      setup: {
        easy: 'You shoveled 5 driveways at $10 each. It took you 2.5 hours. What\'s your hourly rate?',
        medium:
          "Snow-day output: 5 driveways × $10 each, total time 2.5 hours. Compute hourly rate.",
        hard:
          "Per-event labor economics: 5 service units × $10 ASP, time-on-task 2.5h. Compute realized hourly rate.",
      },
      problem: {
        givens: [
          { label: 'driveways', value: 5 },
          { label: 'price each', value: 10, suffix: '$' },
          { label: 'total hours', value: 2.5 },
        ],
        answerLabel: 'Hourly rate',
        answer: 20,
        suffix: '$/hr',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          "Step 1: 5 × $10 = $50 total. Step 2: $50 / 2.5 hours = $20 per hour.\n\n$20/hour. The federal minimum wage for adults is $7.25/hour. You just earned ~3× that. Without any boss. From snow.",
        medium:
          "Revenue = 5 × $10 = $50. Hourly rate = $50 / 2.5 = $20/hr.\n\nBenchmarks: U.S. federal minimum wage $7.25/hr; average teen babysitter rate ~$15/hr; entry-level coffee shop ~$13-18/hr. Snow-day hustle outperforms all of them — for a few hours, a few times per winter.",
        hard:
          "Hourly rate = $50 / 2.5 = $20/hr. Significantly above federal minimum wage ($7.25), state minimums ($8-16), and entry-level service-wage benchmarks. Premium reflects demand-window pricing + scarcity of supply.\n\nScaling: a teenager working 4-5 storm events per winter at ~$50 each = $200-250/winter from snow alone. Plus complementary seasonal services (raking, car-washing) raise blended annual rate substantially.",
      },
    },

    // ─── Brainstorm: 3 seasonal services ──────────────────────────────
    {
      kind: 'brainstorm',
      heading: '🌦️ Your 3 Seasonal Services',
      prompt: {
        easy:
          'What 3 SEASONAL services could YOU offer where you live? Snow / leaves / car wash / cold drinks / dog walks / Christmas lights?',
        medium:
          'Brainstorm 3 seasonal services for your geography + season. For each: the demand window, your skill match, and target rate.',
        hard:
          'Identify 3 seasonal services with viable demand windows in your area. For each: window timing, supply-side competition, target premium rate.',
      },
      minItems: 3,
      placeholder: 'e.g. Snow shoveling — when snow falls — $10 per driveway...',
      hints: [
        {
          easy: 'SNOW SHOVELING in winter — $10-$30 per driveway. Fast cash during storms.',
          medium: 'Snow shoveling: winter storm-events, $10-30/driveway, 30-60 min per house. Best demand event of the cold months.',
          hard: 'Snow shoveling: storm-event demand, $10-30/driveway depending on driveway size, premium pricing during overnight + early-morning storm events.',
        },
        {
          easy: 'LEAF RAKING in fall — $15-$30 per yard. ONE big yard = a Saturday\'s work + good pay.',
          medium: 'Leaf raking: 2-4 week peak window in October-November. $15-30/yard. Higher per-job rate than snow but fewer events.',
          hard: 'Leaf raking: fall season, $15-30/yard, 1-2 hour service duration. Concentrated 2-4 week peak window before first hard freeze.',
        },
        {
          easy: 'CAR WASHING in summer — $5-$10 per car. Quick. Easy. Hot days = lines of customers.',
          medium: 'Car washing: summer/early-fall, $5-10 per car. Pop-up tent + bucket + sponges + driveway works. Volume + repeat customers.',
          hard: 'Car washing: summer + early fall, $5-10 ASP, repeatable model with low marginal cost after setup. Compete on speed + quality vs. automated services.',
        },
        {
          easy: 'DOG WALKING in vacation seasons — busy parents pay $5-$10 per walk.',
          medium: 'Dog walking: peak during vacations, summer afternoons, holidays. $5-10 per walk; some kids run multiple dogs simultaneously for compounded rate.',
          hard: 'Dog walking: $5-10/walk; seasonal peak around vacations + holidays. Multi-dog routes optimize $/hr but cap at ~3 dogs/walk for control.',
        },
        {
          easy: 'CHRISTMAS LIGHT HANGING in late November / December — adults pay $50-$100 just to put them up!',
          medium: 'Christmas lights install: $40-$100/house, peak November-December. High-skill barrier (ladders, electrical), but commensurate premium.',
          hard: 'Holiday lights: $40-100/house install, premium for short demand window (Nov-Dec). Safety + skill premium; ladder-work age-appropriateness matters.',
        },
        {
          easy: 'COLD DRINK STAND at a sports field on hot game days — perfect demand window.',
          medium: 'Sports-event drink stand: pop-up demand at games, races, concerts. $1-3/drink, very high-margin. Location intelligence is the differentiator.',
          hard: 'Event-pop-up: low overhead, high-margin, fully demand-driven. Game schedule + location are the optimization variables.',
        },
      ],
      closer: {
        easy: 'Pick the ONE that matches THIS season. Start THIS weekend.',
        medium:
          "Match the service to current weather + your geography. The window is now; the right offering this weekend earns more than the perfect offering next month.",
        hard:
          'Optimize for current-window match. The right service in-window > the better service out-of-window. Service-window match is the binding constraint.',
      },
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Whole Businesses Built on Windows',
      concept: {
        easy:
          'Some HUGE businesses exist ONLY because of seasonal windows. They make a YEAR\'s money in 1-2 months. Same trick. Bigger scale.',
        medium:
          'Entire businesses exist solely to capture seasonal demand windows. Their economics depend on compressing a year\'s revenue into a few weeks of operation.',
        hard:
          'Window-driven businesses operate at extreme seasonality. Annual revenue concentrated in narrow temporal bands; off-season operations minimal or non-existent.',
      },
      examples: [
        {
          emoji: '🎄',
          who: 'Christmas Tree Farms',
          story: {
            easy: 'Christmas tree farms make ~80% of their YEAR\'s money in JUST 4 WEEKS (late November to December). The rest of the year? Mostly closed.',
            medium:
              "Christmas tree farms: ~80% of annual revenue compressed into ~4 weeks (Black Friday → Dec 24). Trees take 7-10 years to grow but sell in a 4-week window. Extreme seasonal concentration.",
            hard:
              "Christmas tree farm revenue model: ~80% of annual revenue in late November + December. Tree cycle 7-10 years; sale window 4 weeks. Operation requires enormous patience + concentrated execution. Industry size ~$2B annually.",
          },
        },
        {
          emoji: '🏖️',
          who: 'Beach Towns',
          story: {
            easy: 'Beach towns like Ocean City make almost ALL their money in summer (June-August). Hot dog stands, ice cream, beach umbrellas — they earn a year\'s revenue in 3 months, then sleep.',
            medium:
              "Coastal tourism economies: 60-80% of annual revenue compressed into 12-16 weeks (Memorial Day → Labor Day). Restaurants, hotels, retail, services all operate at peak intensity. Off-season near-dormancy is structural.",
            hard:
              "U.S. beach-town tourism: peak intensity ~12-16 weeks/year, off-season near-zero. Capital structure adapted to this — hotels operate skeleton staff, retail closes, residents migrate. Pure seasonal economy.",
          },
        },
        {
          emoji: '📊',
          who: 'Tax Accountants',
          story: {
            easy: 'Tax accountants work LIKE CRAZY from January to April (tax season), then chill for the rest of the year. ~70% of their yearly income comes from those 4 months.',
            medium:
              "Tax preparation: ~70% of annual revenue Jan 1-Apr 15. Off-peak: planning, bookkeeping, advisory work at much lower intensity. Industry typical of high-knowledge professional services with fixed annual deadlines.",
            hard:
              "Tax-prep industry concentration: ~70% revenue in Jan-Apr window driven by April 15 federal filing deadline. Professional staff workloads peak at 60-80 hrs/week during the crunch; off-season hours much reduced. Single regulatory deadline drives the entire calendar.",
          },
        },
      ],
      kicker: {
        easy: 'Christmas trees. Beach towels. Tax forms. All BIG businesses. All winning on the same 3-month trick. You can win on a 3-HOUR version.',
        medium:
          "Same window-capture pattern repeats across industries. Christmas tree farms compress 7 years of work into 4 weeks of sales; your snow day compresses 2 hours of work into a season\'s premium. Same architecture, different time-scales.",
        hard:
          'Demand-window pricing models repeat at every time scale. Christmas trees (annual cycle, 4-week window), tax prep (annual cycle, 16-week window), snow removal (event cycle, 3-hour window). Same fundamental dynamic — buyer urgency + supply scarcity = premium pricing.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You now know the secret of the BEST-paying gigs in the world: SHOW UP at the WINDOW. When everyone NEEDS something at once + only YOU show up — you set the price.",
        medium:
          "You\'ve cracked seasonal-services economics: urgency + scarcity = premium pricing. The model scales from a kid with a shovel to a Christmas tree farm. Now go run one.",
        hard:
          "You now understand demand-window labor economics: urgency-driven WTP, supply-side scarcity, and pre-positioning for capture. Generalizes across kid-hustle, seasonal business, and professional services.",
      },
      bonusTip: {
        easy:
          "In 2014, a 15-year-old in Brooklyn named Erik Martin made $14,000 in ONE WINTER shoveling driveways. He just KNOCKED on doors during every storm. The shovel was already in his hand.",
        medium:
          "Erik Martin, 15, Brooklyn, winter 2014: $14,000 net from snow-shoveling services. Method: monitor weather forecasts, pre-flyer streets ahead of storms, knock during peak window. Pure execution at kid scale, captured a real demand-window economy.",
        hard:
          "Erik Martin (Brooklyn 2014) case study: ~$14K seasonal earnings from snow removal at age 15. Demonstrated demand-window economics at micro-scale. Methodology replicable: forecast monitoring + pre-event commitments + first-mover execution + quality service + repeat capture.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'snow-day-hustle',
        emoji: '❄️',
        title: {
          easy: 'Run a real weekend hustle — earn at least $20!',
          medium: 'Execute one weekend service hustle with hourly-rate tracking',
          hard: 'Run one demand-window capture cycle with hourly-rate measurement',
        },
        pitch: {
          easy:
            "This weekend, pick ONE service (shovel snow / rake leaves / wash cars / etc.) and EARN at least $20. Knock on doors. Be polite. Do good work. Track every minute + every dollar.",
          medium:
            "Run one real weekend hustle: pick service, find customers (door-to-door or pre-arranged), execute jobs, track total revenue + time + hourly rate. Compare to baseline allowance/wage.",
          hard:
            "Execute one demand-window capture: service selection, customer acquisition, job execution, post-event measurement (revenue, hours, hourly rate, repeat-customer commitments).",
        },
        steps: [
          {
            emoji: '🎯',
            text: {
              easy: 'Pick ONE service that matches today\'s weather + season.',
              medium: 'Select the service matched to current weather + season.',
              hard: 'Service selection: match to current demand window.',
            },
          },
          {
            emoji: '💰',
            text: {
              easy: 'Decide your PRICE per job ($10-$20 is fair for most kid services).',
              medium: 'Set per-job price. $10-$20 typical for kid-scale services.',
              hard: 'Pricing decision: per-unit ASP matched to local demand-side WTP.',
            },
          },
          {
            emoji: '👨‍👩‍👧',
            text: {
              easy: 'Get a grown-up to help — they should walk with you to make sure it\'s safe.',
              medium: 'Adult accompaniment for door-knocking + service execution. Required for safety.',
              hard: 'Adult supervision for fieldwork: safety compliance, transaction reliability.',
            },
          },
          {
            emoji: '🚪',
            text: {
              easy: 'KNOCK on 5-10 doors. Smile. Offer your service. \"$15 to shovel your driveway?\"',
              medium: 'Door-to-door pitch. Smile + offer + price. ~50% conversion rate typical during demand events.',
              hard: 'Door-to-door customer acquisition. Brief pitch + per-unit pricing. ~50-70% conversion typical at peak window.',
            },
          },
          {
            emoji: '⏱️',
            text: {
              easy: 'TIME each job — how many minutes did it take?',
              medium: 'Time each service event. Log start + finish.',
              hard: 'Time-on-task measurement per service event. Per-unit timing supports later hourly-rate calculation.',
            },
          },
          {
            emoji: '🧮',
            text: {
              easy: 'At the end, count your money + add up your time. Calculate your HOURLY RATE.',
              medium: 'Post-event reconciliation: total revenue, total time, hourly rate calculation.',
              hard: 'Event reconciliation: gross revenue, time-on-task aggregate, realized hourly rate. Compare to baseline.',
            },
          },
        ],
        reflection: [
          {
            key: 'service',
            prompt: {
              easy: 'What service did you do?',
              medium: 'Service offered + window matched',
              hard: 'Service + demand window match',
            },
            type: 'text',
            placeholder: 'Shoveled snow during Saturday storm',
          },
          {
            key: 'revenue',
            prompt: {
              easy: 'How much money did you make total?',
              medium: 'Total revenue from the hustle',
              hard: 'Gross revenue realized',
            },
            type: 'number',
            suffix: '$',
            placeholder: '50',
          },
          {
            key: 'hours',
            prompt: {
              easy: 'How many HOURS did you work?',
              medium: 'Total time on task',
              hard: 'Aggregate time-on-task',
            },
            type: 'number',
            suffix: 'hours',
            placeholder: '2.5',
          },
          {
            key: 'rate',
            prompt: {
              easy: 'Calculate: money ÷ hours = $ per hour',
              medium: 'Calculated hourly rate',
              hard: 'Realized hourly rate',
            },
            type: 'number',
            suffix: '$/hr',
            placeholder: '20',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What surprised you about running a hustle?',
              medium: 'Biggest insight from the hustle',
              hard: 'Largest insight delta from running a real demand-window capture',
            },
            type: 'longtext',
            placeholder: 'I didn\'t realize how many people would say yes…',
          },
        ],
        parentNote: {
          easy: "Walk with the kid. Stay nearby for the work. The point is the hustle + tracking — adult presence is for safety + reassurance to neighbors.",
          medium:
            "Accompaniment is the parent\'s role. Walk along, observe interactions, do not solicit on the kid\'s behalf. Safety is the priority; the hustle agency is the kid\'s.",
          hard:
            "Adult presence: safety + neighbor reassurance only. The customer-facing interactions + execution + financial tracking belong to the kid. Avoid scaffolding the pitch.",
        },
        printables: {
          trackers: [
            {
              title: 'Hustle Tracker',
              note: 'One row per job. Time each one — that\'s how you find your hourly rate.',
              columns: ['Customer / Address', 'Service', 'Time Spent', '$ Earned', '"Repeat Next Time?" (Y/N)'],
              rows: 8,
            },
          ],
          worksheets: [
            {
              title: 'Hustle Plan',
              blocks: [
                {
                  label: '❄️ My service',
                  hint: 'One specific service for THIS weather.',
                  lines: 1,
                },
                {
                  label: '💰 My price per job',
                  equation: '$ _______  per  _______',
                },
                {
                  label: '🎯 Total revenue target',
                  equation: '_______ jobs × $ _______ = $ _______',
                },
                {
                  label: '📍 Where I\'ll go (streets to door-knock)',
                  lines: 3,
                },
                {
                  label: '🗣️ My exact pitch (one sentence)',
                  hint: 'Practice it out loud 3 times!',
                  lines: 3,
                },
                {
                  label: '🛠️ What I need (shovel, rake, bucket, etc.)',
                  lines: 3,
                },
                {
                  label: '👨‍👩 Grown-up walking with me',
                  lines: 1,
                },
                {
                  label: '⏱️ My hourly rate calculation',
                  hint: 'Total money / total hours = ?',
                  equation: '$ _______  / _______  hrs  =  $ _______ /hr',
                },
                {
                  label: '🔁 Customers who said "call me next time"',
                  hint: 'List names. These are your repeat customers.',
                  lines: 3,
                },
              ],
            },
          ],
          signs: [
            {
              emoji: '❄️',
              headline: 'SAVE TIME — I\'LL DO IT!',
              subline: 'Driveways, yards, cars — fast + friendly',
              pricePlaceholder: 'Starting at $___',
              accent: '#65C9FF',
            },
          ],
          checklists: [
            {
              title: 'Hustle Day Checklist',
              items: [
                'A grown-up walking with me',
                'The right TOOLS for the service (shovel/rake/bucket/sponges)',
                'Warm clothes + gloves if cold',
                'Water bottle',
                'Printed tracker + pen',
                'Phone or watch for timing each job',
                'My PITCH practiced out loud',
                'A SAFE route mapped — 5-10 nearby houses',
                'Cash box or pocket for collecting payment',
                'Change in coins/small bills',
              ],
              note: 'Tip: knock during the FIRST hour of a snowstorm. People are JUST realizing they need help — they say yes more often.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
