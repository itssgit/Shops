/**
 * Created by vietdd on 15/08/2017.
 */
(function(){
    'use strict';
    angular.module('app').controller('StoreImportCtrl', ['$scope', '$uibModal','StoreService', StoreImportCtrl]);
    function StoreImportCtrl($scope, $uibModal, StoreService){
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
            materialPrice: 0,
            vat: 0,
            discount: 0,
            totalAmount: 0
        }
        $scope.CurrentDate = new Date();
        $scope.selectedMaterial=[];
        $scope.onSelect = function(item){
            //remove from source list
            var index = $scope.stockTrans.indexOf(item);
            $scope.stockTrans.splice(index, 1);
            //reset input data
            $scope.searchKeyWord = "";
            // fill to table
            item.vat = 0;
            item.promotion = 0;
            item.totalPrice = item.unitPrice*item.quantity;
            $scope.selectedMaterial.push(item);

            /*calculate  total amount*/
            $scope.total.materialPrice += item.totalPrice;
            $scope.total.totalAmount += item.totalPrice;
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


            $scope.total.totalAmount -= item.unitPrice*item.quantity + item.vat - item.promotion;
            $scope.total.materialPrice -= item.unitPrice*item.quantity;
            $scope.total.vat -= item.vat;
            $scope.total.discount -= item.promotion;
        }

        /*calculate Total*/
        $scope.calculateTotal = function(value, type, index){
            if(!value){
                switch (type){
                    case 'unitPrice':
                        $scope.selectedMaterial[index].unitPrice = 0;
                        break;
                    case 'vat':
                        $scope.selectedMaterial[index].vat = 0;
                        break;
                    case 'promotion':
                        $scope.selectedMaterial[index].promotion = 0;
                        break;
                }
            }
            else{
                switch (type){
                    case 'unitPrice':
                        $scope.selectedMaterial[index].unitPrice = $scope.selectedMaterial[index].unitPrice.toString().replace(/[^\d]/g, '');
                        $scope.selectedMaterial[index].unitPrice = parseInt($scope.selectedMaterial[index].unitPrice, 10);break;
                    case 'vat':
                        $scope.selectedMaterial[index].vat = $scope.selectedMaterial[index].vat.toString().replace(/[^\d]/g, '');
                        $scope.selectedMaterial[index].vat = parseInt($scope.selectedMaterial[index].vat, 10);
                        break;
                    case 'promotion':
                        $scope.selectedMaterial[index].promotion = $scope.selectedMaterial[index].promotion.toString().replace(/[^\d]/g, '');
                        $scope.selectedMaterial[index].promotion = parseInt($scope.selectedMaterial[index].promotion, 10);
                        break;
                }
            }

            $scope.total.materialPrice = 0;
            $scope.total.discount = 0;
            $scope.total.vat = 0;
            for(var i=0; i < $scope.selectedMaterial.length; i++){
                $scope.selectedMaterial[i].totalPrice = $scope.selectedMaterial[i].unitPrice*$scope.selectedMaterial[i].quantity + $scope.selectedMaterial[i].vat - $scope.selectedMaterial[i].promotion;

                $scope.total.materialPrice += $scope.selectedMaterial[i].quantity*$scope.selectedMaterial[i].unitPrice;
                $scope.total.vat += $scope.selectedMaterial[i].vat;
                $scope.total.discount += $scope.selectedMaterial[i].promotion;
            }
            $scope.total.vat = parseInt($scope.total.vat, 10);
            $scope.total.discount = parseInt($scope.total.discount, 10);
            $scope.total.totalAmount = $scope.total.materialPrice + $scope.total.vat - $scope.total.discount;
        }

    }

})();