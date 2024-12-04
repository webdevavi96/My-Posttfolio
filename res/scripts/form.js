document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent form submission

            // Log form data for debugging
            const formData = new FormData(form);
            console.log("Form data:");

            // Log each form field name and its value
            formData.forEach((value, key) => {
                console.log(key, value);
            });

            const serviceID = "service_ue9vxfh";
            const templateID = "template_5nezzpy";

            emailjs.sendForm(serviceID, templateID, form)
                .then(() => {
                    document.getElementById("status").innerText = "Message sent successfully!";
                    form.reset(); // Reset form after submission
                })
                .catch((error) => {
                    document.getElementById("status").innerText = "Failed to send the message.";
                    console.error("EmailJS Error:", error);
                });
        });
    } else {
        console.error("Form with ID 'contactForm' not found.");
    }
});