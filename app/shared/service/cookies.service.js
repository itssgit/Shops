(function () {
    'use strict';
    angular.module('app').service('Cookies', Cookies);

    Cookies.$inject = ['$cookies'];

    function Cookies($cookies){
        var vm = this;

        vm.set = function(key, value){
            $cookies.put(key, value);
        };
    }
})();
