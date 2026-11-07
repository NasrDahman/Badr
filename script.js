/* =========================
   MOBILE MENU
========================= */
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
    });
});

/* =========================
   TYPING EFFECT
========================= */
const typingElement = document.getElementById("typing");
const words = [
    "IT Student",
    "Web Developer",
    "Programmer",
    "Technology Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!deleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}
typeEffect();

/* =========================
   DARK / LIGHT MODE
========================= */
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☾";
        localStorage.setItem("theme", "light");
    } else {
        themeBtn.textContent = "☼";
        localStorage.setItem("theme", "dark");
    }
});

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeBtn.textContent = "☾";
}

/* =========================
   CERTIFICATE VIEWER
========================= */
const modal = document.getElementById("certificateModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".view-btn").forEach(button => {
    button.addEventListener("click", function () {
        const imagePath = this.getAttribute("data-image");
        const image = new Image();

        image.onload = function () {
            modalImage.src = imagePath;
            modal.style.display = "flex";
        };

        image.onerror = function () {
            alert("Please add your certificate image first.");
        };

        image.src = imagePath;
    });
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

/* =========================
   SCROLL REVEAL
========================= */
const revealElements = document.querySelectorAll(
    ".section-heading, .about-container, .education-card, .skill-card, .experience-card, .certificate-card, .project-card, .contact-box"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});

/* =========================
   CURRENT YEAR
========================= */
document.getElementById("year").textContent = new Date().getFullYear();
