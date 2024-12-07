
 document.addEventListener("DOMContentLoaded", function () {
    // Ensure the script runs after the DOM is fully loaded
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            // Prevent the default form submission
            event.preventDefault();

            // Create a success message
            const successMessage = document.createElement('div');
            successMessage.textContent = "Message was sent successfully!";
            successMessage.style.position = 'fixed';
            successMessage.style.top = '50%';
            successMessage.style.left = '50%';
            successMessage.style.transform = 'translate(-50%, -50%)';
            successMessage.style.padding = '1rem 2rem';
            successMessage.style.backgroundColor = 'rgba(90, 72, 72, 0.85)';
            successMessage.style.color = 'white';
            successMessage.style.borderRadius = '0.5rem';
            successMessage.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
            successMessage.style.zIndex = '1000';
            successMessage.style.textAlign = 'center';
            successMessage.style.fontSize = '1.2rem';

            // Append the success message to the body
            document.body.appendChild(successMessage);

            // Remove the message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 3000);

            // Clear the form fields after submission
            contactForm.reset();
        });
    } 
    else {
         console.error("Contact form not found. Again error somewhere!");
    }
});

