var elements = document.getElementsByTagName("li"); // находим элементы li

if (elements.length > 0) { // если найден один или более элементов
	var el = elements[0]; // выбираем первый из них при помощи синтаксиса массивов
	el.className = 'cool'; // изменяем значение класса
}