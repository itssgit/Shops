/**
 * Created by vietdd on 21/07/2017.
 */
(function(){
    'use strict'

    angular.module("app").service("SalesService", SalesService);
    SalesService.$inject = ["$scope", "HttpService", "AppConfig"];

    function SalesService($scope, HttpService, AppConfig){
        this.listOrder = function () {
        }
    }
})();