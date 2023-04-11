/*
Обязательное задание.

Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не
стирать, код с решением задачи пишем под комментарием.
*/

"use strict";

/*
1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
*/
const super_linkEl = document.getElementById('super_link');
console.log(super_linkEl);

/*
2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
*/
const list_card_linkEl = document.querySelectorAll('.card-link');
list_card_linkEl.forEach((el) => {
    el.textContent = 'ссылка';
});

/*
3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
*/
const list_card_linkEl_in_card_body = document.querySelector('.card-body').querySelectorAll('.card-link');
console.log(list_card_linkEl_in_card_body);

/*
4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
*/

const elem_1 = document.querySelector('[data-number="50"]');
console.log(elem_1);

/*
5. Выведите содержимое тега title в консоль.
*/
const title = document.querySelector('title');
console.log(title.textContent);

/*
6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
*/

const elem_2 = document.querySelector('.card-title');
console.log(elem_2.parentNode);

/*
7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
*/

const cardEl = document.querySelector('.card');
const textEl = document.createElement('p');
textEl.textContent = 'Привет';
cardEl.prepend(textEl);

/*
8. Удалите тег h6 на странице.
*/
document.querySelector('h6').remove();