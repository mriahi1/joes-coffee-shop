document.addEventListener('alpine:init', () => {
    Alpine.data('languageSwitcher', () => ({
        lang: 'en',
        switchLanguage() {
            this.lang = this.lang === 'en' ? 'fr' : 'en';
            document.documentElement.lang = this.lang;
            this.updateLanguageText();
        },
        updateLanguageText() {
            const texts = {
                en: {
                    greeting: "Hello",
                    description: "Welcome to our website",
                },
                fr: {
                    greeting: "Bonjour",
                    description: "Bienvenue sur notre site web",
                }
            };
            
            document.querySelector('#greeting').textContent = texts[this.lang].greeting;
            document.querySelector('#description').textContent = texts[this.lang].description;
        }
    }));

    Alpine.data('navMenu', () => ({
        isOpen: false,
        toggleNavMenu() {
            this.isOpen = !this.isOpen;
        }
    }));
});