(function(){
	var $content = $('#share-options').detach();								// убираем модальное окно со страницы

	$('#share').on('click', function() {												// обработчик щелчка для модального окна
		modal.open({content: $content, width: 340, height: 300});
	});
}());