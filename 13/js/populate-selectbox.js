(function() {
	var type = document.getElementById('equipmentType');	// список типов оборудования
	var model = document.getElementById('model');					// список моделей оборудования
	var cameras = {
		bolex: 'Bolex Paillard H8',
		yashica: 'Yashica 30',
		pathescape: 'Pathescape Super-8 Relax',
		canon: 'Canon 512'
	};
	var projectors = {
		kodak: 'Kodak Instamatic M55',
		bolex: 'Bolex Sound 715',
		eumig: 'Eumig Mark S',
		sankyo: 'Sankyo Dualux'
	};

	// КОГДА ПОЛЬЗОВАТЕЛЬ ИЗМЕНЯЕТ СПИСОК С ТИПАМИ
	addEvent(type, 'change', function(){
		if (this.value === 'choose') {											// выбор не был сделан
			model.innerHTML = '<option>Выберите модель</option>';
			return;																						// не нужно продолжать дальше
		}
		var models = getModels(this.value);									// выбираем подходящий объект

		// ПЕРЕБИРАЕМ СОДЕРЖИМОЕ ОБЪЕКТА ДЛЯ СОЗДАНИЯ ВАРИАНТОВ
		var options = '<option>Выберите модель</option>';
		for (var key in models) {														// перебираем models
			options += '<option value="' + key + '">' + models[key] + '</option>';
		} // ЕСЛИ ПУНКТ МОЖЕТ СОДЕРЖАТЬ КАВЫЧКИ, КЛЮЧ ДОЛЖЕН БЫТЬ ЭКРАНИРОВАН
		model.innerHTML = options;													// обновляем список
	});

	function getModels(equipmentType) {
		if (equipmentType === 'cameras') {									// если выбраны камеры
			return cameras;																		// возвращаем объект cameras
		} else if (equipmentType === 'projectors') {
			return projectors;
		}
	}
}());