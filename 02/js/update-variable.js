var inStock = true;
var shipping = false;

inStock = false;
shipping = true;

var elStock = document.getElementById('stock')
elStock.className = inStock;
var elShip = document.getElementById('shipping')
elShip.className = shipping;