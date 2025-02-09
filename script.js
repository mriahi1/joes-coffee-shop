document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        lang: 'en',
        menuOpen: false,
        toggleNavMenu() {
            this.menuOpen = !this.menuOpen;
        },
        switchLanguage(lang) {
            this.lang = lang;
        },
        get textContent() {
            const text = {
                en: {
                    home: 'Home',
                    about: 'About',
                    services: 'Services',
                    contact: 'Contact'
                },
                fr: {
                    home: 'Accueil',
                    about: 'À propos',
                    services: 'Services',
                    contact: 'Contact'
                }
            };
            return text[this.lang];
        }
    }));
});