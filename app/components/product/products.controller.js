(function() {
    "use strict";

    function ProductsCtrl($scope, ProductService) {

        /*list product*/
        $scope.lstProduct=[];
        var onSuccess = function success(data){
            $scope.lstProduct = data.value.list;
            $scope.filtered = $scope.lstProduct;
        }
        var onError = function error(data){
            alert(data.message);
        }
        ProductService.listProduct(onSuccess, onError);
        $scope.filtered = [];


        /*search*/
        $scope.search = function(){
            $scope.filtered = ProductService.search($scope.lstProduct, $scope.searchKeywords);
        }

        /*sort*/
        $scope.order = function(property){
            $scope.filtered = ProductService.order($scope.lstProduct, property);
        }

        /*pagination*/
        $scope.$watch('filtered', function() {
            $scope.lstData = $scope.filtered;
        });
        var begin, end;
        $scope.$watch('currentPage + numPerPage', function() {
            begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;
            $scope.lstData = $scope.filtered.slice(begin, end);
        });
    }
    angular.module("app").controller("ProductsCtrl", ["$scope","ProductService", ProductsCtrl])
})();