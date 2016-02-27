/**
 * Created by Administrator on 02/20/2016.
 * 上级业务数据==>权限校验，检查==>下级业务处理
 */

var express = require('express');
var router = express.Router();
var qiniuService = require('./../../service/3rd/qiniu/qiniu_up_file');
var uuid = require('node-uuid');
var errorhandle=require('./../route_errorhandle');


router.get('/qiniu',function(req, res) {

    console.log('....');
    qiniuService.uploadFile();

});

/* add new  users. */
router.post('/qiniu', function(req, res) {

    console.log('....');
    console.log(req.body.json.phone);
    console.log('.....');

});

//router.use(errorhandle);

module.exports = router;
