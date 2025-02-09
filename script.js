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
            document.documentElement.lang = this.lang;
            // Updating all text dynamically
            this.updatePageText();
        },
        updatePageText() {
            const elements = document.querySelectorAll('[data-text-en], [data-text-fr]');
            elements.forEach(element => {
                element.innerText = this.lang === 'en' ? element.dataset.textEn : element.dataset.textFr;
            });
        }
    }));
});