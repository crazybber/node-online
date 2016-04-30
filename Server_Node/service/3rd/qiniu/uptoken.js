/**
 * 生成七牛上传凭证
 * Created by v_xguihuang on 2016/1/26.
 */
var qiniu = require('qiniu');

function uptoken() {
    qiniu.conf.ACCESS_KEY ="UOyuJjlMSIQNOOlOuu3zw9rKJHpoa4mgj0PoJKa_";
    qiniu.conf.SECRET_KEY ="bFJtiPJUk0z9yc6TLtL_tjURZhG0Q3QUYDV6WKra";
    var putPolicy = new qiniu.rs.PutPolicy("xinxin");
    return putPolicy.token();
}
exports.extra = new qiniu.io.PutExtra();
exports.uptoken = uptoken();

