/**
 * Created by Administrator on 2015/12/14.
 */

var app= angular.module("app_message",[]);

app.controller('messageControl', function ($scope) {

    $scope.username = 'E';
    $scope.show_page = 'login';
    $scope.msglist = [];
    //var chatusername;
    $scope.onEnter = function(e,name){

        var key = window.event?e.keyCode:e.which;
        if(key==13){
            $scope.username = name + ' chen';
            //alert('OK');
            $scope.msglist.push($scope.username +' : come in.');
            $scope.show_page = 'chat';
        }
    }

    $scope.onSend = function(e,msg){

        var key = window.event?e.keyCode:e.which;
        if(key==13){
            var item = $scope.username +' : '+msg;
            $scope.msglist.push(item);
        }
    }

    var socket = io.connect('http://192.168.2.241:3000');

    socket.on('connected',function(socket){
        console.log('connected to Server!');
        socket.on('chat message', function(msg){
            console.log('message: ' + msg);
        });
    });


});



