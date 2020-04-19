(function() {

	var $imgs = $('#gallery img');							// сохраняем все зображения
	var $buttons = $('#buttons');								// сохраняем элементы button
	var tagged = {};														// создаём объект tagged

	$imgs.each(function() {											// перебираем изображения и
		var img = this;														// сохраняем их в переменную
		var tags = $(this).data('tags');					// получаем теги этого элемента

		if (tags) {																// если элемеент содержит теги
			tags.split(',').forEach(function(tagName) {	// разбиваем их по запятой
				if (tagged[tagName] == null) {				// если нет, то
					tagged[tagName] = [];								// добавляем в объект пустой массив
				}
				tagged[tagName].push(img);						// добавляем изображение в массив
			});
		} 
	});

	$('<button/>', {															// создаём пустую кнопку
		text: 'Показать все',														// добавляем текст "Показать все"
		class: 'active',														// делаем её активной
		click: function() {													// добавляем обработчик onclick
			$(this)																		// получаем нажатую кнопку
				.addClass('active')											// добавляем класс active
				.siblings()															// получаем остальные кнопки
				.removeClass('active');									// удаляем из них класс active
			$imgs.show();															// выводим все изображения
		}
	}).appendTo($buttons);												// добавляем к другим кнопкам

	$.each(tagged, function(tagName) {						// для каждого тега
		$('<button/>', {														// создаём пустую кнопку
			text: tagName + ' (' + tagged[tagName].length + ')', // добавляем имя тега
			click: function() {												// добавляем обработчик щелчка
				$(this)																	// нажатая кнопка
					.addClass('active')										// делаем нажатый элемент активным
					.siblings()														// получаем остальные кнопки
					.removeClass('active');								// удаляем из них класс active
				$imgs																		// все изображения
					.hide()																// прячем их
					.filter(tagged[tagName])							// находим те, что имеют данный тег
					.show();																// показываем только их
			}
		}).appendTo($buttons);											// добавляем к другим кнопкам 
	});

}());