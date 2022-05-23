const express = require('express')
const app = express();
const port = 3000 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
app.use(bodyParser.json());

//import Routes
const patientRoute = require('./routes/patient')
app.use('/',patientRoute);

const donorRoute = require('./routes/donor')
app.use('/',donorRoute);

const bloodRoute = require('./routes/blood')
app.use('/',bloodRoute);

const accountRoute = require('./routes/account')
app.use('/',accountRoute);

const agg = require('./routes/agg')
app.use('/',agg);

  //listen to server 
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  //connect to db
  mongoose.connect('mongodb+srv://hendkhaled:hendkhaled@cluster0.apl7v.mongodb.net/rest?retryWrites=true&w=majority' ,
   {useNewUrlParser: true ,useUnifiedTopology:true,});
   
   const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});