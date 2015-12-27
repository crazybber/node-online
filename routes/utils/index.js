/**
 * Created by Administrator on 2015/12/20.
 */

var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var   fs = require('fs');

router.post('/file', function (req, res) {

    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';		//设置编辑
    form.uploadDir = 'public';	 //设置上传目录
    form.keepExtensions = true;	 //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小

    form.parse(req, function(err, fields, files) {

        if (err) {
            res.locals.error = err;
            res.render('index', { title: 'result' });
            return;
        }
        var extName = '';  //后缀名
        switch (files[0].filename.type) {
            case 'image/pjpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }

        if(extName.length == 0){
            res.locals.error = '只支持png和jpg格式图片';
            res.render('index', { title: 'result' });
            return;
        }

        var avatarName = Math.random() + '.' + extName;
        var newPath = form.uploadDir + avatarName;
        console.log(newPath);
        fs.renameSync(files[0].filename.path, newPath);  //重命名

    });

    var tmp = req.body;
    console.log(tmp);
    console.log('image  in');
    console.log('image  in');

});



module.exports = router;

