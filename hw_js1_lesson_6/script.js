"use strict";
/*
1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
*/
window.addEventListener("DOMContentLoaded", () => {
  console.log("все теги прогрузились");
});

/*
2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
*/
window.addEventListener("load", () => {
  console.log("страница загрузилась");
});

/*
3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
- Класс "super_element" присутствует в элементе "div".
- сообщение должно определять присутствует или отсутствует класс "super_element"
- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
- которому был совершен клик.
- Необходимо использовать делегирование.
*/
document.addEventListener("click", (e) => {
  const flagContainClass = e.target.classList.contains("super_element")
    ? "присутствует"
    : "отсутствует";
  const tagEl = e.target.tagName;
  console.log(
    `Класс "super_element" ${flagContainClass} в элементе ${tagEl.toLowerCase()}`
  );
});

/*
4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
*/
const textareaEl = document.querySelector("textarea");
textareaEl.addEventListener("mouseover", () => {
  console.log("Вы навели на textarea.");
});

/*
5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
*/
const ulEl = document.querySelector("ul");
ulEl.addEventListener("click", (e) => {
  const tagEl = e.target.tagName.toLowerCase();
  if (tagEl === "button") {
    console.log(e.target.textContent);
  }
});

/*
6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

Ответ: Думаю дело в всплытие события и получается, что event.target.textContent находится ниже event.target.tagName. Поэтому сначала выводится textContent, а потом tagName.
*/

/*
7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
*/

const evenLiEls = document.querySelectorAll("ul li:nth-child(even)");
evenLiEls.forEach(element => {
    element.style.backgroundColor = 'red';
});
