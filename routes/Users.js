const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require("../models/User")

users.use(cors())

process.env.SECRET_KEY = 'secret'

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

users.post('/login', (req,res) => {
    User.findOne({
        email: req.body.email
        
    })
    .then(user => {
        if(user) {

            if(bcrypt.compareSync(req.body.password,user.password)){
                const payload = {
                    _id: user._id,
                    first_name: user.first_name,
                    last_name: users.last_name,
                    email: user.email
                }
                let token = jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                Response.json({token : token})
            }else{
                res.json({error: "User does not exist"})
            }
        }else{
            res.json({error: "User doesnot exist"})
        }
    })
    .catch(err => {
        res.send('error :' +err)
    })
})

module.exports = users
