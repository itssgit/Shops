(function() {
    "use strict";

    function a(a, b) {
        var c;
        a.stores = [{
            name: "Nijiya Market",
            price: "10"
        }, {
            name: "Eat On Monday Truck",
            price: "15"
        }, {
            name: "Tea Era",
            price: "50"
        }, {
            name: "Rogers Deli",
            price: "5"
        }, {
            name: "MoBowl",
            price: "32"
        }, {
            name: "The Milk Pail Market",
            price: "17"
        }],
        a.searchKeywords = "",
        a.filteredStores = [],
        a.row = "",
        a.select = function(b) {
            var c, d;
            return d = (b - 1) * a.numPerPage, c = d + a.numPerPage, a.currentPageStores = a.filteredStores.slice(d, c)
        },
        a.onFilterChange = function() {
            return a.select(1), a.currentPage = 1, a.row = ""
        },
        a.onNumPerPageChange = function() {
            return a.select(1), a.currentPage = 1
        },
        a.onOrderChange = function() {
            return a.select(1), a.currentPage = 1
        },
        a.search = function() {
            return a.filteredStores = b("filter")(a.stores, a.searchKeywords), a.onFilterChange()
        },
        a.order = function(c) {
            return a.row !== c ? (a.row = c, a.filteredStores = b("orderBy")(a.stores, c), a.onOrderChange()) : void 0
        },
        a.numPerPageOpt = [3, 5, 10, 20],
        a.numPerPage = a.numPerPageOpt[2],
        a.currentPage = 1,
        a.currentPageStores = [], (c = function() {
            return a.search(), a.select(a.currentPage)
        })()
    }
    angular.module("app.table").controller("ProductsCtrl", ["$scope", "$filter", a])
})();