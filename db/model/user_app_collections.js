/**
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
    username: String,
    user_obj_id:String,
    user_app_count:number,
    user_app_collections:[{
        name:String,
        productid:String,
        isFaverate:Boolean,
        isRecentUsed:Boolean,
    },
    {
        name:String,
        productid:String,
        isFaverate:Boolean,
        isRecentUsed:Boolean,
    }
    ]
});

var reg_user=  mongoose.model('user_recent_app',schema);

module.exports = user_recent_app;
