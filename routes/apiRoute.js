// Closers
(function () {
	
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
	
	self.routeTable.forEach(function(route) {
		if(route.requestType === 'GET')
		{
			self.app.get(route.requestUrl, route.callbackFunction);
		}
		if(route.requestType === 'POST'){
			self.app.post(route.requestUrl, route.callbackFunction);
		}
	}, this);
};

/* ~~~ Realestate api routes */

mainRouteConfig.prototype.addRoutes = function () {
	var self = this;
	var realestateService = require('../serverRepositories/realestateService.js');

	self.routeTable.push(
		{
			requestType : 'GET',
			requestUrl : '/api/allRealestate',
			callbackFunction : function (request, response) {
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
			requestType : 'GET',
			requestUrl : '/api/viewRealestate/:id',
			callbackFunction : function (request, response) {
				realestateService.getRealestate(request.params.id, function (result) {
					response.json(result);
				});
			}
		}
	);
	
	self.routeTable.push(
		{
			requestType : 'POST',
			requestUrl : '/api/addRealestate',
			callbackFunction : function (request, response) {
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
			requestType : 'GET',
			requestUrl : '/api/deleteRealestate',
			callbackFunction : function (request, response) {
				// call method from Realestates repositiories
			}
		}
	);
	
	/* ~~~ End of Realestate api routes */
	
	// any random url not belong to actual page
	self.routeTable.push(
		{
			requestType : 'GET',
			requestUrl : '*',
			callbackFunction : function (request, response) {
				response.render('error.html', {title : 'Error Page'});
			}
		}
	);
	
};

module.exports = mainRouteConfig;

})();