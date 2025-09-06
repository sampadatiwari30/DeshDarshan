document.addEventListener("DOMContentLoaded", () => {
  console.log("Subhash Chandra Bose page loaded!");

  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.addEventListener('click', () => { 
      window.open(heroVideo.currentSrc, "_blank"); 
    });
  }

  const headings = document.querySelectorAll(".details h2, .video h2");
  headings.forEach(h => {
    h.addEventListener("mouseenter", () => h.style.color = "#FFA500");
    h.addEventListener("mouseleave", () => h.style.color = "#FF8C00");

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
