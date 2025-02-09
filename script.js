document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const bookTableBtn = document.getElementById('book-table-btn');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const languageButtons = document.querySelectorAll('.language-switcher button');

    menuToggle.addEventListener('click', toggleNavMenu);
    bookTableBtn.addEventListener('click', openModal);

    closeModalButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            switchLanguage(this.getAttribute('data-lang'));
        });
    });
});

function toggleNavMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
}

function switchLanguage(lang) {
    const textsToChange = document.querySelectorAll('[data-lang-str]');
    textsToChange.forEach(element => {
        if(lang == 'EN') {
            element.textContent = element.getAttribute('data-lang-en');
        } else if(lang == 'FR') {
            element.textContent = element.getAttribute('data-lang-fr');
        }
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