document.addEventListener('alpine:init', () => {
    Alpine.data('navigationMenu', () => ({
        isOpen: false,
        toggleNavMenu() {
            this.isOpen = !this.isOpen;
        }
    }));

    Alpine.data('languageSwitcher', () => ({
        currentLanguage: 'EN',
        textContent: {
            EN: {
                home: "Home",
                about: "About Us",
                contact: "Contact"
            },
            FR: {
                home: "Accueil",
                about: "À Propos",
                contact: "Contact"
            }
        },
        switchLanguage(lang) {
            this.currentLanguage = lang;
        }
    }));
});