// Enhanced Chatbot Functionality
// This script adds custom behavior to the Chatbase chatbot widget

document.addEventListener('DOMContentLoaded', function() {
    // Wait for chatbot to load
    setTimeout(initializeChatbotEnhancements, 2000);
});

function initializeChatbotEnhancements() {
    // Add welcome message functionality
    addWelcomeMessage();
    
    // Monitor chatbot visibility changes
    observeChatbotVisibility();
    
    // Add custom styling overrides
    applyChatbotStyling();
}

function addWelcomeMessage() {
    const chatbotContainer = document.querySelector('[data-chatbase-id]') || 
                           document.querySelector('.chatbase-iframe-container') ||
                           document.querySelector('iframe[src*="chatbase"]')?.parentElement;
    
    if (chatbotContainer) {
        // Create welcome message
        const welcomeMsg = document.createElement('div');
        welcomeMsg.className = 'chatbot-welcome';
        welcomeMsg.innerHTML = '👋 Hi! I\'m here to help you explore India. Ask me anything!';
        
        // Position relative to chatbot
        chatbotContainer.style.position = 'relative';
        chatbotContainer.appendChild(welcomeMsg);
        
        // Auto-hide welcome message after 5 seconds
        setTimeout(() => {
            welcomeMsg.style.opacity = '0';
            setTimeout(() => welcomeMsg.remove(), 300);
        }, 5000);
        
        // Hide on first interaction
        const observer = new MutationObserver(() => {
            const chatWindow = document.querySelector('.chatbase-iframe');
            if (chatWindow && chatWindow.style.display !== 'none') {
                welcomeMsg.style.opacity = '0';
                setTimeout(() => welcomeMsg.remove(), 300);
                observer.disconnect();
            }
        });
        
        observer.observe(document.body, { 
            childList: true, 
            subtree: true, 
            attributes: true 
        });
    }
}

function observeChatbotVisibility() {
    // Monitor when chatbot opens/closes to adjust other elements if needed
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' || mutation.type === 'childList') {
                const chatbotIframe = document.querySelector('.chatbase-iframe');
                const backToTopBtn = document.getElementById('backToTopBtn');
                
                if (chatbotIframe && backToTopBtn) {
                    const isOpen = chatbotIframe.style.display !== 'none' && 
                                  chatbotIframe.offsetHeight > 100;
                    
                    // Adjust back to top button position if needed
                    if (isOpen) {
                        backToTopBtn.style.marginRight = '10px';
                    } else {
                        backToTopBtn.style.marginRight = '0';
                    }
                }
            }
        });
    });
    
    observer.observe(document.body, { 
        childList: true, 
        subtree: true, 
        attributes: true,
        attributeFilter: ['style', 'class']
    });
}

function applyChatbotStyling() {
    // Apply additional custom styling that might not work with CSS alone
    const checkAndApplyStyles = () => {
        // Find chatbot elements
        const chatbotButton = document.querySelector('[data-chatbase-id] button') ||
                            document.querySelector('.chatbase-button');
        const chatbotIframe = document.querySelector('iframe[src*="chatbase"]');
        
        if (chatbotButton) {
            // Ensure proper z-index and positioning
            chatbotButton.style.zIndex = '999';
            chatbotButton.style.position = 'fixed';
            chatbotButton.style.bottom = '20px';
            chatbotButton.style.right = '20px';
            
            // Add custom classes for better styling control
            chatbotButton.classList.add('enhanced-chatbot-button');
        }
        
        if (chatbotIframe) {
            chatbotIframe.style.borderRadius = '20px';
            chatbotIframe.style.border = 'none';
            chatbotIframe.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
        }
    };
    
    // Apply styles immediately and on interval to catch dynamic changes
    checkAndApplyStyles();
    setInterval(checkAndApplyStyles, 1000);
}

// Add custom CSS for dynamic elements
function injectCustomStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Additional dynamic styles for chatbot */
        .enhanced-chatbot-button {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            backdrop-filter: blur(10px) !important;
        }
        
        .enhanced-chatbot-button:hover {
            transform: scale(1.05) translateY(-2px) !important;
        }
        
        /* Ensure chatbot doesn't interfere with other elements */
        .fixed-buttons-container {
            pointer-events: none;
        }
        
        .fixed-buttons-container > * {
            pointer-events: auto;
        }
        
        /* Responsive adjustments */
        @media (max-width: 480px) {
            .chatbot-welcome {
                font-size: 12px !important;
                max-width: 180px !important;
                bottom: 65px !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize custom styles
injectCustomStyles();

// Handle mobile responsiveness
function handleMobileResponsiveness() {
    const checkMobile = () => {
        const isMobile = window.innerWidth <= 768;
        const chatbotContainer = document.querySelector('[data-chatbase-id]') ||
                               document.querySelector('.chatbase-iframe-container');
        
        if (chatbotContainer) {
            if (isMobile) {
                chatbotContainer.style.left = '15px';
                chatbotContainer.style.right = '15px';
                chatbotContainer.style.bottom = '15px';
                chatbotContainer.style.width = 'calc(100% - 30px)';
                chatbotContainer.style.maxWidth = '350px';
            } else {
                chatbotContainer.style.left = 'auto';
                chatbotContainer.style.right = '20px';
                chatbotContainer.style.bottom = '20px';
                chatbotContainer.style.width = 'auto';
                chatbotContainer.style.maxWidth = 'none';
            }
        }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
}

// Initialize mobile responsiveness
handleMobileResponsiveness();

// Chatbot analytics and user experience enhancements
function initializeChatbotAnalytics() {
    // Track chatbot interactions (you can extend this for analytics)
    document.addEventListener('click', function(e) {
        if (e.target.closest('[data-chatbase-id]') || 
            e.target.closest('.chatbase-button') ||
            e.target.closest('.enhanced-chatbot-button')) {
            console.log('Chatbot interaction detected');
            // Add your analytics tracking here
        }
    });
}

// Initialize analytics
initializeChatbotAnalytics();
