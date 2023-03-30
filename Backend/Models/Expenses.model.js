const mongoose = require("mongoose");

const expensesSchema = mongoose.Schema({
    title:{type:String,required:true},
    type:{type:String,required:true},
    amount:{type:Number,require:true},
    userID:{type:String,required:true},
    createdAt:{type: Date,default: Date.now}
});

const expensemodel = mongoose.model("expense",expensesSchema);

module.exports = {expensemodel}