(function () {
    'use strict';
    // controller
    angular.module('app').controller('SigninCtrl', SigninCtrl);

    // dependencies
    SigninCtrl.$inject = ['LoginService','$scope','$location'];

    function SigninCtrl(LoginService, $scope, $location) {

        //captcha gg
        // $scope.model = {
        //     key: '6LfjNyAUAAAAAEbHfAHZsBS8rjR2S5m_syM_v0DF'
        // };
        
        var onLoginSuccess = function onLoginSuccess(data){
            $location.path("/dashboard");
        };
        var onLoginError = function onLoginError (data) {
            alert("error" + data);    
        };
        $scope.login = function() {
            if($scope.loginForm.email.$invalid || $scope.loginForm.password.$invalid){
                $scope.loginForm.email.$error = {
                    "email": true
                };
                $scope.loginForm.email.$touched = true;
                return false;
            }
            var data = {
                "email": "vietdaoduy@gmail.com",
                "fullName": "Dao Duy Viet",
                "id": 1,
                "passWord": "string",
                "phoneNumber": "string",
                "roleId": 1,
                "userName": "string"
            };
            LoginService.login(data, onLoginSuccess, onLoginError);
        };
    }
})();