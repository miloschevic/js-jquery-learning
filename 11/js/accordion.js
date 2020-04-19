$('.accordion').on('click', '.accordion-control', function(e) {
	e.preventDefault();
	$(this)
		.next('.accordion-panel')					// выбираем следующую панель
		.not(':animated')									// если она не в процессе анимации
		.slideToggle();										// выводим или скрываем её с помощью slideToggle
});