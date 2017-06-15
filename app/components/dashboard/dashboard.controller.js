(function() {
    "use strict";

    function a(a, BindingService) {
        a.line2 = {}, a.radar1 = {}, a.line2.options = {
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["Email", "Affiliate", "Video Ads", "Direct", "Search"]
            },
            toolbox: {
                show: !1,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            calculable: !0,
            xAxis: [{
                type: "category",
                boundaryGap: !1,
                data: ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]
            }],
            yAxis: [{
                type: "value"
            }],
            series: [{
                name: "Email",
                type: "line",
                stack: "Sum",
                data: [120, 132, 101, 134, 90, 230, 210]
            }, {
                name: "Affiliate",
                type: "line",
                stack: "Sum",
                data: [220, 182, 191, 234, 290, 330, 310]
            }, {
                name: "Video Ads",
                type: "line",
                stack: "Sum",
                data: [150, 232, 201, 154, 190, 330, 410]
            }, {
                name: "Direct",
                type: "line",
                stack: "Sum",
                data: [320, 332, 301, 334, 390, 330, 320]
            }, {
                name: "Search",
                type: "line",
                stack: "Sum",
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }]
        }, a.radar1.options = {
            animation: !1,
            tooltip: {
                trigger: "axis"
            },
            legend: {
                orient: "vertical",
                x: "right",
                y: "bottom",
                data: ["Allocated Budget", "Actual Spending"]
            },
            toolbox: {
                show: !1,
                feature: {
                    restore: {
                        show: !0,
                        title: "restore"
                    },
                    saveAsImage: {
                        show: !0,
                        title: "save as image"
                    }
                }
            },
            polar: [{
                indicator: [{
                    text: "sales",
                    max: 6e3
                }, {
                    text: "dministration",
                    max: 16e3
                }, {
                    text: "Information Techology",
                    max: 3e4
                }, {
                    text: "Customer Support",
                    max: 38e3
                }, {
                    text: "Development",
                    max: 52e3
                }, {
                    text: "Marketing",
                    max: 25e3
                }]
            }],
            calculable: !0,
            series: [{
                name: "Budget vs spending",
                type: "radar",
                data: [{
                    value: [4300, 1e4, 28e3, 35e3, 5e4, 19e3],
                    name: "Allocated Budget"
                }, {
                    value: [5e3, 14e3, 28e3, 31e3, 42e3, 21e3],
                    name: "Actual Spending"
                }]
            }]
        }

        a.data = BindingService.get();
        // localStorage.setItem('test', JSON.stringify(a.data));
        console.log(a.data);
    }

    angular.module("app").controller("DashboardCtrl", ["$scope","BindingService", a])
})();