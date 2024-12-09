// Toggle Icon Navbar -------------------------------------------------------
let menuIcon = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Update Navigation Links Dynamically Based on Scroll Position
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // Loop through all sections
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Check if the section is in the viewport
        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all nav links
            navLinks.forEach((link) => {
                link.classList.remove('active');
            });

            // Add 'active' class to the corresponding nav link
            document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
        }
    });

    // Sticky header logic
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100); // Add 'sticky' class if scrolled down
};

// Optional: Remove Toggle Icon and Navbar on Link Click
navLinks.forEach((link) => {
    link.onclick = () => {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    };
});


// ScrollReveal: Scrol Animation -------------------------------------------------------------------
// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'top', // Starting animation position: top, bottom, left, right
    distance: '50px', // Distance the element moves
    duration: 1000, // Animation duration in milliseconds
    delay: 100, // Delay before animation starts in milliseconds
});

// Apply ScrollReveal animations
sr.reveal('.home-content, .heading', { origin: 'top' }); // Home Content and Heading
sr.reveal('.home-img, .contact form', { origin: 'bottom', delay: 200 }); // Home Image and Contact Form

sr.reveal('.about-img', { origin: 'left', delay: 200 }); // About Image
sr.reveal('.about-content', { origin: 'right', delay: 200 }); // About Content

sr.reveal('.skills-title, .skills-column h4', { interval: 100 }); // Skills Titles
sr.reveal('.skills-row .skill-item', { interval: 80 }); // Individual Skills

sr.reveal('.experience-item', { interval: 100, origin: 'left' }); // Experience Items
sr.reveal('.education-item', { interval: 100, origin: 'left' }); // Education Items

sr.reveal('.certificate-container, .certificate-box', { interval: 100, origin: 'bottom' }); // Certificates
sr.reveal('.portfolio-container, .portfolio-box', { interval: 100, origin: 'bottom' }); // Portfolio Projects

sr.reveal('.footer-text', { origin: 'bottom', delay: 200 }); // Footer Text
sr.reveal('.footer-iconTop', { origin: 'bottom', delay: 200 }); // Scroll to Top Icon

// Typed JS (Ype & Retipe) -------------------------------------------------------------------
const typed = new Typed('.multiple-text', {
    strings : [
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
})


//form Do not go form after form submition -------------------------------------------------
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form); // Collect form data

    // Submit the form using Fetch API
    fetch("https://formspree.io/f/movqzwol", {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json", // Required for JSON response
        },
    })
        .then((response) => {
            if (response.ok) {
                // Form submission successful
                alert("Message sent successfully! I will get back to you as soon as possible.");
                form.reset(); // Clear the form
            } else {
                throw new Error("Form submission failed.");
            }
        })
        .catch((error) => {
            // Handle errors
            console.error("Error:", error);
            alert("Error submitting form. Please try again.");
        });
});


//Certificates zoom on --------------------------------------------------------------------
// Show the modal with the clicked image
function showModal(img) {
    const modal = document.getElementById("certificateModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "flex"; // Use flex for centering
    modalImg.src = img.src;
}

// Close the modal when clicking outside the image
function closeModal() {
    const modal = document.getElementById("certificateModal");
    modal.style.display = "none";
}
