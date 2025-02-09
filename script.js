Below is a step-by-step `script.js` fulfilling the specified requirements for Joe's Coffee Shop:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile-friendly Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('is-active');
    });

    // Language switcher English/French
    const langToggle = document.querySelector('.language-selector');
    const langTexts = document.querySelectorAll('[data-lang]');

    langToggle.addEventListener('change', function() {
        const selectedLanguage = this.value;
        langTexts.forEach(text => {
            text.style.display = text.getAttribute('data-lang') === selectedLanguage ? '' : 'none';
        });
    });

    // CTA Click Tracking
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log(`CTA pressed: ${this.textContent}`);
            // Here you may add integration with analytical tools or server logging
        });
    });

    // Modal Form Toggle
    const modal = document.querySelector('.modal');
    const modalBackground = document.querySelector('.modal-background');
    const modalCtas = document.querySelectorAll('.modal-cta');

    modalCtas.forEach(cta => {
        cta.addEventListener('click', function() {
            modal.classList.add('is-active');
        });
    });

    modalBackground.addEventListener('click', function() {
        modal.classList.remove('is-active');
    });
});
```

### What this script does:
1. **Smooth Scrolling:** Enhances user experience by scrolling smoothly to page sections when navigation links (anchors) are clicked.
2. **Mobile-Friendly Navigation Toggle:** Makes it easier for users on mobile devices to access the navigation menu through a toggle.
3. **Language Switcher (English/French):** Allows users to switch content language between English and French, enhancing the reach for bilingual users.
4. **CTA Click Tracking:** Tracks clicks on Call-to-Action buttons which is vital for understanding user engagement and refining marketing strategies.
5. **Modal Form Toggle:** Opens and closes modal forms when a user clicks on the corresponding CTAs or the modal background, respectively. This supports interactions with forms such as sign-ups, feedback, or bookings.

The JavaScript functions above depend on HTML elements correctly assigned with the classes, selectors, or attributes used in the script (e.g. `.nav-toggle`, `.language-selector`, `.modal`, etc.). Be sure these match between your HTML and JS code to avoid functionality issues.