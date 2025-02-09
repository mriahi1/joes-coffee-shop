document.addEventListener('alpine:init', () => {
    Alpine.data('languageSwitcher', () => ({
        lang: 'en',
        changeLanguage(newLang) {
            this.lang = newLang;
        }
    }));
});