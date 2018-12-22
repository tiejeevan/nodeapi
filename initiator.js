
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;

const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'company';

var initiator={


    getMongoConnection:()=>{

        return(req,res,next)=>{

            MongoClient.connect(url, function(err, client) {
        
                assert.equal(null, err);
            
                console.log("Connected successfully to server");
              
                const db = client.db(dbName);
              
                console.log(client);
  
                req.mongo = {};

                req["mongo"] = client;
        
                next();
               
              });
        }
        
    },
        
}

module.exports = initiator;