const express = require('express');
const db = require('../models');
const passport = require('../config/passport');
const router = express.Router();

//Sign up
router.post('/api/signup', async (req, res) => {

  try{
  console.log(req.body);
  var newUser = await db.User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
} catch (err) {
  console.log(err);
}
    res.json(newUser);
});

//Login
router.post('/api/login',
  passport.authenticate("local"),(req, res) => {
    console.log(req.user);
    res.json(req.user);
  });


module.exports = router;