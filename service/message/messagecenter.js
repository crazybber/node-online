/**
 * Created by Administrator on 2015/12/14.
 * message push to client
 */
var io_server= require('socket.io');

io_server.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});


module.exports = io_server;