document.addEventListener('alpine:init', () => {
  Alpine.data('languageSwitcher', () => ({
    lang: 'en'
  }));
});