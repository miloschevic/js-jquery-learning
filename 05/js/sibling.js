// выбираем исходный элемент и находим элементы, смежные с ним
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

//  изменям значения атрибута class у смежных элементов
prevItem.className = 'complete';
nextItem.className = 'cool';