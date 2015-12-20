/**
 * Created by Administrator on 2015/12/20.
 */

var app= angular.module("eamon",[]);


app.controller('uploadCtrl',function($scope,$http){

    var url='127.0.0.1:3000';

    var data=  {
        name:$scope.file_fullpath,
        other:'others'
    };

    $scope.submit =function(){


        $http.post(url+"/upload",data).success(function (reg_return) {

            var result = reg_return.reg_result;
            if(result.result === true){

            }

        });

    };




});