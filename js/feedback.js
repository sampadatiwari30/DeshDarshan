// Star Rating Functionality
        const stars = document.querySelectorAll('.star');
        let selectedRating = 0;

        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                selectedRating = parseInt(star.getAttribute('data-rating'));
                updateStars();
                clearError('rating');
            });

            star.addEventListener('mouseenter', () => {
                const rating = parseInt(star.getAttribute('data-rating'));
                highlightStars(rating);
            });
        });

        document.getElementById('starRating').addEventListener('mouseleave', () => {
            updateStars();
        });

        function highlightStars(rating) {
            stars.forEach((star, index) => {
                if (index < rating) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
        }

        function updateStars() {
            highlightStars(selectedRating);
        }

        // Form Validation
        function validateField(fieldId, errorId) {
            const field = document.getElementById(fieldId);
            const errorElement = document.getElementById(errorId);
            let isValid = true;
            if (fieldId === 'name') {
            const nameRegex = /^[A-Za-z\s]{3,}$/;
            isValid = field.value.trim() !== '' && nameRegex.test(field.value);
            }else if (fieldId === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = field.value.trim() !== '' && emailRegex.test(field.value);
            } else if (fieldId === 'phone') {
                const phoneRegex = /^[\d\s\-\+()]{10,}$/;
                isValid = field.value.trim() !== '' && phoneRegex.test(field.value.replace(/\s/g, ''));
            } else {
                isValid = field.value.trim() !== '';
            }

            if (!isValid) {
                field.classList.add('error');
                errorElement.style.display = 'block';
            } else {
                field.classList.remove('error');
                errorElement.style.display = 'none';
            }

            return isValid;
        }

        function validateRating() {
            const errorElement = document.getElementById('ratingError');
            if (selectedRating === 0) {
                errorElement.style.display = 'block';
                return false;
            } else {
                errorElement.style.display = 'none';
                return true;
            }
        }

        function clearError(fieldType) {
            if (fieldType === 'rating') {
                document.getElementById('ratingError').style.display = 'none';
            } else {
                const field = document.getElementById(fieldType);
                const errorId = fieldType + 'Error';
                field.classList.remove('error');
                document.getElementById(errorId).style.display = 'none';
            }
        }

        // Real-time validation
        ['name', 'email', 'phone', 'message'].forEach(fieldId => {
            const field = document.getElementById(fieldId);
            field.addEventListener('input', () => {
                if (field.classList.contains('error')) {
                    validateField(fieldId, fieldId + 'Error');
                }
            });
        });

        // Form Submission
        document.getElementById('feedbackForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate all fields
            const nameValid = validateField('name', 'nameError');
            const emailValid = validateField('email', 'emailError');
            const phoneValid = validateField('phone', 'phoneError');
            const messageValid = validateField('message', 'messageError');
            const ratingValid = validateRating();

            // If all validations pass
            if (nameValid && emailValid && phoneValid && messageValid && ratingValid) {
                showPopup();
            } else {
                // Scroll to first error
                const firstError = document.querySelector('.form-input.error, .error-message[style*="block"]');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });

        // Popup Functions
        function showPopup() {
            document.getElementById('popupOverlay').classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        function closePopup() {
            document.getElementById('popupOverlay').classList.remove('show');
            document.body.style.overflow = 'auto';
            
            // Reset form after popup closes
            setTimeout(() => {
                resetForm();
            }, 300);
        }

        function resetForm() {
            document.getElementById('feedbackForm').reset();
            selectedRating = 0;
            updateStars();
            
            // Clear all errors
            document.querySelectorAll('.form-input').forEach(input => {
                input.classList.remove('error');
            });
            document.querySelectorAll('.error-message').forEach(error => {
                error.style.display = 'none';
            });
        }

        // Close popup when clicking outside
        document.getElementById('popupOverlay').addEventListener('click', (e) => {
            if (e.target === document.getElementById('popupOverlay')) {
                closePopup();
            }
        });

        // Close popup with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && document.getElementById('popupOverlay').classList.contains('show')) {
                closePopup();
            }
        });

        // Smooth scrolling for better UX
        document.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('focus', () => {
                setTimeout(() => {
                    input.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            });
        });

// Translation logic
const translations = {
    hi: {
        header: 'देश दर्शन',
        'nav-about': 'हमारे बारे में',
        'nav-explore': 'भारत का अन्वेषण करें',
        'nav-feedback': 'प्रतिक्रिया',
        'nav-contact': 'संपर्क करें',
        'nav-login': 'लॉगिन',
        'nav-signup': 'साइनअप',
        'footer': 'गोपनीयता नीति | सर्वाधिकार सुरक्षित | संपदा तिवारी द्वारा निर्मित ❤',
        // Add more keys as needed for your page
        'feedback-title': 'अपनी प्रतिक्रिया साझा करें',
        'feedback-desc': 'हमें बताएं कि आपको हमारा प्लेटफार्म कैसा लगा!',
        'name-label': 'नाम',
        'email-label': 'ईमेल',
        'phone-label': 'फ़ोन',
        'message-label': 'संदेश',
        'submit-btn': 'सबमिट',
        'rating-label': 'रेटिंग',
        'popup-success': 'धन्यवाद! आपकी प्रतिक्रिया सफलतापूर्वक सबमिट हो गई है।'
    },
    en: {
        header: 'Desh Darshan',
        'nav-about': 'About Us',
        'nav-explore': 'Explore India',
        'nav-feedback': 'Feedback',
        'nav-contact': 'Contact Us',
        'nav-login': 'Login',
        'nav-signup': 'Signup',
        'footer': 'Privacy Policy | All Rights Reserved | Made by Sampada Tiwari ❤',
        // Add more keys as needed for your page
        'feedback-title': 'Share Your Feedback',
        'feedback-desc': 'Let us know how you liked our platform!',
        'name-label': 'Name',
        'email-label': 'Email',
        'phone-label': 'Phone',
        'message-label': 'Message',
        'submit-btn': 'Submit',
        'rating-label': 'Rating',
        'popup-success': 'Thank you! Your feedback has been submitted successfully.'
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

const translateBtn = document.getElementById('translate-btn');
if (translateBtn) {
    let currentLang = 'en';
    translateBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'hi' : 'en';
        setLanguage(currentLang);
    });
}