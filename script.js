function toggleMode() {
    const body = document.body;
    const modeSwitch = document.getElementById('mode-switch');
    const header = document.querySelector('header');
    const nameHighlight = document.querySelector('.name-highlight');
    const footer = document.querySelector('footer');
    const form = document.getElementById('contact-form');
    const inputs = document.querySelectorAll('input, textarea');

    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        header.classList.replace('light-mode', 'dark-mode');
        nameHighlight.classList.replace('light-mode', 'dark-mode');
        footer.classList.replace('light-mode', 'dark-mode');
        form.classList.replace('light-mode', 'dark-mode');
        inputs.forEach(input => input.classList.replace('light-mode', 'dark-mode'));
        modeSwitch.src = 'light.jpg'; // Ensure this path is correct
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        header.classList.replace('dark-mode', 'light-mode');
        nameHighlight.classList.replace('dark-mode', 'light-mode');
        footer.classList.replace('dark-mode', 'light-mode');
        form.classList.replace('dark-mode', 'light-mode');
        inputs.forEach(input => input.classList.replace('dark-mode', 'light-mode'));
        modeSwitch.src = 'night.jpg'; // Ensure this path is correct
    }
}
