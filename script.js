document.querySelector('#menu-toggle').addEventListener('click', toggleNavMenu);
document.querySelectorAll('.language-switcher button').forEach(button => {
    button.addEventListener('click', function() {
        switchLanguage(this.getAttribute('data-lang'));
    });
});

function toggleNavMenu() {
    document.querySelector('#nav-links').classList.toggle('active');
}

function switchLanguage(lang) {
    const texts = {
        'en': {
            'nav_home': 'Home',
            'nav_about': 'About Us',
            'nav_menu': 'Menu',
            'nav_contact': 'Contact',
            'hero_title': 'Welcome to Joe\'s Coffee Shop',
            'hero_subtitle': 'The best coffee in town!',
            'about_heading': 'About Us',
            'about_content': 'We serve high quality coffee brewed from the finest beans.',
            'contact_us': 'Contact Us',
            'follow_us': 'Follow us on social media:'
        },
        'fr': {
            'nav_home': 'Accueil',
            'nav_about': 'À propos',
            'nav_menu': 'Menu',
            'nav_contact': 'Contact',
            'hero_title': 'Bienvenue chez Joe\'s Coffee Shop',
            'hero_subtitle': 'Le meilleur café en ville!',
            'about_heading': 'À propos de nous',
            'about_content': 'Nous servons un café de haute qualité préparé à partir des meilleurs grains.',
            'contact_us': 'Nous contacter',
            'follow_us': 'Suivez-nous sur les réseaux sociaux :'
        }
    };

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = texts[lang][key];
    });
}