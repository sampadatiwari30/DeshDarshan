/**
 * Check for duplicate files and similar content
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Get all CSS files
const cssDir = './css';
const cssFiles = fs.readdirSync(cssDir).filter(file => file.endsWith('.css'));

console.log('🔍 Checking for duplicate files...\n');

// Track file hashes and content similarities
const fileHashes = new Map();
const fileSizes = new Map();
const fileContents = new Map();

// Read all files and calculate hashes
cssFiles.forEach(file => {
    const filePath = path.join(cssDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const hash = crypto.createHash('md5').update(content).digest('hex');
    const size = content.length;
    
    fileHashes.set(file, hash);
    fileSizes.set(file, size);
    fileContents.set(file, content);
});

// Check for exact duplicates (same hash)
console.log('📋 Exact Duplicates (same content):');
const hashGroups = new Map();
fileHashes.forEach((hash, file) => {
    if (!hashGroups.has(hash)) {
        hashGroups.set(hash, []);
    }
    hashGroups.get(hash).push(file);
});

let foundDuplicates = false;
hashGroups.forEach((files, hash) => {
    if (files.length > 1) {
        foundDuplicates = true;
        console.log(`  ⚠️  ${files.join(', ')} - Same content!`);
    }
});

if (!foundDuplicates) {
    console.log('  ✅ No exact duplicates found');
}

// Check for similar file names
console.log('\n📝 Similar File Names:');
const similarNames = [];
cssFiles.forEach((file1, i) => {
    cssFiles.forEach((file2, j) => {
        if (i < j) {
            const name1 = file1.replace('.css', '');
            const name2 = file2.replace('.css', '');
            
            // Check for plural/singular
            if (name1 + 's' === name2 || name2 + 's' === name1) {
                similarNames.push([file1, file2, 'plural/singular']);
            }
            // Check for similar words
            else if (name1.includes(name2) || name2.includes(name1)) {
                similarNames.push([file1, file2, 'contains']);
            }
        }
    });
});

if (similarNames.length > 0) {
    similarNames.forEach(([file1, file2, reason]) => {
        const size1 = fileSizes.get(file1);
        const size2 = fileSizes.get(file2);
        console.log(`  🔍 ${file1} (${size1} bytes) vs ${file2} (${size2} bytes) - ${reason}`);
    });
} else {
    console.log('  ✅ No similar file names found');
}

// Check file purposes based on usage
console.log('\n📄 File Usage Analysis:');
const htmlFiles = ['index.html', ...fs.readdirSync('./pages').filter(f => f.endsWith('.html')).map(f => `pages/${f}`)];

const cssUsage = new Map();
cssFiles.forEach(css => cssUsage.set(css, []));

htmlFiles.forEach(htmlFile => {
    try {
        const content = fs.readFileSync(htmlFile, 'utf8');
        cssFiles.forEach(css => {
            if (content.includes(css)) {
                cssUsage.get(css).push(htmlFile);
            }
        });
    } catch (error) {
        // Skip if file doesn't exist
    }
});

// Show files that might be duplicates based on usage
console.log('\nCSS Files and their usage:');
cssUsage.forEach((usage, css) => {
    if (usage.length === 0) {
        console.log(`  ⚠️  ${css} - NOT USED in any HTML files!`);
    } else {
        console.log(`  ✅ ${css} - Used in: ${usage.join(', ')}`);
    }
});

// Specific check for destination vs destinations
console.log('\n🎯 Specific Analysis - destination.css vs destinations.css:');
const destContent = fileContents.get('destination.css');
const destsContent = fileContents.get('destinations.css');

if (destContent && destsContent) {
    console.log(`  destination.css: ${fileSizes.get('destination.css')} bytes`);
    console.log(`  destinations.css: ${fileSizes.get('destinations.css')} bytes`);
    
    // Check if they share similar class names
    const destClasses = (destContent.match(/\.[a-zA-Z-]+/g) || []).map(c => c.toLowerCase());
    const destsClasses = (destsContent.match(/\.[a-zA-Z-]+/g) || []).map(c => c.toLowerCase());
    
    const commonClasses = destClasses.filter(c => destsClasses.includes(c));
    if (commonClasses.length > 0) {
        console.log(`  ⚠️  Common classes: ${[...new Set(commonClasses)].join(', ')}`);
    } else {
        console.log(`  ✅ No overlapping classes - different purposes`);
    }
}
