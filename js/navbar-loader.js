/**
 * DeshDarshan Navbar Loader
 * Dynamically loads the appropriate navbar based on page location
 */

// Function to determine if we're on the homepage or a subpage
function isHomepage() {
    const path = window.location.pathname;
    return path.endsWith('index.html') || path.endsWith('/') || path.split('/').pop() === '';
}

// Function to load navbar
async function loadNavbar() {
    try {
        const navbarContainer = document.getElementById('navbar-container');
        if (!navbarContainer) {
            console.error('Navbar container not found');
            return;
        }

        // Use smart navbar creation instead of separate files
        createSmartNavbar();
        
    } catch (error) {
        console.error('Error loading navbar:', error);
        // Fallback: create a basic navbar structure
        createSmartNavbar();
    }
}

// Smart navbar creation with automatic path detection
function createSmartNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    const isHome = isHomepage();
    const pathPrefix = isHome ? '' : '../';
    
    navbarContainer.innerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-logo">
                    <h2><a href="${pathPrefix}index.html">Desh Darshan</a></h2>
                </div>
                <ul class="nav-menu">
                    <li><a href="${pathPrefix}pages/explore.html">Explore India</a></li>
                    <li><a href="${pathPrefix}pages/festival-calendar.html">Festival Calendar</a></li>
                    <li><a href="${pathPrefix}pages/feedback.html">Feedback</a></li>
                    <li><a href="${pathPrefix}pages/about-us.html">About Us</a></li>
                    <li><a href="${pathPrefix}pages/contact-us.html">Contact Us</a></li>
                </ul>
                <div class="nav-buttons">
                    <a href="${pathPrefix}pages/login.html" class="btn-login">
                        <span>Login</span>
                        <i class="fas fa-sign-in-alt"></i>
                    </a>
                    <a href="${pathPrefix}pages/signup.html" class="btn-signup">
                        <span>Signup</span>
                        <i class="fas fa-user-plus"></i>
                    </a>
                </div>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    `;
    
    initializeNavbar();
}

// Initialize navbar functionality (hamburger menu, etc.)
function initializeNavbar() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navbar && navbar.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// Load navbar when DOM is ready
document.addEventListener('DOMContentLoaded', loadNavbar);
