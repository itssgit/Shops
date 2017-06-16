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

        $scope.removeMaterial = function(property){
        }
    }
    angular.module("app").controller("ProductDetailCtrl", ["$scope", ProductDetailCtrl])
})();