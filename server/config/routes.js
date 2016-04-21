var orders = require('../controllers/orders.js');
var customers = require('../controllers/customers.js');
var products = require('../controllers/products.js');

module.exports = function(app){
app.get('/customers', function(req, res){
  customers.index(req, res);
})

app.post('/customers/new', function(req, res){
	customers.new(req, res);
})
app.get('/customers/remove/:id', function(req, res){
	console.log(req.params.id)
	customers.destroy(req, res, req.params.id);
})

app.post('/orders/new', function(req, res){
	console.log('order/new')
	orders.new(req, res);
})

app.get('/orders', function(req, res){
  orders.index(req, res);
})

app.post('/products/new', function(req, res){
	products.new(req, res);
})

app.get('/products', function(req, res){
  products.index(req, res);
})

app.put('/inventory', function(req, res) {
	products.inventory(req, res);
})

}