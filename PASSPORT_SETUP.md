# Passport.js Authentication Setup

This project now uses **Passport.js** with **Express Sessions** for authentication instead of JWT tokens.

## 🚀 Quick Start (No Environment Setup Required)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# For local MongoDB
mongod

# Or use MongoDB Atlas (cloud)
# Update the MONGODB_URI in server.js
```

### 3. Start the Server
```bash
npm start
```

### 4. Test Authentication
- **Signup**: http://localhost:3000/pages/signup.html
- **Login**: http://localhost:3000/pages/login.html
- **Home**: http://localhost:3000

## 🔧 What's Different from JWT?

### **Passport.js Benefits:**
- ✅ **Session-based authentication** (more secure)
- ✅ **Server-side session storage** in MongoDB
- ✅ **Automatic session management**
- ✅ **No client-side token storage**
- ✅ **Built-in logout functionality**
- ✅ **CSRF protection ready**

### **How It Works:**
1. User registers → Account created in database
2. User logs in → Passport creates session
3. Session stored in MongoDB with encrypted cookie
4. User stays logged in across page visits
5. User logs out → Session destroyed

## 📁 Key Files

### **Backend:**
- `config/passport.js` - Passport configuration
- `middleware/auth.js` - Authentication middleware
- `routes/auth.js` - Authentication routes
- `models/User.js` - User database model
- `server.js` - Main server with session config

### **Frontend:**
- `js/auth.js` - Frontend authentication manager
- `pages/login.html` - Login page
- `pages/signup.html` - Signup page
- `css/user-menu.css` - User menu styles

## 🔐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register new user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/logout` | Logout user |
| GET | `/api/auth/profile` | Get user profile |
| PUT | `/api/auth/profile` | Update user profile |
| GET | `/api/auth/status` | Check auth status |

## 🛠️ Configuration

### **Default Settings:**
- **Database**: `mongodb://localhost:27017/deshdarshan`
- **Port**: `3000`
- **Session Secret**: `deshdarshan-super-secret-session-key-2024`
- **Session Duration**: 7 days

### **To Change Settings:**
Edit the values directly in `server.js`:
```javascript
const MONGODB_URI = 'mongodb://localhost:27017/deshdarshan';
const PORT = 3000;
// Session secret in session configuration
```

## 🔒 Security Features

1. **Password Hashing**: bcrypt with salt rounds
2. **Session Security**: HttpOnly cookies, secure session storage
3. **CSRF Protection**: Ready for CSRF middleware
4. **Input Validation**: Server-side validation
5. **Session Management**: Automatic cleanup and expiration

## 🧪 Testing

### **Test User Flow:**
1. Go to signup page
2. Create a new account
3. Login with the account
4. See user menu in navbar
5. Logout and see login/signup buttons again

### **Test API:**
```bash
# Check auth status
curl http://localhost:3000/api/auth/status

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## 🚨 Troubleshooting

### **Common Issues:**

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in server.js

2. **Session Not Persisting**
   - Check if cookies are enabled
   - Verify session store configuration

3. **Login Not Working**
   - Check browser console for errors
   - Verify credentials are correct
   - Check server logs

### **Debug Mode:**
Add this to server.js for detailed logs:
```javascript
app.use((req, res, next) => {
  console.log('Session:', req.session);
  console.log('User:', req.user);
  next();
});
```

## 🎯 Next Steps

1. **Add CSRF Protection**: Use `csurf` middleware
2. **Add Rate Limiting**: Use `express-rate-limit`
3. **Add Email Verification**: Send verification emails
4. **Add Password Reset**: Implement password reset flow
5. **Add Social Login**: Google, Facebook, etc.

## 📚 Resources

- [Passport.js Documentation](http://www.passportjs.org/)
- [Express Sessions](https://expressjs.com/en/resources/middleware/session.html)
- [MongoDB Sessions](https://www.npmjs.com/package/connect-mongo)

---

**Ready to go!** Your authentication system is now powered by Passport.js with session-based authentication. 🎉
