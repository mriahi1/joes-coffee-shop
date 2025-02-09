document.addEventListener('alpine:init', () => {
    Alpine.data('langSwitcher', () => ({
        lang: 'en',

        textContent() {
            const text = {
                en: {
                    welcome: 'Welcome to our website!',
                    description: 'Here you can find various resources in English.'
                },
                fr: {
                    welcome: 'Bienvenue sur notre site web!',
                    description: 'Ici, vous pouvez trouver diverses ressources en français.'
                }
            };

            return text[this.lang];
        }
    }));
});