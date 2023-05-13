var jwt = require('jsonwebtoken');
const fs = require("fs");
const {client}= require("../redis/redis");



const authenticate =  async (req, res, next) => {
    if(!req.headers.authorization){
        return res.send({msg:"Please Login Again"})
    }
    
    const token = req.headers.authorization.split(" ")[1];
    const tokenredis = await client.GET(`${token}`);
    console.log(token,tokenredis);
    
    if(!tokenredis || !token || token!==tokenredis){
       return res.send({msg:"Please Login Again"})
    }
    const blacklisteddata= await client.LRANGE("blacklist",0,-1);

    if(blacklisteddata.includes(token)){
        return res.send({msg:"Please Login Again"})
    }
   

    jwt.verify(token, process.env.token_key, function(err, decoded) {
            if(err){
                return res.send({msg:"Please Login Again"})
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