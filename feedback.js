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

            if (fieldId === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                isValid = field.value.trim() !== '' && emailRegex.test(field.value);
            } else if (fieldId === 'phone') {
                const phoneRegex = /^[\d\s\-\+()]{10,}$/;
                isValid = field.value.trim() !== '' && phoneRegex.test(field.value.replace(/\s/g, ''));
            } else if(fieldId === 'message')
            {
                var msg=field.value;
                if(msg.length <10)
                isValid=false;
                else
                isValid=true;
                if (!isValid) {
                errorElement.innerText = 'Message must be at least 10 characters long.';
                }
               else {
               isValid = field.value.trim() !== '';
               }    
            }
             else {
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