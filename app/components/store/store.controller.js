/**
 * Created by vietdd on 16/06/2017.
 */
(function () {
    angular.module("app").controller("StoreCtrl", ["$scope","$uibModal", "$uibModalStack", "StoreService", StoreCtrl]);
    function StoreCtrl($scope, $uibModal, $uibModalStack, StoreService) {
        /*---get list material---*/
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
        $scope.listMaterial = [];
        var onGetListSuccess = function onSuccess(data){
            $scope.data = data.value;
            $scope.listMaterial = $scope.data;
        }
        StoreService.getListMaterial(onGetListSuccess, onError);
        /*--------------------*/

        /*select checkbox*/
        $scope.open = function() {
            if($scope.selected){
                $uibModal.open({
                    animation: 1,
                    templateUrl: "modalInfoMaterial.html",
                    controller: "ModalInstanceCtrl",
                    size: 'lg',
                    scope: $scope,
                });
            }
        };
        /*--------------------*/

        /*click update on popup*/
        $scope.update = function(id){
            var modal = $uibModal.open({
                animation: 1,
                templateUrl: "modalConfirmUpdate.html",
                controller: "ModalInstanceCtrl",
                size: 'sm'
            });
            modal.result.then(function() {
                $uibModalStack.dismissAll();
            })
        }
        /*--------------------*/

        /*click delete on popup*/
        $scope.delete = function(id){
            var modal = $uibModal.open({
                animation: 1,
                templateUrl: "modalConfirmDelete.html",
                controller: "ModalInstanceCtrl",
                size: 'sm'
            });
            modal.result.then(function() {
                $uibModalStack.dismissAll();
            })
        }
        /*--------------------*/

        $scope.download = function(){
            var blob = new Blob([document.getElementById('dataTable').innerHTML], {
                type: "text/plain;charset=utf-8"
            });
            saveAs(blob, "Report.xls");
        }

        /*pagination*/
        var begin, end;
        $scope.$watch('currentPage + numPerPage', function() {
            begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;
            $scope.listMaterial = $scope.data.slice(begin, end);
        });
        /*--------------------*/
    }

})();
