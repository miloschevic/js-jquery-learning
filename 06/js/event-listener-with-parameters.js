var elUsername = document.getElementById('username'); 					// получаем введённое имя пользователя
var elMsg = document.getElementById('feedback');						// получаем элемент для обратной связи

function checkUsername(minlength) {										// объявляем функцию
	if (elUsername.value.length < minlength) {							// если имя пользователя менее 5 символов
																		// задаём сообщение об ошибке
		elMsg.textContent = 'Имя пользователя должно иметь ' + minlength + ' или более символов';
	} else {															// иначе
		elMsg.innerHTML = '';											// сбрасываем сообщение
	}
}

elUsername.addEventListener('blur', function() { 						// когда элемент выходит из фокуса
	checkUsername(5);													// передаём аргумент
}, false);