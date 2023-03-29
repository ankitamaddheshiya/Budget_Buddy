const mongoose = require("mongoose");

const expensesSchema = mongoose.Schema({
    title:{type:String,required:true},
    type:{type:String,required:true},
    amount:{type:Number,require:true},
    user:{type:String,required:true},
    createdAt:{type: Date,default: Date.now}
});

const expensesmodel = mongoose.model("expenses",expensesSchema);

module.exports = {expensesmodel}