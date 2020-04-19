var elements = document.getElementsByClassName('hot'); // находим элементы с классом hot

if (elements.length > 2) { // если элементов 3 и более

	var el = elements[2]; // выделяем третий элемент из NodeList
	el.className = 'cool'; // изменяем значение атрибута class этого элемента

}
