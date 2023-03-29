const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config()

const {connection} = require("./Configs/db")

const app= express()
app.use(express.json());





app.listen(process.env.PORT,async ()=>{
    try{
        await connection;
        console.log("Connected to DB")
    }catch(error){
        console.log(error.message)
    }
})