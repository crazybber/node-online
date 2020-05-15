/**
 * Created by Administrator on 2015/12/20.
 *var uploadurl="http://localhost:3000/upload/file";
 */

//inject angular file upload directives and services.
var app = angular.module('fileUpload', ['ngFileUpload']);

app.controller('updateCtrl', function ($scope, Upload, $timeout) {
    var uploadurl="http://localhost:3000/upload/file";

    $scope.uploadPic = function(file) {

        var datatoUpload ={
            url: uploadurl,
            data: {file: file, username: $scope.username},
        }

        file.upload = Upload.upload(datatoUpload);


        //uploaded OK callback
        var uploadedCallback =function (response) {
            $timeout(function () {
                file.result = response.data;
            });
        };
        var errorCallback =function (response) {
            if (response.status > 0)
                $scope.errorMsg = response.status + ': ' + response.data;
        };
        var processCallback =function (evt) {
            // Math.min is to fix IE which reports 200% sometimes
            file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        };
        file.upload.then(uploadedCallback, errorCallback, processCallback);
    }
});