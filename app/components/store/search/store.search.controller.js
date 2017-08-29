/**
 * Created by vietdd on 23/08/2017.
 */
/**
 * Created by vietdd on 16/06/2017.
 */
(function () {
    'use strict';

    angular.module("app").controller("StoreSearchCtrl", ["$scope","$uibModal", "$filter","StoreService", StoreSearchCtrl]);
    function StoreSearchCtrl($scope, $uibModal, $filter, StoreService) {
        $scope.date = {
            startDate: new Date,
            endDate: new Date
        }
        $scope.param="";
        $scope.param += "startDate=" + $filter('date')($scope.date.startDate,'yyyy-MM-dd hh:mm:ss');
        $scope.param += "&endDate=" + $filter('date')($scope.date.endDate,'yyyy-MM-dd hh:mm:ss');

        /*---get list material---*/
        var onError = function onError(data){
            var modal = $uibModal.open({
                animation: 1,
                templateUrl: "modalAlertError.html",
                controller: "ModalInstanceCtrl",
                size: 'sm'
            });
        }
        $scope.data = [];
        var onGetListSuccess = function onSuccess(data){
            $scope.data = data.value;
            $scope.listStockTrans = $scope.data;
        }
        StoreService.getListTransaction($scope.param, onGetListSuccess, onError);
        /*--------------------*/


        /*select checkbox*/
        var index;
        $scope.open = function(selected, $index) {
            index = $index;
            $scope.stockTransDetailDTOList = $scope.listStockTrans[$index].stockTransDetailDTOList;
            if(selected){
                $uibModal.open({
                    animation: 1,
                    templateUrl: "modalInfoStockTrans.html",
                    controller: "ModalInstanceCtrl",
                    size: 'lg',
                    scope: $scope,
                });
            }
        };
        /*--------------------*/




        /*click search*/
        $scope.searchCode = "";
        $scope.type = "";
        $scope.search = function(){
            $scope.param="";
            $scope.param += "startDate=" + $filter('date')($scope.date.startDate,'yyyy-MM-dd hh:mm:ss');
            $scope.param += "&endDate=" + $filter('date')($scope.date.endDate,'yyyy-MM-dd hh:mm:ss');
            if($scope.searchCode){
                $scope.param += "&stockTransNo=" + $scope.searchCode;
            }
            if($scope.type){
                $scope.param += "&typeTrans=" + $scope.type;
            }
            StoreService.getListTransaction($scope.param, onGetListSuccess, onError);
        }
        /*--------------------*/

        /*click sort*/
        $scope.sort = function(property){
            $scope.data = $filter("orderBy")($scope.data, property);
            $scope.listStockTrans = $scope.data.slice(begin, end);
        }
        /*--------------------*/


        /*pagination*/
        var begin, end;
        $scope.$watch('currentPage + numPerPage + data', function() {
            begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;
            $scope.listStockTrans = $scope.data.slice(begin, end);
        });
        /*--------------------*/
    }

})();
