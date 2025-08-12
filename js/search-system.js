// Complete Search System for DeshDarshan - Enhanced Version
class DeshDarshanSearchSystem {
  constructor() {
    this.searchData = {
      destinations: [
        { 
          name: "Taj Mahal", 
          location: "Agra, Uttar Pradesh", 
          type: "Heritage Site", 
          description: "Iconic white marble mausoleum, one of the Seven Wonders of the World",
          keywords: ["wonder", "marble", "mughal", "agra", "heritage", "monument"]
        },
        { 
          name: "Goa Beaches", 
          location: "Goa", 
          type: "Beach Destination", 
          description: "Beautiful beaches with Portuguese architecture and vibrant nightlife",
          keywords: ["beach", "portuguese", "nightlife", "seafood", "carnival"]
        },
        { 
          name: "Kerala Backwaters", 
          location: "Kerala", 
          type: "Nature", 
          description: "Serene backwaters with houseboat experiences and lush greenery",
          keywords: ["backwater", "houseboat", "coconut", "spices", "ayurveda"]
        },
        { 
          name: "Rajasthan Palaces", 
          location: "Rajasthan", 
          type: "Royal Heritage", 
          description: "Magnificent palaces and forts with desert landscapes",
          keywords: ["palace", "fort", "desert", "royal", "camel", "rajput"]
        },
        { 
          name: "Ladakh", 
          location: "Ladakh", 
          type: "Adventure", 
          description: "High altitude desert with Buddhist monasteries and stunning landscapes",
          keywords: ["mountain", "buddhist", "monastery", "adventure", "trek", "bike"]
        },
        { 
          name: "Himachal Pradesh", 
          location: "Himachal Pradesh", 
          type: "Hill Station", 
          description: "Snow-capped mountains and beautiful hill stations",
          keywords: ["hill", "snow", "shimla", "manali", "skiing", "trekking"]
        },
        { 
          name: "Varanasi", 
          location: "Uttar Pradesh", 
          type: "Spiritual", 
          description: "Ancient spiritual city on the banks of River Ganges",
          keywords: ["spiritual", "ganges", "ghat", "temple", "pilgrimage", "ancient"]
        },
        { 
          name: "Andaman Islands", 
          location: "Andaman & Nicobar", 
          type: "Island Paradise", 
          description: "Pristine beaches with crystal clear waters and coral reefs",
          keywords: ["island", "coral", "diving", "beach", "pristine", "tropical"]
        }
      ],
      food: [
        { 
          name: "Biryani", 
          origin: "Hyderabad", 
          type: "Main Course", 
          description: "Aromatic rice dish with meat or vegetables and exotic spices",
          keywords: ["rice", "spice", "aromatic", "hyderabadi", "basmati", "saffron"]
        },
        { 
          name: "Butter Chicken", 
          origin: "Delhi", 
          type: "Main Course", 
          description: "Creamy tomato-based chicken curry with rich butter sauce",
          keywords: ["chicken", "creamy", "tomato", "butter", "curry", "punjabi"]
        },
        { 
          name: "Masala Dosa", 
          origin: "South India", 
          type: "Breakfast", 
          description: "Crispy crepe made from rice and lentils with spiced potato filling",
          keywords: ["crispy", "rice", "lentil", "potato", "south", "fermented"]
        },
        { 
          name: "Chole Bhature", 
          origin: "Punjab", 
          type: "Main Course", 
          description: "Spicy chickpeas curry served with fluffy fried bread",
          keywords: ["chickpea", "punjabi", "fried", "bread", "spicy", "chole"]
        },
        { 
          name: "Vada Pav", 
          origin: "Mumbai", 
          type: "Street Food", 
          description: "Mumbai's iconic street food - spiced potato fritter in bread bun",
          keywords: ["mumbai", "street", "potato", "fritter", "chutney", "affordable"]
        },
        { 
          name: "Samosa", 
          origin: "North India", 
          type: "Snack", 
          description: "Triangular fried pastry with savory filling of potatoes and peas",
          keywords: ["triangular", "fried", "pastry", "potato", "peas", "tea"]
        },
        { 
          name: "Gulab Jamun", 
          origin: "India", 
          type: "Dessert", 
          description: "Sweet milk dumplings soaked in rose-flavored sugar syrup",
          keywords: ["sweet", "milk", "rose", "syrup", "festival", "celebration"]
        },
        { 
          name: "Tandoori Chicken", 
          origin: "Punjab", 
          type: "Main Course", 
          description: "Roasted chicken marinated in yogurt and spices, cooked in tandoor",
          keywords: ["tandoor", "roasted", "yogurt", "marinated", "spices", "clay"]
        }
      ],
      festivals: [
        { 
          name: "Diwali", 
          season: "October/November", 
          type: "Religious", 
          description: "Festival of lights celebrating victory of good over evil",
          keywords: ["lights", "lamp", "fireworks", "sweets", "prosperity", "lakshmi"]
        },
        { 
          name: "Holi", 
          season: "March", 
          type: "Cultural", 
          description: "Festival of colors celebrating spring and love",
          keywords: ["colors", "spring", "krishna", "radha", "gulal", "water"]
        },
        { 
          name: "Dussehra", 
          season: "September/October", 
          type: "Religious", 
          description: "Celebrates victory of Lord Rama over demon king Ravana",
          keywords: ["rama", "ravana", "victory", "good", "evil", "effigy"]
        },
        { 
          name: "Navratri", 
          season: "September/October", 
          type: "Religious", 
          description: "Nine nights of dance and devotion to Goddess Durga",
          keywords: ["nine", "nights", "durga", "dance", "garba", "dandiya"]
        },
        { 
          name: "Ganesh Chaturthi", 
          season: "August/September", 
          type: "Religious", 
          description: "Celebration of Lord Ganesha with elaborate processions",
          keywords: ["ganesha", "elephant", "modak", "procession", "visarjan", "mumbai"]
        },
        { 
          name: "Karva Chauth", 
          season: "October/November", 
          type: "Cultural", 
          description: "Festival where married women fast for their husband's well-being",
          keywords: ["fast", "married", "moon", "husband", "mehndi", "sargi"]
        },
        { 
          name: "Eid ul-Fitr", 
          season: "Variable", 
          type: "Religious", 
          description: "Islamic festival marking end of Ramadan fasting month",
          keywords: ["ramadan", "fast", "moon", "charity", "feast", "prayer"]
        },
        { 
          name: "Christmas", 
          season: "December", 
          type: "Religious", 
          description: "Christian celebration of birth of Jesus Christ",
          keywords: ["jesus", "christ", "tree", "gifts", "carol", "church"]
        }
      ],
      dances: [
        { 
          name: "Bharatanatyam", 
          origin: "Tamil Nadu", 
          type: "Classical", 
          description: "Ancient classical dance form with intricate expressions and movements",
          keywords: ["classical", "temple", "expression", "mudra", "carnatic", "devotional"]
        },
        { 
          name: "Kathak", 
          origin: "North India", 
          type: "Classical", 
          description: "Storytelling dance with spins and rhythmic footwork",
          keywords: ["story", "spin", "rhythm", "mughal", "court", "tabla"]
        },
        { 
          name: "Kuchipudi", 
          origin: "Andhra Pradesh", 
          type: "Classical", 
          description: "Dance drama tradition with dramatic expressions",
          keywords: ["drama", "andhra", "expression", "story", "costume", "theatrical"]
        },
        { 
          name: "Odissi", 
          origin: "Odisha", 
          type: "Classical", 
          description: "Temple dance with fluid movements and sculptural poses",
          keywords: ["temple", "fluid", "sculpture", "pose", "tribhanga", "devotional"]
        },
        { 
          name: "Manipuri", 
          origin: "Manipur", 
          type: "Classical", 
          description: "Graceful dance from Northeast India with circular movements",
          keywords: ["graceful", "northeast", "circular", "krishna", "radha", "raslila"]
        },
        { 
          name: "Mohiniyattam", 
          origin: "Kerala", 
          type: "Classical", 
          description: "Dance of the enchantress with swaying movements",
          keywords: ["enchantress", "sway", "kerala", "vishnu", "mohini", "graceful"]
        }
      ]
    };
    
    this.allItems = this.flattenSearchData();
    this.searchHistory = this.loadSearchHistory();
    this.init();
  }

  flattenSearchData() {
    const allItems = [];
    Object.keys(this.searchData).forEach(category => {
      this.searchData[category].forEach(item => {
        allItems.push({
          ...item,
          category: category.slice(0, -1) // Remove 's' from category name
        });
      });
    });
    return allItems;
  }

  init() {
    this.createSearchModal();
    this.bindEvents();
    this.createSearchBar();
  }

  createSearchBar() {
    // Check if search bar already exists
    if (document.getElementById('search-container')) return;

    const searchHTML = `
      <div id="search-container" class="search-container">
        <div class="search-wrapper">
          <input type="text" id="search-input" placeholder="Search destinations, food, festivals..." autocomplete="off" />
          <button id="search-btn" class="search-btn" title="Search">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div id="search-suggestions" class="search-suggestions"></div>
      </div>
    `;

    // Try to add to existing navbar
    const navbar = document.querySelector('.nav-container, .navbar .nav-container');
    if (navbar) {
      // Find the nav menu and insert after it
      const navMenu = navbar.querySelector('.nav-menu');
      if (navMenu) {
        navMenu.insertAdjacentHTML('afterend', searchHTML);
      } else {
        navbar.insertAdjacentHTML('beforeend', searchHTML);
      }
    } else {
      // Fallback - create a search bar at the top
      const fallbackSearch = `
        <div style="position: fixed; top: 10px; right: 10px; z-index: 9999;">
          ${searchHTML}
        </div>
      `;
      document.body.insertAdjacentHTML('afterbegin', fallbackSearch);
    }
  }

  createSearchModal() {
    const modalHTML = `
      <div id="search-results-modal" class="search-modal">
        <div class="search-modal-content">
          <div class="search-modal-header">
            <div>
              <h3>Search Results</h3>
              <div class="search-query" id="search-query-display"></div>
            </div>
            <button id="close-search-modal" class="close-btn" title="Close">&times;</button>
          </div>
          <div id="search-results" class="search-results"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  bindEvents() {
    document.addEventListener('click', (e) => {
      const searchInput = document.getElementById('search-input');
      const searchBtn = document.getElementById('search-btn');
      const closeModal = document.getElementById('close-search-modal');
      const modal = document.getElementById('search-results-modal');
      const suggestions = document.getElementById('search-suggestions');

      if (e.target === searchInput) {
        // Show suggestions if there's text
        if (searchInput.value.length >= 2) {
          this.handleSearch(searchInput.value);
        }
      } else if (e.target === searchBtn || e.target.closest('#search-btn')) {
        this.showFullResults(searchInput?.value || '');
      } else if (e.target === closeModal) {
        modal.style.display = 'none';
      } else if (e.target === modal) {
        modal.style.display = 'none';
      } else if (!e.target.closest('.search-container')) {
        // Hide suggestions when clicking outside
        suggestions.style.display = 'none';
      }
    });

    document.addEventListener('input', (e) => {
      if (e.target.id === 'search-input') {
        this.handleSearch(e.target.value);
      }
    });

    document.addEventListener('keypress', (e) => {
      if (e.target.id === 'search-input' && e.key === 'Enter') {
        this.showFullResults(e.target.value);
      }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const modal = document.getElementById('search-results-modal');
        if (modal?.style.display === 'block') {
          modal.style.display = 'none';
        }
      }
    });
  }

  handleSearch(query) {
    const suggestions = document.getElementById('search-suggestions');
    
    if (query.length < 2) {
      suggestions.style.display = 'none';
      return;
    }

    const results = this.searchContent(query);
    const topSuggestions = results.slice(0, 6);
    this.displaySuggestions(topSuggestions);
  }

  searchContent(query) {
    const searchTerm = query.toLowerCase().trim();
    const results = [];

    this.allItems.forEach(item => {
      const score = this.calculateRelevanceScore(item, searchTerm);
      if (score > 0) {
        results.push({
          ...item,
          score: score,
          matchedText: this.getMatchedText(item, searchTerm)
        });
      }
    });

    return results.sort((a, b) => b.score - a.score);
  }

  calculateRelevanceScore(item, searchTerm) {
    let score = 0;
    const name = item.name.toLowerCase();
    const description = item.description.toLowerCase();
    const keywords = item.keywords?.join(' ').toLowerCase() || '';
    
    // Exact name match gets highest score
    if (name === searchTerm) score += 100;
    else if (name.startsWith(searchTerm)) score += 80;
    else if (name.includes(searchTerm)) score += 60;
    
    // Check description
    if (description.includes(searchTerm)) score += 40;
    
    // Check keywords
    if (keywords.includes(searchTerm)) score += 50;
    
    // Check other fields
    const location = (item.location || item.origin || item.season || '').toLowerCase();
    if (location.includes(searchTerm)) score += 30;
    
    const type = item.type.toLowerCase();
    if (type.includes(searchTerm)) score += 25;

    // Bonus for partial matches in keywords
    if (item.keywords) {
      item.keywords.forEach(keyword => {
        if (keyword.toLowerCase().includes(searchTerm) || searchTerm.includes(keyword.toLowerCase())) {
          score += 15;
        }
      });
    }

    return score;
  }

  getMatchedText(item, searchTerm) {
    const name = item.name.toLowerCase();
    if (name.includes(searchTerm)) {
      return item.name;
    }
    return item.description.substring(0, 100) + '...';
  }

  displaySuggestions(suggestions) {
    const container = document.getElementById('search-suggestions');
    
    if (!suggestions.length) {
      container.style.display = 'none';
      return;
    }

    const suggestionsHTML = suggestions.map(item => {
      const iconMap = {
        destination: 'fas fa-map-marker-alt',
        food: 'fas fa-utensils',
        festival: 'fas fa-calendar-alt',
        dance: 'fas fa-music'
      };

      return `
        <div class="suggestion-item" onclick="window.deshDarshanSearch.selectSuggestion('${item.name}', '${item.category}')">
          <div class="suggestion-icon ${item.category}">
            <i class="${iconMap[item.category] || 'fas fa-search'}"></i>
          </div>
          <div class="suggestion-content">
            <div class="suggestion-name">${item.name}</div>
            <div class="suggestion-meta">
              <span class="suggestion-category">${item.category}</span>
              <span>${item.location || item.origin || item.season || ''}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = suggestionsHTML;
    container.style.display = 'block';
  }

  showFullResults(query) {
    if (!query.trim()) return;

    const results = this.searchContent(query);
    const modal = document.getElementById('search-results-modal');
    const resultsContainer = document.getElementById('search-results');
    const queryDisplay = document.getElementById('search-query-display');

    // Update query display
    queryDisplay.textContent = `Searching for: "${query}"`;

    // Save to search history
    this.addToSearchHistory(query);

    if (!results.length) {
      resultsContainer.innerHTML = this.renderNoResults(query);
    } else {
      const groupedResults = this.groupResultsByCategory(results);
      resultsContainer.innerHTML = this.renderSearchStats(results, query) + this.renderGroupedResults(groupedResults);
    }

    modal.style.display = 'block';
    document.getElementById('search-suggestions').style.display = 'none';
  }

  renderSearchStats(results, query) {
    const totalResults = results.length;
    const categories = [...new Set(results.map(r => r.category))].length;
    
    return `
      <div class="search-stats">
        <h4>Found ${totalResults} result${totalResults !== 1 ? 's' : ''}</h4>
        <p>Showing results across ${categories} categor${categories !== 1 ? 'ies' : 'y'}</p>
      </div>
    `;
  }

  groupResultsByCategory(results) {
    const grouped = {};
    results.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });
    return grouped;
  }

  renderGroupedResults(groupedResults) {
    const categoryIcons = {
      destination: 'fas fa-map-marker-alt',
      food: 'fas fa-utensils',
      festival: 'fas fa-calendar-alt',
      dance: 'fas fa-music'
    };

    const categoryColors = {
      destination: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      food: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      festival: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      dance: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    };

    return Object.keys(groupedResults).map(category => {
      const items = groupedResults[category];
      return `
        <div class="result-category">
          <div class="category-header">
            <div class="category-icon" style="background: ${categoryColors[category]}">
              <i class="${categoryIcons[category]}"></i>
            </div>
            <h4 class="category-title">${category.charAt(0).toUpperCase() + category.slice(1)}s</h4>
            <span class="category-count">${items.length}</span>
          </div>
          <div class="category-results">
            ${items.map(item => this.renderResultItem(item)).join('')}
          </div>
        </div>
      `;
    }).join('');
  }

  renderResultItem(item) {
    const getLocationIcon = () => {
      if (item.location) return '<i class="fas fa-map-marker-alt"></i>';
      if (item.origin) return '<i class="fas fa-home"></i>';
      if (item.season) return '<i class="fas fa-calendar"></i>';
      return '';
    };

    const getLocationText = () => {
      return item.location || item.origin || item.season || '';
    };

    return `
      <div class="result-item">
        <h5>${item.name}</h5>
        <div class="result-meta">
          ${getLocationText() ? `<span class="result-location">${getLocationIcon()} ${getLocationText()}</span>` : ''}
        </div>
        <p class="result-description">${item.description}</p>
        <span class="result-type">${item.type}</span>
      </div>
    `;
  }

  renderNoResults(query) {
    return `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <h4>No results found</h4>
        <p>We couldn't find anything matching "<strong>${query}</strong>". Try searching for destinations, food, festivals, or dance forms.</p>
      </div>
    `;
  }

  selectSuggestion(name, category) {
    const input = document.getElementById('search-input');
    if (input) {
      input.value = name;
      this.showFullResults(name);
    }
  }

  addToSearchHistory(query) {
    if (!this.searchHistory.includes(query)) {
      this.searchHistory.unshift(query);
      if (this.searchHistory.length > 10) {
        this.searchHistory = this.searchHistory.slice(0, 10);
      }
      this.saveSearchHistory();
    }
  }

  loadSearchHistory() {
    try {
      return JSON.parse(localStorage.getItem('deshdarshan_search_history') || '[]');
    } catch {
      return [];
    }
  }

  saveSearchHistory() {
    try {
      localStorage.setItem('deshdarshan_search_history', JSON.stringify(this.searchHistory));
    } catch {
      // Handle localStorage errors gracefully
    }
  }
}

// Initialize search system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure all other scripts have loaded
  setTimeout(() => {
    window.deshDarshanSearch = new DeshDarshanSearchSystem();
  }, 100);
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DeshDarshanSearchSystem;
}
