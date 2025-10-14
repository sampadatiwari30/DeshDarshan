// Passport.js authentication middleware

// Check if user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  
  // For API routes, return JSON response
  if (req.path.startsWith('/api/')) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required'
    });
  }
  
  // For web routes, redirect to login
  return res.redirect('/pages/login.html');
};

// Check if user is not authenticated (for login/signup pages)
const isNotAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return next();
  }
  
  // If already logged in, redirect to home
  return res.redirect('/');
};

// Optional authentication (doesn't fail if not authenticated)
const optionalAuth = (req, res, next) => {
  // User is available in req.user if authenticated
  next();
};

// Get current user (for API responses)
const getCurrentUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    req.currentUser = req.user;
  }
  next();
};

module.exports = {
  isAuthenticated,
  isNotAuthenticated,
  optionalAuth,
  getCurrentUser
};
