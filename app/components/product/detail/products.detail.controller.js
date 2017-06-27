(function() {
    "use strict";

    function ProductDetailCtrl($scope) {
        $scope.lstMaterial = [
            {
                material: "Chanh",
                quantity: 23
            },
            {
                material: "Xoài",
                quantity: 3,
            }
        ];
        //material detail
        $scope.addMaterial = function(){
        };

        $scope.Product =
            {
                Name: "Apple",
                Price: 10
            };


        $scope.removeMaterial = function($index){
            $scope.lstMaterial.splice($index, 1);
        }

        $scope.revert = function () {
            $scope.Product = [];
        }

    }
    angular.module("app").controller("ProductDetailCtrl", ["$scope", ProductDetailCtrl])
})();