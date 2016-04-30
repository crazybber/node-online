/**
 * Created by Administrator on 01/03/2016.
 * download file for server
 */


var express = require('express');
var router = express.Router();
var   fs = require('fs');
var fileUploadManager = require('../../service/files/download');

router.get('/plugin', function (req, res) {


    fileUploadManager(req, res);


    console.log('download request  in');
    console.log('download request  in');


});



module.exports = router;
