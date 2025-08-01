/**
 * DeshDarshan Navbar Position Test
 * This script helps verify navbar positioning across all pages
 */

console.log('🔍 Navbar Position Diagnostic');
console.log('==============================');

// Check if we're on the homepage
const isHomepage = window.location.pathname.endsWith('index.html') || 
                   window.location.pathname.endsWith('/') || 
                   window.location.pathname.split('/').pop() === '';

console.log(`📍 Current page: ${window.location.pathname}`);
console.log(`🏠 Is homepage: ${isHomepage}`);

// Check navbar positioning
window.addEventListener('load', function() {
    const navbar = document.querySelector('.navbar');
    const body = document.body;
    
    if (navbar) {
        const navbarRect = navbar.getBoundingClientRect();
        const bodyStyles = window.getComputedStyle(body);
        
        console.log('\n📊 Navbar Measurements:');
        console.log(`   Height: ${navbar.offsetHeight}px`);
        console.log(`   Top position: ${navbarRect.top}px`);
        console.log(`   Position: ${window.getComputedStyle(navbar).position}`);
        console.log(`   Z-index: ${window.getComputedStyle(navbar).zIndex}`);
        
        console.log('\n📊 Body Measurements:');
        console.log(`   Padding-top: ${bodyStyles.paddingTop}`);
        console.log(`   Margin-top: ${bodyStyles.marginTop}`);
        console.log(`   Classes: ${body.className || 'none'}`);
        
        // Check for content overlap
        const mainContent = document.querySelector('.main-content, .hero, .header');
        if (mainContent) {
            const contentRect = mainContent.getBoundingClientRect();
            const overlap = contentRect.top < navbar.offsetHeight;
            
            console.log('\n📊 Content Analysis:');
            console.log(`   Content top: ${contentRect.top}px`);
            console.log(`   Overlap detected: ${overlap ? '❌ YES' : '✅ NO'}`);
            
            if (overlap) {
                console.log('   🚨 Content may be hidden behind navbar!');
            }
        }
        
        // Success message
        console.log('\n✅ Navbar diagnostic complete');
        console.log('💡 Check console for any overlap warnings');
        
    } else {
        console.log('❌ Navbar not found!');
    }
});

// Add visual indicator for debugging (only in dev mode)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    document.addEventListener('DOMContentLoaded', function() {
        const indicator = document.createElement('div');
        indicator.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 12px;
            z-index: 9999;
            font-family: monospace;
        `;
        indicator.textContent = isHomepage ? 'HOME' : 'PAGE';
        document.body.appendChild(indicator);
        
        // Remove indicator after 3 seconds
        setTimeout(() => indicator.remove(), 3000);
    });
}
