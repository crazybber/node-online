/**
 * Created by Administrator on 2015/12/20.
 */

var app= angular.module("eamon",['lr.upload']);


app.controller("uploadController",function($scope,$http,upload){

    var url="http://127.0.0.1:3000";

    var path ='111122';
    var data=  {
        name:path,
        other:'others'
    };

    $scope.testfunction =function() {

        var config = {
            headers: {'Content-Type': undefined}
        };

        $http.post(url + "/upload", data, config)
            .success(function (reg_return) {

            var result = reg_return.reg_result;
            if (result.result === true) {

            }

        }).error(function(data, status, headers, config) {
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);

            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    };


    $scope.gosubmit =function(){

        var config = {
            headers : { 'Content-Type': undefined }
        };

        $http.post(url+"/upload",data,config).success(function (reg_return) {

            var result = reg_return.reg_result;
            if(result.result === true){

            }

        }).error(function(data, status, headers, config) {
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);

            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });;

    };


    var newurl = url.toString() +'/upload/file';
    $scope.doupload = function () {
        upload({
            url: newurl,
            method: 'POST',
            data: {
                anint: 123,
        //      aBlob: Blob([1,2,3]), // Only works in newer browsers
        //        aFile: $scope.myFile, // a jqLite type="file" element, upload() will extract all the files from the input and put them into the FormData object before sending.
            }
        }).then(
            function (response) {
                console.log(response.data); // will output whatever you choose to return from the server on a successful upload
            },
            function (response) {
                console.error(response); //  Will return if status code is above 200 and lower than 300, same as $http
            }
        );
    };


});