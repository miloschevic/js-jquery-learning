$(function(){
	
	// Данные о фрилансерах
	var people = [
		{																						// каждый фрилансер как объект
			name: 'Клара',														// сохрнаняем имя и гонорар
			rate: 60
		},
		{
			name: 'Камилла',
			rate: 80
		},
		{
			name: 'Григорий',
			rate: 75
		},
		{
			name: 'Лаврентий',
			rate: 120
		}
	];

	// функция играет роль фильтра
	function priceRange(person) {									// объявляем priceRange() 
		return (person.rate >= 65) && (person.rate <= 90); // в диапазоне, если возвращает true
	};
	// фильтруем массив people и добавляем совпадения в массив results
	var results = [];															// массив для подходящих фрилансеров
	results = people.filter(priceRange);					// filter() вызывает priceRange()

	// перебираем новый массив и добавляем подходящих фрилансеров в итоговую таблицу
	var $tableBody = $('<tbody></tbody>');				// новое модержимое jQuery
	for (var i = 0; i < results.length; i++) {			// перебираем подходящие элементы
		var person = results[i];										// сохраняем текущего фрилансера
		var $row = $('<tr></tr>');									// создаём для него строку
		$row.append($('<td></td>').text(person.name)); // добавляем его имя
		$row.append($('<td></td>').text(person.rate)); // добавляем его гонорар
		$tableBody.append( $row );									// добавляем строку в новое содержимое
	}

	// добавляем новое содержимое в тело таблицы
	$('thead').after($tableBody);									// добавляем tbody после thead 
});