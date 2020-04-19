var firstItem = document.getElementById('one'); // находим первый элемент списка
var showTextContent = firstItem.textContent; // получаем значение textContent
var showInnerText = firstItem.innerText; // получаем значение innerText

// отображаем содержимое этих двух свойств после списка
var msg = '<p>textContent: ' + showTextContent + '</p>';
	msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

firstItem.textContent = 'пшеничные сухарики'; // обновляем первый элемент списка