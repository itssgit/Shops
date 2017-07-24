/**
 * Created by vietdd on 28/06/2017.
 */
(function(){
    'use strict'
    angular.module("app").service("ProductDetailService", ProductDetailService);
    ProductDetailService.$inject = ["HttpService","AppConfig", "$filter"];
    function ProductDetailService(HttpService, AppConfig, $filter){

        this.getProductById = function(id, onSuccess, onError){
            var url = AppConfig.productURI.product + id;
            HttpService.callGetService(url, onSuccess, onError);
        }

        this.saveInfo = function(product, onSuccess, onError){
            var url = AppConfig.productURI.update;
            HttpService.callPutService(url, product, onSuccess, onError);
        }

        this.delete = function(id, onSuccess, onError){
            var url = AppConfig.productURI.delete;
            HttpService.callPutService(url, id, onSuccess, onError);
        }

        this.create = function(product, onSuccess, onError){
            var  url = AppConfig.productURI.create;
            HttpService.callPostService(url, product, onSuccess, onError);
        }

        this.search = function(data, keyWord){
            var result = $filter("filter")(data, {'ten': keyWord});
            return result;
        };
    }
})();