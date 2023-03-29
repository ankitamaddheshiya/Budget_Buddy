const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,require:true},
    password:{type:String,required:true},
    mobile:{type:Number,required:true},
    createdAt:{type: Date,default: Date.now}
})

const usermodel = mongoose.model("user",userSchema);

module.exports = {usermodel}