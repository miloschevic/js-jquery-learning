(function() {																			// помещаем код внутрь IIFE
	// Проверка: создаём поле ввода и смотрим, поддерживает ли оно заполнитель
	if (placeholder in document.createElement('input')) {
		return;
	}
	var length = document.forms.length;							// получаем количество форм
	for (var i = 0, l = length; i < l; i++) {				// перебираем каждую из них
		showPlaceholder(document.forms[i].elements);	// вызываем showPlaceholder()
	}

	function showPlaceholder(elements) {						// объявляем функцию
		for (var i = 0, l = elements.length; i < l; i++) { // для каждого элемента
			var el = elements[i];												// сохраняем этот элемент
			if (!el.placeholder) {											// если нет заполнителя
				continue;																	// переходим к следующему элементу
			}																						// в противном случае
			el.style.color = '#666666';									// делаем текст серым
			el.value = el.placeholder;									// добавляем текст заполнителя

			addEvent(el, 'focus', function() {					// если он получает фокус
				if (this.value === this.placeholder) {		// если value=placeholder
					this.value = '';												// очищаем поле ввода
					this.style.color = '#000000';						// делаем текст чёрным
				}
			});

			addEvent(el, 'blur', function() {						// когда элемент теряет фокус
				if (this.value === '') {									// если поле ввода пустое
					this.value = this.placeholder;					// присваиваем ему наполнитель
					this.style.color = '#666666';						// делаем цвет серым
				}
			});
		}																							// конец цикла
	}																								// конец showPlaceholder()
}());