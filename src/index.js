// *************Практика*************** \\
// Для практичного завдання використаємо збірку Parcel та ES6 модулі
// Застосувати готові стилі з файлу style.css
// Потрібно створити інтернет-магазин в якому буде 2 сторінки.

// Сторінка Home має:
// 1 Містити картки товарів (їх можна знайти в файлі products.json)
// (приклад однієї картки https://prnt.sc/klV2uzLIcG8w)
// 2 На списку товарів реалізовано делегування подій на додавання
// товару в кошик
// 3 Для додавання товару в кошик використовуй LS
// 4 Під час додавання контролюй кількість доданих товарів,
// для цього створи в об'єкті доданого товару новий ключ quantity

// Сторінка Checkout має:
// 1 Список карток доданих товарів, кожна картка має містити
// кількість куплених товарів та загальна вартість за даний товар.
// (приклад однієї картки https://prnt.sc/ssZA4rzw1x9L)
// 2 Повідомлення про загальну вартість покупки, якщо кошик порожній,
// то повідомлення "Your basket is empty"
// 3 Кнопку для очищення кошика, після натискання на неї всі
// товари видаляються, а користувача перенаправляємо на сторінку Home

import { createMarkup } from './templates/productTemplate';
import instruments from './product.json';

const list = document.querySelector('.products-container');

let markup = createMarkup(instruments);
list.innerHTML = markup;
const returnArr = [];

export { returnArr };
list.addEventListener('click', handleClick);

function handleClick(event) {
  if (!event.target.classList.contains('js-btn')) {
    return;
  }

  const idCard = event.target.closest('.product-card');
  const id = Number(idCard.dataset.id) - 1;
  const alreadyIn = returnArr.some(item => item.name === instruments[id].name);
  if (alreadyIn) {
    existedItem = returnArr.find(item => item.name === instruments[id].name);
    existedItem.quantity += 1;
  } else {
    const basketObj = {
      name: instruments[id].name,
      img: instruments[id].img,
      price: instruments[id].price,
      quantity: 1,
    };
    returnArr.push(basketObj);
  }
  localStorage.setItem('basket-obj-data', JSON.stringify(returnArr));
}
