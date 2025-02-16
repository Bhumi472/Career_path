// Example JavaScript for interactivity
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});

document.addEventListener("DOMContentLoaded", function() {
    const serviceLinks = document.querySelectorAll(".service-item");

    serviceLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = this.getAttribute("href");
        });
    });
});
