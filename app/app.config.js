/**
 * Created by anhvu on 14-Jun-17.
 */
(function() {
    "use strict";

    function AppConfig() {
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
                name: "Vương Anh Vũ",
                year: c,
                layout: "wide",
                menu: "vertical",
                isMenuCollapsed: !1,
                fixedHeader: !0,
                fixedSidebar: !0,
                pageTransition: a[0],
                skin: "21"
            },
            e = {
                primary: "#31C0BE",
                success: "#60CD9B",
                info: "#66B5D7",
                infoAlt: "#8170CA",
                warning: "#EEC95A",
                danger: "#E87352",
                gray: "#DCDCDC"
            },
            constant = {
                MSG_NOT_OK: "NOT_OK"
            },

            //Khai bao link webservice
            uri = "http://giaiphapshop.com:8088/shops-services/",
            optionSet = {
                values: uri + "optionSet/getValueByCode?optionSetCode="
            },
            inventoryUri = {
                list: uri + "inventory/find?",
                create: uri + "inventory/create",
                update: uri + "inventory/update",
                delete: uri + "inventory/delete"
            },
            stockTransUri = {
                list: uri + ""
            }

        return {
            pageTransitionOpts: a,
            main: d,
            color: e,
            constant: constant,
            optionSet: optionSet,
            inventoryUri: inventoryUri
        }
    }
    angular.module("app").factory("AppConfig", [AppConfig])
})();
