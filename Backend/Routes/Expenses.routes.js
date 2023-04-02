const express = require("express");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const expenseRouter = express.Router();
const {expensemodel} = require("../Models/Expenses.model");
const fs = require("fs")
const {client}= require("../redis/redis")

const app = express();
app.use(express.json());


expenseRouter.get("/",async(req,res)=>{
     const {userid}= req.body;
     try {
        const userdata= await expensemodel.find({userID:userid});
        res.send(userdata)
     } catch (err) {
        res.send({msg:err.message})
     }
});

expenseRouter.post("/addexpense",async (req,res)=>{
    let {title,type,amount,userid}=req.body;

    try{
         const expense=  new expensemodel({
            title,
            type,
            amount,
            userID:userid
         });
         await expense.save();
         res.send({msg:"expense has added"});
    }
    catch(err){
         res.send({msg:err.message})
    }


})


expenseRouter.patch("/editexpense/:id",async (req,res)=>{
    try {
        const id=req.params.id;
        const payload=req.body;
        await expensemodel.findByIdAndUpdate(id,payload)
        res.send({"msg":`expense with id:${id} has been updated`})
    } catch (error) {
        res.send({msg:"something went wrong",error:error.message})
    
    }
})


expenseRouter.delete('/delete/:id',async(req,res)=>{
    try{
    const expenseID=req.params.id;
    await expensemodel.findByIdAndDelete({_id:expenseID})
    res.send({"msg":`note with id:${expenseID} has been deleted`})
    }
    catch(err){
        res.send({msg:err.message})
    }
});

expenseRouter.post("/filterdata",async(req,res)=>{
    const{Sdate,Edate,userid}=req.body;
    try {
        let sdate= new Date(Sdate).toISOString();
    let edate= new Date(Edate).toISOString();
    
    let data= await expensemodel.find({userID:userid,createdAt:{$gte:sdate,$lte:edate}});
    res.send(data);
    } catch (err) {
        res.send({msg:err.message})
    } 
    
});

module.exports = {
    expenseRouter
}