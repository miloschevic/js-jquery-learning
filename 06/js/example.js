var noteInput, noteName, textEntered, target;					// объявляем переменные

noteName = document.getElementById('noteName');					// элемент, содержащий заметку
noteInput = document.getElementById('noteInput');				// ввод для записи заметки

function writeLabel(e) {										// объявляем функцию
	if (!e) {													// если объект события отсутсвует	
		e = window.event;										// используем вариант отката для Internet Explorer 5-8
	}
	target = e.target || e.srcElement;							// получаем цель события
	textEntered = target.value;									// значение данного элемента
	noteName.textContent = textEntered;							// обновляем текст заметки
}

function recorderControls(e) {									// объявляем функцию recorderControls()
	if (!e) {													// если объект события отсутствует	
		e = window.event;										// используем вариант отката для IE 5-8
	}
	target = e.target || e.srcElement;							// получаем целевой элемент
	if (e.preventDefault) {										// если поддерживается метод preventDefault()
		e.preventDefault();										// подавляем действие, заданное по умолчанию	
	} else {													// иначе
		event.returnValue = false;								// резервный вариант для IE: предотвращаем действие, заданное по умолчанию
	}

	switch(target.getAttribute('data-state')) {					// получаем атрибут data-state
		case 'record': 											// если его значение равно record
		  record(target);											// вызываем функцию record()
		  break;													// выход из функции в позицию вызова
		case 'stop': 											// если его значение равно stop
		  stop(target); 											// вызываем функцию stop()
		  break;													// // выход из функции в позицию вызова
																// Здесь могут находиться другие кнопки
	}
};

function record(target) {										// объявляем функцию
	target.setAttribute('data-state', 'stop');					// Задаём для атрибута data-state значение stop
	target.textContent = 'stop';								// задаём текст "stop"
}

function stop(target) {											
	target.setAttribute('data-state', 'record');				// Задаём для атрибута data-state значение record
	target.textContent = 'record';								// задаём текст "record"
}

if (document.addEventListener) {								// если слушатель событий поддерживается
	document.addEventListener('click', function(e) {			// для каждого щелчка по объекту
		recorderControls(e);									// вызываем функцию recorderControls()
	}, false);													// захватываем результат на этапе всплывания события
																// если событие ввода срабатывает на этапе ввода имени пользователя
																// вызываем функцию writeLabel()
    noteInput.addEventListener('input', writeLabel, false);
} else {														// иначе
	document.attachEvent('onclick', function(e) {				// вариант отката для IE
		recorderControls(e);									// вызываем функцию writeLabel()
	});
																// если событие keyup срабатывает на этапе ввода имени
																// вызываем функцию writeLabel()
    noteInput.attachEvent('onkeyup', writeLabel, false);
}