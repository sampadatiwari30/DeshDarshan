document.addEventListener("DOMContentLoaded", () => {
  console.log("Alluri Sitarama Raju page loaded!");

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
  });
});
