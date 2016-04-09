/**
 * Created by Administrator on 2016/3/5.
 */

var reg_check= require('./../../model/auth/auth_reg');

var regData = require('./../../../common/pdo/reg');


function check_reg(params)
{
    var inplatform=params.app_platform;
    var inchannel= params.channel;
//校验参数中的两个字段，并返回结果

 //从数据库中查询出不能注册的条件，检查当前注册行为里的信息，是否需要被过滤掉。

   //  var param= {
   //  platform:"apple",
   //  mobile:"1861602304",
   //  channel:"123",
   //  device_HardWareID:"xinxinsi",
   //  can_register:false
   //  };
   //
   // var reg_data_check=new reg_check(param);
   //
   //  reg_data_check.save(function (err, reg_checks) {
   //      if (err) {
   //          console.log("用户注册数据写入失败"+err);
   //      } else  {
   //          console.log("用户注册数据写入成功");
   //      }
   //  });

    reg_check.find(function(err,regchecks_sets){

        //TODO... check logic code for condition
        console.log(regchecks_sets);

        if (err) {
            var retData= regData.GetFullMsg();
            return retData;
        }

        console.log(regchecks_sets);

        return null;
    });



//校验失败，返回包含错的json对象，给调用处使用。



};


exports.check_reg = check_reg;