const mongoose = require("mongoose");
const db = require("../models");

//This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactbloodlist"
);

const bloodSeed = [
    {
        glucose: 75,
        ketone: 3,
        date: new Date(Date.now())
    },
    {
        glucose: 105,
        ketone: 0.3,
        date: new Date(Date.now())
    },
    {
        glucose: 99,
        ketone: .05,
        date: new Date(Date.now())
    },
    {
        glucose: 102,
        ketone: .02,
        date: new Date(Date.now())
    },
    {
        glucose: 82,
        ketone: 1,
        date: new Date(Date.now())
    },
    {
        glucose: 112,
        ketone: 0.2,
        date: new Date(Date.now())
    },
    {
        glucose: 69,
        ketone: 3.4,
        date: new Date(Date.now())
    },
    {
        glucose: 65,
        ketone: 4.9,
        date: new Date(Date.now())
    },
    {
        glucose: 73,
        ketone: 4.8,
        date: new Date(Date.now())
    },
    {
        glucose: 89,
        ketone: 5,
        date: new Date(Date.now())
    },

];

db.Blood
    .remove({})
    .then(() => db.Blood.collection.insertMany(bloodSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
