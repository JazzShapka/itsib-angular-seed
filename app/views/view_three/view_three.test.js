describe('angularApp.view_three', function () {

    beforeEach(module('angularApp.view_three'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('sum', function () {
        it('1 + 2 should equal 3', function () {
            var $scope = {};
            var controller = $controller('ViewThreeCtrl', { $scope: $scope });
            $scope.x = 1;
            $scope.y = 2;
            $scope.sum();
            expect($scope.z).toBe(3);
        });
    });
    it('z should have default value of zero', function () {
        var $scope = {};
        var controller = $controller('ViewThreeCtrl', { $scope: $scope });

        expect($scope.z).toBe(0);
    });
});