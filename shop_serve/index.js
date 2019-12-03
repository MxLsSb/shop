const Koa = require('koa');
const app = new Koa;
const Router = require("koa-router");
let user = require('./controller/user');
let product = require('./controller/product');
let type = require('./controller/type');
let cart = require('./controller/cart');
//解决跨域问题
const cors = require('koa2-cors');
app.use(cors({
    origin:['http://localhost:8080'],
    credentials:true
}))


//接受前端post请求
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

//加载路由
let router = new Router();
router.use('/user',user.routes());
router.use('/product',product.routes());
router.use('/type',type.routes());
router.use('/cart',cart.routes());
app.use(router.routes());
app.use(router.allowedMethods());

const {connect,initSchema} =require('./init');
 (async()=>{
    await connect();
    initSchema();
})()



app.listen(3000,()=>{
    console.log("开启serve在3000端口")
})