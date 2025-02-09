document.addEventListener('alpine:init', () => {
    Alpine.data('pageState', () => ({
        isNavMenuOpen: false,
        lang: 'en',
        langText: {
            en: {
                toggleNav: "Toggle Navigation",
                home: "Home",
                services: "Services",
                contact: "Contact",
                language: "EN"
            },
            fr: {
                toggleNav: "Changer Navigation",
                home: "Accueil",
                services: "Services",
                contact: "Contact",
                language: "FR"
            }
        },
        toggleNavMenu() {
            this.isNavMenuOpen = !this.isNavMenuOpen;
        },
        switchLanguage() {
            this.lang = this.lang === 'en' ? 'fr' : 'en';
        },
        currentText(key) {
            return this.langText[this.lang][key];
        }
    }));
});