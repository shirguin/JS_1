'use strict';
/*
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
*/
const list_dropdown_itemEls = document.querySelectorAll('.dropdown-item');
list_dropdown_itemEls.forEach(element => {
    element.classList.add('super-dropdown')
});

/*
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
*/

const btnEl = document.querySelector('.btn');
btnEl.classList.toggle('btn-secondary');

/*
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
*/
const dropdown_menuEls = document.querySelectorAll('.dropdown-menu');
dropdown_menuEls.forEach(el => {
    if (el.classList.contains('menu')) {
        el.classList.remove('dropdown-menu');
    }
});

/*
4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>`
*/
document.querySelector('div.dropdown').insertAdjacentHTML('afterend', '<a href="#">link</a>');

/*
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
*/

document.querySelector('#dropdownMenuButton').id = 'superDropdown';

/*
6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
*/
document.querySelector('[aria-labelledby="dropdownMenuButton"]').dataset.dd = '3';

/*
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
*/
document.querySelector('.dropdown-toggle').removeAttribute('type');