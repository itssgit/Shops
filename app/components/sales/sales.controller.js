/**
 * Created by vietdd on 21/07/2017.
 */
(function() {
    "use strict";

    function SalesCtrl($scope, $filter, SalesService) {
        $scope.filtered = [];
        $scope.searchKeywords="";

        var onError = function error(data){
            alert(data.message);
        }

        /*list order*/
        var onGetListSuccess = function success(data){
            $scope.lstOrder = data.value.list;
            $scope.filtered = $scope.lstOrder;
        }
        SalesService.listOrder(onGetListSuccess, onError);


        /*search*/
        $scope.search = function(){
            $scope.filtered = SalesService.search($scope.lstOrder, $scope.searchKeywords);
        }

        /*sort*/
        $scope.order = function(property){
            $scope.filtered = SalesService.order($scope.lstOrder, property);
        }


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