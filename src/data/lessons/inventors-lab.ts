/**
 * Inventor's Lab — design thinking for kids.
 *
 * First non-numeric lesson in the rollout. The template flexes: the
 * calc-challenge slot is replaced by a SECOND decision beat (reacting to
 * prototype feedback) — because design thinking is about iteration
 * choices, not arithmetic.
 *
 * Goal: take a kid from "inventions are for geniuses" → to "inventions
 * start with an everyday annoyance + a willingness to try a v1" → to
 * actually building a real cardboard prototype for a real annoyance at
 * home and iterating after real feedback.
 *
 * Beat order:
 *   intro → decision (tangled shoes — live/buy/invent) → think-deeper
 *   (why don't more people invent?) → concept-cards (Problem/Prototype/
 *   Feedback/Iteration) → decision-2 (3 friends gave conflicting
 *   feedback — what now?) → brainstorm (3 annoyances near you) →
 *   connect (Velcro, Wright Brothers, Tetris kid) → outro →
 *   real-world-mission (build a real v1 + collect feedback + ship v2).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'inventors-lab',
  themeKey: 'inventor',
  emoji: '💡',
  title: 'Inventor\'s Lab',
  subtitle: {
    easy: 'Spot an annoyance. Sketch a fix. Build it. You\'re an inventor.',
    medium:
      'Design thinking — the loop every real inventor uses to turn an everyday annoyance into a real solution.',
    hard:
      'Design thinking, prototyping, and rapid iteration — operationalized at kid-scale with cardboard and tape.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Almost every invention started the same way: someone said \"this is ANNOYING. There has to be a better way!\" and then... they actually built one. Velcro. The wheel. Zippers. The lightbulb. The post-it note. Real people. Real annoyances. Real fixes.",
        medium:
          "Inventors aren\'t magic. They\'re people who notice an annoyance, refuse to live with it, and try a fix — even a bad one — before anyone tells them they can\'t. Today you\'ll learn the actual loop they use, then run it yourself.",
        hard:
          "Design thinking is the formalized version of what every great inventor already did intuitively: observe a real problem, prototype a crude solution, gather feedback, iterate. Today you\'ll internalize the loop and run it on a real annoyance in your home.",
      },
    },

    // ─── Decision: tangled shoes ─────────────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 The Tangled Shoes Problem',
      scenario: {
        easy:
          "Every morning, your shoes are tangled in a pile by the door. You step on a Lego, then trip, then run late. EVERY day. You\'ve got 3 ways to deal with it.",
        medium:
          "Your shoes are always tangled in a pile by the front door. You step on a Lego, trip, then run late for school. This has been happening for MONTHS. You\'ve got 3 options.",
        hard:
          "Recurring pain point at home: footwear pile-up causes morning friction (search cost + injury risk + tardiness). Three response strategies on the table.",
      },
      question: {
        easy: 'What do you do about it?',
        medium: 'What\'s your move?',
        hard: 'Pick the highest-leverage response:',
      },
      choices: [
        {
          label: {
            easy: 'Live with it — it\'s just how mornings are',
            medium: 'Accept it — every house has a shoe pile, no big deal',
            hard: 'Tolerate — accept the recurring cost as a fixed feature',
          },
          feedback: {
            easy:
              "Most people pick this. Years of stepped-on Legos and bruised toes. The annoyance NEVER goes away — it just becomes invisible. (You stop SEEING the problem. That\'s how inventions DON\'T happen.)",
            medium:
              "This is what 99% of people do — they normalize the annoyance until they no longer SEE it. Inventors are the 1% who refuse. The first step in inventing anything is staying annoyed when everyone else has gone numb.",
            hard:
              "Sub-optimal — habituation creates blindness. The annoyance recurs but cognitive recognition fades. Inventors are characterized by stubborn refusal to habituate to a fixable problem.",
          },
        },
        {
          label: {
            easy: 'Buy a fancy shoe rack from the store',
            medium: 'Buy something — go online and order a shoe rack',
            hard: 'Purchase a market solution — outsource the design',
          },
          feedback: {
            easy:
              "A shoe rack works! But your specific problem might be different. Maybe yours need to be near the wall, or short enough for your little brother. The store doesn\'t know YOUR house. So... pretty good, but not great.",
            medium:
              "Workable, but generic. The store sells shoe racks designed for an average house. Your house isn\'t average. The space, the family size, the shoes — none of it fits a standard product perfectly.",
            hard:
              "Reasonable, but bypasses the design insight. Off-the-shelf solutions assume average constraints; your constraints are specific. You miss the chance to build a custom solution AND the chance to learn the loop.",
          },
        },
        {
          label: {
            easy: 'INVENT something — make a shoe holder out of stuff you already have!',
            medium: 'Invent a fix — sketch it on paper, then build a prototype out of cardboard',
            hard: 'Prototype — design a custom solution from low-cost materials',
          },
          feedback: {
            easy:
              "YES! Real inventors\' move. Cardboard, tape, an old shoebox — you can build a v1 TODAY. It\'ll look ugly. Who cares. Inventions don\'t start beautiful; they start REAL.",
            medium:
              "The inventor\'s move. Sketch it, build v1 in 30 minutes from cardboard, see what works. The first version is supposed to be ugly. The point is to see if the IDEA works — beauty is for v3.",
            hard:
              "Aligned with design-thinking practice. Low-cost rapid prototyping reveals problems at the conceptual level before any capex. Cardboard + tape is the right fidelity for a v0 — you\'re testing the design, not the materials.",
          },
          isPreferred: true,
        },
      ],
      realWorldReveal: {
        easy:
          "Real story: the woman who invented Spanx (an outfit-helper) cut the legs off pantyhose at age 27 in her bedroom. The first \"prototype\" was a kitchen-scissors job. Today: a $1 BILLION company. From scissors. In her bedroom.",
        medium:
          "Sara Blakely invented Spanx in her bedroom at age 27 with kitchen scissors and a pair of pantyhose. The first prototype looked terrible. She wore it to a party anyway. Today Spanx is worth ~$1.2 billion. The first version of every great invention is ugly.",
        hard:
          "Sara Blakely\'s Spanx case study: $5K initial capital, kitchen-scissors prototype, no industrial design background. The MVP-first ethos applies at every scale — the prototype establishes the design hypothesis; polish follows iteration, not the other way around.",
      },
    },

    // ─── Think-deeper: why don't more people invent? ───────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Don\'t More People INVENT?',
      intro: {
        easy: "Everyone has annoying problems. Almost nobody invents fixes. What gives?",
        medium: "Every house has annoyances. Almost no household members invent fixes. Why?",
        hard: 'Why is the invention rate so much lower than the rate of fixable annoyances?',
      },
      layers: [
        {
          question: {
            easy: 'What do most people do when something is annoying?',
            medium: 'What\'s the default reaction to a recurring annoyance?',
            hard: 'What\'s the default human response to habitual friction?',
          },
          reveal: {
            easy:
              "They get used to it. Their brain stops noticing. After a few weeks of tangled shoes, you don\'t even SEE the pile anymore. It\'s just \"how mornings are.\"",
            medium:
              "They habituate. The brain literally adapts so the annoyance no longer registers. After enough repetitions, the friction stops being visible — even though it\'s still costing you time.",
            hard:
              "Habituation: a neurological adaptation that reduces salience of repeated stimuli. The cost stays; the awareness fades. This is the central enemy of invention.",
          },
        },
        {
          question: {
            easy: 'What\'s the SECRET inventors have?',
            medium: 'What do inventors do differently from the rest of us?',
            hard: 'What\'s the inventor\'s cognitive edge?',
          },
          reveal: {
            easy:
              "They STAY ANNOYED. They refuse to let their brain stop noticing. That\'s the magic move. Annoyance is information — they treat it like a clue.",
            medium:
              "Inventors keep the annoyance loud. They write it down, complain to a friend, sketch it on a napkin — anything to refuse habituation. The annoyance becomes a research note, not a fact of life.",
            hard:
              "Sustained problem-salience. Inventors externalize the annoyance (notes, sketches, conversations) to prevent neural adaptation from erasing it. The cognitive habit is the moat.",
          },
        },
        {
          question: {
            easy: 'What\'s the SECOND-secret? After noticing — what do they do?',
            medium: 'OK, they notice. Then what?',
            hard: 'How does noticing convert to invention?',
          },
          reveal: {
            easy:
              "They TRY. Even a bad fix. Even a cardboard one. Even one that breaks. Most people stop because they think the first try has to be GOOD. Inventors know v1 is supposed to be UGLY.",
            medium:
              "They build a bad first version. Cardboard, tape, duct-taped pencils — whatever\'s around. The point of v1 isn\'t to be good; it\'s to be REAL enough to learn from.",
            hard:
              "MVP discipline: the first prototype tests the design hypothesis, not the implementation quality. Premature polish wastes time on a design that hasn\'t been validated yet. Inventors deliberately ship ugly.",
          },
        },
        {
          question: {
            easy: 'What\'s the THIRD secret? After they try — what then?',
            medium: 'After v1 is built and it\'s ugly — what next?',
            hard: 'What converts an ugly v1 into a great v3?',
          },
          reveal: {
            easy:
              "They ask people to USE it. They LISTEN. They change it. Then ask again. Inventors don\'t fall in love with v1 — they fall in love with the next version after.",
            medium:
              "They get feedback fast. Hand it to a friend or sibling, watch them struggle, take notes. Then change the thing. Loop. The fast iteration loop is the actual skill — not the original idea.",
            hard:
              "Iteration cadence is the dominant variable. The team that runs 10 user-feedback cycles in a month beats the team that ships a single \"polished\" v1. Velocity-of-learning > quality-of-first-draft.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Inventor\'s 4-Step Loop',
      subheading: 'Every real inventor — from Velcro to the iPhone — used this exact cycle.',
      cards: [
        {
          emoji: '🔍',
          title: 'Problem',
          desc: {
            easy: 'A PROBLEM is the annoying thing you\'re going to fix. Tangled shoes. Stinky lunchbox. Tangled headphones. Specific. Real. Yours.',
            medium:
              'The problem is the concrete, observable annoyance. Specific > general — "my left shoelace keeps untying" beats "shoes are bad." Sharp problems lead to sharp solutions.',
            hard:
              'Problem definition is the highest-leverage step. Vague problem statements yield vague solutions. The discipline: narrow until the problem fits on a sticky note and is observable in real life.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🛠️',
          title: 'Prototype',
          desc: {
            easy: 'A PROTOTYPE is your first try. UGLY and FAST. Cardboard. Tape. Spit. The point is to make something REAL enough to test.',
            medium:
              'A prototype is the cheapest possible version that\'s real enough to use. Cardboard, paper, tape. It should look bad — that\'s the POINT. Beauty wastes time at this stage.',
            hard:
              'Prototype fidelity should match the question you\'re asking. Low-fi paper/cardboard for design hypothesis; functional for usability; production-grade only after validation.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '👂',
          title: 'Feedback',
          desc: {
            easy: 'FEEDBACK is asking other people to TRY your invention and tell you what\'s wrong. Watch them. Listen. Don\'t defend it — just LEARN.',
            medium:
              'Feedback = handing your prototype to a real user and watching them struggle. The watching is more useful than the talking. Pain points reveal themselves silently.',
            hard:
              'Direct user observation outperforms verbal feedback. Users self-report inaccurately but reveal preferences through behavior. Watch hands, faces, hesitations — they carry the signal.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '🔁',
          title: 'Iteration',
          desc: {
            easy: 'ITERATION = make v2. Then v3. Then v4. Don\'t throw away the whole thing — just FIX the parts people had trouble with.',
            medium:
              'Iteration is short cycles of change-and-test. v2 fixes what v1 broke. v3 fixes what v2 missed. Speed beats genius — 10 ugly iterations beat 1 polished perfect-shot.',
            hard:
              'Compound iteration: each cycle reduces design uncertainty. Velocity over polish — the team running 20 weekly iterations beats the team running 4 quarterly ones at almost any difficulty level.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Decision-2: react to feedback ────────────────────────────────
    {
      kind: 'decision',
      heading: '🧪 Your First Feedback',
      scenario: {
        easy:
          "You built a cardboard shoe-holder. THREE people tried it. Mom said \"I love it!\" Your sister said \"the slots are too small for boots.\" Your dad said \"it slides on the floor.\" Now what?",
        medium:
          "Your cardboard shoe-organizer prototype got real feedback. Mom: \"love it!\" Sister: \"boots don\'t fit.\" Dad: \"slides on the floor.\" Three reviewers, three reactions, one decision.",
        hard:
          "Prototype feedback collected from 3 reviewers. Reactions split between positive overall, dimensional sizing issue, and physical stability issue. Choose the next step:",
      },
      question: {
        easy: 'What do you do?',
        medium: 'What\'s your next move?',
        hard: 'Choose the iteration strategy:',
      },
      choices: [
        {
          label: {
            easy: 'Ship it! Mom loves it — good enough.',
            medium: 'Stay with v1 — one out of three loves it, that\'s a win',
            hard: 'Ship v1 — discount the negative signals as outliers',
          },
          feedback: {
            easy:
              "Risky. If it slides on the floor and doesn\'t fit boots, more people will hate it than love it the next time you show it. v1 is RARELY the final answer. Listen to the criticism.",
            medium:
              "Optimistic. Two of three reviewers found real problems — those problems will show up again with the next 10 users. \"Mom loves it\" is the easiest signal to get and the easiest to weight wrong.",
            hard:
              "Selection-bias risk. \"Love it\" feedback from a close relative is the noisiest signal in the dataset. The structural issues (size, stability) are higher-confidence and will recur.",
          },
        },
        {
          label: {
            easy: 'Fix the slots AND add a no-slip pad — make a v2!',
            medium: 'Build v2 fixing both real issues — bigger slots + non-slip base',
            hard: 'Iterate to v2 addressing both substantive feedback items',
          },
          feedback: {
            easy:
              "PERFECT inventor move. Two real fixes. One day of work. v2 will be way better. You didn\'t throw it away — you LEARNED from it. That\'s what real inventors do.",
            medium:
              "The right call. You\'re treating feedback as a debugger output, not as a personal attack. v2 will outperform v1 substantially because the changes target real failure modes, not guessed ones.",
            hard:
              "Aligned with iteration discipline. Both items are structural; both have low fix cost; both will recur. Single iteration cycle to address — high ROI.",
          },
          isPreferred: true,
        },
        {
          label: {
            easy: 'Throw it out and start completely OVER from scratch',
            medium: 'Scrap it — start a new design from zero',
            hard: 'Abandon v1, restart greenfield',
          },
          feedback: {
            easy:
              "Whoa, too far! Two small fixes ≠ throw it all out. Inventors who start over every time NEVER finish anything. Fix the small stuff. Keep moving.",
            medium:
              "Over-reaction. Two specific fixable issues don\'t invalidate the entire design. Restart-from-zero is what makes inventors stall — they always go back to a blank page and never compound learning.",
            hard:
              "Sub-optimal. Information from v1 evaporates if the v2 is greenfield. Compounding learning requires building on the prior iteration\'s validated parts; only restart when the design hypothesis itself is wrong.",
          },
        },
      ],
      realWorldReveal: {
        easy:
          "Real inventors keep the GOOD parts of v1 and only change the parts that broke. The Wright Brothers crashed their flying machine over 100 times — they fixed ONE part each time. Tiny fixes. Many tries. Eventually... they flew.",
        medium:
          "The Wright Brothers iterated their flying machine hundreds of times — small fixes, never a full restart. Each crash gave them data on ONE thing to fix. That\'s why they flew first, while better-funded teams started over each time and never got airborne.",
        hard:
          "Wright brothers vs Samuel Langley case study (1903): Langley had government funding and started over after each failure. Wrights ran rapid iteration cycles on a fixed glider architecture, only changing one variable per test. Outcome: Wrights flew first by a wide margin despite ~1% the budget. Iteration cadence won.",
      },
    },

    // ─── Brainstorm: 3 annoyances at home ─────────────────────────────
    {
      kind: 'brainstorm',
      heading: '🔎 Spot the Annoyances',
      prompt: {
        easy:
          'Walk around your house. List 3 SMALL annoying things you see EVERY day. Cables tangled? Drawer that sticks? Cup that always spills?',
        medium:
          'Spot 3 daily annoyances in your home. Specific things — not "bedroom is messy" but "my shoes always end up under the bed." Sharp problems → sharp solutions.',
        hard:
          'Identify 3 recurring micro-frictions in your living environment. Each should be: specific, observable, recurring at least daily, and within cardboard-prototype scope.',
      },
      minItems: 3,
      placeholder: 'e.g. The drawer where forks live always sticks closed...',
      hints: [
        {
          easy: 'Cables: phone chargers, headphones, computer wires — always tangled.',
          medium: "Cables, chargers, headphones — the universal annoyance with 1,000 possible fixes. Look at YOUR specific cable mess and ask what would help.",
          hard: 'Cable management is the most-prototyped category in maker culture for a reason: ubiquitous, observable, and the solution space is enormous.',
        },
        {
          easy: 'Shoes/coats/backpacks: where they pile up, where they fall, where you can\'t find them in a hurry.',
          medium: 'Entryway clutter — shoes, coats, backpacks, keys. Common but the specifics are house-specific. Your hallway is your problem statement.',
          hard: 'Entryway design is high-leverage because morning friction compounds over the year. Custom solutions reliably outperform off-the-shelf because constraints are spatial.',
        },
        {
          easy: 'Kitchen: drawers that stick, lids that don\'t fit, fridge magnets that fall.',
          medium: 'Kitchen ergonomics — lids, drawers, the hard-to-reach spice. Sub-problems are everywhere; pick a single one.',
          hard: 'Kitchen is a high-frequency space with many micro-frictions. Small fixes (drawer organizers, lid sorters) compound to large daily time savings.',
        },
        {
          easy: 'Backpack/desk: pencils everywhere, papers stuck together, the eraser you can never find.',
          medium: 'Desk and backpack chaos — supplies that scatter, papers that get bent. Strong candidates for cardboard solutions.',
          hard: 'Desktop organization scales to study habits. A custom pencil organizer is a 30-minute build with multi-year payoff.',
        },
        {
          easy: 'Bed: blanket that never stays on. Pillow that falls. Phone you can\'t find in the dark.',
          medium: 'Sleep-area annoyances — blanket slippage, phone-in-the-dark, pillow falling off. Classic micro-problems with cardboard-able fixes.',
          hard: 'Bedroom micro-frictions interrupt sleep and morning routines. Solutions often involve small structural changes (cup holder, phone caddy, light catcher).',
        },
        {
          easy: 'Pet stuff: leash that gets tangled, food that spills, toys that disappear.',
          medium: 'Pet-related annoyances — leashes, food bowls, toy storage. Pets can\'t complain so the annoyances often go unaddressed.',
          hard: 'Pet-care friction is a heavily under-solved category because the end user can\'t articulate the problem. Owner-observation is the design input.',
        },
      ],
      closer: {
        easy: 'Pick ONE annoyance — the SMALLEST, most annoying one. That\'s your invention. Start there.',
        medium:
          "Pick the smallest, most-recurring annoyance and build a v1 today. Small + frequent > big + rare for a first invention.",
        hard:
          'Optimize the first project for prototype-fitness, not impact magnitude. A small problem that you actually finish beats a big problem you abandon at v0.4.',
      },
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Real Inventors, Real Annoyances',
      concept: {
        easy:
          'Every famous invention started exactly the same way: someone got tired of an annoying problem and built a fix from junk in their garage.',
        medium:
          'The same loop you just learned — annoyance → prototype → feedback → iterate — built every major invention in modern history. Different tools, same loop.',
        hard:
          'Design-thinking practice is empirically the dominant invention methodology across categories. The loop scales from cardboard to silicon.',
      },
      examples: [
        {
          emoji: '🌿',
          who: 'Velcro',
          story: {
            easy: 'A man named George went walking with his dog. Sticky little burrs stuck to his dog\'s fur. He looked at them under a microscope and saw tiny HOOKS. \"What if I made FABRIC like that?\" he asked. 7 years later — Velcro.',
            medium:
              "1941: Swiss engineer George de Mestral noticed burrs sticking to his dog after a walk. Under a microscope he saw tiny hooks. He spent 7 years iterating until he made a fabric version. Velcro. Now used by NASA, the army, your shoes.",
            hard:
              "George de Mestral, 1941. Biomimicry case study: observed-in-nature mechanism (burdock hook) translated to manufactured loop-and-hook fabric over ~7 years of iteration. Patent 1955. Commercial scale ~1968.",
          },
        },
        {
          emoji: '✈️',
          who: 'The Wright Brothers',
          story: {
            easy: 'Two brothers who owned a BIKE SHOP built the first airplane. Not a science lab. A bike shop. They tried, crashed, fixed, tried again. Over 100 times. Then they flew.',
            medium:
              "Orville and Wilbur Wright owned a bicycle repair shop. They were not engineers. They built the first flying machine through hundreds of crash-and-fix cycles. December 17, 1903: first powered flight. 12 seconds. By 1908: an hour. That\'s iteration.",
            hard:
              "Wright Brothers, 1903. Iteration-velocity case study: 700+ glider tests + 1,000+ wind tunnel tests over 4 years. Distinguished from contemporaries by per-test variable isolation and design-of-experiments discipline. 12-second first flight 1903, 60+ min flights by 1908.",
          },
        },
        {
          emoji: '🎮',
          who: 'Tetris',
          story: {
            easy: 'A Russian computer guy named Alexey was BORED of his project. He made a little falling-blocks game on his computer for fun. Now it\'s on every phone in the world.',
            medium:
              "1984: Alexey Pajitnov, a researcher in Moscow, made a falling-block puzzle game as a side project. He showed it to friends; they couldn\'t stop playing. Tetris is now the best-selling video game of all time (520 million copies).",
            hard:
              "Tetris (Pajitnov, 1984). Personal-itch case study: built as researcher\'s side project, viral spread among colleagues, eventually licensed globally. Demonstrates that an inventor\'s own annoyance + craft excellence often produces broader market fit than market-research-led builds.",
          },
        },
      ],
      kicker: {
        easy: 'A walk. A bike shop. A boring afternoon. That\'s where inventions START. Yours could too.',
        medium:
          'None of them started with a lab. They started with annoyance + iteration. Tools came later. Yours might start with cardboard and tape today.',
        hard:
          'The capital and credential barrier to invention is much lower than commonly assumed. The cognitive habit of refusing to habituate is the actual scarce resource.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You now know the inventor\'s 4-step loop: Problem → Prototype → Feedback → Iterate. That\'s the same loop the Wright Brothers used. And George de Mestral. And Sara Blakely. And you, starting today.",
        medium:
          "You\'ve got the actual loop. Now go run it. Pick a real annoyance, build an ugly v1, get feedback, build v2. Repeat. That\'s every great invention — and every great inventor — in one sentence.",
        hard:
          "You now understand design thinking as a discipline rather than a flash of genius. The competitive edge is iteration velocity, not initial cleverness. Apply consistently and the rest is execution.",
      },
      bonusTip: {
        easy:
          "The kid who invented the Popsicle was 11. He left a cup of soda outside overnight with a stick in it. By morning it was frozen. He sold it. That\'s a $1 BILLION industry today. Annoyances → inventions, even at 11.",
        medium:
          "11-year-old Frank Epperson invented the popsicle in 1905 — he left soda mix and water outside overnight with a stir stick. By 1924 he patented it. Modern popsicle industry: ~$1B/year. From a kid forgetting his drink.",
        hard:
          "Frank Epperson, 1905, age 11 — accidental discovery patented 1924 as \"Epsicle\" then renamed Popsicle. Demonstrates that observation-driven invention works at any age, and that personal projects can scale to industry-defining categories.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'inventors-lab',
        emoji: '💡',
        title: {
          easy: 'Invent something this week!',
          medium: 'Build a real v1, get feedback, ship v2',
          hard: 'Execute one complete design-thinking iteration cycle',
        },
        pitch: {
          easy:
            "Pick ONE annoyance from your brainstorm list. Build a CARDBOARD fix. Show it to 3 people. Listen. Make a v2. You\'re an inventor.",
          medium:
            "Run the full inventor loop on a real annoyance at home. Sketch the fix, build v1 from cardboard/tape, collect feedback from 3 testers, ship v2 that addresses the feedback. Document the journey.",
          hard:
            "Complete one full design-thinking iteration: problem definition → low-fi prototype → 3-user feedback → v2 build. Capture each phase\'s output for review.",
        },
        steps: [
          {
            emoji: '🔍',
            text: {
              easy: 'Pick the ONE small annoyance you want to fix. Write it down.',
              medium: 'Pick a single small recurring annoyance. Write the problem in one sentence.',
              hard: 'Frame the problem in one sentence including the affected user, context, and recurrence rate.',
            },
          },
          {
            emoji: '✏️',
            text: {
              easy: 'SKETCH your idea on paper. Stick figures are fine. Doesn\'t need to be pretty.',
              medium: 'Sketch your idea on paper before building. The sketch forces you to make decisions early.',
              hard: 'Produce a labeled sketch — components, dimensions, expected user interaction. Helps surface ambiguity before build.',
            },
          },
          {
            emoji: '🛠️',
            text: {
              easy: 'Build v1 out of CARDBOARD, tape, string — whatever you have. UGLY is fine!',
              medium: 'Build v1 in <60 minutes from materials at home. Optimize for "real enough to test," not pretty.',
              hard: 'Build v1 within a fixed time-box (60-90 min). Use only available materials. Document failure modes encountered.',
            },
          },
          {
            emoji: '👀',
            text: {
              easy: 'Show it to 3 different people. WATCH them try it. Take notes!',
              medium: 'Give v1 to 3 different testers. Watch silently while they use it. Note what works + what fails.',
              hard: 'Conduct 3 user-observation sessions. Prioritize observed-behavior signal over verbal feedback.',
            },
          },
          {
            emoji: '🔁',
            text: {
              easy: 'Build a v2 that fixes the TOP TWO problems people had. Show it again!',
              medium: 'Build v2 addressing the two highest-priority feedback items. Re-test with at least 1 of the original testers.',
              hard: 'Iterate to v2 targeting the top 2 highest-frequency or highest-severity issues. Re-test for regression.',
            },
          },
        ],
        reflection: [
          {
            key: 'problem',
            prompt: {
              easy: 'What annoyance did you fix?',
              medium: 'Your one-sentence problem statement',
              hard: 'Problem framing (user × context × frequency)',
            },
            type: 'text',
            placeholder: 'Tangled headphones in my backpack',
          },
          {
            key: 'feedback',
            prompt: {
              easy: 'What did people say about v1?',
              medium: 'Top 2 feedback items you got from your 3 testers',
              hard: 'Two most actionable feedback items + severity rating',
            },
            type: 'longtext',
            placeholder: 'My sister said the clip was too tight; my dad said…',
          },
          {
            key: 'v2',
            prompt: {
              easy: 'What did you change in v2?',
              medium: 'Two changes you made for v2',
              hard: 'v2 delta — components added, removed, modified',
            },
            type: 'longtext',
            placeholder: 'I made the clip bigger and added a sticky base…',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What surprised you about being an inventor?',
              medium: 'Biggest surprise about the iteration process',
              hard: 'Largest gap between your prior mental model and the observed loop',
            },
            type: 'longtext',
            placeholder: 'I thought my first version would be good. It wasn\'t. That was fine.',
          },
        ],
        parentNote: {
          easy: "Cardboard + tape + safety scissors is the whole kit. Encourage UGLY v1s — perfectionism kills inventions early.",
          medium:
            "Provide cardboard, tape, kid-safe scissors, markers. Resist the urge to suggest design improvements during v1 — let the kid run the loop themselves. The feedback comes from the testers, not from you.",
          hard:
            "Restrict adult input during prototype phase. The cognitive habit being developed (\"refuse to habituate to annoyances\") requires the kid to drive the iteration loop. Adult feedback can be one of the 3 user-observations, but not direction-setting.",
        },
        printables: {
          trackers: [
            {
              title: 'Feedback Log',
              note: 'One row per tester. Watch what they DO, not just what they SAY.',
              columns: ['Tester', 'What worked', 'What didn\'t', 'What I\'ll change in v2'],
              rows: 4,
            },
          ],
          worksheets: [
            {
              title: 'Inventor\'s Field Notes',
              blocks: [
                {
                  label: '🎯 The Problem',
                  hint: 'One sentence. Specific. Real.',
                  lines: 2,
                },
                {
                  label: '✏️ Sketch of v1',
                  hint: 'Draw it from the side. Label the parts.',
                  lines: 8,
                },
                {
                  label: '🛠️ Materials I used',
                  hint: 'What did you build it from?',
                  lines: 2,
                },
                {
                  label: '👀 What I observed when testers used it',
                  hint: 'What did they do? What faces did they make?',
                  lines: 4,
                },
                {
                  label: '🔁 v2 Changes',
                  hint: 'The 2 things I\'m fixing first.',
                  lines: 4,
                },
                {
                  label: '✏️ Sketch of v2',
                  hint: 'Draw the improved version. Show what changed.',
                  lines: 8,
                },
                {
                  label: '💭 What I learned about inventing',
                  lines: 4,
                },
              ],
            },
          ],
          checklists: [
            {
              title: 'Inventor\'s Toolkit',
              items: [
                'Cardboard (cereal box, shipping box, anything)',
                'Tape (masking tape works best for prototyping)',
                'Kid-safe scissors',
                'A pen or marker',
                'String, rubber bands, or paperclips',
                'A timer (limit v1 to 60-90 minutes)',
                'At least 3 people who will test for you',
                'Your printed Field Notes worksheet',
              ],
              note: 'Tip: don\'t go shopping for materials. Use what you have. The constraint is the point.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
