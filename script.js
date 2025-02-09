document.addEventListener('DOMContentLoaded', function() {
    const langToggleBtn = document.querySelector("#language-toggle");
    const textsToChange = document.querySelectorAll("[data-section]");
    const langMap = {
        en: {
            'welcome': "Welcome to Joe's Coffee Shop",
            'about': "About Us",
            'menu': "Our Menu",
            'contact': "Contact Us"
        },
        fr: {
            'welcome': "Bienvenue chez Joe's Coffee Shop",
            'about': "À Propos",
            'menu': "Notre Menu",
            'contact': "Nous Contacter"
        }
    };

    let currentLang = 'en';
    langToggleBtn.addEventListener('click', function() {
        currentLang = currentLang === 'en' ? 'fr' : 'en';
        textsToChange.forEach(function(e) {
            const section = e.dataset.section;
            e.textContent = langMap[currentLang][section];
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const ctaButton = document.querySelector('.cta-button');
    const heroSection = document.querySelector('.hero');
    window.addEventListener('scroll', function() {
        const scrollHeight = window.pageYOffset + heroSection.getBoundingClientRect().top + heroSection.offsetHeight;
        if (window.pageYOffset > scrollHeight) {
            ctaButton.style.backgroundColor = '#f57c00'; // Example color: bright orange for visibility
        } else {
            ctaButton.style.backgroundColor = ''; // Reset color on scroll back
        }
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: "200px"
        });

        observer.observe(img);
    });
});
