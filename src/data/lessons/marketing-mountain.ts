/**
 * Marketing Mountain — AIDA + word-of-mouth + the "best product silently dies" trap.
 *
 * Goal: take a kid from "make a great product and customers come" → to
 * "great product + zero marketing = zero customers; great product +
 * marketing = real sales" → to actually designing a real poster + 3-line
 * pitch + testing on 3 real testers.
 *
 * Beat order:
 *   intro → decision (best cookies in town — silent / one friend / full
 *   marketing) → think-deeper (attention scarcity, AIDA funnel,
 *   "great-product-dies" trap) → concept-cards (Attention/Interest/
 *   Desire/Action) → calc-challenge (40 cookies × $1 = $40 with
 *   marketing vs $5 without; 8× revenue) → brainstorm (pick something
 *   real + draft pitch) → connect (Super Bowl ads, Apple Think
 *   Different, TikTok viral, Coke $4B marketing budget) → outro →
 *   mission (real poster + 3-line pitch + 3-tester evaluation).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'marketing-mountain',
  themeKey: 'marketing',
  emoji: '📣',
  title: 'Marketing Mountain',
  subtitle: {
    easy: 'The best product on Earth sells ZERO if nobody knows about it.',
    medium:
      'The AIDA funnel — Attention, Interest, Desire, Action — explains every successful pitch in history.',
    hard:
      'Marketing as the gap between product quality and realized sales — and the AIDA discipline that closes it.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "You could bake the BEST cookies in the world. Perfect chocolate chips. Crispy edges. Soft middles. The greatest cookie ever. But here\'s the secret: if nobody KNOWS about them, you\'ll sell ZERO. Marketing is the MAGNET that pulls customers to you.",
        medium:
          "The single biggest reason great products fail isn\'t quality — it\'s OBSCURITY. \"Build it and they will come\" is one of the most expensive lies in business. Today: how attention works, what AIDA means, and how to design a 5-minute pitch that actually moves people.",
        hard:
          "Product quality is necessary but not sufficient. The dominant failure mode for good products is discovery failure — customers don\'t learn the product exists. The AIDA framework (Attention → Interest → Desire → Action) is the operating discipline that converts product quality into actual revenue.",
      },
    },

    // ─── Decision: market your cookies ────────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 You Made the World\'s Best Cookies',
      scenario: {
        easy:
          "You baked 50 of the BEST cookies anyone has ever tasted. Now you have to SELL them. You have three plans.",
        medium:
          "50 high-quality cookies ready to sell. Three go-to-market strategies. Same product, dramatically different outcomes.",
        hard:
          "Greenfield product launch: 50 SKU, quality-validated. Three GTM strategies — passive, single-channel viral, full AIDA execution. Optimize for sell-through.",
      },
      question: {
        easy: 'How do you sell them?',
        medium: 'Pick the GTM plan:',
        hard: 'Choose the optimal go-to-market motion:',
      },
      choices: [
        {
          label: {
            easy: 'Put them on the kitchen counter and HOPE people see them',
            medium: 'Passive availability — leave them on the counter, no outreach',
            hard: 'Passive distribution — zero customer-acquisition effort',
          },
          feedback: {
            easy:
              "5 cookies sold. Half the family doesn\'t even know they exist. Your beautiful cookies are STALE by Sunday. The COOKIE wasn\'t the problem — nobody KNEW.",
            medium:
              "Predictable failure. ~10% conversion at best on household members who notice. The product was great; the discovery layer was missing. Most quality products fail here.",
            hard:
              "Sub-optimal. Discovery is the binding constraint. Even excellent products underperform without targeted attention generation. \"Build it and they will come\" — Field of Dreams, not business.",
          },
        },
        {
          label: {
            easy: 'Tell ONE friend at school. \"Hey, I have cookies.\"',
            medium: 'Single-channel word-of-mouth — tell one person, hope it spreads',
            hard: 'Single-vector outreach — minimal sample-size, no amplification',
          },
          feedback: {
            easy:
              "Better! One friend tells one friend. Maybe you sell 10. But by the time word reaches everyone — your cookies are gone or stale. Slow.",
            medium:
              "Modest improvement, slow propagation. Single-vector messaging takes time to reach scale, and perishable goods don\'t wait. Need multi-vector concurrent outreach.",
            hard:
              "Improvement over passive, still sub-optimal for perishables. Propagation velocity matters; multi-vector concurrent outreach dominates single-vector sequential.",
          },
        },
        {
          label: {
            easy: 'Make a POSTER + tell 20 people + post on family WhatsApp',
            medium: 'Full AIDA: poster + direct ask + group message + social post',
            hard: 'Multi-vector concurrent marketing: visual + verbal + digital + social',
          },
          feedback: {
            easy:
              "WINNER. 40 of 50 cookies SOLD. The poster grabbed attention. The pitch made people interested. The friend asked, \"Are they good?\" You said \"BEST in town.\" They wanted them. They came. AIDA worked.",
            medium:
              "Optimal. Multi-vector outreach + AIDA messaging structure → 70-90% conversion possible. Concurrent attention generation + immediate purchase-action pipeline. Standard discipline for time-bounded launches.",
            hard:
              "Aligned with AIDA + multi-channel best practice. Concurrent vectors generate attention; structured messaging walks customer through interest → desire → action. Conversion ceiling 70-90% achievable for high-quality perishables in personal network.",
          },
          isPreferred: true,
        },
      ],
      realWorldReveal: {
        easy:
          "The OLDEST marketing model is called AIDA — 4 steps: ATTENTION (they see you), INTEREST (they want to know more), DESIRE (they want it), ACTION (they buy). Same 4 steps run every Super Bowl ad. Same 4 steps just sold your cookies.",
        medium:
          "AIDA (Attention → Interest → Desire → Action) was formalized in 1898 by Elias St. Elmo Lewis. It\'s been the dominant marketing model for 127 years because it accurately maps the customer decision journey. Every successful ad, sales pitch, and product launch follows the structure.",
        hard:
          "AIDA (Lewis, 1898): hierarchy-of-effects model. Customer must pass through each stage; failure at any stage halts conversion. 127-year persistence of the framework reflects empirical validity — every measurable marketing channel maps to one or more AIDA stages.",
      },
    },

    // ─── Think-deeper: attention scarcity ──────────────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Is Getting ATTENTION So Hard?',
      intro: {
        easy: "Everyone has stuff to sell. Everyone is yelling. Why can\'t people just HEAR you?",
        medium: "What\'s the structural reason marketing is so much harder than it sounds?",
        hard: 'What\'s the underlying scarcity that makes marketing the dominant business activity?',
      },
      layers: [
        {
          question: {
            easy: 'How many messages does the average person see in ONE day?',
            medium: 'What\'s the daily volume of marketing messages a person is exposed to?',
            hard: 'What\'s the modern ad-exposure rate?',
          },
          reveal: {
            easy:
              "About 6,000 to 10,000. Every ad on a phone. Every billboard. Every package on a shelf. Every TV commercial. Their brain BLOCKS most of them just to survive.",
            medium:
              "~6,000-10,000 marketing impressions per day in 2024. The brain filters >99% to prevent cognitive overload. Your message competes for the <1% that gets through.",
            hard:
              "Modern attention-scarcity: ~6-10K daily marketing impressions per adult; cognitive filtering rejects 99%+. The effective competition is for the marginal 50-100 messages that achieve awareness, of which perhaps 5-10 produce action.",
          },
        },
        {
          question: {
            easy: 'What MAKES a message break through the filter?',
            medium: 'What characteristics correlate with breakthrough?',
            hard: 'What\'s the breakthrough signal in attention-saturated environments?',
          },
          reveal: {
            easy:
              "SURPRISE. NOVELTY. EMOTION. Something funny. Something weird. Something the brain didn\'t expect. Boring messages stay invisible.",
            medium:
              "Surprise + emotional content + concrete imagery + relevance. The brain prioritizes novel, emotionally-loaded, personally-relevant signals. Predictable, abstract, generic messages get filtered.",
            hard:
              "Breakthrough correlates with: novelty (vs. priors), emotional intensity, concrete vs. abstract framing, personal relevance, narrative structure. The same attributes underlie viral content + memorable ads + persuasive pitches.",
          },
        },
        {
          question: {
            easy: 'Why does ATTENTION matter MORE than INFORMATION?',
            medium: 'Why does attention dominate information in marketing?',
            hard: 'Why is attention the binding constraint vs. information availability?',
          },
          reveal: {
            easy:
              "Because if I don\'t SEE you, nothing you SAY matters. The best info in the world is useless if it never gets noticed. Get the eyes first — then you can talk.",
            medium:
              "Information is abundant; attention is scarce. The marketing funnel always begins with attention because no subsequent stage activates without it. \"Best argument that nobody hears\" = no argument.",
            hard:
              "Attention is the binding constraint in modern information economies. Information overload makes information itself low-value; the scarce resource is the consumer\'s gaze + cognitive engagement. Attention IS the product being purchased.",
          },
        },
        {
          question: {
            easy: 'What\'s the WORD-OF-MOUTH SECRET?',
            medium: 'Why is word-of-mouth so dominant as a marketing channel?',
            hard: 'What\'s the unique attribute of word-of-mouth in the marketing mix?',
          },
          reveal: {
            easy:
              "A friend telling you \"this is GOOD\" beats 1,000 ads. Friends have TRUST. Trust skips the filter. Trust gets straight to DESIRE.",
            medium:
              "Word-of-mouth bypasses skeptic filtering. A trusted source\'s endorsement carries 10× the persuasive weight of equivalent paid advertising. The trust pre-built between the speaker + listener accelerates AIDA.",
            hard:
              "Word-of-mouth\'s unique attribute: pre-existing trust between source + receiver. Persuasion-per-impression substantially higher than paid media (10-50×). WOM is the highest-leverage marketing channel for high-quality products.",
          },
        },
      ],
    },

    // ─── Concept cards (4 — AIDA itself) ──────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The AIDA Funnel',
      subheading: '4 letters. 127 years old. Still the dominant model in marketing.',
      cards: [
        {
          emoji: '👀',
          title: 'A — Attention',
          desc: {
            easy: 'ATTENTION = they NOTICED you. A bright sign. A weird headline. Something that stops their eyes. Without attention, NOTHING else can happen.',
            medium:
              'Attention is the entry point. Visual hook, surprising headline, or memorable image. The first 1-3 seconds of any marketing encounter. No attention = no funnel.',
            hard:
              'Attention is the funnel entry. Visual / auditory / contextual hooks that stop cognitive filtering. Conversion of impression → attention is the first KPI in any marketing measurement.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🤔',
          title: 'I — Interest',
          desc: {
            easy: 'INTEREST = they want to KNOW MORE. \"Wait, what is that?\" They listen for an extra few seconds. They lean in.',
            medium:
              'Interest converts attention into curiosity. The customer engages cognitively — reads more, asks questions, lingers. Stage 2 of the funnel.',
            hard:
              'Interest stage: cognitive engagement with the proposition. Customer evaluates relevance, learns more, asks clarifying questions. Conversion of attention → interest is the second key metric.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '🔥',
          title: 'D — Desire',
          desc: {
            easy: 'DESIRE = they WANT it. They imagine themselves USING it. They feel they NEED it. Their brain is already buying.',
            medium:
              'Desire is the emotional acceptance — the customer pictures themselves using the product, identifies with it, anticipates the benefit. Stage 3, the conversion engine.',
            hard:
              'Desire stage: emotional commitment. Customer constructs the consumption scenario, anticipates the benefit, identifies the product as a solution. Strongest predictor of subsequent action conversion.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '🎯',
          title: 'A — Action',
          desc: {
            easy: 'ACTION = they BUY. They CLICK. They show up. Without action, all the attention + interest + desire was wasted. Make it EASY for them to act.',
            medium:
              'Action is the conversion event — the purchase, signup, or click. Friction at this stage destroys upstream funnel work. "Make it easy to say yes" is the action-stage rule.',
            hard:
              'Action stage: the conversion event. Friction reduction is the dominant optimization (clear CTA, simple purchase flow, immediate availability). Upstream success collapses if action friction is high.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: marketing lift ───────────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: Marketing Multiplier',
      setup: {
        easy: 'WITHOUT marketing, you sold 5 cookies at $1 each. WITH marketing (poster + pitch + texts), you sold 40 cookies at $1 each. How much MORE money did marketing earn you?',
        medium:
          "Comparison: silent launch sold 5 units @ $1; marketing-driven launch sold 40 units @ $1. Compute marketing lift in dollar terms.",
        hard:
          "Counterfactual revenue lift: silent baseline 5 units × $1 ASP, marketing-driven 40 units × $1 ASP. Compute incremental revenue from marketing investment.",
      },
      problem: {
        givens: [
          { label: 'silent sold', value: 5 },
          { label: 'marketing sold', value: 40 },
          { label: 'price each', value: 1, suffix: '$' },
        ],
        answerLabel: 'Marketing lift',
        answer: 35,
        suffix: '$',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          "Step 1: Silent revenue = 5 × $1 = $5. Step 2: Marketing revenue = 40 × $1 = $40. Step 3: Lift = $40 − $5 = $35 extra.\n\nThat\'s 8× more revenue from the SAME cookies. Marketing didn\'t change the cookies — it changed who SAW the cookies. The poster + texts cost you ZERO. Pure profit lift.",
        medium:
          "Silent: $5. Marketing-driven: $40. Lift: $35 (700% increase). Critical insight: the product was identical in both cases — marketing converted invisible inventory into sellable inventory.\n\nIn business terms: marketing ROI was infinite here (zero marketing cost). Real-world marketing ROI varies but commonly runs 5-20× for well-executed campaigns on quality products. The lift is the gap between product quality and product discoverability.",
        hard:
          "Marketing lift = $35 (700% increase over baseline). Marketing ROI infinite at zero CAC (poster + text are free).\n\nReal-world benchmarks: paid digital marketing ROI 3-8× for well-targeted campaigns; word-of-mouth ROI 10-50× (the highest-leverage channel for quality products). The mechanism is identical at every scale — closing the gap between product quality and customer discovery.",
      },
    },

    // ─── Brainstorm: design your own poster ───────────────────────────
    {
      kind: 'brainstorm',
      heading: '🪧 Your Pitch + Poster',
      prompt: {
        easy:
          'Pick something REAL you could sell or offer (cookies, art, chore service). Draft a POSTER + a 3-LINE PITCH. The poster gets ATTENTION; the pitch carries INTEREST → DESIRE → ACTION.',
        medium:
          'Design a marketing piece for something you actually offer. Poster headline + 3-line pitch covering interest hook, desire framing, action CTA.',
        hard:
          'Build a marketing artifact: visual hook + 3-line copy mapped to AIDA stages (interest establishes relevance, desire constructs benefit, action is the explicit CTA).',
      },
      minItems: 3,
      placeholder: 'e.g. Poster: "FRESH COOKIES — $1 EACH" / Pitch: "I baked these from scratch this morning..."',
      hints: [
        {
          easy: 'POSTER HEADLINE — bright, BIG, 3-5 words MAX. \"BEST COOKIES.\" Not a paragraph.',
          medium: 'Poster headline: 3-5 words, attention-stopping. The headline does ALL the attention work; everything else does the funnel.',
          hard: 'Poster headline: optimize for attention-capture in <1 second. 3-5 words max. Emotional + concrete + curiosity-triggering.',
        },
        {
          easy: 'INTEREST LINE — a fact that hooks them. \"Baked with REAL chocolate this morning.\"',
          medium: 'Interest line: concrete proof point that converts attention to curiosity. \"Fresh-baked this morning\" / \"Made with real butter\" / \"Family recipe from grandma.\"',
          hard: 'Interest line: concrete differentiator establishing relevance. Sensory + specific > abstract + generic. \"Hand-folded laminated dough\" beats \"high quality.\"',
        },
        {
          easy: 'DESIRE LINE — make them PICTURE eating it. \"Imagine biting into one with milk after school.\"',
          medium: 'Desire line: helps customer imagine using/consuming. \"Imagine [outcome]\" works. The customer mentally completes the experience before purchase.',
          hard: 'Desire line: anticipatory framing. Customer constructs the consumption scenario. Mental simulation precedes purchase commitment.',
        },
        {
          easy: 'ACTION LINE — tell them EXACTLY what to do. \"Find me in the kitchen. $1 each.\"',
          medium: 'Action line: explicit CTA. Where + how + price. Remove all friction. \"Pay me $1 in the kitchen\" beats \"available for purchase.\"',
          hard: 'Action CTA: explicit, friction-free. Specific action verb + specific location + specific price. Ambiguity kills conversion at the action stage.',
        },
        {
          easy: 'EMOJI or PICTURE — even one tiny drawing on your poster doubles how often eyes stop.',
          medium: 'Visual element: emoji/drawing/photo doubles attention capture vs. text-only. Visual processing is much faster than text.',
          hard: 'Visual hook: dramatically increases attention conversion. Pictures process in ~13ms vs. ~150ms for text. Lead with visual; reinforce with text.',
        },
        {
          easy: 'PUT THE POSTER WHERE PEOPLE ALREADY ARE — fridge, kitchen, front door.',
          medium: 'Placement: high-traffic, decision-context locations. Kitchen for food; bedroom door for chores; entry for general announcements.',
          hard: 'Placement: optimize for traffic density + decision-context relevance. The right ad in the wrong location yields zero impressions.',
        },
      ],
      closer: {
        easy: 'Practice your pitch out loud 3 times. Then go pitch a real person. Watch their face.',
        medium:
          "Test the pitch on real testers. Their face tells you which AIDA stage broke. Iterate fast.",
        hard:
          'A/B test the pitch on multiple testers. Failure points reveal which AIDA stage is the binding constraint for refinement.',
      },
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Marketing at Real Scale',
      concept: {
        easy:
          'The world\'s most famous brands spend MORE on marketing than they spend MAKING their products. Wild but true.',
        medium:
          'Major consumer brands often spend more on marketing than on production. Marketing IS the moat for high-frequency consumer products.',
        hard:
          'Marketing intensity for consumer brands routinely exceeds production cost. For undifferentiated products, brand IS the differentiator; marketing creates and sustains it.',
      },
      examples: [
        {
          emoji: '🎬',
          who: 'Super Bowl Ads',
          story: {
            easy: 'A 30-second ad during the Super Bowl costs about $7 MILLION. 30 seconds! That\'s $230,000 PER SECOND. Companies pay because 100+ million people will see it ALL AT ONCE.',
            medium:
              "Super Bowl 30-second spot: ~$7M in 2024. ~$230K/second. Companies pay because the event delivers ~120M concurrent viewers — the largest concentrated attention event on the U.S. calendar. CPM (cost per thousand impressions) actually reasonable despite the headline price.",
            hard:
              "Super Bowl 30s spot: ~$7M, ~120M viewers = CPM ~$58 (vs. average TV CPM ~$25-40). Premium reflects concentration + cultural moment + buzz multiplier. ROI economic mostly via brand-build rather than direct response.",
          },
        },
        {
          emoji: '🍹',
          who: 'Coca-Cola',
          story: {
            easy: 'Coca-Cola spends about $4 BILLION a YEAR telling you about a fizzy brown drink. EVERY year. For 100+ years. They make MUCH more from advertising than from making the soda.',
            medium:
              "Coca-Cola annual marketing spend: ~$4B globally. The drink is essentially a commodity (carbonated water + sugar + flavor); the brand is everything. Marketing as the moat — the product is interchangeable with store-brand alternatives, but Coke commands the premium because of brand.",
            hard:
              "Coca-Cola marketing budget: ~$4B/yr globally. Product COGS minimal; brand is the asset. Marketing intensity ratio (marketing / revenue) ~10%+. Brand-built differentiation in a commoditized category. 100+ year continuous investment compounds brand equity.",
          },
        },
        {
          emoji: '🏃',
          who: 'Nike — \"Just Do It\"',
          story: {
            easy: 'Nike\'s tagline \"Just Do It\" is just 3 words. But it\'s worth BILLIONS to them. People wear Nike not just for the shoes — but for what they STAND for.',
            medium:
              "Nike\'s 1988 \"Just Do It\" campaign drove revenue from ~$877M (1988) to ~$9.2B (1998) over 10 years — 10× revenue growth. 3 words. Genuine cultural penetration. Same shoes, vastly higher brand premium.",
            hard:
              "\"Just Do It\" (1988): drove Nike from ~$877M → ~$9.2B revenue 1988-1998. Decade of brand compounding from one campaign + sustained reinforcement. Demonstrates the magnitude of well-executed brand-building over decades.",
          },
        },
      ],
      kicker: {
        easy: 'Super Bowl. Coke. Nike. Your cookie poster. All running the SAME 4-step AIDA. Different scale. Same magic.',
        medium:
          'The AIDA discipline scales invariantly from kid cookies to billion-dollar campaigns. The fundamentals don\'t change with budget.',
        hard:
          'AIDA structure is scale-invariant. Multi-billion-dollar campaigns and kid-cookie pitches both succeed or fail at the same four stages. The discipline is universal.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You now know the 127-year-old secret of every marketer alive: AIDA. Get ATTENTION → spark INTEREST → build DESIRE → ask for ACTION. 4 steps. Endless uses.",
        medium:
          "You\'ve internalized the AIDA model. Now run it on something real — a poster, a pitch, a test on family. Watch the funnel actually work.",
        hard:
          "You now understand the AIDA hierarchy-of-effects model + the attention-scarcity foundation underneath. Apply at any scale — kid sales, professional campaigns, personal communication.",
      },
      bonusTip: {
        easy:
          "The MOST FAMOUS ad slogan in history is \"GOT MILK?\" Just 2 words. They ran it for 21 YEARS. Milk consumption ROSE because of those 2 words. 2 words. 21 years. Real magic.",
        medium:
          "\"Got Milk?\" (1993-2014): 21-year campaign credited with stabilizing U.S. milk consumption during a period of category decline. Two-word campaign sustained for two decades. Demonstrates the magnitude effect of consistent, well-targeted brand messaging.",
        hard:
          "\"Got Milk?\" California Milk Processor Board campaign (1993). Credited with stabilizing per-capita milk consumption in CA + nationally during a structurally declining category. 21-year campaign duration. Demonstrates brand-build effects at multi-decade scale even for commoditized goods.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'marketing-mountain',
        emoji: '📣',
        title: {
          easy: 'Design a poster + pitch — test on 3 people!',
          medium: 'Execute one AIDA-structured marketing piece + 3-tester validation',
          hard: 'Build and test one full AIDA campaign for a real offering',
        },
        pitch: {
          easy:
            "Pick something REAL you offer (cookies, chore, art, dog walking). Make a poster + write a 3-line pitch. Practice. Then pitch it to 3 family members. Track what worked.",
          medium:
            "Build a real AIDA artifact: poster (attention) + 3-line pitch (interest, desire, action). Test on 3 real reviewers; capture their stage-by-stage reactions; iterate.",
          hard:
            "Execute one complete AIDA cycle: visual hook + structured copy + 3-tester validation. Capture per-stage reaction + identify weakest AIDA stage for v2.",
        },
        steps: [
          {
            emoji: '🎯',
            text: {
              easy: 'Pick ONE real thing you\'re offering.',
              medium: 'Select the offering. Real product or service you can deliver.',
              hard: 'Offering selection: real deliverable with realistic customer base.',
            },
          },
          {
            emoji: '🪧',
            text: {
              easy: 'Make a POSTER. Big headline. Bright. Drawing or emoji. Hang it where people look.',
              medium: 'Design poster: bold visual + 3-5 word headline. Optimize for 1-second attention capture.',
              hard: 'Visual artifact design: headline + supporting visual + minimal clutter. Optimize attention-capture metric.',
            },
          },
          {
            emoji: '✍️',
            text: {
              easy: 'Write 3 LINES — one for interest, one for desire, one for action.',
              medium: 'Write 3-line pitch mapped to AIDA stages 2-4. Concrete + specific + frictionless CTA.',
              hard: 'Author 3-line pitch: I/D/A stages. Concrete proof + anticipatory framing + explicit CTA.',
            },
          },
          {
            emoji: '🗣️',
            text: {
              easy: 'Practice saying your pitch OUT LOUD 3 times before you test it.',
              medium: 'Rehearse out loud. Verbal flow matters more than written elegance for live pitches.',
              hard: 'Rehearsal: minimum 3 verbal iterations before live testing. Flow drives delivery; delivery affects test outcomes.',
            },
          },
          {
            emoji: '👀',
            text: {
              easy: 'PITCH 3 family members. Watch their face. Note what worked + what didn\'t.',
              medium: 'Test on 3 reviewers. Observe attention, engagement, response. Note breakthrough vs. friction points.',
              hard: 'Validation testing: 3 reviewers, observe AIDA-stage-specific reactions. Identify dominant failure stage for iteration.',
            },
          },
        ],
        reflection: [
          {
            key: 'offering',
            prompt: {
              easy: 'What were you marketing?',
              medium: 'Your offering + tested audience',
              hard: 'Offering + target audience',
            },
            type: 'text',
            placeholder: 'Homemade cookies, $1 each',
          },
          {
            key: 'headline',
            prompt: {
              easy: 'What was your poster headline?',
              medium: 'Your attention-capture headline',
              hard: 'Attention-stage hook (headline)',
            },
            type: 'text',
            placeholder: 'BEST COOKIES — TODAY ONLY',
          },
          {
            key: 'reactions',
            prompt: {
              easy: 'What did your 3 testers say or do?',
              medium: 'Reactions from 3 reviewers',
              hard: 'Per-tester reaction + AIDA stage at which they engaged/disengaged',
            },
            type: 'longtext',
            placeholder: 'Mom leaned in immediately when she saw the poster. Sister asked if they were chocolate chip…',
          },
          {
            key: 'weakest',
            prompt: {
              easy: 'Which step was WEAKEST — attention, interest, desire, or action?',
              medium: 'Weakest AIDA stage from the testing',
              hard: 'Identified weakest stage + diagnosis',
            },
            type: 'text',
            placeholder: 'Action — they liked it but didn\'t actually buy',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What surprised you about pitching for real?',
              medium: 'Biggest insight from running AIDA in person',
              hard: 'Largest insight delta from prior mental model of marketing',
            },
            type: 'longtext',
            placeholder: 'I didn\'t realize how much the poster\'s color mattered…',
          },
        ],
        parentNote: {
          easy: "Honest reactions! Don\'t pretend to be more interested than you are. The kid is learning to read real signal vs. polite signal.",
          medium:
            "Provide genuine reactions. Polite-praise teaches the wrong signal model. Honest first-impression feedback (positive AND negative) generates the most actionable testing data.",
          hard:
            "Engage as a real first-impression audience. Substantive reactions > polite encouragement. Honest signal teaches the kid to distinguish AIDA-stage breakdowns from confounding social politeness.",
        },
        printables: {
          trackers: [
            {
              title: '3-Tester AIDA Log',
              note: 'One row per tester. Note which AIDA stage they got stuck at.',
              columns: ['Tester', 'Attention? (Y/N)', 'Interest? (Y/N)', 'Desire? (Y/N)', 'Action? (Y/N)'],
              rows: 3,
            },
          ],
          worksheets: [
            {
              title: 'My AIDA Pitch Builder',
              blocks: [
                {
                  label: '🎯 What I\'m offering',
                  hint: 'Be specific — product/service + price.',
                  lines: 2,
                },
                {
                  label: '👀 ATTENTION — poster headline (3-5 words MAX)',
                  hint: 'Big. Bold. Memorable.',
                  lines: 1,
                },
                {
                  label: '✏️ Sketch the poster',
                  hint: 'Headline + emoji/picture + your hook.',
                  lines: 8,
                },
                {
                  label: '🤔 INTEREST — the FACT that hooks them',
                  hint: 'Concrete. Specific. Sensory if possible.',
                  lines: 3,
                },
                {
                  label: '🔥 DESIRE — paint the picture',
                  hint: '"Imagine [outcome]" or "Picture yourself [doing/eating/having]…"',
                  lines: 3,
                },
                {
                  label: '🎯 ACTION — exactly what they should do',
                  hint: 'Where + how + price. NO ambiguity.',
                  lines: 2,
                },
                {
                  label: '🗣️ Read it OUT LOUD — does it flow?',
                  hint: 'Time it. Aim for 15-30 seconds spoken.',
                  lines: 1,
                },
                {
                  label: '🔁 v2 changes after 3 testers',
                  hint: 'Top 2 fixes based on the AIDA log.',
                  lines: 3,
                },
              ],
            },
          ],
          signs: [
            {
              emoji: '📣',
              headline: 'YOUR HEADLINE HERE',
              subline: 'Your interest hook',
              pricePlaceholder: 'ACTION: $___ at ___',
              accent: '#FF65C5',
            },
          ],
          checklists: [
            {
              title: 'Marketing Toolkit',
              items: [
                'A real thing I\'m selling/offering — decided',
                'Big paper for the poster (printer paper or poster board)',
                'Bright markers or crayons',
                'My headline written down (3-5 words max)',
                'My 3-line pitch written + practiced out loud',
                'A timer to time my pitch (target 15-30 seconds)',
                'Tape to put the poster up',
                'A tracker sheet for the 3 testers',
                'A grown-up to help if needed',
              ],
              note: 'Tip: read your pitch to YOURSELF in a mirror first. If it sounds weird out loud, the words won\'t work on someone else.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
