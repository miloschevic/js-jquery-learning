var table = 3; // Элемент таблицы
var operator = 'addition'; // тип вычисления
var i = 1; // значение счетчика устанавливаем равным 1
var msg = ''; // сообщение

if (operator == 'addition') {
	while (i < 11) {
		msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
		i++;
	} 
} else {
	while (i < 11) {
		msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
		i++;
	}
}

var el = document.getElementById('blackboard').innerHTML = msg;