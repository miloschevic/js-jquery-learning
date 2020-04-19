(function(){
	var form = document.getElementById('newPwd');			// форма
	var password = document.getElementById('pwd');		// поле ввода пароля
	var submit = document.getElementById('submit');		// кнопка отправки

	var submitted = false;														// была ли форма отправлена?
	submit.disabled = true;														// отключаем кнопку отправки
	submit.className = 'disabled';										// меняем стиль кнопки


	// при вводе: проверяем, нужно ли отключать форму отправки
	addEvent(password, 'input', function(e) {					// при вводе пароля
		var target = e.target || e.srcElement;						// цель события
		submit.disabled = submitted || !target.value;		// устанавливаем свойство disabled
		// если форма была отправлена или если пароль не содержит значения, назначаем класс disabled
		submit.className = (!target.value || submitted) ? 'disabled' : 'enabled'; 
	});

	// при отправке: отключаем форму, чтобы её нельзя было повторно отправить
	addEvent(form, 'submit', function(e) {						// при отправке
		if (submit.disabled || submitted) {							// если отключена или отправлена
			e.preventDefault();														// прекращаем отправку формы
			return;																				// прекращаем функцию обработки
		}																								// если нет, продолжаем
		submit.disabled = true;													// отключаем кнопку отправки
		submitted = true;																// обновляем переменную submitted
		submit.className = 'disabled';									// обновляем стиль								

		// только для демонстрации: показываем то что отправлялось и отключаем отправку
		e.preventDefault();															// предотсвращаем отправку формы
		alert('Пароль: ' + password.value);					// показываем текст
	});
}());