/* ==========================================================================
   TULIP & TWINE — Handmade Creative Studio
   Plain vanilla JS, no build step, no external requests. Each block below is
   independent and guards for the elements it needs before doing anything.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. MOBILE NAVIGATION
     ------------------------------------------------------------------------ */
  (function () {
    var toggle = document.getElementById('mobile-toggle');
    var menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;

    var links = menu.querySelectorAll('.nav-link');

    function closeMenu() {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    function openMenu() {
      menu.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
    }

    toggle.addEventListener('click', function () {
      if (menu.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    links.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Escape closes the menu and returns focus to the toggle
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        closeMenu();
        toggle.focus();
      }
    });

    // a tap outside the open menu closes it
    document.addEventListener('click', function (e) {
      if (!menu.classList.contains('is-open')) return;
      if (menu.contains(e.target) || toggle.contains(e.target)) return;
      closeMenu();
    });

    // crossing back to the desktop layout always leaves the menu closed
    var wide = window.matchMedia('(min-width: 768px)');
    var onChange = function (e) { if (e.matches) closeMenu(); };
    if (wide.addEventListener) wide.addEventListener('change', onChange);
    else if (wide.addListener) wide.addListener(onChange);
  })();

  /* ------------------------------------------------------------------------
     2. ACTIVE NAV LINK WHILE SCROLLING (scrollspy via IntersectionObserver)
     ------------------------------------------------------------------------ */
  (function () {
    var navLinks = document.querySelectorAll('.nav-link');
    if (!navLinks.length || !('IntersectionObserver' in window)) return;

    var linkForId = {};
    navLinks.forEach(function (link) {
      var href = link.getAttribute('href') || '';
      if (href.charAt(0) === '#' && href.length > 1) linkForId[href.slice(1)] = link;
    });

    var sections = Object.keys(linkForId)
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    if (!sections.length) return;

    // a thin band across the middle of the viewport decides which section is "current"
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var current = linkForId[entry.target.id];
        navLinks.forEach(function (link) { link.classList.remove('is-active'); });
        if (current) current.classList.add('is-active');
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) { observer.observe(section); });
  })();

  /* ------------------------------------------------------------------------
     3. SCROLL REVEAL
     ------------------------------------------------------------------------ */
  (function () {
    var items = document.querySelectorAll('.scroll-reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-revealed'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: .15, rootMargin: '0px 0px -50px 0px' });

    items.forEach(function (el) { observer.observe(el); });
  })();

  /* ------------------------------------------------------------------------
     4. CUSTOM ORDER FORM — accessible client-side validation
        This is a demo form: nothing is sent anywhere.
     ------------------------------------------------------------------------ */
  (function () {
    var form = document.getElementById('order-form');
    var feedback = document.getElementById('order-feedback');
    if (!form || !feedback) return;

    var requiredIds = ['order-name', 'order-email', 'order-type', 'order-message'];
    var fields = requiredIds.map(function (id) { return document.getElementById(id); });

    function showFeedback(kind, message) {
      feedback.className = 'form-feedback is-visible form-feedback--' + kind;
      feedback.textContent = message;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var invalid = fields.filter(function (field) { return field && !field.checkValidity(); });
      fields.forEach(function (field) {
        if (field) field.setAttribute('aria-invalid', field.checkValidity() ? 'false' : 'true');
      });

      if (invalid.length) {
        showFeedback('error', 'Please fill out all required fields marked with * before submitting (' + invalid.length + ' highlighted).');
        invalid[0].focus();
        return;
      }

      var name = document.getElementById('order-name').value.trim();
      var typeSelect = document.getElementById('order-type');
      var craftLabel = typeSelect.options[typeSelect.selectedIndex].text;

      showFeedback('success', 'Thanks, ' + name + '! This is a demo form for a ' + craftLabel.toLowerCase() + ' request — nothing was sent.');

      form.reset();
      fields.forEach(function (field) { if (field) field.removeAttribute('aria-invalid'); });

      window.setTimeout(function () {
        feedback.classList.remove('is-visible');
      }, 8000);
    });
  })();

})();
