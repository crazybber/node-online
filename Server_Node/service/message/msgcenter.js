/**
 * Created by Administrator on 2015/12/14.
 * message push to client
 */
//var io_server= require('socket.io');
//
//io_server.on('connection', function (socket) {
//    socket.emit('news', { hello: 'world' });
//    socket.on('my other event', function (data) {
//        console.log(data);
//    });
//});
//
function socket_handle(io_server,income_socket){

    console.log('user connected');
//socket.emit('news', { hello: 'world' });

    var messages = [];
    income_socket.on('disconnect', function(){
        console.log('user disconnected');
    });



    income_socket.on('chat message', function(msg) {
        console.log('Received: ', msg);
      //  messages.push(msg);
       // income_socket.broadcast.emit('news',msg+' received');
        io_server.sockets.emit('news', "this is a test");
    });

    income_socket.on('my other event', function (data) {
        console.log(data);
    });
    messages.forEach(function(msg) {
        income_socket.send(msg);
    })

}

module.exports = socket_handle;