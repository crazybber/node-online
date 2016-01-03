/**
 * Created by Administrator on 2015/12/20.
 */

var app= angular.module("eamon",[]);


app.controller("uploadCtrl",function($scope,$http){

    var url="http://127.0.0.1:3000";

    var path ='test path ';

    var senddata ={data: {
        name:path,
        other:'others',
        file:$scope.up_file
    }};

    $scope.goSubmit =function(){
        var config = {
            headers : { 'Content-Type': 'multipart/form-data' }
        };

        $http.post(url+'/upload/file',senddata,config).success(function (reg_return) {
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
        });

    };

    var testsenddata ={data: {
        name:path,
        other:'others',
        file:$scope.testupfile
    }};



    $scope.testfunction =function() {

        var config = {
            headers: {'Content-Type': undefined}
        };

        $http.post(url + "/upload/file", testsenddata,config)
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




});