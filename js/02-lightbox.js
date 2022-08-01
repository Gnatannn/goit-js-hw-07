import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imgMarkup = galleryItems
  .map((galleryItem) => {
    return `<a class="gallery__item" href="${galleryItem.original}">
  <img
  class="gallery__image"
  src="${galleryItem.preview}"
  alt="${galleryItem.description}"/>
  </a>`;
  })
  .join("");

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("afterbegin", imgMarkup);
// gallery.addEventListener("click", onImgClick);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionType: "attr",
  captionPosition: "bottom",
  captionDelay: 250,
  captionsData: "alt",
});

// function onImgClick(event) {
//   event.preventDefault();

// }
