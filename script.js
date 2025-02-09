document.addEventListener('alpine:init', () => {
  Alpine.data('app', () => ({
    showMobileMenu: false,
    currentLang: 'EN',
    text: {
      EN: {
        home: "Home",
        aboutUs: "About Us",
        contact: "Contact",
      },
      FR: {
        home: "Accueil",
        aboutUs: "À Propos de Nous",
        contact: "Contact",
      }
    },

    toggleNavMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },

    switchLanguage(lang) {
      this.currentLang = lang;
    },

    getText(key) {
      return this.text[this.currentLang][key];
    }
  }));
});