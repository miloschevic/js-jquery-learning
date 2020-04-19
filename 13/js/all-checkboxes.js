(function() {
	var form = document.getElementById('interests');	// получаем форму
	var elements = form.elements;											// все элементы формы
	var options = elements.genre;											// массив: флажки с жанрами
	var all = document.getElementById('all');					// флажок "любые"

	function updateAll() {
		for (var i = 0; i < options.length; i++) {			// перебираем флажки
			options[i].checked = all.checked;							// обновляем свойство checked
		}
	}
	addEvent(all, 'change', updateAll);								// добавляем обработчик событий

	function clearAllOption(e) {
		var target = e.target || e.srcElement;					// получем цель события
		if (!target.checked) {													// если флажок не установлен
			all.checked = false;													// сбрасываем флажок "любые"
		}
	}
	for (var i = 0; i < options.length; i++) {				// перебираем флажки
		addEvent(options[i], 'change', clearAllOption); // добавляем обработчик событий
	}

}());