(function() {
    "use strict";

    function ProductsCtrl($scope, $filter, ProductService) {

        /*list product*/
        $scope.lstProduct=[];
        var onGetListSuccess = function success(data){
            $scope.lstProduct = data.value.list;
            $scope.filtered = $scope.lstProduct;
        }
        var onGetListError = function error(data){
            alert(data.message);
        }
        ProductService.listProduct(onGetListSuccess, onGetListError);

        /*delete product*/
        $scope.delete = function(){
            var selectedProduct = $filter('filter')($scope.filtered, {selected: 'true'});
            var lstId = selectedProduct.map(function(a) {return a.sanPhamId;});
            var onDeleteSuccess = function success(data){
                angular.forEach(selectedProduct, function(value, key){
                    var index = $scope.filtered.indexOf(value);
                    $scope.filtered.splice(index, 1);
                });
            }
            var onDeleteError = function error(data){
                alert(data.message);
            }
            ProductService.delete(lstId, onDeleteSuccess, onDeleteError);
        }

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
    angular.module("app").controller("ProductsCtrl", ["$scope", "$filter", "ProductService", ProductsCtrl])
})();