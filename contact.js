document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        
        const message = formData.get('message');
        const name = formData.get('name');
        const email = formData.get('email');


        displayConfirmationMessage(name, email, message);

        contactForm.reset();
    });

    function displayConfirmationMessage(name, email, message) {
    
        const confirmationMessage = `Thank you😊, ${name} (${email}), for your message to Nyanyumba Women Coffee Shop! We will get in touch with you soon.\n\nMessage: ${message}`;

        alert(confirmationMessage);
    }

    document.getElementById("profile-link").classList.add("fab", "fa-facebook");
    document.getElementById("profile-link2").classList.add("fab", "fa-twitter");
    document.getElementById("profile-link3").classList.add("fab", "fa-instagram");
    document.getElementById("whatsapp-link").classList.add("fab", "fa-whatsapp");

    document.querySelectorAll("img").forEach(function (img) {
        img.classList.add("img-responsive");
    });
});