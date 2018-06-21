const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const app = express();
const PORT = process.envPORT || 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

const routes = require('routes/passport.js');
app.use(routes);



const User = require('./models/user');
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/authentication');

app.list(PORT, () => {
  console.log('server listening on ' + PORT);
})
