/**
 * Stock Market Adventure — owning a slice of a real company.
 *
 * Goal: take a kid from "stocks are this scary grown-up thing" → to
 * "a stock is just a tiny piece of a company I already know" → to
 * actually tracking 3 real companies for 10 days.
 *
 * Beat order:
 *   intro → decision (buy friend's lemonade stand share?) → think-deeper
 *   (why does the price MOVE?) → concept-cards (Share/Price/Dividends/
 *   Market Cap) → calc-challenge (Disney +15%) → brainstorm (your 3
 *   companies) → connect (Disney/Lego/McD's real returns) → outro →
 *   mission (10-day price tracker).
 */

import type { LessonDef } from './types';

const lesson: LessonDef = {
  id: 'stock-market',
  themeKey: 'stocks',
  emoji: '📈',
  title: 'Stock Market Adventure',
  subtitle: {
    easy: 'Own a piece of Disney? You can. For real. Here\'s how stocks work.',
    medium:
      'Buy a slice of a real company, watch the price move, and learn what actually drives the stock market.',
    hard:
      'Equity ownership, market microstructure, and the difference between price and value — explained without the jargon.',
  },

  beats: [
    // ─── Intro ──────────────────────────────────────────────────────────
    {
      kind: 'intro',
      mood: 'excited',
      text: {
        easy:
          "What if you could OWN a tiny piece of Disney? Or Lego? Or McDonald\'s? You CAN. For the cost of one Lego set, you could own a slice of the WHOLE Disney company. That\'s what a STOCK is.",
        medium:
          "You can own a real piece of Disney, Apple, or Lego — for less than a video game. That\'s what stocks are: tiny slices of giant companies. Today you\'ll learn how it works, what makes the price move, and how to track real stocks like a pro.",
        hard:
          "Stocks aren\'t lottery tickets — they\'re fractional ownership in real businesses. Today: equity claims, price-vs-value, the role of expectations, and a 10-day live tracker on 3 companies of your choice.",
      },
    },

    // ─── Decision: buy your friend's lemonade stand share? ────────────
    {
      kind: 'decision',
      heading: '🧭 First Big Decision',
      scenario: {
        easy:
          "Your best friend runs a lemonade stand. They made $50 last summer. They say: \"I\'ll sell you 10% of my stand for $10. You\'ll get 10% of everything I make!\"",
        medium:
          "Your best friend\'s lemonade stand made $50 last summer. They\'re raising money for new supplies and offer you 10% ownership for $10 — \"you\'ll get 10% of all future profits.\" Same offer Apple investors got in 1980, just smaller.",
        hard:
          "Your friend\'s lemonade business generated $50 in profit last cycle. They\'re seeking $10 for 10% equity. The implied valuation: $100 on $50 trailing profit, a 2× P/E ratio. Three options:",
      },
      question: {
        easy: 'What do you do?',
        medium: 'What\'s your move?',
        hard: 'Take, leave, or negotiate?',
      },
      choices: [
        {
          label: {
            easy: 'Say no — that\'s a lot of money to risk',
            medium: 'Pass — lemonade stands are unpredictable',
            hard: 'Decline — qualitative risk premium exceeds quantitative discount',
          },
          feedback: {
            easy:
              "Safe choice — but check the math. They made $50 LAST summer. If they make $50 again, your 10% = $5. Two summers and your $10 is back. Not bad for doing nothing.",
            medium:
              "Risk is real, but the math is in your favor. 10% of $50/yr = $5/yr. Payback in ~2 years. Anything after that is pure upside — for $10 of capital you can lose, that\'s a strong asymmetric bet.",
            hard:
              "Sub-optimal given the implied multiple. 2× P/E with a 50% payout = ~25% annual cash yield. Even with high single-event risk, the expected value strongly favors the trade.",
          },
        },
        {
          label: {
            easy: 'Buy! You like lemonade and trust your friend',
            medium: 'Buy in — 10% of $50/year = $5/year, you\'ll make it back in 2 years',
            hard: 'Accept — 25% implied yield on a known operator outweighs idiosyncratic risk',
          },
          feedback: {
            easy:
              "Good move! You just bought 10% of a real business. If they sell more next summer, you get more. If they sell less, you get less. THAT\'s what a stock is.",
            medium:
              "Smart. You\'re now an OWNER, not a customer. Your $10 buys you a claim on future profits. If they grow the stand, your slice grows too. Exactly like buying Apple stock — just with one customer instead of millions.",
            hard:
              "Aligned. You\'ve made a private-equity investment with favorable unit economics: $10 cap commitment, ~$5/yr cash flow, ~2-yr payback, optionality on growth. Same pattern at scale = early Berkshire.",
          },
          isPreferred: true,
        },
        {
          label: {
            easy: 'Make a counter-offer — give me 20% for $10!',
            medium: 'Counter-offer — \"I\'ll do $10 for 20%\" (double the slice)',
            hard: 'Counter at 20% equity — anchoring lower implied valuation',
          },
          feedback: {
            easy:
              "Smart negotiator! Your friend might say yes — or might say \"that\'s too cheap, no deal.\" Negotiating is part of how grown-ups buy stocks too.",
            medium:
              "Real-world move. Investors negotiate equity stakes all the time. Your friend might agree (cash on hand!) or walk away. Either is a fine outcome — better than overpaying.",
            hard:
              "Reasonable. The first offer is rarely fair. Counter establishes you as a thoughtful capital allocator. Risk: low — if they walk, you\'ve learned the floor of their reservation price.",
          },
        },
      ],
      realWorldReveal: {
        easy:
          "When you buy a STOCK, this is EXACTLY what you\'re doing — buying a tiny slice of a real company. Apple started with friends and family investing $1,000. Today that $1,000 would be worth over $2 BILLION.",
        medium:
          "A stock is literally this: a slice of a real business. Apple was a 3-person company in a garage in 1976 — its first outside investor put in $250,000. Today their stake would be worth roughly $300 billion. Same math you just did.",
        hard:
          "Equity ownership is identical at every scale — kid-bought lemonade stake, angel investor, retail investor on Robinhood. The mechanics differ; the claim type doesn\'t. Public stocks are just private equity with liquidity.",
      },
    },

    // ─── Think-deeper: why does the price MOVE? ───────────────────────
    {
      kind: 'think-deeper',
      heading: '🤔 Why Does the Price Change Every Day?',
      intro: {
        easy: "Disney stock could be $100 today, $95 tomorrow, $110 next week. Why? Disney didn\'t change overnight... did it?",
        medium: "If Disney is the same company today as it was yesterday, why does the price move every single day? Let\'s zoom in.",
        hard: "Markets re-price equities every microsecond. The underlying business hasn\'t materially changed. What\'s actually moving?",
      },
      layers: [
        {
          question: {
            easy: 'What does the stock price actually MEAN?',
            medium: 'What does the current price of a stock really represent?',
            hard: 'What is "price" actually pricing?',
          },
          reveal: {
            easy:
              "It\'s just what ONE person was willing to PAY for one share — the last second. That\'s it. It\'s not what the company is \"worth.\" It\'s what someone JUST paid.",
            medium:
              "Price = the last trade. The last person to buy met the last person to sell at a number they both agreed on. That\'s the entire definition. Not value. Not worth. Just the most recent agreement.",
            hard:
              "Price is the market-clearing trade for the marginal share — the intersection of one buyer\'s reservation price and one seller\'s reservation price at time t. It\'s a transaction, not a valuation.",
          },
        },
        {
          question: {
            easy: 'So why would someone pay more today than yesterday?',
            medium: 'What changes their mind from yesterday to today?',
            hard: 'What drives the shift in the marginal participant\'s reservation price?',
          },
          reveal: {
            easy:
              "Because they THINK the company is going to do BETTER. Maybe Disney announced a new movie. Maybe more kids visited Disney World. People update their guess about the FUTURE.",
            medium:
              "Their expectations changed. Maybe Disney released good earnings, or a new park is doing well, or a competitor stumbled. Buyers re-forecast the future and adjust what they\'re willing to pay.",
            hard:
              "Updated expectations about future cash flows, discount rate, or risk. NPV is forward-looking — any new information that shifts the expected cash-flow stream or its riskiness re-prices the security.",
          },
        },
        {
          question: {
            easy: 'But the company didn\'t actually change yet! So... what?',
            medium: 'But none of those things have HAPPENED yet. They\'re just guesses.',
            hard: 'These are expectational shifts, not realized fundamentals.',
          },
          reveal: {
            easy:
              "Right! The price is people GUESSING what will happen next. Sometimes they guess wrong. That\'s why the price wiggles up and down all day — it\'s a million people changing their guesses.",
            medium:
              "Stock prices reflect expectations, not facts. Every wiggle is the market collectively re-guessing what the company\'s future looks like. That\'s why news, rumors, and even moods move the price.",
            hard:
              "Markets price the expected future, discounted by risk. When expectations diverge from realized outcomes (typical), realized return = expectational return + surprise. The surprise IS the market\'s reaction.",
          },
        },
        {
          question: {
            easy: 'So how do you decide if a stock is a GOOD buy?',
            medium: 'How do smart investors actually pick stocks?',
            hard: 'How does a disciplined investor distinguish price from value?',
          },
          reveal: {
            easy:
              "They ask: \"Do I think this company will be WAY bigger in 10 years?\" If yes, today\'s price is probably a bargain. If no, it\'s probably expensive.",
            medium:
              "They estimate what the business will be worth in 10 years, not next week. Then they compare to today\'s price. If today\'s price is below their estimate of future value, they buy. Patience > speed.",
            hard:
              "Disciplined investors compute intrinsic value (DCF or comparable methods), then buy when price < intrinsic value with sufficient margin of safety. They ignore daily price action — they\'re solving for the gap between price and value, not predicting tomorrow.",
          },
        },
      ],
    },

    // ─── Concept cards (4 cards) ──────────────────────────────────────
    {
      kind: 'concept-cards',
      heading: 'The Four Words Stock Investors Use',
      subheading: 'Master these and you can read any business article like a grown-up.',
      cards: [
        {
          emoji: '🍕',
          title: 'Share',
          desc: {
            easy: 'A share is ONE tiny slice of a company. If a pizza has 8 slices, each slice is a share. If you own 1 slice of an 8-slice pizza, you own 1/8 of the pizza.',
            medium:
              'A share is one unit of ownership in a company. If a company has 1 million shares and you own 1, you own 1-millionth of the company — and 1-millionth of its profits forever.',
            hard:
              'A share represents a fractional residual claim on the company\'s assets and earnings after debt is repaid. Classes (A vs B) may differ in voting rights but rarely in economic claim.',
          },
          color: '#FFFDE8',
        },
        {
          emoji: '💲',
          title: 'Stock Price',
          desc: {
            easy: 'The price is what ONE share costs right now. Disney is around $100. Apple is around $200. McDonald\'s is around $290. Same company, different slice price.',
            medium:
              'The stock price is what one share is trading for at this moment. It changes every second the market is open. The price has NO direct relationship to whether the company is good — it\'s just the most recent agreement.',
            hard:
              'Last-traded price = current intersection of bid and ask in continuous auction. Does not equal book value, intrinsic value, or fair value — those are computed separately and may differ materially from price.',
          },
          color: '#FFE5EC',
        },
        {
          emoji: '💸',
          title: 'Dividends',
          desc: {
            easy: 'Some companies share their profits with the people who own them — they send a small amount of money to each shareholder. That\'s a dividend. Free money for owning the stock!',
            medium:
              'A dividend is when the company sends cash to shareholders — usually every 3 months. McDonald\'s pays about $6 per share per year. Own 100 shares → $600 in your pocket per year, just for holding.',
            hard:
              'Dividends are cash distributions from after-tax earnings. Yield = annual dividend / share price. Mature companies pay; growth companies often retain earnings to reinvest. Total return = price appreciation + dividends.',
          },
          color: '#E0F2FE',
        },
        {
          emoji: '🌆',
          title: 'Market Cap',
          desc: {
            easy: 'Market cap is how much the WHOLE company is worth — price × number of shares. Disney has 1.8 billion shares × $100 each = $180 BILLION dollars. That\'s the company\'s "size."',
            medium:
              'Market capitalization = share price × total shares outstanding. It\'s the market\'s current valuation of the whole company. Apple ~$3.5 trillion. Disney ~$180 billion. Your friend\'s lemonade stand ~$100.',
            hard:
              'Market cap = price × shares outstanding. Enterprise value adjusts for debt and cash. Cap categories: large (>$10B), mid ($2-10B), small ($300M-$2B), micro (<$300M). Useful for relative comparisons across the industry.',
          },
          color: '#F0E8FD',
        },
      ],
    },

    // ─── Calc-challenge: Disney +15% ──────────────────────────────────
    {
      kind: 'calc-challenge',
      heading: 'Quick Math: Did You Make Money?',
      setup: {
        easy: 'You buy 5 shares of Disney at $100 each. One year later, Disney is at $115. How much MORE money do you have than when you started?',
        medium:
          "You bought 5 Disney shares at $100 each (so you spent $500). A year later, Disney trades at $115. What\'s your gain in dollars?",
        hard:
          "Buy 5 shares DIS @ $100. Hold 1 year. Year-end price $115. Compute realized gain (ignore dividends and fees). Calculate the % return.",
      },
      problem: {
        givens: [
          { label: 'shares bought', value: 5 },
          { label: 'buy price', value: 100, suffix: '$' },
          { label: 'end price', value: 115, suffix: '$' },
        ],
        answerLabel: 'Gain',
        answer: 75,
        suffix: '$',
        tolerance: 0.01,
      },
      walkthrough: {
        easy:
          "Step 1: 5 shares × $100 = $500 (what you spent). Step 2: 5 shares × $115 = $575 (what they\'re worth now). Step 3: $575 − $500 = $75 GAIN.\n\nThat\'s a 15% return. You did nothing — Disney did the work. Pretty good year!",
        medium:
          "Money in: 5 × $100 = $500. Value today: 5 × $115 = $575. Gain = $575 − $500 = $75.\n\nReturn % = $75 / $500 = 15%. The stock market\'s long-run average is ~10%/year, so 15% is a good year. That $75 cost you ZERO effort — Disney\'s 75,000 employees made it for you.",
        hard:
          "Cost basis = 5 × $100 = $500. End MV = 5 × $115 = $575. Capital gain = $75 (absolute), 15% (relative). Annualized return = 15% (single-period). Compare to S&P 500 long-run nominal CAGR ≈ 10%. Note: ignores dividends (DIS yields ~1%), bid-ask spread, and capital gains tax (~15% federal long-term).",
      },
    },

    // ─── Brainstorm: kid's 3 picks ────────────────────────────────────
    {
      kind: 'brainstorm',
      heading: '🎯 Your 3 Stock Picks',
      prompt: {
        easy:
          'Pick 3 real companies you KNOW and like. Companies that make stuff you use. Write each one + WHY you picked them!',
        medium:
          'Pick 3 real companies you actually understand. Write the name + ticker + one reason you\'d want to own a piece of them. (You don\'t have to actually buy — you\'ll just track them for 10 days.)',
        hard:
          'Select 3 publicly-traded companies you can reason about from first-hand observation. Note ticker, primary thesis (1 line), and one disconfirming risk for each.',
      },
      minItems: 3,
      placeholder: 'e.g. Disney (DIS) — because every kid I know watches their movies...',
      hints: [
        {
          easy: 'Pick companies whose stuff YOU actually buy or use. If you\'ve never heard of it, skip it.',
          medium: '"Invest in what you know" — Peter Lynch. The companies whose products you understand are easier to track and reason about.',
          hard: 'Lynch\'s "invest in what you know" principle — observational moat. You see Netflix, Apple, Chipotle adoption trends earlier than Wall Street analysts who don\'t shop where you shop.',
        },
        {
          easy: 'Toy companies (Lego, Mattel, Hasbro), game companies (Nintendo, Roblox), and food companies (McDonald\'s, Chipotle) are easy to understand.',
          medium: 'Strong candidates kids know: Disney (DIS), Nintendo (NTDOY), McDonald\'s (MCD), Apple (AAPL), Netflix (NFLX), Roblox (RBLX), Chipotle (CMG), Nike (NKE).',
          hard: 'Kid-observable companies span QSR (MCD, CMG), entertainment (DIS, NFLX), gaming (NTDOY, RBLX), and consumer tech (AAPL). All have liquid markets and accessible price data.',
        },
        {
          easy: 'Ask yourself: \"Will MORE kids be buying their stuff in 10 years?\" If yes — great pick!',
          medium: 'Ask: "Will this company have MORE customers in 10 years? Will the average customer pay them MORE?" If yes to both, the stock has long-term tailwind.',
          hard: 'Decompose growth: customer count growth × ARPU growth. Long-term stock returns track those two compounding rates more than near-term sentiment.',
        },
        {
          easy: 'Look up the company on the news. Did anything fun happen? New movie? New game? New restaurant?',
          medium: 'Scan recent news. Each company\'s 5 most recent headlines tell you what\'s moving sentiment right now.',
          hard: 'Check the news feed and earnings calendar. Upcoming catalysts (product launches, earnings releases, guidance updates) often dominate near-term price action.',
        },
        {
          easy: 'You can also pick a company you don\'t like — to learn from watching it!',
          medium: 'Counter-bet: pick one company you think is going to do WORSE. Watching a "short" candidate is just as educational as watching a "long" one.',
          hard: 'Consider including a counter-thesis name. Watching a thesis you disagree with reduces confirmation bias and sharpens your reasoning.',
        },
        {
          easy: 'Write the company name AND the short letter code (called a ticker). Disney = DIS, Apple = AAPL, McDonald\'s = MCD.',
          medium: 'Always note the ticker symbol — it\'s the universal shortcut. Apple = AAPL, Disney = DIS, Microsoft = MSFT, McDonald\'s = MCD.',
          hard: 'Tickers are the canonical identifier on Bloomberg/Yahoo/etc. Always write ticker:exchange (e.g., DIS:NYSE) when ambiguity exists across listings.',
        },
      ],
      closer: {
        easy: 'Your 3 picks are your team for the next 10 days. Cheer for them, watch the news, see what happens.',
        medium: "These 3 are your watchlist for the next 10 days. You\'re not buying — you\'re LEARNING by watching real prices, real news, real outcomes.",
        hard: 'You\'re running a paper portfolio over a 10-day window. The point isn\'t the P&L — it\'s building intuition for how news and expectations move prices in practice.',
      },
    },

    // ─── Connect: real stock returns over decades ─────────────────────
    {
      kind: 'connect',
      heading: '🌐 What Real Stocks Have Done',
      concept: {
        easy:
          "These companies have made TONS of money for people who bought them years ago and just waited. Same math as your Disney calculation — but over decades.",
        medium:
          "The same 5-share Disney example you just calculated plays out at every scale and every time horizon. Here\'s what real returns look like over real decades.",
        hard:
          "Long-horizon equity returns demonstrate the power of compounding capital gains and dividends. The companies below were all \"boring everyone-knows-them\" picks — kids could have picked them.",
      },
      examples: [
        {
          emoji: '🏰',
          who: 'Disney',
          story: {
            easy: 'Mickey Mouse first appeared in 1928. If your grandparents bought $100 of Disney stock then, that $100 would be worth over $200 MILLION today. Same Mickey. Way more money.',
            medium:
              "Disney went public in 1957. $100 invested then = ~$1.2M today (split-adjusted, with dividends reinvested). That\'s 12,000× — built on Mickey + the parks + Marvel + Star Wars + Disney+. One company, many compounding chapters.",
            hard:
              "DIS IPO 1957. Total return CAGR ~12% over ~70 years with dividends reinvested. $100 → ~$1.2M. Earnings compounding via repeated successful franchise extensions + capital allocation discipline.",
          },
        },
        {
          emoji: '🧱',
          who: 'Lego',
          story: {
            easy: 'Lego almost went BANKRUPT in 2004. Then they got smart, made Star Wars sets, Harry Potter sets, video games, movies — and now they make about $9 billion a year. (Lego is private, so you can\'t buy stock — but it\'s an amazing comeback.)',
            medium:
              "Lego nearly collapsed in 2004 — losing money, drowning in product variety. CEO Knudstorp cut 50% of products, doubled down on licensed sets (Star Wars, Harry Potter), invested in movies/games. Revenue 5× since then. (Family-owned, no public stock — but the case study is gold.)",
            hard:
              "Lego case study (2004-2024): textbook strategic refocus. SKU reduction, IP-licensed expansion (LSW, HP, Marvel), media/games integration. Revenue from $1.3B → $9B+. Demonstrates ops + brand compounding, just without public-market signal.",
          },
        },
        {
          emoji: '🍟',
          who: 'McDonald\'s',
          story: {
            easy: 'McDonald\'s went public in 1965. $100 in their stock back then would be worth around $300,000 today — without you doing ANYTHING. Just for buying burgers? Yes — just for OWNING.',
            medium:
              "McDonald\'s IPO was 1965 at $22.50/share. With splits and dividends reinvested, $100 invested then ≈ $300,000 today. CAGR ~15%/yr for 60 years. Their secret: real estate + franchising, not just burgers (more on that in the McDonald\'s lesson).",
            hard:
              "MCD IPO 1965, ~15% total return CAGR over ~60 years. $100 → ~$300k split-adjusted with dividends reinvested. Underlying engine: high-margin franchisee royalty stream + owned real estate (covered in the McDonald\'s deep-dive).",
          },
        },
      ],
      kicker: {
        easy: 'You don\'t need to pick the perfect stock. You just need to start, hold, and let time do the work.',
        medium:
          "These weren\'t mystery picks. Every kid in 1965 knew McDonald\'s. Every kid in 1928 knew Mickey. The hard part isn\'t finding the company — it\'s holding for 60 years.",
        hard:
          "Survivorship bias caveat applies, but the broader equity index has compounded at ~10% nominal for a century. Beating it requires skill; matching it requires only patience and low fees.",
      },
    },

    // ─── Outro ──────────────────────────────────────────────────────────
    {
      kind: 'outro',
      mood: 'celebrating',
      text: {
        easy:
          "You just learned what a stock REALLY is, what makes the price move, and how to pick companies you understand. That\'s more than most adults know.",
        medium:
          'You\'ve got the actual mental model: stocks are slices of real businesses, price ≠ value, and patience compounds. Now go test it on real companies for 10 days.',
        hard:
          "You now understand equity ownership, the role of expectations in price, and the difference between trading and investing. The mission below will calibrate your intuition on real market signal-to-noise.",
      },
      bonusTip: {
        easy:
          "Fun fact: in 1980, Apple stock cost about 10 CENTS a share (after stock splits). Today it\'s over $200. If your grandma bought $50 of Apple in 1980 and FORGOT about it... she\'d have around $100,000 now.",
        medium:
          'Fun fact: an 8-year-old in 1965 who used $100 of birthday money to buy McDonald\'s stock — and just FORGOT they owned it — would have ~$300,000 today. That kid is now 69. The single best move was forgetting they owned it.',
        hard:
          "Behavioral finding: account inactivity is the strongest predictor of retail investor returns. The Fidelity study found the highest-returning accounts were those of customers who had died (and the accounts sat untouched). Patience > timing.",
      },
    },

    // ─── Real-World Mission ────────────────────────────────────────────
    {
      kind: 'real-world-mission',
      mission: {
        id: 'stock-market',
        emoji: '📈',
        title: {
          easy: '10-Day Stock Watch!',
          medium: 'Track 3 real stocks for 10 days',
          hard: 'Run a 10-day paper portfolio with daily close logging',
        },
        pitch: {
          easy:
            "Pick 3 real companies. Write down their stock price every day for 10 days. See how it changes. Draw a line. Try to figure out WHY!",
          medium:
            "Build a real watchlist. Pick 3 companies, log their closing price every weekday for 2 weeks, sketch the lines, and note any news. By day 10 you\'ll have your first taste of real market behavior.",
          hard:
            "Construct a 3-name paper portfolio, log daily closing prices over 10 trading days, capture catalyst events, and reconcile movement to thesis on day 10.",
        },
        steps: [
          {
            emoji: '🎯',
            text: {
              easy: 'Pick 3 real companies you like. Write down each name AND ticker (DIS, AAPL, etc.).',
              medium: 'Pick 3 stocks and write their tickers (e.g. DIS, AAPL, MCD). Note WHY you picked each.',
              hard: 'Build a 3-name watchlist with tickers + thesis line + key risk for each.',
            },
          },
          {
            emoji: '🔎',
            text: {
              easy: 'Each day, go to finance.yahoo.com and type the company name. Find "Previous Close" or "Last Price."',
              medium: 'Each weekday, look up each stock on finance.yahoo.com. Find the "Previous Close" and write it down.',
              hard: 'Daily, capture closing prices from Yahoo Finance. Log time-stamped to handle after-hours moves.',
            },
          },
          {
            emoji: '📝',
            text: {
              easy: 'Write the price in the tracker every weekday for 2 weeks (10 days).',
              medium: 'Log all 3 closes daily for 10 trading days. Skip weekends (markets are closed).',
              hard: 'Log close, log Δ from prior day, log session high/low if anything dramatic.',
            },
          },
          {
            emoji: '📰',
            text: {
              easy: 'If you see any news about your companies, write down what happened.',
              medium: 'When prices move big, check the news. Write down anything you find — news drives price.',
              hard: 'On any >2% move, capture the catalyst from a finance news source. Distinguish company-specific from macro events.',
            },
          },
          {
            emoji: '📊',
            text: {
              easy: 'On day 10, draw a line for each company. Which went up the most? Which went down?',
              medium: 'On day 10, sketch each price line. Reflect: did the moves match your thesis? Did news surprise you?',
              hard: 'At t=10 plot all three series, compute total return per name, reconcile to thesis, and write a one-paragraph postmortem.',
            },
          },
        ],
        reflection: [
          {
            key: 'picks',
            prompt: {
              easy: 'Which 3 companies did you pick?',
              medium: 'Your 3 tickers',
              hard: 'Watchlist tickers',
            },
            type: 'text',
            placeholder: 'DIS, AAPL, MCD',
          },
          {
            key: 'winner',
            prompt: {
              easy: 'Which one went UP the most? By how much?',
              medium: 'Best performer + % gain over 10 days',
              hard: 'Best-performing name + total return',
            },
            type: 'text',
            placeholder: 'DIS +3.2%',
          },
          {
            key: 'loser',
            prompt: {
              easy: 'Which one went DOWN the most?',
              medium: 'Worst performer + % loss',
              hard: 'Worst-performing name + total return',
            },
            type: 'text',
            placeholder: 'NFLX -1.8%',
          },
          {
            key: 'learned',
            prompt: {
              easy: 'What surprised you about how prices moved?',
              medium: 'What surprised you — about a stock, the market, or yourself?',
              hard: 'Biggest variance from your day-1 thesis. What does it teach you?',
            },
            type: 'longtext',
            placeholder: 'I expected Disney to go up because of the new movie, but…',
          },
        ],
        parentNote: {
          easy: 'No real money needed — this is a "paper" portfolio. Yahoo Finance is free and safe.',
          medium:
            'No real money required — this is paper trading. If your kid wants to buy real shares later, kid custodial brokerage accounts exist (Fidelity Youth, Greenlight, Stockpile).',
          hard:
            "Pure observational exercise — no capital at risk. If they progress to real positions, custodial UTMA accounts at Fidelity/Schwab/Vanguard support kids under 18 with parent co-signing. Fractional shares enable meaningful exposure on small balances.",
        },
        printables: {
          trackers: [
            {
              title: '10-Day Stock Watch',
              note: 'Write each day\'s closing price. Skip weekends — the market is closed!',
              columns: ['Day', 'Date', 'Stock 1 Close $', 'Stock 2 Close $', 'Stock 3 Close $'],
              rows: 10,
            },
          ],
          worksheets: [
            {
              title: 'My 3 Stock Picks',
              blocks: [
                {
                  label: '📈 Stock #1',
                  hint: 'Company name + ticker (the short letter code).',
                  equation: '_______________  ( _______ )',
                },
                {
                  label: '   Why I picked it',
                  hint: 'One sentence — what do you LIKE about this company?',
                  lines: 2,
                },
                {
                  label: '   My prediction',
                  hint: 'In 10 days, will it go up, down, or stay the same?',
                  lines: 1,
                },
                {
                  label: '📈 Stock #2',
                  equation: '_______________  ( _______ )',
                },
                {
                  label: '   Why I picked it',
                  lines: 2,
                },
                {
                  label: '   My prediction',
                  lines: 1,
                },
                {
                  label: '📈 Stock #3',
                  equation: '_______________  ( _______ )',
                },
                {
                  label: '   Why I picked it',
                  lines: 2,
                },
                {
                  label: '   My prediction',
                  lines: 1,
                },
                {
                  label: '📰 Big news I noticed',
                  hint: 'Did anything in the news cause a price to jump or drop?',
                  lines: 4,
                },
                {
                  label: '✏️ Draw your price lines',
                  hint: 'Days on the bottom, price going up. One line per company. Use different colors!',
                  lines: 8,
                },
              ],
            },
          ],
          checklists: [
            {
              title: 'How to Look Up a Stock Price (Free)',
              items: [
                'Open a web browser',
                'Go to: finance.yahoo.com',
                'Type the company name in the search box (e.g. "Disney")',
                'Click on the result — page shows current price at top',
                'Find "Previous Close" — that\'s yesterday\'s ending price',
                'Write the price in your tracker',
                'Repeat for each of your 3 companies',
                'Do this every weekday (Mon-Fri) for 2 weeks',
              ],
              note: 'Tip: bookmark the 3 pages so you can check faster each day.',
            },
          ],
        },
      },
    },
  ],
};

export default lesson;
