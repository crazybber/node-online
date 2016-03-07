/**
 * Created by Administrator on 2016/3/5.
 */

var reg_check= require('./../../model/auth/auth_reg');

var regData = require('./../../../common/pdo/reg');


function check_reg(params)
{
    var platform=params.app_platform;
    var channel= params.channel;
//校验参数中的两个字段，并返回结果
    console.log('check_reg');

    reg_check.find({can_register:false},function(err,reg_checks){

        if (err) {
            var retData= regData.Create();

            return retData;
        }

        console.log(reg_checks)

    });



//校验失败，返回包含错的json对象，给调用处使用。



};


exports.check_reg = check_reg;