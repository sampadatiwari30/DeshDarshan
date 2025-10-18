// Standard Navbar JavaScript for DeshDarshan

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');

    // Hamburger menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInsideNav = navbar && navbar.contains(event.target);

        if (!isClickInsideNav && navMenu && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Static Scroll-to-Top Button (old logic)
const scrollBtn = document.getElementById("scrollToTop");
if (scrollBtn) {
    scrollBtn.style.display = "block";
    scrollBtn.style.position = "fixed";
    scrollBtn.style.bottom = "40px";
    scrollBtn.style.right = "40px";
    scrollBtn.style.zIndex = "999";

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// --- 🔁 Dual Scroll-To-Top/Bottom Button ---
const scrollToggleBtn = document.getElementById("scrollToggleBtn");
const scrollIcon = document.getElementById("scrollIcon");

if (scrollToggleBtn && scrollIcon) {
    // Always visible
    scrollToggleBtn.style.display = "block";

    // Change icon based on scroll position
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

        if (scrollPosition > maxScroll / 2) {
            // Show UP arrow when scrolled down
            scrollIcon.textContent = "⬆️";
        } else {
            // Show DOWN arrow when near top
            scrollIcon.textContent = "⬇️";
        }
    });

    // Toggle scroll behavior
    scrollToggleBtn.addEventListener("click", () => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

        if (scrollIcon.textContent === "⬇️") {
            window.scrollTo({ top: maxScroll, behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
}
