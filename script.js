document.addEventListener('alpine:init', () => {
    Alpine.data('navigation', () => ({
        isOpen: false,
        toggleNavMenu() {
            this.isOpen = !this.isOpen;
        }
    }));

    Alpine.data('languageSwitcher', () => ({
        lang: 'en',
        content: {
            home: { en: "Home", fr: "Accueil" },
            about: { en: "About", fr: "À propos" },
            contact: { en: "Contact", fr: "Contact" }
        },
        switchLanguage(lang) {
            this.lang = lang;
        },
        translate(key) {
            return this.content[key][this.lang];
        }
    }));
});