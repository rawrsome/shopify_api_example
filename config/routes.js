module.exports = function(app, Shopify) {
// ====> start get all products
	app.get('/products', function(req, res) {
		Shopify.get('/admin/products.json', function(err, data, headers) {
			// console.log(data); 
			// console.log(headers);
		    // products.show(data, headers);
		    res.json(data);	    
		});
	})
// <==== end get all products



// ====> start show products
	app.get('/products/:id', function(req, res) {
		Shopify.get('/admin/products.json', function(err, data, headers) {
			console.log(res.json(data));
		});
	})
// <==== end show products 
};