/**
 * Created by Administrator on 2015/12/20.
 * parser Data 解析数据-->正确解析则校验数据--->校验正确转入注册队列--->注册。
 * 该类暂时无用
 */

var express = require('express');
var router = express.Router();
var reg_user = require('../../db/reg_user');
var uuid = require('node-uuid');
var errorhandle=require('../route_errorhandle');


router.get('/',function(req, res) {

    console.log('....');

});

/* get userlist. */
router.get('/query', function(req, res) {

  reg_user.find(function (err, userlist) {
    // res.send('../public/index.html');
    if(!err){
      res.send(userlist);
    }
  });
});


/* add new  users. */
router.post('/reg', function(req, res) {

    var userinfo = req.body.reg;

    userinfo.reg_tm_srv= new Date().toString();
    userinfo.token = uuid.v1();

    var user_to_add = new reg_user(userinfo);


    user_to_add.save(function (err) {

        if(!err){

            var reg_result = {
                reg_result: {
                    username:userinfo.username,
                    mobile:userinfo.mobile,
                    email:userinfo.email,
                    token:userinfo.token,
                    reg_time:userinfo.reg_tm_cli,
                    login_time:userinfo.reg_tm_cli,
                    result:true
                }


            };

            res.send(reg_result);
        }
        else {
            console.log(err);
        }

    });

});

//router.use(errorhandle);

module.exports = router;
