'use strict';

/// <reference path="../controllers/realestateController.js" />



// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/allRealestate', {
        templateUrl: 'partialViews/allRealestate',
        controller: AllRealestateCtrl
      }).
      // when('/addRealestate/:id', {
      //   templateUrl: 'partials/addRealestate',
      //   controller: addRealestateCtrl
      // }).
      // when('/editPost/:id', {
      //   templateUrl: 'partials/editPost',
      //   controller: EditPostCtrl
      // }).
      // when('/deleteRealestate/:id', {
      //   templateUrl: 'partials/deleteRealestate',
      //   controller: deleteRealestateCtrl
      // }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);