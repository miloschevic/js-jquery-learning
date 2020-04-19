// Вспомогательная функция для добавления обработчика событий
function addEvent(el, event, callback) {								
	if ('addEventListener' in el) {												// если addEventListener работает
		el.addEventListener(event, callback, false);				// используем его
	} else {																							// в протвном случае
		el['e' + event + callback] = callback;							// создаём специальный код для Internet Explorer
		el[event + callback] = function() {									// добавляем второй метод	
			el['e' + event + callback](window.event);					// используем для вызова предыдущей функции
		};
		el.attachEvent('on' + event, el[event + callback]);	// используем attachEvent()
	}																											// для вызова второй функции, котоая потом вызывает первую
}