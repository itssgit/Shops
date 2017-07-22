/**
 * Created by vietdd on 22/07/2017.
 */
function OrderDetailCtrl($scope, $routeParams, OrderDetailService){
    var id = $routeParams.id;
    var onError = function error(data){
        alert(data.message);
    };
    var onGetInfoSuccess = function success(data){
        $scope.order = data.value;
    };
    OrderDetailService.getInfo(id, onGetInfoSuccess, onError);

}
angular.module("app").controller("OrderDetailCtrl", ["$scope", "$routeParams", "OrderDetailService", OrderDetailCtrl])
