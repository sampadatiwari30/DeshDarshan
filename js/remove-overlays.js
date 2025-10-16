// JavaScript to remove "Namaste 🙏" placeholder overlays
(function() {
    'use strict';
    
    // Function to remove overlays containing "Namaste" text
    function removeNamasteOverlays() {
        // Find all text nodes containing "Namaste"
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: function(node) {
                    if (node.textContent.includes('Namaste') || node.textContent.includes('🙏')) {
                        return NodeFilter.FILTER_ACCEPT;
                    }
                    return NodeFilter.FILTER_REJECT;
                }
            }
        );
        
        const namasteNodes = [];
        let node;
        while (node = walker.nextNode()) {
            namasteNodes.push(node);
        }
        
        // Remove the parent elements of these text nodes
        namasteNodes.forEach(textNode => {
            const parentElement = textNode.parentElement;
            if (parentElement && 
                (parentElement.textContent.trim() === 'Namaste 🙏' || 
                 parentElement.textContent.includes('Namaste'))) {
                console.log('Removing overlay element:', parentElement);
                parentElement.remove();
            }
        });
        
        // Also remove elements with specific classes that might be overlays
        const overlaySelectors = [
            '[data-content*="Namaste"]',
            '[title*="Namaste"]',
            '[alt*="Namaste"]',
            '.placeholder-overlay',
            '.debug-overlay',
            '.temp-overlay',
            '.namaste-overlay'
        ];
        
        overlaySelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                console.log('Removing overlay with selector:', selector, element);
                element.remove();
            });
        });
        
        // Remove any absolutely positioned elements that might be debug overlays
        const absoluteElements = document.querySelectorAll('[style*="position: absolute"], [style*="position: fixed"]');
        absoluteElements.forEach(element => {
            if (element.textContent.includes('Namaste') || element.textContent.includes('🙏')) {
                console.log('Removing positioned overlay:', element);
                element.remove();
            }
        });
    }
    
    // Function to clean pseudo-elements that might contain placeholder text
    function cleanPseudoElements() {
        // Create a style element to override pseudo-elements
        const style = document.createElement('style');
        style.id = 'overlay-fix-styles';
        style.textContent = `
            /* Hide pseudo-elements that might contain placeholder text */
            *::before,
            *::after {
                content: none !important;
            }
            
            /* Restore legitimate pseudo-elements */
            .section-title::after {
                content: '' !important;
                position: absolute;
                bottom: -10px;
                left: 50%;
                transform: translateX(-50%);
                width: 60px;
                height: 3px;
                background: linear-gradient(135deg, #ff9933, #ff6b35);
                border-radius: 2px;
            }
            
            .footer-section h3::after,
            .itinerary-day h2::after,
            .facts-section h2::after {
                content: '' !important;
            }
            
            .nav-menu a::after {
                content: "" !important;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                background: #ff9933;
                transition: width 0.3s ease;
            }
        `;
        
        // Remove existing style if it exists
        const existingStyle = document.getElementById('overlay-fix-styles');
        if (existingStyle) {
            existingStyle.remove();
        }
        
        document.head.appendChild(style);
    }
    
    // Function to monitor for dynamically added overlays
    function monitorForOverlays() {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        // Check if the added element contains "Namaste" text
                        if (node.textContent && 
                            (node.textContent.includes('Namaste') || node.textContent.includes('🙏'))) {
                            console.log('Removing dynamically added overlay:', node);
                            node.remove();
                        }
                        
                        // Check child elements as well
                        const namasteElements = node.querySelectorAll('*');
                        namasteElements.forEach(element => {
                            if (element.textContent && 
                                (element.textContent.includes('Namaste') || element.textContent.includes('🙏'))) {
                                console.log('Removing child overlay element:', element);
                                element.remove();
                            }
                        });
                    }
                });
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
    // Run the cleanup functions
    function init() {
        removeNamasteOverlays();
        cleanPseudoElements();
        monitorForOverlays();
        
        console.log('Overlay removal script initialized');
    }
    
    // Run immediately if DOM is ready, otherwise wait
    // if (document.readyState === 'loading') {
    //     document.addEventListener('DOMContentLoaded', init);
    // } else {
    //     init();
    // }
    
    // Also run after a short delay to catch any late-loading overlays
    setTimeout(removeNamasteOverlays, 1000);
    setTimeout(removeNamasteOverlays, 3000);
    
})();
