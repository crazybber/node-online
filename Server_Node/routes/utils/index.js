/**
 * Created by Administrator on 2015/12/20.
 */

var express = require('express');
var router = express.Router();

var fileUploadManager = require('../../service/files/uploadFiles');

router.post('/file', function (req, res) {

    fileUploadManager(req, res);



    console.log('image  in');
    console.log('image  in');

});



module.exports = router;

