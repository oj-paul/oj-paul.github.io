// Send email using EmailJS
const contactForm = document.forms[0];
const serviceID = "service_mf8kagg";
const contactFormID = contactForm.getAttribute("id");
contactForm.addEventListener("submit", sendEmail);

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceID, contactFormID, this)
        .then(() => {
            console.log('SUCCESS!');
        }, (error) => {
            console.log('FAILED...', error);
        });
}

// Show selected nav link with .active class
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.onclick = (() => {
        setTimeout(() => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        }, 300);
    });
});

const about = document.querySelector("#about");
const skills = document.querySelector("#skills");
const work = document.querySelector("#work");
const contact = document.querySelector("#contact");

const sections = [about, skills, work, contact];

window.onscroll = (() => {
    sections.forEach((section, i) => {
        let sectionPositionY = section.getBoundingClientRect().y;
        const topOffset = 235;
        if (sectionPositionY < (window.innerHeight - topOffset)) {            
            navLinks.forEach(l => l.classList.remove("active"));
            navLinks[i].classList.add("active");
        }
    });
});
