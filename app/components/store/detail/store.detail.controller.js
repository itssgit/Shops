/**
 * Created by vietdd on 16/06/2017.
 */
(function () {
    function StoreDetailCtrl($scope, $location, StoreService){
        $scope.lstMaterial=[];
        
        $scope.addNewMaterial = function () {
            $scope.lstMaterial.push({
                ten: "",
                soLuong: "",
                donVi: ""
            });
        }
        
        $scope.removeMaterial = function ($index) {
            $scope.lstMaterial.splice($index, 1);
        }

        /*create*/
        var onError = function error(data){
            alert(data.message);
        }
        $scope.deleteList = function(lstMaterial){
            var onCreateListSuccess = function success(data) {
                $scope.alerts.push({
                    type: "success",
                    msg: 'MSG_MATERIAL_CREATED'
                });
                $location.url('/stores');
            }
            StoreService.create(lstMaterial, onCreateListSuccess, onError);
        }

    }
    angular.module("app").controller("StoreDetailCtrl", ["$scope", "$location", "StoreService",StoreDetailCtrl]);
})();