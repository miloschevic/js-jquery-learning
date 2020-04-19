function checkUsername() { 									// объявляем функцию
	var elMsg = document.getElementById('feedback');		// получаем элемент обратной связи
	var elUsername = document.getElementById('username');   // получаем имя, введённое пользователем
	if (elUsername.value.length < 5) {						// если имя пользователя менее 5 символов
		elMsg.textContent = 'Логин должен быть не менее 5 символов'; // указываем сообщение
	} else {												// иначе
		elMsg.textContent = ''; 							// сбрасываем сообщение
	}
}