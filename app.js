/* global __dirname */
var express = require("express");
var path = require('path');
var app = express();
var routes = require('./routes/indexRoutes.js');

app.configure(function () {
  app.set('views', __dirname + '/views');
  //app.set('view engine', 'jade');
  //app.engine('html', require('ejs').renderFile);
  app.set('view options', {
    layout: false
  });

  app.register('.html', {
    compile: function (string, options) {
      return function (locals) {
        return string;
      };
    }
  });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});


// Routes

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// api

var MainRouteConfig = require('./routes/apiRoutes.js');
new MainRouteConfig(app);

//app.configure(function () {
//
//  app.set("view options", {
//    layout: false
//  });
//
//  app.register('.html', {
//    compile: function (string, options) {
//      return function (locals) {
//        return string;
//      };
//    }
//  });
//
//});

//app.set('views', path.join(__dirname, 'views'));
////app.engine('html', require('ejs').renderFile);
////app.set('view engine', 'ejs');
//app.use(express.static(path.join(__dirname, 'public')));
app.listen(7007);

//console.log("server is startd on PORT: 7007...");
console.log("           _ _ _ _");
console.log("          /        \\");
console.log("         / server   \\");
console.log("        /  started   \\");
console.log("        |    on      |");
console.log("        \\   PORT    /");
console.log("         \\  7007   /");
console.log("          \\_ _ _ _/");
