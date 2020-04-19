// Этот пример может быть обновлен для использования Modernizr - пожалуйста, указывайте localstorage строчными буквами
if (window.localstorage) {
	var txtUsername = document.getElementById('username');					// получаем элементы формы
	var txtAnswer = document.getElementById('answer');

  txtUsername.value = localStorage.getItem('username'); 					// заполняем элементы
  txtAnswer.value = localStorage.getItem('answer');							  // данными из localStorage

  txtUsername.addEventListener('input', function() {							// сохраняем данные при нажатии клавиши
  	localStorage.setItem('username', txtUsername.value)
  }, false);

  txtAnswer.addEventListener('input', function() {								// сохраняем данные при нажатии клавиши
  	localStorage.setItem('answer', txtAnswer.value);
  }, false);
}