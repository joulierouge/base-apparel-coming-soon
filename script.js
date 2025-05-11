const form = document.getElementById('email-form');
const emailInput = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');
const errorIcon = document.getElementById('error-icon');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
    showError("Email cannot be empty.");
  } else if (!emailPattern.test(email)) {
    showError("Please provide a valid email.");
  } else {
    hideError();
    console.log("✅ Email submitted:", email);
    emailInput.value = ''; // optional: clear input
  }
});

function showError(message) {
  errorMsg.textContent = message;
  errorIcon.style.display = 'block';
  emailInput.style.border = '2px solid hsl(0, 93%, 68%)';
}

function hideError() {
  errorMsg.textContent = '';
  errorIcon.style.display = 'none';
  emailInput.style.border = 'none';
}
