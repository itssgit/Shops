/**
 * Created by anhvu on 14-Jun-17.
 */
(function () {
    'use strict'
    angular.module("app").service("ProductService", ProductService);
    ProductService.$inject = ["$filter", "HttpService","AppConfig"];
    function ProductService($filter, HttpService, AppConfig){

        this.search = function(data, keyWord){
            var result = $filter("filter")(data, keyWord);
            return result;
        };

        this.order = function(data, property){
            var result = $filter("orderBy")(data, property);
            return result;
        };

        this.listProduct = function(){
            var url = AppConfig.productURI.list;
            HttpService.callGetService(url, onSuccess, onError);
        }
        var onSuccess = function success(data){
            alert(data);
        }
        var onError = function error(data){
            alert(data);
        }
    }
})();
