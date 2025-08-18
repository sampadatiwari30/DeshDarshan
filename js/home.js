// Slideshow functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

document.addEventListener("DOMContentLoaded", () => {
  const namasteOverlay = document.getElementById("namaste-overlay");

  // Hide after 3 seconds automatically
  const hideTimeout = setTimeout(() => {
    namasteOverlay.classList.add("hidden");
  }, 3000);

  // Hide immediately if user scrolls before timeout
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      namasteOverlay.classList.add("hidden");
      clearTimeout(hideTimeout); // cancel auto timer
    }
  });
});



function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Show current slide
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

function currentSlide(index) {
  currentSlideIndex = index - 1;
  showSlide(currentSlideIndex);
}

// Auto-advance slideshow
setInterval(nextSlide, 5000);

// Mobile navigation toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(section);
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
  document.body.style.transition = "opacity 0.5s ease";
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  showSlide(0);
});


document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.comments-section').forEach((section, idx) => {
    const list = section.querySelector('.comments-list');
    const form = section.querySelector('.comment-form');
    const nameInput = form.querySelector('.comment-name');
    const textInput = form.querySelector('.comment-text');
    const storageKey = 'comments-' + idx;

    // Load comments from localStorage
    function loadComments() {
      list.innerHTML = '';
      const comments = JSON.parse(localStorage.getItem(storageKey) || '[]');
      comments.forEach(comment => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${comment.name}</strong>: ${comment.text}`;
        list.appendChild(div);
      });
    }

    // Handle form submit
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
