/**
 * Created by vietdd on 29/06/2017.
 */
(function () {
    'use strict';
    angular.module("app").service("CategoryService", CategoryService);
    CategoryService.$inject = ["$filter", "HttpService", "AppConfig"];

    function CategoryService($filter, HttpService, AppConfig){
        this.getListCategory = function (onSuccess, onError) {
            var url = AppConfig.categoryURI.list;
            HttpService.callGetService(url, onSuccess, onError);
        };

        this.order = function(data, property){
            return $filter("orderBy")(data, property);
        };

        this.delete = function(lstProductId, onSuccess, onError){
            var url = AppConfig.productURI.deleteList;
            HttpService.callPutService(url, lstProductId, onSuccess, onError);
        };
    }
})();