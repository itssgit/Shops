/**
 * Created by vietdd on 29/06/2017.
 */
(function() {
    "use strict";

    function CategoriesCtrl($scope, $filter, CategoryService) {
        $scope.lstCategories = [];
        var onGetListSuccess = function success(data){
            $scope.lstCategories = data.value.list;
            $scope.filtered = $scope.lstCategories;
        };

        var onGetListError = function error(data){
            alert(data.message);
        };

        CategoryService.getListCategory(onGetListSuccess, onGetListError);

        $scope.order = function(property){
            $scope.filtered = ProductService.order($scope.lstProduct, property);
        };

        $scope.delete = function(){
            var selectedProduct = $filter('filter')($scope.filtered, {selected: 'true'});
            var lstId = selectedProduct.map(function(a) {return a.sanPhamId;});
            var onDeleteSuccess = function success(data){
                angular.forEach(selectedProduct, function(value, key){
                    var index = $scope.filtered.indexOf(value);
                    $scope.filtered.splice(index, 1);
                });
            };
            var onDeleteError = function error(data){
                alert(data.message);
            };
            ProductService.delete(lstId, onDeleteSuccess, onDeleteError);
        };

        $scope.$watch('filtered', function() {
            $scope.lstData = $scope.filtered;
        });

        var begin, end;
        $scope.$watch('currentPage + numPerPage', function() {
            begin = (($scope.currentPage - 1) * $scope.numPerPage);
            end = begin + $scope.numPerPage;
            $scope.lstData = $scope.filtered.slice(begin, end);
        });
    }
    angular.module("app").controller("CategoriesCtrl", ["$scope", "$filter", "CategoryService", CategoriesCtrl])
})();