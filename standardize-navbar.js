/**
 * Standardize all pages to match the explore page's navbar positioning
 * This ensures consistent navbar spacing across all pages
 */

const fs = require('fs');
const path = require('path');

// List of HTML files to standardize
const htmlFiles = [
    'pages/about-us.html',
    'pages/bharatanatyam.html',
    'pages/contact-us.html', 
    'pages/dance.html',
    'pages/destination.html',
    'pages/festivals.html',
    'pages/feedback.html',
    'pages/food.html',
    'pages/forgot-password.html',
    'pages/fun-facts.html',
    'pages/heritage.html',
    'pages/kathak.html',
    'pages/kuchipudi.html',
    'pages/login.html',
    'pages/manipuri.html',
    'pages/mohiniyattam.html',
    'pages/odissi.html',
    'pages/signup.html'
];

function standardizeNavbarPositioning(filePath) {
    try {
        console.log(`Processing: ${filePath}`);
        
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Remove conflicting body padding-top declarations in inline styles
        const bodyPaddingPattern = /body\s*\{[^}]*padding-top:\s*[^;}]+;?[^}]*\}/gi;
        if (bodyPaddingPattern.test(content)) {
            content = content.replace(bodyPaddingPattern, (match) => {
                console.log(`  Removing conflicting body padding: ${match.substring(0, 50)}...`);
                return match.replace(/padding-top:\s*[^;}]+;?/gi, '');
            });
            modified = true;
        }
        
        // Remove conflicting margin-top declarations for main content areas
        const marginTopPatterns = [
            /margin-top:\s*\d+px\s*;\s*\/\*[^*]*\*\//gi,
            /margin-top:\s*\d+px\s*;/gi
        ];
        
        marginTopPatterns.forEach(pattern => {
            if (pattern.test(content)) {
                content = content.replace(pattern, 'margin-top: 0; /* Navbar spacing handled by navbar.css */');
                modified = true;
            }
        });
        
        // Ensure min-height calculations account for navbar
        const minHeightPattern = /min-height:\s*100vh\s*;/gi;
        if (minHeightPattern.test(content)) {
            // Only modify if it's not already calc()
            if (!content.includes('calc(100vh - 80px)')) {
                content = content.replace(minHeightPattern, 'min-height: calc(100vh - 80px);');
                console.log(`  Updated min-height to account for navbar`);
                modified = true;
            }
        }
        
        // Ensure proper script loading order
        const scriptOrderPattern = /(navbar\.js[^>]*>[^<]*<\/script>)\s*([^<]*<script[^>]*navbar-loader\.js)/gi;
        if (scriptOrderPattern.test(content)) {
            content = content.replace(scriptOrderPattern, (match, navbarJs, loaderJs) => {
                console.log(`  Fixed script loading order`);
                return loaderJs.replace('navbar-loader.js', 'navbar-loader.js"></script>\n    <script src="../js/navbar.js');
            });
            modified = true;
        }
        
        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`  ✓ Updated successfully`);
        } else {
            console.log(`  ✓ No changes needed`);
        }
        
    } catch (error) {
        console.error(`  ✗ Error updating ${filePath}:`, error.message);
    }
}

// Update all files
console.log('🎯 Standardizing navbar positioning to match explore.html...\n');
htmlFiles.forEach(standardizeNavbarPositioning);

// Also ensure feedback.css doesn't override navbar positioning
try {
    console.log('\nProcessing: css/feedback.css');
    let feedbackCSS = fs.readFileSync('css/feedback.css', 'utf8');
    
    // Ensure main-content doesn't have excessive padding-top
    if (feedbackCSS.includes('padding-top: 120px') || feedbackCSS.includes('padding-top: 180px') || feedbackCSS.includes('padding-top: 220px')) {
        feedbackCSS = feedbackCSS.replace(/padding-top:\s*(120|180|220)px/g, 'padding-top: 40px');
        fs.writeFileSync('css/feedback.css', feedbackCSS, 'utf8');
        console.log('  ✓ Fixed feedback.css padding values');
    }
} catch (error) {
    console.log('  ⚠ Could not update feedback.css:', error.message);
}

console.log('\n✅ Navbar positioning standardization complete!');
console.log('🎯 All pages should now match the explore.html navbar positioning.');
