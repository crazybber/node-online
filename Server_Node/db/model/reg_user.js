/**
 * Created by Administrator on 2015/12/13.
 * Register userinfo
 *
 {
"reg":{
	"user":"username",
	"phone":"15088551600",
	"mail":"sally@eamon.com",
	"pass":"password"
    }
}

 recent_used_app:[{'name':'name','id':'guid'},{'name':'name','id':'guid'}]
 *
 */
var mongoose= require('./../db_conn');

var schema = mongoose.Schema({
    username: String,
    age:{type:Number,min:16,max:80,index:true},
    mobile:Number,
    email:String,
    password:String,
    reg_type:String,
    reg_tm_cli:String,
    reg_tm_srv:String,
    token:String,
    date:{type:Date,default:Date.now}

});

var reg_user=  mongoose.model('users',schema);

exports=module.exports = reg_user;