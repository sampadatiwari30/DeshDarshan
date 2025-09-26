// Ensure script runs after DOM is ready and guard all selectors
(function () {
  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else { fn(); }
  }

  onReady(() => {
    // Slideshow functionality (defensive)
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    function showSlide(index) {
      if (!slides.length) return;
      // clamp index
      const safeIndex = ((index % slides.length) + slides.length) % slides.length;
      slides.forEach((slide) => slide.classList.remove('active'));
      dots.forEach((dot) => dot.classList.remove('active'));
      slides[safeIndex].classList.add('active');
      if (dots[safeIndex]) dots[safeIndex].classList.add('active');
      currentSlideIndex = safeIndex;
    }

    function nextSlide() {
      if (!slides.length) return;
      showSlide(currentSlideIndex + 1);
    }

    // expose for inline handlers if present
    window.currentSlide = function (n) { showSlide(n - 1); };

    if (slides.length) {
      showSlide(0);
      setInterval(nextSlide, 5000);
    }

    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });

      document.querySelectorAll('.nav-menu a').forEach((link) => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        });
      });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href') || '';
        if (href.length <= 1) return; // ignore href="#"
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (!navbar) return;
      if (window.scrollY > 50) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    }, { passive: true });

    // Intersection Observer for animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
          });
        }, observerOptions)
      : null;

    document.querySelectorAll('section').forEach((section) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      if (observer) observer.observe(section);
    });

    // Loading animation
    window.addEventListener('load', () => {
      document.body.style.opacity = '1';
      document.body.style.transition = 'opacity 0.5s ease';
    });

    // Comments widget (optional if present)
    document.querySelectorAll('.comments-section').forEach((section, idx) => {
      const list = section.querySelector('.comments-list');
      const form = section.querySelector('.comment-form');
      if (!list || !form) return;
      const nameInput = form.querySelector('.comment-name');
      const textInput = form.querySelector('.comment-text');
      if (!nameInput || !textInput) return;
      const storageKey = 'comments-' + idx;

      function loadComments() {
        list.innerHTML = '';
        const comments = JSON.parse(localStorage.getItem(storageKey) || '[]');
        comments.forEach(comment => {
          const div = document.createElement('div');
          div.innerHTML = `<strong>${comment.name}</strong>: ${comment.text}`;
          list.appendChild(div);
        });
      }

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = nameInput.value.trim();
        const text = textInput.value.trim();
        if (!name || !text) return;
        const comments = JSON.parse(localStorage.getItem(storageKey) || '[]');
        comments.push({ name, text });
        localStorage.setItem(storageKey, JSON.stringify(comments));
        nameInput.value = '';
        textInput.value = '';
        loadComments();
      });

      loadComments();
    });
  });
})();
