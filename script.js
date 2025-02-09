Below is a JavaScript file `script.js` that includes all requested features for Joe's Coffee Shop:

```javascript
document.addEventListener("DOMContentLoaded", function() {
    initSmoothScroll();
    initMobileNavToggle();
    initLanguageSwitcher();
    trackCTAClicks();
    initModalFormToggle();
});

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initMobileNavToggle() {
    const menuBtn = document.querySelector('.menu-btn');
    const navigation = document.querySelector('.navigation');
    menuBtn.addEventListener('click', function() {
        navigation.classList.toggle('navigation-open');
    });
}

function initLanguageSwitcher() {
    const languageToggleButton = document.querySelector('.language-toggle');
    languageToggleButton.addEventListener('click', function() {
        const currentLang = document.documentElement.lang;
        if (currentLang === 'en') {
            document.documentElement.lang = 'fr';
            this.textContent = 'English';
        } else {
            document.documentElement.lang = 'en';
            this.textContent = 'Français';
        }
    });
}

function trackCTAClicks() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log(`CTA with ID ${this.id} clicked.`);
        });
    });
}

function initModalFormToggle() {
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelector('.modal-button');
    const closeBtn = document.querySelector('.modal-close-button');
    
    modalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}
```

### Explanation:

1. **Smooth Scrolling**: When any link is clicked that leads to an anchor (`#`), it smoothly scrolls to that section rather than just jumping.

2. **Mobile-friendly Navigation Toggle**: A menu button that toggles a class to open/close the navigation menu, specified for mobile screens.

3. **Language Switcher**: Toggle button to switch the HTML document's language attribute between English and French and changes the button text accordingly.

4. **CTA Click Tracking**: Console logs the ID of clicked CTA buttons for tracking purposes, useful for analyzing the effectiveness of different calls to action.

5. **Modal Form Toggle**: Controls the visibility of a modal dialog form. It can be opened by a CTA button and closed either by clicking a close button in the modal or clicking outside the modal.

This script assumes the structure and class names of the HTML elements correspond with the code provided. Make sure the HTML elements' classes and IDs match those used in the script, or modify the selector strings in the script accordingly.