
var express        = require('express');
var MongoClient    = require('mongodb').MongoClient;
var bodyParser     = require('body-parser');

var adminRouter = require("./routes");

var app   = express();

var port = 8000;

app.listen(port, () => {
  console.log('We are live on ' + port);
});

var dbconnection = require("./initiator");


app.use(dbconnection.getMongoConnection());
app.use(adminRouter);



