// script.js
document.addEventListener('DOMContentLoaded', function () {
    const langToggle = document.getElementById('lang-toggle');
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    const translations = {
        en: {
            'menu': 'Menu',
            'services': 'Services',
            'about': 'About us',
            'contact': 'Contact'
        },
        fr: {
            'menu': 'Menu',
            'services': 'Services',
            'about': 'À propos de nous',
            'contact': 'Contact'
        }
    };

    function switchLanguage(lang) {
        elementsToTranslate.forEach(elem => {
            const key = elem.getAttribute('data-translate');
            elem.textContent = translations[lang][key];
        });
    }

    langToggle.addEventListener('change', function() {
        const selectedLanguage = this.value;
        switchLanguage(selectedLanguage);
    });

    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            target.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Fade-in animations
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
