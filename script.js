// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted!');
        alert('Thank you for your submission!');
        form.reset();
    });

    // Add hover effect to solution buttons
    const solutionButtons = document.querySelectorAll('.solution-btn');
    solutionButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#f0f0f0';
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = 'white';
        });
    });
});