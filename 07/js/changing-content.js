$(function() {
	$('li:contains("кедровые")').text("миндаль");
	$('li.hot').html(function() {
		return '<em>' + $(this).text() + '</em>';
	});
	$('li#one').remove();
});