var el;																	// объявляем переменные

function charCount(e) {													// объявляем функцию
	var textEntered, charDisplay, counter, lastkey;						// объявляем переменные
	textEntered = document.getElementById('message').value;				// пользовательский текст
	charDisplay = document.getElementById('charactersLeft');			// элемент счетчика
	counter = (180 - (textEntered.length));								// количество оставшихся символов
	charDisplay.textContent = counter;									// отображение оставшихся символов

	lastkey = document.getElementById('lastKey');						// получение клавиши, нажатой последней
	lastkey.textContent = 'ASCII-код последней нажатой клавиши: ' + e.keyCode; // создаём сообщение
}

el = document.getElementById('message');								// получаем элемент в котором находится сообщение
el.addEventListener('keypress', charCount, false);						// событие keypress