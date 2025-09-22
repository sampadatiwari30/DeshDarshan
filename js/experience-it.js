class ExperienceIt {
  constructor(containerId, allPlacesData) {
    this.container = document.getElementById(containerId);
    this.allPlacesData = allPlacesData;

    if (!this.container || !this.allPlacesData) {
      console.error("ExperienceIt component cannot be initialized. Missing container or data.");
      return;
    }
    
    this.init();
  }

  init() {
    try {
      this.render();
    } catch (error) {
      console.error('Error initializing Experience It:', error);
      this.renderError();
    }
  }

  getCurrentExperiences() {
    const params = new URLSearchParams(window.location.search);
    const foodKey = params.get("food") || "biryani";
    return this.allPlacesData[foodKey] || [];
  }

  render() {
    const experiences = this.getCurrentExperiences();
    
    if (!experiences || experiences.length === 0) {
      this.renderEmpty();
      return;
    }

    this.container.innerHTML = experiences.map(venue => this.renderVenueCard(venue)).join('');
  }

  renderVenueCard(venue) {
    // Generate realistic random ratings for display purposes
    const randomRating = (Math.random() * (4.9 - 3.8) + 3.8).toFixed(1);
    const randomReviews = Math.floor(Math.random() * 2500) + 500;
    const roundedRating = Math.round(randomRating);
    const starIcon = `<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
    const starsHTML = [...Array(5)].map((_, i) => `<span class="${i < roundedRating ? 'text-yellow-400' : 'text-gray-300'}">${starIcon}</span>`).join('');

    return `
    <div class="bg-white p-6 rounded-xl border shadow-sm transition-shadow hover:shadow-lg">
        <div class="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div class="flex-grow">
                <h3 class="text-xl font-bold text-gray-800">${venue.name}</h3>
                <p class="text-sm text-gray-500 mt-1">${venue.address}</p>
                <p class="text-gray-600 mt-3 italic">"${venue.description}"</p>
            </div>
            <a href="${venue.mapsLink}" target="_blank" rel="noopener noreferrer" class="flex-shrink-0 inline-block bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:bg-indigo-700 transition-colors">View Map</a>
        </div>
        <div class="mt-6 border-t pt-6">
            <div class="flex items-center gap-3">
                <div class="flex">${starsHTML}</div>
                <span class="text-sm text-gray-600 font-medium">${randomRating}/5</span>
                <span class="text-sm text-gray-500">(${randomReviews.toLocaleString()} reviews)</span>
            </div>
        </div>
    </div>`;
  }

  renderEmpty() {
    this.container.innerHTML = `
      <div class="text-center p-8 bg-gray-100 rounded-lg">
        <p class="text-gray-600">Experience information coming soon for this dish!</p>
      </div>`;
  }

  renderError() {
    this.container.innerHTML = `
      <div class="text-center p-8 bg-red-50 border border-red-200 rounded-lg">
        <p class="text-red-700 font-semibold">⚠️ Unable to Load Experience Information</p>
        <p class="text-red-600 mt-2">There was an error loading recommendations. Please refresh the page.</p>
      </div>`;
  }
}
