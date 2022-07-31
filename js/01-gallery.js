import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const imgMarkup = galleryItems
  .map((galleryItem) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
  <img
  class="gallery__image"
  src="${galleryItem.preview}"
  data-sourse="${galleryItem.original}"
  alt="${galleryItem.description}"/>
  </a>
  </div>`;
  })
  .join("");

gallery.insertAdjacentHTML("afterbegin", imgMarkup);
gallery.addEventListener("click", onImgClick);

let modalWindow;

function onEscClose(event) {
  const ESC_KEY_CLOSE = "Escape";
  if (event.code === ESC_KEY_CLOSE) {
    modalWindow.close();
  }
}

function onImgClick(event) {
  //   console.log(event.target.dataset.sourse);
  event.preventDefault();
  const onImgClick = event.target.nodeName === "IMG";

  if (!onImgClick) {
    return;
  }

  const modalImgTemplate = `
  <div class="modal">
  <img src="${event.target.dataset.sourse}" alt="${event.target.alt}">
  </div>`;

  modalWindow = basicLightbox.create(modalImgTemplate, {
    onShow: (modalWindow) => {
      window.addEventListener("keydown", onEscClose);
    },
    onClose: (modalWindow) => {
      window.removeEventListener("keydown", onEscClose);
    },
  });
  modalWindow.show();
}
