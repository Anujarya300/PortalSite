app.controller('mainCtrl', function ($scope, $rootScope, ngDialog) {

	$scope.open = function () {
		ngDialog.open({ template: 'firstDialogId',
			 controller: 'LoginCtrl', 
			 data: '',
			 preCloseCallback: function(value) {
      
            return true;
        }
     });	
	};

	$scope.openDefault = function () {
		ngDialog.open({
			template: 'firstDialogId',
			controller: 'LoginCtrl',
			className: 'ngdialog-theme-default'
		});
	};

	$scope.openPlain = function () {
		$rootScope.theme = 'ngdialog-theme-plain';

		ngDialog.open({
			template: 'firstDialogId',
			controller: 'LoginCtrl',
			className: 'ngdialog-theme-plain'
		});
	};

	$scope.openTemplate = function () {
		$scope.value = true;

		ngDialog.open({
			template: 'externalTemplate.html',
			className: 'ngdialog-theme-plain',
			scope: $scope
		});
	}
});