/**
* PureApp Module
*
* This is the primary angular module for the purity cosmetics coding challenge. 
* 
* Look for ng-app in the opening <html> tag in index.html.
* Define your controllers and services by chaining them below. 
*/

// Sample controller:  
// -- don't forget to declare 'ng-controller' in index.html
// .controller('MainCtrl', ['$scope', function($scope){


var App = angular.module('PureApp', ['ngRoute']);

// ====> start partials
	App.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html'
	})	
	.when('/products', {
		templateUrl: 'partials/products.html'
	})
	.when('/show/:id', {
		templateUrl: 'partials/show.html'
	})	
	.otherwise({
		redirectTo: '/'
	});
});
// <==== end partials


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
							// MainFactory
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
	App.factory('MainFactory', function($http) {
		var factory = {};
		var products = [];

	// ====> getProducts
		factory.getProducts = function(callback) {
			$http.get('/products').success(function(results) {
				callback(results);
			});
		}
	// <==== end getProducts


	// ====> showProduct
		factory.showProduct = function(callback) {
			$http.get('/products/:id').success(function(results) {
				console.log(results);
				callback(results);
			});
		}
	// <==== end showProduct
	return factory;
	});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //
							// productsController
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= //

	// ====> showProducts
	App.controller('productsController', function($scope, MainFactory, $location) {
		MainFactory.getProducts(function(data) {
			$scope.products = data.products;
			console.log(data);
		});
	});
	// <==== end showProducts