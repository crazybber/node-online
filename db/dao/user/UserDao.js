/**
 * Created by smail on 2016/3/4.
 * 这个是用户模型Dao，提供对用户注册信息保存，用户查询等数据库操作
 */

var reg_user=require('./../../reg_user');

var UserDao={
    saveReg:function(req,res){
        //将数据交给Dao进行数据库操作
        console.log("将注册用户信息写入数据库");
        reg_user=new reg_user("");
        reg_user.email="1214957011@qq.com";
        reg_user.mobile="1861602304"
        reg_user.password="123";
        reg_user.username="xinxinsi";
        reg_user.save(function (err, reg_user) {
            if (err) {
                console.error(err);
                res.json("用户注册数据写入失败"+err);
            } else  {
                console.log("save success");
                res.json("用户注册数据写入成功");
            }
        });
    },
    queryUserByPhoneNumber:function(phoneNumber,callback){
          reg_user.find({ mobile: /^phoneNumber/ }, callback)
    }
};
module.exports=UserDao;

