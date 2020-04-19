var xhr = new XMLHttpRequest();							// создаём объект XMLHttpRequest

xhr.onload = function() {								// когда ответ загрузился
														// следующая условная проверка не работает
														// в автономном режиме - только на сервере
	if (xhr.status === 200) {							// если от сервера получен статус ОК
		document.getElementById('content').innerHTML = xhr.responseText; // обновляем
	}
};

xhr.open('GET', 'data/data.html', true);				// подгототавливаем запрос
xhr.send(null);											// отправляем запрос