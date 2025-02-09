// script.js

document.addEventListener("DOMContentLoaded", function() {
    initSmoothScrolling();
    initMobileNavToggle();
    initLanguageSwitcher();
    initCTAClickTracking();
    initModalFormToggle();
});

function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function initMobileNavToggle() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('is-active');
    });
}

function initLanguageSwitcher() {
    const languageToggleButton = document.querySelector('.language-toggle');
    const currentLanguageDisplay = document.querySelector('.current-language');

    languageToggleButton.addEventListener('click', function() {
        const currentLanguage = currentLanguageDisplay.innerText;
        if (currentLanguage === 'EN') {
            currentLanguageDisplay.innerText = 'FR';
            // Add further implementation to handle site content language switching
        } else {
            currentLanguageDisplay.innerText = 'EN';
            // Revert to English language content
        }
    });
}

function initCTAClickTracking() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('CTA Click', {
                location: button.innerText
            });
        });
    });
}

function trackEvent(action, details) {
    console.log(`Event Tracked: ${action}`, details);
    // Implementation can be added for integration with analytics tools
}

function initModalFormToggle() {
    const modal = document.querySelector('.modal');
    const modalBg = document.querySelector('.modal-background');
    const modalCTA = document.querySelectorAll('.modal-cta-button');

    modalCTA.forEach(cta => {
        cta.addEventListener('click', () => {
            modal.classList.add('is-active');
        });
    });

    modalBg.addEventListener('click', () => {
        modal.classList.remove('is-active');
    });
}
```

### Explanation of the script.js code:

1. **Document Initialization**: All functions setup to initialize after the DOM is fully loaded.
2. **Smooth Scrolling**: Scrolls smoothly to sections in the page when clicking on anchor links.
3. **Mobile Navigation Toggle**: Allows the navigation menu to be toggled on mobile devices.
4. **Language Switcher**: Switches text display between English (EN) and French (FR) - functionality should be extended to handle actual site content switching.
5. **CTA Click Tracking**: Tracks clicks on CTA buttons for analytics purposes. The actual deployment might need integration with tools like Google Analytics.
6. **Modal Form Toggle**: Handles the opening and closing of a modal form, often used for contact or sign-up purposes.

This script provides a basic frontend interaction setting for a coffee shop website, ensuring smooth navigation, responsive layout interactions, a minimalistic language swap, and user interaction tracking. Effective enhancements could include actual content switching in the language toggle and a more robust analytics integration.