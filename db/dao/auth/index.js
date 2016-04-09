/**
 * Created by Administrator on 2016/3/5.
 */

var  users = require('./users');
var  files = require('./files');
var  admin = require('./admin');


var auth={
    users:users,
    files:files,
    admin:admin

};



exports = module.exports = auth;