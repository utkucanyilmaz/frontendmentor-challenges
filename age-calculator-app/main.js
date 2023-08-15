const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const dayLabel = document.getElementById("day-label");
const monthLabel = document.getElementById("month-label");
const yearLabel = document.getElementById("year-label");
const form = document.getElementById("form");
const inputContainer = document.getElementsByClassName("input-container");
const dayError = document.getElementById("day-error-message");
const monthError = document.getElementById("month-error-message");
const yearError = document.getElementById("year-error-message");
const validDateError = document.getElementById("valid-date-error");
const yearsArea = document.getElementById("years");
const monthsArea = document.getElementById("months");
const daysArea = document.getElementById("days");

form.addEventListener("submit", calculateAge);

function calculateAge(e) {
  e.preventDefault();

  if (
    dayInput.value === "" ||
    monthInput.value === "" ||
    yearInput.value === ""
  ) {
    if (dayInput.value === "") {
      dayInput.classList.add("error-border");
      dayLabel.classList.add("error-text");
      dayError.innerText = "This field is required";
      dayError.classList.add("error-message");
    } else {
      dayInput.classList.remove("error-border");
      dayLabel.classList.remove("error-text");
      dayError.innerText = "";
      dayError.classList.remove("error-message");
    }

    if (monthInput.value === "") {
      monthInput.classList.add("error-border");
      monthLabel.classList.add("error-text");
      monthError.innerText = "This field is required";
      monthError.classList.add("error-message");
    } else {
      monthInput.classList.remove("error-border");
      monthLabel.classList.remove("error-text");
      monthError.innerText = "";
      monthError.classList.remove("error-message");
    }

    if (yearInput.value === "") {
      yearInput.classList.add("error-border");
      yearLabel.classList.add("error-text");
      yearError.innerText = "This field is required";
      yearError.classList.add("error-message");
    } else {
      yearInput.classList.remove("error-border");
      yearLabel.classList.remove("error-text");
      yearError.innerText = "";
      yearError.classList.remove("error-message");
    }

    return;
  }

  const birthDate = new Date(
    `${yearInput.value}-${monthInput.value}-${dayInput.value}`
  );

  const today = new Date();

  if (dayInput.value > 31 || dayInput.value < 1) {
    dayInput.classList.add("error-border");
    dayLabel.classList.add("error-text");
    dayError.innerText = "Must be a valid day";
    dayError.classList.add("error-message");
    return;
  } else {
    dayInput.classList.remove("error-border");
    dayLabel.classList.remove("error-text");
    dayError.innerText = "";
    dayError.classList.remove("error-message");
  }

  if (monthInput.value > 12 || monthInput.value < 1) {
    monthInput.classList.add("error-border");
    monthLabel.classList.add("error-text");
    monthError.innerText = "Must be a valid month";
    monthError.classList.add("error-message");
    return;
  } else {
    monthInput.classList.remove("error-border");
    monthLabel.classList.remove("error-text");
    monthError.innerText = "";
    monthError.classList.remove("error-message");
  }

  if (yearInput.value > today.getFullYear()) {
    yearInput.classList.add("error-border");
    yearLabel.classList.add("error-text");
    yearError.innerText = "Must be in the past";
    yearError.classList.add("error-message");
    return;
  } else {
    yearInput.classList.remove("error-border");
    yearLabel.classList.remove("error-text");
    yearError.innerText = "";
    yearError.classList.remove("error-message");
  }

  if (!isValidDate(yearInput.value, monthInput.value - 1, dayInput.value)) {
    validDateError.classList.add("error-message");
    validDateError.innerText = "Must be valid date";
    return;
  } else {
    validDateError.classList.remove("error-message");
    validDateError.innerText = "";
  }

  let ageInYears = today.getFullYear() - birthDate.getFullYear();
  let ageInMonths = today.getMonth() - birthDate.getMonth();
  let ageInDays = today.getDate() - birthDate.getDate();

  if (
    ageInMonths < 0 ||
    (ageInMonths === 0 && today.getDate() < birthDate.getDate())
  ) {
    ageInYears--;
    ageInMonths += 12;
  }

  if (ageInDays < 0) {
    ageInMonths--;
    let daysInPrevMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    ageInDays += daysInPrevMonth;
  }

  yearsArea.innerText = ageInYears;
  monthsArea.innerText = ageInMonths;
  daysArea.innerText = ageInDays;
}

function isValidDate(year, month, day) {
  let givenDate = new Date(year, month, day);
  if (
    givenDate.getFullYear() == year &&
    givenDate.getMonth() == month &&
    givenDate.getDate() == day
  ) {
    return true;
  }
  return false;
}
