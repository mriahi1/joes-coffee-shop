```javascript
// script.js

document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile navigation toggle
    const menuButton = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');

    menuButton.addEventListener('click', function() {
        navigat
        ion.classList.toggle('navigation-open');
    });

    // Basic form validation for the contact form
    const contactForm = document.querySelector('#contact-form');
    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email');
    const messageField = document.querySelector('#message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        const errorClass = 'error';

        [nameField, emailField, messageField].forEach(field => {
            if (field.value.trim() === '') {
                isValid = false;
                field.classList.add(errorClass);
            } else {
                field.classList.remove(errorClass);
            }
        });

        if (!/\S+@\S+\.\S+/.test(emailField.value)) {
            isValid = false;
            emailField.classList.add(errorClass);
        } else {
            emailField.classList.remove(errorClass);
        }

        if (isValid) {
            alert('Form is valid and ready to be processed!');
            contactForm.submit();
        } else {
            alert('Please fill out all fields correctly!');
        }
    });
});
```