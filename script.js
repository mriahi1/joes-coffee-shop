document.addEventListener('alpine:init', () => {
  Alpine.data('languageSwitcher', () => ({
    lang: 'en',
    texts: {
      en: {
        home: 'Home',
        about: 'About',
        contact: 'Contact'
      },
      fr: {
        home: 'Accueil',
        about: 'À propos',
        contact: 'Contact'
      }
    },
    toggleNavMenu() {
      document.getElementById('navMenu').classList.toggle('hidden');
    },
    switchLanguage(lang) {
      this.lang = lang;
    }
  }));
});