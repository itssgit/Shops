/**
 * Created by vietdd on 16/06/2017.
 */
(function () {
    angular.module("app").controller("StoreCtrl", ["$scope", StoreCtrl]);
    function StoreCtrl($scope) {
        $scope.lstMaterial = [
            {
                name: "Chanh",
                quantity: 23,
                unit: 'quả'
            },
            {
                name: "Xoài",
                quantity: 3,
                unit: 'quả'
            },
            {
                name: "Táo",
                quantity: 4,
                unit: 'quả'
            },
            {
                name: "Cam",
                quantity: 9,
                unit: 'quả'
            },
            {
                name: "Bim bim",
                quantity: 23,
                unit: 'gói'
            },
            {
                name: "lipton",
                quantity: 3,
                unit: 'cái'
            }
        ];
    }
})();
