/**
 * Created by vietdd on 21/07/2017.
 */
(function() {
    "use strict";

    function SalesCtrl($scope, $filter, SalesService) {
        $scope.filtered = [];

        var onError = function error(data){
            alert(data.message);
        }

        /*list order*/
        var onGetListSuccess = function success(data){
            $scope.lstProduct = data.value.list;
            $scope.filtered = $scope.lstProduct;
        }
        SalesService.listOrder(onGetListSuccess, onError);

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
    angular.module("app").controller("SalesCtrl", ["$scope", "$filter", "SalesService", SalesCtrl])
})();