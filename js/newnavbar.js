// === AUTHENTICATION LOGIC ===
function isUserLoggedIn() {
  // Check multiple storage methods for authentication
  return (
    localStorage.getItem("userToken") ||
    sessionStorage.getItem("isLoggedIn") === "true" ||
    document.cookie.includes("authToken=")
  );
}

// === NAVBAR LOGIC ===
function isHomepage() {
  const path = window.location.pathname;
  return (
    path.endsWith("index.html") ||
    path.endsWith("/") ||
    path.split("/").pop() === ""
  );
}

function createSmartNavbar() {
  const navbarContainer = document.getElementById("navbar-container");
  const isHome = isHomepage();
  const pathPrefix = isHome ? "" : "../";

  navbarContainer.innerHTML = `
                <nav class="navbar">
                    <div class="nav-container">
                        <div class="nav-logo">
                            <img src="${pathPrefix}assets/images/logos/DeshDarshanLogoNew.png" alt="Desh Darshan Logo" class="nav-logo-img">

                            <h2><a href="${pathPrefix}index.html">Desh Darshan</a></h2>
                        </div>
                        <div class="nav-center">
                            <span class="nav-tagline">Discover India's Hidden Treasures</span>
                            <span class="nav-pipe">|</span>
                            <span class="nav-badge">Explore</span>
                        </div>
                        <ul class="nav-menu">
                            <li><a href="${pathPrefix}index.html">Home</a></li>
                            <li><a href="${pathPrefix}pages/explore.html">Explore India</a></li>
                            <li><a href="${pathPrefix}pages/destination.html">Hidden Destinations</a></li>
                            <li><a href="${pathPrefix}pages/crazyfacts.html">Crazy Facts</a></li>
                            <li><a href="${pathPrefix}pages/learn_lang.html">Learn Languages</a></li>
                            <li><a href="${pathPrefix}pages/festival-calendar.html">Festivals</a></li>
                            <li><a href="${pathPrefix}pages/quiz.html">Quiz</a></li>
                            <li><a href="${pathPrefix}pages/about-us.html">About Us</a></li>
                            <li><a href="${pathPrefix}pages/contact-us.html">Contact</a></li>
                        </ul>
                        <div class="nav-buttons">
                            <a href="${pathPrefix}pages/login.html" class="btn-login">
                                <span>Login</span>
                                <i class="fas fa-sign-in-alt"></i>
                            </a>
                            <a href="${pathPrefix}pages/signup.html" class="btn-signup">
                                <span>Signup</span>
                                <i class="fas fa-user-plus"></i>
                            </a>
                        </div>
                        <div class="user-profile">
                            <a href="${pathPrefix}pages/profile.html" class="btn-profile">
                                <span>Profile</span>
                                <i class="fas fa-user"></i>
                            </a>
                            <a href="#" class="btn-logout" onclick="handleLogout(); return false;">
                                <span>Logout</span>
                                <i class="fas fa-sign-out-alt"></i>
                            </a>
                        </div>
                        <div class="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </nav>
            `;

  initializeNavbar();
}

function handleLogout() {
  // Clear authentication data
  sessionStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userToken");
  document.cookie =
    "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  // Redirect to home page or refresh
  window.location.href = "index.html";
}

function initializeNavbar() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navbar = document.querySelector(".navbar");
  const navCenter = document.querySelector(".nav-center");
  const navButtons = document.querySelector(".nav-buttons");
  const userProfile = document.querySelector(".user-profile");

  // Enhanced hamburger toggle with authentication-aware behavior
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      const isLoggedIn = isUserLoggedIn();

      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");

      // Handle tagline and buttons visibility based on auth state and menu state
      if (navMenu.classList.contains("active")) {
        // Menu is opening - always fade tagline regardless of auth state
        if (navCenter) {
          navCenter.style.opacity = "0";
          navCenter.style.transform = "translateX(-50%) translateY(-10px)";
        }

        if (!isLoggedIn) {
          // Not logged in: show login buttons
          if (navButtons) navButtons.style.display = "flex";
          if (userProfile) userProfile.style.display = "none";
        } else {
          // Logged in: show profile options
          if (navButtons) navButtons.style.display = "none";
          if (userProfile) userProfile.style.display = "flex";
        }
      } else {
        // Menu is closing - restore tagline
        if (navCenter) {
          navCenter.style.opacity = "1";
          navCenter.style.transform = "translateX(-50%) translateY(0)";
        }
      }

      document.body.style.overflow = navMenu.classList.contains("active")
        ? "hidden"
        : "";
    });

    // Close menu when clicking links
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "";

        // Restore tagline when menu closes
        if (navCenter) {
          navCenter.style.opacity = "1";
          navCenter.style.transform = "translateX(-50%) translateY(0)";
        }
      });
    });
  }

  // Enhanced scroll effect
  if (navbar) {
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      // Add/remove scrolled class
      navbar.classList.toggle("scrolled", currentScrollY > 50);

      // Hide/show navbar on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.style.transform = "translateY(-100%)";
      } else {
        navbar.style.transform = "translateY(0)";
      }

      lastScrollY = currentScrollY;
    });
  }

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !navbar.contains(event.target) &&
      navMenu.classList.contains("active")
    ) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "";

      // Restore tagline when menu closes
      if (navCenter) {
        navCenter.style.opacity = "1";
        navCenter.style.transform = "translateX(-50%) translateY(0)";
      }
    }
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Initialize on load
document.addEventListener("DOMContentLoaded", createSmartNavbar);

// Add loading animation
window.addEventListener("load", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.style.animation = "slideDown 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
  }
});
