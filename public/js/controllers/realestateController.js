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

app.controller('AddRealestateCtrl', function ($scope, $rootScope, $http, $location) {
  //$scope.form = {};
  if (!$rootScope.isLoggedin) {
    $location.path('/needLogin');
    return;
  }

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
  
  // Set of Photos
    $scope.photos = [
        {src: 'http://farm9.staticflickr.com/8042/7918423710_e6dd168d7c_b.jpg', desc: 'Image 01'},
        {src: 'http://farm9.staticflickr.com/8449/7918424278_4835c85e7a_b.jpg', desc: 'Image 02'},
        {src: 'http://farm9.staticflickr.com/8457/7918424412_bb641455c7_b.jpg', desc: 'Image 03'},
        {src: 'http://farm9.staticflickr.com/8179/7918424842_c79f7e345c_b.jpg', desc: 'Image 04'},
        {src: 'http://farm9.staticflickr.com/8315/7918425138_b739f0df53_b.jpg', desc: 'Image 05'},
        {src: 'http://farm9.staticflickr.com/8461/7918425364_fe6753aa75_b.jpg', desc: 'Image 06'}
    ];

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
  
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
