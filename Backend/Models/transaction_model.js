const mongoose= require("mongoose");

const transactionSchema= mongoose.Schema({
    discription:{
        type:String,
        trim:true,
        required:[true,'Please add some text']
    },
    amount:{
        type:Number,
        required:[true,'Please Add a +ve or -ve Number']
    },
    category:String,
    date:{
        type:Date,
        default:Date.now
    }
});

const TransactionModel= mongoose.model("transaction",transactionSchema);

module.exports={
    TransactionModel
}