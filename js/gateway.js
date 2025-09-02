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
document.addEventListener('DOMContentLoaded', () => {
  // console log to confirm script loaded
  console.log('Gateway of India page active ✅');

  // Click hero image to open full-size image in new tab
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    heroImage.addEventListener('click', () => {
      const src = heroImage.getAttribute('src');
      if (src) window.open(src, '_blank', 'noopener');
    });
  }

  // Subtle hover effect for section headings (accessibility-safe)
  const headings = document.querySelectorAll('.main h2');
  headings.forEach(h => {
    h.addEventListener('mouseenter', () => h.style.color = '#ff6f00');
    h.addEventListener('mouseleave', () => h.style.color = '');
  });

  // Keyboard shortcut: press "v" to focus the video iframe (for quick viewing)
  document.addEventListener('keyup', (e) => {
    if (e.key === 'v' || e.key === 'V') {
      const iframe = document.querySelector('.video-wrap iframe');
      if (iframe) iframe.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});
