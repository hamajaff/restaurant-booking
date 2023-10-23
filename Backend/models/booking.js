const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  numberOfPeople: Number,
  email: String,
  date: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
