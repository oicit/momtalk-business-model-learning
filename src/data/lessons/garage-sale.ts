/**
 * Garage Sale — pricing + marketing in a kid-runnable real business.
 *
 * Teaching style: chat-conversational. Momo walks the kid through
 * each idea as a sequence of speech bubbles (dialogue beats), then
 * gates each block with one interactive beat (decision / concept /
 * calc / brainstorm). Feels like texting with a smart friend, not
 * navigating slides.
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'garage-sale',
  themeKey: 'garage-sale',
  emoji: '🏷️',
  title: 'Garage Sale',
  subtitle: {
    easy: "Old toys + clever pricing = real money!",
    medium: "Turn stuff you don't use into cash — and learn pricing along the way.",
    hard: "Price discovery in a low-friction physical marketplace: garage sales as a microcosm of market clearing.",
  },

  beats: [
    // ─── Welcome (chat) ───────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy: "Hey friend! Today we're going to turn your old stuff into REAL money. Tap continue and let's chat!",
        medium: "Today's adventure: turn the stuff you don't use into cash. Continue when you're ready — we'll talk through it.",
        hard: "Welcome. We'll walk through running a kid-scale secondary market. Continue and we'll get into it.",
      },
    },

    // ─── Chat: what is a garage sale, really? ────────────────────────
    {
      kind: 'dialogue',
      heading: '💬 Let me tell you a secret',
      messages: [
        {
          mood: 'excited',
          text: {
            easy: "Your room is FULL of treasure! 💎 Toys you don't play with. Books you've read. Clothes that don't fit.",
            medium: "Your room is full of stuff you don't use anymore. To you it's clutter. To other people? **TREASURE**.",
            hard: "Your unused inventory has positive value to someone in the local secondary market. The trade is value-accretive for both sides.",
          },
        },
        {
          mood: 'happy',
          text: {
            easy: "A **garage sale** is just a mini-store you set up in your driveway. Customers walk by, look at your stuff, and BUY it!",
            medium: "A garage sale is your own little pop-up store. Real products. Real customers. Real money. All in one Saturday morning.",
            hard: "Garage sale = a one-day physical retail outlet. Lowest possible CAC, zero permitting friction, instant feedback loop on price discovery.",
          },
        },
        {
          mood: 'thinking',
          text: {
            easy: "Did you know — over **165,000 garage sales** happen in the US **every week?** That's HUGE!",
            medium: "Fun fact: ~165,000 garage sales happen in the US every week. It's the OG marketplace — and you can run one this Saturday.",
            hard: "US secondary-market activity at the curb level: ~165k weekly events. The aggregate channel rivals mid-sized retail chains.",
          },
        },
        {
          mood: 'cool',
          text: {
            easy: "Best part? **YOU are the boss.** You pick what to sell, how much to charge, and how to make people stop. That's called being an **entrepreneur**!",
            medium: "And the best part: YOU run it. You decide what, how much, and how. That's the definition of an entrepreneur.",
            hard: "Full operator control: inventory selection, pricing, merchandising, customer service. Compressed entrepreneurship.",
          },
        },
      ],
    },

    // ─── Decision: the lowball offer ─────────────────────────────────
    {
      kind: 'decision',
      heading: '🧭 A Real Garage-Sale Moment',
      scenario: {
        easy:
          "It's Saturday morning. Your old bike (you LOVED it 2 years ago but haven't ridden it in 6 months) has a $20 sticker. A neighbor walks up and offers $5.",
        medium:
          "Saturday morning, hour 1 of your sale. The old bike you priced at $20 (loved it, haven't ridden in 6 months) is sitting there. A neighbor offers $5 cash — take it or leave it.",
        hard:
          "First customer, premium item priced at $20 (reservation price vague). Lowball offer at $5 (75% discount). 5 hours of sale window remaining.",
      },
      question: {
        easy: "What do you do?",
        medium: 'How do you handle the offer?',
        hard: 'Choose your response:',
      },
      choices: [
        {
          label: {
            easy: "Say NO — I want $20 because that's what it's worth.",
            medium: "Refuse — hold at $20. The bike is worth it.",
            hard: "Reject — anchor at $20, defer to next bidder",
          },
          feedback: {
            easy: "Hmm — but what if NOBODY else buys it? You'll end the day with $0 AND still have a bike to store!",
            medium: "Risky. What if no other buyer comes? You'll be back inside with a bike taking up space. A garage sale isn't Sotheby's.",
            hard: "Failure to clear inventory. Garage-sale demand is thin and Poisson-distributed. Reservation pricing as if there's a queue is a costly emotional anchor.",
          },
        },
        {
          label: {
            easy: "Take the $5! Some money is better than no money.",
            medium: "Take the $5 — clear the inventory.",
            hard: "Accept — clear the inventory at any positive bid",
          },
          feedback: {
            easy: "Money in hand! But… you might have left $10 on the table. The neighbor jumped to $5 — maybe they'd pay more!",
            medium: "Some cash is better than none. BUT — they jumped to $5 immediately, which means they were probably willing to go higher.",
            hard: "Avoids over-anchoring but underprices. Buyers who lead with a number have a max above their opener.",
          },
        },
        {
          label: {
            easy: "Counter! Say '$12 — and you can take it now.'",
            medium: "Counter — '$12, take it home today.' Meet in the middle.",
            hard: "Counter — split-the-difference at $12 with urgency framing",
          },
          feedback: {
            easy: "Smart! Flexible AND firm. Most people pay close to the middle — and you keep MORE money!",
            medium: "How real negotiators work. You signal flexibility without giving away too much. 'Take it today' adds urgency.",
            hard: "Optimal mid-game tactic. Anchors moderate, signals willingness to deal, and 'today' creates artificial urgency.",
          },
          isPreferred: true,
        },
      ],
      realWorldReveal: {
        easy: "The MIDDLE move wins most garage-sale moments. eBay, Facebook Marketplace, even car dealers — they all counter-offer!",
        medium: "Counter-offering is the #1 negotiation tool used everywhere — eBay, real estate, car dealerships, YouTube sponsorships. 'Meet in the middle' usually means BOTH sides win.",
        hard: "Counter-offering with split-the-difference is the canonical Nash bargaining solution. Maximizes joint surplus.",
      },
    },

    // ─── Chat: the pricing trick ─────────────────────────────────────
    {
      kind: 'dialogue',
      heading: '💬 The pricing trick nobody tells you',
      messages: [
        {
          mood: 'thinking',
          text: {
            easy: "Here's the trick: an item is worth what someone will PAY today. Not what you PAID for it!",
            medium: "Pricing rule #1: stuff is worth what someone will pay TODAY. Forget what you paid. That money is gone.",
            hard: "Sunk cost is irrelevant. Current value = max willingness-to-pay across the local buyer pool.",
          },
        },
        {
          mood: 'happy',
          text: {
            easy: "Try this formula: **price = about 1/4 of what it cost new.** A $20 toy? Try $5. Simple!",
            medium: "Quick formula: start at **20-30% of what it cost new**. Adjust as the day goes. Watch what moves.",
            hard: "Heuristic: open at 20-30% of replacement cost. Use mid-sale velocity to dynamically adjust.",
          },
        },
        {
          mood: 'cool',
          text: {
            easy: "Round to NICE numbers — **$0.50, $1, $2, $5**. People love simple prices!",
            medium: "Round to nice numbers ($0.50, $1, $2, $5). And bundle small stuff — '**3 books for $2!**' moves inventory FAST.",
            hard: "Round-number price points reduce cognitive friction. Bundle pricing increases throughput on small-ticket items.",
          },
        },
        {
          mood: 'excited',
          text: {
            easy: "If something isn't selling by lunchtime — drop the price! Better to get **some money** than carry it back inside.",
            medium: "Mid-sale, mark down anything that hasn't moved by 50%. End-of-day: '**fill a bag for $5**'. Clear it out!",
            hard: "Dynamic markdown schedule. Mid-day 50% on stale inventory. End-of-sale clearance bundle to liquidate residual.",
          },
        },
      ],
    },

    // ─── Concept cards: 4 pillars ─────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The 4 Pillars',
      cards: [
        {
          emoji: '🔍',
          title: 'Find the Gold',
          desc: {
            easy: 'Walk around your room. Anything you haven\'t used in 6 months = potential gold. Group similar stuff together!',
            medium: 'Inventory hunt: anything unused for 6+ months is a candidate. Grouped categories sell faster than a random pile.',
            hard: "Inventory selection: target high-WTP-density items. Sort and bundle by category to lift throughput.",
          },
          color: '#FFFDE8',
        },
        {
          emoji: '💰',
          title: 'Price It Right',
          desc: {
            easy: 'About 1/4 of what it cost new. Round to nice numbers. Drop prices after lunch.',
            medium: 'Open at 20-30% of replacement cost. Mark down stale inventory mid-day. Better cleared than carried.',
            hard: "Dynamic pricing: open high, mid-day markdown, end-of-day bundle clearance.",
          },
        },
        {
          emoji: '📣',
          title: 'Show It Off',
          desc: {
            easy: 'BIG signs at the corner! Best stuff up front, eye level. Make it look like a real store!',
            medium: 'Signage at every approach route. Display tables, not bins. Best stuff at eye level. A messy pile screams "junk."',
            hard: "Merchandising: aspirational vs. clearance staging, eye-level placement of premium SKUs.",
          },
        },
        {
          emoji: '🤝',
          title: 'Smile and Deal',
          desc: {
            easy: 'Be SUPER nice. Smile at everyone. If someone offers less, make a deal — don\'t get mad!',
            medium: "Customer service is a multiplier. Greet, eye contact, willingness to counter. Friendly sellers move 30%+ more inventory.",
            hard: "Service quality is the cheapest demand-side intervention. Materially raises ticket size and conversion.",
          },
        },
      ],
    },

    // ─── Calc-challenge ───────────────────────────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Did Your Sale Make Money?',
      setup: {
        easy: "You sold 12 things for a total of $54. You spent $4 on signs and lemonade. What's your PROFIT?",
        medium: "Real numbers: 12 items sold, $54 revenue. Costs: $4 ($3 signs + $1 lemons for free lemonade to keep buyers around). Profit?",
        hard: "12 units, $54 gross, $4 variable cost (signage + complimentary refreshment). Compute profit.",
      },
      problem: {
        givens: [
          { label: 'items sold', value: 12 },
          { label: 'total revenue', value: 54, suffix: '$' },
          { label: 'total cost', value: 4, suffix: '$' },
        ],
        answerLabel: 'Profit',
        answer: 50,
        suffix: '$',
        tolerance: 0.01,
      },
      walkthrough: {
        easy: "$54 − $4 = $50! Wild — that money came from stuff you weren't even using.",
        medium: "$54 − $4 = $50 profit. ~93% margin on items that cost you $0 to acquire. The lemonade is the cheapest customer-retention spend you'll ever make.",
        hard: "π = $50, GM% = 92.6%. Lemonade is best understood as marketing OpEx — extends dwell time, lifts basket size. Customer-retention ROI 5-10x.",
      },
    },

    // ─── Chat: marketing tricks ─────────────────────────────────────
    {
      kind: 'dialogue',
      heading: '💬 Make people SHOW UP',
      messages: [
        {
          mood: 'excited',
          text: {
            easy: "Even the BEST sale fails if nobody knows about it. So how do you make people show up?",
            medium: "Even great inventory fails without traffic. So how do we get people to show up?",
            hard: "Distribution > product. Even excellent inventory fails without traffic. Let's solve traffic.",
          },
        },
        {
          mood: 'happy',
          text: {
            easy: "**Signs!** Put BIG ones at the corner of every street near you. Use arrows pointing to your house!",
            medium: "Signs at every nearby intersection (with parent help). Big arrows. The words **GARAGE SALE**. Your house number.",
            hard: "Geo-distributed signage at all approach vectors. Arrows + house number reduce navigation friction.",
          },
        },
        {
          mood: 'thinking',
          text: {
            easy: "**Balloons!** Tie a few to your mailbox. People driving by SEE them and stop. Cheap trick, big result!",
            medium: "Balloons on your mailbox. Costs $2. People DRIVING by spot them and stop. Best ROI in garage sale marketing.",
            hard: "Visual ambient signal. Disproportionate stop-rate lift for trivial cost. Classic local-marketing intervention.",
          },
        },
        {
          mood: 'cool',
          text: {
            easy: "**The combo move:** sell **lemonade** too! People stay longer, buy more, AND you make extra money. Pure genius!",
            medium: "Pro move: pair with a lemonade stand. People linger longer, browse more, buy more. AND you sell drinks. Double business.",
            hard: "Adjacent revenue stream + dwell-time extension. Lemonade lifts both basket size and conversion via reciprocity.",
          },
        },
      ],
    },

    // ─── Brainstorm ──────────────────────────────────────────────────
    {
      kind: 'brainstorm',
      heading: '✨ Your Ideas to Get More Buyers',
      prompt: {
        easy: "Write 3 things YOU could do to bring MORE people to your sale — without spending money!",
        medium: 'List 3+ ways to attract more buyers using $0. Be creative.',
        hard: "Enumerate 3-5 zero-cost levers for traffic + conversion.",
      },
      minItems: 3,
      placeholder: 'e.g. a huge bright sign at the corner...',
      hints: [
        {
          easy: 'BIG signs at the corner of your street pointing to your house.',
          medium: 'Multiple signs at every nearby intersection. Big arrows. Your address.',
          hard: 'Geo-distributed signage along approach routes.',
        },
        {
          easy: "Post on the neighborhood group online (with a parent's help)!",
          medium: "Post on Nextdoor / neighborhood Facebook group (with parent).",
          hard: "Free digital channels: Nextdoor, FB Marketplace events, neighborhood threads.",
        },
        {
          easy: 'Set up early! People LOVE to be first and get the best stuff.',
          medium: 'Open by 7-8am. Serious garage-sale shoppers route at dawn.',
          hard: 'Early-bird buyer segment has highest WTP and lowest negotiation friction.',
        },
        {
          easy: "Pick a Saturday when other neighbors also have sales — buyers visit many in a day!",
          medium: "Coordinate with neighbors or join a community garage sale day. Buyers drive routes.",
          hard: "Cluster with neighborhood-wide sales days. Multi-stop traffic compounds.",
        },
        {
          easy: 'Wear a fun costume or play music — people stop and look!',
          medium: 'Music + costume = personality. Slows people down. Slow-down = browse = buy.',
          hard: 'Ambient differentiation: music + curb presence raises stop probability.',
        },
        {
          easy: "Give a FREE little surprise with every sale — sticker or candy!",
          medium: 'A tiny free extra with each purchase. Costs pennies, generates real-time WOM.',
          hard: 'Lagniappe = surprise/delight unit. $0.10 cost amplifies remaining-day conversion.',
        },
      ],
      closer: {
        easy: "Pick 2 and do them really well!",
        medium: "Pick your two strongest ideas and execute them crisply.",
        hard: "Concentration > diffusion. Two well-executed levers beats five mediocre ones.",
      },
    },

    // ─── Chat: the customer game ────────────────────────────────────
    {
      kind: 'dialogue',
      heading: '💬 The customer game',
      messages: [
        {
          mood: 'happy',
          text: {
            easy: "When someone walks up — **smile and say hi!** Friendly = more sales. ALWAYS.",
            medium: "Customer arrives → smile, make eye contact, greet them. Sounds tiny. Multiplies sales by 30%+.",
            hard: "Service quality is the highest-ROI demand-side intervention. Materially lifts both ticket size and conversion.",
          },
        },
        {
          mood: 'thinking',
          text: {
            easy: "Someone offers LESS than the price? **Don't get mad!** Try **'How about $4?'** That's called negotiating.",
            medium: "When someone counters, **counter back.** '$4?' / 'How about $3 with that book?' / 'I'll do it if you grab two.' This is how EVERY business works.",
            hard: "Counter-offering is the bargaining standard. Buyers who lead with a number expect negotiation; flat refusal often kills the deal.",
          },
        },
        {
          mood: 'cool',
          text: {
            easy: "Thank EVERY person, even ones who don't buy. They might come back later — or tell a friend!",
            medium: "Thank every visitor regardless of purchase. Reputation compounds. Some come back. Most importantly: they tell friends.",
            hard: "Conversion is multi-touch. Today's window-shopper is tomorrow's buyer or referral. Service quality compounds via WOM.",
          },
        },
      ],
    },

    // ─── Connect ──────────────────────────────────────────────────────
    {
      kind: 'connect',
      heading: '🌐 Same Idea, Bigger Stage',
      concept: {
        easy: "Selling used stuff isn't just a garage sale — it's HUGE businesses!",
        medium: "Garage sales are the OG marketplace. The same dynamics scale all the way up.",
        hard: "Secondary-market dynamics are scale-invariant. Same pricing logic from your driveway to multi-billion-dollar platforms.",
      },
      examples: [
        {
          emoji: '📱',
          who: 'Facebook Marketplace',
          story: {
            easy: 'Like a garage sale but on your phone — the whole town! ~1 billion users buy and sell used stuff.',
            medium: 'Facebook Marketplace = digital garage sale at neighborhood scale. ~1B MAU. Same pricing instincts you just learned.',
            hard: "Marketplace network effect at neighborhood density. GMV comparable to mid-sized retailers.",
          },
        },
        {
          emoji: '👜',
          who: 'eBay',
          story: {
            easy: 'A global garage sale where people BID — the highest bidder wins! Started in 1995 with a broken laser pointer.',
            medium: "eBay (1995) began when Pierre Omidyar listed a broken laser pointer to test if anyone would buy used stuff online. Now: $10B/year.",
            hard: "eBay's insight: the secondary market has scale at all price points if discovery + trust are solved.",
          },
        },
        {
          emoji: '🏛️',
          who: "Sotheby's",
          story: {
            easy: "A garage sale for VERY old, VERY fancy stuff. A painting sold for $450 MILLION there in 2017!",
            medium: "Sotheby's is the garage sale for art and antiques. Founded in 1744 (281 years ago). Same mechanics: used stuff + bidders.",
            hard: "Sotheby's: high-end secondary market with strict provenance + scarcity pricing. Same mechanism, more capital at stake.",
          },
        },
      ],
      kicker: {
        easy: "Same idea, just way bigger. Your driveway = a real marketplace!",
        medium: "Same mechanics, different magnitudes. Master the small game; the big game is just bigger.",
        hard: "Scale-invariant market dynamics. Driveway clearance and a Christie's auction are operationally homologous.",
      },
    },

    // ─── Outro ────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy: "You're a pricing pro now! Find treasure, set prices, make deals.",
        medium: "You've covered the four pillars (find / price / show / deal), the math, and the bigger picture. Time to run a real one.",
        hard: "You now have the mental model for secondary-market pricing, from your driveway to eBay. Apply it.",
      },
      bonusTip: {
        easy: 'In 1995, a guy named Pierre Omidyar sold a BROKEN laser pointer online. Someone bought it. He emailed: "You know it\'s broken, right?" The buyer replied: "I collect broken laser pointers." → eBay was born!',
        medium: "Pierre Omidyar's first eBay listing was a broken laser pointer. Sold for $14. He emailed to confirm: the buyer collected broken ones. Insight: niche buyers exist for ANYTHING. That became a $20B company.",
        hard: "eBay's founding parable encodes two truths: (1) the secondary market has buyers at every price point if discovery is solved, (2) personal taste forecasts are systematically wrong — let the market discover the truth.",
      },
    },

    // ─── Mission ──────────────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'garage-sale',
        emoji: '🏷️',
        title: {
          easy: 'Run a REAL garage sale!',
          medium: 'Run a real garage sale this weekend',
          hard: 'Operate a one-day secondary-market clearance',
        },
        pitch: {
          easy: "Pick 10 things you don't use, set up a table outside, turn them into REAL money!",
          medium: 'Find 10+ items you don\'t use, price with the framework, set up the sale, track every transaction.',
          hard: "Run a one-day clearance: 10+ SKUs, dynamic pricing, captured P&L.",
        },
        steps: [
          {
            emoji: '🔍',
            text: {
              easy: "Find 10 things you don't use anymore.",
              medium: 'Inventory hunt: 10+ items unused for 6 months. Sort by category.',
              hard: 'Inventory selection: 10+ items across 3+ categories. Document replacement cost.',
            },
          },
          {
            emoji: '🏷️',
            text: {
              easy: "Put a price sticker on each — try about 1/4 of what it cost new!",
              medium: 'Price at ~20-30% of replacement cost. Higher-emotion items can go a bit higher.',
              hard: 'Initial pricing: 20-30% RC. Add a "best offer" tag on high-uncertainty items.',
            },
          },
          {
            emoji: '🪧',
            text: {
              easy: "Make a BIG colorful sign and put it at the corner of your street!",
              medium: '2+ big signs at nearby intersections + 1 at your house. Include your address.',
              hard: 'Geo-distributed signage with directional arrows. Post on Nextdoor.',
            },
          },
          {
            emoji: '🎉',
            text: {
              easy: 'Open early Saturday morning! Smile at everyone.',
              medium: 'Open by 8 AM. Greet every shopper. Willing to negotiate.',
              hard: 'Open at first light. Greet, eye contact, willingness to counter.',
            },
          },
          {
            emoji: '📉',
            text: {
              easy: "After lunch, mark down anything you haven't sold!",
              medium: 'Mid-afternoon: 30-50% off remaining stock. End-of-day: "fill a bag for $5."',
              hard: 'Mid-day markdown to 50%; end-of-sale bundle clearance.',
            },
          },
        ],
        reflection: [
          {
            key: 'items_sold',
            prompt: { easy: 'How many things did you sell?', medium: 'Items sold', hard: 'Units sold' },
            type: 'number',
            suffix: 'items',
            placeholder: '8',
          },
          {
            key: 'total_earned',
            prompt: { easy: 'How much money did you make?', medium: 'Total revenue', hard: 'Gross revenue' },
            type: 'number',
            suffix: '$',
            placeholder: '45',
          },
          {
            key: 'best_seller',
            prompt: {
              easy: 'What was the COOLEST thing you sold?',
              medium: 'Your best seller — what was it?',
              hard: 'Highest-margin sale + why',
            },
            type: 'text',
            placeholder: 'old bike',
          },
          {
            key: 'lesson_learned',
            prompt: {
              easy: 'What surprised you?',
              medium: 'What pricing surprise did you have?',
              hard: 'Key pricing or operational learning',
            },
            type: 'longtext',
          },
        ],
        parentNote: {
          easy: 'Help with signs, supervise the cash box.',
          medium: 'Supervise the curb and cash. Check city/HOA rules — most are fine, some require a free permit.',
          hard: 'Verify local ordinances + HOA rules. Some municipalities cap sales/year. Make sure kid has change ready.',
        },
        printables: {
          worksheets: [
            {
              title: 'Plan Your Sale',
              blocks: [
                { label: '1. What 10 things will I sell?', hint: 'List each item + a 1-word condition note.', lines: 10 },
                { label: '2. What did each cost NEW?', hint: 'Rough estimate is fine.', lines: 5 },
                { label: '3. My starting prices (20-30% of new)', lines: 10, suffix: '$' },
                { label: '4. My mid-day markdown plan', hint: 'After 2 hours, drop everything by ___%', lines: 1 },
                { label: '5. End-of-day "everything left" deal', hint: 'e.g. "fill a bag for $5"', lines: 2 },
              ],
            },
            {
              title: 'After-Sale Math',
              blocks: [
                { label: '1. Total money I made (revenue)', equation: '$ _______' },
                { label: '2. What I spent (signs, lemonade, etc.)', lines: 1, suffix: '$' },
                { label: '3. Profit', equation: '$ _______  −  $ _______  =  $ _______' },
                { label: '4. Best price-getting tactic I used', lines: 3 },
                { label: "5. One thing I'd do differently next time", lines: 4 },
              ],
            },
          ],
          trackers: [
            {
              title: 'Sales Log',
              note: 'One row per sale.',
              columns: ['Time', 'Item', 'Listed price', 'Sold for', 'Customer'],
              rows: 18,
            },
          ],
          signs: [
            {
              emoji: '🏷️',
              headline: 'GARAGE SALE',
              subline: 'Toys · Books · Treasures!',
              pricePlaceholder: '➜ TODAY ONLY',
              accent: '#FF65C5',
            },
          ],
          checklists: [
            {
              title: 'Sale Day Checklist',
              items: [
                'Tables or blankets to display items',
                'Price stickers + Sharpie',
                'Cash box with $20 in change ($1s and $5s)',
                'Calculator (or your phone)',
                'At least 2 big signs for the corner',
                'Sharpie for last-minute markdowns',
                'Water bottle for you',
                'Free lemonade pitcher (optional, brilliant)',
                'A friend or sibling to help',
                'Sunscreen + hat',
                'Phone for posting on neighborhood groups',
              ],
              note: 'Make a "FREE" bin near the curb — it draws people in.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
