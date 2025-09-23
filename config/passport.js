const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

// Local Strategy for username/password authentication
passport.use(new LocalStrategy(
  {
    usernameField: 'email', // Use email as username
    passwordField: 'password'
  },
  async (email, password, done) => {
    try {
      // Find user by email
      const user = await User.findOne({ email });
      
      if (!user) {
        return done(null, false, { message: 'Invalid email or password' });
      }

      // Check if user is active
      if (!user.isActive) {
        return done(null, false, { message: 'Account is deactivated' });
      }

      // Verify password
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return done(null, false, { message: 'Invalid email or password' });
      }

      // Update last login
      user.lastLogin = new Date();
      await user.save();

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

// Serialize user for session
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id).select('-password');
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
