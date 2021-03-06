$(function() {
	
	$('#arrival').datepicker();												// превращаем поле ввода в календарь JQUI

	var $amount = $('#amount');												// кэшируем поле ввода для цены
	var $range = $('#price-range');										// кэшируем элемент div для диапазона цен
	$('#price-range').slider({													// превращаем этот элемент в ползунковый регулятор
		range: true,																		// если это диапазон, он имеет два ползунка
		min: 0,																					// минимальное значение
		max: 400,																				// максимальное значение
		values: [175,300],															// начальные значения
		slide: function(event, ui) {										// при использовании ползунка обновляем amount
			$amount.val(ui.values[0] + ' ₽' + ' - ' + ui.values[1] + ' ₽');
		}
	});
	$amount																						// устанавливаем начальные значения для amount
		.val($range.slider('values', 0) + ' ₽'					// нижняя граница, потом знак ₽
		+ ' - ' + $range.slider('values', 1) + ' ₽');   // верхняя граница, потом знак ₽
		
});