const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

const db = require("../models");

passport.use(new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    passReqToCallback : true
  },
  function(req, email, password, done) {
    db.User.findOne({
      where: {
        email: email,
      }
    }).then(function(user) {
      //if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password'});
      }
      return done(null, user, { message: 'you are logged in'});
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;