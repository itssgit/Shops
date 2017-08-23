/**
 * Created by vietdd on 23/08/2017.
 */
/**
 * Created by vietdd on 16/06/2017.
 */
(function () {
    'use strict';

    angular.module("app").controller("StoreSearchCtrl", ["$scope","$uibModal", "$uibModalStack", "$filter","StoreService", StoreSearchCtrl]);
    function StoreSearchCtrl($scope, $uibModal, $uibModalStack, $filter, StoreService) {
        $scope.date = {
            startDate: new Date,
            endDate: new Date
        }

        /*---get list material---*/
        var onError = function onError(data){
            var modal = $uibModal.open({
                animation: 1,
                templateUrl: "modalAlertError.html",
                controller: "ModalInstanceCtrl",
                size: 'sm'
            });
            modal.result.then(function() {
                $uibModalStack.dismissAll();
            })
        }
        // $scope.data = [];
        // var onGetListSuccess = function onSuccess(data){
        //     $scope.data = data.value;
        //     $scope.listMaterial = $scope.data;
        // }
        // StoreService.getListMaterial("", onGetListSuccess, onError);
        /*--------------------*/


        /*click search*/
        $scope.search = function(){

        }
        /*--------------------*/

        /*click sort*/
        // $scope.sort = function(property){
        //     $scope.data = $filter("orderBy")($scope.data, property);
        //     $scope.listMaterial = $scope.data.slice(begin, end);
        // }
        /*--------------------*/


        /*pagination*/
        // var begin, end;
        // $scope.$watch('currentPage + numPerPage + data', function() {
        //     begin = (($scope.currentPage - 1) * $scope.numPerPage)
        //         , end = begin + $scope.numPerPage;
        //     $scope.listMaterial = $scope.data.slice(begin, end);
        // });
        /*--------------------*/
    }

})();
