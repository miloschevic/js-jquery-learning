var i = 1; // устанавливаем значение счетчика равным 1
var msg = ''; // сообщение

// сохраняем в переменной таблицу умножения на 5
do {
	msg += i + ' x 5 = ' + (i * 5) + '<br />';
	i++;
} while (i < 1);

// обратите внимание: при значении 1 код продолжает работать
document.getElementById('answer').innerHTML = msg; 