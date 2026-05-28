/**
 * Survey Master — ask before you build (the customer research lesson).
 *
 * Goal: take a kid from "I'll just guess what people want" → to "5
 * minutes of asking saves weeks of building the wrong thing" → to
 * actually running a 10-person, 3-question survey on a real decision
 * and acting on the data.
 *
 * Phase 4 closer.
 *
 * Beat order:
 *   intro → decision (YouTube channel: jump in / SURVEY first / wait
 *   forever) → think-deeper (why asking beats guessing — confirmation
 *   bias, iceberg of preferences, real-vs-imagined customers) →
 *   concept-cards (Survey/Sample Size/Question Bias/Decision) →
 *   calc-challenge (10 surveyed, 7 prefer chocolate → 35 of 50 should
 *   be chocolate) → brainstorm (pick decision + draft 3 questions) →
 *   connect (Apple, Netflix thumbnail testing, Google 7K A/B tests/yr,
 *   Pixar Brain Trust) → outro → mission (real 10-person survey + data
 *   decision + counterfactual comparison).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'survey-master',
  themeKey: 'research',
  emoji: '📋',
  title: 'Survey Master',
  subtitle: {
    easy: 'Ask 10 people 3 questions. Save yourself weeks of building the wrong thing.',
    medium:
      'Customer research: how a 5-minute survey beats months of guessing — and what makes a good question.',
    hard:
      'Customer development methodology at micro-scale: hypothesis → validated learning via structured survey design.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'thinking',
      text: {
        easy:
          "Grown-ups spend MILLIONS of dollars building products NOBODY wants. Why? They didn\'t ASK first. They GUESSED. Today: how to ask 10 people 3 questions and save yourself WEEKS of building the wrong thing.",
        medium:
          "The #1 reason new products fail isn\'t bad code, bad design, or bad marketing — it\'s building something nobody wanted. 5 minutes of customer research catches this. Today: how to design a survey that gives you real signal, and how to act on what you hear.",
        hard:
          "Customer-development methodology (Steve Blank): the empirical observation that ~70%+ of new-product failures stem from build-first-validate-later sequencing. Structured customer research at the hypothesis stage prevents most of the loss. Today: surveys as the cheapest viable instrument.",
      },
    },

    // ─── Decision: start a YouTube channel ────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 You Want a YouTube Channel',
      scenario: {
        easy:
          "You want to start a YouTube channel. You\'ve got tons of ideas. Three different ways to get started.",
        medium:
          "Greenfield content business: YouTube channel launch. Three sequencing strategies — execute-first, research-first, or analysis-paralysis.",
        hard:
          "New venture decision: content channel launch. Three sequencing strategies: build-first (ship and learn), validate-first (ask first), defer (analysis without action). Optimize for path to viable product.",
      },
      question: {
        easy: 'How do you start?',
        medium: 'Pick your sequencing:',
        hard: 'Optimize venture launch sequencing:',
      },
      choices: [
        {
          label: {
            easy: 'JUST START FILMING. Pick a topic and go.',
            medium: 'Build-first — pick a topic, ship 5 episodes, see what happens',
            hard: 'Execute-then-validate — assume product-market fit, iterate on responses',
          },
          feedback: {
            easy:
              "Sounds energetic, but… you spent WEEKS on a topic nobody wanted to watch. After 3 videos with 8 views each, you\'re burned out and quitting.",
            medium:
              "High activity, low signal. Build-first wastes effort on hypotheses that quick research would reject. Sustainable only when the cost of building is trivial vs. learning from market response.",
            hard:
              "Sub-optimal when build cost > research cost. Build-first is rational for ultra-cheap MVPs (< 1 day effort). For multi-week investments, validation should precede execution.",
          },
        },
        {
          label: {
            easy: 'ASK 10 FRIENDS first what they\'d ACTUALLY watch. THEN start.',
            medium: 'Survey-first — interview 10 target viewers, validate topic, then ship',
            hard: 'Validate-first — structured customer research, then build informed product',
          },
          feedback: {
            easy:
              "SMART. 10 conversations. 30 minutes total. Now you know what people actually WANT — not what you GUESSED. Your channel\'s first video has a topic 7 out of 10 friends already said they\'d watch.",
            medium:
              "Optimal. Research costs an hour; saves weeks of misallocated build. The hypothesis you ship is the validated one, not the imagined one. Conversion + retention dramatically better.",
            hard:
              "Aligned with customer-development best practice. 30-60 minutes of structured research front-runs weeks of misallocated build. Validated hypotheses convert at 2-5× imagined ones.",
          },
          isPreferred: true,
        },
        {
          label: {
            easy: 'Wait. Think more. Maybe never start.',
            medium: 'Analysis paralysis — keep planning indefinitely',
            hard: 'Indefinite deferral — never enter market',
          },
          feedback: {
            easy:
              "0 videos. 0 viewers. 0 learning. The OPPOSITE of starting. Bad.",
            medium:
              "Worst of all worlds: full opportunity cost, no learning, no progress. Analysis without action is the most common new-venture failure mode behind \"wrong product.\"",
            hard:
              "Maximum opportunity cost: never validates AND never builds. Deferral is the modal failure mode for risk-averse founders. The cost of indefinite wait often exceeds the cost of a wrong build.",
          },
        },
      ],
      realWorldReveal: {
        easy:
          "The TRICK isn\'t \"just start\" or \"never start.\" It\'s ASK FIRST. 10 people. 3 questions. 30 minutes. Then DECIDE based on what you HEARD, not what you imagined.",
        medium:
          "Customer development (Steve Blank, ~2005): the discipline of validating hypotheses with real customers before committing to build. The framework is now standard in YC, top accelerators, and most modern startup playbooks. Apply at any scale.",
        hard:
          "Customer development (Blank, 2005) formalized validation-before-build as the dominant new-venture methodology. Subsequent empirical work (Eric Ries, Lean Startup, 2011) confirmed reduced failure rates. Now standard practice in YC, Techstars, and most accelerators.",
      },
    },

    // ─── Think-deeper: why asking beats guessing ──────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Does ASKING Beat GUESSING?',
      intro: {
        easy: "Your idea SOUNDS GOOD to you. So why don\'t you just go build it?",
        medium: "If you understand the customer, why bother validating? Why is asking dramatically better than confident-guessing?",
        hard: 'What\'s the systematic gap between founder-conception and customer-revealed preference?',
      },
      layers: [
        {
          question: {
            easy: 'When YOU imagine your product, WHO do you imagine using it?',
            medium: 'Who does the builder imagine when designing for "the customer"?',
            hard: 'What\'s the systematic distortion in founder imagined-customer model?',
          },
          reveal: {
            easy:
              "YOURSELF. You imagine someone EXACTLY LIKE YOU using it. But the people who\'ll actually USE your thing are NOT YOU. They have different worries, different favorites, different time.",
            medium:
              "Builders model the customer as themselves — same preferences, same context, same priorities. The actual customer base differs systematically. False-consensus bias is the dominant distortion.",
            hard:
              "False-consensus effect: builders systematically overestimate the extent to which others share their preferences. The actual customer base distributes around very different priorities. Research counteracts the bias by surfacing real distributions.",
          },
        },
        {
          question: {
            easy: 'What does it COST to ask 10 people 3 questions?',
            medium: 'What\'s the marginal cost of validation?',
            hard: 'What\'s the cost-of-research relative to cost-of-build?',
          },
          reveal: {
            easy:
              "About 30 MINUTES. Maybe 1 hour if you write the questions carefully. That\'s it. 1 hour. Compared to WEEKS of building the wrong thing.",
            medium:
              "Customer-research cost: ~30-60 minutes for a basic 10-person 3-question survey. Build cost: typically 10-100× the research cost. Cost ratio overwhelmingly favors research-first.",
            hard:
              "Research-to-build cost ratio: ~1:10 to 1:100 typical. Even at low signal-quality, research-first has dominantly favorable expected value vs. build-first under any reasonable failure-rate assumptions.",
          },
        },
        {
          question: {
            easy: 'What\'s the BIGGEST mistake people make when they ask?',
            medium: 'What\'s the most common survey design error?',
            hard: 'What\'s the dominant flaw in amateur survey research?',
          },
          reveal: {
            easy:
              "They ASK QUESTIONS THAT ALREADY SAY THE ANSWER. \"Don\'t you LOVE chocolate chip cookies?\" Of course they\'ll say yes. They\'re being POLITE. Useless data.",
            medium:
              "Leading questions. Questions that telegraph the desired answer produce confirmation rather than information. \"How much would you pay for X?\" works; \"Wouldn\'t X be amazing?\" doesn\'t.",
            hard:
              "Question bias: leading phrasing produces response acquiescence rather than authentic preference data. Open-ended + neutral phrasing > leading + closed phrasing. The bias is the dominant amateur error.",
          },
        },
        {
          question: {
            easy: 'How do you ASK in a way that gets HONEST answers?',
            medium: 'What makes a question yield real signal?',
            hard: 'What characterizes high-information-yield questions?',
          },
          reveal: {
            easy:
              "Open-ended. Specific. About the PAST not the future. \"What\'s the LAST cookie you bought?\" beats \"Would you BUY mine?\" Past behavior is real data; future opinions are just guesses.",
            medium:
              "Open-ended + behavior-anchored questions. Ask about past behavior (\"last time you watched\"), not hypothetical future (\"would you watch\"). Behavior beats preference; reality beats hypothesis.",
            hard:
              "Behavioral anchoring: questions about past behavior yield reliable signal; hypothetical future preferences produce noise. Specific + open-ended + behavior-anchored question design is the empirical optimum.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Words of Customer Research',
      subheading: 'These run every focus group, every poll, every product test.',
      cards: [
        {
          emoji: '📋',
          title: 'Survey',
          desc: {
            easy: 'A SURVEY = a list of QUESTIONS you ask people. Short. Clear. Easy to answer. 3 questions for 10 people = perfect first survey.',
            medium:
              'A survey is a structured instrument for collecting preferences, behaviors, or opinions. Best surveys are short (3-5 questions), specific, behavior-anchored. Long surveys collapse response rates.',
            hard:
              'Surveys collect structured preference data via standardized questions. Optimal length 3-7 questions; longer surveys yield diminishing return + collapsing completion rates.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '👥',
          title: 'Sample Size',
          desc: {
            easy: 'SAMPLE SIZE = HOW MANY people you ASK. 5 is too few. 100 is overkill for a first try. 10-20 hits the sweet spot for kid-scale.',
            medium:
              'Sample size determines confidence. 10-20 is sufficient for binary signal (yes/no preferences). 50+ for nuanced distinctions. 100+ for statistical certainty. Most decisions don\'t need statistical certainty.',
            hard:
              'Sample size sets statistical power. For directional decisions, 10-20 sufficient; for nuanced preference distinctions, 50+; for statistical significance, 100+. Diminishing returns set in fast.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '⚠️',
          title: 'Question Bias',
          desc: {
            easy: 'QUESTION BIAS = when your QUESTION already tells people the answer. \"Don\'t you LOVE my idea?\" — they\'ll say yes to be NICE. Useless. Ask neutral things instead.',
            medium:
              'Question bias = phrasing that telegraphs the desired answer. Leading questions produce response acquiescence rather than honest preference. Neutral, open-ended, behavior-anchored questions are bias-resistant.',
            hard:
              'Question bias = systematic distortion from phrasing, ordering, or framing. Leading questions produce acquiescence; double-barreled questions yield ambiguous answers; specific anchors influence open-ended responses. Question design matters more than sample size.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '🎯',
          title: 'Decision',
          desc: {
            easy: 'DECISION = what you DO with the survey results. Asking is useless if you ignore the answers. Commit BEFORE you ask: \"I\'ll build whatever wins the vote.\"',
            medium:
              'Decision is the survey\'s purpose. Commit to a decision rule BEFORE seeing data — otherwise you\'ll cherry-pick. \"I\'ll pick whatever 60%+ of respondents prefer\" beats \"I\'ll do what feels right after seeing the results.\"',
            hard:
              'Decision-criterion specification is the discipline. Pre-commit to a decision rule before viewing data (e.g., \"if >60% prefer A, ship A\"). Post-hoc decision-making invites confirmation bias even on quality data.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: survey-to-decision math ──────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: What Should You Bake?',
      setup: {
        easy: 'You surveyed 10 friends. 7 said they\'d prefer CHOCOLATE CHIP cookies. You\'re going to bake 50 cookies total. How many should be chocolate chip?',
        medium:
          "Survey results: 10 respondents, 7 favor chocolate chip (70%). You\'ll produce 50 units total. How many should be chocolate chip per the data?",
        hard:
          "Survey result distribution: n=10, 70% favor SKU-A (chocolate chip). Production capacity 50 units. Allocate production per survey distribution.",
      },
      problem: {
        givens: [
          { label: 'respondents', value: 10 },
          { label: 'chocolate chip votes', value: 7 },
          { label: 'total cookies', value: 50 },
        ],
        answerLabel: 'Chocolate chip',
        answer: 35,
        suffix: 'cookies',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          "Step 1: 7 out of 10 = 70%. Step 2: 70% of 50 cookies = 35.\n\nSo bake 35 chocolate chip + 15 of the other flavors. NOW you\'re baking what people actually want. Not what you GUESSED. The data did the work.",
        medium:
          "70% × 50 = 35 chocolate chip + 15 others. The survey converted an unknown distribution into a known production target. Now you\'re allocating capacity to validated demand, not imagined demand.\n\nReal-world equivalent: Netflix tests thumbnails on small audiences before promoting widely. The 10-person preference distribution informs the 50-unit production allocation.",
        hard:
          "Allocation = 70% × 50 = 35 SKU-A, 15 SKU-B. Decision rule (commit before data): match production mix to revealed preference distribution.\n\nImplicit assumptions: respondents are representative of buyer population (selection bias risk), preferences stable from survey to purchase (preference falsification risk), production capacity matches optimal demand allocation (capacity constraint). All worth checking in real deployments. At kid scale, directional signal sufficient.",
      },
    },

    // ─── Brainstorm: design your survey ───────────────────────────────
    {
      kind: 'brainstorm',
      heading: '🔎 Your 3 Survey Questions',
      prompt: {
        easy:
          'Pick a REAL decision (party theme, channel topic, new cookie flavor). Write 3 questions you\'d ask 10 friends to make the decision.',
        medium:
          'Pick a real upcoming decision. Draft 3 survey questions: one behavior-anchored, one preference, one open-ended for surprises.',
        hard:
          'Design a 3-question instrument for a real decision. Question 1: behavior anchor. Question 2: forced-choice preference. Question 3: open-ended for unexpected signals.',
      },
      minItems: 3,
      placeholder: 'e.g. For party theme: "When was the last party you really enjoyed? What was the theme?"',
      hints: [
        {
          easy: 'BEHAVIOR QUESTION — ask what they DID, not what they\'d do. "What\'s the LAST [thing] you bought/picked?"',
          medium: 'Past-behavior anchor: "When did you last X?" or "What did you choose last time you did Y?" Behavior is real data; hypotheticals are noise.',
          hard: 'Behavior-anchored question: past-behavior reveals authentic preference patterns. Bias-resistant vs. hypothetical-preference questions.',
        },
        {
          easy: 'PREFERENCE QUESTION — give them choices. "Would you rather A, B, or C?" Forced choice reveals real preference.',
          medium: 'Forced-choice: present 2-4 specific options, no "all of the above." Forced choice extracts revealed preference vs. polite acquiescence.',
          hard: 'Forced-choice question: 2-4 mutually-exclusive options. Eliminates response acquiescence; surfaces actual preference ordering.',
        },
        {
          easy: 'OPEN-ENDED — ask one open question for SURPRISES. "What would you add or change?" Free-text catches things you didn\'t think of.',
          medium: 'Open-ended question: catches unexpected insights. "What would you change?" or "What\'s missing?" reveals the unknown unknowns.',
          hard: 'Open-ended question: low-structure prompt for serendipitous insights. Catches non-modeled customer concerns. Highest information-density per question.',
        },
        {
          easy: 'Keep each question SHORT. If a question takes 30 seconds to read, you lose your respondent.',
          medium: 'Keep questions under 15 words each. Long questions reduce completion rate and signal quality.',
          hard: 'Question brevity: <15 words optimal. Completion rate degrades sharply beyond 20 words; signal-to-noise drops with cognitive burden.',
        },
        {
          easy: 'NO LEADING. "Don\'t you LOVE my idea?" is a bad question. \"What do you think of this?\" is a good question.',
          medium: 'Neutral phrasing only. Avoid loaded words (\"amazing,\" \"awesome,\" \"would you LOVE\"). Use specific, neutral, observable.',
          hard: 'Neutral phrasing: avoid evaluative language in the question. Loaded words produce response acquiescence; neutral phrasing yields authentic signal.',
        },
        {
          easy: 'Test your questions on ONE person FIRST. If they\'re confused, fix the wording before asking the other 9.',
          medium: 'Pilot test with 1-2 respondents before launching the full survey. Catches phrasing problems cheaply.',
          hard: 'Pilot testing: 1-2 respondents before main survey. Identifies ambiguous wording + reveals cognitive friction. Standard customer-research practice.',
        },
      ],
      closer: {
        easy: 'Decide BEFORE you ask: "I\'ll do whatever 60%+ of people pick." That keeps you honest with the data.',
        medium:
          "Pre-commit to a decision rule before viewing results. Without pre-commitment, confirmation bias selects from the data you hoped for.",
        hard:
          'Decision-criterion pre-commitment: define the threshold (e.g., >60% preference) and action (ship that option) before viewing results. Eliminates post-hoc rationalization.',
      },
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Companies That Ask Before They Build',
      concept: {
        easy:
          'The world\'s biggest companies don\'t guess. They ASK + MEASURE + TEST CONSTANTLY. That\'s how they keep winning.',
        medium:
          "Top-performing companies invest heavily in customer research + experimentation. The empirical posture distinguishes winners from guessers.",
        hard:
          "Empirically-driven product development now dominates intuition-driven approaches across nearly every consumer-tech category. The methodology IS the competitive advantage.",
      },
      examples: [
        {
          emoji: '🎬',
          who: 'Netflix Thumbnail Testing',
          story: {
            easy: 'Netflix doesn\'t just GUESS which thumbnail to put on a show. They TEST a bunch. The thumbnail that gets clicked the MOST becomes the official one. Tiny picture = big traffic.',
            medium:
              "Netflix runs ~250 thumbnail variants per major title. They serve different thumbnails to different user segments and select the highest-CTR version. Same show, vastly different click rates depending on artwork. The thumbnail IS the marketing.",
            hard:
              "Netflix thumbnail testing: ~250 variants per title, personalized by user segment. Click-through rate optimization via A/B testing infrastructure. Same content; ~2× CTR delta between best + worst thumbnail. Pure data-driven product decision.",
          },
        },
        {
          emoji: '🧪',
          who: 'Google A/B Tests',
          story: {
            easy: 'Google runs about 7,000 A/B TESTS every YEAR. They never just say \"this looks better.\" They MEASURE it. If 51% of people click the blue button vs the red one — blue wins.',
            medium:
              "Google runs ~7,000 search experiments per year. Even tiny changes (button color, font size, spacing) get tested on real traffic before shipping. Of those 7,000, only ~10% ship — most ideas fail in testing. Empirical discipline at industrial scale.",
            hard:
              "Google A/B testing: ~7,000 search experiments per year, ~10% ship rate. Median experiment yields no significant effect; significant winners ship at micro-margins. Empirical posture is structural — assumption-driven shipping is institutional taboo.",
          },
        },
        {
          emoji: '🎨',
          who: 'Pixar\'s Brain Trust',
          story: {
            easy: 'Pixar\'s movies go through a "Brain Trust" — directors + writers tear apart each new movie idea and give HONEST feedback. EVERY Pixar movie was rewritten DOZENS of times because of feedback.',
            medium:
              "Pixar Brain Trust: directorial-level feedback group on every project. Every major Pixar release went through multiple major rewrites driven by Brain Trust feedback. Toy Story 2 was famously rebuilt in 9 months after a Brain Trust review identified the script wasn\'t working.",
            hard:
              "Pixar Brain Trust: institutionalized peer review at directorial level. Toy Story 2 rebuild (1999) post-Brain Trust review: complete narrative rewrite + reanimation in 9 months. Demonstrates the magnitude of value-add from structured critical feedback even at the elite-creator level.",
          },
        },
      ],
      kicker: {
        easy: 'Netflix. Google. Pixar. None GUESS. ALL ASK. ALL MEASURE. ALL test. You can run the kid version of the same thing.',
        medium:
          "The most successful product companies practice empirical discipline by default. Their advantage is the methodology, not the genius.",
        hard:
          'Empirical product development is now the dominant methodology at top consumer-tech, content, and CPG companies. The discipline scales from a 3-question survey to multi-thousand-variant A/B tests.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You now know what every smart builder knows: ASK FIRST. 10 people. 3 questions. 30 minutes. Saves you WEEKS of building the wrong thing. Use it forever.",
        medium:
          "You\'ve internalized customer-research discipline: validate before you build, behavior over hypothesis, pre-commit to decision rules. Now run one real survey.",
        hard:
          "You now understand customer-development methodology at micro-scale: hypothesis testing, behavior-anchored questions, decision-rule pre-commitment. Applies from a kid survey to a Series A go-to-market plan.",
      },
      bonusTip: {
        easy:
          "Crazy fact: Steve Jobs famously said \"customers don\'t know what they want.\" But Apple still does HUGE research before launching anything. They ASK what people HATE about CURRENT products — and fix that. Same trick, different angle.",
        medium:
          "Apple\'s research methodology: contextual inquiry + frustration mapping. Don\'t ask \"what do you want\" (hypothetical); ask \"what do you HATE about your current X\" (behavioral). Apple\'s product launches consistently address surfaced pain points rather than imagined wants.",
        hard:
          "Apple research methodology: ethnographic + contextual inquiry + frustration-mapping. Jobs\' \"customers don\'t know what they want\" is often misread — Apple\'s research is structured around revealed pain points + behavioral observation, not preference-elicitation surveys. The methodology gap matters more than the dictum.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'survey-master',
        emoji: '📋',
        title: {
          easy: 'Run a real 10-person survey + decide based on it!',
          medium: 'Execute one full survey-to-decision cycle on a real choice',
          hard: 'Run one customer-development cycle with pre-committed decision rule',
        },
        pitch: {
          easy:
            "Pick a REAL decision (cookie flavor, party theme, channel topic). Write 3 questions. Ask 10 family/friends. Use the results to DECIDE — even if you don\'t like what you hear.",
          medium:
            "Run a complete survey-to-decision cycle. Pick a decision. Design 3 questions (1 behavior, 1 preference, 1 open). Survey 10 people. Apply pre-committed decision rule. Compare to your pre-survey guess.",
          hard:
            "Execute one customer-development cycle: hypothesis, 3-question instrument, sample of 10, pre-committed decision rule, post-decision counterfactual analysis vs. pre-survey intuition.",
        },
        steps: [
          {
            emoji: '🎯',
            text: {
              easy: 'Pick a REAL upcoming decision (cookie flavor, theme, topic).',
              medium: 'Select a decision with multiple specific options.',
              hard: 'Decision selection: real upcoming decision with measurable options.',
            },
          },
          {
            emoji: '❓',
            text: {
              easy: 'Write 3 questions. 1 about past behavior, 1 preference, 1 open-ended.',
              medium: 'Draft 3 questions: behavior-anchored, forced-choice, open-ended. Test on 1 person before launching.',
              hard: 'Author 3-question instrument: behavior anchor, forced-choice preference, open-ended for unknowns. Pilot test.',
            },
          },
          {
            emoji: '✋',
            text: {
              easy: 'BEFORE asking, write down: \"I\'ll do X if 60%+ pick it.\"',
              medium: 'Pre-commit decision rule. Write it down BEFORE collecting any data.',
              hard: 'Pre-commit decision rule before data collection. Eliminates post-hoc rationalization.',
            },
          },
          {
            emoji: '👥',
            text: {
              easy: 'Ask 10 different people. Family, friends, neighbors. Write down every answer.',
              medium: 'Survey 10 respondents. Diverse selection. Log every response verbatim.',
              hard: 'Sample 10 respondents from diverse contexts. Verbatim response logging required.',
            },
          },
          {
            emoji: '📊',
            text: {
              easy: 'Count up the answers. Apply your DECISION RULE. Do what the data says.',
              medium: 'Tabulate responses. Apply pre-committed decision rule. Execute on the validated option.',
              hard: 'Tabulate + apply pre-committed rule. Execute on validated decision regardless of pre-survey preference.',
            },
          },
          {
            emoji: '🔍',
            text: {
              easy: 'Compare your survey decision to what you WOULD have guessed. How different?',
              medium: 'Compare survey-driven decision to pre-survey intuition. Note the delta.',
              hard: 'Counterfactual analysis: survey-driven choice vs. pre-survey intuition. Magnitude of delta is the value-add of research.',
            },
          },
        ],
        reflection: [
          {
            key: 'decision',
            prompt: {
              easy: 'What decision did you survey?',
              medium: 'Decision + options surveyed',
              hard: 'Decision + options + sample profile',
            },
            type: 'text',
            placeholder: 'Cookie flavor for the bake sale — chocolate chip, snickerdoodle, oatmeal raisin',
          },
          {
            key: 'guess',
            prompt: {
              easy: 'BEFORE surveying, what did you THINK people would pick?',
              medium: 'Pre-survey intuition',
              hard: 'Prior on most-preferred option',
            },
            type: 'text',
            placeholder: 'I thought oatmeal raisin',
          },
          {
            key: 'data',
            prompt: {
              easy: 'What did the 10 people ACTUALLY say (the winner)?',
              medium: 'Top preference + vote distribution',
              hard: 'Realized preference distribution',
            },
            type: 'text',
            placeholder: 'Chocolate chip — 7 out of 10',
          },
          {
            key: 'gap',
            prompt: {
              easy: 'Was your guess right or wrong? Surprised?',
              medium: 'Prior-vs-realized delta',
              hard: 'Counterfactual delta + insight',
            },
            type: 'longtext',
            placeholder: 'I was totally wrong — 7 out of 10 wanted chocolate chip…',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What did you learn about asking before deciding?',
              medium: 'Biggest insight from running a real survey',
              hard: 'Largest insight delta from running structured customer research',
            },
            type: 'longtext',
            placeholder: 'I didn\'t realize how wrong my guess could be…',
          },
        ],
        parentNote: {
          easy: "Honest answers count more than polite ones. If you\'re being surveyed, give the kid the real signal.",
          medium:
            "Provide honest responses. Polite-answers undermine the methodology being taught. The kid is learning to read real signal vs. social noise.",
          hard:
            "Engage as an honest respondent. Polite acquiescence corrupts the data and the methodological lesson. Authentic preference disclosure is the contribution.",
        },
        printables: {
          trackers: [
            {
              title: 'Survey Response Log',
              note: 'One row per respondent. Note any open-ended surprises.',
              columns: ['Respondent', 'Q1: Behavior', 'Q2: Preference', 'Q3: Open-ended'],
              rows: 10,
            },
          ],
          worksheets: [
            {
              title: 'Survey-to-Decision Worksheet',
              blocks: [
                {
                  label: '🎯 My decision',
                  hint: 'Specific. With 2-4 named options.',
                  lines: 2,
                },
                {
                  label: '🔮 My PRE-survey guess',
                  hint: 'What do YOU think the winner will be?',
                  lines: 2,
                },
                {
                  label: '❓ Question 1 — Behavior anchor',
                  hint: 'About past action. "When was the last time…"',
                  lines: 3,
                },
                {
                  label: '❓ Question 2 — Forced choice',
                  hint: 'Give 2-4 specific options.',
                  lines: 3,
                },
                {
                  label: '❓ Question 3 — Open-ended',
                  hint: 'Catches surprises. "What would you add/change?"',
                  lines: 3,
                },
                {
                  label: '✋ My DECISION RULE (written BEFORE asking)',
                  hint: '"I\'ll pick whatever 60%+ vote for." Be specific.',
                  lines: 3,
                },
                {
                  label: '📊 Response tally',
                  hint: 'Count per option after surveying all 10.',
                  lines: 4,
                },
                {
                  label: '🎯 The DECISION based on data',
                  hint: 'Apply your rule. Even if you don\'t like it.',
                  lines: 2,
                },
                {
                  label: '🔍 Pre-guess vs. data result',
                  hint: 'How different? What did the survey TELL you?',
                  lines: 4,
                },
              ],
            },
          ],
          checklists: [
            {
              title: 'Survey Day Checklist',
              items: [
                'Decision picked (with 2-4 specific options)',
                '3 questions drafted + pilot-tested with 1 person',
                'Decision rule WRITTEN DOWN before surveying',
                'Tracker sheet printed',
                '10 respondents identified (mix of family + friends)',
                'A pen + worksheet ready',
                'Polite intro line: "Can I ask 3 quick questions?"',
                'I promise to follow the data — even if I don\'t like it',
              ],
              note: 'Tip: don\'t TELL respondents your decision rule. They\'ll try to please you.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
