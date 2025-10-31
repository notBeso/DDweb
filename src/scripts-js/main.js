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

    const audio = document.getElementById('myAudio');
    const playPauseButton = document.getElementById('playPauseButton');

    playPauseButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause Song';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play Song';
    }
    });
});