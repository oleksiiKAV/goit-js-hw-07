import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from 'basiclightbox'
// const basicLightbox = require('basiclightbox')

console.log(galleryItems);


// <ul> галереи
const gallery = document.querySelector('.gallery');
// add h1
const h1 = document.createElement("h1");
h1.textContent = "GOIT-JS-07 Image gallery Task 01 basiclightbox";
// h1.style.visibility = "hidden";
gallery.before(h1);
h1.style.display = "none";
// add items
galleryItems.forEach(item => {
    // <li> with class "gallery__item"
    const li = document.createElement('li');
    li.classList.add('gallery__item');

    // add link <a> with class "gallery__link" and attr href
    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;

    // Create <img> with class "gallery__image" and attr src и alt
    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.src = item.preview;
    img.dataset.source = item.original;

    img.alt = item.description;

    // Add action into img
    img.addEventListener('click', (event) => {
        event.preventDefault();

        const fullImg = basicLightbox.create(`
            <img src="${img.dataset.source}" alt="${img.alt}" />`);
        fullImg.show();
        // add Esc
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                fullImg.close();
            }
        });
    });

    // Add <img> into <a>
    link.appendChild(img);

    // Add <a> into <li>
    li.appendChild(link);

    // Add <li> into <ul>
    gallery.appendChild(li);
});