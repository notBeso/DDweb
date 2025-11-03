import 'bootstrap';

// Add any custom JavaScript here
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Example: Form submission
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for getting in touch!');
            this.reset();
        });
    }
})