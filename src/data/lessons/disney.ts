/**
 * Disney: Characters That Earn for 100 Years — IP that compounds.
 *
 * Goal: take a kid from "Disney makes movies" → to "no, Disney owns
 * CHARACTERS, and characters earn money across movies + toys + parks +
 * games + books for DECADES" → to actually inventing their own
 * original character and reasoning about its potential surfaces.
 *
 * Phase 3 finale. Awards a LEGENDARY card.
 *
 * Beat order:
 *   intro → decision (your character: one-comic / star of EVERYTHING /
 *   license out — Disney does all 3) → think-deeper (why characters
 *   compound) → concept-cards (IP/Franchise/Licensing/Brand
 *   Compounding) → calc-challenge (one Disney movie: $1.3B box + $400M
 *   merch + $300M streaming = $2B) → brainstorm (invent your own
 *   character) → connect (Pokemon $110B, Marvel $4B → $50B, HP $25B,
 *   Star Wars $10B+) → outro (Disney bought Marvel for $4B in 2009
 *   → made $50B+ since) → mission (design + sketch + story + 3-tester
 *   review of your original character).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'disney',
  themeKey: 'disney',
  emoji: '🐭',
  title: 'Disney: 100 Years of Magic',
  subtitle: {
    easy: 'Mickey Mouse is 98 years old — and still earning Disney $5 BILLION a year.',
    medium:
      'Why a 100-year-old mouse is one of the most valuable assets in business: intellectual property that compounds across generations.',
    hard:
      'IP economics: how characters become decade-spanning revenue engines across movies, merchandise, parks, streaming, and licensing.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'love',
      text: {
        easy:
          "Mickey Mouse was created in 1928. He\'s 98 years old. You\'d think he\'d be retired by now. NOPE. Mickey still makes Disney about $5 BILLION a year — every year. From movies, merchandise, theme parks, streaming, toys, t-shirts, lunchboxes, EVERYTHING. That\'s the magic of INTELLECTUAL PROPERTY.",
        medium:
          "Disney revenue: ~$90 billion/year. Most of it built on characters created decades ago — Mickey (1928), Snow White (1937), Cinderella (1950), Disney Princesses, the Marvel library (acquired 2009), Star Wars (acquired 2012). Characters don\'t age out. They compound. Today: how IP becomes a forever revenue stream.",
        hard:
          "Disney is the canonical IP-compounding business. ~$90B annual revenue, ~25% generated from characters >50 years old. Architecture: own the character → deploy across every consumption surface → reinvest in next generation. IP doesn\'t depreciate at expected rates — well-managed IP appreciates across decades.",
      },
    },

    // ─── Decision: what to do with your character ─────────────────────
    {
      kind: 'decision',
      heading: '🧭 You Just Invented a Character',
      scenario: {
        easy:
          "You invent an amazing character — say, a brave robot named Bolt. People LOVE Bolt. You have three different plans for what to do with him.",
        medium:
          "You\'ve created an original character. People respond positively to early sketches. Three monetization architectures available — each leads to a totally different economics.",
        hard:
          "Greenfield IP decision. Three monetization architectures: (a) single-format publication, (b) multi-surface owned franchise, (c) license to existing platforms. Optimize for long-horizon IP value.",
      },
      question: {
        easy: 'What do you do with Bolt?',
        medium: 'Pick the IP architecture:',
        hard: 'Optimize for long-horizon character value:',
      },
      choices: [
        {
          label: {
            easy: 'Draw ONE Bolt comic, sell it, then move on to the next idea',
            medium: 'Single-format publication — one comic, then next project',
            hard: 'Episodic publication — single-format, single-cycle release',
          },
          feedback: {
            easy:
              "OK… but Bolt just sat there. ONE comic. ONE moment. People loved him for a week, then forgot. You left HUGE money on the table.",
            medium:
              "Single-cycle release captures one transaction per fan. Forgone surfaces: merchandise, sequels, animation, games, brand collaborations. The IP\'s long-tail value is sacrificed for fast iteration.",
            hard:
              "Sub-optimal for high-affinity IP. Single-cycle release captures ~5% of long-tail IP value. Forgone surfaces (merch, animation, gaming, brand) typically represent 5-10× the original format\'s revenue.",
          },
        },
        {
          label: {
            easy: 'Make Bolt the STAR of EVERYTHING — comics, movies, games, t-shirts, lunchboxes!',
            medium: 'Multi-surface owned franchise — comics, animation, games, merch, attractions',
            hard: 'Multi-surface vertical integration — own character + deploy across all monetization surfaces',
          },
          feedback: {
            easy:
              "WINNER. Now Bolt isn\'t just a comic — he\'s a MOVIE + a video game + a costume + a lunchbox + an ice-cream flavor. Fans buy Bolt EVERYWHERE. ONE character; many revenue streams; bigger fan club every year.",
            medium:
              "Optimal for high-resonance IP. Same character × multiple consumption surfaces = multiplier on per-fan revenue. Disney/Marvel/Star Wars playbook. Each new surface deepens fan engagement + creates new acquisition channels.",
            hard:
              "Aligned with Disney IP architecture. Multi-surface deployment captures 10-50× the value of single-format publication. Fan engagement intensifies with surface count; brand ecosystem becomes self-reinforcing.",
          },
          isPreferred: true,
        },
        {
          label: {
            easy: 'Let OTHER companies use Bolt for stuff — they pay you a small fee per item',
            medium: 'Pure licensing — outsource Bolt to existing platforms for fees',
            hard: 'Licensing-only — collect royalties, do not invest in owned-channel development',
          },
          feedback: {
            easy:
              "OK income, but other companies are now the ones MAKING money. They control where Bolt appears + the brand vibe. Disney did this with Marvel for a while — then bought it back so THEY could control everything.",
            medium:
              "Licensing-only generates royalty income but cedes brand control + most of the upside to licensees. Marvel did this until Disney acquired them in 2009 — Disney recognized owning the surface beats collecting royalties on it.",
            hard:
              "Sub-optimal vs. owned-multi-surface for high-conviction IP. Royalty model caps upside at the licensor\'s contractual share (~5-15%); owned model captures full margin. Disney\'s acquisition strategy validates the owned-channel approach.",
          },
        },
      ],
      realWorldReveal: {
        easy:
          "Disney does ALL THREE. Owns the character + makes the movie + makes the toys + licenses to t-shirt companies + runs theme parks. Every layer earns money. Mickey alone earns Disney about $5 billion a year — across all those surfaces. ONE mouse. $5 billion. Every year.",
        medium:
          "Disney executes the multi-surface playbook + selectively licenses to expand reach. Mickey Mouse: ~$5B/yr across film, merch, parks, streaming, licensed product. Frozen franchise: ~$15B+ lifetime revenue across all surfaces. Marvel acquisition: $4B in 2009 → ~$50B in subsequent franchise revenue. The architecture is replicable.",
        hard:
          "Disney\'s IP playbook: own the character, deploy across owned channels (film, animation, parks, streaming, merchandise) + license selectively to expand reach. Mickey Mouse lifetime revenue exceeds $80B inflation-adjusted. Marvel acquisition ROI ~12× in ~14 years. Owned-multi-surface is the dominant strategy for valuable IP.",
      },
    },

    // ─── Think-deeper: why do characters compound? ────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Does a CHARACTER Earn for 100 Years?',
      intro: {
        easy: "Why does Mickey STILL make money? Why doesn\'t he get old or boring?",
        medium: "Most products lose value over time. Why do characters often GAIN value?",
        hard: 'What drives the appreciation of well-managed IP across decades?',
      },
      layers: [
        {
          question: {
            easy: 'When you LOVED a character as a kid, do you still love them now?',
            medium: 'What\'s the relationship between childhood character attachment and adult preferences?',
            hard: 'What\'s the persistence of childhood IP affinity?',
          },
          reveal: {
            easy:
              "YEAH. Even when you\'re older, you still feel a tiny smile when you see Mickey. Or Pikachu. Or your favorite Disney princess. Characters become part of your MEMORY of being a kid.",
            medium:
              "Childhood character attachment persists into adulthood through nostalgia. Characters become part of identity + emotional landscape. The fond memory translates into adult purchasing — for self and for own children.",
            hard:
              "Childhood IP attachment has remarkable persistence: ~70%+ of adults retain meaningful affinity for childhood-experienced characters. The nostalgia effect drives adult re-engagement + intergenerational transmission to one\'s own children.",
          },
        },
        {
          question: {
            easy: 'What happens when a KID who loves Mickey grows up and has THEIR OWN kids?',
            medium: 'How does generational transmission work for IP?',
            hard: 'What\'s the intergenerational dynamic for IP value?',
          },
          reveal: {
            easy:
              "They take their kids to see Mickey. They buy Mickey stuff for their KIDS. So Disney gets PAID twice — once when the parent was a kid, then AGAIN when they have their own kids.",
            medium:
              "Intergenerational transmission doubles the revenue cycle. The parent purchases the IP for their own child because the IP carries positive associations from the parent\'s own childhood. Disney gets multiple revenue cycles from the same family.",
            hard:
              "Intergenerational IP transmission compounds revenue. Single customer-family generates 3-5 revenue cycles: own-childhood, own-young-adulthood (nostalgia goods), own-parental purchases, own-grandparenting gifts. Family LTV operates on 50-80 year horizons.",
          },
        },
        {
          question: {
            easy: 'Why is a NEW character HARD to create — but an OLD one is easy to USE again?',
            medium: 'What\'s the cost-asymmetry between creating new IP and re-using existing IP?',
            hard: 'What\'s the marginal cost structure of new-IP vs. established-IP deployment?',
          },
          reveal: {
            easy:
              "Creating a new character that EVERYONE loves takes YEARS + lots of money + lots of luck. Re-using Mickey is FREE — everyone already knows him. So old characters are CHEAPER to make money with.",
            medium:
              "Creating a culturally-resonant new character requires multi-year investment + high marketing spend + significant failure risk. Re-using an established character bypasses all three costs. Marginal cost of new Mickey appearance is near zero; marginal value is substantial.",
            hard:
              "New-IP creation requires ~$100M+ investment + 3-5 year incubation + significant failure risk. Established-IP re-deployment has minimal incremental cost (no creation, no awareness-building). Established IP enjoys massive cost advantage per dollar of generated revenue.",
          },
        },
        {
          question: {
            easy: 'So what is Disney really BUYING when they buy Marvel for $4 billion?',
            medium: 'What was Disney really acquiring when they bought Marvel?',
            hard: 'What\'s the actual asset Disney acquired in the Marvel transaction?',
          },
          reveal: {
            easy:
              "The CHARACTERS. Spider-Man. Iron Man. Hulk. Captain America. Marvel had THOUSANDS of characters already loved by millions of fans. Disney didn\'t pay $4B for a company — they paid $4B for a CHARACTER LIBRARY they could turn into movies, toys, parks, and games.",
            medium:
              "The character library. Marvel\'s ~7,000 characters — pre-built fan bases, established storylines, existing visual designs. Disney paid $4B for an IP catalog they\'d invest in via the MCU. The catalog generated $50B+ in subsequent franchise revenue.",
            hard:
              "Marvel acquisition: $4B for a library of ~7,000 characters with pre-built fan affinity + storyline architecture + visual design. Disney deployed the catalog through 30+ MCU films + streaming + merch + parks + games over 15 years. Realized revenue ~$50B+. ROI ~12-15× over the period.",
          },
        },
      ],
    },

    // ─── Concept cards (4) ────────────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Words of IP Empire',
      subheading: 'Master these and you can read the entire entertainment industry.',
      cards: [
        {
          emoji: '💡',
          title: 'IP (Intellectual Property)',
          desc: {
            easy: 'IP = something CREATED that someone OWNS. A character. A story. A song. A logo. Even an idea. The owner gets to say who can use it AND collect money when they do.',
            medium:
              'Intellectual property = legal ownership of a creative work. Characters, stories, music, designs, brands. The owner controls usage + monetizes the asset. The most valuable assets at modern entertainment companies.',
            hard:
              'IP = legally-protected ownership of creative output. Forms: copyright (creative works), trademarks (brands), patents (inventions). IP creates long-duration monopoly rights enabling sustained value extraction.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '🎬',
          title: 'Franchise',
          desc: {
            easy: 'FRANCHISE = a character + a STORY UNIVERSE that keeps GROWING. Star Wars is a franchise. Marvel is a franchise. Each new movie is a NEW STORY in the same world.',
            medium:
              'A franchise is an ongoing series of works connected by shared characters or universe. Each new entry deepens the world + adds new fans + reinforces old ones. Star Wars, Marvel Cinematic Universe, Harry Potter, Pokemon.',
            hard:
              'Franchises convert one-off IP into compounding revenue engines. Each entry adds canonical depth + new fan acquisition + cross-reinforcement of existing entries. Long-running franchises (50+ years) operate as decade-scale annuity assets.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '📜',
          title: 'Licensing',
          desc: {
            easy: 'LICENSING = letting OTHER companies use your IP for a fee. Disney lets a t-shirt company put Mickey on shirts — Disney collects a check on every shirt sold. Free money.',
            medium:
              'Licensing = renting your IP to a third party. The licensee pays a royalty (~5-15% of sales) for the right to use the IP in their products. Disney licensed product revenue: $50B+ annually across all categories.',
            hard:
              'IP licensing generates passive royalty income (~5-15% of licensee sales) without operational involvement. Disney + Marvel + Star Wars licensed product revenue ~$50B+ annually. The royalty income is high-margin (~70-90%+) and stable across cycles.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '🌱',
          title: 'Brand Compounding',
          desc: {
            easy: 'BRAND COMPOUNDING = the more people LOVE your brand, the EASIER it gets to make new stuff that they\'ll love. Disney\'s brand makes every new Disney movie a bigger hit before it even comes out.',
            medium:
              'Brand compounding: established brand affinity reduces the marketing cost + risk of every new product launch. Disney\'s brand turns first-week box office into a near-guaranteed event. Marvel\'s brand similarly de-risks individual film bets.',
            hard:
              'Brand-equity compounding: established trust + recognition reduces customer acquisition cost on each new product. Disney + Marvel command opening weekends 2-4× larger than equivalent non-brand films at same quality. Compounds across product launches.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: one Disney movie's full revenue ──────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: One Movie, Three Revenue Streams',
      setup: {
        easy: 'A big Disney movie earns $1,300 million ($1.3 billion) in theaters. PLUS $400 million in toys & merch. PLUS $300 million in streaming + sequels. How much does ONE Disney movie earn in total?',
        medium:
          "Big Disney film revenue: $1.3B box office + $400M merchandise + $300M streaming. Compute total IP revenue from one film.",
        hard:
          "Major Disney franchise film revenue across primary surfaces: theatrical $1.3B, merchandise $400M, streaming/sequels $300M. Compute total IP revenue from one film cycle.",
      },
      problem: {
        givens: [
          { label: 'box office', value: 1300, suffix: '$M' },
          { label: 'merchandise', value: 400, suffix: '$M' },
          { label: 'streaming + sequels', value: 300, suffix: '$M' },
        ],
        answerLabel: 'Total',
        answer: 2000,
        suffix: '$M',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          "$1,300M + $400M + $300M = $2,000 million = $2 BILLION dollars.\n\nFrom ONE movie. And that\'s before theme park attractions, video games, or future re-releases. Frozen alone has earned Disney an estimated $15 BILLION across all surfaces. ONE princess. $15 billion.",
        medium:
          "Total = $1.3B + $400M + $300M = $2B. Single film, three surfaces, billions in IP revenue.\n\nReal example: Frozen (2013) → estimated lifetime franchise revenue ~$15B+ across box office, merchandise, streaming, sequels, ice shows, theme park attractions, Broadway. ONE original character (Elsa) created a $15B revenue engine in ~10 years.",
        hard:
          "Total cross-surface revenue = $1.3B + $400M + $300M = $2B per film cycle.\n\nFrozen franchise lifetime: estimated $15B+ aggregated across theatrical, sequels, animated specials, merchandise, theme-park attractions (Anna & Elsa rides, Frozen Ever After), Broadway musical, ice shows, licensed product, streaming rights. Demonstrates the multi-surface multiplier on well-resonating original IP.",
      },
    },

    // ─── Brainstorm: invent your own character ────────────────────────
    {
      kind: 'brainstorm',
      heading: '✨ Your Original Character',
      prompt: {
        easy:
          'INVENT YOUR OWN CHARACTER. Give them a NAME, a POWER or special skill, and a short STORY (1-2 sentences). Then think: where could they SHOW UP? Movie? Game? Toy?',
        medium:
          'Create one original character with: name, power/trait, 2-sentence backstory, target audience, and three potential consumption surfaces (movie, game, toy, etc.).',
        hard:
          'Generate one original IP: character name, distinctive trait, narrative hook, target demographic, and three viable deployment surfaces for the franchise.',
      },
      minItems: 3,
      placeholder: 'e.g. Bolt the Brave Robot — can rebuild any broken machine — lost his home in a city storm and now helps everyone he meets...',
      hints: [
        {
          easy: 'NAME — short, memorable, fun to say. "Bolt." "Stella." "Crash." Easy to remember.',
          medium: 'Naming: short + memorable + distinctive. 1-2 syllables typical. Phonetic resonance > literal meaning at this stage.',
          hard: 'Character naming: memorability + distinctiveness + phonetic appeal. Test in target audience\'s native language. Avoid existing-IP conflicts.',
        },
        {
          easy: 'POWER OR TRAIT — what\'s your character\'s ONE awesome thing? Super speed? Brave? Funny? Brilliant at fixing things?',
          medium: 'Trait architecture: ONE memorable distinguishing trait > many average traits. Characters with one big thing are easier to remember + design products around.',
          hard: 'Trait selection: prioritize ONE highly-distinctive trait over multiple average traits. Single-trait characters generate cleaner merch lines + clearer fan affinity.',
        },
        {
          easy: 'BACKSTORY — what HAPPENED to your character? Where did they come from? What\'s their GOAL?',
          medium: 'Narrative hook: origin event + current goal + central tension. 2-3 sentences should be sufficient to spark interest.',
          hard: 'Narrative architecture: origin + goal + central conflict. Strong hooks generate sequel + spin-off potential from the original story-cycle.',
        },
        {
          easy: 'AUDIENCE — WHO would love your character? Little kids? Teens? Both?',
          medium: 'Target audience: pick ONE primary demographic. Multi-audience characters can be built after the primary base is established.',
          hard: 'Target demographic: precision > breadth at launch. Successful franchises (Pokemon, Disney) expanded to broader audiences after establishing core demographic.',
        },
        {
          easy: 'SURFACES — where could your character show up? Movie? Comic book? Video game? Stuffed animal? Lunchbox?',
          medium: 'Surface deployment: list 3 viable surfaces (animation, gaming, merch, theme park, etc.). Each surface adds revenue and brand depth.',
          hard: 'Deployment surfaces: enumerate viable cross-media surfaces. Multi-surface deployment is the lifetime-value multiplier — never single-surface for high-conviction IP.',
        },
        {
          easy: 'PERSONALITY — what does your character SAY? How do they ACT? Funny? Serious? Brave? Shy?',
          medium: 'Personality voice: consistent tone of dialogue + behavior. Strong character voices read across formats — same character feels recognizable in movie, comic, or merchandise.',
          hard: 'Voice consistency: distinctive dialogue patterns + behavioral signatures must be reproducible across creators/formats for long-term IP maintenance.',
        },
      ],
      closer: {
        easy: 'Now you have a real character. Draw them. Tell their story. Show your family. Watch what happens.',
        medium:
          "Test the character with 3 family reviewers. Their reactions tell you everything — good characters spark immediate questions about \"what happens next.\"",
        hard:
          'Test with 3 first-impression reviewers. Strong IP generates questions about future events + identification with the protagonist within the first minute of exposure.',
      },
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 The Biggest IP Empires on Earth',
      concept: {
        easy:
          'Some characters have earned MORE money than entire countries make. Once you see the pattern, you\'ll see why IP is the most valuable thing in modern entertainment.',
        medium:
          'The largest media franchises in history are character-driven IP empires. Each one demonstrates the multi-surface compounding model.',
        hard:
          'Modern entertainment economics is dominated by IP-driven franchise revenue. The top franchises represent some of the most durable revenue-generating assets ever created.',
      },
      examples: [
        {
          emoji: '🟡',
          who: 'Pokemon',
          story: {
            easy: 'Pokemon is the BIGGEST media franchise in HISTORY. Bigger than Mickey. Bigger than Star Wars. Bigger than Harry Potter. ~$110 BILLION earned since 1996 from cards, games, movies, toys, t-shirts — EVERYTHING. ONE company. 150 little monsters. 28 years.',
            medium:
              "Pokemon: $110B+ lifetime franchise revenue (largest media franchise ever). Initially 151 species in 1996; now 1,000+. Surfaces: video games, trading cards, anime, films, merchandise, theme attractions, mobile (Pokemon Go). Same architecture as Disney IP — multi-surface deployment on character library.",
            hard:
              "Pokemon franchise: ~$110B lifetime revenue, ahead of Mickey Mouse and Star Wars. Architecture: 1996 GameBoy launch → expanded across animation, TCG (~30B cards), film, merchandise, theme parks, mobile (Pokemon Go $7B+ alone). Cross-generational fan retention exceptional.",
          },
        },
        {
          emoji: '🦸',
          who: 'Marvel',
          story: {
            easy: 'Disney bought Marvel in 2009 for $4 BILLION. Sounds like a lot. But the characters they got — Iron Man, Spider-Man, Hulk, Captain America — have made Disney over $50 BILLION since then. They got their money back 12 TIMES OVER.',
            medium:
              "Marvel acquisition (2009): $4B for ~7,000 characters + storylines. Disney generated ~$50B+ subsequent revenue across MCU films (30+ titles, ~$30B box office), merchandise, parks, Disney+ originals. ROI ~12-15× over 15 years. One of the most successful acquisitions in business history.",
            hard:
              "Marvel acquisition case study: $4B purchase 2009, ~$50B+ realized revenue 2009-2024 = ~12× ROI. MCU theatrical alone: ~$30B box office across 30+ films. Plus merchandise, streaming, parks, licensing. Disney\'s IP-acquisition playbook validated.",
          },
        },
        {
          emoji: '⚡',
          who: 'Harry Potter',
          story: {
            easy: 'J.K. Rowling wrote books about a boy wizard. The franchise has earned over $25 BILLION since 1997 — books, movies, theme parks, video games, plays. ONE WRITER\'s idea. $25 billion.',
            medium:
              "Harry Potter franchise: ~$25B+ lifetime revenue. Originated as 7-book series (1997-2007), expanded to 8 films + theme parks (Universal Studios) + Broadway play + video games + spin-off Fantastic Beasts. Demonstrates IP scaling from solo-author origin.",
            hard:
              "Harry Potter cumulative franchise revenue ~$25B. Books ($7.7B), films ($9.5B box office), theme parks (~$3B annual run-rate), merchandise + games. One of the most successful single-author IP franchises in history. Demonstrates IP scaling potential from any origin point.",
          },
        },
      ],
      kicker: {
        easy: 'Pokemon. Marvel. Mickey. Star Wars. Harry Potter. All STARTED with ONE creator + ONE character. Then everyone in the family knew them. Then everyone in the WORLD knew them.',
        medium:
          "All major IP empires began with a single character + creator + early commercial validation. Then: deliberate multi-surface deployment over decades. The architecture is replicable; the early conviction matters most.",
        hard:
          'Major IP empires follow consistent architectures: single-creator origin → category validation → multi-surface scaling → intergenerational compounding. Replicable pattern; creator conviction during early uncertainty is the most binding constraint.',
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'love',
      text: {
        easy:
          "You now understand the most powerful asset in entertainment: CHARACTERS. Once you own one that people LOVE, you can put them EVERYWHERE — and they\'ll keep earning money for DECADES. The character you invented today could be the next Pokemon. Seriously.",
        medium:
          "You\'ve cracked IP economics: multi-surface deployment + intergenerational transmission + brand compounding. The framework explains every major entertainment franchise in history. Now go invent your own.",
        hard:
          "You now understand IP economics, the multi-surface deployment thesis, and the franchise-compounding mechanic. The framework generalizes across entertainment, gaming, publishing, and any character-driven category.",
      },
      bonusTip: {
        easy:
          "In 2009 Disney bought Marvel for $4 billion. People thought they overpaid. Today Marvel has earned Disney over $50 BILLION back. The biggest \"too-expensive\" deal in history turned out to be the cheapest. Characters compound.",
        medium:
          "Disney\'s Marvel acquisition (2009, $4B) was initially criticized as expensive. Realized revenue ~$50B+ since — ~12× return in 15 years, one of the highest-ROI corporate acquisitions of the modern era. The character library was the asset; the future revenue was discounted at the time and underestimated.",
        hard:
          "Marvel-Disney 2009 transaction: $4B price → ~$50B+ revenue, ~$15-20B+ operating profit over subsequent 15 years. ROI ~12-15× depending on attribution. Among the highest-return mega-cap M&A transactions of the era. Demonstrates the systematic mispricing of character-library IP in pre-MCU era.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'disney',
        emoji: '🐭',
        title: {
          easy: 'Invent YOUR own character + test it!',
          medium: 'Design, sketch, story, and 3-tester audit of your original IP',
          hard: 'Complete one original-IP design cycle with 3-tester validation',
        },
        pitch: {
          easy:
            "Invent YOUR own original character. Give them a name, a power, and a one-page story. DRAW them. Show 3 family members. Listen to what they say. You\'re creating IP.",
          medium:
            "Build one original character end-to-end: name, sketch, one-page backstory, target audience, 3 deployment surfaces. Validate with 3 testers. Iterate on the strongest feedback.",
          hard:
            "Execute one full IP design cycle: character design + visual sketch + narrative hook + audience + surfaces + 3-tester feedback + iteration. The output is a first-draft pitch package.",
        },
        steps: [
          {
            emoji: '✨',
            text: {
              easy: 'INVENT a character. Name + one cool POWER + one big GOAL.',
              medium: 'Define core character spec: name, signature trait, central goal/conflict.',
              hard: 'Initial character spec: name, distinctive trait, narrative hook. Specificity > breadth.',
            },
          },
          {
            emoji: '✏️',
            text: {
              easy: 'DRAW them. Stick figures fine. The point is to have a FACE for the name.',
              medium: 'Produce a visual sketch — even rough. The visual establishes identity beyond text alone.',
              hard: 'Generate a visual reference for the character. Even low-fidelity sketches anchor IP identity for the validation phase.',
            },
          },
          {
            emoji: '📖',
            text: {
              easy: 'Write a SHORT story (3-5 sentences). Where did they come from? What\'s their problem? What do they do?',
              medium: 'Compose a 1-page origin story: setting, inciting event, central tension, character\'s response.',
              hard: 'Draft origin narrative: setting, inciting event, central conflict, character response. Establishes the IP\'s narrative engine.',
            },
          },
          {
            emoji: '🎨',
            text: {
              easy: 'List 3 PLACES your character could SHOW UP. Movie? Game? T-shirt? Stuffed animal? Book?',
              medium: 'Enumerate 3 deployment surfaces (animation, game, merchandise, theme attraction, book, etc.).',
              hard: 'Enumerate 3 viable deployment surfaces. Multi-surface thinking from inception establishes franchise mindset.',
            },
          },
          {
            emoji: '👀',
            text: {
              easy: 'Show your character to 3 different family members. WATCH their reaction. Ask what they think.',
              medium: 'Run 3 first-impression tests. Note initial reactions, questions asked, suggestions.',
              hard: 'Conduct 3 first-impression validations. Capture engagement signals + suggestion patterns.',
            },
          },
        ],
        reflection: [
          {
            key: 'name',
            prompt: {
              easy: 'Character name?',
              medium: 'Character name + signature trait',
              hard: 'Character name + distinguishing trait',
            },
            type: 'text',
            placeholder: 'Bolt the Brave Robot — rebuilds broken machines',
          },
          {
            key: 'story',
            prompt: {
              easy: 'What\'s their story (in 2-3 sentences)?',
              medium: 'One-paragraph origin hook',
              hard: 'Origin narrative + central conflict',
            },
            type: 'longtext',
            placeholder: 'Bolt was built in a junkyard from spare parts…',
          },
          {
            key: 'surfaces',
            prompt: {
              easy: 'Three places your character could appear?',
              medium: 'Three deployment surfaces',
              hard: 'Three deployment surfaces + reasoning',
            },
            type: 'text',
            placeholder: 'Animated movie, video game, plush toy',
          },
          {
            key: 'feedback',
            prompt: {
              easy: 'What did your 3 testers say?',
              medium: 'Top 2 feedback items from testers',
              hard: 'Top 2 actionable feedback items + sentiment',
            },
            type: 'longtext',
            placeholder: 'My mom said the name was too long; my brother loved the power…',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What surprised you about creating a character?',
              medium: 'Biggest insight from creating + testing your character',
              hard: 'Largest insight delta from IP-creation process',
            },
            type: 'longtext',
            placeholder: 'I didn\'t realize how hard naming was…',
          },
        ],
        parentNote: {
          easy: "Honest reactions! The kid is building IP-creation muscle — be a real first-impression tester. Don\'t over-praise.",
          medium:
            "Provide genuine first-impression feedback. Hyper-praising undermines learning; substantive reactions sharpen creative judgment. Note initial reactions, questions, suggestions distinctly.",
          hard:
            "Engage as a real first-impression tester. Substantive feedback > polite encouragement. The cognitive skill being developed is response-to-feedback, not pride-in-creation.",
        },
        printables: {
          trackers: [
            {
              title: '3-Tester Feedback Log',
              note: 'One row per tester. Watch first reactions before you ask anything.',
              columns: ['Tester', 'First Reaction (face/sound)', 'What They Said', 'What I\'ll Change'],
              rows: 3,
            },
          ],
          worksheets: [
            {
              title: 'My Original Character Sheet',
              blocks: [
                {
                  label: '✨ Character name',
                  hint: 'Short. Memorable. Fun to say out loud.',
                  lines: 1,
                },
                {
                  label: '⚡ Signature power or trait',
                  hint: 'ONE big thing. Not five small things.',
                  lines: 2,
                },
                {
                  label: '✏️ Draw your character',
                  hint: 'Full body if you can. Show their POWER or expression.',
                  lines: 10,
                },
                {
                  label: '📖 Origin story (3-5 sentences)',
                  hint: 'Where from? What happened? What\'s their goal?',
                  lines: 6,
                },
                {
                  label: '🎯 Who would LOVE this character?',
                  hint: 'Be specific about age and interests.',
                  lines: 2,
                },
                {
                  label: '🎨 Three places your character could appear',
                  hint: 'Animated movie? Game? Toy? Comic? T-shirt? Theme park ride?',
                  lines: 4,
                },
                {
                  label: '🛍️ The MERCHANDISE I\'d make first',
                  hint: 'What\'s the FIRST product? Plush toy? Action figure? Hat?',
                  lines: 3,
                },
                {
                  label: '💭 What surprised me from my 3 testers',
                  lines: 4,
                },
                {
                  label: '🔁 v2 changes I\'d make next',
                  hint: 'Top 2 changes based on the feedback.',
                  lines: 3,
                },
              ],
            },
          ],
          checklists: [
            {
              title: 'Character Creation Toolkit',
              items: [
                'Paper + pencil + markers/crayons',
                'Eraser (lots of mistakes is normal!)',
                'Time blocked: 30-45 min for design, 15-20 for testing',
                'A name for your character (decide BEFORE drawing)',
                'A clear table or floor space to draw',
                '3 family members lined up to test',
                'A printed worksheet to fill out',
                'Open ears for honest feedback — even hard feedback',
              ],
              note: 'Tip: every famous character was DRAWN BADLY first. Walt Disney\'s first Mickey sketches were rough. Yours can be too.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
