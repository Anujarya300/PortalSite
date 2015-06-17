/* global app */
'use strict';

/// <reference path="../controllers/realestateController.js" />

var app = angular.module('myApp', ['ngRoute', 'ngDialog','ngAnimate', 'ngTouch']);

// Declare app level module which depends on filters, and services
app.config(function ($routeProvider, $locationProvider, $httpProvider) {

  var checkLoggedin = function ($q, $timeout, $http, $location, $rootScope) {
    // Initialize a new promise
    var deferred = $q.defer();

    // Make an AJAX call to check if the user is logged in
    $http.get('/loggedin').success(function (user) {
      // Authenticated
      if (user !== '0') {
        /*$timeout(deferred.resolve, 0);*/
        $rootScope.isLoggedin = true;
        deferred.resolve();
      }

      // Not Authenticated
      else {
        $rootScope.message = 'You need to log in.';
        //$timeout(function(){deferred.reject();}, 0);
        $rootScope.isLoggedin = false;
        deferred.reject();
        //$location.url('/login');
      }
    });

    return deferred.promise;
  };
  //================================================
    
  //================================================
  // Add an interceptor for AJAX errors
  //================================================
  $httpProvider.interceptors.push(function ($q, $location) {
    return {
      response: function (response) {
        // do something on success
        return response;
      },
      responseError: function (response) {
        if (response.status === 401)
          $location.url('/needlogin');
        return $q.reject(response);
      }
    };
  });

  $routeProvider.
    when('/', {
    templateUrl: 'partialViews/index',
    resolve: {
      loggedin: checkLoggedin
    }
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
    when('/login', {
    templateUrl: 'partialViews/login',
    controller: 'LoginCtrl'
  }).
    when('/signout', {
    templateUrl: 'partialViews/signout',
    controller: 'LoginCtrl'
  })
    .when('/needLogin', {
    templateUrl: 'partialViews/needLogin'
  })
    .when('/signup', {
    templateUrl: 'partialViews/signup',
    controller: 'SignupCtrl'
  }).
  // when('/deleteRealestate/:id', {
  //   templateUrl: 'partials/deleteRealestate',
  //   controller: deleteRealestateCtrl
  // }).
    otherwise({
    redirectTo: '/'
  });
  $locationProvider.html5Mode(true);
})
  .run(function ($rootScope, $http, $location) {
  $rootScope.message = '';

  // Logout function is available in any pages
  $rootScope.logout = function () {
    $rootScope.message = 'Logged out.';
    $http.post('/logout')
      .success(function (user) {
      $rootScope.isLoggedin = false;
      $location.url('/signout');
    })
      .error(function () {
      // Error: authentication failed
      $rootScope.message = 'Authentication failed.';
      $rootScope.isLoggedin = false;
      $location.url('/login');
    });
  };
});
