(function () {
    'use strict';
    angular.module('app').service('LoginService', LoginService);
    LoginService.$inject = ['HttpService', 'AppConfig'];
    function LoginService(HttpService, AppConfig) {

        this.login = function(data, onSuccess, onError) {
            var serviceUrl = "";
            HttpService.callGetService(serviceUrl, onSuccess, onError);
        };
    }
})();
