// Gateway of India Page Script
document.addEventListener("DOMContentLoaded", () => {
  console.log("Gateway of India page loaded successfully.");

  // Highlight effect on headings
  const headings = document.querySelectorAll("h2");
  headings.forEach(h => {
    h.addEventListener("mouseenter", () => {
      h.style.color = "#cc5200";
    });
    h.addEventListener("mouseleave", () => {
      h.style.color = "#ff6600";
    });
  });

  // Simple alert on image click
  const image = document.querySelector(".intro img");
  if (image) {
    image.addEventListener("click", () => {
      alert("You clicked on the beautiful Gateway of India!");
    });
  }
  // Basic interactive enhancements
document.addEventListener("DOMContentLoaded", () => {
  console.log("Gateway of India page loaded!");

  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.addEventListener('click', () => { 
      window.open(heroVideo.currentSrc, "_blank"); 
    });
  }

  const headings = document.querySelectorAll(".details h2, .video h2");
  headings.forEach(h => {
    h.addEventListener("mouseenter", () => h.style.color = "#FFD700");
    h.addEventListener("mouseleave", () => h.style.color = "#FF8C00");
// Basic interactive enhancements
