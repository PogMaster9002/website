// Function to handle smooth scrolling
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
}

// Add event listeners to navigation links
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});

// Add event listener to button for smooth scrolling
function scrollToSection(sectionId) {
    smoothScroll(`#${sectionId}`);
}

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting me!');
    // Here you can add your form submission logic
});
