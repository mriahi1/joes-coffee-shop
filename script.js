document.addEventListener('alpine:init', () => {
    Alpine.data('languageSwitcher', () => ({
        lang: 'en',
        changeLanguage(language) {
            this.lang = language;
        }
    }));
});