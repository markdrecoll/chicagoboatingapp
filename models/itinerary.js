const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itinerarySchema = new Schema({
    user: { type: Schema.ObjectId},
    harbor: {type: String},
    date: { type: String },
    text: { type: String, required: true }
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

module.exports = Itinerary;