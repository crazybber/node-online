/**
 * Created by Administrator on 2015/12/20.
 */

var app= angular.module("eamon",[]);


app.controller("uploadCtrl",function($scope,$http){

    var url="127.0.0.1:3000";

    var path ='111122';
    var data=  {
        name:path,
        other:'others'
    };

    $scope.gosubmit =function(){


        var config = {
            headers : { 'Content-Type': undefined }
        };

        $http.post(url+"/upload",data,config).success(function (reg_return) {

            var result = reg_return.reg_result;
            if(result.result === true){

            }

        });

    };




});