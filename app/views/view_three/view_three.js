angular
    .module('angularApp.view_three', [])
    .controller('ViewThreeCtrl', function ($scope) {
        $scope.z = 0;
        $scope.sum = function() {
            $scope.z = $scope.x + $scope.y;
        };
    });