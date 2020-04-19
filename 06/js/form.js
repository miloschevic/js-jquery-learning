var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;						// объявляем переменные
elForm = document.getElementById('formSignup');											// сохраняем элементы
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint() {																// объявляем функцию				
	var package = this.options[this.selectedIndex].value								// получаем выбранный вариант
	if (package == 'monthly') {															// если выбрана подписка на месяц
		elPackageHint.innerHTML = 'Сэкономьте 100 ₽, оплатив подписку на год!';			// отображаем это сообщение
	} else {																			// иначе
		elPackageHint.innerHTML = 'Прекрасный выбор';									// отображаем это сообщение
	}
}


function checkTerms(event) {															// объявляем функцию
	if (!elTerms.checked) {																// если флажок сброшен
		elTermsHint.innerHTML = 'Вы должны согласиться с условиями соглашения.';		// отображаем сообщение
		event.preventDefault();															// не отправлять форму
	}
}
//Создаем слушатели событий: событие submit вызывает checkTerms(), событие change вызывает packageHint()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);