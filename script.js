function toggleNavMenu() {
    var nav = document.getElementById("mobileNav");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

function switchLanguage(lang) {
    var elements = document.querySelectorAll("[data-lang]");
    elements.forEach(function(element) {
        var text = element.getAttribute(`data-lang-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });
}

function openModal() {
    var modal = document.getElementById("bookingModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("bookingModal");
    modal.style.display = "none";
}