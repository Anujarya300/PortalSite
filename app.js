/* global __dirname */
var express = require("express");
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.listen(7007);

var MainRouteConfig = require('./routesServer/mainRouteConfig.js');
new MainRouteConfig(app);

//console.log("server is startd on PORT: 7007...");
console.log("           _ _ _ _");
console.log("          /        \\");
console.log("         / server   \\");
console.log("        /  started   \\");
console.log("        |    on      |");
console.log("        \\   PORT    /");
console.log("         \\  7007   /");
console.log("          \\_ _ _ _/");
