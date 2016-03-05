/**
 * Created by Administrator on 01/17/2016.
 * register services
 *用户信息模块的业务处理
 */
var UserDao=require("./../../db/Dao/UserDao");

var UserService={
    checkRegData:function(req,res){
        console.log("进入注册数据格式校验");
        var userName="smail";
        var phoneNumber="12131321123";
        //进行数据库匹配，查看是否已经注册(手机号已经存在)
        UserDao.queryUserByPhoneNumber("1861602304",function(data){
            if(data){
                console.log("手机号已经注册");
                res.json('{"info":"phoneNumber aready exists!"}');
            }else{
                if(!userName){
                    res.json('{"info":"valid data "}');
                }else{
                    UserDao.saveReg(req,res);
                }
            }
        });
    }
};

module.exports=UserService;