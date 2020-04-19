// создание HTML-разметки для сообщения

var msg = '<div class=\"header\"><a id=\"close\" href="#">закрыть Х</a></div>';
msg += '<div><h2>Техническое обслуживание</h2>';
msg += 'С 12 до 13 часов на сервере производится техническое обслуживание.';
msg += 'Во время обслуживания могут происходить незначительные сбои в работе сайта.</div>';

var elNote = document.createElement('div'); 			// создаём новый элемент
elNote.setAttribute('id', 'note');						// добавляем идентификатор объявления
elNote.innerHTML = msg;									// добавляем сообщение
document.body.appendChild(elNote);						// записываем его на страницу

function dismissNote() {								// обявляем функцию
	document.body.removeChild(elNote);					// удаляем объявление
}

var elClose = document.getElementById('close');			// получаем кнопку для закрытия объявления
elClose.addEventListener('click', dismissNote, false);	// нажимаем эту кнопку и закрываем объявление