(function() {
    "use strict";

    function a($scope) {
        $scope.image = null;
        $scope.imageFileName = '';

        $scope.uploadme = {};
        $scope.uploadme.src = '';
    }
    angular.module("app").controller("ProductDetailCtrl", ["$scope", a])
})();