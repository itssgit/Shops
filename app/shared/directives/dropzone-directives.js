(function () {
    function dropzone($http) {

        return function(scope, element, attrs) {

            var config = {
                url: 'http://localhost/Frontend/',
                maxFilesize: 100,
                paramName: "uploadfile",
                maxThumbnailFilesize: 10,
                parallelUploads: 1,
                autoProcessQueue: false
            };

            var eventHandlers = {
                'addedfile': function(file) {
                    scope.file = file;
                    if (this.files[1]!=null) {
                        this.removeFile(this.files[0]);
                    }
                    scope.$apply(function() {
                        scope.fileAdded = true;
                    });
                },

                'success': function (file, response) {
                    console.log(file);
                    var fd = new FormData();
                    fd.append('file', file);

                    $http.post("http://localhost/Frontend/", fd, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                    })

                        .success(function(){
                            console.log("ok");
                        })

                        .error(function(){
                        });
                }
            };

            dropzone = new Dropzone(element[0], config);

            angular.forEach(eventHandlers, function(handler, event) {
                dropzone.on(event, handler);
            });

            scope.processDropzone = function() {
                dropzone.processQueue();
            };

            scope.resetDropzone = function() {
                dropzone.removeAllFiles();
            }
        }
    }

    angular.module('app').directive('dropzone', ['$http',dropzone]);
})();