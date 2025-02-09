Below is the JavaScript (`script.js`) file code to implement the requested features for Joe's Coffee Shop:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth Scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile-friendly navigation toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.addEventListener('click', () => {
        navigation.classList.toggle('open');
    });

    // Language switcher functionality
    const langToggle = document.querySelector('.lang-toggle');
    langToggle.addEventListener('click', () => {
        const currentLang = langToggle.textContent.trim();
        if (currentLang === 'EN') {
            langToggle.textContent = 'FR';
            // This is where you could update text/content to French
        } else {
            langToggle.textContent = 'EN';
            // Switch back to English
        }
    });

    // CTA click tracking for conversion optimization
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        console.log('CTA button clicked!'); // This would typically be a tracker event like Google Analytics event
    });

    // Modal form toggle
    const modal = document.querySelector('.modal');
    const openModalBtn = document.querySelectorAll('.open-modal');
    const closeModalArea = document.querySelector('.modal-background');

    openModalBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent body scrolling when modal is open
        });
    });

    closeModalArea.addEventListener('click', (e) => {
        if(e.target === closeModalArea) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable body scrolling when modal is closed
        }
    });

});

```
### Explanation of the Code
1. **Smooth Scrolling**: Attached click event listeners to `.nav-link` elements that prevent default link behavior and smoothly scroll to the section identifiers.

2. **Mobile Navigation Toggle**: A menu toggle button with the class `.menu-toggle` toggles the navigation menu’s visibility by toggling the class `open`.

3. **Language Switcher**: A button toggles between 'EN' (English) and 'FR' (French). Actual text/content changes would require integration with the site’s content.

4. **CTA Click Tracking**: Tracks clicks on a CTA button (class `.cta-button`) for conversion rate optimization. Normally, you would integrate with a tracking tool like Google Analytics here.

5. **Modal Form Toggle**: Allows multiple buttons to open a modal via the `.open-modal` class. Closes the modal when the background (`.modal-background`) is clicked, ensuring it doesn’t close when clicked inside the modal content. It also temporarily disables the background page scrolling to focus user interaction on the modal.

This solution should integrate seamlessly with Joe's Coffee Shop website provided it maintains consistent class naming and basic HTML structure as expected in JavaScript. To enhance, you could further refine exception handling, particularly with query selectors to avoid script errors if elements are absent.