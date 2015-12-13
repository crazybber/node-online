/**
 * Created by Administrator on 2015/12/13.
 * db connection
 */


var mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/TestDB');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    // success open db conn!
});

module.exports = mongoose;