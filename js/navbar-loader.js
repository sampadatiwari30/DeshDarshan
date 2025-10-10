/**
 * DeshDarshan Navbar Loader
 * Dynamically loads the appropriate navbar based on page location
 */

// Function to determine if we're on the homepage or a subpage
function isHomepage() {
  const path = window.location.pathname;
  return (
    path.endsWith("index.html") ||
    path.endsWith("/") ||
    path.split("/").pop() === ""
  );
}

// Function to load navbar
async function loadNavbar() {
  try {
    const navbarContainer = document.getElementById("navbar-container");
    if (!navbarContainer) {
      console.error("Navbar container not found");
      return;
    }

    // Use smart navbar creation instead of separate files
    createSmartNavbar();
  } catch (error) {
    console.error("Error loading navbar:", error);
    // Fallback: create a basic navbar structure
    createSmartNavbar();
  }
}

// Smart navbar creation with automatic path detection
function createSmartNavbar() {
  const navbarContainer = document.getElementById("navbar-container");
  const isHome = isHomepage();
  const pathPrefix = isHome ? "" : "../";

  navbarContainer.innerHTML = `
        <nav class="navbar">
            <div class="nav-container">
            <div class="nav-toggle" onclick="openmenu()">
                <i class="fa fa-bars" style="font-size: 24px; cursor: pointer;color:white;margin-right:50px;"></i>
            </div>
            <div id="menu" class="side-menu">
                <span class="close-btn" onclick="closemenu()">&times;</span>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/explore">Explore India</a></li>
                    <li><a href="/festival-calendar">Festival Calendar</a></li>
                    <li><a href="/quiz">Crazy Facts</a></li>
                    <li><a href="/yoga">Yoga</a></li>                    
                    <li><a href="/feedback">Feedback</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>

                <div class="nav-logo">
                
                    <h2><a href="/">Desh Darshan</a></h2>
                </div>
                <ul class="nav-menu">
                    <li><a href="/explore">Explore India</a></li>
                    <li><a href="/festival-calendar">Festival Calendar</a></li>
                    <li><a href="/feedback">Feedback</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
                <div class="nav-buttons">
                    <a href="/login" class="btn-login" id="loginBtn">
                        <span>Login</span>
                        <i class="fas fa-sign-in-alt"></i>
                    </a>
                    <a href="/signup" class="btn-signup" id="signupBtn">
                        <span>Signup</span>
                        <i class="fas fa-user-plus"></i>
                    </a>
                    
                    <!-- User menu (shown when logged in) -->
                    <div class="user-menu" id="userMenu" style="display: none;">
                        <div class="user-info">
                            <span id="userName">User</span>
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <div class="user-dropdown">
                            <a href="#" onclick="handleLogout()">
                                <i class="fas fa-sign-out-alt"></i>
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    `;

  initializeNavbar();
}

function openmenu() {
    document.getElementById("menu").style.width = "250px";
}
function closemenu() {
    document.getElementById("menu").style.width = "0";
}
// Initialize navbar functionality (hamburger menu, etc.)
function initializeNavbar() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navbar = document.querySelector(".navbar");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
      const isClickInsideNav = navbar && navbar.contains(event.target);

      if (!isClickInsideNav && navMenu.classList.contains("active")) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  }

  // Navbar scroll effect
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }
}

// Load navbar when DOM is ready
document.addEventListener("DOMContentLoaded", loadNavbar);
