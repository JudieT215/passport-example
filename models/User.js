const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const User = new mongoose.Schema({
  username: {type: String};
  password: {type: String};
})

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
