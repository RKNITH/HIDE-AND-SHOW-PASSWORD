document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const toggleButton = document.getElementById('toggle-password');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        toggleButton.textContent = 'Show';
    }
});
