const express = require('express');
const Router = express.Router();
const passport = require('passport');
const User = require('./models/passport');
Router.post('/login', (req, res, next) => {

});

Router.post('/register', (req, res, next) => {
  User.register(new Account({username: req.body.username}), req.body.paddword, (err, user) => {
    if (err) {
      return res.render('error', {error: err})
    }
    passport.authenticate('local')(req, res, next) {
      res.redirect('/');
    }
  } )
})

module.exports = Router;
