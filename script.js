document.addEventListener('alpine:init', () => {
    Alpine.data('navigation', () => ({
        isOpen: false,

        toggleNavMenu() {
            this.isOpen = !this.isOpen;
        }
    }));

    Alpine.data('languageSwitcher', () => ({
        lang: 'en',

        switchLanguage() {
            this.lang = this.lang === 'en' ? 'fr' : 'en';
            const texts = {
                en: {
                    navHome: 'Home',
                    navAbout: 'About',
                    navServices: 'Services',
                    navContact: 'Contact',
                    welcome: 'Welcome to Our Website',
                    description: 'Proudly serving you with quality and excellence.'
                },
                fr: {
                    navHome: 'Accueil',
                    navAbout: 'À propos',
                    navServices: 'Services',
                    navContact: 'Contact',
                    welcome: 'Bienvenue sur notre site web',
                    description: 'Fiers de vous servir avec qualité et excellence.'
                }
            };
            document.documentElement.lang = this.lang;
            document.getElementById('navHome').textContent = texts[this.lang].navHome;
            document.getElementById('navAbout').textContent = texts[this.lang].navAbout;
            document.getElementById('navServices').textContent = texts[this.lang].navServices;
            document.getElementById('navContact').textContent = texts[this.lang].navContact;
            document.getElementById('welcome').textContent = texts[this.lang].welcome;
            document.getElementById('description').textContent = texts[this.lang].description;
        }
    }));
});