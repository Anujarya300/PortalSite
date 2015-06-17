app.controller('SignupCtrl', function ($scope, $rootScope, $http, $location, ngDialog) {

  $scope.user = {};

  $scope.signup = function () {

    var signupJSON = {
      name: $scope.user.firstName + ' ' + $scope.user.lastName,
      password: $scope.user.password,
      emailId: $scope.user.emailId,
      contactNo: $scope.user.contactNo,
      address: $scope.user.address
    };
    if (signupJSON.name) {
      $http.post('/api/signup', signupJSON).
        success(function (data) {
        $http.post('/userlogin', {
          username: signupJSON.name,
          password: signupJSON.password,
        })
          .success(function (user) {
          // No error: authentication OK
          $rootScope.message = 'Authentication successful!';
          $rootScope.isLoggedin = true;
          //ngDialog.closeAll();
          $location.url('/');
        })
          .error(function () {
          // Error: authentication failed
          $rootScope.message = 'Authentication failed.';
          $rootScope.isLoggedin = false;
          $location.url('/login');
        });
        $location.path('/allRealestate');
      });
    };
  };


});