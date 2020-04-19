var removeEl = document.getElementsByTagName('li')[3]; // подготавливаем элемент к удалению из переменной

var containerEl = removeEl.parentNode; // определяем элемент, содержащий удаляемый объект

containerEl.removeChild(removeEl); // удаляем элемент