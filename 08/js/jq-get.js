// ВНИМАНИЕ: Этот пример функционирует только на веб-сервере (локально не работает!)

// Первая переменная определяет свойства футболокs
var vote = '<div id="vote"><div class="third"><a href="http://example.org?tshirt=gray"><img src="img/t-gray.png" id="gray" alt="серого цвета" /></a></div><div class="third"><a href="http://example.org?tshirt=yellow" id="yellow"><img src="img/t-yellow.png" id="yellow" alt="желтого цвета" /></a></div><div class="third"><a href="http://example.org?tshirt=green"><img src="img/t-green.png" id="green" alt="зеленого цвета" /></a></div></div>';
$('#selector').append(vote);


// Добавляем рейтинг
$('#selector a').on('click', function(e) {
	e.preventDefalut();
	var queryString = 'vote=' + event.target.id;
	$.get('votes.php', queryString, function(data) {
		$('#selector').html(data);
	});
});