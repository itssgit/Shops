(function() {
    function a(a) {
        a.useStaticFilesLoader({
            prefix: "app/lang/",
            suffix: ".json"
        }), a.preferredLanguage("vn"), a.useSanitizeValueStrategy(null)
    }

    function b(a, b) {
        a.lang = "VietNam", a.setLang = function(c) {
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
    angular.module("app.lang", ["pascalprecht.translate"]).config(["$translateProvider", a]).controller("LangCtrl", ["$scope", "$translate", b])
})();