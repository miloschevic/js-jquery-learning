var elUsername = document.getElementById('username');			              // получаем имя, введённое пользователем
var elMsg = document.getElementById('feedback');				              // получаем элемент обратной связи

function checkUsername(minLength) {								              // объявляем функцию
	if (elUsername.value.length < minLength) { 					              // если имя пользователя менее 5 символов													//  устанавливаем сообщение
																              // устанавливаем сообщение
		elMsg.innerHTML = 'Имя пользователя должно содержать не менее ' + minLength + ' символов';
	} else {													              // иначе
		elMsg.innerHTML = '';									              // сбрасываем сообщение
	}
}

if (elUsername.addEventListener) {								              // если слушатель событий поддерживается
	elUsername.addEventListener('blur', function(){			                  // когда имя пользователя выходит из фокуса
		checkUsername(5);										              // вызываем функцию checkUsername()
	}, false);													              // Захватываем результат на этапе всплывания события
} else {														              // иначе
	elUsername.attachEvent('onblur', function(){				              // используем код отката для Internet Explorer: onblur
		checkUsername(5);										              // вызываем функцию checkUsername()
	});
}