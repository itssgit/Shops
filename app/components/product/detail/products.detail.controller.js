(function() {
    "use strict";

    function ProductDetailCtrl($scope, $routeParams,$location, ProductDetailService) {
        /*product info*/
        var id = $routeParams.id;
        if($location.$$path == "/products/edit"){
            var onGetInfoSuccess = function success(data){
                if(data.value.trangThaiXoa == 1){
                    $location.url('/404');
                }
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
        $scope.addNewMaterial = function(){
            $scope.lstProductMaterial.push({});
        };

        $scope.removeMaterial = function($index){
            $scope.lstProductMaterial.splice($index, 1);
        }

        /*create*/
        $scope.create = function(){
            console.log($scope.product);
            var product = {
                "chiTietSanPhamDTOList": [],
                "donGia": $scope.product.donGia,
                "hienThi": $scope.product.hienThi,
                "hinhAnh": $scope.product.hinhAnh,
                "moTa": $scope.product.moTa,
                "nhomSanPhamId": $scope.product.nhomSanPhamId,
                "tenSanPham": $scope.product.tenSanPham
            };

            var onCreateSuccess = function success(data){
                $scope.alerts.push({
                    type: "success",
                    msg: 'MSG_PRODUCT_UPDATED'
                });
                $location.url('/products');
            }
            var onCreateError = function error(data){
                $scope.alerts.push({
                    type: "danger",
                    msg: 'MSG_PRODUCT_UPDATE_ERR'
                });
                $location.url('/products');
            }
            ProductDetailService.create(product, onCreateSuccess, onCreateError);
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
                $scope.alerts.push({
                    type: "success",
                    msg: 'MSG_PRODUCT_UPDATED'
                });
                $location.url('/products');
            }
            var onSaveInfoError = function error(data){
                $scope.alerts.push({
                    type: "danger",
                    msg: 'MSG_PRODUCT_UPDATE_ERR'
                });
                $location.url('/products');
            }
            ProductDetailService.saveInfo(product, onSaveInfoSuccess, onSaveInfoError);
        }

        /*delete*/
        $scope.delete = function(){
            var onDeleteSuccess = function success(data){
                $scope.alerts.push({
                    type: "success",
                    msg: 'MSG_PRODUCT_DELETED'
                });
                $location.url('/products');
            }
            var onDeleteError = function error(data){
                $scope.alerts.push({
                    type: "danger",
                    msg: 'MSG_PRODUCT_DELETED_ERR'
                });
                $location.url('/products');
            }
            ProductDetailService.delete(id, onDeleteSuccess, onDeleteError);
        }
    }
    angular.module("app").controller("ProductDetailCtrl", ["$scope", "$routeParams","$location", "ProductDetailService", ProductDetailCtrl])
})();