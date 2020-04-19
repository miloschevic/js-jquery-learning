var modal = (function(){													// объявляем объект modal

	var $window = $(window);												// сохраняем окно
	var $modal = $('<div class="modal"/>');					// создаём разметку модального окна
	var $content = $('<div class="modal-content"/>');
	var $close = $('<button role="button" class="modal-close">close</button>');

	$modal.append($content, $close);								// добавляем кнопку закрытия

	$close.on('click', function(e){								// при щелчке по кнопке закрытия
		e.preventDefault();														// отменяем стандартное повдение ссылок
		modal.close();																// закрываем модальное окно
	});

	return {
		center: function() {
			// вычисляем расстояние от верхней и левой границ страницы до модального окна
			var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
			var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
			$modal.css({																	// назначаем CSS модальному окну
				top: top + $window.scrollTop(),							// центрируем вертикально
				left: left + $window.scrollLeft()						// центрируем горизонтально
			});
		},
		open: function(settings) {												// объявляем метод open()
			$content.empty().append(settings.content);		// назначаем модальному окну новое содержимое

			$modal.css({																	// устанавливаем размеры модального окна
				width: settings.width || 'auto',						// устаналиваем ширину
				height: settings.height || 'auto'						// устанавливаем высоту
			}).appendTo('body');													// добавляем его на страницу

			modal.center();																// вызываем метод center()
			$(window).on('resize', modal.center);					// вызываем его при изменении размеров окна
		},
		close: function() {															// объявляем метод close()
			$content.empty();															// удаляем содержимое модального окна
			$modal.detach();															// убираем модальное окно со страницы
			$(window).off('resize', modal.center);					// убираем обработчик событий1
		}
	};
}()); 