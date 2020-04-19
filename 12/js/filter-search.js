(function() {																				// находится внутри IIFE
	var $imgs = $('#gallery img');										// получаем изображения
	var $search = $('#filter-search');								// получаем поле ввода
	var cache = [];																		// создаём массив cache

	$imgs.each(function() {														// для каждого изображения
		cache.push({																		// добавдяем объект в массив cache
			element: this,																// это изображение
			text: this.alt.trim().toLowerCase()						// текст атрибута alt (удаление пробелов, строчными)
		});
	});

	function filter() {																// объявляем функцию filter()
		var query = this.value.trim().toLowerCase();		// получаем запрос

		cache.forEach(function(img) {										// для каждого элемента cache передаёт изображение
			var index = 0;																// присваиваем index значение 0 (Результат сохраняется в переменную index. Если совпадение найдено, это будет положительное число. В противном случае результат окажется равен -1)
			if (query) {																	// если запрос содержит текст
				index = img.text.indexOf(query);						// проверяем, есть ли он здесь?
			}

			img.element.style.display = index === -1 ? 'none' : ''; // показываем/скрываем
		});
	}

	if ('oninput' in $search[0]) {										// если браузер поддерживает событие input
		$search.on('input', filter);										// используем его для вызова filter()
	} else {																					// иначе
		$search.on('keyup', filter);										// вызываем filter() с помощью события keyup
	}
	
}());