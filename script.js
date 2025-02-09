document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const languageButtons = document.querySelectorAll(".language-switcher button");

    menuToggle.addEventListener("click", toggleNavMenu);

    languageButtons.forEach(button => {
        button.addEventListener("click", () => {
            switchLanguage(button.getAttribute("data-lang"));
        });
    });
});

function toggleNavMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("visible");
}

function switchLanguage(lang) {
    const textElements = document.querySelectorAll("[data-lang-text]");

    textElements.forEach(element => {
        const textKey = element.getAttribute("data-lang-text");
        element.innerText = translations[lang][textKey];
    });
}

const translations = {
    "EN": {
        "home": "Home",
        "menu": "Menu",
        "about": "About",
        "contact": "Contact",
        "welcome": "Welcome to Joe's Coffee Shop!"
    },
    "FR": {
        "home": "Accueil",
        "menu": "Menu",
        "about": "À propos",
        "contact": "Contact",
        "welcome": "Bienvenue chez Joe's Coffee Shop!"
    }
};