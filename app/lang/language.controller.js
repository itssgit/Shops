(function() {
    function a(a) {
        a.useStaticFilesLoader({
            prefix: "app/lang/",
            suffix: ".json"
        }),
            // a.preferredLanguage("vn"),
            a.useSanitizeValueStrategy(null)
    }

    function LangCtrl($scope, $translate, $cookies) {
        var cookieLang = $cookies.get('lang');
        if(cookieLang){
            $scope.lang = cookieLang;
            switch (cookieLang) {
                case "English":
                    $translate.use("en");
                    break;
                case "VietNam":
                    $translate.use("vn");
                    break;
            }
        } else{
            $scope.lang = "VietNam";
            $translate.use("vn");
        }
        $scope.setLang = function(langSelected) {
            switch (langSelected) {
                case "English":
                    $translate.use("en");
                    break;
                case "VietNam":
                    $translate.use("vn");
                    break;
            }
            //save application language to cookie
            $cookies.put('lang', langSelected);
            return $scope.lang = langSelected
        },
        $scope.getFlag = function() {
            var flag;
            switch (flag = $scope.lang) {
                case "English":
                    return "flags-american";
                case "VietNam":
                    return "flags-vietnam";
            }
        }
    }
    angular.module("app.lang",["ngCookies"]);
    angular.module("app.lang", ["pascalprecht.translate"]).config(["$translateProvider", a]).controller("LangCtrl", ["$scope", "$translate", "$cookies", LangCtrl])
})();