console.log('Мы начинаем...');                        // сценарий запущен
var $form, width, height, area;
$form = $('#calculator');

$('form input[type="text"]').on('blur', function() {  // когда поле теряет фокус
  console.log('Вы ввели ', this.value );                // записываем значение в консоль
});

$('#calculator').on('submit', function(e) {           // при нажатии кнопки
  e.preventDefault();                                   // предотвращаем отправку формы
  console.log('Нажали кнопку...');                    // сообщаем о нажатии кнопки  

  width = $('#width').val();
  console.log('Ширина ' + width);                       // записываем ширину в консоль

  height = $('#height').val();
  console.log('Высота ', height);                      // записываем ширину в консоль

  area = width * height;
  console.log(area);                                    // записываем площадь в консоль

  $form.append('<p>' + area + '</p>')
}); 