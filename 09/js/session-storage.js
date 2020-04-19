// Этот пример может быть обновлен для использования Modernizr - пожалуйста, указывайте sessionstorage строчными буквами 
if (Modernizr.sessionstorage) {
	
	var txtUsername = document.getElementById('username');  	// Получаем элементы формы
  var txtAnswer = document.getElementById('answer');

  txtUsername.value = sessionStorage.getItem('username'); 	// Заполняем элементы
  txtAnswer.value = sessionStorage.getItem('answer');				// данными из sessionstorage

  txtUsername.addEventListener('input', function() {
  	sessionStorage.setItem('username', txtUsername.value);	// сохраняем данные при нажатии клавиши
  }, false);

  txtAnswer.addEventListener('input', function() {					// // сохраняем данные при нажатии клавиши
  	sessionStorage.setItem('answer', txtAnswer.value);
  }, false);
}