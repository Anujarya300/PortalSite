/* global app */
'use strict';

/* Controllers belongs to realestate category */

function IndexCtrl($scope, $http) {
  $http.get('/api/allRealestate').
    success(function (data, status, headers, config) {
    $scope.posts = data.posts;
  });
}

function RealestateCtrk($scope, $http) {

  return;
}

app.controller('AllRealestateCtrl', function ($scope, $http) {
  var bindData = [];
  $http.get('/api/allRealestate').
    success(function (data, status, headers, config) {
    angular.forEach(data, function (value, key) {
      bindData.push({
        id: value.ad_id,
        title: value.AdTitle,
        description: JSON.parse(value.Description),
        adType: value.AdType
      });
    });
    $scope.posts = bindData;
  }).
    error(function (data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    var d = data;
  });

});

app.controller('AddRealestateCtrl',function ($scope, $http, $location) {
  //$scope.form = {};
  $scope.postAd = function () {

    var addRealestateJSON = {
      title: $scope.title,
      description: JSON.stringify({ description: $scope.description, email: $scope.email }),
      email: $scope.email
    };
    if ($scope.title) {
      $http.post('/api/addRealestate', addRealestateJSON).
        success(function (data) {
        $location.path('/allRealestate');
      });
    };
  };
});

app.controller('ViewRealestateCtrl', function ($scope, $http, $routeParams) {
  var bindData = {};
  $http.get('/api/viewRealestate/' + $routeParams.id).
    success(function (data) {
    var dataObj = data[0];
    bindData = {
      title: dataObj.AdTitle,
      description: JSON.parse(dataObj.Description),
      adType: dataObj.AdType
    };
    $scope.realestate = bindData;
  });
});

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
