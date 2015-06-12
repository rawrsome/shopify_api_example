// ---- require
var express = require('express');
var path = require('path');
var app = express();
var shopifyAPI = require('shopify-node-api');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
// ---- end require
app.use(express.static(path.join(__dirname, './client/static')));






// ---- start Shopify
var Shopify = new shopifyAPI({
    shop: '100-pure-2', // domain name (MYSHOP.myshopify.com)
    shopify_api_key: '48f139f15c7deabaf29ebb2cfad45c4e', // Your API key
    access_token: 'b02c60adcc8d521da89d5458846c9711', // The "Password" from /admin/apps/private/:app_id
    shopify_scope: 'write_products'
});
// ---- end Shopify






// ---- start config
// require('./config/mongoose.js');
require('./config/routes.js')(app, Shopify);
// ----	end config





// ---- start server
var port = process.env.PORT || 8888;
var server = app.listen(8888, function(){
	console.log("Entering realm 8888..");
});
// ---- end server