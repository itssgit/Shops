/**
 * Created by vietdd on 16/06/2017.
 */
(function () {
    angular.module("app").controller("StoreCtrl", ["$scope","$filter", "StoreService", StoreCtrl]);
    function StoreCtrl($scope, $filter, StoreService) {

        /*get list materials*/
        var onGetListSuccess = function success(data){
            $scope.lstMaterial = data.value.list;
            $scope.filtered = $scope.lstMaterial;
        }
        var onError = function error(data){
            alert(data.message);
        }
        StoreService.listMaterial(onGetListSuccess, onError);
        $scope.filtered = [];


        /*update*/
        $scope.update = function (data, id) {
            angular.extend(data, {nguyenLieuId: id});
            console.log(data);
            var onUpdateSuccess = function success(data){
                $scope.alerts.push({
                    type: "success",
                    msg: 'MSG_MATERIAL_UPDATED'
                });
            };
            StoreService.update(data, onUpdateSuccess, onError);
        }

        /*delete*/
        $scope.delete = function(){
            var selectedMaterial = $filter('filter')($scope.filtered, {selected: 'true'});
            var lstId = selectedMaterial.map(function(a) {return a.nguyenLieuId;});
            var onDeleteSuccess = function success(data){
                angular.forEach(selectedMaterial, function(value, key){
                    var index = $scope.filtered.indexOf(value);
                    $scope.filtered.splice(index, 1);
                });

                $scope.alerts.push({
                    type: "success",
                    msg: 'MSG_MATERIAL_DELETED'
                });
            }

            StoreService.deleteList(lstId, onDeleteSuccess, onError);
        }

        /*sort*/
        $scope.order = function(property){
            $scope.filtered = StoreService.order($scope.lstMaterial, property);
        }


        /*pagination*/
        $scope.$watch('filtered', function() {
            $scope.lstData = $scope.filtered;
        });
        var begin, end;
        $scope.$watch('currentPage + numPerPage', function() {
            begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;
            $scope.lstData = $scope.filtered.slice(begin, end);
        });
    }
})();
