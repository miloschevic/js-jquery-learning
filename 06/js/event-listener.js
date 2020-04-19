function checkUsername() {													// объявляем функцию
	var elMsg = document.getElementById('feedback');						// получаем элемент обратной связи
	if (this.value.length < 5) {											// если имя пользователя менее 5 символов
		elMsg.textContent = 'Имя пользователя должно содержать не менее 5 символов'; // указываем сообщение
	} else {																// иначе
		elMsg.textContent = '';												// сбрасываем сообщение
	}
}

var elUsername = document.getElementById('username'); 						// получаем имя, введённое пользвателем

elUsername.addEventListener('blur', checkUsername, false); 					// при выходе элемента из фокуса вызвать функцию checkusername()