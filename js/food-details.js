// food-details.js

// 1. Get query param
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const foodKey = params.get("food");

  // 2. Load JSON and populate content
  // Embedded food data to avoid CORS issues
  const foodData = {
    "biryani": {
      "name": "Biryani",
      "image": "../food_images/biryani_food.jpg",
      "description": "Welcome to the world of Biryani — not just a dish, but a full-blown culinary blockbuster.",
      "Ingredients": {  
        "🦸 Heroes": ["🍚 Basmati Rice", "🍖 Chicken/Mutton", "🧅 Onions", "🥛 Yogurt"],
        "🎭 Sidekicks": ["🌿 Mint Leaves", "🌿 Coriander Leaves", "🧄 Ginger-Garlic Paste", "🌶️ Red Chili Powder", "💛 Turmeric", "🌿 Garam Masala"],
        "✨ Final Touch": ["🧈 Ghee", "🌰 Cashews & Raisins", "🌸 Saffron", "🥛 Warm Milk"]
      },
      "sections": [
        {
          "heading": "What Makes Biryani So Special?",
          "content": "Biryani is more than a recipe — it's an experience. A slow-cooked, layered labor of love that tells the story of its ingredients with every bite."
        },
        {
          "heading": "How It All Comes Together",
          "content": "First, the chicken is marinated — lovingly — in yogurt and spices. Meanwhile, onions are slowly fried to golden perfection. Basmati rice is cooked until just shy of done, waiting patiently for its moment in the spotlight.\n\nThen comes the magic: layering. Chicken goes in first, followed by rice, then onions, herbs, a drizzle of saffron milk, maybe a knob of ghee for good measure. This masterpiece is sealed and slow-cooked on dum — locking in every ounce of aroma and flavor.\n\nWhen the lid lifts, so do hearts."
        },
        {
          "heading": "Why You'll Love It",
          "content": "Perfect for festivals, family dinners, or impressing that one friend who doesn't usually like spicy food.",
        },
      ],
      "funFact": [
        "Beta, biryani isn't a race — slow cooking wins hearts.",
        "If it's not layered, it's just rice with attitude.",
        "No mint? No magic. No excuses.",
        "One extra clove and boom — perfume factory!",
        "Don't eyeball the salt like your ex — measure it!",
        "A pinch of saffron is class, not chaos.",
        "Never trust someone who says 'pulao and biryani are same.'",
        "Garam masala is like gossip — a little goes a long way.",
        "Add love, not shortcuts — biryani can sense betrayal.",
        "If your onions aren't crying, you're not doing it right.",
        "Don't let your rice turn into khichdi — watch the boil!",
        "First layer goes to the chicken — no debates.",
        "Opening the lid too early? That's culinary sabotage.",
        "Let the steam do its thing — you've done enough, beta.",
        "Ghee is not optional. Ghee is tradition."
      ],
      "Link": [
        "Ready to cook your best biryani yet? <br><br><a href=\"https://www.indianhealthyrecipes.com/chicken-biryani-recipe/\" target=\"_blank\" style=\"color: #ff9933; text-decoration: underline;\">Jump to Recipe ⬇️</a>"
      ]
    },
    "butter-chicken": {
      "name": "Butter Chicken",
      "image": "../food_images/butterchicken_food.jpg",
      "description": "Creamy, dreamy, and absolutely divine - Butter Chicken is India's gift to the world!",
      "Ingredients": {  
        "🦸 Heroes": ["🍗 Chicken", "🍅 Tomatoes", "🧅 Onions", "🥛 Cream"],
        "🎭 Sidekicks": ["🧄 Garlic", "🧄 Ginger", "🌶️ Red Chili", "💛 Turmeric", "🌿 Garam Masala", "🧈 Butter"],
        "✨ Final Touch": ["🌿 Kasuri Methi", "🍯 Honey", "🧈 Extra Butter"]
      },
      "sections": [
        {
          "heading": "The Magic of Butter Chicken",
          "content": "This dish started as a happy accident in Delhi's Moti Mahal restaurant. Leftover tandoori chicken got a second life in a rich, creamy tomato gravy. And the rest is delicious history!"
        },
        {
          "heading": "How It's Made",
          "content": "First, chicken is marinated in yogurt and spices, then cooked in a tandoor. Meanwhile, a rich tomato-based gravy is prepared with onions, garlic, and a secret blend of spices. Finally, everything comes together with cream, butter, and a sprinkle of kasuri methi for that signature aroma."
        }
      ],
      "funFact": [
        "Butter chicken was invented by accident in 1947!",
        "The original recipe uses tandoori chicken, not just any chicken.",
        "Kasuri methi (dried fenugreek) is the secret ingredient.",
        "More butter = more better (according to Delhi chefs).",
        "This dish travels better than most Indian curries.",
        "The cream should be added at the end, not during cooking.",
        "Leftovers taste even better the next day!",
        "Don't skip the honey - it balances the acidity perfectly.",
        "The color should be orange, not red.",
        "Serve with naan, not rice (controversial but true)."
      ],
      "Link": [
        "Ready to make restaurant-style butter chicken? <br><br><a href=\"https://www.indianhealthyrecipes.com/butter-chicken-recipe/\" target=\"_blank\" style=\"color: #ff9933; text-decoration: underline;\">Get the Recipe 🍗</a>"
      ]
    },
    "masala-dosa": {
      "name": "Masala Dosa",
      "image": "../food_images/dosa.jpg",
      "description": "Crispy, golden, and absolutely addictive - Masala Dosa is South India's breakfast superstar!",
      "Ingredients": {  
        "🦸 Heroes": ["🍚 Rice", "🫘 Urad Dal", "🥔 Potatoes", "🧂 Salt"],
        "🎭 Sidekicks": ["🌶️ Green Chili", "🧅 Onion", "🌿 Curry Leaves", "🧄 Ginger", "💛 Turmeric"],
        "✨ Final Touch": ["🧈 Ghee", "🥥 Coconut Chutney", "🥣 Sambar"]
      },
      "sections": [
        {
          "heading": "The Perfect Dosa",
          "content": "A dosa is like a crepe, but better. Made from fermented rice and lentil batter, it's crispy on the outside, soft on the inside, and absolutely magical with coconut chutney. The Masala Dosa adds a savory, spiced potato filling that makes it a hearty meal."
        },
        {
          "heading": "The Art of Dosa Making",
          "content": "The batter needs to ferment overnight - that's what gives dosa its signature tangy flavor. The tawa (griddle) must be hot enough to make the dosa crisp, but not so hot that it burns. It's all about the wrist action when spreading the batter!"
        }
      ],
      "funFact": [
        "Dosa batter should ferment for at least 8 hours.",
        "The first dosa is always sacrificed to the tawa gods.",
        "Crispy dosas need a hot tawa and cold batter.",
        "Don't stir the batter before making dosas.",
        "The perfect dosa should be paper-thin and golden.",
        "Masala dosa was invented in Bangalore in the 1920s.",
        "A good dosa should make a sound when you tap it.",
        "The batter should be the consistency of pancake batter.",
        "Never use metal utensils with fermented batter.",
        "Leftover dosas can be turned into delicious upma!"
      ],
      "Link": [
        "Ready to master the art of dosa making? <br><br><a href=\"https://www.indianhealthyrecipes.com/dosa-recipe/\" target=\"_blank\" style=\"color: #ff9933; text-decoration: underline;\">Learn the Recipe 🥞</a>"
      ]
    },
    "samosa": {
      "name": "Samosa",
      "image": "../food_images/samosa.jpg",
      "description": "Golden triangles of joy - Samosas are India's favorite snack and the ultimate comfort food!",
      "Ingredients": {  
        "🦸 Heroes": ["🌾 Maida (All-purpose flour)", "🥔 Potatoes", "🧅 Onions", "🌶️ Green Peas"],
        "🎭 Sidekicks": ["🌶️ Green Chili", "🧄 Ginger", "🌿 Coriander", "🌶️ Red Chili Powder", "💛 Turmeric", "🌿 Garam Masala"],
        "✨ Final Touch": ["🧈 Ghee", "🌶️ Cumin Seeds", "🌿 Fresh Coriander"]
      },
      "sections": [
        {
          "heading": "The Perfect Samosa",
          "content": "A good samosa should be crispy on the outside, soft and flavorful on the inside. The dough should be flaky, the filling should be perfectly spiced, and it should taste amazing with tamarind chutney."
        },
        {
          "heading": "Samosa Secrets",
          "content": "The key to perfect samosas is in the dough - it needs to be kneaded with ghee and rested properly. The filling should be dry (no watery vegetables) and well-seasoned. And the folding technique? That's an art form passed down through generations."
        }
      ],
      "funFact": [
        "Samosas were originally called 'sambusak' in Arabic.",
        "The perfect samosa has exactly 17 folds.",
        "Samosas were introduced to India by traders from Central Asia.",
        "The filling should be completely dry before filling.",
        "A good samosa should stand upright on its own.",
        "The dough should rest for at least 30 minutes.",
        "Samosas taste best when eaten hot and fresh.",
        "The triangular shape helps distribute heat evenly.",
        "Never overfill - it will burst while frying.",
        "Leftover samosas can be reheated in an air fryer!"
      ],
      "Link": [
        "Ready to make crispy, golden samosas? <br><br><a href=\"https://www.indianhealthyrecipes.com/samosa-recipe/\" target=\"_blank\" style=\"color: #ff9933; text-decoration: underline;\">Get the Recipe 🥟</a>"
      ]
    },
    
    // --- NEW ENTRIES START HERE ---
    
    "mithai": {
        "name": "Mithai (Indian Sweets)",
        "image": "../food_images/mithai.jpg",
        "description": "Mithai is the collective name for traditional Indian sweets and desserts, symbolizing celebration, generosity, and joy. No Indian festival or happy occasion is complete without it!",
        "Ingredients": {  
            "🦸 Heroes": ["🥛 Milk Solids (Khoya)", "🧈 Ghee", "🍚 Sugar", "🌾 Flour (Besan/Maida)"],
            "🎭 Sidekicks": ["🌰 Nuts (Pistachios, Almonds, Cashews)", "🌸 Cardamom", "🌹 Rose Water", "🥥 Coconut"],
            "✨ Final Touch": ["🌟 Silver Vark (edible foil)", "🌿 Saffron Strands", "🌰 Chopped Dry Fruits"]
        },
        "sections": [
            {
                "heading": "More Than Just Dessert",
                "content": "Mithai is a culinary art form with regional specialties: Rosogolla from Bengal, Mysore Pak from Karnataka, Peda from Mathura, and countless others. Each one represents centuries of flavor and local tradition."
            },
            {
                "heading": "Festival Favorites",
                "content": "Whether it's the rich Ladoo, the fudgy Barfi, or the syrup-soaked Gulab Jamun, these sweets are integral to Indian culture, exchanged as gifts to bless gatherings and mark new beginnings."
            }
        ],
        "funFact": [
            "The tradition of mithai goes back thousands of years.",
            "Silver Vark is an extremely thin, edible foil used for decoration.",
            "Jalebi, often classified as mithai, is thought to have Persian origins.",
            "Many traditional mithai use Khoya (milk solids) as their base.",
            "Every major festival has a specific mithai associated with it.",
            "The term 'Mithai' literally translates to 'sweet' in Hindi.",
            "The shape and color of mithai often convey local or religious meaning."
        ],
        "Link": [
            "Want to master the art of Indian sweets? <br><br><a href=\"https://www.indianhealthyrecipes.com/indian-sweets-recipes/\" target=\"_blank\" style=\"color: #ff9933; text-decoration: underline;\">Explore Mithai Recipes 🍬</a>"
        ]
    },

    "gulab-jamun": {
        "name": "Gulab Jamun",
        "image": "../food_images/gj.jpg",
        "description": "Soft, spongy, deep-fried milk solids soaked in fragrant rose and cardamom syrup. Gulab Jamun is the king of Indian desserts!",
        "Ingredients": {  
            "🦸 Heroes": ["🥛 Milk Solids (Khoya/Paneer)", "🌾 Maida (Flour)", "🍚 Sugar", "💧 Water"],
            "🎭 Sidekicks": ["🌿 Cardamom Powder", "🌹 Rose Water", "🧈 Ghee for frying"],
            "✨ Final Touch": ["🌰 Chopped Pistachios", "🌿 Saffron Strands"]
        },
        "sections": [
            {
                "heading": "History in Syrup",
                "content": "Despite being an Indian staple, Gulab Jamun is believed to be derived from a similar Persian dish brought to India during the Mughal era. Its name is a combination of Persian ('gulab' for rose water) and Hindi ('jamun' for a dark purple fruit it resembles)."
            },
            {
                "heading": "The Perfect Dip",
                "content": "The secret to its texture is slow, low-temperature frying, which ensures the small balls cook through and remain soft before being dipped into the warm, fragrant sugar syrup. They absorb the syrup like a sponge, becoming melt-in-your-mouth tender."
            }
        ],
        "funFact": [
            "The name means 'Rose berry' (rose for the syrup, berry for its shape).",
            "The dessert is traditionally served warm.",
            "Gulab Jamun can be made using Khoya or instant milk powder.",
            "It is the most popular dessert served at Indian weddings.",
            "Slow frying is crucial to prevent the center from remaining uncooked.",
            "The syrup is often flavored with saffron, cardamom, and rose water."
        ],
        "Link": [
            "Craving homemade Gulab Jamun? <br><br><a href=\"https://www.indianhealthyrecipes.com/gulab-jamun-recipe/\" target=\"_blank\" style=\"color: #ff9933; text-decoration: underline;\">Find the Recipe 🍯</a>"
        ]
    },

    "daal-chawal": {
        "name": "Daal Chawal (Lentils and Rice)",
        "image": "../food_images/dc.jpg",
        "description": "The soul food of India! A humble yet wholesome dish of spiced lentils (daal) served with steamed rice (chawal). It is the ultimate comfort meal.",
        "Ingredients": {  
            "🦸 Heroes": ["🫘 Lentils (Toor/Moong/Masoor)", "🍚 Basmati Rice", "💧 Water", "🧂 Salt"],
            "🎭 Sidekicks": ["🧅 Onions", "🍅 Tomatoes", "🧄 Ginger-Garlic Paste", "💛 Turmeric", "🌿 Cumin Seeds", "🌶️ Green Chili"],
            "✨ Final Touch (Tadka)": ["🧈 Ghee", "🌿 Asafoetida (Hing)", "🌶️ Dried Red Chilies", "🌿 Coriander Leaves"]
        },
        "sections": [
            {
                "heading": "The Daily Staple",
                "content": "Daal Chawal is the backbone of the Indian diet, offering complete protein when eaten together. It’s simple, nutritious, and infinitely versatile, changing flavor dramatically across every state in India."
            },
            {
                "heading": "The Tadka Magic",
                "content": "The dish gets its signature flavor from the 'Tadka' (tempering). This involves heating ghee, adding spices like cumin seeds, asafoetida, and dry red chilies, and pouring the sizzling mixture over the cooked lentils. This step elevates the simple daal to a fragrant, gourmet experience."
            }
        ],
        "funFact": [
            "Eating daal and chawal together provides a complete vegetarian protein.",
            "Every Indian household has its own unique recipe for daal.",
            "The famous 'Daal Makhani' is a rich version of daal chawal.",
            "Leftover daal is often used to knead dough for parathas.",
            "Daal chawal is one of the most budget-friendly and nutritious meals globally."
        ],
        "Link": [
            "Master the basic yet delicious Daal Tadka: <br><br><a href=\"https://www.indianhealthyrecipes.com/dal-tadka/\" target=\"_blank\" style=\"color: #ff9933; text-decoration: underline;\">Find the Recipe 🍚</a>"
        ]
    },
    
    "gujhiya": {
        "name": "Gujhiya",
        "image": "../food_images/Gujhiya.jpg",
        "description": "A sweet, deep-fried dumpling, crescent-shaped and stuffed with a rich filling of khoya, coconut, and dry fruits. Gujhiya is the indispensable sweet of the Holi festival.",
        "Ingredients": {  
            "🦸 Heroes": ["🌾 Maida (Flour)", "🥛 Khoya (Milk Solids)", "🥥 Desiccated Coconut", "🍚 Sugar"],
            "🎭 Sidekicks": ["🌰 Dry Fruits (Cashews, Almonds, Raisins)", "🌿 Cardamom Powder", "🧈 Ghee"],
            "✨ Final Touch": ["🌟 Powdered Sugar", "🌰 Chopped Pistachios"]
        },
        "sections": [
            {
                "heading": "The Flavor of Holi",
                "content": "Gujhiya is primarily associated with the festival of Holi in North India, though similar sweets exist across the country (like Karanji in Maharashtra). Making Gujhiya is a traditional family activity that brings everyone together."
            },
            {
                "heading": "A Crunchy Delight",
                "content": "The outer crust is made from a stiff, flaky pastry, which provides a satisfying crunch against the sweet, crumbly filling inside. The dough is often flavored with a touch of ghee to achieve that desired flaky texture when fried."
            }
        ],
        "funFact": [
            "Gujhiya is known by different names across India, including Karanji and Pedakiya.",
            "The pastry should be perfectly sealed to prevent the filling from oozing out during frying.",
            "It is an integral part of the traditional Holi sweets spread.",
            "Traditionally, the filling is slow-cooked khoya, but modern recipes use desiccated coconut.",
            "The dough is often flavored with a bit of ghee to achieve a flaky, melt-in-your-mouth texture."
        ],
        "Link": [
            "Want to fry up some Gujhiya this festive season? <br><br><a href=\"https://www.indianhealthyrecipes.com/gujiya-recipe-gujhia/\" target=\"_blank\" style=\"color: #ff9933; text-decoration: underline;\">Find the Recipe 🥟</a>"
        ]
    }
    
    // NOTE: The closing brace } for the entire foodData object should be at the end of this block.
};

  // Process the data directly
  const data = foodData;
  (() => {
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
      
      // Initialize Experience It component
      const experienceContainer = document.getElementById("experience-it-container");
      if (experienceContainer) {
        experienceContainer.setAttribute("data-content-id", foodKey);
        console.log("Experience It container found, initializing with foodKey:", foodKey);
        // Initialize the Experience It component after a short delay to ensure DOM is ready
        setTimeout(() => {
          if (window.ExperienceIt) {
            console.log("Initializing Experience It component");
            new ExperienceIt("experience-it-container", "food", foodKey);
          } else {
            console.log("ExperienceIt class not found");
          }
        }, 100);
      } else {
        console.log("Experience It container not found");
      }
      
      //ingredients
      const ingredientsList = document.getElementById("ingredients-list");

      // just testing with console.log
      console.log("food.Ingredients:", food.Ingredients);
      console.log("Object.entries result:", Object.entries(food.Ingredients));

      ingredientsList.innerHTML = '';

      Object.entries(food.Ingredients).forEach(([category, ingredients]) => {
        //testing with console.log
        console.log("Category:", category);
        console.log("Ingredients array:", ingredients);
        
        const categoryHeader = document.createElement("li");
        categoryHeader.innerHTML = `<strong>${category}</strong>`;
        categoryHeader.classList.add("ingredient-category");
        ingredientsList.appendChild(categoryHeader);
        
        ingredients.forEach(ingredient => {
          const li = document.createElement("li");
          li.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;${ingredient}`;
          li.classList.add("ingredient-item");
          li.style.listStyle = "none"; // Remove bullet points from ingredients
          ingredientsList.appendChild(li);
        });
      });

        
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
    })();

  // 3. Show fun facts in a speech bubble
  let currentFactIndex = 0;
  let facts = [];

  // Use embedded data for fun facts
  facts = foodData[foodKey]?.funFact || [];
  (() => {
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
    })();

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

  // Use embedded data for dishes
  const dishesData = {
    "biryani": [
      {
        "image": "assets/images/icons/icon.png",
        "text": "Let's build the perfect biryani! Click 'Next' to see each delicious layer."
      },
      {
        "image": "assets/images/backgrounds/layer1.png",
        "text": "Step 1: Marinated Chicken – juicy, spicy, and packed with flavor. This forms the soul of your biryani."
      },
      {
        "image": "assets/images/backgrounds/layer2 (2).png",
        "text": "Step 2: Crispy Fried Onions & Herbs – add golden sweetness, freshness from mint and coriander."
      },
      {
        "image": "assets/images/backgrounds/layer3.png",
        "text": "Step 3: Fragrant Basmati Rice & Saffron Milk – perfectly cooked rice with saffron-infused richness."
      },
      {
        "image": "assets/images/backgrounds/layer4.png",
        "text": "Step 4: Dum Cooking – layers sealed with ghee and dough, slow-cooked for the ultimate aroma and flavor!"
      }
    ],
    "butter-chicken": [
      {
        "image": "assets/images/icons/icon.png",
        "text": "Let's create the perfect butter chicken! Click 'Next' to see each delicious step."
      },
      {
        "image": "assets/images/backgrounds/layer1.png",
        "text": "Step 1: Marinated Tandoori Chicken – smoky, charred, and full of flavor from the tandoor."
      },
      {
        "image": "assets/images/backgrounds/layer2 (2).png",
        "text": "Step 2: Rich Tomato Gravy – onions, garlic, and tomatoes cooked to perfection with aromatic spices."
      },
      {
        "image": "assets/images/backgrounds/layer3.png",
        "text": "Step 3: Cream & Butter Magic – the signature creamy texture that makes butter chicken irresistible."
      },
      {
        "image": "assets/images/backgrounds/layer4.png",
        "text": "Step 4: Final Touch – kasuri methi, honey, and extra butter for that restaurant-quality finish!"
      }
    ],
    "dosa": [
      {
        "image": "assets/images/icons/icon.png",
        "text": "Let's master the art of dosa making! Click 'Next' to see each crucial step."
      },
      {
        "image": "assets/images/backgrounds/layer1.png",
        "text": "Step 1: Fermented Batter – rice and urad dal soaked, ground, and left to ferment overnight."
      },
      {
        "image": "assets/images/backgrounds/layer2 (2).png",
        "text": "Step 2: Hot Tawa Action – the perfect temperature and technique for spreading the batter."
      },
      {
        "image": "assets/images/backgrounds/layer3.png",
        "text": "Step 3: Golden Perfection – crispy edges, soft center, and that signature golden color."
      },
      {
        "image": "assets/images/backgrounds/layer4.png",
        "text": "Step 4: Serve Hot – with coconut chutney, sambar, and a side of South Indian love!"
      }
    ],
    "samosa": [
      {
        "image": "assets/images/icons/icon.png",
        "text": "Let's create perfect samosas! Click 'Next' to see each golden step."
      },
      {
        "image": "assets/images/backgrounds/layer1.png",
        "text": "Step 1: Perfect Dough – maida kneaded with ghee and rested for the right texture."
      },
      {
        "image": "assets/images/backgrounds/layer2 (2).png",
        "text": "Step 2: Spiced Filling – potatoes, peas, and spices cooked to perfection with no moisture."
      },
      {
        "image": "assets/images/backgrounds/layer3.png",
        "text": "Step 3: Triangular Folding – the art of creating those perfect 17 folds."
      },
      {
        "image": "assets/images/backgrounds/layer4.png",
        "text": "Step 4: Golden Frying – deep-fried to crispy perfection, ready to be devoured!"
      }
    ]
  };
  
  slides = dishesData[foodKey] || [];
  (() => {
      if (slides && slides.length > 0) {
        showSlide(0);
      } else {
        document.getElementById("layerText").textContent = "No data available";
      }
    })();

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
