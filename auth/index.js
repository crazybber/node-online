/**
 * Created by Administrator on 2016/2/27.
 * this auth check...
 */
var express = require('express');
var router = express.Router();
var auth = require('./../db/dao/auth');

//get request will not be processed  for now
router.get('/', function(req, res) {

});

//用户注册校验。
router.post('/users/reg', function(req, res) {
    //判断请求类型,为注册，获取请求头字段
    //校验 app_platform 和  channel 两个权限字段。
    //校验失败则拒绝。
    //成功，则默认放行。
    var protocalData= req.body;

    //取数据库相关的权限集，校验当前请求是否有权限进一步操作。
    var erroInfo = auth.users.check_reg(protocalData);

    if(erroInfo !=null)
    {
        res.send(erroInfo);
    }

});

router.post('/user/login', function(req, res) {

//判断请求类型


});


exportsexpo = module.exports= router;

