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
var reg_user = require('../../db/reg_user');
var uuid = require('node-uuid');
var errorhandle=require('../route_errorhandle');
var reg = require('./reg');


/* add new  users. */
//router.post('/reg', function(req, res) {
//
//  var userinfo = req.body.reg;
//
//  userinfo.reg_tm_srv= new Date().toString();
//  userinfo.token = uuid.v1();
//
//  //var json_obj ={
//  //          username:userinfo.username,
//  //          mobile:userinfo.mobile,
//  //          email:userinfo.email,
//  //          password:userinfo.password};
//  var user_to_add = new reg_user(userinfo);
//
//
//  user_to_add.save(function (err) {
//
//    if(!err){
//
//      var reg_result = {
//        reg_result: {
//          username:userinfo.username,
//          mobile:userinfo.mobile,
//          email:userinfo.email,
//          token:userinfo.token,
//          reg_time:userinfo.reg_tm_cli,
//          login_time:userinfo.reg_tm_cli,
//          result:true
//        }
//
//
//      };
//
//      res.send(reg_result);
//    }
//    else {
//     console.log(err);
//    }
//
//  });
//
//});
//
///* get userlist. */
//router.get('/query', function(req, res) {
//
//
//  reg_user.find(function (err, userlist) {
//    // res.send('../public/index.html');
//    if(!err){
//      res.send(userlist);
//    }
//  });
//});

router.use('/reg',reg);

router.use(errorhandle);


module.exports = router;
