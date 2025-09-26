// Authentication JavaScript for frontend (Passport.js)
class AuthManager {
  constructor() {
    this.baseURL = '/api/auth';
    this.user = null;
    this.enabled = this._detectAuthAvailability();
    this.init();
  }

  async init() {
    // Skip auth checks if API is not available (e.g., static/preview mode)
    if (!this.enabled) {
      this.updateUIForLoggedOutUser();
      return;
    }
    await this.checkAuthStatus();
  }

  // Check authentication status
  async checkAuthStatus() {
    try {
      const response = await fetch(`${this.baseURL}/status`, {
        credentials: 'include' // Important for session cookies
      });
      if (!response.ok) {
        this.user = null;
        this.updateUIForLoggedOutUser();
        return;
      }
      let result = null;
      try { result = await response.json(); } catch (_) { result = null; }
      
      if (result.success && result.authenticated) {
        this.user = result.data.user;
        this.updateUIForLoggedInUser();
      } else {
        this.user = null;
        this.updateUIForLoggedOutUser();
      }
    } catch (error) {
      // In static builds or when backend is down, fail gracefully without noisy logs
      this.user = null;
      this.updateUIForLoggedOutUser();
    }
  }

  // Sign up new user
  async signup(userData) {
    if (!this.enabled) {
      return { success: false, message: 'Authentication is unavailable in this preview. Please run the backend to enable signup.' };
    }
    try {
      const response = await fetch(`${this.baseURL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important for session cookies
        body: JSON.stringify(userData)
      });

      let result = null;
      try { result = await response.json(); } catch (_) { result = { success: false, message: 'Unexpected server response.' }; }

      if (result.success) {
        // After successful signup, user needs to login
        return { success: true, message: result.message };
      } else {
        return { success: false, message: result.message };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  }

  // Login user
  async login(email, password) {
    if (!this.enabled) {
      return { success: false, message: 'Authentication is unavailable in this preview. Please run the backend to enable login.' };
    }
    try {
      const response = await fetch(`${this.baseURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important for session cookies
        body: JSON.stringify({ email, password })
      });

      let result = null;
      try { result = await response.json(); } catch (_) { result = { success: false, message: 'Unexpected server response.' }; }

      if (result.success) {
        this.user = result.data.user;
        this.updateUIForLoggedInUser();
        return { success: true, message: result.message };
      } else {
        return { success: false, message: result.message };
      }
    } catch (error) {
      return { success: false, message: 'Network error. Please try again.' };
    }
  }

  // Logout user
  async logout() {
    if (!this.enabled) {
      // Soft logout in preview mode
      this.user = null;
      this.updateUIForLoggedOutUser();
      return;
    }
    try {
      await fetch(`${this.baseURL}/logout`, {
        method: 'POST',
        credentials: 'include', // Important for session cookies
        headers: {
          'Content-Type': 'application/json',
        }
      });
    } catch (error) {
      // Ignore network errors on logout
    } finally {
      this.user = null;
      this.updateUIForLoggedOutUser();
    }
  }

  // Check if user is logged in
  isLoggedIn() {
    return !!this.user;
  }

  // Get current user
  getCurrentUser() {
    return this.user;
  }

  // Update UI for logged in user
  updateUIForLoggedInUser() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const userMenu = document.getElementById('userMenu');
    const userName = document.getElementById('userName');

    if (loginBtn) loginBtn.style.display = 'none';
    if (signupBtn) signupBtn.style.display = 'none';
    if (userMenu) userMenu.style.display = 'block';
    if (userName) userName.textContent = this.user.firstName;

    // Close any open modals
    this.closeModals();
  }

  // Update UI for logged out user
  updateUIForLoggedOutUser() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const userMenu = document.getElementById('userMenu');

    if (loginBtn) loginBtn.style.display = 'block';
    if (signupBtn) signupBtn.style.display = 'block';
    if (userMenu) userMenu.style.display = 'none';
  }

  // Close all modals
  closeModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      modal.style.display = 'none';
    });
  }

  // Show error message
  showError(message, elementId) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
      setTimeout(() => {
        errorElement.style.display = 'none';
      }, 5000);
    }
  }

  // Show success message
  showSuccess(message, elementId) {
    const successElement = document.getElementById(elementId);
    if (successElement) {
      successElement.textContent = message;
      successElement.style.display = 'block';
      setTimeout(() => {
        successElement.style.display = 'none';
      }, 5000);
    }
  }

  // Detect if auth API should be enabled (disable for file:// or GitHub Pages-like hosts)
  _detectAuthAvailability() {
    try {
      const isFile = window.location.protocol === 'file:';
      const host = (window.location.hostname || '').toLowerCase();
      const isGhPages = host.endsWith('github.io');
      // Enable only when served over http(s) and not on github.io static host
      return !isFile && !isGhPages;
    } catch (_) {
      return false;
    }
  }
}

// Initialize auth manager
const auth = new AuthManager();

// Signup form handler
async function handleSignup(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const userData = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password')
  };

  // Basic validation
  if (!userData.firstName || !userData.lastName || !userData.username || !userData.email || !userData.password) {
    auth.showError('All fields are required', 'signupError');
    return;
  }

  if (userData.password.length < 6) {
    auth.showError('Password must be at least 6 characters long', 'signupError');
    return;
  }

  const result = await auth.signup(userData);
  
  if (result.success) {
    auth.showSuccess('Account created successfully!', 'signupSuccess');
    setTimeout(() => {
      auth.closeModals();
    }, 2000);
  } else {
    auth.showError(result.message, 'signupError');
  }
}

// Login form handler
async function handleLogin(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const email = formData.get('email');
  const password = formData.get('password');

  if (!email || !password) {
    auth.showError('Email and password are required', 'loginError');
    return;
  }

  const result = await auth.login(email, password);
  
  if (result.success) {
    auth.showSuccess('Login successful!', 'loginSuccess');
    setTimeout(() => {
      auth.closeModals();
    }, 2000);
  } else {
    auth.showError(result.message, 'loginError');
  }
}

// Logout handler
async function handleLogout() {
  await auth.logout();
  window.location.reload(); // Refresh page to update UI
}

// Show login modal
function showLoginModal() {
  document.getElementById('loginModal').style.display = 'flex';
}

// Show signup modal
function showSignupModal() {
  document.getElementById('signupModal').style.display = 'flex';
}

// Close modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Export for use in other scripts
window.auth = auth;
window.handleSignup = handleSignup;
window.handleLogin = handleLogin;
window.handleLogout = handleLogout;
window.showLoginModal = showLoginModal;
window.showSignupModal = showSignupModal;
window.closeModal = closeModal;
