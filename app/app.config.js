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
                MSG_NOT_OK: "NOT_OK",
                TYPE_IMPORT_STOCK: "PN",
                TYPE_ADJUST_STOCK: "DC",
                STATUS_TEMP: 2,
                STATUS_FINISH: 1,
                CODE_GEN: "AUTOCODE"
            },

            //Khai bao link webservice
            uri = "http://giaiphapshop.com:8088/shops-services/",
            // uri = "http://localhost:8080/shops-services/",

            user = {
                login: uri + "authorization/login",
                logout: uri + "authorization/logout"
            },
            optionSet = {
                values: uri + "optionSet/getValueByCode?optionSetCode="
            },
            inventoryUri = {
                list: uri + "inventory/find?",
                create: uri + "inventory/create",
                update: uri + "inventory/update",
                delete: uri + "inventory/delete",
            },
            stockTransUri = {
                createOrUpdate: uri + "stockTrans/createOrUpdate",
                listTrans: uri + "stockTrans/findByCondition?"
            }

        return {
            pageTransitionOpts: a,
            main: d,
            color: e,
            user: user,
            constant: constant,
            optionSet: optionSet,
            inventoryUri: inventoryUri,
            stockTransUri: stockTransUri
        }
    }
    angular.module("app").factory("AppConfig", [AppConfig])
})();
