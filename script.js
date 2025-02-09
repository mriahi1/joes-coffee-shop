document.addEventListener('alpine:init', () => {
    Alpine.data('appState', () => ({
        navMenuOpen: false,
        lang: 'en',
        content: {
            en: {
                home: "Home",
                about: "About",
                contact: "Contact",
                language: "Language"
            },
            fr: {
                home: "Accueil",
                about: "À Propos",
                contact: "Contact",
                language: "Langue"
            }
        },
        toggleNavMenu() {
            this.navMenuOpen = !this.navMenuOpen;
        },
        switchLanguage(lang) {
            this.lang = lang;
        }
    }));
});