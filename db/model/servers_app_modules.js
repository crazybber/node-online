/**
 * 所有app集合表
 * Created by Administrator on 12/19/2015.
 */

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

 recent_app:Object:['1','2','3']
 *
 */
var mongoose= require('./../db_conn');

var schema = mongoose.Schema({
    app_name: String,
    app_id:String,
    app_guid:String,
    app_count:number,
    app_upload_time:Date,
    app_copany:String,
    app_author:String,
    app_icon:{
        icon_type:String,
        icon_path:String,
        icon_url:String,
    },
    app_content:String
});

var reg_user=  mongoose.model('user_recent_app',schema);

module.exports = user_recent_app;
