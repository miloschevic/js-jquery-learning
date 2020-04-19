/* ДАнный пример находится внутри функции-выражения, вызываемой сразу после создания. Это делается для защиты
области видимости переменных */

(function () {
	// Часть первая. Создаем объект hotel при помощи сиснтаксиса объектного литерала
	var hotel = {
		name: 'Отель "Пляж"',
		roomRate: 2400,
		discount: 15,
		offerPrice: function() {
			var offerRate = this.roomRate * ((100 - this.discount) / 100);
			return offerRate;
		} 
	}

var hotelName, roomRate, specialRate;
hotelName = document.getElementById('hotelName');
roomRate = document.getElementById('roomRate');
specialRate = document.getElementById('specialRate');

hotelName.textContent = hotel.name;
roomRate.textContent = hotel.roomRate.toFixed(2) + 'р.';
specialRate.textContent = hotel.offerPrice() + 'р.';

var expiryMsg; // Сообщение, выводимое пользователям
var today; // Сегодняшняя дата
var elEnds; //Элемент в котором отображается сообщение об окончании акции

function offerExpires(today) {
	// Внутри функции объявляем переменные с лоальной областью видимости
	var weekFromToday, day, date, month, year, dayNames, monthNames;
	// Добавляем ещё 7 дней (в миллисекундах)
	weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
	// Создаём массивы, в которых будут содержаться названия днеё и месяцев
	dayNames = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
	monthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября',
	'Ноября', 'Декабря'];

	// Собираем фрагменты даты, которые будут отображаться на странице
	day = dayNames[weekFromToday.getDay()];
	date = weekFromToday.getDate();
	month = monthNames[weekFromToday.getMonth()];
	year = weekFromToday.getFullYear();

	// Создаём сообщение
	expiryMsg = 'Акция завершается в ';
	expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
	return expiryMsg;

}

today = new Date(); // Записываем сегодняшнюю дату в переменную
elEnds = document.getElementById('offerEnds'); // Получаем элемент offerEnds
elEnds.innerHTML = offerExpires(today); // Добавляем сообщение об истечении акции

// Завершаем выражение функции, вызванной сразу после создания
}());