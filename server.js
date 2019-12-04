const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;


//Define middleware here 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


//Add routes, both API and view
app.use(routes);

//Connect to the Mongo DB
const db = require('./models/index');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/reactbloodlist';
mongoose.connect(MONGODB_URI);


//Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});