/**
 * Created by vietdd on 10/08/2017.
 */
(function () {
    angular.module("app").controller("StoreAddNewCtrl", ["$scope","$uibModal", "$uibModalStack", "StoreService", StoreAddNewCtrl]);
    function StoreAddNewCtrl($scope, $uibModal, $uibModalStack, StoreService) {
        var onError = function onError(data){
            var modal = $uibModal.open({
                animation: 1,
                templateUrl: "modalAlertError.html",
                controller: "ModalInstanceCtrl",
                size: 'sm'
            });
            modal.result.then(function() {
                $uibModalStack.dismissAll();
            })
        }
        $scope.material = {};
        $scope.save = function(){
            var modal = $uibModal.open({
                animation: 1,
                templateUrl: "modalConfirmCreate.html",
                controller: "ModalInstanceCtrl",
                size: 'sm'
            });
            modal.result.then(function() {
                var onCreateSuccess = function (data) {
                    // thong bao thanh cong, quay ve man hinh list
                    alert("ok");
                }

                StoreService.createMaterial($scope.material, onCreateSuccess, onError)
            })
        }


    }

})();
