const dropdowns = document.querySelectorAll(".navbar__dropdown");
const hamburgerBtn = document.querySelector(".navbar__hamburger-btn");
const closeBtn = document.querySelector(".navbar__close-btn");
const navbarLinks = document.querySelector(".navbar__links");
const dropdownLinks = document.querySelectorAll(".toggle");
const dropdownIcons = document.querySelectorAll(".dropdown-icon");

dropdowns.forEach(dropdown => {
  dropdown.previousElementSibling.addEventListener("click", () => {
    dropdown.classList.toggle("block");
  });
});

hamburgerBtn.addEventListener("click", () => {
  navbarLinks.classList.add("block");
  document.body.classList.add("black-background");
  hamburgerBtn.classList.add("none");
  closeBtn.classList.add("block");
});

closeBtn.addEventListener("click", () => {
  navbarLinks.classList.remove("block");
  hamburgerBtn.classList.remove("none");
  closeBtn.classList.remove("block");
  document.body.classList.remove("black-background");
});

dropdownLinks.forEach((dropdownLink, index) => {
  let toggle = true;
  dropdownLink.addEventListener("click", () => {
    toggle = !toggle;
    if (toggle) {
      dropdownIcons[index].src = "./images/icon-arrow-down.svg";
    } else {
      dropdownIcons[index].src = "./images/icon-arrow-up.svg";
    }
  });
});
