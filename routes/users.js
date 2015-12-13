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
var reg_user = require('../db/reg_user');


/* add new  users. */
router.post('/', function(req, res) {

  var userinfo = req.body.reg;

  //var json_obj ={
  //          username:userinfo.username,
  //          mobile:userinfo.mobile,
  //          email:userinfo.email,
  //          password:userinfo.password};

  var user_to_add = new reg_user(userinfo);


  user_to_add.save(function (err) {

    if(!err){

      var reg_result = {
        reg_result: {
          username:userinfo.username,
          mobile:userinfo.mobile,
          email:userinfo.email,
          token:'6c84fb90-12c4-11e1-840d-7b25c5ee775a',
          result:true
        }

      };

      res.send(reg_result);
    }

  });

});



/* get userlist. */
router.get('/', function(req, res) {
  reg_user.find(function (err, userlist) {
    // res.send('../public/index.html');
    if(!err){
      res.send(userlist);
    }
  });
});

module.exports = router;
