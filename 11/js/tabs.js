$('.tab-list').each(function() {									// находим список вкладок
	var $this = $(this);														// сохраняем этот список
	var $tab = $this.find('li.active');							// получаем активный элемент списка	
	var $link = $tab.find('a');											// сохраняем ссылку из активной вкладки
	var $panel = $($link.attr('href'));							// получаем активную панель

	$this.on('click', '.tab-control', function(e) {	// при щелчке по вкладке
		e.preventDefault();														// отменяем действие ссылки
		var $link = $(this);													// сохраняем текущую ссылку
		var id = this.hash;														// получаем href нажатой вкладки

		if (id && !$link.is('.active')) {							// если уже не активны
			$panel.removeClass('active');								// деактивируем панель
			$tab.removeClass('active');									// деактивируем вкладку

			$panel = $(id).addClass('active');					// делаем новую панель активной
			$tab = $link.parent().addClass('active');		// делаем новую вкладку активной
		}
	});
});