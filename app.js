const validTokens = ["token123", "mySecureToken", "abc123"]; // Pre-defined tokens
const loginBtn = document.getElementById('login-btn');
const tokenInput = document.getElementById('token-input');
const errorMessage = document.getElementById('error-message');
const mainContent = document.getElementById('main-content');
const loginContainer = document.querySelector('.login-container');

loginBtn.addEventListener('click', () => {
    const enteredToken = tokenInput.value;
    if (validTokens.includes(enteredToken)) {
        // Hide login and show main content
        loginContainer.classList.add('hidden');
        mainContent.classList.remove('hidden');
    } else {
        // Show error message
        errorMessage.classList.remove('hidden');
    }
});
