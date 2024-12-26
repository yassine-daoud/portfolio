// Toggle Icon Navbar -------------------------------------------------------
let menuIcon = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Update Navigation Links Dynamically Based on Scroll Position ------------
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

// Optional: Remove Toggle Icon and Navbar on Link Click -------------------
navLinks.forEach((link) => {
    link.onclick = () => {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    };
});

// ScrollReveal: Scroll Animation ------------------------------------------
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 100,
});

sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-img, .contact form', { origin: 'bottom', delay: 200 });
sr.reveal('.about-img', { origin: 'left', delay: 200 });
sr.reveal('.about-content', { origin: 'right', delay: 200 });
sr.reveal('.skills-title, .skills-column h4', { interval: 100 });
sr.reveal('.skills-row .skill-item', { interval: 80 });
sr.reveal('.experience-item, .education-item', { interval: 100, origin: 'left' });
sr.reveal('.certificate-container, .certificate-box, .portfolio-container, .portfolio-box', { interval: 100, origin: 'bottom' });
sr.reveal('.footer-text, .footer-iconTop', { origin: 'bottom', delay: 200 });

// Typed.js: Typing Animation -----------------------------------------------
const typed = new Typed('.multiple-text', {
    strings: [
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Web Developer",
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
    backDelay: 2000,
    startDelay: 500,
    showCursor: true,
    cursorChar: "|",
});

// Prevent Form Submission After Submit -------------------------------------------
// document.getElementById("contact-form").addEventListener("submit", function (event) {
//     event.preventDefault();

//     const form = event.target;
//     const formData = new FormData(form);

//     fetch("https://formspree.io/f/movqzwol", {
//         method: "POST",
//         body: formData,
//         headers: {
//             Accept: "application/json",
//         },
//     })
//         .then((response) => {
//             if (response.ok) {
//                 alert("Message sent successfully! I will get back to you as soon as possible.");
//                 form.reset();
//             } else {
//                 throw new Error("Form submission failed.");
//             }
//         })
//         .catch((error) => {
//             console.error("Error:", error);
//             alert("Error submitting form. Please try again.");
//         });
// });

// Certificates Zoom Modal --------------------------------------------------
function showModal(img) {
    const modal = document.getElementById("certificateModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeModal() {
    const modal = document.getElementById("certificateModal");
    modal.style.display = "none";
}


// Scroll event listener---------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.querySelector('.back-to-top');

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Smooth scroll to the top on click
    backToTopButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
});


