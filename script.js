// script.js

document.addEventListener('DOMContentLoaded', function () {

    /* Smooth scrolling for navigation links */
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    /* Mobile-friendly navigation toggle */
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.navbar-menu');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('is-active');
    });

    /* Language switcher (English/French) */
    const langButtons = document.querySelectorAll('.lang-switch');
    langButtons.forEach(button => {
        button.addEventListener('click', function () {
            const lang = button.dataset.lang;
            switchLanguage(lang);
        });
    });

    function switchLanguage(lang) {
        const elements = document.querySelectorAll('[data-lang-str]');
        fetch(`lang/${lang}.json`)
            .then(response => response.json())
            .then(data => {
                elements.forEach(el => {
                    const key = el.getAttribute('data-lang-str');
                    if (data[key]) {
                        el.textContent = data[key];
                    }
                });
            })
            .catch(error => console.error('Error loading the language file:', error));
    }

    /* CTA click tracking for conversion optimization */
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function () {
            const label = button.getAttribute('data-label') || 'default';
            trackCTAClick(label);
        });
    });

    function trackCTAClick(label) {
        console.log(`CTA Button clicked: ${label}`);
        // Here you might want to integrate with a real analytics service
        // e.g. Google Analytics, Mixpanel, etc.
    }

    // Initialize the website in English
    switchLanguage("en");
});

```

### Explanation
1. **Smooth Scrolling**: This feature uses the `scrollIntoView` method for smooth scrolling behavior when navigation links are clicked.
   
2. **Mobile-friendly Navigation Toggle**: Uses a button with `.nav-toggle` class to toggle the visibility of a menu for smaller screens.
   
3. **Language Switcher**: When the user clicks either English or French buttons, the website's text changes to the selected language. This implementation assumes JSON files `en.json` and `fr.json` exist in a `lang/` directory. These files contain key-value pairs for each text element marked with `data-lang-str`.

4. **CTA Click Tracking**: Logs to the console when a CTA button is clicked. This is a placeholder for integrating an actual analytics solution.

This script expects certain HTML elements and attributes to be in place, and assumes the website structure uses data attributes for language switching and classes for styling and behavior. The JSON files for language must be provided separately.