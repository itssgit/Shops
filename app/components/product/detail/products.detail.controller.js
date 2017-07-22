(function() {
    "use strict";

    function ProductDetailCtrl($scope, $routeParams,$location, ProductDetailService, StoreService) {
        $scope.lstProductMaterial=[];
        $scope.lstMaterial = [];
        $scope.searchKeywords="";

        /*product info*/
        var id = $routeParams.id;
        if($location.$$path == "/products/edit"){
            var onGetInfoSuccess = function success(data){
                if(data.value.trangThaiXoa == 1){
                    $location.url('/404');
                }
                $scope.product = data.value;
                $scope.title = $scope.product.tenSanPham;
                $scope.lstProductMaterial = $scope.product.chiTietSanPhamDTOList;
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
        /*material detail*/
        $scope.addProductMaterial = function(material, $index){
            $scope.lstProductMaterial.push(
                {
                    sanPhamId: id,
                    nguyenLieuId: material.nguyenLieuId,
                    soLuong: 0,
                    chiTietSanPhamId: 0,
                    nguyenLieuDTO: {
                        ten: material.ten,
                        donVi: material.donVi,
                        nguyenLieuId: material.nguyenLieuId,
                        soLuong: material.soLuong
                    }
                });
            $scope.lstMaterial.splice($index, 1);
        };

        $scope.removeMaterial = function(material, $index){
            $scope.lstProductMaterial.splice($index, 1);
            $scope.lstMaterial.push(
                {
                    ten: material.nguyenLieuDTO.ten,
                    soLuong: 0
                });
        }
        var onGetListSuccess = function success(data){
            $scope.lstMaterial = data.value.list;
        }
        var onError = function error(data){
            alert(data.message);
        }
        StoreService.listMaterial(onGetListSuccess, onError);

        /*search materials*/
        $scope.search = function(){
            $scope.filtered = ProductDetailService.search($scope.lstMaterial, $scope.searchKeywords);
            console.log( $scope.filtered);
        }


        //////////////////////////////////
        /*create*/
        $scope.create = function(){
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

        ///////////////////////////////////
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
    angular.module("app").controller("ProductDetailCtrl", ["$scope", "$routeParams","$location", "ProductDetailService", "StoreService", ProductDetailCtrl])
})();