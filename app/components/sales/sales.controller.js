/**
 * Created by vietdd on 21/07/2017.
 */
(function() {
    "use strict";

    function SalesCtrl($scope, $filter, SalesService) {
        $scope.listOrder = function () {
            SalesService
        }
    }
    angular.module("app").controller("SalesCtrl", ["$scope", "$filter", "SalesService", SalesCtrl])
})();