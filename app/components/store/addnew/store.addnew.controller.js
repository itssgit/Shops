/**
 * Created by vietdd on 10/08/2017.
 */
(function () {
    angular.module("app").controller("StoreAddNewCtrl", ["$scope","$uibModal", "$uibModalStack", "$location", "StoreService", StoreAddNewCtrl]);
    function StoreAddNewCtrl($scope, $uibModal, $uibModalStack, $location, StoreService) {
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
        /*click save button*/
        $scope.save = function(){
            var modal = $uibModal.open({
                animation: 1,
                templateUrl: "modalConfirmCreate.html",
                controller: "ModalInstanceCtrl",
                size: 'sm'
            });
            modal.result.then(function() {
                var onCreateSuccess = function (data) {
                    $location.url('/store');
                    $scope.alerts[0] = {
                        type: "success",
                        msg: 'MSG_MATERIAL_CREATED',
                        show: true
                    };
                }

                StoreService.createMaterial($scope.material, onCreateSuccess, onError)
            })
        }

        /*click save & continue button*/
        $scope.saveAndContinue = function(){
            var modal = $uibModal.open({
                animation: 1,
                templateUrl: "modalConfirmCreate.html",
                controller: "ModalInstanceCtrl",
                size: 'sm'
            });
            modal.result.then(function() {
                var onCreateSuccess = function (data) {
                    $scope.materialInfo.$setUntouched();
                    $scope.material = {};
                    $scope.alerts[0] = {
                        type: "success",
                        msg: 'MSG_MATERIAL_CREATED',
                        show: true
                    };
                }

                StoreService.createMaterial($scope.material, onCreateSuccess, onError)
            })
        }


    }

})();
