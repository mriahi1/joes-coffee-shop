document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('menuToggle');
    const bookTableBtn = document.getElementById('bookTableBtn');
    const closeModalButton = document.querySelector('.close-modal');
    const languageButtons = document.querySelectorAll('.language-switcher button');

    menuToggle.addEventListener('click', toggleNavMenu);
    bookTableBtn.addEventListener('click', openModal);
    closeModalButton.addEventListener('click', closeModal);

    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            switchLanguage(this.dataset.language);
        });
    });
});

function toggleNavMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function switchLanguage(lang) {
    const texts = document.querySelectorAll('[data-lang-key]');
    texts.forEach(text => {
        text.textContent = langData[lang][text.dataset.langKey] || text.textContent;
    });
}

function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

const langData = {
    "en": {
        "home": "Home",
        "menu": "Menu",
        "locations": "Locations",
        "about": "About",
        "bookTable": "Book a table"
    },
    "fr": {
        "home": "Accueil",
        "menu": "Menu",
        "locations": "Emplacements",
        "about": "À propos",
        "bookTable": "Réserver une table"
    }
};