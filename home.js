// Slideshow functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

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

// gsap

gsap.registerPlugin("CustomEase");

CustomEase.create("hop", "0.9, 0, 0.1, 1");
document.addEventListener("DOMContentLoaded", () => {
  const t1 = gsap.timeline({
    defaults: {
      ease: "hop",
    },
  });

  t1.to(
    ".word h1",
    {
      y: "0%",
      duration: 1,
    },
    "<"
  );

  t1.to("#word1 h1", {
    y: "110%",
    duration: 1,
    delay: 0.3,
  });

  t1.to(
    "#word2 h1",
    {
      y: "-110%",
      duration: 1,
    },
    "<"
  );

  t1.to(".block", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    duration: 1,
    stagger: 0.1,
    delay: 0.75,
    onStart: () => gsap.to(".hero-img", { scale: 1, duration: 2, ease: "hop" }),
  });

  t1.to(
    [".navbar", ".line h1", ".line p"],
    {
      y: "0%",
      duration: 1.5,
      stagger: 0.2,
    },
    "<"
  );

  t1.to(
    [".cta", ".cta-icon"],
    {
      scale: 1,
      duration: 1.5,
      stagger: 0.75,
      delay: 0.75,
    },
    "<"
  );

  t1.to(
    ".cta-label p",
    {
      y: "0%",
      duration: 1.5,
      delay: 0.5,
    },
    "<"
  );
});


const images = [
    { src: "./hero4.jpg", text: "India’s Heart Beats in Its Culture, land where heritage lives in every corner." },
    { src: "./hero.jpg", text: "Discover the Beauty of India. Festivals that honor nature, gods, and timeless traditions" },
    { src: "./hero2.png", text: "Celebrate the colors and vibrancy of Indian festivals with family and friends." }
];

let currentIndex = 0;
const imgElement = document.querySelector(".slider-img");
const textElement = document.querySelector(".slider-text");

function changeImage() {
    imgElement.style.opacity = 0;
    textElement.style.opacity = 0;

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex].src; 
        textElement.textContent = images[currentIndex].text; 

        imgElement.style.opacity = 1;
        textElement.style.opacity = 1;
    }, 1000); 
}

setInterval(changeImage, 10000);

changeImage();


const ctaButton = document.querySelector(".cta");
const festivalsSection = document.querySelector(".festivals-culture");

ctaButton.addEventListener("click", function() {
    festivalsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});
  // Show button on scroll
  window.onscroll = function () {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // Scroll to top on click
  document.getElementById("backToTopBtn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

