/**
 * Created by vietdd on 28/06/2017.
 */
(function(){
    'use strict'
    angular.module("app").service("ProductDetailService", ProductDetailService);
    ProductDetailService.$inject = ["HttpService","AppConfig"];
    function ProductDetailService(HttpService, AppConfig){

        this.getProductById = function(id, onSuccess, onError){
            var url = AppConfig.productURI.product + id;
            HttpService.callGetService(url, onSuccess, onError);
        }

        this.saveInfo = function(product, onSuccess, onError){
            var url = AppConfig.productURI.update;
            HttpService.callPutService(url, product, onSuccess, onError);
        }
    }
})();