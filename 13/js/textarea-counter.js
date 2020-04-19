(function(){
	var bio = document.getElementById('bio');							// элемент textarea
	var bioCount = document.getElementById('bio-count');	// счётчик символов

	addEvent(bio, 'focus', updateCounter);								// вызываем updateCounter() при получении фокуса
	addEvent(bio, 'input', updateCounter);								// вызываем updateCounter() при вводе

	addEvent(bio, 'blur', function() {										// когда оставляем элемент
		if (bio.value.length <= 140) {											// если допустимое кол-во символов не превышает 140
			bioCount.className = 'hide';											// прячем счётчик
		}
	});

	function updateCounter(e) {
		var target = e.target || e.srcElement;							// получаем целевой элемент события
		var count = 140 - target.value.length;							// сколько символов осталось
		if (count < 0) {																		// если осталось меньше 0 символов
			bioCount.className = 'error';											// добавляем класс error
		} else {																						// в остальных случаях
			bioCount.className = 'good';											// добавляем класс good
		}
	  var charMsg = '<b>' + count + '</b>' + ' characters'; // выводимое сообщение
	  bioCount.innerHTML = charMsg;												// обсновляем элемент счётчика
	}
	
}());