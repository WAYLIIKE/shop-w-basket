function createMarkup(arr) {
  return arr
    .map(
      ({ img, price, quantity, name }) => `
        <li class="cart-item">
            <img src="${img}" alt="${name}" class="product-img">
            <h2>${name}</h2>
            <p>Quantity: ${quantity}</p>
            <p>Total price: ${quantity * price}</p>
        </li>
    `
    )
    .join('');
}

export { createMarkup };
