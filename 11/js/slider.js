$('.slider').each(function() {															// для каждого слайдера
	var $this   = $(this);																		// текущий слайдер
	var $group  = $this.find('.slide-group');									// получаем группу слайдов (контейнер)
	var $slides = $this.find('.slide');									    // создаём объект jQuery для хранения всех слайдов
	var buttonArray  = [];																			// создаём массив для хранения кнопок навигации
	var currentIndex = 0;																			// сохраняем индекс текущего слайда
	var timeout;																							// устанавливаем интервал автоперелистывания
	// move() - функция для перехода между слайдами
	function move(newIndex) {																	// меняем старый слайд на новый
		var animateLeft, slideLeft;															// объявляем переменные

		advance();																							// при перемещении слайда опять вызываем advance()

		//если это текущий слайд, ничего не делаем
		if ($group.is(':animated') || currentIndex === newIndex) {
			return;
		}

		buttonArray[currentIndex].removeClass('active');				// удаляем класс из элемента
		buttonArray[newIndex].addClass('active');								// добавляем класс к новому элементу

		if (newIndex > currentIndex) {													// если новый элемент больше текущего
			slideLeft = '100%';																		// помещаем новый слайд вправо
			animateLeft = '-100%';																// анимируем переход текущей группы влево
		} else {																								// иначе
			slideLeft = '-100%';																	// помещаем новый слайд влево
			animateLeft = '100%';																	// анимируем переход текущей группы вправо
		}
		// помещаем новый слайд слева (если меньше) или справа (если больше) от текущего
		$slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
		
		$group.animate( {left: animateLeft}, function() {
			$slides.eq(currentIndex).css( {display: 'none'} );
			$slides.eq(newIndex).css( {left: 0} );
			$group.css( {left: 0} );
			currentIndex = newIndex;
		});
	}

	function advance() {																			// задаёт интервал между сменой слайда
		clearTimeout(timeout);																	// очищаем предыдущий интервал
																														// устанавливаем таймер на запуск анонимной функции каждые 4 секунды
    timeout = setTimeout(function() {												// устанавливаем новый таймер
    	if (currentIndex < ($slides.length - 1)) {						// если слайд < количества слайдов
    		move(currentIndex + 1);															// переходим к следующему слайду
    	} else {																							// иначе
    		move(0);																						// переходим к первому слайду
    	}				
    }, 4000);																							  // сколько миллисекунд будет ждать таймер
	}

	$.each($slides, function(index) {
		 																													// создаём элемент button для кнопки
	  var $button = $('<button type="button" class="slide-btn">&bull;</button>');
	  if (index === currentIndex) {															// если индекс принадлежит текущему элементу
	  	$button.addClass('active');															// добавляем класс active
	  }
	  $button.on('click', function() {														// создаём обработчик событий для кнопки
	  	move(index);																						// он вызывает функцию move
	  }).appendTo('.slide-buttons');														// добавляет кнопки в контейнер и...
	  buttonArray.push($button);																// ... в массив
	});

	advance();
});