/**
 * Created by vietdd on 17/08/2017.
 */
(function () {
    'use strict';
    angular.module('app').service('CommonService', CommonService);
    CommonService.$inject = ['HttpService', 'AppConfig'];

    function CommonService(HttpService, AppConfig) {
        this.getValuesByCode = function(code, onSuccess, onError){
            var url = AppConfig.optionSet.values + code;
            HttpService.callGetService(url, onSuccess, onError);
        }
    }
})();