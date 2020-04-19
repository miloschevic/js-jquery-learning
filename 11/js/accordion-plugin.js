(function($){															// используем $ в качестве имени переменной
	$.fn.accordion = function(speed) {			// возвращает выборку jQuery
		this.on('click', '.accordion-control', function(e){
			e.preventDefault();
			$(this)
				.next('.accordion-panel')
				.not(':animated')
				.slideToggle(speed);
		});
		return this;													// возвращаем выборку jQuery
	}
})(jQuery);																// передаём объект jQuery