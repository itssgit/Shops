/**
 * Created by vietdd on 15/08/2017.
 */
(function(){
    'use strict';
    angular.module('app').controller('StoreAdjustCtrl', ['$scope', '$uibModal', 'AppConfig','StoreService', StoreAdjustCtrl]);
    function StoreAdjustCtrl($scope, $uibModal, AppConfig, StoreService){

        $scope.constant = AppConfig.constant;

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

        var onGetListSuccess = function onSuccess(data){
            $scope.data = data.value;
            $scope.stockTrans = $scope.data;
        }
        StoreService.getListMaterial("", onGetListSuccess, onError);

        /*select item on autocomplete, and then fill to show data */
        $scope.total = {
            storeAmount: 0,
            adjustAmount: 0,
            realAmount: 0
        }
        $scope.CurrentDate = new Date();
        $scope.selectedMaterial=[];
        $scope.prepareStockTransDetailDTOList = [];
        $scope.onSelect = function(item){
            //remove from source list
            var index = $scope.stockTrans.indexOf(item);
            $scope.stockTrans.splice(index, 1);
            //reset input data
            $scope.searchKeyWord = "";
            // fill to table
            item.adjust = 0;
            item.note="";
            item.realQuantity = item.quantity;
            item.totalPrice = item.unitPrice*item.adjust;
            $scope.selectedMaterial.push(item);

            /*calculate  total amount*/
            $scope.total.storeAmount += item.unitPrice*item.quantity;
            $scope.total.adjustAmount += item.unitPrice*item.adjust;
            $scope.total.realAmount += item.unitPrice*item.quantity + item.unitPrice*item.adjust;
            $scope.prepareStockTransDetailDTOList.push(item);
        }

        /*import - open popup*/
        $scope.chooseFile = function(){
            var modal = $uibModal.open({
                animation: 1,
                templateUrl: "modalChooseFile.html",
                controller: "ModalInstanceCtrl",
            });
            modal.result.then(function() {

            })
        }

        /*click x button*/
        $scope.remove = function($index, item){
            $scope.selectedMaterial.splice($index, 1);
            $scope.stockTrans.push(item);


            $scope.total.realAmount -= item.unitPrice*item.quantity + item.unitPrice*item.adjust;
            $scope.total.adjustAmount -= item.unitPrice*item.adjust;
            $scope.total.storeAmount -= item.unitPrice*item.quantity;
            $scope.prepareStockTransDetailDTOList.splice($index, 1);
        }

        /*calculate Total*/
        $scope.calculateTotal = function(value, type, index){
            if(type){
                if(!value){
                    $scope.selectedMaterial[index].unitPrice = 0;
                }
                else{
                    $scope.selectedMaterial[index].unitPrice = $scope.selectedMaterial[index].unitPrice.toString().replace(/[^\d]/g, '');
                    $scope.selectedMaterial[index].unitPrice = parseInt($scope.selectedMaterial[index].unitPrice, 10);
                }
            }

            $scope.total.realAmount = 0;
            $scope.total.adjustAmount = 0;
            $scope.total.storeAmount = 0;
            for(var i=0; i < $scope.selectedMaterial.length; i++){
                $scope.selectedMaterial[i].totalPrice = $scope.selectedMaterial[i].unitPrice*$scope.selectedMaterial[i].adjust;
                $scope.selectedMaterial[i].realQuantity = $scope.selectedMaterial[i].adjust + $scope.selectedMaterial[i].quantity;

                $scope.total.adjustAmount += $scope.selectedMaterial[i].unitPrice*$scope.selectedMaterial[i].adjust;
                $scope.total.storeAmount += $scope.selectedMaterial[i].unitPrice*$scope.selectedMaterial[i].quantity;
            }
            $scope.total.adjustAmount = parseInt($scope.total.adjustAmount, 10);
            $scope.total.storeAmount = parseInt($scope.total.storeAmount, 10);
            $scope.total.realAmount = $scope.total.adjustAmount + $scope.total.storeAmount;

            $scope.prepareStockTransDetailDTOList = $scope.selectedMaterial;

        }

        /*click save temp button*/
        var stockTransNo = "";
        var stockTransId = 0;
        $scope.save = function(status){
            var data = {
                staffCode: "admin",
                status: status,
                stockTransDetailDTOList: $scope.prepareStockTransDetailDTOList,
                stockTransNo: stockTransNo,
                stockTransId: stockTransId,
                totalPrice: $scope.total.totalAmount,
                totalPromotion: $scope.total.discount,
                totalVat: $scope.total.vat,
                typeTrans: AppConfig.constant.TYPE_ADJUST_STOCK
            }

            var onInsertSuccess = function onSuccess(result){
                stockTransNo = result.value.stockTransNo;
                stockTransId = result.value.stockTransId;
                $scope.prepareStockTransDetailDTOList = result.value.stockTransDetailDTOList;
                for(var i =0; i < $scope.prepareStockTransDetailDTOList.length; i++){
                    if($scope.prepareStockTransDetailDTOList[i].inventoryId == $scope.selectedMaterial[i].inventoryId){
                        $scope.selectedMaterial[i].stockTransDetailId = $scope.prepareStockTransDetailDTOList[i].stockTransDetailId
                    }
                }
                $scope.alerts[0] = {
                    type: "success",
                    msg: 'MSG_IMPORT_STORE_SUCCESS',
                    show: true
                };
            }
            StoreService.insertUpdateStockTrans(data, onInsertSuccess, onError);
        }

    }

})();