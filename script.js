// Send email using EmailJS
const contactForm = document.forms[0];
const serviceID = "service_mf8kagg";
const contactFormID = contactForm.getAttribute("id");
contactForm.addEventListener("submit", sendEmail);

function sendEmail(e) {
    e.preventDefault();
    grecaptcha.ready(function () {
        grecaptcha.execute('6LeMyLsqAAAAABENnFYUZlsTpMg3TcpGS5XB3mTj', { action: 'submit' }).then(function (token) {
            emailjs.sendForm(serviceID, contactFormID, this)
                .then(() => {
                    console.log('SUCCESS!');
                    const contactForm = document.querySelector("#template_e3uuswf");
                    contactForm.reset();
                    showFeedback({ title: "Message sent successfully", message: "Thank you for contacting me." });
                    activateAutoCloseFeedback();
                }, (error) => {
                    console.log('FAILED...', error);
                    showFeedback({ title: "Message NOT sent successfully", message: "Please check your <strong>internet connection</strong> and <strong>JavaScript setting</strong> and try again." });
                    activateAutoCloseFeedback();
                });
        });
    });
}

function showFeedback({ title, message }) {
    const feedback = document.querySelector(".feedback");
    const feedbackTitle = document.querySelector("#feedbackTitle");
    const feedbackMessage = document.querySelector("#feedbackMessage");
    feedbackTitle.textContent = title;
    feedbackMessage.textContent = message;
    feedback.style.display = "block";
    const closeButton = document.querySelector(".feedback button");
    closeButton.addEventListener("click", e => feedback.style.display = "none");
}

function activateAutoCloseFeedback() {
    setTimeout(() => {
        const feedback = document.querySelector(".feedback");
        if (feedback.style.display === "block") feedback.style.display = "none";
    }, 5000);
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

// Page transition
const profilePicture = document.querySelector("#profile-picture");
profilePicture.addEventListener("click", e => {
    e.preventDefault();
    let scale = 1;
    const animateImage = setInterval(() => {
        scale = scale - 0.1;
        if (scale >= 0.5) {
            profilePicture.style.transform = `scale(${scale}, ${scale})`;
        }
        if (scale <= 0.5) {
            location.href === "/index.html" ? location.href = "/details.html" : location.href = "/index.html";
        }
    }, 100);
});