'use strict';

/* Controllers */

function IndexCtrl($scope, $http) {
  $http.get('/api/allRealestate').
    success(function (data, status, headers, config) {
    $scope.posts = data.posts;
  });
}

function RealestateCtrk($scope, $http) {

return;
}

function AllRealestateCtrl($scope, $http) {
  $http.get('/api/allRealestate').
    success(function (data, status, headers, config) {
    $scope.posts = data;
  }).
    error(function (data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    var d = data;
  });

};

function AddRealestateCtrl($scope, $http, $location) {
  //$scope.form = {};
  $scope.postAd = function () {

    var addRealestateJSON = {
      title: $scope.title,
      description: $scope.description,
      email: $scope.email
    }

    $http.post('/api/addRealestate', addRealestateJSON).
      success(function (data) {
      $location.path('/realestate');
    });
  };
}

function ReadPostCtrl($scope, $http, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function (data) {
    $scope.post = data.post;
  });
}

function EditPostCtrl($scope, $http, $location, $routeParams) {
  $scope.form = {};
  $http.get('/api/post/' + $routeParams.id).
    success(function (data) {
    $scope.form = data.post;
  });

  $scope.editPost = function () {
    $http.put('/api/post/' + $routeParams.id, $scope.form).
      success(function (data) {
      $location.url('/readPost/' + $routeParams.id);
    });
  };
}

function DeletePostCtrl($scope, $http, $location, $routeParams) {
  $http.get('/api/post/' + $routeParams.id).
    success(function (data) {
    $scope.post = data.post;
  });

  $scope.deletePost = function () {
    $http.delete('/api/post/' + $routeParams.id).
      success(function (data) {
      $location.url('/');
    });
  };


  $scope.home = function () {
    $location.url('/');
  };
}
