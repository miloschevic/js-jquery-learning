var score = 75; // Балл
var msg=''; // Сообщение

function congratulate() {
	msg += 'Поздравляем!';
}

if (score >= 50) {
	congratulate();
	msg += 'Переходите к следующему этапу.';
}

var el = document.getElementById('answer');
el.innerHTML = msg;