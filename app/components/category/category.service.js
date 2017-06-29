/**
 * Created by vietdd on 29/06/2017.
 */
(function () {
    angular.module("app").service("CategoryService", CategoryService);
    CategoryService.$inject["HttpService","AppConfig"];

    function CategoryService(){
        this.getListCategory = function (onSuccess, onError) {
            var url = "";
            HttpService.callGetService(url, onSuccess, onError);
        }
    }
})();