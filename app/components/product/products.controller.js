(function() {
    "use strict";

    function ProductsCtrl($scope, $filter) {
        var c;
        $scope.stores = [{
            name: "Nijiya Market",
            price: 10
        }, {
            name: "Eat On Monday Truck",
            price: 15
        }, {
            name: "Tea Era",
            price: 50
        }, {
            name: "Rogers Deli",
            price: 5
        }, {
            name: "MoBowl",
            price: 32
        }, {
            name: "The Milk Pail Market",
            price: 17
        }];
        $scope.filteredStores = [];
        $scope.searchKeywords = "";
        $scope.row = "";
        $scope.select = function(b) {
            var c, d;
            return d = (b - 1) * $scope.numPerPage, c = d + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(d, c)
        };

        $scope.order = function(property){
            return $scope.filteredStores = $filter("orderBy")($scope.stores, property), $scope.onOrderChange();
        };

        $scope.search = function(){
            return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange();
        };
        $scope.onFilterChange = function() {
            return $scope.select(1), $scope.currentPage = 1
        };

        $scope.onOrderChange = function() {
            return $scope.select(1), $scope.currentPage = 1
        };
        $scope.onNumPerPageChange = function() {
            return $scope.select(1), $scope.currentPage = 1
        };
        $scope.numPerPageOpt = [3, 5, 10, 20];
        $scope.numPerPage = $scope.numPerPageOpt[2];
        $scope.currentPage = 1;
        $scope.currentPageStores = [], (c = function() {
            return $scope.search(), $scope.select($scope.currentPage)
        })();
    }
    angular.module("app").controller("ProductsCtrl", ["$scope", "$filter", ProductsCtrl])
})();