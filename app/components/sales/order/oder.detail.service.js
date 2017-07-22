/**
 * Created by vietdd on 22/07/2017.
 */
function OrderDetailService(HttpService, AppConfig){

    /*get info*/
    this.getInfo = function(id, onSuccess, onError){
        var url = AppConfig.orderURI.order + id;
        HttpService.callGetService(url, onSuccess, onError);
    }

}
angular.module("app").service("OrderDetailService", ["HttpService", "AppConfig", OrderDetailService]);
