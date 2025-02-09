document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for site navigation
    const navLinks = document.querySelectorAll('.navbar a');
    for (let link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const offsetTop = document.querySelector(href).offsetTop;
            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    }

    // Mobile navigation toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    mobileNavToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });

    // Basic form validation for the contact form
    const contactForm = document.querySelector('#contactForm');
    contactForm.addEventListener('submit', function(event) {
        let isValid = true;

        const name = document.querySelector('#name');
        const email = document.querySelector('#email');
        const message = document.querySelector('#message');

        // Clear errors
        document.querySelectorAll('.error').forEach(el => el.textContent = '');

        // Name validation
        if (!name.value.trim()) {
            isValid = false;
            name.nextElementSibling.textContent = 'Name is required.';
        }

        // Email validation
        if (!email.value.trim()) {
            isValid = false;
            email.nextElementSibling.textContent = 'Email is required.';
        } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
            isValid = false;
            email.nextElementSibling.textContent = 'Please enter a valid email address.';
        }

        // Message validation
        if (!message.value.trim()) {
            isValid = false;
            message.nextElementSibling.textContent = 'Message is required.';
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission
        }
    });
});
