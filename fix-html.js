/**
 * Fix duplicate head tags and clean up formatting after CSS extraction
 */

const fs = require('fs');

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

htmlFiles.forEach(filePath => {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix duplicate </head> tags
        content = content.replace(/\s*<\/head>\s*<\/head>/g, '\n  </head>');
        
        // Fix multiple spaces and newlines in head section
        content = content.replace(/(\s*\n\s*)+(\s*<link[^>]+>\s*\n)/g, '\n    $2');
        
        // Ensure proper spacing before </head>
        content = content.replace(/(\s*)<\/head>/g, '\n  </head>');
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Cleaned up ${filePath}`);
        
    } catch (error) {
        console.error(`✗ Error fixing ${filePath}:`, error.message);
    }
});

console.log('\n✅ HTML cleanup complete!');
