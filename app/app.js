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
        "vcRecaptcha", "ngMessages", "xeditable"])
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

        function AppCtrl($scope, b, c, d, e) {
            $scope.pageTransitionOpts = e.pageTransitionOpts,
            $scope.main = e.main,
            $scope.color = e.color,
            $scope.$watch("main", function(c, d) {
                "horizontal" === c.menu && "vertical" === d.menu && b.$broadcast("nav:reset"),
                c.fixedHeader === !1 && c.fixedSidebar === !0 && (d.fixedHeader === !1 && d.fixedSidebar === !1 && ($scope.main.fixedHeader = !0,
                    $scope.main.fixedSidebar = !0),
                d.fixedHeader === !0 && d.fixedSidebar === !0 && ($scope.main.fixedHeader = !1,
                    $scope.main.fixedSidebar = !1)), c.fixedSidebar === !0 && ($scope.main.fixedHeader = !0),
                c.fixedHeader === !1 && ($scope.main.fixedSidebar = !1)
            }, !0), b.$on("$routeChangeSuccess", function(a, b, c) {
                d.scrollTo(0, 0)
            });

            /*Check all & select row*/
            $scope.isCheck=false;
            $scope.selectAll = function(data){
                if ($scope.isCheck) {
                    $scope.isCheck = false;
                } else {
                    $scope.isCheck = true;
                }
                angular.forEach(data, function (dt) {
                    dt.selected = $scope.isCheck;
                });
            }
            $scope.selectedRow = function(row){
                if(row.selected == false){
                    $scope.isCheck=false;
                }
            }

            /*Pagination*/
            $scope.numPerPageOpt = [5, 10, 20, 50, 100];
            $scope.numPerPage = $scope.numPerPageOpt[2];
            $scope.currentPage = 1;

            /*alert*/
            $scope.alerts = [];
            $scope.closeAlert = function($index) {
                return $scope.alerts.splice($index, 1)
            };

            /*date picker*/
            $scope.popupDialog = {
                opened: !1
            };
            $scope.datePicker = function(){
                $scope.popupDialog.opened = !0;
            }
        }
        angular.module("app").controller("AppCtrl", ["$scope", "$rootScope", "$route", "$document", "AppConfig", AppCtrl])
    }(),
    function(){
        function fileCtrl ($scope) {
            $scope.uploadFile = function() {
                $scope.processDropzone();
            };

            $scope.reset = function() {
                $scope.resetDropzone();
            };
        }

        angular.module('app').controller('fileCtrl', ["$scope",fileCtrl]);
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
                            return b.addClass("body-wide body-lock")
                        case "/sales/order/detail/edit/addproduct":
                            return b.addClass("body-wide");
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
            }).when("/products", {
                templateUrl: "app/components/product/products.view.html"
            }).when("/products/create", {
                templateUrl: "app/components/product/detail/products.detail.view.html"
            }).when("/products/edit", {
                templateUrl: "app/components/product/detail/products.detail.view.html"
            }).when("/stores", {
                templateUrl: "app/components/store/store.view.html"
            }).when("/stores-import", {
                templateUrl: "app/components/store/detail/store.detail.view.html"
            }).when("/sales", {
                templateUrl: "app/components/sales/sales.view.html"
            }).when("/category", {
                templateUrl: "app/components/category/category.view.html"
            }).when("/sales/order/detail", {
                templateUrl: "app/components/sales/order/order.detail.view.html"
            }).when("/sales/order/detail/edit", {
                templateUrl: "app/components/sales/order/order.detail.edit.html"
            }).when("/sales/order/detail/edit/addproduct", {
                templateUrl: "app/components/product/popup/products.choose.popup.html"
            }).when("/404", {
                templateUrl: "app/shared/page/404.html"
            }).otherwise({
                redirectTo: "/404"
            })
        }])
    }();