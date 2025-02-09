document.addEventListener("DOMContentLoaded", function () {
    
    // Language switcher setup
    const switchLanguage = (lang) => {
        document.querySelectorAll("[data-lang-key]").forEach(el => {
            el.textContent = translations[lang][el.dataset.langKey] || el.textContent;
        });
    };

    // Translations for the page
    const translations = {
        en: {
            "title": "Welcome to Joe's Coffee Shop",
            "cta": "Order Now",
            "menu": "Menu",
            "contact": "Contact Us"
        },
        fr: {
            "title": "Bienvenue chez Joe's Coffee Shop",
            "cta": "Commandez maintenant",
            "menu": "Menu",
            "contact": "Contactez-nous"
        }
    };

    // Event listener for language switcher
    document.querySelectorAll(".lang-switch").forEach(btn => 
        btn.addEventListener("click", (e) => {
            const selectedLang = e.target.getAttribute("data-lang");
            switchLanguage(selectedLang);
        })
    );

    // Smooth scrolling feature
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Mobile navigation toggle
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const navMenu = document.querySelector(".navigation-menu");

    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Modal functionality
    const modal = document.querySelector(".modal");
    const modalTrigger = document.querySelector(".modal-trigger");

    modalTrigger.addEventListener("click", function () {
        modal.classList.add("open");
        console.log("Modal opened by user action.");
    });

    modal.addEventListener("click", function (e) {
        if(e.target === modal) {
            modal.classList.remove("open");
            console.log("Modal closed by background click.");
        }
    });

});