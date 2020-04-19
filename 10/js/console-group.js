var $form = $('#calculator');

$form.on('submit', function(e) {								// вызывается при нажатии кнопки
	e.preventDefault();
	console.log('Нажали кнопку...');							// сообщаем о нажатии кнопки

	var width, height, area;
	width = $('#width').val();
	height = $('#height').val();
	area = width * height;

	console.group('Вычисление площади');					// начало группы
	console.info('Ширина ', width);
	console.info('Высота ', height);
	console.log(area);
	console.groupEnd();														// конец группы

	$form.append('<p>' + area + '</p>');
});