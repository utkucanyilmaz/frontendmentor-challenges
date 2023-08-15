const billInput = document.getElementById("bill");
const customTipInput = document.getElementById("custom-tip");
const numberOfPeopleInput = document.getElementById("number-of-people");
const total = document.getElementById("total");
const tipAmount = document.getElementById("tip-amount");
const resetBtn = document.getElementById("reset-btn");
const percentageButtonsContainer = document.getElementById("buttons");
const buttons = document.querySelectorAll(".percentage-button");

let percentage = 0;

billInput.addEventListener("input", () => {
  isInputValid(billInput);
  calculateBill();
});

customTipInput.addEventListener("input", () => {
  isInputValid(customTipInput);
  calculateBill();
});

numberOfPeopleInput.addEventListener("input", () => {
  isInputValid(numberOfPeopleInput);
  calculateBill();
});

percentageButtonsContainer.addEventListener("click", e => {
  if (e.target.classList.contains("button")) {
    removeActive();
    resetBtn.disabled = false;
    e.target.classList.add("active");
    percentage = +e.target.innerText.replace("%", "");
    calculateBill();
    customTipInput.value = "";
  }
});

customTipInput.addEventListener("input", () => {
  percentage = +customTipInput.value;
  removeActive();
  calculateBill();
});

resetBtn.addEventListener("click", () => {
  reset();
  resetBtn.disabled = true;
});

function isInputValid(input) {
  if (+input.value) {
    resetBtn.disabled = false;
  } else if (input.value == "") {
    resetBtn.disabled = true;
  }

  let errorDiv = document.createElement("div");

  if (isNaN(input.value)) {
    errorDiv.innerText = "Must be number";
    errorDiv.className = "error text-red-500 absolute -top-8 right-2";
    input.parentNode.appendChild(errorDiv);
    input.classList.add("invalid-input");
    input.blur();
    setTimeout(() => {
      input.focus();
      errorDiv.remove();
      input.classList.remove("invalid-input");
    }, 2000);

    input.value = "";
  }

  if (input.value === "0") {
    errorDiv.innerText = "Can't be zero";
    errorDiv.className = "text-red-500 absolute -top-8 right-2";
    input.parentNode.appendChild(errorDiv);
    input.classList.add("invalid-input");
    input.blur();
    setTimeout(() => {
      input.focus();
      errorDiv.remove();
      input.classList.remove("invalid-input");
    }, 2000);

    input.value = "";
  }
}

function reset() {
  billInput.value = "";
  customTipInput.value = "";
  numberOfPeopleInput.value = "";
  tipAmount.innerHTML = "$0.00";
  total.innerHTML = "$0.00";
  removeActive();
}

function calculateBill() {
  if (+billInput.value && +numberOfPeopleInput.value) {
    let percentTipPerPerson =
      (+billInput.value * percentage) / 100 / +numberOfPeopleInput.value;

    let totalBillPerPerson =
      +billInput.value / +numberOfPeopleInput.value + percentTipPerPerson;

    total.innerText = `$${totalBillPerPerson.toFixed(2)}`;
    tipAmount.innerText = `$${percentTipPerPerson.toFixed(2)}`;
  } else {
    return;
  }
}

function removeActive() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
}
