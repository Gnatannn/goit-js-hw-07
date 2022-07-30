import { galleryItems } from "./gallery-items.js";
// Change code below this line

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

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("afterbegin", imgMarkup);
gallery.addEventListener("click", onImgClick);

// let instance;

// function onModalClose() {
//   instance.close();
// }

// function onEscClose(event) {
//   const ESC_KEY_CLOSE = "Escape";
//   if (event.code === ESC_KEY_CLOSE) {
//     onModalClose();
//   }
// }

function onImgClick(event) {
  //   console.log(event.target.dataset.sourse);
  event.preventDefault();
  const instance = basicLightbox.create(
    `
      <img src="${event.target.dataset.sourse}">`,
    {
      onShow: (instance) => {
        // window.addEventListener("keydown", onEscClose);
        document.onkeydown = function (evt) {
          evt = evt || window.event;
          var isEscape = false;
          if ("key" in evt) {
            isEscape = evt.key === "Escape" || evt.key === "Esc";
          } else {
            isEscape = evt.keyCode === 27;
          }
          if (isEscape) {
            instance.close();
          }
        };
      },
      //   onClose: (instance) => {
      //     window.removeEventListener("keydown", onEscClose);
      //   },
    }
  );
  instance.show();
}
