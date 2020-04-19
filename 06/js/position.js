var sx = document.getElementById('sx');			// элемент для записи значения screenX
var sy = document.getElementById('sy');			// элемент для записи значения screenY
var px = document.getElementById('px');			// элемент для записи значения pageX
var py = document.getElementById('py');			// элемент для записи значения pageY
var cx = document.getElementById('cx');			// элемент для записи значения clientX
var cy = document.getElementById('cy');			// элемент для записи значения clientY

function showPositin(event) {					// обновляем функцию
	sx.value = event.screenX;					// обновляем элемент,используя значение screenX 
	sy.value = event.screenY;
	px.value = event.pageX;
	py.value = event.pageY;
	cx.value = event.clientX;
	cy.value = event.clientY;
}


var el = document.getElementById('body');						// получем элемент body
el.addEventListener('mousemove', showPositin, false);			// позиция обновляется при перемещении мыши