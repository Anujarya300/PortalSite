
/**********************************************************************
 * Login controller
 **********************************************************************/
app.controller('LoginCtrl', function ($scope, $rootScope, $http, $location) {
  // This object will be filled by the form

    $scope.showModal = false;
    $scope.toggleModal = function () {
      $scope.showModal = !$scope.showModal;
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
      $location.url('/');
    })
      .error(function () {
      // Error: authentication failed
      $rootScope.message = 'Authentication failed.';
      $rootScope.isLoggedin = true;      
      $location.url('/login');
    });
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