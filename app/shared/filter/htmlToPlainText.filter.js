/**
 * Created by vietdd on 12/08/2017.
 */

(function(){
    function htmlToPlaintext() {
        return function(text) {
            return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
        };
    }
    angular.module('app').filter('htmlToPlaintext', [htmlToPlaintext]);
})(),

(function(){
    function materialStatus() {
        return function(input) {
            var text = "";
            switch (input){
                case 0:
                    text = 'LABEL_STATUS_DELETED';
                    break;
                case 1:
                    text = 'LABEL_STATUS_IN_STOCK';
                    break;
                case 2:
                    text = 'LABEL_STATUS_OUT_OF_STOCK';
                    break;
            }
            return  text;
        };
    }
    angular.module('app').filter('materialStatus', [materialStatus]);
})();
