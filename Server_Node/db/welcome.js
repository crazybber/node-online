/**
 * Created by Administrator on 2015/12/17.

{
    "welcomes":{
        "title":"sss",
        "image":"image_location",
        "description":"description",
        "url":"url_when_click_to_jump_to",
        "country":"country",
        "state":"country",
        "city":"city"
}
}

*
*/
var mongoose= require('./db_conn');

var schema = mongoose.Schema({
    title: String,
    image:Number,
    description:String,

});

var reg_user=  mongoose.model('users',schema);

module.exports = reg_user;