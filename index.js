
var express        = require('express');
var MongoClient    = require('mongodb').MongoClient;
var bodyParser     = require('body-parser');

var adminRouter = require("./routes");

var app   = express();

var port = 8000;

app.listen(port, () => {
  console.log('We are live on ' + port);
});

app.use(adminRouter);


const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'company';

var sravan;

// Use connect method to connect to the server
// let mongooseConnection = return promis
getMongoConnection:async()=>{


let connection = await promiseofmongodb();

}
promiseofmongodb:()=>{

    return new promise((resolve,reject)=>{

        MongoClient.connect(url, function(err, client) {

            assert.equal(null, err);
          
            let sravan;
          
            console.log("Connected successfully to server");
          
            const db = client.db(dbName);
          
            console.log(client);

            resolve(client);
           
          });
    });

}


