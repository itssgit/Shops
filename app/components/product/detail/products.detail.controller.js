(function() {
    "use strict";

    function ProductDetailCtrl($scope) {
        $scope.lstMaterial = [
            {
                material: "Chanh",
                quantity: 2
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

        $scope.removeMaterial = function(){

        }
    }
    angular.module("app").controller("ProductDetailCtrl", ["$scope", ProductDetailCtrl])
})();