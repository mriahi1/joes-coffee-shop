window.onload = function() {
    // Fix Hero Image Loading
    const heroImage = document.querySelector('.hero-background');
    heroImage.onerror = function() {
        heroImage.src = 'assets/hero.jpg';
    };

    // Language Switcher Functionality
    const switchLanguage = (lang) => {
        let texts = document.querySelectorAll('[data-lang]');
        texts.forEach(text => {
            text.textContent = text.dataset[lang];
        });
    };

    const languageToggle = document.getElementById('language-toggle');
    languageToggle.onclick = function() {
        if (languageToggle.textContent.trim() === 'FR') {
            switchLanguage('fr');
            languageToggle.textContent = 'EN';
        } else {
            switchLanguage('en');
            languageToggle.textContent = 'FR';
        }
    };

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // CTA Button Highlight on Scroll
    const ctaButton = document.querySelector('.cta-button');
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            ctaButton.style.opacity = '1';
            ctaButton.style.transform = 'scale(1.1)';
        } else {
            ctaButton.style.opacity = '0.8';
            ctaButton.style.transform = 'none';
        }
    });
};
