/**
 * Created by Administrator on 2015/12/16.
 * upload files 上传文件
 */

var formidable = require('formidable');
var   fs = require('fs');

function uploadMgr(req, res){

    console.log('user upload request');

    //console.log(data);
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

        //res.writeHead(200, {'content-type': 'text/plain'});
        //res.write('received upload:\n\n');
        //res.end(util.inspect({fields: fields, files: files}));

        var extName = '';  //后缀名
        switch (files.file.type) {
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

        var filename = files.file.name;
        var newPath = form.uploadDir +'/'+ filename;
        console.log(newPath);
        fs.renameSync(files.file.path, newPath);  //重命名
        fs.unlink(files.file.path);

    });




}

module.exports = uploadMgr;