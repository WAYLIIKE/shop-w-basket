!function(){function t(t){return t&&t.__esModule?t.default:t}var i;i=JSON.parse('[{"id":1,"img":"https://static.dnipro-m.ua/cache/products/5591/catalog_origin_190906.jpg","name":"Шуруповерт","price":150,"description":"Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями."},{"id":2,"img":"https://static.dnipro-m.ua/cache/products/5591/catalog_origin_190906.jpg","name":"Шліфмашина","price":1299,"description":"Кутова шліфувальна машина Dnipro-M GS-98 - модель, яка поєднує в  оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування."},{"id":3,"img":"https://static.dnipro-m.ua/cache/products/5591/catalog_origin_190906.jpg","name":"Пила","price":11049,"description":"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі."},{"id":4,"img":"https://static.dnipro-m.ua/cache/products/5591/catalog_origin_190906.jpg","name":"Рівень","price":897,"description":"Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань  чудові захисні властивості,  й надає максимальний комфорт користувачеві в процесі експлуатації."},{"id":5,"img":"https://static.dnipro-m.ua/cache/products/5591/catalog_origin_190906.jpg","name":"Тример","price":3699,"description":"Тример електричний Dnipro-M 110 призначений для покосу густої трави,  також кущів з діаметром стовбура до 10 мм."},{"id":6,"img":"https://static.dnipro-m.ua/cache/products/5591/catalog_origin_190906.jpg","name":"Мотокоса","price":11049,"description":"Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, \'янів, газонів,  також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2."},{"id":7,"img":"https://static.dnipro-m.ua/cache/products/5591/catalog_origin_190906.jpg","name":"Генератор","price":10890,"description":"Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі   приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос."}]');var c=document.querySelector(".products-container"),a=t(i).map((function(t){var i=t.id,c=t.name,a=t.img,n=t.price,r=t.description;return'\n        <li data-id="'.concat(i,'" class="product-card js-product">\n            <img src="').concat(a,'" alt="').concat(c,'" class="product-img">\n            <h2 class="product-title">').concat(c,'</h2>\n            <p class="product-description">').concat(r,'</p>\n            <p class="product-price">').concat(n,'</p>\n            <button class="product-add-btn js-btn">Add to basket</button>\n        </li>\n    ')})).join("");c.innerHTML=a;var n=[];c.addEventListener("click",(function(c){if(!c.target.classList.contains("js-btn"))return;var a=c.target.closest(".product-card"),r=Number(a.dataset.id)-1;if(n.some((function(c){return c.name===t(i)[r].name})))existedItem=n.find((function(c){return c.name===t(i)[r].name})),existedItem.quantity+=1;else{var e={name:t(i)[r].name,img:t(i)[r].img,price:t(i)[r].price,quantity:1};n.push(e)}localStorage.setItem("basket-obj-data",JSON.stringify(n))}))}();
//# sourceMappingURL=index.10625669.js.map
