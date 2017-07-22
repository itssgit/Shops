/**
 * Created by vietdd on 22/07/2017.
 */
function sumTotalOrder() {
    return function(data, key) {
        debugger;
        if (angular.isUndefined(data) || angular.isUndefined(key))
            return 0;
        var sum = 0;

        angular.forEach(data, function (v, k) {
            sum = sum + parseInt(v[key]);
        });
        return sum;
    }
}

angular.module('app').filter('SumTotalOrder', [sumTotalOrder]);