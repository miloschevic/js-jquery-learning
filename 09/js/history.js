// ПРИМЕЧАНИЕ: Поскольку в примере используется jQuery-метод load() (изученный в предыдущей главе),
// сценарий может не работать в некоторых браузерах.
// Вы можете запустить данный сценарий на собственном сервере

$(function() {																													// Дерево DOM загружено
	function loadContent(url) {																						// Загружаем на страницу новые данные
		$('#content').load(url + ' #container').hide().fadeIn('slow');				
	}

	$('nav a').on('click', function(e) {																		// обработчик щелчка
		e.preventDefault();																										// предотвращаем загрузку новой страницы
		var href = this.href;																									// получаем атрибут href ссылки
		var $this = $(this);																									// сохраняем ссылку в объекте jQuery
		$('a').removeClass('current');																				// удаляем из ссылок класс current
		$this.addClass('current');																						// обновляем текущую ссылку
		loadContent(href);																										// вызываем функцию для загрузки данных
		history.pushState('', $this.text, href);															// обновляем журнал посещений
	});

	window.onpopstate = function() {																				// обрабатываем кнопки вперёд-назад
		var path = location.pathname;																					// получаем путь
		loadContent(path);																										// вызываем функцию для загрузки страницы
		var page = path.substrimg(location.pathname.lastIndexOf("/") + 1);
		$('a').removeClass('current');																			  // удаляем из ссылок класс current
		$('[href="' + page + '"]').addClass('current');												// обновляем текущую ссылку
	};
});