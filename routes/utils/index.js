/**
 * Created by Administrator on 2015/12/20.
 */

var express = require('express');
var router = express.Router();


router.post('/file', function (req, res) {


    var tmp = req.body;
    console.log(tmp);
    console.log('image  in');
    console.log('image  in');



});



module.exports = router;

