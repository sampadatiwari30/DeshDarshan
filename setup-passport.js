#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up DeshDarshan with Passport.js Authentication...\n');

// Check if node_modules exists
const nodeModulesPath = path.join(__dirname, 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
  console.log('📦 Installing dependencies...');
  const { execSync } = require('child_process');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed successfully');
  } catch (error) {
    console.error('❌ Error installing dependencies:', error.message);
    process.exit(1);
  }
} else {
  console.log('ℹ️  Dependencies already installed');
}

console.log('\n🎉 Passport.js Authentication Setup Complete!');
console.log('\n📋 What\'s included:');
console.log('✅ Passport.js with Local Strategy');
console.log('✅ Express Sessions with MongoDB Store');
console.log('✅ User Registration & Login');
console.log('✅ Session-based Authentication');
console.log('✅ Password Hashing with bcrypt');
console.log('✅ Frontend Integration');
console.log('\n🚀 Ready to start:');
console.log('1. Make sure MongoDB is running');
console.log('2. Run: npm start');
console.log('3. Open: http://localhost:3000');
console.log('\n📝 Default Configuration:');
console.log('- Database: mongodb://localhost:27017/deshdarshan');
console.log('- Port: 3000');
console.log('- Session Secret: deshdarshan-super-secret-session-key-2024');
console.log('\n🔐 Test the authentication:');
console.log('- Signup: http://localhost:3000/pages/signup.html');
console.log('- Login: http://localhost:3000/pages/login.html');

