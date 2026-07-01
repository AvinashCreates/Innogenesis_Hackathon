    // ── PAGE NAVIGATION ──
    const pages = ['home', 'about', 'tracks', 'track-structured', 'track-open', 'prizes', 'faq', 'contact'];

    function showTrackDomain(type) {
      showPage('track-' + type);
    }

    function showPage(id) {
      pages.forEach(p => {
        document.getElementById('page-' + p).classList.remove('active');
        const n = document.getElementById('nav-' + p);
        if (n) n.classList.remove('active');
      });
      document.getElementById('page-' + id).classList.add('active');
      const n = document.getElementById('nav-' + id);
      if (n) n.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ── MOBILE NAV ──
    function toggleMobileNav() {
      const drawer = document.getElementById('mobile-nav-drawer');
      const btn = document.getElementById('nav-hamburger');
      const isOpen = drawer.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      btn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    }

    function mobileNav(id) {
      // Update active state in mobile drawer
      document.querySelectorAll('.mobile-nav-drawer a').forEach(a => a.classList.remove('active'));
      const ma = document.getElementById('mnav-' + id);
      if (ma) ma.classList.add('active');
      // Close drawer
      document.getElementById('mobile-nav-drawer').classList.remove('open');
      document.getElementById('nav-hamburger').classList.remove('open');
      // Show page
      showPage(id);
    }

    // Close mobile nav on outside click
    document.addEventListener('click', function (e) {
      const drawer = document.getElementById('mobile-nav-drawer');
      const btn = document.getElementById('nav-hamburger');
      if (drawer && btn && !drawer.contains(e.target) && !btn.contains(e.target) && drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        btn.classList.remove('open');
      }
    });

    // ── COUNTDOWN ──
    function updateCountdown() {
      const target = new Date('2026-08-07T09:00:00+05:30');
      const now = new Date();
      const diff = target - now;
      if (diff <= 0) { document.getElementById('countdown').innerHTML = '<div style="color:var(--cyan);font-family:Orbitron,monospace;font-size:18px;letter-spacing:0.1em">Registrations are Live!</div>'; return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      const strip = document.getElementById('countdown');
      if (!strip) return;
      strip.innerHTML = `
    <div class="countdown-unit"><span class="countdown-val">${String(d).padStart(2, '0')}</span><div class="countdown-label">Days</div></div>
    <div class="countdown-sep" aria-hidden="true">:</div>
    <div class="countdown-unit"><span class="countdown-val">${String(h).padStart(2, '0')}</span><div class="countdown-label">Hours</div></div>
    <div class="countdown-sep" aria-hidden="true">:</div>
    <div class="countdown-unit"><span class="countdown-val">${String(m).padStart(2, '0')}</span><div class="countdown-label">Mins</div></div>
    <div class="countdown-sep" aria-hidden="true">:</div>
    <div class="countdown-unit"><span class="countdown-val">${String(s).padStart(2, '0')}</span><div class="countdown-label">Secs</div></div>`;
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ── CONTACT EMAIL SEND ──
    function sendContactEmail() {
      const name = document.getElementById('c-name').value.trim();
      const email = document.getElementById('c-email').value.trim();
      const subjectSelect = document.getElementById('c-subject').value;
      const message = document.getElementById('c-msg').value.trim();

      if (!name || !email || !message) {
        alert('Please fill out Name, Email, and Message fields.');
        return;
      }

      const to = 'hackathon5@nriit.edu.in';
      const emailSubject = subjectSelect ? `[INNOGENESIS 2026] ${subjectSelect} - from ${name}` : `[INNOGENESIS 2026] Inquiry from ${name}`;
      const body = `Hello Organizing Committee,\n\nName: ${name}\nEmail: ${email}\nTopic: ${subjectSelect || 'Not Selected'}\n\nMessage:\n${message}\n\n---\nSent via INNOGENESIS 2026 Contact Form`;

      const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoUrl;
    }

    // ── FAQ TOGGLE ──
    function toggleFaq(el) {
      const item = el.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    }

    // ── MODAL ──
    function showModal() {
      document.getElementById('modal').classList.add('show');
    }
    function closeModal() {
      document.getElementById('modal').classList.remove('show');
      showPage('home');
    }
    document.getElementById('modal').addEventListener('click', function (e) {
      if (e.target === this) closeModal();
    });

    // ── KEYBOARD ESCAPE ──
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });

  // ── INTRO VIDEO OVERLAY LOGIC ──
    /* ── enterSite is global so onclick / any inline handler can reach it ── */
    window.enterSite = (function () {
      var _called = false;
      return function enterSite() {
        if (_called) return;
        _called = true;

        var SESSION_KEY = 'nri_intro_seen_2026';
        sessionStorage.setItem(SESSION_KEY, '1');

        /* Remove all listeners */
        document.removeEventListener('keydown', window._introKeyHandler);
        document.removeEventListener('click', window._introClickHandler);
        document.removeEventListener('touchstart', window.enterSite);

        var overlay = document.getElementById('intro-overlay');
        var video = document.getElementById('intro-video');

        if (overlay) {
          overlay.classList.add('fade-out');
          setTimeout(function () {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
            if (video) { video.pause(); video.src = ''; }
          }, 900);
        } else {
          document.body.style.overflow = '';
        }
      };
    }());

    (function () {
      'use strict';

      var SESSION_KEY = 'nri_intro_seen_2026';
      var overlay = document.getElementById('intro-overlay');
      var video = document.getElementById('intro-video');
      var prompt = document.getElementById('intro-prompt');
      var skipBtn = document.getElementById('intro-skip');

      /* Wire skip button here (no inline onclick needed) */
      if (skipBtn) skipBtn.addEventListener('click', window.enterSite);

      /* ── Already seen this session? Hide immediately and bail ── */
      if (sessionStorage.getItem(SESSION_KEY) === '1') {
        if (overlay) overlay.style.display = 'none';
        document.body.style.overflow = '';
        return;
      }

      /* ── First visit ── */
      document.body.style.overflow = 'hidden';

      /* Progress bar */
      var bar = document.createElement('div');
      bar.id = 'intro-progress';
      if (overlay) overlay.appendChild(bar);

      /* Prompt inner click */
      var promptInner = document.getElementById('intro-prompt-inner');
      if (promptInner) promptInner.addEventListener('click', window.enterSite);

      /* Show skip after 2s */
      setTimeout(function () {
        if (skipBtn) skipBtn.classList.add('visible');
      }, 2000);

      /* ── Play video ── */
      if (video) {
        video.muted = false;
        var p = video.play();
        if (p !== undefined) {
          p.catch(function () {
            video.muted = true;
            video.play().catch(function () { });
          });
        }

        /* Progress bar update */
        video.addEventListener('timeupdate', function () {
          if (video.duration) {
            bar.style.width = ((video.currentTime / video.duration) * 100) + '%';
          }
        });

        /* Video ended → show "press any key" prompt and arm listeners */
        video.addEventListener('ended', function () {
          video.pause();
          bar.style.width = '100%';
          if (prompt) prompt.classList.add('visible');
          armEnterListeners();
        });
      }

      /* Attach enter listeners once (after video ends) */
      var listenersArmed = false;
      function armEnterListeners() {
        if (listenersArmed) return;
        listenersArmed = true;

        window._introKeyHandler = function (e) { window.enterSite(); };
        window._introClickHandler = function (e) {
          /* Only enter on click if prompt is visible; ignore skip btn (handled above) */
          if (e.target === skipBtn) return;
          if (prompt && prompt.classList.contains('visible')) window.enterSite();
        };

        document.addEventListener('keydown', window._introKeyHandler, { once: true });
        document.addEventListener('click', window._introClickHandler);
        document.addEventListener('touchstart', window.enterSite, { once: true, passive: true });
      }

    }());

  // ═══════════════════════════════════════════════════════════
  // SPLASH CURSOR ANIMATION
  // A trail of glowing colour "splashes" follows the pointer,
  // with a bigger burst on click/tap. Pure canvas 2D — no deps.
  // ═══════════════════════════════════════════════════════════
  (function () {
    'use strict';

    // Respect users who've asked for less motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'splash-cursor-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '9999';
    canvas.style.pointerEvents = 'none';
    canvas.style.mixBlendMode = 'screen';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    // Theme colours pulled from the site's orange × violet palette
    const COLORS = [
      '255,69,0',   // burning orange
      '255,140,0',  // amber
      '124,58,237', // violet
      '167,139,250',// violet light
      '245,158,11'  // cyan/amber accent
    ];

    let particles = [];
    let lastX = width / 2;
    let lastY = height / 2;
    let lastSpawnTime = 0;
    let pointerActive = false;

    function spawnParticle(x, y, burst) {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const angle = Math.random() * Math.PI * 2;
      const speed = burst ? Math.random() * 4 + 1.5 : Math.random() * 1.5 + 0.3;
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: burst ? Math.random() * 16 + 10 : Math.random() * 8 + 3,
        maxR: burst ? Math.random() * 34 + 22 : Math.random() * 16 + 8,
        alpha: burst ? 0.9 : 0.55,
        color,
        decay: burst ? 0.02 : 0.035
      });
    }

    function pointFromEvent(e) {
      if (e.touches && e.touches.length) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      return { x: e.clientX, y: e.clientY };
    }

    function handleMove(e) {
      const { x, y } = pointFromEvent(e);
      pointerActive = true;
      const dist = Math.hypot(x - lastX, y - lastY);
      const now = performance.now();
      if (dist > 3 && now - lastSpawnTime > 14) {
        const count = Math.min(4, Math.ceil(dist / 14));
        for (let i = 0; i < count; i++) spawnParticle(x, y, false);
        lastSpawnTime = now;
        lastX = x;
        lastY = y;
      }
    }

    function handleBurst(e) {
      const { x, y } = pointFromEvent(e);
      for (let i = 0; i < 28; i++) spawnParticle(x, y, true);
      lastX = x;
      lastY = y;
    }

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('touchmove', handleMove, { passive: true });
    window.addEventListener('mousedown', handleBurst, { passive: true });
    window.addEventListener('touchstart', handleBurst, { passive: true });
    document.addEventListener('mouseleave', () => { pointerActive = false; });

    function tick() {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.95;
        p.vy *= 0.95;
        p.alpha -= p.decay;
        if (p.r < p.maxR) p.r += 0.6;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
        gradient.addColorStop(0, `rgba(${p.color},${p.alpha})`);
        gradient.addColorStop(1, `rgba(${p.color},0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Safety cap so a frantic mouse can't grow this unbounded
      if (particles.length > 500) particles.splice(0, particles.length - 500);

      requestAnimationFrame(tick);
    }
    tick();
  })();
