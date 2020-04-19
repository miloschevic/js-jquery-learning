// ПРИМЕЧАНИЕ: Этот сценарий не работает в автономном режиме во всех браузерах. 
// Вы можете запустить данный сценарий на собственном сервере.
$(function() { 											// когда дерево DOM готово

	var times;											// объявляем глобальную переменную
	$.ajax({											// Setup Request
		beforeSend: function(xhr) {						// перед выполнением запроса
			if (xhr.overrideMimeType) {					// если поддерживается
				xhr.overrideMimeType('application/json'); // устанавливаем MIME для избегания ошибок
			}
		}
	});


														// ФУНКЦИЯ, КОТОРАЯ СОБИРАЕТ ДАННЫЕ ИЗ JSON-ФАЙЛА
    function loadTimetable() {							// объявляем функцию
    	$.getJSON('data/example.json')					// пробуем собрать JSON-данные
    	.done( function(data) {							// в случае успеха
    		times = data;								// сохраняем их в переменную    	
    	}).fail( function() {							// в случае проблемы: выводим сообщение
    		$('#event').html('Sorry! We could not load the timetable at the moment');
    	});
    }

loadTimetable();										// вызываем функцию


// ЩЕЛЧОК ПО МЕРОПРИЯТИЮ ЗАГРУЖАЕТ ЕГО ПЛАН
$('#content').on('click', '#event a', function(e) { 	// пользователь щёлкает по мероприятию
	e.preventDefault();									// останавливаем загрузку страницы
	var loc = this.id.toUpperCase();					// получаем значение атрибута id

	var newContent = '';								// формируем таблицу с планом мероприятия
	for (var i = 0; i < times[loc].length; i++) {		// перебирая мероприятия
		newContent += '<li><span class="time">' + times[loc][i].time + '</span>';
		newContent += '<a href="descriptions.html#">';
		newContent += times[loc][i].title.replace(/ /g, '-') + '">';
		newContent += times[loc][i].title + '</a></li>';
	}

	$('#sessions').html('<ul>' + newContent + '</ul>');	// выводим время на странице

	$('#event a.current').removeClass('current');		// обновляем выбранный элемент
	$(this).addClass('current');

	$('#details').text('')								// очищаем третью колонку
});


// ЩЕЛЧОК ПО МЕРОПРИЯТИЮ ЗАГРУЖАЕТ ЕГО ПЛАН
$('#content').on('click', '#sessions li a', function(e) {	// щелчок по мероприятию
	e.preventDefault();										// останавливаем загрузку
	var fragment = this.href;								// заголовок в href

	fragment = fragment.replace('#', ' #');					// добавляем пробел перед #
	$('#details').load(fragment);							// чтобы загрузить данные

	$('#sessions a.current').removeClass('current');		// обновляем выбранный план мероприятия
	$(this).addClass('current');
});


// ЩЕЛЧОК ПО ПЕРВИЧНОЙ НАВИГАЦИИ
$('nav a').on('click', function(e) { 						// щелчок по nav
	e.preventDefault();										// останавливаем загрузку
	var url = this.href;									// получаем URL для загрузки

	$('nav a.current').removeClass('current');				// обновляем nav
	$(this).addClass('current');

	$('#container').remove();								// удалаляем прежнее содержимое
	$('#content').load(url + ' #container').hide().fadeIn('slow'); // добавляем новое содержимое
});

});