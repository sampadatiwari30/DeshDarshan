// Auto-implementation script for custom cursor across all pages
(function() {
  'use strict';
  
  // Add cursor HTML elements to the page
  function addCursorElements() {
    // Check if cursor elements already exist
    if (document.getElementById('customCursor')) {
      return;
    }
    
    // Create cursor container
    const cursorContainer = document.createElement('div');
    cursorContainer.id = 'customCursor';
    cursorContainer.className = 'custom-cursor';
    
    // Create cursor elements
    const cursorDot = document.createElement('div');
    cursorDot.id = 'cursorDot';
    cursorDot.className = 'cursor-dot';
    
    const cursorTrail = document.createElement('div');
    cursorTrail.id = 'cursorTrail';
    cursorTrail.className = 'cursor-trail';
    
    const cursorTrail2 = document.createElement('div');
    cursorTrail2.id = 'cursorTrail2';
    cursorTrail2.className = 'cursor-trail-2';
    
    const cursorTrail3 = document.createElement('div');
    cursorTrail3.id = 'cursorTrail3';
    cursorTrail3.className = 'cursor-trail-3';
    
    const cursorTrail4 = document.createElement('div');
    cursorTrail4.id = 'cursorTrail4';
    cursorTrail4.className = 'cursor-trail-4';
    
    const cursorMagnetic = document.createElement('div');
    cursorMagnetic.id = 'cursorMagnetic';
    cursorMagnetic.className = 'cursor-magnetic';
    
    // Append elements to container
    cursorContainer.appendChild(cursorDot);
    cursorContainer.appendChild(cursorTrail);
    cursorContainer.appendChild(cursorTrail2);
    cursorContainer.appendChild(cursorTrail3);
    cursorContainer.appendChild(cursorTrail4);
    cursorContainer.appendChild(cursorMagnetic);
    
    // Add to body
    document.body.appendChild(cursorContainer);
  }
  
  // Add cursor CSS if not already present
  function addCursorCSS() {
    if (document.querySelector('link[href*="custom-cursor.css"]')) {
      return;
    }
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../css/custom-cursor.css';
    document.head.appendChild(link);
  }
  
  // Add GSAP if not already present
  function addGSAP() {
    if (window.gsap) {
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    script.onload = function() {
      // Initialize cursor after GSAP loads
      if (window.innerWidth > 768) {
        new CustomCursor();
      }
    };
    document.head.appendChild(script);
  }
  
  // Initialize cursor functionality
  function initCursor() {
    addCursorElements();
    addCursorCSS();
    addGSAP();
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCursor);
  } else {
    initCursor();
  }
  
  // Also run on window load to ensure everything is loaded
  window.addEventListener('load', function() {
    if (window.innerWidth > 768 && !window.customCursorInitialized) {
      window.customCursorInitialized = true;
      // Small delay to ensure GSAP is loaded
      setTimeout(() => {
        if (window.gsap && !window.customCursorInstance) {
          window.customCursorInstance = new CustomCursor();
        }
      }, 100);
    }
  });
})(); 