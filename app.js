/* global __dirname */
var express = require("express");
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.listen(7007);

var mainRouteConfig = require('./routes/mainRouteConfig.js');
new mainRouteConfig(app);

console.log("server is startd...");