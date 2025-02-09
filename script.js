function toggleNavMenu() {
    var menu = document.querySelector(".nav-links");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach(element => {
        const translation = element.dataset.lang.split(';').find(t => t.startsWith(lang + ':'));
        if (translation) {
            element.textContent = translation.split(':')[1];
        }
    });

    document.querySelectorAll('.language-switcher button').forEach(button => {
        if (button.dataset.language === lang) {
            button.classList.add('language-active');
        } else {
            button.classList.remove('language-active');
        }
    });
}

function openModal() {
    document.querySelector("#modal").style.display = "block";
}

function closeModal() {
    document.querySelector("#modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#menu-toggle").addEventListener("click", toggleNavMenu);
    
    const closeButtons = document.querySelectorAll(".close-modal");
    closeButtons.forEach(button => {
        button.addEventListener("click", closeModal);
    });

    document.querySelector("#book-table-btn").addEventListener("click", openModal);

    const languageButtons = document.querySelectorAll(".language-switcher button");
    languageButtons.forEach(button => {
        button.addEventListener("click", function() {
            switchLanguage(button.dataset.language);
        });
    });
});