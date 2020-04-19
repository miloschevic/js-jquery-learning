// ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ К НАЧАЛУ И КОНЦУ СПИСКА
var list = document.getElementsByTagName('ul')[0]; // получаем элемент ul

// ДОБАВЛЕНИЕ НОВОГО ЭЛЕМЕНТА К КОНЦУ СПИСКА
var newItemLast = document.createElement('li'); // создаём элемент
var newTextLast = document.createTextNode('деревенская сметана'); // создаём текстовый узел
newItemLast.appendChild(newTextLast); // добавляем текстовый узел к элементу
list.appendChild(newItemLast); // добавляем элемент к концу списка

// ДОБАВЛЕНИЕ НОВОГО ЭЛЕМЕНТА К НАЧАЛУ СПИСКА
var newItemFirst = document.createElement('li'); // создаём элемент
var newTextFirst = document.createTextNode('белокочанная капуста'); // создаём текстовый узел
newItemFirst.appendChild(newTextFirst); // добавляем текстовый узел к элементу
list.insertBefore(newItemFirst, list.firstChild); // добавляем элемент к концу списка



var listItems = document.querySelectorAll('li'); // все элементы li

// ДОБАВЛЯЕМ КЛАСС COOL КО ВСЕМ ЭЛЕМЕНТАМ СПИСКА
var i; // переменная счетчика
for (i = 0; i < listItems.length; i++) { // перебираем элементы в цикле
	listItems[i].className = 'cool'; // изменяем класс на cool
}

// ДОБАВЛЯЕМ В ЗАГОЛОВОК ИНФОРМАЦИЮ О КОЛИЧЕСТВЕ ЭЛЕМЕНТОВ В СПИСКЕ
var heading = document.querySelector('h2'); // элемент h2
var headingText = heading.firstChild.nodeValue; // текст элемента h2
var totalItems = listItems.length; // количество элементов li
var newHeading = headingText + '<span>' + totalItems + '</span>'; // контент
heading.innerHTML = newHeading; // обновляем h2
