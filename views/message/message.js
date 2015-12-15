/**
 * Created by Administrator on 2015/12/14.
 */

var app= angular.module("app_message",[]);

app.controller('messageControl', function ($scope) {

    var socket = io.connect('http://127.0.0.1:3000');

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
            socket.emit('chat message',item);
            $scope.msglist.push(item);
            $scope.msg_to_send ='';

        }
    }


        socket.on('connect',function(){
            console.log('connected to Server!');
        });

        socket.on('news', function(msg){
            $scope.msglist.push(msg);
            console.log('message(from server): ' + msg);
        });

        socket.on('chat message', function(msg) {
            alert('chat message');
            $scope.msglist.push(msg+'From Server');

        });





});



