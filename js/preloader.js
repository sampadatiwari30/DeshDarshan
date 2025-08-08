// DeshDarshan Professional Preloader Script
class DeshDarshanPreloader {
    constructor() {
        this.preloader = document.getElementById('preloader');
        this.progressBar = document.getElementById('progressBar');
        this.loadingText = document.getElementById('loadingText');
        this.progressPercentage = document.getElementById('progressPercentage');
        
        this.loadingMessages = [
            "Loading the treasures of India...",
            "Preparing your cultural journey...",
            "Discovering hidden gems...",
            "Unveiling the spirit of Bharat...",
            "Collecting stories from 28 states...",
            "Loading heritage and traditions...",
            "Almost ready for DeshDarshan..."
        ];
        
        this.currentProgress = 0;
        this.targetProgress = 0;
        this.messageIndex = 0;
        
        this.init();
    }
    
    init() {
        // Start the loading sequence
        this.simulateLoading();
        this.animateMessages();
        
        // Listen for actual page load events
        window.addEventListener('load', () => {
            this.completeLoading();
        });
        
        // Fallback completion after maximum time
        setTimeout(() => {
            if (this.currentProgress < 100) {
                this.completeLoading();
            }
        }, 8000);
    }
    
    simulateLoading() {
        const steps = [
            { progress: 15, delay: 800 },
            { progress: 30, delay: 1000 },
            { progress: 50, delay: 900 },
            { progress: 70, delay: 800 },
            { progress: 85, delay: 700 },
            { progress: 95, delay: 600 }
        ];
        
        let currentStep = 0;
        
        const processStep = () => {
            if (currentStep < steps.length) {
                this.targetProgress = steps[currentStep].progress;
                this.animateProgress();
                
                setTimeout(() => {
                    currentStep++;
                    processStep();
                }, steps[currentStep - 1]?.delay || 800);
            }
        };
        
        processStep();
    }
    
    animateProgress() {
        const animate = () => {
            if (this.currentProgress < this.targetProgress) {
                this.currentProgress += 0.5; // Slower increment for smoother animation
                this.updateProgressBar();
                setTimeout(() => requestAnimationFrame(animate), 50); // Add slight delay
            }
        };
        animate();
    }
    
    updateProgressBar() {
        if (this.progressBar) {
            this.progressBar.style.width = `${this.currentProgress}%`;
        }
        
        if (this.progressPercentage) {
            this.progressPercentage.textContent = `${this.currentProgress}%`;
        }
        
        // Add special effects at milestones
        if (this.currentProgress % 25 === 0 && this.currentProgress > 0) {
            this.addSparkleEffect();
        }
    }
    
    animateMessages() {
        const changeMessage = () => {
            if (this.loadingText && this.messageIndex < this.loadingMessages.length) {
                // Fade out current message
                this.loadingText.style.opacity = '0';
                
                setTimeout(() => {
                    this.loadingText.textContent = this.loadingMessages[this.messageIndex];
                    this.loadingText.style.opacity = '1';
                    this.messageIndex++;
                    
                    if (this.messageIndex < this.loadingMessages.length) {
                        setTimeout(changeMessage, 2200);
                    }
                }, 300);
            }
        };
        
        setTimeout(changeMessage, 800);
    }
    
    addSparkleEffect() {
        // Create sparkle elements
        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: radial-gradient(circle, #fff, #FF9933);
                border-radius: 50%;
                pointer-events: none;
                animation: sparkleAnimation 1s ease-out forwards;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
            `;
            
            this.preloader.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    }
    
    completeLoading() {
        this.targetProgress = 100;
        this.animateProgress();
        
        if (this.loadingText) {
            this.loadingText.textContent = "Welcome to DeshDarshan!";
        }
        
        setTimeout(() => {
            this.hidePreloader();
        }, 1000);
    }
    
    hidePreloader() {
        if (this.preloader) {
            this.preloader.classList.add('fade-out');
            
            setTimeout(() => {
                this.preloader.style.display = 'none';
                document.body.style.overflow = 'visible';
            }, 1200);
        }
    }
}

// Sparkle animation keyframes
const sparkleCSS = `
@keyframes sparkleAnimation {
    0% {
        transform: scale(0) rotate(0deg);
        opacity: 1;
    }
    50% {
        transform: scale(1) rotate(180deg);
        opacity: 0.8;
    }
    100% {
        transform: scale(0) rotate(360deg);
        opacity: 0;
    }
}
`;

// Add sparkle CSS to head
const styleSheet = document.createElement('style');
styleSheet.textContent = sparkleCSS;
document.head.appendChild(styleSheet);

// Initialize preloader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Hide scrollbar during loading
    document.body.style.overflow = 'hidden';
    
    // Start preloader
    new DeshDarshanPreloader();
});

// Ensure preloader shows immediately
if (document.readyState === 'loading') {
    document.body.style.overflow = 'hidden';
}