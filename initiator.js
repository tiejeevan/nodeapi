
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;

const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'company';

var initiator={


    getMongoConnection:async(req,res,next)=>{
        
        let connection = await promiseofmongodb(req,res,next);
        req["mongo"] = connection;
        next();

    },
    promiseofmongodb:(req,res,next)=>{
        
            return new promise((resolve,reject)=>{
        
                MongoClient.connect(url, function(err, client) {
        
                    assert.equal(null, err);
                
                    console.log("Connected successfully to server");
                  
                    const db = client.db(dbName);
                  
                    console.log(client);
        
                    resolve(client);
                   
                  });
            });
        
        }
        
}

module.exports = initiator;