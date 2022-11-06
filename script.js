const body = document.querySelector("body");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.getElementById("close");
const product = document.getElementById("product");
const thumbnails = document.querySelectorAll(".thumbnail");
const productImage = document.getElementById("product-image");
const modalThumbnails = document.querySelectorAll(".modal-thumb");
const modalProductImage = document.getElementById("modal-product-image");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const mobileNextBtn = document.getElementById("mobile-next");
const mobilePrevBtn = document.getElementById("mobile-prev");
const cartBtn = document.getElementById("cart-btn");
const cart = document.getElementById("cart");
const addToCartBtn = document.getElementById("add-to-cart");
const itemAmount = document.getElementById("item-amount");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const empty = document.getElementById("empty");
const findItem = document.querySelector(".find-item");
const cartItem = document.getElementById("cart-item");
const menuBtn = document.getElementById("menu-btn");
const menuCloseBtn = document.getElementById("menu-close");

let idx = 0;

product.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    return;
  } else {
    body.classList.add("modal");
    modalContent.classList.remove("hidden");
    modalContent.classList.add("flex");
  }
});

closeBtn.addEventListener("click", () => {
  body.classList.remove("modal");
  modalContent.classList.remove("flex");
  modalContent.classList.add("hidden");
});

nextBtn.addEventListener("click", () => {
  idx += 1;
  if (idx > 3) {
    idx = 0;
  }
  changeProductImage(modalProductImage, idx);
  activeThumbnail(modalThumbnails[idx]);
  otherThumbnails(
    modalThumbnails[idx === 0 ? modalThumbnails.length - 1 : idx - 1]
  );
});

prevBtn.addEventListener("click", () => {
  idx -= 1;
  if (idx < 0) {
    idx = modalThumbnails.length - 1;
  }
  changeProductImage(modalProductImage, idx);
  activeThumbnail(modalThumbnails[idx]);
  otherThumbnails(
    modalThumbnails[idx === modalThumbnails.length - 1 ? 0 : idx + 1]
  );
});

mobileNextBtn.addEventListener("click", () => {
  idx += 1;
  if (idx > 3) {
    idx = 0;
  }
  changeProductImage(productImage, idx);
});

mobilePrevBtn.addEventListener("click", () => {
  idx -= 1;
  if (idx < 0) {
    idx = modalThumbnails.length - 1;
  }
  changeProductImage(productImage, idx);
});

thumbnails.forEach((thumbnail, idx) => {
  thumbnail.addEventListener("click", e => {
    thumbnails.forEach(thumbnail => {
      otherThumbnails(thumbnail);
    });
    activeThumbnail(thumbnail);
    changeProductImage(productImage, idx);
  });
});

modalThumbnails.forEach((modalThumbnail, idx) => {
  modalThumbnail.addEventListener("click", e => {
    modalThumbnails.forEach(modalThumbnail => otherThumbnails(modalThumbnail));
    activeThumbnail(modalThumbnail);
    changeProductImage(modalProductImage, idx);
  });
});

cartBtn.addEventListener("click", () => {
  cart.classList.toggle("hidden");
});

addToCartBtn.addEventListener("click", () => {
  updateCart();
});

plus.addEventListener("click", () => {
  +itemAmount.innerText++;
});

minus.addEventListener("click", () => {
  if (itemAmount.innerText <= 0) {
    itemAmount.innerText === 0;
  } else {
    itemAmount.innerText--;
  }
});

menuBtn.addEventListener("click", () => {
  if (menu.classList.contains("-translate-x-full")) {
    menu.classList.remove("-translate-x-full");
    setTimeout(() => {
      menu.classList.add("translate-x-0");
      body.classList.add("modal");
    });
  }
});

menuCloseBtn.addEventListener("click", () => {
  if (menu.classList.contains("translate-x-0")) {
    menu.classList.remove("translate-x-0");
    setTimeout(() => {
      menu.classList.add("-translate-x-full");
      body.classList.remove("modal");
    });
  }
});

function updateCart() {
  if (cart.lastElementChild.classList.contains("item")) {
    return;
  } else {
    createItem();
  }
}

function createItem() {
  if (+itemAmount.innerText === 0) {
    return;
  } else {
    cartItem.innerHTML = "";
    cartItem.className = "py-7 px-7 max-sm:px-6 item rounded-";
    cartItem.innerHTML = `
  <div class="flex flex-row items-center justify-center">
    <div class="w-12 h-12">
      <img
        class="w-full h-full rounded-[4px]"
        src="./images/image-product-1-thumbnail.jpg"
        alt=""
      />
    </div>
    <div class="ml-4 flex flex-col items-start justify-center space-y-1 max-sm:text-[14px] max-sm:p-3">
      <p>Fall Limited Edition Sneakers</p>
      <p>
        $125.00 x ${+itemAmount.innerText}
        <span class="inline-block ml-1 font-bold">${
          125 * +itemAmount.innerText
        }$</span>
      </p>
    </div>
    <button class="ml-5" onclick="createEmpty()">
      <img
        class="hover:saturate-[100%] hover:brightness-[0%]"
        src="./images/icon-delete.svg"
        alt=""
      />
    </button>
  </div>
  <button
    class="flex justify-center items-center bg-orange p-4 rounded-lg hover:opacity-60 text-white w-full mt-6 max-sm:mt-3"
  >
    Checkout
  </button>
`;
    cart.appendChild(cartItem);
  }
}

function createEmpty() {
  cartItem.innerHTML = "";
  cartItem.className =
    "px-28 py-20 flex items-center justify-center font-bold text-darkgrayishblue max-sm:text-sm";
  cartItem.id = "empty";
  cartItem.innerText = `Your cart is empty.`;
}

function activeThumbnail(thumbnail) {
  thumbnail.classList.remove("border-transparent");
  thumbnail.classList.remove("hover:opacity-60");
  thumbnail.classList.add("active");
  thumbnail.firstElementChild.classList.add("opacity-60");
}

function otherThumbnails(thumbnail) {
  thumbnail.classList.remove("active");
  thumbnail.firstElementChild.classList.remove("opacity-60");
  thumbnail.classList.add("hover:opacity-60");
  thumbnail.classList.add("border-transparent");
}

function changeProductImage(product, idx) {
  product.src = `images/image-product-${idx + 1}.jpg`;
}
