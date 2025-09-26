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
                    <li><a href="${pathPrefix}index.html">Home</a></li>
                    <li><a href="${pathPrefix}pages/explore.html">Explore India</a></li>
                    <li><a href="${pathPrefix}pages/festival-calendar.html">Festival Calendar</a></li>
                    <li><a href="${pathPrefix}pages/crazyfacts.html">Crazy Facts</a></li>
                    <li><a href="${pathPrefix}pages/yoga.html">Yoga</a></li>                    
                    <li><a href="${pathPrefix}pages/feedback.html">Feedback</a></li>
                    <li><a href="${pathPrefix}pages/about-us.html">About Us</a></li>
                    <li><a href="${pathPrefix}pages/contact-us.html">Contact Us</a></li>
                </ul>
            </div>

                <div class="nav-logo">
                
                    <h2><a href="${pathPrefix}index.html">Desh Darshan</a></h2>
                </div>
                <ul class="nav-menu">
                    <li><a href="${pathPrefix}pages/explore.html">Explore India</a></li>
                    <li><a href="${pathPrefix}pages/festival-calendar.html">Festival Calendar</a></li>
                    <li><a href="${pathPrefix}pages/feedback.html">Feedback</a></li>
                    <li><a href="${pathPrefix}pages/about-us.html">About Us</a></li>
                    <li><a href="${pathPrefix}pages/contact-us.html">Contact Us</a></li>
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

// Inject global bottom-left scroll controls (Up/Down)
(function initScrollControls() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }

  function inject() {
    // Avoid duplicate injection
    if (document.getElementById("dd-scroll-controls")) return;

    // Hide any existing single smart scroll button if present
    const style = document.createElement("style");
    style.textContent = `#smartScrollBtn{display:none!important}`;
    document.head.appendChild(style);

    // Create container
    const container = document.createElement("div");
    container.id = "dd-scroll-controls";
    container.style.position = "fixed";
    container.style.left = "20px";
    container.style.bottom = "20px";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "10px";
    container.style.zIndex = "1200";

    // Button factory
    function createBtn(id, label, symbol) {
      const btn = document.createElement("button");
      btn.id = id;
      btn.type = "button";
      btn.setAttribute("aria-label", label);
      btn.title = label;
      btn.style.width = "44px";
      btn.style.height = "44px";
      btn.style.border = "none";
      btn.style.borderRadius = "50%";
      btn.style.background = "#ff9832";
      btn.style.color = "#fff";
      btn.style.boxShadow = "0 10px 30px rgba(255,152,50,0.25)";
      btn.style.cursor = "pointer";
      btn.style.display = "none"; // default hidden until evaluated
      btn.style.alignItems = "center";
      btn.style.justifyContent = "center";
      btn.style.fontSize = "18px";
      btn.style.lineHeight = "1";
      btn.style.transition = "transform .2s ease, opacity .2s ease, background .2s ease";
      btn.textContent = symbol;
      btn.addEventListener("mouseenter", () => { btn.style.transform = "translateY(-2px) scale(1.04)"; btn.style.background = "#ffb366"; });
      btn.addEventListener("mouseleave", () => { btn.style.transform = "none"; btn.style.background = "#ff9832"; });
      return btn;
    }

    const upBtn = createBtn("dd-scroll-up", "Scroll up", "▲");
    const downBtn = createBtn("dd-scroll-down", "Scroll down", "▼");

    container.appendChild(upBtn);
    container.appendChild(downBtn);
    document.body.appendChild(container);

    // Behavior
    const updateVisibility = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const windowHeight = window.innerHeight;
      const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);

      // Show up button if scrolled down a bit
      if (scrollTop > 10) {
        upBtn.style.display = "flex";
        upBtn.style.opacity = "1";
      } else {
        upBtn.style.display = "none";
        upBtn.style.opacity = "0";
      }

      // Show down button if not near bottom
      if (scrollTop + windowHeight < docHeight - 10) {
        downBtn.style.display = "flex";
        downBtn.style.opacity = "1";
      } else {
        downBtn.style.display = "none";
        downBtn.style.opacity = "0";
      }
    };

    // Scroll handlers
    upBtn.addEventListener("click", () => {
      window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
    });
    downBtn.addEventListener("click", () => {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    });

    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    updateVisibility();
  }
})();