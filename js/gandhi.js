// gandhi.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Mahatma Gandhi page loaded successfully!");

  // Animate hero text fade-in
  const heroText = document.querySelector(".hero-content");
  heroText.style.opacity = 0;
  setTimeout(() => {
    heroText.style.transition = "opacity 2s ease-in-out";
    heroText.style.opacity = 1;
  }, 200);

  // Add highlight effect on points when scrolling
  const points = document.querySelectorAll(".points li");
  const revealOnScroll = () => {
    points.forEach((point) => {
      const rect = point.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        point.style.color = "#e65c00";
        point.style.fontWeight = "600";
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
});
