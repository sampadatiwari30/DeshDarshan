// Custom Cursor with Snake Trailing Effect using GSAP
class CustomCursor {
  constructor() {
    console.log('CustomCursor: Initializing...');
    this.cursor = document.getElementById('customCursor');
    this.cursorDot = document.getElementById('cursorDot');
    this.cursorTrail = document.getElementById('cursorTrail');
    this.cursorTrail2 = document.getElementById('cursorTrail2');
    this.cursorTrail3 = document.getElementById('cursorTrail3');
    this.cursorTrail4 = document.getElementById('cursorTrail4');
    this.cursorMagnetic = document.getElementById('cursorMagnetic');
    
    // Debug: Check if elements exist
    console.log('CustomCursor: Elements found:', {
      cursor: !!this.cursor,
      cursorDot: !!this.cursorDot,
      cursorTrail: !!this.cursorTrail,
      cursorTrail2: !!this.cursorTrail2,
      cursorTrail3: !!this.cursorTrail3,
      cursorTrail4: !!this.cursorTrail4,
      cursorMagnetic: !!this.cursorMagnetic
    });
    
    this.mouseX = 0;
    this.mouseY = 0;
    this.trailPositions = [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 }
    ];
    
    this.isHovering = false;
    this.hoverTarget = null;
    
    this.init();
  }

  init() {
    console.log('CustomCursor: Initializing cursor...');
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    // Add interactive class to elements
    this.addInteractiveClass();
    
    // Event listeners
    this.addEventListeners();
    
    // Start animation loop
    this.animate();
    console.log('CustomCursor: Initialization complete');
  }

  addInteractiveClass() {
    // Add interactive class to buttons, links, images, and other interactive elements
    const interactiveElements = document.querySelectorAll('button, a, img, input, textarea, .culture-item, .slide, .dot, .social-icon, .footer-link, .dance-link, .heritage-item, .food-item');
    interactiveElements.forEach(element => {
      element.classList.add('interactive-element');
    });
    console.log('CustomCursor: Added interactive class to', interactiveElements.length, 'elements');
  }

  addEventListeners() {
    // Mouse move event
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    // Mouse enter/leave events for interactive elements
    document.addEventListener('mouseenter', (e) => {
      if (e.target.classList.contains('interactive-element')) {
        this.handleMouseEnter(e.target);
      }
    });

    document.addEventListener('mouseleave', (e) => {
      if (e.target.classList.contains('interactive-element')) {
        this.handleMouseLeave(e.target);
      }
    });

    // Window resize
    window.addEventListener('resize', () => {
      this.updateCursorPosition();
    });
    
    console.log('CustomCursor: Event listeners added');
  }

  handleMouseEnter(element) {
    this.isHovering = true;
    this.hoverTarget = element;
    
    // Remove previous hover classes
    this.removeHoverClasses();
    
    // Add appropriate hover class based on element type
    const hoverClass = this.getHoverClassForElement(element);
    this.cursorDot.classList.add(hoverClass);
    this.cursorTrail.classList.add(hoverClass);
    this.cursorTrail2.classList.add(hoverClass);
    this.cursorTrail3.classList.add(hoverClass);
    this.cursorTrail4.classList.add(hoverClass);
    
    // Enhanced GSAP animations for larger cursor
    gsap.to(this.cursorDot, {
      scale: this.getScaleForElement(element),
      duration: 0.4,
      ease: "back.out(1.7)"
    });

    gsap.to(this.cursorTrail, {
      scale: this.getTrailScaleForElement(element),
      duration: 0.5,
      ease: "back.out(1.4)"
    });

    gsap.to(this.cursorMagnetic, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)"
    });

    // Add rotation effect for more dynamic feel
    gsap.to([this.cursorDot, this.cursorTrail, this.cursorTrail2, this.cursorTrail3, this.cursorTrail4], {
      rotation: 360,
      duration: 2,
      ease: "none",
      repeat: -1
    });
  }

  handleMouseLeave(element) {
    this.isHovering = false;
    this.hoverTarget = null;
    
    // Remove hover classes
    this.removeHoverClasses();
    
    // Reset cursor elements with enhanced animations
    gsap.to(this.cursorDot, {
      scale: 1,
      duration: 0.4,
      ease: "back.out(1.7)"
    });

    gsap.to(this.cursorTrail, {
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.4)"
    });

    gsap.to(this.cursorMagnetic, {
      opacity: 0,
      scale: 0,
      duration: 0.4,
      ease: "back.out(1.7)"
    });

    // Stop rotation
    gsap.killTweensOf([this.cursorDot, this.cursorTrail, this.cursorTrail2, this.cursorTrail3, this.cursorTrail4]);
  }

  removeHoverClasses() {
    const hoverClasses = ['button-hover', 'image-hover', 'text-hover', 'form-hover', 'interactive-hover'];
    hoverClasses.forEach(className => {
      this.cursorDot.classList.remove(className);
      this.cursorTrail.classList.remove(className);
      this.cursorTrail2.classList.remove(className);
      this.cursorTrail3.classList.remove(className);
      this.cursorTrail4.classList.remove(className);
    });
  }

  getHoverClassForElement(element) {
    const tagName = element.tagName.toLowerCase();
    const className = element.className;
    
    if (tagName === 'button' || tagName === 'a') return 'button-hover';
    if (tagName === 'img') return 'image-hover';
    if (tagName === 'input' || tagName === 'textarea') return 'form-hover';
    if (tagName === 'h1' || tagName === 'h2' || tagName === 'h3' || tagName === 'p') return 'text-hover';
    if (className.includes('culture-item') || className.includes('slide') || className.includes('dance-link') || className.includes('heritage-item') || className.includes('food-item')) return 'interactive-hover';
    
    return 'interactive-hover';
  }

  getScaleForElement(element) {
    const tagName = element.tagName.toLowerCase();
    const className = element.className;
    
    if (tagName === 'button' || tagName === 'a') return 2.2;
    if (tagName === 'img') return 2.0;
    if (tagName === 'input' || tagName === 'textarea') return 1.8;
    if (tagName === 'h1' || tagName === 'h2' || tagName === 'h3' || tagName === 'p') return 1.6;
    if (className.includes('culture-item') || className.includes('slide') || className.includes('dance-link') || className.includes('heritage-item') || className.includes('food-item')) return 1.8;
    
    return 1.8;
  }

  getTrailScaleForElement(element) {
    const tagName = element.tagName.toLowerCase();
    const className = element.className;
    
    if (tagName === 'button' || tagName === 'a') return 1.8;
    if (tagName === 'img') return 1.6;
    if (tagName === 'input' || tagName === 'textarea') return 1.5;
    if (tagName === 'h1' || tagName === 'h2' || tagName === 'h3' || tagName === 'p') return 1.4;
    if (className.includes('culture-item') || className.includes('slide') || className.includes('dance-link') || className.includes('heritage-item') || className.includes('food-item')) return 1.6;
    
    return 1.6;
  }

  animate() {
    // Update trail positions for snake effect with enhanced smoothing
    this.trailPositions[0] = { x: this.mouseX, y: this.mouseY };
    for (let i = 1; i < this.trailPositions.length; i++) {
      const prev = this.trailPositions[i - 1];
      const current = this.trailPositions[i];
      current.x += (prev.x - current.x) * 0.25;
      current.y += (prev.y - current.y) * 0.25;
    }

    // Enhanced GSAP animations for smoother movement - Made faster
    gsap.to(this.cursorDot, {
      x: this.trailPositions[0].x,
      y: this.trailPositions[0].y,
      duration: 0.08,
      ease: "power2.out"
    });

    // Animate snake trail dots with different delays and enhanced easing - Made faster
    gsap.to(this.cursorTrail, {
      x: this.trailPositions[1].x,
      y: this.trailPositions[1].y,
      duration: 0.12,
      ease: "power2.out"
    });

    gsap.to(this.cursorTrail2, {
      x: this.trailPositions[2].x,
      y: this.trailPositions[2].y,
      duration: 0.16,
      ease: "power2.out"
    });

    gsap.to(this.cursorTrail3, {
      x: this.trailPositions[3].x,
      y: this.trailPositions[3].y,
      duration: 0.20,
      ease: "power2.out"
    });

    gsap.to(this.cursorTrail4, {
      x: this.trailPositions[4].x,
      y: this.trailPositions[4].y,
      duration: 0.24,
      ease: "power2.out"
    });

    // Enhanced magnetic effect for interactive elements
    if (this.isHovering && this.hoverTarget) {
      const rect = this.hoverTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      gsap.to(this.cursorMagnetic, {
        x: centerX,
        y: centerY,
        duration: 0.5,
        ease: "back.out(1.4)"
      });
    }

    requestAnimationFrame(() => this.animate());
  }

  updateCursorPosition() {
    // Update cursor position on window resize
    this.cursor.style.transform = `translate(${this.mouseX}px, ${this.mouseY}px)`;
  }
}

// Initialize custom cursor when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('CustomCursor: DOM loaded, checking window width:', window.innerWidth);
  // Check if not on mobile device
  if (window.innerWidth > 768) {
    console.log('CustomCursor: Desktop detected, initializing cursor');
    new CustomCursor();
  } else {
    console.log('CustomCursor: Mobile detected, skipping cursor');
  }
});

// Enhanced loading animation with snake effect
window.addEventListener('load', () => {
  console.log('CustomCursor: Window loaded');
  const cursorDot = document.getElementById('cursorDot');
  const cursorTrail = document.getElementById('cursorTrail');
  const cursorTrail2 = document.getElementById('cursorTrail2');
  const cursorTrail3 = document.getElementById('cursorTrail3');
  const cursorTrail4 = document.getElementById('cursorTrail4');
  
  if (cursorDot) {
    console.log('CustomCursor: Starting loading animation');
    // Enhanced staggered animation for snake effect
    gsap.fromTo([cursorDot, cursorTrail, cursorTrail2, cursorTrail3, cursorTrail4], 
      { scale: 0, opacity: 0, rotation: -180 },
      { 
        scale: 1, 
        opacity: 1, 
        rotation: 0,
        duration: 1.2, 
        ease: "back.out(1.7)",
        stagger: 0.15
      }
    );
  } else {
    console.log('CustomCursor: Cursor elements not found for loading animation');
  }
}); 