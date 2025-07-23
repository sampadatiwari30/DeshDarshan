// food-details.js

// 1. Get query param
const params = new URLSearchParams(window.location.search);
const foodKey = params.get("food");

// 2. Load JSON and populate content
fetch("food.json")
  .then(response => response.json())
  .then(data => {
    const food = data[foodKey];

    if (!food) {
      document.getElementById("food-detail").innerHTML = "<p>Food item not found.</p>";
      return;
    }

    document.getElementById("food-name").textContent = food.name;
    document.getElementById("food-img").src = food.image;
    document.getElementById("food-img").alt = food.name;
    document.getElementById("food-desc").textContent = food.description;
    document.getElementById("food-link").innerHTML = food.Link.join("<br>");

    const sectionList = document.getElementById("food-section");
    food.sections.forEach(section => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${section.heading}</strong><br>${section.content}`;
        sectionList.appendChild(li);
    });

    const funFactList = document.getElementById("food-funfact");
    food.funFact.forEach(fact => {
      const li = document.createElement("li");
      li.textContent = fact;
      funFactList.appendChild(li);
    });

  })
  .catch(err => {
    console.error("Error loading food data:", err);
  });
