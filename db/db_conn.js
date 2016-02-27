/**
 * Created by Administrator on 2015/12/13.
 * db connection
 */


var mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/TestDB');

//db.on('error', console.error.bind(console, 'connection error:'));
var db = mongoose.connection;
db.on('error', function (err) {
    console.error.bind(console, err+ 'connection error:');
});
db.once('open', function (callback) {
    // success open db conn!
});

exprots= module.exports = mongoose;