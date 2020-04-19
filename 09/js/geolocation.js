// В браузере Chrome в автономном режиме данный пример не работает (но функционирует на веб-сервере).
// В других браузерах может появиться запрос о получении разрешения на определение местоположения.
// Процесс определения местоположения занимает некоторое время.

var elMap = document.getElementById('loc');			// HTML-элемент
var msg = 'Sorry, we were unable to get your location.'; 	// соообщение об отсуствии данных о местоположении

if (Modernizr.geolocation) {										// поддерживается ли геолокация
  navigator.geolocation.getCurrentPosition(success, fail);	// запрашиваем координаты
  elMap.textContent = 'Определение местонахождения...';			// уведомляем об операции определения
} else {															          // не поддерживается
  elMap.textContent = msg;										  // добавляем сообщение
}

function success(location) {										// получили местоположение
  msg = '<h3>Долгота:<br>';										  // создаём сообщение
  msg += location.coords.longitude + '</h3>';		// добавляем долготу
  msg += '<h3>Широта:<br>';										  // создаём сообщение
  msg += location.coords.latitude + '</h3>';		// добавляем широту
  elMap.innerHTML = msg;											  // выводим местоположение
}	

function fail(msg) {												    // не получили местоположение
  elMap.textContent = msg;										  // выводим сообщение
  console.log(msg.code);											  // записываем ошибку
}