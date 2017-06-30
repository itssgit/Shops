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
        $scope.lstMaterial = [
            {
                material: "Chanh",
                quantity: 23
            },
            {
                material: "Xoài",
                quantity: 3,
            }
        ];
        //material detail
        $scope.addMaterial = function(){
        };

        $scope.removeMaterial = function($index){
            $scope.lstMaterial.splice($index, 1);
        }

        /*save*/
        $scope.saveInfo = function(product){
            product = {
                "chiTietSanPhamDTOList": [],
                "donGia": 0,
                "hienThi": true,
                "hinhAnh": "string",
                "moTa": "string",
                "nhomSanPhamId": 0,
                "sanPhamId": 20,
                "tenSanPham": "ádfghgfdsdfgf"
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
            $scope.Product = [];
        }

    }
    angular.module("app").controller("ProductDetailCtrl", ["$scope", "$routeParams","$location", "ProductDetailService", ProductDetailCtrl])
})();