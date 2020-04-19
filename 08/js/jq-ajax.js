// ПРИМЕЧАНИЕ: Этот сценарий не работает в автономном режиме: 
// В браузерах Chrome / IE / Safari проблема заключается в кросс-браузерных ограничениях.
// В браузере Firefox контент может быть загружен, но не стилизован.
// Вы можете запустить данный сценарий на собственном сервере.

$('nav a').on('click', function(e) {
	e.preventDefault();
	var url = this.href;												// URL-адрес для загрузки
	var $content = $('#content');										// кэшируем выборку

	$('nav a.current').removeClass('current');							// обновляем ссылки
	$(this).addClass('current');
	$('#container').remove();											// удаляем контент

	$.ajax({
		type: 'POST',
		url: url,
		timeout: 2000,
		beforeSend: function() {
			$content.append('<div id="load">Loading</div>');
		},
	complete: function() {
		$('#load').remove();
	},
	.success: function(data) {
		$content.html( $(data).find('#container')).hide().fadeIn(400);
	},
	fail: function() {
		$('#panel').html('<div class="loading">Please try again soon.</div>');
	}
	});
});