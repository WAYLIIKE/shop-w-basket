const e=JSON.parse(localStorage.getItem("basket-obj-data"))||[],t=document.querySelector(".js-list");let n=e.map((({img:e,price:t,quantity:n,name:o})=>`\n        <li class="cart-item">\n            <img src="${e}" alt="${o}" class="product-img">\n            <h2>${o}</h2>\n            <p>Quantity: ${n}</p>\n            <p>Total price: ${n*t}</p>\n        </li>\n    `)).join("");t.insertAdjacentHTML("beforeend",n);const o=document.querySelector(".clear-cart-btn"),c=document.querySelector(".total-price-label");if(e.length){o.hidden=!1;let t=e.reduce(((e,{quantity:t,price:n})=>e+t*n),0);console.log(c.textContent),c.textContent=`Total price of basket: ${t}`}else c.textContent="Your basket is empty";o.addEventListener("click",(function(){localStorage.clear(),t.innerHTML="",c.textContent="",window.location.href="../index.js"}));
//# sourceMappingURL=checkout.e970b6f6.js.map
