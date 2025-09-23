const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const { isAuthenticated, isNotAuthenticated } = require('../middleware/auth');
const router = express.Router();

// Register new user
router.post('/signup', isNotAuthenticated, async (req, res) => {
  try {
    const { username, email, password, firstName, lastName } = req.body;

    // Validation
    if (!username || !email || !password || !firstName || !lastName) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters long'
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: existingUser.email === email 
          ? 'Email already registered' 
          : 'Username already taken'
      });
    }

    // Create new user
    const user = new User({
      username,
      email,
      password,
      firstName,
      lastName
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: 'User registered successfully. Please login to continue.',
      data: {
        user: user.toJSON()
      }
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({
      success: false,
      message: 'Registration failed',
      error: error.message
    });
  }
});

// Login user
router.post('/login', isNotAuthenticated, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Login failed',
        error: err.message
      });
    }

    if (!user) {
      return res.status(401).json({
        success: false,
        message: info.message || 'Invalid email or password'
      });
    }

    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Login failed',
          error: err.message
        });
      }

      res.json({
        success: true,
        message: 'Login successful',
        data: {
          user: user.toJSON()
        }
      });
    });
  })(req, res, next);
});

// Get current user profile
router.get('/profile', isAuthenticated, (req, res) => {
  res.json({
    success: true,
    data: {
      user: req.user
    }
  });
});

// Update user profile
router.put('/profile', isAuthenticated, async (req, res) => {
  try {
    const { firstName, lastName, username } = req.body;
    const userId = req.user._id;

    // Check if username is taken by another user
    if (username && username !== req.user.username) {
      const existingUser = await User.findOne({ 
        username, 
        _id: { $ne: userId } 
      });
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: 'Username already taken'
        });
      }
    }

    const updateData = {};
    if (firstName) updateData.firstName = firstName;
    if (lastName) updateData.lastName = lastName;
    if (username) updateData.username = username;

    const user = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    ).select('-password');

    // Update session user data
    req.user = user;

    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: {
        user
      }
    });

  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({
      success: false,
      message: 'Profile update failed',
      error: error.message
    });
  }
});

// Logout
router.post('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Logout failed',
        error: err.message
      });
    }
    
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Session destruction failed',
          error: err.message
        });
      }
      
      res.clearCookie('connect.sid');
      res.json({
        success: true,
        message: 'Logged out successfully'
      });
    });
  });
});

// Check authentication status
router.get('/status', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({
      success: true,
      authenticated: true,
      data: {
        user: req.user
      }
    });
  } else {
    res.json({
      success: true,
      authenticated: false,
      message: 'Not authenticated'
    });
  }
});

module.exports = router;
