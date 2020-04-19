var firstItem = document.getElementById('one'); // получаем первый элемент списка

if (firstItem.hasAttribute('class')) { // если у него есть атрибут class
	var attr = firstItem.getAttribute('class'); // получаем атрибут

	// добавляем значение атрибута после списка
	var el  = document.getElementById('scriptResults');
	el.innerHTML = '<p>Первому элементу присвоен класс: ' + attr + '</p>';
	
}