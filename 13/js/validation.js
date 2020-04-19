// Валидация формы с помощью JavaScript.
// A. Анонимная функция, запускаемая событием submit 
// Б. Инициация общих проверок с помощью анонимных функций в разделе A
// В. Выполнение общих проверок с помощью анонимных функций в разделе A
// Г. Функции для получения / установки / отображения / удаления сообщений об ошибках
// Д. Объект, проверяющий тип данных с использованием регулярных выражений, вызываемых validateTypes в разделе Б
 
// Связи: jQuery, jQueryUI, birthday.js, styles.css

(function() {
	document.forms.register.noValidate = true;				// отключаем HTML5-валидацию
  // -------------------------------------------------------------------------
  // A. АНОНИМНАЯ ФУНКЦИЯ, ЗАПУСКАЕМАЯ СОБЫТИЕМ SUBMIT 
  // -------------------------------------------------------------------------
	$('form').on('submit', function(e) {							// при отправке формы
		var elements = this.elements;										// коллекция элементов формы
		var valid = {};																	// объект valid
		var isValid;																		// isValid: проверяет элементы формы
		var isFormValid;																		// isFormValid: проверяет всю форму

		// УНИВЕРСАЛЬНЫЕ ПРОВЕРКИ (вызывает функцию за пределами обработчика событий)

		for (var i = 0, l = elements.length; i < l; i++) {
			// вызываются validateRequired() и validateTypes()
			isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
			if (!isValid) {																// если не пройдены обе проверки
				showErrorMessage(elements[i]);							// выводим сообщения об ошибках
			} else {																			// в противном случае
				removeErrorMessage(elements[i]);						// удаляем сообщения об ошибках
			}					
			valid[elements[i].id] = isValid;							// добавляем элемент в объект valid			
		}																								// конец цикла

		// ИНДИВИДУАЛЬНАЯ ВАЛИДАЦИЯ
		if (!validateBio()) {														// вызываем validaeBio(), если некорректно 
			showErrorMessage(document.getElementById('bio')); // выводим сообщение об ошибке
			valid.bio = false;														// обновляем объект valid - элемент некорректен
		} else {																				// иначе
			removeErrorMessage(document.getElementById('bio')); // удаляем ошибку
		}
		
		// пароль (здесь вы можете кэшировать пароль в переменной)
		if (!validatePassword()) {
			showErrorMessage(document.getElementById('password'));
      valid.password = false;
		} else {
			removeErrorMessage(document.getElementById('password'));
		}

		// родительское согласие (здесь вы можете кэшировать родительское согласие в переменной)
		if (!validateParentsConsent()) {
			showErrorMessage(document.getElementById('parents-consent'));
      valid.parentsConsent = false;
		} else {
			removeErrorMessage(document.getElementById('parents-consent'));
		}

		// ПРОЙДЕНА ЛИ ПРОВЕРКА / МОЖНО ЛИ ОТПРАВЛЯТЬ ФОРМУ?
    // Перебираем объект valid, при обнаружении ошибок присваиваем isFormValid значение false
    for (var field in valid) {											// проверяем свойства объекта valid
    	if (!valid[field]) {													// если свойство некорректное
    		isFormValid = false;												// присваиваем false переменной isFormValid
    		break;																			// останавливаем цикл, найдена ошибка
    	}																							// иначе
    	isFormValid = true;														// форма корректна и готова к отправке
    }


    // если форма не прошла проверку, отменяем её отправку
    if (!isFormValid) {															// если переменная isFormValid не равна true
    	e.preventDefault();														// предотвращаем отправку формы
    }

	});
	 //  КОНЕЦ: анонимная функция вызывается кнопкой отправки формы


  // -------------------------------------------------------------------------
  // Б. ИНИЦИАЦИЯ ОБЩИХ ПРОВЕРОК
  // -------------------------------------------------------------------------

  // ПРОВЕРКА, ОБЯЗАТЕЛЬНО ЛИ ПОЛЕ К ЗАПОЛНЕНИЮ, И СОДЕРЖИТ ЛИ ОНО ЗНАЧЕНИЕ
  // Зависит от isRequired() и isEmpty(), как показано ниже, и setErrorMessage - показано далее.
  function validateRequired(el) {
  	if (isRequired(el)) {														// является ли этот элемент обязательным?
  		var valid = !isEmpty(el);											// есть ли значение true/false? (содержит ли поле значение?)
  		if (!valid) {																	// если переменная valid равна false (поле пустое)
  			setErrorMessage(el, 'Поле необходимо заполнить'); // выводим сообщение об ошибке
  		}	
  		return valid;																	// возвращаем переменную valid (true/false)
  	}
  	return true;																		// если поле необязательное, всё в порядке
  }

  // ПРОВЕРКА, ОБЯЗАТЕЛЕН ЛИ ЭЛЕМЕНТ
  // Вызывается функцией validateRequired()
  function isRequired(el) {
  	return ((typeof el.required === 'boolean') && el.required) || 
  		(typeof el.required === 'string');
  }

  // ПРОВЕРКА, ПУСТ ЛИ ЭЛЕМЕНТ (или значение идентично тексту заполнителя)
  // Браузеры с поддержкой HTML5 допускают ввод значения, идентичного тексту заполнителя, но в этом случае, это не следует делать
  // Вызывается функцией validateRequired()
  function isEmpty(el) {
  	return !el.value || el.value === el.placeholder;
  }

  // ПРОВЕРКА, СООТВЕТСТВКЕТ ЛИ ВВЕДЕННОЕ ЗНАЧЕНИЕ ТИПУ ЭЛЕМЕНТА
  // Зависит от объекта validateType (показано в конце IIFE-функции)
  function validateTypes(el) {
  	if (!el.value) return true;										// если у элемента нет значения, возвращаем true
  																								// если оно есть, получаем его с помощью .data()
    var type = $(el).data('type') || el.getAttribute('type'); // или полуем тип поля ввода
    if (typeof validateType[type] === 'function') {	// является ли тип методом объекта валидации
    	return validateType[type](el);							// если да, смотрим можно ли его валидировать
    } else {																			// если нет
    	return true;																// возвращаем true, потому что его нельзя проверить
    }
  }

  // -------------------------------------------------------------------------
  // В. ВЫПОЛНЕНИЕ ОБЩИХ ПРОВЕРОК 
  // -------------------------------------------------------------------------

  // ЕСЛИ ВОЗРАСТ ПОЛЬЗОВАТЕЛЯ МЕНЕЕ 13 ЛЕТ, ПРОВЕРИТЬ, УСТАНОВЛЕН ЛИ ФЛАЖОК РОДИТЕЛЬСКОГО СОГЛАСИЯ
  // Связи: birthday.js (в противном случае проверка не сработает)
  function validateParentsConsent() {
  	var parentsConsent = document.getElementById('parents-consent');
  	var consentContainer = document.getElementById('consent-container');
  	var valid = true;															// переменной valid присваивается true
  	if (consentContainer.className.indexOf('hide') === -1) { //если флажок видим
  		valid = parentsConsent.checked;							// обновляем valid: флажок установлен или нет
  		if (!valid) {																// если нет, устанавливаем сообщение об ошибке
  			setErrorMessage(parentsConsent, 'Требуется согласие родителей');
  		}
  	}
  	return valid;																	// указываем на то, прошёл ли элемент проверку
  }

  // Проверка, что объем текста биографии не превышает 140 символов
  function validateBio() {
  	var bio = document.getElementById('bio');			// сохраняем ссылку на поле bio
  	var valid = bio.value.length <= 140;					// длина биографии должна быть менее 140 символов
  	if (!valid) {
  		setErrorMessage(bio, 'Объём текста превышает 140 символов')
  	}
  	return valid;																	// возвращаем значение типа Boolean
  }

  // Проверка, что значения паролей в обоих полях идентичны и содержат не менее 8 символов
  function validatePassword() {
  	var password = document.getElementById('password'); // сохраняем ссылку на элемент
  	var valid = password.value.length >= 8; 			// длина пароля должна быть более 8 символов
  	if (!valid) {
  		setErrorMessage(password, 'Пароль должен иметь длину не менее 8 символов')
  	}
  	return valid;																	// возвращаем true/false
  }



  // -------------------------------------------------------------------------
  // Г. ФУНКЦИИ ДЛЯ ПОЛУЧЕНИЯ / УСТАНОВКИ / ОТОБРАЖЕНИЯ / УДАЛЕНИЯ СООБЩЕНИЙ ОБ ОШИБКАХ
  // -------------------------------------------------------------------------
  
  function setErrorMessage(el, message) {
  	$(el).data('errorMessage', message);					// сохраняем сообщение об ошибке внутри элемента
  }

  function getErrorMessage(el) {
    return $(el).data('errorMessage') || el.title;
  }

  function showErrorMessage(el) {
  	var $el = $(el);															         // находим элемент с ошибкой
  	var errorContainer = $el.siblings('.error.message');  // есть ли в нём другие ошибки

  	if (!errorContainer.length) {									       // если ошибок не найдено
      // создаём элемент span для хранения сообщения и добавляем его после поля с ошибкой
  		errorContainer = $('<span class="error message"></span>').insertAfter($el);
  	}
  	errorContainer.text(getErrorMessage(el));     // добавляем сообщение об ошибке
  }

  function removeErrorMessage(el) {
  	var errorContainer = $(el).siblings('.error.message'); // Получаем родственные элементы формы, используемые для хранения сообщения об ошибке
  	errorContainer.remove();                             // Удаляем элемент, содержащий сообщение об ошибке
  }



  // -------------------------------------------------------------------------
  // Д. ОБЪЕКТ, ПРОВЕРЯЮЩИЙ ТИП ДАННЫХ 
  // -------------------------------------------------------------------------

  // Проверка правильности введенных данных или, в противном случае,  отображение сообщения об ошибке
  // Возвращает true если все верно, в противном случае - возвращает false
  var validateType = {
  	email: function(el) {													// создаём метод email
  		var valid = /[^@]+@[^@]+/.test(el.value);		// сохраняем результат проверки в valid
  		if (!valid) {																// если valid не равна true
  			setErrorMessage(el, 'Проверьте правильность адреса'); // устанавливаем сообщение об ошибке
  		}
  		return valid;																// возвращаем переменную valid
  	},
  	number: function(el) {
  		var valid = /^\d+$/.test(el.value);
  		if (!valid) {
  			setErrorMessage(el, 'Введите допустимый номер');
  		}
  		return valid;
  	},
  	date: function(el) {

  		var valid = /^(\d{2}\/\d{2}\/\d{4})|(\d{4}-\d{2}-\d{2})$/.test(el.value);
  		if (!valid) {
  			setErrorMessage(el, 'Введите допустимую дату');
  		}
  		return valid;
  	}
  };

}()); 