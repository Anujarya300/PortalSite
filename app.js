/* global __dirname */
var express = require("express");
var path = require('path');
var app = module.exports = express.createServer();
var routes = require('./routes/indexRoutes.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var loginService = require('./serverRepositories/loginService.js')


//==================================================================
// Define the strategy to be used by PassportJS

passport.use(new LocalStrategy(
  function (username, password, done) { // here username is emailID
    console.log(username + ':' + password);
    loginService.getUserByName(username, function (user) {
      console.log(user);
      if (user && username === user.EmailID && password === user.Password){
        console.log("success: " + user.EmailID + ":" + user.Password);
        return done(null, { name: username });
      }
    });

    // return done(null, false, { message: 'Incorrect username.' });
  }
  ));

// Serialized and deserialized methods when got from session
passport.serializeUser(function (user, done) {
  console.log(user);
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  console.log(user);
  done(null, user);
});

// Define a middleware function to be used for every secured routes

//==================================================================



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
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'securedsession' }));
  app.use(passport.initialize()); // Add passport initialization
  app.use(passport.session());    // Add passport initialization
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});


// Routes

app.get('/', routes.index);
app.get('/partialViews/:name', routes.partials);

//==================================================================
// route to test if the user is logged in or not
app.get('/loggedin', function (req, res) {
  res.send(req.isAuthenticated() ? req.user : '0');
});

// route to log in
app.post('/userlogin', passport.authenticate('local'), function (req, res) {
  console.log(req.user);
  res.send(req.user);
});

// route to log out
app.post('/logout', function (req, res) {
  req.logOut();
  res.send(200);
});
//==================================================================



// api

var mainRouteConfig = require('./routes/apiRoute.js');
new mainRouteConfig(app);

// app.get('/api/allRealestate', function (request, response) {
//    response.json('ifjdi');
// });

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
