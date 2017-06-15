(function() {
    "use strict";

    function ProductDetailCtrl($scope) {
        $scope.image = null;
        $scope.imageFileName = '';

        $scope.uploadme = {};
        $scope.uploadme.src = '';
    }
    angular.module("app").controller("ProductDetailCtrl", ["$scope", ProductDetailCtrl])
})();