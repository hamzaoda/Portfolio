
window.addEventListener("DOMContentLoaded", (event) => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector("#mainNav");
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove("navbar-shrink");
        } else {
            navbarCollapsible.classList.add("navbar-shrink");
        }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNav",
            rootMargin: "0px 0px -40%",
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });
});
// Load the EmailJS SDK
(function () {
    emailjs.init("hp1YprHn0fjmhDoQM");
    console.log('koko');
})();

// Get the form element
const contactForm = document.getElementById("contact-form");

// Add an event listener to the form's submit button
contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the user's inputs
    const name = contactForm.elements["name"].value;
    const email = contactForm.elements["email"].value;
    const message = contactForm.elements["message"].value;
    console.log('hello');

    // Use the EmailJS SDK to send the email
    emailjs
        .send("service_5p2e53o", "template_0mkmw9c", {
            from_name: name,
            from_email: email,
            message: message,
        })
        .then(
            () => {
                // Display a success message to the user
                alert("Your message has been sent!");
                // Clear the form inputs
                console.log('hello');
                contactForm.reset();
            },
            (error) => {
                console.log('hello2');
                // Display an error message to the user
                alert(
                    "There was an error sending your message. Please try again later."
                );
                console.error(error);
            }
        );
});
