function toggleNavMenu() {
    document.querySelector('#nav-links').classList.toggle('is-active');
}

function switchLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        let key = element.getAttribute('data-lang');
        if (lang === 'FR') {
            // French translations
            let translations = {
                'home': 'Accueil',
                'menu': 'Menu',
                'book': 'Réserver',
                'welcome': 'Bienvenue au Joe\'s Coffee Shop',
                'cta-text': 'Prêt pour le meilleur café de votre vie?',
                'cta-button': 'Faire une réservation'
            };
            element.textContent = translations[key];
        } else {
            // English defaults
            let translations = {
                'home': 'Home',
                'menu': 'Menu',
                'book': 'Book',
                'welcome': 'Welcome to Joe\'s Coffee Shop',
                'cta-text': 'Ready for the best coffee of your life?',
                'cta-button': 'Book a table'
            };
            element.textContent = translations[key];
        }
    });
}

function openModal() {
    document.querySelector('#modal').style.display = 'block';
}

function closeModal() {
    document.querySelector('#modal').style.display = 'none';
}

document.querySelector('#menu-toggle').addEventListener('click', toggleNavMenu);

document.querySelector('#cta-button').addEventListener('click', openModal);

document.querySelectorAll('.close-modal').forEach(button => {
    button.addEventListener('click', closeModal);
});

document.querySelectorAll('.language-switcher button').forEach(button => {
    button.addEventListener('click', function() {
        switchLanguage(this.dataset.lang);
    });
});