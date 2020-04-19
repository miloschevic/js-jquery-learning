$('nav a').on('click', function(e) {					// пользователь щелкает по ссылке nav
	e.preventDefault();									// останаливаем загрузку новой ссылки
	var url = this.href;								// получаем значение href

	$('nav a.current').removeClass('current');			// удаляем текущий индикатор
	$(this).addClass('current');						// новый текущий индикатор

	$('#container').remove();							// удаляем старое содержимое
	$('#content').load(url + ' #container').hide().fadeIn('slow');	// новое содержимое
});