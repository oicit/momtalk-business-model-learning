/**
 * Deal Maker — negotiation for kids.
 *
 * Second non-numeric lesson in the rollout. The calc-challenge slot is
 * again replaced by a second decision beat — because negotiation is
 * about choosing among moves, not arithmetic.
 *
 * Goal: take a kid from "negotiation = fighting / arguing / being
 * rude" → to "negotiation = a structured exchange where both sides walk
 * away happy" → to actually pitching one real ask to a parent with
 * trade structure.
 *
 * Beat order:
 *   intro → decision (allowance raise — yell / make a deal / give up)
 *   → think-deeper (why is negotiation scary for most people?) →
 *   concept-cards (Trade/Listen-First/BATNA/Win-Win) → decision-2
 *   (parent says no — counter, pout, or ask "what would change your
 *   mind?") → brainstorm (3 trades you could propose) → connect
 *   (George Lucas + Star Wars merchandising, salary negotiations) →
 *   outro → real-world-mission (run one real negotiation with a parent).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'deal-maker',
  themeKey: 'deal-maker',
  emoji: '🤝',
  title: 'Deal Maker',
  subtitle: {
    easy: 'Negotiation is not fighting. It\'s a SUPERPOWER for getting what you want.',
    medium:
      'Real negotiation isn\'t loud — it\'s structured. Learn the moves grown-ups use, then run one yourself.',
    hard:
      'Negotiation as structured value exchange — BATNA, listening discipline, and the win-win frame, applied at kid scale.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "Most kids think negotiation = arguing + getting mad + parents saying NO. WRONG. Real negotiation is a calm, smart trade. The best negotiators in the world don\'t yell — they LISTEN. Today you\'ll learn the moves, then try one for real.",
        medium:
          "Forget what TV shows you about negotiation. Real negotiators don\'t yell — they ask questions. They don\'t push — they trade. Today you\'ll learn the actual structure pros use, then run one real ask with a parent this week.",
        hard:
          "Negotiation is structured value-exchange under information asymmetry. The skill stack: listening, BATNA articulation, win-win framing, and patience. Today you\'ll internalize the moves and apply one in a low-stakes home context.",
      },
    },

    // ─── Decision: allowance raise ────────────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 The Allowance Raise',
      scenario: {
        easy:
          "You make $5/week in allowance. Your friends get $10. You want a raise. Your parents are TIRED tonight. You\'ve got three ways to ask.",
        medium:
          "Your weekly allowance is $5. Your friends get $10. You want a raise — and you want it this week. Your parents are tired but reasonable. Three ways to approach the conversation.",
        hard:
          "Negotiation target: 100% allowance increase ($5 → $10). Counterparty state: fatigued, reasonable, has approved similar increases before. Three approach strategies on the table.",
      },
      question: {
        easy: 'How do you ask?',
        medium: 'What\'s your approach?',
        hard: 'Pick the highest-EV approach:',
      },
      choices: [
        {
          label: {
            easy: 'Yell, pout, slam the door — \"IT\'S NOT FAIR!\"',
            medium: 'Emotional appeal — argue it\'s unfair, push hard, make them feel guilty',
            hard: 'Confrontational approach — frame as injustice, apply emotional pressure',
          },
          feedback: {
            easy:
              "INSTANT no. Your parents are tired AND now you\'re making them stressed. They\'ll say no just to end the conversation — and remember it next time you ask for ANYTHING.",
            medium:
              "Almost always backfires. The counterparty exits the conversation faster than they entered. Even if you \"win,\" you damage future negotiations — they\'ll start any future conversation already defensive.",
            hard:
              "Negative EV. Emotional escalation triggers reciprocal defensiveness. You sacrifice the long-run relationship asset for a low-probability short-run win. Repeat games punish this strategy structurally.",
          },
        },
        {
          label: {
            easy: 'Make a DEAL — \"I\'ll do dishes every night if I get $10\"',
            medium: 'Propose a trade — \"What if I take on dishes daily? Would $10/week work?\"',
            hard: 'Trade-structure proposal — offer counterparty value to underwrite the ask',
          },
          feedback: {
            easy:
              "WINNER. Now they\'re thinking about getting CLEAN DISHES instead of saying no. You gave them a reason to say yes. That\'s the move.",
            medium:
              "Optimal. You\'ve reframed the conversation from \"give me more\" to \"here\'s a trade.\" They\'re now evaluating the value of your offer, not the cost of your ask. Decision posture flips from defensive to commercial.",
            hard:
              "Aligned with win-win frame. By bundling consideration with the ask, you shift the counterparty\'s decision-criterion from \"why should I give\" to \"is this trade worth it?\" — a much easier yes.",
          },
          isPreferred: true,
        },
        {
          label: {
            easy: 'Give up. Don\'t even ask.',
            medium: 'Stay quiet — wait until they bring it up themselves',
            hard: 'Defer — assume favorable terms will be offered without ask',
          },
          feedback: {
            easy:
              "Then nothing changes. You stay at $5 for another year. The number-one mistake in negotiation: NOT NEGOTIATING. The ask itself is most of the work.",
            medium:
              "The most common mistake in all of negotiation: not asking. Salary studies show people who don\'t negotiate their first job leave ~$500K on the table over a career. Not asking = guaranteed loss.",
            hard:
              "Worst expected value option. Negotiation losses from non-initiation compound. Career-level studies (Babcock & Laschever) find non-negotiators lose $0.5M-$1M+ over a 40-year career path. The ask is most of the value.",
          },
        },
      ],
      realWorldReveal: {
        easy:
          "Pros say this: \"I\'d LOVE to be able to say yes — what would make that work for you?\" That ONE question is the most powerful negotiation move in the world. Try it with your parents this week.",
        medium:
          "Pro move: \"I\'d love to be able to say yes — what would make that work for you?\" That single question is the most-taught line in negotiation classes worldwide. It flips the burden from defending your ask to designing a deal together.",
        hard:
          "Voss\' \"calibrated question\" pattern (Never Split the Difference). Open-ended, no-pressure, and shifts the counterparty into problem-solving mode. Functions in salary, M&A, hostage, and allowance negotiations identically.",
      },
    },

    // ─── Think-deeper: why is negotiation scary? ──────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Is Negotiation SCARY for Most People?',
      intro: {
        easy: "Even adults are afraid to negotiate. Why? Let\'s find out.",
        medium: "Most people, including grown-ups, find negotiation uncomfortable. Why?",
        hard: 'What\'s the underlying psychology of negotiation avoidance?',
      },
      layers: [
        {
          question: {
            easy: 'What is most people\'s biggest FEAR when they ask for something?',
            medium: 'What\'s the dominant fear in a negotiation?',
            hard: 'What drives non-initiation in negotiation contexts?',
          },
          reveal: {
            easy:
              "They\'re afraid of REJECTION. \"What if they say NO? What if they get MAD?\" That fear stops them before they ask.",
            medium:
              "Rejection fear. The brain treats a \"no\" as an actual loss, even though it leaves them in the same state they were already in. The asymmetric loss-aversion explains most non-asking.",
            hard:
              "Loss aversion. Tversky-Kahneman: losses register ~2× as intense as equivalent gains. The fear of \"no\" outweighs the prospect of \"yes\" by a factor that exceeds the actual outcome asymmetry.",
          },
        },
        {
          question: {
            easy: 'But if they say no... what actually CHANGES?',
            medium: 'But what\'s the real cost of a no?',
            hard: 'What\'s the true expected downside of a no?',
          },
          reveal: {
            easy:
              "NOTHING. You\'re right back where you started. Same allowance. Same situation. A NO doesn\'t TAKE anything away.",
            medium:
              "Nothing changes. You were going to NOT have the thing anyway; a no just confirms the current state. The downside of asking is identical to the downside of not asking.",
            hard:
              "Asymmetric payoff: P(yes)·gain + P(no)·0 ≥ 0 always. The status quo is preserved on rejection. Non-asking is dominated by asking under any non-zero P(yes).",
          },
        },
        {
          question: {
            easy: 'OK — so what\'s the FIRST thing a smart negotiator does?',
            medium: 'Smart negotiators do one thing before they speak. What?',
            hard: 'What\'s the pre-game move that distinguishes pros?',
          },
          reveal: {
            easy:
              "They LISTEN. They ask the OTHER person what THEY want first. \"Tell me about your week\" — sounds polite, but it\'s actually a NEGOTIATION MOVE.",
            medium:
              "They listen first. Real negotiators ask the other side what THEY want, what THEIR constraints are. The information they gather lets them design a deal the other side can say yes to.",
            hard:
              "Listening pre-empts the trade design. Information from the counterparty exposes constraints, preferences, and authority limits — all of which inform the optimal ask. Pros listen 70%+ of the conversation.",
          },
        },
        {
          question: {
            easy: 'What\'s the SECRET move pros use when someone says NO?',
            medium: 'When the other side says no, what do pros do?',
            hard: 'How do pros handle initial rejection?',
          },
          reveal: {
            easy:
              "They don\'t fight. They ask \"What would change your mind?\" or \"What would make this work?\" The \"no\" becomes a CLUE about what to fix.",
            medium:
              "They treat the no as data. \"What would change your mind?\" turns a wall into a doorway. The original ask was wrong; the next ask gets closer to what would work.",
            hard:
              "No is information, not termination. The follow-up calibrated question (\"how can we make that work?\") extracts the binding constraint and reframes the negotiation around it.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Moves Every Pro Uses',
      subheading: 'Master these and you can negotiate ANYTHING — from allowance to a first salary.',
      cards: [
        {
          emoji: '🔄',
          title: 'Trade',
          desc: {
            easy: 'A TRADE is when you both GIVE something to GET something. \"You give me $10/week, I give you clean dishes.\" Way better than just asking.',
            medium:
              'A trade structures the ask as an exchange: I give X, you give Y. Trades convert the counterparty\'s decision from \"why should I give in\" to \"is this exchange fair?\" — a much friendlier question.',
            hard:
              'Trade structure = bundled consideration. The exchange frames the negotiation as commercial rather than concessionary. Default to trades; concessions are the fallback.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '👂',
          title: 'Listen First',
          desc: {
            easy: 'BEFORE you ask, find out what the OTHER person wants and is worried about. They\'ll tell you exactly what to offer them.',
            medium:
              'Ask questions and listen before you pitch. \"How was your day?\" → \"What are you worried about lately?\" The information shapes the offer. Pros listen 70% of the conversation.',
            hard:
              'Information asymmetry favors the side that listens. Counterparty constraints, preferences, and BATNAs leak in casual conversation. Listening = free intelligence.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '🚪',
          title: 'BATNA',
          desc: {
            easy: 'BATNA = your BACK-UP plan if the deal doesn\'t happen. Always know it BEFORE you ask. If you have no back-up plan, you\'ll cave.',
            medium:
              'BATNA = Best Alternative To a Negotiated Agreement. Your fallback if they say no. A strong BATNA = power; weak BATNA = you take a worse deal because you can\'t walk away.',
            hard:
              'BATNA (Fisher & Ury, Getting to Yes) is the single highest-leverage piece of pre-game prep. Reservation price = your BATNA. Improving BATNA before negotiation > improving negotiation tactics during.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '🤝',
          title: 'Win-Win',
          desc: {
            easy: 'WIN-WIN = a deal where BOTH sides end up better off. The best deals aren\'t \"I won and you lost\" — they\'re BOTH winning. People say yes faster to win-win.',
            medium:
              'Win-win = a structured deal where both sides leave better off than they arrived. Pros design for this because it makes the counterparty an advocate for the deal, not an obstacle to it.',
            hard:
              'Integrative bargaining (Fisher-Ury) expands the pie before splitting it. Distributive bargaining over a fixed pie generates resentment; integrative bargaining generates relationships. Long-run cooperators outperform single-shot maximizers.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Decision-2: react to a no ────────────────────────────────────
    {
      kind: 'decision',
      heading: '🧪 They Said NO. Now What?',
      scenario: {
        easy:
          "You asked your mom for an EXTRA hour of screen time on Friday. She said NO. You\'re disappointed. Three things you could do next.",
        medium:
          "You proposed: \"Could I have one extra hour of screen time on Friday if I finish my homework by 5pm?\" Your mom said no. Three moves available.",
        hard:
          "Initial proposal rejected. You have three response options before the conversation closes.",
      },
      question: {
        easy: 'What\'s your next move?',
        medium: 'How do you respond?',
        hard: 'Pick the next move:',
      },
      choices: [
        {
          label: {
            easy: 'Pout, walk away mad',
            medium: 'Drop it — they said no, end of story',
            hard: 'Concede — accept the rejection and exit',
          },
          feedback: {
            easy:
              "Now you have NOTHING. You didn\'t learn WHY she said no — was it the day? The hour? The homework deadline? You can\'t fix what you don\'t know.",
            medium:
              "Conversation over, but no learning. You don\'t know WHY she said no, so your next ask will hit the same wall. Pros never leave a no without one more question.",
            hard:
              "Information-loss outcome. The no carries data about the binding constraint; exiting without probing forfeits the data. Future negotiations under same constraints will fail identically.",
          },
        },
        {
          label: {
            easy: 'Ask: \"What would make it work?\" or \"What\'s the worry?\"',
            medium: 'Calibrated question: \"What would change your mind?\" or \"What\'s the concern?\"',
            hard: 'Probe with calibrated question to surface binding constraint',
          },
          feedback: {
            easy:
              "BEST MOVE. Now she has to think about her actual reason. Maybe it\'s screen time + homework. Maybe it\'s the time of day. Whatever it is, you NOW know what to fix in your next ask.",
            medium:
              "The single best follow-up in all of negotiation. The question costs nothing, signals respect, and extracts the actual constraint. Now your v2 ask can target it directly.",
            hard:
              "Optimal. Voss\' calibrated question pattern — extracts binding constraint without escalation. Maintains relationship while surfacing the data needed to redesign the offer.",
          },
          isPreferred: true,
        },
        {
          label: {
            easy: 'Push harder — \"BUT PLEASE? Just this once?\"',
            medium: 'Push back — restate the ask with more urgency',
            hard: 'Restate ask with increased intensity',
          },
          feedback: {
            easy:
              "Volume doesn\'t convince anyone. She\'ll just say no LOUDER. The reason she said no is still there. You\'re just turning up the noise.",
            medium:
              "Pushing harder confronts the surface, not the cause. The underlying reason is unchanged; you\'re just amplifying the conflict. Most negotiation classes call this \"the wrong direction.\"",
            hard:
              "Pressure without information yields anchoring effects on the original answer — counterparties harden their position when pushed. Asymmetric: cheap to push, expensive to recover.",
          },
        },
      ],
      realWorldReveal: {
        easy:
          "Chris Voss was the FBI\'s top hostage negotiator. His #1 question for years was: \"How am I supposed to do that?\" It\'s the same move. Doesn\'t matter if you\'re talking to a parent or a bank robber — the question works.",
        medium:
          "Chris Voss spent 24 years as the FBI\'s lead international hostage negotiator. His most-used line: \"How am I supposed to do that?\" — a calibrated question that puts the problem on the counterparty without escalation. Same line works in CEO offices, kid bedrooms, and bank standoffs.",
        hard:
          "Voss\' \"how am I supposed to do that?\" pattern: high-impact calibrated question that signals constraint, preserves relationship, and shifts cognitive load to counterparty for problem-solving. Generalizes across contexts because the underlying psychology is invariant.",
      },
    },

    // ─── Brainstorm: 3 trades you could propose ──────────────────────
    {
      kind: 'brainstorm',
      heading: '🤝 Your 3 Real Trades',
      prompt: {
        easy:
          'List 3 things you want from a parent OR sibling. For EACH one, write what YOU could offer in trade. Real things. Real offers.',
        medium:
          'Brainstorm 3 real things you want this month. For each, propose a TRADE — what would you offer in exchange? The offer should cost the other side LESS than your ask costs them.',
        hard:
          'Design 3 trade proposals. Each: target item (your ask), proposed consideration (your offer), and one reason your offer reduces their effective cost of saying yes.',
      },
      minItems: 3,
      placeholder: 'e.g. I want an allowance raise → I\'ll do dishes every night...',
      hints: [
        {
          easy: 'Allowance raise: offer to do a regular chore (dishes, trash, dog walk) every day.',
          medium: 'Allowance: trade chore consistency. \"I\'ll handle X every day without being asked\" — the unasked-for-ness is what parents really value.',
          hard: 'Allowance negotiation: bundle a recurring high-friction chore. The parent\'s effective cost of \"yes\" decreases because they save the daily reminder transaction cost.',
        },
        {
          easy: 'Later bedtime on weekends: offer to be MORE rested for school on Monday (no whining).',
          medium: 'Later bedtime: pair with a Monday-readiness commitment — \"if I\'m up early and ready Monday, can I stay up 30 mins Friday?\"',
          hard: 'Bedtime extension: tie outcome to measurable next-day performance. Parent\'s downside is bounded; your upside is conditional.',
        },
        {
          easy: 'Pet: offer to do ALL the feeding and walking. Parents say no because they think THEY\'ll do the work.',
          medium: 'A pet: offer a contract — feeding/walking schedule + first month\'s litter/food budget. Parent\'s fear is workload absorption; address it head-on.',
          hard: 'Pet acquisition: pre-empt the workload-absorption concern with explicit ownership of recurring tasks + reserve budget. The constraint isn\'t the pet — it\'s the parent\'s default-to-them risk.',
        },
        {
          easy: 'Bigger room or own room: offer to keep it CLEAN every Saturday.',
          medium: 'Room upgrades: offer measurable cleanliness commitments + lower-friction logistics for parents.',
          hard: 'Room reassignment: surface the parent\'s switching-cost concern + offer cleanliness as a quality guarantee.',
        },
        {
          easy: 'Sibling stuff: offer to switch chores or play their game first to GET your turn next.',
          medium: 'Sibling trades: chore swaps, screen-time swaps, snack trades. Sibling negotiations work BETTER than parent ones because the BATNA is symmetric.',
          hard: 'Sibling-context negotiations are textbook integrative bargaining — repeated game, symmetric BATNAs, low downside, high relationship-payoff for cooperative outcomes.',
        },
        {
          easy: 'Tech: phone or own tablet — offer to limit usage + show grades stay good first.',
          medium: 'Tech access: pair with measurable academic baseline + usage agreement. Make the test reversible.',
          hard: 'Tech access: stage the negotiation as a 90-day pilot. Reversibility lowers the parent\'s perceived irreversibility cost.',
        },
      ],
      closer: {
        easy: 'Pick ONE real trade. Try it this week. The worst they can say is \"no\" — and you\'ll learn what to ask next.',
        medium:
          "Pick the strongest of the three trades and run it this week. The other two are warm-ups for later — sequential trades are easier than parallel ones.",
        hard:
          'Optimize for which proposal has the highest P(yes) and lowest relationship-risk. Run that one first. Subsequent asks become easier after one positive outcome.',
      },
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Famous Deals That Changed Everything',
      concept: {
        easy:
          'Some of the biggest moments in business history were ONE smart negotiation. Same moves you just learned.',
        medium:
          'The same moves you just learned — trade structure, listening, BATNA, win-win — are exactly what built fortunes and ended wars. Different stakes, identical mechanics.',
        hard:
          'Negotiation principles scale invariantly across contexts. The most famous deals in history were textbook applications of the same fundamentals.',
      },
      examples: [
        {
          emoji: '⭐',
          who: 'George Lucas + Star Wars',
          story: {
            easy: 'When George Lucas made Star Wars, the movie studio offered him $500,000 to direct. He said: \"Give me less — but let me own the MERCHANDISE rights.\" The studio thought it was free money. Lucas made $4 BILLION from those toys.',
            medium:
              "George Lucas accepted a $150K pay cut to direct Star Wars in exchange for ownership of merchandising rights — which 20th Century Fox saw as worthless throwaway. The trade turned into a multi-billion-dollar empire (Star Wars toys + games + Lucasfilm sale to Disney for $4B). One trade. Smartest deal in Hollywood history.",
            hard:
              "Lucas\' 1976 Star Wars deal: foregone $150K of director compensation in exchange for full merchandising and sequel rights. Studios at the time valued movie-tie-in rights at ~zero. Lucasfilm subsequently sold to Disney for $4.05B in 2012. Textbook integrative bargaining — Lucas perceived the value, the studio didn\'t, both parties walked away \"happy.\"",
          },
        },
        {
          emoji: '💼',
          who: 'Salary Negotiation',
          story: {
            easy: 'Grown-ups who negotiate their FIRST salary earn about $500,000 MORE over their whole career. The ones who say \"OK sounds good\" never catch up. Just from ONE conversation.',
            medium:
              "Studies show first-job salary negotiators earn ~$500K-$1M more across their careers vs. those who accept the first offer. The gap compounds — every future raise is a % of the prior salary. ONE conversation, 40-year payoff.",
            hard:
              "Babcock & Laschever, Women Don\'t Ask: lifetime earnings gap between negotiators and non-negotiators on first job offer = ~$0.5M to $1M+ depending on industry. The gap compounds through % raises. Single highest-leverage negotiation of a career.",
          },
        },
        {
          emoji: '🏘️',
          who: 'House Buyers',
          story: {
            easy: 'When grown-ups buy a house, the listed price is just the FIRST number. Smart buyers offer less, ask questions, and SAVE thousands. Every single house deal is a negotiation.',
            medium:
              "Every real estate transaction is a negotiation — listed price is the seller\'s opening offer, not the deal. Skilled buyers save 5-10% off ask, which on a $500K home is $25K-$50K. That money is real and goes to whichever side negotiates better.",
            hard:
              "Residential real estate is structurally negotiated — listing price ≠ transaction price. National Association of Realtors data: median residential deal closes ~95-98% of list, with skilled buyers extracting an additional 3-5%. Single-transaction skill-leverage is enormous because the dollar amounts are large.",
          },
        },
      ],
      kicker: {
        easy: 'Every grown-up who got something good — a raise, a house, a deal — used the same moves you just learned. Now you know them too. Earlier.',
        medium:
          'Same moves. Different rooms. The moves you just learned work in playground trades, at the dinner table, at job interviews, at every house sale, and at international peace talks. The fundamentals are invariant.',
        hard:
          'Negotiation skill compounds. Each successful application improves your confidence + technique + relationship asset. Start at allowance-scale, scale to salary, scale to capital-formation.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You now know the four moves: Trade, Listen First, BATNA, Win-Win. That\'s the same toolkit that built Star Wars merchandise, won raises, and ended wars. You\'ve got it.",
        medium:
          "You\'ve got the full negotiator\'s toolkit. The hard part is going FIRST — making the ask. Practice now, while the stakes are small. The skill compounds.",
        hard:
          "You now understand structured negotiation: trade design, BATNA preparation, calibrated questioning, and integrative bargaining. Practice early — the skill compounds across decades.",
      },
      bonusTip: {
        easy:
          "The world\'s most famous negotiation move is a single SENTENCE: \"I\'d love to be able to say yes — what would make that work for you?\" Memorize that. Use it forever.",
        medium:
          "Pros\' all-purpose opener: \"I\'d love to be able to say yes — what would make that work for you?\" Works for salary, allowance, vendor pricing, kid bedtime, and apparently bank standoffs. Same line. Same power.",
        hard:
          "Voss\' calibrated questions and Fisher-Ury\'s principled negotiation share a common structural foundation: surface the binding constraint without triggering defensive escalation. The phrasings are interchangeable across contexts — the underlying psychology is invariant.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'deal-maker',
        emoji: '🤝',
        title: {
          easy: 'Make a REAL deal with a parent!',
          medium: 'Run one real negotiation with a parent this week',
          hard: 'Execute one structured negotiation in a low-stakes context',
        },
        pitch: {
          easy:
            "Pick something you want. Make a TRADE offer. Use the magic question. See what happens. Write down what they say.",
          medium:
            "Run one full negotiation cycle with a parent: prep your BATNA, pick a trade, listen first, make the ask, react to the response with a calibrated question. Document it.",
          hard:
            "Execute one complete negotiation with a parent counterparty. Track preparation, opening, response handling, and outcome.",
        },
        steps: [
          {
            emoji: '🎯',
            text: {
              easy: 'Pick ONE thing you want this week. Something small to start.',
              medium: 'Pick a single, modest ask. First-time negotiators succeed more with small asks than big ones.',
              hard: 'Choose a low-magnitude ask for the first negotiation. Build win-rate before increasing stakes.',
            },
          },
          {
            emoji: '🧠',
            text: {
              easy: 'Think of your TRADE — what will you offer? What can YOU give them?',
              medium: 'Design the trade. What can you offer that costs you less than the ask costs them?',
              hard: 'Engineer the trade-structure: identify a consideration item with high counterparty value and low marginal cost to you.',
            },
          },
          {
            emoji: '🚪',
            text: {
              easy: 'Know your BACK-UP PLAN. What\'s OK if they say no?',
              medium: 'Define your BATNA. What happens if they say no? Knowing this prevents desperation.',
              hard: 'Articulate BATNA explicitly. A clear BATNA prevents over-concession during the negotiation.',
            },
          },
          {
            emoji: '👂',
            text: {
              easy: 'Pick a CALM time. Ask about THEIR day first. Listen for a minute.',
              medium: 'Open in a calm context. Listen first — ask how their day went, what they\'re thinking about, before pitching.',
              hard: 'Schedule the conversation when counterparty is rested. Lead with information-gathering questions before pitching.',
            },
          },
          {
            emoji: '🤝',
            text: {
              easy: 'Make the TRADE offer. If they say NO, ask: \"What would make it work?\"',
              medium: 'Make the offer. On any pushback, deploy a calibrated question: \"What would change your mind?\"',
              hard: 'Pitch the offer. Handle objection with calibrated questioning. Iterate one cycle minimum.',
            },
          },
        ],
        reflection: [
          {
            key: 'ask',
            prompt: {
              easy: 'What did you ask for?',
              medium: 'Your specific ask',
              hard: 'Negotiation target',
            },
            type: 'text',
            placeholder: 'Stay up 30 minutes later on Fridays',
          },
          {
            key: 'offer',
            prompt: {
              easy: 'What did you offer in trade?',
              medium: 'Your trade offer (consideration)',
              hard: 'Consideration offered',
            },
            type: 'text',
            placeholder: 'I\'ll empty the dishwasher every weekday morning',
          },
          {
            key: 'result',
            prompt: {
              easy: 'What did they say?',
              medium: 'The outcome — yes, no, or revised deal?',
              hard: 'Outcome (accept / decline / revised terms)',
            },
            type: 'text',
            placeholder: 'They said yes but only on Fridays',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What did you learn? What would you change next time?',
              medium: 'Biggest insight about negotiation from doing it for real',
              hard: 'Largest delta between your prior mental model and observed dynamics',
            },
            type: 'longtext',
            placeholder: 'I didn\'t expect them to ask…',
          },
        ],
        parentNote: {
          easy: "If your kid pitches you with a real trade offer — say yes if it\'s reasonable. They\'re practicing a life skill that earns them $500K+ over a career.",
          medium:
            "Honor reasonable trade offers. The skill being built (structured asking, calibrated questioning) earns ~$500K-$1M lifetime if applied to one career-stage salary negotiation. Cheap to encourage now.",
          hard:
            "Engage substantively. The cognitive habit being formed transfers directly to salary negotiations, vendor relationships, and personal contracts. Reward thoughtful trade structure even when declining; punish escalation.",
        },
        printables: {
          trackers: [
            {
              title: 'Negotiation Log',
              note: 'Track 3 real negotiations over the next 2 weeks.',
              columns: ['What I Asked', 'What I Offered', 'What They Said', 'What I Learned'],
              rows: 3,
            },
          ],
          worksheets: [
            {
              title: 'Pre-Negotiation Prep Sheet',
              blocks: [
                {
                  label: '🎯 My ask (one sentence)',
                  hint: 'Specific. Real. Not too big for the first one.',
                  lines: 2,
                },
                {
                  label: '🔄 My trade offer',
                  hint: 'What will I give in exchange? Make it cost them LESS than what they\'re giving me.',
                  lines: 3,
                },
                {
                  label: '🚪 My BATNA (back-up plan)',
                  hint: 'What\'s OK if they say no?',
                  lines: 2,
                },
                {
                  label: '👂 What does THE OTHER PERSON want?',
                  hint: 'What are they worried about? What do they care about most?',
                  lines: 3,
                },
                {
                  label: '⏰ When and where will I ask?',
                  hint: 'Pick a calm, low-stress moment. Not right when they get home tired.',
                  lines: 2,
                },
                {
                  label: '💬 The magic question to memorize',
                  hint: 'Practice saying it out loud 3 times so it comes naturally.',
                  lines: 3,
                },
                {
                  label: '🗒️ What I\'ll say if they say YES',
                  lines: 2,
                },
                {
                  label: '🗒️ What I\'ll say if they say NO',
                  hint: 'Use the calibrated question. Don\'t escalate.',
                  lines: 2,
                },
              ],
            },
          ],
          checklists: [
            {
              title: 'Negotiator\'s Pre-Game Checklist',
              items: [
                'I picked ONE thing to ask for',
                'I designed a fair trade (I\'m giving something)',
                'I know my BATNA — what happens if they say no',
                'I thought about what THEY want',
                'I picked a calm time to ask',
                'I practiced the magic question out loud',
                'I\'m ready to LISTEN first',
                'I\'m ready to ask "what would make it work?" if they say no',
              ],
              note: 'Tip: don\'t ask when they\'re tired, stressed, or in the middle of something. Timing is half the deal.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
