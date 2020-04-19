var itemTwo = document.getElementById('two'); // получаем второй элемент из списка
var elText = itemTwo.firstChild.nodeValue; // получаем его текстовое содержимое
elText = elText.replace('кедровые орешки', 'белокочанная капуста'); // меняем значение текстового узла
itemTwo.firstChild.nodeValue = elText; // обновляем элемент списка