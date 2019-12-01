const mongoose = require('mongoose');
const db = "mongodb://localhost/shop";
//引入 所有的schema
const glob = require('glob');
const path = require('path');

exports.initSchema = ()=>{
    glob.sync(path.resolve(__dirname,'./model','*.js')).forEach(require)
}

exports.connect =()=>{
    //链接数据库
    mongoose.connect(db,{useNewUrlParser:true});

    //监听数据库链接
    mongoose.connection.on('disconnected',()=>{
        mongoose.connect(db);
    });
    
    //数据库出现错误的监听
    mongoose.connection.on('error',err=>{
        console.log(err);
        mongoose.connect(db);
    })
    //链接的时候
    mongoose.connection.once("open",()=>{
        console.log("数据库链接成功")
    })
}