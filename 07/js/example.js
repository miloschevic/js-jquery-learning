$(function() {

// ПОДГОТОВКА
	var $list, $newItemForm, $newItemButton;
	var item = '';											// элемент является пустой строкой
	$list = $('ul');										// кэшируем неупорядоченный список
	$newItemForm = $('#newItemForm');						// кэшируем форму для добавления новых элементов
	$newItemButton = $('#newItemButton');					// кэшируем кнопку для показа формы

	$('li').hide().each(function(index) {					// скрываем пункты списка
		$(this).delay(450 * index).fadeIn(1600);			// затем плавно их выводим
	});

// СЧЁТЧИК ПУНКТОВ
	function updateCount() {								// создаём функцию для обновления счётчика
		var items = $('li[class!=complete]').length;		// количество элементов в списке
		$('#counter').text(items);							// добавляется в круг счетчика
	}
	updateCount();											// вызываем функцию

// ПОДГОТОВКА НОВЫХ ПУНКТОВ
    $newItemButton.show();									// показываем кнопку
    $newItemForm.hide();									// прячем форму
    $('#showForm').on('click', function() { 				// при нажатии кнопки добавления
    	$newItemButton.hide();								// скрываем кнопку
    	$newItemForm.show();								// показываем форму
    });

// ДОБАВЛЕНИЕ В СПИСОК НОВОГО ПУНКТА
    $newItemForm.on('submit', function(e) {					// при отправке нового пункта
    	e.preventDefault();									// предотвращаем отправку формы
    	var text = $('input:text').val();					// получаем значение текстового поля
    	$list.append('<li>' + text + '</li>');				// добавляем элемент в конец списка
    	$('input:text').val(''); 							// очищаем поле ввода
    	updateCount();										// обновляем счётчик 
    });

// ОБРАБОТКА ЩЕЛЧКА - ИСПОЛЬЗУЕТ ДЕЛЕГИРОВАНИЕ ДЛЯ ЭЛЕМЕНТА UL
    $list.on('click', 'li', function() {							
    	var $this = $(this);								// кэшируем элемент в объект jQuery
    	var complete = $this.hasClass('complete');			// является ли пункт завершённым
    
    if (complete == true) {									// проверяем, завершён ли пункт
    	$this.animate({										// если да, анимируем прозрачность + отступ
    		opacity: 0.0,				
    		paddingLeft: '+=180'
    	}, 500, 'swing', function() {						// при завершении анимации вызываем функцию обратного вызова
    		$this.remove();									// затем полностью удаляем этот пункт
    });
    } else {												// если нет, делаем его завершённым
    	item = $this.text();								// получаем текст из элемента списка
    	$this.remove();										// удаляем элемент списка
    	$list												// добавляем его в конец списка как завершённый
    		.append('<li class=\"complete\">' + item + '</li>')
    		.hide().fadeIn(300);							// прячем его, чтобы плавно вывести на экран
    	updateCount();										// обновляем счётчик
    }														// конец ветки else
    });														// конец обработчика событий
    		
});