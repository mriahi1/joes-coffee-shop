document.addEventListener('alpine:init', () => {
    Alpine.data('languageSwitcher', () => ({
        lang: 'en',
        toggleNavMenu() {
            this.$dispatch('toggle-nav-menu');
        },
        switchLanguage() {
            this.lang = this.lang === 'en' ? 'fr' : 'en';
            this.updatePageLanguage();
        },
        updatePageLanguage() {
            document.documentElement.lang = this.lang;
            const texts = {
                en: {
                    welcome: "Welcome",
                    about: "About Us",
                    contact: "Contact"
                },
                fr: {
                    welcome: "Bienvenue",
                    about: "À propos",
                    contact: "Contactez"
                }
            };

            document.querySelector('#nav-home').textContent = texts[this.lang].welcome;
            document.querySelector('#nav-about').textContent = texts[this.lang].about;
            document.querySelector('#nav-contact').textContent = texts[this.lang].contact;
        },
        init() {
            this.updatePageLanguage();
        }
    }));
});