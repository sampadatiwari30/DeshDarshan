// Subhash Chandra Bose page interactions
document.addEventListener("DOMContentLoaded", () => {
  // Smooth-scroll quick nav
  document.querySelectorAll('.quicknav a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = link.getAttribute("href");
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Emphasize section headers on hover for subtle affordance
  document.querySelectorAll("h2").forEach(h => {
    h.addEventListener("mouseenter", () => h.style.color = "#8a4300");
    h.addEventListener("mouseleave", () => h.style.color = "#cc6700");
// Subhash Chandra Bose page interactivity
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Subhash Chandra Bose page loaded!");

  // Click hero image to open in new tab
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    heroImage.addEventListener('click', () => {
      window.open(heroImage.src, "_blank");
    });
  }

  // Highlight headings on hover
  const headings = document.querySelectorAll(".details h2, .video h2");
  headings.forEach(h => {
    h.addEventListener("mouseenter", () => h.style.color = "#cc5200");
    h.addEventListener("mouseleave", () => h.style.color = "#ff6f00");
  });
});
