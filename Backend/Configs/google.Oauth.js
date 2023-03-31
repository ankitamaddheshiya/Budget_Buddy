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
      callbackURL: "https://periwinkle-catfish-cuff.cyclic.app/user/auth/google/callback",
      scope: ["email", "profile"],
    },
    async function (accessToken, refreshToken, profile, cb) {
      const User = new usermodel({
        googleId: profile.id,
        fname: profile.displayName,
        email: profile.emails[0].value,
        password: uuid(),
        avatar: profile.photos[0].value,
      });
      console.log(profile)

      const isPresent = await usermodel.findOne({email:profile.emails[0].value}) 
      if(!isPresent) {
        await User.save();
      }
      return cb(null, User);
    }
  )
);

module.exports = {passport};