// Blog and Experience Sharing JavaScript

// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: "Discovering the Hidden Temples of Hampi",
        excerpt: "Journey through the ancient ruins of Vijayanagara Empire and uncover the spiritual essence of Karnataka's crown jewel.",
        content: `Hampi, the ancient capital of the Vijayanagara Empire, stands as one of India's most magnificent archaeological sites. Nestled in the rocky landscape of Karnataka, this UNESCO World Heritage Site tells the story of a once-glorious empire through its stunning temples, royal complexes, and intricate stone carvings.

        The Virupaksha Temple, dedicated to Lord Shiva, has been continuously active for over 700 years. Its towering gopuram and intricate sculptures showcase the architectural brilliance of the Vijayanagara period. The temple's main hall, with its ornate pillars and detailed carvings, creates an atmosphere of divine reverence.

        The Vittala Temple complex, famous for its stone chariot and musical pillars, represents the pinnacle of Vijayanagara architecture. Each pillar produces different musical notes when struck, demonstrating the advanced understanding of acoustics possessed by ancient Indian architects.

        Beyond the temples, Hampi's landscape itself is a wonder. The boulder-strewn terrain, the Tungabhadra River, and the sunset views from Hemakuta Hill create a mystical atmosphere that has inspired travelers and spiritual seekers for centuries.

        Visiting Hampi is not just a journey through history; it's a spiritual experience that connects you with India's rich cultural heritage and architectural mastery.`,
        category: "Heritage",
        author: "Priya Sharma",
        date: "2024-12-15",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    },
    {
        id: 2,
        title: "The Flavors of Rajasthani Cuisine",
        excerpt: "Explore the royal kitchens of Rajasthan and discover the rich, aromatic dishes that define the desert state's culinary heritage.",
        content: `Rajasthani cuisine is a testament to the ingenuity of desert cooking, where scarcity of water and fresh vegetables led to the creation of some of India's most flavorful and long-lasting dishes. The royal kitchens of maharajas have given us a culinary legacy that continues to enchant food lovers worldwide.

        Dal Baati Churma stands as the crown jewel of Rajasthani cuisine. The hard wheat balls (baati) are traditionally baked in desert sand or cow dung fire, giving them a unique smoky flavor. Served with spicy dal and sweet churma, this dish represents the perfect balance of flavors and textures.

        Laal Maas, the fiery red meat curry, showcases the bold use of Mathania red chilies that give the dish its characteristic color and heat. Originally a hunting dish of the Rajput warriors, it has evolved into a restaurant favorite while maintaining its authentic preparation methods.

        The vegetarian delights include Gatte ki Sabzi, where gram flour dumplings are cooked in a spicy yogurt gravy, and Ker Sangri, a unique preparation of desert beans and berries that can last for days without refrigeration.

        Rajasthani sweets like Ghevar, Malpua, and Mawa Kachori reflect the state's love for rich, milk-based desserts. These sweets are not just food; they're an integral part of festivals and celebrations.

        The cooking techniques, passed down through generations, emphasize the use of ghee, dried spices, and slow cooking methods that intensify flavors while ensuring food preservation in the harsh desert climate.`,
        category: "Food",
        author: "Arjun Singh",
        date: "2024-12-10",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&h=600&fit=crop"
    },
    {
        id: 3,
        title: "Celebrating Durga Puja in Bengal",
        excerpt: "Experience the grandeur and devotion of Bengal's most beloved festival, where art, culture, and spirituality unite.",
        content: `Durga Puja in Bengal is not just a religious festival; it's a cultural phenomenon that transforms the entire state into a canvas of art, devotion, and celebration. For five days, Bengal becomes the epicenter of one of India's most spectacular festivals.

        The preparation begins months in advance, with skilled artisans crafting magnificent clay idols of Goddess Durga. These sculptures, created in the traditional kumartuli (potter's quarters) of Kolkata, are masterpieces that blend religious iconography with contemporary artistic expression.

        Each neighborhood organizes its own puja, creating elaborate pandals (temporary structures) that often replicate famous monuments, address social issues, or showcase innovative themes. The pandal-hopping tradition allows people to experience diverse artistic interpretations while seeking the goddess's blessings.

        The cultural programs accompanying Durga Puja include classical dance performances, theatrical presentations, and musical concerts. The dhak (traditional drums) create a rhythmic backdrop that resonates through the streets, while the aroma of bhog (sacred food offering) fills the air.

        The festival culminates with Vijaya Dashami, when the idols are immersed in rivers and ponds, symbolizing the goddess's return to her celestial abode. This bittersweet moment, accompanied by the chanting of "Asche bochor abar hobe" (it will happen again next year), captures the cyclical nature of Bengali cultural life.

        Durga Puja represents the perfect synthesis of devotion, art, and community spirit that defines Bengali culture. It's a celebration that welcomes everyone, regardless of their background, into its warm embrace.`,
        category: "Festivals",
        author: "Ananya Banerjee",
        date: "2024-12-05",
        image: "https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?w=800&h=600&fit=crop"
    },
    {
        id: 4,
        title: "The Classical Dance Forms of South India",
        excerpt: "Dive into the graceful world of Bharatanatyam, Kuchipudi, and other classical dance forms that preserve ancient Indian traditions.",
        content: `South India has been the cradle of classical dance forms that have preserved ancient Indian traditions for over a thousand years. These dance forms are not mere entertainment; they are spiritual practices that combine devotion, storytelling, and artistic excellence.

        Bharatanatyam, originating from Tamil Nadu, is perhaps the most recognized classical dance form. Its precise movements, expressive eyes, and intricate footwork tell stories from Hindu mythology. The dance follows a traditional structure called Margam, which takes the audience on a spiritual journey from earthly to divine.

        Kuchipudi from Andhra Pradesh combines dance with drama, often featuring male dancers in female roles. The famous Tarangam performance, where dancers perform on a brass plate while balancing a pot of water on their head, showcases the incredible skill and balance required in this art form.

        Kathakali from Kerala is a highly stylized dance-drama known for its elaborate makeup, costumes, and facial expressions. Each color and design in the makeup has specific meanings, and the training for Kathakali can take decades to master.

        Mohiniyattam, also from Kerala, is characterized by its graceful, swaying movements that mimic the palm trees of the region. The dance form celebrates feminine grace and is often performed solo by women dancers.

        These classical dance forms serve as living museums of Indian culture, preserving ancient stories, music, and spiritual practices. They continue to evolve while maintaining their traditional essence, inspiring new generations of artists and audiences worldwide.`,
        category: "Culture",
        author: "Meera Nair",
        date: "2024-11-28",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    },
    {
        id: 5,
        title: "Exploring the Backwaters of Kerala",
        excerpt: "Navigate through the serene waterways of God's Own Country and discover the unique ecosystem of Kerala's backwaters.",
        content: `Kerala's backwaters represent one of India's most unique and tranquil travel experiences. This network of interconnected canals, rivers, and lakes stretches across the coastal plains, creating an ecosystem that supports diverse flora, fauna, and traditional ways of life.

        The backwater journey typically begins in Alleppey or Kumarakom, where traditional houseboats called 'kettuvallams' await travelers. These boats, originally used for transporting rice and spices, have been converted into floating accommodations that offer modern comforts while maintaining their traditional charm.

        As you glide through the narrow canals, you'll witness a way of life that has remained unchanged for centuries. Fishermen cast their nets in the early morning mist, women wash clothes on the banks, and children wave from small villages nestled among coconut palms.

        The backwaters are home to numerous bird species, including kingfishers, herons, and cormorants. The Kumarakom Bird Sanctuary, located on the banks of Vembanad Lake, is a paradise for birdwatchers, especially during the migratory season.

        The culinary experience on the backwaters is exceptional, with fresh fish, prawns, and crabs prepared in traditional Kerala style using coconut, curry leaves, and local spices. The meals are often cooked on board using fresh ingredients sourced from local markets.

        The backwaters also play a crucial role in Kerala's economy and ecology. They serve as natural drainage systems during monsoons and support agriculture, fishing, and tourism. The traditional farming methods, including the below-sea-level cultivation in Kuttanad, showcase the harmonious relationship between humans and nature.

        A journey through Kerala's backwaters is more than just a scenic boat ride; it's an immersion into a sustainable way of life that has thrived for generations.`,
        category: "Travel",
        author: "Rajesh Kumar",
        date: "2024-11-20",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&h=600&fit=crop"
    },
    {
        id: 6,
        title: "The Art of Indian Handicrafts",
        excerpt: "Discover the intricate craftsmanship and cultural significance of India's diverse handicraft traditions.",
        content: `Indian handicrafts represent thousands of years of artistic tradition, where skilled artisans have passed down techniques through generations, creating objects of beauty and utility that reflect the soul of Indian culture.

        Madhubani paintings from Bihar showcase the artistic brilliance of rural women who transform mud walls and paper into vibrant canvases depicting mythological stories, nature, and daily life. Using natural pigments and traditional motifs, these paintings have gained international recognition while remaining rooted in their cultural origins.

        The intricate woodwork of Kashmir, particularly the walnut wood carvings, demonstrates the exceptional skill of Kashmiri craftsmen. From decorative panels to furniture, each piece tells a story through its detailed patterns and motifs inspired by Mughal and Persian designs.

        Rajasthan's blue pottery, with its distinctive cobalt blue dye and white base, represents a unique ceramic tradition brought to India by Mongol artisans. The pottery, made without clay and using a special mixture of quartz, glass, and multani mitti, creates pieces that are both beautiful and durable.

        The silk weaving traditions of Varanasi produce some of the world's finest textiles. The Banarasi silk sarees, with their gold and silver brocade work, are considered essential for Indian weddings and special occasions. Each saree can take weeks or months to complete, depending on the complexity of the design.

        Channapatna toys from Karnataka, made from ivory wood and colored with natural dyes, represent India's commitment to eco-friendly toy making. These toys, known for their smooth finish and vibrant colors, have been delighting children for generations.

        The metal craft traditions include the bronze sculptures of Tamil Nadu, the brass work of Moradabad, and the silver jewelry of Rajasthan. Each region has developed its unique techniques and styles, creating a diverse tapestry of metalwork traditions.

        These handicrafts are not just decorative objects; they are repositories of cultural knowledge, sustainable practices, and artistic excellence that continue to inspire contemporary designers and artists worldwide.`,
        category: "Art",
        author: "Kavita Desai",
        date: "2024-11-15",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    }
];

// Sample shared experiences
let sharedExperiences = [
    {
        id: 1,
        title: "Sunrise at Kanyakumari",
        location: "Tamil Nadu",
        text: "Watching the sunrise at the southernmost tip of India was magical. The confluence of three oceans and the Vivekananda Rock Memorial created a spiritual atmosphere I'll never forget.",
        author: "Amit Patel",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop",
        date: "2024-12-01"
    },
    {
        id: 2,
        title: "Festival of Colors in Mathura",
        location: "Uttar Pradesh",
        text: "Celebrating Holi in Krishna's birthplace was an incredible experience. The energy, colors, and devotion of the people made it unforgettable.",
        author: "Sneha Gupta",
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=300&fit=crop",
        date: "2024-11-25"
    },
    {
        id: 3,
        title: "Trekking in the Western Ghats",
        location: "Maharashtra",
        text: "The monsoon trek through Sahyadri mountains revealed India's incredible biodiversity. Every step was a discovery of new flora and fauna.",
        author: "Rohit Sharma",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        date: "2024-11-18"
    }
];

// DOM Elements
const tabBtns = document.querySelectorAll('.tab-btn');
const blogSection = document.getElementById('blog-section');
const experienceSection = document.getElementById('experience-section');
const blogGrid = document.getElementById('blog-grid');
const experiencesGrid = document.getElementById('experiences-grid');
const experienceForm = document.getElementById('experience-form');
const modal = document.getElementById('blog-modal');
const successMessage = document.getElementById('success-message');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderBlogPosts();
    renderSharedExperiences();
    setupEventListeners();
    showBlogSection(); // Show blog section by default
});

// Tab switching functionality
function setupEventListeners() {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;
            switchTab(target);
        });
    });

    // Experience form submission
    experienceForm.addEventListener('submit', handleExperienceSubmission);

    // Modal close functionality
    document.getElementById('close-modal').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Image upload functionality
    setupImageUpload();

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function switchTab(target) {
    // Update tab buttons
    tabBtns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-tab="${target}"]`).classList.add('active');

    // Update sections
    if (target === 'blog') {
        showBlogSection();
    } else {
        showExperienceSection();
    }
}

function showBlogSection() {
    blogSection.classList.add('active');
    experienceSection.classList.remove('active');
}

function showExperienceSection() {
    experienceSection.classList.add('active');
    blogSection.classList.remove('active');
}

// Render blog posts
function renderBlogPosts() {
    blogGrid.innerHTML = '';
    
    blogPosts.forEach(post => {
        const blogCard = createBlogCard(post);
        blogGrid.appendChild(blogCard);
    });
}

function createBlogCard(post) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.onclick = () => openBlogModal(post);
    
    card.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="blog-image">
        <div class="blog-content">
            <span class="blog-category">${post.category}</span>
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <div class="blog-meta">
                <span>By ${post.author}</span>
                <span>${formatDate(post.date)}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Render shared experiences
function renderSharedExperiences() {
    experiencesGrid.innerHTML = '';
    
    sharedExperiences.forEach(experience => {
        const experienceCard = createExperienceCard(experience);
        experiencesGrid.appendChild(experienceCard);
    });
}

function createExperienceCard(experience) {
    const card = document.createElement('div');
    card.className = 'experience-card';
    
    card.innerHTML = `
        <img src="${experience.image}" alt="${experience.title}" class="experience-image">
        <div class="experience-content">
            <span class="experience-location">${experience.location}</span>
            <h3 class="experience-title">${experience.title}</h3>
            <p class="experience-text">${experience.text}</p>
            <div class="experience-author">
                <div class="author-avatar">${experience.author.charAt(0)}</div>
                <span>${experience.author} • ${formatDate(experience.date)}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Modal functionality
function openBlogModal(post) {
    document.getElementById('modal-image').src = post.image;
    document.getElementById('modal-category').textContent = post.category;
    document.getElementById('modal-title').textContent = post.title;
    document.getElementById('modal-meta').textContent = `By ${post.author} • ${formatDate(post.date)}`;
    document.getElementById('modal-text').innerHTML = post.content.replace(/\n\s+/g, '</p><p>');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Experience form handling
function handleExperienceSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const experience = {
        id: Date.now(),
        title: formData.get('title'),
        location: formData.get('location'),
        text: formData.get('experience'),
        author: formData.get('name'),
        image: document.getElementById('image-preview').src || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        date: new Date().toISOString().split('T')[0]
    };
    
    // Validate required fields
    if (!experience.title || !experience.location || !experience.text || !experience.author) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Show loading state
    const submitBtn = document.getElementById('submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="spinner"></span>Sharing your experience...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Add to shared experiences
        sharedExperiences.unshift(experience);
        renderSharedExperiences();
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        experienceForm.reset();
        resetImageUpload();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Switch to blog tab to show the new experience
        setTimeout(() => {
            switchTab('blog');
        }, 2000);
    }, 1500);
}

function showSuccessMessage() {
    successMessage.classList.add('show');
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
}

// Image upload functionality
function setupImageUpload() {
    const uploadArea = document.getElementById('image-upload-area');
    const fileInput = document.getElementById('image-input');
    const imagePreview = document.getElementById('image-preview');
    const previewImage = document.getElementById('preview-image');
    const removeImageBtn = document.getElementById('remove-image');
    
    uploadArea.addEventListener('click', () => fileInput.click());
    
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleImageUpload(files[0]);
        }
    });
    
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleImageUpload(e.target.files[0]);
        }
    });
    
    removeImageBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resetImageUpload();
    });
}

function handleImageUpload(file) {
    if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file.');
        return;
    }
    
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('Image size should be less than 5MB.');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        document.getElementById('preview-image').src = e.target.result;
        document.getElementById('image-preview').style.display = 'block';
        document.getElementById('upload-text').textContent = 'Image uploaded successfully!';
    };
    reader.readAsDataURL(file);
}

function resetImageUpload() {
    document.getElementById('image-input').value = '';
    document.getElementById('image-preview').style.display = 'none';
    document.getElementById('upload-text').textContent = 'Click to upload or drag and drop';
    document.getElementById('preview-image').src = '';
}

// Utility functions
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
}

// Search functionality (optional enhancement)
function searchBlogPosts(query) {
    const filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase()) ||
        post.category.toLowerCase().includes(query.toLowerCase())
    );
    
    blogGrid.innerHTML = '';
    filteredPosts.forEach(post => {
        const blogCard = createBlogCard(post);
        blogGrid.appendChild(blogCard);
    });
}

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Smooth scrolling for navigation links
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

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Initialize page animations
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});