function getTarget(e) { 							// объявляем функцию
	if (!e) {										// если объект события отсутствует
		e = window.event;							// используем объект event, применявшийся в старых версиях IE
	}
	return e.target || e.srcElement;				// получаем цель события
}

function itemDone(e) {
	// удаляем элемент из списка
    var target, elParent, elGrandparent;			// объявляем переменные
    target = getTarget(e);							// получаем ссылку того элемента, по которому был сделан щелчок
    elParent = target.parentNode;					// получаем соответствующий элемент из этого списка
    elGrandparent = target.parentNode.parentNode;	// получаем соответствующий список
    elGrandparent.removeChild(elParent);			// удаляем элемент из списка

	// запрещаем переход по данной ссылке куда-либо с этой страницы
    if (e.preventDefault) {							// если метод preventDefault(), применим
    	e.preventDefault();							// используем preventDefault()
    } else {										// иначе
    	e.returnValue = false;						// используем приём для старых версий IE
    }
}


// создаём слушатели событий для вызова функции itemDone() при щелчке
var el = document.getElementById('shoppingList'); 	// получаем список покупок
if (el.addEventListener) {							// если слушател событий применимы
	el.addEventListener('click', function(e) {		// добавляем слушатель событий щелчка
		itemDone(e);								// вызывается функция itemDone()
	}, false);										// в потоке выполнения программы наступает фаза всплывания событий
} else {											// иначе
	el.attachEvent('onclick', function(e) {			// используем модель, применявшуюся в старых моделях IE
		itemDone(e);								// вызываем функцию itemDone()
	});
}