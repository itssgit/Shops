/**
 * Created by vietdd on 16/06/2017.
 */
(function () {
    angular.module("app").controller("StoreCtrl", ["$scope", "$filter", "$http", StoreCtrl]);
    function StoreCtrl($scope, $filter, $http) {
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

        $scope.users = [
            {id: 1, name: 'awesome user1', status: 2, group: 4, groupName: 'admin'},
            {id: 2, name: 'awesome user2', status: undefined, group: 3, groupName: 'vip'},
            {id: 3, name: 'awesome user3', status: 2, group: null}
        ];

        $scope.statuses = [
            {value: 1, text: 'status1'},
            {value: 2, text: 'status2'},
            {value: 3, text: 'status3'}
        ];

        $scope.groups = [
            {value: 1, text: 'status1'},
            {value: 2, text: 'status2'},
            {value: 3, text: 'status3'}
            ];
    }
})();
