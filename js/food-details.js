// food-details.js

// 1. Get query param
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const foodKey = params.get("food");

  // 2. Load JSON and populate content
  fetch("data/food.json")
    .then((response) => response.json())
    .then((data) => {
      const food = data[foodKey];

      if (!food) {
        document.getElementById("food-detail").innerHTML =
          "<p>Food item not found.</p>";
        return;
      }

      document.getElementById("food-name").textContent = food.name;
      document.getElementById("food-img").src = food.image;
      document.getElementById("food-img").alt = food.name;
      document.getElementById("food-desc").textContent = food.description;
      document.getElementById("food-link").innerHTML = food.Link.join("<br>");

      const sectionList = document.getElementById("food-section");
      food.sections.forEach((section) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${section.heading}</strong><br>${section.content}`;
        sectionList.appendChild(li);
      });

      //const funFactList = document.getElementById("food-funfact");
      //food.funFact.forEach((fact) => {
      //const li = document.createElement("li");
      //li.textContent = fact;
      //funFactList.appendChild(li);
      //});
    })
    .catch((err) => {
      console.error("Error loading food data:", err);
    });

  // 3. Show fun facts in a speech bubble
  let currentFactIndex = 0;
  let facts = [];

  fetch("data/food.json")
    .then((response) => response.json())
    .then((data) => {
      facts = data[foodKey]?.funFact || [];
      const askGrandmaBtn = document.getElementById("askGrandmaBtn");
      const speechBubble = document.getElementById("speechBubble");
      const grandmaImg = document.getElementById("grandmaImg");
      const grandmaWrapper = document.getElementById("grandmaWrapper");
      let grandmaTimeout;

      if (facts.length === 0) {
        speechBubble.textContent = "No fun facts found for this dish!";
        return;
      }

      function showGrandmaFact() {
        const fact = facts[currentFactIndex];
        speechBubble.textContent = "🍗 " + fact + " 😋";

        // Animate bubble
        speechBubble.style.animation = "none";
        speechBubble.offsetHeight;
        speechBubble.style.animation = "bounceIn 0.5s ease";

        speakFact(fact);
        currentFactIndex = (currentFactIndex + 1) % facts.length;
      }

      askGrandmaBtn.addEventListener("click", () => {
        // Position grandma near the button
        const buttonRect = askGrandmaBtn.getBoundingClientRect();

        grandmaWrapper.style.position = "fixed";

        // Center horizontally above the button
        const grandmaWidth = 180; // Adjust this to your actual grandma image width
        grandmaWrapper.style.left = `${
          buttonRect.left + buttonRect.width / 2 - grandmaWidth / 2
        }px`;

        // Position slightly above the button
        grandmaWrapper.style.top = `${buttonRect.top - 140}px`; // adjust height as needed

        grandmaWrapper.style.display = "block";
        grandmaWrapper.style.animation = "fadeInUp 0.5s ease";

        clearTimeout(grandmaTimeout);
        grandmaTimeout = setTimeout(() => {
          grandmaWrapper.style.display = "none";
        }, 6000);

        showGrandmaFact();

        // Animate bubble again
        speechBubble.style.animation = "none";
        speechBubble.offsetHeight;
        speechBubble.style.animation = "bounceIn 0.5s ease";
      });
    })
    .catch((err) => {
      console.error("Error loading fun facts:", err);
      document.getElementById("speechBubble").textContent =
        "Oops! Something went wrong.";
    });

  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();
    if (!voices.length) {
      // Try again shortly
      setTimeout(loadVoices, 100);
    }
  }
  loadVoices();

  // 4. Function to speak the fun fact
  function speakFact(text) {
    const utter = new SpeechSynthesisUtterance(text);

    // Get a female voice if available
    const femaleVoice = voices.find((voice) =>
      /female|woman|zira|samantha|google uk english female/i.test(voice.name)
    );

    if (femaleVoice) {
      utter.voice = femaleVoice;
    }

    utter.pitch = 0.6;
    utter.rate = 0.85;
    utter.volume = 1;
    utter.lang = "en-UK";

    speechSynthesis.cancel(); // Stop previous
    speechSynthesis.speak(utter);
  }
  // 5. Build a dish Slider

  let currentSlide = 0;
  let slides = [];

  fetch("data/dishes.json")
    .then((res) => res.json())
    .then((data) => {
      slides = data[foodKey];
      if (slides && slides.length > 0) {
        showSlide(0);
      } else {
        document.getElementById("layerText").textContent = "No data available";
      }
    });

  function showSlide(index) {
    const slide = slides[index];
    document.getElementById("layerImage").src = slide.image;
    document.getElementById("layerText").textContent = slide.text;
  }

  document.getElementById("prevBtn").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  // 6. Spice level toggle
  const spiceToggle = document.getElementById("spiceToggle");
  const spiceText = document.getElementById("spiceText");
  const overlay = document.getElementById("spiceOverlay");

  const spiceOptions = [
    { level: "Mild", color: "rgba(230, 242, 237,0.0)" },
    { level: "Medium", color: "rgba(255, 241, 230, 0.2)" },
    { level: "Spicy", color: "rgba(253, 232, 232, 0.3)" },
  ];

  let spiceLevel = 0;

  const steamEffect = document.getElementById("steamEffect");
  const mediumFireEffect = document.getElementById("mediumFireEffect");
  const fireEffect = document.getElementById("fireEffect");

  spiceToggle.addEventListener("click", () => {
    spiceLevel = (spiceLevel + 1) % spiceOptions.length;
    const spice = spiceOptions[spiceLevel];
    spiceText.textContent = `${spice.level} ${"🌶".repeat(spiceLevel + 1)}`;
    overlay.style.backgroundColor = spice.color;

    // Optional: Grandma reaction
    const spiceReactions = [
      "Ah, just a tingle!",
      "Ooh, that’s warming up!",
      "HOT! Like my youth!",
    ];
    speakFact(spiceReactions[spiceLevel]);

    // Show/hide animations
    steamEffect.style.display = spiceLevel === 0 ? "block" : "none";
    mediumFireEffect.style.display = spiceLevel === 1 ? "block" : "none";
    fireEffect.style.display = spiceLevel === 2 ? "block" : "none";
  });

  // 6. Show spice toggle for specific dishes
  const spicyDishes = [
    "biryani",
    "samosa",
    "butter-chicken",
    "daal-chawal",
    "masala-dosa",
  ];
  const spiceToggleWrapper = document.getElementById("spiceToggleWrapper");

  function updateSpiceToggleVisibility(foodKey) {
    console.log("Checking spice toggle for:", foodKey);

    if (spicyDishes.includes(foodKey)) {
      spiceToggleWrapper.style.display = "flex";
    } else {
      spiceToggleWrapper.style.display = "none";
      overlay.style.backgroundColor = "transparent";
      spiceText.textContent = "";
    }
  }

  updateSpiceToggleVisibility(foodKey);
});
