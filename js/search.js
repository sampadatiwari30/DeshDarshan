// search.js - Site-wide search functionality for DeshDarshan
class DeshDarshanSearch {
  constructor() {
    this.searchData = {
      destinations: [
        { name: "Taj Mahal", location: "Agra", type: "Heritage", description: "Iconic white marble mausoleum" },
        { name: "Goa Beaches", location: "Goa", type: "Beach", description: "Beautiful beaches and Portuguese architecture" },
        { name: "Kerala Backwaters", location: "Kerala", type: "Nature", description: "Serene backwaters and houseboat experiences" },
        { name: "Rajasthan Palaces", location: "Rajasthan", type: "Heritage", description: "Magnificent palaces and desert landscapes" },
        { name: "Himachal Pradesh", location: "Himachal Pradesh", type: "Mountains", description: "Snow-capped mountains and hill stations" },
        { name: "Mumbai", location: "Maharashtra", type: "City", description: "Bollywood capital and financial hub" },
        { name: "Varanasi", location: "Uttar Pradesh", type: "Spiritual", description: "Ancient spiritual city on the Ganges" },
        { name: "Ladakh", location: "Ladakh", type: "Adventure", description: "High altitude desert and Buddhist culture" }
      ],
      food: [
        { name: "Biryani", origin: "Hyderabad", type: "Main Course", description: "Aromatic rice dish with meat or vegetables" },
        { name: "Butter Chicken", origin: "Delhi", type: "Main Course", description: "Creamy tomato-based chicken curry" },
        { name: "Masala Dosa", origin: "South India", type: "Breakfast", description: "Crispy crepe with spiced potato filling" },
        { name: "Chole Bhature", origin: "Punjab", type: "Main Course", description: "Spicy chickpeas with fried bread" },
        { name: "Rajma Rice", origin: "North India", type: "Main Course", description: "Kidney beans curry with rice" },
        { name: "Samosa", origin: "North India", type: "Snack", description: "Fried pastry with savory filling" },
        { name: "Gulab Jamun", origin: "India", type: "Dessert", description: "Sweet milk dumplings in syrup" },
        { name: "Vada Pav", origin: "Mumbai", type: "Street Food", description: "Spiced potato fritter in bread bun" }
      ],
      festivals: [
        { name: "Diwali", season: "October/November", type: "Religious", description: "Festival of lights celebrating good over evil" },
        { name: "Holi", season: "March", type: "Cultural", description: "Festival of colors celebrating spring" },
        { name: "Dussehra", season: "September/October", type: "Religious", description: "Victory of good over evil" },
        { name: "Eid", season: "Variable", type: "Religious", description: "Islamic festival of celebration" },
        { name: "Christmas", season: "December", type: "Religious", description: "Christian celebration of Christ's birth" },
        { name: "Karva Chauth", season: "October/November", type: "Cultural", description: "Festival for married women" },
        { name: "Navratri", season: "September/October", type: "Religious", description: "Nine nights of dance and devotion" },
        { name: "Ganesh Chaturthi", season: "August/September", type: "Religious", description: "Celebration of Lord Ganesha" }
      ],
      dances: [
        { name: "Bharatanatyam", origin: "Tamil Nadu", type: "Classical", description: "Ancient classical dance form" },
        { name: "Kathak", origin: "North India", type: "Classical", description: "Storytelling through dance" },
        { name: "Kuchipudi", origin: "Andhra Pradesh", type: "Classical", description: "Dance drama tradition" },
        { name: "Odissi", origin: "Odisha", type: "Classical", description: "Temple dance with fluid movements" },
        { name: "Manipuri", origin: "Manipur", type: "Classical", description: "Graceful dance from Northeast India" },
        { name: "Mohiniyattam", origin: "Kerala", type: "Classical", description: "Dance of the enchantress" }
      ]
    };
    this.init();
  }

  init() {
    this.createSearchBar();
    this.createSearchResults();
    this.bindEvents();
  }

  createSearchBar() {
    const searchHTML = `
      <div id="search-container" class="search-container">
        <div class="search-wrapper">
          <input type="text" id="search-input" placeholder="Search destinations, food, festivals..." />
          <button id="search-btn" class="search-btn">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div id="search-suggestions" class="search-suggestions"></div>
      </div>
    `;

    // Add to navbar or header
    const navbar = document.querySelector('nav, header, .navbar');
    if (navbar) {
      navbar.insertAdjacentHTML('beforeend', searchHTML);
    } else {
      // Fallback - add to body
      document.body.insertAdjacentHTML('afterbegin', searchHTML);
    }
  }

  createSearchResults() {
    const resultsHTML = `
      <div id="search-results-modal" class="search-modal">
        <div class="search-modal-content">
          <div class="search-modal-header">
            <h3>Search Results</h3>
            <button id="close-search-modal" class="close-btn">&times;</button>
          </div>
          <div id="search-results" class="search-results"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', resultsHTML);
  }

  bindEvents() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const closeModal = document.getElementById('close-search-modal');
    const modal = document.getElementById('search-results-modal');

    searchInput?.addEventListener('input', (e) => this.handleSearch(e.target.value));
    searchInput?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.showFullResults(e.target.value);
    });
    searchBtn?.addEventListener('click', () => this.showFullResults(searchInput.value));
    closeModal?.addEventListener('click', () => modal.style.display = 'none');
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }

  handleSearch(query) {
    if (query.length < 2) {
      document.getElementById('search-suggestions').innerHTML = '';
      return;
    }

    const results = this.searchContent(query);
    const suggestions = results.slice(0, 5); // Show top 5 suggestions
    this.displaySuggestions(suggestions);
  }

  searchContent(query) {
    const allResults = [];
    const searchTerm = query.toLowerCase();

    // Search through all categories
    Object.keys(this.searchData).forEach(category => {
      this.searchData[category].forEach(item => {
        const score = this.calculateRelevanceScore(item, searchTerm);
        if (score > 0) {
          allResults.push({
            ...item,
            category: category,
            score: score
          });
        }
      });
    });

    // Sort by relevance score
    return allResults.sort((a, b) => b.score - a.score);
  }

  calculateRelevanceScore(item, searchTerm) {
    let score = 0;
    const name = item.name.toLowerCase();
    const description = item.description.toLowerCase();
    
    // Exact name match gets highest score
    if (name === searchTerm) score += 100;
    // Name starts with search term
    else if (name.startsWith(searchTerm)) score += 80;
    // Name contains search term
    else if (name.includes(searchTerm)) score += 60;
    // Description contains search term
    else if (description.includes(searchTerm)) score += 40;
    
    // Check other fields
    Object.values(item).forEach(value => {
      if (typeof value === 'string' && value.toLowerCase().includes(searchTerm)) {
        score += 20;
      }
    });

    return score;
  }

  displaySuggestions(suggestions) {
    const container = document.getElementById('search-suggestions');
    if (!suggestions.length) {
      container.innerHTML = '';
      return;
    }

    const suggestionsHTML = suggestions.map(item => `
      <div class="suggestion-item" onclick="deshDarshanSearch.selectSuggestion('${item.name}', '${item.category}')">
        <div class="suggestion-name">${item.name}</div>
        <div class="suggestion-category">${item.category}</div>
      </div>
    `).join('');

    container.innerHTML = suggestionsHTML;
    container.style.display = 'block';
  }

  showFullResults(query) {
    if (!query.trim()) return;

    const results = this.searchContent(query);
    const modal = document.getElementById('search-results-modal');
    const resultsContainer = document.getElementById('search-results');

    if (!results.length) {
      resultsContainer.innerHTML = '<p class="no-results">No results found for your search.</p>';
    } else {
      const groupedResults = this.groupResultsByCategory(results);
      resultsContainer.innerHTML = this.renderGroupedResults(groupedResults);
    }

    modal.style.display = 'block';
    document.getElementById('search-suggestions').innerHTML = '';
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
    return Object.keys(groupedResults).map(category => `
      <div class="result-category">
        <h4 class="category-title">${category.charAt(0).toUpperCase() + category.slice(1)}</h4>
        <div class="category-results">
          ${groupedResults[category].map(item => `
            <div class="result-item">
              <h5>${item.name}</h5>
              <p class="result-location">${item.location || item.origin || item.season || ''}</p>
              <p class="result-description">${item.description}</p>
              <span class="result-type">${item.type}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  selectSuggestion(name, category) {
    document.getElementById('search-input').value = name;
    this.showFullResults(name);
  }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.deshDarshanSearch = new DeshDarshanSearch();
});
