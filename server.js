const express = require("express");
let cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;


//Define middleware here 
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    //app.get('*', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    //});
}


//Add routes, both API and view
app.use(routes);

//Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Blood', {
    useNewUrlParser: true
});


//Configuration
//app.use(bodyParser.json());



//Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});