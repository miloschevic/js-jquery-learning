var originalNumber = 10.23456
var bigNumber = 3750000000

var msg = '<h2>исходное число</h2><p>' + originalNumber + '<p>';
msg += '<h2>3 десят. разряда</h2><p>' + originalNumber.toFixed(3) + '<p>';
msg += '<h2>3 цифры</h2><p>' + originalNumber.toPrecision(3) + '<p>';
msg += '<h2>экспоненциальная запись</h2><p>' + bigNumber.toExponential() + '<p>';

var el = document.getElementById('info');
el.innerHTML = msg;