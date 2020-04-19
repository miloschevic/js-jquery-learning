var xhr = new XMLHttpRequest();							// создаём объект XMLHttpRequest

xhr.onload = function() {								// когда ответ загрузился
														// следующая условная проверка не работает в автономном режиме - только на сервере
//	if (xhr.status === 200) {							// следующая условная проверка не работает в автономном режиме - только на сервере

		var response = xhr.responseXML;					// получаем XML с сервера
		var events = response.getElementsByTagName('event'); // находим узлы event

		for (var i = 0; i < events.length; i++) {		// перебираем их в цикле
			var container, image, location, city, newline; // объявляем переменные
			container = document.createElement('div');  // создаём контейнер div
			container.className = 'event';				// добавляем атрибут class

			image = document.createElement('img');		// добавляем изображения карты
			image.setAttribute('src', getNodeValue(events[i], 'map'));
			image.appendChild(document.createTextNode(getNodeValue(events[i], 'map')));
			container.appendChild(image);

			location = document.createElement('p');		// добавляем данные о местоположении
			city = document.createElement('b');
			newline = document.createElement('br');
			city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
			location.appendChild(newline);
			location.insertBefore(city, newline);
			location.appendChild(document. createTextNode(getNodeValue(events[i], 'date')));
			container.appendChild(location);

			document.getElementById('content').appendChild(container);
//		}

		function getNodeValue(obj, tag) {				// получаем содержимое из XML
			return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
		}
	}
};

xhr.open('GET', 'data/data.xml', true);					// подготавливаем запрос 
xhr.send(null);											// отправляем запрос