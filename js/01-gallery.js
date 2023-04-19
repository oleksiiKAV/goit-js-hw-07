import { galleryItems } from './gallery-items.js';
// Change code below this line
// import * as basicLightbox from 'basiclightbox'
// const basicLightbox = require('basiclightbox')

console.log(galleryItems);

// Получаем элемент <ul> галереи
const gallery = document.querySelector('.gallery');

// Перебираем массив объектов изображений и добавляем каждое изображение в галерею
galleryItems.forEach(item => {
    // Создаем новый элемент <li> с классом "gallery__item"
    const li = document.createElement('li');
    li.classList.add('gallery__item');

    // Создаем новый элемент <a> с классом "gallery__link" и атрибутом href
    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;

    // Создаем новый элемент <img> с классом "gallery__image" и атрибутами src и alt
    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.src = item.preview;
    img.alt = item.description;

    // Добавляем обработчик события click на изображение
    img.addEventListener('click', (event) => {
        event.preventDefault();
        // Открываем изображение в модальном окне BasicLightbox
        const fullImg = basicLightbox.create(`
          <img src="${item.original}" alt="${item.description}" />
        `);
        fullImg.show();
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                fullImg.close();
            }
        });
    });

    // Добавляем новый элемент <img> в новый элемент <a>
    link.appendChild(img);

    // Добавляем новый элемент <a> в новый элемент <li>
    li.appendChild(link);

    // Добавляем новый элемент <li> в <ul> галереи
    gallery.appendChild(li);
});