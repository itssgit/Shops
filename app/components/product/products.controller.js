(function() {
    "use strict";

    function ProductsCtrl($scope, ProductService) {
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

        $scope.filteredTodos = [];

        $scope.search = function(){
            $scope.filteredTodos = ProductService.search($scope.stores, $scope.searchKeywords);
        }

        $scope.order = function(property){
            $scope.filteredTodos = ProductService.order($scope.stores, property);
        }


        var begin, end;
        $scope.$watch('currentPage + numPerPage', function() {
            begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.lstData = $scope.filteredTodos.slice(begin, end);
        });

        (function(){
            $scope.search();
        })();
    }
    angular.module("app").controller("ProductsCtrl", ["$scope", "$filter","ProductService", ProductsCtrl])
})();