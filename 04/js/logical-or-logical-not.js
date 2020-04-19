var score1 = 8; // Балл за первый этап
var score2 = 8; // Балл за второй этап
var pass1 = 6; // Проходной балл за первый этап
var pass2 = 6; // Проходной балл за второй этап

//Проверяем прошёл ли пользователь хотя бы один этап
var minPass = ((score1 >= pass1) || (score2 >= pass2));

// Создаём сообщение
var msg = 'Требуется ли пересдача: ' + !minPass;

// Выводим сообщение на страницу
var el = document.getElementById('answer');
el.textContent = msg;