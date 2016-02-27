/**
 * Created by Administrator on 02/20/2016.
 * 权限检查
 * authorization check when a operation
 * 开放注册，不同版本的接入平台是否有注册权限，可以做设置和检查。
 */


var mongoose= require('./db_conn');

var schemaObject= {
    platform: String,
    username:string,
    mobile:string,
    can_register:Boolean,
};
var schema = mongoose.Schema(schemaObject);

var permission =  mongoose.model('permission',schema);


module.exports = permission;