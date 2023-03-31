const redis= require("redis");
require("dotenv").config();

const client = redis.createClient({
    url:`redis://default:${process.env.pass}@redis-19330.c212.ap-south-1-1.ec2.cloud.redislabs.com:19330`
  })
  
    client.on("error", (err) => console.log(err, "ERROR in REDIS"));
  
     client.on("ready",()=>{
         console.log("connected to redis")
     });

     (
     async ()=>{
        await client.connect()
     }
     )()
    
     module.exports={
         client
     }