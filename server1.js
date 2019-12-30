var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var app = express();
var port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

const MONGODB_URI = 'mongodb://localhost:27017/test'
mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log("mongodb connected"))
    .catch(err => console.log(err));

var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port, () => {
    console.log("server is running on port :" + port)
})