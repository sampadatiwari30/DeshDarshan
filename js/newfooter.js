// Set current year in copyright
document.getElementById("year").textContent = new Date().getFullYear();

// Add subtle parallax effect on scroll
window.addEventListener("scroll", () => {
  const footer = document.getElementById("footer");
  const scrolled = window.pageYOffset;
  const parallaxSpeed = 0.5;

  if (footer.getBoundingClientRect().top < window.innerHeight) {
    footer.style.transform = `translateY(${scrolled * parallaxSpeed * 0.1}px)`;
  }
});

// Add hover effects for better interactivity
document.addEventListener("DOMContentLoaded", () => {
  const footerSections = document.querySelectorAll(".footer-section");

  footerSections.forEach((section, index) => {
    section.addEventListener("mouseenter", () => {
      section.style.transform = "translateY(-2px)";
    });

    section.addEventListener("mouseleave", () => {
      section.style.transform = "translateY(0)";
    });
  });
});
