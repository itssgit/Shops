/**
 * Created by vietdd on 22/07/2017.
 */
function OrderDetailCtrl($scope, $routeParams,$window, OrderDetailService){
    var id = $routeParams.id;
    var onError = function error(data){
        alert(data.message);
    };
    var onGetInfoSuccess = function success(data){
        $scope.order = data.value;
    };
    OrderDetailService.getInfo(id, onGetInfoSuccess, onError);


    /*remove Product*/
    $scope.removeProduct = function($index){
        $scope.order.chiTietDonHangDTOList.splice($index, 1);
    }
    $scope.addProduct = function(){
        $window.open("#sales/order/detail/edit/addproduct", "popup", "width=500,height=600,scrollbars=1");
    }

}
angular.module("app").controller("OrderDetailCtrl", ["$scope", "$routeParams","$window", "OrderDetailService", OrderDetailCtrl])
