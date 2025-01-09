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
