/**
 * Created by Administrator on 2016/3/5.
 */

var reg_check= require('./../../model/auth/auth_reg');

var regpdo = require('./../../../common/pdo/reg');


function check_reg(regPdoData)
{
    var inplatform=regPdoData.req_head.app_platform;
    var inchannel= regPdoData.req_head.channel;
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

    // create condition
    var condition = {
        can_register: true,
        $or: [{platform: inplatform}, {channel: inchannel}]
    };

    reg_check.find(condition,function(err,regchecks_sets){

        var  result_pdo = regpdo.GetReg_PDO();
        result_pdo.setPdoHead('server_time',Date.now().toString());
        if (err) {
            //data base query error.
            result_pdo.setPdoHead('errorCode',2);
            return result_pdo;
        }
        //will be declined for no access rights
        if(regchecks_sets.length <=0)
        {
            result_pdo.setPdoBody('reg_time',regPdoData.req_head.reg_tm_cli);
            return result_pdo;
        }

        return null;
    });



//校验失败，返回包含错的json对象，给调用处使用。



};


exports.check_reg = check_reg;