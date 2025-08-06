// Enhanced JavaScript for video handling and smooth interactions
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dance page loaded successfully');
    
    // Initialize all dance items
    initializeDanceItems();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize performance optimizations
    initializePerformanceOptimizations();
});

/**
 * Initialize dance items with video hover functionality
 */
function initializeDanceItems() {
    const danceItems = document.querySelectorAll('.dance-item');
    
    danceItems.forEach((item, index) => {
        const video = item.querySelector('video');
        const spinner = item.querySelector('.loading-spinner');
        const img = item.querySelector('img');
        
        // Add data attributes for tracking
        item.setAttribute('data-dance-index', index);
        
        // Mouse enter event - start video loading and playing
        item.addEventListener('mouseenter', function() {
            handleMouseEnter(item, video, spinner);
        });
        
        // Mouse leave event - pause video and reset
        item.addEventListener('mouseleave', function() {
            handleMouseLeave(item, video, spinner);
        });
        
        // Video event listeners
        if (video) {
            setupVideoEventListeners(video, spinner, item);
        }
        
        // Image error handling
        if (img) {
            img.addEventListener('error', function() {
                console.warn(`Image failed to load for dance item ${index}`);
                // You could add a placeholder image here
            });
        }
        
        // Add keyboard accessibility
        setupKeyboardAccessibility(item);
    });
}

/**
 * Handle mouse enter events
 */
function handleMouseEnter(item, video, spinner) {
    if (!video) return;
    
    // Show loading spinner if video isn't ready
    if (video.readyState < 4) {
        showSpinner(spinner);
        // Trigger video loading
        video.load();
    }
    
    // Attempt to play video
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log(`Video started playing for: ${item.querySelector('h3').textContent}`);
                hideSpinner(spinner);
            })
            .catch(error => {
                console.warn('Video play failed:', error);
                hideSpinner(spinner);
                // Fallback: could show a static animation or keep image
            });
    }
}

/**
 * Handle mouse leave events
 */
function handleMouseLeave(item, video, spinner) {
    if (!video) return;
    
    // Pause video and reset to beginning
    video.pause();
    video.currentTime = 0;
    
    // Hide spinner
    hideSpinner(spinner);
}

/**
 * Setup video event listeners
 */
function setupVideoEventListeners(video, spinner, item) {
    // Video can start playing
    video.addEventListener('canplay', function() {
        hideSpinner(spinner);
    });
    
    // Video is fully loaded
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
        console.log(`Video metadata loaded for: ${item.querySelector('h3').textContent}`);
    });
    
    // Video error handling
    video.addEventListener('error', function(e) {
        console.error('Video error:', e);
        hideSpinner(spinner);
        
        // You could implement fallback behavior here
        // For example, show a "Video unavailable" message
    });
    
    // Video ended (shouldn't happen with loop, but just in case)
    video.addEventListener('ended', function() {
        if (item.matches(':hover')) {
            video.currentTime = 0;
            video.play();
        }
    });
}

/**
 * Setup keyboard accessibility
 */
function setupKeyboardAccessibility(item) {
    const link = item.querySelector('.dance-overlay a');
    
    if (link) {
        link.addEventListener('focus', function() {
            item.classList.add('keyboard-focused');
        });
        
        link.addEventListener('blur', function() {
            item.classList.remove('keyboard-focused');
        });
        
        // Enter or space key to activate
        link.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                link.click();
            }
        });
    }
}

/**
 * Show loading spinner
 */
function showSpinner(spinner) {
    if (spinner) {
        spinner.style.opacity = '1';
    }
}

/**
 * Hide loading spinner
 */
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
        
        // Close menu when clicking on nav links (mobile)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    closeMobileMenu(hamburger, navMenu);
                }
            });
        });
        
        // Close menu when clicking outside (mobile)
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu(hamburger, navMenu);
            }
        });
    }
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu(hamburger, navMenu) {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

/**
 * Close mobile menu
 */
function closeMobileMenu(hamburger, navMenu) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * Initialize performance optimizations
 */
function initializePerformanceOptimizations() {
    // Intersection Observer for lazy loading optimization
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target.querySelector('video');
                    if (video && video.preload === 'none') {
                        video.preload = 'metadata';
                    }
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        document.querySelectorAll('.dance-item').forEach(item => {
            observer.observe(item);
        });
    }
    
    // Preload critical videos on fast connections
    if ('connection' in navigator && navigator.connection.effectiveType === '4g') {
        setTimeout(() => {
            const videos = document.querySelectorAll('.dance-item video');
            videos.forEach((video, index) => {
                if (index < 3) { // Preload first 3 videos only
                    video.preload = 'metadata';
                }
            });
        }, 2000);
    }
}

/**
 * Utility function to debounce rapid events
 */
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
}, 250));

/**
 * Handle page visibility changes (pause videos when tab is not active)
 */
document.addEventListener('visibilitychange', function() {
    const videos = document.querySelectorAll('.dance-item video');
    
    if (document.hidden) {
        // Page is hidden, pause all videos
        videos.forEach(video => {
            if (!video.paused) {
                video.pause();
                video.setAttribute('data-was-playing', 'true');
            }
        });
    } else {
        // Page is visible, resume videos that were playing
        videos.forEach(video => {
            if (video.getAttribute('data-was-playing') === 'true') {
                video.removeAttribute('data-was-playing');
                const item = video.closest('.dance-item');
                if (item && item.matches(':hover')) {
                    video.play();
                }
            }
        });
    }
});

/**
 * Error handling for global errors
 */
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
    // You could implement error reporting here
});

/**
 * Handle unhandled promise rejections
 */
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // Prevent the default behavior (logging to console)
    e.preventDefault();
});