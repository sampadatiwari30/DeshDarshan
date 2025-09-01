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
  });
});
