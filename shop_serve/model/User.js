const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    userId:Schema.Types.ObjectId,
    userName:{unique:true,type:String},
    password:String,
    createDate:{type:Date,default:Date.now()}
});


userSchema.pre('save', function(next){
    //随机生成salt，10指迭代次数
    bcrypt.genSalt(10,(err,salt)=>{
        if (err) return next(err);
        bcrypt.hash(this.password,salt,(err,hash)=>{
            if (err) return next(err);
            this.password=hash;
            next();
        })
    })
})
userSchema.methods={
    comparePassword:(_password,password)=>{
        return new Promise((resolve,reject)=>{
            bcrypt.compare(_password,password,(err,isMatch)=>{
                if (!err) resolve(isMatch);
                else reject(err);
            })
        })
    }
}
mongoose.model('User',userSchema);