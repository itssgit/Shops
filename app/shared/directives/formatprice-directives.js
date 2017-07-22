/**
 * Created by vietdd on 03/07/2017.
 */

function formatPrice($filter) {

    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;

            ctrl.$formatters.unshift(function (a) {
                return $filter(attrs.format)(ctrl.$modelValue, "VND ")
            });

            elem.bind('blur', function(event) {
                var plainNumber = elem.val().replace(/[^\d|\-+|\.+]/g, '');
                elem.val($filter(attrs.format)(plainNumber, "VND "));
            });
        }
    };
}

angular.module('app').directive('format', ['$filter',formatPrice]);

