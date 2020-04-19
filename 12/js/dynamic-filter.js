(function() {

	// СОХРАНЯЕМ КАЖДОГО ФРИЛАНСЕРА КАК ОБЪЕКТ В МАССИВЕ
  var people = [
    {                                              // Каждый фрилансер как объект
      name: 'Клара',                               // Сохраняем имя и гонорар
      rate: 60
    },
    {
      name: 'Камила',
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

	var rows = [],																			// массив rows
	    $min = $('#value-min'),													// минимальное введённое значение
	    $max = $('#value-max'),													// максимальное введённое значение
	    $table = $('#rates');														// таблица с результатами

	function makeRows() {																// создаём строки таблицы и массив
		people.forEach(function(person) {									// для каждого объекта person в массиве people
			var $row = $('<tr></tr>');											// создаём строку
			$row.append($('<td></td>').text(person.name));	// добавляем имя
			$row.append($('<td></td>').text(person.rate));	// добавляем гонорар
			rows.push({
				person: person,
				$element: $row
			});
		});
	}

function appendRows() {																// добавляет строки в таблицу
	var $tbody = $('<tbody></tbody>');									// создаём элемент tbody
	rows.forEach(function(row) {												// для каждого объекта в массиве rows
		$tbody.append(row.$element);											// Добавляем HTML-код строки	
	});
	$table.append($tbody);															// Добавляем строки в таблицу
}
function update(min, max) {														// обновляет содержимое таблицы
	rows.forEach(function(row) {												// для каждой строки в массиве rows
		if (row.person.rate >= min && row.person.rate <= max) { // если в диапазоне
			row.$element.show();														// показываем строку
		} else {																					// иначе
			row.$element.hide();														// скрываем строку
		}
	});
}

function init() {																			// действия при первом запуске сценария
	$('#slider').noUiSlider({														// подготавливаем ползунок
		range: [0, 150], start: [65, 90], handles: 2, margin: 20, connect: true,  
		serialization: { to: [$min, $max], resolution: 1 }
	}).change(function() { update($min.val(), $max.val()); });
	makeRows();																					// созда1м строки таблицы и массив rows
	appendRows();																				// добавляем строку в таблицу
	update($min.val(), $max.val());											// обновляем таблицу, чтобы показать совпадения
}
$(init);																							// когда дерево DOM готово, вызываем init()
}());