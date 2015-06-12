/* global app */
'use strict';

/// <reference path="../controllers/realestateController.js" />

var app = angular.module('myApp', []);

// Declare app level module which depends on filters, and services
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/realestate', {
    templateUrl: 'partialViews/realestate',
    controller: RealestateCtrk
  }).
    when('/allRealestate', {
    templateUrl: 'partialViews/allRealestate',
    controller: 'AllRealestateCtrl'
  }).
    when('/addRealestate/', {
    templateUrl: 'partialViews/addRealestate',
    controller: 'AddRealestateCtrl'
  }).
    when('/editPost/:id', {
    templateUrl: 'partialViews/editPost',
    controller: EditPostCtrl
  }).
    when('/viewRealestate/:id', {
    templateUrl: 'partialViews/viewRealestate',
    controller: 'ViewRealestateCtrl'
  }).
    when('/carBikes', {
    templateUrl: 'partialViews/carBikes',
    controller: 'AllCarBikesCtrl'
  }).
  when('/addCarBike/', {
    templateUrl: 'partialViews/addCarBike',
    controller: 'AddCarBikeCtrl'
  }).
    when('/viewCarBike/:id', {
    templateUrl: 'partialViews/viewCarBike',
    controller: 'ViewCarBikeCtrl'
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