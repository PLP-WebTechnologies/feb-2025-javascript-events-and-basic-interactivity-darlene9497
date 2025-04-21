document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // event listener for form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // validate form
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all the fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // if validation passes, show a success message
        alert('Message sent successfully 🎉');
        form.reset();
    });

    // interactivity to highlight input field when focused
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('focus', () => {
            input.style.backgroundColor = 'pink';
        });
    });

    // function to validate email format
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
