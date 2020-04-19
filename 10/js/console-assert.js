var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {
	// сообщение выводится, только если введённое значение меньше 10
	console.assert(this.value > 10, 'Пользователь ввёл число меньше 10');
});

$('#calculator').on('submit', function(e) {
	e.preventDefault();
	console.log('Нажали кнопку...');

	width = $('#width').val();
	height = $('#height').val();
	area = width * height;
	// сообщение выводится, только если пользователь ввёл не число
	console.assert($.isNumeric(area), "Пользователь ввёл не числовое значение");

	$form.append('<p>' + area + '</p>');
});