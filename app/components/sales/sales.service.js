/**
 * Created by anhvu on 14-Jun-17.
 */
(function () {
    'use strict'
    angular.module("app").service("SalesService", SalesService);
    SalesService.$inject = ["$filter", "HttpService","AppConfig"];
    function SalesService($filter, HttpService, AppConfig){

        this.search = function(data, keyWord){
            var result = $filter("filter")(data, keyWord);
            return result;
        };

        this.order = function(data, property){
            var result = $filter("orderBy")(data, property);
            return result;
        };

        this.listOrder = function(onSuccess, onError){
            var url = AppConfig.orderURI.list;
            HttpService.callGetService(url, onSuccess, onError);
        }

        this.delete = function(lstProductId, onSuccess, onError){
            var url = AppConfig.productURI.deleteList;
            HttpService.callPutService(url, lstProductId, onSuccess, onError);
        }
    }
})();
