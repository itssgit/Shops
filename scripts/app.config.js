(function() {
    "use strict";

    function a() {
        var a = [{
                name: "Fade up",
                "class": "animate-fade-up"
            }, {
                name: "Scale up",
                "class": "ainmate-scale-up"
            }, {
                name: "Slide in from right",
                "class": "ainmate-slide-in-right"
            }, {
                name: "Flip Y",
                "class": "animate-flip-y"
            }],
            b = new Date,
            c = b.getFullYear(),
            d = {
                brand: "ShopS",
                name: "Ducky",
                year: c,
                layout: "wide",
                menu: "vertical",
                isMenuCollapsed: !1,
                fixedHeader: !0,
                fixedSidebar: !0,
                pageTransition: a[0],
                skin: "12"
            },
            e = {
                primary: "#31C0BE",
                success: "#60CD9B",
                info: "#66B5D7",
                infoAlt: "#8170CA",
                warning: "#EEC95A",
                danger: "#E87352",
                gray: "#DCDCDC"
            };
        return {
            pageTransitionOpts: a,
            main: d,
            color: e
        }
    }
    angular.module("app").factory("appConfig", [a])
})();