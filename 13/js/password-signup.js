(function() {
	var password = document.getElementById('password');				// сохраняем поле для ввода паролей
	var passwordConfirm = document.getElementById('conf-password');
	
	function setErrorHighlighter(e) {
		var target = e.target || e.srcElement;									// получаем целевой элемент
		if (target.value.length < 8) {													// если его длина меньше 8
			target.className = 'fail';														// присваиваем class значение fail
		} else {																								// если более 8
			target.className = 'pass';														// присваиваем классу значение pass
		}
	}
	
	function removeErrorHighlighter(e) {
		var target = e.target || e.srcElement;									// получаем целевой элемент
		if (target.className === 'fail') {
			target.className = '';
		}
	}

	function passwordsMatch(e) { 															// вызывается только из поля для ввода подтверждения
		var target = e.target || e.srcElement;
		// если введённое значение совпадает с паролем и содержит не менее 8 символов
		if ((password.value === target.value) && target.value.length >= 8) {
			target.className = 'pass';
		} else {
			target.className = 'fail';
		}
	}

	addEvent(password, 'focus', removeErrorHighlighter);
	addEvent(password, 'blur', setErrorHighlighter);
	addEvent(passwordConfirm, 'focus', removeErrorHighlighter);
	addEvent(passwordConfirm, 'blur', passwordsMatch);
}());