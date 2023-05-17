const sliderItems = [
  {
    title: "Discover innovative ways to decorate",
    descp:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    mobileImageSrc: "/images/mobile-image-hero-1.jpg",
    desktopImageSrc: "/images/desktop-image-hero-1.jpg",
  },
  {
    title: "We are available all across the globe",
    descp:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today..",
    mobileImageSrc: "/images/mobile-image-hero-2.jpg",
    desktopImageSrc: "/images/desktop-image-hero-2.jpg",
  },
  {
    title: "Manufactured with the best materials",
    descp:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    mobileImageSrc: "/images/mobile-image-hero-3.jpg",
    desktopImageSrc: "/images/desktop-image-hero-3.jpg",
  },
];

let sourceIndex = 0;

const mobileImageHero = document.getElementById("mobile-image-hero");
const desktopImageHero = document.getElementById("desktop-image-hero");
const title = document.getElementById("title");
const descp = document.getElementById("descp");
const sliderLeft = document.getElementById("slider-left");
const sliderRight = document.getElementById("slider-right");
const navBtn = document.getElementById("nav-btn");
const navCloseBtn = document.getElementById("nav-close-btn");
const navbar = document.getElementById("navbar");
const productDescp = document.getElementById("product-descp");

const changeSliderItem = isBtnLeft => {
  if (isBtnLeft && sourceIndex > 0) {
    sourceIndex--;
  }

  if (!isBtnLeft && sourceIndex < sliderItems.length - 1) {
    sourceIndex++;
  }

  title.innerText = sliderItems[sourceIndex].title;
  descp.innerText = sliderItems[sourceIndex].descp;
  desktopImageHero.src = sliderItems[sourceIndex].desktopImageSrc;
  mobileImageHero.srcset = sliderItems[sourceIndex].mobileImageSrc;
};

navBtn.addEventListener("click", () => {
  navbar.classList.remove("-translate-x-full");
  navbar.classList.add("translate-x-0");
  document.body.classList.add("black-layer");
});

navCloseBtn.addEventListener("click", () => {
  navbar.classList.remove("translate-x-0");
  navbar.classList.add("-translate-x-full");
  document.body.classList.remove("black-layer");
});

sliderLeft.addEventListener("click", () => changeSliderItem(true));
sliderRight.addEventListener("click", () => changeSliderItem(false));
