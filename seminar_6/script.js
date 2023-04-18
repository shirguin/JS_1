"use strict";

/* window.addEventListener("load", () => {
  console.log("Страница загрузилась");
});

const buttonEl = document.querySelector(".button");

buttonEl.onclick = () => {
  console.log("Событие onclick");
};

buttonEl.addEventListener("click", () => {
  console.log("Событие addEventListener");
}); */

/* const button_1Els = document.querySelectorAll(".btn_1");
const button_2El = document.querySelector(".btn_2");
const button_3El = document.querySelector(".btn_3");

button_1Els.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element);
  });
});

let count = sequence();

button_2El.addEventListener("click", () => {
    console.log(`меня нажали ${count()} раз.`);
});

function sequence() {
  let callNumber = 0;
    return function () {
        return ++ callNumber;
    }
};

button_3El.addEventListener('click', ()=>{
    button_3El.textContent = 'Вы нажали на эту кнопку'
}) */

/* const btn_1el = document.querySelector(".btn_1");
const btn_2el = document.querySelector(".btn_2");
const btn_3el = document.querySelector(".btn_3");

const h1El = document.createElement("h1");
h1El.textContent = "Новый заголовок";

btn_1el.addEventListener("click", () => {
  btn_1el.after(h1El);
});

btn_2el.addEventListener("click", () => {
  h1El.remove();
});

btn_3el.addEventListener("mouseover", () => {
  console.log("Вы навели на данную кнопку");
});

btn_3el.addEventListener("mouseleave", () => {
  console.log("Наведения на кнопку больше нет");
}); */

const listEl = document.querySelector('.list');
const button_1 = document.querySelector('.btn_1');
const button_2 = document.querySelector('.btn_2');
const button_3 = document.querySelector('.btn_3');

button_1.addEventListener('click', function () {
    const newItem = document.createElement('li');
    newItem.textContent = 'Новый элемент списка';
    listEl.appendChild(newItem);
});

button_2.addEventListener('click', function(){
    const el = document.querySelector('.list li');
    el.remove();
});

button_3.addEventListener('click', function () {
    button_3.classList.add('click');
})