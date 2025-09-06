document.addEventListener("DOMContentLoaded", () => {
  const factBtn = document.getElementById("show-fact");
  const factBox = document.getElementById("fact-box");

  const facts = [
    "The Taj Mahal appears to change color at different times of the day due to the reflection of sunlight and moonlight.",
    "Over 1,000 elephants were used to transport building materials during its construction.",
    "The four minarets surrounding the main dome are slightly tilted outward to protect the mausoleum in case of collapse.",
    "It took approximately 22 years and 20,000 artisans to complete the entire complex.",
    "The calligraphy on the Taj Mahal includes verses from the Quran, crafted with black marble inlay."
  ];

  factBtn.addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factBox.textContent = randomFact;
  });
});
