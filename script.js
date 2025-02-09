document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('#menuToggle');
    const bookTableBtn = document.querySelector('#bookTableBtn');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const languageButtons = document.querySelectorAll('.language-switcher button');

    menuToggle.addEventListener('click', toggleNavMenu);
    bookTableBtn.addEventListener('click', openModal);
    closeModalButtons.forEach(button => button.addEventListener('click', closeModal));
    languageButtons.forEach(button => button.addEventListener('click', function() {
        switchLanguage(button.getAttribute('data-language'));
    }));

    function toggleNavMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }

    function switchLanguage(lang) {
        const textsToChange = document.querySelectorAll('[data-lang-en], [data-lang-fr]');
        const langEn = lang === 'en';

        textsToChange.forEach(element => {
            if (element.getAttribute('data-lang-en') !== null) {
                element.textContent = langEn ? element.getAttribute('data-lang-en') : element.getAttribute('data-lang-fr');
            }
        });
    }

    function openModal() {
        const modal = document.querySelector('#modal');
        modal.style.display = 'block';
    }

    function closeModal() {
        const modal = document.querySelector('#modal');
        modal.style.display = 'none';
    }
});