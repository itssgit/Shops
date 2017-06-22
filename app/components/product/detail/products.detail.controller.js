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
        $scope.addNewMaterial = function(){
            $scope.lstMaterial.push({
                material: "",
                quantity: ""
            });
        };

        $scope.Product =
            {
                Name: "Apple",
                Price: 10
            };


        $scope.removeMaterial = function(){

        }

        $scope.revert = function () {
            $scope.Product = [];
        }
    }
    angular.module("app").controller("ProductDetailCtrl", ["$scope", ProductDetailCtrl])
})();