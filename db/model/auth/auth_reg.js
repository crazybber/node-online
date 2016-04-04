/**
 * Created by Administrator on 2016/3/5.
 */

var mongoose= require('./../../db_conn');

var schemaObject= {
    platform: String,
    channel:String,
    device_HardWareID:String,
    mobile:String,
    can_register:Boolean
};
var schema = new mongoose.Schema(schemaObject);

var auth_reg =  mongoose.model('reg_check',schema);


exports = module.exports = auth_reg;