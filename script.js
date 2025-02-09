document.addEventListener('alpine:init', () => {
    Alpine.data('languageSwitcher', () => ({
        lang: 'en',

        text: {
            greeting: {
                en: 'Hello',
                fr: 'Bonjour'
            },
            question: {
                en: 'How are you?',
                fr: 'Comment ça va?'
            }
        },

        switchLanguage(newLang) {
            this.lang = newLang;
        }
    }));
});