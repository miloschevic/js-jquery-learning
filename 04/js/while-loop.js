var i = 1; // устаналиваем значение счетчика равным 1
var msg = ''; // сообщение

// сохраняем в переменной таблицу умножения на 5

while (i < 10) {
	msg += i + ' x 5 = ' + (i*5) + '<br />';
	i++;
}

document.getElementById('answer').innerHTML = msg;