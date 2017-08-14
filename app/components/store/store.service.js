/**
 * Created by vietdd on 16/06/2017.
 */
(function () {
    'use strict'
    angular.module("app").service("StoreService", StoreService);
    StoreService.$inject = ["$filter", "HttpService","AppConfig"];
    function StoreService($filter, HttpService, AppConfig){
        //do something here
        this.getListMaterial = function(param, onSuccess, onError){
            var url = AppConfig.inventoryUri.list + param;
            HttpService.callGetService(url, onSuccess, onError);
        }

        this.createMaterial = function(data, onSuccess, onError){
            var url = AppConfig.inventoryUri.create;
            HttpService.callPostService(url, data, onSuccess, onError);
        }

        this.updateInfo = function(data, onSuccess, onError){
            var url = AppConfig.inventoryUri.update;
            HttpService.callPostService(url, data, onSuccess, onError);
        }

        this.deleteMaterial = function(id, onSuccess, onError){
            var url = AppConfig.inventoryUri.delete;
            HttpService.callPostService(url, id, onSuccess, onError);
        }
    }
})();