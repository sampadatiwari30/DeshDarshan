// Charminar page interactions: smooth scroll + subtle highlights
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll from hero button to intro
  const learnBtn = document.getElementById("learnMoreBtn");
  if (learnBtn) {
    learnBtn.addEventListener("click", () => {
      const firstCard = document.querySelector(".intro") || document.querySelector(".card");
      if (firstCard) firstCard.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // Hover highlight for bullet lists
  const listItems = document.querySelectorAll(".points li, .facts-list li");
  listItems.forEach(li => {
    li.addEventListener("mouseenter", () => {
      li.style.background = "#fff3e0";
      li.style.borderRadius = "8px";
      li.style.paddingLeft = "10px";
    });
    li.addEventListener("mouseleave", () => {
      li.style.background = "transparent";
      li.style.paddingLeft = "0px";
    });
  });
});
