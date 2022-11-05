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

let idx = 0;

product.addEventListener("click", () => {
  body.classList.add("modal");
  modalContent.classList.remove("hidden");
  modalContent.classList.add("flex");
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
