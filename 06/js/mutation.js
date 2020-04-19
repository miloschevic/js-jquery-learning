var elList, addLink, newEl, newText, counter, listItems;						// объявляем переменные

elList = document.getElementById('list');										// получаем список
addLink = document.querySelector('a');											// получаем кнопку добавления элемента
counter = document.getElementById('counter');									// получаем счетчик элементов

function addItem(e) {															// объявляем функцию
	e.preventDefault();															// подавляем стандартное поведение ссылки
	newEl = document.createElement('li');										// новый элемент li
	newText = document.createTextNode('New list item');							// новый текстовый узел
	newEl.appendChild(newText);													// добавляем текст в li
	elList.appendChild(newEl);													// добавляем li в список
}

function updateCount() {														// объявляем функцию
	listitems = list.getElementsByTagName('li').length;							// получаем общее количество элементов li
	counter.innerHTML = listitems;												// обновляем счётчик
}

addLink.addEventListener('click', addItem, false);								// щелчок по кнопке
elList.addEventListener('DOMNodeInserted', updateCount, false);					// DOM обновляется