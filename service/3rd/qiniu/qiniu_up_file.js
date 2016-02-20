/**
 * 上传文件到七牛
 * Created by v_xguihuang on 2016/1/26.
 */
var qiniu = require('qiniu');
var uptoken = require('./uptoken.js');

exports.uploadFile = function () {
    var extra = new qiniu.io.PutExtra()
    extra.mimeType = 'file';
    var key = 'ww.png';
    var localFile = './bb.png'
    qiniu.io.putFile(uptoken, key, localFile, extra, function (err, res) {
        if (!err) {       //上传成功,处理返回值
            console.log(res.key, res.hash);
        } else {          //下传失败，处理返回值
            console.log(err);
        }
    });
};
