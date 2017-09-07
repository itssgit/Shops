(function () {
    'use strict';
    // controller
    angular.module('app').controller('SigninCtrl', SigninCtrl);

    // dependencies
    SigninCtrl.$inject = ['LoginService','$scope','$location', '$localStorage', 'AppConfig'];

    function SigninCtrl(LoginService, $scope, $location, $localStorage, AppConfig) {
        if($localStorage.dataUser && $localStorage.dataUser.isLogined){
            $location.path('/store');
            return;
        }
        $scope.login = function() {

            var onLoginSuccess = function onLoginSuccess(data){
                if(data.resultCode == AppConfig.constant.MSG_NOT_OK){
                    //check type
                    $scope.alerts[0] = {
                        type: "danger",
                        msg: data.message,
                        show: true
                    };
                } else{
                    $localStorage.dataUser = {
                        "token" : data.value.access_token,
                        "tokenType" : data.value.token_type,
                        "isLogined": true,
                        "userName" : "Anhvv"
                    };
                    $location.path("/store");
                }
            };

            var onLoginError = function onLoginError (data) {
                alert("error" + data);
            };

            if($scope.loginForm.email.$invalid || $scope.loginForm.password.$invalid){
                $scope.loginForm.email.$error = {
                    "email": true
                };
                $scope.loginForm.email.$touched = true;
                return false;
            }
            var data = {
                "userName": $scope.email,
                "passWord": $scope.password
            };
            LoginService.login(data, onLoginSuccess, onLoginError);
        };

        $scope.logout = function () {
            var onSuccess = function (data) {
                if(data.resultCode == AppConfig.constant.MSG_NOT_OK){
                    //check type
                    $scope.alerts[0] = {
                        type: "danger",
                        msg: data.message,
                        show: true
                    };
                } else{
                    $localStorage.dataUser = {
                        "token" : "",
                        "tokenType" : "",
                        "isLogined": false
                    };
                    $location.path("/login");
                }
            };
            var onError = function (data) {
                alert("error");
                // $localStorage.dataUser = {};
            };
            LoginService.logout(onSuccess, onError);

        }

    }
})();