const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjiecId = Schema.Types.ObjectId;


const cartSchema=new Schema({
    ID:ObjiecId,
    productId:{
        type:ObjiecId,
        ref:'Product' //指向联合查询的model
    },
    userId:ObjiecId,
    createDate:{type:Date,default:Date.now()}
})

mongoose.model("Cart",cartSchema);