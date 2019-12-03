const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TypeSchema = new Schema({
    id:Schema.Types.ObjectId,
    typeId:Number,
    typeName:String
})


mongoose.model('Type',TypeSchema);