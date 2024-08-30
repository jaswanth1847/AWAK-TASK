
let formEl = document.getElementById('loginForm')

formEl.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const message = document.getElementById('message');

    usernameError.textContent = '';
    passwordError.textContent = '';
    message.textContent = '';

    let flag = true;

    if (!username) {
        usernameError.textContent = '*Username/Email is required.';
        flag = false;
    } else if (!/\S+@\S+\.\S+/.test(username)) {
        usernameError.textContent = '*Please enter a valid email.';
        flag = false;
    }

    if (!password) {
        passwordError.textContent = '*Password is required.';
        flag = false;
    } else if (password.length < 6) {
        passwordError.textContent = '*Password must be at least 6 characters long.';
        flag = false;
    }

    if (flag===true) {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            username: username,
            password: password
        })
        .then(response => {
            message.textContent = 'Login successful!';
            message.style.color = 'green';
        })
        .catch(error => {
            message.textContent = 'Login failed. Please try again.';
            message.style.color = 'red';
        });
    }
});




document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const toggleButton = document.getElementById('togglePassword');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        toggleButton.textContent = 'Show';
    }
});