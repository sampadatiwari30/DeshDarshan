document.addEventListener("DOMContentLoaded", () => {
  // Open official ticketing in a new tab (adjust if project wants a different URL)
  const ticketBtn = document.getElementById("bookTicket");
  if (ticketBtn) {
    ticketBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.open("https://asi.payumoney.com/#/", "_blank");
    });
  }

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length > 1) {
        e.preventDefault();
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
  console.log(" Red Fort WOW page loaded!");
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.addEventListener('click', () => { window.open(heroVideo.currentSrc, "_blank"); });
  }
  const headings = document.querySelectorAll(".details h2, .video h2");
  headings.forEach(h => {
    h.addEventListener("mouseenter", () => h.style.color = "#FFD700");
    h.addEventListener("mouseleave", () => h.style.color = "#FF8C00");
  });
});
