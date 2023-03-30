var jwt = require('jsonwebtoken');
const fs = require("fs");
const {client}= require("../redis/redis")


const authenticate =  async (req, res, next) => {
    const token = await client.GET("user_token");
    if(!token){
       return res.send("login again")
    }
    const blacklisteddata= await client.LRANGE("blacklist",0,-1);

    if(blacklisteddata.includes(token)){
       return  res.send("login again")
    }
   

    jwt.verify(token, process.env.token_key, function(err, decoded) {
            if(err){
                res.send("plz login first")
            }
            else{
                let data= req.body;
                let {userID}=decoded;
                data.userid=userID;
                next()
            }
      });

}




module.exports = {authenticate}