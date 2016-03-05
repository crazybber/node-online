/**
 * Created by jack on 2016/3/4.
 * 统一权限验证
 *
 */
var express=require("express");
var router=express.Router();

router.use("/",function(req,res,next){
    console.log("进入权限验证部分");
    next();
});


