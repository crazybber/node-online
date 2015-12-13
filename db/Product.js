/**
 * Created by Administrator on 2015/12/13.
 *  DB ODM Design
 */

var mongoose= require('./db_conn');


var schema = mongoose.Schema({
    name: String,
    result:Boolean,
    Method:Object
});

var product=  mongoose.model('product',schema);


module.exports = product;