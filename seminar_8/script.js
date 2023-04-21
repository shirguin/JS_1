"use strict";

/* const buttonEl = document.querySelector('button');
const checkboxEl = document.querySelector('#checkbox');
const formEl = document.querySelector('form');

const textEl = document.createElement('p');
textEl.textContent = 'Необходимо согласиться с условиями';

buttonEl.addEventListener('click', ()=>{
if (!checkboxEl.checked) {
  formEl.append(textEl);
}
}) */

/* const teaEl = document.querySelector(".tea");
const coffeEl = document.querySelector(".coffee");
const buttonEl = document.querySelector(".button");

buttonEl.addEventListener("click", () => {
  if (teaEl.checked) {
    console.log("Чай закончился");
  } else if (coffeEl.checked) {
    console.log("Кофе закончился");
  } else {
    console.log("Необходимо выбрать один из вариантов");
  }
});
 */

/* const passwordEl = document.querySelector(".password");
const buttonEl = document.querySelector(".button");

buttonEl.addEventListener("click", (event) => {
  if (passwordEl.value === "пароль") {
    passwordEl.style.borderColor = "green";
  } else {
    event.preventDefault;
    passwordEl.style.borderColor = "red";
    passwordEl.value = "пароль неверный";
  }
});
 */

const textEl = document.querySelector('.text');
const headingEl = document.querySelector('.heading');

textEl.addEventListener('input', ()=>{
  headingEl.textContent = textEl.value;
})