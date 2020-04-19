var compare = {																			// объявляем объект compare
	name: function(a, b) {														// добавляем метод name
		// в английском варианте
		// a = a.replace(/^the /i, '');									// удаляем в начале параметра "the"
		// b = b.replace(/^the /i, '');									// удаляем в начале параметра "the"

		if (a < b) {																		// если значение а меньше значения b					
			return -1;																		// возвращаем -1
		} else {																				// иначе
			return a > b ? 1 : 0;													// если а больше b, возвращаем 1, ИЛИ
		}																								// если они равны, возвращаем 0
	},
	duration: function(a, b) {												// добавляем метод duration
		a = a.split(':');																// разделяем время по двоеточию
		b = b.split(':');																

		a = Number(a[0]) * 60 + Number(a[1]);						// преобразовываем время в секунды
		b = Number(b[0]) * 60 + Number(b[1]);

		return a - b;																		// возвращаем а минус b
	},
	date: function(a, b) {														// добавляем метод date
		a = new Date(a);																// новый объект Date для хранения даты
		b = new Date(b);

		return a - b;																		// возвращаем а минус b
	}
};

$('.sortable').each(function(){											// для каждого элемента, атрибут которого содержит класс sortable, запускается анонимная функция
	var $table = $(this);															// это сортируемая таблица
	var $tbody = $table.find('tbody');								// сохраняем тело таблицы
	var $controls = $table.find('th');								// сохраняем заголовки таблицы
	var rows = $tbody.find('tr').toArray();						// сохраняем массив со строками

	$controls.on('click', function() {								// когда пользовтель щелкает по заголовку
		var $header = $(this);													// получаем заголовок
		var order = $header.data('sort');								// получаем значение атрибута data-sort
		var column;																			// объявляем переменную column

		// если выбранный элемент имеет класс ascending или descending, меняем атрибут class на противоположный
		if ($header.is('.ascending') || $header.is('.descending')) {
			$header.toggleClass('ascending descending');	// меняем на противоположный
			$tbody.append(rows.reverse());								// переворачиваем массив
		} else {																				// иначе: выполняем сортировку
			$header.addClass('ascending');								// добавляем класс в заголовок
			// удаляем asc или desc из всех остальных заголовков
			$header.siblings().removeClass('ascending descending');
			if (compare.hasOwnProperty(order)) {					// если объект compare содержит метод, который совпадает с атрибутом data-type текущего столбца
				column = $controls.index(this);							// ищем порядковый номер столбца

				rows.sort(function(a, b) {									// вызываем sort из массива rows
					a = $(a).find('td').eq(column).text();		// получаем текст столбца в строке а
					b = $(b).find('td').eq(column).text();		// получаем текст столбца в строке и
					return compare[order](a, b);							// вызываем метод compare
				});

				$tbody.append(rows);
			}
		}
	});
});