const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require("../models/User")


users.use(cors())

process.env.SECRET_KEY = 'secret'

// read
users.get('/users', (req, res) => {
    User.collection.find({}).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            // res.json(documents);
            // res.status(200).json('successfullly got!!!')
            res.json({ status: 200, message: 'successfullly got!!!', documents });
        }
    });
});

users.post('/search', (req, res) => {
    const userData = {
        name: req.body.name,
    }

    var query = {};
    query.name = new RegExp(req.body.name, 'i');

    //console.log(req.body.word);
    //      console.log("1");
    User.find(query, function(err, words) {
        if (err) return res.status(400).send({ msg: " error during search DB" });
        console.log(words);
        return res.status(200).send(words);

    });


});



users.post('/register', (req, res) => {
    const today = new Date();
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        type: req.body.type,
        created: today
    }
    User.findOne({
            email: req.body.email
        })
        .then(user => {
            if (!user || user == null) {
                User.create(userData)
                    .then(user => {
                        res.json({ status: user.email + ' - Registered' })
                            // res.status(200).send(user.email);
                    })
                    .catch(err => {
                        console.log("catch1 ", err);
                        res.status(200).send('error1', +err);
                        // res.json('error', +err)
                    })
                    // console.log("not in enc");
            } else {
                res.json({ status: 200, message: 'User already exists' });
            }
        })
        .catch(err => {
            //console.log("errrorororor");
            // res.json('error', +err)
            res.status(403).send('error', +err);
        })
})

/////////////////////////////////////////////////////////////////////

// read
users.get('/product_init', (req, res) => {
    //   const collection = "product_init";
    User.collection.find({}).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            // res.json(documents);
            // res.status(200).json('successfullly got!!!')
            res.json({ status: 200, message: 'successfullly got!!!', documents });
        }
    });
});

//////////////////////////////////////////////////////////////////

users.post('/login', (req, res) => {
    User.findOne({
            email: req.body.email

        })
        .then(user => {
            if (user) {

                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        _id: user._id,
                        first_name: user.first_name,
                        last_name: users.last_name,
                        email: user.email
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    Response.json({ token: token })
                } else {
                    res.json({ error: "User does not exist" })
                }
            } else {
                res.json({ error: "User doesnot exist" })
            }
        })
        .catch(err => {
            res.send('error :' + err)
        })
})

module.exports = users