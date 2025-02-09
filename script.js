document.addEventListener("alpine:init", () => {
    Alpine.store("site", {
        lang: "en",
        mobileMenuOpen: false,
        toggleNavMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
        switchLanguage(language) {
            this.lang = language;
        },
        updateText() {
            const texts = {
                en: {
                    home: "Home",
                    about: "About",
                    contact: "Contact"
                },
                fr: {
                    home: "Accueil",
                    about: "À propos",
                    contact: "Contact"
                }
            };
            let languageTexts = texts[this.lang];
            document.getElementById('nav-home').textContent = languageTexts.home;
            document.getElementById('nav-about').textContent = languageTexts.about;
            document.getElementById('nav-contact').textContent = languageTexts.contact;
        }
    });

    Alpine.data("languageSwitcher", () => ({
        init() {
            this.$watch('store.site.lang', () => {
                this.$store.site.updateText();
                document.documentElement.lang = this.$store.site.lang;
            });
        },
        toggleLanguage() {
            this.$store.site.switchLanguage(this.$store.site.lang === 'en' ? 'fr' : 'en');
        }
    }));

    Alpine.data("menu", () => ({
        toggleNavMenu() {
            this.$store.site.toggleNavMenu();
        }
    }));
});