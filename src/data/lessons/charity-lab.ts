/**
 * Charity Lab — goal-driven good (Phase 1 capstone).
 *
 * Goal: take a kid from "charity = leftover coins for sad ads" → to
 * "charity is a real PROJECT with a goal, a team, and a deadline, run
 * with the same discipline as a business" → to running one real
 * mini-fundraiser for a real cause this month.
 *
 * Beat order:
 *   intro → decision (pick a cause: animals/food bank/nursing home) →
 *   think-deeper (why do most charity projects fizzle?) → concept-cards
 *   (Cause/Goal/Recruit/Track) → calc-challenge (bake sale math:
 *   revenue + donations − supplies = $50) → brainstorm (3 mini-
 *   fundraisers you could actually run) → connect (Mikaila Ulmer,
 *   Charity:Water, Tom's Shoes) → outro → real-world-mission
 *   (run one real $20-goal fundraiser).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'charity-lab',
  themeKey: 'charity',
  emoji: '❤️',
  title: 'Charity Lab',
  subtitle: {
    easy: 'Use what you\'ve learned about business — for good.',
    medium:
      'Charity isn\'t leftover coins. It\'s a real project: pick a cause, set a goal, recruit a team, deliver. Just like a business — but for good.',
    hard:
      'Mission-driven project execution: cause selection, goal-setting, coalition-building, and outcomes measurement applied to kid-scale philanthropy.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'love',
      text: {
        easy:
          "You\'ve learned how to save, invest, price, pitch, negotiate, and invent. Now the big question: what is all that POWER actually FOR? Today: charity. Not the sad-commercial kind — the kind where YOU run a project, hit a goal, and change a real person\'s day.",
        medium:
          "All the business skills you\'ve learned — pricing, negotiation, design, saving — get sharper when you point them at a cause bigger than yourself. Today: how to run a real charity project with the same discipline as a real business. Goal → team → execution → outcome.",
        hard:
          "Mission-driven project execution is identical in structure to commercial project execution: target, plan, coalition, deliverables. The variables that distinguish good philanthropy from feel-good philanthropy are measurability, focus, and follow-through.",
      },
    },

    // ─── Decision: pick a cause ────────────────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 Pick Your Cause',
      scenario: {
        easy:
          "You want to help someone. THREE causes near your town all need help. You only have time for ONE this month. You can\'t pick them all.",
        medium:
          "Three local causes are all looking for help. You\'ve got one month and a small team (you + maybe a sibling or friend). You can\'t take on all three at once.",
        hard:
          "Resource-constrained project selection. Three available causes, one month, small team. Bandwidth limit forces choice. Pick:",
      },
      question: {
        easy: 'Which one do you pick?',
        medium: 'Which cause do you commit to?',
        hard: 'Pick your project:',
      },
      choices: [
        {
          label: {
            easy: 'Animal shelter — they need food, blankets, and walkers.',
            medium: 'Local animal shelter — supplies drive + dog-walking volunteers',
            hard: 'Local animal shelter — material donations + volunteer recruitment',
          },
          feedback: {
            easy:
              "Great pick! Animal shelters have clear needs and people LOVE helping animals. Easy to get friends and family to donate.",
            medium:
              "Strong choice. Concrete needs list (food, blankets, toys), high emotional resonance, easy to mobilize donors. Lower-friction first project.",
            hard:
              "Aligned. High-affinity cause + concrete material needs + measurable outcomes (pounds of food, hours volunteered) = high-execution-feasibility.",
          },
          isPreferred: true,
        },
        {
          label: {
            easy: 'Food bank — they need cans, money, and people to sort food.',
            medium: 'Food bank — packaged-food drive + sorting volunteers',
            hard: 'Food bank — non-perishables drive + volunteer hours',
          },
          feedback: {
            easy:
              "Also great! Food banks help people every single day. Cans are easy to collect — almost every kitchen has extras.",
            medium:
              "Solid. Food banks scale your impact (every $1 typically becomes ~$5 of food due to bulk-purchasing). Material drive easier than money drive for first-timers.",
            hard:
              "Aligned. Food banks have high impact-leverage on contributed dollars (~5× multiplier on direct cash, lower on in-kind). Material drives have easier ask-conversion than cash.",
          },
          isPreferred: true,
        },
        {
          label: {
            easy: 'Nursing home — they need visitors, cards, and music.',
            medium: 'Nursing home — letter-writing campaign + visiting hours',
            hard: 'Nursing home — companionship + handmade-card distribution',
          },
          feedback: {
            easy:
              "Beautiful pick! Older people get LONELY. A simple visit or a handmade card can make their whole week. And it costs almost nothing.",
            medium:
              "Underappreciated choice. Companionship is the most-needed and least-funded form of senior care. Letter campaigns scale easily, visits are high-impact-per-hour.",
            hard:
              "Aligned. Senior loneliness is a measurable health-outcome driver (correlated with all-cause mortality at ~1.5×). Low-cost interventions (letters, visits) have outsized impact per hour.",
          },
          isPreferred: true,
        },
      ],
      realWorldReveal: {
        easy:
          "Surprise: there\'s NO wrong answer here. Picking ANY ONE of these and finishing the project beats picking all three and finishing nothing. The biggest mistake in charity is not picking.",
        medium:
          "There is no wrong choice here. The decision\'s value is in the COMMITMENT, not the cause. Almost every charity project that fails fails because the team tried to help everyone instead of finishing one thing well.",
        hard:
          "Causes are roughly interchangeable from an impact-on-impact perspective at first-project scale. Selection effort > 5 minutes is wasted. The dominant failure mode in volunteer projects is overscope, not miscause.",
      },
    },

    // ─── Think-deeper: why most charity projects fizzle ───────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Do Most Charity Projects FIZZLE?',
      intro: {
        easy: "Most people SAY they want to help. Very few actually finish a project. Why?",
        medium: "Most charity projects start with great energy and end with… nothing shipped. Why does the energy dissipate?",
        hard: 'What are the dominant failure modes in volunteer project execution?',
      },
      layers: [
        {
          question: {
            easy: 'What\'s the FIRST thing that goes wrong?',
            medium: 'What\'s the most common starting mistake?',
            hard: 'What\'s the most frequent root cause of charity-project failure?',
          },
          reveal: {
            easy:
              "The goal is too VAGUE. \"Help the planet\" is huge. \"Help homeless people\" is huge. You can\'t finish HUGE. You CAN finish \"collect 50 cans for the food bank by Friday.\"",
            medium:
              "Vague goals. \"Help animals\" doesn\'t have an end. \"Raise $50 for the shelter by April 15\" does. Specific + measurable + deadlined goals get finished; vague goals get abandoned.",
            hard:
              "Unmeasurable goals dominate failure modes. SMART (specific/measurable/achievable/relevant/time-bound) targets convert intentions to projects. Aspirational targets remain aspirations.",
          },
        },
        {
          question: {
            easy: 'What\'s the SECOND thing that fizzles a project?',
            medium: 'Second-biggest failure mode?',
            hard: 'Second-most-common root cause of failure?',
          },
          reveal: {
            easy:
              "Doing it ALONE. One person gets tired. A team of 3 keeps each other going. \"I\'ll do it\" feels strong but ends fast.",
            medium:
              "Solo effort. Volunteer projects with 1 person have a ~70% drop-off rate within 2 weeks. Three-person teams sustain ~3× longer. Recruiting beats heroism.",
            hard:
              "Solo execution. Coalition size of 1 is the strongest negative predictor of completion. Energy decay is sharply faster in single-person teams than in 2-3 person teams.",
          },
        },
        {
          question: {
            easy: 'What\'s the THIRD reason projects die?',
            medium: 'Third-most-common reason a charity project dies?',
            hard: 'What\'s the third dominant failure mode?',
          },
          reveal: {
            easy:
              "No DEADLINE. \"I\'ll do it someday\" turns into \"never.\" A real day on the calendar makes it real.",
            medium:
              "No deadline. Projects without a target date drift forever. Adding a specific calendar deadline (\"by April 15\") increases completion rates dramatically — even when the deadline is self-imposed.",
            hard:
              "Time-boundedness is a strong predictor of completion. Open-ended projects suffer from Parkinson\'s effect (work expands to fill available time) — for volunteer work this approaches infinity.",
          },
        },
        {
          question: {
            easy: 'What\'s the FIX for all three of those?',
            medium: 'What\'s the structural fix?',
            hard: 'What\'s the practical antidote?',
          },
          reveal: {
            easy:
              "Write ONE sentence: \"I\'ll raise $XX with NAMES by DATE for CAUSE.\" That single sentence kills all three problems at once.",
            medium:
              "Write a one-sentence project charter: \"[Team] will raise [$amount] for [cause] by [date] doing [activity].\" Five blanks. One sentence. Solves goal vagueness, solo work, and timing in one move.",
            hard:
              "Project charter (one sentence) addresses scope, coalition, target, and deadline simultaneously. Charter-bearing projects out-complete charter-less projects by a wide margin in volunteer settings.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Charity Project 4-Step',
      subheading: 'Real philanthropy follows the same shape as real business. Here\'s the loop.',
      cards: [
        {
          emoji: '❤️',
          title: 'Cause',
          desc: {
            easy: 'A CAUSE is the WHY of your project. Pick a real problem you actually care about. Animals? Hungry people? Lonely grandparents? Earth? PICK ONE.',
            medium:
              'The cause is your why. The choice between causes is less important than committing to one. Specific causes beat general ones (\"food bank\" > \"hungry people\").',
            hard:
              'Cause specification narrows scope. Bounded causes (e.g., local food bank vs. global hunger) yield finishable projects. Aspirational scope undermines completion.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🎯',
          title: 'Goal',
          desc: {
            easy: 'A GOAL is a SPECIFIC number + DATE. \"Raise $50 by Friday.\" Not \"raise some money sometime.\" Numbers + dates = REAL goals.',
            medium:
              'A goal = number + deadline. \"Raise $100 for the shelter by April 30.\" Add quantity and time and the wish becomes a project.',
            hard:
              'SMART goals: specific + measurable + achievable + relevant + time-bound. Each missing dimension reduces completion probability. All five present = strong commitment device.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '👥',
          title: 'Recruit',
          desc: {
            easy: 'RECRUIT means asking other people to help. 1 kid = tired by Tuesday. 3 kids = a TEAM. More people = more energy + more donations.',
            medium:
              'Recruit before you launch. A 2-3 person team sustains energy through the project. The recruiting itself is also fundraising — every helper brings their own network.',
            hard:
              'Coalition building is a force multiplier. Each additional volunteer brings ~10-30 personal network connections, so coalition members multiply both labor AND donor base.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '📊',
          title: 'Track',
          desc: {
            easy: 'TRACK means writing down what you\'ve done. Money raised. People helped. Cans collected. If you don\'t track it, you don\'t know if you\'re winning.',
            medium:
              'Track quantitatively. Hours, dollars, items, smiles. Tracking creates momentum (visible progress) and finalizes the project (deliverable evidence).',
            hard:
              'Outcomes measurement is the difference between feel-good philanthropy and effective philanthropy. Even rough tracking (hours, dollars, units) improves project outcomes via attention focus.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: bake sale math ───────────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: Bake Sale Day',
      setup: {
        easy: 'You run a bake sale for the shelter. You spent $30 on supplies. You sold 50 cookies at $1 each. People also DONATED an extra $30. How much goes to the SHELTER?',
        medium:
          "Your bake sale: $30 in supplies, 50 cookies sold at $1 each, plus $30 in extra donations from kind shoppers. What\'s the net amount you can give the shelter?",
        hard:
          "Bake-sale unit economics: $30 COGS, 50 units sold × $1 ASP = $50 revenue, $30 unsolicited donations. Compute net distributable amount.",
      },
      problem: {
        givens: [
          { label: 'cookies sold', value: 50 },
          { label: 'price/cookie', value: 1, suffix: '$' },
          { label: 'extra donations', value: 30, suffix: '$' },
          { label: 'supplies cost', value: 30, suffix: '$' },
        ],
        answerLabel: 'To the shelter',
        answer: 50,
        suffix: '$',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          'Step 1: Cookie sales = 50 × $1 = $50. Step 2: Add donations = $50 + $30 = $80 raised. Step 3: Subtract supplies = $80 − $30 = $50 goes to the shelter.\n\nThat $50 buys ~50 lbs of dog food at most shelters. You just paid for 50 days of meals.',
        medium:
          'Revenue = $50 (cookies) + $30 (donations) = $80 gross. Net of $30 supplies = $50 distributable. The donations boosted the project by ~37% — they\'re where most charity bake sales actually win.',
        hard:
          'Gross intake: $80 ($50 sales + $30 unsolicited donations). Net contribution margin: $50 after supplies. Donations represent ~37.5% of total — typical for kid-run fundraisers where shopper-driven generosity exceeds the price-anchored sale. Optimization implication: lean into the social context, not the unit price.',
      },
    },

    // ─── Brainstorm: 3 fundraisers you could run ──────────────────────
    {
      kind: 'brainstorm',
      heading: '💡 Your 3 Fundraiser Ideas',
      prompt: {
        easy:
          'List 3 different mini-fundraisers you could actually run THIS MONTH. Be real — things you could do in a weekend.',
        medium:
          'Brainstorm 3 mini-fundraisers — each one runnable this month. Each should fit in a weekend, need 1-3 helpers, and aim for a $20-$100 target.',
        hard:
          'Generate 3 candidate fundraiser projects, each with: format, expected revenue ($20-$100), team size (1-3), and runtime (≤ 1 weekend).',
      },
      minItems: 3,
      placeholder: 'e.g. Bake sale on Saturday outside the library...',
      hints: [
        {
          easy: 'Bake sale: cookies + lemonade. Easy. Profitable. Kids LOVE running them.',
          medium: 'Bake sale: classic, low-friction, high-margin. Best margins on items requiring <$0.20 in ingredients sold for $1+. Cookies, brownies, lemonade, popsicles.',
          hard: 'Bake-sale unit economics: COGS ~10-20%, ASP $1-$3, daily revenue $50-$200 with traffic. Highest-conversion vertical for first-time fundraisers.',
        },
        {
          easy: 'Chore-a-thon: get sponsored per chore. \"Every dish I wash this week = $1 to the food bank.\"',
          medium: 'Chore-a-thon: sponsor-per-task. \"$1 per dishwashing, $2 per dog walk, $5 per yard tidy.\" Pre-secure sponsors before starting.',
          hard: 'Sponsorship model: collect commitments per measurable unit of work. Pre-commit base ($20-$50) before execution starts, scale via marginal sponsor adds.',
        },
        {
          easy: 'Toy/book drive: ask everyone you know for one good toy or book. Hand-deliver to the shelter or library.',
          medium: 'In-kind drive: collect specific items (books, toys, blankets, cans). Lower cash, higher item-count, easy to publicize.',
          hard: 'In-kind drives have higher participation rates than cash drives (lower ask-friction). Optimal for projects emphasizing volume over cash value.',
        },
        {
          easy: 'Car/bike/scooter wash: a quick-and-easy way to make $30-$50 in a Saturday.',
          medium: 'Cleaning service: car wash, bike wash, sidewalk sweep. Suggested donation $3-$5. Highest revenue/hour of any fundraiser format.',
          hard: 'Cleaning services: time-based revenue model, suggested donation vs. fixed price, $20-$80/hr per team typical. High variance based on location.',
        },
        {
          easy: 'Lemonade stand for the cause: same as a regular lemonade stand, but ALL profit goes to your charity. Tell people!',
          medium: 'Cause-tagged lemonade: identical operations to regular stand, but with the cause prominently displayed. People pay 2-3× more when they see who benefits.',
          hard: 'Cause-tagging: meta-analysis shows WTP lift of 50-200% when proceeds visibly benefit a cause. Signage placement matters more than price.',
        },
        {
          easy: 'Art sale: draw or paint and sell at $2-$5 each. People LOVE kid art for the cause.',
          medium: 'Art sale: handmade pieces at $2-$5. Margin essentially 100%. Cause-tagged kid art outperforms cause-tagged adult art on conversion.',
          hard: 'Handmade art has effectively zero COGS for the producer. Cause-tagged pricing supports $5-$10 ASP. High margin × emotional appeal = strong fundraiser.',
        },
      ],
      closer: {
        easy: 'Pick ONE. Pick the one that sounds the most FUN. Fun ones get finished.',
        medium:
          'Pick the one you\'d enjoy running. Volunteer projects you enjoy get finished; the others stall before launch. Joy is a completion engine.',
        hard:
          'Selection criterion: intrinsic enjoyment > expected revenue. Kids/teams sustain higher effort on enjoyable formats, which more than offsets revenue-format differences.',
      },
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Kids Who Actually Did It',
      concept: {
        easy:
          'You don\'t need to be a grown-up to run a real charity project. Some of the most famous charity projects in the world were STARTED by kids.',
        medium:
          'Some of the most successful charity projects in modern history were launched by kids — exact same loop you just learned. The age was not the bottleneck.',
        hard:
          'Kid-founded philanthropic ventures regularly outperform adult-founded ones on engagement-per-dollar and viral reach. Constraints on credibility/professionalism are less binding than commonly assumed.',
      },
      examples: [
        {
          emoji: '🐝',
          who: 'Mikaila Ulmer',
          story: {
            easy: 'When Mikaila was 4, she got stung by a BEE. Instead of being scared, she started selling honey-lemonade to SAVE bees. By age 11 she was on Shark Tank. Today she\'s 20, runs Me & The Bees, and is in Whole Foods nationwide.',
            medium:
              "Mikaila Ulmer started Me & The Bees Lemonade at age 4 after getting stung twice in one week. Her great-grandmother\'s flaxseed recipe + a save-the-bees mission. By 11 she pitched on Shark Tank ($60K from Daymond John). Today Me & The Bees is in Whole Foods nationwide and she\'s donated to bee research.",
            hard:
              "Mikaila Ulmer / Me & The Bees Lemonade. Founded 2009 age 4; Shark Tank 2015 age 11 ($60K deal); national Whole Foods distribution by ~2018. Cause-anchored product — bee conservation — drove both purchase intent AND media coverage. Mission-led brand exceeded category benchmarks on retention and PR.",
          },
        },
        {
          emoji: '💧',
          who: 'Rachel Beckwith',
          story: {
            easy: 'For her 9th birthday, Rachel asked everyone to skip presents and donate $9 to Charity:Water instead. She wanted to raise $300. After she died in a car accident, her birthday fund went VIRAL and raised $1.27 MILLION for clean water.',
            medium:
              "Rachel Beckwith\'s 9th-birthday Charity:Water campaign targeted $300. After her tragic death in a car accident weeks later, the campaign went viral and raised $1.27M — funding clean water for 37,000 people. A 9-year-old\'s small ask scaled to global impact.",
            hard:
              "Rachel Beckwith / Charity:Water, 2011. Campaign target $300; post-incident viral spread → $1.27M raised funding clean water access for ~37,000 people in Ethiopia. Demonstrates the asymmetric upside of cause-tagged campaigns + the social-network amplification effect specifically strong for kid-led campaigns.",
          },
        },
        {
          emoji: '👟',
          who: 'TOMS Shoes',
          story: {
            easy: 'TOMS Shoes does \"buy one, give one\" — every pair you buy, they give a pair to a kid who needs them. Started by ONE person who saw kids in Argentina without shoes.',
            medium:
              "TOMS Shoes (Blake Mycoskie, 2006) pioneered the one-for-one model: every pair sold donates a pair. They\'ve donated 100M+ pairs of shoes globally. Cause-tagged model became a category template — eyewear (Warby Parker), backpacks (STATE), water (LifeStraw) all adapted it.",
            hard:
              "TOMS Shoes, founded 2006. One-for-one model: 100M+ pairs donated, ~$625M revenue at peak. Spawned a generation of cause-tagged consumer brands (Warby Parker, Bombas, etc.). Mission-led economics added 50-100bps gross margin AND lifted brand affinity vs. category peers.",
          },
        },
      ],
      kicker: {
        easy: 'A 4-year-old. A 9-year-old. One adult. Same loop. Same impact. You don\'t need to wait to start.',
        medium:
          'Same loop you just learned: pick a cause, set a goal, recruit, execute. Different scales — identical mechanics. The earlier you run the loop the more times you get to compound it.',
        hard:
          'Loop-execution practice compounds across decades. Early-career philanthropic operators develop substantially deeper mission-execution capability than late-starters at equivalent capital scales.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'love',
      text: {
        easy:
          "You\'ve just put your business brain to work for someone else. That\'s the secret of every great charity project: real planning + real numbers + a real heart.",
        medium:
          "You\'ve closed Phase 1 by pointing your business skills at a cause. The same focus that builds a lemonade stand builds a fundraiser. Now run yours.",
        hard:
          "Phase 1 capstone. You now have a complete toolkit: economic concepts (compounding, ownership), real-business case studies (location, scarcity), creative skills (invention, negotiation), and mission-driven execution (this lesson). Apply consistently.",
      },
      bonusTip: {
        easy:
          "Real fact: a 6-year-old in Texas raised $19,000 selling lemonade for childhood cancer research. ONE summer. ONE kid. $19,000. You\'re fully capable of way more than you think.",
        medium:
          "6-year-old Alexandra \"Alex\" Scott started a lemonade stand to fight childhood cancer in 2000 — she had cancer herself. By the time she passed at age 8, she\'d raised $1M+. Alex\'s Lemonade Stand Foundation has now raised $300M+ for childhood cancer research. From a kid with cancer. With lemonade.",
        hard:
          "Alex Scott / Alex\'s Lemonade Stand Foundation, founded 2000 age 4 (during cancer treatment). $1M+ raised in lifetime; foundation cumulative >$300M for pediatric oncology research. One of the largest kid-founded philanthropic organizations in history. Same loop. Personal annoyance + commitment + duration.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'charity-lab',
        emoji: '❤️',
        title: {
          easy: 'Run a REAL mini-fundraiser this month!',
          medium: 'Execute one complete mini-fundraiser cycle ($20+ target)',
          hard: 'Complete one full project loop: cause → goal → team → execution → delivery',
        },
        pitch: {
          easy:
            "Pick a cause. Pick a goal. Get a friend or sibling. Run a small fundraiser. Hand the money or stuff to the cause. Take a photo.",
          medium:
            "Run a complete kid-scale charity project: select cause, set a $20+ target, recruit 1-2 helpers, execute one weekend, deliver the proceeds. Document each phase.",
          hard:
            "Execute end-to-end: cause selection, SMART target, coalition formation, single-weekend execution, outcomes delivery + measurement.",
        },
        steps: [
          {
            emoji: '❤️',
            text: {
              easy: 'Pick ONE cause you actually care about. Don\'t spend more than 5 minutes picking.',
              medium: 'Select the cause. Don\'t over-think — cause variance matters less than commitment.',
              hard: 'Cause selection ≤ 5 minutes. Selection-effort beyond that is overhead.',
            },
          },
          {
            emoji: '🎯',
            text: {
              easy: 'Write ONE sentence with your goal, your team, your deadline, and your activity.',
              medium: 'Draft the project charter: one sentence covering team + amount + cause + date + activity.',
              hard: 'Produce a one-sentence charter: [team] will raise [$amount] for [cause] by [date] via [activity].',
            },
          },
          {
            emoji: '👥',
            text: {
              easy: 'Recruit 1-2 helpers. Friends, siblings, cousins. Three brains > one.',
              medium: 'Recruit 1-2 collaborators before launching. Solo projects rarely finish.',
              hard: 'Coalition formation: secure 1-2 committed collaborators with defined roles before kickoff.',
            },
          },
          {
            emoji: '🪧',
            text: {
              easy: 'Make a sign that says WHO you\'re helping. People donate way more when they see the cause.',
              medium: 'Display the cause prominently. Cause-tagged signage lifts WTP by 50-200% over generic.',
              hard: 'Cause-tagged signage with specific beneficiary increases conversion + WTP. Make beneficiary specific, not categorical.',
            },
          },
          {
            emoji: '📊',
            text: {
              easy: 'Track everything: what you spent, what you raised, who helped. Photo it!',
              medium: 'Track inputs (supplies, hours) and outputs (revenue, donations). Document with photos.',
              hard: 'Maintain quantitative tracking: COGS, revenue, donations, hours. Photo evidence at each phase.',
            },
          },
          {
            emoji: '🎁',
            text: {
              easy: 'HAND-DELIVER the money or stuff to the cause. Take a photo when you do it!',
              medium: 'Personally deliver. The handoff is the highest-impact moment for the kid and the recipient.',
              hard: 'Personal delivery is the dominant memorable moment in volunteer projects. Schedule it deliberately.',
            },
          },
        ],
        reflection: [
          {
            key: 'cause',
            prompt: {
              easy: 'Who did you help?',
              medium: 'Your cause and beneficiary',
              hard: 'Cause + specific beneficiary org',
            },
            type: 'text',
            placeholder: 'Local animal shelter — Riverdale Rescue',
          },
          {
            key: 'raised',
            prompt: {
              easy: 'How much did you raise (in money OR things)?',
              medium: 'Total raised ($ + in-kind)',
              hard: 'Realized outcome — cash + in-kind value',
            },
            type: 'text',
            placeholder: '$45 + 12 cans of dog food',
          },
          {
            key: 'team',
            prompt: {
              easy: 'Who helped you?',
              medium: 'Your team',
              hard: 'Coalition members and roles',
            },
            type: 'text',
            placeholder: 'Me, my sister, my friend Maya',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What surprised you about doing this?',
              medium: 'Biggest surprise from running the project',
              hard: 'Largest insight delta from running vs. planning',
            },
            type: 'longtext',
            placeholder: 'I didn\'t expect strangers to be so generous when…',
          },
        ],
        parentNote: {
          easy: "Help with delivery logistics (driving, scheduling). Otherwise let the kid run it — that\'s the whole point.",
          medium:
            'Provide transport and adult presence for the public-facing portion. Resist the urge to organize for them — the discipline IS the lesson. The bake sale will be uneven; that\'s fine.',
          hard:
            "Logistic enablement only (transportation, parental presence in public). Resist scope optimization — first-project execution discipline matters more than yield. Recipient organizations welcome small kid-led drop-offs; coordinate ahead.",
        },
        printables: {
          trackers: [
            {
              title: 'Project Tracker',
              note: 'Log every step so you have receipts at the end.',
              columns: ['Date', 'What we did', 'Money in', 'Items in', 'Notes'],
              rows: 8,
            },
          ],
          worksheets: [
            {
              title: 'Charity Project Charter',
              blocks: [
                {
                  label: '❤️ My cause',
                  hint: 'Specific. Local if possible.',
                  lines: 2,
                },
                {
                  label: '🎯 My goal ($ AND/OR number of items)',
                  hint: 'A real number. Start small if it\'s your first time.',
                  equation: '$ _______  or  _______ items',
                },
                {
                  label: '📅 My deadline',
                  hint: 'Pick a real date. Within 4 weeks of starting is best.',
                  lines: 1,
                },
                {
                  label: '👥 My team',
                  hint: 'Names of 1-3 helpers. Get them to commit BEFORE you start.',
                  lines: 2,
                },
                {
                  label: '🛠️ My activity',
                  hint: 'Bake sale? Lemonade stand? Toy drive? Pick ONE.',
                  lines: 2,
                },
                {
                  label: '📝 My one-sentence charter',
                  hint: '[Team] will raise [$amount] for [cause] by [date] doing [activity].',
                  lines: 3,
                },
                {
                  label: '📞 Who I\'ll hand-deliver to',
                  hint: 'Look them up. Call ahead so they\'re expecting you.',
                  lines: 2,
                },
                {
                  label: '📸 Photo plan',
                  hint: 'What 3 photos will tell the story? (Setup, sale, handoff.)',
                  lines: 3,
                },
              ],
            },
          ],
          signs: [
            {
              emoji: '❤️',
              headline: 'HELP US RAISE FOR',
              subline: 'EVERY $1 GOES TO THE CAUSE!',
              pricePlaceholder: 'Suggested donation: $___',
              accent: '#FF65C5',
            },
          ],
          checklists: [
            {
              title: 'Charity Project Day Checklist',
              items: [
                'Project charter written + posted somewhere visible',
                'Team confirmed for the day-of',
                'Cause-named sign (printed from this pack!)',
                'Tracker sheet + pen',
                'Phone or camera for photos',
                'Cash box or jar with $5 in change',
                'Whatever you\'re selling/collecting (cookies, books, etc.)',
                'Permission from a grown-up + location confirmed',
                'Phone number of the recipient org for hand-delivery',
                'Water bottles for the team',
              ],
              note: 'Tip: tell EVERYONE you know it\'s happening 2-3 days before. Word of mouth doubles the day-of turnout.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
