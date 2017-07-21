/**
 * Created by vietdd on 21/07/2017.
 */
(function() {
    "use strict";

    function SalesCtrl($scope, $filter, SalesService) {
        var onError = function error(data){
            alert(data.message);
        }
        $scope.listOrder = function () {
            var onGetListSuccess = function success(data){

            }
        }
    }
    angular.module("app").controller("SalesCtrl", ["$scope", "$filter", "SalesService", SalesCtrl])
})();