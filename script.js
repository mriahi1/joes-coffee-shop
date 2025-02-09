document.getElementById('menu-toggle').addEventListener('click', toggleNavMenu);
document.querySelectorAll('.language-switcher button').forEach(button => {
    button.addEventListener('click', function() {
        switchLanguage(button.getAttribute('data-lang'));
    });
});

function toggleNavMenu() {
    document.getElementById('nav-links').classList.toggle('active');
}

function switchLanguage(lang) {
    const textElements = document.querySelectorAll('[data-lang-text]');
    textElements.forEach(element => {
        const textKey = element.getAttribute('data-lang-text');
        element.textContent = translations[lang][textKey];
    });
}

const translations = {
    'EN': {
        'title': 'Joe’s Coffee Shop',
        'home': 'Home',
        'about': 'About',
        'services': 'Services',
        'contact': 'Contact',
        'about-content': 'Welcome to Joe’s Coffee Shop - your go-to place for the finest coffee in town!',
        'services-content': 'We offer a wide range of coffee and snacks tailored to our customer’s needs.',
        'contact-content': 'Contact us for booking and more information.',
        'switch-to-french': 'Switch to French',
        'switch-to-english': 'Switch to English'
    },
    'FR': {
        'title': 'Café de Joe',
        'home': 'Accueil',
        'about': 'À propos',
        'services': 'Services',
        'contact': 'Contact',
        'about-content': 'Bienvenue au Café de Joe - votre point de rencontre pour le meilleur café en ville!',
        'services-content': 'Nous offrons une large gamme de cafés et snacks adaptés aux besoins de nos clients.',
        'contact-content': 'Contactez-nous pour des réservations et plus d’informations.',
        'switch-to-french': 'Passer au français',
        'switch-to-english': 'Passer à l’anglais'
    }
}