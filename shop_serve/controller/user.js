const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');


router.post('/registUser',async(ctx)=>{
    //获取model
    const User = mongoose.model('User');
    //接受post请求封装成user对象
    let newUser = new User(ctx.request.body);

    //保存
    await newUser.save().then(()=>{
        ctx.body={
            code:200,
            message:'注册成功'
        }
    }).catch(err=>{
        ctx.body={
            code:500,
            message:err
        }
    })
})

router.post('/loginUser',async(ctx)=>{
   
    //接受post请求数据转换为对象
    let loginUser = ctx.request.body;
    let userName = loginUser.userName;
    let password = loginUser.password;

    //引入model
    const User = mongoose.model('User');
    //查询用户名是否存在

    await User.findOne({userName:userName}).exec().then(async(res)=>{
        if (res) {
            let newUser = new User();
            await newUser.comparePassword(password,res.password).then(isMatch =>{
                if (isMatch) {
                    ctx.body={
                        code:200,
                        message:'登录成功',
                        userInfo:res
                    }
                }else{
                    ctx.body={
                        code:201,
                        message:'登录失败'
                    }
                }
            })
        }else{
            ctx.body={
                code:201,
                message:'用户名不存在'
            }
        }
    })

   
})

module.exports= router