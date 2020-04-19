function checkUsername() {										// объявляем функцию
	var elMsg = document.getElementById('feedback'); 			// получаем элемент обратной связи
	if (this.value.length < 5) { 								// если имя пользователя менее 5 символов
	elMsg.textContent = 'Имя пользователя должно содержать не менее 5 символов'; // указываем сообщение
	} else {
		elMsg.textContent = '';									// сбрасываем сообщение
	}
}

var elUsername = document.getElementById('username');			// получаем имя введённое пользователем
elUsername.onblur = checkUsername;								// при выходе элемента из фокуса вызвать функцию checkusername()
