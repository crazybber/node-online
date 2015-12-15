/**
 * Created by Administrator on 2015/12/14.
 */

var app= angular.module("app_message",[]);

app.controller('messageSeverControl', function ($scope) {

    $scope.username = 'E';
    $scope.show_page = 'login';

    $scope.onEnter = function(e){

        var key = window.event?e.keyCode:e.which;
        if(key==13){
            $scope.username =  $scope.username.toString() + ' chen';
            alert('OK');
            $scope.show_page = 'chat';
        }
    }

});



