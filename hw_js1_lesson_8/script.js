"use strict";

/*
1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
*/

const input_fromEl = document.querySelector("#from");
const spanEl = document.querySelector("span");

input_fromEl.addEventListener("input", () => {
  spanEl.textContent = input_fromEl.value;
});

/*
2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'.
*/

const messageBtnEl = document.querySelector(".messageBtn");
const messageEl = document.querySelector(".message");

messageBtnEl.addEventListener("click", () => {
  messageEl.classList.add("animate_animated", "animate_fadeInLeftBig");
  messageEl.style.visibility = "visible";
});

/*
3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
*/
const formEl = document.querySelector('form');
const form_inputEl = formEl.querySelector("input");
const form_selectEl = formEl.querySelector("select");
const submit_buttonEl = formEl.querySelector("button");

submit_buttonEl.addEventListener("click", (e) => {
  if (form_inputEl.value === "") {
    e.preventDefault;
    form_inputEl.classList.add("error");
  } else if (form_selectEl.value === "") {
    e.preventDefault;
    form_selectEl.classList.add("error");
  } else {
    form_inputEl.classList.remove("error");
    form_selectEl.classList.remove("error");
  }
});
