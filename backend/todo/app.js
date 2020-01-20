const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const Joi = require('joi');

const db = require("./db");
var cors = require('cors')
const app = express();
app.use(cors())

// schema used for data validation 
const schema = Joi.object().keys({
    first_name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
    // password: Joi.string().required(),
    type: Joi.string().required(),

});

//You will use Joi to validate params, queries, and the body of requests. Joi, seating at the route level, basically check for correctness of the requests sent to the API. Only requests that are semantically correct reach the controllers of your application.

// parses json data sent to us by the user 
app.use(bodyParser.json());

//create
app.post('/post', (req, res) => {
    const collection = "logon";
    // Document to be inserted

    const userInput = {
        first_name: req.body.first_name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        type: req.body.type
    }


    Joi.validate(userInput, schema, (err, documents) => {

        // Validate document

        db.getDB().collection(collection).find({ email: req.body.email }, function(err, documents) {
            // if(err) {

            console.log(documents.email)
            if (documents.email == req.body.email || documents == null) {
                res.json({ message: ' User already exists' });
            }

            if (documents && documents != null) {

                console.log("Registered")
                db.getDB().collection(collection).insertOne(userInput, (err, documents) => {
                    if (err) {
                        const error = new Error("Failed to insert user into DB");
                    } else
                        res.json(documents);
                });
            }


        })

    });
});


// var a = '/products';
var b = '/vehicles';
var c = '/companies';
var d = '/producttypes';
var e = '/productbytypes';
var f = '/product';


// if (a) {
//     collection = "products"
//     call(a, collection)
// }
if (b) {
    collection = "vehicles"
    call(b, collection)
}
if (c) {
    collection = "companies"
    call(c, collection)
}
if (d) {
    collection = "types"
    call(d, collection)
}
if (e) {
    collection = "producttypes"
    call(e, collection)
}
if (f) {
    collection = "products"
    call(f, collection)
}
var t;

function call(t, collection) {
    // read
    app.get(t, (req, res) => {

        //   const collection = "products";
        db.getDB().collection(collection).find({}).toArray((err, documents) => {
            if (err)
                console.log(err);
            else {

                res.json(documents);
            }
        });
    });
}

app.get('/product/:p_name', (req, res) => {

    var p_name = req.params.p_name;
    const collection = "products";
    db.getDB().collection(collection).aggregate([{ $match: { 'p_name': p_name } }]).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {

            res.json(documents).toArray;
            //    console.log(JSON.stringify(res))
        }
    });
});

app.get('/productbytypes/:name', (req, res) => {

    var name = req.params.name;
    const collection = "producttypes";
    db.getDB().collection(collection).aggregate([{ $match: { 'name': name } }]).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {

            res.json(documents).toArray;
            //    console.log(JSON.stringify(res))
        }
    });
});

app.get('/companies/:name', (req, res) => {

    var name = req.params.name;
    const collection = "companies";
    db.getDB().collection(collection).aggregate([{ $match: { 'name': name } }]).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {

            res.json(documents).toArray;
            //    console.log(JSON.stringify(res))
        }
    });
});
app.get('/vehicles/:name', (req, res) => {

    var name = req.params.name;
    const collection = "vehicles";
    db.getDB().collection(collection).aggregate([{ $match: { 'name': name } }]).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {

            res.json(documents).toArray;
            //    console.log(JSON.stringify(res))
        }
    });
});

app.get('/productByVehicle/:name', (req, res) => {

    var name = req.params.name;
    const collection = "products";
    db.getDB().collection(collection).aggregate([{ $match: { 'v_name': name } }]).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {

            res.json(documents).toArray;
            //    console.log(JSON.stringify(res))
        }
    });
});

app.get('/pricelist-by-vehicle/:name', (req, res) => {

    var name = req.params.name;
    const collection = "products";
    db.getDB().collection(collection).aggregate([{ $match: { 'v_name': name } }]).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {

            res.json(documents).toArray;
            //    console.log(JSON.stringify(res))
        }
    });
});
app.get('/veh/:name', (req, res) => {

    var name = req.params.name;
    const collection = "vehicles";
    db.getDB().collection(collection).aggregate([{ $match: { 'v_name': name } }]).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {

            res.json(documents).toArray;
            //    console.log(JSON.stringify(res))
        }
    });
});

// Middleware for handling Error
// Sends Error Response Back to User
app.use((err, req, res, next) => {
    res.status(err.status).json({
        error: {
            message: err.message

        }

    });
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    req.header('Access-Controll-Allow-Orgin', '*');
    req.header(
        'Access-Controll-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});


db.connect((err) => {
    // If err unable to connect to database
    // End application
    if (err) {
        console.log('unable to connect to database');
        process.exit(1);
    }
    // Successfully connected to database
    // Start up our Express Application
    // And listen for Request
    else {
        app.listen(process.env.PORT || 5000, () => {
            console.log('connected to database, app listening on port 5000');

        });
    }
});