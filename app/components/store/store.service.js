/**
 * Created by vietdd on 16/06/2017.
 */
(function () {
    'use strict'
    angular.module("app").service("StoreService", StoreService);
    StoreService.$inject = ["HttpService","AppConfig"];
    function StoreService(HttpService, AppConfig){
        this.listMaterial = function(onSuccess, onError){
            var url = AppConfig.materialURI.list;
            HttpService.callGetService(url, onSuccess, onError);
        }
    }
})();