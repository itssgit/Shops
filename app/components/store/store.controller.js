/**
 * Created by vietdd on 16/06/2017.
 */
(function () {
    angular.module("app").controller("StoreCtrl", ["$scope","StoreService", StoreCtrl]);
    function StoreCtrl($scope, StoreService) {

        /*get list materials*/
        var onGetListSuccess = function success(data){
            $scope.lstMaterial = data.value.list;
            $scope.filtered = $scope.lstMaterial;
        }
        var onGetListError = function error(data){
            alert(data.message);
        }
        StoreService.listMaterial(onGetListSuccess, onGetListError);


        /*pagination*/
        $scope.$watch('filtered', function() {
            $scope.lstData = $scope.filtered;
        });
        var begin, end;
        $scope.$watch('currentPage + numPerPage', function() {
            begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;
            $scope.lstData = $scope.filtered.slice(begin, end);
        });
    }
})();
