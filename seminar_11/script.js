const data = JSON.parse(dataProducts);
console.log(data);

const bodyEl = document.querySelector("body");
const contentEl = document.createElement("div");
contentEl.classList.add("content");
bodyEl.prepend(contentEl);

data.forEach((element) => {
  const productEl = document.createElement("div");
  productEl.classList.add("product");

  //Фото товара
  const linkProductImageEl = document.createElement("a");
  const productImageEl = document.createElement("img");
  productImageEl.src = element.img;
  productImageEl.alt = "photo";
  linkProductImageEl.append(productImageEl);
  productEl.append(linkProductImageEl);

  //Правый блок карточки товара
  const productInfoEl = document.createElement("div");
  productInfoEl.classList.add("product__info");

  //Название товара
  const linkProductInfoTitle = document.createElement("a");
  const titleEl = document.createElement("h2");
  titleEl.classList.add("product__info__title");
  titleEl.textContent = element.name;
  linkProductInfoTitle.append(titleEl);
  productInfoEl.append(linkProductInfoTitle);

  //Цена товара
  const priceEl = document.createElement("div");
  priceEl.classList.add("product__info__price");

  const priceTextEl = document.createElement("p");
  priceTextEl.classList.add("product__info__property");
  priceTextEl.textContent = "Price:";

  const priceValueEl = document.createElement("span");
  priceValueEl.classList.add("product__info__price__value");
  priceValueEl.textContent = `$${element.price}`;

  priceEl.append(priceTextEl, priceValueEl);
  productInfoEl.append(priceEl);

  //Цвет товара
  const colorEl = document.createElement("div");
  colorEl.classList.add("product__info__color");

  const colorTextEl = document.createElement("p");
  colorTextEl.classList.add("product__info__property");
  colorTextEl.textContent = "Color:";

  const colorValueEl = document.createElement("span");
  colorValueEl.classList.add("product__info__color__value");
  colorValueEl.textContent = element.color;

  colorEl.append(colorTextEl, colorValueEl);
  productInfoEl.append(colorEl);

  //Размер товара
  const sizeEl = document.createElement("div");
  sizeEl.classList.add("product__info__size");

  const sizeTextEl = document.createElement("p");
  sizeTextEl.classList.add("product__info__property");
  sizeTextEl.textContent = "Size:";

  const sizeValueEl = document.createElement("span");
  sizeValueEl.classList.add("product__info__size__value");
  sizeValueEl.textContent = element.size;

  sizeEl.append(sizeTextEl, sizeValueEl);
  productInfoEl.append(sizeEl);

  //Количество товара
  const quantityEl = document.createElement("div");
  quantityEl.classList.add("product__info__quantity");

  const quantityTextEl = document.createElement("p");
  quantityTextEl.classList.add("product__info__property");
  quantityTextEl.textContent = "Quantity:";

  const quantityValueEl = document.createElement("input");
  quantityValueEl.classList.add("product__info__quantity__value");
  quantityValueEl.type = "number";
  quantityValueEl.value = element.quantity;

  quantityEl.append(quantityTextEl, quantityValueEl);
  productInfoEl.append(quantityEl);

  //вставка product__info
  productEl.append(productInfoEl);

  //Иконка DELETE
  const deleteEl = `<div class="product__delete">
  <a href="#">
    <svg
      class="product__delete_svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467832C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
        fill="#575757"
      />
    </svg>
  </a>
</div>`;

  productEl.insertAdjacentHTML("beforeEnd", deleteEl);

  //вставка всего блока
  contentEl.append(productEl);
});
