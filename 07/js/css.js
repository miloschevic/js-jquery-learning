$(function() {
	var backgroundColor = $('li').css('background-color');
	$('ul').append('<p>Color was: ' + backgroundColor + '</p>');
	$('li').css({
		'background-color': '#c5a996',
		'border': '1px solid #fff',
		'color': '#fff',
		'font-family': 'Georgia',
		'padding-left': '+=75'
	});
});