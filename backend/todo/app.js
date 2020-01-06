const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const Joi = require('joi');

const db = require("./db");
var cors = require('cors')
const app = express();
app.use(cors())

// schema used for data validation for our todo document
const schema = Joi.object().keys({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    type: Joi.string().required(),

});

//You will use Joi to validate params, queries, and the body of requests. Joi, seating at the route level, basically check for correctness of the requests sent to the API. Only requests that are semantically correct reach the controllers of your application.

// parses json data sent to us by the user 
app.use(bodyParser.json());

// app.get('/data',(req,res)=>{
//     // get all Todo documents within our todo collection
//     // send back to user as json
//     const collection = "datas";
//     db.getDB().collection(collection).find({}, {projection :{ _id: 0} }).toArray((err,documents)=>{
//         if(err)
//             console.log(err);
//         else{
//     //        db.getDB().collection(collection).find({},{_id:0});
//             res.json(documents);
//         }
//     });
// });


// // post
// app.post('/post', function (req, res) {
//     dbConn.then(function(db) {
//         delete req.body._id; // for safety reasons
//         db.collection('feedbacks').insertOne(req.body);
//     });    
//     res.send('Data received:\n' + JSON.stringify(req.body));
// });


//create
app.post('/post', (req, res) => {
    const collection = "logon";
    // Document to be inserted

    const userInput = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
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


// read
app.get('/product_init/id', (req, res) => {
    const collection = "product_init";
    db.getDB().collection(collection).findOne({ "p_name": "Air Dryer" }, function(err, documents) {
        if (err)
            console.log(err);
        else {
            //        db.getDB().collection(collection).find({},{_id:0});
            res.json(documents);
        }
    });
});



// read
app.get('/product_init', (req, res) => {
    const collection = "product_init";
    db.getDB().collection(collection).find({}, { projection: { _id: 0 } }).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            //        db.getDB().collection(collection).find({},{_id:0});
            res.json(documents);
        }
    });
});
// read
app.get('/product_init/vehicles', (req, res) => {
    // get all Todo documents within our todo collection
    // send back to user as json
    const collection = "vehicles";
    db.getDB().collection(collection).find({}, { projection: { _id: 0 } }).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            //        db.getDB().collection(collection).find({},{_id:0});
            res.json(documents);
        }
    });
}); // read
app.get('/product_init/companies', (req, res) => {
    // get all Todo documents within our todo collection
    // send back to user as json
    const collection = "companies";
    db.getDB().collection(collection).find({}, { projection: { _id: 0 } }).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            //        db.getDB().collection(collection).find({},{_id:0});
            res.json(documents);
        }
    });
});
app.get('/product_init/products', (req, res) => {
    // get all Todo documents within our todo collection
    // send back to user as json
    const collection = "products";
    db.getDB().collection(collection).find({}, { projection: { _id: 0 } }).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            //        db.getDB().collection(collection).find({},{_id:0});
            res.json(documents);
        }
    });
});
app.get('/product_init/producttypes', (req, res) => {
    // get all Todo documents within our todo collection
    // send back to user as json
    const collection = "types";
    db.getDB().collection(collection).find({}, { projection: { _id: 0 } }).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            //        db.getDB().collection(collection).find({},{_id:0});
            res.json(documents);
        }
    });
});
////////////////////////////////////////////
// app.get('/product_init',(req,res)=>{
//     // get all Todo documents within our todo collection
//     // send back to user as json
//     const collection = "product_init";
//     db.getDB().collection(collection).aggregate([{$match:{"p_name":"Air Compressor"}},{ $lookup: { from: "products", localField:"p_name", foreignField:"p_name", as:"details"}}]).toArray((err,documents)=>{
//         if(err)
//             console.log(err);
//         else{
//     //        db.getDB().collection(collection).find({},{_id:0});
//             res.json(documents);
//         //    console.log(JSON.stringify(res))
//         }
//     });
// });

app.get('/product_init/product/:p_name', (req, res) => {
    // get all Todo documents within our todo collection
    // send back to user as json
    var p_name = req.params.p_name;
    const collection = "products";
    db.getDB().collection(collection).aggregate([{ $match: { 'p_name': p_name } }]).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            //        db.getDB().collection(collection).find({},{_id:0});
            res.json(documents).toArray;
            //    console.log(JSON.stringify(res))
        }
    });
});

app.get('/product_init/productbytypes/:name', (req, res) => {
    // get all Todo documents within our todo collection
    // send back to user as json
    var name = req.params.name;
    const collection = "producttypes";
    db.getDB().collection(collection).aggregate([{ $match: { 'name': name } }]).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            //        db.getDB().collection(collection).find({},{_id:0});
            res.json(documents).toArray;
            //    console.log(JSON.stringify(res))
        }
    });
});

app.get('/product_init/companies/:name', (req, res) => {
    // get all Todo documents within our todo collection
    // send back to user as json
    var name = req.params.name;
    const collection = "companies";
    db.getDB().collection(collection).aggregate([{ $match: { 'name': name } }]).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            //        db.getDB().collection(collection).find({},{_id:0});
            res.json(documents).toArray;
            //    console.log(JSON.stringify(res))
        }
    });
});
app.get('/product_init/vehicles/:name', (req, res) => {
    // get all Todo documents within our todo collection
    // send back to user as json
    var name = req.params.name;
    const collection = "vehicles";
    db.getDB().collection(collection).aggregate([{ $match: { 'name': name } }]).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            //        db.getDB().collection(collection).find({},{_id:0});
            res.json(documents).toArray;
            //    console.log(JSON.stringify(res))
        }
    });
});

app.get('/product_init/productByVehicle/:name', (req, res) => {
    // get all Todo documents within our todo collection
    // send back to user as json
    var name = req.params.name;
    const collection = "products";
    db.getDB().collection(collection).aggregate([{ $match: { 'v_name': name } }]).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            //        db.getDB().collection(collection).find({},{_id:0});
            res.json(documents).toArray;
            //    console.log(JSON.stringify(res))
        }
    });
});

app.get('/product_init/pricelist-by-vehicle/:name', (req, res) => {
    // get all Todo documents within our todo collection
    // send back to user as json
    var name = req.params.name;
    const collection = "products";
    db.getDB().collection(collection).aggregate([{ $match: { 'v_name': name } }]).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            //        db.getDB().collection(collection).find({},{_id:0});
            res.json(documents).toArray;
            //    console.log(JSON.stringify(res))
        }
    });
});
app.get('/product_init/veh/:name', (req, res) => {
    // get all Todo documents within our todo collection
    // send back to user as json
    var name = req.params.name;
    const collection = "vehicles";
    db.getDB().collection(collection).aggregate([{ $match: { 'v_name': name } }]).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            //        db.getDB().collection(collection).find({},{_id:0});
            res.json(documents).toArray;
            //    console.log(JSON.stringify(res))
        }
    });
});




app.get('/product_init/search/:name', (req, res) => {
    // get all Todo documents within our todo collection
    // send back to user as json
    var name = req.params.name;
    const collection = "search";
    db.getDB().collection(collection).aggregate([{ $match: { 'name': { $regex: name } } }]).toArray((err, documents) => {
        if (err)
            console.log(err);
        else {
            //        db.getDB().collection(collection).find({},{_id:0});
            res.json(documents).toArray;
            //    console.log(JSON.stringify(res))
        }
    });
});

// dbo.collection('orders').aggregate([
//     { $lookup:
//        {
//          from: 'products',
//          localField: 'product_id',
//          foreignField: '_id',
//          as: 'orderdetails'
//        }
//      }
//     ]).toArray(function(err, res) {
//     if (err) throw err;
//     console.log(JSON.stringify(res));
//     db.close();
///////////////////////////////////////////

// Middleware for handling Error
// Sends Error Response Back to User
app.use((err, req, res, next) => {
    res.status(err.status).json({
        error: {
            message: err.message

        }

    });
})


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
        app.listen(3001, () => {
            console.log('connected to database, app listening on port 3001');

        });
    }
});