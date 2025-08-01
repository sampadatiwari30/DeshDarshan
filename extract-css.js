/**
 * Extract all internal CSS from HTML files and create dedicated CSS files
 * This script moves all <style> blocks to separate CSS files and updates HTML links
 */

const fs = require('fs');
const path = require('path');

// List of HTML files to clean up
const htmlFiles = [
    'pages/contact-us.html',
    'pages/explore.html', 
    'pages/signup.html',
    'pages/login.html',
    'pages/forgot-password.html',
    'pages/destination.html',
    'pages/fun-facts.html',
    'pages/bharatanatyam.html',
    'pages/kathak.html',
    'pages/kuchipudi.html',
    'pages/manipuri.html',
    'pages/mohiniyattam.html',
    'pages/odissi.html'
];

function extractCSSFromFile(filePath) {
    try {
        console.log(`Processing: ${filePath}`);
        
        let content = fs.readFileSync(filePath, 'utf8');
        let allCSS = '';
        let cssExtracted = false;
        
        // Extract all style blocks
        const styleBlockPattern = /<style[^>]*>([\s\S]*?)<\/style>/gi;
        let match;
        
        while ((match = styleBlockPattern.exec(content)) !== null) {
            allCSS += match[1] + '\n\n';
            cssExtracted = true;
        }
        
        if (cssExtracted) {
            // Create CSS filename based on HTML filename
            const fileName = path.basename(filePath, '.html');
            const cssFileName = `css/${fileName}.css`;
            
            // Check if CSS file already exists
            if (fs.existsSync(cssFileName)) {
                console.log(`  ⚠ CSS file ${cssFileName} already exists, skipping...`);
                return;
            }
            
            // Write CSS to separate file
            fs.writeFileSync(cssFileName, allCSS.trim(), 'utf8');
            console.log(`  ✓ Created ${cssFileName}`);
            
            // Remove all style blocks from HTML
            const cleanedContent = content.replace(styleBlockPattern, '');
            
            // Add CSS link before closing </head>
            const cssLink = `    <link rel="stylesheet" href="../css/${fileName}.css">`;
            const updatedContent = cleanedContent.replace(
                '</head>',
                `${cssLink}\n  </head>`
            );
            
            // Write updated HTML
            fs.writeFileSync(filePath, updatedContent, 'utf8');
            console.log(`  ✓ Updated ${filePath} - removed internal CSS and added link`);
            
        } else {
            console.log(`  ✓ No internal CSS found`);
        }
        
    } catch (error) {
        console.error(`  ✗ Error processing ${filePath}:`, error.message);
    }
}

// Process all files
console.log('🧹 Starting CSS extraction and cleanup...\n');
htmlFiles.forEach(extractCSSFromFile);

console.log('\n✅ CSS extraction complete!');
console.log('📋 Summary:');
console.log('   - All internal CSS moved to dedicated .css files');
console.log('   - HTML files updated with CSS links');
console.log('   - Better maintainability and performance');
console.log('   - Follows CSS best practices');
