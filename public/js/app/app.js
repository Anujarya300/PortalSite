'use strict';

/// <reference path="../controllers/realestateController.js" />



// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/realestate', {
        templateUrl: 'partialViews/realestate',
        controller: RealestateCtrk
      }).
      when('/allRealestate', {
        templateUrl: 'partialViews/allRealestate',
        controller: AllRealestateCtrl
      }).
      when('/addRealestate/', {
        templateUrl: 'partialViews/addRealestate',
        controller: AddRealestateCtrl
      }).
      when('/editPost/:id', {
        templateUrl: 'partialViews/editPost',
        controller: EditPostCtrl
      }).
      when('/viewRealestate/:id', {
        templateUrl: 'partialViews/viewRealestate',
        controller: ViewRealestateCtrl
      }).
      when('/e', {
        templateUrl: 'partialViews/e',
        controller: EditPostCtrl
      }).
      // when('/deleteRealestate/:id', {
      //   templateUrl: 'partials/deleteRealestate',
      //   controller: deleteRealestateCtrl
      // }).
      otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);