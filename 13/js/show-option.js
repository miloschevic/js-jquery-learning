(function() {
	var form, options, other, otherText, hide;								// объявляем переменные
	form = document.getElementById('how-heard');		// получаем форму 
	options = form.elements.heard;									// получаем переключатели
	other = document.getElementById('other');				// переключатель "другое"
	otherText = document.getElementById('other-text'); // поле ввода "другое"
	otherText.className = 'hide';										// скрываем поле ввода 

	for (var i = [0]; i < options.length; i++) {						// перебираем переключатели
		addEvent(options[i], 'click', radioChanged);	// добавляем обработчик событий
	}

	function radioChanged() {
		hide = other.checked ? '' : 'hide';						// выбран ли вариант "другое"
		otherText.className = hide;										// отображаем/скрываем поле ввода
		if (hide) {																		// если поле ввода скрыто
			otherText.value = '';												// сбрасываем его содержимое
		}
	}
}());