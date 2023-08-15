const form = document.getElementById("form");

form.addEventListener("submit", validateEmail);

function validateEmail(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorDiv = document.getElementById("email-error");

  if (!regex.test(email)) {
    errorDiv.textContent = "Please enter a valid e-mail address";
    return false;
  }

  errorDiv.textContent = "";
}
