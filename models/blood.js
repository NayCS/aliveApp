const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bloodSchema = new Schema({
    glucose: { type: Number, required: true },
    ketone: { type: Number, required: true },
    gki: { type: Number, required: false },
    date: { type: Date, default: Date.now }
});

const Blood = mongoose.model("Blood", bloodSchema);

module.exports = Blood;