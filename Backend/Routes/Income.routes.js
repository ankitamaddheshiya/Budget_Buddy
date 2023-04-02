const express = require("express");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const incomeRouter = express.Router();
const {incomemodel} = require("../Models/Income.model");
const fs = require("fs")
const {client}= require("../redis/redis");
const { isModuleNamespaceObject } = require("util/types");
const cookieparser = require("cookie-parser") 
const app = express();
app.use(express.json());



incomeRouter.get("/",async(req,res)=>{
     const {userid} = req.body;
     try {
        const userdata= await incomemodel.find({userID:userid});
        res.send(userdata)
     } catch (err) {
        res.send({msg:err.message})
     }
});

incomeRouter.post("/addincome",async (req,res)=>{
    let {title,type,amount}=req.body;
    const userid=req.cookies.userID
    try{
         const income = new incomemodel({
            title,
            type,
            amount,
            userID:userid
         });
         await income.save();
         res.send({msg:"Income has been added"});
    }
    catch(err){
         res.send({msg:err.message})
    }
})

incomeRouter.patch("/editincome/:id",async (req,res)=>{
    try {
        const id=req.params.id;
        const payload=req.body;
        await incomemodel.findByIdAndUpdate(id,payload)
        res.send({"msg":`Income with id:${id} has been updated`})
    } catch (error) {
        res.send({msg:"something went wrong",error:error.message})
    
    }
})


incomeRouter.delete('/delete/:id',async(req,res)=>{
    try{
    const incomeID=req.params.id;
    await incomemodel.findByIdAndDelete({_id:incomeID})
    res.send({"msg":`note with id:${incomeID} has been deleted`})
    }
    catch(err){
        res.send({msg:err.message})
    }
});

incomeRouter.get("/filterdata",async(req,res)=>{
    const{Sdate,Edate}=req.body;
    const userid=req.cookies.userID
    try {
        let sdate= new Date(Sdate).toISOString();
    let edate= new Date(Edate).toISOString();
    
    let data= await incomemodel.find({userID:userid,createdAt:{$gte:sdate,$lte:edate}});
    res.send(data)
    } catch (err) {
        res.send({msg:err.message})
    } 
    
});


module.exports = {
    incomeRouter,cookieparser
}