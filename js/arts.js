// Enhanced JavaScript for Arts page with video handling and animations
document.addEventListener('DOMContentLoaded', function() {
    console.log('Arts page loaded successfully');
    
    // Initialize all components
    initializeArtItems();
    initializeNavigation();
    initializeStatsAnimation();
    initializeScrollEffects();
    initializePerformanceOptimizations();
});

/**
 * Initialize art items with video hover functionality
 */
function initializeArtItems() {
    const artItems = document.querySelectorAll('.art-item');
    
    artItems.forEach((item, index) => {
        const video = item.querySelector('video');
        const spinner = item.querySelector('.loading-spinner');
        const img = item.querySelector('img');
        const artType = item.getAttribute('data-art-type');
        
        // Add unique identifiers
        item.setAttribute('data-art-index', index);
        
        // Mouse enter event - start video and animations
        item.addEventListener('mouseenter', function() {
            handleArtItemEnter(item, video, spinner, artType);
        });
        
        // Mouse leave event - pause video and reset
        item.addEventListener('mouseleave', function() {
            handleArtItemLeave(item, video, spinner);
        });
        
        // Video event listeners
        if (video) {
            setupVideoEventListeners(video, spinner, item, artType);
        }
        
        // Image error handling with fallback
        if (img) {
            img.addEventListener('error', function() {
                console.warn(`Image failed to load for art item: ${artType}`);
                item.classList.add('image-error');
                // Add a gradient background as fallback
                item.style.background = getArtTypeGradient(artType);
            });
        }
        
        // Keyboard accessibility
        setupKeyboardAccessibility(item);
        
        // Touch device support
        setupTouchSupport(item, video, spinner);
    });
}

/**
 * Handle mouse enter events for art items
 */
function handleArtItemEnter(item, video, spinner, artType) {
    // Add active class for additional styling
    item.classList.add('active');
    
    if (!video) return;
    
    // Show loading spinner if needed
    if (video.readyState < 4) {
        showSpinner(spinner);
        video.load();
    }
    
    // Attempt to play video with error handling
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log(`Video started playing for: ${artType}`);
                hideSpinner(spinner);
                triggerArtTypeAnimation(item, artType);
            })
            .catch(error => {
                console.warn('Video play failed:', error);
                hideSpinner(spinner);
                // Show alternative animation or keep static image
                triggerFallbackAnimation(item, artType);
            });
    }
}

/**
 * Handle mouse leave events for art items
 */
function handleArtItemLeave(item, video, spinner) {
    // Remove active class
    item.classList.remove('active');
    
    if (!video) return;
    
    // Pause video and reset
    video.pause();
    video.currentTime = 0;
    
    // Hide spinner
    hideSpinner(spinner);
}

/**
 * Setup video event listeners with art-specific handling
 */
function setupVideoEventListeners(video, spinner, item, artType) {
    // Video ready to play
    video.addEventListener('canplay', function() {
        hideSpinner(spinner);
    });
    
    // Video fully loaded
    video.addEventListener('canplaythrough', function() {
        hideSpinner(spinner);
    });
    
    // Video loading starts
    video.addEventListener('loadstart', function() {
        if (item.matches(':hover')) {
            showSpinner(spinner);
        }
    });
    
    // Video metadata loaded
    video.addEventListener('loadedmetadata', function() {
        console.log(`Video metadata loaded for: ${artType}`);
    });
    
    // Video error handling with art-specific fallbacks
    video.addEventListener('error', function(e) {
        console.error(`Video error for ${artType}:`, e);
        hideSpinner(spinner);
        
        // Add error class for styling
        item.classList.add('video-error');
        
        // Implement art-specific fallback
        implementVideoFallback(item, artType);
    });
    
    // Video ended event
    video.addEventListener('ended', function() {
        if (item.matches(':hover')) {
            video.currentTime = 0;
            video.play();
        }
    });
}

/**
 * Setup keyboard accessibility for art items
 */
function setupKeyboardAccessibility(item) {
    const link = item.querySelector('.art-overlay a');
    
    if (link) {
        // Focus events
        link.addEventListener('focus', function() {
            item.classList.add('keyboard-focused');
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
        
        link.addEventListener('blur', function() {
            item.classList.remove('keyboard-focused');
        });
        
        // Keyboard navigation
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                link.click();
            }
        });
    }
}

/**
 * Setup touch support for mobile devices
 */
function setupTouchSupport(item, video, spinner) {
    let touchTimeout;
    
    item.addEventListener('touchstart', function(e) {
        // Prevent default to avoid mouse events
        e.preventDefault();
        
        // Clear any existing timeout
        clearTimeout(touchTimeout);
        
        // Trigger hover-like behavior
        handleArtItemEnter(item, video, spinner, item.getAttribute('data-art-type'));
        
        // Auto-hide after 3 seconds on mobile
        touchTimeout = setTimeout(() => {
            handleArtItemLeave(item, video, spinner);
        }, 3000);
    });
    
    item.addEventListener('touchend', function(e) {
        // Handle tap to navigate
        const link = item.querySelector('.art-overlay a');
        if (link && e.target.closest('.art-overlay')) {
            clearTimeout(touchTimeout);
            window.location.href = link.href;
        }
    });
}

/**
 * Trigger art-type specific animations
 */
function triggerArtTypeAnimation(item, artType) {
    const pattern = item.querySelector('.art-pattern');
    
    switch(artType) {
        case 'sculptures':
            // Stone carving effect
            if (pattern) {
                pattern.style.animation = 'stoneCarving 2s ease-in-out';
            }
            break;
        case 'textiles':
            // Weaving effect
            if (pattern) {
                pattern.style.animation = 'weavingPattern 3s ease-in-out';
            }
            break;
        case 'handicrafts':
            // Crafting motion effect
            if (pattern) {
                pattern.style.animation = 'craftingMotion 2.5s ease-in-out';
            }
            break;
        case 'murals':
            // Painting brush effect
            if (pattern) {
                pattern.style.animation = 'paintingStrokes 4s ease-in-out';
            }
            break;
    }
}

/**
 * Trigger fallback animation when video fails
 */
function triggerFallbackAnimation(item, artType) {
    const img = item.querySelector('img');
    
    if (img) {
        // Add CSS class for fallback animation
        img.classList.add(`fallback-${artType}`);
        
        // Remove class after animation
        setTimeout(() => {
            img.classList.remove(`fallback-${artType}`);
        }, 2000);
    }
}

/**
 * Get art type specific gradient for fallbacks
 */
function getArtTypeGradient(artType) {
    const gradients = {
        sculptures: 'linear-gradient(135deg, #8B4513, #A0522D)',
        textiles: 'linear-gradient(135deg, #CD853F, #DEB887)',
        handicrafts: 'linear-gradient(135deg, #D2691E, #F4A460)',
        murals: 'linear-gradient(135deg, #8B4513, #CD853F)'
    };
    
    return gradients[artType] || 'linear-gradient(135deg, #8B4513, #CD853F)';
}

/**
 * Implement video fallback strategies
 */
function implementVideoFallback(item, artType) {
    // Could implement different fallback strategies:
    // 1. Show animated CSS background
    // 2. Load alternative image
    // 3. Show loading message
    
    const overlay = item.querySelector('.art-overlay');
    if (overlay) {
        // Add a subtle message about video unavailability
        const fallbackMsg = document.createElement('div');
        fallbackMsg.className = 'video-fallback-msg';
        fallbackMsg.textContent = 'Interactive preview loading...';
        fallbackMsg.style.cssText = `
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(0,0,0,0.7);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 15px;
            font-size: 0.8rem;
            opacity: 0.7;
        `;
        overlay.appendChild(fallbackMsg);
        
        // Remove message after 3 seconds
        setTimeout(() => {
            fallbackMsg.remove();
        }, 3000);
    }
}

/**
 * Show/Hide spinner functions
 */
function showSpinner(spinner) {
    if (spinner) {
        spinner.style.opacity = '1';
    }
}

function hideSpinner(spinner) {
    if (spinner) {
        spinner.style.opacity = '0';
    }
}

/**
 * Initialize navigation functionality
 */
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            toggleMobileMenu(hamburger, navMenu);
        });
        
        // Close menu on nav link clicks (mobile)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    closeMobileMenu(hamburger, navMenu);
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu(hamburger, navMenu);
            }
        });
    }
}

/**
 * Mobile menu functions
 */
function toggleMobileMenu(hamburger, navMenu) {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

function closeMobileMenu(hamburger, navMenu) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * Initialize stats counter animation
 */
function initializeStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.arts-stats');
    
    if (!statsSection || statNumbers.length === 0) return;
    
    // Create intersection observer for stats
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

/**
 * Animate statistics counters
 */
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format numbers with commas for readability
            stat.textContent = Math.floor(current).toLocaleString();
        }, 16);
    });
}

/**
 * Initialize scroll effects
 */
function initializeScrollEffects() {
    // Smooth scrolling for hero scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const artsSection = document.querySelector('.arts-culture');
            if (artsSection) {
                artsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Parallax effect for hero section
    window.addEventListener('scroll', throttle(handleParallaxScroll, 16));
}

/**
 * Handle parallax scrolling effects
 */
function handleParallaxScroll() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.arts-hero');
    
    if (hero && scrolled < window.innerHeight) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
}

/**
 * Initialize performance optimizations
 */
function initializePerformanceOptimizations() {
    // Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target.querySelector('video');
                    if (video && video.preload === 'none') {
                        video.preload = 'metadata';
                    }
                    
                    // Add visible class for animations
                    entry.target.classList.add('in-viewport');
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        document.querySelectorAll('.art-item').forEach(item => {
            observer.observe(item);
        });
    }
    
    // Preload critical videos on fast connections
    if ('connection' in navigator && navigator.connection.effectiveType === '4g') {
        setTimeout(() => {
            const videos = document.querySelectorAll('.art-item video');
            videos.forEach((video, index) => {
                if (index < 2) { // Preload first 2 videos
                    video.preload = 'metadata';
                }
            });
        }, 3000);
    }
}

/**
 * Utility functions
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Handle window resize events
 */
window.addEventListener('resize', debounce(function() {
    // Close mobile menu on desktop resize
    if (window.innerWidth > 768) {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            closeMobileMenu(hamburger, navMenu);
        }
    }
    
    // Recalculate layouts if needed
    const artItems = document.querySelectorAll('.art-item');
    artItems.forEach(item => {
        // Reset any transform values on resize
        item.style.transform = '';
    });
}, 250));

/**
 * Handle page visibility changes
 */
document.addEventListener('visibilitychange', function() {
    const videos = document.querySelectorAll('.art-item video');
    
    if (document.hidden) {
        // Page hidden - pause all videos
        videos.forEach(video => {
            if (!video.paused) {
                video.pause();
                video.setAttribute('data-was-playing', 'true');
            }
        });
    } else {
        // Page visible - resume videos if they were playing
        videos.forEach(video => {
            if (video.getAttribute('data-was-playing') === 'true') {
                video.removeAttribute('data-was-playing');
                const item = video.closest('.art-item');
                if (item && item.matches(':hover')) {
                    video.play();
                }
            }
        });
    }
});

/**
 * Error handling
 */
window.addEventListener('error', function(e) {
    console.error('Global error on arts page:', e.error);
    // Could implement error reporting here
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection on arts page:', e.reason);
    e.preventDefault();
});

// Add custom CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes stoneCarving {
        0% { opacity: 0; transform: scale(0.8); }
        50% { opacity: 0.2; transform: scale(1.1); }
        100% { opacity: 0.1; transform: scale(1); }
    }
    
    @keyframes weavingPattern {
        0% { opacity: 0; background-position: 0% 0%; }
        50% { opacity: 0.2; background-position: 50% 50%; }
        100% { opacity: 0.1; background-position: 100% 100%; }
    }
    
    @keyframes craftingMotion {
        0% { opacity: 0; transform: rotate(0deg); }
        50% { opacity: 0.2; transform: rotate(180deg); }
        100% { opacity: 0.1; transform: rotate(360deg); }
    }
    
    @keyframes paintingStrokes {
        0% { opacity: 0; background-size: 10px 10px; }
        25% { opacity: 0.1; background-size: 20px 20px; }
        75% { opacity: 0.2; background-size: 40px 40px; }
        100% { opacity: 0.1; background-size: 30px 30px; }
    }
    
    .fallback-sculptures { filter: sepia(0.3) contrast(1.2); }
    .fallback-textiles { filter: saturate(1.5) hue-rotate(15deg); }
    .fallback-handicrafts { filter: brightness(1.1) contrast(1.1); }
    .fallback-murals { filter: sepia(0.2) saturate(1.3); }
    
    .in-viewport {
        animation: fadeInUp 0.6s ease-out;
    }
    
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);