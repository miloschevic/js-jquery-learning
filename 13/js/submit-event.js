(function() {
	var form = document.getElementById('login');					// получаем элемент form

	addEvent(form, 'submit', function(e) {								// при отправке формы
		e.preventDefault();																	// останавливаем отправку
		var elements = this.elements;												// получаем все элементы формы
		var username = elements.username.value;							// получаем введённое имя пользователя
		var msg = 'Welcome, ' + username;										// создаём приветствие
		document.getElementById('main').textContent = msg;	// выводим приветствие
	});
}());