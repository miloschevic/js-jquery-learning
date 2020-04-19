console.info('Мы начинаем...');															// уведомление: сценарий работает

var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {				// в ответ на событие blur
	console.warn('Вы ввели ', this.value);										// предупреждение: введённое значение
});

$('#calculator').on('submit', function(e) {
	e.preventDefault();

	width = $('#width').val();
	height = $('#height').val();

	area  = width * height;
	console.error(area);																			// ошибка: выводим площадь

	$form.append('<p class="result">' + area + '</p>');
});