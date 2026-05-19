/* =========================================================
   Chick-fil-A Interactive — modal content + behavior
   ========================================================= */

const CONTENT = {
  /* ---------- Brand ---------- */
  logo: {
    eyebrow: "Hi there!",
    title: "Meet Chick-fil-A®!",
    hero: { type: "solid", icon: "logo" },
    body: `
      <p>Have you ever seen that big <strong>red curly C</strong> with a chicken's beak hiding inside? That's our logo — and it means delicious chicken is just around the corner!</p>
      <p>We have a famous mascot too: <strong>a cow in a costume</strong> who really, really wants you to "EAT MOR CHIKIN." (Don't worry, we know how to spell — the cow's just had a long day.)</p>
      <div class="m-stats">
        <div class="m-stat"><strong>1967</strong><span>Year we started</span></div>
        <div class="m-stat"><strong>2,900+</strong><span>Restaurants</span></div>
        <div class="m-stat"><strong>47</strong><span>States!</span></div>
      </div>
    `
  },
  tagline: {
    eyebrow: "Our big promise",
    title: "More than a chicken sandwich!",
    hero: { type: "image", src: "assets/restaurant.png" },
    body: `
      <p>It's a <strong>hug on a tray</strong>. A high-five for your tummy. A "have a great day!" with extra pickles.</p>
      <p>We're a family-owned restaurant — that means kids, parents, grandparents, and goofy uncles all helped make this place what it is. We're famous for great food, super-friendly people, and helping out in our neighborhoods.</p>
      <p>Every sandwich is made fresh. Every smile is real. And every "my pleasure!" actually means it. Pinky promise.</p>
    `
  },

  /* ---------- The famous cows! ---------- */
  cows: {
    eyebrow: "The famous cows!",
    title: "EAT MOR CHIKIN!",
    hero: { type: "solid", icon: "cow" },
    body: `
      <p style="font-family:'Permanent Marker',cursive; font-size:22px; color:#1A1A1A; transform:rotate(-1deg); display:inline-block; background:#FFFEF5; border:3px solid #1A1A1A; padding:8px 14px; box-shadow:3px 3px 0 #1A1A1A; margin-bottom:14px;">"EAT MOR CHIKIN!"</p>
      <p>Meet the most famous cows in America! Way back in <strong>1995</strong>, Chick-fil-A had a brilliant idea: what if cows could talk? And what if they REALLY didn't want to be eaten?</p>
      <p>So they made cows the stars of the show! You can see them on billboards, paintings, and t-shirts — sneaking around with paint buckets, holding up signs, and trying to convince everyone to <strong>EAT MOR CHIKIN</strong> instead of beef!</p>
      <p><strong>Wait — why is "MORE" spelled wrong?</strong> Because cows can't spell, silly! They're cows! Their handwriting is also a little wobbly because they're using their hooves to write. (Have YOU ever tried to write with hooves?)</p>
      <p>The cows have been making people laugh for over <strong>30 years</strong>. They've climbed scoreboards at football games, parachuted out of helicopters, and even made their own calendar!</p>
      <div class="m-stats">
        <div class="m-stat"><strong>1995</strong><span>First cow ad!</span></div>
        <div class="m-stat"><strong>30+</strong><span>Years of cows</span></div>
        <div class="m-stat"><strong>0</strong><span>Spelling skills</span></div>
      </div>
      <p style="margin-top:14px;"><strong>One last thing:</strong> if you ever see a cow on a billboard near you, give it a wave. It's been working really hard up there!</p>
    `
  },

  /* ---------- Restaurant building hotspots ---------- */
  restaurant: {
    eyebrow: "Welcome!",
    title: "Step right up to your happy place",
    hero: { type: "image", src: "assets/restaurant.png" },
    body: `
      <p>This is what every Chick-fil-A looks like — warm tan bricks, big red awnings, and umbrellas outside for sunny-day picnics.</p>
      <p><strong>Psst!</strong> See those red glowing dots on the building? Click each one and we'll show you a secret!</p>
    `
  },
  building: {
    eyebrow: "Hotspot",
    title: "The Big Red Building!",
    hero: { type: "image", src: "assets/restaurant.png" },
    body: `
      <p>You can spot a Chick-fil-A from a <em>mile</em> away. The bright red curly logo is like a giant arrow that says "GREAT FOOD HERE!"</p>
      <p>Inside, kitchens hum, fries sizzle, and team members in red shirts fly around making magic happen.</p>
      <p><strong>Fun fact:</strong> The drive-thru can have <em>two lanes</em> at once. Twice the fast!</p>
    `
  },
  flag: {
    eyebrow: "Hotspot",
    title: "Hello, America!",
    hero: { type: "solid", icon: "flag" },
    body: `
      <p>That American flag is a big hint — Chick-fil-A was born in <strong>Atlanta, Georgia</strong> way back in 1967! That's like... older than your parents (probably).</p>
      <p>From one tiny restaurant outside Atlanta, it grew into <strong>2,900+ restaurants</strong> all across the country. That's a lot of chicken sandwiches!</p>
    `
  },
  drivethru: {
    eyebrow: "Hotspot",
    title: "Zoom! The Drive-Thru!",
    hero: { type: "solid", icon: "car" },
    body: `
      <p>Did you know? At Chick-fil-A, sometimes a smiley team member walks right up to your car with a tablet and takes your order before you even reach the window!</p>
      <p>Even when it's raining, they grab an umbrella and bring food right to your car. <strong>Super-team-member powers!</strong></p>
    `
  },
  entrance: {
    eyebrow: "Hotspot",
    title: "Come On In!",
    hero: { type: "solid", icon: "door" },
    body: `
      <p>Push open those doors and... <em>swoosh!</em> You'll smell freshly toasted buns and warm waffle fries.</p>
      <p>Many Chick-fil-A restaurants even have a <strong>play area</strong> just for kids. Slide, climb, eat nuggets, repeat. The perfect day!</p>
    `
  },

  /* ---------- Experience pillars ---------- */
  experience: {
    eyebrow: "Our 4 superpowers",
    title: "What makes Chick-fil-A so awesome?",
    hero: { type: "solid", icon: "logo" },
    body: `
      <p>Chick-fil-A has <strong>four secret ingredients</strong> (besides chicken!). Click each one to find out:</p>
      <ul>
        <li><strong>Great Food</strong> — Made fresh, made tasty.</li>
        <li><strong>Genuine Hospitality</strong> — Smiles bigger than the sandwich.</li>
        <li><strong>Community Impact</strong> — We love our neighborhood!</li>
        <li><strong>Biblical Foundation</strong> — Closed on Sundays. Family time!</li>
      </ul>
    `
  },
  "exp-food": {
    eyebrow: "Superpower #1",
    title: "Yummy in your tummy!",
    hero: { type: "image", src: "assets/sandwich.png", contain: true },
    body: `
      <p>Our <strong>famous chicken sandwich</strong> is just three things: a juicy chicken breast, a soft buttery bun, and <strong>two pickles</strong>. That's it!</p>
      <p>And here's the cool part — every sandwich is <strong>hand-breaded right in the kitchen</strong> while you wait. Like a chicken art project, just for you!</p>
      <p><strong>Surprise!</strong> The recipe hasn't changed since 1964. If it ain't broke, don't fix it!</p>
    `
  },
  "exp-hospitality": {
    eyebrow: "Superpower #2",
    title: "The magic words!",
    hero: { type: "image", src: "assets/cup.png", contain: true },
    body: `
      <p>Try this: say "thank you" to a Chick-fil-A team member. They'll smile big and say <strong>"my pleasure!"</strong> — every single time!</p>
      <p>The team is trained to be SUPER nice. They'll refill your drink, open the door for you, and even bring your tray to the table.</p>
      <p>It's like having a friend at lunch who's REALLY good at their job!</p>
    `
  },
  "exp-community": {
    eyebrow: "Superpower #3",
    title: "We love our neighborhood!",
    hero: { type: "image", src: "assets/community.png" },
    body: `
      <p>Chick-fil-A doesn't just serve chicken — we help out around town! We sponsor little league teams, donate food to schools, and give scholarships to kids who want to go to college.</p>
      <p>Since 1973, we've given out <strong>more than $174 MILLION</strong> in college scholarships. Whoa!</p>
      <p>Each restaurant has a local owner who lives nearby — they know their neighborhood like their own backyard.</p>
    `
  },
  "exp-biblical": {
    eyebrow: "Superpower #4",
    title: "Sundays are for family!",
    hero: { type: "solid", icon: "cross" },
    body: `
      <p><strong>Did you ever try to go to Chick-fil-A on a Sunday?</strong> Surprise — we're closed!</p>
      <p>Mr. Cathy (the man who started Chick-fil-A) decided way back in 1946 that everyone deserves <strong>a day off</strong> to spend with family, rest, and have fun.</p>
      <p>So every Sunday, all 2,900+ restaurants take a nap. The team gets to be home with their families. Pretty cool, right?</p>
    `
  },

  /* ---------- Real Facts ---------- */
  facts: {
    eyebrow: "Whoa-worthy!",
    title: "Cool Chick-fil-A Facts!",
    hero: { type: "solid", icon: "facts" },
    body: `
      <ul>
        <li>Started in <strong>1967</strong> by a man named <strong>S. Truett Cathy</strong> in Atlanta, Georgia.</li>
        <li>It's a <strong>family business</strong> — passed down by people, not sold to strangers.</li>
        <li><strong>Closed every Sunday</strong> since day one. Yes, really!</li>
        <li>There are <strong>2,900+ restaurants</strong> in 47 different states. So many sandwiches!</li>
        <li>Every sandwich, every nugget, every glass of lemonade is made <strong>FRESH today</strong>.</li>
      </ul>
      <div class="m-stats">
        <div class="m-stat"><strong>$21B+</strong><span>In sandwiches!</span></div>
        <div class="m-stat"><strong>#1</strong><span>Happiest customers</span></div>
        <div class="m-stat"><strong>56+</strong><span>Years of yum</span></div>
      </div>
    `
  },

  /* ---------- People ---------- */
  people: {
    eyebrow: "Meet the team!",
    title: "85,000+ red-shirt heroes!",
    hero: { type: "image", src: "assets/team.png" },
    body: `
      <p>The friendly people in red shirts are called <strong>Team Members</strong>. There are <strong>85,000+ of them!</strong> That's enough to fill a whole stadium with smiles.</p>
      <p>Chick-fil-A really takes care of them. They get training, free meals at work, and even <strong>college scholarships</strong> if they want to go to school. Pretty neat, right?</p>
      <p>Lots of grown-ups who run Chick-fil-A restaurants today started out as kids working their first job at... Chick-fil-A!</p>
      <div class="m-stats">
        <div class="m-stat"><strong>85K+</strong><span>Team Members</span></div>
        <div class="m-stat"><strong>$174M+</strong><span>For college!</span></div>
        <div class="m-stat"><strong>10K+</strong><span>Kids each year</span></div>
      </div>
    `
  },

  /* ---------- Menu favorites ---------- */
  menu: {
    eyebrow: "Yum yum yum",
    title: "The Greatest Hits Menu!",
    hero: { type: "solid", icon: "logo" },
    body: `
      <p>What's your favorite? Click each one to learn its secret superpower!</p>
      <ul>
        <li><strong>Chicken Sandwich</strong> — The original superhero!</li>
        <li><strong>Waffle Fries</strong> — Crinkle-cut to perfection!</li>
        <li><strong>Nuggets</strong> — Tiny chicken poppers of joy!</li>
        <li><strong>Lemonade</strong> — Sunshine in a cup!</li>
      </ul>
    `
  },
  "menu-sandwich": {
    eyebrow: "The Original!",
    title: "The Famous Chicken Sandwich!",
    hero: { type: "image", src: "assets/fav-sandwich.png", contain: true },
    body: `
      <p>This is the sandwich that <strong>started it all!</strong> Mr. Cathy invented it in 1964 by accident — he was just trying out some new chicken recipes and BOOM, magic happened.</p>
      <p>Here's how it's built: a juicy hand-breaded chicken breast, two crunchy pickles, and a soft buttery bun. Three ingredients. One perfect bite.</p>
      <p>Want it spicy? Want it grilled? Want it deluxe with cheese and lettuce? <strong>Yes, yes, and yes!</strong></p>
    `
  },
  "menu-fries": {
    eyebrow: "Crunch attack!",
    title: "Waffle Fries™ — Crispy criss-cross!",
    hero: { type: "image", src: "assets/fav-fries.png", contain: true },
    body: `
      <p>Most fries are boring sticks. <strong>Not these!</strong> They're cut into little CRISS-CROSS waffle shapes — perfect for scooping ketchup or dunking into Chick-fil-A Sauce.</p>
      <p>They're crispy on the outside, fluffy on the inside, and salty in all the right places. <strong>Pro tip:</strong> stack them on top of your sandwich for extra crunch!</p>
    `
  },
  "menu-nuggets": {
    eyebrow: "Pop-pop-pop!",
    title: "Chicken Nuggets — Bite-sized fun!",
    hero: { type: "image", src: "assets/fav-nuggets.png", contain: true },
    body: `
      <p>Tiny. Crunchy. Juicy. <strong>Pop-able.</strong> These are bite-sized pieces of real chicken, hand-breaded just like our big sandwich.</p>
      <p>You can get <strong>8 nuggets, 12 nuggets, or — whoa — 30 nuggets!</strong> (Yes, 30. We don't judge.)</p>
      <p><strong>Sauce time!</strong> Try them with: Chick-fil-A Sauce, Polynesian, Honey Mustard, Buffalo, BBQ, Ranch, or Sweet & Spicy Sriracha. So many flavors!</p>
    `
  },
  "menu-lemonade": {
    eyebrow: "Splish splash!",
    title: "Lemonade — Sunshine in a cup!",
    hero: { type: "image", src: "assets/fav-lemonade.png", contain: true },
    body: `
      <p>Just <strong>three things</strong>: real lemons (squeezed by hand!), pure cane sugar, and water. That's it. No funny business.</p>
      <p>It's made fresh every single morning at every single Chick-fil-A. Sweet, tangy, and SO refreshing on a hot day.</p>
      <p><strong>Ask a grown-up about a Frosted Lemonade!</strong> It's lemonade blended with vanilla ice cream. Mind = blown.</p>
    `
  },

  /* ---------- Community ---------- */
  community: {
    eyebrow: "Helping hands",
    title: "We love our neighbors!",
    hero: { type: "image", src: "assets/community.png" },
    body: `
      <p>Chick-fil-A is way more than just chicken. We help out around town in lots of cool ways!</p>
      <p>We donate food to people who are hungry. We give scholarships to kids going to college. We sponsor little league teams, school events, and big community festivals.</p>
      <p>If a family needs a hand, we want to be there. <strong>That's the Chick-fil-A way!</strong></p>
      <div class="m-stats">
        <div class="m-stat"><strong>1973</strong><span>Started helping</span></div>
        <div class="m-stat"><strong>$174M+</strong><span>For college kids</span></div>
        <div class="m-stat"><strong>23M+</strong><span>Meals shared</span></div>
      </div>
    `
  },

  /* ---------- Commitment ---------- */
  commitment: {
    eyebrow: "Earth heroes",
    title: "Caring for our planet!",
    hero: { type: "solid", icon: "leaf" },
    body: `
      <p>We don't just care about people — we care about the <strong>whole big beautiful Earth</strong>.</p>
      <ul>
        <li><strong>Happy chickens, happy eggs</strong> — Our chicken has no antibiotics, and our eggs come from cage-free hens.</li>
        <li><strong>Don't waste food!</strong> — Extra food at the end of the day gets donated to families who need it.</li>
        <li><strong>Be kind to the Earth</strong> — Lots of our packaging can be recycled, and our restaurants are built to save energy.</li>
      </ul>
      <p>Little choices, big difference!</p>
    `
  },

  /* ---------- How We Serve You ---------- */
  flow: {
    eyebrow: "From you to yum",
    title: "How a sandwich gets to you!",
    hero: { type: "solid", icon: "logo" },
    body: `
      <p>Ever wonder how your sandwich finds its way to your hands? Here's the whole adventure!</p>
      <ol style="padding-left:20px;">
        <li><strong>Order in the App</strong> — Tap, tap, done!</li>
        <li><strong>Pick Drive-Thru</strong> — Or come on inside!</li>
        <li><strong>We Cook Fresh</strong> — Sizzle, sizzle!</li>
        <li><strong>We Hand It Over</strong> — With a giant smile!</li>
        <li><strong>You Eat & Smile</strong> — Mission accomplished!</li>
      </ol>
    `
  },
  "flow-1": {
    eyebrow: "Step 1",
    title: "Tap-Tap-Order!",
    hero: { type: "solid", icon: "phone" },
    body: `
      <p>The Chick-fil-A app is like a magic remote control for chicken! You tap what you want, and it's ready when you arrive. <strong>No waiting in line!</strong></p>
      <p>Even cooler — every time you order, you earn points. Save up the points and you can get <strong>FREE FOOD!</strong> Free nuggets? Yes please!</p>
    `
  },
  "flow-2": {
    eyebrow: "Step 2",
    title: "Vroom! Drive-Thru Time!",
    hero: { type: "solid", icon: "car" },
    body: `
      <p>The drive-thru is the FASTEST way to get your food. Pull up, smile, and a friendly team member will help you out.</p>
      <p>Don't have a car? <strong>No problem!</strong> You can dine inside, do curbside pickup (they bring it to your car!), or have it delivered right to your door.</p>
    `
  },
  "flow-3": {
    eyebrow: "Step 3",
    title: "Sizzle! Fresh Food Cooking!",
    hero: { type: "solid", icon: "bag" },
    body: `
      <p>This is where the kitchen gets BUSY! Chicken is hand-breaded — breading flying everywhere. Fries are dropped in the fryer — sizzle, sizzle! Lemons are squeezed for the lemonade.</p>
      <p>Nothing sits around getting cold. <strong>Everything is made fresh just for you!</strong></p>
    `
  },
  "flow-4": {
    eyebrow: "Step 4",
    title: "Here You Go!",
    hero: { type: "solid", icon: "person" },
    body: `
      <p>A team member hands you your bag, says <strong>"my pleasure!"</strong>, and probably wishes you a great day.</p>
      <p>Maybe even a little wave. Maybe even a high-five if you ask nicely!</p>
    `
  },
  "flow-5": {
    eyebrow: "Step 5",
    title: "Yum! Time to Eat!",
    hero: { type: "solid", icon: "heart" },
    body: `
      <p>The moment we've all been waiting for. <strong>FIRST BITE!</strong></p>
      <p>Whether it's lunch with friends, dinner with family, or a treat after a soccer game — every meal at Chick-fil-A is built to make your day a little brighter.</p>
      <p>Now slurp that lemonade and smile big!</p>
    `
  },

  /* ---------- Quote ---------- */
  quote: {
    eyebrow: "Story time!",
    title: "Meet Mr. Truett Cathy!",
    hero: { type: "solid", icon: "quote" },
    body: `
      <p style="font-size:20px; font-weight:600; font-style:italic; line-height:1.4;">"We didn't invent the chicken sandwich… just the chicken sandwich restaurant!"</p>
      <p>Once upon a time, way back in <strong>1946</strong>, a young man named <strong>Truett Cathy</strong> opened a tiny restaurant called the Dwarf Grill in Georgia.</p>
      <p>One day he was playing around with chicken in the kitchen and — <strong>BOOM!</strong> — he made a chicken sandwich so good that people came from miles away to try it. He named it the Chick-fil-A sandwich, and the rest is history!</p>
      <p>Mr. Cathy taught everyone the secret to a happy business: <strong>be kind to people, work hard, and always make the food fresh.</strong> Pretty good advice for life, too!</p>
    `
  }
};

/* ---------- Solid hero icons ---------- */
const ICONS = {
  logo:   `<svg viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 4c2 0 3 1 3 3s-1 4-3 5-3-1-3-3 1-5 3-5z"/></svg>`,
  flag:   `<svg viewBox="0 0 24 24"><path d="M4 2h2v20H4zM7 3h11l-2 4 2 4H7z"/></svg>`,
  car:    `<svg viewBox="0 0 24 24"><path d="M5 11l1.5-4.5h11L19 11M17.5 16a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5m-11 0A1.5 1.5 0 1 1 8 14.5 1.5 1.5 0 0 1 6.5 16M18.9 6A1.5 1.5 0 0 0 17.5 5h-11A1.5 1.5 0 0 0 5.1 6L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8z"/></svg>`,
  door:   `<svg viewBox="0 0 24 24"><path d="M19 19V3H5v16H3v2h18v-2zm-9-7h2v2h-2z"/></svg>`,
  cross:  `<svg viewBox="0 0 24 24"><path d="M10 2h4v6h6v4h-6v10h-4V12H4V8h6z"/></svg>`,
  facts:  `<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
  leaf:   `<svg viewBox="0 0 24 24"><path d="M17 8C8 10 5 16 4 22h2c1-4 4-8 11-9 5-1 4-7 4-7s-3 1-4 2z"/></svg>`,
  phone:  `<svg viewBox="0 0 24 24"><path d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-5 19a1.2 1.2 0 1 1 1.2-1.2A1.2 1.2 0 0 1 12 21zm5-3H7V5h10z"/></svg>`,
  bag:    `<svg viewBox="0 0 24 24"><path d="M6 2l-2 4v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6l-2-4zm0 4l1-2h10l1 2zm6 6a3 3 0 1 1-3 3 3 3 0 0 1 3-3z"/></svg>`,
  person: `<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 22v-2a8 8 0 0 1 16 0v2z"/></svg>`,
  heart:  `<svg viewBox="0 0 24 24"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6C19 16.5 12 21 12 21z"/></svg>`,
  quote:  `<svg viewBox="0 0 24 24"><path d="M7 7h4v4H8c0 2 1 3 3 3v2c-3 0-5-2-5-5zm8 0h4v4h-3c0 2 1 3 3 3v2c-3 0-5-2-5-5z"/></svg>`,
  cow:    `<svg viewBox="0 0 120 100" style="width:90px; height:auto;"><ellipse cx="60" cy="70" rx="42" ry="26" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="3"/><ellipse cx="42" cy="62" rx="9" ry="6" fill="#1A1A1A"/><ellipse cx="78" cy="78" rx="11" ry="7" fill="#1A1A1A"/><ellipse cx="62" cy="58" rx="6" ry="4" fill="#1A1A1A"/><rect x="40" y="88" width="6" height="10" fill="#1A1A1A"/><rect x="74" y="88" width="6" height="10" fill="#1A1A1A"/><ellipse cx="35" cy="42" rx="20" ry="18" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="3"/><ellipse cx="22" cy="48" rx="10" ry="8" fill="#FFD8C2" stroke="#1A1A1A" stroke-width="2"/><ellipse cx="19" cy="46" rx="1.5" ry="2" fill="#1A1A1A"/><ellipse cx="25" cy="46" rx="1.5" ry="2" fill="#1A1A1A"/><circle cx="35" cy="36" r="2.5" fill="#1A1A1A"/><circle cx="44" cy="36" r="2.5" fill="#1A1A1A"/><ellipse cx="22" cy="28" rx="5" ry="7" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="2"/><ellipse cx="50" cy="28" rx="5" ry="7" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="2"/><path d="M28 22 Q26 14 30 12" fill="none" stroke="#1A1A1A" stroke-width="2.5" stroke-linecap="round"/><path d="M44 22 Q46 14 42 12" fill="none" stroke="#1A1A1A" stroke-width="2.5" stroke-linecap="round"/></svg>`,
};

/* =========================================================
   Modal controller
   ========================================================= */
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
let lastFocused = null;

function openModal(componentKey) {
  const data = CONTENT[componentKey];
  if (!data) {
    console.warn('No content for', componentKey);
    return;
  }
  lastFocused = document.activeElement;

  let heroHTML = '';
  if (data.hero.type === 'image') {
    const cls = data.hero.contain ? 'm-hero m-hero--contain' : 'm-hero';
    heroHTML = `<div class="${cls}"><img src="${data.hero.src}" alt=""/></div>`;
  } else if (data.hero.type === 'solid') {
    heroHTML = `<div class="m-hero m-hero--solid">${ICONS[data.hero.icon] || ICONS.logo}<h2>${data.title}</h2></div>`;
  }

  const titleHTML = data.hero.type === 'solid'
    ? `<h3>${data.eyebrow}</h3>`
    : `<h3>${data.eyebrow}</h3><h2>${data.title}</h2>`;

  modalContent.innerHTML = `
    ${heroHTML}
    <div class="m-body">
      ${titleHTML}
      ${data.body}
    </div>
  `;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  setTimeout(() => modal.querySelector('.modal__close')?.focus(), 50);
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocused && lastFocused.focus) lastFocused.focus();
}

/* ---------- Stickman locks ---------- */
const stickmen = [];
document.querySelectorAll('.lock canvas').forEach(canvas => {
  const mood = canvas.getAttribute('data-mood') || 'wiggle';
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = canvas.width, h = canvas.height;
  // Set display size via CSS, internal resolution boosted for crispness
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.getContext('2d').scale(dpr, dpr);
  // Pass display dims to stickman via custom prop
  canvas._dispW = w;
  canvas._dispH = h;
  stickmen.push(new TinyStickman(canvas, mood));
});

/* ---------- Flying-to-slot mechanic ---------- */
let foundCount = 0;
const TOTAL_SLOTS = document.querySelectorAll('.progress__slot').length;

function flyLockToSlot(lock, key) {
  const slot = document.querySelector(`.progress__slot[data-slot="${key}"]`);
  if (!slot) return;

  const lockRect = lock.getBoundingClientRect();
  const slotRect = slot.getBoundingClientRect();

  // Translate from lock center to slot center, with scale-down
  const dx = (slotRect.left + slotRect.width / 2) - (lockRect.left + lockRect.width / 2);
  const dy = (slotRect.top + slotRect.height / 2) - (lockRect.top + lockRect.height / 2);
  const scale = Math.min(slotRect.width / lockRect.width, slotRect.height / lockRect.height) * 0.95;

  // Hide the "Pick me!" hint mid-flight
  const hint = lock.querySelector('.lock__hint');
  if (hint) hint.style.opacity = '0';

  // Trigger transform — arc trajectory by going up first then down (using two stages)
  lock.classList.add('is-flying');
  // Stage 1: arc upward
  lock.style.transform = `translate(${dx * 0.5}px, ${Math.min(dy, -80)}px) scale(${(1 + scale) / 2}) rotate(-15deg)`;

  setTimeout(() => {
    // Stage 2: settle into slot
    lock.style.transform = `translate(${dx}px, ${dy}px) scale(${scale}) rotate(0deg)`;
    lock.style.opacity = '0';
  }, 350);

  setTimeout(() => {
    // Replace slot's "?" with a tiny live stickman
    slot.classList.add('is-filled', 'is-flashing');
    const tinyCanvas = document.createElement('canvas');
    const slotSize = slot.clientWidth;
    tinyCanvas.width = slotSize;
    tinyCanvas.height = slotSize;
    slot.innerHTML = '';
    slot.appendChild(tinyCanvas);
    const mood = lock.querySelector('canvas').getAttribute('data-mood');
    new TinyStickman(tinyCanvas, mood);
    // Now hide the original lock entirely
    lock.style.display = 'none';
    setTimeout(() => slot.classList.remove('is-flashing'), 800);

    // Update count + bar
    foundCount++;
    document.getElementById('progress-count').textContent = foundCount;
    document.getElementById('progress-bar').style.width = (foundCount / TOTAL_SLOTS * 100) + '%';

    if (foundCount === TOTAL_SLOTS) {
      celebrateAllFound();
    }
  }, 950);
}

function celebrateAllFound() {
  const prog = document.getElementById('progress');
  prog.style.animation = 'prog-celebrate 1.2s var(--ease)';
  const btn = document.createElement('button');
  btn.id = 'all-found-btn';
  btn.style.cssText = 'flex-shrink:0; padding:8px 16px; background:linear-gradient(90deg,var(--red),#FFC700); color:white; border:none; border-radius:999px; font-weight:800; font-size:12px; letter-spacing:.04em; white-space:nowrap; cursor:pointer; box-shadow:0 4px 12px rgba(221,0,49,.35); animation: all-found-pulse 1.6s ease-in-out infinite; font-family:inherit;';
  btn.innerHTML = 'ALL FOUND! → See the business →';
  btn.addEventListener('click', openBizView);
  prog.appendChild(btn);
  // Auto-open after 1.5s as a payoff
  setTimeout(openBizView, 1800);
}

function openBizView() {
  const biz = document.getElementById('biz');
  biz.classList.add('is-open');
  biz.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  biz.scrollTop = 0;
}

function closeBizView() {
  const biz = document.getElementById('biz');
  biz.classList.remove('is-open');
  biz.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
  if (e.target.closest('[data-biz-close]')) {
    closeBizView();
  }
  if (e.target.closest('[data-biz-open]')) {
    openBizView();
  }
});

document.querySelectorAll('.lock').forEach(lock => {
  lock.addEventListener('click', (e) => {
    e.stopPropagation();
    const key = lock.getAttribute('data-lock');
    const card = document.querySelector(`.card[data-component="${key}"]`);
    if (!card) return;
    // Reveal card + fly stickman to top-right slot
    card.classList.remove('is-locked');
    card.classList.add('is-revealing');
    flyLockToSlot(lock, key);
    setTimeout(() => {
      card.classList.remove('is-revealing');
      openModal(key);
    }, 1100);
  });
});

/* ---------- Wire up clicks ---------- */
const isMobile = () => window.matchMedia('(max-width: 900px)').matches;

document.addEventListener('click', (e) => {
  const close = e.target.closest('[data-close]');
  if (close) { closeModal(); return; }

  // Don't open modals from locks via this handler — they have their own
  if (e.target.closest('.lock')) return;

  // Mobile accordion: clicking a card toggles expand/collapse instead of opening modal
  if (isMobile()) {
    const card = e.target.closest('.card');
    if (card) {
      e.stopPropagation();
      // Don't expand if user clicked on a sub-component button
      const subComp = e.target.closest('[data-component]');
      if (subComp && subComp !== card && card.classList.contains('is-expanded')) {
        // Sub-component clicked while expanded → open modal for that
        openModal(subComp.getAttribute('data-component'));
        return;
      }
      card.classList.toggle('is-expanded');
      return;
    }
  }

  const target = e.target.closest('[data-component]');
  if (!target) return;

  // If the target is a card that's still locked on desktop, ignore (stickman gates it)
  if (target.classList.contains('card') && target.classList.contains('is-locked')) return;

  e.stopPropagation();
  const key = target.getAttribute('data-component');
  openModal(key);
});

/* ---------- Keyboard support ---------- */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});
document.querySelectorAll('[data-component]').forEach(el => {
  if (el.tagName === 'BUTTON') return;
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(el.getAttribute('data-component'));
    }
  });
});

/* ---------- Subtle parallax on background ---------- */
const bgImg = document.querySelector('.bg-photo img');
if (bgImg && window.matchMedia('(min-width: 1100px)').matches) {
  document.querySelector('.stage')?.addEventListener('mousemove', (e) => {
    const stage = e.currentTarget;
    const rect = stage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    bgImg.style.transform = `scale(1.04) translate(${-x * 12}px, ${-y * 8}px)`;
  });
  document.querySelector('.stage')?.addEventListener('mouseleave', () => {
    bgImg.style.transform = '';
  });
}
