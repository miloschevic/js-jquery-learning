// сохраняем первый элемент списка в переменной
var firstItem = document.getElementById('one');

// получаем содержимое первого элемента списка
var ItemContent = firstItem.innerHTML;

// обновляем содержимое первого элемента списка, делая из него ссылку
firstItem.innerHTML = '<a href=\"http://google.com\">' + ItemContent + '</a>';
