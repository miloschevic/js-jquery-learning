var contacts = {											// сохраняем контакную информацию в объекте-литерале
	"Moscow": {
		"Phone": "+44 (0)207 946 0128",
		"Country": "Russia"},
	"Istanbul": {
		"Phone": "+61 (0)2 7010 1212",
		"Country": "Turkey"},
	"Бухарест": {
		"Phone": "+1 (0)1 555 2104",
		"Country": "Румыния"}
};

console.table(contacts);							// выводим данные в консоль

var city, contactDetails;							// объявляем переменные
contactDetails = '';									// содержим подробности, которые выводятся на страницу

$.each(contacts, function(city, contacts) {
	contactDetails += city + ': ' + contacts.Tel + '<br />';
});
$('h2').after('<p>' + contactDetails + '</p>');