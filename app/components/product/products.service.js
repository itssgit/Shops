/**
 * Created by anhvu on 14-Jun-17.
 */
(function () {
    'use strict'
    angular.module("app").service("ProductService", ProductService);
    ProductService.$inject = ["$filter"];
    function ProductService($filter){

        this.search = function(data, keyWord){
            var result = $filter("filter")(data, keyWord);
            return result;
        };

        this.order = function(data, property){
            var result = $filter("orderBy")(data, property);
            return result;
        };
    }
})();
