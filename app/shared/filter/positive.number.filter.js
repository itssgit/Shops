/**
 * Created by vietdd on 10/08/2017.
 */
function positiveNumber() {
    return function(input){
        if (!input) {
            return 0;
        }
        return Math.abs(input);
    }
}

angular.module('app').filter('positive', [positiveNumber]);