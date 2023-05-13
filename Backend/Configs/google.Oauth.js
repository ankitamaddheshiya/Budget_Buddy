var passport = require("passport");
const { usermodel } = require("../Models/User.model");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();

const uuid = require("uuid").v4;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4500/user/auth/google/callback",
      
    },
    
    async function (accessToken, refreshToken, profile, cb) {
      if(profile._json.email_verified){
        const user = await usermodel.findOne({email:profile.emails[0].value})
        if(user) {
          return cb(null, user); 
        }
        const newuser = new usermodel({
          googleId: profile.id,
          fname: profile.displayName,
          email: profile.emails[0].value,
          password: uuid(),
          avatar: profile.photos[0].value,
        });
        await User.save();
        console.log(profile)
        return cb(null, newuser);  
      }
      
    }
  )
);

module.exports = {passport};