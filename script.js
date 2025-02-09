document.addEventListener('DOMContentLoaded', function () {
    enableSmoothScrolling();
    setupMobileNavigationToggle();
    setupLanguageSwitcher();
    setupConversionTracking();
    setupModalToggle();
});

function enableSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
}

function setupMobileNavigationToggle() {
    const menuIcon = document.getElementById('mobile-menu-icon');
    const menu = document.getElementById('mobile-nav');
    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('open');
    });
}

function setupLanguageSwitcher() {
    const switcher = document.getElementById('lang-switcher');
    switcher.addEventListener('change', function () {
        const selectedLanguage = this.value;
        if (selectedLanguage === 'fr') {
            document.documentElement.setAttribute('lang', 'fr');
        } else {
            document.documentElement.setAttribute('lang', 'en');
        }
    });
}

function setupConversionTracking() {
    const ctas = document.querySelectorAll('.cta-button');
    for (const cta of ctas) {
        cta.addEventListener('click', function () {
            console.log('CTA clicked:', this.textContent);
        });
    }
}

function setupModalToggle() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    const modal = document.getElementById('modal');
    const modalBackground = document.getElementById('modal-background');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function () {
            modal.classList.add('is-active');
        });
    });

    modalBackground.addEventListener('click', function () {
        modal.classList.remove('is-active');
    });
}