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

 //从数据库中查询出不能注册的条件，检查当前注册行为里的信息，是否需要被过滤掉。
//TODO ...次调试进行到这里
    reg_check.find({can_register:false},function(err,reg_checks){

        //TODO... check logic code for condition.

        if (err) {
            var retData= regData.GetFullMsg();
            return retData;
        }

        console.log(reg_checks);

        return null;
    });



//校验失败，返回包含错的json对象，给调用处使用。



};


exports.check_reg = check_reg;