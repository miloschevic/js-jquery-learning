function checkUsername() {												// объявляем функцию
	var username = el.value;											// сохраняем имя пользователя в переменной
	if (username.length < 5) {											
		elMsg.className = 'warning';									// изменяем атрибут class у этого сообщения
		elMsg.textContent = 'Имя слишком короткое...';
	} else {
		elMsg.textContent = '';
	}
}
function tipUsername() {
	elMsg.className = 'tip';
	elMsg.innerHTML = 'Имя пользователя должно содержать не менее 5 символов';
}


var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

el.addEventListener('focus', tipUsername, false);						// событие focus вызывает функцию tipUsername()
el.addEventListener('blur', checkUsername, false);						// событие focus вызывает функцию checkUsername()