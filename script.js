document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        showMenu: false,
        currentLang: 'EN',
        langContent: {
            EN: {
                home: 'Home',
                about: 'About',
                contact: 'Contact'
            },
            FR: {
                home: 'Accueil',
                about: 'À propos',
                contact: 'Contact'
            }
        },  

        toggleNavMenu() {
            this.showMenu = !this.showMenu;
        },

        switchLanguage(lang) {
            this.currentLang = lang;
        },

        text(key) {
            return this.langContent[this.currentLang][key];
        }
    }));
});