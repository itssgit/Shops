/**
 * Created by anhvu on 14-Jun-17.
 */
(function () {
    'use strict'
    angular.module("app").service("ProductService", ProductService);
    ProductService.$inject = ["orderByFilter"];
    function ProductService(orderByFilter){
    }
})();
