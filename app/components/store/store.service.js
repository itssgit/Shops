/**
 * Created by vietdd on 16/06/2017.
 */
(function () {
    'use strict'
    angular.module("app").service("StoreService", StoreService);
    StoreService.$inject = ["$filter", "HttpService","AppConfig"];
    function StoreService($filter, HttpService, AppConfig){
        this.listMaterial = function(onSuccess, onError){
            var url = AppConfig.materialURI.list;
            HttpService.callGetService(url, onSuccess, onError);
        }

        this.update = function(material, onSuccess, onError){
            var url = AppConfig.materialURI.update;
            HttpService.callPostService(url, material, onSuccess, onError);
        }

        this.createList = function(lstMaterial, onSuccess, onError){
            var url = AppConfig.materialURI.createList;
            HttpService.callPostService(url, lstMaterial, onSuccess, onError);
        }

        this.deleteList = function(lstId, onSuccess, onError){
            var url = AppConfig.materialURI.deleteList;
            HttpService.callPostService(url, lstId, onSuccess, onError);
        }

        this.order = function(data, property){
            var result = $filter("orderBy")(data, property);
            return result;
        };
    }
})();