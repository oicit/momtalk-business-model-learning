/* =========================================================
   Business view — interactivity & animations
   ========================================================= */
(function () {
  /* ---- Reveal on scroll ---- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('is-visible');
    });
  }, { threshold: 0.18 });

  function initReveal() {
    document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
  }

  /* ---- Counter ($21B animation) ---- */
  function initCounter() {
    const btn = document.getElementById('counter-money');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const target = parseInt(btn.dataset.target, 10);
      const num = btn.querySelector('.biz-counter__num');
      const hint = btn.querySelector('.biz-counter__hint');
      if (hint) hint.style.display = 'none';
      let v = 0;
      const dur = 2200;
      const start = performance.now();
      function tick(t) {
        const p = Math.min(1, (t - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        v = Math.floor(target * eased * 10) / 10;
        num.textContent = '$' + v.toFixed(1);
        if (p < 1) requestAnimationFrame(tick);
        else {
          num.textContent = '$' + target;
          rainEmojis();
        }
      }
      requestAnimationFrame(tick);
    });
  }

  function rainEmojis() {
    const wrap = document.getElementById('money-rain');
    if (!wrap) return;
    const chars = ['💰','💵','🪙','🐔'];
    for (let i = 0; i < 30; i++) {
      const span = document.createElement('span');
      span.textContent = chars[Math.floor(Math.random() * chars.length)];
      span.style.left = Math.random() * 100 + '%';
      span.style.animationDelay = (Math.random() * 1.5) + 's';
      span.style.animationDuration = (2 + Math.random() * 2) + 's';
      wrap.appendChild(span);
      setTimeout(() => span.remove(), 4500);
    }
  }

  /* ---- Lottery dots ---- */
  function initDots() {
    const grid = document.getElementById('dots-grid');
    if (!grid) return;
    // 600 dots representing 60,000 (each dot = 100 people)
    const TOTAL = 600;
    grid.innerHTML = '';
    for (let i = 0; i < TOTAL; i++) {
      const d = document.createElement('div');
      d.className = 'dot';
      grid.appendChild(d);
    }
    const btn = document.getElementById('pick-lucky');
    const result = document.getElementById('dots-result');
    btn?.addEventListener('click', () => {
      // 80 lucky out of 60000 → 0.8 dots out of 600. Round to 1.
      // But for visual, highlight ~3 dots so it's actually visible.
      const lucky = 3;
      const dots = Array.from(grid.querySelectorAll('.dot'));
      // Reset
      dots.forEach(d => d.classList.remove('is-lucky'));
      // Pick random dots one at a time with delay
      const picked = new Set();
      while (picked.size < lucky) picked.add(Math.floor(Math.random() * TOTAL));
      const arr = Array.from(picked);
      arr.forEach((idx, i) => {
        setTimeout(() => dots[idx].classList.add('is-lucky'), 300 + i * 400);
      });
      btn.disabled = true;
      btn.textContent = 'PICKING...';
      setTimeout(() => {
        result.textContent = '✨ Only 80 out of 60,000 made it. That\'s 1 in 750!';
        btn.textContent = '🎯 Pick again';
        btn.disabled = false;
      }, 1800);
    });
  }

  /* ---- Sunday flip ---- */
  function initSunday() {
    const sun = document.getElementById('day-sun');
    const cost = document.getElementById('sunday-cost');
    const why = document.getElementById('sunday-why');
    sun?.addEventListener('click', () => {
      sun.classList.toggle('is-flipped');
      const flipped = sun.classList.contains('is-flipped');
      if (cost) cost.hidden = !flipped;
      if (why) why.hidden = !flipped;
    });
  }

  /* ---- Menu dots fill on reveal ---- */
  function fillMenuDots() {
    document.querySelectorAll('.menu-dots').forEach(el => {
      const count = parseInt(el.dataset.count, 10);
      el.innerHTML = '';
      for (let i = 0; i < count; i++) {
        const d = document.createElement('div');
        d.className = 'menu-dot';
        d.style.animationDelay = (i * 0.015) + 's';
        el.appendChild(d);
      }
    });
  }
  // Reveal-aware: fill once visible
  const menuObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        fillMenuDots();
        menuObs.disconnect();
      }
    });
  }, { threshold: 0.3 });
  function initMenu() {
    const section = document.querySelector('.ch-4');
    if (section) menuObs.observe(section);
  }

  /* ---- Pleasure tap ---- */
  function initPleasure() {
    const counter = document.getElementById('pleasure-count');
    let count = 0;
    document.querySelectorAll('[data-pleasure]').forEach(p => {
      p.addEventListener('click', () => {
        p.classList.remove('is-talking');
        // Trigger reflow
        void p.offsetWidth;
        p.classList.add('is-talking');
        count++;
        if (counter) counter.textContent = count;
        setTimeout(() => p.classList.remove('is-talking'), 1500);
      });
    });
  }

  /* ---- App points game ---- */
  function initApp() {
    let points = 0;
    const bar = document.getElementById('app-bar');
    const num = document.getElementById('app-points');
    const prize = document.getElementById('app-prize');
    document.querySelectorAll('.app-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const add = parseInt(btn.dataset.points, 10);
        points = Math.min(100, points + add);
        if (num) num.textContent = points;
        if (bar) bar.style.width = points + '%';
        if (points >= 100 && prize) {
          prize.hidden = false;
          // confetti effect via emojis
          rainCelebration();
        }
      });
    });
  }

  function rainCelebration() {
    const ch = document.querySelector('.ch-6');
    if (!ch) return;
    const chars = ['🍗','🎉','⭐','🍟'];
    for (let i = 0; i < 25; i++) {
      const span = document.createElement('span');
      span.textContent = chars[Math.floor(Math.random() * chars.length)];
      span.style.cssText = `position:absolute;left:${Math.random()*100}%;top:-30px;font-size:24px;animation:emoji-fall ${2+Math.random()*2}s linear forwards;animation-delay:${Math.random()*0.8}s;pointer-events:none;`;
      ch.style.position = 'relative';
      ch.appendChild(span);
      setTimeout(() => span.remove(), 4500);
    }
  }

  /* ---- Quiz ---- */
  const QUIZ = [
    {
      q: "How many people apply to run a Chick-fil-A every year?",
      opts: ["About 1,000", "About 60,000", "About 10 million", "About 200"],
      correct: 1
    },
    {
      q: "Which day is Chick-fil-A always closed?",
      opts: ["Monday", "Wednesday", "Sunday", "Friday"],
      correct: 2
    },
    {
      q: "What's the magic phrase Chick-fil-A workers say?",
      opts: ["No problem!", "My pleasure!", "You bet!", "Cluck cluck!"],
      correct: 1
    },
    {
      q: "Why does Chick-fil-A have FEWER menu items than other places?",
      opts: ["They don't like food", "To save money", "So they can make each one perfectly", "Because cows can't read"],
      correct: 2
    },
    {
      q: "Who owns Chick-fil-A?",
      opts: ["A bunch of strangers (stockholders)", "The Cathy family", "McDonald's", "The President"],
      correct: 1
    }
  ];

  function initQuiz() {
    const qEl = document.getElementById('quiz-question');
    const optsEl = document.getElementById('quiz-opts');
    const fbEl = document.getElementById('quiz-feedback');
    const barEl = document.getElementById('quiz-bar');
    const finalEl = document.getElementById('quiz-final');
    const qBox = document.getElementById('quiz-q');
    const scoreEl = document.getElementById('quiz-score');
    const titleEl = document.getElementById('quiz-title');
    const restartBtn = document.getElementById('quiz-restart');
    if (!qEl) return;

    let idx = 0;
    let score = 0;

    function render() {
      const q = QUIZ[idx];
      qEl.textContent = q.q;
      fbEl.textContent = '';
      fbEl.className = 'quiz-feedback';
      optsEl.innerHTML = '';
      barEl.style.width = (idx / QUIZ.length * 100) + '%';
      q.opts.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-opt';
        btn.textContent = opt;
        btn.addEventListener('click', () => answer(i, btn));
        optsEl.appendChild(btn);
      });
    }

    function answer(i, btn) {
      const q = QUIZ[idx];
      const opts = optsEl.querySelectorAll('.quiz-opt');
      opts.forEach(o => o.disabled = true);
      if (i === q.correct) {
        btn.classList.add('is-correct');
        fbEl.textContent = '✅ Correct!';
        fbEl.classList.add('is-correct');
        score++;
        confettiBurst(document.querySelector('.ch-quiz'));
      } else {
        btn.classList.add('is-wrong');
        opts[q.correct].classList.add('is-correct');
        fbEl.textContent = '❌ The right answer was: ' + q.opts[q.correct];
        fbEl.classList.add('is-wrong');
      }
      setTimeout(() => {
        idx++;
        if (idx >= QUIZ.length) finish();
        else render();
      }, 1500);
    }

    function finish() {
      qBox.hidden = true;
      finalEl.hidden = false;
      barEl.style.width = '100%';
      scoreEl.textContent = score;
      let title = '🐔 Chicken Genius!';
      if (score < 3) title = '🌱 Chicken Apprentice';
      else if (score < 5) title = '⭐ Chicken Expert';
      else title = '🏆 Chicken Master!';
      titleEl.textContent = title;
    }

    restartBtn?.addEventListener('click', () => {
      idx = 0; score = 0;
      qBox.hidden = false;
      finalEl.hidden = true;
      render();
    });

    render();
  }

  /* ---- Fresh ingredient flip cards ---- */
  function initFresh() {
    document.querySelectorAll('[data-fresh]').forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
      });
    });
  }

  /* ---- Special-stuff popup ---- */
  function initSpecial() {
    const popup = document.getElementById('special-popup');
    const text = document.getElementById('special-popup-text');
    const closeBtn = document.getElementById('special-popup-close');
    if (!popup) return;
    document.querySelectorAll('[data-special]').forEach(card => {
      card.addEventListener('click', () => {
        text.textContent = card.dataset.fact;
        popup.hidden = false;
      });
    });
    function hide() { popup.hidden = true; }
    closeBtn?.addEventListener('click', hide);
    popup.addEventListener('click', (e) => { if (e.target === popup) hide(); });
  }

  /* ---- Ambient floating emojis in background ---- */
  let ambientTimer = null;
  function startAmbient() {
    const wrap = document.getElementById('biz-ambient');
    if (!wrap) return;
    const chars = ['🐔','🍗','🍟','💛','⭐','🥤','🍔','❤️','🌟'];
    if (ambientTimer) clearInterval(ambientTimer);
    function spawn() {
      if (!document.getElementById('biz')?.classList.contains('is-open')) return;
      const span = document.createElement('span');
      span.textContent = chars[Math.floor(Math.random() * chars.length)];
      span.style.left = (Math.random() * 100) + '%';
      span.style.fontSize = (20 + Math.random() * 20) + 'px';
      span.style.animationDuration = (8 + Math.random() * 6) + 's';
      wrap.appendChild(span);
      setTimeout(() => span.remove(), 16000);
    }
    for (let i = 0; i < 8; i++) setTimeout(spawn, i * 800);
    ambientTimer = setInterval(spawn, 1400);
  }

  /* ---- Roaming cow (runs across screen periodically) ---- */
  let cowTimer = null;
  function startRoamingCow() {
    const cow = document.getElementById('roaming-cow');
    if (!cow) return;
    function run() {
      if (!document.getElementById('biz')?.classList.contains('is-open')) return;
      cow.classList.remove('is-running');
      void cow.offsetWidth; // reflow
      cow.classList.add('is-running');
    }
    if (cowTimer) clearInterval(cowTimer);
    setTimeout(run, 5000);
    cowTimer = setInterval(run, 22000);
  }

  /* ---- Chapter mascot stickmen ---- */
  function initMascots() {
    document.querySelectorAll('.ch-mascot').forEach(canvas => {
      if (canvas._stickman) return;
      const mood = canvas.dataset.mood || 'wiggle';
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.width, h = canvas.height;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.getContext('2d').scale(dpr, dpr);
      canvas._dispW = w;
      canvas._dispH = h;
      if (window.TinyStickman) {
        canvas._stickman = new window.TinyStickman(canvas, mood);
      }
    });
  }

  /* ---- Confetti burst (used by quiz) ---- */
  function confettiBurst(target) {
    const chars = ['🎉','✨','⭐','🎊','💛','🌟'];
    const host = target || document.querySelector('.ch-quiz') || document.body;
    host.style.position = host.style.position || 'relative';
    for (let i = 0; i < 24; i++) {
      const span = document.createElement('span');
      span.textContent = chars[Math.floor(Math.random() * chars.length)];
      span.style.cssText = `position:absolute;left:${50 + (Math.random()-0.5)*40}%;top:50%;font-size:${20 + Math.random()*16}px;pointer-events:none;animation:confetti-pop ${0.9 + Math.random()*0.6}s ease-out forwards;animation-delay:${Math.random()*0.3}s;z-index:1000;`;
      span.style.setProperty('--dx', ((Math.random()-0.5)*600) + 'px');
      span.style.setProperty('--dy', (-100 - Math.random()*200) + 'px');
      span.style.setProperty('--rot', ((Math.random()-0.5)*720) + 'deg');
      host.appendChild(span);
      setTimeout(() => span.remove(), 1800);
    }
  }
  window._bizConfetti = confettiBurst;

  /* ---- Run all when biz opens ---- */
  let bizInitialized = false;
  function initAll() {
    if (bizInitialized) return;
    bizInitialized = true;
    initReveal();
    initCounter();
    initDots();
    initSunday();
    initMenu();
    initPleasure();
    initApp();
    initFresh();
    initSpecial();
    initQuiz();
    initMascots();
    startAmbient();
    startRoamingCow();
  }

  // Hook into biz opening
  const biz = document.getElementById('biz');
  if (biz) {
    const obs = new MutationObserver(() => {
      if (biz.classList.contains('is-open')) initAll();
    });
    obs.observe(biz, { attributes: true, attributeFilter: ['class'] });
    if (biz.classList.contains('is-open')) initAll();
  }
})();
