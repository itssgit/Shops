/**
 * Created by vietdd on 16/06/2017.
 */
(function () {
    'use strict';

    angular.module("app").controller("StoreCtrl", ["$scope","$uibModal", "$uibModalStack", "$filter", "AppConfig", "CommonService", "StoreService", StoreCtrl]);
    function StoreCtrl($scope, $uibModal, $uibModalStack, $filter, AppConfig, CommonService, StoreService) {
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
        $scope.data = [];
        var onGetListSuccess = function onSuccess(data){
            $scope.data = data.value;
            $scope.listMaterial = $scope.data;
        }
        StoreService.getListMaterial("", onGetListSuccess, onError);
        /*--------------------*/

        /*get type*/
        var onGetTypeSuccess = function onSuccess(data){
            $scope.searchType = data.value.optionSetValueDTOList;
        }
        CommonService.getValuesByCode('TYPE_PRODUCT', onGetTypeSuccess, onError);

        /*select checkbox*/
        var index;
        $scope.open = function(selected, $index) {
            index = $index;
            $scope.selectedMaterial = {
                "inventoryCode": $scope.listMaterial[$index].inventoryCode,
                "quantity": $scope.listMaterial[$index].quantity,
                "quotaNo": $scope.listMaterial[$index].quotaNo,
                "unitPrice": $scope.listMaterial[$index].unitPrice,
                "unit": $scope.listMaterial[$index].unit,
                "inventoryType": $scope.listMaterial[$index].inventoryType,
                "inventoryName": $scope.listMaterial[$index].inventoryName,
                "inventoryId": $scope.listMaterial[$index].inventoryId,
                "status": $scope.listMaterial[$index].status,
                "inventoryDesc": $scope.listMaterial[$index].inventoryDesc
            };
            if(selected){
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
        $scope.update = function(){
            var modal = $uibModal.open({
                animation: 1,
                templateUrl: "modalConfirmUpdate.html",
                controller: "ModalInstanceCtrl",
                size: 'sm'
            });
            modal.result.then(function() {
                $scope.selectedMaterial.unitPrice = $scope.selectedMaterial.unitPrice.toString().replace(/[^\d]/g, '');
                //update info
                var onUpdateInfoSuccess = function onSuccess(data){
                    $scope.alerts[0] = {
                        type: "success",
                        msg: 'MSG_MATERIAL_UPDATED',
                        show: true
                    };
                    $uibModalStack.dismissAll();
                    $scope.listMaterial[index] = $scope.selectedMaterial;
                }
                StoreService.updateInfo($scope.selectedMaterial, onUpdateInfoSuccess, onError);
            })
        }
        /*--------------------*/

        /*click delete on popup*/
        $scope.delete = function(){
            var modal = $uibModal.open({
                animation: 1,
                templateUrl: "modalConfirmDelete.html",
                controller: "ModalInstanceCtrl",
                size: 'sm'
            });
            modal.result.then(function() {
                var onDeleteSuccess = function onSuccess(data){
                    if(data.resultCode == AppConfig.constant.MSG_NOT_OK){
                        //check type
                        $scope.alerts[0] = {
                            type: "danger",
                            msg: 'MSG_MATERIAL_DELETED_ERROR',
                            show: true
                        };
                    } else{
                        $scope.alerts[0] = {
                            type: "success",
                            msg: 'MSG_MATERIAL_DELETED',
                            show: true
                        };
                    }
                    $scope.listMaterial.splice(index, 1);
                    $uibModalStack.dismissAll();
                }
                StoreService.deleteMaterial($scope.selectedMaterial.inventoryId, onDeleteSuccess, onError);
            })
        }
        /*--------------------*/

        /*click search*/
        $scope.searchCode = "";
        $scope.searchName = "";
        $scope.type = "";
        $scope.searchStatus = "";
        $scope.search = function(){
            var param="";
            if($scope.searchCode){
                param += "inventoryCode=" + $scope.searchCode;
            }
            if($scope.searchName)
            {
                param += "&inventoryName=" + $scope.searchName;
            }
            if($scope.searchType){
                param += "&inventoryType=" + $scope.type;
            }
            if($scope.searchStatus){
                param += "&inventoryStatus=" + $scope.searchStatus;
            }
            StoreService.getListMaterial(param, onGetListSuccess, onError);
        }
        /*--------------------*/

        /*click sort*/
        $scope.sort = function(property){
            $scope.data = $filter("orderBy")($scope.data, property);
            $scope.listMaterial = $scope.data.slice(begin, end);
        }
        /*--------------------*/

        $scope.export = function(){
            var blob = new Blob([document.getElementById('dataTable').innerHTML], {
                type: "text/plain;charset=utf-8"
            });
            saveAs(blob, "Report.xls");
        }

        /*pagination*/
        var begin, end;
        $scope.$watch('currentPage + numPerPage + data', function() {
            begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;
            $scope.listMaterial = $scope.data.slice(begin, end);
        });
        /*--------------------*/
    }

})();
