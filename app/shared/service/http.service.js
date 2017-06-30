(function () {
    'use strict';
    angular.module('app')
        .service('HttpService', HttpService);

    HttpService.$inject = ['$http'];

    function HttpService($http) {
        var vm = this;

        vm.callGetService = function (url, onSuccess, onError) {
            $http(
                {
                    method: 'GET',
                    url: url,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Accept': '*'
                    }
                }
            ).then(function (response) {
                    onSuccess(response.data);
                })
                .catch(function (rejectResponse) {
                        onError(rejectResponse.data);
                });
        };

        vm.callPostService = function (url, data, onSuccess, onError) {
            $http(
                {
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Accept': '*'
                    },
                    data: data
                }
            ).then(function (response) {
                onSuccess(response.data);
            })
                .catch(function (rejectResponse) {
                    onError(rejectResponse.data);
                });
        };

        vm.callPutService = function (url, data, onSuccess, onError) {
            $http(
                {
                    method: 'PUT',
                    url: url,
                    data: data
                }
            ).then(function (response) {
                onSuccess(response.data);
            })
                .catch(function (rejectResponse) {
                    onError(rejectResponse.data);
                });
        };
        
        vm.callPostServiceWithSessionHeader = function (url, data, onSuccess, onError) {
            var sessionKey = '';
            $http(
                {
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Accept': '*',
                        'session-key': sessionKey
                    },
                    data: data
                }
            ).then(function (response) {
                    onSuccess(response.data);
                })
                .catch(function (rejectResponse) {
                    onError(rejectResponse.data);
                });
        };

        vm.callDownloadServiceWithSessionHeader = function(url, data, onSuccess, onError) {
            var sessionKey = '';
            $http(
                {
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Accept': '*',
                        'session-key': sessionKey
                    },
                    data: data,
                    responseType : 'arraybuffer'
                }
            ).then(function (response) {
                    onSuccess(response.data);
                })
                .catch(function (rejectResponse) {
                    onError(rejectResponse.data);
                });
        };

        vm.callGetServiceWithSessionHeader = function (url, data, onSuccess, onError) {
            var sessionKey = '';
            $http(
                {
                    method: 'GET',
                    url: url,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Accept': '*',
                        'session-key': sessionKey
                    },
                    data: data
                }
            ).then(function (response) {
                    onSuccess(response.data);
                })
                .catch(function (rejectResponse) {
                    onError(rejectResponse.data);
                });
        }
    }
})();
