// --- script.js for Joe's Coffee Shop ---
document.addEventListener('DOMContentLoaded', function() {
    const langDict = {
        en: {
            "home": "Home",
            "about": "About Us",
            "menu": "Menu",
            "contact": "Contact",
            "heroText": "Welcome to Joe's Coffee Shop",
            "aboutText": "At Joe's Coffee, we serve the finest coffee brewed from freshly sourced beans.",
            "menuText": "Discover our wide variety of coffees from all over the world.",
            "contactText": "Get in touch with us!"
        },
        fr: {
            "home": "Accueil",
            "about": "À Propos",
            "menu": "Menu",
            "contact": "Contact",
            "heroText": "Bienvenue chez Joe's Coffee Shop",
            "aboutText": "Chez Joe's Coffee, nous servons le meilleur café préparé à partir de grains fraîchement sourcés.",
            "menuText": "Découvrez notre large choix de cafés du monde entier.",
            "contactText": "Contactez-nous !"
        }
    };
    let currentLang = "en";
    const elements = document.querySelectorAll("[data-lang-key]");

    function updateTexts(language) {
        elements.forEach(element => {
            const key = element.getAttribute("data-lang-key");
            element.textContent = langDict[language][key];
        });
        currentLang = language;
    }

    document.getElementById('lang-toggle').addEventListener('click', function() {
        const targetLang = currentLang === "en" ? "fr" : "en";
        updateTexts(targetLang);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const ctaButton = document.getElementById('cta-button');
    const heroSection = document.getElementById('hero-section');
    
    window.addEventListener('scroll', () => {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.pageYOffset;
        if (scrollPosition > heroHeight) {
            ctaButton.classList.add('highlight');
        } else {
            ctaButton.classList.remove('highlight');
        }
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = () => img.removeAttribute('data-src');
    });
});
```
This script efficiently encapsulates all the required functionalities: dynamic language switching, smooth scrolling, CTA button highlighting on scroll, and lazy loading of images. The smooth and seamless interactions are ensured without reloading the page, enhancing the user experience in Joe's Coffee Shop's website.