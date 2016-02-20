/**
 * 生成七牛上传凭证
 * Created by v_xguihuang on 2016/1/26.
 */
var qiniu = require('qiniu');

qiniu.conf.ACCESS_KEY = 'u395RX95lV3vtD6EX4IMmIVgFKT6f9B_uSX4xgkK';
qiniu.conf.SECRET_KEY = 'v5moXq4telhg9lX1nQ8PFjpqRhjcWtBZ-Ztz_iks';

var to = new qiniu.rs.PutPolicy2('datazhiyunspace');   //上传凭证
exports.uptoken = to.token();

