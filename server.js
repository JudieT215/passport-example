const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.envPORT || 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/authentication');

app.list(PORT, () => {
  console.log('server listening on ' + PORT);
})
