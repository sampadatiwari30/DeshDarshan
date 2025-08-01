const fs = require('fs');
const path = require('path');

// List of HTML files to update (excluding index.html, login.html, and signup.html)
const htmlFiles = [
    'pages/about-us.html',
    'pages/bharatanatyam.html', 
    'pages/contact-us.html',
    'pages/dance.html',
    'pages/destination.html',
    'pages/explore.html',
    'pages/festivals.html',
    'pages/food.html',
    'pages/forgot-password.html',
    'pages/fun-facts.html',
    'pages/heritage.html',
    'pages/kathak.html',
    'pages/kuchipudi.html',
    'pages/manipuri.html',
    'pages/mohiniyattam.html',
    'pages/odissi.html'
    // Note: login.html and signup.html intentionally excluded - they shouldn't have navbars
];

function updateNavbarInFile(filePath) {
    try {
        console.log(`Processing: ${filePath}`);
        
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if already updated
        if (content.includes('navbar-container')) {
            console.log(`  ✓ Already updated`);
            return;
        }
        
        // Replace various navbar patterns with the standardized container
        const navbarPatterns = [
            // Pattern 1: Standard navbar with comments
            /<!-- Navigation Bar -->\s*<nav class="navbar">.*?<\/nav>/s,
            /<!-- Navigation -->\s*<nav class="navbar">.*?<\/nav>/s,
            // Pattern 2: Just the nav element
            /<nav class="navbar">.*?<\/nav>/s
        ];
        
        let found = false;
        for (const pattern of navbarPatterns) {
            if (pattern.test(content)) {
                content = content.replace(pattern, '<!-- Navigation Container -->\n    <div id="navbar-container"></div>');
                found = true;
                break;
            }
        }
        
        if (!found) {
            console.log(`  ⚠ No navbar pattern found, will add container after <body>`);
            content = content.replace(/<body[^>]*>/, '$&\n    <!-- Navigation Container -->\n    <div id="navbar-container"></div>');
        }
        
        // Add navbar-loader.js script if not present
        if (!content.includes('navbar-loader.js')) {
            // Find the last script tag before </body>
            const scriptPattern = /(<script[^>]*>.*?<\/script>\s*)*(\s*<\/body>)/s;
            if (scriptPattern.test(content)) {
                content = content.replace(/(\s*<\/body>)/, '    <script src="../js/navbar-loader.js"></script>\n$1');
            } else {
                // Fallback: add before </body>
                content = content.replace(/<\/body>/, '    <script src="../js/navbar-loader.js"></script>\n</body>');
            }
        }
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  ✓ Updated successfully`);
        
    } catch (error) {
        console.error(`  ✗ Error updating ${filePath}:`, error.message);
    }
}

// Update all files
console.log('Starting navbar standardization...\n');
htmlFiles.forEach(updateNavbarInFile);
console.log('\nNavbar standardization complete!');
