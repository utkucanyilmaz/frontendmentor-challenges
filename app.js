const inputs = document.querySelectorAll("input");
const trialBtn = document.querySelector(".component__trial");
const errorIcons = document.querySelectorAll(".error-icon");
const email = document.getElementById("email");
const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

console.log(inputs);
trialBtn.addEventListener("click", () => {
  inputs.forEach(input => {
    if (input.value === "") {
      input.classList.add("error");
      input.nextElementSibling.classList.add("display");
      input.previousElementSibling.classList.add("display");
    } else {
      input.classList.remove("error");
      input.nextElementSibling.classList.remove("display");
      input.previousElementSibling.classList.remove("display");
    }
  });

  if (email.value === "") {
    email.placeholder = "email@example.com";
    email.classList.add("input-color");
  }

  if (re.test(email.value.trim())) {
    email.classList.remove("error");
    email.nextElementSibling.classList.remove("display");
    email.previousElementSibling.classList.remove("display");
  } else {
    email.nextElementSibling.classList.add("display");
    email.previousElementSibling.classList.add("display");
    email.classList.add("error");
  }
});
