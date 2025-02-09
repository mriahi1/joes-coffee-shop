document.addEventListener('alpine:init', () => {
  Alpine.data('languageSwitcher', () => ({
    lang: 'en',
    messages: {
      greeting: {
        en: 'Hello',
        fr: 'Bonjour'
      },
      question: {
        en: 'How are you?',
        fr: 'Comment ça va?'
      }
    },
    changeLang(newLang) {
      this.lang = newLang;
    },
    getGreeting() {
      return this.messages.greeting[this.lang];
    },
    getQuestion() {
      return this.messages.question[this.lang];
    }
  }));
});