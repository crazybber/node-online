/**
 * Created by Administrator on 2015/12/14.
 * {
"reg":{
	"username":"username",
	"mobile":"15088551600",
	"mail":"sally@eamon.com",
	"password":"password"
    }
}
 username: String,
 mobile:Number,
 email:String,
 password:String,
 reg_time_cli:String,
 reg_time_srv:String,
 reg_type:String
 */

var express = require('express');
var router = express.Router();
var reg_user = require('./../../db/reg_user');
var uuid = require('node-uuid');
var errorhandle=require('./../route_errorhandle');
var files = require('./files');


//user register route redirection, for the next move
router.use('/upload',files);

//user query route route redirection , for the next action
router.use('/download',files);

//route module error handle object
router.use(errorhandle);

module.exports = router;
