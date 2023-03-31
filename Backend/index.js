const express = require("express");
const mongoose = require("mongoose");
const {client}= require("./redis/redis")
require("dotenv").config()
const cors = require("cors");
const {userRouter}= require("./Routes/User.routes")
const {incomeRouter} = require("./Routes/Income.routes")
const {expenseRouter} = require("./Routes/Expenses.routes");
const {connection} = require("./Configs/db")
const {authenticate}= require("./Middlewares/authenticate")

const app= express()
app.use(cors());
app.use(express.json());


app.use("/user",userRouter);
app.get("/",(req,res)=>{
    res.send("data....")
});
app.use(authenticate);
app.use("/income",incomeRouter)
app.use("/expense",expenseRouter)


app.listen(process.env.PORT,async ()=>{
    try{
        await connection;
        // await client.connect();
        console.log("Connected to DB")
    }catch(error){
        console.log(error.message)
    }
    console.log("running on PORT "+process.env.PORT)
})