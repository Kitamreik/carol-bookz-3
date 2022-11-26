const mongoose = require('mongoose');
// added in Code Along
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
// added in Code Along

const {Schema} = mongoose;
// 5-11
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  // 5-11
  googleId: {
    type: String,
  }
});

// added in Code Along
// have to add here so it can initialize
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// plugin --> connects the schema to mongoose before going in collection

const User = mongoose.model('User', userSchema);

// added in Code Along
passport.use(User.createStrategy());
// create strategy --> summon the strategy and configure it --> middleware within mongoose/MongoDB --> additional jobs

// attachment of special ID and track them, every movement after that
// FOR LOCAL VERSION
/*
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
*/ 
// login --> crumble cookies --> reveal the info --> NOT GOOD

// added in Code Along - 5-11
passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username, name: user.displayName });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});


// 5-11 Code Along - Google OAuth --> from the documentation [http://www.passportjs.org/packages/passport-google-oauth20/] - the Updating Code step in slides
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  // process.env. instead of GOOGLE
  callbackURL: "https://kit-class-bookstore.cyclic.app/auth/google/admin"

  // put in place of this --> "http://www.example.com/auth/google/callback"
},
// change profile to email
function(accessToken, refreshToken, email, cb) {
  User.findOrCreate({ googleId: email.id }, function (err, user) {
    return cb(err, user);
  });
}
));

module.exports = User;