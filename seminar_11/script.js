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

  //вставка всего блока
  contentEl.append(productEl);
});
