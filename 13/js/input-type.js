(function() {

	var pwd = document.getElementById('pwd');							// получаем поле ввода пароля
	var chk = document.getElementById('showPwd');					// получаем флажок
	
	addEvent(chk, 'change', function(e) {									// при щелчке по флажку
		var target = e.target || e.srcElement;							// получаем его
		try {																								// пытаемся выполнить следующий блок
			if (target.checked) {															// если флажок установлен
				pwd.type = 'text';															// присваиваем type значение text
			} else {																					// если нет
				pwd.type = 'password';													// присваиваем type значение password
			}
		} catch(error) {																		// если возникла ошибка
			alert('Этот браузер не умеет переключать типы');	// сообщаем о невозможности изменения типа
		}
	});

}());