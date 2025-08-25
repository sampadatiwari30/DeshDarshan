// Qutub Minar Page JS

// Highlight headings on scroll
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section h2");
  sections.forEach((h2) => {
    const rect = h2.getBoundingClientRect();
    if (rect.top >= 0 && rect.top < window.innerHeight / 1.5) {
      h2.style.color = "#880e4f";
    } else {
      h2.style.color = "#b71c1c";
    }
  });
});

// Small alert when page loads
window.addEventListener("load", () => {
  console.log("Welcome to Qutub Minar page! Enjoy exploring.");
});
