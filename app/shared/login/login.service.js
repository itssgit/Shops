(function () {
    'use strict';
    angular.module('app').service('LoginService', LoginService);
    LoginService.$inject = ['HttpService', 'AppConfig'];
    function LoginService(HttpService, AppConfig) {

        this.login = function(data, onSuccess, onError) {
            var serviceUrl = AppConfig.user.login;
            HttpService.callPostService(serviceUrl, data, onSuccess, onError);
        };

        this.logout = function(onSuccess, onError) {
            var serviceUrl = AppConfig.user.logout;
            HttpService.callPostServiceWithSessionHeader(serviceUrl, onSuccess, onError);
        };
    }
})();
