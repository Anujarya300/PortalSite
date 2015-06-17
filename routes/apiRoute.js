// Closers

/// <reference path="../app.js" />


(function () {

	var auth = function (req, res, next) {
		if (!req.isAuthenticated())
			res.send(401);
		else
			next();
	};

	function mainRouteConfig(app) {
		var self = this;

		self.app = app;
		self.routeTable = [];
		self.init();
	};

	mainRouteConfig.prototype.init = function () {
		var self = this;

		self.addRoutes();
		self.processRoutes();
	};

	mainRouteConfig.prototype.processRoutes = function () {
		var self = this;

		self.routeTable.forEach(function (route) {
			if (route.requestType === 'GET') {
				self.app.get(route.requestUrl, route.callbackFunction);
			}
			if (route.requestType === 'POST') {
				if (route.isPublicApi)
					self.app.post(route.requestUrl, route.callbackFunction);
				else
					self.app.post(route.requestUrl, auth, route.callbackFunction);

			}
		}, this);
	};

	/* ~~~ Realestate api routes */

	mainRouteConfig.prototype.addRoutes = function () {
		var self = this;
		var realestateService = require('../serverRepositories/realestateService.js');
		var carbikeService = require('../serverRepositories/carBikeService.js');
		var loginService = require('../serverRepositories/loginService.js');

		self.routeTable.push(
			{
				requestType: 'GET',
				requestUrl: '/api/allRealestate',
				callbackFunction: function (request, response) {
					// call method from Realestates repositiories
					realestateService.getAllRealestate(function (result) {
						response.json(result);
					});
					//response.json('posts : kfslk');
				}
			}
			);

		self.routeTable.push(
			{
				requestType: 'GET',
				requestUrl: '/api/viewRealestate/:id',
				callbackFunction: function (request, response) {
					realestateService.getRealestate(request.params.id, function (result) {
						response.json(result);
					});
				}
			}
			);

		self.routeTable.push(
			{
				requestType: 'POST',
				requestUrl: '/api/addRealestate',
				callbackFunction: function (request, response) {
					// call method from Realestates repositiories
					console.log(request.body);
					realestateService.addRealestate(request.body, function (result) {
						response.json(result);
					});
				}
			}
			);

		self.routeTable.push(
			{
				requestType: 'GET',
				requestUrl: '/api/deleteRealestate',
				callbackFunction: function (request, response) {
					// call method from Realestates repositiories
				}
			}
			);
	
		/* ~~~ End of Realestate api routes */
	
	
		/* ~~~ Start of Car & Bikes api routes */


		self.routeTable.push(
			{
				requestType: 'GET',
				requestUrl: '/api/allCarBikes',
				callbackFunction: function (request, response) {
					// call method from Realestates repositiories
					carbikeService.getAllCarBikes(function (result) {
						response.json(result);
					});
					//response.json('posts : kfslk');
				}
			}
			);

		self.routeTable.push(
			{
				requestType: 'GET',
				requestUrl: '/api/viewCarBike/:id',
				callbackFunction: function (request, response) {
					carbikeService.getCarBike(request.params.id, function (result) {
						response.json(result);
					});
				}
			}
			);

		self.routeTable.push(
			{
				requestType: 'POST',
				requestUrl: '/api/addCarBike',
				callbackFunction: function (request, response) {
					// call method from Realestates repositiories
					console.log(request.body);
					carbikeService.addCarbike(request.body, function (result) {
						response.json(result);
					});
				}
			}
			);

		self.routeTable.push(
			{
				requestType: 'GET',
				requestUrl: '/api/deleteCarBike',
				callbackFunction: function (request, response) {
					// call method from Realestates repositiories
				}
			}
			);
	
		/* ~~~ End of Car & Bikes api routes */
	
		/* ~~~ Sign up api routes */

		self.routeTable.push(
			{
				requestType: 'POST',
				requestUrl: '/api/signup',
				callbackFunction: function (request, response) {
					// call method from Realestates repositiories
					console.log(request.body);
					loginService.addUser(request.body, function (result) {
						response.json(result);
					});
				},
				isPublicApi: true
			}
			);
	
		/* ~~~ End of Sign up api routes */
	
		// any random url not belong to actual page
		self.routeTable.push(
			{
				requestType: 'GET',
				requestUrl: '*',
				callbackFunction: function (request, response) {
					response.render('error.html', { title: 'Error Page' });
				}
			}
			);

	};


	module.exports = mainRouteConfig;

})();