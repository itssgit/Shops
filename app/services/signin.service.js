(function () {
    'use strict';
    angular.module('app').service('SigninService', SigninService);
    SigninService.$inject = ['HttpService'];
    function SigninService(HttpService) {

        this.login = function(data, onSuccess, onError) {
            var serviceUrl = "https://reqres.in/api/login";
            HttpService.callGetService(serviceUrl, onSuccess, onError);
        };
    }
})();
