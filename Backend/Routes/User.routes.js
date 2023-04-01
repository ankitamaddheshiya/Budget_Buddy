const express = require("express");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const userRouter = express.Router();
const {usermodel} = require("../Models/User.model");
const {passport} = require("../Configs/google.Oauth")
const fs = require("fs")
const {client}= require("../redis/redis");
const { authenticate } = require("../Middlewares/authenticate");
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

             client.SET(`${token}`,token);
             client.EXPIRE(`${token}`, 86400);
        
        const {fname,lname} = isUser
        const user = {fname,lname,email}
        res.status(200).send({msg:"Login Successfull",token,ref_token,user})
    }
    catch(err){
        res.status(500).send(err.message)
    }
}
);



userRouter.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
  );
  
  // callback url after login with google
userRouter.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/login",
      session: false,
    }),
    function (req, res) {
      console.log(req.user);
      // token bhejna hai and then redirect karn hai
      res.redirect("/loginwelcome");
    }
  );

//   userRouter.get("/loginwelcome",(req,res)=>{
//         res.sendFile(path.join(__dirname,"../Frontend/Html/Landingpage.html"));
//   })

  //Logout
userRouter.post("/logout",authenticate,async (req, res) => {
    const token =  req.headers.authorization.split(" ")[1];
    const tokenredis = await client.GET(`${token}`);
    await client.RPUSH("blacklist",tokenredis);
    res.send("Logged out successfully");
})



// Profile edit 
userRouter.patch("/editprofile",authenticate,async(req,res)=>{
    const {fname,lname,mobile,avatar,dob,address,userid} = req.body;
    const _id=userid
    try{
        const userdata = await usermodel.findByIdAndUpdate(_id,{fname,lname,mobile,avatar,dob,address},{returnOriginal:false});
        res.send({msg:`Update Successfully`,userdata})
    }
    catch(e){
        res.send({msg:e.message})
    }   
});


module.exports={
    userRouter
}