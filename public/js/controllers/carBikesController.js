'use strict';

/* Controllers belongs to car & bikes category */

function AllCarBikesCtrl($scope, $http) {
	var bindData = [];
	$http.get('/api/allCarBikes').
		success(function (data, status, headers, config) {
		angular.forEach(data, function (value, key) {
			bindData.push({
				id: value.ad_id,
				title: value.AdTitle,
				description: JSON.parse(value.Description),
				adType: value.AdType,
				category: value.Category,
				subCategory: value.SubCategory
			});
		});
		$scope.carBikes = bindData;
	});
}

function AddCarBikeCtrl($scope, $http, $location) {
  //$scope.form = {};
  $scope.postAd = function () {

    var addCarBikesJSON = {
      title: $scope.title,
      description: JSON.stringify({description : $scope.description, email : $scope.email}),
      email: $scope.email
    };
    if ($scope.title) {
      $http.post('/api/addCarBike', addCarBikesJSON).
        success(function (data) {
        $location.path('/carBikes');
      });
    };
  };
}

function ViewCarBikeCtrl($scope, $http, $routeParams) {
  var bindData = {};
    $http.get('/api/viewCarBike/' + $routeParams.id).
    success(function(data) {
      var dataObj = data[0];
      bindData = {
        title: dataObj.AdTitle,
        description: JSON.parse(dataObj.Description),
        adType: dataObj.AdType
      };
      $scope.carBike = bindData;
    });


};