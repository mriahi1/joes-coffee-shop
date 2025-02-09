document.addEventListener('alpine:init', () => {
    Alpine.data('languageSwitcher', () => ({
        lang: 'en',
        toggleNavMenu() {
            let menu = document.querySelector('#navMenu');
            menu.classList.toggle('hidden');
        },
        switchLanguage() {
            this.lang = this.lang === 'en' ? 'fr' : 'en';
            document.documentElement.lang = this.lang;
            this.updatePageText();
        },
        updatePageText() {
            const texts = {
                en: {
                    greeting: "Hello",
                    description: "This is a description in English."
                },
                fr: {
                    greeting: "Bonjour",
                    description: "Ceci est une description en Français."
                }
            };

            document.querySelectorAll('[data-key]').forEach(element => {
                let key = element.getAttribute('data-key');
                if (texts[this.lang][key]) {
                    element.textContent = texts[this.lang][key];
                }
            });
        }
    }));
});