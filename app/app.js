! function() {
    "use strict";
    angular.module("app", ["ngRoute",
        "ngAnimate", "ngAria", "ui.bootstrap",
        "ui.tree", "ngMap", "ngTagsInput", "textAngular",
        "angular-loading-bar", "ui.calendar", "duScroll",
        "mgo-angular-wizard", "app.nav", "app.lang",
        "app.chart", "app.ui", "app.ui.form",
        "app.ui.form.validation", "app.page", "app.table",
        "app.task", "app.calendar","ngCookies",
        "vcRecaptcha", "ngMessages"])
}(),
    function() {
        "use strict";
        angular.module("app.calendar", ["ui.calendar", "ui.bootstrap"])
    }(),
    function() {
        "use strict";
        angular.module("app.task", [])
    }(),
    function() {
        "use strict";
        angular.module("app.chart", ["ngecharts"])
    }(),
    function() {
        "use strict";
        angular.module("app.ui.form", [])
    }(),
    function() {
        "use strict";
        angular.module("app.ui.form.validation", ["validation.match"])
    }(),
    function() {
        "use strict";
        angular.module("app.nav", [])
    }(),
    function() {
        "use strict";
        angular.module("app.page", [])
    }(),
    function() {
        "use strict";
        angular.module("app.table", [])
    }(),
    function() {
        "use strict";
        angular.module("app.ui", [])
    }(),

    function() {
        "use strict";
        function a(a) {
            function b(b, c, d) {
                var e;
                e = $("#app"), c.on("click", function(b) {
                    return e.hasClass("nav-collapsed-min") ? e.removeClass("nav-collapsed-min") : (e.addClass("nav-collapsed-min"), a.$broadcast("nav:reset")), b.preventDefault()
                })
            }
            var c = {
                restrict: "A",
                link: b
            };
            return c
        }

        function b() {
            function a(a, b, c) {
                var d, e, f, g, h, i, j, k, l, m, n;
                m = 250, j = $(window), g = b.find("ul").parent("li"), g.append('<i class="fa fa-caret-down icon-has-ul-h"></i><i class="fa fa-caret-right icon-has-ul"></i>'), d = g.children("a"), h = b.children("li").not(g), e = h.children("a"), f = $("#app"), i = $("#nav-container"), d.on("click", function(a) {
                    var b, c;
                    return f.hasClass("nav-collapsed-min") || i.hasClass("nav-horizontal") && j.width() >= 768 ? !1 : (c = $(this), b = c.parent("li"), g.not(b).removeClass("open").find("ul").slideUp(m), b.toggleClass("open").find("ul").stop().slideToggle(m), void a.preventDefault())
                }), e.on("click", function(a) {
                    g.removeClass("open").find("ul").slideUp(m)
                }), a.$on("nav:reset", function(a) {
                    g.removeClass("open").find("ul").slideUp(m)
                }), k = void 0, l = j.width(), n = function() {
                    var a;
                    a = j.width(), 768 > a && f.removeClass("nav-collapsed-min"), 768 > l && a >= 768 && i.hasClass("nav-horizontal") && g.removeClass("open").find("ul").slideUp(m), l = a
                }, j.resize(function() {
                    var a;
                    clearTimeout(a), a = setTimeout(n, 300)
                })
            }
            var b = {
                restrict: "A",
                link: a
            };
            return b
        }

        function c() {
            function a(a, b, c, d) {
                var e, f, g;
                f = b.find("a"), g = function() {
                    return d.path()
                }, e = function(a, b) {
                    return b = "#" + b, angular.forEach(a, function(a) {
                        var c, d, e;
                        return d = angular.element(a), c = d.parent("li"), e = d.attr("href"), c.hasClass("active") && c.removeClass("active"), 0 === b.indexOf(e) ? c.addClass("active") : void 0
                    })
                }, e(f, d.path()), a.$watch(g, function(a, b) {
                    return a !== b ? e(f, d.path()) : void 0
                })
            }
            var b = {
                restrict: "A",
                controller: ["$scope", "$element", "$attrs", "$location", a]
            };
            return b
        }

        function d() {
            function a(a, b, c) {
                b.on("click", function() {
                    return $("#app").toggleClass("on-canvas")
                })
            }
            var b = {
                restrict: "A",
                link: a
            };
            return b
        }
        angular.module("app.nav").directive("toggleNavCollapsedMin", ["$rootScope", a]).directive("collapseNav", b).directive("highlightActive", c).directive("toggleOffCanvas", d)
    }(),

    //keep this code
    // controller
    function() {
        "use strict";

        function AppCtrl($scope, b, $route, d, AppConfig, CommonService) {
            $scope.pageTransitionOpts = AppConfig.pageTransitionOpts,
            $scope.main = AppConfig.main,
            $scope.color = AppConfig.color,
            $scope.$watch("main", function(c, d) {
                "horizontal" === c.menu && "vertical" === d.menu && b.$broadcast("nav:reset"),
                c.fixedHeader === !1 && c.fixedSidebar === !0 && (d.fixedHeader === !1 && d.fixedSidebar === !1 && ($scope.main.fixedHeader = !0,
                    $scope.main.fixedSidebar = !0),
                d.fixedHeader === !0 && d.fixedSidebar === !0 && ($scope.main.fixedHeader = !1,
                    $scope.main.fixedSidebar = !1)), c.fixedSidebar === !0 && ($scope.main.fixedHeader = !0),
                c.fixedHeader === !1 && ($scope.main.fixedSidebar = !1)
            }, !0), b.$on("$routeChangeSuccess", function(a, b, c) {
                d.scrollTo(0, 0);
            });

            /*Check all & select row*/
            // $scope.isCheck=false;
            // $scope.selectAll = function(data){
            //     if ($scope.isCheck) {
            //         $scope.isCheck = false;
            //     } else {
            //         $scope.isCheck = true;
            //     }
            //     angular.forEach(data, function (dt) {
            //         dt.selected = $scope.isCheck;
            //     });
            // }
            // $scope.selectedRow = function(row){
            //     if(row.selected == false){
            //         $scope.isCheck=false;
            //     }
            // }

            /*material types*/
            var onError = function onError(){
                $uibModal.open({
                    animation: 1,
                    templateUrl: "modalAlertError.html",
                    controller: "ModalInstanceCtrl",
                    size: 'sm'
                });
            }
            var onGetTypeProductSuccess = function onSuccess(data){
                $scope.searchTypeProduct = data.value.optionSetValueDTOList;
            }
            CommonService.getValuesByCode('TYPE_PRODUCT', onGetTypeProductSuccess, onError);

            /* get type stock trans*/
            var onGetTypeStockTransSuccess = function onSuccess(data){
                $scope.searchTypeStockTrans = data.value.optionSetValueDTOList;
            }
            CommonService.getValuesByCode('TYPE_TRANS', onGetTypeStockTransSuccess, onError);

            /*Pagination*/
            $scope.numPerPageOpt = [10, 20, 50, 100];
            $scope.numPerPage = $scope.numPerPageOpt[0];
            $scope.currentPage = 1;

            /*alert*/
            $scope.alerts = [];
            $scope.closeAlert = function() {
                return $scope.alerts.splice(0)
            };
            d.on('click', function(){
                //remove alert
                return $scope.alerts.splice(0)
            })
        }
        angular.module("app").controller("AppCtrl", ["$scope", "$rootScope", "$route", "$document", "AppConfig", "CommonService", AppCtrl])
    }(),
    function(){
        "use strict";
        function ModalInstanceCtrl($scope, $uibModalInstance) {
            $scope.ok = function() {
                $uibModalInstance.close()
            }, $scope.cancel = function() {
                $uibModalInstance.dismiss("cancel")
            }
        }
        angular.module('app').controller("ModalInstanceCtrl", ["$scope", "$uibModalInstance", ModalInstanceCtrl]);
    }(),
    function(){
        "use strict";
        function DatepickerCtrl($scope) {
            $scope.today = function() {
                $scope.startDate = new Date
                $scope.endDate = new Date
            },
            $scope.today(),
            $scope.open1 = function() {
                $scope.popup1.opened = !0
            },
            $scope.open2 = function() {
                $scope.popup2.opened = !0
            },
            $scope.dateOptions = {
                formatYear: "yy",
                startingDay: 1
            },
            $scope.format = "dd/MM/yyyy",
            $scope.altInputFormats = ["M!/d!/yyyy"],
            $scope.popup1 = {
                opened: !1
            }, $scope.popup2 = {
                opened: !1
            };
        }
        angular.module('app').controller("DatepickerCtrl", ["$scope", DatepickerCtrl]);
    }(),
    // custom page
    function() {
        "use strict";

        function a() {
            function a(a, b, c) {
                var d, e;
                e = function() {
                    return c.path()
                }, d = function(a) {
                    switch (b.removeClass("body-wide body-err body-lock body-auth"), a) {
                        case "/404":
                        case "/page/404":
                        case "/page/500":
                            return b.addClass("body-wide body-err");
                        case "/login":
                        case "/sign-up":
                        case "/forgot-password":
                            return b.addClass("body-wide body-auth");
                        case "/page/lock-screen":
                            return b.addClass("body-wide body-lock");
                    }
                }, d(c.path()), a.$watch(e, function(a, b) {
                    return a !== b ? d(c.path()) : void 0
                })
            }
            var b = {
                restrict: "A",
                controller: ["$scope", "$element", "$location", a]
            };
            return b
        }
        angular.module("app.page").directive("customPage", a)
    }(),

    //Khai bao menu
    function() {
        "use strict";
        angular.module("app").config(["$routeProvider", function(a) {
            a.when("/", {
                redirectTo: "/dashboard"
            }).when("/dashboard", {
                templateUrl: "app/components/dashboard/dashboard.view.html"
            }).when("/login", {
                templateUrl: "app/shared/login/login.view.html"
            }).when("/signup", {
                templateUrl: "app/shared/sign-up/sign-up.view.html"
            }).when("/forgot-password", {
                templateUrl: "app/shared/forgot-password/forgot-password.view.html"
            }).when("/store", {
                // templateUrl: "app/components/store/store.info.modal.html"
                templateUrl: "app/components/store/store.list.view.html"
            }).when("/store/addnew", {
                templateUrl: "app/components/store/addnew/store.addnew.view.html"
            }).when("/store/adjust", {
                templateUrl: "app/components/store/adjust/store.adjust.view.html"
            }).when("/store/import", {
                templateUrl: "app/components/store/import/store.import.view.html"
            }).when("/store/search", {
                templateUrl: "app/components/store/search/store.search.view.html"
            }).when("/404", {
                templateUrl: "app/shared/page/404.html"
            }).otherwise({
                redirectTo: "/404"
            })
        }])
    }();