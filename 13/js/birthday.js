(function() {
	var $birth = $('#birthday');												  // поле для даты рождения
	var $parentsConsent = $('#parents-consent');					// флажок родительского согласия
	var $consentContainer = $('#consent-container');			// контейнер флажка
	
	// создаём виджет выбора даты с помощью jQuery UI
	$birth.prop('type', 'text').data('type', 'date').datepicker({
		dateFormat: 'yy-mm-dd'
	});
	
	$birth.on('blur change', checkDate);									// поле ввода даты теряет фокус
	
	function checkDate() {
		var dob = this.value.split('-');										// массив из даты
		// передаём в toggleParentsConsent() дату рождения в виде объекта Date
		toggleParentsConsent(new Date(dob[0], dob[1] - 1, dob[2]));
	}
	
	function toggleParentsConsent(date) {									// объявляем функцию
		if (isNaN(date)) return;														// выходим, если дата некорректная
		var now = new Date();																// новый объект Date: сегодня
		// если разница меньше 13 лет (мс * сек * мин * ч * д * годы) викосоcные годы не учитываются!
		// если пользователю меньше 13, выводим флажок родительского согласия
		if ((now - date) < (1000 * 60 * 60 * 24 * 365 * 13)) {
			$consentContainer.removeClass('hide');						// удаляем класс hide
			$parentsConsent.focus();													// переводим фокус на флажок
		} else {																						// в противном случае
			$consentContainer.addClass('hide');								// добавляем класс hide
			$parentsConsent.prop('checked', false);						// присваиваем checked значение false
		}
	}
}());