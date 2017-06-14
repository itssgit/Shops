(function() {
    function a(a) {
        a.useStaticFilesLoader({
            prefix: "i18n/",
            suffix: ".json"
        }), a.preferredLanguage("en"), a.useSanitizeValueStrategy(null)
    }

    function b(a, b) {
        a.lang = "English", a.setLang = function(c) {
            switch (c) {
                case "English":
                    b.use("en");
                    break;
                case "VietNam":
                    b.use("vn");
                    break;
            }
            return a.lang = c
        }, a.getFlag = function() {
            var b;
            switch (b = a.lang) {
                case "English":
                    return "flags-american";
                case "VietNam":
                    return "flags-vietnam";
            }
        }
    }
    angular.module("app.i18n", ["pascalprecht.translate"]).config(["$translateProvider", a]).controller("LangCtrl", ["$scope", "$translate", b])
})();