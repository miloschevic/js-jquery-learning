var scores = [24, 32, 17]; // Массив баллов
var arrayLength = scores.length; // Элементы массива
var roundNumber = 0; // Текущий этап
var msg = ''; // Сообщение
var i; // счетчик

// цикл обрабатывает элементы массива
for (i=0; i < arrayLength; i++) {

	// массивы имеют основание 0 (поэтому этап 0 идёт первым)
	// прибавляем 1 к теекущему этапу
	roundNumber = (i + 1);

	// записываем текущий этап в сообщение
	msg += 'Этап ' + roundNumber + ': ';

	// получаем баллы из массива баллов
	msg += scores[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;