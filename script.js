Below is a `script.js` file that covers the features for Joe's Coffee Shop as you specified:

```javascript
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile-friendly navigation toggle
const toggleButton = document.querySelector('.navbar-toggler');
const navbarLinks = document.querySelector('.navbar-collapse');

toggleButton.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
});

// Language switcher (English/French)
const langSwitcher = document.querySelector('#language-switcher');
langSwitcher.addEventListener('change', function() {
    if (this.value === 'fr') {
        // Implement steps to switch content to French
    } else {
        // Implement steps to switch content back to English
    }
});

// CTA click tracking for conversion optimization
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        console.log('CTA button clicked:', this.textContent);
        // Additional code to send this data to analytics server
    });
});

// Modal form toggle (open on CTA click, close on background click)
const modal = document.querySelector('.modal');
const openModalButtons = document.querySelectorAll('.open-modal');
const closeModalOverlay = document.querySelector('.modal-overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

closeModalOverlay.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Execution code to make sure document is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log("Joe's Coffee Shop script loaded!");
});
```

### Feature Explanations:

1. **Smooth scrolling**: This is achieved by adding event listeners to all anchor tags that have a link starting with `#`. The page scrolls smoothly to the section whose ID matches the anchor's href attribute using `scrollIntoView()`.

2. **Mobile-friendly navigation toggle**: Using a `navbar-toggler` button and a `navbar-collapse` container, this feature toggles visibility of the navigation on click, which is typical in responsive designs for mobile views.

3. **Language switcher**: A simple dropdown can trigger content changes based on the selected language. Actual content switching would require additional implementation details not included here.

4. **CTA click tracking**: Each Call-to-Action (CTA) button on the page reports its text content when clicked, which is useful for tracking user interactions and conversion optimization.

5. **Modal form toggle**: Clicking a button with the class `.open-modal` opens the modal, while clicking on the modal background (`.modal-overlay`) closes it.

This script assumes certain HTML structure and class attributes are present, and should be adjusted based on the actual HTML markup of Joe's Coffee Shop's website.