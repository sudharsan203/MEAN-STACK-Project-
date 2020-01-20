const MongoClient = require("mongodb").MongoClient;
const ObjectID = require('mongodb').ObjectID;
// name of our database
const dbname = "test";
// location of where our mongoDB database is located
const url = "mongodb+srv://khash:khash%40123@cluster0-dohjg.gcp.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
//const url = "10.192.33.227/";

// Options for mongoDB
const mongoOptions = { useNewUrlParser: true };

const state = {
    db: null
};

const connect = (cb) => {
    // if state is not NULL
    // Means we have connection already, call our cb
    if (state.db)
        cb();
    else {
        // attempt to get database connection
        MongoClient.connect(url, mongoOptions, (err, client) => {
            // unable to get database connection pass error to CB
            if (err)
                cb(err);
            // Successfully got our database connection
            // Set database connection and call CB
            else {
                state.db = client.db(dbname);
                cb();
            }
        });
    }
}

// returns OBJECTID object 
const getPrimaryKey = (_id) => {
    return ObjectID(_id);
}

// returns database connection 
const getDB = () => {
    return state.db;
}

module.exports = { getDB, connect, getPrimaryKey };