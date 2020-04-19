// создаем новый элемент и  сохраняем его в переменной
var newEl = document.createElement('li');

// создаем текстовый узел и сохраняем его в переменной
var newText = document.createTextNode('зернистый творог');

// прикрепляем новый текстовый узел к новому элементу
newEl.appendChild(newText);

// находим позицию, на которую должен быть поставлен новый элемент
var position = document.getElementsByTagName('ul')[0];

// ставим новый элемент на эту позицию
position.appendChild(newEl);