import { createMarkup } from '../templates/checkoutTemplates';

const checkoutArr = JSON.parse(localStorage.getItem('basket-obj-data')) || [];
const basketList = document.querySelector('.js-list');

let basketMarkup = createMarkup(checkoutArr);
basketList.insertAdjacentHTML('beforeend', basketMarkup);

const btn = document.querySelector('.clear-cart-btn');

const totalPrice = document.querySelector('.total-price-label');

if (checkoutArr.length) {
  btn.hidden = false;
  let basketPrice = checkoutArr.reduce((total, { quantity, price }) => {
    return (total += quantity * price);
  }, 0);
  console.log(totalPrice.textContent);
  totalPrice.textContent = `Total price of basket: ${basketPrice}`;
} else {
  totalPrice.textContent = `Your basket is empty`;
}

btn.addEventListener('click', handleBtn);

function handleBtn() {
  localStorage.clear();
  basketList.innerHTML = '';
  totalPrice.textContent = '';
  window.location.href = '../index.js';
}
