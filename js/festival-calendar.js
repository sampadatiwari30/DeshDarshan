// Festival Calendar JavaScript - DeshDarshan

class FestivalCalendar {
    constructor() {
        this.festivals = [];
        this.filteredFestivals = [];
        this.calendar = null;
        this.currentView = 'dayGridMonth';
        this.filters = {
            state: '',
            category: '',
            month: ''
        };
        
        this.init();
    }

    async init() {
        try {
            await this.loadFestivals();
            this.setupCalendar();
            this.setupFilters();
            this.setupEventListeners();
            this.updateStatistics();
            this.displayUpcomingFestivals();
        } catch (error) {
            console.error('Error initializing festival calendar:', error);
            this.showError('Failed to load festival data. Please try again later.');
        }
    }

    async loadFestivals() {
        try {
            console.log('Attempting to load festival data...');
            const response = await fetch('../data/festivals.json');
            console.log('Response status:', response.status);
            console.log('Response ok:', response.ok);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch festival data: ${response.status} ${response.statusText}`);
            }
            
            const data = await response.json();
            console.log('Festival data loaded successfully:', data);
            
            this.festivals = data.festivals;
            this.filteredFestivals = [...this.festivals];
            
            // Populate state filter options
            this.populateStateFilter(data.states, data.unionTerritories);
        } catch (error) {
            console.error('Error loading festivals:', error);
            console.error('Error details:', error.message);
            
            // Fallback to sample data if fetch fails
            console.log('Using fallback sample data...');
            this.loadSampleData();
        }
    }

    loadSampleData() {
        const sampleData = {
            festivals: [
                {
                    id: 1,
                    name: "Independence Day",
                    date: "2025-08-15",
                    states: ["All India"],
                    description: "National celebration of India's independence with flag hoisting and cultural programs",
                    image: "assets/images/festivals/festival.jpg",
                    category: "National Festival"
                },
                {
                    id: 2,
                    name: "Raksha Bandhan",
                    date: "2025-08-08",
                    states: ["All India"],
                    description: "Festival celebrating the bond between brothers and sisters with rakhi tying",
                    image: "assets/images/festivals/festival.jpg",
                    category: "Cultural Festival"
                },
                {
                    id: 3,
                    name: "Janmashtami",
                    date: "2025-08-15",
                    states: ["All India"],
                    description: "Birth celebration of Lord Krishna with devotional songs and cultural performances",
                    image: "assets/images/festivals/janmashtami.jpg",
                    category: "Religious Festival"
                },
                {
                    id: 4,
                    name: "Ganesh Chaturthi",
                    date: "2025-08-27",
                    states: ["Maharashtra", "Karnataka", "Telangana", "Andhra Pradesh", "Gujarat", "Tamil Nadu"],
                    description: "Festival honoring Lord Ganesha with elaborate decorations and community celebrations",
                    image: "assets/images/festivals/ganesh.jpg",
                    category: "Religious Festival"
                },
                {
                    id: 5,
                    name: "Onam",
                    date: "2025-08-25",
                    states: ["Kerala"],
                    description: "Harvest festival of Kerala with boat races, traditional dances, and grand feasts",
                    image: "assets/images/festivals/festival.jpg",
                    category: "Harvest Festival"
                },
                {
                    id: 6,
                    name: "Diwali",
                    date: "2025-10-21",
                    states: ["All India"],
                    description: "Festival of lights celebrating victory of light over darkness",
                    image: "assets/images/festivals/67.jpg",
                    category: "Religious Festival"
                },
                {
                    id: 7,
                    name: "Holi",
                    date: "2025-03-14",
                    states: ["All India"],
                    description: "Festival of colors celebrating spring and victory of good over evil",
                    image: "assets/images/festivals/holi.jpg",
                    category: "Spring Festival"
                },
                {
                    id: 8,
                    name: "Christmas",
                    date: "2025-12-25",
                    states: ["All India"],
                    description: "Celebration of the birth of Jesus Christ with decorations and community gatherings",
                    image: "assets/images/festivals/christmas.jpeg",
                    category: "Religious Festival"
                }
            ],
            states: [
                "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
                "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
                "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
                "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
                "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
                "Uttar Pradesh", "Uttarakhand", "West Bengal"
            ],
            unionTerritories: [
                "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
                "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
            ]
        };

        this.festivals = sampleData.festivals;
        this.filteredFestivals = [...this.festivals];
        this.populateStateFilter(sampleData.states, sampleData.unionTerritories);
    }

    populateStateFilter(states, unionTerritories) {
        const stateFilter = document.getElementById('stateFilter');
        
        // Add states
        states.forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateFilter.appendChild(option);
        });

        // Add union territories
        unionTerritories.forEach(ut => {
            const option = document.createElement('option');
            option.value =ut;
            option.textContent = ut;
            stateFilter.appendChild(option);
        });
    }

    setupCalendar() {
        const calendarEl = document.getElementById('calendar');
        
        this.calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: this.currentView,
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,listMonth'
            },
            height: 'auto',
            events: this.getCalendarEvents(),
            eventClick: (info) => {
                this.showFestivalModal(info.event);
            },
            eventDidMount: (info) => {
                // Add custom styling based on festival category
                const category = info.event.extendedProps.category;
                if (category) {
                    info.el.style.backgroundColor = this.getCategoryColor(category);
                    info.el.style.borderColor = this.getCategoryColor(category);
                }
            },
            dayMaxEvents: 3,
            moreLinkClick: 'popover',
            locale: 'en',
            firstDay: 1,
            buttonText: {
                today: 'Today',
                month: 'Month',
                list: 'List'
            }
        });

        this.calendar.render();
    }

    getCalendarEvents() {
        const events = this.filteredFestivals.map(festival => ({
            id: festival.id,
            title: festival.name,
            start: festival.date,
            end: festival.date,
            backgroundColor: this.getCategoryColor(festival.category),
            borderColor: this.getCategoryColor(festival.category),
            textColor: 'white',
            extendedProps: {
                description: festival.description,
                states: festival.states,
                category: festival.category,
                image: festival.image
            }
        }));
        
        console.log('Calendar events created:', events);
        console.log('Number of events:', events.length);
        return events;
    }

    getCategoryColor(category) {
        const colors = {
            'Religious Festival': '#ff9933',
            'Harvest Festival': '#28a745',
            'Cultural Festival': '#17a2b8',
            'Spring Festival': '#ffc107',
            'Winter Festival': '#6f42c1',
            'National Festival': '#dc3545'
        };
        return colors[category] || '#ff9933';
    }

    setupFilters() {
        const stateFilter = document.getElementById('stateFilter');
        const categoryFilter = document.getElementById('categoryFilter');
        const monthFilter = document.getElementById('monthFilter');

        stateFilter.addEventListener('change', (e) => {
            this.filters.state = e.target.value;
            this.applyFilters();
        });

        categoryFilter.addEventListener('change', (e) => {
            this.filters.category = e.target.value;
            this.applyFilters();
        });

        monthFilter.addEventListener('change', (e) => {
            this.filters.month = e.target.value;
            this.applyFilters();
        });
    }

    setupEventListeners() {
        // View controls
        document.getElementById('monthView').addEventListener('click', () => {
            this.changeView('dayGridMonth');
        });

        document.getElementById('listView').addEventListener('click', () => {
            this.changeView('listMonth');
        });

        document.getElementById('clearFilters').addEventListener('click', () => {
            this.clearAllFilters();
        });

        // Modal close
        const modal = document.getElementById('festivalModal');
        const closeBtn = document.querySelector('.close');

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
    }

    changeView(view) {
        this.currentView = view;
        this.calendar.changeView(view);
        
        // Update button states
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        if (view === 'dayGridMonth') {
            document.getElementById('monthView').classList.add('active');
        } else {
            document.getElementById('listView').classList.add('active');
        }
    }

    applyFilters() {
        this.filteredFestivals = this.festivals.filter(festival => {
            // State filter
            if (this.filters.state && !festival.states.includes(this.filters.state)) {
                return false;
            }

            // Category filter
            if (this.filters.category && festival.category !== this.filters.category) {
                return false;
            }

            // Month filter
            if (this.filters.month !== '') {
                const festivalDate = new Date(festival.date);
                if (festivalDate.getMonth() !== parseInt(this.filters.month)) {
                    return false;
                }
            }

            return true;
        });

        // Navigate calendar to selected month if month filter is applied
        if (this.filters.month !== '') {
            const currentDate = new Date();
            const selectedMonth = parseInt(this.filters.month);
            const targetDate = new Date(currentDate.getFullYear(), selectedMonth, 1);
            
            // If the selected month is in the past, use next year
            if (targetDate < currentDate) {
                targetDate.setFullYear(currentDate.getFullYear() + 1);
            }
            
            this.calendar.gotoDate(targetDate);
        }

        // Update calendar events
        this.calendar.removeAllEvents();
        this.calendar.addEventSource(this.getCalendarEvents());
        
        // Update statistics
        this.updateStatistics();
        this.displayUpcomingFestivals();
        
        console.log('Filters applied:', this.filters);
        console.log('Filtered festivals:', this.filteredFestivals.length);
    }

    clearAllFilters() {
        // Reset all filter values
        this.filters = {
            state: '',
            category: '',
            month: ''
        };

        // Reset filter dropdowns
        document.getElementById('stateFilter').value = '';
        document.getElementById('categoryFilter').value = '';
        document.getElementById('monthFilter').value = '';

        // Reset filtered festivals to show all
        this.filteredFestivals = [...this.festivals];

        // Navigate back to current month
        this.calendar.today();

        // Update calendar events
        this.calendar.removeAllEvents();
        this.calendar.addEventSource(this.getCalendarEvents());
        
        // Update statistics
        this.updateStatistics();
        this.displayUpcomingFestivals();
        
        console.log('All filters cleared');
    }

    showFestivalModal(event) {
        const modal = document.getElementById('festivalModal');
        const festival = event.extendedProps;

        // Populate modal content
        document.getElementById('modalFestivalImage').src = '../' + festival.image;
        document.getElementById('modalFestivalName').textContent = event.title;
        document.getElementById('modalFestivalDate').textContent = this.formatDate(event.start);
        document.getElementById('modalFestivalCategory').textContent = festival.category;
        document.getElementById('modalFestivalDescription').textContent = festival.description;

        // Populate states
        const statesContainer = document.getElementById('modalFestivalStates');
        statesContainer.innerHTML = '';
        festival.states.forEach(state => {
            const span = document.createElement('span');
            span.textContent = state;
            statesContainer.appendChild(span);
        });

        modal.style.display = 'block';
    }

    formatDate(date) {
        return new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    }

    updateStatistics() {
        const totalFestivals = this.festivals.length;
        const religiousCount = this.festivals.filter(f => f.category === 'Religious Festival').length;
        
        // Calculate upcoming festivals this month
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        
        const upcomingThisMonth = this.festivals.filter(festival => {
            const festivalDate = new Date(festival.date);
            return festivalDate.getMonth() === currentMonth && 
                   festivalDate.getFullYear() === currentYear &&
                   festivalDate >= currentDate;
        }).length;

        // Update DOM
        document.getElementById('totalFestivals').textContent = totalFestivals;
        document.getElementById('religiousCount').textContent = religiousCount;
        document.getElementById('upcomingCount').textContent = upcomingThisMonth;
    }

    displayUpcomingFestivals() {
        const upcomingContainer = document.getElementById('upcomingFestivalsList');
        const currentDate = new Date();
        
        // Get next 6 upcoming festivals
        const upcoming = this.festivals
            .filter(festival => new Date(festival.date) >= currentDate)
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .slice(0, 6);

        if (upcoming.length === 0) {
            upcomingContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-calendar-times"></i>
                    <h3>No upcoming festivals</h3>
                    <p>Check back later for new festival updates!</p>
                </div>
            `;
            return;
        }

        upcomingContainer.innerHTML = upcoming.map(festival => `
            <div class="upcoming-festival-card" onclick="festivalCalendar.showFestivalModalFromCard(${festival.id})">
                <img src="../${festival.image}" alt="${festival.name}" onerror="this.src='../assets/images/festivals/festival.jpg'">
                <div class="upcoming-festival-info">
                    <h3>${festival.name}</h3>
                    <div class="festival-date">${this.formatDate(new Date(festival.date))}</div>
                    <div class="festival-category">${festival.category}</div>
                </div>
            </div>
        `).join('');
    }

    showFestivalModalFromCard(festivalId) {
        const festival = this.festivals.find(f => f.id === festivalId);
        if (!festival) return;

        const modal = document.getElementById('festivalModal');
        
        // Populate modal content
        document.getElementById('modalFestivalImage').src = '../' + festival.image;
        document.getElementById('modalFestivalName').textContent = festival.name;
        document.getElementById('modalFestivalDate').textContent = this.formatDate(new Date(festival.date));
        document.getElementById('modalFestivalCategory').textContent = festival.category;
        document.getElementById('modalFestivalDescription').textContent = festival.description;

        // Populate states
        const statesContainer = document.getElementById('modalFestivalStates');
        statesContainer.innerHTML = '';
        festival.states.forEach(state => {
            const span = document.createElement('span');
            span.textContent = state;
            statesContainer.appendChild(span);
        });

        modal.style.display = 'block';
    }

    showError(message) {
        const calendarEl = document.getElementById('calendar');
        calendarEl.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>Error</h3>
                <p>${message}</p>
            </div>
        `;
    }
}

// Initialize the festival calendar when the page loads
let festivalCalendar;
document.addEventListener('DOMContentLoaded', () => {
    festivalCalendar = new FestivalCalendar();
});

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation
    const calendarEl = document.getElementById('calendar');
    calendarEl.innerHTML = '<div class="loading"></div>';
});

// Add keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        // Add focus styles for keyboard navigation
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    // Remove focus styles when using mouse
    document.body.classList.remove('keyboard-navigation');
});

// Add CSS for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    .keyboard-navigation .view-btn:focus,
    .keyboard-navigation select:focus {
        outline: 3px solid #ff9933;
        outline-offset: 2px;
    }
`;
document.head.appendChild(style); 