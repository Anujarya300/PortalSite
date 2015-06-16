
/**********************************************************************
 * Login controller
 **********************************************************************/
app.controller('LoginCtrl', function ($scope, $rootScope, $http, $location, ngDialog) {
  // This object will be filled by the form

  $scope.openSecond = function () {
    ngDialog.open({
      template: '<h3><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
      plain: true,
      closeByEscape: false,
      controller: 'SecondModalCtrl'
    });
  };



  $scope.user = {};

  // Register the login() function
  $scope.userlogin = function () {
    $http.post('/userlogin', {
      username: $scope.user.username,
      password: $scope.user.password,
    })
      .success(function (user) {
      // No error: authentication OK
      $rootScope.message = 'Authentication successful!';
      $rootScope.isLoggedin = true;
      ngDialog.closeAll();
      $location.url('/');
    })
      .error(function () {
      // Error: authentication failed
      $rootScope.message = 'Authentication failed.';
      $rootScope.isLoggedin = false;
      $location.url('/login');
    });
  };
});

app.controller('SecondModalCtrl', function ($scope, ngDialog) {
  $scope.closeSecond = function () {
    ngDialog.close();
  };
});

/**********************************************************************
 * Admin controller
 **********************************************************************/
app.controller('AdminCtrl', function ($scope, $http) {
  // List of users got from the server
  $scope.users = [];

  // Fill the array to display it in the page
  $http.get('/users').success(function (users) {
    for (var i in users)
      $scope.users.push(users[i]);
  });
});