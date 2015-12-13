/**
 * Created by Administrator on 2015/12/13.
 *  DB ODM Design
 */

var mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/TestDB');

var schema = mongoose.Schema({
    name: String,
    result:Boolean,
    Method:Object
});

var Product=  mongoose.model('Product',schema);

module.exports = Product;