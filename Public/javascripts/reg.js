/**
 * Created by Administrator on 2015/12/13.
 */

var app= angular.module("eamon",[]);


app.controller("regCtrl", function ($scope,$http) {

    var  url="http://127.0.0.1:3000";
    $scope.username ="sally";
    $scope.mobile =15088551660;
    $scope.password ="123456";
    $scope.email="sally@eamon.com";

    $scope.subRegister = function () {


        var registerInfo ={reg:{
            username:$scope.username,
            mobile:$scope.mobile,
            email:$scope.email,
            password:$scope.password,
            reg_type:'1',    //1,android ,2,ios,3,windows,4 pc
            reg_tm_cli: new Date().toString(),
        }};

        $http.post(url+"/users/reg",registerInfo).success(function (reg_return) {

            var result = reg_return.reg_result;
            if(result.result === true){
                loaduserList();
            }

        });
    }

    function loaduserList() {
        $http.get(url+"/users/query").success(function (userlist) {
            $scope.userlist = userlist;
        });
    }
    loaduserList();



});
