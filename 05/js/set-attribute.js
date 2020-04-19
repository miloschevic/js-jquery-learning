var firstItem = document.getElementById('one'); // получаем первый элемент
firstItem.className = 'complete'; // изменяем его атрибут class

var fourthItem = document.getElementsByTagName('li').item(3); // получаем четвертый элемент
fourthItem.setAttribute('class', 'cool');