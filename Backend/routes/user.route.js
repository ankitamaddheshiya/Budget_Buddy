const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
require("dotenv").config();


const {createClient} = require("redis")
const client = createClient({
    url: process.env.redis
});
client.on('error', err => console.log('Redis Client Error', err));


const {User} = require("../models/user.model")

const userRouter = express.Router();

userRouter.get("/", async(req,res)=>{
    try{
        const userID = req.cookies.userID;
        const user = await User.find({_id: userID});
        const users = await User.find();
        res.status(200).send({userDetail: user, message: users})
    }
    catch(err){
        console.log(err)
        res.status(500).send({message: "Something went wrong", err})
    }
})

userRouter.post("/login", async(req,res)=>{
    try{
        const userDetail = req.body;
        const user = await User.find({email:userDetail.email, userName:userDetail.userName})
        if (user.length>0){
            bcrypt.compare(userDetail.password, user[0].password, async(err,result)=>{
                if (result){
                    const token = jwt.sign({userID: user[0]._id}, process.env.secretKey, {
                        expiresIn: 60 //43200
                    })
                    const refreshToken = jwt.sign({userID: user[0]._id}, process.env.refreshSecret, {
                        expiresIn: 120 // 86400
                    })
                    res.cookie("userID", user[0]._id)
                    res.cookie("token", token)
                    res.cookie("refreshToken", refreshToken)
                    res.status(200).send({message: "Login Success", token, refreshToken})
                }
                else {
                    res.status(401).send({message: "Wrong Password", err})
                }
            })
        }
        else {
            res.status(401).send({message: "Please Register Your Self"})
        }
    }
    catch(err){
        console.log("Catch block")
        res.status(500).send({message: "Something went wrong", err})
    }
})

userRouter.post("/register", async(req,res)=>{
    try{
        const userDetail = req.body;
        const existingCheckEmail = await User.find({email:userDetail.email})
        const existingCheckUserName = await User.find({userName:userDetail.userName})
        if (existingCheckEmail.length > 0 || existingCheckUserName > 0){
            res.status(403).send({message: "User already exist With this email/user name"})
        }
        else {
            bcrypt.hash(userDetail.password, 4, async(err, hash)=>{
                if (err) {
                    console.log("Error while Hashing")
                    res.status(500).send({message: "Unable to hash the password"})
                }
                else {
                    userDetail.password = hash
                    const adding = new User(userDetail)
                    await adding.save()
                    res.status(200).send({message: "Register Success"})
                }
            })
        }
    }
    catch(err){
        console.log("Catch block")
        res.status(500).send({message: "Something went Wrong", err})
    }
})

userRouter.get("/refreshToken", async(req,res)=>{
    try{
        const refreshToken = req.cookies.refreshToken;
        if (refreshToken){
            jwt.verify(refreshToken, process.env.refreshSecret, async(err, decoded)=>{
                if (err){
                    console.log("Refresh Token verify Error -> "+err)
                    res.status(403).send({message: "Please Login"})
                }
                else{
                    const token = jwt.sign({userID: decoded.userID}, process.env.secretKey, {
                        expiresIn: 60 // 43200
                    })
                    res.cookie("token", token)
                    res.status(200).send({message: "Token Generated from RefreshToken", token})
                }
            })
        }
        else{
            res.status(403).send({message: "Please Login"})
        }
    }
    catch(err){
        console.log("Catch block")
        res.status(500).send({message: "Something went Wrong", err})
    }
})

userRouter.get("/logout", async(req,res)=>{
    const token = req.cookies.token;
    const refreshToken = req.cookies.refreshToken;

    // add some values to the Redis Set
    await client.sadd('logout_tokens', 'value1', 'value2', 'value3', (err, reply) => {
        if (err) {
            console.error(err);
        } else {
            console.log(reply);

            // calculate the Unix timestamp for the next day at 12 a.m.
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(0, 0, 0, 0);
            const unixTimestamp = Math.floor(tomorrow.getTime() / 1000);
            
            // set the expiration time for the Redis Set using EXPIREAT
            client.expireat('logout_tokens', unixTimestamp, (err, reply) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(reply);
                }
            });
        }
    });
    res.status(200).send({message: "Logout Successful"})
})


module.exports = {
    userRouter, client
}