document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.querySelector('#menu-toggle');
    const ctaButton = document.querySelector('#cta-button');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const languageSwitcherButtons = document.querySelectorAll('.language-switcher button');

    menuToggle.addEventListener('click', toggleNavMenu);
    ctaButton.addEventListener('click', openModal);
    closeModalButtons.forEach(button => button.addEventListener('click', closeModal));
    languageSwitcherButtons.forEach(button => {
        button.addEventListener('click', () => switchLanguage(button.dataset.language));
    });

    function toggleNavMenu() {
        const navLinks = document.querySelector('#nav-links');
        navLinks.classList.toggle('active');
    }

    function switchLanguage(lang) {
        const textsToChange = document.querySelectorAll('[data-lang-en], [data-lang-fr]');
        textsToChange.forEach(element => {
            if(lang === 'en') {
                element.textContent = element.dataset.langEn;
            } else if(lang === 'fr') {
                element.textContent = element.dataset.langFr;
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