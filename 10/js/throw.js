var width = 12;
var height = 'test';

function calculateArea(width, height) {
	try {
		var area = width * height;										// пытаемся вычислить площадь
		if (!isNaN(area)) {														// если это число
			return area;																// возвращаем площадь
		} else {																			// иначе генерируем ошибку
			throw new Error('calculateArea() получила некорректное число');
		}
	} catch (e) {																		// если произошла ошибка
		console.log(e.name + ' ' + e.message);				// сообщение для разработчика
		return 'Не удалось вычислить площадь.'; 			// сообщение для пользователя
	}
}

// ПЫТАЕМСЯ ВЫВЕСТИ ПЛОЩАДЬ НА СТРАНИЦЕ
document.getElementById('area').innerHTML = calculateArea(width, height);