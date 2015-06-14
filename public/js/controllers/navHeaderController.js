// function HeaderController($scope, $location) 
// { 
//     $scope.isActive = function (viewLocation) { 
//         return viewLocation === $location.path();
//     };
// }

app.controller('HeaderController', function($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});