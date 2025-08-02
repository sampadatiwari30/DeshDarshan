const recipes = {
      "Biryani": {
        image: "../DeshDarshan/assets/images/download (39).jpeg",
        ingredients: ["2 cups Basmati Rice", "500g chicken or mutton", "1 cup yogurt", "2 onions", "Spices"],
        steps: ["Marinate meat with spices", "Fry onions and add meat", "Layer with rice", "Cook on dum", "Serve hot"]
      },
      "Butter Chicken": {
        image: "../DeshDarshan/assets/images/download (31).jpeg",
        ingredients: ["500g chicken", "Cream", "Tomato puree", "Butter", "Spices"],
        steps: ["Cook chicken", "Make gravy with butter & tomato", "Mix with chicken & simmer", "Add cream", "Serve hot"]
      },
      "Masala Dosa": {
        image: "../DeshDarshan/assets/images/download (40).jpeg",
        ingredients: ["Dosa batter", "Potatoes", "Onions", "Mustard seeds", "Curry leaves"],
        steps: ["Make potato filling", "Spread batter on tawa", "Add filling", "Fold dosa", "Serve with chutney"]
      },
      "Samosa": {
        image: "../DeshDarshan/assets/images/download (46).jpeg",
        ingredients: ["Maida", "Boiled potatoes", "Peas", "Spices", "Oil"],
        steps: ["Make dough", "Prepare filling", "Fill and fold", "Deep fry", "Serve hot"]
      },
      "Rasogulla": {
        image: "../DeshDarshan/assets/images/download (1).jpeg",
        ingredients: ["Chenna (paneer)", "Sugar", "Water", "Cardamom"],
        steps: ["Make balls from chenna", "Boil in sugar syrup", "Cool and soak", "Serve chilled"]
      },
      "Gujiya": {
        image: "../DeshDarshan/assets/images/images (8).jpeg",
        ingredients: ["Maida", "Khoya", "Dry fruits", "Sugar", "Oil for frying"],
        steps: ["Make dough and stuffing", "Fill and seal gujiyas", "Deep fry till golden", "Cool and serve"]
      },
      "Dal Chawal": {
        image: "../DeshDarshan/assets/images/images (21).jpeg",
        ingredients: ["Toor dal", "Rice", "Onions", "Tomatoes", "Spices", "Ghee"],
        steps: ["Pressure cook dal", "Temper with ghee, spices", "Cook rice separately", "Serve hot dal with rice"]
      },
      "Soan Papdi": {
  image: "../DeshDarshan/assets/images/download (10).jpeg",
  ingredients: [
    "1 cup besan (gram flour)",
    "1 cup maida (all-purpose flour)",
    "2 cups sugar",
    "1.5 cups water",
    "1 cup ghee",
    "½ tsp cardamom powder",
    "Chopped pistachios or almonds"
  ],
  steps: [
    "Grease a tray and set aside.",
    "Roast besan and maida in ghee till golden.",
    "Boil sugar and water to 2-string consistency.",
    "Mix syrup with roasted flour and stir fast.",
    "Spread mixture on tray, press evenly.",
    "Garnish with nuts and cut pieces.",
    "Cool and let it set before serving."
  ]
}

    };

    const modal = document.getElementById("recipe-modal");
    const modalTitle = document.getElementById("recipe-title");
    const modalImage = document.getElementById("recipe-img");
    const modalIngredients = document.getElementById("recipe-ingredients");
    const modalSteps = document.getElementById("recipe-steps");
    const closeBtn = document.querySelector(".close-button");

    document.querySelectorAll(".food-item").forEach(item => {
      item.addEventListener("click", () => {
        const foodName = item.dataset.food;
        const recipe = recipes[foodName];
        if (recipe) {
          modalTitle.innerText = foodName;
          modalImage.src = recipe.image;
          modalIngredients.innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join('');
          modalSteps.innerHTML = recipe.steps.map(s => `<li>${s}</li>`).join('');
          modal.style.display = "flex";
        }
      });
    });

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = e => {
      if (e.target === modal) modal.style.display = "none";
    };