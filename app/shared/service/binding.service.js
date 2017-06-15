(function () {
    'use strict';
    angular.module('app').service('BindingService', binding);

    function binding() {
        var data = {};
        function set(data) {
            this.data = data;
        }
        function get() {
            return this.data;
        }

        return {
            set: set,
            get: get
        }
    }
})();
