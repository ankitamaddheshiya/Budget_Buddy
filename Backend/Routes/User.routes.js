const express = require("express");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const userRouter = express.Router();
const {usermodel} = require("../Models/User.model");
const fs = require("fs")
const {client}= require("../redis/redis")
const app = express();
app.use(express.json());





userRouter.post("/signup",async(req,res)=>{

    const {fname,lname,email,password,mobile} = req.body;
    try{
        let isPresent = await usermodel.findOne({email});
        if(!isPresent){
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
                res.status(400).send({msg:"Try Again",error:err.message})
            }else{
                const User = new usermodel({fname,lname,email,password:hash,mobile})
                await User.save();
                res.status(200).send({msg:"Signup Successfully"})
            }
        })
    }else{
        res.send({msg:"user already registered"})
    }
    }
    catch(error){
        res.status(500).send({msg:"Something Wrong try again",error:error.message})
    }
});


userRouter.post("/login",async (req,res)=>{

    try{
        const {email,password} = req.body;

        const isUser = await usermodel.findOne({email});
        if(!isUser){
           return res.status(400).send({msg:"SignUp Please then login"})
        }

        const isPassword = await bcrypt.compareSync(password,isUser.password)
        if(!isPassword){
            return res.status(400).send({msg:"Worng Password"})
        }

        const token = await jwt.sign({email,userID:isUser._id},process.env.token_key,{expiresIn:"1d"});

        const ref_token = await jwt.sign({email,userID:isUser._id},process.env.ref_token_key,{expiresIn:"7d"});

             client.SET("user_token",token);
             client.EXPIRE("user_token", 86400);

        res.status(200).send({msg:"Login Successfull",token,ref_token})
    }
    catch(err){
        res.status(500).send(err.message)
    }
}
);


userRouter.post("/logout",async (req, res) => {
    const token = await client.GET("user_token");
    await client.RPUSH("blacklist",token);
    res.send("Logged out successfully");
})





module.exports={
    userRouter
}