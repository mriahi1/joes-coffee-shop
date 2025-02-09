// script.js content

document.addEventListener("DOMContentLoaded", () => {
    const englishText = {
        title: "Joe's Coffee Shop",
        welcomeMsg: "Welcome to the best coffee shop!",
        about: "About Us",
        menu: "Menu",
        contact: "Contact Us"
    };

    const frenchText = {
        title: "Le Café de Joe",
        welcomeMsg: "Bienvenue au meilleur café!",
        about: "À Propos",
        menu: "Menu",
        contact: "Contactez-nous"
    };

    const languageSwitcher = document.getElementById('languageSwitcher');
    const title = document.getElementById('title');
    const welcomeMsg = document.getElementById('welcomeMsg');
    const about = document.getElementById('navAbout');
    const menu = document.getElementById('navMenu');
    const contact = document.getElementById('navContact');

    languageSwitcher.addEventListener('change', () => {
        const isFrench = languageSwitcher.checked;

        title.textContent = isFrench ? frenchText.title : englishText.title;
        welcomeMsg.textContent = isFrench ? frenchText.welcomeMsg : englishText.welcomeMsg;
        about.textContent = isFrench ? frenchText.about : englishText.about;
        menu.textContent = isFrench ? frenchText.menu : englishText.menu;
        contact.textContent = isFrench ? frenchText.contact : englishText.contact;
    });

    // Smooth scrolling
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let targetElement = document.querySelector(this.getAttribute("href"));
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Fade-in on scroll
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Highlight CTA button on scroll
    const ctaButton = document.getElementById('ctaButton');
    const options = {
        root: null,
        threshold: 0,
        rootMargin: "-100px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                ctaButton.classList.add('highlight');
            } else {
                ctaButton.classList.remove('highlight');
            }
        });
    }, options);

    observer.observe(document.querySelector('#main'));
});
