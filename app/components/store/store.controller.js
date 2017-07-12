/**
 * Created by vietdd on 16/06/2017.
 */
(function () {
    angular.module("app").controller("StoreCtrl", ["$scope","StoreService", StoreCtrl]);
    function StoreCtrl($scope, StoreService) {

        var onGetListSuccess = function success(data){
            $scope.lstMaterial = data.value.list;
            $scope.filtered = $scope.lstMaterial;
        }
        var onGetListError = function error(data){
            alert(data.message);
        }
        StoreService.listMaterial(onGetListSuccess, onGetListError);
    }
})();
