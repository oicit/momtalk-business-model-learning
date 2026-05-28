/**
 * Lego: Bricks Forever — compatibility-as-moat.
 *
 * Goal: take a kid from "Lego makes cool toys" → to "Lego built a
 * MOAT by making every brick compatible across 68 years, so quitting
 * means quitting an entire collection" → to actually auditing their
 * own collections (Lego/Pokemon/Hot Wheels/etc.) and seeing the
 * collection-inertia moat at work.
 *
 * Beat order:
 *   intro → decision (start toy company: new every year / one design /
 *   expanding-compatible) → think-deeper (why compatibility compounds)
 *   → concept-cards (Compatibility/Modular Design/IP Licensing/
 *   Recurring Customers) → calc-challenge (4 sets/yr × 5 yrs × $50 =
 *   $1000 per customer) → brainstorm (3 collections you ALREADY have)
 *   → connect (Pokemon, Hot Wheels, MtG, Funko, American Girl) →
 *   outro (Lego 2004 near-bankruptcy → Star Wars/HP licensing saved
 *   it) → mission (audit your own collection — count, age, what would
 *   make you stop).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'lego',
  themeKey: 'lego',
  emoji: '🧱',
  title: 'Lego: Bricks Forever',
  subtitle: {
    easy: 'Grandpa\'s 1958 Lego bricks STILL fit your new ones. That\'s a billion-dollar moat.',
    medium:
      'Why a 90-year-old toy company is worth $10 billion: compatibility creates a moat that compounds across generations.',
    hard:
      'Compatibility as competitive moat: when an established collection makes switching economically irrational, even at higher prices.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'thinking',
      text: {
        easy:
          "Your grandpa\'s OLD Lego bricks from 1958 still FIT your new Lego bricks from 2026. 68 YEARS later. Same fit. Same click. That\'s not an accident — that\'s the most important business decision Lego ever made. Today: how compatibility built a billion-dollar moat.",
        medium:
          "A Lego brick made in 1958 fits a Lego brick made in 2026. 68 years of perfect compatibility — by deliberate design. The result: every Lego customer\'s existing collection makes every new Lego set MORE valuable. The collection IS the moat. Lego revenue ~$10B+/yr, growing.",
        hard:
          "Lego\'s 1958 stud-and-tube patent established a compatibility constraint that\'s held for 68 years. The economic consequence: every owned brick increases the marginal value of a new set, and decreases the value of any competing system. The moat compounds with installed base.",
      },
    },

    // ─── Decision: design your toy company ────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 You\'re Starting a Toy Company',
      scenario: {
        easy:
          "You want to start a toy company. THREE different ways to design your toys. Each leads to a totally different business.",
        medium:
          "Greenfield toy-company design decision. Three product architectures, very different long-term economics.",
        hard:
          "Product-architecture decision for a toy company. Three options: (a) episodic-novelty SKUs, (b) single-design longevity, (c) expanding compatible system. Optimize for long-horizon LTV.",
      },
      question: {
        easy: 'How do you design your toys?',
        medium: 'Pick the product architecture:',
        hard: 'Maximize LTV across a 20-year customer relationship:',
      },
      choices: [
        {
          label: {
            easy: 'A brand-new DIFFERENT toy every year — nothing connects to last year',
            medium: 'Episodic novelty — new line every year, no connection to prior lines',
            hard: 'Episodic-novelty architecture — discrete SKU launches, no cross-period compatibility',
          },
          feedback: {
            easy:
              "Exciting! But… every year you have to convince customers ALL OVER AGAIN. Their old toys are useless to your new toy. There\'s no LOYALTY. Most toy fads die in 2 years.",
            medium:
              "High churn risk. Without compatibility, each new line stands alone. Customer\'s existing collection contributes nothing to the new purchase decision. Year-over-year retention is near-zero. Most fad-toys fail this way.",
            hard:
              "Sub-optimal for long-horizon LTV. Episodic models depend entirely on year-by-year customer reactivation. No compounding from installed base. Standard fad-toy economics — typical lifespan 2-5 years.",
          },
        },
        {
          label: {
            easy: 'ONE perfect toy. Sell the EXACT same thing forever.',
            medium: 'Single-design longevity — one product, no extensions',
            hard: 'Single-SKU strategy — durable design with no product evolution',
          },
          feedback: {
            easy:
              "Hmm. After kids buy ONE, they\'re done. There\'s nothing else to buy. No reason to come back. The HULA HOOP died this way. So did most one-toy hits.",
            medium:
              "Limited LTV ceiling. Customer purchases once, then has nothing else to buy from you. Recurring revenue requires expansion SKUs. Hula Hoop (1958), Pet Rock (1975) — classic single-SKU collapses.",
            hard:
              "Bounded LTV by design. Single-purchase ceiling caps revenue per customer at one transaction. Even durable products require expansion to grow customer LTV beyond the first sale.",
          },
        },
        {
          label: {
            easy: 'New toys EVERY year — but they all WORK TOGETHER with last year\'s toys!',
            medium: 'Expanding compatible system — new SKUs every year, full compatibility with installed base',
            hard: 'Modular expansion architecture — full backward + forward compatibility across SKU generations',
          },
          feedback: {
            easy:
              "GENIUS. This is the Lego model. Every NEW set makes your OLD bricks MORE useful. Kids never throw their Legos out. Their parents never throw them out. Eventually grandkids inherit them. The collection ITSELF keeps them buying.",
            medium:
              "Optimal. New SKUs amplify existing-collection value; existing collection lowers friction to new SKU purchase. Compounding installed base + sustained LTV + brand stickiness. Classic Lego architecture.",
            hard:
              "Aligned with Lego\'s actual architecture. Compatibility creates positive feedback: marginal new-SKU utility scales with installed-base size. Customer LTV becomes effectively unbounded across decades — sets purchased at 6 still useful at 16, then to one\'s own kids at 36.",
          },
          isPreferred: true,
        },
      ],
      realWorldReveal: {
        easy:
          "This is the Lego trick. Compatibility = collection = REASON to never quit. Plus: they DOUBLED the trick by adding Star Wars sets, Harry Potter sets, Marvel sets — making fans of OTHER things buy Lego too. Same bricks, more reasons.",
        medium:
          "Lego executed two trick layers: (1) compatibility — 1958 bricks fit 2026 bricks, locking in the installed base; (2) IP licensing — Star Wars / Harry Potter / Marvel sets bring outside fans into Lego. The combination produces ~$10B revenue and ~20% operating margin — extraordinary for a toy company.",
        hard:
          "Lego\'s dual-moat: stud-and-tube compatibility (1958→present) + licensed IP integration (Star Wars 1999, Harry Potter 2001, Marvel/DC, etc.). Operating margin ~20% (toy industry typically <10%). Operating model is closer to high-margin consumer-tech than to commodity toy.",
      },
    },

    // ─── Think-deeper: why does compatibility compound? ───────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Does COMPATIBILITY Compound?',
      intro: {
        easy: "When OLD bricks fit NEW bricks, something magical happens. Let\'s zoom in on WHY.",
        medium: "Compatibility seems like a small feature. Why does it produce billion-dollar moats?",
        hard: 'What\'s the underlying economic mechanism of compatibility moats?',
      },
      layers: [
        {
          question: {
            easy: 'When you OWN 200 Lego bricks already, how do you feel about buying a new set?',
            medium: 'How does the installed base affect the next purchase decision?',
            hard: 'What\'s the relationship between installed-base size and marginal-purchase utility?',
          },
          reveal: {
            easy:
              "EXCITED. Because your new set CAN COMBINE with everything you already have. The 200 bricks you already own make the new set MORE FUN, not less. The math is in your favor.",
            medium:
              "Marginal utility of a new set rises with collection size — the new SKU multiplies the combinations available. Bigger collection = each new piece is worth more. Switching to a competing toy means LEAVING the existing collection behind.",
            hard:
              "Marginal-utility curve is increasing in installed-base size — Network-effect-like dynamics within a single user\'s collection. Switching cost rises with collection size; new-purchase utility rises symmetrically.",
          },
        },
        {
          question: {
            easy: 'What happens when you ALREADY have 500 bricks and a competitor launches a new "almost-Lego" toy?',
            medium: 'What\'s the switching cost when you have a substantial collection?',
            hard: 'How does collection size affect switching probability?',
          },
          reveal: {
            easy:
              "You skip it. Even if the new toy is cheaper or fancier — you\'d have to LEAVE your 500 bricks behind. Your collection is too good to throw away.",
            medium:
              "Switching cost = forgone collection utility. For a kid with 500+ bricks, switching means giving up the entire combinatorial space those bricks unlock. Even a meaningfully better competitor product can\'t cross the switching threshold.",
            hard:
              "Switching cost scales non-linearly with collection size. Threshold for competitor adoption rises sharply once a collection becomes meaningful (~200-500 pieces). Lego\'s lock-in increases with each owned piece.",
          },
        },
        {
          question: {
            easy: 'Why do PARENTS keep buying Lego, year after year?',
            medium: 'Why is parental WTP for Lego so durable?',
            hard: 'Why is parental purchasing of Lego high-recurrence and price-inelastic?',
          },
          reveal: {
            easy:
              "Because Lego is a SAFE BET. Parents know Lego is high-quality, won\'t be thrown out, can be passed down, will keep being played with. Lego ISN\'T a gamble like a new mystery toy.",
            medium:
              "Lego is the lowest-risk gift in the toy category. High perceived quality, high engagement durability, multi-year usefulness, intergenerational transmission. Parents pay premium prices because the expected utility per dollar is high.",
            hard:
              "Lego enjoys a premium price-tier because parents\' perceived gift-utility per dollar is highest in category. Brand + compatibility + durability combine to lower perceived purchase risk. Premium pricing sustains margins ~2× toy-category average.",
          },
        },
        {
          question: {
            easy: 'What makes the LICENSED sets (Star Wars, Harry Potter) so smart?',
            medium: 'Why does Lego license IP from other companies?',
            hard: 'What\'s the strategic role of licensed IP in Lego\'s model?',
          },
          reveal: {
            easy:
              "Because Star Wars fans buy Lego JUST for Star Wars. Harry Potter fans buy Lego JUST for Harry Potter. Lego gets MILLIONS of new customers from EVERY franchise — and those new customers still get LEGO bricks they can mix with anything.",
            medium:
              "Licensed IP imports outside fandoms into the Lego ecosystem. A Marvel fan buys Lego for the Avengers set — and ends up with bricks that work with all other Lego. Customer-acquisition cost is paid by the licensor\'s existing fan base.",
            hard:
              "Licensed IP serves as customer-acquisition channel: licensor\'s existing fan base becomes a new Lego cohort. Each fan brings into the Lego ecosystem. CAC effectively subsidized by the IP holder\'s prior marketing.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Words of Compatibility',
      subheading: 'Master these and you\'ll see why some toys live forever — and others die in a year.',
      cards: [
        {
          emoji: '🔌',
          title: 'Compatibility',
          desc: {
            easy: 'COMPATIBILITY = old stuff still works with new stuff. 1958 Lego brick clicks onto 2026 Lego brick. Your old USB stick still works with a new computer.',
            medium:
              'Backward + forward compatibility = the moat. New product extends value of installed base; installed base anchors switching costs. Applies to bricks, software, consoles, file formats.',
            hard:
              'Compatibility regimes create positive-sum network effects within a user\'s own collection. Marginal-purchase utility scales with installed-base size; switching cost scales symmetrically. Powerful moat.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🧩',
          title: 'Modular Design',
          desc: {
            easy: 'MODULAR DESIGN = stuff is made of LITTLE PIECES that can be combined in MILLIONS of ways. 6 small Lego bricks can be put together 915 MILLION different ways.',
            medium:
              "Modularity multiplies value. Six 2x4 Lego bricks combine in 915M+ configurations. The combinatorial space IS the product. Every new piece exponentially expands what\'s buildable.",
            hard:
              "Modular product architectures generate combinatorial expansion: utility ∝ exponential function of component count. Six 2x4 bricks = 915M configurations. The combinatorial space is what users actually purchase.",
          },
          color: '#FFE5EC',
        },
        {
          emoji: '🎬',
          title: 'IP Licensing',
          desc: {
            easy: 'IP LICENSING = paying to use someone else\'s character or story. Lego pays Disney money to make Star Wars sets. Lego gets ALL the Star Wars fans. Disney gets a check.',
            medium:
              'IP licensing imports an outside fandom. Lego pays Star Wars / Marvel / Harry Potter for the right to make their characters in Lego form — gaining customer acquisition from those fan bases. Mutually beneficial revenue share.',
            hard:
              'IP licensing converts the licensor\'s existing fan base into a customer acquisition channel for the licensee. Lego\'s licensed IP catalog (Star Wars, Marvel, HP, DC, Pixar, Nintendo, etc.) accounts for ~50% of revenue with strong margin contribution.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '🔁',
          title: 'Recurring Customers',
          desc: {
            easy: 'RECURRING CUSTOMERS = the SAME PEOPLE buy from you for YEARS. Kids buy Legos at 6. Then at 8. Then 12. Then they grow up and buy for their OWN kids. Same customer family. 40+ years.',
            medium:
              'Recurring customer relationships compound LTV. Lego\'s intergenerational customer base means lifetime value isn\'t bounded by a child\'s ~10-year peak interest — it extends to parental and gift purchases for decades.',
            hard:
              'Lego customer LTV operates on decade-scale time horizons. Initial purchase at age 4-5; sustained engagement through teens; parental purchase at age 25-40; intergenerational gift purchases throughout. LTV per family unit ~$2-5K+ over the customer lifetime.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: LTV of one Lego customer ─────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: One Customer, 5 Years',
      setup: {
        easy: 'A kid who LOVES Lego buys 4 new sets a year, each costing $50, for 5 years. How much money does Lego make from ONE kid?',
        medium:
          "Lego customer cohort: 4 sets/year × $50/set × 5 years. Compute customer revenue contribution.",
        hard:
          "Customer revenue scenario: 4 sets/year × $50 ASP × 5 years. Compute cumulative customer LTV (ignoring starter set, COGS, and discounting for simplicity).",
      },
      problem: {
        givens: [
          { label: 'sets per year', value: 4 },
          { label: 'years', value: 5 },
          { label: 'cost per set', value: 50, suffix: '$' },
        ],
        answerLabel: '5-year spend',
        answer: 1000,
        suffix: '$',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          "Step 1: 4 sets × 5 years = 20 sets total. Step 2: 20 × $50 = $1,000.\n\nThat\'s ONE kid. Just 5 years. Lego customers often go for 15-20 YEARS. Some Lego adults spend $500-$2000 a YEAR on sets. The lifetime value of one Lego customer can hit $20,000+.",
        medium:
          "Cumulative spend = 4 × 5 × $50 = $1,000 over 5 years. But Lego customers often have 15-20 year tenure with seasonal peaks during gift-giving. Plus parental purchases for nieces/nephews/own kids decades later. Realistic LTV per customer-family ~$2,000-$5,000+ over the customer lifetime.\n\nLego counts ~25% of households worldwide as customers — at $1,000+ per household over a typical period, the steady-state revenue is enormous.",
        hard:
          "5-year cumulative customer revenue = 4 × 5 × $50 = $1,000. Long-horizon LTV substantially higher: typical heavy customer 15-20 year peak engagement + intergenerational purchases. Realistic family-unit LTV ~$2K-$5K range; adult-fan-of-Lego (AFOL) segment far higher ($10K-50K+).\n\nLego\'s ~$10B annual revenue + ~20% operating margin = ~$2B operating profit. Per-customer LTV implies a steady-state customer base of millions in the high-LTV tier. Compatibility + IP licensing combine to sustain these economics.",
      },
    },

    // ─── Brainstorm: your collections ─────────────────────────────────
    {
      kind: 'brainstorm',
      heading: '🎒 What\'s YOUR Collection?',
      prompt: {
        easy:
          'You probably already have COLLECTIONS — even if you don\'t call them that. List 3 things YOU own that you keep BUYING MORE of. Pokemon cards? Lego? Books in a series? Stickers?',
        medium:
          'Identify 3 collections you\'re already building. For each: what you have, how often you buy more, and what would make you STOP.',
        hard:
          'Audit 3 personal collections. For each: installed-base size, purchase frequency, switching-cost analysis (what\'s the threshold for adopting a competing product?).',
      },
      minItems: 3,
      placeholder: 'e.g. Pokemon cards — I have 200 already and buy a new pack every month...',
      hints: [
        {
          easy: 'Pokemon cards or trading cards. You probably have a big stack already. Each new pack matters MORE because of what you already have.',
          medium: 'Trading-card collections (Pokemon, Magic, sports cards). Card games are the textbook compatibility-moat: deck-builds depend on owned cards.',
          hard: 'TCG (trading-card game) collections share Lego\'s compatibility dynamic. Pokemon: ~30B cards printed since 1996. Combinatorial deck-building IS the product.',
        },
        {
          easy: 'Books in a SERIES — Harry Potter, Wings of Fire, Diary of a Wimpy Kid. You finished one, you want the next.',
          medium: 'Book series. Each completed volume creates anticipation for the next. Loyalty driven by character + narrative continuity rather than physical compatibility.',
          hard: 'Series fiction operates on narrative-compatibility rather than physical-compatibility. Backward investment in characters/world drives forward purchases.',
        },
        {
          easy: 'LEGO! If you have Lego, you ARE the case study.',
          medium: 'Lego itself — actual installed base + purchase frequency + sentimental retention.',
          hard: 'Direct Lego ownership audit — installed base size, recent purchase cadence, perceived switching cost.',
        },
        {
          easy: 'Funko Pops, action figures, dolls in a line (American Girl, LOL, Barbie). Each new one ADDS to your shelf.',
          medium: 'Display-collectible categories: Funko Pop, action figures, dolls. Display-as-collection drives compounding emotional investment.',
          hard: 'Display-collectible economics: shelving creates visible accumulation, which reinforces purchase identity. Funko Pop unit volume ~50M+ annually.',
        },
        {
          easy: 'Sports stuff — baseball cards, soccer jerseys, team gear from ONE TEAM.',
          medium: 'Sports collectibles or fan gear. Team loyalty acts as identity moat — switching teams is socially expensive.',
          hard: 'Sports fandom: identity-anchored loyalty creates extreme switching costs. Lifetime customer-team relationships common.',
        },
        {
          easy: 'Sticker collections, key chain collections, art supply collections.',
          medium: 'Mini-collection categories: stickers, keychains, washi tape, art supplies. Lower price points; more frequent purchases.',
          hard: 'Mini-collectibles: low AOV, high frequency. The compatibility moat is the display-space and the curatorial identity.',
        },
      ],
      closer: {
        easy: 'Pick the COLLECTION you have the MOST of. THAT is your "compatibility moat." Whoever sells it has YOU locked in.',
        medium:
          "Identify the collection with the highest installed base — that\'s where your switching cost is greatest. Now you understand why you keep buying more.",
        hard:
          'Highest-installed-base collection has the highest switching cost. Realizing the moat operates on YOU is the lesson — the same dynamic works at every scale.',
      },
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Compatibility Moats Everywhere',
      concept: {
        easy:
          'Lego isn\'t the only one running the compatibility trick. Lots of MASSIVE businesses do it.',
        medium:
          'The compatibility-moat pattern repeats across tech, gaming, entertainment, and collectibles. Same architecture; different categories.',
        hard:
          'Compatibility-driven lock-in is one of the most durable moats in business. Recognized across hardware, software, gaming, and collectibles.',
      },
      examples: [
        {
          emoji: '🎮',
          who: 'Pokemon',
          story: {
            easy: 'Pokemon started in 1996 with 151 critters. They\'ve never STOPPED making them — now 1,000+ Pokemon exist. Kids who started in 1996 are still playing because their old Pokemon still work in the new games. Same trick as Lego.',
            medium:
              "Pokemon: 1996 launch with 151 species, expanded to 1,000+ today. All compatible across game generations via mechanics like Pokemon Bank. ~30B trading cards printed. Largest media franchise in history (~$110B+ in lifetime revenue).",
            hard:
              "Pokemon franchise lifetime revenue ~$110B+ (largest media franchise of all time, ahead of Mickey Mouse and Star Wars). Architecture: 1996 Game Boy launch + persistent species library + compatibility across console generations. Compatibility maintained for 28 years intentionally.",
          },
        },
        {
          emoji: '🚗',
          who: 'Hot Wheels',
          story: {
            easy: 'Hot Wheels started in 1968. They\'re still made today — same SCALE, same TRACK, same fits. A 1968 Hot Wheels track works with a 2026 Hot Wheels car. Mattel built a 60-year compatibility empire.',
            medium:
              "Hot Wheels: 1968 launch, ~6 billion cars produced. Universal track + scale standard maintained for 56 years. Mattel\'s most valuable single brand. The interoperability constraint is the moat.",
            hard:
              "Hot Wheels: ~6B unit lifetime production. Standardized 1:64 scale + track interoperability across 56-year span. Mattel\'s largest single revenue stream. Same architecture as Lego — long-lived compatibility creates durable loyalty.",
          },
        },
        {
          emoji: '🃏',
          who: 'Magic: The Gathering',
          story: {
            easy: 'Magic: The Gathering is a CARD game. Cards from 1993 still work today (in some formats). Adults with HUGE collections will NEVER quit because they have $50,000 in cards.',
            medium:
              "Magic: The Gathering: 1993 launch, ~30B+ cards printed. \"Legacy\" and \"Vintage\" formats keep 30-year-old cards usable. Top players own $50K-$500K+ collections. The cost of leaving is enormous — backward compatibility is the moat.",
            hard:
              "MTG: ~$1B+ annual revenue, ~30B cards printed since 1993. Legacy/Vintage formats sustain backward compatibility. Top-collector exit cost ~$50K-$500K+ in foregone value. Same compatibility moat dynamics as Lego, scaled to a competitive game.",
          },
        },
      ],
      kicker: {
        easy: 'Lego. Pokemon. Hot Wheels. Magic. All worth billions. All using the same trick. Compatibility = collection = lifetime customer.',
        medium:
          "The compatibility moat is one of the most durable patterns in consumer business. Lego is the canonical example; Pokemon, Hot Wheels, and Magic prove the pattern generalizes.",
        hard:
          'Compatibility-based moats compound over decades. Visible across toys, games, collectibles, and software. The pattern\'s persistence reflects the underlying economic dynamic — switching cost rises with installed base.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You now understand WHY some toys make billions and others die fast: COMPATIBILITY. Old stuff fits new stuff. Collections grow. People NEVER want to start over. That\'s the trick.",
        medium:
          "You\'ve cracked the compatibility moat — installed base + switching cost + recurring purchase. The same pattern works in toys, games, software, and collectibles. Look for it everywhere.",
        hard:
          "You now understand the compatibility-moat thesis: how cross-generational interoperability creates durable competitive advantage. Generalizes across consumer categories with collection dynamics.",
      },
      bonusTip: {
        easy:
          "In 2004, Lego almost went BANKRUPT. They were losing tons of money. Then a new CEO cut HALF of their products and went all-in on Star Wars sets. By 2010 they were profitable again. By 2020 they were the biggest toy company in the world. Saved by IP licensing.",
        medium:
          "Lego 2004: nearly insolvent, ~$300M loss. Knudstorp CEO turnaround: cut SKUs from ~15,000 to ~7,000, doubled down on licensed IP (Star Wars launched 1999, accelerated post-2004). By 2014, Lego surpassed Mattel as world\'s largest toy company. Same compatibility, plus IP layer.",
        hard:
          "Lego turnaround case study (2004-2010): Knudstorp era. SKU rationalization (15K → 7K), IP licensing acceleration (Star Wars, HP, Marvel, DC), supply-chain restructuring. Outcome: returned to profitability 2005, surpassed Mattel by 2014. Now ~$10B revenue, ~20% operating margin. Compatibility was preserved; IP layer added.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'lego',
        emoji: '🧱',
        title: {
          easy: 'Audit YOUR collection!',
          medium: 'Conduct a personal collection audit + value analysis',
          hard: 'Run a quantitative audit of one personal collection',
        },
        pitch: {
          easy:
            "Pick your BIGGEST collection (Lego, Pokemon, books, dolls — whatever). Count it. Figure out how OLD it is. Figure out what would make you QUIT it. That\'s your personal moat.",
          medium:
            "Pick the collection you\'ve invested most in. Count items, age the collection, estimate cumulative spend, and identify your switching cost. Then identify the company\'s moat dynamics.",
          hard:
            "Quantitative audit of one collection: installed-base count, age, cumulative-spend estimate, switching-cost analysis. Identify the architectural choices that create the moat.",
        },
        steps: [
          {
            emoji: '🎯',
            text: {
              easy: 'Pick ONE collection (your biggest one).',
              medium: 'Select the largest personal collection — Lego, Pokemon, books, dolls, etc.',
              hard: 'Select highest-installed-base personal collection for audit.',
            },
          },
          {
            emoji: '📊',
            text: {
              easy: 'Count it. (Estimate is fine for big ones.) Write the number on your worksheet.',
              medium: 'Count or estimate installed base (number of items / pieces / cards).',
              hard: 'Estimate installed-base size. Note: order-of-magnitude is sufficient for the analysis.',
            },
          },
          {
            emoji: '🗓️',
            text: {
              easy: 'When did you START collecting? How old is the oldest piece?',
              medium: 'Date the collection — first purchase date + age of oldest item.',
              hard: 'Establish collection age and first-purchase date for tenure analysis.',
            },
          },
          {
            emoji: '💵',
            text: {
              easy: 'Guess: how much money have you (or your parents) spent on this collection in total?',
              medium: 'Estimate cumulative spend (lifetime cost). Order-of-magnitude is fine.',
              hard: 'Order-of-magnitude cumulative-spend estimate. Variance high; OoM sufficient.',
            },
          },
          {
            emoji: '🚪',
            text: {
              easy: 'What would MAKE YOU QUIT this collection? Be honest. What\'s your "I would stop" reason?',
              medium: 'Identify your personal switching threshold. What would have to happen for you to stop buying?',
              hard: 'Switching-cost analysis: what\'s the marginal cost / event that would trigger collection exit?',
            },
          },
        ],
        reflection: [
          {
            key: 'collection',
            prompt: {
              easy: 'What did you audit?',
              medium: 'Collection name + category',
              hard: 'Collection + category + market position',
            },
            type: 'text',
            placeholder: 'Pokemon trading cards',
          },
          {
            key: 'count',
            prompt: {
              easy: 'How many do you have?',
              medium: 'Installed base size',
              hard: 'Installed base (count)',
            },
            type: 'number',
            placeholder: '350',
          },
          {
            key: 'spend',
            prompt: {
              easy: 'How much money has been spent total (estimate)?',
              medium: 'Cumulative spend estimate',
              hard: 'OoM cumulative spend',
            },
            type: 'number',
            suffix: '$',
            placeholder: '400',
          },
          {
            key: 'switching',
            prompt: {
              easy: 'What would make you QUIT this collection?',
              medium: 'Switching threshold — what would make you stop buying?',
              hard: 'Switching-cost analysis: trigger event for exit',
            },
            type: 'longtext',
            placeholder: 'Probably if they stopped making the new ones I like…',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What did you NOTICE about your own collecting?',
              medium: 'Biggest insight from auditing your collection',
              hard: 'Largest insight delta about your purchase behavior',
            },
            type: 'longtext',
            placeholder: 'I realized…',
          },
        ],
        parentNote: {
          easy: "Help the kid count if the collection is huge. Estimate is fine. The point is to see the SCALE of what they\'ve accumulated.",
          medium:
            "Light parental involvement in counting. The lesson is metacognitive — kid realizes how much they own + how much has been spent + what would unstick them. Often the first time a kid sees the cumulative scale.",
          hard:
            "Encourage honest accounting. The cumulative-spend estimate is often surprising and instructive. Discussion of switching cost is the analytical payoff.",
        },
        printables: {
          trackers: [
            {
              title: 'Collection Audit Sheet',
              note: 'One row per category. Estimate is fine for big collections.',
              columns: ['Collection', 'Total Items', 'First Item Age', 'Estimated Total $', 'My Switching Cost (1-10)'],
              rows: 3,
            },
          ],
          worksheets: [
            {
              title: 'My Personal Moat',
              blocks: [
                {
                  label: '🎯 Collection I\'m auditing',
                  hint: 'Pick the biggest one.',
                  lines: 1,
                },
                {
                  label: '📊 Total items I own',
                  hint: 'Count them or estimate.',
                  lines: 1,
                },
                {
                  label: '🗓️ How old is the OLDEST item?',
                  hint: 'Days? Months? Years?',
                  lines: 1,
                },
                {
                  label: '💵 Estimated total spent (by me + family)',
                  hint: 'Best guess. Order of magnitude is fine.',
                  equation: '$ _______',
                },
                {
                  label: '🚪 What would make me QUIT this collection?',
                  hint: 'Be honest. Discontinued? Lost interest? Switched to something else?',
                  lines: 4,
                },
                {
                  label: '🛡️ Why doesn\'t a competitor just COPY this?',
                  hint: 'What\'s the moat that keeps the company you\'re buying from in business?',
                  lines: 4,
                },
                {
                  label: '💡 Insight: how the company uses your collection to keep you buying',
                  hint: 'What do they do that locks you in?',
                  lines: 4,
                },
                {
                  label: '✏️ Draw your collection',
                  hint: 'Sketch your shelf, binder, drawer — wherever it lives.',
                  lines: 8,
                },
              ],
            },
          ],
          checklists: [
            {
              title: 'Audit Day Checklist',
              items: [
                'A safe spot to lay everything out',
                'A counting strategy (rows, stacks, piles of 10)',
                'A pen + the worksheet printed',
                'A grown-up to help estimate total cost',
                'Honest reflection — no judgment, just observation',
                'A phone or camera to photograph the collection (with grown-up permission)',
                '30-45 minutes for the audit',
              ],
              note: 'Tip: lay it ALL out before you start counting. Seeing it together is half the lesson.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
