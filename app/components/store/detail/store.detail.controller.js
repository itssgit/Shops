/**
 * Created by vietdd on 16/06/2017.
 */
(function () {
    function StoreDetailCtrl($scope){
        $scope.lstMaterial=[];
        
        $scope.addNewMaterial = function () {
            $scope.lstMaterial.push({
                name: "",
                quantity: "",
                unit:""
            });
        }
        
        $scope.removeMaterial = function ($index) {
            $scope.lstMaterial.splice($index, 1);
        }
    }
    angular.module("app").controller("StoreDetailCtrl", ["$scope",StoreDetailCtrl]);
})();