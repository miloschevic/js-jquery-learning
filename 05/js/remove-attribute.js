var firstItem = document.getElementById('one'); // получаем первый элемент
if (firstItem.hasAttribute('class')) { // если у него есть атрибут class
	firstItem.removeAttribute('class'); // удаляем этот атрибут class
}