const menuBtn = document.getElementById("menu-btn");
const navList = document.querySelector(".nav-list");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
console.log(menuBtn, navList);

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("block");
  menuIcon.classList.toggle("block");
  closeIcon.classList.toggle("block");
  document.body.classList.toggle("black-bg");
});
