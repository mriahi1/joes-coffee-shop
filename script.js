document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".navbar-burger");
    const navMenu = document.querySelector(".navbar-menu");
    
    navToggle.addEventListener("click", function () {
        navToggle.classList.toggle("is-active");
        navMenu.classList.toggle("is-active");
    });
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            let target = document.getElementById(this.getAttribute('href').substring(1));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const langDict = {
        EN: {
            welcome: "Welcome to Joe's Coffee Shop!",
            open: "Open Hours: 8AM - 11PM",
            bookTable: "Book a Table"
        },
        FR: {
            welcome: "Bienvenue chez Joe's Coffee Shop!",
            open: "Heures d'ouverture : 8h - 23h",
            bookTable: "Réserver une Table"
        }
    };

    const langSelectors = document.querySelectorAll(".lang-toggle");
    const contentToChange = {
        welcome: document.querySelector("#welcome"),
        open: document.querySelector("#open"),
        bookTable: document.querySelector("#bookTable").innerText
    };

    langSelectors.forEach(function(selector) {
        selector.addEventListener('click', function () {
            const lang = this.dataset.lang;
            document.querySelector("#welcome").innerText = langDict[lang].welcome;
            document.querySelector("#open").innerText = langDict[lang].open;
            document.querySelector("#bookTable").innerText = langDict[lang].bookTable;
        });
    });

    const modal = document.querySelector('.modal');
    const bookTableBtn = document.querySelector('#bookTable');
    const closeModalBackground = document.querySelector('.modal-background');

    bookTableBtn.addEventListener('click', function () {
        modal.classList.toggle('is-active');
    });

    closeModalBackground.addEventListener('click', function () {
        modal.classList.remove('is-active');
    });

    bookTableBtn.addEventListener('click', function () {
        console.log('CTA button clicked!');
    });
});