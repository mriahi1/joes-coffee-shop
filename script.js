document.addEventListener('alpine:init', () => {
    Alpine.data('langSwitcher', () => ({
        lang: 'en',

        toggleLang(newLang) {
            this.lang = newLang;
        }
    }));
});