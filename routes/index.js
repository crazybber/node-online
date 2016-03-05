/**
 * Created by Administrator on 2015/12/13.
 * this is test page 这是测试页面
 */
var express = require('express');
var router = express.Router();
var users_auth = require('./../auth');


router.use('/', function (req, res) {

    var url= req.body.originalUrl;

    var ret=   users_auth.check_reg(reg);

    if(false == ret)
    {
        res.send('sssssss');
    }

    console.log('.....');
    //product.find(function (err, prodcts) {
    //   // res.send('../public/index.html');
    //    res.send(prodcts);
    //});
});

module.exports = router;
