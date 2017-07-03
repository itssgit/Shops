(function() {
    "use strict";

    function ProductDetailCtrl($scope, $routeParams,$location, ProductDetailService) {
        /*product info*/
        var id = $routeParams.id;
        if($location.$$path == "/products-edit"){
            var onGetInfoSuccess = function success(data){
                $scope.product = data.value;
                $scope.title = $scope.product.tenSanPham;
            }
            var onGetInfoError = function error(data){
                alert(data.message);
            }
            ProductDetailService.getProductById(id, onGetInfoSuccess, onGetInfoError);
        } else{
            $scope.title = 'CREATE_PRODUCT';
        }
        /*get category*/

        //////////////////////////////////
        $scope.lstMaterial = [];

        /*material detail*/
        $scope.lstProductMaterial=[];
        $scope.addMaterial = function(){
        };

        $scope.removeMaterial = function($index){
            $scope.lstMaterial.splice($index, 1);
        }


        /*save*/
        $scope.saveInfo = function(){
            var product = {
                "chiTietSanPhamDTOList": $scope.product.chiTietSanPhamDTOList,
                "donGia": $scope.product.donGia,
                "hienThi": $scope.product.hienThi,
                "hinhAnh": $scope.product.hinhAnh,
                "moTa": $scope.product.moTa,
                "nhomSanPhamId": $scope.product.nhomSanPhamId,
                "sanPhamId": $scope.product.sanPhamId,
                "tenSanPham": $scope.product.tenSanPham
            };
            var onSaveInfoSuccess = function success(data){
                alert("ok");
            }
            var onSaveInfoError = function error(data){
                alert("error");
            }
            ProductDetailService.saveInfo(product, onSaveInfoSuccess, onSaveInfoError);
        }

        $scope.revert = function () {
        }

    }
    angular.module("app").controller("ProductDetailCtrl", ["$scope", "$routeParams","$location", "ProductDetailService", ProductDetailCtrl])
})();