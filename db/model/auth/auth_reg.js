/**
 * Created by Administrator on 2016/3/5.
 */

var mongoose= require('./../../db_conn');

var schemaObject= {
    id:String,
    platform: String,
    channel:Number,
    device_HardWareID:String,
    mobile:String,
    can_register:Boolean
};
var schema = mongoose.Schema(schemaObject);

var auth_reg =  mongoose.model('reg_check',schema);


exports=module.exports = auth_reg;