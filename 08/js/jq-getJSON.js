// ПРИМЕЧАНИЕ: Этот сценарий не работает в автономном режиме в Chrome / IE из-за кросс-доменных ограничений.
// Вы можете запустить данный сценарий на собственном сервере. 
$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates() {
	$.getJSON('data/rates.json')
	.done( function(data) {														// СЕРВЕР ВОЗВРАЩАЕТ ДАННЫЕ
		var d = new Date();														// создаём объект для данных
		var hrs = d.getHours();													// получаем часы
		var mins = d.getMinutes();												// получаем минуты
		var msg  ='<h2>Exchange Rates</h2>';									// начальное сообщение
		$.each(data, function(key, val) {										// добавляем каждый курс
			msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
		});
		msg += '<br>Last update: ' + hrs + ':' + mins + '</br>';				// показываем время обновления
		$('#rates').html(msg);													// добавляем цены на страницу
		}).fail( function() {													// ПРОИЗОШЛА ОШИБКА
			$('#rates').text('Sorry, we cannot load rates.'); 					// показываем сообщение об ошибке
		}).always( function() {													// ВЫПОЛНЯЕТСЯ ВСЕГДА
			var reload = '<a id="refresh" href="#">';							// добавляем ссылку для обновления						
			reload += '<img src="img/refresh.png" alt="refresh" /></a>';
			$('#reload').html(reload);											// добавляем ссылку для обновления
			$('#refresh').on('click', function(e) {								// добавляем обработчик щелчка
				e.preventDefault();												// останавливаем переход
				loadRates();													// вызываем loadRates()
			});
		});
}

loadRates();																	// вызываем loadRates()