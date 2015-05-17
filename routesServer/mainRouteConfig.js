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
	}, this);
};

mainRouteConfig.prototype.addRoutes = function () {
	var self = this;
	
	// index page
	self.routeTable.push(
		{
			requestType : 'GET',
			requestUrl : '/',
			callbackFunction : function (request, response) {
				response.render('home.html', {title : 'Home Page'});
			}
		}
	);
	
	// home page
	self.routeTable.push(
		{
			requestType : 'GET',
			requestUrl : '/home',
			callbackFunction : function (request, response) {
				response.render('home.html', {title : 'Home Page'});
			}
		}
	);
	
	// any random url not belong to actual page
	self.routeTable.push(
		{
			requestType : 'GET',
			requestUrl : '*',
			callbackFunction : function (request, response) {
				response.render('error.html', {title : 'Home Page'});
			}
		}
	);
	
};

module.exports = mainRouteConfig;

})();