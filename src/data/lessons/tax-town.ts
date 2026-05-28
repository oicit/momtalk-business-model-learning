/**
 * Tax Town — what taxes actually pay for.
 *
 * Goal: take a kid from "taxes are the bad thing grown-ups complain
 * about" → to "taxes are how we PAY for the big things no one family
 * can buy alone: roads, schools, firefighters" → to actually walking
 * their neighborhood and decoding which things in front of them are
 * tax-funded.
 *
 * Reuses existing 'taxes' theme + existing 'tax-whiz' card (just hook
 * up awardedBy: 'tax-town').
 *
 * Beat order:
 *   intro → decision (Kid Town mayor: spend / save / build shared
 *   stuff) → think-deeper (why can't everyone just buy their own?) →
 *   concept-cards (Tax/Public Good/Budget/Trade-off) → calc-challenge
 *   (Kid Town budget balancing) → brainstorm (3 tax-funded things you
 *   USE) → connect (highways, schools, parks, military, social
 *   security) → outro → mission (Tax Detective neighborhood walk).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'tax-town',
  themeKey: 'taxes',
  emoji: '🏛️',
  title: 'Tax Town',
  subtitle: {
    easy: 'Where does tax money REALLY go? Spoiler: lots of stuff you already use.',
    medium:
      'Taxes pay for the things no one family can buy alone — roads, schools, firefighters, parks. Today: see them, name them, value them.',
    hard:
      'Public goods provision, tax policy as collective-action solution, and the trade-offs of tax-funded vs. private-funded services.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'thinking',
      text: {
        easy:
          "Grown-ups groan about TAXES. But here\'s a secret: taxes paid for your school, your library, the road you walked on today, AND the firefighter who\'d save your house. Without taxes, NONE of those exist. Today: find out where the money actually goes.",
        medium:
          "The complaint about taxes is universal — and so is the use of what taxes buy. Today: how taxes work, what they fund, why we use them instead of every family buying their own school/road/fire department, and the actual trade-offs at the town level.",
        hard:
          "Taxation is a collective-action solution to public-goods provision. Today: economic logic of public goods, free-rider problem, the spectrum from pure-public to pure-private goods, and policy trade-offs at scale.",
      },
    },

    // ─── Decision: Kid Town mayor ─────────────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 You\'re the Mayor of Kid Town',
      scenario: {
        easy:
          "Surprise — you\'re the mayor of Kid Town! There are 100 kids. Each kid pays you $1 every week in tax. That\'s $100 every week to spend. What do you do with it?",
        medium:
          "Kid Town has 100 residents (kids). The town collects $1/kid/week → $100/week → $5,200/year. You\'re the mayor. How do you allocate the budget?",
        hard:
          "Municipal-scale budget allocation. Tax base = 100 residents × $52/yr = $5,200 annual revenue. Three competing strategic uses on the table.",
      },
      question: {
        easy: 'What do you do with the money?',
        medium: 'How do you spend it?',
        hard: 'Pick the allocation strategy:',
      },
      choices: [
        {
          label: {
            easy: 'Spend it ALL on candy and treats for kids who pay the most',
            medium: 'Distribute as cash bonuses to top-paying residents',
            hard: 'Redistribute to high-contributors as direct transfers',
          },
          feedback: {
            easy:
              "Fun for a week! Then... no playground. No library. No safe streets. Kids stop paying because they see no benefit. Tax revenue crashes. You get fired.",
            medium:
              "Politically and economically broken. If taxes flow back as transfers to contributors, the collective-action benefit disappears. Residents stop seeing tax value and stop complying. Revenue collapses.",
            hard:
              "Sub-optimal — the entire collective-action premise of taxation is to fund non-excludable goods. Pure redistribution back to payers eliminates the public-good rationale and triggers compliance collapse.",
          },
        },
        {
          label: {
            easy: 'Save it all in a vault — keep all the money safe',
            medium: 'Hoard the surplus — no current spending, just accumulation',
            hard: 'Pure surplus accumulation — defer all spending',
          },
          feedback: {
            easy:
              "Hmm. Kids paid in for... a big pile of unused money? They\'ll wonder what they\'re paying for. Saving SOME for emergencies = smart. Saving ALL = useless.",
            medium:
              "Pure hoarding wastes the collective-action opportunity. Kids paid for shared benefits; never delivering them undermines tax legitimacy. Reasonable reserves (~10% of budget) are smart; 100% hoarding is not.",
            hard:
              "Sub-optimal. The opportunity cost of unspent revenue equals the foregone public-goods benefit. Reasonable contingency reserves are warranted; absent capital programs in the queue, hoarding produces deadweight loss.",
          },
        },
        {
          label: {
            easy: 'Buy things ALL kids share — playground, library, free water!',
            medium: 'Fund shared public goods — playground, library, water fountain, free events',
            hard: 'Allocate to non-excludable public goods with broad benefit',
          },
          feedback: {
            easy:
              "YES! Now every kid in town gets to USE what they paid for. That\'s exactly what real cities do with real taxes. Roads, schools, parks, firefighters — all things EVERYONE shares.",
            medium:
              "Aligned with real municipal practice. Public goods funded from taxation deliver benefits broadly. The playground/library/water-fountain pattern at kid scale = roads/schools/parks at city scale. Same logic.",
            hard:
              "Optimal. Public goods (non-excludable, non-rival in consumption) cannot be efficiently provided by individual buyers due to free-rider dynamics. Collective taxation funds them precisely because no private buyer captures the full benefit.",
          },
          isPreferred: true,
        },
      ],
      realWorldReveal: {
        easy:
          "This is EXACTLY how every city, state, and country works. Your real town collects taxes from grown-ups, then spends it on roads, schools, parks, police, firefighters, libraries. Real Kid Town — just bigger.",
        medium:
          "Real-world municipal budgets follow the same pattern. Average U.S. city spends ~30% on public safety, ~25% on education, ~15% on infrastructure, ~30% on everything else. Your Kid Town just learned how cities work.",
        hard:
          "U.S. local government revenue ≈ $2T annually. Average allocation: K-12 education 25-30%, public safety 15-25%, infrastructure 10-20%, social services 10-15%, debt service 5-10%. Composition varies but the public-goods premise is invariant.",
      },
    },

    // ─── Think-deeper: why public goods? ──────────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Can\'t Every Family Just Buy Their Own?',
      intro: {
        easy: "Why don\'t families just buy their OWN road? Their own firefighter? Why do we POOL the money?",
        medium: "Why do we tax for these things instead of letting each family buy what they want themselves? Surprising answers below.",
        hard: 'Apply first-principles to public-goods provision. Why is voluntary private purchase insufficient?',
      },
      layers: [
        {
          question: {
            easy: 'How much does ONE FAMILY\'s share of a real road cost?',
            medium: 'What\'s the true per-family cost of road infrastructure?',
            hard: 'What\'s the per-capita cost of major public infrastructure?',
          },
          reveal: {
            easy:
              "One MILE of road costs about $1-3 MILLION to build and maintain. No single family can afford that. But 1,000 families chipping in $1,000 each? Easy.",
            medium:
              "One mile of urban road costs $1-3M to build and ~$50-100K/year to maintain. Even a small town would need each family to pay $5,000-10,000 just for the road in front of their house. Privately impossible; collectively trivial.",
            hard:
              "Urban road CapEx: $1-3M/mile, OpEx ~$50-100K/mile/year. Per-household allocation across a 5,000-household city → ~$300-600/year per household — easily affordable when pooled, prohibitive privately.",
          },
        },
        {
          question: {
            easy: 'What if ONE family said \"I don\'t want to pay — I\'ll just use everyone else\'s stuff\"?',
            medium: 'What if individuals could opt out but still use the goods?',
            hard: 'What\'s the free-rider problem?',
          },
          reveal: {
            easy:
              "Then EVERYONE would say that. Nobody pays. The road never gets built. Nobody can drive. EVERYONE loses — including the family who tried to skip out.",
            medium:
              "If opting out is allowed, rational individuals all opt out and free-ride on others. Collective payment collapses. Nothing gets built. This is the free-rider problem — and it\'s why taxes aren\'t optional.",
            hard:
              "Free-rider equilibrium under voluntary contribution: each agent\'s dominant strategy is non-contribution, but collective non-contribution yields zero provision of the public good. Compulsory taxation solves the coordination failure.",
          },
        },
        {
          question: {
            easy: 'What\'s special about things like ROADS, PARKS, and STREETLIGHTS?',
            medium: 'What property makes these "public goods"?',
            hard: 'What characterizes a pure public good?',
          },
          reveal: {
            easy:
              "Once they\'re BUILT, EVERYONE can use them. You can\'t really stop people from walking past a streetlight. You can\'t fence off a road. So you can\'t SELL it like candy. You have to fund it together.",
            medium:
              "Public goods are non-excludable (hard to stop non-payers from using them) and non-rival (one person\'s use doesn\'t reduce another\'s). Streetlights, national defense, basic research — classic examples. Private markets underprovide them because they can\'t charge users.",
            hard:
              "Pure public goods exhibit non-excludability + non-rivalry in consumption. The market provides them suboptimally because positive externalities aren\'t captured by the producer. Pigouvian taxation or direct public provision corrects the market failure.",
          },
        },
        {
          question: {
            easy: 'What\'s the TRADE-OFF for paying taxes?',
            medium: 'What do we give up to fund public goods through taxes?',
            hard: 'What\'s the opportunity cost of taxation?',
          },
          reveal: {
            easy:
              "You give up some of YOUR money. You can\'t buy as much candy. But you GET roads, school, firefighters, parks — way more than you\'d ever buy alone. Net win, almost always.",
            medium:
              "Trade-off: less private spending in exchange for shared public goods. The exchange is net-positive when the public goods are efficiently provided. Tax policy debates are largely about WHERE the optimal trade-off line sits.",
            hard:
              "Tax burden = forgone private consumption. Net welfare effect depends on the marginal value of the public good vs. the marginal value of private consumption foregone. Modern public-economics frameworks (Ramsey, Mirrlees) attempt to optimize this trade-off.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Words of Public Money',
      subheading: 'These four explain every government budget on Earth.',
      cards: [
        {
          emoji: '💵',
          title: 'Tax',
          desc: {
            easy: 'TAX = money the government takes from people and businesses to pay for stuff EVERYONE shares. Pay it. Get back roads, schools, parks, etc.',
            medium:
              'A tax is a mandatory payment to government. Types: income tax (on what you earn), sales tax (on what you buy), property tax (on what you own). Mandatory because voluntary always collapses.',
            hard:
              'Taxes are non-voluntary transfers from private agents to public authority. Classifications: direct (income, wealth) vs. indirect (sales, VAT, excise). Compliance is enforced because voluntary contribution to public goods is unstable.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🏞️',
          title: 'Public Good',
          desc: {
            easy: 'PUBLIC GOOD = something EVERYONE uses, you CAN\'T stop them, and one person using it doesn\'t use it up. Roads, parks, streetlights, the army. Built BY taxes, FOR everyone.',
            medium:
              'A public good is non-excludable (can\'t stop non-payers) and non-rival (one person\'s use doesn\'t prevent another\'s). Roads, defense, basic research. Markets underprovide them; taxes fund them.',
            hard:
              'Pure public goods exhibit non-excludability + non-rivalry. Quasi-public goods (mostly excludable but non-rival, like cable TV) and common-pool resources (rival but non-excludable, like fisheries) are intermediate cases.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '📋',
          title: 'Budget',
          desc: {
            easy: 'BUDGET = the plan for HOW the government spends the tax money. \"$2M for schools. $1M for roads. $500K for parks.\" Every penny has a job written down.',
            medium:
              'A budget allocates tax revenue across competing uses. Federal, state, and local budgets each prioritize differently — federal heavy on defense + social security; local heavy on education + safety.',
            hard:
              'Budget allocation reflects revealed preferences of voters + political coalition dynamics. Discretionary vs. mandatory spending breakdown is the key analytical distinction at the federal level.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '⚖️',
          title: 'Trade-off',
          desc: {
            easy: 'TRADE-OFF = you can\'t fund EVERYTHING. More for parks = less for roads. More taxes = less candy. The argument grown-ups have IS about the trade-offs.',
            medium:
              'Every dollar funds ONE use, not all uses. Higher taxes fund more public goods but reduce private spending. The debate is where the optimal line sits — different countries draw it very differently.',
            hard:
              'Tax-and-spend trade-offs operate on multiple dimensions: efficiency (deadweight loss from taxation) vs. equity (distributional effects) vs. growth (capital formation) vs. provision adequacy. Policy disputes typically reflect different weights on these dimensions.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: balance the Kid Town budget ─────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: Balance the Kid Town Budget',
      setup: {
        easy: '100 kids each pay $1 a week in tax — for 52 weeks. How much money does Kid Town get to spend ALL YEAR?',
        medium:
          "Kid Town: 100 residents, $1/week premium per resident, 52 weeks/year. Compute annual budget.",
        hard:
          "Tax revenue computation: n=100, weekly contribution $1/resident, t=52 weeks. Compute annual revenue.",
      },
      problem: {
        givens: [
          { label: 'kids paying', value: 100 },
          { label: 'tax per kid per week', value: 1, suffix: '$' },
          { label: 'weeks in year', value: 52 },
        ],
        answerLabel: 'Annual budget',
        answer: 5200,
        suffix: '$',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          "Step 1: 100 kids × $1 = $100/week. Step 2: $100 × 52 weeks = $5,200/year.\n\nNow you\'re the mayor. How would YOU spend $5,200? Playground ($2,000) + library ($1,500) + water fountain ($700) + free pizza night ($1,000) = exactly $5,200. Budget balanced!",
        medium:
          "Weekly revenue = 100 × $1 = $100. Annual = $100 × 52 = $5,200.\n\nA sample balanced budget: $2,000 playground, $1,500 library, $700 water fountain, $1,000 free events = $5,200 exact. Real cities follow the same math — they just have 6 zeros after the numbers.",
        hard:
          "Annual revenue = 100 × $1 × 52 = $5,200. Allocate across categories: playground (one-time capex) $2,000, library (ongoing opex) $1,500, water (capex + light opex) $700, events (opex) $1,000 = $5,200 — exactly balanced.\n\nReal municipal practice: balanced-budget requirements force this allocation discipline at the city/state level (federal can deficit-finance; states/cities generally cannot).",
      },
    },

    // ─── Brainstorm: 3 tax-funded things you USE ──────────────────────
    {
      kind: 'brainstorm',
      heading: '🔎 Spot the Tax Money',
      prompt: {
        easy:
          'Look around your town. Name 3 things YOU use almost every day that taxes paid for. School? Road? Park? Library?',
        medium:
          'Identify 3 tax-funded services you personally use. For each, write what it is AND what would change if it disappeared.',
        hard:
          'Enumerate 3 tax-funded services you consume. For each: estimated value to you, alternative if not provided, and political constituency that funds it.',
      },
      minItems: 3,
      placeholder: 'e.g. The road I walk to school on — without it, no way to get there...',
      hints: [
        {
          easy: 'Your SCHOOL. Public schools are paid for almost entirely by taxes.',
          medium: 'Public school: K-12 cost ~$15K/student/year. Tax-funded so every kid can go regardless of family income.',
          hard: 'Public K-12 education: ~$800B nationally, ~$15K/student/year average. Funded primarily by local property taxes + state aid + federal supplementation.',
        },
        {
          easy: 'The ROAD you walked on today, the SIDEWALK, the streetlights at night.',
          medium: 'Roads + sidewalks + streetlights: high-cost infrastructure that benefits every resident. Privately impossible, collectively standard.',
          hard: 'Transportation infrastructure: ~$400B annual public spending. Streetlights, sidewalks, road maintenance all bundle into general municipal services.',
        },
        {
          easy: 'PARKS, libraries, swimming pools — places you go for FREE because taxes paid for them.',
          medium: 'Free recreational public goods: parks, libraries, public pools. Counterfactual: pay-per-use models drastically reduce access.',
          hard: 'Public recreation + libraries: ~$50B annually. High per-capita value especially for lower-income households who cannot easily substitute private alternatives.',
        },
        {
          easy: 'FIREFIGHTERS, POLICE, AMBULANCES. If your house caught fire — taxes paid for the truck and the team that\'d save you.',
          medium: 'Emergency services: 911, fire, police, EMS. Pure public goods with universal access. Privately delivered medical alternatives exist but are much more expensive.',
          hard: 'Public safety: ~$170B nationally for fire/EMS, ~$130B for police. Universal-access guarantee is the defining feature; private alternatives are pay-per-use luxury substitutes.',
        },
        {
          easy: 'TRASH PICKUP. The truck that takes your garbage away every week — that\'s your town\'s taxes.',
          medium: 'Sanitation: trash, recycling, water/sewage. Underrated public services without which cities are unlivable.',
          hard: 'Sanitation + utilities: ~$100B annually for municipal water/sewer + waste collection. Public-health-critical services with strong economies-of-scale and natural-monopoly characteristics.',
        },
        {
          easy: 'NATIONAL PARKS, museums, monuments. Tax dollars keep them open + free or low-cost to visit.',
          medium: 'National Park Service: ~$3B/year for 400+ parks. Smithsonian: ~$1B/year for free museums. High public-good value with broad benefit.',
          hard: 'NPS + Smithsonian + cultural infrastructure: ~$5B federal, comparable state. Free/low-cost access expands cultural and recreational benefit beyond pay-walled alternatives.',
        },
      ],
      closer: {
        easy: 'Pick ONE you use a LOT. Then imagine your town WITHOUT it. That\'s the value of the tax that paid for it.',
        medium:
          "For each tax-funded service you use, the personal value is what you\'d pay to keep it if taxes ended. Most are wildly underpriced once you do this exercise.",
        hard:
          'Revealed-preference exercise: tax-funded services consumed at zero marginal cost have personal valuations often 5-10× the tax burden incurred. The bundled-pricing model produces consumption surplus that\'s easy to overlook.',
      },
    },

    // ─── Connect: tax-funded big things ───────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Big Things Built by Taxes',
      concept: {
        easy:
          'Some of the most amazing things in your country were paid for by taxes. Things no single person could afford. Things only \"everyone together\" can pull off.',
        medium:
          'The biggest infrastructure achievements in modern history were tax-funded — because they\'re too big for any one buyer. Same principle, massive scale.',
        hard:
          'Tax-funded mega-projects demonstrate the collective-action value at industrial scale. Each is a counterfactual case for the tax model.',
      },
      examples: [
        {
          emoji: '🛣️',
          who: 'The Interstate Highway System',
          story: {
            easy: 'America\'s highway system was built by TAXES in the 1950s. 47,000 miles of road that connected the whole country. Cost: $500 BILLION in today\'s money. No single company would EVER build that.',
            medium:
              "The U.S. Interstate Highway System (started 1956) is 47,000+ miles of highway, took 35 years to complete, and cost ~$500 billion (in 2020 dollars). Federally funded via gas tax + general revenue. Enabled the trucking economy + suburban growth + national mobility.",
            hard:
              "Federal-Aid Highway Act of 1956. ~$500B nominal cost (today\'s dollars), 47,000 miles, 35-year build. Funded ~90% federal / 10% state via gas tax + general revenue. Estimated $0.5-1T annual economic value from the network — exceeds construction cost annually.",
          },
        },
        {
          emoji: '🚀',
          who: 'NASA & the Moon Landing',
          story: {
            easy: 'Putting a person on the MOON in 1969 cost about $25 billion. Funded by taxes. No private company could have done it then — it took the whole country chipping in.',
            medium:
              "The Apollo program cost ~$25B (~$200B in today\'s dollars) over 1961-1972. Pure tax-funded. Generated technologies still in use today (microchips, water purification, MRI machines). Returns on tax investment have been estimated at 7-14× in spinoff economic value.",
            hard:
              "Apollo program total cost ~$25B nominal, ~$200B real. Spinoff technologies (integrated circuits, computer-aided design, water filtration, satellite weather forecasting) generated ~$200B-$1T+ in subsequent commercial value. Public R&D as long-horizon economic infrastructure.",
          },
        },
        {
          emoji: '👴',
          who: 'Social Security',
          story: {
            easy: 'America\'s Social Security helps older people who can\'t work anymore. It\'s the BIGGEST tax-funded program in U.S. history. Every working person pays in; every retired person gets a monthly check. ~70 million people get one right now.',
            medium:
              "Social Security: a tax-funded retirement program covering ~70M Americans, ~$1.3 trillion paid out annually. Each working generation funds the retired generation\'s checks. Largest single line item in the federal budget — and one of the most popular government programs.",
            hard:
              "Social Security OASDI: ~$1.3T annual benefits, ~$1.2T annual tax revenue (12.4% payroll tax up to $168K cap). Pay-as-you-go financing. Largest US federal program. ~95% benefit retention by retirees indicates strong revealed political preference for the structure.",
          },
        },
      ],
      kicker: {
        easy: 'Highway. Moon. Granny\'s monthly check. Each is too big for one family. Taxes are the trick that makes BIG STUFF possible.',
        medium:
          "Tax-funded mega-projects produce returns no private buyer could finance. Highway → suburbs, NASA → microchips, Social Security → retirement security. The trade-off is real and the upside is large.",
        hard:
          'Public capital investments often produce returns over horizons longer than private capital is willing to wait. Tax-funded provision exists in part to address this temporal-arbitrage gap.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You now understand what most grown-ups still complain about: taxes pay for the BIG stuff no family can buy alone. Roads. Schools. Firefighters. The mission below will help you SEE it.",
        medium:
          "You\'ve got the actual mental model: taxes solve a collective-action problem to fund public goods. The complaints about taxes are about the TRADE-OFFS, not the principle. Now go SEE what they fund.",
        hard:
          "You now understand public-goods economics, the free-rider rationale for compulsory taxation, and the multidimensional nature of tax policy trade-offs. This frame applies at every government level.",
      },
      bonusTip: {
        easy:
          "Fun fact: Sweden taxes nearly HALF of everyone\'s income — but kids get free college, free healthcare, parental leave for new parents, and very strong schools. Higher taxes, more shared stuff. That\'s the trade-off.",
        medium:
          "Sweden: 50%+ effective tax rate, but: free K-PhD education, universal healthcare, 480-day parental leave, robust pensions. Sweden\'s outcomes (longevity, education, satisfaction) routinely top global rankings. Different trade-off line, different result.",
        hard:
          "Nordic model: effective tax burden 45-55% (vs ~25% U.S.), funds full-spectrum welfare state. Empirical outcomes: top-decile life expectancy, education attainment, life satisfaction, gender equality. Demonstrates the trade-off line is a policy choice, not a fixed constraint.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'tax-town',
        emoji: '🏛️',
        title: {
          easy: 'Tax Detective: Spot 5 things taxes paid for!',
          medium: 'Audit your neighborhood for tax-funded services',
          hard: 'Conduct a 5-item public-goods census of your local area',
        },
        pitch: {
          easy:
            "Walk around with a grown-up. Find 5 things in your neighborhood that taxes paid for. Photograph each one. Then imagine: what would your town be like WITHOUT them?",
          medium:
            "Take a real walk through your neighborhood. Identify 5 tax-funded services or pieces of infrastructure. Photograph and note each. For each: what would the neighborhood lose without it?",
          hard:
            "Field census: identify 5 distinct tax-funded public goods in your immediate area. Photo + brief description + counterfactual analysis (what would be lost without each).",
        },
        steps: [
          {
            emoji: '🚶',
            text: {
              easy: 'Plan a 30-minute walk with a grown-up. Bring a phone or camera.',
              medium: 'Schedule a 30-min walk with a parent. Bring camera + field sheet.',
              hard: 'Route a 30-min walking circuit covering high-variety public infrastructure.',
            },
          },
          {
            emoji: '👀',
            text: {
              easy: 'Look for: roads, sidewalks, streetlights, schools, parks, libraries, fire/police stations, trash trucks, signs.',
              medium: 'Look for: paved roads, sidewalks, streetlights, schools, parks, libraries, emergency services, trash collection, traffic signs.',
              hard: 'Categories to cover: transportation, education, recreation, safety, sanitation, signage.',
            },
          },
          {
            emoji: '📸',
            text: {
              easy: 'Photograph 5 different tax-funded things. Each one in a different category if you can.',
              medium: 'Capture 5 photos across different service categories. Aim for variety.',
              hard: 'Capture photographic evidence for each of the 5 items. Vary across categories for breadth.',
            },
          },
          {
            emoji: '🤔',
            text: {
              easy: 'For each: imagine your town WITHOUT it. What would happen?',
              medium: 'Counterfactual analysis: for each item, what would the neighborhood lose without it?',
              hard: 'Counterfactual reasoning for each: who would be impacted, what would the substitute cost privately, what would degrade?',
            },
          },
          {
            emoji: '🏆',
            text: {
              easy: 'Pick the ONE you\'d MOST hate to lose. That\'s your town\'s biggest tax win.',
              medium: 'Rank the 5 by personal value. Note the top item.',
              hard: 'Rank items by personal valuation. Identify the highest-marginal-value public good for you specifically.',
            },
          },
        ],
        reflection: [
          {
            key: 'items',
            prompt: {
              easy: 'List the 5 things you found.',
              medium: 'Your 5 tax-funded items',
              hard: 'Census items (with categories)',
            },
            type: 'longtext',
            placeholder: '1. School on Main St — 2. Sidewalk on 5th — 3. Park...',
          },
          {
            key: 'mvp',
            prompt: {
              easy: 'Which one would you MOST hate to lose?',
              medium: 'Highest-value tax-funded item + one-line reason',
              hard: '#1-ranked item + personal valuation reasoning',
            },
            type: 'text',
            placeholder: 'The fire station — without it, our house could burn down with no help',
          },
          {
            key: 'surprise',
            prompt: {
              easy: 'What surprised you on your walk?',
              medium: 'Biggest surprise from the audit',
              hard: 'Largest insight delta from the census exercise',
            },
            type: 'longtext',
            placeholder: 'I never noticed how many street signs there are…',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What do you think about taxes now?',
              medium: 'Did your view on taxes change? How?',
              hard: 'How has your prior on tax policy updated post-census?',
            },
            type: 'longtext',
            placeholder: 'I used to think taxes were just bad. Now…',
          },
        ],
        parentNote: {
          easy: "Walk in safe areas, stay on sidewalks. The point is to NOTICE the infrastructure — not to enter buildings.",
          medium:
            "Pure observational walk. Stay public-space. Encourage the kid to point things out without correcting their guesses — the noticing IS the lesson. Privately-funded items mistaken for public are useful teaching moments.",
          hard:
            "Field exercise only — no entry or interaction with services required. Common kid-mistakes (mistaking a private business sign for tax-funded) are productive for nuancing the public/private distinction.",
        },
        printables: {
          trackers: [
            {
              title: 'Tax Detective Field Sheet',
              note: 'One row per item. Score each by how much your town would miss it (1-10).',
              columns: ['What I Spotted', 'Where', 'Tax Service Category', 'Would Miss It (1-10)'],
              rows: 6,
            },
          ],
          worksheets: [
            {
              title: 'Without This, Our Town Would Lose...',
              blocks: [
                {
                  label: '🏛️ Item #1',
                  hint: 'Photo or sketch + one-sentence description.',
                  lines: 2,
                },
                {
                  label: '   ❌ Without it, our town would lose...',
                  lines: 3,
                },
                {
                  label: '🏛️ Item #2',
                  lines: 2,
                },
                {
                  label: '   ❌ Without it, our town would lose...',
                  lines: 3,
                },
                {
                  label: '🏛️ Item #3',
                  lines: 2,
                },
                {
                  label: '   ❌ Without it, our town would lose...',
                  lines: 3,
                },
                {
                  label: '🏛️ Item #4',
                  lines: 2,
                },
                {
                  label: '   ❌ Without it, our town would lose...',
                  lines: 3,
                },
                {
                  label: '🏛️ Item #5',
                  lines: 2,
                },
                {
                  label: '   ❌ Without it, our town would lose...',
                  lines: 3,
                },
                {
                  label: '🏆 The ONE I\'d MOST miss',
                  hint: 'And why.',
                  lines: 3,
                },
              ],
            },
          ],
          checklists: [
            {
              title: 'Tax Detective Day Checklist',
              items: [
                'A grown-up walking with me',
                'Comfortable shoes',
                'Phone or camera (with permission)',
                'Printed field sheet + pen',
                'Water bottle',
                'A 30-minute walking route planned',
                'Stay on sidewalks and public spaces',
                'Look UP (streetlights), DOWN (sidewalks), and AROUND (signs, schools)',
              ],
              note: 'Tip: do this during the day so you can see everything clearly. Bonus round: do it again at NIGHT and notice the streetlights, traffic lights, and lit-up signs.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
