/**
 * Created by Administrator on 2016/3/5.
 * {
    "res_head": {
    "erorCode": "0", // 0 for no error.
        "errorMsg": "no error",
        "server_time": "时间戳字符串",
        "api_order": "123456", //
        "service_code": "0003",
        "extend":"more info"
},
    "reg_result": {
        "user": "username",
        "userid":"useriddddddddddddddddd",
        "mobile": "15088551600",
        "mail": "sally@eamon.com",
        "reg_time": "注册时间",
        "login_time": "登陆时间",
        "online_status": "fine",
        "token": "6c84fb90-12c4-11e1-840d-7b25c5ee775a", //var uuid = require('node-uuid');"erorCode": "0", //需要定义
        "extend": "for future"
}
}

 */

var error = require('./errorcode');

var res_Msg={}; //including  pdo.
var reg_pdo ={};

res_Msg.res_head={
         errorCode: "0",
         errorMsg: "no error",
         server_time: "",
         api_order: "123456", //
         service_code: "0003",
         extend:"more info"
};

res_Msg.res_body={
        user: "username",
        userid:"useriddddddddddddddddd",
        mobile: "15088551600",
        mail: "sally@eamon.com",
        reg_time: "注册时间",
        login_time: "登陆时间",
        online_status: "fine",
        token: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
        extend: "for future"

};

res_Msg.CreateHead=function(errorCode,others){

    var erroIndex= 'err_'+errorCode;
    this.res_head.errorCode = error[erroIndex].code;
    this.res_head.errorMsg = error[erroIndex].msg;
    this.res_head.extend = others;
    this.res_head.server_time = Date.now().toString();

    return this.res_head;
};

res_Msg.CreateBody=function(){
    this.res_body.online_status = 'no login';
    this.res_body.reg_time = 'null';
    return this.res_body;
};

res_Msg.setPdoHead = function(field,value){

    this.res_head[field] = value;
    if(field === 'errorCode')
    {
        var erroIndex= 'err_'+errorCode;
        this.res_head.errorMsg = error[erroIndex].msg;
    }

};
res_Msg.setPdoBody = function(field,value){

    this.res_body[field] = value;

};

reg_pdo ={
    res_head:res_Msg.res_head,
    res_body:res_Msg.res_body
};


reg_pdo.setPdoHead = function(field,value){

    res_Msg.setPdoHead(field,value);

};

reg_pdo.setPdoBody = function(field,value){

    res_Msg.setPdoBody(field,value);

};

res_Msg.GetReg_PDO=function(){

    return reg_pdo;
};



module.exports =exports= res_Msg;