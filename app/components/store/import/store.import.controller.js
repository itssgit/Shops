/**
 * Created by vietdd on 15/08/2017.
 */
(function(){
    'use strict';
    angular.module('app').controller('StoreImportCtrl', ['$scope', '$uibModal', StoreImportCtrl]);
    function StoreImportCtrl($scope, $uibModal){
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
        $scope.remove = function($index){
        }
    }

})();