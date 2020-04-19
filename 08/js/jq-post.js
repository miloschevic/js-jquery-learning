$('#register').on('click', function(e) {					// при отправке формы
	e.prevenrDefault();										// предотвращаем её отправку
	var details = $('#register').serialize();				// сериализуем её данные
	$.$.post('register.php', details, function(data) {		// отправляем её с помощью $.post()
		$('#register').html(data);							// здесь выводим результат
	});
});